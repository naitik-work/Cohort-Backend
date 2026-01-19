node <filename> // to run javascript code outside the browser!
Packages- ye aisa code hota hai jo kisi developer ne likha ho fir public kr diya ho, taki aur bhi log use use kr paye.

-ye code npmjs.com pe mil jata hai.
#package ko install krna...
-uss code ko apne system pe lane ke liye, "npm i cat-me" ye command run krna padta hai!

To use this code and its functionalities hume, js file me ye likhna hota hai:
const catMe= require("Cat-me");
console.log(catMe());

#package.json
- this contains all those packages in the form of dependencies with their versions, jinsab pe humara current js file ka code depend krta hai.

#node-modules
-this contains code of all those packages which are installed and used in our js file.

#package-lock.json
- it manages the code of the packages installed and also the further package dependencies, for eg "cat-me"->"yargs"->"camelcase(until no dependencies are there). And package.json bss usko rkhta hai jo package directly installed ya use me ho!

#Server
-Ye ek aisi machine hoti hai, jiske pass apna operating system, processor and RAM hoti hai.
Just like our laptop, mobilephone and desktop.
The difference is it is programmed in such a way that incase of any kinda of request by user, response is immediately sent.