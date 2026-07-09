// Force-close Mintlify AI assistant (not available on Hobby plan but keeps opening)
(function () {
  function killAssistant() {
    var html = document.documentElement;
    if (!html) return;
    if (html.getAttribute("data-assistant-state") !== "closed") {
      html.setAttribute("data-assistant-state", "closed");
    }
    html.style.setProperty("--assistant-sheet-width", "0px", "important");
    html.style.setProperty("--chat-assistant-sheet-width", "0px", "important");
    ["chat-assistant-sheet", "#chat-assistant-sheet", "chat-assistant-floating-input",
     "#assistant-entry", "#assistant-entry-mobile", "#ask-assistant-code-block-button"
    ].forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) { el.remove(); });
    });
  }
  killAssistant();
  document.addEventListener("DOMContentLoaded", killAssistant);
  window.addEventListener("load", killAssistant);
  new MutationObserver(killAssistant).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-assistant-state", "style"],
    childList: true,
    subtree: true
  });
})();
