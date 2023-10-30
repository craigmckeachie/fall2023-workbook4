let contactInfo = {
  name: "Pursalane Faye",
  address: "121 Main Street",
  city: "Ashland",
  state: "Ohio",
  zip: "44805",
};

function printContact(contact) {
  console.log(`
    ${contact.name}
    ${contact.address}
    ${contact.city}, ${contact.state} ${contact.zip}
  `);
}

printContact(contactInfo);
