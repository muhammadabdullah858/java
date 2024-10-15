// let a = 10;
// let b = 20;
// let c = a-b;
// console.log(c);
// let d = a*b;
// console.log(d);
// let e = a+b;
// console.log(e);
// let f = a/b;
// console.log(f);
// let g = a%b;
// console.log(g);
// let h = a**b;
// console.log(h);

// let percentage = 65;

//     if(percentage >= 33 && percentage <= 59)
//    { document.write(" 1st dision")}

//     else if(percentage >= 60 && percentage <= 69)
//     {document.write("2nd division")}
    
//     else if (percentage >= 70 && percentage <= 79) 
//    { document.write("3rd division")}

//     else if(percentage >= 80 && percentage <= 100) 
//    { document.write("marit holder")}

//     else if (percentage >= 1 && percentage <= 33)
//    { document.write("Congreculation's   you are fail")}

    
// else{

//         document.write("Error 404")
// }

// for(let a = 1; a<=100; a = a+10){
//         for(let b = a; b < a+10 ; b++){
//                 document.write(b + " &nbsp;&nbsp;&nbsp;");

//         }
//         document.write( "<br> ");

// }
// 

// let Email = "Enter your email ";
// let password = "01234567";
// let newemail = prompt( "enter your email");
// let pasword = prompt("enter your password");
// let confirmpassword = "8308239";
// let confermpassword = prompt("enter your confirm password")
//  if( Email == newemail && password==password){
//        document.write("well come !");
//  }



let accountBalance = 10000;

let email = prompt("Please enter your email:");
let password = prompt("Please enter your password:");
if (email && password) {
  
  alert(`Welcome Usman! Your account balance is ${accountBalance} rupees.`);
  let action = prompt("What would you like to do? Type '1' to Send Money or '2' to Withdraw Money.");

  if (action === "1") {
    let sendAmount = prompt("Enter the amount you want to send:");

    if (parseInt(sendAmount) > accountBalance) {
      alert("Insufficient balance!");
    } else if (parseInt(sendAmount) > 0) {
      accountBalance -= parseInt(sendAmount);
      alert(`Money successfully sent! Your new balance is ${accountBalance} rupees.`);
    } else {
      alert("Invalid amount entered.");
    }

  } else if (action === "2") {
    let withdrawAmount = prompt("Enter the amount you want to withdraw:");

    if (parseInt(withdrawAmount) > accountBalance) {
      alert("Insufficient balance!");
    } else if (parseInt(withdrawAmount) > 0) {
      accountBalance -= parseInt(withdrawAmount);
      alert(`Money successfully withdrawn! Your new balance is ${accountBalance} rupees.`);
    } else {
      alert("Invalid amount entered.");
    }

  } else {
    alert("Invalid choice. Please try again.");
  }

} else {
  alert("Email or password cannot be empty. Please try again.");
}
