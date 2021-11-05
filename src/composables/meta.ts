export type MetaDataOptions = {
  title?: string
  description?: string
  image?: string
  siteName?: string
}

export const setMetadata = (options: MetaDataOptions = {}) => {
  const {
    title = 'DB Demo CodeTip',
    description = 'Hello there!',
    image = '/landing_preview.jpg', // for og:image and twitter:image
    siteName = 'DB Demo CodeTip',
  } = options
  return useHead({
    title,
    meta: [
      { name: 'description', content: description },

      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      //   { property: 'og:locale', content: 'th_TH' },
      { property: 'og:site_name', content: siteName },

      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
      { property: 'twitter:image', content: image },

      { name: 'apple-mobile-web-app-capable', content: 'yes' },
    ],
  })
}
