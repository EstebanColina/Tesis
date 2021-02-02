<template>
  <html>
      <!-- imagen de ejemplo -->
      <img class="ejemplo" src="/daltonicos2.jpg" alt="" style="width: 100%; height: auto">

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
</template>

<script>
export default {

}
</script>

<style>

/* se agrega un selector, en este caso la clase ejemplo */
.ejemplo {
    filter: url(#tritanopia)
}
/* Lo incluido dentro de la url debe ser la id correspondiente al filtro que se desea aplicar */

</style>