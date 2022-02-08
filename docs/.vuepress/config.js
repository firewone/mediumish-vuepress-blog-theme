module.exports = {
  title: 'AnyShare',
  base: '/',
  dest: 'public',
  description: 'Mediumish theme with VuePress and Forestry',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'Sal',
      avatar: '/assets/img/sal.jpg',
      link: 'https://wowthemes.net/donate',
      linktext: 'Follow',
      },
      {
        name: 'John Doe',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
        linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: 'https://facebook.com/serpihan.link',
        },
        {
          type: 'github',
          link: 'https://github.com/wongsepele',
        },
        {
          type: 'gitlab',
          link: 'https://gitlab.com/venomserl1',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'linkedin',
          link: '#',
        },
        {
          type: 'mail',
          link: 'venomserl1@gmail.com',
        },
        {
          type: 'messenger',
          link: 'https://facebook.com/serpihan.link',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/wowthemesnet',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
        {
          text: 'Licensed MIT.',
          link: 'https://bootstrapstarter.com/license/',
        },
        {
          text: '© 2022 AnyShare.cf',
          link: 'https://anyshare.cf',
        },
      ],
    },

    sitemap: {
      hostname: 'https://anyshare.cf/sitemap.xml'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: 'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b'
    },
    feed: {
      canonical_base: 'https://github.com/venomserl1/vuepress-theme-mediumish/',
    },
    smoothScroll: true
  },
}
