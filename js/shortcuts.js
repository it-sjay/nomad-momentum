const shortcutForm = document.getElementById("shortcut-form");
const shortcutNameInput = document.getElementById("shortcut-name");
const shortcutUrlInput = document.getElementById("shortcut-url");
const shortcutList = document.querySelector("#shortcuts-list");
const toggleBtn = document.getElementById("toggle-shortcut-btn");

const SHORTCUTS_KEY = "shortcuts";

const defaultShortcuts = [
  { id: 1, name: "Google", url: "https://www.google.com" },
  { id: 2, name: "GitHub", url: "https://github.com" },
  { id: 3, name: "YouTube", url: "https://www.youtube.com" },
];

let shortcuts = [];

//드롭다운
function toggleShortcutForm() {
  shortcutForm.classList.toggle("hidden");
}

//저장
function saveShortcuts() {
  localStorage.setItem(SHORTCUTS_KEY, JSON.stringify(shortcuts));
}

//삭제
function deleteShortcut(event) {
  const li = event.target.closest("li");
  li.remove();

  shortcuts = shortcuts.filter((item) => item.id !== parseInt(li.id));
  saveShortcuts();
}

function paintShortcut(shortcut) {
  const li = document.createElement("li");
  li.id = shortcut.id;

  const link = document.createElement("a");
  link.href = shortcut.url;
  link.target = "_blank";

  const favicon = document.createElement("img");
  favicon.src = `https://s2.googleusercontent.com/s2/favicons?domain=${shortcut.url}&sz=32`;
  favicon.alt = shortcut.name;
  favicon.classList.add("favicon");

  const span = document.createElement("span");
  span.innerText = shortcut.name;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", deleteShortcut);

  link.appendChild(favicon);
  link.appendChild(span);

  li.appendChild(link);
  li.appendChild(deleteBtn);

  shortcutList.appendChild(li);
}

function handleShortcutSubmit(event) {
  event.preventDefault();

  const name = shortcutNameInput.value;
  let url = shortcutUrlInput.value;

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = `https://${url}`;
  }

  const newShortcutObj = {
    id: Date.now(),
    name: name,
    url: url,
  };

  shortcutNameInput.value = "";
  shortcutUrlInput.value = "";

  shortcuts.push(newShortcutObj);
  paintShortcut(newShortcutObj);
  saveShortcuts();

  shortcutForm.classList.add("hidden");
}

toggleBtn.addEventListener("click", toggleShortcutForm);
shortcutForm.addEventListener("submit", handleShortcutSubmit);

//로드시 확인
const savedShortcuts = localStorage.getItem(SHORTCUTS_KEY);

if (savedShortcuts !== null) {
  shortcuts = JSON.parse(savedShortcuts);
} else {
  shortcuts = defaultShortcuts;
  saveShortcuts();
}

shortcuts.forEach(paintShortcut);
