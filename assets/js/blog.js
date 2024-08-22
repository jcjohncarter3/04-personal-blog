const blogForm = document.getElementById('blog-form');

if (blogForm) {
  blogForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
      
      if (username && title && content) {
        const blogPost = { username, title, content };
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push(blogPost);
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        window.location.href = 'blog.html';
      } else {
        document.getElementById('error-message').textContent = 'Please complete the form.';
      }
  });
}