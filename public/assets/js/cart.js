async function cartHandler(event) {
  event.preventDefault();

  const response = await fetch("/cart", {
    method: "GET",
    body: {},
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/cart");
  }
}

document.querySelector("#cart").addEventListener("click", cartHandler);
