const loginForm = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim(); // Email log in id from login handlebars page

  const password = document.querySelector('#password-login').value.trim(); //password login id from login handlebars page
  
  if (email && password) {
    const response = await fetch('/api/users/login', { //fecth request from login path
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/'); //replaces page with homepage or start route
    } else {
      alert('Failed to log in');
    }
  }
};

const signupForm = async (event) => {
  event.preventDefault();
  
  const userName = document.querySelector('#name-signup').value.trim();
  const userEmail = document.querySelector('#email-signup').value.trim();
  const userPassword = document.querySelector('#password-signup').value.trim();
  
  if (userName && userEmail && userPassword) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ userName, userEmail, userPassword }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('homepage');
    } else {
      alert(response.statusText);
    }
  }
};
  

document
  .querySelector('.login-form') //form class from login handlebar page
  .addEventListener('submit', loginForm); //from login submit button in handlbar page
  
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupForm);
   

