
var point1;
var point2;
var move;
var showPoint;

move = function (point, change) {
    return {
        x: point.x + change.x,
        y: point.y + change.y
    };
};

showPoint = function (point) {
    console.log("( " + point.x + " , " + point.y + " )");
};

point1 = { x : 2, y : 5 };

point2 = move(point1, { x : 4, y : -2 });

showPoint(point1);
console.log("Move 4 across and 2 down");
showPoint(point2);




function move(point, dx, dy) {
    point.x += dx;
    point.y += dy;
    return point;
}
function reflectX(point) {
    return { x: point.x, y: -point.y };
}
function rotate90(point) {
    return { x: -point.y, y: point.x };
}

let point = { x: 2, y: 3 };
console.log('Original Point:', point);

point = move (point, 5,-2)
console.log('MovePoint:', point);

let ReflectedPoint = reflectX(point);
console.log('Reflected Point:', reflectedPoint);

let rotatedPoint = rotate90(point);
console.log('rotated point:', rotatedPoint);