
function check(){
  
var question1=document.quiz.question1.value;
var question2=document.quiz.question2.value;
var question3=document.quiz.question3.value;
var question4=document.quiz.question4.value;
var question5=document.quiz.question5.value;
var question6=document.quiz.question6.value;
var question7=document.quiz.question7.value;
var question8=document.quiz.question8.value;
var question9=document.quiz.question9.value;
var question10=document.quiz.question10.value;
var question11=document.quiz.question11.value;
var question12=document.quiz.question12.value;
var question13=document.quiz.question13.value;
var question14=document.quiz.question14.value;
var question15=document.quiz.question15.value;
var question16=document.quiz.question16.value;
var question17=document.quiz.question17.value;
var question18=document.quiz.question18.value;
var question19=document.quiz.question19.value;
var question20=document.quiz.question20.value;
var question21=document.quiz.question21.value;
var question22=document.quiz.question22.value;
var question23=document.quiz.question23.value;
var question24=document.quiz.question24.value;
var question25=document.quiz.question25.value;
var question26=document.quiz.question26.value;
var question27=document.quiz.question27.value;
var question28=document.quiz.question28.value;
var question29=document.quiz.question29.value;
var question30=document.quiz.question30.value;

var correct=0;


   if (question1.toLowerCase()=="valar dohaeris"){
        correct++;
  }

   if (question2.toLowerCase()=="jfk"||question2.toLowerCase()=="john f kennedy"){
       correct++;
  }  

  if (question3.toLowerCase()=="everest"){
      correct++;
  }  

  if (question4.toLowerCase()=="6765"){
      correct++;
  }  

  if (question5.toLowerCase()=="space"){
      correct++;
  }  

  if (question6.toLowerCase()=="newton"){
      correct++;
  }  

  if (question7.toLowerCase()=="alexandria"){
      correct++;
  }  

  if (question8.toLowerCase()=="chess"){
      correct++;
  }  

  if (question9.toLowerCase()=="01010110"){
      correct++;
  }  

  if (question10.toLowerCase()=="mesosphere"){
      correct++;
  }  

  if (question11.toLowerCase()=="mario"||question11.toLowerCase()=="luigi"){
      correct++;
  }  

  if (question12.toLowerCase()=="japan"){
      correct++;
  }  

  if (question13.toLowerCase()=="caesar"){
      correct++;
  }  

  if (question14.toLowerCase()=="olympus"){
      correct++;
  }  

  if (question15.toLowerCase()=="enigma"){
      correct++;
  }  

  if (question16.toLowerCase()=="hotel california"){
      correct++;
  }  

  if (question17.toLowerCase()=="chameleon"){
      correct++;
  }  

  if (question18.toLowerCase()=="366253"){
      correct++;
  }  

  if (question19.toLowerCase()=="joker"){
      correct++;
  }  

  if (question20.toLowerCase()=="stockholm"){
      correct++;
  }  

  if (question21.toLowerCase()=="ursaminor"||question21.toLowerCase()=="ursa minor"){
      correct++;
  }  

  if (question22.toLowerCase()=="1662"){
      correct++;
  }  

  if (question23.toLowerCase()=="google"){
      correct++;
  }  

  if (question24.toLowerCase()=="dominos"){
      correct++;
  }  

  if (question25.toLowerCase()=="xxx"){
      correct++;
  }  

  if (question26.toLowerCase()=="beatles"){
      correct++;
  }  

  if (question27.toLowerCase()=="i"){
      correct++;
  }  

  if (question28.toLowerCase()=="1550"||question28.toLowerCase()=="3:50"||question28.toLowerCase()=="350"||question28.toLowerCase()=="15:50"){
      correct++;
  }

  if (question29.toLowerCase()=="peace"){
      correct++;
  }

  if (question30.toLowerCase()=="schrodinger"){
      correct++;
  }


var messages=["Great job!","Almost there :)","better luck"];
var pictures=["https://media1.giphy.com/media/11sBLVxNs7v6WA/giphy.gif","https://media1.giphy.com/media/Nm9hS20D4swVO/200w.gif","https://media.giphy.com/media/xUA7aRaGvA53VSlxUk/giphy.gif"];

var range;

  if(correct<1){
      range=2;
  }
  
  if(correct>0&&correct<30){
      range=1;
  }
  
  if(correct==30){
      range=0;
  }


document.getElementById("after_submit").style.visibility="visible";


document.getElementById("messages").innerHTML=messages[range];
document.getElementById("number_correct").innerHTML="&rarr;you got "+correct+" correct.";
document.getElementById("pictures").src=pictures[range];


}


