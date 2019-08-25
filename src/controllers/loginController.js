import {email,required,minLength} from 'vuelidate/lib/validators'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: {email,required},
    password: {required,minLength:minLength(6)}
  },
  methods: {
    submitHandler() {
      if(this.$v.$invalid){
        this.$v.$touch()
        return
      }
      const formData = {
    email:this.email,
    password:this.password  
      }
      console.log(formData);
      this.$router.push('/')
    }
  }
}
