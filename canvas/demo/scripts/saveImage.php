<?php
/**
 * Created by PhpStorm.
 * User: K. Nobel
 * Date: 2/8/2016
 * Time: 3:06 PM
 */

$target_dir = "../uploads/";
$target_file = $target_dir . basename($_FILES["image"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file, PATHINFO_EXTENSION);
$target_file = generateUniqueRandomFilename($imageFileType, 10, $target_dir);

// Check if image file is an actual image or fake image.
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["image"]["tmp_name"]);
    if($check !== false) {
        $uploadOk = 1;
    } else {
        $uploadOk = 0;
        echo "ERROR: File is not an image.";
    }
}

// Check if file already exists
if(file_exists($target_file)) {
    $uploadOk = 0;
    echo "ERROR: File already exists";
}

// Check file size
if($_FILES["image"]["size"] > 2621440) {
    $uploadOk = 0;
    echo "ERROR: File is too big";
}

// Allow certain file formats
if($imageFileType != "jpg"
    && $imageFileType != "jpeg"
    && $imageFileType != "png"
    && $imageFileType != "gif") {
    $uploadOk = 0;
    echo "ERROR: File is wrong format";
}

//$uploadOk = 1;

if($uploadOk == 0) {
    echo "\nERROR: File was not uploaded!";
} else {
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)){
        echo "demo/".$target_file;
    }
}

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function generateUniqueRandomFilename($fileType, $length = 10, $path = "../uploads/") {
    $randomString = generateRandomString($length);

    while(file_exists($path . $randomString . "." . $fileType)) {
        $randomString = generateRandomString($length);
    }
    return $path . $randomString . "." . $fileType;
}
?>