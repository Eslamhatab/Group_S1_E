<?php 

    /**
     * MySql =>Database => table => Rows  => Data
     * table STudent => id  + name + address + phone + grade 
     * 
     */

        $server    = 'localhost';
        $username  = 'root'; 
        $password  = '';
        $db_name   = "lms";

        $connection = mysqli_connect($server , $username , $password , $db_name);
        if($connection) {
            echo "connection Sueccesfully"; 
        }else{
            echo "connection failed";
        }
        