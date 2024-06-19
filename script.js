// Get DOM elements
const textArea = document.getElementById('area');
const charCount = document.getElementById('char');
const wordCount = document.getElementById('word');

// Debounce function to limit the rate of function execution
function debounce(func, delay) {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
}

// Function to count characters and words
function updateCounts() {
    const content = textArea.value.trim();

    // Update character count
    charCount.textContent = content.length;

    // Update word count
    const wordsArray = content.split(/\s+/).filter(word => word !== "");
    wordCount.textContent = wordsArray.length;
}

// Attach the debounced input event listener
textArea.addEventListener('input', debounce(updateCounts, 300));
