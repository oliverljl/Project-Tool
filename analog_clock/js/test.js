 var d =new Date();
 var hour=0;
 var real_second=d.getSeconds();
 var real_min=d.getMinutes();
 var real_hour=d.getHours();
 var sehand =document.getElementById("se_hand"); 
 var mihand =document.getElementById("min_hand");
 var hrhand =document.getElementById("hour_hand");
 var second= real_second*6;
 var min = real_min*6;
 if (real_hour>=12){
       hour = real_hour-12;
 }
       hour= (real_hour+real_min/60)*30;

 setInterval(start_clock,1000);
 function start_clock(){
 		    sehand.style.transform = "rotate(" + second + "deg)";
 			mihand.style.transform = "rotate(" + min + "deg)";
 			hrhand.style.transform = "rotate(" + hour + "deg)";
 			second=second+6;
 			if(second>360)
 			{
 				second=6;
 				min=min+6;
 			}
 			if(min>360)
 			{
 				hour=hour+6;
 				min=6;
 			}
 		}
