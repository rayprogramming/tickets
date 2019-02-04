import Vue from "vue"
import TicketsDataTable from "./DataTable.vue"

const Components = {
    TicketsDataTable
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
});

export default Components
