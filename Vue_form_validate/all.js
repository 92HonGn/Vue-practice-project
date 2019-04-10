const app = new Vue({
    el: "#app",
    data() {
        return {
            rules: [{
                message: '至少一個小寫字母',
                regex: /[a-z]+/
            }, {
                message: "至少一個大寫字母",
                regex: /[A-Z]+/
            }, {
                message: "最小八個字元",
                regex: /.{8,}/
            }, {
                message: "需要一個數字以上",
                regex: /[0-9]+/
            }],
            password: '',
            checkPassword: '',
            passwordVisible: false,
            submitted: false
        }
    },
    methods: {
        resetPasswords() {
            this.password = ''
            this.checkPassword = ''
            this.submitted = true
            setTimeout(() => {
                this.submitted = false
            }, 2000)
        },
        togglePasswordVisibility() {
            this.passwordVisible = !this.passwordVisible
        }
    },
    computed: {
        notSamePasswords() {
            if (this.passwordsFilled) {
                return (this.password !== this.checkPassword)
            } else {
                return false
            }
        },
        passwordsFilled() {
            return (this.password !== '' && this.checkPassword !== '')
        },
        passwordValidation() {
            let errors = []
            for (let condition of this.rules) {
                if (!condition.regex.test(this.password)) {
                    errors.push(condition.message)
                }
            }
            if (errors.length === 0) {
                return {
                    valid: true,
                    errors
                }
            } else {
                return {
                    valid: false,
                    errors
                }
            }
        }
    }
})