/*
 * You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point.
 * Check if these points make a straight line in the XY plane.

 * Example 1 -
    Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
    Output: true

 * Example 2 -
    Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
    Output: false

* */

const findSlope = (x, y) => {
    const xDiff = Math.abs(y[0] - x[0]);
    const yDiff = Math.abs(y[1] - x[1]);
    if (xDiff === 0)
        return 0;
    return yDiff / xDiff;
}
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    const mainSlope = findSlope(coordinates[0], coordinates[1]);

    let i = 1;
    const totalCoordinates = coordinates.length;

    for (; i < (totalCoordinates - 1); i++) {

        const currSlope = findSlope(coordinates[i], coordinates[i + 1]);
        if (mainSlope !== currSlope)
            return false;
    }

    return true;

};