---
date: "2021-06-11"
title: "Adding new linux user"
slug: "/posts/Adding-new-linux-user"
---

After successfully connecting to ec2-user on AWS EC2, I want to create another linux user.

```
sudo adduser test-user
```

## Change user
```
sudo su - test-user
```

## Copy the public key over
In test-uuser:
```
mkdir ~/.ssh
chmod 700 ~/.ssh
echo "publickey" > ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

I got stuck after copying the public key over.
Turns out the small detail was the ssh directory and authorized keys permissions. Interesting! 

Please don't waste your life over this again!
