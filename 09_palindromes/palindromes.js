const palindromes = function (string) {
let reversedString = string.toLowerCase().split("")
for(let i = 0; i < reversedString.length; i++)
{
    if(reversedString[i] ==="!"||reversedString[i] ==="." || reversedString[i] ==="," || reversedString[i] ===`'`|| reversedString[i] ==="?"||reversedString[i] ===`"` || reversedString[i] ===" ")
    {
        reversedString.splice(i, 1);
        i--;
    }
}
let savedString = reversedString.join("")
return reversedString.reverse().join("") == savedString;
};
console.log(palindromes("racecar!"))
// Do not edit below this line
module.exports = palindromes;
