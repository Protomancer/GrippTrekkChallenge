const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#hike-name').value.trim();
    const rating = document.querySelector('#hike-rating').value.trim();
    const elevation = document.querySelector('#hike-elevation').value.trim();
  
    if (name && rating && elevation) {
      const response = await fetch(`/api/hike`, {
        method: 'POST',
        body: JSON.stringify({ name, rating, elevation }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create activity');
      }
    }
  };
  
  
  document
    .querySelector('.new-hike-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.hike-list')
    .addEventListener('click', delButtonHandler);