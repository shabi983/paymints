    // Generate unique invoice ID
    document.getElementById('invoice-id983').textContent = 'INV-' + Math.floor(Math.random() * 1000000);

    // Logo upload functionality
    document.getElementById('logo-upload983').addEventListener('change', function (e) {
        const reader = new FileReader();
        reader.onload = function () {
            document.getElementById('logo983').src = reader.result;
            document.getElementById('logo983').style.display = 'block';
            document.getElementById('logo-upload983').style.display = 'none';
            document.getElementById('reset-logo983').style.display = 'inline-block';
        }
        reader.readAsDataURL(e.target.files[0]);
    });

    // Reset logo functionality
    function resetLogo() {
        document.getElementById('logo-upload983').value = '';
        document.getElementById('logo983').style.display = 'none';
        document.getElementById('reset-logo983').style.display = 'none';
        document.getElementById('logo-upload983').style.display = 'block';
    }

    // Add and remove rows
    function addRow() {
        const table = document.querySelector('#table983 tbody');
        const newRow = table.insertRow();
        newRow.innerHTML = `
<td><input type="text" placeholder="Service Description"></td>
                <td><input type="number" class="price983" placeholder="0.00" onkeydown="if(event.key==='-'){event.preventDefault();}" onpaste="let pasteData = event.clipboardData.getData('text'); if(pasteData){pasteData.replace(/[^0-9]*/g,'');}" oninput="calculateAmount(this)"></td>
                <td><input type="number" class="quantity983" onkeydown="if(event.key==='.'){event.preventDefault();}" onpaste="let pasteData = event.clipboardData.getData('text'); if(pasteData){pasteData.replace(/[^0-9]*/g,'');}" placeholder="00" oninput="calculateAmount(this)"></td>
                <td><input type="number" class="amount983" placeholder="0.00" readonly></td>
                <td class="hidefrommedia"><button id="remove-line983" onclick="removeRow(this)"><i class="fa fa-trash" aria-hidden="true"></i>
</button></td>
        `;
    }

    function removeRow(button) {
        button.closest('tr').remove();
        updateTotal();
    }

    // Update subtotal, discount, tax, and total
    function calculateAmount(input) {
        const row = input.closest('tr');
        const price = parseFloat(row.querySelector('.price983').value) || 0;
        const quantity = parseFloat(row.querySelector('.quantity983').value) || 1;
        const amount = row.querySelector('.amount983');
        amount.value = (price * quantity).toFixed(2);
        updateTotal();
    }

    function updateTotal() {
        let subtotal = 0;
        document.querySelectorAll('.amount983').forEach(input => {
            subtotal += parseFloat(input.value) || 0;
        });
        const discount = parseFloat(document.getElementById('discount983').value) || 0;
        const tax = parseFloat(document.getElementById('tax983').value) || 0;
        const total = subtotal - discount + (subtotal * tax / 100);
        document.getElementById('subtotal983').textContent = 'Subtotal: $' + subtotal.toFixed(2);
        document.getElementById('total983').textContent = 'Total: $' + total.toFixed(2);
    }



  // Updated PDF generation using html2canvas and jsPDF
     function downloadPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const invoiceElement = document.getElementById('invoice983');

        // Temporarily hide elements during PDF generation
        document.querySelectorAll('.hidefrommedia').forEach(el => el.style.display = 'none');

        html2canvas(invoiceElement, { scale: 2 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            
            doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            const invoiceID = document.getElementById('invoice-id983').textContent;
            doc.save(`${invoiceID}.pdf`);

            // Show hidden elements after generating PDF
            document.querySelectorAll('.hidefrommedia').forEach(el => el.style.display = 'table-cell');
        });
    }

     // Update table header color
    function updateTableHeaderColor() {
        const color = document.getElementById('header-color-picker').value;
        document.documentElement.style.setProperty('--header-bg-color', color);

        // Apply color directly to table headers
        document.querySelectorAll('#table983 th').forEach(th => {
            th.style.backgroundColor = color;
        });

    }


 // Update table text color
    function updateTableHeaderText() {
        const color = document.getElementById('text-color-picker').value;
        document.documentElement.style.setProperty('--header-txt-color', color);

        // Apply color directly to table headers text
        document.querySelectorAll('#table983 th').forEach(th => {
            th.style.color = color;
        });
    }



     // Set limit and 24-hour expiration time in milliseconds
    const clickLimit = 5;
    const oneDay = 24 * 60 * 60 * 1000;
    
    // Get current time
    const now = new Date().getTime();
    
    // Retrieve click count and last click time from localStorage
    let clickData = JSON.parse(localStorage.getItem("clickData")) || { count: 0, lastClickTime: 0 };
    
    // Check if 24 hours have passed since the last reset
    if (now - clickData.lastClickTime > oneDay) {
      clickData = { count: 0, lastClickTime: now };  // Reset counter and time
      localStorage.setItem("clickData", JSON.stringify(clickData));
    }
    
    // Function to handle button click
    function handleClick() {
      if (clickData.count < clickLimit) {
        clickData.count++;
        clickData.lastClickTime = now;
        localStorage.setItem("clickData", JSON.stringify(clickData));
        document.getElementById("invoice983").style.display = "block"; // Show div
      } else {
        // Show overlay message if limit is reached
        showOverlay();
      }
    }
    
    // Function to show overlay
    function showOverlay() {
      document.getElementById("overlay").style.display = "flex";
    }

    // Redirect to another page for upgrade
    function redirectToUpgrade() {
      window.location.href = "#"; // Replace with your actual upgrade page URL
    }
  
   // Redirect to another page for home
    function redirectToHome() {
      window.location.href = "https://paymints.blogspot.com"; // Replace with your actual home page URL
    }

    // Add click event listener to button
    document.getElementById("download-pdf983").addEventListener("click", handleClick);

    // Check initial load if limit is already reached
    if (clickData.count >= clickLimit) {
      showOverlay();
    } else {
      document.getElementById("invoice983").style.display = "block";
    }
