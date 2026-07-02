document.addEventListener("DOMContentLoaded", () => {

    // Mobile Menu

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
        });

    }

    // Countdown

    const target = new Date();
    target.setHours(target.getHours() + 12);

    function updateCountdown() {

        const now = new Date();

        const diff = target - now;

        if (diff <= 0) return;

        const hrs = Math.floor(diff / (1000 * 60 * 60));
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        document.getElementById("hours").textContent =
            String(hrs).padStart(2, "0");

        document.getElementById("minutes").textContent =
            String(mins).padStart(2, "0");

        document.getElementById("seconds").textContent =
            String(secs).padStart(2, "0");

    }

    updateCountdown();

    setInterval(updateCountdown, 1000);

});