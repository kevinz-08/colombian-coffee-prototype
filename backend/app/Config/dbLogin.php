<?php

    $link = mysqli_connect($_ENV('DB_HOST'), $_ENV('DB_PASSWORD'), $_ENV('DB_USER'), $_ENV('DB_NAME'));

    if($link === false){
        die("ERROR: Could not connect. " . mysqli_connect_error());
    }
?>