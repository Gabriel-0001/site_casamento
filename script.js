function copyPixNumber() {
    // Seleciona o elemento que contém o número de telefone
    var pixNumberContainer = document.getElementById('pix-number-container');

    // Cria um elemento de input para armazenar temporariamente o número de telefone
    var tempInput = document.createElement('input');
    tempInput.value = pixNumberContainer.dataset.number; // Obtém o número de telefone do atributo data

    // Adiciona o elemento input à página, mas mantém invisível
    document.body.appendChild(tempInput);

    // Seleciona e copia o conteúdo do elemento input
    tempInput.select();
    document.execCommand('copy');

    // Remove o elemento input temporário da página
    document.body.removeChild(tempInput);

    // Feedback opcional, por exemplo, alerta ou mensagem na tela
    //alert('Número de PIX copiado com sucesso!');
}

function openLinkInNewTab(link) {
    window.open(link, '_blank');
}
function openGoogleMaps() {
    // Coordenadas do local (latitude e longitude)
    var latitude = "-19.833164496628036";
    var longitude = "-44.01139580364594";

    // Abre o Google Maps com as coordenadas do local
    window.open("https://www.google.com/maps?q=" + latitude + "," + longitude, '_blank');
}

// Função para inicializar a Geocodificação do Google Maps
function initMap() {
    // Geocodifica o endereço para obter as coordenadas
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': 'R. Niágara, 83 - Trevo, Belo Horizonte - MG, 31370-590' }, function (results, status) {
        if (status === 'OK') {
            // Obtém as coordenadas de latitude e longitude
            var location = results[0].geometry.location;
            var lat = location.lat();
            var lng = location.lng();

            // Atualiza a fonte da imagem com a miniatura do mapa
            var mapThumbnail = document.getElementById('map-thumbnail');
            mapThumbnail.src = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lng + '&zoom=15&size=380x235&markers=' + lat + ',' + lng;

        } else {
            console.error('Erro ao geocodificar o endereço:', status);
        }
    });
}

// Inicializa o mapa ao carregar a página
window.onload = function () {
    initMap();
};

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}