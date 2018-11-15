---
title: How to interact with ECS using Python and Boto| UKCloud Ltd
description: How to use Python and Boto with ECS
services: cloud-storage
author: Paul Brown
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Interact with ECS using Python and Boto
toc_fullpath: How To/cs-how-use-ecs-python-boto.md
toc_mdlink: cs-how-use-ecs-python-boto.md
---

# How to interact with ECS using Python and Boto

## What is Boto?

Boto is a Python package that enables interaction with UKCloud's Cloud Storage and will run on any client supporting Python.

> [!NOTE]
> This guide uses Python 3 and Boto 3 and has not been tested on previous versions.

## Use cases

You can use Boto to:

- Automate Cloud Storage interactions, for example the creation and deletion of buckets, the uploading, downloading and deletion of objects.

- Use Cloud Storage as a target for backups or long-term file retention.

## Installing Python and Boto

1. Navigate to the [Python homepage](https://www.python.org/) and install the version of Python 3 relevant for your OS.

2. Install the Boto 3 package via Python's Package Manager,  Pip.

    ```Python
    pip install -U boto3
    ```

3. The following code creates a bucket, uploads a file and displays a percentage progress counter.

    ```Python
    #!/usr/bin/env python3
    import os
    import sys
    import threading
    import boto3
    
    session = boto3.session.Session()
    class ProgressPercentage(object):
        def __init__(self, filename):
            """ Transfer progress percentage class """
            self._filename = filename
            self._size = float(os.path.getsize(filename))
            self._seen_so_far = 0
            self._lock = threading.Lock()
        def __call__(self, bytes_amount):
            with self._lock:
                self._seen_so_far += bytes_amount
                percentage = (self._seen_so_far / self._size) * 100
                sys.stdout.write(
                    "\r%s  %s / %s  (%.2f%%)" % (
                        self._filename, self._seen_so_far, self._size,
                        percentage))
                sys.stdout.flush()
    
    ukc_ecs_s3 = session.client(
        service_name='s3',
        # The following can be obtained from the UKCloud portal
        aws_access_key_id='<access key or username>',
        # The following can be obtained from the UKCloud portal
        aws_secret_access_key='<secret key>',
        # The endpoint will be either https://cas.frn00006.ukcloud.com
        # or https://cas.frn00006.ukcloud.com
        endpoint_url='<endpoint>',
    )
    
    # Assign source file, bucket name and key name values to vars
    source_file = '<source file directory and filename>'
    bucket_name = '<destination bucket>'
    # key name can be any value, suggest filename
    key_name = '<object key name>'
    
    # create bucket
    ukc_ecs_s3.create_bucket(Bucket=bucket_name)
    
    # Upload file
    ukc_ecs_s3.upload_file(source_file, bucket_name, key_name, Callback=ProgressPercentage(source_file))
    ```

4. The following code will download a file and display a percentage progress counter.

    ```Python
    #!/usr/bin/env python3
    import os
    import sys
    import threading
    import boto3
    
    session = boto3.session.Session()
    
    # Transfer progress percentage class
    class ProgressPercentage(object):
        def __init__(self, filename):
            self._filename = filename
            self._size = float(os.path.getsize(filename))
            self._seen_so_far = 0
            self._lock = threading.Lock()
        def __call__(self, bytes_amount):
            with self._lock:
                self._seen_so_far += bytes_amount
                percentage = (self._seen_so_far / self._size) * 100
                sys.stdout.write(
                    "\r%s  %s / %s  (%.2f%%)" % (
                        self._filename, self._seen_so_far, self._size,
                        percentage))
                sys.stdout.flush()
    
    ukc_ecs_s3 = session.client(
        service_name='s3',
        # The following can be obtained from the UKCloud portal
        aws_access_key_id='<access key or username>',
        # The following can be obtained and reset if required from the UKCloud portal
        aws_secret_access_key='<secret key>',
        # The endpoint will be either https://cas.frn00006.ukcloud.com
        # or https://cas.frn00006.ukcloud.com
        endpoint_url='<endpoint>',
    )
    
    # Assign source file, bucket name and key name values to vars
    bucket_name = '<name of bucket>'
    key_name = '<object key name>'
    destination_file = '<destination directory and filename>'
    
    # Download file
    ukc_ecs_s3.download_file(bucket_name, key_name, destination_file, Callback=ProgressPercentage(key_name))
        ```
    
## Next steps

This guide has shown you how to use the Boto package for Python to interact with UKCloud Cloud Storage. For more information about how to use the service, see the following articles:

- [*Getting Started Guide for Cloud Storage*](cs-gs.md)

- [*How to view Cloud Storage information in the UKCloud Portal*](cs-how-view-info-portal.md)

- [*How to create a new Cloud Storage user in the UKCloud Portal*](cs-how-create-user.md)
 
- [*How to use file browsers with Cloud Storage*](cs-how-use-file-browsers.md)

- Cloud Storage Gateways
    - [*How to install CloudArray*](cs-how-install-cloudarray.md)
    - [*How to install the CIF-ECS Tool*](cs-how-install-cifs-ecs.md)



## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com/). Alternatively, you can contact us at products@ukcloud.com.
