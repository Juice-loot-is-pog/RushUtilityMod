// Mods page: the searchable list of every mod, with All / Alpha / Beta only filters.
// Needs js/modules.js loaded first.

const list = document.getElementById("mod-list");
const empty = document.getElementById("empty");
const search = document.getElementById("search");
let filter = "all";

function render() {
  const q = search.value.trim().toLowerCase();
  const shown = ALL_MODS.filter(m =>
    (filter === "all" || (filter === "beta") === m.beta) &&
    m.name.toLowerCase().includes(q));
  list.innerHTML = shown.map(m =>
    `<li>${m.name}${m.beta ? '<span class="tag tag-beta">Beta</span>' : ""}</li>`).join("");
  empty.hidden = shown.length > 0;
}

search.addEventListener("input", render);
document.querySelectorAll(".chip").forEach(chip => chip.addEventListener("click", () => {
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  filter = chip.dataset.filter;
  render();
}));
render();
