function sendMail() {
  // get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // construct email body
  var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

  // send email
  window.location.href =
    "mailto:your.email@example.com?subject=Contact%20Form&body=" +
    encodeURIComponent(body);
}
