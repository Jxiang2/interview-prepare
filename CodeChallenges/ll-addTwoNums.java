package CodeChallenges;

import java.math.BigInteger;

class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

class AddTwoNums {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        String firstNumber = "";
        String secondNumber = "";
        while (l1 != null) {
            firstNumber = l1.val + firstNumber;
            l1 = l1.next;
        }
        while (l2 != null) {
            secondNumber = l2.val + secondNumber;
            l2 = l2.next;
        }

        String result = "" + (new BigInteger(firstNumber).add(new BigInteger(secondNumber)));
        ListNode output = new ListNode(0);
        ListNode cur = output;
        for (int i = result.length() - 1; i >= 0; i--) {
            cur.next = new ListNode(Character.getNumericValue(result.charAt(i)));
            cur = cur.next;
        }
        return output.next;
    }
}
