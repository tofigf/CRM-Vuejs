<template>
  
<div>
  <div class="page-title">
    <h3>Kateqoriya</h3>
  </div>
  <section>
    <div class="row">
      <div class="col s12 m6">
        <div>
          <div class="page-subtitle">
            <h4>Yaratmaq</h4>
          </div>

          <form>
            <div class="input-field">
              <input
                  id="name"
                  type="text"
              >
              <label for="name">Adi</label>
              <span class="helper-text invalid"></span>
            </div>

            <div class="input-field">
              <input
                  id="limit"
                  type="number"
              >
              <label for="limit">Limit</label>
              <span class="helper-text invalid"></span>
            </div>

            <button class="btn waves-effect waves-light" type="submit">
              Yarat
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
      <div class="col s12 m6">
        <div>
          <div class="page-subtitle">
            <h4>Deyis</h4>
          </div>

          <form>
            <div class="input-field" >
              <select>
                <option>Kateqoriya</option>
              </select>
              <label>Sec</label>
            </div>

            <div class="input-field">
              <input type="text" id="name">
              <label for="name">Ad</label>
              <span class="helper-text invalid"></span>
            </div>

            <div class="input-field">
              <input
                  id="limit"
                  type="number"
              >
              <label for="limit">Limit</label>
              <span class="helper-text invalid"></span>
            </div>

            <button class="btn waves-effect waves-light" type="submit">
              Yenile
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

</template>
