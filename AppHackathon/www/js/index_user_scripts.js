/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Button */
    $(document).on("click", "#btn_logar", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
     
    $(document).on("click", "#btn_diabetes", function(evt)
    {
         /*global activate_page */
         activate_page("#diabetes"); 
         return false;
    });
     
    $(document).on("click", "#btn_cancer", function(evt)
    {
         /*global activate_page */
         activate_page("#cancer"); 
         return false;
    });
     
    $(document).on("click", "#btn_informacoes", function(evt)
    {
         /*global activate_page */
         activate_subpage("#page_100_61"); 
         return false;
    });
     
    $(document).on("click", "#btn_recomendacoes", function(evt)
    {
         /*global activate_page */
         activate_subpage("#recomendacoes"); 
         return false;
    });
     
    $(document).on("click", "#btn_noticias", function(evt)
    {
         /*global activate_page */
         activate_subpage("#noticias"); 
         return false;
    });
     
    $(document).on("click", "#btn_voltar", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
     
    $(document).on("click", "#btn_voltar2", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
    $(document).on("click", "#btn_informacoes2", function(evt)
    {
         /*global activate_page */
         activate_subpage("#page_101_93"); 
         return false;
    });
    
    $(document).on("click", "#btn_recomendacoes2", function(evt)
    {
         /*global activate_page */
         activate_subpage("#recomendacoes2"); 
         return false;
    });
     
    $(document).on("click", "#btn_noticias2", function(evt)
    {
         /*global activate_page */
         activate_subpage("#noticias2"); 
         return false;
    });
     
    $(document).on("click", "#btn_receitas", function(evt)
    {
         /*global activate_page */
         activate_subpage("#receitas"); 
         return false;
    });
     
    $(document).on("click", "#btn_alimentacao", function(evt)
    {
         /*global activate_page */
         activate_subpage("#alimentacao"); 
         return false;
    });
     
    $(document).on("click", "#btn_sintomas", function(evt)
    {
         /*global activate_page */
         activate_subpage("#sintomas"); 
         return false;
    });
     
    $(document).on("click", "#btn_prevencao", function(evt)
    {
         /*global activate_page */
         activate_subpage("#prevencao"); 
         return false;
    });
     
    $(document).on("click", "#btn_prevencao", function(evt)
    {
         /*global activate_page */
         activate_subpage("#prevencao"); 
         return false;
    });
     
    $(document).on("click", "#btn_causas", function(evt)
    {
         /*global activate_page */
         activate_subpage("#causas"); 
         return false;
    });
     
    $(document).on("click", "#btn_causas", function(evt)
    {
         /*global activate_page */
         activate_subpage("#causas"); 
         return false;
    });
     
    $(document).on("click", "#btn_tratamentos", function(evt)
    {
         /*global activate_page */
         activate_subpage("#tratamentos"); 
         return false;
    });
     
    $(document).on("click", "#btn_consequencias", function(evt)
    {
         /*global activate_page */
         activate_subpage("#consequencias"); 
         return false;
    });
     
    $(document).on("click", "#btn_maps", function(evt)
    {
         /*global activate_page */
         activate_subpage("#page_94_59"); 
         return false;
    });
     
    $(document).on("click", "#btn_info", function(evt)
    {
         /*global activate_page */
         activate_subpage("#informacoes"); 
         return false;
    });
     
    $(document).on("click", "#btn_1", function(evt)
    {
         /*global activate_page */
         activate_subpage("#detalhes");
         $('#preparo').html("1 - Bata os ovos na batedeira por 10 minutos ou até obter um creme branco e espesso <br>" +
                            "2 - Enquanto o creme está sendo batido, comece a derreter o chocolate <br>" +
                            "3 - Pegue dois recipientes (um maior e outro menor) para o banho-maria <br>" +
                            "4 - De preferência, escolha dois recipientes que se encaixem perfeitamente um sobre o outro <br>" +
                            "5 - Coloque o chocolate picado dentro da tigela sem água e coloque água dentro da segunda tigela, leve ao fogo baixo e cozinhe em banho-maria – o segredo é não deixar que a água encoste no fundo da primeira tigela, que está com o chocolate, e também que o encaixe dos recipientes seja perfeito, evitando o vazamento de vapor <br>" +
                            "6 - Mexa o chocolate com uma espátula até derreter e desligue o fogo antes que a água do banho-maria ferva <br>" +
                            "7 - Misture o chocolate no creme branco <br>" +
                            "8 - Acrescente a essência de baunilha e mexa delicadamente <br>" +
                            "9 - Peneire a farinha e o leite em pó desnatado e acrescente no creme, juntamente com o adoçante e misture <br>" +
                            "10 - Unte as forminhas individuais com o óleo e polvilhe com o achocolatado diet <br>" +
                            "11 - Acrescente a massa em cada forminha e cubra com filme plástico <br>" +
                            "12 - Leve à geladeira por no mínimo 6 horas <br>" +
                            "13 - Ligue o forno em temperatura média (180ºC) <br>" +
                            "14 - Como este bolinho precisa do tempo exato para ficar na consistência correta, assado por fora e derretido por dentro, aconselhamos a assar, pelo menos os primeiros, individualmente, para verificar o tempo exato de seu forno <br>" +
                            "15 - Leve o bolinho ao forno preaquecido e deixe assar por cerca de 6 minutos <br>" +
                            "16 - Retire o bolinho do forno e coloque a forminha num recipiente com água fria <br>" +
                            "17 - Não deixe que a água caia dentro da forminha <br>" +
                            "18 - Passe uma faca para que o bolinho se desprenda da borda <br>" +
                            "19 - Vire sobre um prato e sirva a seguir <br>");
         return false;
    });
    
        /* button  capturar */
    $(document).on("click", ".uib_w_17", function(evt)
    {
        // Resultado para quando conseguir capturar a posição GPS...
        var fnCapturar = function(position){
            
            // Gravar dados da posição capturada em uma variável...
            var coords = position.coords;
            
            // Exibir dados das coordenadas capturadas...
            //navigator.notification.alert(JSON.stringify(coords),"COORDENADAS");
            
            // GOOGLE MAPS: Mostrar marcador no mapa...
            var image = 'images/marker.png';
            var map = new google.maps.Map(
                            document.getElementById("map"), 
                            { 
                              center : new google.maps.LatLng( coords.latitude, coords.longitude ), 
                              zoom : 5, 
                              mapTypeId : google.maps.MapTypeId.ROADMAP
                            }
                    );
            ListaEmpresas(map)
            var marker = new google.maps.Marker({
                                title : "VOCÊ ESTÁ AQUI: "+coords.latitude+", "+coords.longitude,
                                position : new google.maps.LatLng(coords.latitude, coords.longitude),
                                icon : image
                         });
            marker.setMap(map);
            
        }
        
        // Caso falhe na captura, faça isso...
        var fnFalhar = function(error){
            
            navigator.notification.alert("Erro ao capturar posição: "+error.message, "INFORMAÇÃO");
            
        }
        
        // Opções para acessar o GPS...
        var opcoes = { maximumAge: 3000, timeout: 100000, enableHighAccuracy: true };
        
        // CAPTURAR POSIÇÃO: Chamada a API de Geolocalização (GPS) via Apache Cordova
        navigator.geolocation.getCurrentPosition(fnCapturar, fnFalhar, opcoes);
        
    });
     
     var beaches = [
      ['Bondi Beach', 40.6725096, -73.9167359, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];

    function setMarkers(map) {
      for (var i = 0; i < beaches.length; i++) {
        var beach = beaches[i];
        var marker = new google.maps.Marker({
          position: {lat: beach[1], lng: beach[2]},
          map: map,
          title: beach[0],
          zIndex: beach[3]
        });
      }
    }
   
     function ListaEmpresas(map){
        setMarkers(map);
        var url = 'http://jehackathon2016.esy.es/webservice/';
        $.ajax({
           method: 'GET', 
            url: url+'webservice.php',
            dataType: 'json',
            data: 'acao=select',
            beforeSend: function(){
                //$('#titulo-tarefa').html('Carregando...');
            },
            success: function(data){
                $.each(data, function(i, ret){
                        //setMarkers(map);
                    });
            }
        });
    }
     
    
}
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
