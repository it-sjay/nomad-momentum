const logoutBtn = document.querySelector("#logout-btn");

function onLogout() {
  localStorage.removeItem("username");

  location.reload();
}

logoutBtn.addEventListener("click", onLogout);
