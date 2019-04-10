Vue.use(Vuex);
const store = new Vuex.Store({
    strict: true,
    state: {
        items: []
    },
    actions: {
        addItem({
            commit
        }, item) {
            commit('ADD_ITEM', item)
        },
        initItems({
            commit
        }, items) {
            commit('INIT_ITEMS', items)
        },
        changeItemState({
            commit
        }, index) {
            commit('CHANGE_ITEM_STATE', index)
        }
    },
    mutations: {
        ADD_ITEM(state, payload) {
            state.items.push(payload)
        },
        INIT_ITEMS(state, payload) {
            state.items = payload
        },
        CHANGE_ITEM_STATE(state, payload) {
            state.items[payload].done = !state.items[payload].done
        }
    }
})

var vm = new Vue({
    el: '#app',
    data: {

    },
    store,
    methods: {
        addItem: function(e) {
            e.preventDefault();
            const text = (e.target.querySelector('[name="item"]')).value;
            if (text === '') return;

            const item = {
                text,
                done: false
            }
            this.$store.dispatch('addItem', item);
            localStorage.setItem('item', JSON.stringify(this.$store.state.items));
        },
        toggleDone: function(e) {
            if (!e.target.matches('input')) return;
            const el = e.target;
            this.$store.dispatch('changeItemState', el.dataset.index);
            localStorage.setItem('items', JSON.stringify(this.$store.state.items));
        }
    },
    beforeCreate() {
        const lsItems = localStorage.getItem('items');
        if (lsItems !== null) {
            this.$store.dispatch('initItems', JSON.parse(lsItems));
        }
    }

})