function genera_tabla() {
  const persona=[{
    Articulo_id: "1051",
    Asignado: true,
    Status: 2,
    correccion: true,
    revision: true,
    edicion: true,
    maquetacion: true,
    linea_tematica: 2,
    calidad: 1,
    html: true,
    epub: true,
    correccion_doc: true,
    publicado:true
    },
    {
      Articulo_id: "1031",
      Asignado: true,
      Status: 0,
      linea_tematica: 0,
      correccion: false,
      revision: false,
      edicion: false,
      maquetacion: false,
      calidad: 0,
      html: false,
      epub: false,
      correccion_doc: false,
      publicado:false
      },
  ]

    // Obtener la referencia del elemento body
    const titulos_tabla=["Articulo id","pre_dictamen","Reporte","Authenticate","Reporte","Linea tematica","Calidad","Status"];
    const titulos_principales=["","Predictamen","Authenticate","Dictamen editorial"]
    var body = document.getElementsByTagName("body")[0];
    var div   = document.createElement("div");
    var div2   = document.createElement("div");
    var div3   = document.createElement("div");
   
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
     
    var tblHead = document.createElement("thead");
         // Crea los titulos
    for (var i = 0; i < 1; i++) {

      var titulo = document.createElement("tr");
      var celdatitulo = document.createElement("th");
      var textoCeldatitulo = document.createTextNode(titulos_principales[0]);
      celdatitulo.appendChild(textoCeldatitulo);
      titulo.appendChild(celdatitulo);
      celdatitulo.setAttribute("scope", "col");
      celdatitulo.setAttribute("style","text-align:center")
          // agrega la hilera al final de la tabla (al final del elemento tblbody)
      
    
      // Titulo_predictamen
    
      var celdatitulo = document.createElement("th");
      var textoCeldatitulo = document.createTextNode(titulos_principales[1]);
      celdatitulo.appendChild(textoCeldatitulo);
      titulo.appendChild(celdatitulo);
      celdatitulo.setAttribute("scope", "col");
      celdatitulo.setAttribute("style","text-align:center");
      celdatitulo.setAttribute("colspan","2");
         // Titulo_Authenticate  
      var celdatitulo = document.createElement("th");
      var textoCeldatitulo = document.createTextNode(titulos_principales[2]);
      celdatitulo.appendChild(textoCeldatitulo);
      titulo.appendChild(celdatitulo);
      celdatitulo.setAttribute("scope", "col");
      celdatitulo.setAttribute("style","text-align:center");
      celdatitulo.setAttribute("colspan","2");

               // Titulo_Revision
               var celdatitulo = document.createElement("th");
               var textoCeldatitulo = document.createTextNode(titulos_principales[3]);
               celdatitulo.appendChild(textoCeldatitulo);
               titulo.appendChild(celdatitulo);
               celdatitulo.setAttribute("scope", "col");
               celdatitulo.setAttribute("style","text-align:center");
               celdatitulo.setAttribute("colspan","3");
          // agrega la hilera al final de la tabla (al final del elemento tblbody)
      // agrega la hilera al final de la tabla (al final del elemento tblbody)


      tblHead.appendChild(titulo);
    
    
      // Crea las hileras de la tabla
      var titulo = document.createElement("tr");
     
      for (var j = 0; j < 8; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celdatitulo = document.createElement("th");
        var textoCeldatitulo = document.createTextNode(titulos_tabla[j]);
        celdatitulo.appendChild(textoCeldatitulo);
        titulo.appendChild(celdatitulo);
        celdatitulo.setAttribute("scope", "col");
        celdatitulo.setAttribute("style","text-align:center")
      }
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblHead.appendChild(titulo);
    }
    
    var tblBody = document.createElement("tbody");
    // Crea las celdas
    for (var i = 0; i < 2; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
  
      //Articulo ID
        var celda = document.createElement("th");
        var textoCelda = document.createTextNode(persona[i].Articulo_id);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        celda.setAttribute("style","text-align:center");

      //Predictamen
      var celda = document.createElement("td");
      var input  = document.createElement("input");
      input.setAttribute("type","checkbox");
      input.setAttribute("class","form-check-input");
      if(persona[i].Asignado==true) {
        input.setAttribute("checked","true")
      }
      celda.setAttribute("style","text-align:center");
      celda.appendChild(input);
      hilera.appendChild(celda);

      //Predictamen reporte
        var celda = document.createElement("td");
        if(persona[i].correccion==true) {

          var link=document.createElement("a");
          var texto_link= "reporte.html";
          link.setAttribute("href",texto_link);
          var texto=document.createTextNode("reporte");
          link.setAttribute("target","_blank")
          link.appendChild(texto);
         celda.appendChild(link);
         celda.setAttribute("style","text-align:center");
        }
        
        hilera.appendChild(celda);


        //Authenticate 
        var celda = document.createElement("td");
        var input  = document.createElement("input");
        input.setAttribute("type","checkbox");
        input.setAttribute("class","form-check-input");
        if(persona[i].revision==true) {
          input.setAttribute("checked","true")
        }
        celda.setAttribute("style","text-align:center")
        celda.appendChild(input);
        hilera.appendChild(celda);

        //reporte Authenticate
        var celda = document.createElement("td");
        if(persona[i].correccion==true) {

          var link=document.createElement("a");
          var texto_link= "https://ref.uabc.mx/ojs/index.php/ref/article/view/" + persona[i].Articulo_id;
          link.setAttribute("href",texto_link);
          var texto=document.createTextNode("reporte");
          link.setAttribute("target","_blank")
          link.appendChild(texto);
         celda.appendChild(link);
         celda.setAttribute("style","text-align:center");
        }
        
        hilera.appendChild(celda);
        
        //Linea tematica
        let Status1=["Pendiente","Cumple","No cumple"];
  
        var celda = document.createElement("td");
        var SELECT = document.createElement('SELECT');
        for (var l = 0; l < 3; l++) {
          if(persona[i].linea_tematica==l){
            var OPT2 = document.createElement('OPTION');
            OPT2.setAttribute('value', 0);
            OPT2.setAttribute('selected', 'selected');
            OPT2.appendChild( document.createTextNode( Status1[l]  ) );
            SELECT.appendChild(OPT2);
          }
          else{
       var OPT1 = document.createElement('OPTION');
       OPT1.setAttribute('value', 0);
       OPT1.appendChild( document.createTextNode( Status1[l] ) );
       SELECT.appendChild(OPT1);}
        }
        SELECT.setAttribute("style","text-align:center");
        celda.appendChild(SELECT);      
        hilera.appendChild(celda);
 
        //Calidad
        let Status3=["Pendiente","Cumple","No cumple"];
  
        var celda = document.createElement("td");
        var SELECT = document.createElement('SELECT');
        for (var l = 0; l < 3; l++) {
          if(persona[i].calidad==l){
            var OPT2 = document.createElement('OPTION');
            OPT2.setAttribute('value', 0);
            OPT2.setAttribute('selected', 'selected');
            OPT2.appendChild( document.createTextNode( Status3[l]  ) );
            SELECT.appendChild(OPT2);
          }
          else{
       var OPT1 = document.createElement('OPTION');
       OPT1.setAttribute('value', 0);
       OPT1.appendChild( document.createTextNode( Status1[l] ) );
       SELECT.appendChild(OPT1);}
        }
        SELECT.setAttribute("style","text-align:center");
        celda.appendChild(SELECT);      
        hilera.appendChild(celda);

        
           //Decision
           let Status2=["Sin Iniciar","No recomendado","Aceptado","Aceptado","Rechazado","No cumple con las normas"];
  
           var celda = document.createElement("td");
           var SELECT = document.createElement('SELECT');
           for (var l = 0; l < 6; l++) {
             if(persona[i].Status==l){
               var OPT2 = document.createElement('OPTION');
               OPT2.setAttribute('value', 0);
               OPT2.setAttribute('selected', 'selected');
               OPT2.appendChild( document.createTextNode( Status2[l]  ) );
               SELECT.appendChild(OPT2);
             }
             else{
          var OPT1 = document.createElement('OPTION');
          OPT1.setAttribute('value', 0);
          OPT1.appendChild( document.createTextNode( Status2[l] ) );
          SELECT.appendChild(OPT1);}
           }
           SELECT.setAttribute("style","text-align:center");
           celda.appendChild(SELECT);      
           hilera.appendChild(celda);

     // }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblHead);
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    div3.appendChild(tabla);
    div2.appendChild(div3);
    div.appendChild(div2);
    body.appendChild(div);
    // modifica el atributo "border" de la tabla y lo fija a "2";
        tabla.setAttribute("class", "table table-striped table-sm");
        div.setAttribute("class", "container");
        div2.setAttribute("class", "row");
        div3.setAttribute("class", "table-responsive");
        
  }


  //Funcion donde se genera una tabla con las respuestas del predictamen
  function genera_reporte_predicaten(){
    const respuestas=[1051,1,2,0,1,0,1,2,2,0,1,2,1,0,0,1,0,1,0,1,1,1,1,0]
  const preguntas=["Los autores deber??n enviar la Carta compromiso (Letter of Commitment) firmada y en formato PDF al correo  ref@uabc.edu.mx",
   "Los art??culos pueden presentarse escritos en espa??ol o ingl??s.",
    "El t??tulo del art??culo de m??ximo 15 palabras deber?? incluirse tanto en espa??ol e ingl??s y expresar de manera clara y concisa el contenido del art??culo. Estar?? escrito en Times New Roman de 14 puntos, en negritas y centrado.",
    "Adem??s se solicita un resumen en espa??ol e ingl??s (abstract), de m??ximo 150 palabras, donde se presente el objetivo del art??culo, cobertura espacial y cronol??gica, metodolog??a, caracter??sticas de la muestra de investigaci??n (si es que aplica), los resultados, limitaciones, valor y conclusiones.",
    "El autor deber?? incluir una lista de 3 a 5 palabras clave en espa??ol e ingl??s (keywords).",
    "El cuerpo del texto del art??culo y notas no deber??n contener ninguna informaci??n que revele la identidad de los autores, esto con el fin de asegurar una evaluaci??n an??nima por parte de los pares acad??micos que realizar??n el dictamen.",
    "La estructura m??nima del art??culo incluir?? una introducci??n que refleje con claridad los antecedentes del trabajo, planteamiento de la investigaci??n, objetivo y estructura del art??culo, seguida de la metodolog??a usada y desarrollo, para finalizar con las conclusiones y referencias citadas.",
    "Los art??culos escritos en Microsoft Word incluyendo texto, tablas y figuras deber??n tener una extensi??n de entre 8 000 y 10 000 palabras, en tama??o carta con m??rgenes de 2.54 cent??metros, escritas en Times New Roman de 12 puntos, interlineado doble, sin espacio entre p??rrafos ni saltos de l??nea y p??rrafos justificados. Las p??ginas deber??n estar foliadas desde la primera hasta la ??ltima en el margen inferior derecho.",
    "El art??culo debe tener una estructura clara y presentar secciones y apartados propiamente jerarquizados y diferenciados solo con el uso de tipograf??a, sin usar n??meros ar??bigos o romanos.",
    "Para los encabezados de primer nivel o t??tulos de secci??n usar: Times New Roman, de 16 puntos, negritas y centrado.",
    "Para los encabezados de segundo nivel o subt??tulos de secci??n usar: Times New Roman, de 14 puntos, negritas y centrado.",
    "Para los encabezados de tercer nivel o subsecci??n de subsecci??n usar: Times New Roman, de 13 puntos, negritas y centrado.",
    "Para el uso de acr??nimos y siglas en el cuerpo del texto, la primera vez que se mencionen, se recomienda escribir el nombre completo al que corresponde y enseguida colocar la sigla entre par??ntesis. Ejemplo: Organizaci??n de las Naciones Unidas (ONU), despu??s solo ONU.",
    "Los art??culos no incluir??n anexos o ap??ndices, por lo que toda la informaci??n del art??culo deber?? estar contenida en el cuerpo del art??culo o notas.",
    "Los art??culos no incluir??n ep??grafes.",
    "Las notas de pie de p??gina estar??n al final de la p??gina, escritas en Times New Roman de 12 puntos, con interlineado doble, sin espacio entre notas y justificadas.<br /> Cuando el art??culo incluya f??rmulas o lenguajes matem??ticos usar el editor de ecuaciones de Microsoft Word.",
    "Las tablas se numerar??n de manera consecutiva ascendente con n??meros ar??bigos y se incluir??n en el cuerpo del texto lo m??s cercano posible a su menci??n en el art??culo. El t??tulo se colocar?? en la parte superior de la tabla y su fuente se escribir?? al pie de la misma, ambos elementos centrados y escritos en Times New Roman de 12 puntos sin negritas.",
    "Las figuras (gr??ficas, esquemas, mapas, fotograf??as, etc.) presentadas preferentemente en color, tendr??n una numeraci??n consecutiva en n??meros ar??bigos, y se insertar??n en el cuerpo del texto lo m??s cercano posible a su menci??n en el art??culo. El t??tulo se ubicar?? en la parte inferior y la fuente se colocar?? en la parte superior de la figura, ambos elementos centrados y escritos en Times New Roman de 12 puntos.",
    "Adem??s de insertarse en el art??culo, todos los elementos gr??ficos se enviar??n como archivos complementarios y entregados en color, en archivo independiente en el formato JPG o PNG, con una resoluci??n de 300 dpi. Sin incluir t??tulo y fuente. Las gr??ficas tambi??n en color elaboradas en Microsoft Excel deber?? anexar el archivo fuente.",
    "Como archivo complementario en un documento individual en formato Microsoft Word, proporcionar adem??s: \n El nombre de los autores (se recomienda a los acad??micos que elijan su nombre profesional y estandaricen la firma en sus trabajos, esto con el fin de facilitar la recuperaci??n de su producci??n cient??fica), seguido de su identificador ??nico ORCID, que de igual manera se aconseja que coincida con su firma profesional. Para mayor informaci??n ingresar a orcid.org",
    "El nombre y sigla de las instituciones de afiliaci??n de los autores, incluyendo el departamento, ciudad, pa??s y el correo electr??nico de cada uno de ellos.",
    "Se??alar el autor que se designar?? para recepci??n de correspondencia y su correo electr??nico.",
    "Una rese??a curricular de cada autor en un p??rrafo de hasta 100 palabras como m??ximo, que incluya nacionalidad, ??ltimo grado acad??mico y la instituci??n donde se obtuvo, puesto e instituci??n actual de afiliaci??n, l??neas de investigaci??n y publicaci??n reciente.",
    "Referencias"] 
  preguntas.forEach(element => console.log(element));
  // Obtener la referencia del elemento body
  const titulos_predictamen=["Requisitos de presentaci??n ","Observaciones (Cumple/No cumple)"];
  var body = document.getElementsByTagName("body")[0];
  var div   = document.createElement("div");
  var div2   = document.createElement("div");
  var div3   = document.createElement("div");
 
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
   
  var tblHead = document.createElement("thead");
       // Crea los titulos
//  for (var i = 0; i < 1; i++) {


    // Crea las hileras de la tabla
    var titulo = document.createElement("tr");
   
    for (var j = 0; j < 2; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celdatitulo = document.createElement("th");
      var textoCeldatitulo = document.createTextNode(titulos_predictamen[j]);
      celdatitulo.appendChild(textoCeldatitulo);
      titulo.appendChild(celdatitulo);
      celdatitulo.setAttribute("scope", "col");
      celdatitulo.setAttribute("style","text-align:center")
    }
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblHead.appendChild(titulo);
//  }
  
  var tblBody = document.createElement("tbody");
  // Crea las celdas
 // for (var k = 0; k < 1; k++) {
    // Crea las hileras de la tabla

let k=0;
    respuestas.forEach(function(element){
      if(k==0){
         //Pregunta
      var hilera = document.createElement("tr");  
      var celda = document.createElement("th");
      var textoCelda = document.createTextNode(element);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
      celda.setAttribute("style","text-align:center");
      hilera.appendChild(celda);
      tblBody.appendChild(hilera);
      }
     else {
          var hilera = document.createElement("tr");   
          //Pregunta
          var celda = document.createElement("td");
          var textoCelda = document.createTextNode(preguntas[k]);
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);
          celda.setAttribute("style","text-align:left");

          // //Respuesta
          // var celda = document.createElement("td");
          // var input  = document.createElement("input");
          // input.setAttribute("type","checkbox");
          // input.setAttribute("class","form-check-input");
          // if(element==1) 
          //   {
          //   input.setAttribute("checked","true")
          //   }
          // celda.setAttribute("style","text-align:center");
          // celda.appendChild(input);
          // hilera.appendChild(celda);
          // // agrega la hilera al final de la tabla (al final del elemento tblbody)
          // tblBody.appendChild(hilera);

                //Calidad
                let Status3=["Pendiente","Cumple","No cumple"];
  
                var celda = document.createElement("td");
                var SELECT = document.createElement('SELECT');
                //var persona=1;
                for (var l = 0; l < 3; l++) {
                  if(element==l){
                     var OPT2 = document.createElement('OPTION');
                     OPT2.setAttribute('value', 0);
                     OPT2.setAttribute('selected', 'selected');
                     OPT2.appendChild( document.createTextNode( Status3[l]  ) );
                     SELECT.appendChild(OPT2);
                   }
                   else{
                var OPT3 = document.createElement('OPTION');
               OPT3.setAttribute('value', 0);
               OPT3.appendChild( document.createTextNode( Status3[l] ) );
               SELECT.appendChild(OPT3);
                      }
                 }
                 SELECT.setAttribute("style","text-align:center");
                celda.appendChild(SELECT);      
                hilera.appendChild(celda);  
                tblBody.appendChild(hilera);
        }
    k=k+1;
 });

  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblHead);
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  div3.appendChild(tabla);
  div2.appendChild(div3);
  div.appendChild(div2);
  body.appendChild(div);
  // modifica el atributo "border" de la tabla y lo fija a "2";
      tabla.setAttribute("class", "table table-striped table-sm");
      div.setAttribute("class", "container");
      div2.setAttribute("class", "row");
      div3.setAttribute("class", "table-responsive");
  }