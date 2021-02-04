---
date: "2021-02-01"
title: "data migration and ETL"
slug: "/posts/data-migration-and-ETL"
---

ETL stands for Extract, Transfer, Load. It is a process used to move information or data from one system into another environment. Data migratoin and ETL is similar as they both involve moving the data while data migration does not change the format, whereas ETL does.

### The Transformation Process
This may include
- standardization
- deduplication (excluding and discarding redundant data)
- verified
- validated
- sorted
- aggregating of columns
- translating coded values
- encoded free-form values
- joining / splitting column

### Migration design
- How data is extracted, held and verified
- Mapping rules
- How data is loading into new system
- Recovery plans for each stage of migration
- Schedule of actions

### ETL Cycle
1. Cycle Initiation
2. Build Reference data
- lookup data (eg country codes, conversion rates)
3. Extract
4. Validate (cleansing)
- data type
- range and constraint
- code and cross reference check
- consistency check
5. Transform
6. Stage 
- load into staging tables
7. Audit reports
8. Publish
- to production tables
9. Archive 


This process is pretty enlightening!
