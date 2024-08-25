document.getElementById('downloadLink').addEventListener('click', function(event) {
    event.preventDefault();
    const pdfUrl = 'https://github.com/francoleon08/francoleon08/raw/main/CV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV_Franco_Leon.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});