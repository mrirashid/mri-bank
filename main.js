let loginBtn=document.getElementById('login');

loginBtn.addEventListener('click',enterBtn)



function enterBtn(){

let loginArea=document.getElementById('loginArea');

loginArea.style.display="none";



let transectionArea=document.getElementById('transectionArea');

transectionArea.style.display="block";



let addDeposit=document.getElementById("addDeposit");

addDeposit.addEventListener('click',addMoney)

}

function addMoney(){

let depositAmount=document.getElementById("depositAmount").value;

let depositNumber=parseFloat(depositAmount);



/*let currentAmount=document.getElementById("currentAmount").innerText;

let currentAmountNumber=parseFloat(currentAmount);

let totalDeposit=currentAmountNumber+depositNumber;

document.getElementById("currentAmount").innerText=totalDeposit;



let currentBalance=document.getElementById("currentBalance").innerText;

let currentBalanceNumber=parseFloat(currentBalance);

let totalBalance=depositNumber+currentBalanceNumber;

document.getElementById("currentBalance").innerText=totalBalance;*/

updateCurrent('currentAmount');

updateCurrent('currentBalance');



document.getElementById("depositAmount").value='';



function updateCurrent(id){

let current=document.getElementById(id).innerText;

let currentNumber=parseFloat(current);

let currentTotal=depositNumber+currentNumber;

document.getElementById(id).innerText=currentTotal;

}

}



let withdrawMoney=document.getElementById("withdrawMoney");

withdrawMoney.addEventListener('click',withdraw)



function withdraw(){

let withdrawAmount=document.getElementById("withdrawAmount").value;

let withdrawNumber=parseFloat(withdrawAmount);

document.getElementById("withdrawAmount").value='';

latestBalance('newAmount')

latestBalance('currentBalance');

function latestBalance(id){

let latest=document.getElementById(id).innerText;

let latestNumber=parseFloat(latest);

let latestTotal=withdrawNumber-latestNumber;

document.getElementById(id).innerText=latestTotal;

}





}
