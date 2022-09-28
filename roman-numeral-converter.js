function convertToRoman(num) {
 const conversions = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"]
]

 let countDown = num;
 let romanStr = "";
 for (let i = 0; i < conversions.length; i++) {
   while (countDown >= conversions[i][0]) {
     romanStr += conversions[i][1];
     countDown -= conversions[i][0];
   }
 }
 
 return romanStr;
}

console.log(convertToRoman(36));
