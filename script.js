document.addEventListener('DOMContentLoaded', function () {
    const nameList = document.getElementById('nameList');
  
    // Load JSON data using an XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
  
        // Iterate through JSON data and create list items for names
        data.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = user.name;
          nameList.appendChild(listItem);
        });
      }
    };
    xhr.send();
  });
  