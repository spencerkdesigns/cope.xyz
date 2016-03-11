// onReady function
$(document).ready(function() {

// Keep footer at the bottom of the page
    var bodyHeight = $("body").height();
    var vwptHeight = $(window).height();
    if (vwptHeight > bodyHeight) {
//        $("footer").css("position", "absolute").css("bottom", 0).css("width","100%");
//        $('footer').css('margin-top', $(document).height() - $('#wrapper').height() - $('.footer').height() - 120);
        $('#wrapper').css('padding-bottom', $(document).height() - $('#wrapper').height() - $('.footer').height() - 120);
        $('#wrapper').css('background', '#fff');
    }
// Keep footer at the bottom of the page even if we resize the window
    $(window).on('resize', function() {
        $('#wrapper').css('padding-bottom', $(document).height() - $('#wrapper').height() - $('.footer').height() - 120);
        $('#wrapper').css('background', '#fff');
    });
    // Keep footer at the bottom of the page even if we click on an element
//    $(document).on('click', function() {
//        $('#wrapper').css('padding-bottom', $(document).height() - $('#wrapper').height() - $('.footer').height() - 120);
//        $('#wrapper').css('background', '#fff');
//    });

    // add class navbar-shrink to get the dark navbar if we're not in index page
    if (!$("body").hasClass("index")) {
        $('nav').addClass('navbar-shrink');
    }

    $('.premiumkills').remove();


    /** OWL CAROUSEL **/
    // visitors dashboard
    $(".owl-visitors").owlCarousel({
        items: 4,
        lazyLoad: true,
        navigation: true,
        pagination: false
    });
});
tinymce.init({
    selector: "textarea",
    theme: "modern",
//    width: auto,
    height: 200,
    plugins: [
        "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
        "searchreplace charactercount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
        "save table contextmenu directionality emoticons template paste textcolor"
    ],
    language: 'fr_FR',
//    content_css: "css/content.css",
    menubar: false,
    toolbar: "bold italic | alignleft aligncenter alignright alignjustify | bullist | link | forecolor",
    invalid_elements: "script",
    style_formats: [
        {title: 'Bold text', inline: 'b'},
        {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
        {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
        {title: 'Example 1', inline: 'span', classes: 'example1'},
        {title: 'Example 2', inline: 'span', classes: 'example2'},
        {title: 'Table styles'},
        {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
    ]
});
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        // remove the menu
        $('#menu').removeClass('active');
        $('#open_menu i').addClass('fa-bars');
        $('#open_menu i').removeClass('fa-times');
        event.preventDefault();
    });
});
// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
// Open / Close menu
$('#open_menu').click(function(e) {
    e.preventDefault();
    $('#menu').toggleClass('active');
    if ($('#menu').hasClass('active')) {
        $('#open_menu i').removeClass('fa-bars');
        $('#open_menu i').addClass('fa-times');
    } else {
        $('#open_menu i').addClass('fa-bars');
        $('#open_menu i').removeClass('fa-times');
    }
});
// Load the registration page
$('a.register').click(function(e) {
    e.preventDefault();
    $.fancybox.showLoading();
    $.fancybox.helpers.overlay.open({
        closeClick: false
    });
    $.fancybox.helpers.overlay.close();
    $.fancybox({
        showCloseButton: false,
        href: 'register.php',
        type: 'iframe',
        width: 370,
        minHeight: 480
    });
});
// Load the login page
$('a.login').click(function(e) {
    e.preventDefault();
    $.fancybox.showLoading();
    $.fancybox.helpers.overlay.open({
        closeClick: false
    });
    $.fancybox.helpers.overlay.close();
    $.fancybox({
        href: 'login.php',
        type: 'iframe',
        width: 370,
        minHeight: 370
    });
});

