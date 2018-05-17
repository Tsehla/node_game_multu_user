//<Broken Logikz> Isit stiL logik, when Broken, or isiT nonSense//
var user_team_id;
var user_clicks = 1;
var user_bar = 50;
var user_bar_height = 1;
var user_bar_top = 50;

function click_bar(){
   document.getElementById("user_score").innerHTML = user_clicks ;
   document.getElementById("user_bar").style.top = user_bar+"%";
   power_up();
   communicate({user:user_team_id, clicks:user_clicks, bar:user_bar, height:user_bar_height});
   user_clicks = user_clicks + 1;
   user_bar = user_bar + (-0.1);

   return ;
}

function power_up(){
if(user_clicks == 1){return time_start();}
if(user_clicks == 383){
   document.getElementById("user_bar").style.height = "5%";
   document.getElementById("user_bar").style.top = "46%";
   user_bar_height = 5;
   user_bar = 46;
  
}

if(user_clicks == 726){
   document.getElementById("user_bar").style.height = "10%";
   document.getElementById("user_bar").style.top = "42%";
    user_bar_height = 10;
   user_bar = 42;
  
}
if(user_clicks == 1030){
   document.getElementById("user_bar").style.height = "15%";
   document.getElementById("user_bar").style.top = "36%";
    user_bar_height = 36;
   user_bar = 15;
  
}
if(user_clicks == 1273){
   document.getElementById("user_bar").style.height = "20%";
   document.getElementById("user_bar").style.top = "29%";
    user_bar_height = 20;
   user_bar = 29;
  
}
if(user_clicks == 1443){
   document.getElementById("user_bar").style.height = "25%";
   document.getElementById("user_bar").style.top = "26%";
    user_bar_height = 25;
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
//-------------------------------


//user id setter
function user_team_id_apply(value){
	user_team_id = value;
	document.getElementById("team_buttons").style.display = "none";
	//data_decider(user_team_id);
	if(value == 2){
		document.getElementById("user_bar").style.backgroundColor = "green";
		document.getElementById("user_bar").style.borderColor = "yellow";
		document.getElementById("other_user_bar").style.backgroundColor = "blue";
		document.getElementById("other_user_bar").style.borderColor = "white";
		document.getElementById("other_user_bar").style.display
		document.getElementById("user_score").innerHTML = "Team 2 score";
		document.getElementById("other_user_score").innerHTML = "Team 1 score";
		
	}
	return;
}
/* //leaving it disabled for now, seems its gonna get in my way
function user_team_id_check(){
	if(user_team_id == null || user_team_id == undefined){
		document.getElementById("team_buttons").style.display = "block";
		alert("please choose a team to play");
	}
	else{
		
	}
	
}*/

function data_decider(data){

if(data.user == 2){//things to do for user one on user = 2; browser
document.getElementById("other_user_score").innerHTML = data.clicks;
document.getElementById("other_user_bar").style.top = data.bar + "%";
document.getElementById("other_user_bar").style.height = data.height + "%";	
	
//alert(JSON.stringify(data));
}
if(data.user == 1){ //same as above just different user
document.getElementById("other_user_score").innerHTML = data.clicks;
document.getElementById("other_user_bar").style.top = data.bar + "%";
document.getElementById("other_user_bar").style.height = data.height + "%";	

	//alert(JSON.stringify(data));
}
else{
//  alert(JSON.stringify(data));
}
}

//value send







