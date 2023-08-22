package java_1z0829;

class Test {
  public static void main(String[] args) {

    StringBuilder sb = new StringBuilder("INHALE ");
    String s = sb.toString() + (sb.append("EXHALE "));
    System.out.println(s.strip().length());

  }

}