/** USERS ACTIONS ON PROFILE (FOLLOW / RECOMMEND / REPORT **/
// Change the icon user to user-times (with 'x') to show the action to unfollow
$('li.follow').hover(function(e) {
    e.preventDefault();
    if (!$('li.follow i').hasClass('fa-user-plus')) {
        if ($('li.follow i').hasClass('fa-user-times')) {
            $('li.follow i').removeClass('fa-user-times');
            $('li.follow i').addClass('fa-user');
        } else {
            $('li.follow i').removeClass('fa-user');
            $('li.follow i').addClass('fa-user-times');
        }
    }
});
// Follow / UnFollow an user from guru
$(document).delegate("li.follow", "click", function(e) {
//$('li.follow').click(function(e) {
    e.preventDefault();
    var user_id = $(this).attr('data-id');
    var guru_id = $(this).attr('data-guru');
    var user_name = $(this).attr('data-name');
    var lg = $(this).attr('data-lg');
    // if it's to follow an user
    if ($(this).hasClass('followUser')) {
        var type = 1;
    } else { // else if it's to unfollow an user
        type = 2;
    }

    $.ajax({
        url: "../ajax/ajaxUpdateFollow.php",
        type: "POST",
        data: {
            user_id: user_id,
            guru_id: guru_id,
            type: type
        },
        success: function(c) {
            $.fancybox.hideLoading();
            $.fancybox.helpers.overlay.close();
            if (c.status === "success") {
                // change the icon + title + classes
//                $('li.follow[data-id=' + user_id + ']');
                if ($('li.follow[data-id=' + user_id + ']').hasClass('unfollowUser')) {

                    $('li.follow[data-id=' + user_id + ']').removeClass('unfollowUser');
                    $('li.follow[data-id=' + user_id + '] i').removeClass('fa-user-times');
                    $('li.follow[data-id=' + user_id + ']').addClass('followUser');
                    $('li.follow[data-id=' + user_id + '] i').addClass('fa-user-plus');
                    if (lg === 'fr') {
                        $('li.follow[data-id=' + user_id + ']').attr('title', 'Suivre ' + user_name);
                    } else {
                        $('li.follow[data-id=' + user_id + ']').attr('title', 'Follow ' + user_name);
                    }
                    // update amount of followers
                    $('#followAmount span').html((parseFloat($('#followAmount span').html()) - 1));
                } else {

                    $('li.follow[data-id=' + user_id + ']').removeClass('followUser');
                    $('li.follow[data-id=' + user_id + '] i').removeClass('fa-user-plus');
                    $('li.follow[data-id=' + user_id + ']').addClass('unfollowUser');
                    $('li.follow[data-id=' + user_id + '] i').addClass('fa-user-times');
                    if (lg === 'fr') {
                        $('li.follow[data-id=' + user_id + ']').attr('title', 'Ne plus suivre ' + user_name);
                    } else {
                        $('li.follow[data-id=' + user_id + ']').attr('title', 'Unfollow ' + user_name);
                    }
                    // update amount of followers
                    $('#followAmount span').html((parseFloat($('#followAmount span').html()) + 1));
                }
            } else {
                $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
            }
        }
    });
});
// Recommend / UnRecommend an user from guru
$(document).delegate("li.recommend", "click", function(e) {
//$('li.recommend').click(function(e) {
    e.preventDefault();
    var user_id = $(this).attr('data-id');
    var guru_id = $(this).attr('data-guru');
    var user_name = $(this).attr('data-name');
    var lg = $(this).attr('data-lg');
    // if it's to recommend an user
    if ($(this).hasClass('recommendUser')) {
        var type = 1;
    } else { // else if it's to unrecommend an user
        type = 0;
    }

    $.ajax({
        url: "../ajax/ajaxUpdateRecommend.php",
        type: "POST",
        data: {
            user_id: user_id,
            guru_id: guru_id,
            type: type
        },
        success: function(c) {
            $.fancybox.hideLoading();
            $.fancybox.helpers.overlay.close();
            if (c.status === "success") {
                // change the icon + title + classes
                if ($('li.recommend[data-id=' + user_id + ']').hasClass('unrecommendUser')) {
                    $('li.recommend[data-id=' + user_id + ']').removeClass('unrecommendUser');
//                    $('li.recommend i').removeClass('fa-thumbs-o-up');.unrecommendUser
                    $('li.recommend[data-id=' + user_id + ']').addClass('recommendUser');
//                    $('li.recommend i').addClass('fa-thumbs-up');
                    if (lg === 'fr') {
                        $('li.recommend[data-id=' + user_id + ']').attr('title', 'Recommander ' + user_name);
                    } else {
                        $('li.recommend[data-id=' + user_id + ']').attr('title', 'Recommend ' + user_name);
                    }
                    // update amount of recommenders
                    $('#recommendAmount span').html((parseFloat($('#recommendAmount span').html()) - 1));
                } else {
                    $('li.recommend[data-id=' + user_id + ']').removeClass('recommendUser');
//                    $('li.recommend i').removeClass('fa-thumbs-up');
                    $('li.recommend[data-id=' + user_id + ']').addClass('unrecommendUser');
//                    $('li.recommend i').addClass('fa-thumbs-o-up');
                    if (lg === 'fr') {
                        $('li.recommend[data-id=' + user_id + ']').attr('title', 'Ne plus recommander ' + user_name);
                    } else {
                        $('li.recommend[data-id=' + user_id + ']').attr('title', 'UnRecommend ' + user_name);
                    }
                    // update amount of recommenders
                    $('#recommendAmount span').html((parseFloat($('#recommendAmount span').html()) + 1));
                }
            } else {
                $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
            }
        }
    });
});
// Report an user from guru
$('li.report').click(function(e) {
    e.preventDefault();
    var user_id = $(this).attr('data-id');
    var guru_id = $(this).attr('data-guru');
//    var user_name = $(this).attr('data-name');
    var lg = $(this).attr('data-lg');
    if (lg === 'fr') {
        var txt = 'Souhaites-tu vraiment signaler cet utilisateur ?';
    } else {
        txt = 'Do you want to report this user?';
    }
    if (confirm(txt)) {
        $.ajax({
            url: "../ajax/ajaxUpdateRecommend.php",
            type: "POST",
            data: {
                user_id: user_id,
                guru_id: guru_id,
                report: 1
            },
            success: function(c) {
                $.fancybox.hideLoading();
                $.fancybox.helpers.overlay.close();
                if (c.status === "success") {
                    $.fancybox({
                        showCloseButton: false,
                        content: '<p class="text-center white">' + c.success + '</p>',
                        minWidth: 370,
                        minHeight: 90
                    });
                } else {
                    $.fancybox({
                        showCloseButton: false,
                        content: '<p class="text-center white">' + c.error + '</p>',
                        minWidth: 370,
                        minHeight: 90
                    });
                }
            }
        });
    }
});

/** REGISTRATION / LOGIN / FGTN PASSWORD **/
// Login form
$('body').on('submit', '#loginForm', function(event) {
    event.preventDefault();
    var data = $('#loginForm').serialize();
    $.ajax({
        url: "../ajax/ajaxAuthenticate.php",
        type: "POST",
        data: data,
        success: function(c) {
            if (c.status === "success") {
                window.parent.location.replace("/dashboard.php");
            } else {
                $('#errorMessage').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
            }
        }
    });
});
//Register Form
$('body').on('submit', '#formRegister', function(event) {
    event.preventDefault();
    var data = $('#formRegister').serialize();
    $.ajax({
        url: "../ajax/ajaxRegister.php",
        type: "POST",
        data: data,
        success: function(c) {
            if (c.status === "success") {
                window.parent.location.replace("/dashboard.php");
            } else {
                $('#errorMessage').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
            }
        }
    });
});
//Forgotten password Form
$('body').on('submit', '#forgottenForm', function(event) {
    event.preventDefault();
    var data = $('#forgottenForm').serialize();
    $.ajax({
        url: "../ajax/ajaxForgotten.php",
        type: "POST",
        data: data,
        success: function(c) {
            if (c.status === "success") {
                $('#errorMessage').html('<span class="alert green"><i class="fa fa-check-circle"></i> ' + c.success + '</span>');
            } else {
                $('#errorMessage').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
            }
        }
    });
});

