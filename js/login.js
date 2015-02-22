
//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $('#login_btn').click(function () {
        var login_name = $('#user_name').val();
        var login_password = $('#password').val();
        if (login_name != '' && login_password != '') {
            $.ajax({
                url: "/user/get_login",
                type: "POST",
                data: {
                    username: login_name,
                    password: login_password
                },
                beforeSend: function () {
                    $('#login_btn').attr("disabled", "disabled")
                },
                success: function (data) {
                    if (data == "found") {
                        location.href = "/";
                    }
                    else if (data == "not") {
                        $.notify("Username or Password is incorrect", "error");
                        $('#login_btn').removeAttr("disabled");
                    }
                }

            });
        }
        else {
            $.notify("Please enter username and password", "error");
        }

    });
});
