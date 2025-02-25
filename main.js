document.addEventListener('DOMContentLoaded', function () {
    // Select the elements you want to highlight.
    const highlightWords = document.querySelectorAll('strong'); // Example: highlight <strong> tags

    // Add a highlight class to each selected element.
    highlightWords.forEach(word => {
        word.classList.add('dynamic-highlight');
    });

    // You can add more complex logic here for dynamic highlighting based on user interaction or other criteria.

    // Example: Highlight words based on a search query (if you have search functionality)
    const searchQuery = new URLSearchParams(window.location.search).get('q');
    if (searchQuery) {
        let bodyText = document.body.innerHTML;
        let regex = new RegExp(searchQuery, "gi");
        bodyText = bodyText.replace(regex, "<span class='search-highlight'>$&</span>");
        document.body.innerHTML = bodyText;
    }

});