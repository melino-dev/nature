// Basic JavaScript to handle form submission (can be customized later)
document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the page from reloading
    
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    // For now, just log the values
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Gender:", gender);
    console.log("Email:", email);
    console.log("Phone:", phone);
    
    // You can send the data to a backend or perform further actions
  });
  