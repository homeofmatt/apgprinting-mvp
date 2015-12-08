---
layout: page
title: Quotes
permalink: /quotes/
menu: main
weight: 4
---

<form class="quotes-form" action="//formspree.io/conge101@mail.chapman.edu" method="POST">
  <h3>Contact Information</h3>
  <div class="quotes-field">
      <label for="name">Name: *</label>
      <input class="quotes-form" type="text" name="name" required>
  </div><br />

  <div class="quotes-field">
      <label for="email">Email: *</label>
      <input class="quotes-form" type="email" name="email" required>
  </div><br />

  <div class="quotes-field">
      <label for="phone">Phone: *</label>
      <input class="quotes-form" type="text" name="phone" required>
  </div><br />

  <div class="quotes-field">
      <label for="company">Company: </label>
      <input class="quotes-form" type="text" name="company">
  </div><br /><br />

  <h3>Job Basics</h3>
  <div class="quotes-field">
      <label for="job-description">Description: *</label>
      <textarea placeholder="Enter job description here..." class="quotes-form" rows="10" name="job-description" required></textarea>
  </div><br />

  <div class="quotes-field">
    <label for="quantity">Quantity: *</label>
    <input class="quotes-form" type="number" name="quantity" required>
  </div><br />

  <div class="quotes-field">
    <label for="date-needed">Date Needed: *</label>
    <input class="quotes-form" type="text" id="date-needed" name="date-needed" required>
  </div><br /><br />

  <h3>Job Specifics</h3>
  <div class="quotes-field">
    <label for="color-choice">Color or B&amp;W:</label>
    <select class="quotes-form" name="color-choice">
      <option value="black-and-white">Black and White</option>
      <option value="full-color">Full Color</option>
      <option value="spot-color">Spot Color</option>
      <option value="both">Both</option>
    </select>
  </div><br />

  <div class="quotes-field">
    <label for="color-pages-quantity">No. of Color Pages: *</label>
    <input class="quotes-form" type="number" name="color-pages-quantity" required>
  </div><br />

  <div class="quotes-field">
    <label for="black-white-pages-quantity">No. of Black and White Pages: *</label>
    <input class="quotes-form" type="number" name="black-white-pages-quantity" required>
  </div><br />

  <div class="quotes-field">
    <label for="bleed">Bleeds?</label>
    
    <div class="quotes-form quotes-radio">    
      <input type="radio" name="bleed" value="yes"> Yes&nbsp;
      <input type="radio" name="bleed" value="no" checked> No
    </div>
  </div><br />

  <div class="quotes-field">
    <label for="double-sided">Double Sided?</label>

    <div class="quotes-form quotes-radio">
      <input type="radio" name="double-sided" value="yes"> Yes&nbsp;
      <input type="radio" name="double-sided" value="no" checked> No
    </div>
  </div><br />

  <div class="quotes-field">
    <label for="paper-type">Type of Paper: *</label>
    <input class="quotes-form" type="text" name="paper-type" required>
  </div><br />

  <div class="quotes-field">
    <label for="size">Size: *</label>
    <input class="quotes-form" type="text" name="size" required>
  </div><br />

  <div class="quotes-field">
    <label for="binding-choice">Binding:</label>
    <select class="quotes-form" name="binding-choice">
      <option value="none">None</option>
      <option value="saddle-stitch">Saddle Stitch</option>
      <option value="perfect">Perfect</option>
      <option value="coil">Coil</option>
      <option value="other">Other</option>
    </select>
  </div><br />

  <div class="quotes-field">
    <label for="comments">Comments:</label>
    <textarea placeholder="Enter any extra comments here..." class="quotes-form" rows="10" name="comments"></textarea>
  </div><br />
      
  <input type="hidden" name="_subject" value="New Quote Form Request" />
  <input type="text" name="_gotcha" style="display:none" />
  <input type="hidden" name="_next" value="{{ "/quote-response/" | prepend: site.baseurl }}" />

  <input type="submit" value="Submit">
</form><br />