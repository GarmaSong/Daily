> 최근 Leetcode에서 문제를 풀다가 너무 한계에 부딪히는것 같아 다시 복습을 해보고자 Repl로 돌아갔으나 leetcode의 TwoSum 문제와 같았다.. 혼자 풀어보긴 했으나, 여러 해답이 나와있는 leetcode의 특성 상 재밌고 유익한 풀이가 있어서 기록하고자 가져왔당

# 📝문제

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

```
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
```

# 😎 풀이

#### 내가 풀었던 방법

- 원시인이 생각할 수 있는 가장 원시적인 방법인 이중 for문,,, 뚜둥,,,
- 물론 코드가 직관적이고 보기는 편하지만, 시간 복잡도의 효율성은 꽝인,,,O(n2)의 시간 복잡도를 갖는 그런 코드이다..

```
var twoSum = function(nums, target) {
  for(let i=0; i<nums.length-1; i++){
    for(let j= i+1; j<nums.length; j++){
      if(nums[i] + nums[j] === target)
        return [i, j]
    }
  }
};
```

#### Hash를 이용한 풀이

- 이 간단한 문제는 Hash의 개념을 사용할 때 더욱 효과적으로 풀 수 있다!
- 해시 함수안에 인자로 들어온 nums의 값과 해당 인덱스를 저장한 뒤, 타겟값과 비교해서 조건에 맞으면 해시의 인덱스와 비교 대상이 되었던 인덱스 값을 배열에 넣어 반환해준다.
- 실제 풀이를 보기 앞서 hash에 대해 더 궁금해졌다! 그래서 한번 알아본다!!!

#### Hash 🍠 ~~potato~~

- 해시 함수는 임의의 길이를 갖는 데이터를 고정된 길이의 데이터로 **매핑**하는 함수를 말함. 쉽게 아무리 큰 숫자를 넣더라도 정해진 크기의 숫자가 나오는 함수.
- 뭔가 내가 이해할 때는 JS에서 객체와 같이 key와 value로 이루어진 한쌍으로 느껴졌다.
- 이러한 해시 함수를 적용해서 나온 고정된 길이의 값을 해시값이라고 한다. 이 값은 또한 해시코드, 해시섬, 체크섬으로 불린다.
- key값이 배열의 인덱스로 변환되기 때문에 검색과정의 평균적인 시간 복잡도가 O(1)에 수렴하게 된다. 따라서 상대적으로 CPU,메모리 시스템 자원을 덜 소모하는 특성이 있다.

```
const twoSum = (nums, target) => {
1)  hash={}
2)  for(let i =0; i<nums.length; i++){
    let n = nums[i]
3)   if(hash[target-n]!==undefined){
      return [hash[target-n],i]
    }
4)    hash[n]=i
  }
};

```

1. hash로 쓸 빈 객체를 만들어준다.
2. 반복문을 돌면서 새로운 변수 n에 nums 배열의 값을을 하나씩 넣어주면서 다음의 조건문을 비교한다.
3. hash안의 키값을 target에서 앞서 저장한 nums 배열의 각 원소의 값들을 빼주어 비어있지 않으면, 즉 해당하는 값이 hash안에 있으면 해당하는 해시값 key의 value값(얘는 nums의 index가 들어가 있음)과 조건을 만족시키게 해준 i의 값(nums의 index)을 배열로 만들어 반환해준다.
4. 그렇지 않은 경우(초기 해시값도 없으므로 사실 바로 4단계로 넘어옴) hash에 key값은 nums의 원소 값들을 그리고 그 value는 nums의 인덱스로 저장해준다.

### 아고아고야..

이해가 될듯 말듯한 해시이다.. 해시가 왜 빠른지는 알겠다. 연산식을 통해서 값을 찾아내는 다른 자료구조에 비해 이미 고정된 key와 value값을 가지고 있는 해시는 부르는데 크기나 순서에 상관없이 똑같은 시간이 걸리기 때문인데, 머리가 아픈건 이렇게 해시구조를 구현해봐라~ 했을때 내 머릿속에선 이런 순서가 아직은 자연스럽게 나오지 않는다는 것이다. 따라서 조금 더 이해가 필요할 듯 하지만 문제를 푸는것 자체는 솔직히 재밌긴하다.. ㅎㅎ
