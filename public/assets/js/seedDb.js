async function seedTheDatabase() {
  let title = document.querySelector("#product-title");
  let discription = document.querySelector("#product-discription");
  let price = document.querySelector("#product-price");
  let image_url = document.querySelector("#image-url");

  title = title.value.trim();
  discription = discription.value.trim();
  price = parseFloat(price.value);
  image_url = image_url.value.trim();

  const response = await fetch("/api/inventory", {
    method: "POST",
    body: JSON.stringify({
      title,
      discription,
      price,
      image_url,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    alert(response.statusText);
  } else {
    document.location.replace("/");
  }
}

document.querySelector("#add").addEventListener("click", seedTheDatabase);
