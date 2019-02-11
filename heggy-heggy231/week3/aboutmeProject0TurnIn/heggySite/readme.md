# goal: make this site 
## technology used: 
* 1) grid 
* 2) box model
* 3) flex to screen sizing
* 4) smooth scrolling
* 5) hamburger menu
* 6) bootstrap
* 7) fix navbar
* 8) font-awesome
* 9) google font
* 10) jQuery to hide show menu vertical scrolltop
* 11) css animate
* 12) javascript to make the menu item active on click event
* 13) photo carousel
* 14) automatic photo slider using https://bxslider.com/

## demo of site
[AboutMe](https://heggy231.github.io/Aboutme/)

http://www.idynxschool.com/loso/#
- requirement: https://git.generalassemb.ly/sf-wdi-51/project-00

### phase 1:
Code Small Business Web Page
Start on small business page.
Learn about adding comments & div tag
 Write markup for small business page

[bootstrap grid system](https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2FScreen%20Shot%202019-02-07%20at%205.38.48%20PM.png?1549589947578)

how my grid system will be styled:
[bootstrap I will be using md](https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2FScreen%20Shot%202019-02-07%20at%205.38.48%20PM.png?1549589947578)

## bootstrap grid
<div class="container">
  <div class="row">
    <div class="col-*-*">
      // content goes here!
col-# number total up to 12 for each table
https://getbootstrap.com/docs/3.3/css/#grid
- version of bootstrap 3.3 documentation
[v3.3 bootstrap](https://getbootstrap.com/docs/3.3/css/#buttons)

### What Is Bootstrap Framework?
Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.
Bootstrap Grid Is Made Up of 3 Things: Container > Rows > Columns  (Basic Structure of Bootstrap Grid)

- Font-awesome 4.7: https://fontawesome.com/v4.7.0/

- resource: https://www.udemy.com/build-responsive-website-using-html5-css3-js-and-bootstrap/learn/v4/t/lecture/5304760?start=0

- carousel bootstrap javascript: https://getbootstrap.com/docs/3.3/javascript/#carousel
[carousel bootstrap javascript](https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2FScreen%20Shot%202019-02-08%20at%208.12.17%20PM.png?1549685573991)

- adding the nav bar
https://getbootstrap.com/docs/3.3/components/#navbar

* copy the nav bar code ex from ^^^ above link inside the header section of your code.
```HTML
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
```

- smooth scrolling to menu bar
https://css-tricks.com/snippets/jquery/smooth-scrolling/#article-header-id-1

```javascript
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
```