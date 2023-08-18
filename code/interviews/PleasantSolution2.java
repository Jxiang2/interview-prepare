package code.interviews;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Stack;

public class PleasantSolution2 {

  public static class CustomNode {
    public String Title;
    public CustomNode Parent;
    public ArrayList<CustomNode> Children;

    public CustomNode(final String title, final CustomNode parent) {
      Title = title;
      Parent = parent;
      Children = new ArrayList<CustomNode>();

      if (Parent != null)
        Parent.Children.add(this);
    }

    public CustomNode Find(final String path) {
      if (path.equals(Title))
        return this;

      final String[] pieces = path.split("/");

      for (final CustomNode child : Children) {
        if (child.Title.equals(pieces[1]))
          return child.Find(path.substring(Title.length() + 1));
      }

      return null;
    }
  }

  public static String GetShortestUniqueQualifier(
      final CustomNode root,
      final CustomNode target) {
    CustomNode node = target;
    final Stack<String> pathStack = new Stack<>();

    while (node != null) {
      pathStack.push(node.Title);
      node = node.Parent;
    }

    final StringBuilder qualifier = new StringBuilder();
    while (!pathStack.isEmpty()) {
      if (qualifier.length() > 0) {
        qualifier.append("/");
      }

      qualifier.append(pathStack.pop());

      final CustomNode matchingNode = root.Find(qualifier.toString());
      System.out.println(matchingNode.Title);
      if (matchingNode != null && matchingNode == target) {
        return qualifier.toString();
      }
    }

    return null;
  }

  public static void main(final String[] args) throws java.lang.Exception {
    final BufferedReader console = new BufferedReader(new InputStreamReader(System.in));

    // Build a test tree (matches the example)
    final CustomNode root = new CustomNode("Root", null);
    final CustomNode userData = new CustomNode("UserData", root);
    final CustomNode ud_browser = new CustomNode("Browser", userData);
    final CustomNode ud_word = new CustomNode("Word", userData);
    final CustomNode priv = new CustomNode("Private", userData);
    final CustomNode priv_word = new CustomNode("Word", priv);

    final CustomNode windows = new CustomNode("Windows", root);
    final CustomNode programs = new CustomNode("Programs", root);
    final CustomNode notepad = new CustomNode("Notepad", programs);
    final CustomNode prog_word = new CustomNode("Word", programs);
    final CustomNode prog_browser = new CustomNode("Browser", programs);

    final CustomNode target = root.Find(console.readLine());

    System.out.println(PleasantSolution2.GetShortestUniqueQualifier(root, target));
  }

}
