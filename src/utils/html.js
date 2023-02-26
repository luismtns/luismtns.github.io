const getElementArrayFromTag = (htmlStg, tag) => {
  const div = document.createElement("div");
  div.insertAdjacentHTML("beforeend", htmlStg);

  return Array.from(div.querySelectorAll(tag))
    .filter((p) => p.textContent !== "") // because of the lonely </p> at the end - optional
    .map((p) => p.outerHTML);
};

export const getTitle = (htmlStg) => {
  return getElementArrayFromTag(htmlStg, "h2");
};

export function getParagraphs(htmlStg) {
  return getElementArrayFromTag(
    htmlStg.replace(/<a/g, '<a target="_bank"'),
    "p"
  );
}
