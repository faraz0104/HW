
var timer;


function showTime(){
	var d =  new Date();
	var hour = d.getHours();
	var min =  d.getMinutes();
	var sec = d.getSeconds();
	var session = "AM";


   
   if(hour>12){

     hour = hour - 12;
     // h = 13-12 =1

   }

   if (hour>=12){

   	session = "PM"

   }




	hour = hour < 10 ? "0" +hour : hour;
	min = min < 10 ? "0" +min : min;
	sec = sec < 10 ? "0" +sec : sec;






	
 var time = hour + " : " + min + " : " + sec + " : " + session;

 document.getElementsByTagName('h1')[0].innerText = time;



 var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[d.getDay()];
    var curDay = d.getDate();
    var curMonth = months[d.getMonth()];
    var curYear = d.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    }


    function startTime(){
      timer = setInterval(showTime, 1000);


    }


    function stopTime(){



clearInterval(timer);

    }
