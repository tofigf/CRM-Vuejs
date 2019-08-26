<template>
  <div>
  <div class="page-title">
    <h3>Yeni</h3>
  </div>

  <form class="form">
    <div class="input-field" >
      <select>
        <option
        >name cat</option>
      </select>
      <label>Kateqoriya</label>
    </div>

    <p>
      <label>
        <input
            class="with-gap"
            name="type"
            type="radio"
            value="income"
        />
        <span>Gelir</span>
      </label>
    </p>

    <p>
      <label>
        <input
            class="with-gap"
            name="type"
            type="radio"
            value="outcome"
        />
        <span>Xerc</span>
      </label>
    </p>

    <div class="input-field">
      <input
          id="amount"
          type="number"
      >
      <label for="amount">Mebleg</label>
      <span class="helper-text invalid"></span>
    </div>

    <div class="input-field">
      <input
          id="description"
          type="text"
      >
      <label for="description">Serh</label>
      <span
            class="helper-text invalid"></span>
    </div>

    <button class="btn waves-effect waves-light" type="submit">
      Yarat
      <i class="material-icons right">send</i>
    </button>
  </form>
</div>
</template>