/** MYINFO **/
// Edit Profile Form
$('body').on('submit', '#updateMyInfo', function(event) {
    event.preventDefault();
    var data = $('#updateMyInfo').serialize();
    var login = $('#login').val();
    var pseudo = $('#pseudo').val();
    // check if login (email) and pseudo are not empty
    if (login !== '' && pseudo !== '') {
        $.ajax({
            url: "../ajax/ajaxUpdateMyInfo.php",
            type: "POST",
            data: data,
            success: function(c) {
                if (c.status === "success") {
                    $('#returnMessageForm').html('<span class="alert green"><i class="fa fa-check-circle"></i> ' + c.success + '</span>');
                    window.setTimeout(function() {
                        location.href = "dashboard.php";
                    }, 3000);
                } else {
                    $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
                }
            }
        });
    }
});
// change view to change password
$('#changePassword').click(function() {
    $('#changePasswordBlock').toggleClass('active');
    $('#updateMyInfo').toggleClass('active');
    $('.changePassword').toggleClass('active');
    $('.changeDatas').toggleClass('active');
});
// check if the new password is correct
$("input[type=password][name='cnewpassword']").keyup(checkSame).focus(function() {
    $('#pswd_confirm').hide();
    $('#pswd_error').hide();
});
function checkSame() {
    // if password matches
    if (($("#newpassword").val() == $("#cnewpassword").val()) && $("#newpassword").val().length != 0 && ($("#newpassword").val().length == $("#cnewpassword").val().length)) {
        $('#pswd_confirm').show();
        $('#pswd_error').hide();
    } else {
        $('#pswd_confirm').hide();
        $('#pswd_error').show();
    }
}
// Edit Password Form
$('body').on('submit', '#updateMyPassword', function(event) {
    event.preventDefault();
    var data = $('#updateMyPassword').serialize();
    $.ajax({
        url: "../ajax/ajaxUpdateMyInfo.php",
        type: "POST",
        data: data,
        success: function(c) {
            if (c.status === "success") {
                $('#returnMessageForm').html('<span class="alert green"><i class="fa fa-check-circle"></i> ' + c.success + '</span>');
            } else {
                $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
            }
        }
    });
});
// Delete user account
$('.deleteAccount').click(function(event) {
    event.preventDefault();
    $.fancybox.showLoading();
    $.fancybox.helpers.overlay.open({
        closeClick: false
    });
    $.fancybox.helpers.overlay.close();
    var user_id = $(this).attr('data-user');
    var lg = $(this).attr('data-lg');
    if (lg === 'fr') {
        var conf = 'Supprimer le compte dÃ©finitivement ?';
    } else {
        conf = 'Desactivate definitly the account?';
    }

// if user confirm to delete his job offer
    if (confirm(conf)) {
        $.ajax({
            url: "../ajax/ajaxUpdateMyInfo.php",
            type: "POST",
            data: {
                user_id: user_id,
                deleteuser: 1
            },
            success: function(c) {
                $.fancybox.hideLoading();
                $.fancybox.helpers.overlay.close();
                if (c.status === "success") {
                    // go back to index and logout
                    window.parent.location.replace("/logout.php");
                } else {
                    $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
                }
            }
        });
    } else {
        $.fancybox.hideLoading();
        $.fancybox.helpers.overlay.close();
    }
});

/** PREMIUM **/
// Post a premium code
$('body').on('submit', '#postPremiumCode', function(event) {
    event.preventDefault();
    var code = $('#postPremiumCode #code').val();
    if (code !== '') {
        $.ajax({
            url: "../ajax/ajaxBecomePremium.php",
            type: "POST",
            data: {
                code: code
            },
            success: function(c) {
                if (c.status === "success") {
                    $.fancybox({
                        showCloseButton: false,
                        content: '<p class="text-center white">' + c.success + '</p>',
                        minWidth: 370,
                        minHeight: 90
                    });
//                    setInterval(location.reload(), 2000);
//                $('#returnMessageForm').html('<span class="alert green"><i class="fa fa-check-circle"></i> ' + c.success + '</span>');
                } else {
                    $.fancybox({
                        showCloseButton: false,
                        content: '<p class="text-center white">' + c.error + '</p>',
                        minWidth: 370,
                        minHeight: 90
                    });
//                $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
                }
            }
        });
    }
});
// select premium offer (bronze / silver / gold / emerald)
$('body').on('click', '.premium_macaron input', function() {
    // remove others
    $('.premium_macaron label').removeClass('blue');
    // add blue to significate that it's selected
    $(this).parent().find('label').addClass('blue');
    // remove button
    $('#payment_button a').attr('href', '#');
    $('#payment_button a').attr('data-token', '');
    var pack = $(this).val();
    $.ajax({
        url: "../ajax/ajaxSelectPremiumPack.php",
        type: "POST",
        data: {
            pack: pack
        },
        success: function(c) {
            if (c.status === "success") {
//                $('#payment_button a').attr('href', c.success);
                $('#payment_button a').attr('data-token', c.token);
            } else {
                $.fancybox({
                    showCloseButton: false,
                    content: '<p class="text-center white">' + c.error + '</p>',
                    minWidth: 370,
                    minHeight: 90
                });
            }
        }
    });
});
// create order
$('body').on('click', '#payment_button a', function() {
    // get selected pack
    var pack = $('.premium_macaron input[type=radio]:checked').val();
    console.log(pack);
    // get user token
    var token = $(this).attr('data-token');
    // get url
    var href = $(this).attr('href');
    $.ajax({
        url: "../ajax/ajaxPremiumOrder.php",
        type: "POST",
        data: {
            pack: pack,
            token: token,
            type: '1' // init order
        },
        success: function(c) {
            if (c.status === "success") {
                window.location = 'https://www.paypal.com/webscr?cmd=_express-checkout&useraction=commit&token=' + token;
            } else {
                $.fancybox({
                    showCloseButton: false,
                    content: '<p class="text-center white">' + c.error + '</p>',
                    minWidth: 370,
                    minHeight: 90
                });
            }
        }
    });
});

/** JOB OFFER MANAGEMENT **/
// Create an offer (Job and Cv)
$('body').on('submit', '#createOffer', function(event) {
    event.preventDefault();
    var data = $('#createOffer').serializeArray();
    var company_name = $('#company_name').val();
    // if the company name is empty (for companies) / else an hidden input contain the value (for the first time)
    if (company_name === '') {
        $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> Company name can\'t be empty</span>');
        return;
    }

// if everything is good
    $.ajax({
        url: "../ajax/ajaxCreateOffer.php",
        type: "POST",
        data: data,
        success: function(c) {
            if (c.status === "success") {
                // redirect the user to the offer page
                if (c.type === 'company') {
//                    window.parent.location.replace("/dashboard.php");
                    window.location = '/joboffer.php?id=' + c.returnId;
                } else if (c.type === 'candidate') {
                    window.location = '/profile.php?id=' + c.returnId;
                }
            } else {
                $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
            }
        }
    });
});
// toggle for paid
//$('#paid').change(function() {
//    if ($(this).is(':checked')) {
//        $(this).val('1');
//    } else {
//        $(this).val('0');
//    }
//});

// display salary select if the offer is paid
$('form #paid').change(function(e) {
    e.preventDefault();
    // get paid value
    var paid = $(this).val();

    // refresh-clear the content
    if (paid === '1' && $('#salaryselect').hasClass('displaynone')) {
        $('#salaryselect').removeClass('displaynone');
        $('#salaryselect').addClass('inlineblock');
    } else {
        $('#salaryselect').removeClass('inlineblock');
        $('#salaryselect').addClass('displaynone');
    }
});

