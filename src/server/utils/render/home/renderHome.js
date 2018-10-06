const renderHome = (html, preloadedState, headers, hashManifest) => {
  return (`
    <!doctype html>
      <html>
        <head>
          <title>${headers.title}</title>
          ${process.env.NODE_ENV !== 'production' ? '<meta name="robots" content="noindex,nofollow">' : ''}
          <meta name="title" content="${headers.title}">
          <meta name="description" content="${headers.description}">
          <meta property="og:url" content="${headers.url}" />
          <meta property="og:title" content="${headers.title}" />
          <meta property="og:description" content="${headers.description}" />
          <meta property="og:type" content="website" />
          ${headers.image ?
            `<meta property="og:image" content=${headers.image} />` :
            '<meta property="og:image" content="https://callisto.network/opengraphs/default-og.png" />'
          }
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="CallistoSupport" />
          <meta name="twitter:title" content="${headers.title}" />
          <meta name="twitter:description" content="${headers.description}" />
          <meta name="twitter:domain" content="callisto.network" />
          ${headers.image ?
            `<meta property="twitter:image:src" content=${headers.image} />` :
            '<meta property="twitter:image:src" content="https://callisto.network/opengraphs/default-og.png" />'
          }
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
            integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
            crossorigin="anonymous"
          >
          <link rel="canonical" href="${headers.url}" />
          <link rel="alternate" href="${headers.url}" hreflang="en" />
          <link rel="alternate" href="https://callisto.network/de${headers.baseUrl}" hreflang="de" />
          <link rel="alternate" href="https://callisto.network/es${headers.baseUrl}" hreflang="es" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0,
            maximum-scale=1, minimum-scale=1, shrink-to-fit=no">
          <link rel="stylesheet" href="${hashManifest[1]}" type="text/css"/>
        </head>
        <body>
          <div id="galileo">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="${hashManifest[2]}" type="text/javascript"></script>
          <script src="${hashManifest[0]}" type="text/javascript"></script>
        </body>
    </html>
  `);
}

export default renderHome;
