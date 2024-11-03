function generateQRCode() {
    const qrText = document.getElementById("qrText").value;
    const qrColor = document.getElementById("qrColor").value;
    const bgColor = document.getElementById("bgColor").value;
    const qrSize = parseInt(document.getElementById("qrSize").value);

    if (!qrText) {
      alert("Please enter text or URL for the QR code.");
      return;
    }

    // Clear any previous QR code
    document.getElementById("qrCode").innerHTML = "";

    // Generate QR code
    const qrCode = new QRCode(document.getElementById("qrCode"), {
      text: qrText,
      width: qrSize,
      height: qrSize,
      colorDark: qrColor,
      colorLight: bgColor,
      correctLevel: QRCode.CorrectLevel.H
    });

    // Show the download button after generating QR code
    document.getElementById("downloadBtn").style.display = 'block';
  }

  function downloadQRCode() {
    const qrCodeDiv = document.getElementById("qrCode");
    const canvas = qrCodeDiv.querySelector('canvas');
    if (!canvas) {
      alert("No QR code to download!");
      return;
    }
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'qr-code.png';
    link.click();
  }
