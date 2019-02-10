import Model from 'Models/Model'
class Ticket extends Model{
    constructor(object) {
        super(object)
        this.subject = object.subject
        this.status = object.status
        this.owner = object.owner
        this.created_at = object.created_at
        this.updated_at = object.updated_at
    }
}


export default Ticket;
