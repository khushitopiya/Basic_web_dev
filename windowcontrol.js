<!DOCTYPE html>
<html>
<head>
  <title>Window Control</title>
</head>
<body>

<button onclick="openChildWindow()">OPEN NEW WINDOW</button>
<button onclick="closeChildWindow()">CLOSE CHILD WINDOW</button>
<button onclick="closeMainWindow()">CLOSE MAIN WINDOW</button>

<script>
  var childWindow;

  function openChildWindow() {
    childWindow = window.open("child.html", "_blank", "width=400,height=400");
  }

  function closeChildWindow() {
    if (childWindow && !childWindow.closed) {
      childWindow.close();
    }
  }

  function closeMainWindow() {
    window.close();
  }
</script>

</body>
</html>
