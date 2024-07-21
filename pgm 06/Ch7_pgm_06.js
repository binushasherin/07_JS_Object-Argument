var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
  };
  
  console.log(line(30));
  console.log(line(40));
  console.log(line(50));


  function testLineLengths() {
    for (let length = -20; length <= 60; length += 10) {
        if (length > 0) {
            console.log('='.repeat(length));
        } else {
            console.log('Invalid length:', length);
        }
    }
}

function spaces(num) {
    if (num < 0 || num > 40) {
        return 'Invalid number of spaces';
    }
    return ' '.repeat(num);
}

function emptyBox(width) {
    if (width < 2) {
        console.log('Width should be at least 2 to form a box');
        return;
    }

    const horizontalEdge = '='.repeat(width);
    const emptyLine = '=' + spaces(width - 2) + '=';

    console.log(horizontalEdge);
    for (let i = 0; i < 3; i++) {
        console.log(emptyLine);
    }
    console.log(horizontalEdge);
}

console.log('|' + spaces(5) + '|');
console.log('|' + spaces(0) + '|');
console.log('|' + spaces(40) + '|');
console.log('|' + spaces(45) + '|'); 

emptyBox(12);