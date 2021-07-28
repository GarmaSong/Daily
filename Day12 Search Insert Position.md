# 문제

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

```
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

Example 4:

Input: nums = [1,3,5,6], target = 0
Output: 0

Example 5:

Input: nums = [1], target = 0
Output: 0
```

# 로직

#### 내가 생각했던 로직(또 틀림 주의;)

- 일단 문제의 핵심은 배열을 돌면서 같은 수를 발견 했을 때, 발견하지 않았을 때로 나뉜다고 생각했다.
- 발견하지 않았을 때는 인덱스의 값을 비교해서 정렬된 배열안의 순서에 맞게 넣어준다.
- 처음에 생각한건 for문을 돌면서 같은 인덱스는 뱉어주고 / 배열에 같은 값이 없을 때는 target보다 작은 i와 target보다 큰 i+1사이에 splice를 사용해서 넣어주면 되지 않나 싶었는데
- 일단 이게 틀린게, 내가 필요한건 배열이 아니라 인덱스 값만 알면되고, 배열의 아예 처음이나 끝에 삽입해야 하는 경우를 처리하지 못한다.
- 또한 과정속에서 연결리스트를 이용하나..?라고 생각했으나 아니었던걸로..ㅎㅎ

#### 찾아본 해답

- 해답으로는 크게 두가지 방법이 있었다. for문을 돌면서 값을 비교하고 target과 주어진 배열의 인덱스를 비교해서 알맞은 값의 인덱스를 뱉어내는 방식
- 이진탐색(Binary Search)기법을 이용해서 중간을 잘라내면서 비교하는 방식
- 이진탐색 기법이 시간복잡성에서 더 좋다고 하지만 결과값을 비교했을 때 사실 위의 두 방법이 그렇게 차이가 나진 않았다.. 아주 살짝 메모리가 줄어든 정도..?

# 반복문을 이용한 풀이

```
var searchInsert = function(nums, target) {
  for(let i =0; i<nums.length; i++){
1)    if(nums[i]>=target)
    return i
  }
2)  return nums.length
}
```

## 설명

- 솔직히 이 풀이를 보고 시간 복잡성은 안나올지라도 조금 감명 받았음... 어떻게 이렇게 간편하지 + 바보같은 나도 너무 이해가 쉬워서 개인적으로는 너무 좋았다..
- 포인트는 우리는 단지 nums배열의 값을 비교하며 알맞은 자리의 인덱스 값만 보내주면 됨..

1. target의 숫자가 nums 배열 안의 값보다 작거나 같다는 가정하에 for문을 돌면서 값이 같거나 nums[i]가 target보다 클 때의 인덱스를 뱉어낸다.
2. 그 이외의 경우는 target의 값이 nums 배열의 모든 수보다 큰 경우밖에 없으므로 제일 끝의 인덱스에 추가하면 되므로 nums.length 값만 뱉어내면 끄-읏!

# 이진탐색을 이용한 풀이

- 일단 이진탐색이란 간단하게 오름차순으로 정렬된 리스트가 있을 때 특정한 위치 값을 찾을때 사용하는 알고리즘으로 중간 값과 결과값들을 비교해나가면서 조건에 맞는 값을 찾아낸다.
- 정렬된 리스트에만 사용할 수 있다는 단점이 있지만 검색이 반복될 때마다 목표값을 찾을 확률이 두배가 되므로 속도가 빠르다는 장점 있음(내 생각엔 볼륨이 큰 배열 같은 경우에 두드러지게 차이날 듯.. 그래서 시간 복잡도가 O(log n)인 듯,, 배열이 짧은거랑 긴거랑 그렇게 차이가 안남.

```
var searchInsert = function(nums, target) {
1)leng = nums.length
  left = 0;
  right =leng-1
  mid = 0

  if(!leng) return 0

2)  while(left<=right){
    mid = Math.floor((left+right)/2)
3)   if(nums[mid]>target){
      right = mid -1
4)    } else if(nums[mid]<target){
      left = mid +1
    } else {
5)      return mid
    }
  }
6)  return (nums[mid] > target) ? mid : (mid+1)
};
```

## 설명

- 이진 탐색법을 이용하기 위해서 우리는 초기 설정을 해줘야 하는것 같은데 배열의 시작점(left) 중간점(mid) 끝점(right)과 같은 것이다.
- 중간점을 기준으로 작으면 왼쪽으로 크면 오른쪽으로 가서 또 중간을 나누고 조건에 맞을 때까지 반복하는 구조이다.

1. 앞서말한 초기 세팅 left는 배열의 처음이므로 0값, right는 배열의 마지막이므로 length-1, 중간은 반복문을 돌면서 바꿔나갈 예정이므로 임의의 값 0을 넣었다.
2. left값은 대체로 right보다 작고 반복해도 같은 경우가 최대이기 때문에 그 안에서 반복문을 돌면서 mid값에는 left와 right를 더해서 반을 나눈 값을 계속 업데이트 해준다.
3. 먼저 반을 나누었을때 target이 배열의 중간값보다 작은 경우에는 초기의 중간값을 나눈 것에서 right부분이 필요없기 때문에 right값에 중간값(mid)-1을 해준다.
4. 반대의 경우에는 왼쪽 값이 필요없기 때문에 왼쪽값에 중간으로 나눈값에 +1을 해주어 초기 왼쪽 값들을 날려준다.
5. 그렇게 반복해서 target과 중간값이 일치하는 경우가 나오면 mid를 반환해준다. (3)4)에 모두 해당하지 않기에 같다고 판단)
6. mid와 target값이 중복해서 나타나지 않을 때는 제일 마지막으로 실행되어 나온 mid값을 기준으로 target보다 중간값이 크면 그냥 mid의 인덱스를 뱉으면 되는것이기에 mid 반대의 경우에는 mid에 +1값을 적용해서 반환해준다.

~~알고리즘을 알아가는건 재밌지만, 언젠가 내 생각으로 이런 로직들을 짤 수 있을까나..?~~
