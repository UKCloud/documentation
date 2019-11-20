---
title: How to build an OpenShift application from a private GitHub repository | UKCloud Ltd
description: Shows how to build an OpenShift application where the source code is in a private GitHub repository secured with an SSH key pair
services: OpenShift
author: Andy Watkins
reviewer: George Smith
lastreviewed: 20/11/2019 16:51:00

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Build an OpenShift application from a private GitHub repo
toc_fullpath: How To/oshift-how-build-app-private-repo.md
toc_mdlink: oshift-how-build-app-private-repo.md
---

# How to build an OpenShift application from a private GitHub repository

## Overview

With a private GitHub repo, you want to ensure it stays hidden from prying
eyes, but you also want your OpenShift application to be able to build from the repository.
The way around this is to use a 
[deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys).

This guide assumes you have access to the command-line `oc` client, and have
logged in to your OpenShift cluster with `oc login`.


## Building an OpenShift application from a private GitHub repository
1. Create a ssh key-pair

    > [!NOTE]
    > Don't use your regular one, and make sure you don't overwrite your regular one either.
     
    ```bash
    ssh-keygen -t rsa -b 4096 -c "jbloggs@example.com" -f my_GitHub_deploy_key
    ```
    
    This will generate both the private and public key files. The public one will
    have a `.pub` suffix.

2. Add the public key to the repository as a **Deploy key** (instructions
    with screenshots on
    [GitHub](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys)).
    
3. Add the private key to your OpenShift cluster as a secret.
    
    > [!NOTE] 
    > the word `myGitHubsecret` below is the name of your secret, not a password.
     
    ```bash
    oc secrets new-sshauth myGitHubsecret --ssh-privatekey=./my_GitHub_deploy_key
    ```

4. Attempt a build, which will fail, but will enable you to add the
    secret in the next step.
     
    ```bash
    oc new-app git@github.com:UKCloud/my-private-repo-name.git \
         --name my-app-name
    ```
    
    The build will fail, with a message "Fetch source failed".

5. Link your deploy key to your service account
    
    The private key was added as a 'secret' in **Step 3** above. Now add the secret to the `builder`
    service account -- this will allow the builder to fetch the source properly.
     
    ```bash
    oc secrets link builder myGitHubsecret
    ```

6. Add the secret to the build by editing the `buildConfig` using `oc edit`.
 
    ```bash
    oc edit bc/my-app-name
    ``` 
    
    Within the editor, add the secret to the `source` section, for example:
    
    ```yaml
    source:
      git:
        uri: ssh://git@github.com/UKCloud/my-private-repo-name.git
      sourceSecret:
        name: myGitHubsecret
    ```
7. Start the build.

    ```bash
    oc start-build my-app-name
    ```

## Generating a buildConfig in a file for future use.
This is optional.

To generate the `buildConfig` in a file for future use, use the `-o` flag
 to `oc new-app`, like this:

```bash
oc new-app git@github.com:UKCloud/my-private-repo-name.git \
  --name my-app-name -o json >> buildConfigDefinition.json
```

you can then create from the file with:

```bash
oc create -f buildConfigDefinition.json
oc new-app --template <app-name> 
```

## Sources and further reading

- [blog.openshift.com](https://blog.openshift.com/using-ssh-key-for-s2i-builds/)

- [blog.lucywyman.me](http://blog.lucywyman.me/deploy-private-git-repo-to-openshift.html)

- [Openshift documentation on source-clone-secrets](https://docs.openshift.com/container-platform/latest/dev_guide/builds/build_inputs.html#source-clone-secrets)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
