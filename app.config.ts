export default defineAppConfig({
  arch: {
    title: 'Arch Starter',
    info: {
      email: 'mail@gmail.com',
    },
    footer: {
      links: [
        {
          title: '🎯 Goals',
          url: '/goals'
        }
      ]
    },
    socials: [
      {
        name: 'Github',
        icon: 'uil:github',
        url: 'https://github.com/arashsheyda',
        color: '#000000',
        target: '_blank'
      },
      {
        name: 'Instgaram',
        icon: 'uil:instagram',
        url: 'https://www.instagram.com/arash.sheyda',
        color: '#e4405f',
        target: '_blank'
      },
      {
        name: 'Twitter',
        icon: 'uil:twitter',
        url: 'https://twitter.com/arash_sheyda',
        color: '#1da1f2',
        target: '_blank'
      }
    ],
  }
})