// toggle for draft
//$('#draft').change(function() {
//    if ($(this).is(':checked')) {
//        $(this).val('0');
//    } else {
//        $(this).val('1');
//    }
//});
// Edit an offer (Job)
$('body').on('submit', '#editOffer', function(event) {
    event.preventDefault();
    var data = $('#editOffer').serializeArray();
    $.ajax({
        url: "../ajax/ajaxEditOffer.php",
        type: "POST",
        data: data,
        success: function(c) {
            if (c.status === "success") {
                // redirect the user to the offer page
                if (c.type == 'company') {
                    window.location = 'joboffer.php?id=' + c.success;
                } else if (c.type == 'candidate') {
                    window.location = 'profile.php?id=' + c.success;
                }
            } else {
                $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
            }
        }
    });
});
// Activate an offer (which is in draft = desactivated)
$('.activateOffer').click(function(event) {
    event.preventDefault();
    $.fancybox.showLoading();
    $.fancybox.helpers.overlay.open({
        closeClick: false
    });
    $.fancybox.helpers.overlay.close();
    var offer_id = $(this).attr('data-id');
    var user_id = $(this).attr('data-user');
    var lg = $(this).attr('data-lg');
    if (lg === 'fr') {
        var conf = 'Activer ton offre ?';
    } else {
        conf = 'Activate your offer?';
    }

// if user confirm to desactivate his job offer
    if (confirm(conf)) {
        $.ajax({
            url: "../ajax/ajaxStatusOffer.php",
            type: "POST",
            data: {
                offer_id: offer_id,
                user_id: user_id,
                new_status: '1'
            },
            success: function(c) {
                $.fancybox.hideLoading();
                $.fancybox.helpers.overlay.close();
                if (c.status === "success") {
                    $('#returnMessageForm').html('<span class="alert green"><i class="fa fa-check-circle"></i> ' + c.success + '</span>');
                    var tag = $('#offer_' + offer_id).find('i');
                    tag.removeClass('fa-check');
                    tag.addClass('fa-times');
                    $('#offer_' + offer_id).removeClass('activateOffer');
                    $('#offer_' + offer_id).addClass('desactivateOffer');
                    // reload page
                    setInterval(location.reload(), 2000);
                } else {
                    $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
                }
            }
        });
//    $('#offer_' + offer_id).load(location.href + ' #offer_' + offer_id);
    } else {
        $.fancybox.hideLoading();
        $.fancybox.helpers.overlay.close();
    }
});
// Activate an offer (which is in draft = desactivated)
$('.desactivateOffer').click(function(event) {
    event.preventDefault();
    $.fancybox.showLoading();
    $.fancybox.helpers.overlay.open({
        closeClick: false
    });
    $.fancybox.helpers.overlay.close();
    var offer_id = $(this).attr('data-id');
    var user_id = $(this).attr('data-user');
    var lg = $(this).attr('data-lg');
    if (lg === 'fr') {
        var conf = 'Desactiver ton offre ?';
    } else {
        conf = 'Desactivate your offer?';
    }

// if user confirm to activate his job offer
    if (confirm(conf)) {
        $.ajax({
            url: "../ajax/ajaxStatusOffer.php",
            type: "POST",
            data: {
                offer_id: offer_id,
                user_id: user_id,
                new_status: '0'
            },
            success: function(c) {
                $.fancybox.hideLoading();
                $.fancybox.helpers.overlay.close();
                if (c.status === "success") {
                    $('#returnMessageForm').html('<span class="alert green"><i class="fa fa-check-circle"></i> ' + c.success + '</span>');
                    var tag = $('#offer_' + offer_id).find('i');
                    tag.addClass('fa-check');
                    tag.removeClass('fa-times');
                    $('#offer_' + offer_id).removeClass('desactivateOffer');
                    $('#offer_' + offer_id).addClass('activateOffer');
                    // reload page
                    setInterval(location.reload(), 2000);
//                location.reload();
//                setInterval($('#offer_' + offer_id), 1000);
                } else {
                    $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
                }
            }
        });
//    $('#offer_' + offer_id).load(location.href + ' #offer_' + offer_id);
    } else {
        $.fancybox.hideLoading();
        $.fancybox.helpers.overlay.close();
    }
});

/** PUT OFFER TO TOP OF LIST **/
// When an offer is able to be putted to the top of all job offers
$(document).delegate("#up_date_offer", "click", function(event) {
//$('#up_date_offer').click(function(event) {
    event.preventDefault();
    $.fancybox.showLoading();
    $.fancybox.helpers.overlay.open({
        closeClick: false
    });
    $.fancybox.helpers.overlay.close();
    var offer_id = $(this).attr('data-offer');
    var user_id = $(this).attr('data-id');
    $.ajax({
        url: "../ajax/ajaxUpOfferToTop.php",
        type: "POST",
        data: {
            offer_id: offer_id,
            user_id: user_id
        },
        success: function(c) {
            $.fancybox.hideLoading();
            $.fancybox.helpers.overlay.close();
            $('#up_date_offer').removeClass('alert-success');
            if (c.status === "success") {
                $('#up_date_offer').addClass('alert-info');
                $('#up_date_offer').html('<i class="fa fa-check-circle marginright5"></i> <strong>' + c.success + '</strong>');
            } else {
                $('#up_date_offer').addClass('alert-danger');
                $('#up_date_offer').html('<i class="fa fa-times-circle marginright5"></i> <strong>' + c.error + '</strong>');
            }
            $('#up_date_offer').removeAttr('id');
        }
    });
});

/** APPLY JOB OFFER **/
// When candidate apply for a joboffer
$('#applyOffer').click(function(event) {
    event.preventDefault();
    $.fancybox.showLoading();
    $.fancybox.helpers.overlay.open({
        closeClick: false
    });
    $.fancybox.helpers.overlay.close();
    var offer_id = $(this).attr('data-id');
    var user_id = $(this).attr('data-user');
    var owner_id = $(this).attr('data-owner');
    var lg = $(this).attr('data-lg');
    $.ajax({
        url: "../ajax/ajaxApplyOffer.php",
        type: "POST",
        data: {
            offer_id: offer_id,
            user_id: user_id
        },
        success: function(c) {
            $.fancybox.hideLoading();
            $.fancybox.helpers.overlay.close();
            if (c.status === "success") {
                $('#returnMessageForm').html('<span class="alert green"><i class="fa fa-check-circle"></i> ' + c.success + '</span>');
                if (lg === 'fr') {
                    var conf = 'Souhaites-tu ajouter un message Ã  ta candidature ?';
                } else {
                    conf = 'Do you want to send a message?';
                }
                if (confirm(conf)) {
                    // send message ?
                    $.fancybox.showLoading();
                    $.fancybox.helpers.overlay.open({
                        closeClick: false
                    });
                    $.fancybox.helpers.overlay.close();
                    $.fancybox({
                        showCloseButton: false,
                        href: 'sendMessage.php?id=' + owner_id,
                        type: 'iframe',
                        width: 370,
                        minHeight: 460
                    });
                }
            } else {
                $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
            }
        }
    });
});

