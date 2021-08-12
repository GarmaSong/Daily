Given the `head` of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

```
Example 1:

Input: head = [1,1,2]
Output: [1,2]

Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]
```

# 연결 리스트

- 문제는 어렵지 않지만 풀기 위해서 연결 리스트의 개념을 알고 있어야 한다. 공부를 위해 [소년코딩](https://boycoding.tistory.com/33) 님의 블로그를 참고하였다.
- 연결리스트란 배열처럼 원소를 차례로 저장하지만 배열과는 다르게 원소들이 연속적으로 위치하지 않는다.

### 연결 리스트의 특징

- 연속되는 항목들은 포인터로 연결된다.
- 마지막 항목은 Null을 가리킨다.
- 프로그램이 수행되는 동안 크기가 커지거나 작아질 수 있다. (아마 추가와 삭제를 주로 하다보니 그런것으로 추측한다.)
- 배열에 비해 데이터의 추가/삽입 삭제가 용이하나 순차적으로 탐색하지 않으면 특정 위치의 요소에 접근하기가 힘들기 때문에 탐색 속도가 떨어진다.
- 따러서 요소의 추가, 삭제가 많다면 => 연결리스트
- 탐색 또는 정렬을 자주 한다면 => 배열

### 연결리스트의 구성

![](https://images.velog.io/images/sgr2134/post/8a041239-ab68-4f4f-b279-fa5eff5fb5c1/image.png)

- 연결 리스트에서 각 원소는 자신과 다음 원소를 가리키는 포인터가 포함된 노드로 구성된다.
- 즉 '데이터를 저장할 장소'와 '다른 변수를 가리키기 위한 장소'로 구분되어 있다.
  ![](https://images.velog.io/images/sgr2134/post/e6813d22-0809-4be4-960d-554a36959c09/image.png)
- 연결된 리스트는 위와 같은 모습을 나타낸다.

### 연결리스트 만들기

- 일반적으로 연결리스트는 단일 연결 리스트를 의미한다.
- 단일 연결 리스트의 연결 형태는 한쪽 방향으로 전개되고 시작과 끝이 존재함
- 보통 head는 연결이 시작되는 지점
- 리스트가 비어있지 않을 때 리스트는 현재의 값을 담아두고 다음이 null이 되는 지점에서 루프를 끝낸다.
  ![](https://images.velog.io/images/sgr2134/post/2574304b-c297-420e-9360-ccc0e5cf71a3/image.png)

# 풀이

```
head = [1, 1, 2, 3, 3]
var deleteDuplicates = function(head) {
 1.   if (!head || head.next == null) return head;

 2.   let curr = head;
     let next = head.next;

 3.   while (next != null) {
 4.       if (curr.val === next.val) {
            curr.next = next.next;
        } else {
 5.          curr = curr.next;
        }
 6.       next = next.next;
    }

 7.  return head;
};
```

- 일단 인자로 들어온 head는 배열의 모습같이 생긴 연결리스트이다. (runJS에서 잘 안돌아감 ㅜ) 따라서 현재값과 다음 값을 가지고 있다.

1. 일단 예외처리는 필수 리스트가 없거나 다음이 null일 때(즉 하나의 원소밖에 없을 때) head를 그대로 반환해준다.
2. 변수 curr과 next를 만들어준 뒤 현재값과 다음을 가리킬 수 있게 한다.
3. 과정을 수행하며 마지막 값이 null이 나오지 않을 때까지 반복문을 사용하여 중복되는 값들을 없애기 위해 포인터를 바꾸어 줄 것이다.
4. 현재의 값과 다음의 값과 같다면 즉, 중복이 된다면 현재의 다음값의 포인터를 다음의 다음으로 가리키게 한다. [1, 1, 2, 3, 3]이 head에 있다면 두번째 1(nuxt.val)은 첫번째 값(curr.val)인 1과 같기에 현재 값을 기준으로 다음의 다음 2에 대해 포인터를 가리키게 됨
5. 만약 그렇지 않다면, 중복되지 않는다면 현재값은 그냥 다음으로 넘어가게 됨
6. 그리고 다음 값은 현재값 기준 다음의 다음을 가리키게 됨(중복이 되든 안되었든 한차례 수행이 끝났기 때문에 이런 작업을 하는 것으로 추측)
7. 그렇게 순차적으로 값을 제거해나가고 마지막 반환 값으로 head를 반환해준다.
