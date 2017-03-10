<?php

    header('Content-Type: application/json; charset=utf-8');

    // 接收客户传上来的数据
    $data = $_POST;

    $name = $data['name']; // 用户名
    $pass = $data['pass']; // 密码

    if($name != '张全蛋'&& $pass!=123456) {
        $result = array(
            'code'=> 10001,
            'msg'=>'数据库连接失败',
            'result'=> ''//值必须存在
            //将错误提示规范化，便于管理
        );

        echo json_encode($result);
    } else {
        $result = array(
            'code'=> 10000,
            'msg'=>'骚年，和我一起敲代码吧',
            'result'=> 'http://m.manmanbuy.com/'
        );
        echo json_encode($result);
    }






?>