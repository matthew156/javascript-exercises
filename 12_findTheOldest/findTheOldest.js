const findTheOldest = function(arr) {
return arr.reduce((a,b) =>{
    const oldestAge = getAge(a.yearOfBirth, a.yearOfDeath)
    const currentAge = getAge(b.yearOfBirth, b.yearOfDeath)
    return oldestAge < currentAge ? b : a
})


function getAge(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}


};

// Do not edit below this line
module.exports = findTheOldest;
