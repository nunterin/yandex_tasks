     let str = "Ey_e"
     let del = /"*"|" "|"!"|"&"|"#"|"-"|"_"/
     let str1 = "";
     let clearString = str => (str.match(/[a-z\s]+/gui)).join('');
     str = clearString(str)

     str = str.toLowerCase()
     let arr = [];
     let k = str.length - 1
     for (let i = 0; i < str.length; i++) {

         arr[i] = str[k - i]
     }
     str1 = arr.join("")
     console.log(str, str1)
     if (str == str1) {
         console.log(true)
     }


     /*if (str == str1.join()) {
         ret str1
     } else { return str }*/