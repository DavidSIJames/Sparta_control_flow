var bool =true;
var name = "David";
var num = 1;

// ==========================if statement==========================

// multi-line statement
if (!num){
  // do something
  console.log("the condition is true");
}

// single line statement
if (!num) console.log("the condition is true");

//=============================if-else=============================

if (bool){
  // do something if true
  console.log("condition is truthy");
} else {
  // do something if first statement is false
  console.log("Condition is falsely");
}
//============================if-elseif============================

if (num ==='1' || bool === false){
  // do something if first condition is true
  console.log("condition 1");
}else if(num === 1 && bool===false){
  //do something if first condition is false and second condition is true
  console.log("condition 2");
}else {
  //do something if above conditions are false
  console.log("no condition");
}
//=============================switch=============================
switch (name) {
  case "Bob":
    console.log("Name is Bob");
    break;
  case "Danny":
    console.log("Name is Danny");
    break;
  case "Jack":
    console.log("Name is Jack");
    break;
  case "David":
    console.log("Name is David");
    break;
  default:
    console.log("Names not here");
}
