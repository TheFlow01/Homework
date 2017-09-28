// 정삼각형 함수

var makeTriangle = function(line) {
  var triangle = '';
  for (var i = 1; i <= line; i++) {
    for (var j = line; j > i; j--) {
      triangle += ' ';
    }
    for (var k = 0; k < (2 * i) - 1; k++) {
      triangle += '*';
    }
    triangle += '\n';
  }
  console.log(triangle);
};
makeTriangle(5);