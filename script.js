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



// const getPhotoData = () => {
//     fetch('https://jsonplaceholder.typicode.com/photos/2')
//         .then(response => response.json())
//         .then(data => {
//             const container = document.getElementById('photo-box');
//             container.innerHTML = `
//                 <img src="${data.url}" alt="${data.title}">
//                 <h3>${data.title}</h3>
//             `;
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// };

// getPhotoData();







document.addEventListener("DOMContentLoaded", () => {
    const getPhotoData = () => {
        fetch('https://jsonplaceholder.typicode.com/photos/2')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('photo-box');
                if (container) {
                    container.innerHTML = `
                        <img src="${data.url}" alt="${data.title}" style="max-width: 100%; height: auto;">
                        <h3>${data.title}</h3>
                    `;
                } else {
                    console.error("Element topilmadi!");
                }
            })
            .catch(error => {
                console.error('Xatolik yuz berdi:', error);
            });
    };

    getPhotoData();
});