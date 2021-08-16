# 문제

You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

```
Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1.
The 0 is only there to ensure the merge result can fit in nums1.
```

# 풀이

#### 나의 풀이(부끄러움 주의,, 하다 말았음 주의 틀림 주의 )

```
nums1.splice(nums1[nums1.length-m-1],m)


for(let i =0; i<=m; i++){
  for(let j =0; j<=n; j++){
    if(nums1[i]<=nums2[j]){
      nums1.splice(nums1[i+1],0, nums2[j])
      i++
    } else if(nums1[i]>nums2[j]){
      nums1.splice(nums1[i-1],0,nums2[j])
    }
  }
}

```

더럽고 비효율적인 코드에 심심찮은 사과의 말씀을...

- nums1에 nums2 값들을 오름차순에 맞추어 넣으면 되는 문제라고 생각했다. 과정에서 0은 무시를 하고
- 그래서 일단 예제에 나온것처럼 뒤에 나올 0들은 모두 잘라버림
- 이중 for문을 사용해서 nums1의 i와 nums2의 j 인덱스를 비교해서 큰걸 뒤로 작은걸 앞으로 넣고 싶었으나, 언제나 그랬듯 실패,, ^^
- 제한시간을 오바했기에 빠르게 답을 보고 연구를 한다..(보고싶어서 그런거 절대 아님,, ㅎㅎ)

#### 해답

- 포인터의 개념을 이용한 문제 였다. 실제 JS에서는 직접적인 포인터의 개념은 없지만 포인터가 동작하는 원리를 이용하여 문제를 푼 것처럼 보였다.
  **_포인터란? 프로그래밍 언어에서 다른 변수, 혹은 그 변수의 메모리 공간주소를 가리키는 변수를 의미함_**
- 여하튼 변수의 주소값 배열에서는 인덱스를 이용해서 푸는 문제라고 생각했다.

```
var merge = function (arr1, m, arr2, n) {
1. let first = m - 1;
   let second = n - 1;

2. for (let i = m + n - 1; i >= 0; i--) {
    if (second < 0) {
      break;
    }

3.  if (arr1[first] >= arr2[second]) {
      arr1[i] = arr1[first];
      first--;
4.  } else {
      arr1[i] = arr2[second];
      second--;
    }
  }

5. return arr1;
};
```

- 많은 풀이가 있고 정말 짧은 풀이도 있지만, 그닥 이해가 가지 않는 풀이가 좋은 풀이인지는 모르겠다. 물론 내가 이해하고 어떻게 줄일 수 있을지 고민하는 부분은 필요하다고 생각하지만..
- 그 중 내가 가장 이해할 수 있었던 풀이를 데려왔다.

1. 여기서 재밌는건 arr1과 arr2 두개의 배열의 뒤부터 비교를 한다는 것이다. 원래 포인터문제는 이렇게 푸는건가 싶었는데 내 생각엔 이미 각각의 배열은 오름차순이 되어있기 때문에 뒤에서 비교하는게 조금 더 효율적인 것으로 판단된다. index를 비교하는것이기에 length인 m과 n에서 각각 1씩 빼줌
2. 결국 m과 n을 더한 배열을 만들것이기에 반복문의 초기값은 m+n을 더한 것에서 -1(인덱스~)을 하고 뒤에서 부터 비교를 하면서 i가 0보다 작아지기 전까지 해준다.
   그러면서 비교하려는 두번째 배열의 요소들을 전부다 끼워넣어주면 second는 0이 되기에 반복문을 탈출한다. (이외에도 아예 두번째 배열이 없을 수도 있기에 그때도 바로 탈출~!!)
3. 그렇다면 이제 본격적으로 뒤에서부터 비교를 한다. 만약 배열1의 값이 배열2보다 크면 arr1의 마지막 값은 배열 1의 값이 되겠지 그렇게 하고 그 다음 앞을 비교할 수 있도록 first를 하나 빼준다.(포인터를 옮겨줌)
4. 그렇지 않을 경우(arr2의 값이 클 경우) arr1의 마지막 자리를 arr2의 값을 넣어주고 arr2의 그 다음 값을 비교할 수 있도록 second를 하나 빼준다.
5. 이 과정을 2의 조건이 만족할때까지 반복한다. 그러면서 arr1은 알아서 정렬해나갈 것임!!그렇게 다 끝나면 나는 arr1을 반환하면 끝!!
