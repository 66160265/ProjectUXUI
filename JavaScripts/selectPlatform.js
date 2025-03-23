function selectPlatform(button, platform) {
    document.querySelectorAll('.platform').forEach(div => {
        div.style.display = 'none';
    });

    document.getElementById(platform).style.display = 'grid';

    document.querySelectorAll('.platform-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    button.classList.add('active');
}

window.onload = function() {
    document.querySelector('.platform-btn.active').click();
};