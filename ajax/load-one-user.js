function loadOneUser() {
    let content = document.getElementById('content');
    content.innerHTML = 'Loading user data...';

    fetch('https://jsonplaceholder.typicode.com/users/2')
        .then(response => {
            if (!response.ok) { 
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        }).then(user => {
            content.innerHTML = ''; // Clear loading message
            let userElement = document.createElement('div');
            userElement.className = 'user';
            userElement.innerHTML = '<h2>' + user.name + '</h2>' +
                                    '<p>Email: ' + user.email + '</p>' +        
                                    '<p>Phone: ' + user.phone + '</p>';
            content.appendChild(userElement);
        }).catch(error => {
            content.innerHTML = 'Error loading user data: ' + error.message;
            console.error('There was a problem with the fetch operation:', error);
        });
}