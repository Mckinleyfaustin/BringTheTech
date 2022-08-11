async function signupHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      alert(response.statusText);
    } else {
      document.location.replace("/");
    }
  }
}

async function loginHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  //console.log(email + " " + password);

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    console.log("after if");

    if (!response.ok) {
      alert(response.statusText);
    } else {
      document.location.replace("/");
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupHandler);
document.querySelector(".login-form").addEventListener("submit", loginHandler);
