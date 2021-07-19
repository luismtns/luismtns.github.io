export default function capitalize(word) {
  return word.replace(/\b\w/g, (l) => l.toUpperCase());
}
