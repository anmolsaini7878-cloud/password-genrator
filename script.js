 let password=document.getElementById("password")
 let copy=document.getElementById("copy")
 let lengthbar=document.getElementById("length")
 let lengthvalue=document.getElementById("lengthValue")
 let lowercase=document.getElementById("lowercase")
 let uppercase=document.getElementById("uppercase")
let numbers=document.getElementById("numbers")
let symbols=document.getElementById("symbols")
let btn1=document.getElementById("generate")

// rangebar

lengthvalue.textContent=lengthbar.value
lengthbar.addEventListener("input",()=>{
lengthvalue.textContent=lengthbar.value

})

// btn1

btn1.addEventListener("click",()=>{

let showpassword=""
let allchar=""

let lowerCase="abcdefghijklmnopqrstuvwxyz"
let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let Numbers="0123456789"
let Symbols="!@#$%^&*_"

allchar += lowercase.checked? lowerCase:""
allchar += uppercase.checked? upperCase:""
allchar += numbers.checked? Numbers:""
allchar += symbols.checked? Symbols:""


if(allchar==""||allchar.length==0 ){
alert("please select at least one option")
return;

}

i=1;
while (i<=lengthbar.value) {
    
showpassword+=allchar.charAt(Math.floor(Math.random()*allchar.length))
i++

}

password.value=showpassword

})

// copy
copy.addEventListener("click",()=>{
    if(password.value!==""||password.length>=1)
navigator.clipboard.writeText(password.value)
    copy.innerHTML="✅"
copy.title="copied"

setTimeout(() => {
    copy.innerHTML="📋"
    copy.title=""

}, 3000);





})