import Vue from 'vue'
import VueResource from 'vue-resource'     

Vue.use(VueResource);


  // @param {integer} id
 
  // @return {Promise}
  
export const getAllData = () => {
    return Vue.http.get('https://localhost:44302/api/reports/salaryreportbymonth');
};
export const getAllDataTest = () => {
  return Vue.http.get('https://localhost:44302/api/reports/salaryreportbymonth');
};
