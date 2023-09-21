# 1Z0-829 Java 17 Certification

```Markdown
General notes:
1. static methods can be invoked using class_name or using reference variable
```

```java
private static String s;
public static void main(String[] args) {
    try {
        System.out.println(s.length());
    } catch(NullPointerException | RuntimeException ex)
    {
        System.out.println("DONE");
    }
}
```

- **Result**: Compilation error
- **Reason**: NullPointerException is a subclass of RuntimeException, so it is not allowed to catch both of them in the same catch block.

```java
public static void main(String[] args) {
        try {
            check();
        } catch(RuntimeException e) {
            System.out.println(e.getClass()
                             .getName()); //Line n1
        }
    }

private static void check() {
    try {
        RuntimeException re = new RuntimeException(); //Line n2
        throw re; //Line n3
    } catch(RuntimeException e) {
        System.out.println(1);
        ArithmeticException ex = (ArithmeticException) e; // Line n4
        System.out.println(2);
        throw ex;
    }
}
```

- **Result**:
  1

  java.lang.ClassCastException

- **Reason**: n3 throws an exception instance, caught by the catch block. n4 throws java.lang.ClassCastException, because:
  - You can try to convert the super class variable to the sub class type by simply using the cast operator. But, first of all you need to create the super class reference using the sub class object and then, convert this (super) reference type to sub class type using the cast operator.
  - The exception in catch block is auto-thrown to the caller of the method

```java
public class A {
    private static class B {
        private void log() {
            System.out.println("BE THE CHANGE");
        }
    }
    public static void main(String[] args) {
        var obj = new A.B(); // way 1
        B obj = new B(); // way 2
        A.B obj = new A.B(); // way 3
    }

    // ============================

    private class B {
        private void log() {
            System.out.println("BE THE CHANGE");
        }
    }
    public static void main(final String[] args) {
        /* INSERT */
        final A a = new A();

        final B b = a.new B(); // way 1
        final A.B b = a.new B(); // way 2

        b.log();
  }
}
```

- **Checkpoint** Within the top-level class, a static nested class's name can be referred by 3 ways: `TOP-LEVEL-CLASS.STATIC-NESTED-CLASS` or `STATIC-NESTED-CLASS` or `var`.
- **Checkpoint** Outer classes can access inner classes' private members

```java
public static void main(String[] args) {
    String s1 = new String("ALL IS WELL"); //Line n1
    String s2 = new String("ALL IS WELL"); //Line n2
    System.out.println(s1 == s2); //Line n3

    // How to change this code to print true?
}
```

- **Result**:
  - Replace Line n1 with: String s1 = "ALL IS WELL"; Replace Line n2 with: String s2 = "ALL IS WELL";
  - Replace Line n1 with String s1 = new String("ALL IS WELL").intern(); Replace Line n2 with String s2 = new String("ALL IS WELL").intern();
  - Replace Line n2 with: String s2 = s1.toString(); Because definition of toString() method in String class returns the same String object.

```java
public static void main(String[] args) {
    String text = "    BE YOURSELF!    "; //Contains multiple space characters
    System.out.println(text./*INSERT*/);

    // compile successfully and on execution will print "BE YOURSELF!" on to the console?
}
```

- **Result**:
  - Replace INSERT with: trim() (work with space)
  - Replace INSERT with: strip() (work with whitespace)
  - Replace INSERT with: stripLeading().stripTrailing() (work with whitespace)

```java

```

- **Checkpoint:**
  - byte: -128 to 127
    char data type is from 0 to 65535
  - char has the same size as short, 16 bits
  - type widening: byte -> short -> int -> long -> float -> double, no data loss, no explicit casting
  - type narrowing: double -> float -> long -> int -> short -> byte, data loss, explicit casting required
  - Java explicit Numberic operations result type is the wider type of the two operands
  - ++, --, +=, -=, \*=, /=, %=, result type is the type of the left operand
  - char data type is from 0 to 65535
  - char has the same size as short, 16 bits
  - int default is 0, double default is 0.0, boolean default is false, char default is '\u0000', float default is 0.0f, long default is 0L, short default is 0, byte default is 0, reference type default is null

```java
public static void main(String[] args) {
    m(1);
}

private static void m(Object obj) {
    System.out.println("Object version");
}

private static void m(Number obj) {
    System.out.println("Number version");
}

private static void m(Double obj) {
    System.out.println("Double version");
}
```

- **Result**: Number version
- **Reason**: Compiler either does implicit casting or Wrapping but not both. 1 is int literal, Java compiler can't implicit cast it to double and then box it to Double rather it boxes i to Integer and as Number is the immediate super class of Integer so Number version refers to Integer object.

