$(document).ready(function(){

// TOTAL TIME ON PAGE

	var startTimeOnPage = (new Date().getTime()) / 1000;
	var endTimeOnPage = null;
	var totalTimeOnPage = null;




// PERCENTAGE OF PAGE VIEWED:

		var getPercentOfPage = $(window).on('scroll', function(){
			
			var documentHeight = $(document).height();
			var windowHeight = $(window).height();
			var scrollTop = $(window).scrollTop();
			var heightDiff = documentHeight - windowHeight;
			var heightDiffPercent = Math.floor(scrollTop/heightDiff * 100);
			
			var lowestScrolled = null;
				
				if (heightDiffPercent > lowestScrolled) {

					lowestScrolled = heightDiffPercent
					
					console.log(lowestScrolled + '%');
				}


			})

// TOTAL HOVER TIME:

		var startTime = null;
		var endTime = null;
		var hoverTime = null;

			//Jumbotron:
		var totalHoverTimeJumbotron = null;

		var hoverOverJumbotron = $('.jumbotron').hover(function(){

			startTime = new Date().getTime();
			

			},

			function() {

				endTime = new Date().getTime();

				hoverTime = (endTime-startTime) / 1000;

				totalHoverTimeJumbotron += hoverTime;

				console.log('Jumbotron for: ' + totalHoverTimeJumbotron + ' secs');
		})


			//About Us:
		var totalHoverTimeAboutUs = null;

		var hoverOverAboutUs = $('#aboutUs').hover(function(){

			startTime = new Date().getTime();
			

			},

			function() {

				endTime = new Date().getTime();

				hoverTime = (endTime-startTime) / 1000;

				totalHoverTimeAboutUs += hoverTime;

				console.log('About Us: ' + totalHoverTimeAboutUs + ' secs');
		})

			//Mission Statement:
		var totalHoverTimeMission = null;

		var hoverOverMission = $('#mission').hover(function(){

			startTime = new Date().getTime();
			

			},

			function() {

				endTime = new Date().getTime();

				hoverTime = (endTime-startTime) / 1000;

				totalHoverTimeMission += hoverTime;

				console.log('Mission for: ' + totalHoverTimeMission + ' secs');
		})

			//Testimonials:

		var totalHoverTimeTestimonials = null;

		var hoverOverTestimonials = $('#testimonials').hover(function(){

			startTime = new Date().getTime();
			

			},

			function() {

				endTime = new Date().getTime();

				hoverTime = (endTime-startTime) / 1000;

				totalHoverTimeTestimonials += hoverTime;

				console.log('Testimonials for: ' + totalHoverTimeTestimonials + ' secs');
		})

			//The Form:

		var totalHoverTimeForm = null;

		var hoverOverForm = $('#theForm').hover(function(){

			startTime = new Date().getTime();
			

			},

			function() {

				endTime = new Date().getTime();

				hoverTime = (endTime-startTime) / 1000;

				totalHoverTimeForm += hoverTime;

				console.log('Forms for: ' + totalHoverTimeForm + ' secs');
		})

				
//NUMBER OF VOWELS 

			//Name Input:

		var numA = 0;
		var numE = 0;
		var numI = 0;
		var numO = 0;
		var numU = 0;

		$('#InputName').keydown(function(event){

			if (event.key === 'a' || event.key === 'A'){

				numA++;
			}
			else if (event.key === 'e' || event.key === 'E') {

				numE++;
			}
			else if (event.key === 'i' || event.key === 'I') {

				numI++;
			}
			else if (event.key === 'o' || event.key === 'O') {

				numO++;
			}
			else if (event.key === 'u' || event.key === 'U') {

				numU++;
			}
			else {

				console.log('not a vowel');
			}

			console.log('Name Input: # of As: ' + numA);
			console.log('Name Input: # of Es: ' + numE);
			console.log('Name Input: # of Is: ' + numI);
			console.log('Name Input: # of Os: ' + numO);
			console.log('Name Input: # of Us: ' + numU);

		})

			//Email Input

		$('#InputEmail').keydown(function(event){

			if (event.key === 'a' || event.key === 'A'){

				numA++;
			}
			else if (event.key === 'e' || event.key === 'E') {

				numE++;
			}
			else if (event.key === 'i' || event.key === 'I') {

				numI++;
			}
			else if (event.key === 'o' || event.key === 'O') {

				numO++;
			}
			else if (event.key === 'u' || event.key === 'U') {

				numU++;
			}
			else {

				console.log('not a vowel');
			}

			console.log('Email Input: # of As: ' + numA);
			console.log('Email Input: # of Es: ' + numE);
			console.log('Email Input: # of Is: ' + numI);
			console.log('Email Input: # of Os: ' + numO);
			console.log('Email Input: # of Us: ' + numU);

		})

			//Text Area

		$('#Textarea').keydown(function(event){

			if (event.key === 'a' || event.key === 'A'){

				numA++;
			}
			else if (event.key === 'e' || event.key === 'E') {

				numE++;
			}
			else if (event.key === 'i' || event.key === 'I') {

				numI++;
			}
			else if (event.key === 'o' || event.key === 'O') {

				numO++;
			}
			else if (event.key === 'u' || event.key === 'U') {

				numU++;
			}
			else {

				console.log('not a vowel');
			}

			console.log('Text Area Input: # of As: ' + numA);
			console.log('Text Area Input: # of Es: ' + numE);
			console.log('Text Area Input: # of Is: ' + numI);
			console.log('Text Area Input: # of Os: ' + numO);
			console.log('Text Area Input: # of Us: ' + numU);

		})


	$(window).on('beforeunload', function(event){


		endTimeOnPage = new Date().getTime() / 1000;


		totalTimeOnPage = (endTimeOnPage - startTimeOnPage);


		console.log(totalTimeOnPage.toFixed(2) + 's spent on page');


	})



})