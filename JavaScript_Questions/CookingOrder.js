let ingredients = ['fatCHEESE','fiberAPPLE','carbBREAD','fiberORANGE','fatBUTTER', 'fibeBUTTER','fat'];

let foodType = [
    {id:0,type:'carb',count:0,arrival:-1},  //carb
    {id:1,type:'fat',count:0,arrival:-1},  //fat
    {id:2,type:'fiber',count:0,arrival:-1}   //fiber
]

function check(){
    let total=3;
    if(foodType[0].count<2)
        return false;   
    for(let i=0;i<3;i++){
        if(foodType[i].count<=total){
            total=total-foodType[i].count;
            foodType[i].count=0;
        }
        else{
            total=0;
            foodType[i].count=foodType[i].count-total;
        }

        if(total<=0)
            return true;
    }
}

let noOfIngredients = ingredients.length;
let result="";
for(let i=0;i<noOfIngredients;i++){
    let ingredient = ingredients[i];
    if(ingredient[0]=='c'){
        foodType[0].count++;
        foodType[0].arrival=i;
    }
    else if(ingredient[0]+ingredient[1]=='fa'){
        foodType[1].count++;
        foodType[1].arrival=i;
    }
    else{
        foodType[2].count++;
        foodType[2].arrival=i;
    }

    foodType.sort((a,b)=>{
        if(a.count>b.count)
            return -1;
        else if(a.count<b.count)
            return 1;
        else{
            if(a.arrival<b.arrival)
                return -1;
            else if(a.arrival>b.arrival)
                return 1;
            else
                return 0;
        }
    })
    
    let willCook = check();
    if(willCook)
        result+="1 ";
    else
        result+="0 ";
}

console.log(result);
