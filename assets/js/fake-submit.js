var form = document.getElementById('fake-submit');

form.addEventListener('submit', function (event) { 
    event.preventDefault();
    var username = document.getElementById('validationDefaultUsername').value;
    console.log(username);
    window.alert(username);
})