# Proyecto de Desarrollo de Sitio Web para Peluquería Maktub

## Página 1: Inicio

### Bloque 1: Nav Bar

El bloque de navegación (Nav Bar) es una parte esencial de la estructura del sitio web, ya que proporciona una navegación intuitiva y rápida para los usuarios. Se compone de tres elementos principales:

1. **Espacio con Logo de la Empresa:**

   - Se incluye el logo de la empresa para reforzar la identidad visual de la marca.
   - Se implementa mediante la etiqueta `<img src="ruta_del_logo">`.

2. **Links para Navegar la Página:**

   - Se agrupan los enlaces que permiten a los usuarios acceder a diferentes secciones del sitio.
   - Se utiliza la etiqueta `<div class="navbar-links">` para estructurar estos enlaces de manera organizada.

3. **Items de Acceso a Redes Sociales:**

   - Se añaden íconos o enlaces a las redes sociales de la peluquería canina para facilitar la interacción con los clientes.

     - Facebook
     - Instagram

   - Se implementa mediante la etiqueta `<div class="navbar-social">`.

4. **Consideraciones Adicionales:**
   - mantener el Nav Bar visible en todas las páginas del sitio para garantizar una navegación consistente.
   - enlaces descriptivos y fácilmente comprensibles para los usuarios.
   - implementar un diseño responsivo para que el Nav Bar se adapte a diferentes dispositivos y tamaños de pantalla.

Este bloque se diseña para maximizar la usabilidad y la accesibilidad del sitio web, permitiendo a los usuarios encontrar rápidamente la información que buscan y promoviendo la interacción con la marca a través de las redes sociales.

---

### Bloque 2: Imágenes con Servicios del Lugar

En este bloque, se presentan imágenes que representan los distintos servicios ofrecidos por la peluquería Maktub. Cuando el usuario posa el mouse sobre una imagen, esta se rotará y mostrará las especificaciones básicas del servicio, brindando así una vista detallada de cada opción disponible.

Ejemplo de servicios que puede ofrecer la peluquería Maktub:

1. **Corte de Pelo y Baño:**

   - Especificaciones: Incluye baño, corte de pelo según estándares de la raza, limpieza de oídos y corte de uñas si es necesario.

2. **Deslanado y Desenredado:**

   - Especificaciones: Ideal para razas con pelaje largo o propenso a enredarse. Incluye desenredado y eliminación de pelo muerto.

3. **Baño de Belleza y Acondicionamiento:**

   - Especificaciones: Baño con productos específicos para cada tipo de pelaje, seguido de acondicionamiento para un pelaje suave y brillante.

4. **Corte de Uñas y Limpieza Dental:**

   - Especificaciones: Corte de uñas para evitar problemas de crecimiento excesivo, y limpieza dental para mantener una buena salud bucal.

5. **Tratamientos de Spa para Mascotas:**
   - Especificaciones: Masajes relajantes, tratamientos de hidratación para la piel y aromaterapia para calmar a las mascotas.

#### Lineamientos de Implementación del Carrusel de Imágenes y Efecto de Rotación

Para implementar el carrusel de imágenes y el efecto de rotación manualmente, se sugieren los siguientes pasos:

1. **Carrusel de Imágenes:**

   - **HTML:** Definir la estructura del carrusel utilizando la etiqueta `<div>` con la clase `carousel` y sus elementos internos `<div>` con la clase `carousel-inner` para contener las imágenes individuales.
   - **CSS:** Estilizar el carrusel de imágenes utilizando CSS para garantizar una presentación adecuada y coherente en el sitio web.
   - **JavaScript:** Implementar la lógica del carrusel utilizando JavaScript para permitir la navegación entre las imágenes al hacer clic en los botones de anterior y siguiente.

