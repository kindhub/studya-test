import Anchor from "./modules/Anchor";
import Nav from "./modules/Nav";

new Anchor();
new Nav();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "url", true);
    xhr.send(formData);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
      }
    };
  });
});
