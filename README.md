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
