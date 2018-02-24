//var x = document.getElementById("form_sample");

function User() {
	this.niki = "niki";
	//this.no = 0;
	this.response = new Array(4);
	this.currentq = 0;
	this.nextq = 1;
	
}

User.prototype.connection = function (){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			if (xmlhttp.responseText == 0) {
				return false;
			}
		    User.prototype.myObj = JSON.parse(xmlhttp.responseText);
			}
		};
		xmlhttp.open("GET", "questions.php", false);
		xmlhttp.send();
	};

User.prototype.store_response = function(){
//	this.response[i]
	var i = this.currentq;
	if(document.getElementById('r1').checked){
		this.response[i]=1;
		return;
	}
	if(document.getElementById('r2').checked){
		this.response[i]=2;
		return;
	}
	if(document.getElementById('r3').checked){
		this.response[i]=3;
		return;
	}
	if(document.getElementById('r4').checked){
		this.response[i]=4;	
		return;
	}
}


User.prototype.evaluate_score = function(){
	var score = 0;
	for (var i = 0; i < this.myObj.length; i++) {
		if(this.response[i]==this.myObj[i]["correct"]){
			console.log(this.response[i], this.myObj[i]["correct"]);
			score++;
		}
	}
	return score;
//	document.getElementById("display_score").innerHTML = score;
} 


User.prototype.display_question = function(num){
		document.getElementById("question").innerHTML = this.myObj[num]["questions"]; 
		document.getElementById("option1").innerHTML = this.myObj[num]["option1"];
		document.getElementById("option2").innerHTML = this.myObj[num]["option2"];
		document.getElementById("option3").innerHTML = this.myObj[num]["option3"];
		document.getElementById("option4").innerHTML = this.myObj[num]["option4"];
		this.curentq = num;
		this.nextq = num+1;
		};

function conduct_test(){
var user1 = new User();
user1.connection(); 

user1.display_question(user1.currentq);
//user1.store_response();

function changestate() {
	return function() {
		user1.store_response();
		user1.currentq++;
		user1.nextq++;
		if(user1.currentq < 4){
        	user1.display_question(user1.currentq);
		}
		else{
			var wnd = window.open("submit.html");
			var score = user1.evaluate_score();
			wnd.document.write(score);
//			document.write(score);

//			document.getElementById("display_score").innerHTML = score;
//			console.log(user1.response);
		}
	}
}
document.getElementById("next").addEventListener("click", changestate(), false);

function cd(num){
	return function(){user1.display_question(num);}
}
document.getElementById("q1").addEventListener("click", cd(0), false);
document.getElementById("q2").addEventListener("click", cd(1), false);
document.getElementById("q3").addEventListener("click", cd(2), false);
document.getElementById("q4").addEventListener("click", cd(3), false);
}


function goto_question(num){
	console.log("here");
	user1.display_question(num);
	return;
}

