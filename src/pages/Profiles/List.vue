<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        title="Список учителей"
        :rows="rows"
        :columns="columns"
        row-key="id"
        v-model:pagination="pagination"
        :loading="loading"
        :filter="filter"
        @request="onRequest"
        binary-state-sort
        rows-per-page-label="Записей на странице"
        :rows-per-page-options="[ 5, 20, 50 ]"
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Поиск..." model-value="">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>

</template>

<script>
import { ref, onMounted } from 'vue'
// import { api } from 'boot/axios'

const columns = [
  {
    name: 'fio',
    label: 'Ф.И.О.',
    required: true,
    align: 'left',
    field: row => row.fio,
    sortable: true
  },
  {
    name: 'position',
    label: 'Должность',
    required: true,
    align: 'left',
    field: row => row.position,
    sortable: true
  },
  {
    name: 'email',
    label: 'E-mail адрес',
    required: true,
    align: 'left',
    field: row => row.email,
    sortable: true
  },
  {
    name: 'phoneWork',
    label: 'Рабочий телефон',
    required: true,
    align: 'right',
    field: row => row.phoneWork,
    sortable: true
  },
  {
    name: 'phoneMobile',
    label: 'Моб. телефон',
    required: true,
    align: 'right',
    field: row => row.phoneMobile,
    sortable: true
  }
]

export default {
  name: 'teachers',
  setup () {
    const loading = ref(false)
    const rows = ref([])
    const filter = ref('')
    const pagination = ref({
      sortBy: 'id',
      descending: false,
      page: 1,
      rowsPerPage: 50,
      rowsNumber: 5
    })

    function onRequest (props) {
      rows.value = [
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
        filter: ''
      })
    })

    return {
      filter,
      loading,
      pagination,
      columns,
      rows,

      onRequest
    }
  },
}
</script>

<style>

</style>
