class Invoice {
    #_attendee;
    #_id;
    #_amount;

    constructor(attendee, amount) {
        this.#_attendee = attendee;
        this.#_amount = amount;
        // this.#_id = window.crypto.randomUUID();
        this.#_id = "1111-2222-3333-4444";
        this._attendee = attendee;
    }


    get attendee() {
        return this._attendee;
    }
}

module.exports = Invoice;
