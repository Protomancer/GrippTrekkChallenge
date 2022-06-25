const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#hike-name').value.trim();
    const time = document.querySelector('#hike-time').value.trim();
    const elevation = document.querySelector('#hike-elevation').value.trim();
  
    if (name && time && elevation) {
      const response = await fetch(`/api/hikes`, {
        method: 'POST',
        body: JSON.stringify({ name, time, elevation }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create hike');
      }
    }
  };
  
  
  document
    .querySelector('.new-hike-form')
    .addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('.hike-list')
  //   .addEventListener('click', delButtonHandler);