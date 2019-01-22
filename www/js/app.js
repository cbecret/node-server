(function() {
  document.addEventListener("DOMContentLoaded", () => {
    const formConverter = document.querySelector('#formConverter form');
    const rawData = document.querySelector('#rawData');
    formConverter.addEventListener('submit', (e) => {
      e.preventDefault();

      const header = {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: rawData.value })
      };

      if (rawData.value.length !== 0) {
        fetch('http://localhost:8432/api/d3', header)
        .then(data => {
          return data.json();
        })
        .then(jsonData => {
          console.log(jsonData);
        })
        .catch(err => console.error(err));
      }
    })
  });
})();