```java
public static void main(String[] args) {
    extractInt(2.7);
    extractInt(2);
}

private static void extractInt(Double obj) {
    System.out.println(obj.intValue());
}
```

- **Result**: Compilation error in main method
- **Reason**: Compiler either does implicit casting or Wrapping but not both. 2.7 is double literal, Java compiler can't implicit cast it to int and then box it to Integer rather it boxes it to Double and as Double is not the sub class of Number so extractInt(Double obj) method can't be invoked.

```java

```

- **Checkpoint:**
  - Math.random() returns x, where 0.0 <= x < 1.0
  - Math.round() returns long, but Math.floor() & Math.ceil() returns double

```java
class A {
    public String toString() {
        return null;
    }
}
public class Test {
    public static void main(String [] args) {
        String text = null;
        text = text + new A(); //Line n1
        System.out.println(text.length()); //Line n2
    }
}
```

- **Result**: 8
- **Reason**: text + new A() is equivalent to text + new A().toString(), which is null + null since they are both defined as String, not direct null; So the result is "nullnull", which has length 8

```java
public static void main(String [] args) {
    String text = "RISE ";
    text = text + (text = "ABOVE ");
    System.out.println(text);
}
```

- **Result:** RISE ABOVE
- **Reason:** text + (text = "ABOVE ") is equivalent to text + text = "ABOVE ", which is "RISE " + "ABOVE ", which is "RISE ABOVE "
- **Note:**
  - left operand is evaluated first, then right operand
  - bitwise operators are evaluated before logical operators

```
Datetime, Period, Duration

1. period.toString()'s result starts with P, and for non-zero year, Y is appended; for non-zero month, M is appended; and for non-zero day, D is appended. P,Y,M and D are in upper case.

2. Period.of(0, 0, 0) is equivalent to Period.ZERO ==> P0D

3. duration.toString()'s result starts with PT, and for non-zero hour, H is appended; for non-zero minute, M is appended; for non-zero second, S is appended; and for non-zero nano second, N is appended. PT, H, M, S and N are in upper case.

4. PT0S is equivalent to Duration.ZERO ==> Duration.of(0, ChronoUnit)
```

- **Checkpoint:** LocalTime.MIN --> {00:00}, LocalTime.MAX --> {23:59:59.999999999}, LocalTime.MIDNIGHT --> {00:00}, LocalTime.NOON --> {12:00}.

```java
public static void main(String [] args) {
    LocalDate date = LocalDate.of(2019, 1, 1);
    LocalTime time = LocalTime.of(0, 0);
    ZoneId india = ZoneId.of("Asia/Kolkata");
    ZonedDateTime zIndia = ZonedDateTime.of(date, time, india);  // {2019-01-01T00:00+05:30[Asia/Kolkata]}.

    ZoneId us = ZoneId.of("America/Los_Angeles");
    ZonedDateTime zUS = /*INSERT*/;

    System.out.println(Duration.between(zIndia, zUS)); //Line 15

    // Line 15 prints the duration for which Los Angeles citizen has to wait to celebrate the new year.
}
```

- **Result:** zIndia.withZoneSameLocal(us)
- **Reason:** zIndia.withZoneSameLocal(us) => {2019-01-01T00:00-08:00[America/Los_Angeles]}. It just changes the Zone but keeps the date and time same and this is what zUS supposed to refer to. Duration.between(zIndia, zUS) returns 'PT13H30M' in this case. So, people of Los Angeles have to wait for 13 hours 30 minutes to celebrate the new year.

```java
    LocalDate date = LocalDate.of(2019, 1, 1);
    LocalTime time = LocalTime.of(0, 0);

    ZoneId india = ZoneId.of("Asia/Kolkata");
    ZonedDateTime zIndia = ZonedDateTime.of(date, time, india); // {2019-01-01T00:00+05:30[Asia/Kolkata]}

    ZoneId us = ZoneId.of("America/Los_Angeles");
    // withZoneSameLocal vs withZoneSameInstant
    ZonedDateTime zUS1 = zIndia.withZoneSameLocal(us); // {2019-01-01T00:00-08:00[America/Los_Angeles]}
    ZonedDateTime zUS2 = zIndia.withZoneSameInstant(us); // {2018-12-31T10:30-08:00[America/Los_Angeles]}
```

