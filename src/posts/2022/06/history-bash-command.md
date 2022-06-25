---
date: "2022-06-20"
title: "history bash command"
slug: "/posts/history-bash-command"
---

## Terminal hacks
Finding yourself in the bash terminal and you need your cheatsheet? I find 3 things that really help to boost my productivity in the terminal or in a unix server command line

### 1. history
```sh
# get last run commands
history

# get last run commands with specific keyword in mind
history | grep find

# run command id specified in history
!1304

# run second last command
!-2

# run last command
!! # or !-1
```

### 2. reverse-i-search
`Ctrl-R` will bring up this terminal for you to search key terms

### 3. auto-complete bash
[zsh-autocomplete](https://github.com/marlonrichert/zsh-autocomplete) is the best

## Lessons learnt
Spending time to remember productivity hacks will go a long way.