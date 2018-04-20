module.exports = {
  head: {
    titleTemplate: 'portfolio - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  css: [
    '@/assets/css/reset.scss',
    '@/assets/css/base.scss'
  ],
  env: {
    baseURL: (process.env.NODE_ENV === 'production' ? 'surumebeer-f6a74.firebaseapp.com' : 'http://localhost:3000')
  }
}
