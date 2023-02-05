window.onload = function () {

    var btn_users = document.querySelector("#btn-users");

    var xhttp = new XMLHttpRequest();

    btn_users.onclick = function () {

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                console.log(this.responseText);

            }
        }

        console.log('veio depois do onready');

        xhttp.open('GET', 'ajax/user.php', true);

        xhttp.send();

    }
}