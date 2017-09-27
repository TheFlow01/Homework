// 11. 트리 출력하기

var triangle1 = '';
var triangle2 = '';

for (var i = 0; i < 3; i++) {
  for (var j = 0; j <= i; j++) {
    triangle1 += '*';
  }
  triangle1 += '\n';
}

for (var k = 0; k < 5; k++) {
  for (var l = 0; l <= k; l++) {
    triangle2 += '*';
  }
  triangle2 += '\n';
}

console.log(triangle1 + triangle2);