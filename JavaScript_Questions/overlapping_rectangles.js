function areRectanglesOverlapping(rectangleOne,rectangleTwo){
    let first = {
        l1:[rectangleOne.x,rectangleOne.y],
        l2:[rectangleOne.x,rectangleOne.y-rectangleOne.breadth],
        r1:[rectangleOne.x+rectangleOne.length,rectangleOne.y],
        r2:[rectangleOne.x+rectangleOne.length,rectangleOne.y-rectangleOne.breadth]
    }
    let second = {
        l1:[rectangleTwo.x,rectangleTwo.y],
        l2:[rectangleTwo.x,rectangleTwo.y-rectangleTwo.breadth],
        r1:[rectangleTwo.x+rectangleTwo.length,rectangleTwo.y],
        r2:[rectangleTwo.x+rectangleTwo.length,rectangleTwo.y-rectangleTwo.breadth]
    }

    // check if top
    if(first.l1[1]<second.l2[1] && first.r1[1]<second.r2[1])
        return false;
    // check if left
    if(first.l1[0]>second.r1[0] && first.l2[0]>second.r2[0])
        return false;

    //check if right 
    if(first.r1[0]<second.l1[0] && first.r2[0]<second.l2[0])
        return false;
    // check if bottom
    if(first.l2[1]>second.l1[1] && first.r2[1]>second.r1[1])
        return false;
    return true;
}

let rectangleOne = {
    x:10,
    y:10,
    breadth:5,
    length:10
}
let rectangleTwo = {
    x:5,
    y:5,
    breadth:2,
    length:4
}

console.log(areRectanglesOverlapping(rectangleOne,rectangleTwo));