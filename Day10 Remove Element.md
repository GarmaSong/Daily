# 🤔 문제

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of nums should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` after placing the final result in the first `k` slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

```
Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).v
```

# 🤘 풀이

```
var removeElement = function(nums, val) {
    for(let i =0; i<nums.length; i++){
  if(nums[i] === val){
    nums.splice(i, 1)
    i = -1
  }
}
    return nums.length

};
```

# 💁 설명

- 완벽하진 않지만 처음으로 나의 접근법이 해답 중 하나와 90%정도 맞아 떨어짐..(물론 쉬워서 그렇기도 하지만)
- 저번 문제에서 리턴받는 배열의 값을 제대로 고려하지 않았기 때문에 이번엔 잘 확인하려고 했으나 또 살짝 어긋났다.. 그래서 어떤 부분이 잘못되었는지 확인하고 수정 완료..!
- 일단 문제의 조건은 배열에서 반복되는것을 제거하는 것, 그리고 반복요소 제거한 배열이 총 몇개의 요소를 가지고 있는지 return. 여기서 중요한건 새로운 배열을 만들면 안됨.
- 처음 메서드를 생각했을때 filter로 거르면 되지 않나 싶었는데 이건 새로운 배열을 만들기에 패스, splice라는 자르고자하는 위치와 자를 개수를 정해주는 메서드를 이용하여 풀이 완료
- 배열을 순차적으로 돌면서 제거할 대상인 val와 같은 수가 나왔을 때 해당 위치부터 자기 자신을 자른다.
- 이후 잘려진 배열의 인덱스가 당겨져야 하기 때문에 -1을 해주었다.
- return 될 값은 타켓값이 삭제 되고 남은 것들의 개수!
