export default class Collection {
    _models = {}
    constructor() {}
    setMeta(meta) {
        var rowsPerPage = Number.parseInt(meta.per_page);
        if (Number.isNaN(rowsPerPage)) {
            rowsPerPage = 0;
        }
        this.pagination = {
            page: meta.current_page,
            from: meta.from,
            to: meta.to,
            rowsPerPage: rowsPerPage,
            totalItems: meta.total,
            search: ""
        }
    }
    addModel(model) {
        this._models[model.id] = model
    }
    get models() {
        let models = []
        for (let i in this._models) {
            if (i >= this.pagination.from && i <= this.pagination.to) {
                models.push(this._models[i])
            }
        }
        return models;
    }
}
