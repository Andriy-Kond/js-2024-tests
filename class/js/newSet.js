const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],

  // Change code below this line
  getOrdersLog() {
    return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(" - ");
  },

  getEmails() {
    const emails = this.orders.map(order => order.email);
    console.log("getEmails >> emails:::", emails);
    // Set - вбудований у JS клас, що повертає колекцію унікальних значень (схоже на об'єкт, але це не він).
    const uniqueEmails = new Set(emails);
    console.log("getEmails >> uniqueEmails:::", uniqueEmails);
    return [...uniqueEmails];
  },

  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
};

console.log(historyService.getOrdersLog());
console.log(historyService.getEmails());
console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));
