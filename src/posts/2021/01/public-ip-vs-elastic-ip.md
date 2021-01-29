---
date: "2021-01-29"
title: "public ip vs elastic ip"
slug: "/posts/public-ip-vs-elastic-ip"
---

A server launched in a public subnet could be assigned a public ip. A public ip is what the internet identifies your server as. You need a public ip in order to connect to the Internet. In AWS, you need 3 things to connect to the Itnernet.
1) EC2 Launched in a public subnet
2) EC2 with public ip assigned
3) Internet Gatway as 0.0.0.0/0 route in said public subnet.

Then what is an elastic IP?

The ironic thing was - I was literally figuring it out then something happened when the EC2. When a public server is rebooted, the public ip assigned to it previously changes. The reason is because public ip is not static. Public IP is assigned to your instance from AWS's pool of IPv4 addresses. When your instance is stopped/rebooted, it is disassociated from your instance and released back into the pool. 

Elastic IPs are however static.

Elastic IPs are allocated to your AWS account and it is yours until you decide to release it. It is static, unique and one of a kind (I wanna be an elastic ip! lol.)

