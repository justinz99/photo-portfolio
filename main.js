if (window.innerWidth >= 768) { //cannot constantly update viewport

    const imgs = document.querySelectorAll(".project-cover");
    const title = document.querySelectorAll(".work-title");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('mouseover', () => {
            title[i].classList.toggle('fadeUp');
            console.log(title[i].classList);
        })

        imgs[i].addEventListener('mouseleave', () => {
            title[i].classList.toggle('fadeUp');
        })
    }
}

document.addEventListener("click", e => {
    const ismuluBtn = (e.target.matches(".mulu-btn"));
    let dropdown = document.getElementById("navLinks");
    if (ismuluBtn) {                                                        // open nav if clicked on button
        dropdown.classList.toggle("active");
    }
    if (!ismuluBtn && e.target.classList.contains(".dropdown")) {           // ignore if clicked in nav
        return;
    } 
});

const naenaeBtn = document.getElementById('naenae-btn');
const meNaenae = document.getElementById('meNae');
const meWhip = document.getElementById('meWhip');
var numClicks = 0;
var naenaeCount = 0;

function naeNae() {
    document.getElementById('meStand').style.opacity = 0;
    naenaeBtn.innerHTML = "Whip & Nae Nae";
    numClicks++;
    if (numClicks % 5 == 2 || numClicks % 5 == 0) {
        meNaenae.style.opacity = 1; 
        meWhip.style.opacity = 0;
        naenaeCount++;
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