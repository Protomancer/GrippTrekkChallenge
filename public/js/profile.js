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
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/activities/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/activity');
//       } else {
//         alert('Failed to delete activity');
//       }
//     }
//   };
  
  document
    .querySelector('.new-hike-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.hike-list')
    .addEventListener('click', delButtonHandler);