<template>
  <div>
    <base-component @customize-click="handleCustClick" :test="100">
      <h2 slot="slot1">BaseComponent slot</h2>
      <p>default slot</p>
    </base-component>

    <enhanced-component @customize-click="handleCustClick" :test="100">
      <h2 slot="slot1">EnhancedComponent slot</h2>
      <p>default slot</p>
    </enhanced-component>
  </div>
</template>

<script>
  import baseComponent from '@/components/baseComponent'
  import hoc from '@/common/hoc'
  const enhancedComponent = hoc(baseComponent)

  export default {
    components: { baseComponent, enhancedComponent},
    methods: {
      handleCustClick () {
        console.log('clicked')
      }
    }
  }
</script>
