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

//converting unsafe html to safe html
function escapeHtml(unsafe="<script>console.log('hacked!')</script>") {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }
