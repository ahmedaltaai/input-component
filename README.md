# Live Preview 
https://input-component.herokuapp.com/

## Input Component Library

This component has been made as a qualification exercise for the position as a web dev.
The goal would be to install this component as a library in the application and use it there.

It has a multiselect for job titles and permission specifier as checkboxes

## install & basic usage
` npm install qinput `

```
<template>
  <div>
    <input-component
      v-model="selectedValues"
      :titles="titles"
      :roles="roles"
      placeholder="Select Title"
      @btn-click="addNewUser($event)"
    />
  </div>
</template>

<script>
  import InputComponent from 'qinput'
  export default {
    components: { InputComponent },
    data () {
      return {
      titles: [
        'CEO', 'CTO', 'COO', 'CWO', 'Software Engineer',
      ],
      roles: ['Read', 'Write', 'Delete'],
      }
    }
  }
</script>
```

there are two props to populate one is being `:titles` and the other is `:roles`

The default value of `placeholder` is set to `Select...` which can be changed as displayed above

The button clicking and chosen options are being emitted via `btn-click`