- **Checkpoint**
  - zonedDateTime.withZoneSameLocal(zoneId) returns a ZonedDateTime object with zoneId's timezone and zonedDateTime' date and time.
  - zonedDateTime.withZoneSameInstant(zoneId) returns a ZonedDateTime obejct that changes zonedDateTime's date and time according to zoneId's timezone, but keeps the same instant.

````java

```java
public static void main(String [] args) {
        LocalDate date = LocalDate.parse("2000-01-01");
        Period period = Period.ofYears(-3000);
        System.out.println(date.plus(period));
    }
````

- **Result:** -1000-01-01

```java
public static void main(String [] args) {
    LocalDate date = LocalDate.parse("1983-06-30");
    System.out.println(date.plusMonths(8));
}

// NOTE
Period.of(int years, int months, int days) // => Returns a Period instance with specified number of years, months and days.

Period.ofDays(int days) // => Returns a Period instance with specified number of days.
Period.ofWeeks(int weeks) // => Returns a Period instance with specified number of days.

Period.ofMonths(int months) // => Returns a Period instance with specified number of months.

Period.ofYears(int years) // => Returns a Period instance with specified number of years.

// NOTE
Duration.ofDays(long days) // => Returns a Duration instance with specified number of days converted to hours. -2 days equals to -48 hours.

Duration.ofHours(long hours) // => Returns a Duration instance with specified number of hours.

Duration.ofMinutes(long minutes) // => Returns a Duration instance with specified number of minutes.

Duration.ofSeconds(long seconds) // => Returns a Duration instance with specified number of seconds, nanos field is set to 0. NOTE: if nanos field is 0, toString ignores it.

Duration.ofMillis(long millis) // => Returns a Duration instance with passed value converted to seconds and nano seconds.

Duration.ofNanos(long nanos) // => Returns a Duration instance with passed value converted to seconds and nano seconds.

```

- **Result:** 1983-06-30 plus 8 months would result in the invalid date 1984-02-30. Instead of returning an invalid result, the last valid day of the month, 1984-02-29, is returned. Please note, 1984 is leap year and hence last day of February is 29 and not 28.

- **Checkpoint:**
  - LocalDate.ofEpochDay(0) ==> 1970-01-01, arg can be negative
  - LocalDate.ofYearDay(2023, 0) ==> 2nd arg is from 1 to 365/366, or runtime exception
  - Period represents date based amount of time, Duration represents time based amount of time

```java
public static void main(String[] args) {
    final String fName = "James";
    String lName = "Gosling";
    String name1 = fName + lName; // lname is computed at runtime, so name1 is computed at runtime too
    String name2 = fName + "Gosling";
    String name3 = "James" + "Gosling"; // fname is final, so it is a compile time constant, String literal is also a compile time constant, so name3 is computed at compile time
    System.out.println(name1 == name2);
    System.out.println(name2 == name3);
}
```

- **Result:** false, true
- **Reason:** name1 is not a compile time constant, so it is not interned. name2 and name3 are compile time constants, so they are interned. **Please note** that Strings computed by concatenation at run time (if the resultant expression is not constant expression) are newly created and therefore distinct.

```java
public static void main(String[] args) {
    m1(null);
}

static void m1(CharSequence s) {
    System.out.println("CharSequence");
}

static void m1(String s) {
    System.out.println("String");
}

static void m1(Object s) {
    System.out.println("Object");
}
```

- **Result:** String
- **Reason:** String is a subclass of CharSequence, so it is the most specific type
- **Note:** Method overloading is resolved at compile time, so the method with most specific args is chosen at compile time, in this case, **m1(String s)**; If two methods are equally specific, then the method with more specific return type is chosen, if the return type is also equally specific, then it is a compile time error.

```java
var x = 7, y = 200;
```

- **Result:** Compilation error, var can't be used in multiple variable declaration, only primitive type or reference type is allowed
- **Note:** str.replace returns the same String object if no replacement is done, for example, replace "J" with "J" will return the same String object

```java
String [] arr1 = {null, null};
System.out.println("1. " + String.join("::", arr1)); // 1. null::null

String [] arr2 = {};
System.out.println("2. " + String.join("-", arr2)); // 2.

String [] arr3 = null;
System.out.println("3. " + String.join(".", arr3)); // NullPointerException at runtime

System.out.println("4. " + String.join(".", null)); // NullPointerException at compile time
```

```java
 "JAva".substring(0, 1000); // StringIndexOutOfBoundsException (runtime)

