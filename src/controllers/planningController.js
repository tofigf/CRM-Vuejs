import { mapGetters } from 'vuex'
import axios from 'axios'
import {getAllData,getAllDataTest} from '../models/report';

export default {
  name: "planning",
  data() {
    return {
      gets: [],
      resource: null,
      timer: ''
     
    }
  },
 
  created () {
    // var vm = this
    // this.$http.get('https://localhost:44302/api/reports/salaryreportbymonth')
    // .then(function(response) {
    //   vm.posts = response.body
    //   console.log( response.body)
    // })

    // this.resource.get().then(res => res.json())
    //   .then(gets => this.gets = gets)

    getAllData().then(res => res.json())
    .then(gets=> this.gets = gets)

    this.timer = setInterval(this.getAllData(), 30000)
},


};

