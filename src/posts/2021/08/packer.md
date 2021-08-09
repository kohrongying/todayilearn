---
date: "2021-08-09"
title: "packer"
slug: "/posts/packer"
---

I found out about a configuration tool called Packer recently. Even though it has been released for a few years already. Created by the same parent as Terraform, Packer also makes use of the hcl configuration language and is declarative in style.

The main pain point Packer aims to resolve is the automation of image builds. That actually comes in handy for the current project I'm doing. I needed to create a specific AMI that contains certain packages (simplest use case).

## The syntax
```hcl
packer {
  required_plugins {
    amazon = {
      version = ">= 0.0.2"
      source  = "github.com/hashicorp/amazon"
    }
  }
}

variable "ami_prefix" {
  type    = string
  default = "sftp"
}

locals {
  timestamp = regex_replace(timestamp(), "[- TZ:]", "")
}

source "amazon-ebs" "rhel" {
  ami_name      = "${var.ami_prefix}-${local.timestamp}"
  instance_type = "t2.micro"
  region        = "ap-southeast-1"
  source_ami_filter {
    filters = {
      name                = "RHEL_HA-8.4.0_HVM*"
      root-device-type    = "ebs"
      virtualization-type = "hvm"
    }
    most_recent = true
    owners      = ["309956199498"]
  }
  ssh_username = "ec2-user"
}

build {
  name = "build-sftp"
  sources = [
    "source.amazon-ebs.rhel"
  ]
  provisioner "shell" {
    inline = [
      "echo Installing nfs-utils and unzip",
      "sudo yum update -y",
      "sudo yum install -y nfs-utils unzip",
    ]
  }
  provisioner "shell" {
    inline = [
      "echo Installing jq",
      "curl https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 -o jq",
      "chmod +x ./jq",
      "cp jq /usr/bin",
    ]
  }
  provisioner "shell" {
    inline = [
      "echo uninstalling awscliv1",
      "sudo rm /usr/local/bin/aws",
      "sudo rm /usr/local/bin/aws_completer",
      "sudo rm -rf /usr/local/aws-cli",
      "curl https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip -o awscliv2.zip",
      "unzip awscliv2.zip",
      "sudo ./aws/install",
    ]
  }
}
```
So the syntax is similar to writing Terraform. Define your config package first, and the source followed by the build. 

The source block will contain details regarding the server (instance type, base image ami, region, ssh_username), while the build block will be where you configure your install scripts. 

## Commands
```bash
packer validate .
packer fmt . 
packer init. 
packer build aws.pkr.hcl
```
Firstly, we have to run the initialize command. Helper functions like format and validate help to ensure your syntax is right lest you need to terminate your build due to syntax errors lol. 

When you run packer build, it will start to generate your temporary instance. It created the instance in the default VPC of my AWS account, allowing with other temporary resources like temporary ssh key and temporary security group.

## Credentials
I needed to supply AWS credentials. I created an AWS IAM user with a specific set of IAM permissions required for packer to create the instance/security group/key pair then destroy it. Then save the IAM user's access id and secret access key using `aws configure --profile <name>` and `export AWS_PROFILE=name`. 

It worked perfectly on the first try.

However it can get quite dicey when you try to install things without knowing if certain packages already exist. Eg. I tried to wget something but realised that wget was not installed on the machine. The build terminated. 

Perhaps it is better to set it up manually and note down all the steps. Then packer can be used to keep track of that configuration for future steps. 


