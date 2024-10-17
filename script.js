document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    
    document.getElementById('posts').appendChild(post);
    
    document.getElementById('post-form').reset();
});
