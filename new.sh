#/bin/bash

TITLE=$@
TITLEF=$(echo $TITLE | tr " " "-")
YEAR=$(date +"%Y")
MONTH=$(date +"%m")

mkdir -p "src/posts/$YEAR/$MONTH"
FILENAME="src/posts/$YEAR/$MONTH/$TITLEF.md"

cat <<EOF > $FILENAME
---
date: "$(date '+%Y-%m-%d')"
title: "$TITLE"
slug: "/posts/$TITLEF"
---

# $TITLE
EOF