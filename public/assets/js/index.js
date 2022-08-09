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
