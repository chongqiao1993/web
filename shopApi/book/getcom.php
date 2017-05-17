<?php 

	require "./extends/Model.class.php";
	require "./extends/config.php";

	 $comModel = new Model("b_comment");

	 // $bookImg = new Model("b_images");

	 if ($_GET) {
	 	// $result = $comModel->where('comment_content='.$_GET["content"])->select();
	 	
	 	$content = $_GET['id'];  
	 	$result = $comModel->where("book_id=$content order by comment_addtime desc ")->select();

	 	
	 	// var_dump($result);
	 	if($result){
	 		$data['code'] = 0;
			$data['data'] = $result;
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