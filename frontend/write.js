const handleSubmitForm = async () => {
  console.log("제출");
  event.preventDefault();

  await fetch("/items", {
    method: "POST",
    body: new FormData(form),
  });
  console.log("제출완료");
};

const form = document.getElementById("write-form");
form.addEventListener("submit", handleSubmitForm);
