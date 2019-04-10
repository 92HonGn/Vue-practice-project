let vm = new Vue({
    el: '#app',
    data: {
        bands: [
            'The Plot in You',
            'The Devil Wears Prada',
            'Pierce the Veil', 'Norma Jean',
            'The Bled', 'Say Anything',
            'The Midway State',
            'We Came as Romans',
            'Counterparts',
            'Oh, Sleeper',
            'A Skylit Drive',
            'Anywhere But Here',
            'An Old Dog'
        ]
    },
    methods: {
        strip(bandName) {
            return bandName.replace(/^(a |the |an )/i, '').trim();
        },
        sortBands() {
            return this.bands.sort((a, b) => this.strip(a) > this.strip(b) ? 1 : -1)
        }
    }
})