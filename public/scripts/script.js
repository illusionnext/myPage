'use strict';

const getLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (postData) => {
      console.log(postData);
      alert(
        `Your lat's ${postData.coords.latitude}\nYour lon's ${postData.coords.longitude}`
      );
    },
    (error) => {
      console.log(error);
    }
  );
  console.log('Getting position...');
};

// getLocation();
