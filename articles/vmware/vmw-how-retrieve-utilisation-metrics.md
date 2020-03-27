---
title: How to retrieve utilisation metrics for your virtual machines
description: This guide shows how you can use the vCloud API to retrieve current and historic utilisation metrics for a virtual machine
services: vmware
author: Steve Hall
reviewer:
lastreviewed: 18/07/2018 12:04:00
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Retrieve utilisation metrics for your virtual machines
toc_fullpath: How To/vmw-how-retrieve-utilisation-metrics.md
toc_mdlink: vmw-how-retrieve-utilisation-metrics.md
---

# How to retrieve utilisation metrics for your virtual machines

## Overview

You can use the vCloud API to retrieve current or historic utilisation metrics for a virtual machine (VM). You can retrieve the following utilisation metrics:

- Average CPU usage (%)

- Maximum CPU usage (%)

- Average CPU usage (MHz)

- Average memory usage (%)

- Average disk write speed (KBps)

- Average disk read speed (KBps)

- Amount of disk provisioned (KB)

- Amount of disk used (KB)

You can retrieve current utilisation metrics for VMs in all UKCloud regions; you can retrieve historic metrics for VMs in regions 5 and 6.

### Intended audience

To retrieve the utilisation metrics using the API, you must be logged into the vCloud API as an administrator, Catalog Author or vApp Author.

## Retrieving current utilisation metrics

Current metrics are values collected at the time the request is processed by the server. You can use the vCloud API to retrieve a list of current metric values, one for each category.

You can retrieve current utilisation metrics for VMs in all regions.

1. Log in to the vCloud API.

    For more information, see [How to access vCloud Director through the vCloud API](vmw-how-access-vcloud-api.md).

2. Send the following request to the vCloud API to retrieve the current utilisation metrics for the VM.

        GET https://<vcloud_api_url>/api/vApp/<vm_id>/metrics/current

    Parameter | Description | Example
    ----------|-------------|--------
    `vcloud_api_url` | The URL you use to access the vCloud API | `api.vcd.portal.skyscapecloud.com`
    `vm_id` | The GUID of the VM for which you want to retrieve utilisation metrics | `vm-12345678-aaaa-bbbb-cccc-1234567890ab`

    For example:

        GET https://api.vcd.portal.skyscapecloud.com/api/vApp/vm-12345678-aaaa-bbbb-cccc-1234567890ab/metrics/current

3. The vCloud API response includes each of the current metric values, for example:

        ```
        <CurrentUsage xmlns="http://www.vmware.com/vcloud/v1.5" ...>

            <Link
                rel="up"
                href="https://api.vcd.portal.skyscapecloud.com/api/vApp/vm-12345678-aaaa-bbbb-cccc-1234567890ab"
                type="application/vnd.vmware.vcloud.vm+xml">

            <Metric name="cpu.usage.average"
                unit="PERCENT"
                value="0.1"/>
            <Metric name="cpu.usage.maximum"
                unit="PERCENT"
                value="0.1"/>
            <Metric name="cpu.usagemhz.average"
                unit="MEGAHERTZ"
                value="2.0"/>
            <Metric name="mem.usage.average"
                unit="PERCENT"
                value="0.0"/>
            <Metric name="disk.write.average"
                unit="KILOBYTES_PER_SECOND"
                value="0.0"/>
            <Metric name="disk.read.average"
                unit="KILOBYTES_PER_SECOND"
                value="0.0"/>
            <Metric name="disk.provisioned.latest"
                unit="KILOBYTE"
                value="45410433"/>
            <Metric name="disk.used.latest"
                unit="KILOBYTE"
                value="111744.0"/>
        </CurrentUsage>
        ```

## Curl example

```
curl -i -XGET -H 'Accept: application/*+xml;version=5.6' -H 'x-vcloud-authorization: 1234567890abcdef1234567890abcdef' https://api.vcd.portal.skyscapecloud.com/api/vApp/vm-12345678-aaaa-bbbb-cccc-1234567890ab/metrics/current
```

## Retrieving historic utilisation metrics

Historic metrics are collected and stored for three months. You can retrieve historic metrics for the last 24 hours of metric history.

You can retrieve historic utilisation metrics for VMs in regions 5 and 6 only.

1. Log in to the vCloud API.

    For more information, see [How to access vCloud Director through the vCloud API](vmw-how-access-vcloud-api.md).

