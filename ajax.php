<?php 
require_once('includes/functions.php');
$crud = new CRUD();


extract($_POST);


switch ($action) {
  case "add":
    $crud->add($data);
    break;
  case "delete":
    $crud->delete($data);
    break;
  case "edit":
    $crud->edit($data);
    break;
}

