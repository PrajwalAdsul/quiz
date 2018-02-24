<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "friends";

// Create connection
$conn = new mysqli($servername, $username, 'jai$hriRam24', $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$dname = $_POST['dname']; 
$demail = $_POST['demail'];
$dmessage = $_POST['dmessage'];
$dnum = $_POST['dnum'];

$sql = "INSERT INTO friends_data (name, email, message, number) VALUES ('$dname', '$demail', '$dmessage', '$dnum')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 
