async function getPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const posts = await response.json();

      const postData = document.getElementById('post-data');
      let list = '<ul>';
  
      posts.forEach(post => {
        list += `<li><strong>${post.title}</strong>: <br> ${post.body}</li>`;
      });
  
      list += '</ul>';
      postData.innerHTML = list;
  
    } catch (error) {
      console.error('Hubo un problema al obtener los posts:', error);
      document.getElementById('post-data').innerHTML = `<p>Error al cargar los datos</p>`;
    }
  }
  