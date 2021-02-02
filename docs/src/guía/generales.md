# Recomendaciones Generales

## Alternativa al contenido no-textual

El contenido presentado de forma no-textual (incluido imágenes con texto) debe tener una alternativa que utilice texto para lograr un resultado similar de tal forma que pueda ser fácilmente manipulado (cambiar tamaño, accedido por lectores de pantalla, etc.) con el objetivo de que sea más sencillo de entender para personas con dificultades de lectura. Aunque existen alguna excepciones, como lo pueden ser: 

 * Controles y métodos de entrada
 Su naturaleza les impide ser reemplazados únicamente por texto, sin embargo se pueden añadir descripciones para especificar sus propósitos.

* CAPTCHA 
El propósito de los test CAPTCHA es confirmar que el contenido es accedido por una persona y no una computadora, las figuras generadas pueden ser muy difíciles de leer para personas con dislexia pero agregar una alternativa de texto convencional deja sin propósito al CAPTCHA por lo que se deben usar alternativas como sonidos.

* Contenido especial 
Si el contenido que es presentado debe ser específicamente presentado de manera no textual, al menos debe ser etiquetado con texto que provea una identificación/descripción del contenido relevante.

* Elementos decorativos
Si los elementos presentados tienen como único propósito ser decorativos y no afectan directamente el contenido y su interacción con los usuarios, pueden ser ignorados en términos de accesibilidad. 

### Ejemplos de situaciones relacionadas con las alternativas de contenido no-textual

### Omitir el atributo alt o alguna alternativa texto en un elemento de imagen

En el siguiente código se inserta una imagen haciendo uso de la etiqueta `img` de `html`. Debido a esto un lector de pantalla no podría saber el propósito o contenido de la imagen

``` html
<img src="../images/gráfico.jpg" />
```

La forma correcta de abordar esta situación es utilizando el atributo alt para dar una descripción de lo que ocurre en la imagen.

``` html
<img src="../images/gráfico.jpg" alt="Gráfico: Valor 1= 50% aumento de nacimiento de osos panda, Valor 2= 50% perdida de terrenos de bambú " />
```
Este podría ser un gráfico cuyos colores o representación visual utilizaran una combinación de contraste difícil de diferenciar para una persona con daltonismo o las tipografía utilizada en la imagen podría ser confusa para una persona con dislexia. De esta forma ambas condiciones pueden ser atendidas al utilizar lectores de contexto o tecnologías similares

### Combinar imagen y texto adyacente a un link

Esto se refiere a proveer tanto una representación textual y una gráfica para proveer contexto a un link sin hacer que la navegación sea confusa.

``` html
<a href="productos.html">
   <img src="icono.gif" alt="">
 </a>  
```

En este ejemplo un icono y el texto están contenido dentro del mismo elemento `a` lo que para efectos del `html` los agrupa y facilita la identificación visual

Este tipo de situaciones es beneficiosa ya que provee una alternativa no textual al contexto de un link para aquellos usuarios con condiciones del lenguaje como la dislexia.


## Adaptabilidad del contenido



## El contenido debe distinguirse
asd
## Se debe proveer de suficiente tiempo para leer y utilizar el contenido
asd
## Evitar el uso de elementos u efectos visuales que puedan distraer o evitar la visualización apropiada del contenido
asd
## Ofrecer formas para ayudar a los usuarios a navegar, encontrar o determinar que contenido esta siendo presentado. 
asd

## El contenido debe ser legible e interpretable
asd
## La interfaz de usuario debe comportarse de manera consistente
asd
## Ayudar a los usuarios a identificar y corregir sus inputs

asd