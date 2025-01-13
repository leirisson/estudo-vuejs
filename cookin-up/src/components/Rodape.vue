<script lang="ts">
export default {
    props:{
        texto: {
            type:String, 
            required:true
        },
    }
}
</script>

<template>
<footer class="rodape">
    {{ texto }}
</footer>
</template>

<style scodep>
.rodape {
  background: var(--verde-escuro, #263A29);
  color: var(--white, #fff);
  padding: 1.5rem 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 1300px) {
  .rodape {
    padding: 1.5rem 3.75rem;
  }
}

@media only screen and (max-width: 767px) {
  .rodape {
    padding: 1.5rem;
  }
}
</style>