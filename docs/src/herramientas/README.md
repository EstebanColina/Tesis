# Filtro de Daltonismo

Este filtro busca simular el espectro visual de una persona con daltonismo si es necesario utilizar imagenes de mayor resolución pueden usar la versión de pagina individual para mayor comodidan haciendo click [FILTRO DE DALTONISMO](/filtro/)


<Filtro-Daltonismo/>

## Utilizar SVG como herramienta de pruebas

Este filtro de daltonismo fue desarrollado en forma de **archivo** `svg` que puede ser utilizado en cualquier archivo `html` por medio de `css`. Esto puede ser particularmente util en casos donde se tenga un sitio web con multitud de imágenes que deseas verificar con los diferentes filtros de daltonismo, en lugar de tomar cada imagen y lentamente aplicar el filtro de forma individual, puedes incluir este código dentro de tu aplicación y utilizar un **selector de** `css` para aplicar el filtro a todas las imágenes al mismo tiempo.


### Filtro SVG Completo

Si ya tienes conocimientos sobre como utilizar **filtros** `svg` este es el **archivo completo** donde se contienen todos los filtros.

``` html
<svg>
  <defs>
    <filter id="protanopia">
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.567, 0.433, 0,     0, 0
                0.558, 0.442, 0,     0, 0
                0,     0.242, 0.758, 0, 0
                0,     0,     0,     1, 0"/>
    </filter>
    <filter id="protanomalia">
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.817, 0.183, 0,     0, 0
                0.333, 0.667, 0,     0, 0
                0,     0.125, 0.875, 0, 0
                0,     0,     0,     1, 0"/>
    </filter>
    <filter id="deuteranopia">
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.625, 0.375, 0,   0, 0
                0.7,   0.3,   0,   0, 0
                0,     0.3,   0.7, 0, 0
                0,     0,     0,   1, 0"/>
    </filter>
    <filter id="deuteranomalia">
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.8,   0.2,   0,     0, 0
                0.258, 0.742, 0,     0, 0
                0,     0.142, 0.858, 0, 0
                0,     0,     0,     1, 0"/>
    </filter>
    <filter id="tritanopia">
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.95, 0.05,  0,     0, 0
                0,    0.433, 0.567, 0, 0
                0,    0.475, 0.525, 0, 0
                0,    0,     0,     1, 0"/>
    </filter>
    <filter id="tritanomalia">
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.967, 0.033, 0,     0, 0
                0,     0.733, 0.267, 0, 0
                0,     0.183, 0.817, 0, 0
                0,     0,     0,     1, 0"/>
    </filter>
    <filter id="acromatico">
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.299, 0.587, 0.114, 0, 0
                0.299, 0.587, 0.114, 0, 0
                0.299, 0.587, 0.114, 0, 0
                0,     0,     0,     1, 0"/>
    </filter>
    <filter id="monocromatico">
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.618, 0.320, 0.062, 0, 0
                0.163, 0.775, 0.062, 0, 0
                0.163, 0.320, 0.516, 0, 0
                0,     0,     0,     1, 0"/>
    </filter>
  </defs>
</svg>
}
```

### Entendiendo la estructura

Si se presta atención es fácil reconocer el patrón que sigue el archivo `svg` las etiquetas `<svg>` y `</svg>` delimitan la función completa para indicarle al `html` la declaración especial.

Luego se tiene las etiquetas `<defs>` y `</defs>` que se utilizan para contener las definiciones del archivo. Todo lo que se encuentre rodeado por estas etiquetas se considera información que debe ser interpretada.

finalmente las ultimas etiquetas relevantes `<filter>` y `</filter>` es aquella que contiene la información referente a cada uno de los filtros. Analicemos el significado de su contenido:

``` html {2-8}
<filter id="tritanopia">
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.95, 0.05,  0,     0, 0
                0,    0.433, 0.567, 0, 0
                0,    0.475, 0.525, 0, 0
                0,    0,     0,     1, 0"/>
    </filter>
```

Se puede observar que se tiene un atributo `id`. Este es necesario para identificar el filtro y referenciarlo utilizando los selectores de `css`

La sección resaltada es donde se encuentra el contenido del filtro.

**Linea 2**: Se da inicio al contenido con la etiqueta `feColorMatrix` 

**Linea 3**: `in` = `"SourceGraphic` para indicar que el contenido sera aplicado a un archivo gráfico

**Linea 4**: `type` = `matrix` indica el tipo de estructura que tiene la información, en este caso una matriz

**Desde linea 5 hasta la linea 8**: `values`, para establecer los valores de divergencia. En este caso el formato matriz afecta los valores `rgb` y `alpha` que afecta la transparencia.

::: details Nota
Los atributos para la matriz de divergencia fueron posibles principalmente gracias a la investigación de Francoise Viénot, Hans Brettel y John D. Mollon

[Digital Video Colourmaps for
Checking the Legibility of
Displays by Dichromats](http://vision.psychol.cam.ac.uk/jdmollon/papers/colourmaps.pdf)
:::

### Implementación con html y css

Para utilizar un filtro dentro de un archivo `html` cualquiera se debe incluir en cualquier parte dentro de las etiquetas `html`, lo recomendado es hacerlo justo al final para mantener la legibilidad del archivo

``` html
<html>
      <!-- imagen de ejemplo -->
<img src="/daltonicos2.jpg" alt="" style="width: 100%; height: auto">

<!-- inicio de la definición -->
<svg>
  <defs>
      <filter id="tritanopia">
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.95, 0.05,  0,     0, 0
                0,    0.433, 0.567, 0, 0
                0,    0.475, 0.525, 0, 0
                0,    0,     0,     1, 0"/>
    </filter>
  </defs>
</svg>
    <!-- final de la definición -->
  </html>
```

Tiene como resultado:

<ejemplo-Filtro-1/>

Que como se puede observar solo refleja los atributos definidos por la etiqueta `<img>`. Para hacer uso del filtro se debe declarar un selector de `css` de la siguiente manera:


``` css
<style>

/* se agrega un selector, en este caso la clase ejemplo */
.ejemplo {
    filter: url(#tritanopia)
}
/* Lo incluido dentro de la url debe ser la id correspondiente al filtro que se desea aplicar */

</style>
```

Lo que nos deja con el resultado esperado: El filtro relacionado con la tritanopia adecuadamente aplicado. Este procedimiento es el estándar para el manejo de archivos `svg`

<ejemplo-Filtro-2/>