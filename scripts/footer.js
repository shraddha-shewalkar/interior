var App=angular.module("mainApp");
App.component('footer',{
	template:`
	<div class="container-fluid">
	<div class="row">
		<div class="col-md-4">
			<h4>About Us</h4>
			<p>We believe in deeply understanding of client nature and business.Our creative team provide the best working and living environment which keeps you engine.</p>
		</div>
		<div class="col-md-5">
			<h4>Recent Work</h4>
			<div class="row">
				<div class="col-md-4" ><a href="#"><img src="image/kitchen1.jpeg" alt="" class="img-responsive"></a></div>
				<div class="col-md-4" ><a href="#"><img src="image/kitchen1.jpeg" alt="" class="img-responsive"></a></div>
				<div class="col-md-4" ><a href="#"><img src="image/kitchen1.jpeg" alt="" class="img-responsive"></a></div>
			</div>
			<div class="row">
				<div class="col-md-4" ><a href="#"><img src="image/kitchen1.jpeg" alt="" class="img-responsive"></a></div>
				<div class="col-md-4" ><a href="#"><img src="image/kitchen1.jpeg" alt="" class="img-responsive"></a></div>
				<div class="col-md-4" ><a href="#"><img src="image/kitchen1.jpeg" alt="" class="img-responsive"></a></div>
				</div>
		</div>
		<div class="col-md-3">
			<h4>Address</h4>
		<p>	
			<span class="glyphicon glyphicon-home" aria-hidden="true"></span>
			 Vishwashanti Bunglow,<br>
			 Natraj Society,Lane No.7,<br>
			 Karve Nagar,Pune-52<br>
			<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
			info@depthdecor.com<br>
			<span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>
			(+91)9049984464
		</p>
		</div> 
	</div>
		<hr>
		<center><p>2018 Depth Decor. All rights reserved | Designed by Pau Software</p></center>
	</div>
	`
});