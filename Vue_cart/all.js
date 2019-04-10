let inventory = [{
    name: 'Usb stick',
    options: [{
        id: 1,
        details: '16GB',
        price: 6.95
    }, {
        id: 2,
        details: '32GB',
        price: 12.95
    }, {
        id: 3,
        details: '64GB',
        price: 25.95
    }]
}, {
    name: 'Usb plug',
    options: [{
        id: 4,
        details: '3ft cable',
        price: 4.35
    }]
}, {
    name: 'small phone',
    options: [{
        id: 5,
        details: 'nokia phone',
        price: 4.35
    }]
}, {
    name: 'camera',
    options: [{
        id: 6,
        details: 'blue camaera',
        price: 76.50
    }, {
        id: 7,
        details: 'red camaera',
        price: 76.50
    }, {
        id: 8,
        details: 'yellow camaera',
        price: 76.50
    }, {
        id: 9,
        details: 'purple camaera',
        price: 76.50
    }]
}];

Vue.filter('subvalue', function(value) {
    return value.price * value.quantity;
});
//https://cythilya.github.io/2017/05/23/vue-filter/
//https://ithelp.ithome.com.tw/articles/10208812
//
let vm = new Vue({
    el: '#app',
    data: {
        products: inventory,
        shopping_cart: [],
        subtotal: 0,
        search: '',
        order: 1,
        para: ''
    },
    methods: {
        sortit: function(i) {
            this.order = this.order * -1;
            this.para = i;
        },
        addItem: function(product, opt) {
            let newPrice = opt.price;
            let newName = product.name + opt.details;
            /
            let newQua = 1;
            for (let i in this.shopping_cart) {
                let attr = this.shopping_cart[i];
                if (opt.id === attr.id) {
                    newQua = parseInt(attr.quantity) + 1;
                    let a = this.shopping_cart.indexOf(attr);
                    this.shopping_cart.splice(a, 1);
                }
            }
            let newValue = {
                price: newPrice,
                listitem: newName,
                quantity: newQua,
                id: opt.id
            }
            console.log(newValue);
            this.shopping_cart.push(newValue);
        }
    },
    computed: {
        count: function() {
            let iteminCart = 0;
            for (let i in this.shopping_cart) {
                iteminCart += parseInt(this.shopping_cart[i].quantity);
            }
            return iteminCart;
        },
        total: function() {
            var totalinCart = 0;
            for (var i in this.shopping_cart) {
                var attr = this.shopping_cart[i];
                totalinCart += parseInt(attr.quantity * attr.price);
            }
            return totalinCart;
        }
    }
});
Vue.config.devtools = true;