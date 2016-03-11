<?php 
        include "assets/assets.php";
?>
<?php
if (isset($_POST["submit"])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $human = intval($_POST['human']);
        $from = 'Support Form'; 
        $to = 'support.trycope.xyz@spencerkdesigns.com'; 
        $subject = 'Message from Support Form ';
        
        $body = "From: $name\n E-Mail: $email\n Message:\n $message";
 
        // Check if name has been entered
        if (!$_POST['name']) {
            $errName = 'Please enter your name';
        }
        
        // Check if email has been entered and is valid
        if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $errEmail = 'Please enter a valid email address';
        }
        
        //Check if message has been entered
        if (!$_POST['message']) {
            $errMessage = 'Please enter your message';
        }
        //Check if simple anti-bot test is correct
        if ($human !== 5) {
            $errHuman = 'Your anti-spam is incorrect';
        }
 
// If there are no errors, send the email
if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
    if (mail ($to, $subject, $body, $from)) {
        $result='<div class="alert alert-success">Thank you, we will be in touch!</div>';
    } else {
        $result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
    }
}
    }
?>
<!DOCTYPE html>
<html>
    <head class>
        <title> Cope - the social media platform for the world</title>
    </head>
    <body id="page-top" class="index">
        <nav class="navbar navbar-inverse navbar-fixed-bottom">
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
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header page-scroll">
                    <a class="navbar-brand page-scroll" href="#page-top">
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="hidden"><a href="#page-top"></a></li>
                        <li><a href="Register.php" class="btn btn-secondary">REGISTER</a></li><li><a href="login.php">LOG IN</a></li>
