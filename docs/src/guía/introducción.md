# Introducción
La accesibilidad consiste en una filosofía que tiene el propósito de velar que la mayoría de las personas puedan hacer uso bienes, recursos y tecnologías sin importar sus capacidades o circunstancias como una forma de brindar oportunidades de manera equitativa. 

La accesibilidad hace que los sitios web que desarrollamos puedan ser utilizados por el mayor número de personas posible. Tradicionalmente, son recomendaciones que se idean con el objetivo de facilitar la experiencia de las personas con discapacidades o impedimentos, pero la creación de sitios accesibles no solo trae beneficios para los grupos que presentan algún tipo de condición, si no también, que ofrecen entornos donde usuarios sin necesidades especiales de accesibilidad puede acceder a las utilidades y el contenido de los sitios web con mayor comodidad y eficiencia.

## ¿Por qué es importante la accesibilidad en el desarrollo de software? 
El software y el internet son recursos valiosos que tienen un impacto significativo en la vida diaria de muchas personas, el avance de la tecnología provoca que cada vez mas aspectos cotidianos puedan o deban ser gestionados por medio del uso de software: La educación, empleos, comercio, salud y la recreación, son algunos ejemplos de esto.

Cuando desarrollamos sitios web sin consideraciones de accesibilidad podemos estar excluyendo personas de acceder a la educación, de obtener un trabajo, de realizar tareas, privar su acceso a determinados productos. Es importante comprender que este tipo de situaciones puede traer consecuencias negativas para las personas que dependen de tu software.

Los autores consideran que la accesibilidad se trata de **"Hacer lo posible por crear experiencias positivas para la mayor cantidad de usuarios posible"**. Esta declaración debe comprenderse adecuadamente para aceptar sus dos implicaciones principales

1. **Aplicar recomendaciones de accesibilidad siempre que sea viable dentro del desarrollo del proyecto**

2. **Aceptar que no se puede tomar en consideración cada posible condición que podría afectar a los usuarios**


## Beneficios adicionales de aplicar accesibilidad en el software y plataformas web

### Ayuda a generar aplicaciones web de alta calidad y flexibilidad 

Implementar recomendaciones de accesibilidad puede ayudar a mejorar el desempeño técnico de una aplicación:

* **Reduce la cantidad de ancho de banda necesario asi como la carga del servidor**

* **Configura el contenido de tal manera que puede ser accedido por diferentes medios tales como, dispositivos móviles, lectores de pantalla, diferentes sistemas operativos y navegadores web**

* **La naturaleza del diseño y los métodos de implementación les permite mantenerse vigente por un periodo de tiempo mayor**


### Mejora la usabilidad general

Los efectos de aplicar técnicas de accesibilidad pueden ayudar a mejorar **usabilidad** de la aplicación web
***
1. **Crea una navegación clara**

Muchos sitios web dividen su contenido en múltiples paginas y le permiten al usuario navegar entre ellas por medio de **menús**. Se podría considerar lógico tratar de que la navegación en tu sitio web sea lo mas **consistente, intuitiva, clara y sencilla posible**, pero en ocasiones algunos sitios web deciden sacrificar estas características por diseños llamativos.

