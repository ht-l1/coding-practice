# [Josh Hug CS61B Spring21](https://joshhug.gitbooks.io/hug61b/content/chap1/chap11.html)

## 1. Intro to Java
### 1.1 Essentials

```
$ javac HelloWorld.java     //comiple first 
$ java HelloWorld           //run
Hello World! 
```

#### Static Typing
- type of a variable can never change
- guaranteed to be free of type errors

#### [Style Guide](https://sp19.datastructur.es/materials/guides/style-guide.html)
- Line comments // 
- block coments /* */

#### Using [Git](https://sp18.datastructur.es/materials/guides/using-git.html)

#### [Java Crash Course](https://sp18.datastructur.es/materials/hw/hw0/hw0.html)
- every statement in Java must be followed by a semicolon;
- statements are grouped by braces, and NOT by indentation or whitespace
- { Else } statement - occur if a condition is false
- { While } statement - repeat as long as condition is true

---

### 1.2 Objects
#### Two types of methods
- class methods = static methods (actions taken by the class itself)
    ```
    x = Math.sqrt(100);
    ```
- instance methods = non-static methods
    ```
    Math m = new Math();
    x = m.sqrt(100);
    ```

#### public static void main(String[] args)
- void = no return type
- main = name of method
- String[] args = parameter passed to the main method