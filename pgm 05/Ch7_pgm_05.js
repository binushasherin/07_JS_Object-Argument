var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

showSmaller(12, 3);
showSmaller(-10, 3);

let point1 = { x: -4, y: 7};
console.log('Original point1:', point1);

point1 = move(point1, -3, 1);
console.log('Moved point1:', point1);

let reflectedPoint1 = reflectX(point1);
console.log('Reflected Point1:', reflectedPoint1);

let rotatedPoint1 = rotate90(point1);
console.log('Rotated Point1:', rotatedPoint1);

function showLarger(a,b) {
    if (a > b) {
        console.log('Larger value:', a);
    } else if (b > a) {
        console.log('Larger value:', b);
    } else {
        console.log('Both values are equal:', a);
    }
}

function showSmallest(a,b,c) {
    let smallest = a;
    if (b < smallest) {
        smallest = b;
    }
    if (c < smallest) {
        smallest = c;
    }
    console.log('Smallest value:', smallest);
}