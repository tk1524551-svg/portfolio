/* =========================================================
   PORTFOLIO.JS
   MD.MOHTASHIM
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       EMAIL
       ===================================================== */

    const EMAIL = "tk1524551@gmail.com";

    document
        .querySelectorAll("[data-email], .email-link")
        .forEach(link => {
            link.href = `mailto:${EMAIL}`;
        });


    /* =====================================================
       LOADER
       ===================================================== */

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {
                loader.classList.add("hidden");
            }

        }, 700);

    });


    /* =====================================================
       CUSTOM CURSOR
       ===================================================== */

    const cursor =
        document.querySelector(".cursor");

    const cursorRing =
        document.querySelector(".cursor-ring");

    if (cursor && cursorRing) {

        let mouseX = 0;
        let mouseY = 0;

        let ringX = 0;
        let ringY = 0;

        document.addEventListener("mousemove", e => {

            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;

        });

        function cursorAnimation() {

            ringX +=
                (mouseX - ringX) * 0.15;

            ringY +=
                (mouseY - ringY) * 0.15;

            cursorRing.style.left =
                `${ringX}px`;

            cursorRing.style.top =
                `${ringY}px`;

            requestAnimationFrame(
                cursorAnimation
            );
        }

        cursorAnimation();


        document
            .querySelectorAll(
                "a, button, .project-card, .skill-card"
            )
            .forEach(element => {

                element.addEventListener(
                    "mouseenter",
                    () => {
                        cursorRing.classList.add("hover");
                    }
                );

                element.addEventListener(
                    "mouseleave",
                    () => {
                        cursorRing.classList.remove("hover");
                    }
                );

            });

    }


    /* =====================================================
       SCROLL PROGRESS
       ===================================================== */

    const progress =
        document.querySelector(".progress");

    function updateProgress() {

        if (!progress) return;

        const scrollTop =
            window.scrollY;

        const total =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            total > 0
                ? (scrollTop / total) * 100
                : 0;

        progress.style.width =
            `${percentage}%`;
    }

    window.addEventListener(
        "scroll",
        updateProgress
    );

    updateProgress();


    /* =====================================================
       NAVBAR
       ===================================================== */

    const navbar =
        document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 50
        );

    });


    /* =====================================================
       REVEAL ANIMATION
       ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       SMOOTH NAVIGATION
       ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                e => {

                    const id =
                        link.getAttribute("href");

                    if (!id || id === "#") {
                        return;
                    }

                    const target =
                        document.querySelector(id);

                    if (!target) return;

                    e.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       3D CARD TILT
       ===================================================== */

    document
        .querySelectorAll(
            ".project-card, .skill-card"
        )
        .forEach(card => {

            card.addEventListener(
                "mousemove",
                e => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        e.clientX - rect.left;

                    const y =
                        e.clientY - rect.top;

                    const centerX =
                        rect.width / 2;

                    const centerY =
                        rect.height / 2;

                    const rotateX =
                        ((y - centerY) / centerY) * -5;

                    const rotateY =
                        ((x - centerX) / centerX) * 5;

                    card.style.transform =
                        `perspective(1000px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-5px)`;
                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
                }
            );

        });


    /* =====================================================
       HERO PARALLAX
       ===================================================== */

    const hero =
        document.querySelector(".hero");

    const avatar =
        document.querySelector(".ai-avatar");

    if (hero && avatar) {

        hero.addEventListener(
            "mousemove",
            e => {

                const x =
                    (e.clientX /
                        window.innerWidth - 0.5) * 15;

                const y =
                    (e.clientY /
                        window.innerHeight - 0.5) * 15;

                avatar.style.transform =
                    `translate(${x}px, ${y}px)`;
            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                avatar.style.transform =
                    "translate(0,0)";
            }
        );

    }


    /* =====================================================
       TYPING EFFECT
       ===================================================== */

    const typing =
        document.querySelector(".typing-text");

    if (typing) {

        const words = [
            "AI & ML Student",
            "Creative Developer",
            "Web Builder",
            "Problem Solver",
            "Future AI Engineer"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;


        function typeEffect() {

            const word =
                words[wordIndex];

            if (!deleting) {

                typing.textContent =
                    word.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;

                if (charIndex === word.length) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1400
                    );

                    return;
                }

            } else {

                typing.textContent =
                    word.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1)
                        % words.length;
                }
            }

            setTimeout(
                typeEffect,
                deleting ? 45 : 90
            );
        }

        typeEffect();
    }


    /* =====================================================
       COUNTERS
       ===================================================== */

    document
        .querySelectorAll("[data-count]")
        .forEach(counter => {

            const value =
                counter.dataset.count;

            if (value === "∞") {

                counter.textContent = "∞";

                return;
            }

            const target =
                Number(value);

            let current = 0;

            const increment =
                target / 60;


            function countUp() {

                current += increment;

                if (current < target) {

                    counter.textContent =
                        Math.floor(current);

                    requestAnimationFrame(
                        countUp
                    );

                } else {

                    counter.textContent =
                        target;
                }
            }


            const observer =
                new IntersectionObserver(
                    entries => {

                        if (
                            entries[0]
                                .isIntersecting
                        ) {

                            countUp();

                            observer.disconnect();
                        }

                    }
                );

            observer.observe(counter);

        });


    /* =====================================================
       MAGNETIC BUTTONS
       ===================================================== */

    document
        .querySelectorAll(".magnetic")
        .forEach(button => {

            button.addEventListener(
                "mousemove",
                e => {

                    const rect =
                        button.getBoundingClientRect();

                    const x =
                        e.clientX -
                        rect.left -
                        rect.width / 2;

                    const y =
                        e.clientY -
                        rect.top -
                        rect.height / 2;

                    button.style.transform =
                        `translate(
                            ${x * 0.15}px,
                            ${y * 0.15}px
                        )`;
                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform =
                        "translate(0,0)";
                }
            );

        });


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );

    window.addEventListener(
        "scroll",
        () => {

            let current = "";

            sections.forEach(section => {

                const top =
                    section.offsetTop - 160;

                const bottom =
                    top + section.offsetHeight;

                if (
                    window.scrollY >= top &&
                    window.scrollY < bottom
                ) {

                    current =
                        section.id;
                }

            });


            navLinks.forEach(link => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute("href") ===
                    `#${current}`
                ) {

                    link.classList.add(
                        "active"
                    );
                }

            });

        }
    );


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const year =
        document.querySelector(
            "#currentYear"
        );

    if (year) {

        year.textContent =
            new Date().getFullYear();
    }


    /* =====================================================
       AI AVATAR SPEECH
       ===================================================== */

    const aiAvatar =
        document.querySelector(
            "#aiAvatar"
        );

    const speakButton =
        document.querySelector(
            "#speakIntro"
        );

    const stopButton =
        document.querySelector(
            "#stopIntro"
        );

    const voiceStatus =
        document.querySelector(
            "#voiceStatus"
        );

    const mouth =
        document.querySelector(
            ".avatar-mouth"
        );


    /*
       This is the introduction
       spoken by the AI avatar.
    */

    const introduction =

        "Hello, I'm Mohtashim. " +

        "I'm currently a first-year " +

        "B.Tech student specializing " +

        "in Artificial Intelligence " +

        "and Machine Learning. " +

        "I'm passionate about technology, " +

        "creative development, and building " +

        "practical solutions through code. " +

        "I enjoy creating websites, learning " +

        "new technologies and turning ideas " +

        "into real digital experiences. " +

        "Welcome to my portfolio. " +

        "Feel free to explore my projects " +

        "and learn more about me.";


    let voices = [];


    /* Load available browser voices */

    function loadVoices() {

        if (
            !("speechSynthesis" in window)
        ) {
            return;
        }

        voices =
            window.speechSynthesis
                .getVoices();
    }


    if (
        "speechSynthesis" in window
    ) {

        loadVoices();

        window.speechSynthesis
            .addEventListener(
                "voiceschanged",
                loadVoices
            );
    }


    /* Find English voice */

    function getEnglishVoice() {

        return (

            voices.find(
                voice =>
                    voice.lang
                        .toLowerCase() ===
                    "en-in"
            ) ||

            voices.find(
                voice =>
                    voice.lang
                        .toLowerCase() ===
                    "en-gb"
            ) ||

            voices.find(
                voice =>
                    voice.lang
                        .toLowerCase() ===
                    "en-us"
            ) ||

            voices.find(
                voice =>
                    voice.lang
                        .toLowerCase()
                        .startsWith("en")
            ) ||

            null
        );
    }


    /* Start AI speaking */

    function speakIntroduction() {

        if (
            !("speechSynthesis" in window)
        ) {

            alert(
                "Your browser does not support Text-to-Speech."
            );

            return;
        }


        /* Stop previous speech */

        window.speechSynthesis.cancel();


        const speech =
            new SpeechSynthesisUtterance(
                introduction
            );


        speech.lang = "en-IN";

        speech.rate = 0.90;

        speech.pitch = 0.95;

        speech.volume = 1;


        const englishVoice =
            getEnglishVoice();


        if (englishVoice) {

            speech.voice =
                englishVoice;
        }


        /* Speaking UI */

        if (aiAvatar) {

            aiAvatar.classList.add(
                "speaking"
            );
        }


        if (mouth) {

            mouth.classList.add(
                "talking"
            );
        }


        if (voiceStatus) {

            voiceStatus.textContent =
                "● AI SPEAKING...";
        }


        speech.onstart = () => {

            if (voiceStatus) {

                voiceStatus.textContent =
                    "● AI SPEAKING...";
            }

        };


        speech.onend = () => {

            stopSpeakingUI();
        };


        speech.onerror = () => {

            stopSpeakingUI();
        };


        window.speechSynthesis
            .speak(speech);
    }


    /* Stop speaking */

    function stopSpeakingUI() {

        if (aiAvatar) {

            aiAvatar.classList.remove(
                "speaking"
            );
        }


        if (mouth) {

            mouth.classList.remove(
                "talking"
            );
        }


        if (voiceStatus) {

            voiceStatus.textContent =
                "AI READY";
        }
    }


    /* Speak button */

    if (speakButton) {

        speakButton.addEventListener(
            "click",
            speakIntroduction
        );
    }


    /* Stop button */

    if (stopButton) {

        stopButton.addEventListener(
            "click",
            () => {

                if (
                    "speechSynthesis"
                    in window
                ) {

                    window.speechSynthesis
                        .cancel();
                }

                stopSpeakingUI();
            }
        );
    }


    /* ESC = stop voice */

    document.addEventListener(
        "keydown",
        e => {

            if (e.key === "Escape") {

                if (
                    "speechSynthesis"
                    in window
                ) {

                    window.speechSynthesis
                        .cancel();
                }

                stopSpeakingUI();
            }

        }
    );


    /* =====================================================
       FINISHED
       ===================================================== */

    console.log(
        "%c MD.MOHTASHIM ",
        "background:#9b5cff;color:white;font-size:18px;font-weight:bold;padding:8px;"
    );

    console.log(
        "%c AI & ML Portfolio loaded successfully 🚀",
        "color:#00e5ff;font-size:13px;"
    );

});