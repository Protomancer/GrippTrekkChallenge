const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (response.ok) {
    document.location.replace('/'); //renders handlebar login page if fetch response good-(6/24/22)Protomancer adjusted to see if the file should be the main.
  } else {
    alert(response.statusText); // if there's and error sends http status code as text
  }
};
  
document.querySelector('#logout').addEventListener('click', logout); //logout id from logout button on main.handlebars page if user is logged in