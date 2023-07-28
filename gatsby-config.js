module.exports = {
    siteMetadata: {
        title: 'Blue Functor Starter',
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-create-client-paths',
            options: { prefixes: ['/reach-router/*', '/react-router/*'] },
        },
    ],
};
