<!DOCTYPE html>
<?php
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
switch ($lang) {
    case "en":
        $lang = "en";
        break;
    case "nl":
        $lang = "nl";
        break;
    default:
        $lang = "en";
}
?>
<html lang="<?php echo $lang; ?>">
<head>
    <title>Roomz</title>
    <meta charset="utf-8">
    <meta name="description" content="Realistic Object Oriented Multi-dimentional Zoomable-Userinterface"/>
    <meta name="keywords" content="Roomz, HZ"/>
    <meta name="author" content="HZ University of Applied Sciences"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" sizes="57x57" href="res/global/fav/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="res/global/fav/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="res/global/fav/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="res/global/fav/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="res/global/fav/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="res/global/fav/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="res/global/fav/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="res/global/fav/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="res/global/fav/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="res/global/fav/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="res/global/fav/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="res/global/fav/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="res/global/fav/favicon-16x16.png">
    <link rel="manifest" href="res/global/fav/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="res/global/fav/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="css/shared/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/style.css"/>
    <script src="js/shared/jquery-2.2.0.min.js"></script>
    <script src="js/shared/bootstrap.min.js"></script>
    <script src="js/shared/angular.min.js"></script>
    <script src="js/content-switcher.js"></script>

    <!-- Bootstrap Core CSS -->
    <link href="css/shared/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/half-slider.css" rel="stylesheet">

    <!-- Main CSS -->
    <link href="css/main.css" rel="stylesheet">

</head>
<body ng-app="Roomz">
<noscript>
    <div class="nojs">
        <h1>There seems to be a problem..</h1>
        <h2>You can only use this site if you have JavaScript enabled.</h2>
    </div>
</noscript>

<!--header For logo and login button -->
<div class="content" ng-controller="MainController">
    <div class="container">
        <h3><b class="logotxt">Roomz</b> for sharing and structuring expertise</h3>
    </div>
</div>

