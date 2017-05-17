<?php 

	include "extends/config.php";
	include "extends/Model.class.php";

	$model = new Model("student_user");

	$username = $_POST['username'];
	$password = $_POST['userpwd'];

	$result = $model->where("username = '$username'")->select();

	if($result){
		$data['code'] = 0;
		$data['data'] = '用户已存在';
	}else{
		$arr = ['username'=>"$username","password"=>"$password"];
		$result1 = $model->add($arr);

		if($result1){
			$data['code'] = 1;
			$data['data'] = "注册成功";
		}else{
			$data['code'] = 2;
			$data['data'] = "注册失败";
		}
	}
	echo json_encode($data);
 ?>