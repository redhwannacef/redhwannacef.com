export async function loader() {
  return fetch("https://plausible.io/js/script.js");
}
