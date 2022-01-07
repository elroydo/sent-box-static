function validatereview(){			
	var x = document.forms["reviewform"]["rname"].value;
	var y = document.forms["reviewform"]["rcomments"].value;
	
	if(x == "" || y == "")	{
		alert("Please enter data in the required fields");
		return false;
	}else{
		alert("Thank you for your review!");
		}
	}