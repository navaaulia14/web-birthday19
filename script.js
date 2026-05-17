document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openBtn");
    const hero = document.getElementById("hero");
    const mainContent = document.getElementById("mainContent");
    const typingText = document.getElementById("typingText");

    const messageContent = "TODAY IS UR DAY! seneng i still get to say this, even lewat codingan hehe. Happy 19th🩶 Semoga perkuliahannya lancar terus, less stress less overthinking (apalagi dari lapraknya itu..). Proud of u for surviving everything this far fr, hope being 19 feels a little kinder to u :). Go easy on urself through college, okay?";

    // 1. Tombol Klik
    openBtn.addEventListener("click", () => {
        hero.style.transform = "translateY(-100vh)";
        setTimeout(() => {
            hero.style.display = "none";
            mainContent.classList.remove("hidden");
            startTyping();
            initScrollReveal();
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