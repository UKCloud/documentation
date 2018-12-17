---
title: How to publish application routes to multiple networks | UKCloud Ltd
description: Describes the process and commands required to publish routes to different external networks available from an OpenShift cluster.
services: openshift
author: Steve Mulholland
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Publish application routes to multiple external networks
toc_fullpath: How To/oshift-how-publish-routes-on-multiple-networks.md
toc_mdlink: oshift-how-publish-routes-on-multiple-networks.md
---

# How to publish application routes to multiple networks

## Overview

This article provides instructions on how to make use of multiple external networks from within an OpenShift cluster. If you have requested an OpenShift cluster with multple networks from UKCloud you will have multiple data planes - usually one for the internet and one for the community network you’ve requested be added to your deployment. Building applications that listen on these networks is relatively straight forward, but requires some specific configuration to be put in place on your application routes. This guide should help explain how you go about exposing your application on the relevant networks.

### Intended audience

To complete the steps in this guide you must have access to and a working knowledge of `oc`, the OpenShift command-line client (CLI). For more information, see OpenShift's [*Get Started with the CLI*](https://docs.openshift.com/container-platform/3.9/cli_reference/get_started_cli.html).


### High level overview

Firstly an explanation of what gets deployed. The cluster will have frontend loadbalancers that sit outside OpenShift that essentially do TCP passthrough of incoming traffic to the OpenShift routers deployed inside your cluster. As a cluster admin you can see the OpenShift routers viewing the ‘default' project. You will also have another set of routers that run on the community network facing nodes that provide termination of inbound traffic from the community network.

![high-level overview of inbound data flows](images/oshift-sharding-network-flows.png)

The three scenarios shown in the above diagram are as follows:

1. Traffic from the internet to application-1 (blue lines)
2. Traffic from the internet and a community network to application-2 (green and red lines)
3. Traffic from a community network to application-3 only (purple lines)

We'll be using some basic example applications to demonstrate publishing routes in each of these three application scenarios.

###  

First I'll create a project called routersharding and the 3 applications to demonstrate with.

```
$ oc new-project routersharding
Now using project "routersharding" on server "https://console.1-1-209-f44e8f:8443".
 
$ oc new-app centos/ruby-22-centos7~https://github.com/openshift/ruby-ex.git --name=application-a
 
$ oc new-app centos/ruby-22-centos7~https://github.com/openshift/ruby-ex.git --name=application-b
 
$ oc new-app centos/ruby-22-centos7~https://github.com/openshift/ruby-ex.git --name=application-c
 
$ oc get svc
NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
application-a   ClusterIP   172.30.144.215   <none>        8080/TCP   1m
application-b   ClusterIP   172.30.122.177   <none>        8080/TCP   1m
application-c   ClusterIP   172.30.247.162   <none>        8080/TCP   1m
 
$ oc expose svc application-a
route "application-a" exposed
$ oc get routes
NAME            HOST/PORT                                                         PATH      SERVICES        PORT       TERMINATION   WILDCARD
application-a   application-a-routersharding.cnap-demo.frn00006.cna.ukcloud.com             application-a   8080-tcp                 None
```

Now to see that your route has been published you can describe the route and see where its been exposed or you can review the routes in the default router by opening a session to the router pod and reviewing the configuration:

Find a router pod - in this case labelled `router-<buildno>-<uniqueid>`

```
$ oc project default
Now using project "default" on server "https://console.1-1-209-f44e8f:8443".
 
$ oc get pods
NAME                       READY     STATUS    RESTARTS   AGE
docker-registry-1-466xv    1/1       Running   0          16h
registry-console-2-bff2q   1/1       Running   0          18h
router-4-bjqz2             1/1       Running   0          8h
router-4-q5g6g             1/1       Running   0          8h
router-secondary-2-f2p8z   1/1       Running   0          1d
router-secondary-2-nr2lm   1/1       Running   0          15d
```

Remotely launch an interactive shell in a router and look at routes json file to see our route is published

```
$ oc rsh router-4-bjqz2
sh-4.2$ cat /var/lib/haproxy/router/routes.json | grep application-a-routersharding
    "Host": "application-a-routersharding.cnap-demo.frn00006.cna.ukcloud.com",
``` 

