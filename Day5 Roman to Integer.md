# 🤔 Roman to Integer

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, `2` is written as `II` in Roman numeral, just two one's added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

I can be placed before `V` (5) and `X` (10) to make `4` and `9`.
X can be placed before `L` (50) and `C` (100) to make `40` and `90`.
C can be placed before `D` (500) and `M` (1000) to make `400` and `900`.
Given a roman numeral, convert it to an integer.

```
Example 1:

Input: s = "III"
Output: 3
```

# 🤓 풀이

```
1) function romanToNum(s) {
2)  const numObj = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };

3) const sArr = s.split("");
  for (i in sArr) {
    sArr[i] = numObj[sArr[i]]
  }
  let result = 0;
4) if (!s) { return false };
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] < sArr[i + 1]) {
      result -= sArr[i];
    } else {
      result += sArr[i];
    }
  }
    return result;
}
```

# 🕺 설명

1. 함수 romanToNum은 s를 인자로 받는데, 그 인자는 로마자로 들어온다. 이 함수에서 우리는 들어온 로마자의 각각의 글자를 숫자로 변환한 뒤, 각각의 글자를 계산하여 어떤 수인지 나타내려고 한다.
2. 먼저 로마자를 숫자로 담기 위해서 나올 수 있는 모든 로마자의 문자를 숫자로 담은 객체를 하나 만들어준다.
3. 빈 배열인 sArr는 로마자 각각의 숫자를 하나씩 떼어내서 배열의 값으로 담는다
   `예: 'XVII' 라는 문자가 들어왔을 때, sArr =['X', 'V', 'I', 'I']` -그리고 만들어진 sArr배열의 문자를 숫자로 바꾸어주기 위해 `sArr[i] = numObj[sArr[i]`라고 식을 만들어주었다. -그 다음, 배열 안에 들어있는 값들을 계산해서 차후 새로운 결과값에 담아주기 위해 result를 선언해주었고 0으로 초기값을 세팅해주었다.
4. sArr 배열의 값을 계산해 result에 넣어주기 위해서 for문 안에서 모든 배열의 값을 비교해 계산 할 수 있는 식을 만들어준다. 그 전에 s의 값이 없을때는 false를 리턴하여 예외처리를 먼저 해주었다.
   _
   ! 로마자 계산법 -이때 로마자의 계산법을 알고 있어야 하는데 로마자의 경우 앞글자가 뒷글자보다 값이 작은 경우 뒷글자의 값에서 앞글자의 값을 빼준다. `IV(5-1)`와 와 같이 뒤의 V에서 I를 빼준 값인 4가 나온다. -만약 앞글자가 뒷글자의 값보다 크거나 같은 경우엔 수들을 더해준다. `III(1+1+1)`, `VII(5+1+1)`
   _

로마자의 계산법에 따라 for문이 sArr의 길이만큼 돌면서 각 인덱스를 비교한다. 만약 뒷글자가 더 크다면 `if(sArr[i] < sArr[i+1])` result에는 뒤에서 앞에것을 뺀 값을 넣어준다.`result -=sArr[i]`

그렇지 않다면, result에는 앞에것과 뒤의 값을 더해서 넣어준다.`result +=sArr[i]`