var sb = new StringBuilder("Friends are treasures");
sb.delete(0, 100); // no exception, end index is equivalent to length of "Friends are treasures"
System.out.println(sb.length());
```

```java
var sb = new StringBuilder();
System.out.println(sb.append(null).length());
```

** Result: ** Compilation error, because append() method is overloaded, one of them takes a String, the other takes a char[], so the compiler can't decide which one to use

```java
var sb = new StringBuilder(20); //Line n1
sb.append("A".repeat(25)); //Line n2
System.out.println(sb.toString().length()); //Line n3 => 25

sb.setLength(10); //Line n4
System.out.println(sb.toString().length()); //Line n5 => 10
```

```java
/*INSERT*/
int day = '3';
switch(day) {
    case '3':
        System.out.println("BUY 2 GET 1 FREE");
        break;
    default:
        System.out.println("SORRY!!! NO SALE");
}// Note: char is compatible with int, so '3' is equivalent to 51, but it's not integer three. This comaptibility only works for primitive type, not wrapper type
```

**Note:** switch can accept primitive types: byte, short, int, char; wrapper types: Byte, Short, Integer, Character; String and enums. Boolean or boolean is not allowed.

```java
var amount = 1000;
var curr = CURRENCY.DOLLAR;

// Wrong version
switch (curr) {
    case DOLLAR:
        String sign = "$";
        System.out.println(sign + amount);
    case POUND:
        String sign = "£";
        System.out.println(sign + amount);
    case YEN:
        String sign = "¥";
        System.out.println(sign + amount);

}

// Correct version
switch (curr) {
    case DOLLAR:
        String sign = "$";
        System.out.println(sign + amount);
    case POUND:
        sign = "£";
        System.out.println(sign + amount);
    case YEN:
        sign = "¥";
        System.out.println(sign + amount);
}

// Correct version 2
switch (curr) {
    case DOLLAR: {
        String sign = "$";
        System.out.println(sign + amount);
    }
    case POUND: {
        String sign = "£";
        System.out.println(sign + amount);
    }
    case YEN: {
        String sign = "¥";
        System.out.println(sign + amount);
    }
}
```

**Result:** Compilation error
**Reason:** Statement inside case labels are within the same scope, which means variable 'sign' created inside 1st case is in scope for other cases as well. This causes compilation error.

```java
When you use the switch expression (which returns some value), there are few things to keep in mind:

1. All the cases must be exhaustive and non-duplicate, which means it should cater to all the input values without any overlap. (for enum, all the enum values must be covered, for int, all the int values must be covered)

In this case,

1st case handles 1,3,5,7,9

2nd case handles 0,2,4,6,8

default handles all the other int values.



2. With -> there is no fall-through semantics, therefore break; is not used here. Using break; with switch expression (which returns some value) causes compilation error.



3. It must end with a semicolon.

// A valid exapmple would be:
public static void main(String[] args) {
    var x = 5;
    var msg = switch(x) {
        case 1,3,5,7,9 -> "Odd Number";
        case 0,2,4,6,8 -> "Even Number";
        default -> "Not in range";
    }; //NOTE semicolon here
    System.out.println(msg);
}

// Old and new switch-case syntaxes can be mixed but mixing of colon [:] and arrow [->] is not allowed.
var a = 5;
var x = "+";
switch(x) {
    case "+" -> a = a + 2; //Line n1
    case "-" -> { a = a - 3; break; } //Line n2
    case "/" -> a = a / 4; //Line n3
    case "*" : a = a * 3; //Line n4 => Compilation error
}
System.out.println(a);
```

```java
do {
    System.out.print(100);
} while (true); //Line n1
System.out.println(200); //Line n2 => Unreachable code exception

// To make this code run infinitely:
boolean flag = true;
do {
    System.out.print(100);
} while (flag); //Line n1
System.out.println(200);
```

**Reason:** Line n2 is unreachable because the do-while loop is an infinite loop and compiler recognizes the true literal as a constant expression and hence it is a compile time constant.

```java
public static void main(String[] args) {
    String furniture = new String(new char[] {'S', 'o', 'f', 'a'});
    switch (furniture) {
        default:
            System.out.println("CHAIR");
        case "Recliner":
            System.out.println("RECLINER");
        case "Sofa":
            System.out.println("SOFA");
        case "Bed":
            System.out.println("BED");
            break;
    }
}
```

- **Result:** SOFA BED
- **Reason:** 'furniture' refers to String object "Sofa". Matching case is AVAILABLE. So SOFA BED.
- **Checkpoint:** switch can accept primitive types: byte, short, int, char; wrapper types: Byte, Short, Integer, Character; String and enums.
- **Checkpoint:** In switch statement, char is compatible with int, so '3' is equivalent to 51, but it's not integer three. This comaptibility only works for primitive type, not wrapper type.
- **Checkpoint:** switch exeuction process: 1. search the cases 2. if find, execute the case and all the following cases until break or end of switch 3. if not find, execute default case if exists, or do nothing

```java
// Valid switch syntax

