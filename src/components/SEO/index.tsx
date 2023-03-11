import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({
  description = '',
  lang = 'en',
  meta = [],
  title,
}: SEOProps): React.ReactElement {
  const { site } = useStaticQuery<QueryTypes>(SEOStaticQuery)

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const metaUrl = site.siteMetadata?.siteUrl || ''

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={'Gatsby Starter'}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: '/og.png',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: metaUrl,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          property: 'twitter:image',
          content: '/og.png',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata?.author || '',
        },
        {
          name: 'twitter:title',
          content: metaTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          property: 'twitter:url',
          content: metaUrl,
        },
        { name: 'robots', content: 'index' },
      ].concat(meta)}
    />
  )
}

// Types
type SEOProps = {
  description?: string
  lang?: string
  meta?: Meta
  title?: string
}

type Meta = ConcatArray<PropertyMetaObj | NameMetaObj>

type PropertyMetaObj = {
  property: string
  content: string
}

type NameMetaObj = {
  name: string
  content: string
}

type QueryTypes = {
  site: {
    siteMetadata: {
      siteUrl: string
      title: string
      description: string
      author: string
    }
  }
}

const SEOStaticQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`

export default SEO
