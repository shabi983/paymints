  function checkDevice() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const desktopContent = document.querySelector('.fordesktop983');
    const mobileContent = document.querySelector('.formobile983');

    if (isMobile) {
      // Hide desktop content and show mobile message
      desktopContent.style.display = 'none';
      mobileContent.style.display = 'block';
    } else {
      // Show desktop content and hide mobile message
      desktopContent.style.display = 'block';
      mobileContent.style.display = 'none';
    }
  }

  // Run checkDevice when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", checkDevice);
