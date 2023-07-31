const orderSupplies = (item, callback) => {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;
  setTimeout(() => {
    warehouse = {
      paint: {
        product: "Neon Green Paint",
        directions: () => "mix it!",
      },
      brush: {
        product: "Horsehair brush",
        directions: () => "start painting!",
      },
      tarp: {
        product: "A large tarp",
        directions: () => "cover the floor!",
      },
    };
    callback(warehouse[item]);
  }, deliveryTime);
};
const receivedItem = (item) => {
  console.log(`Received ${item.product}, time to ${item.directions()}`);
};

orderSupplies("tarp", receivedItem);
orderSupplies("paint", receivedItem);
orderSupplies("brush", receivedItem);

console.log("----------------------");