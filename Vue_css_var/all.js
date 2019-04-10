var app = new Vue({
    el: '#app',
    data: {
        spacing: 0,
        blur: 0,
        base: "#ffc600"
    },
    mounted: function() {
        // Update the CSS Variables when mounted
        this.updateCSSSpacing()
        this.updateCSSBlur()
        this.updateCSSBase()
    },
    methods: {
        // Update the style of the root DOM element that the Vue instance is managing
        updateCSSVariable: function(name, value) {
            this.$el.style.setProperty(name, value)
        },
        updateCSSSpacing: function() {
            this.updateCSSVariable('--spacing', `${this.spacing}px`)
        },
        updateCSSBlur: function() {
            this.updateCSSVariable('--blur', `${this.blur}px`)
        },
        updateCSSBase: function() {
            this.updateCSSVariable('--base', this.base)
        }
    },
    watch: {
        // When the value of the spacing attribute changes, update its CSS variable
        spacing: function(newValue, oldValue) {
            this.updateCSSSpacing()
        },
        // When the value of the blur attribute changes, update its CSS variable
        blur: function(newValue, oldValue) {
            this.updateCSSBlur()
        },
        // When the value of the base attribute changes, update its CSS variable
        base: function(newValue, oldValue) {
            this.updateCSSBase()
        }
    }
})