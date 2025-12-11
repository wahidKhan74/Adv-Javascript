function loadUsers () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var users = JSON.parse(xhr.responseText);
                var usersContainer = document.getElementById('content');
                usersContainer.innerHTML = '';
                users.forEach(function(user) {
                    var userElement = document.createElement('div');
                    userElement.className = 'user';
                    userElement.innerHTML = '<h2>' + user.name + '</h2>' +
                                            '<p>Email: ' + user.email + '</p>' +
                                            '<p>Phone: ' + user.phone + '</p>';
                    usersContainer.appendChild(userElement);
                });
            } else {
                console.error('Error loading users:', xhr.statusText);
            }
        }
    };
    xhr.send();
}