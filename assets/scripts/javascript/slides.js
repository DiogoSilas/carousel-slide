(function() {
    const radioButtons = document.querySelectorAll('input[name="btn-carousel"]');
    let cont = 0;
    const totalImages = 4;
    const intervalTime = 4000;
    let intervalId;

    function setCheckedRadio(index) {
        radioButtons[index].checked = true;
    }

    function proximaImg() {
        cont = (cont + 1) % totalImages;
        setCheckedRadio(cont);
    }

    function iniciarIntervalo() {
        if (!intervalId) {
            intervalId = setInterval(proximaImg, intervalTime);
        }
    }

    function pararIntervalo() {
        clearInterval(intervalId);
        intervalId = null;
    }

    //Evento para iniciar o intervalo quando o botão manual for clicado
    radioButtons.forEach(btn => {
        btn.addEventListener('click', pararIntervalo);
    });

    // Inicialização
    setCheckedRadio(cont);
    iniciarIntervalo();
})();