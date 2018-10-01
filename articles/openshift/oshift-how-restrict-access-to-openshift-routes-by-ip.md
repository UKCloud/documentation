---
title: UKCloud Knowledge Centre article about whitelisting public IP's on your openshift routes | UKCloud Ltd
description: Restrict access to openshift routes by public IP[s]
services: openshift
author: Mudasar Hussain
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: restrict access to openshift routes by public IP[s]
toc_fullpath: How To/restricting-access-to-openshift-routes-by-ip.md
toc_mdlink: oshift-how-restrict-access-to-openshift-routes-by-ip.md
---

# How to restrict access to a route in openshift by IP[s] address

## Overview

This knowledge centre article explains how openshift customers can restrict access to the routes they create to their deployed services by IP[s] addresses.

### Intended audience

Openshift developers who are looking to secure exposed routes of application by IP[s]

### Bulleted lists

  - Create and expose a route in the usual manner. Now you must add a annotation to the route along with the IP[s] that you would like to whitelist to be able to access the route. 

oc annotate route <name> haproxy.router.openshift.io/ip_whitelist=<ip_address>

> [!IMPORTANT]
> Please note that you must do this for every route that you wish to apply the whitelisting to.

  - If you would like to only allow a single IP address through to the route then you may do the following:-
oc annotate route myroute haproxy.router.openshift.io/ip_whitelist=192.168.1.10


  - If you would like to allow several IP's than you just seperate the IP's by a space like this:-
oc annotate route myroute haproxy.router.openshift.io/ip_whitelist=192.168.1.10 192.168.1.11 192.168.1.12

  - If you would like to allow an IP CIDR then you can declare it like this:-
oc annotate route myroute haproxy.router.openshift.io/ip_whitelist=192.168.1.10/24

  - If you would like to allow a mix of IP addresses and CIDR of a network, than you could do that by something like this:-
oc annotate route myroute haproxy.router.openshift.io/ip_whitelist=192.168.1.10 180.5.61.153 192.168.1.0/24 10.0.0.0/8

## Links to web pages

For further infomation please see the openshift doc's here:-

[Openshift Docs](https://docs.openshift.com/container-platform/3.9/architecture/networking/routes.html)


## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.