		'use strict'
		let userName= prompt('What is your name?');
		let favInst= prompt('What is your favorite instrument?')
		console.log(favInst + ' is a beautiful instrument');
		alert(favInst + ' is a beautiful instrument ' +  userName);
		let how= prompt('How old are you? ' + userName)
		alert(userName +', you were born in' + (how - 2021));
		alert(userName + ', thank you for visiting my site. This is my Hello World as of 7APR2021')
		alert(userName+', in order to gain entry; you must tell me your favorite band')
		let favBand= prompt('What is your favorite band?')
		//Chance helped me with concatenation sytax stuff
		alert('Ohh, and one more thing, ' + userName + '. Here are a few questions you must answer about me. Take a guess!');
		alert('Great ' + userName + ' allow us to proceed');
		function luckyNumber(){
			let qOne= prompt ('What\'s my lucky number?')
			if(qOne === '44') 
				{alert('Thank You');
				}
				else
				{alert('You shall not pass');
			}
		}
		luckyNumber();
	//qOne becomes what the user entered after they press enter, the second part of this comment / when you're trying to loop qOne. That variable is what I check in loop = index
		let qTwo= prompt ('What year was Jimmy Page born?')
		if(qTwo === '1944')
			{alert('Wicked.');
    		}
    	if(qTwo !== '1944')
    		{alert('Close, but not quite');
    		}
		let qThree= prompt ('Who wrote the lyrics to the Rain Song?') .toLowerCase()
		if(qThree === 'jimmy page') 
			{alert('"it is the springtime of my loving"');
   			}
    	if(qThree !== 'jimmy page')
    		{alert('Close, but not quite');
   			}
		let qFour= prompt ('What color was the Fender Jimi Hendrix played at Woodstock?') .toLowerCase()
		if(qFour === 'white') 
			{alert('Correct!');
   			 }
    	if(qFour !== 'white')
    		{alert('Close, but not quite');}


    	alert('Friends get to know each other! ' + userName + ', you have a good taste in music, I also like ' + favBand);
		let food = ['crab', 'turkey', 'banana']
	// 	for (let index=0; index < food.length; index++) {
	// 		console.log(food[index])
	// 	}

	// 	let pass='grey';
	// 	let stop=false;
	// 	let guesses=4;
	// 	let myPass=prompt('In order to gain entry. I need a password');
	// 	console.log(myPass);
	// while (mypass!==pass){
	// 	if(myPass!==pass)
	// 		alert('You shal not pass')
	// 		stop=true
	// 	}
		

	// var state = false;
	// var button = document.getElementById("button1");
	// button.onclick = function() {
 //  	state = !state;
 //  	if (state) {
 //    button.innerHTML = "ON";
 //  	} else {
 //    button.innerHTML = "OFF";
 