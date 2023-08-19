function addTwoNumbers(l1, l2) {
  let current1 = l1;
  let str1 = "";
  let current2 = l2;
  let str2 = "";

  while (current1) {
    str1 = current1.val + str1;
    current1 = current1.next;
  }

  while (current2) {
    str2 = current2.val + str2;
    current2 = current2.next;
  }

  const sumArr = String(BigInt(str1) + BigInt(str2)).split("");

  const l3 = new ListNode(Number(sumArr.pop()));
  let current = l3;

  for (let i = sumArr.length - 1; i >= 0; i--) {
    current.next = new ListNode(Number(sumArr[i]));
    current = current.next;
  }

  return l3;
}

module.exports = addTwoNumbers;
