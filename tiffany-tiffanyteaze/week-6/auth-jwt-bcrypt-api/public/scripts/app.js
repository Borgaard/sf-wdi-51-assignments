localStorage.length > 0 ? console.log(localStorage) : console.log('no local storage');

let loggedIn ;
let user ;

checkForLogin();

$('a#logout').on('click', handleLogout);

$('#login').on('click', showLogin)

$('#signup').on('click', showSignup)

$('#signupForm').on('submit', submitSignup)

$('#loginForm').on('submit', submitLogin)


function checkForLogin(){
  if(localStorage.token){
    $.ajax({
      type: "GET", 
      url: '/user',  
      beforeSend: function (xhr) {   
          xhr.setRequestHeader("Authorization", 'Bearer '+ localStorage.token);
      }
    }).done(function (response) {
      console.log(response)
      user = { email: response.email, _id: response._id }
      console.log("you can access variable user: " , user)
        $('#message').text(`Welcome, ${ response.email || response.result.email } `)
    }).fail(function (err) {
        console.log(err);
    });
    $('#yesToken').toggleClass('show');
  } else {
    $('#noToken').toggleClass('show');
  }
}

function handleLogout(e) {
  e.preventDefault();
  console.log("LOGGED OUT")
  delete localStorage.token;
  $('#yesToken').toggleClass('show');
  $('#message').text('Goodbye!')
  user = null;
  checkForLogin();
}

function showLogin(e){
  e.preventDefault();
  console.log('login clicked.')
  $('#loginForm').toggleClass('show')
}

function showSignup(e){
  e.preventDefault();
  console.log('signup clicked.')
  $('#signupForm').toggleClass('show')
}

function submitSignup(e){
  e.preventDefault();
  let userData = $(this).serialize()
  $.ajax({
    method: "POST",
    url: "/user/signup",
    data: userData,
    error: function signupError(e1,e2,e3) {
      console.log(e1);
      console.log(e2);
      console.log(e3);
    },
    success: function signupSuccess(json) {
      console.log(json);
      user = json.user
      localStorage.token = json.signedJwt;
      $('#signupForm').toggleClass('show');
      $('#noToken').toggleClass('show');
      checkForLogin();

    }

  })
}

function submitLogin(e){
  e.preventDefault();
  console.log("LOGIN FORM SUBMITTED")
  let userData = $(this).serialize()
  console.log("LOGIN: ", userData)
  $.ajax({
    method: "POST",
    url: "/user/login",
    data: userData,
  }).done(function signupSuccess(json) {
    console.log("LOG IN SUCCESSFUL")
    console.log(json);
    localStorage.token = json.signedJwt;
    $('#noToken').toggleClass('show')
    $('#loginForm').toggleClass('show')
    checkForLogin();
  }).fail(function signupError(e1,e2,e3) {
    console.log(e2);
  })
}