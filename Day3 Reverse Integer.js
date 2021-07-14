// # 🤔 문제
// Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-231, 231 - 1]`, then return `0`.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// ```
// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0
// ```
// # 🤘 풀이

let reverse = function (x) {
  const reversed = x.toString().split('').reverse().join('');
  return Math.sign(x) * parseInt(reversed);
};

// # 💁 설명
// - 일단 이 문제는 이전에 Repl을 풀면서도 접해보았던 문제이다.
// - 그 전에는 배열을 만들고 하나씩 돌면서 거꾸로 만들고 조건문을 통해 앞에 0이 있으면 빼고 -가 있으면 붙이는 방식이었는데 조금 더 효율적이고 깔끔한 식을 찾고자 찾아보았다.
// 1) x라는 parameter에 숫자의 값이 들어오면 이를 반대로 바꾸는게 핵심이므로 먼저 toString을 통해 문자 변환을 한다. (문자열을 거꾸로하는 메소드를 이용하기 위함)
// => x=-120라고 했을 때 '-120'
// 2)  split를 통해 하나하나를 쪼개준다 => '-','1','2','0'
// 3) reverse를 통해 순열을 반대로 바꿔준다. => '0','2','1','-'
// 4) join을 통해 ''을 기준으로 다시 합쳐준다 => '021-'
// 이렇게 기본적인 값 세팅을 마치고 - 나 0 처리해주기
// 5) Math.sign(x)은 안의 인자가 가지고 있는 부호값만 리턴해준다. 총 5개 -1,1,0,-0,nan을 리턴함. 여기서 인자로 x가 들어간 이유는 원래의 숫자의 부호를 파악해서 곱해주기 위함
// 인자는 -120이므로 Math.sign(x)의 값으로 -1이 나온다. =>-1 * parseInt~
// 6) 나온 -1과 문자열로 되어있는 reversed 즉 4)의 값을 int(정수)로 바꾸어주는 parseInt를 사용하여 숫자 그리고 정수로 변환한다. => -1 * 21 = -21
