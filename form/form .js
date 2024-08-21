const form = document.getElementById("booking-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); /// it stops page reloading
  console.log("hello i submit form ");

  const fullNameElem = document.getElementById("fullName");

  const form = event.target;

  const name = form.elements["fullName"].value;
  const email = form.elements["email"].value;
  const doctor = form.elements["doctor"].value;
  const location = form.elements["location"].value;
  const date = form.elements["date"].value;

  const payload = {
    namezzzzzz: name,
    emailzzzzz: email,
    doctor,
    location,
    date,
  };

  console.log(payload);

  fetch("https:jsonplaceholder/", {
    method: "POST",
    body: JSON.stringify(payload),
  }).finally(() => {
    form.elements["fullName"].value = "";
    form.elements["email"].value = "";
    fullNameElem.innerHTML = "";

    // form.reset();
  });

  console.dir(form);
});