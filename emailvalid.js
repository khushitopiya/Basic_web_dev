<!DOCTYPE html>
<html>
<head>
  <title>Email Validation</title>
  <script>
    function validateEmail() {
      var email = document.getElementById("email").value;
      var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (regex.test(email)) {
        alert("Valid email address!");
      } else {
        alert("Invalid email address!");
      }
    }
  </script>
</head>
<body>

<form>
  <label for="email">Email:</label>
  <input type="text" id="email" name="email">
  <button type="button" onclick="validateEmail()">Validate</button>
</form>

</body>
</html>
