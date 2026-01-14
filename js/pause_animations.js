let isPaused = false;

// Função para pausar as animações
function togglePause() {
    isPaused = !isPaused;
    const btn = document.getElementById('pauseBtn');
    const scene = document.querySelector('a-scene');

    if (scene.hasLoaded) {
        pauseAnimations();
    } else {
        scene.addEventListener('loaded', pauseAnimations);
    }

    function pauseAnimations() {
        const animations = document.querySelectorAll('[animation]');

        animations.forEach(el => {
            const anim = el.components.animation;

            if (anim) {
                if (isPaused) {
                    anim.pauseAnimation();
                    btn.innerHTML = '▶ Retomar';
                } else {
                    anim.resumeAnimation();
                    btn.innerHTML = '⏸ Pausar';
                }
            }
        });
    }
}