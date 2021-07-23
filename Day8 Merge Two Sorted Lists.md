# 문제

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: l1 = [], l2 = []
Output: []

Example 3:

Input: l1 = [], l2 = [0]
Output: [0]

# 풀이

```
/**
 * Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
};
```

# 문제

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: l1 = [], l2 = []
Output: []

Example 3:

Input: l1 = [], l2 = [0]
Output: [0]

# 로직

#### 내가 생각했던 로직

- 문제만 보았을 때 그냥 두 배열을 하나로 합치는거 아닌가 해서 굉장히 간단하다고 생각했다.
- 하지만 계속 통과가 안되길래 뭐지 했는데 연결리스트를 활용해서 푸는 문제였음..

#### 참고한 로직

- 솔직히 자료구조의 개념이 약하다보니 답을 보아도 이해가 되지 않는 사태의 발생,,,
- 연결리스트와 노드의 개념을 이해하느라 조금 힘들었다.
- 내가 이해한 바로는 현재값을 담는 val와 다음 값을 지칭하는 next를 이용해서 리스트 l1과 l2 중 최소 값을 빼주고 재귀 함수를 통해서 next가 null이 될 때까지 두 리스트를 비교하며 다음 값을 넘겨준다.

# 풀이

```
/**
 * Definition for singly-linked list.
0)  function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
1)  if (!l1) return l2;
    if (!l2) return l1;

2)  if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
3)  l2.next = mergeTwoLists(l2.next, l1);
    return l2;
};
```

# 설명

0.

- Leet Code에서 전제로 하고 있었던 리스트노드 함수를 이용한다. 이 함수는 리스트를 생성하는 함수인 것 같다. 그래서 현재값을 가리키는 val와 다음 값을 가리키는 next로 이루어져있다.
- 리스트의 개념을 보면 초기에 head라고 하는 빈 공간에 요소들을 하나씩 담아 나간다. 여기서 그 빈공간의 역할을 하는게 val인 듯 하다.
- 데이터를 담는 값과 다음을 지칭하는 포인터로 구성되어있는 노드의 특성을 이용해서 next라는 변수를 통해 다음 값을 가리킬 수 있게 함.

1. 일단은 예외처리

- 비교하려는 두 리스트가 하나라도 없으면 있는 리스트만 반환 시킨다. 이 때 리스트들은 이미 정렬이 되어있는 상태이기에 그대로 반환하면 ok

2. 첫번째 요소부터 비교하기

- list1과 list2의 첫 요소를 비교해서 list1이 더 작으면 list1의 다음 값과 l2의 첫요소를 비교할 수 있도록 재귀함수를 통해 나타내고 더 작은 값이였던 list1을 return 하며 하나씩 연결 리스트를 채워나간다.

3. 반대의 케이스

- 반대의 경우에는 l2 next와 l1 비교 후 더 작은값이였던 l2의 요소를 리턴해준다.

## 후기..?

- 자료구조의 개념을 이해한다면 어려운 문제는 아닐것이라고 생각하지만 리스트의 개념을 처음 공부한 나로써는 이틀을 싸맬정도로 이해가 어려웠다.
- 그럼에도 불구하고 이해하고 싶은 마음이 강했고 어떤 순서에 의해 이렇게 처리가 되는구나 이해하는게 재밌었다. 진짜로,, 물론 그게 맞는지는 확실하진 않지만 이렇게 재미를 느끼면서 오래오래 해갈 수 있으면 좋겠다. 그리고,, 언젠간 이런 구조들을 내가 직접 적용하면서 풀 날도 오길!! 화이팅이다 화이팅이야!
