---
date: "2021-11-16"
title: "psql case when"
slug: "/posts/psql-case-when"
---

Something like if else in psql
One day while writing my consumption scripts in sql

```
select 
  id as id,
  case when refund_no is not null then 'REFUNDED' else 'SUCCESS' end as status,
  name as full_name
from
  tb_payment
```

## The syntax
```
case
  when [condition] then [result]
  [when condition then result]
  else [result]
end
```

Pretty cool.

