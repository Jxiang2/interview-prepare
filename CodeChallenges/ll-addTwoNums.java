/**
 * You are given two non-empty linked lists representing two 
 * non-negative integers. The digits are stored in reverse order, 
 * and each of their nodes contains a single digit. Add the two 
 * numbers and return the sum as a linked list.
 */

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

// ts solution
// function addTwoNumbers (l1: ListNode | null, l2: ListNode | null): ListNode |
// null {
// let current1: ListNode = l1;
// let str1: string = "";
// let current2: ListNode = l2;
// let str2: string = "";

// while (current1) {
// str1 = current1.val + str1;
// current1 = current1.next;
// }

// while (current2) {
// str2 = current2.val + str2;
// current2 = current2.next;
// }

// const sumArr: string[] = String(BigInt(str1) + BigInt(str2)).split('');

// const l3: ListNode = new ListNode(Number(sumArr.pop()));
// let current: ListNode = l3;

// for (let i = sumArr.length - 1; i >= 0; i--) {
// current.next = new ListNode(Number(sumArr[i]));
// current = current.next;
// }

// return l3;
// };
