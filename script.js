
const model = document.querySelector('.taco3d');
const model1 = document.querySelector('#taco3d1');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Ubah kamera orbit berdasarkan scroll
    const theta = scrollY * 0.002;
    const theta1 = -scrollY * 0.004;
    const phi = 70; // sudut vertikal tetap
    const radius = 100; // jarak kamera

    model.cameraOrbit = `${theta}rad ${phi}deg ${radius}m`;
    model1.cameraOrbit = `${theta1}rad ${phi}deg ${radius}m`;
});