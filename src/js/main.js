// home title slide up
if (window.innerWidth >= 768) { 
    const covers = document.querySelectorAll(".project-cover");
    const title = document.querySelectorAll(".project-title");
    for (let i = 0; i < covers.length; i++) {
        covers[i].addEventListener('mouseover', () => {
            title[i].classList.add('fadeUp');
        })
        covers[i].addEventListener('mouseleave', () => {
            title[i].classList.remove('fadeUp');
        })
        covers[i].addEventListener('mousemove', function(e) {
            let x = e.clientX;
            let y = e.clientY;
            title[i].style.left = x + 'px';
            title[i].style.top = y + 'px';
        })
    }
}

// nav dropdown
const muluBtn = document.getElementById('muluBtn');
muluBtn.addEventListener("click", e => {
    document.getElementById('navLinks').classList.toggle('active');
})

// naenae
const naenaeBtn = document.getElementById('naenae-btn');
const meNaenae = document.getElementById('meNae');
const meWhip = document.getElementById('meWhip');
var numClicks = 0;


function naeNae() {
    document.getElementById('meStand').style.opacity = 0;
    naenaeBtn.innerHTML = "Whip & Nae Nae";
    numClicks++;
    if (numClicks % 5 == 2 || numClicks % 5 == 0) {
        meNaenae.style.opacity = 1; 
        meWhip.style.opacity = 0;
    } else {
        if (numClicks % 5 == 4){
            meWhip.classList.add('flipped');
        } else {
            meWhip.classList.remove('flipped');
        }
        meNaenae.style.opacity = 0;
        meWhip.style.opacity = 1;
    }
}

// project img on top
function changeImgOnTop(element) {
    element.classList.toggle('onTop');
    document.querySelectorAll('.project-img.onTop').forEach(img => {
        if (img === element) return;
        img.classList.remove('onTop'); 
    }) 
}


document.addEventListener('click', e => {
    let element = e.target;
    if (element.matches('.project-img')) {
        changeImgOnTop(element);
    }
})