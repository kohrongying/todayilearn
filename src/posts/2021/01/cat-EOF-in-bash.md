---
date: "2021-01-09"
title: "cat EOF in bash"
slug: "/posts/cat-EOF-in-bash"
---

My problem of the day was trying to echo multiline into a file.

```bash
echo "first line" >> file.txt
echo "second line" >> file.txt
```

Thank you, 🐱

```python
cat <<EOF > file.txt
this is my first line
of my awesome haiku start
this is so easy
EOF
```