<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "quiz";

// Create connection
$conn = new mysqli($servername, $username, 'sumedhkale', $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "select * from questions order by RAND() limit 4;";
$result = $conn->query($sql);
//while($row = $result->fetch_assoc()){
//echo $result->fetch_assoc()["question"];

//};
//echo json_encode($result->fetch_assoc()["question"]);

//echo json_encode($result);

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    	$rows[] = $r;
}
echo json_encode($rows);

$conn->close();
?> 