Similarly we can see that no routes are currently published on the router-secondary pods

```
$ oc get pods
NAME                       READY     STATUS    RESTARTS   AGE
docker-registry-1-466xv    1/1       Running   0          1h
registry-console-2-bff2q   1/1       Running   0          3h
router-1-6fzkh             1/1       Running   0          1h
router-1-pzjrj             1/1       Running   0          50d
router-secondary-2-f2p8z   1/1       Running   0          1d
router-secondary-2-nr2lm   1/1       Running   0          15d
 
$ oc rsh router-secondary-2-f2p8z
sh-4.2$ cat /var/lib/haproxy/router/routes.json
{}
```

So that shows the basic route is now published - which fulfils the application 1 scenario shown in the diagram above. In order to make it appear on the secondary router and achieve the scenario of application 2 we need to label the route appropriately so that its is also exposed on the router-secondary pods. By default we setup the secondary routers with a label based route selector of `"router=secondary"`. 

Here we see the route selector label setup on the secondary router - this indicates that this route will publish routes that are labelled with `"router=secondary"`

```
$ oc describe dc router-secondary | grep ROUTE_LABELS
      ROUTE_LABELS:                router=secondary
``` 

Now we need to switch back to our application project and make the changes to our application b to meet scenario 2

```
$ oc project routersharding
Now using project "routersharding" on server "https://console.1-1-209-f44e8f:8443".
```
 
First we expose the route on the default router as before

```
$ oc expose svc application-b
route "application-b" exposed
# we can apply the label to expose our route on the secondary router with the following command
$ oc label route application-b "router=secondary"
route "application-b" labeled
``` 

By describing the route we can see it has been exposed on both routers now (see "exposed on" lines below)

```
$ oc describe route application-b
Name:           application-b
Namespace:      routersharding
Created:        3 minutes ago
Labels:         app=application-b
            router=secondary
Annotations:        openshift.io/host.generated=true
Requested Host:     application-b-routersharding.cnap-demo.frn00006.cna.ukcloud.com
              exposed on router router 3 minutes ago
              exposed on router router-secondary 2 minutes ago
Path:           <none>
TLS Termination:    <none>
Insecure Policy:    <none>
Endpoint Port:      8080-tcp
Service:    application-b
Weight:     100 (100%)
Endpoints:  10.128.4.24:8080
```

Reviewing the routes on the router-secondary pods as before also shows our route now exposed there

```
$ oc rsh router-secondary-2-f2p8z
sh-4.2$ cat /var/lib/haproxy/router/routes.json
{
  "routersharding:application-b": {
    "Name": "application-b",
    "Namespace": "routersharding",
    "Host": "application-b-routersharding.cnap-demo.frn00006.cna.ukcloud.com",
    "Path": "",
    "TLSTermination": "",
    "Certificates": null,
    "VerifyServiceHostname": false,
    "Status": "saved",
    "PreferPort": "8080-tcp",
    "InsecureEdgeTerminationPolicy": "",
    "RoutingKeyName": "8647b1a7d5f913923a2eae0e1d02df09",
    "IsWildcard": false,
    "Annotations": {
      "openshift.io/host.generated": "true"
    },
    "ServiceUnits": {
      "routersharding/application-b": 100
    },
    "ServiceUnitNames": {
      "routersharding/application-b": 256
    },
    "ActiveServiceUnits": 1,
    "ActiveEndpoints": 1
  }
}
```

The final scenario of application 3 requires modification of the original routers to ensure they don’t select routes with a specific label (by default they expose all of the routes we expose) - I’ve recreated the same application in a new called test-project1 to demonstrate this


First we edit the existing default router to tell it not to select routes that have a label of `isolated=true`

```
$ oc project default
Now using project "default" on server "https://console.1-1-209-f44e8f:8443".
 
$ oc set env dc/router ROUTE_LABELS='isolated != true'
deploymentconfig "router” updated
```
 
We can now create a new basic route with that label and see that it doesn’t appear on any router

