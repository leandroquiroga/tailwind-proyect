module.exports = {
    purge: [
        './src/**/*.html'
    ],
    dartkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'wave-pattern': 'url(../assets/img/wave-white.png)'
            }) 
        }
    },
    variants: {
        extend: {}
    },
    plugins: [],
}