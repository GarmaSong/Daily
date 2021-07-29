# 문제

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A **subarray** is a **contiguous** part of an array.

```
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
```

# 로직

#### 문제의 조건

- 배열 중에 인접한 요소들을 더했을 때 가장 큰 값을 리턴하면 됨
- 이때 인접하다는건 연속적으로 요소들이 나열되어 있는것을 말함

#### 내가 생각한 로직

- 이거 옛날에 Repl 풀 때 한번 본거 같은데 사실 이해도 안가고 어떻게 풀었나 기억도 안남.. 뭔가 문제만 본 기억 있었음..
- 문제는 이해가 되는데 어떻게 풀지 몰라서 문제 이해하자마자 답보고 싶은걸 꾹 참고 한 30분 고민했다. 물론 답 안나옴,,,ㅎ,, As always...
- 내가 생각한 무식하지만 생각해낸 방법은 모든 경우의 수를 다 구하는 것이었는데, [1,2,3,4]
  라는 배열이 있다고 할때 index 0부터 시작해서 1-4까지 -> index 1에서 시작해서 2-4까지 ...이런식으로 더해가는 방법이었다..
- 강의를 듣고 이렇게 해결하는건 시간복잡도 O(n^2)에 해당했음.. 최악이라는 말씀..
- 이렇게 모든 경우를 다 구하는 방식을 Brute force 방법이라 한다.. 무차별 대입 공격이라는 무시무시한 이름도 있음..
- 강의에서 듣길 이런 방법은 병목현상, 불필요한 작업, 중복 작업을 하게 되어서 비효율적임..
  ~~- 뭐 하나하나 새로운 배열에 집어 넣어서 만들어서 비교하는 O(n^3)보단 낫지 않나..?~~

#### 해답(Kadane's Algorithm 이용)

- 보고 우와 했음,,, 일단 시간 복잡도는 O(n)의 시간 복잡도를 갖고 입력한 대로만 메모리를 차지한다고 볼 수 있음. 내 논리로는 이해가 안갔는데 보고나서 신기했음. 이런게 가능하구나..

![](https://images.velog.io/images/sgr2134/post/ed7d8ecb-914b-4fd2-9f9d-5c75b693c3a9/image.png)

- 게으름으로 인해 따로 그림을 만드는거보다 유튜브에 잘 설명된거 캡쳐,,(참고로 이 영상 추천,, 아저씨도 너무 재밌고 다양한 방법을 알려줘서 비교하면서 들을 수 있음 [Kadane's Algoritm](https://youtu.be/2MmGzdiKR9Y)
- 일단 원리는 큰값을 판단하기 위해서 두가지를 보는데 하나는 **기준이되는 요소 자체**와 **앞에서 더해졌던것**들을 비교하여 더 큰값을 반환해준다.
- 이미지의 오른쪽 상단의 max에 (-5, 1)이 담겨있는데 그 이유는 기준이 되는 -5와 앞서 더해져왔던 수인 6에 -5를 한 값인 1이 담겨있다. 둘 중 비교하여 큰 수인 1을 담게 된다.
- 이런식으로 최대값을 뱉어내는 상자(화면에서는 파란색 박스)에서 가장 큰값인 6을 반환하면 끄-읏
- 중요한점은 모든 경우의 수를 구하는게 아니라 내 자신과 앞에서 더해왔던것을 비교하며 둘 중 하나만 선택하면 됐었기에 따로 공간을 더 차지할 필요가 없다.. wow..

# 풀이

```
var maxSubArray = function(nums) {
        var sum = nums[0];
        var max = sum;

        for(let i = 1; i < nums.length ; i++){
            sum=(sum+nums[i])>nums[i]?(sum+nums[i]):nums[i];
            max=sum>max?sum:max;
        }
        return max;
   };

```
