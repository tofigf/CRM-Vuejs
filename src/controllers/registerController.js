import {email,required,minLength} from 'vuelidate/lib/validators'

export default {
  name: 'register',
  data: () => ({
    email: '',
    password: '',
    name:'',
    agree:false
  }),
  validations: {
    email: {email,required},
    password: {required,minLength:minLength(6)},
    name:{required},
    agree:{checked:v=> v}
  },
  methods:{
    submitHandler(){
      if(this.$v.$invalid){
        this.$v.$touch()
        return
      }
      const formData ={
        email:this.email,
        password:this.password,
        name:this.name
      }
      this.$router.push('/')
    }
  }

}
