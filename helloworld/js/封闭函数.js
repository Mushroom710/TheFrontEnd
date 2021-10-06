// function fnTouZi() {
//     alert('这是另外一个投资函数：');
// }
// //写完直接调用
// fnTouZi();

//用一个函数包住
//可以解决，但还是可能出现同名的覆盖的问题
// function fnWarp() {
//     function fnTouZi() {
//         alert('这是另外一个投资函数：');
//     }
//     //写完直接调用
//     fnTouZi();
// }
// fnWarp();

;;;;;;
//一个分号表示一个空的js语句，是合法的
//在代码前面加分号，是为了保证代码压缩时，其前面的代码末尾没有加分号，
// 可以避免出错
//这就是封闭函数的一种写法
// ;(function() {
//     function fnTouZi() {
//         alert('这是另外一个投资函数：');
//     }
//     //写完直接调用
//     fnTouZi();
// } ());

//装高手写法1：
//不写外围小括号，改写一个 !
// ;!function () {
//     function fnTouZi() {
//         alert('这是另外一个投资函数：');
//     }
//     //写完直接调用
//     fnTouZi();
// }();

//装高手写法2：
//不写外围小括号，改写一个 ~
; ~function () {
    function fnTouZi() {
        alert('这是另外一个投资函数：');
    }
    //写完直接调用
    fnTouZi();
}();