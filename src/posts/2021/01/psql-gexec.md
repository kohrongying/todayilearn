---
date: "2021-01-25"
title: "psql gexec"
slug: "/posts/psql-gexec"
---

Recently at work, I was given a task to change the table owner in a postgres database to another user. 

Here's the command that was used:

```psql
SELECT 'ALTER TABLE '|| t.tablename ||' OWNER TO my_new_owner;'
FROM pg_tables t
WHERE schemaname = 'public'; \gexec
```

If you ran the command without the `\gexec`, it is basically just a normal database select operation. It returns you a table and in each row is a command: `ALTER TABLE tablename OWNER to my_new_owner`.

One of my pitfalls was missing out the <space> after TABLE and before OWNER. String concat is still tough.

### gexec
From psql's [documentation](https://www.postgresql.org/docs/11/app-psql.html), this is what they say about `gexec`.

> Sends the current query buffer to the server, then treats each column of each row of the query's output (if any) as a SQL statement to be executed. 
> The generated queries are executed in the order in which the rows are returned, and left-to-right within each row if there is more than one column. NULL fields are ignored. The generated queries are sent literally to the server for processing, so they cannot be psql meta-commands nor contain psql variable references. If any individual query fails, execution of the remaining queries continues unless ON_ERROR_STOP is set. Execution of each query is subject to ECHO processing. (Setting ECHO to all or queries is often advisable when using \gexec.) Query logging, single-step mode, timing, and other query execution features apply to each generated query as well.

Pretty cool, it executes each command in the table. 

Obviously I have no idea that psql had commands like this. Scrolling through the documentation, you can see a bunch of other interesting commands. Even though the thought of manipulating data in the database scares me a little, I still think it is pretty cool! 

Other interesting commands:
```
\echo

\if expression
\elif expression
\else
\endif

\setenv (psql has env variables??)
\! (subshell)
```

### fyi
Things to note when changing ownership: consider the following:
- tables ownership
- sequences ownership
- views ownership
- database ownership
- schema ownership

```psql
SELECT 'ALTER TABLE '|| t.tablename ||' OWNER TO my_new_owner;'
FROM pg_tables t
WHERE schemaname = 'public'; \gexec

SELECT 'ALTER SEQUENCE '|| t.sequence_name ||' OWNER TO my_new_owner;'
FROM information_schema.sequences t
WHERE sequence_schema = 'public'; \gexec

SELECT 'ALTER VIEW '|| t.table_name ||' OWNER TO my_new_owner;'
FROM information_schema.viewss t
WHERE table_schema = 'public'; \gexec

ALTER DATABASE name OWNER TO user;

ALTER SCHEMA  name OWNER TO user;
```
 
### Verify

```psql

postgres=> \dn #list schemas
postgres=> \dt #list tables
postgres=> \d #list tables/sequences/views

```

Haha, this just serves as a gist for psql commands haha.
