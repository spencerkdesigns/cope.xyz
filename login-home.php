<?PHP
require_once("./include/membersite_config.php");

if(!$fgmembersite->CheckLogin())
{
    $fgmembersite->RedirectToURL("login.php");
    exit;
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US">
<head>
      <meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>
      <title>Feed | Cope</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Cope Inc. - the social media platform to keep users connected whether it's from the other room or half way across the world" />
        <meta name="author" content="Spencer K Phillips" />
        <link href="//cdn.spencerkdesigns.com/cope/assets/css/bootstrap.min.css?v11" rel="stylesheet"></link>
            <link href="//cdn.spencerkdesigns.com/cope/assets/css/cope.css?v01" rel="stylesheet"></link>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet"></link>
        <link href="//cdn.spencerkdesigns.com/cope/assets/css/cookiebar.css" rel="stylesheet"></link>
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
        <link rel="icon" type="image/x-icon" href="img/CopeIcon.ico"></link>
        <script src="//cdn.spencerkdesigns.com/cope/assets/js/ajax.js" type="text/javascript"></script>
        <script src="//cdn.spencerkdesigns.com/cope/assets/js/cope.js" type="text/javascript"></script>
        <script src="//cdn.spencerkdesigns.com/cope/assets/js/main.js"></script>
    </head>
</head>
<body id="page-top" style="color: #121212;">
    <nav class="navbar navbar-inverse navbar-fixed-bottom" style="color: white;">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <p>Cookies ensure that this website runs as necessary. By using this site, you accept to use cookies.</p>
                    </div>
                    <div class="col-md-6">
                        <p>By continuing on, all users, member or not agree to the <a target="_blank" href="assets/other/terms.pdf">Terms Of Service</a> associated with this site.</p>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container-fluid">
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header page-scroll">
                        <a class="navbar-brand page-scroll" href="#page-top">
                        </a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="hidden"><a href="#page-top"></a></li>
    <!--                        <li><a href="Register.php" class="btn btn-secondary">REGISTER</a></li><li><a href="login.php">LOG IN</a></li>-->
                            <li><a href="Settings.php" class="btn btn-secondary">SETTINGS</a></li><li><a href="logout.php">LOG OUT</a></li>

                            <li>
                                <a id="open_menu" href="#menu"><i class="fa fa-bars"></i>MENU</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    <style> 
        .box{
            box-shadow: 0 2px 2px rgba(10,10,10, 0.6);
            min-height: 100px;
            background: white;
            margin-right: 6px;
            margin-left: 6px;
            margin-bottom: 10px;
            margin-top: 10px;
            padding-bottom: 25px;
            text-align: center;
            border-radius: 5px;
            border-top: rgb(10,10,10) 1px solid;
        }
        .profile{
            margin-top: 10px;
        }
        .feed{
            min-height: 1200px;
        }
    </style>
        <div class="container-fluid" style="margin-top: 100px;">
            <div class="row">
                <div class="col-lg-12">
                    <div class="">
                        <div class="col-lg-3 col-md-3 box">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="row profile">
                                        <div class="col-lg-4">
                                            <img class="img-centered img-responsive img-rounded" src="assets/img/IMG_0656.JPG" alt=""/>
                                        </div>
                                        <div class="col-lg-8">
                                            <div class="row">
                                                <h4><?= $fgmembersite->UserFullName(); ?></h4>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <p>
                                                        Cras auctor sagittis sapien, a imperdiet lectus pharetra et. Praesent facilisis magna nec nulla auctor, ac fermentum augue imperdiet ornare.                                                        
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="col-lg-12">
                                                <div class="row">
                                                    <p><i class="fa fa-map-marker"></i> Cleveland, OH</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="col-lg-12">
                                                <div class="row">
                                                    <p><i class="fa fa-globe"></i> www.spencerkdesigns.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="col-lg-12">
                                                <div class="row">
                                                    <p><i class="fa fa-users"></i> Subscribers <span style="color: #ff5317;">2000</span></p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="col-lg-12">
                                                <div class="row">
                                                    <p><i class="fa fa-users"></i> Subscribed <span style="color: #ff5317;">100</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <style>
                            .post-header{
                                text-align: left;
                                margin-left: 10px;
                            }
                            .post-message{
                                text-align: left;
                                margin-left: 10px;
                            }
                            .user-image{
                                max-height: 64px;
                                max-width: 64px;
                            }
                            .post{
                                margin-bottom: 30px;
                                margin-top: 5px;
                            }
                            .add-icon{
                                min-height: 25px;
                                min-width: 25px;
                                height: 30px;
                                width: 30px;
                                max-height: 40px;
                                max-width: 40px;
                                text-align: left;
                                padding-top: 7px;
                                padding-left: 7px;
                                color: #121212;
                                text-decoration: none;
                            }
                            .add-icon:hover{
                                background-color: #ff5317;
                                color: white;
                            }
                        </style>
                        <div class="col-lg-5 col-md-5 box feed">
                            <h4>Post</h4>
                            <form id="post" method="post" action="login-home.php">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="col-lg-10" style="margin-bottom: 10px;">
                                            <input id="post_message" class="form-control" placeholder="Message here..." />
                                        </div>
                                        <div class="col-lg-2">
                                            <button id="message_send" class="btn btn-default">Post</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12" style="margin-top: 10px;">
                                        <div class="row" style="text-align: left; margin-left: 15px">
                                            <span><a href="#"><i class="fa fa-camera add-icon"></i></a></span>
                                            <span><a href="#"><i class="fa fa-video-camera add-icon"></i></a></span>
                                            <span><a href="#"><i class="fa fa-link add-icon"></i></a></span>
                                            <span><a href="#"><i class="fa fa-tags add-icon"></i></a></span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <hr />
                            <div class="row">
                                <div class="col-lg-12">
                                        <div class="row post">
                                            <div class="col-lg-1">
                                                <a href="#">
                                                    <img class="img-responsive img-rounded user-image" src="assets/img/users255.png" />
                                                </a>
                                            </div>
                                            <div class="col-lg-11">
                                                <h4 class="post-header">Username<span style="color: rgb(229,229,231); font-size: 10pt;"> 1hr</span></h4>
                                                <p class="post-message">This is their post...<br /></p>
                                            </div>
                                        </div>
                                        <div class="row post">
                                            <div class="col-lg-1">
                                                <a href="#">
                                                    <img class="img-responsive img-rounded user-image" src="assets/img/users255.png" />
                                                </a>
                                            </div>
                                            <div class="col-lg-11">
                                                <h4 class="post-header">Username<span style="color: rgb(229,229,231); font-size: 10pt;"> 1hr</span></h4>
                                                <p class="post-message">This is their post...<br /></p>
                                            </div>
                                        </div>
                                        <div class="row post">
                                            <div class="col-lg-1">
                                                <a href="#">
                                                    <img class="img-responsive img-rounded user-image" src="assets/img/users255.png" />
                                                </a>
                                            </div>
                                            <div class="col-lg-11">
                                                <h4 class="post-header">Username<span style="color: rgb(229,229,231); font-size: 10pt;"> 1hr</span></h4>
                                                <p class="post-message">This is their post...<br /></p>
                                            </div>
                                        </div>
                                        <div class="row post">
                                            <div class="col-lg-1">
                                                <a href="#">
                                                    <img class="img-responsive img-rounded user-image" src="assets/img/users255.png" />
                                                </a>
                                            </div>
                                            <div class="col-lg-11">
                                                <h4 class="post-header">Username<span style="color: rgb(229,229,231); font-size: 10pt;"> 1hr</span></h4>
                                                <p class="post-message">This is their post...<br /></p>
                                            </div>
                                        </div>
                                        <div class="row post">
                                            <div class="col-lg-1">
                                                <a href="#">
                                                    <img class="img-responsive img-rounded user-image" src="assets/img/users255.png" />
                                                </a>
                                            </div>
                                            <div class="col-lg-11">
                                                <h4 class="post-header">Username<span style="color: rgb(229,229,231); font-size: 10pt;"> 1hr</span></h4>
                                                <p class="post-message">This is their post...<br /></p>
                                            </div>
                                        </div>
                                        <div class="row post">
                                            <div class="col-lg-1">
                                                <a href="#">
                                                    <img class="img-responsive img-rounded user-image" src="assets/img/users255.png" />
                                                </a>
                                            </div>
                                            <div class="col-lg-11">
                                                <h4 class="post-header">Username<span style="color: rgb(229,229,231); font-size: 10pt;"> 1hr</span></h4>
                                                <p class="post-message">This is their post...<br /></p>
                                            </div>
                                        </div>
                                        <div class="row post">
                                            <div class="col-lg-1">
                                                <a href="#">
                                                    <img class="img-responsive img-rounded user-image" src="assets/img/users255.png" />
                                                </a>
                                            </div>
                                            <div class="col-lg-11">
                                                <h4 class="post-header">Username<span style="color: rgb(229,229,231); font-size: 10pt;"> 1hr</span></h4>
                                                <p class="post-message">This is their post...<br /></p>
                                            </div>
                                        </div>
                                        <div class="row post">
                                            <div class="col-lg-1">
                                                <a href="#">
                                                    <img class="img-responsive img-rounded user-image" src="assets/img/users255.png" />
                                                </a>
                                            </div>
                                            <div class="col-lg-11">
                                                <h4 class="post-header">Username<span style="color: rgb(229,229,231); font-size: 10pt;"> 1hr</span></h4>
                                                <p class="post-message">This is their post...<br /></p>
                                            </div>
                                        </div>

                                        <div class="row post">
                                            <div class="col-lg-1">
                                                <a href="#">
                                                    <img class="img-responsive img-rounded user-image" src="assets/img/users255.png" />
                                                </a>
                                            </div>
                                            <div class="col-lg-11">
                                                <h4 class="post-header">Username<span style="color: rgb(229,229,231); font-size: 10pt;"> 1hr</span></h4>
                                                <p class="post-message">This is their post...<br /></p>
                                            </div>
                                        </div>
                                        <div class="row post">
                                            <div class="col-lg-1">
                                                <a href="#">
                                                    <img class="img-responsive img-rounded user-image" src="assets/img/users255.png" />
                                                </a>
                                            </div>
                                            <div class="col-lg-11">
                                                <h4 class="post-header">Username<span style="color: rgb(229,229,231); font-size: 10pt;"> 1hr</span></h4>
                                                <p class="post-message">This is their post...<br /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 box other" >
                            <h2>Who to subscribe to</h2>
                              <div class="row">
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <img class="img-centered img-responsive img-rounded" src="assets/img/users.png" alt=""/>
                                        </div>
                                        <div class="col-lg-9">
                                            <div class="row">
                                                <h4 style="text-align: left;">User Name</h4>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12" style="text-align: left;">
                                                    <p>
                                                        Cras auctor sagittis sapien, a imperdiet lectus pharetra et.                                                        
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                  <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <img class="img-centered img-responsive img-rounded" src="assets/img/users.png" alt=""/>
                                        </div>
                                        <div class="col-lg-9">
                                            <div class="row">
                                                <h4 style="text-align: left;">User Name</h4>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12" style="text-align: left;">
                                                    <p>
                                                        Cras auctor sagittis sapien, a imperdiet lectus pharetra et.                                                        
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                  <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <img class="img-centered img-responsive img-rounded" src="assets/img/users.png" alt=""/>
                                        </div>
                                        <div class="col-lg-9">
                                            <div class="row">
                                                <h4 style="text-align: left;">User Name</h4>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12" style="text-align: left;">
                                                    <p>
                                                        Cras auctor sagittis sapien, a imperdiet lectus pharetra et.                                                        
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                  <div class="col-lg-12">
                                      <hr />
                                  </div>
                                  <div class="col-lg-12">
                                      <div class="col-lg-4"></div>
                                      <div class="col-lg-4"></div>
                                      <div class="col-lg-4"></div>                                      
                                  </div>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
<div id='fg_membersite_content'>
    
    
        <div id="menu">
            <ul>
                <!--<li><a href="reportBug.php"><i class="fa fa-bug red"></i>  <small></small></a></li>-->
                    <li><a href="access-controlled.php"><i style="color: #ff5317;" class="fa fa-chevron-right"></i> Home</a></li>
                    <li><a href="notifications.php" class="page-scroll"><i style="color: #ff5317;" class="fa fa-chevron-right"></i> Notifications</a></li>
                    <li><a href="messages.php" class="page-scroll"><i style="color: #ff5317;" class="fa fa-chevron-right"></i> Messages</a></li>
                    <li><a href="#"><i style="color: #ff5317;" class="fa fa-chevron-right"></i> Settings</a></li>
                    <li><a href="#"><i style="color: #ff5317;" class="fa fa-chevron-right"></i> <i class="fa fa-search" style="color: white;"></i> Search</a></li>
                    <li><a href="support.php"><i style="color: #ff5317;" class="fa fa-chevron-right"></i> Support</a></li>
            </ul>
        </div>
<h2>Home Page</h2>
Welcome back <?= $fgmembersite->UserFullName(); ?>!

<p><a href='change-pwd.php'>Change password</a></p>

<p><a href='access-controlled.php'>A sample 'members-only' page</a><!-- Profile Page --></p>
<br><br><br>
<p><a href='logout.php'>Logout</a></p>
</div>
    <script type="text/javascript" src="//cdn.jsdelivr.net/cookie-bar/1/cookiebar-latest.min.js?thirdparty=1&always=1&top=1&showNoConsent=1&remember=10&privacyPage=privacy.trycope.xyz"></script>
        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

        <!--<script type="text/javascript" src="js/fancybox/jquery.easing-1.3.pack.js"></script>
        <script type="text/javascript" src="js/fancybox/jquery.fancybox-1.3.4.js"></script>
        <script type="text/javascript" src="js/fancybox/jquery.mousewheel-3.0.4.pack.js"></script>-->
        
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
        <script src='https://www.google.com/recaptcha/api.js'></script>
        <script type="text/javascript" src="//platform.linkedin.com/in.js"></script>
        <script type="text/javascript" src="//cdn.spencerkdesigns.com/cope/assets/js/jquery.fancybox.js?v=11"></script>
        <script type="text/javascript" src="//cdn.spencerkdesigns.com/cope/assets/js/jquery.fancybox.pack.js?v=11"></script>
        <script type="text/javascript" src="//cdn.spencerkdesigns.com/cope/assets/js/jquery.ui.widget.js?v=11"></script>
        <script type="text/javascript" src="//cdn.spencerkdesigns.com/cope/assets/js/jquery.iframe-transport.js?v=11"></script>
        <script type="text/javascript" src="//cdn.spencerkdesigns.com/cope/assets/js/jquery.fileupload.js?v=11"></script>
        <script type="text/javascript" src="//cdn.spencerkdesigns.com/cope/assets/js/jquery.quicksand.js?v=11"></script>
        <script type="text/javascript" src="//cdn.spencerkdesigns.com/cope/assets/js/script.js?v=11"></script>
        <script type="text/javascript" src="//cdn.spencerkdesigns.com/cope/assets/js/tinymce.min.js?v=11"></script>
        <script type="text/javascript" src="//cdn.spencerkdesigns.com/cope/assets/js/bootstrap.min.js?v=11"></script>
        <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
        <script type="text/javascript" src="//cdn.spencerkdesigns.com/cope/assets/js/classie.min.js?v=11"></script>
        <script type="text/javascript" src="//cdn.spencerkdesigns.com/cope/assets/js/cbpAnimatedHeader.js?v=11"></script>
        <script type="text/javascript" src="//cdn.spencerkdesigns.com/cope/assets/js/jqBootstrapValidation.min.js?v=11"></script>
        <script type="text/javascript" src="//cdn.spencerkdesigns.com/cope/assets/js/cope.js"></script>
        <script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
        <script src="assets/js/pie-chart.js"></script>
        <script type="text/javascript">

        $(document).ready(function () {
            $('#demo-pie-1').pieChart({
                barColor: '#68b828',
                trackColor: '#eee',
                lineCap: 'round',
                lineWidth: 8,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });

            $('#demo-pie-2').pieChart({
                barColor: '#8465d4',
                trackColor: '#eee',
                lineCap: 'butt',
                lineWidth: 8,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });

            $('#demo-pie-3').pieChart({
                barColor: '#457303',
                trackColor: '#eee',
                lineCap: 'square',
                lineWidth: 8,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });

            $('#demo-pie-4').pieChart({
                barColor: '#8465d4',
                trackColor: '#eee',
                lineCap: 'round',
                lineWidth: 8,
                rotate: 90,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });
        });

    </script>
</body>
</html>
