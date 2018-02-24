
<?php
$servername = "localhost";
$username = "root";
$dbname = "try";

// Create connection
$conn = new mysqli($servername, $username, 'jai$hriRam24', $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM tcount_tbl";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<br> " - Name: ". $row["tutorial_count"]. " " . $row["tutorial_author"] . "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();

/*
// Create connection
$conn = new mysqli('localhost', 'root', 'jai$hriRam24');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
conn.mysqli_connect_db('try');
// Create database
$sql = "select tutorial_author, tutorial_count from tcount_tbl";
$result = $conn->query($sql);
echo "nikita";
if ($conn->query($sql) === TRUE) {
	if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "author: " . $row["tutorial_author"]. " - count: " . $row["tutorial_count"]. " " . "<br>";
    }
} else {
    echo "0 results";
}
    echo "successful";
} else {
    echo "Error:" . $conn->error;
}

$conn->close();

$con = mysqli_connect('localhost','root','jai$hriRam24','railway');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="show databases";
//$result = mysqli_query($con,$sql);
if ($con->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $con->error;
}
mysqli_close($con);
*/
?>
