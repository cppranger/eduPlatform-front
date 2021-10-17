<template>
  <q-page padding>
    <div class="q-pa-md">

    </div>
  </q-page>

</template>

<script>
import { ref, onMounted } from 'vue'
// import { api } from 'boot/axios'

export default {
  name: 'users',
  setup () {
    const loading = ref(false)
    const rows = ref([])
    const filter = ref('')
    const isDismissed = ref(false)
    const pagination = ref({
      sortBy: 'id',
      descending: false,
      page: 1,
      rowsPerPage: 50,
      rowsNumber: 5
    })

    const fio = ref('')
    const position = ref('')
    const email = ref('')
    const phoneWork = ref('')
    const phoneMobile = ref('')

    function onRequest (props) {
      const users = [
        {
          id: 1,
          fio: 'Заболотский Антон Игоревич',
          position: 'Учитель информатики и математики',
          email: 'zabolotskij.ai@school1.ru',
          phoneWork: '8 (8332) 99-99-99',
          phoneMobile: '+7 (999) 99-99-99'
        },
        {
          id: 2,
          fio: 'Зыкина Лора Романовна',
          position: 'Учитель английского и немецкого языков',
          email: 'zykina.lr@school1.ru',
          phoneWork: '8 (8332) 99-99-99',
          phoneMobile: '+7 (999) 99-99-99'
        }
      ]
      // const { page, rowsPerPage, sortBy, descending } = props.pagination
      // const filter = props.filter
      // loading.value = true
      //
      // const query = {
      //   search: filter,
      //   page,
      //   isDismissed: props.isDismissed,
      //   limit: rowsPerPage,
      //   order: sortBy + ' ' + ((descending) ? 'desc' : 'asc')
      // }
      // // console.log('query', query) // { search: "", page: 1, limit: 5, order: "id desc" }
      // api.get('user', query).then((response) => {
      //   const items = response.data.data
      //   const jMeta = response.data.meta
      //
      //   // update rowsCount with appropriate value
      //   pagination.value.rowsNumber = jMeta.count
      //
      //   // clear out existing data and add new
      //   rows.value.splice(0, rows.value.length, ...items)
      //
      //   // don't forget to update local pagination object
      //   pagination.value.page = page
      //   pagination.value.rowsPerPage = rowsPerPage
      //   pagination.value.sortBy = sortBy
      //   pagination.value.descending = descending
      //
      //   loading.value = false
      // }).catch(err => {
      //   console.log('Ошибка обращения к серверу', err)
      //   loading.value = false
      // })
    }

    onMounted(() => {
      // get initial data from server (1st page)
      onRequest({
        pagination: pagination.value,
        isDismissed: isDismissed.value === false ? 0 : 1,
        filter: ''
      })
    })

    return {
      filter,
      loading,
      pagination,
      rows,
      isDismissed,

      onRequest
    }
  },
  watch: {
    isDismissed: function () {
      this.onRequest({
        pagination: this.pagination,
        isDismissed: this.isDismissed === false ? 0 : 1,
        filter: ''
      })
    }
  }
}
</script>

<style>

</style>
