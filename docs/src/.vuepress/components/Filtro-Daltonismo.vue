<template>
	<html>
<div id="app">
  <input type="file" @change="onFileChange" accept="image/*">
  <div>
    <input type="radio" name="filtros" id="check_normal" value="normal" checked @click="filterNormal">
    <label for="normal">Normal</label>

    <input type="radio" name="filtros" id="check_protanopia" value="protanopia" @click="filterProtanopia">
    <label for="protanopia">Protanopia</label>
    
    <input type="radio" name="filtros" id="check_protanomalia" value="protanomalia" @click="filterProtanomalia">
    <label for="protanomalia">Protanomalía</label>
    
    <input type="radio" name="filtros" id="check_deuteranopia" value="deuteranopia" @click="filterDeuteranopia">
    <label for="deuteranopia">Deuteranopia</label>
   
    <input type="radio" name="filtros" id="check_deuteranomalia" value="deuteranomalia" @click="filterDeuteranomalia">
    <label for="deuteranomalia">Deuteranomalía</label>
    
    <input type="radio" name="filtros" id="check_tritanopia" value="tritanopia" @click="filterTritanopia">
    <label for="tritanopia">Tritanopia</label>
    
    <input type="radio" name="filtros" id="check_tritanomalia" value="tritanomalia" @click="filterTritanomalia">
    <label for="tritanomalia">Tritanomalía</label>
   
    <input type="radio" name="filtros" id="check_acromatico" value="acromatico" @click="filterAcromatico">
    <label for="acromatico">Acromático</label>
   
    <input type="radio" name="filtros" id="check_monocromatico" value="monocromatico" @click="filterMonocromatico">
    <label for="monocromatico">Monocromático</label>
  </div>
  <div id="preview">
    <img id="preview_img" v-if="url" :src="url" />
  </div>
</div>
	
	
	
	
	
	
	

<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
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
	</html>
</template>

<script>
export default {
  data() {
    return {
      url: null,
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },

    filterNormal() {
      var img = document.getElementById("preview_img");
      img.classList.remove('filterProtanopia');
      img.classList.remove('filterProtanomalia');
      img.classList.remove('filterDeuteranopia');
      img.classList.remove('filterDeuteranomalia');
      img.classList.remove('filterTritanopia');
      img.classList.remove('filterTritanomalia');
      img.classList.remove('filterAcromatico');
      img.classList.remove('filterMonocromatico');
    },
    
    filterProtanopia() {
      var img = document.getElementById("preview_img");
      img.classList.remove('filterProtanomalia');
      img.classList.remove('filterDeuteranopia');
      img.classList.remove('filterDeuteranomalia');
      img.classList.remove('filterTritanopia');
      img.classList.remove('filterTritanomalia');
      img.classList.remove('filterAcromatico');
      img.classList.remove('filterMonocromatico');
      
      img.classList.add('filterProtanopia');
    },

    filterProtanomalia() {
      var img = document.getElementById("preview_img");
      img.classList.remove('filterProtanopia')
      img.classList.remove('filterDeuteranopia');
      img.classList.remove('filterDeuteranomalia');
      img.classList.remove('filterTritanopia');
      img.classList.remove('filterTritanomalia');
      img.classList.remove('filterAcromatico');
      img.classList.remove('filterMonocromatico');

      img.classList.add('filterProtanomalia');
    },

    filterDeuteranopia() {
      var img = document.getElementById("preview_img");
      img.classList.remove('filterProtanopia');
      img.classList.remove('filterProtanomalia');
      img.classList.remove('filterDeuteranomalia');
      img.classList.remove('filterTritanopia');
      img.classList.remove('filterTritanomalia');
      img.classList.remove('filterAcromatico');
      img.classList.remove('filterMonocromatico');
      
      img.classList.add('filterDeuteranopia');
    },

    filterDeuteranomalia() {
      var img = document.getElementById("preview_img");
      img.classList.remove('filterProtanopia');
      img.classList.remove('filterProtanomalia');
      img.classList.remove('filterDeuteranopia');
      img.classList.remove('filterTritanopia');
      img.classList.remove('filterTritanomalia');
      img.classList.remove('filterAcromatico');
      img.classList.remove('filterMonocromatico');

      img.classList.add('filterDeuteranomalia');
    },

    filterTritanopia() {
      var img = document.getElementById("preview_img");
      img.classList.remove('filterProtanopia');
      img.classList.remove('filterProtanomalia');
      img.classList.remove('filterDeuteranopia');
      img.classList.remove('filterDeuteranomalia');
      img.classList.remove('filterTritanomalia');
      img.classList.remove('filterAcromatico');
      img.classList.remove('filterMonocromatico');

      img.classList.add('filterTritanopia');
    },

    filterTritanomalia() {
      var img = document.getElementById("preview_img");
      img.classList.remove('filterProtanopia');
      img.classList.remove('filterProtanomalia');
      img.classList.remove('filterDeuteranopia');
      img.classList.remove('filterDeuteranomalia');
      img.classList.remove('filterTritanopia');
      img.classList.remove('filterAcromatico');
      img.classList.remove('filterMonocromatico');

      img.classList.add('filterTritanomalia');
    },

    filterAcromatico() {
      var img = document.getElementById("preview_img");
      img.classList.remove('filterProtanopia');
      img.classList.remove('filterProtanomalia');
      img.classList.remove('filterDeuteranopia');
      img.classList.remove('filterDeuteranomalia');
      img.classList.remove('filterTritanopia');
      img.classList.remove('filterTritanomalia');
      img.classList.remove('filterMonocromatico');

      img.classList.add('filterAcromatico');
    },

    filterMonocromatico() {
      var img= document.getElementById("preview_img");
      img.classList.remove('filterProtanopia');
      img.classList.remove('filterProtanomalia');
      img.classList.remove('filterDeuteranopia');
      img.classList.remove('filterDeuteranomalia');
      img.classList.remove('filterTritanopia');
      img.classList.remove('filterTritanomalia');
      img.classList.remove('filterAcromatico');

      img.classList.add('filterMonocromatico');
    },




  }


}

</script>

<style>
	.filterProtanopia {
		filter: url(#protanopia);
	}

  .filterProtanomalia {
		filter: url(#protanomalia);
	}

  .filterDeuteranopia {
		filter: url(#deuteranopia);
	}

  .filterDeuteranomalia {
		filter: url(#deuteranomalia);
	}

  .filterTritanopia {
		filter: url(#tritanopia);
	}

  .filterTritanomalia {
		filter: url(#tritanomalia);
	}

  .filterAcromatico {
		filter: url(#acromatico);
	}

  .filterMonocromatico {
		filter: url(#monocromatico);
	}

</style>