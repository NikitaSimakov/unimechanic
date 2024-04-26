const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=50');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    renderTable(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

const renderTable = (data) => {
  const tableBody = document.querySelector('#posts-table tbody');

  tableBody.innerHTML = '';

  data.forEach(post => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    cell1.textContent = post.id;
    row.appendChild(cell1);
    const cell2 = document.createElement('td');
    cell2.textContent = post.title;
    row.appendChild(cell2);
    const cell3 = document.createElement('td');
    cell3.textContent = post.body;
    row.appendChild(cell3);
    const cell4 = document.createElement('td');
    cell4.textContent = post.userId;
    row.appendChild(cell4);
    tableBody.appendChild(row);
  });
};

fetchPosts();