2. **Efecto de Rotación al Pasar el Ratón:**
   - **HTML/CSS:** Definir un estilo básico para las imágenes que forman parte del carrusel, asegurándose de que tengan un tamaño adecuado y un efecto de transición suave.
   - **JavaScript:** Agregar eventos de ratón para el efecto de rotación al pasar el ratón sobre las imágenes, utilizando JavaScript para cambiar la transformación de la imagen y lograr el efecto deseado.

---

### Bloque 3: Promociones y Precios

En esta sección, se detallan las promociones y los precios de los servicios ofrecidos por la peluquería Maktub. Para su implementación, se sugieren las siguientes directrices:

1. **Lista de Promociones y Servicios:**

   - Enumera las promociones y servicios utilizando listas ordenadas o no ordenadas para una fácil comprensión.
   - Cada ítem de la lista debe incluir el nombre de la promoción o servicio y una breve descripción de los beneficios que ofrece.
   - Considera utilizar imágenes para complementar la descripción y hacerla más atractiva visualmente.
   - Ejemplo:

     - **Promoción de Verano:**
       Oferta especial que incluye corte de pelo, baño con productos premium y tratamiento de spa para refrescar a tu mascota en los días calurosos.
     - **Descuento por Referidos:**
       Obtén un descuento del 10% en tu próximo servicio por cada amigo que refieras a nuestra peluquería Maktub.

2. **Precios de los Servicios:**

   - Enumera los precios individuales de los servicios utilizando una tabla para organizar la información de manera clara y concisa.
   - Incluye el nombre del servicio y su precio correspondiente.
   - Si hay diferentes opciones de precios (por ejemplo, según el tamaño de la mascota), especifica estas variaciones en la tabla.
   - Ejemplo:
     | Servicio | Precio |
     |-------------------------|----------|
     | Corte de Pelo y Baño | $30 |
     | Deslanado y Desenredado | $40 |
     | Baño de Belleza | $25 - $35| (dependiendo del tamaño de la mascota)

3. **Información Adicional:**

   - Proporciona instrucciones claras sobre cómo los clientes pueden aprovechar las promociones y reservar sus citas.
   - Incluye detalles de contacto, como números de teléfono o direcciones de correo electrónico, para que los clientes puedan comunicarse fácilmente.
   - Considera agregar un llamado a la acción al final de la sección para animar a los usuarios a reservar sus citas o ponerse en contacto con la peluquería Maktub.

---

### Bloque 4: Carrusel con Mascotas Siendo Atendidas

En esta sección se presenta un carrusel de imágenes que muestra mascotas siendo atendidas en la peluquería Maktub. La diferencia principal con el carrusel anterior radica en el efecto visual aplicado cuando se selecciona una imagen principal: esta se agrandará mientras que las demás se desenfocarán para resaltar la imagen seleccionada. Para su implementación, se sugiere seguir las siguientes directrices:

1. **Uso de JavaScript sin Bibliotecas:**

   - Implementa la lógica del carrusel utilizando JavaScript puro, sin depender de bibliotecas externas.
   - Utiliza JavaScript para controlar el comportamiento del carrusel, incluyendo la ampliación de la imagen seleccionada y el desenfoque de las imágenes no seleccionadas.
   - Ejemplo de cómo aplicar el efecto de desenfoque utilizando JavaScript:

     ```javascript
     const images = document.querySelectorAll(".carousel-item img");

     images.forEach((image) => {
       image.addEventListener("click", () => {
         images.forEach((img) => (img.style.filter = "blur(5px)"));
         image.style.transform = "scale(1.2)";
         image.style.zIndex = "9999";
       });
     });
     ```

2. **Estilización con CSS:**
   - Utiliza CSS para aplicar estilos adicionales al carrusel y a las imágenes, como la ampliación y el desenfoque.
   - Define clases CSS para aplicar estilos específicos a las imágenes seleccionadas y no seleccionadas.
   - Ejemplo de cómo estilizar las imágenes seleccionadas y no seleccionadas con CSS:
     ```css
     .carousel-item {
       transition: transform 0.5s;
     }
     .selected {
       transform: scale(1.2);
       z-index: 9999;
     }
     .unselected {
       filter: blur(5px);
     }
     ```

