function restrict(elem){
    var tf = $(elem);
    var rx = new RegExp;
    if(elem == "email"){
        rx = /[' "]/gi;
    } else if(elem == "username"){
        rx = /[^a-z0-9]/gi;
    }
    tf.value = tf.value.replace(rx, "");
}
function checkusername(){
    var u = $("username").value;
    if(u != ""){
        $("unamestatus").innerHTML = "checking <i class='fa-li fa fa-spinner fa-spin'></i>";
        var ajax = ajaxObj("POST", "../php/signup.php");
        ajax.onreadystatechange = function(){
            if(ajaxReturn(ajax) == true){
                $("unamestatus").innerHTML = ajax.responseText;                
            }
        }
        ajax.send("usernamecheck="+u);
    }
}
function signup(){
    var u = $("username").value;
    var e = $("email").value;
    var p1 = $("pass1").value;
    var p2 = $("pass2").value;
    var c = $("country").value;
    var g = $("gender").value;
    var t = $("terms").value;
    var status = $("status");
    if(u == "" || e == "" || p1 == "" || p2 == "" || c == "" || g == ""){
        status.innerHTML = "Fill out all fields.";
    } else if(p1 != p2){
        status.innerHTML = "Password fields do not match";
    } else if(t != checked){
        status.innerHTML = "Please check our terms of service and use";
    } else {
        $("signupbtn").style.display = "none";
        status.innerHTML = "please wait <i class='fa-li fa fa-spinner fa-spin'></i>";
        var ajax = ajaxObj("POST", "../php/signup.php");
        ajax.onreadystatechange = function(){
            if(ajax.responseText != "signup_success"){
                status.innerHTML = ajax.responseText;
                $("signupbtn").style.display = "block";
            } else{
                window.scrollTo(0,0);
                $("signupform").innerHTML = "Okay "+u+",check your inbox, spam and junk box at <u>"+e+"</u> in a moment to complete the sign up process by activating your account. You will not be able to do anything on the site until you successfully activate your account.";
            }
        }
        ajax.send("u="+u+"e="+e+"&p="+p1+"&c="+c+"&g="+g);
    }
    
}