/** APPLY CANDIDATE (INTERESTED IN PROFILE) **/
// When user is interested in a profile
$('#InterestedIn').click(function(event) {
    event.preventDefault();
    $.fancybox.showLoading();
    $.fancybox.helpers.overlay.open({
        closeClick: false
    });
    $.fancybox.helpers.overlay.close();
    var owner_id = $(this).attr('data-id');
    var user_id = $(this).attr('data-user');
    $.ajax({
        url: "../ajax/ajaxInterestedIn.php",
        type: "POST",
        data: {
            owner_id: owner_id,
            user_id: user_id
        },
        success: function(c) {
            $.fancybox.hideLoading();
            $.fancybox.helpers.overlay.close();
            if (c.status === "success") {
                if (confirm(c.message)) {
                    $('#returnMessageForm').html('<span class="alert green"><i class="fa fa-check-circle"></i> ' + c.success + '</span>');
                    // send message ?
                    $.fancybox.showLoading();
                    $.fancybox.helpers.overlay.open({
                        closeClick: false
                    });
                    $.fancybox.helpers.overlay.close();
                    $.fancybox({
                        showCloseButton: false,
                        href: 'sendMessage.php?id=' + owner_id,
                        type: 'iframe',
                        width: 370,
                        minHeight: 460
                    });
                }
            } else {
                $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
            }

        }
    });
});

/** DASHBOARD **/
// Hide/Show myAccount
$('#accountBlock').click(function(event) {
    event.preventDefault();
    $("#userAccount").animate({
        height: 'toggle'
    }, 1200, function() {
    });
    if ($('#myAccount').hasClass("fa-chevron-circle-up")) {
        $('#myAccount').removeClass("fa-chevron-circle-up");
        $('#myAccount').addClass("open");
        $('#myAccount').addClass("fa-chevron-circle-down");
    } else {
        $('#myAccount').addClass("fa-chevron-circle-up");
        $('#myAccount').removeClass("open");
        $('#myAccount').removeClass("fa-chevron-circle-down");
    }

// keep footer at the bottom
    $('#wrapper').css('padding-bottom', $(document).height() - $('#wrapper').height() - $('.footer').height() - 120);
    $('#wrapper').css('background', '#fff');
//  var accountHeight = $("#userStatistics").height();
//    if (accountHeight > 0) {
//        $("#userAccount").css('height', '0');
//    } else {
//        $("#userAccount").css('height', '100px');
//    }
//$("#userMembership").height();

});

$('#emailvalidation .validateemail').click(function(event) {
    event.preventDefault();

    $('#emailvalidation').html('');
    $('#validatesent').removeClass('displaynone');
    $('#validatesent').addClass('inlineblock');
    var user_id = $('#userAccount').attr('data-id');

    $.ajax({
        url: "../ajax/ajaxVerifyEmail.php",
        type: "POST",
        data: {
            user_id: user_id
        },
        success: function(c) {
            if (c.status === "error") {
                $('#validatesent').html('<p class="red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</p>');
            }
        }
    });
});

