/*
Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/

class Vec {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    plus(newVec){
        return new Vec(this.x+newVec.x,this.y+newVec.y);
    }
    minus(newVec){
        return new Vec(this.x-newVec.x,this.y-newVec.y);
    }

    get length(){
        let distance_X = Math.pow(Math.abs(this.x),2);
        let distance_Y = Math.pow(Math.abs(this.y),2);
        let totalDistance = Math.sqrt(distance_X + distance_Y);
        return totalDistance.toFixed(2); 
    }
}

let vector = new Vec(1,2);
console.log(vector.length);
let newVector = vector.plus(new Vec(2, 2));
console.log(newVector);
console.log(newVector.length)
