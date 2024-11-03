  document.getElementById("showIcon").addEventListener("click", function() {
    const domain = document.getElementById("domain").value.trim();
    const size = document.getElementById("size").value;
    
    if (!domain) {
      alert("Please enter a domain.");
      return;
    }

    const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
    const previewDiv = document.getElementById("preview");
    previewDiv.innerHTML = `<img src="${faviconUrl}" alt="Favicon Preview" id="faviconImage">`;

    // Add click event to the image to copy the URL
    const faviconImage = document.getElementById("faviconImage");
    faviconImage.addEventListener("click", function() {
      // Copy the favicon URL to the clipboard
      navigator.clipboard.writeText(faviconUrl).then(() => {
        alert("Favicon URL copied to clipboard: " + faviconUrl);
      }).catch(err => {
        console.error("Failed to copy: ", err);
      });
    });
  });
