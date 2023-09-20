package java_1z0829;

class Outer {
  public static void sayHi() {
        System.out.println("Hi");
    }
    static {
        System.out.println("On Static Init");
    }
}

public class Test {
    public static void main(String[] args) {
        Outer.sayHi();
    }
}