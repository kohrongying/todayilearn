---
date: "2021-04-28"
title: "windows patching with puppet"
slug: "/posts/windows-patching-with-puppet"
---

Naive me has been using a WSUS server to patch a Windows server in a private subnet as documented [here](https://aws.amazon.com/blogs/mt/how-to-patch-windows-ec2-instances-in-private-subnets-using-aws-systems-manager/).

### When it comes to Patch Manager
The Windows Server needs to be able to reach the `Windows Update API` and/or Microsoft Windows Update site. If the instance is in a private subnet:
1) Use NAT Gateway in the private subnet
2) Use a proxy to reach Windows Update site 
3) Configure instance to pull updates from WSUS server

Technically, we tried 2) but not sure why it did not work. If we are not using Patch Manager, there are definitely different ways to go about patching the server.

### Alternative ways to patching Windows
#### Upload required patches to S3 
1. Find required updates from [Microsoft](https://msrc.microsoft.com/update-guide). Filter based on Severity. 
- Alternatively, query the [Microsoft Update Catalog](https://www.catalog.update.microsoft.com/Search.aspx?q=KB5001330) based on the patch number.
2. Download necessary patches based on the Windows Version and system. (RY: Wow, its a .cab file)
3. Uplaod the cab files to S3.
4. In the instance, pull the patches from S3
5. Run the commands to install them:
- Rename file to KBnumber.сab (for example KB3176931.Cab)
- Copy to folder C:\
- Run command-prompt as admin.
- Enter the command `DISM.exe /Online /Add-Package /PackagePath:c:\KBnumber.cab`
As documented [here](https://thewincentral.com/how-to-install-cab-files-on-windows-10-for-cumulative-updates/)

#### Use Puppet 
After doing more research on Puppet, I realise I mixed up Puppet with Puppeteer lol.

![img](https://puppet.com/docs/puppet/7.6/puppet_run.png)

> Write infrastructure code in Puppet's Domain-Specific Language (DSL) — Puppet Code. Puppet does this through Puppet primary server and a Puppet agent. The Puppet primary server is the server that stores the code that defines your desired state. The Puppet agent translates your code into commands and then executes it on the systems you specify, in what is called a Puppet run.

That will mean we require a Puppet primary server. But the good thing is that this server can be used to manage a variety of servers of different OS and systems. 


