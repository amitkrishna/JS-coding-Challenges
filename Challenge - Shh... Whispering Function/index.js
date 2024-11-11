//Example 
//input: "The KITTENS are SLEEPING!"
//output: "shh... the kittens are sleeping"

function  whisper(str){
    if(str.endsWith("!")){
        return "shh..." + str.slice(0, -1).toLowerCase();
    }
    return "shh..."+str.toLowerCase();
}





console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));