const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#activity-name').value.trim();
    const rating = document.querySelector('#activity-rating').value.trim();
    const description = document.querySelector('#activity-desc').value.trim();
  
    if (name && rating && description) {
      const response = await fetch(`/api/hike`, {
        method: 'POST',
        body: JSON.stringify({ name, rating, description }),
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
    .querySelector('.new-activity-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.activity-list')
    .addEventListener('click', delButtonHandler);