---
date: "2021-09-24"
title: "ascii and unicode"
slug: "/posts/ascii-and-unicode"
---

# Data Types
### Character String
- usually hold text data
- text data consist of ASCII characters (characters whose code point <= 127)
- example: "hello world!" belongs to ASCII subset 

### Binary String
- usually hold binary data (pictures, voice, mixed mediaa)
- unit of length is OCTETS
- 2 types of varying-length binary string
  - `VARBINARY` value up to 32,672 bytes 
  - `BLOB` (Binary Large Object) value up to 2GB - 1byte

# ASCII
### What is it lol
Stands for American Standard Code for Information Interchange - an early standardized encoding system for text. Encoding is converting characters in human language to binary sequences. 

256 different ways to group eight 1s and 0s -> 256 ways to represent a character in ASCII.

### For example
|Character|ASCII|Byte|
|---|---|---|
|A|065|01000001
|a|097|01100001
|0|048|00110000
|9|057|00111001
|!|033|00100001

### Problem
Not enough ways to store every symbol, ever.

# Unicode
### What is it lol?
- Unicode Standard is an international encoding standard for use with different languages and scripts where each letter, digit or symbol is assigned a unique numeric value (code point)
- allow representation of all languages: abc, language symbols, hiragana, katakana, emoji - in a unified way, up to 32 bits wide (~4 billion unique values)

### For example
|Character|Code Point|
|---|---|
|A|U+0041 or \u0041|
|a|U+0061 or \u0061|
|0|U+0030|
|9|U+0039|
|あ|U+3042|
|😁|U+1F601|

> U stand for "Unicode"

### UTF is what leh
UTF stands for Unicode Transformation Format - 8 bits. It is an encoding system for Unicode (translate Unicode to binary string, string back to Unicode)

There are multiple encoding systems for Unicode:
- UTF-8 (8 bits - 1 byte) seen as more efficient as if a character can be represented in 1 byte, that is what it will use. Also, first 128 code points are exactly the same as ASCII
- UTF-16 (16 bits - 2 bytes)

> UTF-8 saves space. In UTF-8, common characters like “C” take 8 bits, while rare characters like “💩” take 32 bits. Other characters take 16 or 24 bits. A blog post like this one takes about four times less space in UTF-8 than it would in UTF-32. So it loads four times faster.
> -Adam Hooper

|Character|Code Point|Bytes Taken|
|---|---|---|
|A|U+0041|1|
|a|U+0061|1|
|0|U+0030|1|
|!|U+0021|1|
|😁|U+1F601|4|


### Javascript Engine uses UTF-16
```js
> console.log("haha".length)
4
> console.log("😁".length)
2
```
Each character, 'h','a' uses 16 bits while fancy ones will use 32 bits. 
UTF-16 code units means using two code points to reference a character.
Smallest binary representation of a character is 2 bytes, 16 bits.

|CHARACTER|UTF-8 BINARY ENCODING|UTF-16 BINARY ENCODING|
|---|---|---|
|A|01000001|01000001 11011000 00001110 11011111|
|𠜎|11110000 10100000 10011100 10001110|01000001 11011000 00001110 11011111|