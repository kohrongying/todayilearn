---
date: "2021-03-25"
title: "sql coalesce"
slug: "/posts/sql-coalesce"
---

Coalesce is a very very useful SQL function. I could not tell what it did from the word alone (what does coalesce even mean?) but it fit my use case perfectly.

I wanted to update a column in my table to a value in a lookup table.
```sql
UPDATE table
SET column = (SELECT lookup_table.value FROM lookup_table
              WHERE lookup_table.other = table.column);
```

However I neglected what will this update statement do if the value did not exist in the lookup table. 

### Lookup table
| other | value |
|---|---|
| A | apple|
| B | beans|

If my table's column has values that are not A or B, it will update with NULL. Which is destructive! Because it would mean the original data in the table is lost forever!

### Coalesce saves the day
So my query have to change to update only if the value exists in the lookup table. It became quite complex.

```sql
UPDATE table
SET column = (SELECT lookup_table.value FROM lookup_table
              WHERE lookup_table.other = table.column)
WHERE EXISTS (SELECT lookup_table.other FROM lookup_table
              WHERE lookup_table.other =  table.column);
```

Coalesce allows us to make it into a much much more elegant solution. Coalesce returns the first non-null value.

```sql
UPDATE table
SET column = COALESCE((SELECT lookup_table.value FROM lookup_table
              WHERE lookup_table.other = table.column), column);
```

So, if the subquery returns null (value is not in lookup table), it will update the column with the original value. It is important to note the sequence of this. We have to have the lookup value as the argument, otherwise, it defaets the purpose.

Ok, Coalesce is my fav sql function!!

-FIN-


