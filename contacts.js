let contacts = [];

// Load contacts from localStorage
function loadContacts() {
  const storedContacts = localStorage.getItem("contacts");
  if (storedContacts) {
    contacts = JSON.parse(storedContacts);
  }
  displayContacts();
}

// Save contacts to localStorage
function saveContacts() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

// Add a new contact
function addContact() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (name === "" || phone === "") {
    alert("Please enter both name and phone number.");
    return;
  }

  const contact = { name, phone };
  contacts.push(contact);
  saveContacts();
  displayContacts();

  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
}

// Delete contact
function deleteContact(index) {
  contacts.splice(index, 1);
  saveContacts();
  displayContacts();
}

// Display all contacts
function displayContacts() {
  const list = document.getElementById("contact-list");
  list.innerHTML = "";

  contacts.forEach((contact, index) => {
    const div = document.createElement("div");
    div.className = "contact";
    div.innerHTML = `
      <span><strong>${contact.name}</strong><br>${contact.phone}</span>
      <button onclick="deleteContact(${index})">Delete</button>
    `;
    list.appendChild(div);
  });
}

// Initial load
loadContacts();
