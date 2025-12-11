// load post data via ajax

$(document).ready(function() {
    console.log('Document is ready, loading posts...');
});

function loadPosts() { 
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        async: true,
        success: function(data) {
            var postsContainer = $('#content');
            postsContainer.empty(); // Clear existing content
            data.forEach(function(post) {
                var postElement = $('<div class="post"></div>');
                postElement.append('<h2>' + post.title + '</h2>');
                postElement.append('<p>' + post.body + '</p>');
                postsContainer.append(postElement);
            });
        },
        error: function(error) {
            console.error('Error loading posts:', error);
        }
    });
}