

var xc = ''




function cricketTab(){
	
	clearInterval(xb);
	
	 document.getElementById('latestResult-h4').innerHTML  = 'Rebels Winter League';
	 document.getElementById('latestResult-p').innerHTML  = 'Rebels Winter League inter club team tournaments latest score';
	 
     document.getElementById('latestResult-badge1').style = 'background:url(images/team-logo/vipers.png)';
	 document.getElementById('latestResult-team1-name').innerHTML  = 'Rebel Vipers';
	 document.getElementById('latestResult-team1-result').innerHTML  = 'Lost';
	 document.getElementById('latestResult-team1-topScorer').innerHTML  = 'Red Viper (112*)';
	 
	 
	 document.getElementById('latestResult-team1-score').innerHTML  = '264/10';
	 document.getElementById('latestResult-team2-score').innerHTML  = '268/4';
	 document.getElementById('latestResult-date').innerHTML  = '7th October 2017 - ';
	 document.getElementById('latestResult-time').innerHTML  = '7:00 PM';
	 document.getElementById('latestResult-place').innerHTML  = 'Regina';
	 document.getElementById('latestResult-country').innerHTML  = 'Canada';
	 
	 
	 document.getElementById('latestResult-badge2').style = 'background:url(images/team-logo/dragons.png)';
	 document.getElementById('latestResult-team2-name').innerHTML  = 'Rebel Dragons';
	 document.getElementById('latestResult-team2-result').innerHTML  = 'Win';
	 document.getElementById('latestResult-team2-topScorer').innerHTML  = 'Jon Snow (186*)';
	 
	 
	 document.getElementById('matchSchedule').innerHTML  = 'Rebels Cricket has all around the year activities. The team participates in Regina Cricket Association T20 league during summers and conducts its own Fall/Winter inter-club league. The Rebels Cricket has four inter club teams who play against each other.';
	 
	 document.getElementById('nextMatch-p').innerHTML  = 'Upcomming match in the Rebels Winter League -2017';
	 
	 var logoimg1 = document.getElementById("nextMatch-logo1");
	 logoimg1.src="images/matchResult/wolves.png";
	 
	 var logoimg2 = document.getElementById("nextMatch-logo2");
	 logoimg2.src="images/matchResult/vipers.png";
	 
	 document.getElementById('nextMatch-dateTime').innerHTML  = 'October 14, 2017 | 7:00 PM';
	 document.getElementById('nextMatch-place').innerHTML  = 'Regina (Canada)';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	// Set the date we're counting down to
	var countDownDate = new Date("Oct 14, 2017 15:00:00").getTime();

	// Update the count down every 1 second
	xc = setInterval(function() {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("min").innerHTML = minutes;
	document.getElementById("sec").innerHTML = seconds;

	// If the count down is finished, write some text 
	if (distance < 0) {
    clearInterval(xc);
	document.getElementById("days").innerHTML = "00";
	document.getElementById("hours").innerHTML = "00";
	document.getElementById("min").innerHTML = "00";
	document.getElementById("sec").innerHTML = "00";
	}
	}, 1000);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	

	document.getElementById("hTeam1").innerHTML = "Rebel Team 1";
	document.getElementById("aTeam1").innerHTML = "Rebel Team 2";
	document.getElementById("Team1-Fix-Date").innerHTML = "ETA";
	document.getElementById("Team1-Fix-Time").innerHTML = "ETA";
	
	document.getElementById("hTeam2").innerHTML = "Rebel Team 3";
	document.getElementById("aTeam2").innerHTML = "Rebel Team 4";
	document.getElementById("Team2-Fix-Date").innerHTML = "ETA";
	document.getElementById("Team2-Fix-Time").innerHTML = "ETA";
	
	document.getElementById("hTeam3").innerHTML = "Rebel Team 1";
	document.getElementById("aTeam3").innerHTML = "Rebel Team 4";
	document.getElementById("Team3-Fix-Date").innerHTML = "ETA";
	document.getElementById("Team3-Fix-Time").innerHTML = "ETA";
	
	document.getElementById("hTeam4").innerHTML = "Rebel Team 2";
	document.getElementById("aTeam4").innerHTML = "Rebel Team 3";
	document.getElementById("Team4-Fix-Date").innerHTML = "ETA";
	document.getElementById("Team4-Fix-Time").innerHTML = "ETA";

	document.getElementById("hTeam5").innerHTML = "Rebel Team 1";
	document.getElementById("aTeam5").innerHTML = "Rebel Team 3";
	document.getElementById("Team5-Fix-Date").innerHTML = "ETA";
	document.getElementById("Team5-Fix-Time").innerHTML = "ETA";
	
	document.getElementById("hTeam6").innerHTML = "Rebel Team 2";
	document.getElementById("aTeam6").innerHTML = "Rebel Team 4";
	document.getElementById("Team6-Fix-Date").innerHTML = "ETA";
	document.getElementById("Team6-Fix-Time").innerHTML = "ETA";
	
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	document.getElementById("pointsTable-p").innerHTML = "Rebels Winter League - 2017 points table";
	
	document.getElementById("pointTable-team1").innerHTML = "Rebel Team 1";
	document.getElementById("teamPoint1").innerHTML = "10";
	
	document.getElementById("pointTable-team2").innerHTML = "Rebel Team 2";
	document.getElementById("teamPoint2").innerHTML = "10";
	
	document.getElementById("pointTable-team3").innerHTML = "Rebel Team 3";
	document.getElementById("teamPoint3").innerHTML = "10";
	
	document.getElementById("pointTable-team4").innerHTML = "Rebel Team 4";
	document.getElementById("teamPoint4").innerHTML = "10";
	
	document.getElementById("pointTable-team5").innerHTML = "Rebel Team 5";
	document.getElementById("teamPoint6").innerHTML = "10";
	
	document.getElementById("pointTable-team6").innerHTML = "Rebel Team 6";
	document.getElementById("teamPoint6").innerHTML = "10";
	
	document.getElementById("pointTable-team7").innerHTML = "Rebel Team 7";
	document.getElementById("teamPoint7").innerHTML = "10";
	
	document.getElementById("pointTable-team8").innerHTML = "Rebel Team 8";
	document.getElementById("teamPoint8").innerHTML = "10";
	
	document.getElementById("pointTable-team9").innerHTML = "Rebel Team 9";
	document.getElementById("teamPoint9").innerHTML = "10";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	


}
