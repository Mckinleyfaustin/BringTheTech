getInventory = async () => {
  const dbData = await fetch("/api/inventory", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  var data = await dbData.json();
  return data;
};

getInventory().then((dbInventoryData) => {
  const ulEl = document.createElement("ul");
  for (let i = 0; i < dbInventoryData.length; i++) {
    const liEl = document.createElement("li");
    liEl.innerText = dbInventoryData[i].title;
    ulEl.appendChild(liEl);
    const emmaAge = document.createElement("li");
    emmaAge.innerText = dbInventoryData[i].price;
    ulEl.appendChild(emmaAge);
    document.body.appendChild(ulEl);
  }
});
