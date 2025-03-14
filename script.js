// 'use strict'
// const Img = () => {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'https://jsonplaceholder.typicode.com/photos');
//     request.send();

//     request.addEventListener('load', function () {
//         const data = JSON.parse(this.responseText);
//         console.log(' :', data);

       
//     });
// };


// Img();



const req = new XMLHttpRequest();
req.open('GET', 'https://jsonplaceholder.typicode.com/photos/2' );

req.onreadystatechange = () =>  
    req.readyState - 4 || req.status - 200 || (  
        document.getElementById('photo-box').innerHTML =
        '<img src="' + (data = JSON.parse(req.responseText)).url + 
        '" alt="' + data.title + '"><h3>' + data.title + '</h3>'
);
req.send();








