<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Actions</title>
</head>
<body>
    <button onclick="BlankWindow()">Blank Window</button>
    <button onclick="Google()">Google</button>
    <button onclick="BMW()"> BMW</button>
    <button onclick="marvel()">Marvel</button>



    <script>
        function BlankWindow() {
            window.open("", "_blank", "width=500,height=500");
        }

        function Google() {
            window.open("https://www.google.co.in", "_blank");
        }

        function BMW() {
            window.open("https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjP_8CO5JiFAxVG5xYFHevLAX0YABAAGgJ0bA&ase=2&gclid=Cj0KCQjwqpSwBhClARIsADlZ_TmW2pBUfSR1IQQBwJewnxNfcxoQvq9NUq_diFuvU22vodW_J-TyZY4aAkGXEALw_wcB&ohost=www.google.com&cid=CAESVuD2K9JSVrlawQKxVe7Epnz4iGoazYEx6a25xKV-vl0B50dVTqi0eaioNsnzpYguL4LcM32CXrjP-OALWwZ4N5yaf8kg1s1YY3zGKa2N59B9XOK3Zgv7&sig=AOD64_3SKTkQhcGx2t6CqThfecej7VB2qw&q&nis=4&adurl&ved=2ahUKEwj9rLmO5JiFAxUif_UHHQJWBP8Q0Qx6BAgKEAE", "_blank");
        }
        function marvel() {
            window.open("https://marvel.com/movies", "_blank");
        }
    </script>
</body>
</html>
