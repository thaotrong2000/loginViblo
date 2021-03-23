$(document).ready(function () {
    checkLogin();
});

function checkLogin() {
    // Check Your Name
    $("#txtYourName").blur(function () {
        if(!$(this).val()){
            $(this).css("border-color", "red");
            $(this).keydown(function () { 
                $(this).css("border-color", "#ccc");
            });
            
        }
    else {
            $(this).css("border-color", "#ccc");
        }
    });

    // Check Your Email
    $("#txtYourEmail").blur(function () {
        if (!$(this).val()) {
            $(this).css("border-color", "red");
            $(this).keydown(function () {
                    $(this).css("border-color", "#ccc");
                })
        } else {
            $(this).css("border-color", "#ccc");
        }
    });

    // Check Your Username
    $("#txtYourUserName").blur(function () {
        if (!$(this).val()) {
            $(this).css("border-color", "red");
            $(this).keydown(function () {
                    $(this).css("border-color", "#ccc");
                })
        } else {
            $(this).css("border-color", "#ccc");
        }
    });

    // Check Your Password
    $("#txtPassword").blur(function () {
        if (!$(this).val()) {
            $(this).css("border-color", "red");
            $(this).keydown(function () {
                    $(this).css("border-color", "#ccc");
                }) 
        } else {
            $(this).css("border-color", "#ccc");
        }
    });

    // Check Your Repeat Password
    $("#txtRepeatPassword").blur(function () {
        if (!$(this).val()) {
            $(this).css("border-color", "red");
            $(this).keydown(function () {
                    $(this).css("border-color", "#ccc");
                })
        } else if ($("#txtPassword").val() !== $("#txtRepeatPassword").val()) {
            $(this).css("border-color", "red");
        } else {
            $(this).css("border-color", "#ccc");
        }

    });

    // Check icon check Agree 

    $("input[type='checkbox']").click(function () { 
        if($(this).is(":checked")){
            alert("True"); 
        }        
    });

}