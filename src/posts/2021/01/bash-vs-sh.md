---
date: "2021-01-21"
title: "bash vs sh"
slug: "/posts/bash-vs-sh"
---

Recently I came across some shell scripting errors:

```bash
sh: [[ not found error
sh: Syntax error: unexpected ')'
```

I found that error weird, because I ran that script locally and all worked out fine. So that led me on a google search for the differences between bash and sh. 

First let's see what we get when we use `which` on them

```
$ which sh
/bin/sh

$ which bash
/bin/bash
```

Ooo, so my first thought was: _huh?! they are different things?!_ I somehow always thought that there were synonymous. 

### First we have to understand shell
#### Shell is an interface between a user and the OS. 
- It is usually through GUI or CLI.

#### sh (Bourne shell) is a command line interpreter for Unix OS. 
- programming language described by POSIX standards
- have many implementations (bash, ash, k shell, z shell)
- denoted by the shebang: `#!/bin/sh`
- can be ran with `sh script.sh`

#### bash (Bourne again shell) is a shell replacement for Bourne shell. 
- it is a superset of sh. 
- it supports sh
- denoted by the shebang: `#!/bin/bash`
- can be ran with `bash script.sh`

However there are differences between bash and sh:
- `[[` is available in bash but not in sh, only `[`
- `sh` does not have arrays
- bash keywords like `local, source, let, declare, select` is not portable to sh

### Ok then what about zsh
So the first thing I did on my mac was to download zsh. I didn't even properly know what that was till now. 

It is the Z shell, extended from sh with improvements, containing features of bash, ksh, tcsh.

### Running the script

```
sh script.sh
bash script.sh
```
This runs the script using sh / bash interpreter respectively. Does not require executable bit.

```
. ./script.sh
```
First dot is a source. Runs the script in current shell process. Does not require executable bit.

```
./script.sh
```
Uses the shebang to determine how to execute. Requires executable bit (`chmod u+x script.sh) in order to run. Else you'd be left with permission denied.

Wow, mind boggled. So cool! Took many resources from various google searches / stackoverflows.