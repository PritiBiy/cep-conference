const Seat = require("./Seat");

class Conference {
    #_code;
    #_name;
    #_attendees;

    constructor(code, name) {
        this.#_code = code;
        this.#_name = name;
        this.#_attendees = new Array(20);
    }

    register(invoice) {
        this.#_attendees.push(invoice.attendee)
        return new Seat(this.#_attendees.size+1)
    }


}

module.exports = Conference;


