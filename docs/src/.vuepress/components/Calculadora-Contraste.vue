<template>
  <html>
      <div>
        <div>
          <label for="color_fondo">Color de Fondo</label>
          <input type="color" id="color_fondo" value="#000000" @change="actualizarDisplayFondo(); calcularContraste();">
          <input type="text" id="color_fondo_display" disabled value="#000000">
        </div>
        <div>
          <label for="color_texto">Color de Texto</label>
          <input type="color" id="color_texto" value="#FFFFFF" @change="actualizarDisplayTexto(); calcularContraste();">
          <input type="text" id="color_texto_display" disabled value="#FFFFFF">
        </div>
        <div>
        <div class="fondo" id="fondo_id"><p id="texto_id">The quick brown fox jumps over the lazy dog</p></div>
        <div class="fondo" id="resultado_fondo"> <p id="resultado_id">El nivel de contraste es de 21.0000 valor de contraste excelente</p> </div>
        </div>
      </div>



  </html>
</template>

<script>
export default {

methods: {

    actualizarDisplayFondo() {
      let valor = document.getElementById("color_fondo").value;
      document.getElementById("color_fondo_display").value = valor;
      document.getElementById("fondo_id").style.backgroundColor = valor;
      console.log(valor);
    },

    actualizarDisplayTexto() {
      let valor = document.getElementById("color_texto").value;
      document.getElementById("color_texto_display").value = valor;
      document.getElementById("texto_id").style.color = valor;
      console.log(valor);
    },
  
    calcularContraste() {
    let r = 0, g = 0, b = 0;
    let fondo = document.getElementById("color_fondo").value;
    let texto = document.getElementById("color_texto").value;
    console.log(fondo);

    const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

    console.log(hexToRgb(fondo));
    console.log(hexToRgb(texto))
    
    let rgbfondo = hexToRgb(fondo);
    let rgbtexto = hexToRgb(texto);

    console.log(rgbfondo[0]);
    console.log(rgbtexto[0]);

    let lumfondo = this.relativeLuminanceW3C(rgbfondo[0],rgbfondo[1],rgbfondo[2]);
    console.log(lumfondo);
    let lumtexto = this.relativeLuminanceW3C(rgbtexto[0],rgbtexto[1],rgbtexto[2]);
    console.log(lumtexto);

    let contraste = 0;
    if (lumfondo > lumtexto) {
      contraste = (lumfondo + 0.05) / (lumtexto + 0.05);
    } else {
      contraste = (lumtexto + 0.05) / (lumfondo + 0.05);
    }

    console.log(contraste);
    console.log(contraste.toFixed(4));
    

    if (contraste < 3.1) {
      document.getElementById("resultado_id").innerHTML = ("El nivel de contraste es de " + contraste.toFixed(4) + " un valor de contraste no recomendado");
    } else if (contraste <= 4.5) {
      document.getElementById("resultado_id").innerHTML = ("El nivel de contraste es de " + contraste.toFixed(4) + " valor dentro de los parametros minimos de legibilidad");
    } else if (contraste < 7.1) {
      document.getElementById("resultado_id").innerHTML = ("El nivel de contraste es de " + contraste.toFixed(4) + " valor dentro de los parametros recomendados");
    } else if (contraste >= 7.1) {
      document.getElementById("resultado_id").innerHTML = ("El nivel de contraste es de " + contraste.toFixed(4) + " valor de contraste excelente");
    }
  },
  
  relativeLuminanceW3C(R8bit, G8bit, B8bit) {

    var RsRGB = R8bit/255;
    var GsRGB = G8bit/255;
    var BsRGB = B8bit/255;

    var R = (RsRGB <= 0.03928) ? RsRGB/12.92 : Math.pow((RsRGB+0.055)/1.055, 2.4);
    var G = (GsRGB <= 0.03928) ? GsRGB/12.92 : Math.pow((GsRGB+0.055)/1.055, 2.4);
    var B = (BsRGB <= 0.03928) ? BsRGB/12.92 : Math.pow((BsRGB+0.055)/1.055, 2.4);
 
    var L = 0.2126 * R + 0.7152 * G + 0.0722 * B;

    return L;
}

},

}
</script>

<style>

.fondo {
  background-color: black;
  color: white;
  font-size: 1.2em;
  border-radius: 15px;
}




</style>