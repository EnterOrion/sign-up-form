let checkPassword = function() {
    if (document.getElementById('password').value ==
      document.getElementById('verify-pswd').value && password1 != "") {
      document.getElementById('message').style.color = '#00e600';
      document.getElementById('message').innerHTML = '(passwords match)';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = "(passwords don't match)";
    }
  }