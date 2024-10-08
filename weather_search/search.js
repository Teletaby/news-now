document.getElementById('enterbtn').addEventListener("click", (e) => {
    e.preventDefault();
    const data = document.getElementById('searchbtn').value;
    localStorage.setItem('inputData', data);
    window.location.href = '/weather/weather.html';
});