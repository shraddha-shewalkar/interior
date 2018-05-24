  var App = angular.module("mainApp", );
  App.component('navBar', {
    template: `<nav class="navbar navbar-default">
			  <div class="container-fluid">
			    <div class="navbar-header">
			      <a href="#/">  <img  src="image/depthdecor2.jpg"></a>
			    </div>
			    <ul class="nav navbar-nav">
			      <li><a href="#/">Home</a></li>
			      <li><a href="#about">About</a></li>
			      <li><a href="#services">Services</a></li>
			      <li><a href="#ourTeam">Our Team</a></li>
			      <li><a href="#gallary">Gallary</a></li>
			      <li><a href="#contact">Contact Us</a></li>
			    </ul>
			  </div>
			</nav>`
  });

