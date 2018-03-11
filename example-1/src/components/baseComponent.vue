<template>
  <div>
    <span @click="handleClick">props: {{test}}</span>
    <slot name="slot1"></slot>
    <p>===========</p>
    <slot></slot>
  </div>
</template>

<script>
  import consoleMixin from '@/mixins/consoleMixin'
  export default {
    name: 'BaseComponent',
    props: {
      test: Number
    },
    mixins: [ consoleMixin ],
    methods: {
      handleClick () {
        this.$emit('customize-click')
      }
    }
  }
</script>
