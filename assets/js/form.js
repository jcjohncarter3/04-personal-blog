document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const blogPostsContainer = document.getElementById('blog-posts');
  
    blogPosts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.className = 'blog-post';
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p><strong>Author:</strong> ${post.username}</p>
      `;
      blogPostsContainer.appendChild(postElement);
    });
  
    const modeToggle = document.getElementById('mode-toggle');
    modeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
      });
  });