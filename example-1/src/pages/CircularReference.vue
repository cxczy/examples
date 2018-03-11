<template>
  <div>
    <li v-for="folder in folders">
      <tree-folder v-bind:folder="folder"></tree-folder>
    </li>
  </div>
</template>

<script>
  import treeFolder from '@/components/treeFolder'
  export default {
    data () {
      return {
        folders: [
          {
            name: 'folder1',
            children: [{
              name: 'folder1 - folder1',
              children: [{
                name: 'folder1 - folder1 - folder1'
              }]
            }, {
              name: 'folder1 - folder2',
              children: [{
                name: 'folder1 - folder2 - folder1'
              }, {
                name: 'folder1 - folder2 - folder2'
              }]
            }]
          },
          {
            name: 'folder 2',
            children: [{
              name: 'folder2 - folder1',
              children: [{
                name: 'folder2 - folder1 - folder1'
              }]
            }, {
              name: 'folder2 - folder2',
              children: [{
                name: 'folder2-content1'
              }]
            }]
          },
          {
            name: 'folder 3',
            children: [{
              name: 'folder3 - folder1',
              children: [{
                name: 'folder3 - folder1 - folder1'
              }]
            }, {
              name: 'folder3 - folder2',
              children: [{
                name: 'folder3-content1'
              }]
            }]
          }
        ]
      }
    },
    components: {
      treeFolder
    }
  }
</script>
