function random_bg() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

 	
  	document.body.style.background = bgColor;
  	console.log(bgColor);

    }random_bg()


function Create() {
	
	Plname1 = document.getElementById('input1').value ; 
	Plname2 = document.getElementById('input2').value ; 

document.getElementById('pname1').innerHTML = Plname1 ;

document.getElementById('pname2').innerHTML = Plname2 ;
	
}
function rolldice(){
  var die1 = document.getElementById("diel1");
  var die2 = document.getElementById("diel2");
  var status = document.getElementById("status");
  var d1 = Math.floor(Math.random()* 6) + 1;
  var d2 = Math.floor(Math.random()* 6) + 1;
  var diceTotal = d1 + d2 ;
  die1.innerHTML = d1;
  die2.innerHTML = d2;

 // status.innerHTML ="You rolled"+diceTotal+". ";
  if(d1 == d2){
    status.innerHTML = "DOUBLES! You get a free turn!";
  }
    if (d1 < d2){
      status.innerHTML = "The Winner is : " + Plname1 +  " ( " + d2 + " ) ";
    }
    else if (d1 > d2){
      status.innerHTML = "The Winner is : " + Plname2 + " ( " + d1 + " ) ";

    }
}