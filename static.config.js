// import React from 'react'
import axios from 'axios'
//
import withCSSModules from './config/webpack.config'
// import withCss from 'react-static/lib/plugins/withCssLoader'
import withFiles from 'react-static/lib/plugins/withFileLoader'

export default {
    getSiteProps: () => ({
        title: 'React Static'
    }),
    getRoutes: async () => {
        const { data: posts } = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        )
        return [
            {
                path: '/'
            },
            {
                path: '/about'
            },
            {
                path: '/blog',
                getProps: () => ({
                    posts
                }),
                children: posts.map(post => ({
                    path: `/post/${post.id}`,
                    getProps: () => ({
                        post
                    })
                }))
            }
            // {
            //     // If using automatic routing, you can specify a component to render the
            //     // 404 page by creating a route with `is404` set to `true` and defining a
            //     // `component` to use.
            //     is404: true,
            //     component: 'src/containers/NotFound'
            // }
        ]
    },
    // siteRoot: 'http://localhost:5001', // Optional, but necessary for the sitemap.xml

    // // The entry location for your app, defaulting to `./src/index.js`
    // // This file must export the JSX of your app as the default export,
    // // eg. `default export <MyApp />`.
    // // It also handles the rendering of your app while in development mode
    // // (including hot reloading). For a brief example, see the Project
    // // Setup section above.
    // entry: './src/index.js',

    // // An optional custom React component that renders the base
    // // Document for every page, including the dev server. If used, it must utilize the
    // // `Html`, `Head`, `Body` and `children` for react-static to work. The optional
    // // `siteProps` prop will contain any data returned by `getSiteProps` in your config
    // // and `renderMeta` prop refers to any data you potentially assigned to it during
    // // the custom `renderToHtml` hook.
    // Document: ({ Html, Head, Body, children, siteProps, renderMeta }) => (
    //     <Html lang="en-US">
    //         <Head>
    //             <meta charSet="UTF-8" />
    //             <meta
    //                 name="viewport"
    //                 content="width=device-width, initial-scale=1"
    //             />
    //         </Head>
    //         <Body>{children}</Body>
    //     </Html>
    // ),

    // webpack: [withCss, withFiles],
    webpack: [
        // // Custom, on-the-fly webpack customization
        // (config, { stage }) => {
        //     if (stage === 'prod') {
        //         //   config.module.rules.push()
        //     }
        //     return config
        // },
        withCSSModules,
        withFiles
    ],
    // Optional. Set to true to serve the bundle analyzer on a production build.
    bundleAnalyzer: false
}
