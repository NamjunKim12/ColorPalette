const form = document.querySelector("#form");

const createColorBoxes = (colors, parent) => {
  parent.innerHTML = "";
  for (const color of colors) {
    const div = document.createElement("div");
    div.classList.add("color");
    div.style.backgroundColor = color;
    div.style.width = `calc(100% / ${colors.length})`;

    div.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
    });

    const span = document.createElement("span");
    span.textContent = color;

    div.appendChild(span);
    parent.appendChild(div);
  }
};

const getColors = () => {
  const query = form.elements.query.value;
  fetch("/palette", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      query: query,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const colors = data.colors;
      const container = document.querySelector(".container");

      createColorBoxes(colors, container);
    });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getColors();
});
