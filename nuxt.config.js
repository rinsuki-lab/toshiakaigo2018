module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'toshiakaigo2018',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'toshiakaigo2018' },
      { name: "og:image", content: "https://toshiakaigo2018.netlify.com/110ef776ea0ba461%20(1).png" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
