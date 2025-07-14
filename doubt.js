document.getElementById("doubtForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // You can collect data here
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const doubt = document.getElementById("doubt").value;

  // Just displaying a success message for now
  document.getElementById("responseMsg").textContent = "Your doubt has been submitted!";

  // Clear form
  this.reset();
});
