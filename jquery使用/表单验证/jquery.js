$(function () {
    var $error_name = true;
    var $error_pwd = true;
    var $error_pwd2 = true;


    var $username = $('#username');
    var $pwd = $('#pwd');
    var $pwd2 = $('#pwd2');
    var $from = $('#from1');

    //h5页面 因为用了一个br换行，所以必须是next().next()才有效
    $username.click(function () {
        $(this).next().next().hide();
    })
    $username.blur(function () {
        fn_check_username();
    })

    function fn_check_username() {
        var val = $username.val();
        var $reUser = /^\w{6,20}$/;
        if (val == '') {
            $error_name = true;
            $username.next().next().html('用户名不能为空！').show();
            return
        }
        if ($reUser.test(val)) {
            $error_name = false;
            $username.next().next().hide();
        } else {
            $error_name = true;
            $username.next().next().html('用户名为6到20个字符，字母、数字、下划线组合').show();
        }
    }

    $pwd.click(function () {
        $(this).next().next().hide();
    })
    $pwd.blur(function () {
        fn_check_pwd();
    })

    function fn_check_pwd() {
        var val = $pwd.val();
        var $rePass = /^[\w!@#$%^&*]{6,20}$/

        if (val == '') {
            $error_pwd = true;
            $pwd.next().next().html('密码不能为空').show();
            return
        }
        if ($rePass.test(val)) {
            $error_pwd = false;
            $pwd.next().next().hide();
        } else {
            $error_pwd = false;
            $pwd.next().next().html('密码为字母、数字、特殊字符的组合').show();
        }
    }
    $pwd2.click(function () {
        $(this).next().next().hide();
    })

    $pwd2.blur(function () {
        fn_check_pwd2();
    })

    function fn_check_pwd2() {
        var val1 = $pwd.val();
        var val2 = $pwd2.val();
        if (val1 == '') {
            return;
        }
        if (val2 == '') {
            $pwd2.next().next().html('密码不能为空').show();
            return;
        }
        if (val1 == val2) {
            $error_pwd2 = false;
            $pwd2.next().next().hide();
        } else {
            $error_pwd2 = true;
            $pwd2.next().next().html('密码输入不一致').show();
        }
    }

    $from.submit(function () {
        // alert('ok');
        if ($error_name == false && $error_pwd == false && $error_pwd2 == false) {
            alert('提交成功');
            return true;
        } else {
            return false;
        }
    })
})