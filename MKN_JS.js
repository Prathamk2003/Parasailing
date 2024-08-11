// Function to validate email address
function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  
  // Function to validate mobile number
  function validateMobile(mobile) {
    var mobilePattern = /^[0-9]{10}$/;
    return mobilePattern.test(mobile);
  }
  
  // Function to validate the form
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var quantity = document.getElementById("quantity").value;
    
    // Validate name
    if (name == "") {
      alert("Please enter your name");
      return false;
    }
    
    // Validate email
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return false;
    }
    
    // Validate mobile number
    if (!validateMobile(mobile)) {
      alert("Please enter a valid mobile number");
      return false;
    }
    
    // Validate quantity
    if (quantity <= 0) {
      alert("Please enter a valid quantity");
      return false;
    }
    
    // If all validations pass, submit the form
    alert("Form submitted successfully!");
    return true;
  }