// 1
int day = 5;
String dayName = switch(day) {
    case 1 : yield "SUNDAY";
    case 2 : yield "MONDAY";
    case 3 : yield "TUESDAY";
    case 4 : yield "WEDNESDAY";
    case 5 : yield "THURSDAY";
    case 6 : yield "FRIDAY";
    case 7 : yield "SATURDAY";
    default : yield "NA";
};

// 2
int day = 5;
String dayName = switch(day) {
    case 1 -> "SUNDAY";
    case 2 -> "MONDAY";
    case 3 -> "TUESDAY";
    case 4 -> "WEDNESDAY";
    case 5 -> "THURSDAY";
    case 6 -> "FRIDAY";
    case 7 -> "SATURDAY";
    default -> "NA";
};
```

- **Checkpoint:** Mixing of colon [:] and arrow [->] causes compilation error.
- **Checkpoint:** in new syntax, : must come with yield

```java
public class Test {
    static var arr = new Boolean[1]; // line1
    public static void main(String[] args) {
        if(arr[0]) {
            System.out.println(true);
        } else {
            System.out.println(false);
        }
    }
}
```

- **Checkpoint:** Local variable Type inference is applicable only for local variables, thus compilation error in line n1.

```java
public class Test {
    class A {
        void m() {
            System.out.println("OVER AND OUT");
        }
    }

    public static void main(String [] args) {
        //Insert statement here to print OVER AND OUT

        // Opt 1
        A a1 = new Test().new A();
        a1.m();

        // Opt 2
        Test.A a2 = new Test().new A();
        a2.m();

        // Opt 3
        var a3 = new Test().new A();
        a3.m();
    }
}
```

<Br/>
<Br/>

```java
class Foo {
    static { //static initializer block
        System.out.print("A");
    }
    class Bar {
        static { //static initializer block
            System.out.print("B");
        }
    }
}

public class Test {
    public static void main(String [] args) {
        new Foo().new Bar(); // => BA
    }
}
```

- **Result:** BA, note that static initializer block is executed when the class is loaded, so it is executed before the constructor. static initializer block of regular inner class is executed before the static initializer block of enclosing class.
- **Checkpoint** Excution order:

  1. static initializer block of regular inner class
  2. static initializer block of enclosing class

  3. instance initializer block of enclosing class
  4. constructor of enclosing class
  5. instance initializer block of regular inner class
  6. constructor of regular inner class

```java
class Outer {
    public void print(int x) {
        class Inner {
            public void getX() {
                System.out.println(++x);
            }
        }
        Inner inner = new Inner();
        inner.getX();
    }
}

public class Test {
    public static void main(String[] args) {
        new Outer().print(100);
    }
}
```

- **Result:** Compilation error
- **Checkpoint:** a method local inner class can access local variables and parameters of the enclosing block that are final or effectively final.

```java
class A {
    public void someMethod(final String name) {
        /*INSERT*/ { // => class B    // => final Class B
            void print() {
                System.out.println("Hello " + name);
            }
        }
        new B().print();

    }

    public static void sayHi() {
        System.out.print("Hi");
    }
}

public class Test {
    public static void main(String[] args) {
        new A().someMethod("World!");
    }
}
```

- **Checkpoint:**
  - Method-local inner classes cannot be defined using explicit access modifiers (public, protected and private) but non-access modifiers: final and abstract can be used with method-local inner class.

```java
class A {
    public void print(String name) {
        class B {
            B() {
                System.out.println(name); //Line n1
            }
        }
    }
    B obj = new B(); //Line n2 ==> Compilation error
}

public class Test {
    public static void main(String[] args) {
        new A().print("OCP"); //Line n3
    }
}
```

- **Checkpoint**: Instance of method-local inner class can only be created within the boundary of enclosing initializer block or enclosing method.

```java
class Outer {
    private String msg = "A";

    public void print() {
        final String msg = "B";

        class Inner {
            public void print() {
                System.out.println(this.msg); // Compilation error
            }
        }

        Inner obj = new Inner();
        obj.print();
    }
}

public class Test {
    public static void main(String[] args) {
        new Outer().print();
    }
}
```

- **Checkpoint**: Keyword 'this' inside method-local inner class refers to the instance of inner class.
- **Reason**: this.msg refers to the instance variable of inner class, which is not defined.

```java


```
