// Write a function countBs that takes a string as its only argument and 
//returns a number that indicates how many uppercase “B” characters there are in the string.
//Next, write a function called countChar that behaves like countBs, 
//except it takes a second argument that indicates the character that is to be counted 
//(rather than counting only uppercase “B” characters).

function countChar(string,ch='b'){
    let count=0;
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if(element===ch)
            count++;
    }

    return count;
}

console.log(countChar("christmas bells",'s'));