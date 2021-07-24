# 🤔 문제

Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array `nums`. More formally, if there are k elements after removing the duplicates, then the first `k` elements of nums should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return k after placing the final result in the first `k` slots of `nums`.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.

Example 1:

```
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

Example 2:

```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

# 내가 생각한 풀이(틀림 주의..)

- nums 배열을 돌면서 몇번 출현했는지 쌍으로 result에 저장하고 key값의 개수들만 반환(길이)하면 되지 않을까 했지만, 완전 틀린답이었음...
- 왜인지 이유는 고민해봐야할 것 같움 ㅜㅜ
- 아 알겠다.. 배열이 중복을 제거하고 나온 값이랑 같아야하는구나...

```
let result = {}
nums.forEach((x)=>{
  result[x]=(result[x] || 0)+1
})

return Object.keys(result).length;
```

# 원리

- i와 j라는 임의의 변수들을 인덱스의 0과 1로 초기 설정 한 뒤
- j가 nums의 길이만큼 돌면서
- 둘이 같지 않으면 일단 i의 값을 하나 증가 시키고(인덱스의 값 증가) nums[j]의 값을 nums[i]에 할당해준다.
- 그리고 마지막으로 j도 1씩 증가시켜준다.
- 만약 둘이 같은 경우에는 j만 증가시켜 비교시켜준다.
  ![](https://images.velog.io/images/sgr2134/post/e3d089be-6317-412d-800d-93d11bf95679/image.png)

# 해답 중 하나

```
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0; //예외쓰~
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
      j++;
    } else j++;
  }
  return i + 1;
};
```

~~틀리는것도 지겨움,, 도대체 언제쯤 맞춰볼까,,,ㅎㅎ
~~
