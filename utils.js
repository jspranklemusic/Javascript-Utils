//making a random array
function randomizeArray(oldArr=[1,2,3,4,5,6,7,8,9],newArr=[]){
    if(!oldArr.length){
        return newArr;
    }else{
        const randomInt = Math.floor(Math.random()*oldArr.length)
        newArr.push(oldArr.splice(randomInt,1)[0]);
        return randomizeArray(oldArr, newArr);
    }
}

//get day of the year

function getDayOfYear(){
	var now = new Date();
	var start = new Date(now.getFullYear(), 0, 0);
	var diff = now - start;
	var oneDay = 1000 * 60 * 60 * 24;
	var day = Math.floor(diff / oneDay);
	return day
}

//converting unsafe html to safe html
function escapeHtml(unsafe="<script>console.log('hacked!')</script>") {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

//This converts template literals to concatenated strings (for IE support)
function templateToConcat(str="`${greeting}, my name is ${name}, and I have $${amount} dollars`"){
  var newStr = ""
  var curly1 = false;
  var curly2 = false;
	for(i = 0; i < str.length; i++){
    //if its the first character, push a '
    if(i == 0){
      newStr+="'"
    }
     //if its the first character, push a '
    else if(i == str.length-1){
      newStr+="'"
    }
    else if(str[i]=="{" && curly1){
      newStr+=""
      curly1=false;
      curly2=true
    }
    else if(str[i]=="}" && curly2){
      newStr+=" + '"
      curly2=false;
    }
    else{
      //check if negative index exists
    if(str[i-1]){
      //check if it's the $ 
      if(str[i] == "$" && str[i-1]!="\\" && str[i+1]=="{"){
        curly1 = true
         newStr+="'+ "
        //push if it isn't a backtick
      }else if(str[i]!="`"){
        newStr+=str[i]
      }
      //push if it isn't a backtick
    }else if(str[i]!="`"){
      newStr+=str[i]
    }
    }
  }
  return newStr
}

module.exports = {
    randomizeArray,getDayOfYear,escapeHtml,templateToConcat
}