// Hide/Show myStatistics
$('#statisticsBlock').click(function(event) {
    event.preventDefault();
    $("#userStatistics").animate({
        height: 'toggle'
    }, 1200, function() {
    });
    if ($('#myStatistics').hasClass("fa-chevron-circle-up")) {
        $('#myStatistics').removeClass("fa-chevron-circle-up");
        $('#myStatistics').addClass("open");
        $('#myStatistics').addClass("fa-chevron-circle-down");
    } else {
        $('#myStatistics').addClass("fa-chevron-circle-up");
        $('#myStatistics').removeClass("open");
        $('#myStatistics').removeClass("fa-chevron-circle-down");
    }

// keep footer at the bottom
    $('#wrapper').css('padding-bottom', $(document).height() - $('#wrapper').height() - $('.footer').height() - 120);
    $('#wrapper').css('background', '#fff');
});
// Hide/Show myOffers
$('#offersBlock').click(function(event) {
    event.preventDefault();
    $("#userOffers").animate({
        height: 'toggle'
    }, 1200, function() {
    });
    if ($('#myOffers').hasClass("fa-chevron-circle-up")) {
        $('#myOffers').removeClass("fa-chevron-circle-up");
        $('#myOffers').addClass("open");
        $('#myOffers').addClass("fa-chevron-circle-down");
    } else {
        $('#myOffers').addClass("fa-chevron-circle-up");
        $('#myOffers').removeClass("open");
        $('#myOffers').removeClass("fa-chevron-circle-down");
    }

// keep footer at the bottom
    $('#wrapper').css('padding-bottom', $(document).height() - $('#wrapper').height() - $('.footer').height() - 120);
    $('#wrapper').css('background', '#fff');
});
// Hide/Show to delete an offer
$('.WantToDelete').click(function(event) {
    event.preventDefault();
    var offer_id = $(this).attr('data-id');
    $('.deleteOfferMotivation.offer_' + offer_id + ' div').animate({
        height: 'toggle'
    }, 10, function() {
    });
});
// Delete a job offer
$('.deleteOffer').click(function(event) {
    event.preventDefault();
    $.fancybox.showLoading();
    $.fancybox.helpers.overlay.open({
        closeClick: false
    });
    $.fancybox.helpers.overlay.close();
    var offer_id = $(this).attr('data-id');
    var user_id = $(this).attr('data-user');
    var lg = $(this).attr('data-lg');
//    console.log($('input:radio[name=deleteReason]:checked').val());
//    return;
    var deleteOfferForm = $('.deleteOffer').parents('#deleteOfferForm_' + offer_id);
//    console.log(deleteOfferForm);
//    deleteOfferForm.submit();
    var data = deleteOfferForm.serializeArray();
    if (lg === 'fr') {
        var conf = 'Supprimer ton offre dÃ©finitivement ?';
    } else {
        conf = 'Desactivate definitly your offer?';
    }

// if user confirm to delete his job offer
    if (confirm(conf)) {
        $.ajax({
            url: "../ajax/ajaxStatusOffer.php",
            type: "POST",
            data: {
                offer_id: offer_id,
                user_id: user_id,
                new_status: '-1',
                reason: data[0]['value']
            },
            success: function(c) {
                $.fancybox.hideLoading();
                $.fancybox.helpers.overlay.close();
                if (c.status === "success") {
                    $('.errorMessage').html('<span class="alert green"><i class="fa fa-check-circle"></i> ' + c.success + '</span>');
                    // go back to dashboard
                    setInterval(window.parent.location.replace("/dashboard.php"), 2000);
                } else {
                    $('.errorMessage').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
                }
            }
        });
    } else {
        $.fancybox.hideLoading();
        $.fancybox.helpers.overlay.close();
    }
});
// add a new skill in skills & hobbies list
$('.addSkill').click(function(e) {
    e.preventDefault();
    $.fancybox.showLoading();
    $.fancybox.helpers.overlay.open({
        closeClick: false
    });
    $.fancybox.helpers.overlay.close();
    var skill = $('#skill').val();
    if (skill !== '') {
        $.ajax({
            url: "../ajax/ajaxUpdateSkill.php",
            type: "POST",
            data: {
                skill: skill,
                type: 1
            },
            success: function(c) {
                if (c.status === "success") {
                    $.fancybox.hideLoading();
                    $.fancybox.helpers.overlay.close();
                    $('.skillbox').append('<div class="skill padding5 inlineblock margin10all">' + skill + ' <i class="fa fa-times removeSkill" data-name="' + skill + '"></i></div>');
                    // find a solution to auto-refresh to allow direct removing
//                    $('.skillbox').load(document.URL + ' .skillbox','');
                } else {
                    $.fancybox({
                        showCloseButton: false,
                        content: '<p class="text-center white">' + c.error + '<br/>\n\
                                <a href="premium.php" class="btn btn-warning small font10 margin05"><i class="fa fa-star"></i> ' + c.premium + ' <i class="fa fa-star"></i></a></p>',
                        minWidth: 370,
                        minHeight: 90
                    });
                }
            }
        });
    }
});
// remove skills from skills & hobbies list
$('.removeSkill').click(function(e) {
    e.preventDefault();
    $.fancybox.showLoading();
    $.fancybox.helpers.overlay.open({
        closeClick: false
    });
    $.fancybox.helpers.overlay.close();
    var skill = $(this).attr('data-name');
    if (skill !== '') {
// /!\ the div is removed here because in the success part it doesn't work.. And i'm too lazy to find out why ^_^ /!\
        $(this).closest("div").remove();
        $.ajax({
            url: "../ajax/ajaxUpdateSkill.php",
            type: "POST",
            data: {
                skill: skill,
                type: 0
            },
            success: function(c) {
                if (c.status === "success") {
                    $.fancybox.hideLoading();
                    $.fancybox.helpers.overlay.close();
                } else {
                    $.fancybox({
                        showCloseButton: false,
                        content: '<p class="text-center white">' + c.error + '</p>',
                        minWidth: 370,
                        minHeight: 90
                    });
                }
            }
        });
    }
});
// Hide/Show myJobs
$('#jobsBlock').click(function(event) {
    event.preventDefault();
    $("#userJobs").animate({
        height: 'toggle'
    }, 1200, function() {
    });
    if ($('#myJobs').hasClass("fa-chevron-circle-up")) {
        $('#myJobs').removeClass("fa-chevron-circle-up");
        $('#myJobs').addClass("open");
        $('#myJobs').addClass("fa-chevron-circle-down");
    } else {
        $('#myJobs').addClass("fa-chevron-circle-up");
        $('#myJobs').removeClass("open");
        $('#myJobs').removeClass("fa-chevron-circle-down");
    }

// keep footer at the bottom
    $('#wrapper').css('padding-bottom', $(document).height() - $('#wrapper').height() - $('.footer').height() - 120);
    $('#wrapper').css('background', '#fff');
});
// Hide/Show myCv
$('#cvBlock').click(function(event) {
    event.preventDefault();
    $("#userCv").animate({
        height: 'toggle'
    }, 1200, function() {
    });
    if ($('#myCv').hasClass("fa-chevron-circle-up")) {
        $('#myCv').removeClass("fa-chevron-circle-up");
        $('#myCv').addClass("open");
        $('#myCv').addClass("fa-chevron-circle-down");
    } else {
        $('#myCv').addClass("fa-chevron-circle-up");
        $('#myCv').removeClass("open");
        $('#myCv').removeClass("fa-chevron-circle-down");
    }

// keep footer at the bottom
    $('#wrapper').css('padding-bottom', $(document).height() - $('#wrapper').height() - $('.footer').height() - 120);
    $('#wrapper').css('background', '#fff');
});
// Hide/Show myAchievements
$('#achievementsBlock').click(function(event) {
    event.preventDefault();
    $("#userAchievements").animate({
        height: 'toggle'
    }, 1200, function() {
    });
    if ($('#myAchievements').hasClass("fa-chevron-circle-up")) {
        $('#myAchievements').removeClass("fa-chevron-circle-up");
        $('#myAchievements').addClass("open");
        $('#myAchievements').addClass("fa-chevron-circle-down");
    } else {
        $('#myAchievements').addClass("fa-chevron-circle-up");
        $('#myAchievements').removeClass("open");
        $('#myAchievements').removeClass("fa-chevron-circle-down");
    }

// keep footer at the bottom
    $('#wrapper').css('padding-bottom', $(document).height() - $('#wrapper').height() - $('.footer').height() - 120);
    $('#wrapper').css('background', '#fff');
});
// Hide/Show myMembership
$('#membershipBlock').click(function(event) {
    event.preventDefault();
    $("#userMembership").animate({
        height: 'toggle'
    }, 1200, function() {
    });
    if ($('#myMembership').hasClass("fa-chevron-circle-up")) {
        $('#myMembership').removeClass("fa-chevron-circle-up");
        $('#myMembership').addClass("open");
        $('#myMembership').addClass("fa-chevron-circle-down");
    } else {
        $('#myMembership').addClass("fa-chevron-circle-up");
        $('#myMembership').removeClass("open");
        $('#myMembership').removeClass("fa-chevron-circle-down");
    }

// keep footer at the bottom
    $('#wrapper').css('padding-bottom', $(document).height() - $('#wrapper').height() - $('.footer').height() - 120);
    $('#wrapper').css('background', '#fff');
});
// Hide/Show promo-code
$('#code-promo').click(function(event) {
    event.preventDefault();
    $("#promo-code").animate({
        height: 'toggle'
    }, 1200, function() {
    });
});

