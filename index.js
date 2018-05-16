

var user_clicks = 1;
var user_bar = 50;

function click_bar(){
   document.getElementById("user_score").innerHTML = user_clicks ;
   document.getElementById("user_bar").style.top = user_bar+"%";
   power_up();
   user_clicks = user_clicks + 1;
   user_bar = user_bar + (-0.1);

   return ;
}

function power_up(){
if(user_clicks == 1){return time_start();}
if(user_clicks == 383){
   document.getElementById("user_bar").style.height = "5%";
   document.getElementById("user_bar").style.top = "46%";
   user_bar = 46;
  
}

if(user_clicks == 726){
   document.getElementById("user_bar").style.height = "10%";
   document.getElementById("user_bar").style.top = "42%";
   user_bar = 42;
  
}
if(user_clicks == 1030){
   document.getElementById("user_bar").style.height = "15%";
   document.getElementById("user_bar").style.top = "36%";
   user_bar = 36;
  
}
if(user_clicks == 1273){
   document.getElementById("user_bar").style.height = "20%";
   document.getElementById("user_bar").style.top = "29%";
   user_bar = 29;
  
}
if(user_clicks == 1443){
   document.getElementById("user_bar").style.height = "25%";
   document.getElementById("user_bar").style.top = "26%";
   user_bar = 26;
  
}
if(user_clicks == 1466){
    //alert("you win !!!");
    document.getElementById("user_clicks_button").disabled = "true";
    document.getElementById("user_clicks_button").style.borderColor = "red";
    stop_timer();
}

}
function time_start(){

var timer = setInterval(
            function(){
            
            document.getElementById("count_down").innerHTML = timer_counter_minutes+"m : "+timer_counter_seconds+" s";
            play_time();
             
             }, 1000);
    return;
             
     }
         
         
var timer_counter_seconds= 0;
var timer_counter_minutes = 0;

function play_time(){
if(timer_counter_seconds == 60){
     timer_counter_seconds = 0;
     timer_counter_minutes++;
}

timer_counter_seconds++;
return;
}
function stop_timer(){
    return clearInterval(timer);
}