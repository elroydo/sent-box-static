function validateform(){			
	var x = document.forms["myfeedbackform"]["fname"].value;
	var y = document.forms["myfeedbackform"]["iemail"].value; 
	var z = document.forms["myfeedbackform"]["comments"].value;
	
	if(x == "" || y == "" || z == "")	{
		alert("Please enter data in the required fields");
		return false;
	}else{
		alert("Thank you, we will get back to you soon");
		}
	}