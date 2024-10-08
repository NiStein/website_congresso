// Seleciona todos os containers de curso
const courses = document.querySelectorAll(".course");

// Adiciona um evento de clique para cada curso
courses.forEach(course => {
    course.addEventListener("click", function () {
        // Remove a classe "selected" de todos os cursos
        courses.forEach(c => c.classList.remove("selected"));

        // Adiciona a classe "selected" apenas ao curso clicado
        this.classList.add("selected");
    });
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Esconde todo o conteúdo das tabs
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe "active" de todos os links
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostra a tab ativa e adiciona a classe "active" ao link clicado
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
};

function atualizarValoresIngressos() {
    const dataAtual = new Date();

    const lote1Fim = new Date('2024-10-31');
    const lote2Inicio = new Date('2024-11-01');
    const lote2Fim = new Date('2024-12-31');
    const lote3Inicio = new Date('2025-01-01');
    const lote3Fim = new Date('2025-02-28');
    const lote4Inicio = new Date('2025-03-01');
    const lote4Fim = new Date('2025-05-25')

    const estudanteBox = document.querySelector('.card.studant p');
    const demaisBox = document.querySelector('.card.entire p');


    if (dataAtual <= lote1Fim) {
        estudanteBox.textContent = 'R$ 130,00';
        demaisBox.textContent = 'R$ 250,00';
    } else if (dataAtual >= lote2Inicio && dataAtual <= lote2Fim) {
        estudanteBox.textContent = 'R$ 200,00';
        demaisBox.textContent = 'R$ 300,00';
    } else if (dataAtual >= lote3Inicio && dataAtual <= lote3Fim) {
        estudanteBox.textContent = 'R$ 250,00';
        demaisBox.textContent = 'R$ 350,00';
    } else if (dataAtual >= lote4Inicio && dataAtual <= lote4Fim) {
        estudanteBox.textContent = 'R$ 300,00'
        demaisBox.textContent = 'R$ 400,00'
    } else if (dataAtual > lote4Fim) {
        estudanteBox.textContent = 'Inscrições Encerradas'
        demaisBox.textContent = 'Inscrições Encerradas'
    }
};

function atualizarValoresIngressosOficinas() {
    const dataAtual = new Date();

    const lote1Fim = new Date('2024-10-31');
    const lote2Inicio = new Date('2024-11-01');
    const lote2Fim = new Date('2024-12-31');
    const lote3Inicio = new Date('2025-01-01');
    const lote3Fim = new Date('2025-02-28');
    const lote4Inicio = new Date('2025-03-01');
    const lote4Fim = new Date('2025-05-25')

    const estudanteBox = document.querySelector('.card.studantofice p');
    const demaisBox = document.querySelector('.card.entireofice p');


    if (dataAtual <= lote1Fim) {
        estudanteBox.textContent = 'R$ 30,00';
        demaisBox.textContent = 'R$ 50,00';
    } else if (dataAtual >= lote2Inicio && dataAtual <= lote2Fim) {
        estudanteBox.textContent = 'R$ 40,00';
        demaisBox.textContent = 'R$ 60,00';
    } else if (dataAtual >= lote3Inicio && dataAtual <= lote3Fim) {
        estudanteBox.textContent = 'R$ 50,00';
        demaisBox.textContent = 'R$ 70,00';
    } else if (dataAtual >= lote4Inicio && dataAtual <= lote4Fim) {
        estudanteBox.textContent = 'R$ 60,00'
        demaisBox.textContent = 'R$ 80,00'
    } else if (dataAtual > lote4Fim) {
        estudanteBox.textContent = 'Inscrições Encerradas'
        demaisBox.textContent = 'Inscrições Encerradas'
    }
};

function atualizarValoresTrabalhos() {
    const dataAtual = new Date();

    const lote1Fim = new Date('2024-10-31');
    const lote2Inicio = new Date('2024-11-01');
    const lote2Fim = new Date('2024-12-31');
    const lote3Inicio = new Date('2025-01-01');
    const lote3Fim = new Date('2025-02-28');
    const lote4Inicio = new Date('2025-03-01');
    const lote4Fim = new Date('2025-04-27')

    const unicaBox = document.querySelector('.card.unica p');


    if (dataAtual <= lote1Fim) {
        unicaBox.textContent = 'R$ 125,00';
    } else if (dataAtual >= lote2Inicio && dataAtual <= lote2Fim) {
        unicaBox.textContent = 'R$ 150,00';
    } else if (dataAtual >= lote3Inicio && dataAtual <= lote3Fim) {
        unicaBox.textContent = 'R$ 175,00';
    } else if (dataAtual >= lote4Inicio && dataAtual <= lote4Fim) {
        unicaBox.textContent = 'R$ 200,00'
    } else if (dataAtual > lote4Fim) {
        unicaBox.textContent = 'Inscrições Encerradas'
    }
};

function countdown() {
    var SEC = 1000;
    var MIN = 60 * SEC;
    var HR = 60 * MIN;
    var DAY = 24 * HR;
    var interval;

    var dayElement = document.querySelector("#rd-counter-lzsxjnwr .counter-days .value");
    var hourElement = document.querySelector("#rd-counter-lzsxjnwr .counter-hours .value");
    var minuteElement = document.querySelector("#rd-counter-lzsxjnwr .counter-minutes .value");
    var secondElement = document.querySelector("#rd-counter-lzsxjnwr .counter-seconds .value");

    initCountdown()

    function initCountdown() {
        var countdownDate = "Tue May 27 2025 08:00:00 GMT-0300 (Hora padrão de Brasília)"

        interval = setInterval(() => updateCounter(new Date(countdownDate)), 1000);
    }

    function updateCounter(dateTarget) {
        var countdown = calculateTimeDifference(dateTarget);

        dayElement.innerHTML = countdown.days;
        hourElement.innerHTML = countdown.hours;
        minuteElement.innerHTML = countdown.minutes;
        secondElement.innerHTML = countdown.seconds;
    };

    function calculateTimeDifference(dateTarget) {
        var currentTime = new Date().getTime();
        var difference = dateTarget.getTime() - currentTime;

        if (difference < 0) {
            clearInterval(interval)
            return { days: '00', hours: '00', minutes: '00', seconds: '00' };
        }

        var days = `${Math.floor(difference / DAY)}`.padStart(2, '0');
        var hours = `${Math.floor((difference % DAY) / HR)}`.padStart(2, '0');
        var minutes = `${Math.floor((difference % HR) / MIN)}`.padStart(2, '0');
        var seconds = `${Math.floor((difference % MIN) / SEC)}`.padStart(2, '0');

        return { days: days, hours: hours, minutes: minutes, seconds: seconds };
    };
};

// Seleciona automaticamente o primeiro curso quando a página carrega
window.addEventListener('DOMContentLoaded', (event) => {
    if (courses.length > 0) {
        // Adiciona a classe 'selected' ao primeiro curso
        courses[0].classList.add('selected');
    }

    // Abre a primeira tab (EMENTA) por padrão e adiciona a classe "active" ao primeiro link
    document.getElementById("defaultOpen").click();
    atualizarValoresIngressos();
    atualizarValoresIngressosOficinas();
    atualizarValoresTrabalhos();
    countdown();
});