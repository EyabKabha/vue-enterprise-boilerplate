<script>

export default {
  name: 'PlaygroundComp',

  data() {
    return {
      columns: ['id', 'first_name', 'last_name', 'email', 'avatar'],
      tableData: this.$store.state.fetchUsersData.users,
      options: {
        headings: {
          id: 'ID',
          first_name: 'Firstname',
          last_name: 'Lastname',
          email: 'Email',
          avatar: 'Avatar',
        },
        filterable: false,
      },
    }
  },
}
</script>

<template>
  <div id="app">
    <v-client-table
      :data="tableData"
      :columns="columns"
      :options="options"

    ></v-client-table>
  </div>
</template>