Al implementar este bloque, asegúrate de que las imágenes estén organizadas de manera atractiva y que el efecto de desenfoque resalte la imagen seleccionada de manera efectiva. Además, proporciona controles de navegación claros para permitir a los usuarios explorar el carrusel con facilidad.

### Bloque 5: Testimonios de Clientes - Implementación en el Sitio

Para implementar los testimonios de clientes en el sitio, sigue estos pasos:

1. **Estructura HTML:**

   - Utiliza etiquetas HTML semánticas para estructurar los testimonios y las fotografías de los clientes.
   - Considera utilizar listas `<ul>` o `<ol>` para organizar los testimonios, con cada testimonio dentro de un elemento `<li>`.
   - Incluye imágenes de los clientes utilizando la etiqueta `<img>` con el atributo `src` que apunte a la ruta de la imagen y el atributo `alt` para describir brevemente la imagen.

2. **Estilo CSS:**

   - Estiliza los testimonios y las imágenes de los clientes utilizando CSS para garantizar una presentación visual atractiva.
   - Aplica estilos para mejorar la legibilidad del texto, como el tamaño de fuente y el espaciado entre líneas.
   - Asegúrate de que las imágenes de los clientes se muestren correctamente y tengan un tamaño adecuado en diferentes dispositivos.

3. **Diseño Responsivo:**

   - Implementa un diseño responsive que se adapte a diferentes tamaños de pantalla, asegurando una experiencia de usuario consistente en dispositivos móviles, tabletas y computadoras de escritorio.
   - Utiliza media queries en CSS para ajustar el diseño y el tamaño de los elementos según el tamaño de la pantalla del dispositivo.

4. **Animaciones y Efectos:**

   - Considera agregar transiciones suaves o efectos de desplazamiento al mostrar los testimonios y las imágenes de los clientes, utilizando CSS para controlar estas animaciones.
   - Experimenta con efectos como desplazamiento parallax o animaciones al hacer clic para mejorar la interactividad y la experiencia del usuario.

5. **Enfoque en la Experiencia del Cliente:**
   - Destaca las palabras clave de los testimonios para resaltar los aspectos más positivos de la experiencia del cliente.
   - Utiliza una paleta de colores atractiva y coherente para transmitir una sensación de confianza y profesionalismo.
   - Asegúrate de que los testimonios sean fáciles de leer y estén claramente etiquetados para que los visitantes del sitio puedan identificar rápidamente la opinión de otros clientes.

Al implementar este bloque, busca crear una sección que transmita confianza y credibilidad a los visitantes del sitio, mostrando testimonios auténticos de clientes satisfechos. Esto puede ayudar a convertir a los visitantes en clientes potenciales al proporcionar evidencia social de la calidad de los servicios ofrecidos por la peluquería Maktub.

### Bloque 6: Zona de Turnos y Patrocinadores

Este bloque se divide en dos partes verticales:

1. **Zona de Turnos (70% del bloque):**

   - Utiliza un diseño de 70% del ancho del bloque para mostrar la zona de turnos.
   - Incorpora un calendario interactivo donde los clientes puedan ver la disponibilidad de turnos y reservar citas.
   - Proporciona opciones para que los clientes puedan acceder fácilmente a los turnos libres y realizar reservas.
   - Emplea tecnologías como JavaScript para la interactividad y PHP o algún otro lenguaje de backend para gestionar las reservas de turnos.

2. **Patrocinadores (30% del bloque):**
   - Utiliza el 30% restante del ancho del bloque para mostrar la sección de patrocinadores.
   - Crea un espacio para mostrar un logo similar al del nav, pero con algunas diferencias para destacar la sección de patrocinadores.
   - Implementa un efecto de rotación para mostrar marcas de patrocinadores de manera intermitente.
   - Utiliza CSS y JavaScript para controlar la rotación de los logos de los patrocinadores y para crear transiciones suaves entre cada logo.

