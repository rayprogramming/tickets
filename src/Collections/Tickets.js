import Collection from 'Collections/Collection'
import Ticket  from 'Models/Ticket'

export default class Tickets extends Collection{
    constructor(){
        super()
    }
    addTickets(tickets){
        for (var i in tickets){
            this.addModel(new Ticket(tickets[i]));
        }
    }
    update(responseData){
        this.setMeta(responseData.meta)
        this.addTickets(responseData.data)
    }
}
