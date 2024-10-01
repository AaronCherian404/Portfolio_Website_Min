document.addEventListener('DOMContentLoaded', () => {
    const books = document.querySelectorAll('.book');

    books.forEach(book => {
        book.addEventListener('click', () => {
            const page = book.getAttribute('data-page');
            animateBookOpen(book);
            setTimeout(() => {
                navigateToPage(page);
            }, 500);
        });
    });

    function animateBookOpen(book) {
        book.style.transform = 'translateY(-30px) rotate(90deg) translateX(60px)';
        book.style.transition = 'transform 0.5s ease';
        book.style.zIndex = '1000';
    }

    function navigateToPage(page) {
        // Replace this with actual navigation logic
        console.log(`Navigating to ${page}`);
        // Example: window.location.href = `${page}.html`;
    }
});