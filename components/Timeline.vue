<template>
  <div class="timeline">
    <div class="title">#toshiakaigo2018 in social.mikutter.hachune.net</div>
    <div class="main">
      <div class="post" v-for="post in posts" :key="post.id">
        {{ post.account.display_name || post.account.username }}
        <span class="acct"><a :href="post.account.url">@{{post.account.acct}}</a></span>
        <span v-html="post.content" />
      </div>
    </div>
    <div class="more-link">
      <a href="https://social.mikutter.hachune.net/tags/toshiakaigo2018" target="_blank">More...</a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    posts: []
  }),
  mounted() {
    fetch("https://social.mikutter.hachune.net/api/v1/timelines/tag/toshiakaigo2018").then(r => r.json()).then(r => {
      this.posts = this.posts.concat(r)
    })
    const ws = new WebSocket("wss://social.mikutter.hachune.net/api/v1/streaming/?stream=hashtag&tag=toshiakaigo2018")
    ws.addEventListener("message", ({data}) => {
      const {event, payload} = JSON.parse(data)
      if (event !== "update") return
      const post = JSON.parse(payload)
      this.posts.unshift(post)
      while (this.posts.length > 10) {
        this.posts.pop()
      }
    })
  }
})
</script>

<style scoped>
  .timeline {
    text-align: left;
  }
  .timeline > div {
    padding: 0.5em;
    background: #eee;
    margin-bottom: 1px;
  }
  .post {
    margin: 0.5em 0;
  }
  .acct {
    opacity: 0.9;
    margin-left: 0.5em;
  }
</style>
