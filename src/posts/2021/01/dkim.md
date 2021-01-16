---
date: "2021-01-14"
title: "dkim"
slug: "/posts/dkim"
---

DKIM stands for DomainKeys Identified Mail. It is an additional layer of security to authenticate the sender of the email you receive in your inbox comes from truly where they say they come from. 

- Senders send an email, signed with a cryptographic key. 
- Email provider receives the email, sees a DKIM Signature header field, uses a public key published on the sender's DNS record to decode the signature. This will determine if the message is authentic or have been modified by a third party while in transit.

So apparently this DKIM standard is optional, but if not enabled, you may see the yellow warning popup in your gmail, warning that the email is suspicious or that it __could__ be phishing.

AWS allows for easy DKIM. Add the public keys to your DNS records! Done. 
