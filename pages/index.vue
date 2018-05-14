<template>
  <section class="container">
    <div>
      <img src="110ef776ea0ba461 (1).png" style="max-width: 80vw"/>
      <h1 class="title">
        #toshiakaigo2018
      </h1>
      <h2 class="subtitle">
        PR: <a href="https://mikutter.connpass.com/event/86077/">mikutter Nagoya 2018.5 - connpass</a>
      </h2>
      <timeline />
      <a class="toot" href="https://mastportal.info/intent?text=%23toshiakaigo2018" target="_blank">
        #toshiakaigo2018 でトゥート
      </a>
      <a href="https://github.com/rinsuki/toshiakaigo2018">https://github.com/rinsuki/toshiakaigo2018</a>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Timeline from '~/components/Timeline.vue'

export default {
  components: {
    AppLogo,
    Timeline
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.toot {
  display: block;
  margin-top: 1em;
  background: #00a4ff;
  color: white;
  padding: 0.5em;
  margin: 1em 0;
}
.container > div {
  margin-bottom: 2em
}
</style>
