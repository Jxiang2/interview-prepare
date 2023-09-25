package java_1z0829;

record Rectangle() {}

class Square extends Rectangle {}

public class Test {
    public static void main(String[] args) {
        Square sq = new Square(10.0);
        System.out.println(sq);
    }
}