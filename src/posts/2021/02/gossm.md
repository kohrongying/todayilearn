---
date: "2021-02-10"
title: "gossm"
slug: "/posts/gossm"
---

Once again on ThoughtWorks' TechRadar, I came across [gossm](https://github.com/gjbae1212/gossm) which is a CLI tool to connect to ec2 instances via aws ssm session manager.

### Connecting to EC2
There are two main ways to connect to an ec2 instance
- ssh from your local computer (open port 22 ingress on ec2)
- start session from aws ssm session manager

### Why I like to use Session Manager
Using ssm Session Manager is favoured because
- No open inbound ports (port 22)
- No need to manage bastion hosts or SSH keys
- Can access from AWS console
- Centralized access control using IAM policies

### Gossm
Gossm is a tool to allow you to capitalize on aws's session manager but done through your local computer instead.

#### Requirements
The demo gif does look pretty promising. Just that there are certain requirements, like having to export AWS_PROFILE (or set your AWS access token and secret key) with the correct permissions
- ec2:DescribeInstances
- ssm:StartSession
- ssm:DescribeInstanceInformation

The EC2 must have `AmazonEC2RoleForSSM` policy attached to it as well as the aws ssm agent version of at least 2.3.672.0. 

All in all, it does seem like a cool tool to check out and use!