Para implementar la zona de turnos, considera utilizar tecnologías como FullCalendar (para calendarios interactivos), junto con un backend para gestionar las reservas. Para la sección de patrocinadores, puedes utilizar JavaScript para controlar la rotación de los logos y CSS para darles estilo. Además, asegúrate de que ambos espacios sean responsive y se vean bien en diferentes dispositivos.

Al diseñar esta sección, busca una presentación clara y atractiva que facilite a los usuarios la reserva de turnos y que muestre los patrocinadores de manera efectiva, generando confianza en la marca de la peluquería Maktub.

## Página 2: Servicios Adicionales

### Bloque 1: Servicios Adicionales y Detalles

1. **Servicio de Transporte de Mascotas:**

   - Descripción: Ofrecemos un servicio de transporte para mascotas que incluye recogida y entrega a domicilio. Ideal para aquellos clientes que tienen dificultades para traer a sus mascotas a la peluquería.
   - Tarifa: $10 por trayecto dentro de un radio de 10 km.

2. **Entrenamiento y Socialización:**

   - Descripción: Contamos con un programa de entrenamiento y socialización para perros que incluye actividades de aprendizaje, juegos y interacción con otros perros bajo la supervisión de entrenadores profesionales.
   - Tarifa: $20 por sesión de una hora.

3. **Venta de Productos para Mascotas:**

   - Descripción: Disponemos de una variedad de productos para el cuidado y la higiene de mascotas, incluyendo champús, cepillos, juguetes y accesorios para el hogar.
   - Precios: Varían según el producto.

4. **Servicio de Cuidado Temporal:**

   - Descripción: Ofrecemos un servicio de cuidado temporal para mascotas que incluye alojamiento, alimentación y cuidados básicos mientras los dueños están ausentes.
   - Tarifa: $30 por día para perros y $20 por día para gatos.

### Bloque 2: Galería de Imágenes de Servicios Adicionales

Este bloque presenta una galería de imágenes que muestran los servicios adicionales ofrecidos por la peluquería Maktub, como el transporte de mascotas, el entrenamiento y la socialización, la venta de productos para mascotas y el cuidado temporal. Las imágenes se organizan en una cuadrícula para una fácil visualización y pueden hacer clic para ver una versión ampliada.

Para implementar esta galería de imágenes, sigue estos pasos:

1. **Estructura HTML:**

   - Utiliza etiquetas HTML semánticas para organizar las imágenes en una cuadrícula.
   - Utiliza la etiqueta `<img>` para incrustar las imágenes en la página, especificando la ruta de la imagen en el atributo `src` y una breve descripción en el atributo `alt`.

2. **Estilo CSS:**

   - Estiliza la galería de imágenes utilizando CSS para garantizar una presentación visual atractiva y coherente.
   - Define clases CSS para aplicar estilos específicos a las imágenes y a la cuadrícula en la que están organizadas.
   - Utiliza CSS para controlar el tamaño y la disposición de las imágenes en la cuadrícula, así como los efectos de transición al hacer clic en una imagen.

3. **Funcionalidad JavaScript:**

   - Implementa JavaScript para proporcionar funcionalidades adicionales a la galería de imágenes, como la visualización en pantalla completa al hacer clic en una imagen.
   - Utiliza JavaScript para controlar eventos como el clic del mouse y la navegación entre las imágenes en la versión ampliada.
   - Considera agregar efectos de animación al abrir y cerrar la versión ampliada de la imagen para mejorar la experiencia del usuario.

Al diseñar esta galería de imágenes, busca una presentación atractiva y fácil de usar que muestre claramente los servicios adicionales ofrecidos por la peluquería Maktub. Asegúrate de que las imágenes estén organizadas de manera coherente y que los usuarios puedan acceder fácilmente a una versión ampliada de cada imagen para obtener más detalles sobre los servicios.

