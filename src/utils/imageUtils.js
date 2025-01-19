export function getImageUrl(fileName) {
  const url = new URL(`/src/assets/images/${fileName}`, import.meta.url).href;
  return url;
}
