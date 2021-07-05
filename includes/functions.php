<?php 

class CRUD
{
	private $conn;

    public function __construct()
    {
        $this->db();
    }

    public function db(){

    	$servername = 'localhost';
		$username = 'root';
		$password = '';
		$db = 'crud';
		$this->conn = new mysqli($servername, $username, $password, $db);
		
    }


    public function read(){

		$response = array();
		$sql = "SELECT * FROM employee";
		if( $result = $this->conn->query($sql) ){
			if($result->num_rows > 0){
				while( $row = $result->fetch_array() ){
					$response[] = array(
						'id' => $row['id'],
						'name' => $row['Name'],
						'email' => $row['Email'],
						'address' => $row['Address'],
						'phone' => $row['Phone'],
					);
				}
			}
		}


		return $response;
    }


    public function add($data){

    	extract($data);
    	$response = false;
    	$sql = 'INSERT INTO employee (Name, Email, Address, Phone)
		VALUES ("'.$name.'", "'.$email.'", "'.$address.'", "'.$phone.'")';

		if ($this->conn->query($sql) === TRUE) {
		  $response = true;
		}

		$this->conn->close();

		echo $response;
    }

    public function delete($id){
    	$response = false;
    	$sql = 'DELETE FROM employee WHERE id="'.$id.'";';

    	if ($this->conn->query($sql) === TRUE) {
		  $response = true;
		}

		$this->conn->close();

		echo $response;
    }


    public function edit($data){
    	extract($data);
    	$response = false;
    	$sql = 'UPDATE employee SET Name="'.$name.'", Email="'.$email.'", Address="'.$address.'" , Phone="'.$phone.'" WHERE id=' . $id;

		if ($this->conn->query($sql) === TRUE) {
		  $response = true;
		}

		$this->conn->close();

		echo $response;
    }
}