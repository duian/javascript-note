## String
引用对象
initial
```js
var s = new String('sdfsdf');
```

create

read
```js
var s = new String('aAzZ');
s.length; // 4
s.substring(0, 2); // aA
s.charAt(1); // A
s.charCodeAt(1); // 65
```
update
```js
s.lowerCase()
s.upperCase()
```

delete

获取字符长度
获取某个位置的字符
获取某段字符
判断某个字符是否存在
判断某段字符是否存在

concat
substring
indexOf
split

模板字面量 template l
## 其他值 -> String
底层使用 toString() 方法，但是针对 null/undefined/symbols, String() 方法有特殊的处理

## String.prototype

### charAt(index)
index ? [0, length - 1) : 0
return the character at the string specified index

### charCodeAt(index)
index ? [0, length - 1) : 0
return the unicode unit code at the string specified index

### concat(str2[, ...strN])
- 参数 str2[,...strN]
需要连接到 str 的字符床

- 返回值
 一个新的字符床，包含参数所提供的链接字符串

### endsWith(searchString[, length])

### includes(searchString[, position])

### indexOf(searchValue[, fromIndex])

### indexLastOf(searchValue[, fromIndex])

### match(regexp)

### padEnd(targetLength[, padString])

### padStart(targetLength[, padString])

### repeat(count)
 重复多少次字符串

### replace(regexp | substr, newSubStr | function)
根据正则或者子串，进行字符串匹配并进行替换

### search(regexp)

### toString === valueOf
String 覆盖了 Object 的 toString 方法，返回与 valueOf 一致的值，即初始化的时候传入 String 对象的字符串值

### toLowerCase

### toUpperCase
