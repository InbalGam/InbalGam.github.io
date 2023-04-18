function showFunction() {
    let dropy = document.getElementById('myDropdown');
    if (dropy.style.display !== 'block') {
        dropy.style.display = 'block';
    } else {
        dropy.style.display = 'none';
    }
}

function close(event) {
    let dropy = document.getElementById('myDropdown');
    if (!event.target.classList.contains('dropbtn')) {
        if (dropy.style.display !== 'none') {
            dropy.style.display = 'none';
        }
    }
}

document.onclick = close;
