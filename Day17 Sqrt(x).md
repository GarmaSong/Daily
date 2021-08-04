# 문제

Given a non-negative integer `x`, compute and return the square root of `x`.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

```
Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
```

```
Example 1:

Input: x = 4
Output: 2

Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
```

# 로직

#### 내가 생각했던 로직

- 역시나 또 원시인같은 방법으로 풀려고 함..
- 인자 x가 들어왔을 때 이걸 소인수분해 해서 제일 작은 단위로 쪼개고 그 안에 루트값이 있는건 소수들로 한정되어 있기 때문에 그 경우들을 지정해서 값들을 곱해주는,,, 또 생각은 엄청나지만 로직으로 구현하기 굉장히 까다로운 문제 발생... 빠르게 다른 원리를 찾아나섰다..

#### 해답 중 하나

- 약간 신셰계였는데 이진탐색법을 이용해서 제곱이 된 수들 중에서 인자로 들어온 x와 비교해서 위치를 알아내는 방법인것 같다..
  ![](https://images.velog.io/images/sgr2134/post/aef48e7d-3663-403f-bcf0-c18305690eea/image.png)
- 요런 느낌쓰

# 풀이

- 풀이를 보고 이해하는건 이진탐색을 위해 중간을 자른것까지밖에 이해를 하지 못했다.
- 그러기도 하고 스스로 풀어보고 싶기도 해서 오늘 고민해보고 내일 다시 돌아오겠다..

#### 내가 생각했던 풀이(틀림 주의..)

```
var mySqrt = function(x) {
1)  const arr = [];
    const power = [];

    for (let i =1; i<=x; i++){
      arr.push(i);
      power.push(i*i);
    }

2) let mid = Math.floor(power.length/2);

3) while(power[mid]>x){
  power.splice(mid, mid);
  mid = Math.floor(power.length/2);
}

4) return arr[mid]

};

```

아.. 이번에는 정말 노력했으나 잘 되지 않았다.. 조금 아쉬운 마음도 있지만, 너무 머리가 아프기 때문에 일단 내가 푼 방법을 업데이트 하고 조만간 더 연구를하거나 해답을 보고 이해할 예정

1. 로직의 그림자료와 같이 비교하기 위해 x값이 들어왔을 때 1부터 x까지의 수를 arr라는 배열에 제곱한 수들의 모음인 power를 만들어 주었고 안에 값들을 넣었다.
2. 하하 이진탐색법을 배웠다고 또 써보고 싶으니까 mid라는 변수를 설정해서 배열 길이의 반씩 잘라나갈 예정...
3. 반씩 잘려나갔을 때의 값과 비교해서 x가 더 큰값이 나올때까지 계속 잘라주고 mid를 업뎃해줌
4. 자를대로 잘려 결국 x가 중간값보다 커지면 마지막 mid를 인덱스로 하는 arr의 값을 반환해준다..

! 근데 틀림,,, 하지만 아침부터 너무 오랜 시간을 잡고 있어서 내일 다시보자 이자식,,
