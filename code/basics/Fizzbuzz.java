// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
package code.basics;

class FizzBuzz {
  public void fizzBuzz(final int n) {
    for (int i = 1; i <= n; i++) {
      String fb = "";
      if (i % 3 == 0)
        fb += "fizz";
      if (i % 5 == 0)
        fb += "buzz";
      System.out.println(fb.length() > 0 ? fb : i);
    }
  }

}
