import axios from 'axios'
import Ticket from 'Tickets'
import Tickets from 'Collections/Tickets'
import UrlStringify from 'Util/UrlStringify'
var route = "http://localhost:8000/"
var TicketCollection = new Tickets();

export default {
    getTickets(pagination) {
        let route = Ticket.url
        let modifer = UrlStringify(pagination)
        if (modifer.length > 0){
            route+="?"+modifer
        }

        return axios.get(route)
            .then(response => {
                this.loading = false
                TicketCollection.update(response.data)
                return TicketCollection
            })
    },

    getTicket(id) {
        return axios.get(route+"/"+id)
            .then (response => {
                return response.data
            })
    },

    createTicket(payload) {
        return axios.post(route, payload)
    }
}
