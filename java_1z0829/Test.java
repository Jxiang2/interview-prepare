package java_1z0829;

enum Month {
  JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC
}

public class Test {
  public static void main(String[] args) {
    int day = 5;
    String dayName = switch (day) {
      case 1:
        yield "SUNDAY";
      case 2:
        yield "MONDAY";
      case 3:
        yield "TUESDAY";
      case 4:
        yield "WEDNESDAY";
      case 5:
        yield "THURSDAY";
      case 6:
        yield "FRIDAY";
      case 7:
        yield "SATURDAY";
      default:
        yield "NA";
    };
  }
}
