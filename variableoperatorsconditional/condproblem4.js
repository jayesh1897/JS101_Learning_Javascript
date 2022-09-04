let reg_username ="jayesh@";
let reg_password =12345;

let ent_username ="jayesh@";
let ent_password =12345;

if(reg_username == ent_username){
  
  if(reg_password == ent_password){
    console.log("login Successful");
  }else{
    console.log("Incorrect password");
  }
}else{
  console.log("Incorrect credentials");
}