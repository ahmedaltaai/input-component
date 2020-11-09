<template>
  <div class="input-component-akarion">
    <div class="form">
      <form @submit.prevent="handleClick">
        <!----------------------------
            this select is meant for
            displaying Job Titles
          ------------------------------>
        <select
          id="title"
          v-model="person.title"
          name="title"
        >
          <option
            value=""
            disabled
            selected
          >
            {{ placeholder }}
          </option>
          <option
            v-for="(title, i) in titles"
            :key="i"
            :value="title"
          >
            {{ title }}
          </option>
        </select>
        <!----------------------------
            this div is meant for
            displaying the permissions
          ------------------------------>
        <div class="roles__container">
          <div
            v-for="(role, i) in roles"
            :key="i"
          >
            <input
              :id="role"
              v-model="person.role"
              type="checkbox"
              :value="role"
            >
            <label :for="role">{{ role }}</label>
          </div>
        </div>
        <button
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  // creating props for usability purposes
  // when this component gets imported into
  // another component it gets populated
  // through the data function from the
  // parent component

  props: {
    titles: {
      type: Array,
      default: () => [],
    },
    roles: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: 'Select...',
    },
  },
  data() {
    return {
      person: {
        title: '',
        role: [],
      },
    };
  },
  methods: {
    // emiting btn click with person data
    // to parent component
    handleClick() {
      this.$emit('btn-click', this.person);

      this.person.title = '';
      this.person.role = [];
    },
  },
};
</script>


<style scoped>
form {
  display: flex;
  height: 100%;
}

select {
  padding: .5em;
}

input {
  margin: 0 1em;
  padding: .5em;
}

button {
  padding: .5em 1em;
  margin-left: 1em;
}
</style>
