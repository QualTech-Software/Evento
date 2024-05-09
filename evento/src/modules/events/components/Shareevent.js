const initializeShareEvent = () => {
  const copyToClipboard = () => {
    const input = document.querySelector(".field input");
    if (!input) return; // Check if input element exists
    input.select();
    if (document.execCommand("copy")) {
      const copyButton = document.querySelector(".field button");
      const field = document.querySelector(".field");
      if (!copyButton || !field) return; // Check if button and field elements exist
      field.classList.add("active");
      copyButton.innerText = "Copied";
      setTimeout(() => {
        window.getSelection().removeAllRanges();
        field.classList.remove("active");
        copyButton.innerText = "Copy";
      }, 3000);
    }
  };

  const viewBtn = document.querySelector(".view-modal");
  const popup = document.querySelector(".popup");
  if (!viewBtn || !popup) return; // Check if viewBtn and popup elements exist
  const close = popup.querySelector(".close");

  viewBtn.addEventListener("click", () => {
    popup.classList.toggle("show");
  });

  if (!close) return; // Check if close element exists
  close.addEventListener("click", () => {
    viewBtn.click();
  });

  const copyButton = document.querySelector(".field button");
  if (!copyButton) return; // Check if copyButton element exists
  copyButton.addEventListener("click", copyToClipboard);
};

export default initializeShareEvent;
