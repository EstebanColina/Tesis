# ¿Con que tipo de condiciones nos encontraremos?

Para los desarrolladores es sumamente difícil por no decir imposible considerar todas las condiciones que podrían afectar al publico de usuarios potencial, sin embargo lo recomendado es siempre considerar lo que este dentro de las posibilidades y la viabilidad del software que se desarrolla.

Durante el transcurso de esta guiá, se abordara de forma especifica recomendaciones dirigidas a proveer accesibilidad a los usuarios que padezcan de **daltonismo y dislexia**

## Daltonismo

El daltonismo es una condición genética que afecta la forma en la que los ojos perciben los diferentes colores debido a una mutación en las células sensibles a la luz ubicadas en la retina. A nivel mundial afecta a 1 de cada 12 hombres y a 1 de cada 200 mujeres aproximadamente.

::: details Nota

Aunque la causa principal de la condición es genética, también puede ser provocada por: 

* Daño físico o químico al ojo
* Daño en el nervio óptico
* Daño a cerebral
* Edad
* Otros tipos de trauma

El motivo por el cual no se añaden a la descripción general es debido a que los efectos de este tipo de daño es completamente impredecible y muy poco común a diferencia de las variantes genéticas.

:::

### ¿Cuales son los tipos de daltonismo?

El daltonismo se divide en 3 categorías principales que se corresponden con los tipos de células sensibles al color que se encuentran afectadas. Estas son **Deutera**, **Prota** y **Trita**. Asi pues la intensidad de la condición se indica utilizando los sufijos **-nopia** para cuando las células sensibles se encuentran dañadas completamente o directamente se encuentran ausentes y **-nomalía** para indicar que las células poseen una anomalía que provoca una visión alterada del color.


| Tipo              | Descripción       |
| -------------     |:-------------:                             |
| Deuteranopia (Verde)   | Las células asociadas con la percepción del color verde se encuentran completamente dañadas o ausentes |
| Deuteranomalía (Verde)      | Las células asociadas con la percepción del color verde poseen una anomalía que afecta su funcionamiento             |
| Protanopia (Rojo)      | Las células asociadas con la percepción del color rojo se encuentran completamente dañadas o ausentes             |
| Protanomalía (Rojo)   | Las células asociadas con la percepción del color rojo poseen una anomalía que afecta su funcionamiento |
| Tritanopia (Azul)      | Las células asociadas con la percepción del color azul se encuentran completamente dañadas o ausentes |
| Tritanomalía (Azul)   | Las células asociadas con la percepción del color azul poseen una anomalía que afecta su funcionamiento |        

::: details Nota
Se puede agregar como consideración adicional el daltonismo total, unas variantes muy raras que ocurren cuando todas las células sensibles al color se encuentran dañadas o cuando solo funciona uno de los 3 tipos.

| Tipo              | Descripción      |
| -------------     |:-------------:                             |
| Acromático  | Ocurre cuando todas las células sensibles al color se encuentran dañadas o ausentes y produce visión en blanco y negro  |
| Monocromático     | Solo un tipo de célula funciona con normalidad y provoca visión en gradientes de un mismo color y el gris             |

:::

### ¿Efectos del daltonismo en la visión?

Para comprender las dificultades que puede traer el daltonismo al interactuar con interfaces de usuario se pueden utilizar imágenes con filtros que intentan simular los efectos de las diferentes variantes.

**IMAGEN VISIÓN NORMAL**
![Imagen de una paleta de color sin efectos](/daltonicos.png "Paleta de color, Vista normal")

Esta es la imagen sin filtros aplicados, la versión estándar. Ahora comparemos los efectos del daltonismo.

**IMAGEN VISIÓN PROTANOPIA**
![Imagen de una paleta de color con efectos similares a la Protanopia](/daltonicos_protanopia.png "Paleta de color, Vista con protanopia")

La visión cambia drásticamente, el vivo rojo al inicio de la paleta es reemplazado por un tono amarillo-marrón, el verde del puesto central cambia a un amarillo y el morado se acerca a un tono casi completamente azul.

