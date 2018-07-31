var philoQuote = {
	"part1": [
	"The unexamined",
	"All is for",
	"I can control my",
	"It is wrong always",
	"Freedom is secured not by"
	],

	"part2": [
	"life is not",
	"the best of",
	"passion and emotions if",
	"everywhere and for everyone,",
	"the fulfilling of ones desire,"
	],

	"part3": [
	"worth living",
	"all possible world",
	"I can understand their nature",
	"to believe anything upon insufficient evidence",
	"but by the removal of desire"
	]

}	

var animalQuotes = {
	"part3":[
	"by the way its animals are treated",
	"a great language",
	"difficult standards for people to live up to",
	"not many listen though. That's the problem.",
	", they pass no criticisms." 
	],

	"part1":[
	"The greatness of a nation and its moral progress", 
	"Animal's eyes",
	"Animals",
	"Some people",
	"Dogs"
	],

	"part2":[
	"can be judged",
	"have the power to speak",
	"are reliable, many full of love, true in their affections, predictable in their actions, grateful and loyal.",
	"talk to animals.",
	"are such agreeable friends―they ask no questions"
	]

}
 
 // Make Quote generator give randomly quotes
 function genRandNum(quote_array_length) {
 	var randomNumber = Math.floor(Math.random() * quote_array_length);
 	return (randomNumber);
}
// Quote store work flow randomly 
function randomQuote(subject){
	var part1;
	var part2;
	var part3; 
	var result;
	if(subject == 'animal'){
		part1 = animalQuotes['part1'];
		part2 = animalQuotes['part2'];
		part3 = animalQuotes['part3'];
		 result = part1[genRandNum(part1.length)] + ' ' + part2[genRandNum(part2.length)] + ' ' + part3[genRandNum(part3.length)];
	} else{
		part1 = philoQuote['part1'];
		part2 = philoQuote['part2'];
		part3 = philoQuote['part3'];
		result = part1[genRandNum(part1.length)] + ' ' + part2[genRandNum(part2.length)] + ' ' + part3[genRandNum(part3.length)];
	}

  	
  	return(result);
 	
 }
 
 var genQuotes = function(count, subject){
 	var result = '';
 	for(i = 0; i < count; i++){
 		result = result + randomQuote(subject) + '<br/>';
 	} 
 	 return(result);
 }

  

 var showQuotes = function(){
	var subject;
	var count;
	var x  = document.getElementsByName("subject");
	count = document.getElementById("count").value;

for (var i = 0; i < x.length; i++) {
        if (x[i].checked == true ) {
            subject = x[i].value;
        } 
    }
    if(count < 0 || count > 5 ) {
    	document.getElementById('quotes').innerHTML = 'Please choose a number between 1 to 5';
    }
    else {
    	document.getElementById('quotes').innerHTML = genQuotes(count, subject);
    }
    

	

}