Sin embargo no se debe confundir utilizar accesibilidad con limitar las posibilidades del diseño, tomemos por ejemplo [Moller](https://moller.no/en/) y su sitio web

![Pagina de Moller en 2021](/usabilidad_1.png "Imagen de la pagina de moller, ejemplo de uso de contraste para mantener la navegación clara")

Este sitio web presenta un video con una capa de difuminado en el fondo que lo hace lucir interesante a la vista, pero aun asi mantiene bastante **contraste** para lograr que las opciones de navegación ubicadas en la parte superior **resalten del fondo**. 
***
2. **Rendimiento**

Tu aplicación puede lucir bien y ser fácil de navegar, pero aun asi **"sentirse lento"**. Esto puede ser un problema de rendimiento causado por la manera en la que se implementan elementos en tu sitio web, malas implementaciones o exceso de elementos puede causar **uso excesivo de ram, reducir la velocidad de carga de la aplicación o saturar las solicitudes del servidor**.

Aplicar técnicas de accesibilidad permite mantener un esquema de trabajo donde **comunicar y presentar la información de forma eficiente**, esto minimiza la cantidad de elementos que se agrega a un diseño y maximiza el rendimiento.

Tomemos por ejemplo la pagina principal de la plataforma de venta de videojuegos digitales [Steam](https://store.steampowered.com/)

![Pagina principal de Steam en 2021](/usabilidad_2.png)

Es una pagina cuyo diseño contiene muchos elementos, manipula contenido dinámico como transmisiones en tiempo real ademas de animaciones en imágenes y elementos de la interfaz. Pero aun así logra evitar los problemas mencionados con anterioridad gracias al uso de **lenguaje CSS** como método principal para lograr el diseño (evadiendo el uso de **Javascript** siempre que sea posible), compresión aplicada a las imágenes y desactivar completamente la reproducción automática de videos y elementos animados son técnicas altamente contribuyentes a que este diseño sea posible sin sacrificar rendimiento.
***
3. **Legibilidad**

Gran parte de la interacción del usuario con el contenido se hace a través del uso de **texto**. El diseño de las aplicaciones debe mantenerse de tal forma que sea **fácil de leer e interpretar**.

Aplicar técnicas de accesibilidad que orientadas a personas con condiciones asociadas a la lectura trae consigo ventajas relacionadas con la distribución del contenido, la presentación, el uso del contraste y en ocasiones tipografías especiales que ayudan a facilitar la lectura.

Podemos tomar como ejemplo la pagina de [Wikipedia Commons](https://commons.wikimedia.org/wiki/Main_Page)

![Pagina principal de Wikipedia Commons en 2021](/usabilidad_3.png)

La pagina posee un diseño simple que facilita la navegación, separa distintas secciones del contenido aplicando recuadros de color que contrastan con fondo y el texto de los títulos.

Hay un motivo por el cual los fondos blancos son tan comunes en el diseño de paginas web, es sencillo para los desarrolladores incluir elementos de **alto contraste** que ayuden a dirigir la atención de los usuarios y de esa forma mejorar la legibilidad del contenido.

***
4. **Contenido dinámico o "Responsive"**

El termino **"Responsive"** es algo con lo que los desarrolladores de software web debemos estar familiarizados. Al diseñar los sitios web normalmente se utilizan computadoras de escritorio o portátiles con pantallas de "tamaño convencional", el problema se crea cuando nos damos cuenta que en la actualidad las aplicaciones web son utilizadas por medio de multitud de dispositivos con **tamaños de pantalla** y configuraciones diferentes, hacer tu sitio web **"Responsive"** es asegurarse que el mismo puede ser utilizado adecuadamente sin importar el dispositivo del usuario.

Se puede tomar como ejemplo el sitio web de la organización [Creative Commons](https://creativecommons.org/)

**Vista normal del sitio web**
![Pagina principal de Creative Commons 2021](/usabilidad_4.png "Pagina Creative Commons, Vista Normal")

Nótese la distribución de las opciones de navegación en la parte superior y la **distribución horizontal** del contenido con el titulo del articulo ubicado en la parte izquierda y la imagen asociada al mismo ubicada en la parte de derecha.

**Vista desde un dispositivo movil**
![Pagina principal de Creative Commons desde un movil 2021](/usabilidad_5.png "Pagina Creative Commons, Vista Movil")

***
En la **vista movil** se puede observar como se deben **"reinventar"** elementos que funcionan perfectamente en la versión de escritorio. Las opciones de navegación que antes se ubicaban en la parte superior han tenido que combinarse haciendo uso de un menú de tal forma que no se satura el espacio. El contenido pasó de tener una **distribución horizontal** donde los elementos principales se ubican uno al lado del otro, para dar paso a una **distribución vertical** donde los elementos se apilan verticalmente siguiendo una jerarquía lógica que debe ser especificada **programáticamente** al momento del desarrollo de la pagina web.

### Incrementa el publico potencial del software

Cuando el contenido y los servicios ofrecidos por un sitio web son desarrollados con accesibilidad en mente, estarán disponibles para un **grupo mayor de usuarios**. 

Esta es una situación que trabaja en beneficio de los intereses tanto de los desarrolladores del producto como también las expectativas de la empresa u organización ya que aumentar el **acceso al contenido** y los **servicios ofrecidos** también implica **incrementar** el numero potencial de **clientes y audiencia**.

### Mejora las practicas de programación

>Falta una labia aqui 