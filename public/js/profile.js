const newFormHandler = async (event) => {
    event.preventDefault();
  
    const hikeName = document.querySelector('#hike-name').value.trim();
    const time = document.querySelector('#hike-time').value.trim();
    const hikeLength = document.querySelector('#hike-length').value.trim();
    const elevationChange = document.querySelector('#elevation-change').value.trim();
    
    if (hikeName && time && hikeLength && elevationChange) {
      const response = await fetch(`/api/hikes`, {
        method: 'POST',
        body: JSON.stringify({ hikeName, time, hikeLength, elevationChange }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.ok) {
        document.location.replace('/');
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