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
    <head class>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>
        <title>Timeline - Cope</title>
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
    <body id="page-top" class="index">
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header page-scroll">
                    <a class="navbar-brand page-scroll" href="#page-top">
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="hidden"><a href="#page-top"></a></li>
                        <li><a href="#">LOGGED IN AS: <?php echo strtoupper($fgmembersite->UserFullName()); ?></a></li><li><a href="logout.php">LOG OUT</a></li>
<!--                        <li><a href="Settings.php" class="btn btn-secondary">SETTINGS</a></li><li><a href="logout.php">LOG OUT</a></li>-->
                        <?PHP
//                        include_once ("./include/membersite_config.php");
//                        if(!$fgmembersite->CheckLogin())
//                        {
//                            echo '<li><a href="Register.php" class="btn btn-secondary">REGISTER</a></li><li><a href="login.php">LOG IN</a></li>';
//                        } else {
//                            echo '<li><a href="Settings.php" class="btn btn-secondary">SETTINGS</a></li><li><a href="logout.php">LOG OUT</a></li>';
//                        }
                        ?>
                        <li>
                            <a id="open_menu" href="#menu"><i class="fa fa-bars"></i>MENU</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div id="menu">
            <ul>
                <!--<li><a href="reportBug.php"><i class="fa fa-bug red"></i>  <small></small></a></li>-->
                    <li><a href="#"><i style="color: #ff5317;" class="fa fa-chevron-right"></i> Home</a></li>
                    <li><a href="#" class="page-scroll"><i style="color: #ff5317;" class="fa fa-chevron-right"></i> Notifications</a></li>
                    <li><a href="#" class="page-scroll"><i style="color: #ff5317;" class="fa fa-chevron-right"></i> Messages</a></li>
                    <li><a href="#"><i style="color: #ff5317;" class="fa fa-chevron-right"></i> Support</a></li>
            </ul>
        </div>
<div id='fg_membersite_content'>
<h2>This is an Access Controlled Page</h2>
This page can be accessed after logging in only. To make more access controlled pages, 
copy paste the code between &lt;?php and ?&gt; to the page and name the page to be php.
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
</body>
</html>
