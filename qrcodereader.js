document.getElementById("qrForm983").addEventListener("submit", async function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  document.getElementById("result983").value = "Processing...";

  try {
    const response = await fetch("https://api.qrserver.com/v1/read-qr-code/", {
      method: "POST",
      body: formData,
    });

    // Check if the response is OK
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    const result = await response.json();

    // Check if result data exists
    if (result[0] && result[0].symbol[0].data) {
      document.getElementById("result983").value = result[0].symbol[0].data;
    } else {
      document.getElementById("result983").value = "No data found in the QR code.";
    }
  } catch (error) {
    document.getElementById("result983").value = "Error reading QR code.";
    console.error("Error:", error);
  }
});

document.getElementById("result983").addEventListener("click", async function() {
  // Select the text in the input field
  this.select();
  this.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text to clipboard using the Clipboard API for better compatibility
  try {
    await navigator.clipboard.writeText(this.value);
    this.value = "Text Copied!";
    
    // Clear message after 2 seconds
    setTimeout(() => {
      this.value = '';
    }, 2500);
  } catch (error) {
    console.error("Error copying text:", error);
  }
});
