<?php
	$name = $_GET['name'];
	$pass = $_GET['pass'];
	$string = file_get_contents("file.json");
	$json = json_decode($string, true);
	// print_r ($json);
	$a = 0;
	foreach ($json as $key => $value) {
 		if ($value['name']==$name AND $value['pass']==$pass) {
 			$a = $key;
 			break;
 		}
	}
	echo json_encode($json[$a]);
?>