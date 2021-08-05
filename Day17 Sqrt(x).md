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

#### 해답풀이 👏

```
var mySqrt = function(x) {
    let left = 1;
1)    let right = x;
    if(x < 2) return x;


2)    while(left < right) {
        const mid = Math.floor((left + right) / 2)
3)        if(mid*mid === x) return mid
4)        else if(mid*mid >x) right = mid
5)        else left = mid+1
    }
    return left - 1
};
```

너무나도 깔끔하게 느껴지는 해답.. 접근방법은 비슷했던 것 같지만, 제곱근을 구하기 위해서 인자x까지의 모든 수들을 나열한 반면 해답은 그냥 수 자체로만 비교한 느낌..
인간인 나는 모든 수들이 나열되고 찾아야 한다고 생각했지만 사실상 컴퓨터에게 그런건 필요없는 과정이었던 것으로 보인다. 참고 블로그: [Squrt(x)](https://dev.to/cod3pineapple/69-sqrt-x-javascript-solution-1hn0)

1. 0과 1은 제곱근으로 자신을 반환하기에 예외처리를 해준다.
2. 일단 이진탐색을 이용하고, right가 left보다 클때까지 반복문을 돌려준다. 중간을 기준으로 자르기 때문에 변수 이름을 mid라고 설정하고 left와 rigit 합을 반으로 나눈값으로 계속 업데이트 시켜준다.
3. 만약 반으로 잘랐는데 그것의 제곱이 들어온 인자와 같다면 반이 제곱근이 되는것이기에 mid를 반환하면 된다.
4. 만약 mid를 제곱한게 인자인 x보다 크면 범위를 작게 좁혀야 하기에 right값을 mid에 할당해준다.
5. 그렇게 반복하다가 right가 left보다 작아지기 직전에서는 mid값에 1을 더해준다.
   그러고 반환을 할때는 left -1을 해주는데 이게 그냥 해보면 아는데 설명하기가 어렵네;