/** MESSAGERIE **/
// Load send new message popup
$('a.sendMessage').click(function(e) {
    e.preventDefault();
    var user_id = $(this).attr('data-user-id');
    $.fancybox.showLoading();
    $.fancybox.helpers.overlay.open({
        closeClick: false
    });
    $.fancybox.helpers.overlay.close();
    $.fancybox({
        showCloseButton: false,
        href: 'sendMessage.php?id=' + user_id,
        type: 'iframe',
        width: 370,
        minHeight: 460
    });
});
// Load send reply message popup
$('a.sendReply').click(function(e) {
    e.preventDefault();
    var user_id = $(this).attr('data-user-id');
    var reply_id = $(this).attr('data-reply');
    $.fancybox.showLoading();
    $.fancybox.helpers.overlay.open({
        closeClick: false
    });
    $.fancybox.helpers.overlay.close();
    $.fancybox({
        showCloseButton: false,
        href: 'sendMessage.php?id=' + user_id + '&reply=' + reply_id,
        type: 'iframe',
        width: 370,
        minHeight: 460
    });
});
//Put message as Normal
$('.putInNml').click(function(event) {
    event.preventDefault();
    $.fancybox.showLoading();
    $.fancybox.helpers.overlay.open({
        closeClick: false
    });
    $.fancybox.helpers.overlay.close();
    var msg_id = $(this).attr('data-id');
    var user_id = $(this).attr('data-user');
    $.ajax({
        url: "../ajax/ajaxUpdateMessageStatus.php",
        type: "POST",
        data: {
            msg_id: msg_id,
            user_id: user_id,
            status: 0
        },
        success: function(c) {
            $.fancybox.hideLoading();
            $.fancybox.helpers.overlay.close();
            if (c.status === "success") {
                location.reload();
//                $('#returnMessageForm').html('<span class="alert green"><i class="fa fa-check-circle"></i> ' + c.success + '</span>');
            } else {
                $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
            }
        }
    });
});
//Put message as Favorite
$('.putInFav').click(function(event) {
    event.preventDefault();
    $.fancybox.showLoading();
    $.fancybox.helpers.overlay.open({
        closeClick: false
    });
    $.fancybox.helpers.overlay.close();
    var msg_id = $(this).attr('data-id');
    var user_id = $(this).attr('data-user');
    $.ajax({
        url: "../ajax/ajaxUpdateMessageStatus.php",
        type: "POST",
        data: {
            msg_id: msg_id,
            user_id: user_id,
            status: 1
        },
        success: function(c) {
            $.fancybox.hideLoading();
            $.fancybox.helpers.overlay.close();
            if (c.status === "success") {
                location.reload();
//                $('#returnMessageForm').html('<span class="alert green"><i class="fa fa-check-circle"></i> ' + c.success + '</span>');
            } else {
                $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
            }
        }
    });
});
// Put message in Trash
$('.putInTrash').click(function(event) {
    event.preventDefault();
    $.fancybox.showLoading();
    $.fancybox.helpers.overlay.open({
        closeClick: false
    });
    $.fancybox.helpers.overlay.close();
    var msg_id = $(this).attr('data-id');
    var user_id = $(this).attr('data-user');
    $.ajax({
        url: "../ajax/ajaxUpdateMessageStatus.php",
        type: "POST",
        data: {
            msg_id: msg_id,
            user_id: user_id,
            status: 2
        },
        success: function(c) {
            $.fancybox.hideLoading();
            $.fancybox.helpers.overlay.close();
            if (c.status === "success") {
                location.reload();
//                $('#returnMessageForm').html('<span class="alert green"><i class="fa fa-check-circle"></i> ' + c.success + '</span>');
            } else {
                $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> ' + c.error + '</span>');
            }
        }
    });
});


/** COMMUNITY **/
// Search by submit form
$('#communitySearch').submit(function(event) {
    event.preventDefault();
    // refresh-clear the content
    $('#communityResults').html('');
//    // count the amount of results (also to reset the value)
    var numItems = $('.userCommunity').length;
    $('#numItems').val(numItems);
    // add the loader
    $('#communityResults').append('<div id="loader" class="col-lg-12 margin5 text-center"><img src="img/ajax_loader_blue_512.gif" width="32" height="32" /></div>');
    // get all datas
    var arrayData = $('#communitySearch').serializeArray();
    $.ajax({
        url: "../ajax/ajaxCommunitySearch.php",
        type: "POST",
        data: arrayData,
        success: function(c) {
            $('#communityResults').html(c);
        }
    });
});
// infinite scroll for community
//$(window).scroll(function() {
//    if ($(window).scrollTop() === $(document).height() - $(window).height()) {
$('#loadmemore a').click(function(event) {
    event.preventDefault();

    // count the amount of results (also to reset the value)
    var numItems = $('.userCommunity').length;
    $('#numItems').val(numItems);
    // add the loader
    $('#communityResults').append('<div id="loader" class="col-lg-12 margin5 text-center"><img src="img/ajax_loader_blue_512.gif" width="32" height="32" /></div>');
    // get all datas
    var arrayData = $('#communitySearch').serializeArray();
    $.ajax({
        url: "../ajax/ajaxCommunitySearch.php",
        type: "POST",
        data: arrayData,
        success: function(c) {
            $('#loader').remove();
//            if (c) {
            $('#communityResults').append(c);
//            } else {
//                    $('#communityResults').append('<center id="nomore">No more posts to show.</center>');
//            }
        }
    });
});
//    }
//});
// Keep footer at the bottom of the page even if we click on an element
$('#communitySearch input').on('click', function() {
    $('#wrapper').css('padding-bottom', $(document).height() - $('#wrapper').height() - $('.footer').height() - 120);
    $('#wrapper').css('background', '#fff');
});
// open filters
$('#moreFilters').click(function() {
    if ($('#filters').hasClass('displaynone')) {
        $('#filters').removeClass('displaynone');
        $('#filters').addClass('inlineblock');
        $('#moreFilters i').removeClass('fa-plus');
        $('#moreFilters i').addClass('fa-minus');
    } else {
        $('#filters').removeClass('inlineblock');
        $('#filters').addClass('displaynone');
        $('#moreFilters i').removeClass('fa-minus');
        $('#moreFilters i').addClass('fa-plus');
    }
});


/** MYINFO **/
// display departements if country is France
$('#updateMyInfo #country').change(function(e) {
    e.preventDefault();
    // get country value
    var country = $(this).val();
    if (country !== 'France') {
        // refresh-clear the content
        $('#departement').html('');
    } else {
        // post
        $.ajax({
            url: "../ajax/ajaxUpdateMyInfo.php",
            type: "POST",
            data: {
                country: country,
                departementselector: 1
            },
            success: function(c) {
                // remove loader
                $('#loader').remove();
                if (c.status === "success") {
                    // show result
                    $('#departement').html(c.success);
                } else {
                    $('#departement').html('');
                }
            }
        });
    }
});

