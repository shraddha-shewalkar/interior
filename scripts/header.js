var App = angular.module("mainApp" );
  App.component('counter', {
  template: `
    <nav class="nav navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="pull-left"><a href="#/">  <img src="image/depthdecor2.jpg"></a></div>
          <div class="navbar-header">
         </div>
         <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#ourteam">Our Team</a></li>
            <li><a href="#gallary">Gallary</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          </div>
        </div>
      </nav>
  `
});

