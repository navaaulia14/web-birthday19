document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openBtn");
    const hero = document.getElementById("hero");
    const mainContent = document.getElementById("mainContent");
    const typingText = document.getElementById("typingText");

    const messageContent = "TODAY IS UR DAY! seneng i still get to say this, even lewat codingan hehe. Happy 19th🩶 Semoga perkuliahannya lancar terus, less stress less overthinking (apalagi dari lapraknya itu..). Proud of u for surviving everything this far fr, hope being 19 feels a little kinder to u :). Go easy on urself through college, okay?";

    // ===== Background Music Setup =====
    const bgMusic = new Audio("wave to earth - love. (Official Lyric Video) [Q49pnA4jsp8].mp3");
    bgMusic.loop = true;
    bgMusic.volume = 0;

    // Create floating mute/unmute toggle button
    const muteBtn = document.createElement("button");
    muteBtn.id = "muteToggle";
    muteBtn.innerHTML = "🔊";
    muteBtn.title = "Mute / Unmute";
    muteBtn.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: none;
        background: rgba(26, 26, 46, 0.85);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        color: white;
        font-size: 1.3rem;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(0,0,0,0.25);
        transition: transform 0.3s ease, opacity 0.3s ease;
        opacity: 0;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    document.body.appendChild(muteBtn);

    let isMuted = false;
    muteBtn.addEventListener("click", () => {
        isMuted = !isMuted;
        bgMusic.muted = isMuted;
        muteBtn.innerHTML = isMuted ? "🔇" : "🔊";
        muteBtn.style.transform = "scale(0.85)";
        setTimeout(() => { muteBtn.style.transform = "scale(1)"; }, 150);
    });

    // Fade-in volume gradually
    function fadeInMusic() {
        bgMusic.volume = 0;
        bgMusic.play().catch(() => {});
        const fadeInterval = setInterval(() => {
            if (bgMusic.volume < 0.6) {
                bgMusic.volume = Math.min(bgMusic.volume + 0.02, 0.6);
            } else {
                clearInterval(fadeInterval);
            }
        }, 80);
    }

    // Show the mute button with animation
    function showMuteBtn() {
        muteBtn.style.opacity = "1";
        muteBtn.style.pointerEvents = "auto";
    }

    // 1. Tombol Klik — also starts background music
    openBtn.addEventListener("click", () => {
        hero.style.transform = "translateY(-100vh)";

        // Start music on user gesture (browser allows this)
        fadeInMusic();

        setTimeout(() => {
            hero.style.display = "none";
            mainContent.classList.remove("hidden");
            startTyping();
            initScrollReveal();
            showMuteBtn();
        }, 800);
    });

    // 2. Typing Effect Function
    function startTyping() {
        let i = 0;
        function type() {
            if (i < messageContent.length) {
                typingText.innerHTML += messageContent.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        type();
    }

    // 3. Scroll Reveal Logic
    function initScrollReveal() {
        const observerOptions = {
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        }, observerOptions);

        document.querySelectorAll(".scroll-reveal").forEach(el => {
            observer.observe(el);
        });
    }
});