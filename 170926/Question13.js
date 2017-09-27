// 13. 역정삼각형 출력하기

var num = 5;
var triangle = '';
for (var i = num; i > 0; i--) {
  for (var j = num - i; j > 0; j--) {
    triangle += ' ';
  }
  for (var k = 0; k < (2 * i) - 1; k++) {
    triangle += '*';
  }
  triangle += '\n';
}
console.log(triangle);