const apiUrl = 'https://awiclass.monoame.com/api/command.php?type=get&name=post';

Vue.component('postbox', {
    template: '#post',
    props: ['post'],
    computed: {
        coverurl() {
            if (this.post.cover.indexOf('http') !== -1) {
                return this.post.cover
            } else {
                return 'http://zashare.org' + this.post.cover
            }
        },
        covercss() {
            return { 'background-image': 'url(' + this.coverurl + ')' }
        }
    }
})

var vm = new Vue({
    el: '#app',
    data: {
        posts: [],
        filter: '',
    },
    mounted() {
        let my = this
        $.get(apiUrl).then((res) => {
            my.posts = JSON.parse(res)
        })
    },
    computed: {
        filteredPost() {
            var my = this
            return this.posts.map((post) => {
                let tempPost = JSON.parse(JSON.stringify(post))
                    // get description
                tempPost.description = tempPost.description.substr(0, 60) + '...'

                return tempPost
            }).filter((post) => {
                let tag = ['title', 'description', 'name_short']
                let flag = false
                tag.forEach((now_tag) => {
                    if (post[now_tag].toLowerCase().indexOf(this.filter.toLowerCase()) !== -1) {
                        flag = true
                    }
                })
                return flag
            }).map((tempPost) => {
                if (my.filter === '') return tempPost

                let tag = ['title', 'description', 'name_short']
                tag.forEach((nowTag) => {
                    let regex = new RegExp(this.filter, 'i')
                    let match = tempPost[nowTag].match(regex)

                    if (match) {
                        tempPost[nowTag] = tempPost[nowTag].replace(
                            regex,
                            '<span class="highlight">' + match[0] + '</span>')
                    }
                })
                return tempPost
            })
        }
    }
})