<!--                        <li><a href="Settings.php" class="btn btn-secondary">SETTINGS</a></li><li><a href="logout.php">LOG OUT</a></li>-->
                        
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
                    <li><a href="access-controlled.php"><i style="color: #ff5317;" class="fa fa-chevron-right"></i> Home</a></li>
                    <li><a href="notifications.php" class="page-scroll"><i style="color: #ff5317;" class="fa fa-chevron-right"></i> Notifications</a></li>
                    <li><a href="messages.php" class="page-scroll"><i style="color: #ff5317;" class="fa fa-chevron-right"></i> Messages</a></li>
                    <li><a href="#"><i style="color: #ff5317;" class="fa fa-chevron-right"></i> Settings</a></li>
                    <li><a href="support.php"><i style="color: #ff5317;" class="fa fa-chevron-right"></i> Support</a></li>
            </ul>
        </div>
        
        <div id="wrapper" style="background: rgb(255,255,255);">
            <header>
                <div class="container">
                    <div class="intro-text">
                        <div class="intro-heading">
                            <h1>The social media platform for the world</h1>
                            <p>Providing our users with the best social experience there is</p>
                        </div>
                        <div class="other">
                            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <i>People who have already joined</i>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <a href="#" class='btn btn-primary'>About</a>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <a href='#' class='btn btn-secondary'>Positions</a>
                            </div>
                            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <p>
                                    <a href='login.php' style='color: white;'><i class='fa fa-chevron-right' style='color: #ff5317'></i> Already a member? Log in.</a><!-- data-toggle="modal" data-target="#RegModal" -->
                                </p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div class='down-arrow'>
                    <div id='left'> </div>
                    <a href='#about' class='page-scroll' style='display: inline-block; width: 100%; height: 100%;'> </a>
                    <div id='right'> </div>
                </div>
            </header>
            <section style='background-color: #121212;'>
                <div class='container'>
                    <div class='row'>
                        <div class='col-lg-6 col-md-12 col-sm-12 col-sx-12 text-left'>
                            <h2 class='section-heading'>
                                <span>WHAT WE ARE</span>
                            </h2>
                            <div class='section-content'>
                                <h3 class='business-title'>Cope Inc.</h3>
                                <div class='business-logo'>
                                    <img src='assets/img/Cope-Logo.png' class='img-responsive img-centered' alt='Cope Inc'>
                                </div>
                                <div class='business-details'>
                                    <span class='location col-md-12 col-sm-12'>
                                        <i class='fa fa-map-marker'></i> United States
                                    </span>
                                    <span class='owner col-md-12 col-sm-12'>
                                        <i class='fa fa-user'></i> Spencer Phillips
                                    </span>
                                    <span class='contact col-md-12 col-sm-12'>
                                        <i class="fa fa-envelope-o"></i> support@trycope.xyz
                                    </span>
                                    <p class='other col-md-12 col-sm-12'>
                                        <i class="fa fa-random"></i> Cope Inc. is a premier social media platform for all users. We allow everyone easy access to make new friends in a fast and easy way.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class='col-lg-6 col-md-12 col-sm-12 col-sx-12'>
                            <h2 class='section-heading' style="text-align: center;">
                                <span>REASONS TO JOIN</span>
                            </h2>
                            <div class="section-content">
                                <div class="row">
                                    <div class="container-fluid center-block" style="text-align: center;">
                                        <div class="col-sm-4">
                                            <p><img class="img-responsive img-circle center-block" src="assets/img/users.png" alt=""/></p>                                    
                                        </div>
                                        <div class="col-sm-4">
                                            <p><img class="img-responsive img-circle center-block" src="assets/img/notifications.png" alt=""/></p>
                                        </div>
                                        <div class="col-sm-4">
                                            <p><img class="img-responsive img-circle center-block" src="assets/img/stats.png" alt=""/></p>                                    
                                        </div>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="container-fluid" style="text-align: center;">
                                        <div class="col-sm-4">
                                            <span>Hundreds of users</span>                                    
                                        </div>
                                        <div class="col-sm-4">
                                            <span>Amazing notifications</span>
                                        </div>
                                        <div class="col-sm-4">
                                            <span>Powerful statistics</span>                                    
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='about'>
                        </div>
                    </div>
                </div>
                <div class='down-arrow'>
                    <div id='left'> </div>
                    <a href='#owners' class='page-scroll' style='display: inline-block; width: 100%; height: 100%;'> </a>
                    <div id='right'> </div>
                </div>
            </section>
            <section style='color: #121212;'>
                <div class='container'>
                    <h2 class="center-block">MEET THE FOUNDERS</h2>
                    <div class="row row-padded row-bordered row-centered">
                        <div class="col-sm-12">
                          <div class="row">
                              <div class="col-lg-4">
                                  <div class="row">
                                      <img src="assets/img/users255.png" class="img-responsive img-centered img-circle" alt="USERS" width="304" height="236" />
                                  </div>
                                  <div class="row">
                                      
                                  </div>
                              </div>
                              <div class="col-lg-4">
                                  <div class="row">
                                      <img src="assets/img/IMG_0656.JPG" class="img-responsive img-centered img-circle" alt="Spencer Phillips" width="304" height="236" />
                                  </div>
                                  <div class="row">
                                      <h4>Spencer P</h4>
                                  </div>
                              </div>
                              <div class="col-lg-4">
                                  <div class="row">
                                      <img src="assets/img/users255.png" class="img-responsive img-centered img-circle" alt="USERS" width="304" height="236" />
                                  </div>
                                  <div class="row">
                                      
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 m-b-lg">

                            </div>
                            <div class="col-md-4 m-b-lg">

                            </div>
                            <div class="col-md-4 m-b-lg">

                            </div>
                        </div>
                    </div>
                    
                </div>
                <div id="owners"></div>
            </section>
            <section>
                <header>
                    <div class='up-arrow'>
                        <div id='left'> </div>
                        <a href='#page-top' class='page-scroll' style='display: inline-block; width: 100%; height: 100%;'> </a>
                        <div id='right'> </div>
                    </div>
                    <div class="container">
                        <div class="intro-text">
                            <div class="other">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="col-md-6">
                                            <h2>Having Problems?</h2>
                                            <p>Please submit the form and we will get to you as soon as possible.</p>
                                        </div>
                                        <div class="col-md-6">
                                            <form class="form-horizontal" role="form" method="post" action="index.php">
                                                <div class="form-group">
                                                    <label for="name" class="col-sm-2 control-label">Name</label>
                                                    <div class="col-sm-10">
                                                        <input type="text" class="form-control" id="name" name="name" placeholder="First & Last Name" value="<?php echo htmlspecialchars($_POST['name']); ?>">
                                                        <?php echo "<p class='text-danger'>$errName</p>";?>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="email" class="col-sm-2 control-label">Email</label>
                                                    <div class="col-sm-10">
                                                        <input type="email" class="form-control" id="email" name="email" placeholder="example@domain.com" value="<?php echo htmlspecialchars($_POST['email']); ?>">
                                                        <?php echo "<p class='text-danger'>$errEmail</p>";?>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="message" class="col-sm-2 control-label">Message</label>
                                                    <div class="col-sm-10">
                                                        <textarea class="form-control" rows="4" name="message"><?php echo htmlspecialchars($_POST['message']);?></textarea>
                                                        <?php echo "<p class='text-danger'>$errMessage</p>";?>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="human" class="col-sm-2 control-label">2 + 3 = ?</label>
                                                    <div class="col-sm-10">
                                                        <input type="text" class="form-control" id="human" name="human" placeholder="Your Answer">
                                                        <?php echo "<p class='text-danger'>$errHuman</p>";?>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-10 col-sm-offset-2">
                                                        <input id="submit" name="submit" type="submit" value="Send" class="btn btn-primary">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-10 col-sm-offset-2">
                                                        <?php echo $result; ?>    
                                                    </div>
                                                </div>
                                                </form> 
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12" style="color: #fff">
                                        <div class="container-fluid">
                                            

                                        </div> <!-- /container -->
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </header>
            </section>
        </div>
        <script type="text/javascript" src="//trycope.spencerkdesigns.com/assets/js/cope.js"></script>
    </body>
</html>
