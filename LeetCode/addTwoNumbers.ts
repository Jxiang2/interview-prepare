class ListNode {
    val: number;
    next: ListNode | null;
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}


function addTwoNumbers (l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let current1: ListNode = l1;
    let str1: string = "";
    let current2: ListNode = l2;
    let str2: string = "";

    while (current1) {
        str1 = current1.val + str1;
        current1 = current1.next;
    }

    while (current2) {
        str2 = current2.val + str2;
        current2 = current2.next;
    }

    const sumArr: string[] = String(BigInt(str1) + BigInt(str2)).split('');

    const l3: ListNode = new ListNode(Number(sumArr.pop()));
    let current: ListNode = l3;

    for (let i = sumArr.length - 1; i >= 0; i--) {
        current.next = new ListNode(Number(sumArr[i]));
        current = current.next;
    }

    return l3;
};