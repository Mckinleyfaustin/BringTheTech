async function logoutHandler() {
  const response = await fetch("/api/users/logout", {
    method: "POST",
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

document.querySelector("#logout").addEventListener("click", logoutHandler);
