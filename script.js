 const getPhotoData = () => {
            fetch('https://jsonplaceholder.typicode.com/photos/1')
                .then(response => response.json())
                .then(data => {
                    const container = document.getElementById('photo-box');
                    container.innerHTML = `
                        <img src="${data.url}" alt="${data.title}">
                        <h3>${data.title}</h3>
                    `;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        };

        getPhotoData();