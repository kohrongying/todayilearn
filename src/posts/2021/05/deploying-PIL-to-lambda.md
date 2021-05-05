---
date: "2021-05-05"
title: "deploying PIL to lambda"
slug: "/posts/deploying-PIL-to-lambda"
---

So, I've been building some serverless functions. The serverless model on AWS works great:
- Create a resource and method on API Gateway
- Use a LAMBDA PROXY as the Integration type
- Deploy code to lambda and dependencies as a lambda layer
- Use APIGW Stage variables and lambda alias to aid in CD
- Access your method via the endpoint after deploying the gateway

I ran into a minor issue while trying to deploy PIL (the imaging Python library) as a lambda layer. I was met with this error multiple times:
```
Unable to import module 'lambda_function': cannot import name '_imaging' from 'PIL'
```

## The Solution
[Reference](https://aws.amazon.com/premiumsupport/knowledge-center/lambda-layer-simulated-docker/)
```bash
pip freeze > requirements.txt
mkdir python
docker run -v "$PWD":/var/task "public.ecr.aws/sam/build-python3.7" /bin/sh -c "pip install -r requirements.txt -t python/; exit"

zip -r mypythonlibs.zip python > /dev/null

aws lambda publish-layer-version --layer-name LAYER_NAME --zip-file fileb://mypythonlibs.zip --compatible-runtimes "python3.7"

aws lambda update-function-configuration --layers arn:aws:lambda:ap-southeast-1:ACCOUNT_ID:layer:PIL-layer:LAYER_VERSION --function-name FUNCTION_NAME
```

Find other images from AWS SAM [here](https://gallery.ecr.aws/sam/build-python3.7)

## The Why

If you query into the `python` folder, you can see:
```
python
|- PIL
|- Pillow-8.2.0.dist-info
|- Pillow.libs
```

Aha, the folder Pillow.libs was missing when I uploaded the dependencies to the lambda layer from my virtualenv lib for the first time.

A lot of solutions on the net suggested something like creating an EC2 linux and building PIL from there. 

The main problem is that installing Pillow from our local computer and uploading the resulting bulid is different from the one that the lambda runtime will use. It is missing all the support files needed to run and compile.

I like the docker method! It is fast.