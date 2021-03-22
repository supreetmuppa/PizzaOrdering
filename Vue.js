let stage = 1;
const interval = setInterval(() => {
  const messages = {
    1: "Order Received",
    2: "Order Placed",
    3: "In the Oven",
    4: "Out for Delivery",
    5: "Delivered"
  }
  stage = stage + 1;
  const messageId = stage-1;
  if (stage > 5) {
    console.log('clearing');
    clearInterval(interval);
  }

  pusher.trigger('food', 'status', {
    message: messages[messageId],
    progress: messageId/5
  });
}, TIME);
