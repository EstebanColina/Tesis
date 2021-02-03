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

### Ejemplos relacionados con las alternativas de contenido no-textual

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

Esta premisa pretende asegurar que toda la información se encuentra disponible de tal forma que pueda ser percibida por todo tipo de usuarios. Generalmente la forma mas fácil de lograr esto es asegurarse que la información puede ser determinada programaticamente.

La adaptabilidad se puede dividir en dos parte principales:

* Estructura: Son las partes de la pagina web y el como se encuentran organizadas en relación con las demás. 

* Presentación: Es la forma general en la que se presenta el contenido a los usuarios.

La naturaleza de los lenguajes y tecnologías web permite mantener estas dos categorías relacionadas, pero no necesariamente dependientes unas de otras y eso es importante para comprender como trabajar al rededor de esto.

### La información y su interrelación

En términos simples es que la información, la estructura y la relación de los elementos se puede determinar programaticamente o es disponible en texto plano.

### Secuencia lógica

Generalmente la forma en la que se presenta un contenido afecta la forma en la que este puede ser interpretado o directamente su significado, tecnologías de accesibilidad deben ser capaces de lograr determinar la secuencia lógica programaticamente.

### Elemento multicaracteristicos

Las instrucciones provistas para entender y operar el contenido no dependen unicamente de una característica significativa como lo puede ser, la forma, el tamaño, su posición, orientación. En lugar de esto se proveen varias combinaciones para asegurarse que los elementos importantes se puedan reconocer fácilmente.

### Ejemplos relacionados con la adaptabilidad del contenido

### Usar marcado semántico para enfatizar o indicar texto especial

``` html
<html>
<p>El siguiente es un extracto de <cite>La historia de mi vida</cite> por Helen Keller</p>
 <blockquote>
   <p>Incluso en los días antes de que mi profesora viniese,Me gustaba venir a este sitio para pasar el rato cerca de los grupos de gente, una sensación que por algún motivo crea cierta felicidad en mi.</p>
 </blockquote>
</html>
```
**Renderizado de la siguiente manera**

<html>
<p>El siguiente es un extracto de <cite>La historia de mi vida</cite> por Helen Keller</p>
 <blockquote>
   <p>Incluso en los días antes de que mi profesora viniese,Me gustaba venir a este sitio para pasar el rato cerca de los grupos de gente, una sensación que por algún motivo crea cierta felicidad en mi.</p>
 </blockquote>
</html>

**Otro ejemplo**
``` html
 <p>Beth recibió 1<sup>st</sup> lugar en su competición de 9<sup>th</sup> grado.</p>
<p>La notación química para el agua es H<sub>2</sub>O.</p>
```

Se utilizan la etiqueta `<sup> </sup>` para este tipo de anotaciones de sub-texto:
<html>
<p>Beth recibió 1<sup>st</sup> lugar en su competición de 9<sup>th</sup> grado.</p>
<p>La notación química para el agua es H<sub>2</sub>O.</p>
</html>

**Esta es la forma correcta de agregar este tipo de caracteres especiales**


## El contenido debe distinguirse

Se debe hacer lo posible para que los usuarios puedan distinguir el contenido asi como separar los elementos interactivos de la interfaz con aquellos que solo forman parte del fondo.

### Uso del color

El color jamas debe usarse como único método para comunicar información, indicar acciones o proporcionar respuestas. 

Esto es complicado porque cuando se piensa en diseño web, el color juega un papel estético sumamente importante, no obstante es importante que podamos comprender que esta premisa no es limitante, simplemente debes proporcionar opciones a los usuarios, y comunicar utilizando formas adicionales.

**Un ejemplo sencillo**: Un error común con campos obligatorios es comunicarle a los usuarios que el campo es requerido colocando el color rojo. Esto puede ser un problema para las personas que sufren daltonismo. Pero es igualmente fácil de solucionar con tan solo agregar el texto "(Obligatorio)" a la etiqueta del campo.

``` html
<label for="apellido" class="required">Apellido (obligatorio): </label>
<input id="apellido" type="text" size="25" value=""/>
<style type="text/css">
  .required {
    color:red;
  }
</style>
```
<label for="apellido" class="required">Apellido (obligatorio): </label>
<input id="apellido" type="text" size="25" value=""/>
<style type="text/css">
  .required {
    color:red;
  }
</style>

### Contraste

Las representaciones visuales de texto y texto en imagenes debe tener un [ratio de contraste](/herramientas/calculadora) de al menos `4.5` para textos normales y de `3.1` para textos de `18px` o mas. La recomendación optima según la [w3.org](https://www.w3.org) señala un ratio de `4.5` para los textos de `18px` o mas y `7.1` de ratio para los textos de cualquier otro tamaño.

Los ratio de contraste pueden ser calculados usando la [Calculadora de contraste](/herramientas/calculadora)

Existen algunas excepciones a esta norma: 

* Elementos decorativos: Texto o imágenes de texto que son parte inactiva de la interfaz de usuario, es decir que son unicamente decoración y que no obstruyen de ninguna manera el acceso al contenido relevante, no tienen requerimientos de contraste.

* Logotipos: Texto que es parte de un logo o marca tampoco tienen requerimientos mínimos de contraste al momento de ser mostradas en el contenido.

::: tip
Aun asi es recomendado que si un logotipo contiene combinaciones de contraste problemáticas se le añadan etiquetas y descripciones que permitan a los usuarios identificarlos con facilidad

:::




## Se debe proveer de suficiente tiempo para leer y utilizar el contenido

Texto temporal

## Evitar el uso de elementos u efectos visuales que puedan distraer o evitar la visualización apropiada del contenido

Texto temporal

## Ofrecer formas para ayudar a los usuarios a navegar, encontrar o determinar que contenido esta siendo presentado. 

Texto temporal

## El contenido debe ser legible e interpretable

Texto temporal

## La interfaz de usuario debe comportarse de manera consistente

Texto temporal

## Ayudar a los usuarios a identificar y corregir sus inputs

Texto temporal