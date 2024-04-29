function showDemoResult() {
    const input = document.getElementById('demo-input').value;
    const output = `AI-generated headline for "${input}": ${generateHeadline(input)}`;
    document.getElementById('demo-output').textContent = output;
}

function generateHeadline(topic) {
    // Placeholder for AI headline generation logic
    return `Discover the Secrets of ${topic} Today!`;
}