2. Send the following request to the vCloud API to retrieve the historic utilisation metrics for the VM.

        GET https://<vcloud_api_url>/api/vApp/<vm_id>/metrics/historic

    Parameter | Description | Example
    ----------|-------------|--------
    `vcloud_api_url` | The URL you use to access the vCloud API | `api.vcd.pod0000b.sys00005.portal.skyscapecloud.com`
    `vm_id` | The GUID of the VM for which you want to retrieve utilisation metrics | `vm-12345678-aaaa-bbbb-cccc-1234567890ab`

    For example:

        GET https://api.vcd.pod0000b.sys00005.portal.skyscapecloud.com/api/vApp/vm-12345678-aaaa-bbbb-cccc-1234567890ab/metrics/historic

3. The vCloud API response includes historic metric values for the last 24 hours, for example:

    ```
    <HistoricUsage xmlns="http://www.vmware.com/vcloud/v1.5" ...>

        <Link
            rel="up"
            href="https://api.vcd.pod0000b.sys00005.portal.skyscapecloud.com/api/vApp/vm-12345678-aaaa-bbbb-cccc-1234567890ab"
            type="application/vnd.vmware.vcloud.vm+xml">

        <MetricSeries
            expectedInterval="1800"
            name="disk.provisioned.latest"
            unit="KILOBYTE">
            <Sample
                timestamp="2013-12-02T20:00:00.000Z"
                value="875295.0"/>
            <Sample
                timestamp="2013-12-02T20:30:00.000Z"
                value="741388.0"/>
            <Sample ... />
        </MetricSeries>
        <MetricSeries
            expectedInterval="300"
            name="cpu.usagemhz.average"
            unit="MEGAHERTZ">
            <Sample
                timestamp="2013-12-02T20:03:20.000Z"
                value="505.0"/>
            <Sample
                timestamp="2013-12-02T20:06:40.000Z"
                value="122.93333333333334"/>
            <Sample ... />
        </MetricSeries>
        <MetricSeries
            expectedInterval="300"
            name="disk.read.average"
            unit="KILOBYTES_PER_SECOND">
            <Sample
                timestamp="2013-12-02T20:03:20.000Z
                value="208.7"/>
            <Sample
                timestamp="2013-12-02T20:06:40.000Z"
                value="0.0"/>
            <Sample ... />
        </MetricSeries>
        <MetricSeries
            expectedInterval="300"
            name="mem.usage.average"
            unit="PERCENT">
            <Sample
                timestamp="2013-12-02T20:03:00.000Z"
                value="55.26272895119407"/>
            <Sample
                timestamp="2013-12-02T20:06:40.000Z"
                value="47.19066823323568"/>
            <Sample ... />
        </MetricSeries>
        <MetricSeries
            expectedInterval="300"
            name="cpu.usage.average"
            unit="PERCENT">
            <Sample
                timestamp="2013-12-02T20:03:20.000Z"
                value="24.07100028991699"/>
            <Sample
                timestamp="2013-12-02T20:06:40.000Z"
                value="5.87066666285197"/>
            <Sample ... />
        </MetricSeries>
        <MetricSeries
            expectedInterval="1800"
            name="disk.used.latest"
            unit="KILOBYTE">
            <Sample
                timestamp="2013-12-02T20:00:00.000Z"
                value="262154.0"/>
            <Sample
                timestamp="2013-12-02T20:30:00.000Z"
                value="373779.0"/>
            <Sample ... />
        </MetricSeries>
        <MetricSeries
            expectedInterval="300"
            name="disk.write.average"
            unit="KILOBYTES_PER_SECOND">
            <Sample
                timestamp="2013-12-02T20:03:20.000Z"
                value="30.3"/>
            <Sample
                timestamp="2013-12-02T20:06:40.000Z"
                value="0.5333333333333333"/>
            <Sample ... />
        </MetricSeries>
        <MetricSeries
            expectedInterval="300"
            name="cpu.usage.maximum"
            unit="PERCENT">
            <Sample
                timestamp="2013-12-02T20:03:20.000Z"
                value="24.07100028991699"/>
            <Sample
                timestamp="2013-12-02T20:06:40.000Z"
                value="5.87066666285197"/>
            <Sample ... />
        </MetricSeries>
    </HistoricUsage/>
    ```

## Curl example

```
curl -i -XGET -H 'Accept: application/*+xml;version=5.6' -H 'x-vcloud-authorization: 1234567890abcdef1234567890abcdef' https://api.vcd.pod0000b.sys00005.portal.skyscapecloud.com/api/vApp/vm-12345678-aaaa-bbbb-cccc-1234567890ab/metrics/historic
```

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
