<?php

    header('Content-Type: application/json; charset=utf-8');

    // 接收客户传上来的数据
    $data = $_POST;

    $name = $data['name']; // 用户名
    $pass = $data['pass']; // 密码

    $mobile = $data['mobile']; // 手机号码

    $verify = $data['code']; // 验证码

    // PHP 必须也得做验证

    // 10001 代表用户不能空
    // 10002 代表号码格式不正确
    // 10000 成功

    if($name != 'itcast') {
        $result = array(
            'code'=> 10001,
            'msg'=>'数据库连接败',
            'result'=> ''//值必须存在
            //将错误提示规范化，便于管理
        );

        echo json_encode($result);
    } else {
        $result = array(
            'code'=> 10000,
            'msg'=>'OK',
            'result'=> 'http://www.baidu.com'
        );
        echo json_encode($result);
    }



    sleep(3);





?>