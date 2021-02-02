# Calculadora de Contraste

Esta es una calculadora de contraste diseñada para obtener el [nivel de contraste](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html#dfn-contrast-ratio) bajo los parámetros y recomendaciones establecidas por la [w3.org](https://www.w3.org).

<Calculadora-Contraste/>



## Formulas utilizadas para los cálculos

### Nivel de luminancia 

Recibe valores de color en formato `rgb` y retorna la variable `L` un numero entre **0 y 1** que definen para el mínimo y el máximo de luminancia. ej. El color negro toma el valor 0 y el blanco 1

``` js
  nivelLuminancia(R8bit, G8bit, B8bit) {

    var RsRGB = R8bit/255;
    var GsRGB = G8bit/255;
    var BsRGB = B8bit/255;

    var R = (RsRGB <= 0.03928) ? RsRGB/12.92 : Math.pow((RsRGB+0.055)/1.055, 2.4);
    var G = (GsRGB <= 0.03928) ? GsRGB/12.92 : Math.pow((GsRGB+0.055)/1.055, 2.4);
    var B = (BsRGB <= 0.03928) ? BsRGB/12.92 : Math.pow((BsRGB+0.055)/1.055, 2.4);
 
    var L = 0.2126 * R + 0.7152 * G + 0.0722 * B;

    return L;
}
```

### Ratio de contraste

Siguiendo las recomendaciones de la [w3.org](https://www.w3.org) el contraste fue calculado:

```(L1 + 0.05) / (L2 + 0.05)```

L1 siendo el nivel de luminancia del **color mas claro**, y
L2 el nivel de luminancia del **color mas oscuro**

