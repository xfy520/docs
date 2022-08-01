# 基础

## 1. jdk、jre、jvm三者之间的区别

1. jdk

`jdk`（Java SE Development Kit），`Java`标准的开发包，提供了编译、运行`Java`程序所需要的各种工具
和资源，包括`Java`编译器、`Java`运行时环境、常用`Java`类库等

2. jre

`jre`（Java Runtime Environment），`Java`运行时环境，用于解释执行`Java`的字节码文件。普通用户只
需要安装`jre`来运行`Java`程序即可，而作为一名程序员必须安装`jdk`，来编译、调试程序

3. jvm

jvm （Java Virtual Mechinal）, `Java`虚拟机，是`jre`的一部分，是整个`Java`跨平台运行的核心部分，负责字节码文件的解释执行，是可运行`Java`字节码文件的虚拟计算机，在所有平台上`jvm`向编译器提供相同接口，而编译器只需要面向虚拟机，生成虚拟机能识别的代码，然后交由虚拟机来解释执行

当使用`Java`编译器编译`Java`程序时，生成的是与平台无关的字节码，这些字节码只面向`jvm`，也就是`jvm`是运行`Java`字节码的虚拟机

不同平台的`jvm`是不同的，但是他们都提供了相同的接口。`jvm`是`Java`程序跨平台的关键部分，只要为不
同平台实现了相同的虚拟机，编译后的`Java`字节码就可以在该平台上运行

**Java 程序从源代码到运行需要三步**

```mermaid
graph LR
A(java源代码)--> |jdk中javac编译| B(class字节码文件, jvm理解的字节码)
B--> |jvm|C(机器可执行二进制码)
```
