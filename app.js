var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// Dynamically update copyright year
var yearElement = document.getElementById("currentYear");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

function sendMail(event) {
  event.preventDefault(); // Prevents form from reloading
  emailjs.init("4FrjG7SC-US7yQjNz");

  var messageBox = document.getElementById("message-status");
  messageBox.innerHTML = "⏳ Sending...";
  messageBox.style.display = "block";
  messageBox.style.color = "#000";

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_xr8vfns";
  const templateID = "template_sasc8dk";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      messageBox.innerHTML = "✅ Your message was sent successfully!";
      messageBox.style.color = "green";

      // Clear input fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((err) => {
      messageBox.innerHTML = `❌ Failed to send message. Error: ${err.text}`;
      messageBox.style.color = "red";
      console.error("Error:", err);
    });

  setTimeout(() => {
    messageBox.style.display = "none";
  }, 5000);
}

document.getElementById("contact-form").addEventListener("submit", sendMail);
