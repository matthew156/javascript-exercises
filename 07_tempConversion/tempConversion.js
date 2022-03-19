const ftoc = function(farenheit) {
let conversion = (farenheit-32)*(5/9)
if(conversion%1 == 0)
return Number(conversion);

else{
console.log(typeof conversion.toFixed(1))
  return Number(conversion.toFixed(1))

}
};

const ctof = function(celsius) {
let conversion = (celsius*(9/5))+32
if(conversion%1 == 0)
return Number(conversion);

else
return Number(conversion.toFixed(1))
};



// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
