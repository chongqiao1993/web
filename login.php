<?php 	


	include "extends/config.php";
	include "extends/Model.class.php";

	$model = new Model("student_user");

	$username = $_POST['username'];
	$password = $_POST['userpwd'];

	$result = $model->where("username = '$username'")->select();
	if($result){
		$result1 = $model->where("password = '$password'")->select();
		if($result1){
			$data['code'] = 1;
			$data['data'] = '登录成功';
		}else{
			$data['code'] = 2;
			$data['data'] = '用户名或密码错误';
		}
	}else{
		$data['code'] = 0;
		$data['data'] = '用户名不存在';
	}
	echo json_encode($data);

 ?>