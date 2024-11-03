  document.getElementById("qrForm983").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    document.getElementById("result983").textContent = "Processing...";

    try {
      const response = await fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result[0] && result[0].symbol[0].data) {
        document.getElementById("result983").value = `${result[0].symbol[0].data}`;
      } else {
        document.getElementById("result983").value = "No data found in the QR code.";
      }
    } catch (error) {
      document.getElementById("result983").value = "Error reading QR code.";
      console.error("Error:", error);
    }
  });


    document.getElementById("result983").addEventListener("click", function() {
    // Select the text in the input field
    this.select();
    this.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to clipboard
    document.execCommand("copy");


    // Show confirmation message
    const message = document.getElementById("result983");
    message.value = "Text Copied!";
    
    // Clear message after 2 seconds
    setTimeout(() => message.value = '' , 2500,);
    ;
  });
