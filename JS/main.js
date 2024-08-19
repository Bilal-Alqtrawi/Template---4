document.addEventListener("DOMContentLoaded", function () {
  const planLinks = document.querySelectorAll(".plan-link");

  planLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Disable all plan links after one is clicked
      planLinks.forEach((l) => (l.style.pointerEvents = "none"));

      // Replace the link with plain text within the same element
      const newText = link.getAttribute("data-new-content");
      const parentElement = link.parentElement;

      const textNode = document.createTextNode(newText);
      parentElement.replaceChild(textNode, link);

      parentElement.classList.add("txt-c");
    });
  });
});
