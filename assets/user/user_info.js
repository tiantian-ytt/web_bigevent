$(function () {
    var form = layui.form
    var layer = layui.layer
    form.verify({
        nickname: function (value) {
            if (value.length > 6) {
                return '昵称长度必须在1~6个字符之间！'

            }
        }
    })
    //初始化用户信息
    function initUserInfo() {
        $.ajax({
            method: 'GET',
            url: ''
        })
    }
})