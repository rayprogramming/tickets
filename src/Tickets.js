import TicketsDataTable from "Components/DataTable.vue"

const Components = {
    TicketsDataTable
}

var Tickets = {
    url: '',
    install: function(Vue, options) {
        this.url = options.Host+options.Route+options.Model;

        Object.keys(Components).forEach(name => {
            Vue.component(name, Components[name])
        });
    }
}


export default Tickets
