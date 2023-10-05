export default function htmlToJSON(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const bookmarks = [];

  const bookmarkElements = doc.querySelectorAll("a");
  bookmarkElements.forEach((bookmark) => {
    const title = bookmark.textContent;
    const url = bookmark.getAttribute("href");
    const addDate = parseInt(bookmark.getAttribute("ADD_DATE"), 10) * 1000; // Convert to milliseconds
    const iconUri = bookmark.getAttribute("ICON_URI");
    const lastModified = parseInt(bookmark.getAttribute("LAST_MODIFIED"), 10) * 1000; // Convert to milliseconds

    bookmarks.push({
      title,
      url,
      addDate,
      iconUri,
      lastModified,
    });
  });

  return bookmarks;
}
