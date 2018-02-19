function clearItems(type) {
  function clearRow(icon) {
    return icon
      .closest("li")
      .querySelector("form")
      .querySelector("button")
      .click();
  }

  function clearMerged() {
    Array.from(document.querySelectorAll(".type-icon-state-merged")).forEach(
      clearRow
    );
  }
  function clearClosed() {
    Array.from(document.querySelectorAll(".type-icon-state-closed")).forEach(
      clearRow
    );
  }

  switch (type) {
    case "merged":
      clearMerged();
      break;
    case "closed":
      clearClosed();
      break;
    case "all":
      clearMerged();
      clearClosed();
      break;
  }
}
