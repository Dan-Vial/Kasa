
const range = document.createRange()
const parent = document.head
function addHtml(stringHtml) {
  parent.prepend(range.createContextualFragment(stringHtml))
}

function Head() {
  addHtml(
    `<meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>- Kasa</title>
    <meta name="description" content="" />

    <meta property="og:site_name" content="" />
    <meta property="og:type" content="" />
    <meta property="og:title" content="" />
    <meta property="og:description" content="" />
    <meta property="og:url" content="" />
    <meta property="og:image" content="" />

    <meta name="twitter:card" content="" />
    <meta name="twitter:site" content="" />
    <meta name="twitter:title" content="" />
    <meta name="twitter:description" content="" />
    <meta name="twitter:url" content="" />
    <meta name="twitter:image" content="" />

    <script type="application/ld+json">
      {{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "image": "",
        "name": "",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "",
          "addressLocality": "",
          "postalCode": "",
          "addressRegion": "",
          "addressCountry": "fr"
        },
        "telephone": "",
        "url": "",
        "sameAs": "",
        "openingHours": [
          "Mo,Tu,We,Th,Fr 10:00-19:00"
        ],
        "priceRange": ""
      }}
    </script>`
  )
}

// function Head() {
//   return (
//     <>
//       <meta charSet="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>- Kasa</title>
//       <meta name="description" content="" />

//       <meta property="og:site_name" content="" />
//       <meta property="og:type" content="" />
//       <meta property="og:title" content="" />
//       <meta property="og:description" content="" />
//       <meta property="og:url" content="" />
//       <meta property="og:image" content="" />

//       <meta name="twitter:card" content="" />
//       <meta name="twitter:site" content="" />
//       <meta name="twitter:title" content="" />
//       <meta name="twitter:description" content="" />
//       <meta name="twitter:url" content="" />
//       <meta name="twitter:image" content="" />

//       <script type="application/ld+json">
//         {{
//           "@context": "https://schema.org",
//           "@type": "LocalBusiness",
//           "image": "",
//           "name": "",
//           "address": {
//             "@type": "PostalAddress",
//             "streetAddress": "",
//             "addressLocality": "",
//             "postalCode": "",
//             "addressRegion": "",
//             "addressCountry": "fr"
//           },
//           "telephone": "",
//           "url": "",
//           "sameAs": "",
//           "openingHours": [
//             "Mo,Tu,We,Th,Fr 10:00-19:00"
//           ],
//           "priceRange": ""
//         }}
//       </script>

//     </>
//   )
// }

export default Head