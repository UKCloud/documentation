---
title: How to build an OpenShift application from a private GitHub repository
description: Shows how to build an OpenShift application where the source code is in a private GitHub repository secured with an SSH key pair
services: openshift
author: awatkins
reviewer: gellner
lastreviewed: 05/01/2022

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Build an OpenShift application from a private GitHub repo
toc_fullpath: How To/oshift-how-build-app-private-repo.md
toc_mdlink: oshift-how-build-app-private-repo.md
---

<br>**UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation**

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# How to build an OpenShift application from a private GitHub repository

## Overview

With a private GitHub repo, you want to ensure it stays hidden from prying
eyes, but you also want your OpenShift application to be able to build from the repository.
The way around this is to use a
[deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys).

This guide assumes you have access to the command-line `oc` client, and have
logged in to your OpenShift cluster with `oc login`.


## Building an OpenShift application from a private GitHub repository
1. Create an ssh key-pair

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

- [blog.lucywyman.me](https://blog.lucywyman.me/deploy-private-git-repo-to-openshift.html)

- [Openshift documentation on source-clone-secrets](https://docs.openshift.com/container-platform/4.9/cicd/builds/creating-build-inputs.html)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
