<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Kiçik Mühasibatlıq</span>
      <div class="input-field">
        <input id="email" type="text" 
        v-model.trim="email"
        :class="{invalid:($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
         />
        <label for="email">Email</label>
        <small class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
          >
          Email boş ola bilməz
          </small>
            <small class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
          >
          Email düzgün yazın
          </small>
      </div>
      <div class="input-field">
        <input id="password" type="password"
          v-model.trim="password"
        :class="{invalid:($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
         />
        <label for="password">Password</label>
        <small class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
          >
          Şifrəni doldurun</small>
            <small class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          >
          Şifrə minimum {{$v.password.$params.minLength.min}} xarakter olmalıdı. Hal-hazırda {{password.length}}</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Giriş
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
      Hesabınız yoxdu?
        <router-link to="/register">Qeydiyyatdan keçin</router-link>
      </p>
    </div>
  </form>
</template>

<script src="../../controllers/loginController.js"></script>



