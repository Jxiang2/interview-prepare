package java_1z0829;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;

class Test {
  public static void main(String[] args) {

    Period period = Period.ofDays(100);
    System.out.println(period);

    String x = "*";

    var str = "PANIC";
    var sb = new StringBuilder("THET");
    System.out.println(str.replace('N', 'C')); // Line n1

    var place = "faraway";
    System.out.println(place.indexOf("a", 3)); // Line n1
  }

}