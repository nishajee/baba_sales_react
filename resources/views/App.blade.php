<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- for login -->
        <!-- <link rel="stylesheet" href="{{url('public/login2/node_modules/bootstrap/dist/css/bootstrap.min.css')}}"> -->
    <!-- <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.blue-deep_purple.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <link rel="stylesheet" href="{{url('public/login2/css/style.css')}}">

    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>

    <script src="{{url('public/login2/node_modules/jquery/dist/jquery.min.js ')}}"></script>
    <script src="{{url('public/login2/node_modules/bootstrap/dist/js/bootstrap.min.js ')}}"></script>
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script> -->
 <!--  login end -->

        <title>BABA SALES</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="{{('public/css/app.css')}}"/>
        <!-- css for login -->
        <style>
        .mdl-textfield__label {
            margin-bottom: 0;
            color: #4e5050;
            font-weight: normal;
        }
        
        .mdl-textfield--floating-label.is-focused .mdl-textfield__label,
        .mdl-textfield--floating-label.is-dirty .mdl-textfield__label {
            text-transform: uppercase
        }
        
        .has-feedback label~.form-control-feedback {
            top: 15px;
        }
        
        .mdl-textfield {
            width: 100%;
        }
        
        .mdl-checkbox__label {
            cursor: text;
            font-size: 12px;
            float: left;
            color: #b0b3b4;
            font-weight: normal;
        }
        
        .mdl-checkbox__box-outline {
            border: 1px solid #b0b3b4;
        }
        
        .mdl-textfield__input {
            border: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.48);
            display: block;
            font-size: 16px;
            margin: 0;
            padding: 4px 0;
            width: 100%;
            background: 0 0;
            text-align: left;
            color: inherit;
            font-weight: bold;
        }
        
        .mdl-switch__label {
            float: left;
            font-weight: normal;
            color: #4e5050;
            font-size: 14px;
        }

        .carousel-btns{
            margin-bottom:-60px;
        }

        /* .col-md-5 {
            border:1px solid black;
        }

        .col-md-12 {
            border:1px solid black;
        } */

        .imgcontainer img {
            height:150px;
        }  

        .imgcontainer2 img {
            height:40px;
            margin:20px 0px;
        }
       
        
        canvas {
  display: block;
  /* vertical-align: bottom; */
}

#particles-js {
    width: 100vw;
    height: 100vh;
    background: #00356B;
}
#particle {
    background: linear-gradient(to top, rgb(0, 60, 81),rgb(1, 96, 128), #3F51B5);
  position:fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  z-index:0; 
}
#overlay {
  position: relative;
}
.mdl-textfield__input {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.48);
    display: block;
    font-size: 16px;
    margin: 0;
    padding: 4px 0;
    width: 85%;
    background: 0 0;
    text-align: left;
    color: inherit;
  font-weight:100;
}
    </style>
      <!-- css end -->

   
    </head>
    <body>
        <div class="container-fluid">
            <div id="app" style="overflow:hidden">
          
        
            </div> 
        </div>
        <script type="text/javascript" src="{{('js/app.js')}}"></script>
    </body>
</html>
