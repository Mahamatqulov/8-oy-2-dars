document.getElementById("submitBtn").addEventListener("click", function () {
  const avatar = document.getElementById("avatar").files[0];
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const githubUsername = document.getElementById("github-username").value;

  if (avatar) {
    const reader = new FileReader();
    reader.onload = function (e) {
      localStorage.setItem("avatar", e.target.result);
    };
    reader.readAsDataURL(avatar);
  } else {
    localStorage.setItem("avatar", "No file uploaded");
  }

  localStorage.setItem("fullName", fullName);
  localStorage.setItem("email", email);
  localStorage.setItem("githubUsername", githubUsername);

  window.location.href = "./page/home.html";
});
