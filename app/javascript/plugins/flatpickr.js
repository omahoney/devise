import flatpickr from 'flatpickr';
require("flatpickr/dist/flatpickr.css")

document.addEventListener('turbolinks:load', event => {
    flatpickr("[data-behavior='flatpickr']", {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
    })
}, true);

