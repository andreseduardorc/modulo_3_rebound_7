const palabrasRepetidas = {
    sed: "UNO",
    vehicula: "DOS",
    vivamus: "TRES",
    nam: "CUATRO",
    eros: "CINCO",
    vestibulum: "SEIS",
    quam: "SIETE",
    sollicitudin: "OCHO",
    finibus: "NUEVE",
    dictum: "DIEZ",
    morbi: "ONCE"
  };
  
  const colores = {
    sed: "#FF5500",
    vehicula: "#FF99B2",
    vivamus: "#FF99F5",
    nam: "#BB99FF",
    eros: "#99C5FE",
    vestibulum: "#00CEFF",
    quam: "#01FFFE",
    sollicitudin: "#00FF9F",
    finibus: "#B6FF01",
    dictum: "#FFFF00",
    morbi: "#FFB600"
  };
  
  window.addEventListener("DOMContentLoaded", function() {
    const textoElement = document.getElementById("textoRelleno");
    const btnReemplazar = document.getElementById("btnReemplazar");
  
    btnReemplazar.addEventListener("click", function() {
      let textoModificado = textoElement.innerHTML;
  
      
      let contadores = {};
  
      
      for (const palabra in palabrasRepetidas) {
        const regex = new RegExp(`\\b${palabra}\\b`, "gi");
        const contador = (textoModificado.match(regex) || []).length;
        const nuevaPalabra = `<strong>${palabrasRepetidas[palabra]}</strong>`;
        textoModificado = textoModificado.replaceAll(regex, nuevaPalabra);
        contadores[palabra] = contador;
  
       
        const color = colores[palabra];
        console.log(`%c${palabra}: ${contadores[palabra]}`, `color: ${color}`);
      }
  
      textoElement.innerHTML = textoModificado;
  
     
    });
  });
  