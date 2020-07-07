import appConfig from '@src/app.config';

<template>
  <Layout>
    <h1>Users list</h1>
    <div>
      <playgroundComp />
    </div>
  </Layout>
</template>

<script>
import playgroundComp from '@components/playgroundComp.vue'

import Layout from '@layouts/main.vue'
export default {
  components: { Layout, playgroundComp },
}
</script>
