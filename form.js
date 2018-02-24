// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("form_sample");
function firstfocus()
  {
  var uid = document.registration.dname.focus();
  return true;
  }
  
// This function will validate User id.
  function userid_validation(mx,my)
  {
  var uid = document.registration.dname;
  var uid_len = uid.value.length;
  var para_name = document.getElementById("para_id_1");
  if (uid_len == 0 || uid_len >= my || uid_len < mx)
  {
  
  para_name.innerHTML = "Name: <font color = 'red' size = 2>*Required field. Length should be between 5 and 12 characters.</font>";
  uid.focus();
  return false;
  }
  // Focus goes to next field i.e. Password.
  document.registration.demail.focus();
  para_name.innerHTML = "Name: <font color = 'red' size = 2>*required field</font>";
  return true;
  }
  
  // This function will validate Email.
  function ValidateEmail()
  {
  var uemail = document.registration.demail;
  var para_name = document.getElementById("para_id_2");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(uemail.value.match(mailformat))
  {
  para_name.innerHTML = "Email: <font color = 'red' size = 2 >*Required field.</font>";
  document.registration.dsubmit.focus();
  return true;
  }
  else
  {
  
  para_name.innerHTML = "Email: <font color = 'red' size = 2 >*Required field. Expected format: name@example.com.</font>";
  uemail.focus();
  return false;
  }
  }
  
  //to validate the mobile number:
function mob_num_validation(){
	var unumber = document.registration.dnum;
	var numbers = /^[0-9]+$/;
	var para_name = document.getElementById("para_id_4");
  	if(unumber.value.match(numbers)&&unumber.value.length == 10){
  		para_name.innerHTML = "Mobile Number: <font color = 'red' size = 2 >*Required field.</font>";
		document.registration.dsubmit.focus();
		return true;
	}	
	else{
	
    para_name.innerHTML = "Mobile Number: <font color = 'red' size = 2 >*Required field. Expected format: 10 digits.</font>";
		unumber.focus();
		return false;
	}
}

//to check all values after submit button is clicked
function CheckAll(){
	var ans = userid_validation(5,12); 
	var ans2 = ValidateEmail();
	var ans3 = mob_num_validation();
	if(ans && ans2 && ans3){
		return true;
	}
	else{
		return false;
	}
	return true;
}
