import style from "./scss/index.scss";
import anime from "animejs/lib/anime.es.js";
import Joi from "@hapi/joi";
// import $ from "jquery";

import {ProjectDetails} from './ProjectDetails';
//Contact Form Handling

class Form {
  constructor() {
    this.nameInput = document.getElementById("name-input");
    this.emailInput = document.getElementById("email-input");
    this.messageInput = document.getElementById("message");
    this.sendBtn = document.getElementById("send-btn");

    this.sendBtn.addEventListener("click", this.sendForm.bind(this));
  }

  validateForm() {
    //  console.log(this.nameInput.length)
    if (this.nameInput.value.length < 3) {
      alert("To short name!");
    } else if (this.messageInput.value.length < 6) {
      alert("To short message!");
    } else if (this.emailInput.value.length < 1) {
      alert("Email field empty!");
    }
  }

  clearForm() {
    this.nameInput.value = "";
    this.emailInput.value = "";
    this.messageInput.value = "";
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

    console.log(filledForm);

    //fetch

    this.clearForm();
  }
}

new Form();
new ProjectDetails();
//////////////////
