<template>
  <div>
    <div class="page-title">
      <h3>Planlasdirma</h3>
      <h4>12 212</h4>
      </div>
  

    <section>
      <div>
        <p>
          <strong>:</strong>
          12 122 из 14 0000
        </p>
        <div class="progress">
          <div class="determinate green" style="width:40%"></div>
        </div>
      <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Item Name</th>
              <th>Item Price</th>
          </tr>
        </thead>

        <tbody>
      <tr v-for="item in gets" :key="item.Id">
              <td>{{item.Name}}</td>
              <td>{{item.Total}}</td>
              <td>{{item.Date | date('date')}}</td>
          </tr>
        
        </tbody>
      </table>
       
      </div>
    </section>
  </div>
</template>

<script src="../../controllers/planningController.js"></script>

