$(document).ready(() => {
    // may be better to do this in react
  // Getting references to our form and input
  const signUpForm = $("form#signup");
  const emailInput = $("input#newEmail");
  const passwordInput = $("input#newPassword");
  const confirmPassInput = $("input#confirmPass");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", (event) => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.email || !userData.password) {
      return;
    }

    console.log(confirmPassInput.val());
    console.log(passwordInput.val());
    if (confirmPassInput.val() !== passwordInput.val()) {
      alert("Passwords do not match. Try again.");
      return;
    }
    // If we have an email and password, run the signUpUser function
    console.log(userData);
    // signUpUser(userData);
    // console.log(userData);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
//   function signUpUser(userData) {
//     $.post("/api/signup", {
//       email: userData.email,
//       password: userData.password,
//       username: userData.username,
//       neighborhood: userData.neighborhood,
//     })
//       .then((userData) => {
//         console.log(userData);

//         // window.location.replace("/calendar");
//         // If there's an error, handle it by throwing up a bootstrap alert
//       })
//       .catch(handleLoginErr);
//   }

//   function handleLoginErr(err) {
//     $("#alert .msg").text(err.responseJSON);
//     $("#alert").fadeIn(500);
//   }
// });
