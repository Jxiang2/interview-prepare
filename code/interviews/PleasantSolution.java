package code.interviews;

public class PleasantSolution {
  public static String takeBetween(
      final String input,
      final String left,
      final String right,
      final boolean takeUntilEndIfRightMissing) {
    if (input.isEmpty() || left.isEmpty() || right.isEmpty()) {
      throw new IllegalArgumentException("input, left and right strings must not be empty");
    }

    final int leftIndex = input.indexOf(left);
    if (leftIndex == -1) {
      return null; // Left string not found
    }

    final int startIndex = leftIndex + left.length();

    System.out.println(startIndex);

    if (right == null || right.isEmpty()) {
      if (takeUntilEndIfRightMissing) {
        return input.substring(startIndex); // Take until the end if right is missing
      } else {
        return null; // Right string missing and takeUntilEndIfRightMissing is off
      }
    }

    final int endIndex = input.indexOf(right, startIndex);

    if (endIndex == -1) {
      if (takeUntilEndIfRightMissing) {
        return input.substring(startIndex); // Take until the end if right is missing
      } else {
        return null; // Right string not found
      }
    }

    return input.substring(startIndex, endIndex);
  }

  public static String graduatedValue(
      final long value,
      final int decimalPlaces,
      final boolean addDecimalForSingleDigit) {
    final String[] units = { "", "K", "M", "B", "T", "Q" };
    double formattedValue = value;
    int unitIndex = 0;

    while (Math.abs(formattedValue) >= 1000 && unitIndex < units.length - 1) {
      formattedValue = formattedValue / 1000;
      unitIndex++;
    }

    final String formatPattern = addDecimalForSingleDigit ? "%." + decimalPlaces + "f%s" : "%.0f%s";
    return String.format(formatPattern, formattedValue, units[unitIndex]);
  }

  public static void main(final String[] args) {
    final String input = "Something";
    final String left = "<p>";
    final String right = "<p>";
    final boolean takeUntilEndIfRightMissing = false;

    final String result = PleasantSolution.takeBetween(input, left, right, takeUntilEndIfRightMissing);
    System.out.println(result); // Output: "My paragraph"

    System.out.println("#################################################");

    System.out.println(PleasantSolution.graduatedValue(0, 3, true));

    System.out.println("#################################################");

  }
}
