async function addCart(event) {
  event.preventDefault();

  const clicked = event.target.parentElement;

  console.log(clicked.children);

  const title = clicked.children[1].innerText;
  const price = clicked.children[3].innerText;

  const response = await fetch("/api/cart", {
    method: "POST",
    body: JSON.stringify({
      title,
      price,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

const btns = document.querySelectorAll(".product-btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", addCart);
}
