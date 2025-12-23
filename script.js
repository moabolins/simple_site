document.getElementById('clickBtn').addEventListener('click', function() {
    const messages = [
        'Hello there!',
        'Thanks for clicking!',
        'You found the button!',
        'Nice click!'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').textContent = randomMessage;
});
