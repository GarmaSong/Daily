# 문제

Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

```
Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

Example 3:

Input: digits = [0]
Output: [1]
```

# 로직

#### 내가 생각한 로직(네..오늘도 잘못 접근했습니다...)

- 언제나 그렇듯 문제를 이해하고 이거 왠지 개꿀인데..? 라고 생각하다가 뒤통수를 맞는다.
- 나의 원시인같은 로직은 이렇다..

```
1) 배열을 join으로 묶어서 새로운 string을 만든다
2) 새로운 변수 result에 1)에서 나온 string을 parseInt를 통해 숫자로 바꾸고 1을 더해준다.
3) 새로운 변수를 만들어 2)의 결과를 string으로 다시 전환해준다.
4) 3)에서 나온 string을 한글자씩 split 해서 return 한다.
```

- 이렇게 했더니 아마 정수 유효범위 밖에 있는 숫자는 처리를 못하는 테스트 케이스가 생긴것으로 기억..

#### 해답

- 숫자로 변환해서 계산을 했던 나의 방식과는 달리 사람들은 배열 자체에서 계산을 해서 리턴하는것으로 보였다.
- 거의 대부분의 해답들이 배열의 끝자리부터 반복문을 돌면서 끝자리가 9미만인 숫자들은 끝자리에 +1만 하여 결과값을 반환하였다.
- 끝자리가 9로 끝날 경우에는 9에 1을 더한 값의 끝은 0이 되기에 0으로 교체해주고, 반복문을 통해 마지막을 제외한 끝값부터 다시 앞선 로직을 반복하게 되어있다.
- 만약 들어온 수가 999나 9999와 같이 9로만 이루어져있다면 반복문을 통해 다 0으로 변환되고 한자리가 더 늘어나기에 끝에 0을 추가하고 맨 앞자리는 1로 바꾸어서 계산된 수를 반환시켜준다.

# 풀이

```
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--){
        if(digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }

    let res = Array(digits.length + 1).fill(0);
    res[0] = 1;
    return res;
};
```
