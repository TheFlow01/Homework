// 12. 정삼각형 출력하기

var num = 6;
var triangle = '';
for (var i = 1; i < num; i++) {
  for (var j = num; j > i; j--) {
    triangle += ' ';
  }
  for (var k = 0; k < (2 * i) - 1; k++) {
    triangle += '*';
  }
  triangle += '\n';
}
console.log(triangle);