**IMAGEN VISIÓN DEUTERANOPIA**
![Imagen de una paleta de color con efectos similares a la Deuteranopia](/daltonicos_deuteranopia.png "Paleta de color, Vista con deuteranopia")

Los efectos provocados por la **protanopia** son bastante similares a los de la **deuteranopia**, por esto, es común que sean agrupadas bajo el termino **"red-green colorblindness"** cuyo significado es "daltonismo rojo-verde". Esto se debe a que las combinaciones de color y consideraciones de accesibilidad que funcionan adecuadamente con el daltonismo de tipo **"prota"** generalmente funciona de la misma forma con los **"deutera"**.

**IMAGEN VISIÓN TRITANOPIA**
![Imagen de una paleta de color con efectos similares a la Tritanopia](/daltonicos_tritanopia.png "Paleta de color, Vista con tritanopia")

Los efectos de la tritanopia tienen un angulo completamente diferentes a los presentados por las otras variantes y es el motivo principal por el cual es difícil desarrollar técnicas de diseño asociadas al color que funcionen con las 3 variantes principales del daltonismo.

::: tip
Los efectos del daltonismo pueden ser simulados en imagenes utilizando esta [herramienta](/herramientas)
:::


### Guiá rápida de combinaciones de color problemáticas

| Tipo              | Combinaciones de color problemáticas       |
| -------------     |:-------------:                             |
| Deutera (Verde)   | Verde/Rojo, Verde/Azul, Azul/Gris, Verde/Marrón, Azul/Morado, Rojo/Naranja, Amarillo/Naranja |
| Prota (Rojo)      | Morado/Azul Oscuro, Naranja/Verde, Marrón/Verde Oscuro, Rojo/Marrón, Verde/Amarillo, Gris/Morado              |
| Trita (Azul)      | Azul/Amarillo, Lila/Amarillo Verdoso, Rojo/Morado Rojizo, Azul Oscuro/Negro, Amarillo/Blanco              |

## Dislexia

La dislexia es una condición relacionada con el aprendizaje, su origen es neurológico y es caracterizada principalmente por la dificultad para reconocer palabras y la escritura. Las formas mas comunes en las que manifiesta es causando **dificultades para la lectura y la escritura** aunque también se pueden presentar una multitud de efectos adicionales tales como la falta de concentración, dificultades para la compresión de conceptos, dificultad para las matemáticas y problemas de organización. 

### Consideración importante al tratar con la dislexia en el contexto de interfaces

La dislexia es una condición en la que los síntomas y la forma en la que los mismos se presentan pueden variar enormemente de individuo a individuo. No obstante entre los síntomas comunes se encuentran algunos que son relevantes y se deben tomar en cuenta al momento de diseñar las interfaces y la forma de presentar el contenido al usuario.

![Dislexia](/dyslexia.png "Imagen decorativa")

### Dificultades de la dislexia al tratarse de interfaces usuario

Los síntomas principales y que generalmente se mantienen como constantes entre individuos son aquellos que afectan de forma negativa las capacidades de **lectura y escritura**.

* Dificultad para identificar las diferentes letras

* Problemas para identificar el contexto de las palabras

* Transposición de letras

* Problemas para párrafos y otros cuerpos de texto

* Lectura laboriosa y lenta

* Dificultad para comprender lo leído asi como seguir instrucciones escritas

* Entre otras

Estas **dificultades pueden ser mitigadas** parcial o completamente (esto depende de la severidad de con la que se manifieste la condición en cada individuo) si se utilizan estrategias del diseño que dirijan la atención de los usuarios con un flujo continuo mientras se **presenta la información de la manera mas clara y concisa posible**. 

Muchos factores se juegan un papel para lograr esto y nunca se puede garantizar la efectividad, pero solo con tratar ya se esta mejorando significativamente la **calidad del software** que produces debido a las caracteristicas de legibilidad y accesibilidad que son implementadas.

![Imagen para decorar](/dislexia_1.jpg "Imagen decorativa")