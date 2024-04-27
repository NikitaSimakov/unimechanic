const postsTable = document.getElementById('posts-table');
const tableBody = postsTable.querySelector('tbody');
const searchInput = document.getElementById('search');
const resetSortingBtn = document.getElementById('reset-sorting');
const rows = document.querySelectorAll('tbody tr');

let postsData = [];
let filteredPosts = [];
let sortDirection = {};

const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    postsData = await response.json();
    renderPosts(postsData);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

const renderPosts = (posts) => {
  tableBody.innerHTML = '';
  posts.forEach(post => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${post.id}</td>
      <td>${post.title}</td>
      <td>${post.body}</td>
      <td>${post.userId}</td>
    `;
    tableBody.appendChild(row);
  });
};

const sortPosts = (field, th) => {
  const direction = sortDirection[field] === 'asc' ? 'desc' : 'asc';
  sortDirection = { [field]: direction };

  postsTable.querySelectorAll('th').forEach(th => {
    th.classList.remove('sorted');
    th.innerHTML = th.textContent.replace(' ▲', '').replace(' ▼', '');
  });

  th.classList.add('sorted');
  th.innerHTML = `${th.textContent} ${direction === 'asc' ? ' ▲' : ' ▼'}`;

  let sortedPosts = filteredPosts.length ? filteredPosts : postsData; // Используем filteredPosts, если он есть, иначе postsData

  sortedPosts.sort((a, b) => {
    const valueA = typeof a[field] === 'string' ? a[field].toUpperCase() : a[field];
    const valueB = typeof b[field] === 'string' ? b[field].toUpperCase() : b[field];

    if (direction === 'asc') {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });

  renderPosts(sortedPosts);
};


const filterPosts = (searchTerm) => {
  filteredPosts = postsData.filter(post => {
    return Object.values(post).some(value => {
      return typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  renderPosts(filteredPosts);
};

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm.length >= 3) {
    filterPosts(searchTerm);
  } else {
    renderPosts(postsData);
  }
});

postsTable.querySelectorAll('th').forEach(th => {
  th.addEventListener('click', () => {
    const field = th.id;
    sortPosts(field, th);
  });
});

resetSortingBtn.addEventListener('click', () => {
  const sortedTh = document.querySelector('th.sorted');
  if (sortedTh) {
    sortedTh.classList.remove('sorted', 'asc', 'desc');
    sortedTh.innerHTML = sortedTh.textContent.replace(' ▲', '').replace(' ▼', '');
  }
  searchInput.value = '';
  rows.forEach(row => {
    row.style.display = '';
  });
  fetchPosts();
  sortDirection = {};
  filteredPosts = postsData;
});

document.addEventListener('DOMContentLoaded', fetchPosts);
