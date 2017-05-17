<?php 

	require "./extends/Model.class.php";
	require "./extends/config.php";

	 $bookModel = new Model("b_book");

	 // $bookImg = new Model("b_images");

	 if ($_GET) {
	 	$result = $bookModel->where('book_id='.$_GET["id"])->select();
	 	// $result = $bookImg->where('book_id='.$_GET["imgId"])->select();

	 	// var_dump($result);
	 	if($result){
	 		$data['code'] = 0;
			$data['data'] = $result[0];
			echo json_encode($data);
		}else {
			$data['code'] = 1;
			$data['data'] = "fail";
			echo json_encode($data);
		}
	 }else {
	 	$data['code'] = 1;
		$data['data'] = "fail";
		echo json_encode($data);
	 }



	 

 ?>