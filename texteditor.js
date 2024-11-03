    // Download as PNG using html2canvas
    document.getElementById('downloadPng102').addEventListener('click', function() {
        const editor = document.getElementById('editor102');

        html2canvas(editor).then(function(canvas) {
            const imgData = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = imgData;
            a.download = 'paymints_document.png';
            a.click();
        }).catch(function(error) {
            console.error('Error capturing the editor for PNG:', error);
        });
    });

    // Download as TXT
    document.getElementById('downloadTxt102').addEventListener('click', function() {
        const editorContent = document.getElementById('editor102').innerText;
        const blob = new Blob([editorContent], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'paymints_document.txt';
        a.click();
    });
