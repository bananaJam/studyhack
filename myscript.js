// Checking page title
if (document.title.indexOf("Google") != -1 || document.title.indexOf("reddit") != -1 || document.title.indexOf("Yahoo") != -1 || document.title.indexOf("Facebook") != -1  || document.title.indexOf("Twitter") != -1) {

    
	document.documentElement.style.height = '100%';
	document.body.style.height = '100%';
	document.documentElement.style.width = '100%';
	document.body.style.width = '100%';

	var div = document.createElement( 'div' );
	var btnForm = document.createElement( 'form' );
	var btn = document.createElement( 'input' );

	//append all elements
	document.body.appendChild( div );
	div.appendChild( btnForm );
	btnForm.appendChild( btn );
	//set attributes for div
	div.id = 'myDivId';
	div.style.position = 'fixed';
	div.style.top = '0%';
	div.style.left = '0%';
	div.style.width = '100%';   
	div.style.height = '100%';
	div.style.backgroundColor = '#7FDBFF';

	//set attributes for btnForm
	btnForm.action = '';

	//set attributes for btn
	//"btn.removeAttribute( 'style' );
	btn.type = 'button';
	btn.setAttribute("onclick", 'document.getElementById("myDivId").style.visibility="hidden"');
	btn.value = 'hello';
	btn.style.visibility = 'hidden';
	btn.style.top = '50%';
	btn.style.left = '50%';
	

    
    
    //QUESTIONS
    
    questions=["ATP and GTP provide energy for several cellular processes, and are composed of all except which of the following components?",
    			"A process in which chance events are likely to change allele frequencies in a small population is known as _____"
    		];
    
    curr = 0;
    
    var answers = [
		{correct: "A pyrimidine", incorrect:["Three phosphate groups", "A purine", "A pentose sugar"]},
		{correct: "genetic drift", incorrect:["evolution", "bottleneck effect", "natural selection"]}
	];
	
	var message = document.createElement("div");
	message.style.visibility = "hidden";
	message.style.position="fixed";
	message.style.fontSize="25px";
	message.style.top="75%";
	message.style.left="35";
	
	var wrong = document.createTextNode("That was incorrect. The correct answer was " + answers[curr].correct + ".");
	message.appendChild(wrong);
	
	
//	function loadQuestion(curr){
	
		
		//QUESTION DISPLAY
		var btn2 = document.createElement("div");
		var t = document.createTextNode(questions[curr]);
		btn2.appendChild(t);
		btn2.style.position="fixed";
		btn2.style.top="25%";
		btn2.style.left="10%";
		btn2.style.fontSize="25px";
		document.body.appendChild(btn);
	
	

	
		var choiceA = document.createElement("button");
		var choiceAText = document.createTextNode(answers[curr].correct);			//Actual text being displayed
		choiceA.addEventListener('click', function(){
												var choice = answers[curr].correct;	//Value of the answer
												doThing(choice);					//See if the answer is right
											},
											false);
		choiceA.choice=answers[0].correct;
		choiceA.appendChild(choiceAText);
	
		var choiceB = document.createElement("button");
		var choiceBText = document.createTextNode(answers[curr].incorrect[0]);
		choiceB.addEventListener('click', function(){
												var choice = answers[curr].incorrect[0];
												doThing(choice);
											},
											false);
		choiceB.choice=answers[curr].incorrect[0];
		choiceB.appendChild(choiceBText);
	
		var choiceC = document.createElement("button");
		var choiceCText = document.createTextNode(answers[curr].incorrect[1]);
		choiceC.addEventListener('click', function(){
												var choice = answers[curr].incorrect[1];
												doThing(choice);
											},
											false);
		choiceC.choice=answers[curr].incorrect[1];
		choiceC.appendChild(choiceCText);
	
		var choiceD = document.createElement("button");
		var choiceDText = document.createTextNode(answers[curr].incorrect[2]);
		choiceD.addEventListener('click', function(){
												var choice = answers[curr].incorrect[2];
												doThing(choice);
											},
											false);
		choiceD.choice=answers[curr].incorrect[2];
		choiceD.appendChild(choiceDText);
	
		document.body.appendChild(choiceA);
		document.body.appendChild(choiceB);
		document.body.appendChild(choiceC);
		document.body.appendChild(choiceD);
	
		var ladee = document.createElement("div");
		ladee.appendChild(choiceA);
		ladee.appendChild(choiceB);
		ladee.appendChild(choiceC);
		ladee.appendChild(choiceD);
	
		ladee.style.position="fixed";
		ladee.style.top="50%";
		ladee.style.left="35%";
	

		
	
		//Message: Got the question wrong

		//var nextButton = document.createElement("button");
	   // button.value="Next question";
	   // button.setAttribute("click", "curr++");
		//message.appendChild(nextButton);
	
	
		div.appendChild(btn2);
		div.appendChild(ladee);
		div.appendChild(message);
//	}	
	
	//loadQuestion(curr);
    
	function doThing(choice){
		if (choice==answers[curr].correct){
			div.style.backgroundColor = '#2ECC40';
			setTimeout(function (){
				document.getElementById("myDivId").style.visibility="hidden";
			}, 1000);
		}
		else{
			div.style.backgroundColor = '#FF4136';
			message.style.visibility = "visible";
			curr++;
			console.log(curr);
		//	loadQuestion(curr);
		}
	}
	
}
