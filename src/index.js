import style from "./scss/index.scss";
import anime from "animejs/lib/anime.es.js";
import Joi from "@hapi/joi";
// import $ from "jquery";
import axios from "axios";

import { ProjectDetails } from "./ProjectDetails";
//Contact Form Handling

class Form {
  constructor() {
    this.nameInput = document.getElementById("name-input");
    this.emailInput = document.getElementById("email-input");
    this.messageInput = document.getElementById("message");
    this.sendBtn = document.getElementById("send-btn");
    this.contactName = document.getElementById("contactName");
    this.contactMail = document.getElementById("contactMail");
    this.contactMessage = document.getElementById("contactMessage");
    this.flag = false;
    this.sendBtn.addEventListener("click", this.sendForm.bind(this));
    this.isLoading = false;
  }

  makeSuccessMessage() {
    const successMessage = document.createElement("p");
    successMessage.setAttribute("class", "alert-success w-100 mt-2");
    successMessage.setAttribute("id", "successMessage");
    successMessage.textContent = "Message sent successfully!";
    this.contactName.append(successMessage);
    setTimeout(() => {
      this.contactName.remove(document.getElementById("alertMessage"));
    }, 4000);
  }

  makeAlertMessage(inputName, input) {
    const alertMessage = document.createElement("p");
    alertMessage.setAttribute("class", "alert-danger w-100 mt-2");
    alertMessage.setAttribute("id", "alertMessage");
    alertMessage.textContent = inputName + " to short";
    input.append(alertMessage);
    setTimeout(() => {
      input.removeChild(document.getElementById("alertMessage"));
    }, 3000);
  }

  validateForm() {
    if (this.nameInput.value.length < 2) {
      this.makeAlertMessage("Name", this.contactName);
      return;
    } else if (
      this.emailInput.value.length < 4 &&
      !this.emailInput.value.includes("@")
    ) {
      this.makeAlertMessage("Email", this.contactMail);
      return;
    } else if (this.messageInput.value.length < 1) {
      this.makeAlertMessage("Message", this.contactMessage);

      return;
    } else {
      return (this.flag = true);
    }
  }

  clearForm() {
    this.nameInput.value = "";
    this.emailInput.value = "";
    this.messageInput.value = "";
  }

  createSpinner() {
    const spinnerDiv = document.createElement("div");
    spinnerDiv.setAttribute("class", "d-flex justify-content-center mt-4");
    spinnerDiv.setAttribute("id", "spinnerDiv");

    const spinnerDivInner = document.createElement("div");
    spinnerDivInner.setAttribute("class", "spinner-border");
    spinnerDivInner.setAttribute("role", "status");
    spinnerDiv.append(spinnerDivInner);
    const spinner = document.createElement("span");
    spinner.setAttribute("class", "sr-only");
    spinnerDivInner.append(spinner);
    this.contactName.append(spinnerDiv);
    console.log(spinnerDiv);
  }

  sendForm(event) {
    event.preventDefault();
    this.validateForm();
    const filledForm = {
      name: "",
      email: "",
      message: "",
    };

    filledForm.name = this.nameInput.value;
    filledForm.email = this.emailInput.value;
    filledForm.message = this.messageInput.value;

    //fetch
    const url = "https://sheltered-spire-00755.herokuapp.com/email";

    if (this.flag) {
      axios
        .post(url, filledForm)
        .then(() => {
          this.isLoading = true;
          if (this.isLoading) {
            this.createSpinner();
          }
        })
        .then((response) => {
          this.isLoading = false;
          if (!this.isLoading) {
            const spinnerDivs = document.getElementById("spinnerDiv");
            this.contactName.removeChild(spinnerDivs);
          }
          this.makeSuccessMessage();
        })
        .catch((error) => {
          console.log(error);
        });
    }

    this.clearForm();
  }
}

new Form();
new ProjectDetails();
//////////////////
