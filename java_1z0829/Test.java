package java_1z0829;

class Greet {
    public void sayHello() {
        System.out.println("Hello!");
    }
}

public class Test {
    public static void main(String[] args) {
        Greet obj = new Greet() {
            public void sayHello() {
                System.out.println("HELLO!");
            }
        };
        obj.sayHello();
    }
}
