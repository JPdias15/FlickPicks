<?php
require 'vendor/autoload.php';
use MongoDB\Client;
use MongoDB\Driver\ServerApi;

// Replace the placeholder with your Atlas connection string
$uri = 'mongodb+srv://Pedro_Henrique:fantaLARANJA&sucoTANGUE16@cluster0.bvfdckq.mongodb.net/?retryWrites=true&w=majority';

// Specify Stable API version 1
$apiVersion = new ServerApi(ServerApi::V1);

// Create a new client and connect to the server
$client = new MongoDB\Client($uri, [], ['serverApi' => $apiVersion]);


?>