'use strict';

const getCountryData = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/photos');
    request.send();

    request.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        console.log(' :', data);

       
    });
};


getCountryData();