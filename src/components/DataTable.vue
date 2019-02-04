<template>
<v-data-table :headers="headers" :pagination.sync="pagination" :loading="loading" :items="tickets" class="elevation-2">
    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
    <template slot="items" slot-scope="props">
        <td>{{ props.item.owner.email }}</td>
        <td>{{ props.item.status.status }}</td>
    </template>
</v-data-table>
</template>

<script>
import TicketsService from '../Services/Tickets'

export default {
    data: () => {
        return {
            tickets: [],
            headers: [{
                    text: "Email",
                    value: "email",
                    align: 'center',
                    sortable: true
                },
                {
                    text: "Status",
                    value: "status",
                    align: 'center',
                    sortable: true
                }
            ],
            pagination: {
                descending: false,
                page: 1,
                rowsPerPage: 15,
                sortBy: "Email",
                totalItems: 0
            },
            loading: true
        }
    },
    created() {
        return TicketsService.getTickets()
            .then(tickets => {
                this.tickets = tickets.data
                this.pagination.page = tickets.meta.current_page
                this.pagination.rowsPerPage = tickets.meta.per_page
                this.pagination.totalItems = tickets.meta.total
            })
            // eslint-disable-next-line
            .catch(error => console.log(error))
            .finally(() => {
                this.loading = false
            })
    }
}
</script>

<style lang="css" scoped>
</style>