## Página 3: Contacto

### Bloque 1: Formulario de Contacto

En esta sección se presenta un formulario de contacto que permite a los usuarios enviar consultas o comentarios a la peluquería Maktub. El formulario incluye campos para el nombre, el correo electrónico, el número de teléfono y el mensaje del usuario, así como un botón de envío para enviar el formulario.

Para implementar este formulario de contacto, sigue estos pasos:

1. **HTML:**

   - Utiliza etiquetas HTML como `<form>`, `<input>`, `<textarea>` y `<button>` para construir el formulario de contacto.
   - Define atributos como `name`, `type` y `placeholder` para los elementos del formulario, asegurándote de que la estructura sea semánticamente correcta.

2. **Estilo CSS:**

   - Estiliza el formulario de contacto utilizando CSS para garantizar una presentación visual atractiva y coherente.
   - Define clases CSS para aplicar estilos específicos a los diferentes elementos del formulario, como campos de entrada, área de texto y botón de envío.
   - Utiliza CSS para controlar el tamaño, el color y la disposición de los elementos del formulario, así como los efectos de transición al interactuar con ellos.

3. **Funcionalidad JavaScript:**

   - Implementa JavaScript para validar los datos ingresados por el usuario en el formulario y prevenir envíos de formulario incorrectos.
   - Utiliza JavaScript para mostrar mensajes de error o confirmación al enviar el formulario y para limpiar los campos del formulario después de un envío exitoso.
   - Considera agregar animaciones o efectos visuales al mostrar mensajes de error o confirmación para mejorar la experiencia del usuario.

Al diseñar este formulario de contacto, busca una presentación clara y fácil de usar que permita a los usuarios enviar consultas o comentarios de manera rápida y sencilla. Asegúrate de que el formulario sea fácil de entender y que proporcione retroalimentación adecuada al usuario al interactuar con él.

### Bloque 2: Información de Contacto

En esta sección se presenta información de contacto adicional para la peluquería Maktub, incluyendo dirección física, números de teléfono y dirección de correo electrónico. La información se presenta en formato de lista para una fácil lectura y comprensión por parte de los usuarios.

Ejemplo de información de contacto:

- **Dirección:**
  Calle Ficticia, Nº1234
  Ciudad Imaginaria, CP 12345
- **Teléfono:**
  +123 456 789
- **Correo Electrónico:**
  info@maktubpeluqueria.com

Al diseñar esta sección, busca una presentación clara y concisa que permita a los usuarios acceder rápidamente a la información de contacto de la peluquería Maktub. Asegúrate de que la información esté organizada de manera lógica y que sea fácil de encontrar y comprender.

## Conclusiones

El desarrollo del sitio web para la peluquería Maktub ha sido un proyecto emocionante y gratificante. A lo largo de este proceso, se ha puesto un gran énfasis en la usabilidad, la accesibilidad y la experiencia del usuario, con el objetivo de crear un sitio web que sea atractivo, funcional y fácil de usar para los clientes potenciales.

Se ha trabajado en colaboración con el cliente para entender sus necesidades y expectativas, y se ha utilizado este conocimiento para diseñar y desarrollar un sitio web que refleje la identidad y los valores de la peluquería Maktub. Se han implementado diferentes bloques y secciones para presentar los servicios, promociones y testimonios de la peluquería de manera clara y efectiva, y se han utilizado tecnologías modernas como HTML5, CSS3 y JavaScript para garantizar una experiencia de usuario de alta calidad.

En resumen, el sitio web de la peluquería Maktub es un testimonio del poder del diseño centrado en el usuario y la colaboración entre el cliente y el equipo de desarrollo. Esperamos que este sitio web ayude a la peluquería Maktub a alcanzar sus objetivos comerciales y atraer a nuevos clientes, proporcionando una plataforma en línea que sea informativa, atractiva y fácil de usar.

Para cualquier consulta adicional o solicitud de modificación, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte en todo lo que necesites.
