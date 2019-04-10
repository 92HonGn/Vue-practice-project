Vue.component('tabs', {
    template: `
            <div>
                <ul class="nav nav-tabs" role="tablist">
                    <li v-for="tab in tabs" class="nav-item" role="presentation">
                        <a :href="'#' + tab.name" @mouseover.prevent="selectTab(tab)" role="tab" class="nav-link"
                            :class="{ 'active': tab.isActive}">{{tab.text}}</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <slot name="tabwrap"></slot>
                </div>
            </div>
            `,
    data() {
        return {
            tabs: []
        }
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(function(tab) {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});
Vue.component('tab', {
    template: `
                <div :id="'#' + this.name" role="tabpanel" v-if="isActive">
                    <slot name="tabinner"></slot>
                </div>
            `,
    data() {
        return {
            isActive: false
        }
    },
    props: {
        text: {
            required: true
        },
        name: {
            required: true
        },
        selected: {
            default: false
        }
    },
    mounted() {
        if (location.hash != "") {
            const url = location.hash;
            this.isActive = (url == '#' + this.name);
        } else {
            this.isActive = this.selected;
        }
    }
});

const app = new Vue({
    el: "#app",
    name: "testTab"
})