<?php
    
    define('DB_HOST', 'localhost:3307');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', 'admin');
    define('DB_NAME', 'colombian_coffee');

    $link = mysqli_connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

    if($link === false){
        die("ERROR: Could not connect. " . mysqli_connect_error());
    }
?>