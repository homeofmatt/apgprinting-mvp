---
layout: page
title: Contact Us
permalink: /contact/
---
<form class="contact-form" action="//formspree.io/conge101@mail.chapman.edu" method="POST">
	<div class="contact-field">
		<label for="dept">Department: </label>
		<select class="contact-form" name="dept">
			<option value="customer_service">Customer Service</option>
			<option value="sales">Sales</option>
			<option value="convention_services">Convention Services</option>
		</select>
	</div><br />

	<div class="contact-field">
	    <label for="name">Name: *</label>
	    <input class="contact-form" type="text" name="name" required>
	</div><br />

	<div class="contact-field">
	    <label for="_replyto">Email: *</label>
	    <input class="contact-form" type="email" name="_replyto" required>
	</div><br />

	<div class="contact-field">
	    <label for="company">Company: </label>
	    <input class="contact-form" type="text" name="company">
	</div><br />

	<div class="contact-field">
	    <label for="phone">Phone: </label>
	    <input class="contact-form" type="text" name="phone">
	</div><br />

	<div class="contact-field">
	    <label for="message">Message: *</label>
	    <textarea placeholder="Enter comments here..." class="contact-form" rows="10" name="message" required></textarea>
	</div><br />
	    
	<input type="hidden" name="_subject" value="New submission!" />
	<input type="text" name="_gotcha" style="display:none" />

    <input type="submit" value="Submit">
</form><br />