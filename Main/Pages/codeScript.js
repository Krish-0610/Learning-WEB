const preview = document.querySelector("#preview");

function updatePreview() {
  const htmlCode = document.querySelector("#html-code").value;
  const cssCode = document.querySelector("#css-code").value;
  const jsCode = document.querySelector("#js-code").value;

  const combineCode = `
    <style>${cssCode}</style>
    ${htmlCode}
    <script>${jsCode}<\/script>
  `;

  preview.srcdoc = combineCode;
}

// Call the function initially to load the default content
updatePreview();

// Add event listeners for each input area
document.querySelector("#html-code").addEventListener("input", updatePreview);
document.querySelector("#css-code").addEventListener("input", updatePreview);
document.querySelector("#js-code").addEventListener("input", updatePreview);
