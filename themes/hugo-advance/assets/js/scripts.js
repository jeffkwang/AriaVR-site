document.addEventListener("DOMContentLoaded", function() {
    const averageWPM = 225;
    
    // Get the entire content of your blog post
    const content = document.body.innerText || document.body.textContent;
    
    const wordCount = content.split(/\s+/).length; // Count the number of words
    const readingTime = Math.ceil(wordCount / averageWPM);

    // Update the reading time in the HTML
    document.querySelector("#reading-time span").textContent = readingTime;
});