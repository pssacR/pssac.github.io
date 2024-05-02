# Proyecto de Desarrollo de Sitio Web para Peluquería Canina

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

En este bloque, se presentan imágenes que representan los distintos servicios ofrecidos por la peluquería canina. Cuando el usuario posa el mouse sobre una imagen, esta se rotará y mostrará las especificaciones básicas del servicio, brindando así una vista detallada de cada opción disponible.

Ejemplo de servicios que puede ofrecer una peluquería canina:

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

En esta sección, se detallan las promociones y los precios de los servicios ofrecidos por la peluquería canina. Para su implementación, se sugieren las siguientes directrices:

1. **Lista de Promociones y Servicios:**

   - Enumera las promociones y servicios utilizando listas ordenadas o no ordenadas para una fácil comprensión.
   - Cada ítem de la lista debe incluir el nombre de la promoción o servicio y una breve descripción de los beneficios que ofrece.
   - Considera utilizar imágenes para complementar la descripción y hacerla más atractiva visualmente.
   - Ejemplo:

     - **Promoción de Verano:**
       Oferta especial que incluye corte de pelo, baño con productos premium y tratamiento de spa para refrescar a tu mascota en los días calurosos.
     - **Descuento por Referidos:**
       Obtén un descuento del 10% en tu próximo servicio por cada amigo que refieras a nuestra peluquería canina.

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
   - Considera agregar un llamado a la acción al final de la sección para animar a los usuarios a reservar sus citas o ponerse en contacto con la peluquería canina.

---

### Bloque 4: Carrusel con Mascotas Siendo Atendidas

En esta sección se presenta un carrusel de imágenes que muestra mascotas siendo atendidas en la peluquería canina. La diferencia principal con el carrusel anterior radica en el efecto visual aplicado cuando se selecciona una imagen principal: esta se agrandará mientras que las demás se desenfocarán para resaltar la imagen seleccionada. Para su implementación, se sugiere seguir las siguientes directrices:

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

Al implementar este bloque, busca crear una sección que transmita confianza y credibilidad a los visitantes del sitio, mostrando testimonios auténticos de clientes satisfechos. Esto puede ayudar a convertir a los visitantes en clientes potenciales al proporcionar evidencia social de la calidad de los servicios ofrecidos por la peluquería canina.

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

Al diseñar esta sección, busca una presentación clara y atractiva que permita a los usuarios reservar turnos fácilmente y también muestre de manera efectiva los logos de los patrocinadores. Esto ayudará a promover la marca y mejorar la experiencia del usuario en el sitio web de la peluquería canina.

### Bloque 7: Footer

En este bloque se incluye el footer del sitio web, que proporciona información adicional y enlaces importantes para los usuarios. El footer se divide en varias secciones:

1. **Información de Derechos de Autor:**

   - Incluye un mensaje que indique los derechos de autor del sitio web, como "© [Año] Peluquería Canina [Nombre de la Empresa]".
   - Asegúrate de cumplir con las leyes de derechos de autor y proporcionar la información legal necesaria.

2. **Información de Contacto:**

   - Proporciona detalles de contacto de la peluquería canina, como dirección física, número de teléfono y dirección de correo electrónico.
   - Facilita a los usuarios la comunicación con la empresa para consultas, reservas o cualquier otro propósito.

3. **Redes Sociales:**

   - Vuelve a incluir imágenes de las redes sociales, como Facebook e Instagram, para que los usuarios puedan acceder fácilmente a los perfiles sociales de la peluquería canina.
   - Agrega enlaces a los perfiles sociales correspondientes para que los usuarios puedan seguir y conectarse con la empresa en las redes sociales.

4. **Diseño y Presentación:**

   - Diseña el footer de manera clara y ordenada, con una distribución equilibrada de las diferentes secciones.
   - Utiliza colores y estilos que se alineen con el diseño general del sitio web para mantener la coherencia visual.

5. **Implementación Técnica:**
   - Utiliza HTML para estructurar el footer y dividirlo en las diferentes secciones mencionadas.
   - Emplea CSS para estilizar el footer y asegurarte de que tenga una apariencia atractiva y profesional.
   - Añade enlaces funcionales y asegúrate de que las imágenes de las redes sociales estén vinculadas a los perfiles correspondientes.

Al implementar el footer, asegúrate de que sea accesible desde todas las páginas del sitio web y proporcione información útil y relevante para los usuarios. Esto ayudará a mejorar la experiencia general del usuario y a proporcionar una presentación completa y profesional del sitio web de la peluquería canina.

---

---

### Página 2: Servicio 5 - Masajes para Mascotas

#### Bloque 1: Nav Bar

`

# Nav Bar (Repetido de la página anterior)

## Encabezado

- Presenta el nombre del servicio y una breve descripción para captar la atención del usuario.
- Destaca los aspectos únicos o destacados de este servicio en particular.

## Detalles del Servicio

- Proporciona una descripción detallada del servicio, incluyendo los procedimientos, técnicas y productos utilizados.
- Destaca los beneficios y resultados que los clientes pueden esperar al utilizar este servicio.

## Galería de Imágenes

- Muestra imágenes relevantes del servicio en acción, como mascotas disfrutando de masajes relajantes.
- Asegúrate de seleccionar imágenes de alta calidad que destaquen la experiencia de recibir este servicio.

## Precios y Promociones

- Enumera los precios del servicio de masajes para mascotas y cualquier promoción disponible.
- Proporciona información clara sobre cómo los clientes pueden aprovechar estas ofertas especiales.

## Call to Action

- Invita a los usuarios a programar una cita para este servicio de masajes para mascotas.
- Proporciona botones de llamada a la acción claros y llamativos para que los usuarios puedan reservar fácilmente.

# Footer (Repetido de la página anterior)

- Incluye información de contacto, enlaces a redes sociales y detalles de derechos de autor.

## Página 3: Formulario de Contacto

# Nav Bar (Repetido de la página anterior)

- Incluye el logo de la empresa y los enlaces de navegación.
- Asegúrate de que los usuarios puedan acceder fácilmente a otras partes del sitio web.

## Formulario de Contacto

- Crea un formulario de contacto con campos para el nombre, correo electrónico, número de teléfono y mensaje.
- Considera la posibilidad de añadir una lista desplegable para que los usuarios puedan seleccionar un profesional específico.
- Proporciona un botón de envío claro y visible para que los usuarios puedan enviar sus consultas fácilmente.

## Información Adicional

- Incluye detalles de contacto adicionales, como dirección física y números de teléfono.
- Proporciona instrucciones claras sobre cómo los usuarios pueden esperar ser contactados después de enviar el formulario.

# Footer (Repetido de la página anterior)

- Incluye información de contacto, enlaces a redes sociales y detalles de derechos de autor.
