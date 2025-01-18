document.getElementById("submitBtn").addEventListener("click", function () {
  const avatar = document.getElementById("avatar").files[0];
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const githubUsername = document.getElementById("github-username").value;

  console.log("Avatar File:", avatar ? avatar.name : "No file uploaded");
  console.log("Full Name:", fullName);
  console.log("Email Address:", email);
  console.log("GitHub Username:", githubUsername);
});
