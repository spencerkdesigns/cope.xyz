<?php
/*
 * Know the absolute path to where you will be using this script
 * 
 * -- getcwd = get current working directory
 * 
 * From this folder, I want to create a subfolder called "users" aswell as "usersuploads" and make sure that the user can upload to the uploads folder
*/
$curdir = getcwd();

if(mkdir($curdir ."/users", 0777)){
    if(mkdir($curdir."/'$user", 0777)){
        if(mkdir($curdir ."/uploads", 0777)){
            echo "Directory has been created";
        } else{
            echo "Failed to make directory";
        }        
    } else{
        echo "Failed to make directory";
    } 
} else{
    echo "Failed to make directory";
}