/** FIND (JOB SEARCH) **/
// Search by submit form
$('#jobSearch').submit(function(event) {
    event.preventDefault();
    // refresh-clear the content
    $('#jobOfferResults').html('');
//    // count the amount of results (also to reset the value)
    var numItems = $('#jobOfferResults .joboffer').length;
    $('#numItems').val(numItems);
    // add the loader
    $('#jobOfferResults').append('<div id="loader" class="col-lg-12 margin5 text-center"><img src="img/ajax_loader_blue_512.gif" width="32" height="32" /></div>');
    // get all datas
    var arrayData = $('#jobSearch').serializeArray();
    $.ajax({
        url: "../ajax/ajaxJobOffersSearch.php",
        type: "POST",
        data: arrayData,
        success: function(c) {
            $('#jobOfferResults').html(c);
        }
    });
});
// infinite scroll for job offers
$('#loadmemoreoffers a').click(function(event) {
    event.preventDefault();
    // count the amount of results (also to reset the value)
    var numItems = $('#jobOfferResults .joboffer').length;
    $('#numItems').val(numItems);
    // add the loader
    $('#jobOfferResults').append('<div id="loader" class="col-lg-12 margin5 text-center"><img src="img/ajax_loader_blue_512.gif" width="32" height="32" /></div>');
    // get all datas
    var arrayData = $('#jobSearch').serializeArray();
    $.ajax({
        url: "../ajax/ajaxJobOffersSearch.php",
        type: "POST",
        data: arrayData,
        success: function(c) {
            $('#loader').remove();
            $('#jobOfferResults').append(c);
        }
    });
});
// display departements if country is France
$('#jobSearch #country').change(function(e) {
    e.preventDefault();
    // get country value
    var country = $(this).val();
    if (country !== 'France') {
        // refresh-clear the content
        $('#departement').html('');
    } else {
        // post
        $.ajax({
            url: "../ajax/ajaxJobOffersSearch.php",
            type: "POST",
            data: {
                country: country,
                departementselector: 1
            },
            success: function(c) {
                // remove loader
                $('#loader').remove();
                if (c.status === "success") {
                    // show result
                    $('#departement').html(c.success);
                } else {
                    $('#departement').html('');
                }
            }
        });
    }
});


/** HIRE (CV SEARCH) **/
// Search by submit form
$('#cvSearch').submit(function(event) {
    event.preventDefault();
    // refresh-clear the content
    $('#cvOfferResults').html('');
//    // count the amount of results (also to reset the value)
    var numItems = $('#cvOfferResults .joboffer').length;
    $('#numItems').val(numItems);
    // add the loader
    $('#cvOfferResults').append('<div id="loader" class="col-lg-12 margin5 text-center"><img src="img/ajax_loader_blue_512.gif" width="32" height="32" /></div>');
    // get all datas
    var arrayData = $('#cvSearch').serializeArray();
    $.ajax({
        url: "../ajax/ajaxCvOffersSearch.php",
        type: "POST",
        data: arrayData,
        success: function(c) {
            $('#loader').remove();
            $('#cvOfferResults').html(c);
        }
    });
});
// infinite scroll for cv offers
$('#loadmemorecvoffers a').click(function(event) {
    event.preventDefault();
    // count the amount of results (also to reset the value)
    var numItems = $('#cvOfferResults .joboffer').length;
    $('#numItems').val(numItems);
    // add the loader
    $('#cvOfferResults').append('<div id="loader" class="col-lg-12 margin5 text-center"><img src="img/ajax_loader_blue_512.gif" width="32" height="32" /></div>');
    // get all datas
    var arrayData = $('#cvSearch').serializeArray();
    $.ajax({
        url: "../ajax/ajaxCvOffersSearch.php",
        type: "POST",
        data: arrayData,
        success: function(c) {
            $('#loader').remove();
            $('#cvOfferResults').append(c);
        }
    });
});
// display departements if country is France
$('#cvSearch #country').change(function(e) {
    e.preventDefault();
    // get country value
    var country = $(this).val();
    if (country !== 'France') {
        // refresh-clear the content
        $('#departement').html('');
    } else {
        // post
        $.ajax({
            url: "../ajax/ajaxCvOffersSearch.php",
            type: "POST",
            data: {
                country: country,
                departementselector: 1
            },
            success: function(c) {
                // remove loader
                $('#loader').remove();
                if (c.status === "success") {
                    // show result
                    $('#departement').html(c.success);
                } else {
                    $('#departement').html('');
                }
            }
        });
    }
});


// Upload User Image (avatar)
$(function() {
    'use strict';
    $('#fileupload').fileupload({
        url: '../ajax/ajaxUploadImage.php',
        dataType: 'json',
        done: function(c, data) {
            $.fancybox.showLoading();
            $.fancybox.helpers.overlay.open({
                closeClick: false
            });
            $.fancybox.helpers.overlay.close();
            if (data.result.status === "success") {
                $.fancybox.hideLoading();
                $.fancybox.helpers.overlay.close();
                $('.avatar img').attr("src", '../uploads/' + data.result.userId + '/thumb_300' + data.result.image);
            } else {
                $.fancybox({
                    wrapCSS: 'fancybox-pac',
                    'width': 'auto',
                    'height': 'auto',
                    'content': data.result.status
                });
            }
            $.each(data.result.files, function(index, file) {
                $('<p/>').text(file.name).appendTo('#files');
            });
        },
        progressall: function(e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .progress-bar').css('width', progress + '%');
        }
    }).prop('disabled', !$.support.fileInput)
            .parent().addClass($.support.fileInput ? undefined : 'disabled');
});
//
$('#searchFilters input').change(function(event) {
//    event.preventDefault();
//    console.log('caca');
    $('#searchFilters').submit();
//    var data = $('#searchFilters').serialize();


    //Do some stuff like build a list of things being purchased and customer details

//    $.getJSON('find.php', {products: products}, function(data) {
//        if (!data.error) {
//            alert('caca');
////            $('#paymentForm #customInvoiceID').val(data.id);
////            $('#paymentForm').submit();   //Send client to the payment processor
//        }
//    });


//    $.ajax({
//        url: 'find.php',
//        type: "POST",
//        data: data,
//        success: function(c) {
////            return;
////            if (c.status === "success") {
////                $('#returnMessageForm').html('<span class="alert green"><i class="fa fa-check-circle"></i> ok</span>');
////            } else {
////                $('#returnMessageForm').html('<span class="alert red"><i class="fa fa-exclamation-circle"></i> nok</span>');
////            }
////            window.location = 'find.php';
//        }
//    });


});