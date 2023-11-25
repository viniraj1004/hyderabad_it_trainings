function validate() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  console.log("validate function")
  let nameStatus = emailStatus = phoneStatus = messageStatus = false;
  // Name Validation

  if (username === "") {
    document.getElementById("nameNote").innerHTML = "Name is required";
    nameStatus = false;
  }
  else {
    document.getElementById("nameNote").innerHTML = "";
    nameStatus = true;
  }

  // Email Validation

  if (email === "") {
    document.getElementById("emailNote").innerHTML = "Valid email is required"

    emailStatus = false;
  }
  else {
    document.getElementById("emailNote").innerHTML = ""

    emailStatus = true;
  }

  // Phone Validation

  if (phone === "") {
    document.getElementById("phoneNote").innerHTML = "Phone number is required";

    phoneStatus = false;
  }
  else {
    document.getElementById("phoneNote").innerHTML = "";

    phoneStatus = true;
  }

  // Message Validation

  if (message === "") {
    document.getElementById("messageNote").innerHTML = "Please,leave us a message";

    messageStatus = false;
  }
  else {
    document.getElementById("messageNote").innerHTML = "";

    messageStatus = true;
  }

  //to perform action

  if (nameStatus === true && emailStatus === true && phoneStatus === true && messageStatus === true && courseStatus === true && subjectStatus === true) {
    return true;
  }
  else {
    return false;
  }
  // return nameStatus
}



function studentValidate() {
  let coursename = document.getElementById("coursename").value;
  let studentname = document.getElementById("studentname").value;
  let studentemail = document.getElementById("studentemail").value;
  let subject = document.getElementById("subject").value;
  let studentphone = document.getElementById("studentphone").value;
  let studentmessage = document.getElementById("studentmessage").value;

  let courseStatus = stunameStatus = stuemailStatus = subjectStatus = stuphoneStatus = stumessageStatus = false;

  //Course name validation

  if (coursename === "") {
    document.getElementById("courseNote").innerHTML = " Course name is required";
    courseStatus = false;
  }
  else {
    document.getElementById("courseNote").innerHTML = "";
    courseStatus = true;
  }

  //Student name validation
  if (studentname === "") {
    document.getElementById("studentNote").innerHTML = " Student name is required";
    courseStatus = false;
  }
  else {
    document.getElementById("studentNote").innerHTML = "";
    courseStatus = true;
  }

  //Student email validation
  if (studentemail === "") {
    document.getElementById("stuemailNote").innerHTML = " Valid email is required";
    courseStatus = false;
  }
  else {
    document.getElementById("stuemailNote").innerHTML = "";
    courseStatus = true;
  }

  //Subject validation
  if (subject === "") {
    document.getElementById("subjectNote").innerHTML = " Subject is required";
    courseStatus = false;
  }
  else {
    document.getElementById("subjectNote").innerHTML = "";
    courseStatus = true;
  }

  //Phone validation
  if (studentphone === "") {
    document.getElementById("stuphoneNote").innerHTML = " Phone number is required";
    courseStatus = false;
  }
  else {
    document.getElementById("stuphoneNote").innerHTML = "";
    courseStatus = true;
  }

  //Message validation
  if (studentmessage === "") {
    document.getElementById("stumessageNote").innerHTML = " Message is required";
    courseStatus = false;
  }
  else {
    document.getElementById("stumessageNote").innerHTML = "";
    courseStatus = true;
  }

  //to perform action

  if (courseStatus === true && stunameStatus === true && stuemailStatus === true && subjectStatus === true && stuphoneStatus === true && stumessageStatus === true) {
    return true;
  }
  else {
    return false;
  }
}