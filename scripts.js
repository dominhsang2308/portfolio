document.getElementById('contactCV').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'pdf/do-minh-sang_fresher_cv.pdf';
    link.download = 'dominhsangcv.pdf';
    link.click();
    link.remove();
});
