const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim(); // Email log in id from login handlebars page
    const password = document.querySelector('#password-login').value.trim(); //password login id from login handlebars page
  
    if (email && password) {
      const response = await fetch('/api/user/login', { //fecth request from login path
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile'); //replaces page with homepage or start route
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document.querySelector('.login-form') //form class from login handlebar page
  document.addEventListener('submit', loginFormHandler); //from login submit button in handlbar page