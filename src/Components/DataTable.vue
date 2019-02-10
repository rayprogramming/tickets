<template>
<div class="ticketsDataTable">
    <ticketDialog></ticketDialog>
    <v-data-table :headers="headers" @update:pagination="getTickets" :totalItems="pagination.totalItems" :pagination.sync="pagination" :loading="loading" :items="tickets" :rows-per-page-items="rowsPerPageItems" class="elevation-2" v-model="selected"
        select-all item-key="id">
        <v-progress-linear slot-scope="props" v-model="props.loading" slot="progress" color="blue" indeterminate></v-progress-linear>
        <template slot="headers" slot-scope="props">
            <tr>
                <th rowspan="2">
                    <v-checkbox :input-value="props.all" :indeterminate="props.indeterminate" primary hide-details @click.stop="toggleAll"></v-checkbox>
                </th>
                <th rowspan="2" :class="['column sortable', pagination.descending ? 'desc' : 'asc', 'id' === pagination.sortBy ? 'active' : '']" @click="changeSort('id')">
                    ID
                </th>
                <th colspan="2" class="no-border">Owner</th>
                <th colspan="2" class="no-border">Subject</th>
                <th rowspan="2">Status</th>
            </tr>
            <tr>
                <th>Email</th>
                <th>Username</th>
                <th>Id</th>
                <th>Name</th>
            </tr>
        </template>
        <template slot="items" slot-scope="props">
            <tr :active="props.selected" @click="props.selected = !props.selected">
                <td>
                    <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
                </td>
                <td>{{ props.item.id }}</td>
                <td class="no-border">{{ props.item.owner.email }}</td>
                <td>{{ props.item.owner.username }}</td>
                <td>{{ props.item.subject.id }}</td>
                <td>{{ props.item.subject.name }}</td>
                <td>{{ props.item.status.status }}</td>
            </tr>
        </template>
    </v-data-table>
</div>
</template>

<script>
import TicketsService from 'Services/Tickets'
import TicketDialog from 'Components/Tickets/Dialog'

export default {
    components: {
        TicketDialog
    },
    data() {
        return {
            rowsPerPageItems: [5, 10, 15, 25],
            tickets: [],
            selected: [],
            headers: [{
                    text: "ID",
                    value: "id",
                    align: 'center',
                    sortable: true
                }, {
                    text: "Email",
                    value: "email",
                    align: 'center',
                    sortable: true
                }, {
                    text: "Username",
                    value: "username",
                    align: 'center',
                    sortable: true
                }, {
                    text: "ID",
                    value: "subjectId",
                    align: 'center',
                    sortable: true
                }, {
                    text: "name",
                    value: "subjectName",
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
            loading: false,
            pagination: {}
        }
    },
    methods: {
        pageUpdate: function(pagination) {
            this.getTickets(pagination)
        },
        getTickets: function(pagination) {
            if (this.loading) {
                return
            }
            this.loading = true
            return TicketsService.getTickets(pagination)
                .then(tickets => {
                    this.tickets = tickets.models
                    this.pagination = tickets.pagination
                })
                // eslint-disable-next-line
                .catch(error => console.log(error))
                .finally(() => {
                    this.loading = false
                })
        }
    },
    created() {
        this.getTickets({
            page: 1,
            rowsPerPage: 15
        })
    }
}
</script>

<style lang="css" scoped>
.no-border {
    border: none!important;
}
</style>
