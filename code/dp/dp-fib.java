package code.dp;

//n:    1, 2, 3, 4, 5, 6, 7 ...
//f(n): 1, 1, 2, 3, 5, 8, 13 ...
class Fib {
  public int fibN(int n) {
    if (n <= 2) return 1;
    return fibN(n - 1) + fibN(n - 2);
  }

  public static void main(String[] args) {
    Fib solution = new Fib();
    System.out.println( solution.fibN(5));
  }
}
