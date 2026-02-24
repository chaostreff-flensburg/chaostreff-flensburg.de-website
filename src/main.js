const fetchSpaceApi = async () => {
  return await fetch("https://api.chaostreff-flensburg.de/").then((data) =>
    data.json()
  );
};

const mount = (selector, el) => {
  document.querySelectorAll(selector).forEach((_el) => {
    const node = el.cloneNode(true);
    _el.replaceWith(node);
    node.classList.add("rendered");
  });
};

const renderSpaceStatus = (status) => {
  const temp = document.createElement("space-status");
  temp.innerHTML = `<span>${
    status ? "Der Space ist geöffnet!" : "Der Space ist geschlossen!"
  }</span>`;
  if (status) {
    temp.classList.add("open");
  }
  return temp;
};

const displaySpaceStatus = async () => {
  try {
    const data = await fetchSpaceApi();
    const isOpen = data.state?.open;
    const el = renderSpaceStatus(isOpen, data.state);
    mount("space-status", el);
  } catch (e) {
    console.error("failed to display space status", e);
  }
};

displaySpaceStatus();
