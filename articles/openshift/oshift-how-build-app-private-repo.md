---
title: How to build an OpenShift application from a private Github repo | UKCloud Ltd
description: Shows how to build an OpenShift application where the source code is in a "private" github repository secured with an SSH Key Pair.
services: openshift
author: Andy Watkins

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: build an OpenShift application from a private Github repo
toc_fullpath: How To/oshift-how-build-app-private-repo.md
toc_mdlink: oshift-how-build-app-private-repo.md
---

# How to build an OpenShift application from a private Github repo

This guide assumes you have access to the command-line `oc` client, and have
logged in to your openshift instance with `oc login`

With a private Github repo, you want to ensure it stays hidden from prying
eyes, but you also want your Openshift app to be able to build from the repo.
The way around this is to use a 
[Deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys).


### Steps:
**First**
create an ssh key-pair (don't use your regular one, and make sure
you don't overwrite your regular one either!!)
 
```bash
ssh-keygen -t rsa -b 4096 -c "jbloggs@mycompany.com" -f my_github_deploy_key
```
This will generate both the private and public key files. The public one will
have a ".pub" suffix.



**Second**, add the public key to the repo as a **Deploy Key** (instructions
with screen-shots on 
[Github](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys))



**Third**, add the private key to your OpenShift instance. 
Note that the word "mygithubsecret" is the name of your secret, not a password.
 
```bash
oc secrets new-sshauth mygithubsecret --ssh-privatekey=./my_github_deploy_key
```



**Fourth**, attempt a build, which will fail, (but will enable you to add the
secret in the next step)
 
```bash
oc new-app git@github.com:UKCloud/my-private-repo-name.git
```

The build will fail, with a message "Fetch source failed"



**Fifth**, tell Openshift about your Deploy Key. The private key was added as
a 'secret' in the **Third step** above. Now add the secret to the "builder"
service account -- this will allow the builder to fetch the source properly.
 
```bash
oc secrets link builder mygithubsecret
```
 

**Sixth** add the secret to the buildConfig by editing the file using `oc edit`
 
```bash
oc edit bc/openshift-simple-monitor
```
 

Add the secret to the "source" section, e.g.
```yaml
source:
  git:
    uri: ssh://git@github.com/UKCloud/openshift-simple-monitor.git
  sourceSecret:
    name: mygithubsecret
```



**Seventh** and finally, start the build.
 
```bash
oc start-build openshift-simple-monitor
```
 

**Note** to generate the build config in a file for future use, use something
like:
 
```bash
oc new-app git@github.com:UKCloud/openshift-simple-monitor.git \
  --name openshift-simple-monitor -o json >> a.json
```
 

you can then create from the file with
```bash
oc create -f a.json
oc new-app --template <app-name>
```
 

### Sources and further reading:
 [blog.openshift.com](https://blog.openshift.com/using-ssh-key-for-s2i-builds/)
 and [blog.lucywyman.me](http://blog.lucywyman.me/deploy-private-git-repo-to-openshift.html).
