const eMail =document.getElementById("user");
console.log(eMail);

const passWord=document.getElementById("pass");
console.log(passWord);

const passCon=document.getElementById("passconfirmation");
console.log(passCon);

const stateChoice=document.getElementById("stateInput");
console.log(stateChoice);

const submitBtn= document.getElementById("do_SignUp");
console.log(submitBtn);

const outPut= document.getElementById("output");
console.log(outPut);

submitBtn.addEventListener("click", function(){
    const mail = eMail.value;
    const pass = passWord.value;
    const confirmation= passCon.value;
    const state = stateChoice.value;

 outPut.textContent = `E-mail: ${mail}, Password: ${pass}, Password Confirmation: ${confirmation}, State: ${state}`;
});