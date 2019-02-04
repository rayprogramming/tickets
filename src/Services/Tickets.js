import axios from 'axios'
var route_version = "V1"
var route = "http://localhost:8000/api/" + route_version + "/tickets"

export default {
    getTickets() {
        return axios.get(route)
            .then(response => {
                return response.data
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
