// 역삼각형 함수

var reverseTriangle = function(line) {
  var triangle = '';
  for (var i = line; i > 0; i--) {
    for (var j = line - i; j > 0; j--) {
      triangle += ' ';
    }
    for (var k = 0; k < (2 * i) - 1; k++) {
      triangle += '*';
    }
    triangle += '\n';
  }
  console.log(triangle);
};
reverseTriangle(5);