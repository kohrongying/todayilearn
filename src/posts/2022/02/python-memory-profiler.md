---
date: "2022-02-08"
title: "python memory profiler"
slug: "/posts/python-memory-profiler"
---

# mprof
- library that needs to be installed
- details on memory usage over time, even plots a nice graph
- [memory-profiler](https://pypi.org/project/memory-profiler/)

# psutil
- library that needs to be installed
- details on running processes, system utilisation (CPU, mem, disk, network, sensors) in Python
- useful for system monitoring, profiling, management of processes, limiting processes
- [psutil](https://psutil.readthedocs.io/en/latest/#recipes)

# tracemalloc
- part of python system library, no need to install
- to find what is hogging the memory or what is leaking by taking snapshots of python memory
- [tracemalloc](https://docs.python.org/3/library/tracemalloc.html)
- [Fugue blogpost](https://www.fugue.co/blog/diagnosing-and-fixing-memory-leaks-in-python.html)