<!-- Half Page Image Background Carousel Header -->
<div id="myCarousel" class="carousel slide" ng-controller="MainController">
    <!-- Indicators -->
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
        <li data-target="#myCarousel" data-slide-to="5"></li>
        <li data-target="#myCarousel" data-slide-to="6"></li>
        <li data-target="#myCarousel" data-slide-to="7"></li>
    </ol>

    <!-- Wrapper for Slides -->
    <div class="carousel-inner">
        <div class="item active">
            <!-- background 1 image using inline CSS below. -->
            <div class="fill"
                 style="background-image:url('res/global/slider/Slider_placeholder_1.jpg');"></div>
            <div class="carousel-caption">
                <div class="banner-text">
                    <div class="banner-content  class="angular-with-newlines">
                        <h1> {{ sliderDia1.name }}</h1>
                        <p> {{ sliderDia1.text }} </p>
                    </div>
                </div>
                <a class="link banner-button" href="demo">{{ canvas }}</a>
            </div>
        </div>
        <div class="item">
            <!-- background 2 image using inline CSS below. -->
            <div class="fill"
                 style="background-image:url('res/global/slider/Slider_placeholder_2.jpg');"></div>
            <div class="carousel-caption">
                <div class="banner-text">
                    <div class="banner-content">
                        <h1> {{ sliderDia2.name }}</h1>
                        <p> {{ sliderDia2.text }} </p>
                    </div>
                </div>
                <a class="link banner-button" href="demo">{{ canvas }}</a>
            </div>

        </div>
        <div class="item">
            <!-- background 3 image using inline CSS below. -->
            <div class="fill"
                 style="background-image:url('res/global/slider/Slider_placeholder_3.jpg');"></div>
            <div class="carousel-caption">
                <div class="banner-text">
                    <div class="banner-content">
                        <h1> {{ sliderDia3.name }}</h1>
                        <p> {{ sliderDia3.text }} </p>
                    </div>
                </div>
                <a class="link banner-button" href="demo">{{ canvas }}</a>
            </div>
        </div>
        <div class="item">
            <!-- background 4 image using inline CSS below. -->
            <div class="fill"
                 style="background-image:url('res/global/slider/Slider_placeholder_4.jpg');"></div>
            <div class="carousel-caption">
                <div class="banner-text">
                    <div class="banner-content">
                        <h1> {{ sliderDia4.name }}</h1>
                        <p> {{ sliderDia4.text }} </p>
                    </div>
                </div>
                <a class="link banner-button" href="demo">{{ canvas }}</a>
            </div>
        </div>
        <div class="item">
            <!-- background 5 image using inline CSS below. -->
            <div class="fill"
                 style="background-image:url('res/global/slider/Slider_placeholder_5.jpg');"></div>
            <div class="carousel-caption">
                <div class="banner-text">
                    <div class="banner-content">
                        <h1> {{ sliderDia5.name }}</h1>
                        <p> {{ sliderDia5.text }} </p>
                    </div>
                </div>
                <a class="link banner-button" href="demo">{{ canvas }}</a>
            </div>
        </div>
        <div class="item">
            <!-- background 6 image using inline CSS below. -->
            <div class="fill"
                 style="background-image:url('res/global/slider/image-1.jpg');"></div>
            <div class="carousel-caption">
                <div class="banner-text">
                    <div class="banner-content">
                        <h1> {{ sliderDia6.name }}</h1>
                        <p> {{ sliderDia6.text }} </p>
                    </div>
                </div>
                <a class="link banner-button" href="demo">{{ canvas }}</a>
            </div>
        </div>
        <div class="item">
            <!-- background 7 image using inline CSS below. -->
            <div class="fill"
                 style="background-image:url('res/global/slider/image-2.jpg');"></div>
            <div class="carousel-caption">
                <div class="banner-text">
                    <div class="banner-content">
                        <h1> {{ sliderDia7.name }}</h1>
                        <p> {{ sliderDia7.text }} </p>
                    </div>
                </div>
                <a class="link banner-button" href="demo">{{ canvas }}</a>
            </div>
        </div>
        <div class="item">
            <!-- background 8 image using inline CSS below. -->
            <div class="fill"
                 style="background-image:url('res/global/slider/image-3.jpg');"></div>
            <div class="carousel-caption">
                <div class="banner-text">
                    <div class="banner-content">
                        <h1> {{ sliderDia8.name }}</h1>
                        <p> {{ sliderDia8.text }} </p>
                    </div>
                </div>
                <a class="link banner-button" href="demo">{{ canvas }}</a>
            </div>
        </div>
    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="icon-prev"></span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="icon-next"></span>
    </a>
</div>


<!-- Page content -->
<div class="page-content" ng-controller="MainController">
    <div id="content_legal">
        <h4>{{ legal }}</h4>
        <p>Content of legal</p>
    </div>
    <div id="content_about_us">
        <h4>{{ about.name }}</h4>
        <p><b>Roomz</b></p>
        <p>{{ about.text }}</p>
    </div>
    <div id="content_contact">
        <h4>{{ contact }}</h4>
        <p>Email: info@roomz.software</p>
        <p>HZ university of Applied Siences</p>
        <p>Roomz software</p>
        <p>Kamer L1.22</p>
        <p>Postbus 364</p>
        <p>4380 AJ, Vlissingen</p>
        <p>Fax: (0118) 48 92 00</p>
    </div>
    <footer id="footer">
        <div id="button_footer">
            <button class="btn btn-default" id="Button_footer_legal">
			{{ legal }}
            </button>
            <button class="btn btn-default" id="Button_footer_about_us">
			{{ about.name }}
            </button>
            <button class="btn btn-default" id="Button_footer_contact">
			{{ contact }}
            </button>
        </div>
    </footer>
</div>

<!-- Modules -->
<script src="js/app.js"></script>

<!-- Controller -->
<?php
echo "<script src='js/controllers/Controller-$lang.js'></script>";
?>
</body>


</html>