function convertToRoman(num) {
 let countDown = num;
 let romanStr = "";
 while (countDown > 0){
   if (countDown >= 1000) {
     romanStr += "M";
     countDown -= 1000;
     continue;
   } else if (countDown >= 900) {
     romanStr += ("CM");
     countDown -= 900;
     continue;
   } else if (countDown >= 500) {
     romanStr += ("D");
     countDown -= 500;
   } else if (countDown >= 400) {
     romanStr += ("CD");
     countDown -= 400;
   } else if (countDown >= 100) {
     romanStr += ("C");
     countDown -= 100;
   } else if (countDown >= 90) {
     romanStr += ("XC");
     countDown -= 90;
   } else if (countDown >= 50) {
     romanStr += ("L");
     countDown -= 50;
   } else if (countDown >= 40) {
     romanStr += ("XL");
     countDown -= 40;
   } else if (countDown >= 10) {
     romanStr += ("X");
     countDown -= 10;
   } else if (countDown >= 9) {
     romanStr += ("IX");
     countDown -= 9;
   } else if (countDown >= 5) {
     romanStr += ("V");
     countDown -= 5;
   } else if (countDown >= 4) {
     romanStr += ("IV");
     countDown -= 4;
   } else if (countDown >= 1) {
     romanStr += ("I");
     countDown -= 1;
   
   }
 }
 
 return romanStr;
}

console.log(convertToRoman(36));