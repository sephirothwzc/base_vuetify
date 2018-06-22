<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <v-select :loading="loading" :items="items['sel']" 
        :rules="[() => select.length > 0 || 'You must choose at least one']" 
        :search-input.sync="search['sel']" v-model="select" 
        item-text="departmentName" item-value="id"
        label="Async items" autocomplete multiple cache-items chips required></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import SysDepartment from '../../../api/restful/sys-department'
  export default {
    data() {
      return {
        loading: false,
        items: {},
        search: {},
        select: [],
        states: [
          'Alabama',
          'Alaska',
          'American Samoa',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'District of Columbia',
          'Federated States of Micronesia',
          'Florida',
          'Georgia',
          'Guam',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Marshall Islands',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Northern Mariana Islands',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Palau',
          'Pennsylvania',
          'Puerto Rico',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virgin Island',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming'
        ]
      }
    },
    watch: {
      search(val) {
        val && this.querySelections(val)
      }
    },
    methods: {
      querySelections(v) {
        this.loading = true
        new SysDepartment().getSysDepartmentSelect(v).then(d => {
          this.loading = false
          this.items['sel'] = d
        })
        // // Simulated ajax query
        // setTimeout(() => {
        //   this.items = this.states.filter(e => {
        //     return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        //   })
        //   this.loading = false
        // }, 500)
      }
    }
  }
</script>

<style scoped>

</style>