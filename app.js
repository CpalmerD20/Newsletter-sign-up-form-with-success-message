
const emailField = document.querySelector('#email-field');
const emailError = document.querySelector('.email-error');
const subscribeButton = document.querySelector("#subscribe");
const container = document.querySelector(".container");

subscribeButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (emailField.value < 4) {
    return;
  }

  const updated = new CustomEvent('content-updated');
  if (!emailField.validity.valid) {
    emailError.textContent = "Valid email required";
    emailError.dispatchEvent(updated);
    return;
  }

  emailError.textContent = "";

  const email = emailField.value;
  container.innerHTML = "";

  container.classList.toggle("container");
  container.classList.toggle("success-container");

  const spacer = document.createElement('div');
  spacer.classList.toggle('spacer');
  container.append(spacer);

  const icon = document.createElement("img");
  icon.src = "./assets/images/icon-success.svg";
  icon.classList.toggle('success-icon');
  container.appendChild(icon);

  const header = document.createElement("h1");
  header.innerText = "Thanks for subscribing!";
  header.classList.toggle('success-header');
  container.appendChild(header);

  const pText1 = document.createElement("p");
  pText1.innerHTML = `A confirmation email has been sent to ${email.bold()}. Please open it and click the button inside to confirm your subscription`;
  pText1.classList.toggle('success-text');
  container.appendChild(pText1);

  const dismissButton = document.createElement("button");
  dismissButton.innerText = "Dismiss message";
  dismissButton.classList.toggle('dismiss');
  container.appendChild(dismissButton);

  dismissButton.addEventListener('click', (event) => {
    event.preventDefault();
    document.body.innerHTML = "";
  })
  container.dispatchEvent(updated);
  container.focus();
})
