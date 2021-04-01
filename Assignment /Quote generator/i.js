


function getRandomColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for(var i = 0; i<6 ; i++){

            color += letters[Math.floor(Math.random()*16)];

        }
        return color;
      }

    function setRandomColor(){
        $("#colorpad").css("background-color",getRandomColor());
    }








var quotes = [



    
    'Make it work, make it right, make it fast. – Kent Beck',
    'Java is to JavaScript what car is to Carpet. – Chris Heilmann',
    'Experience is the name everyone gives to their mistakes. – Oscar Wilde',
    'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
    'Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin',
    'Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson',
    'Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead',
    'Life is either a daring adventure or nothing at all. -Helen Keller',
    'The only impossible journey is the one you never begin. -Tony Robbins',



]


    var day = new Date();
    var hour = day.getHours();
    var min =  day.getMinutes();
    var sec = day.getSeconds();
  
    var session = (hour >= 12) ? "PM"  :  "AM" ;

    if( hour >= 0 && hour < 12){
    document.getElementById("header").innerHTML = "let's start our morning with a new quotes";
    
    
}
  
  
    else if ( hour>=12 && hour<=17){
    document.getElementById("header").innerHTML = "let's start our afternoon with a new quotes";
}
  
    else{
    document.getElementById("header").innerHTML = "let's start our night with a new quotes";
}








      function newQuote(){
	  var randomNumber = Number.parseInt(Math.random() * (quotes.length) );
	  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];


      






}