```
$ oc expose svc application-c --labels="isolated=true"
route "application-c" exposed
 
$ oc describe route application-c
Name:           application-c
Namespace:      routersharding
Created:        19 seconds ago
Labels:         isolated=true
Annotations:        openshift.io/host.generated=true
Requested Host:     application-c-routersharding.cnap-demo.frn00006.cna.ukcloud.com
Path:           <none>
TLS Termination:    <none>
Insecure Policy:    <none>
Endpoint Port:      8080-tcp
 
Service:    application-c
Weight:     100 (100%)
Endpoints:  10.129.2.20:8080
```
 
Notice that this doesn’t appear to be exposed on any routers - we can check this on the routers quickly as we have previously

```
$ oc project default
Now using project "default" on server "https://console.1-1-209-f44e8f:8443".
$ oc rsh router-4-bjqz2
sh-4.2$ cat /var/lib/haproxy/router/routes.json | grep application-c-routersharding
<no results>
```
 
Similarly its not appearing on our secondary router either:

```
$ oc rsh router-secondary-2-f2p8z
sh-4.2$ cat /var/lib/haproxy/router/routes.json | grep application-c-routersharding
<no results>
```
 
Now we can just expose this route on the secondary routers by tagging it with the appropriate label for those routers

```
$ oc project routersharding
Now using project "routersharding" on server "https://console.1-1-209-f44e8f:8443".
 
$ oc label route application-c  "router=secondary"
route "application-c" labeled
 
$ oc describe route application-c
Name:           application-c
Namespace:      routersharding
Created:        3 minutes ago
Labels:         isolated=true
            router=secondary
Annotations:        openshift.io/host.generated=true
Requested Host:     application-c-routersharding.cnap-demo.frn00006.cna.ukcloud.com
              exposed on router router-secondary 4 seconds ago
Path:           <none>
TLS Termination:    <none>
Insecure Policy:    <none>
Endpoint Port:      8080-tcp
 
Service:    application-c
Weight:     100 (100%)
Endpoints:  10.129.2.20:8080
# notice how this route now is showing as exposed on router-secondary. We can verify this as before.
$ oc project default
Now using project "default" on server "https://console.1-1-209-f44e8f:8443".
$ oc rsh router-secondary-2-f2p8z
$ oc rsh router-secondary-2-f2p8z
sh-4.2$ cat /var/lib/haproxy/router/routes.json
{
  "routersharding:application-b": {
    "Name": "application-b",
    "Namespace": "routersharding",
    "Host": "application-b-routersharding.cnap-demo.frn00006.cna.ukcloud.com",
    "Path": "",
    "TLSTermination": "",
    "Certificates": null,
    "VerifyServiceHostname": false,
    "Status": "saved",
    "PreferPort": "8080-tcp",
    "InsecureEdgeTerminationPolicy": "",
    "RoutingKeyName": "8647b1a7d5f913923a2eae0e1d02df09",
    "IsWildcard": false,
    "Annotations": {
      "openshift.io/host.generated": "true"
    },
    "ServiceUnits": {
      "routersharding/application-b": 100
    },
    "ServiceUnitNames": {
      "routersharding/application-b": 256
    },
    "ActiveServiceUnits": 1,
    "ActiveEndpoints": 1
  },
  "routersharding:application-c": {
    "Name": "application-c",
    "Namespace": "routersharding",
    "Host": "application-c-routersharding.cnap-demo.frn00006.cna.ukcloud.com",
    "Path": "",
    "TLSTermination": "",
    "Certificates": null,
    "VerifyServiceHostname": false,
    "Status": "",
    "PreferPort": "8080-tcp",
    "InsecureEdgeTerminationPolicy": "",
    "RoutingKeyName": "187190814c4acaea9156fd0ca476bd4f",
    "IsWildcard": false,
    "Annotations": {
      "openshift.io/host.generated": "true"
    },
    "ServiceUnits": {
      "routersharding/application-c": 100
    },
    "ServiceUnitNames": null,
    "ActiveServiceUnits": 1,
    "ActiveEndpoints": 0
  }
}
```

The above shows both the routes we’ve created in this demo now on router-secondary.

## Further reading

OpenShift documentation on Router Sharding: https://docs.openshift.com/container-platform/3.9/architecture/networking/routes.html#router-sharding

OpnShift blog post on Router Sharding: https://blog.openshift.com/openshift-router-sharding-for-production-and-development-traffic/

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
