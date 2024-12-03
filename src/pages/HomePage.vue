<script setup>
import { artService } from '@/services/ArtService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { onMounted } from 'vue';


onMounted(() => {
  logger.log('on mounted is running')
  discoverArt()
})

async function discoverArt() {
  try {
    await artService.discoverArt()
  } catch (error) {
    logger.error('[DISCOVER ART]', error)
    Pop.error(error)
  }
}

</script>

<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col">
        <h1>Codeworks Institute of Art</h1>
        <hr>
        <p>1 of 27</p>
        <button>Next</button>
        <button>Previous</button>
      </div>
    </div>
  </section>
  <section class="container-fluid">
    <div class="row">
      <div class="col-3">
        <img src="" alt="">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
