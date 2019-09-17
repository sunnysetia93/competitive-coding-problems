// https://www.codewars.com/kata/growth-of-a-population/javascript

function nbYear(p0, percent, aug, p) {
    let countYears = 0;
    let population = p0;
    while(population<p){
      population = population + population*(percent/100) + aug;
      countYears++;
    }
    
    return countYears;
}