const emojis = ['💛', '🦜'];

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('floating-emoji');
    
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    
    // Boyutlar
    emoji.style.fontSize = Math.random() * 15 + 20 + 'px';
    
    // Süzülme hızı
    emoji.style.animationDuration = Math.random() * 5 + 7 + 's';
    
    document.body.appendChild(emoji);
    
    setTimeout(() => {
        emoji.remove();
    }, 12000);
}

// Her 600 milisaniyede bir tane uçur
setInterval(createEmoji, 600);
