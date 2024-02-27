const Seat = require("./Seat");

class Conference {
    #_code;
    #_name;
    #_costPerAttendee;
    #_attendees;

    constructor(code, name, costPerAttendee) {
        this.#_code = code;
        this.#_name = name;
        this.#_costPerAttendee = costPerAttendee;
        this._costPerAttendee = costPerAttendee;
        this.#_attendees = new Array(20);
    }


    get costPerAttendee() {
        return this._costPerAttendee;
    }

    register(invoice) {
        this.#_attendees.push(invoice.attendee)
        return new Seat(this.#_attendees.size+1)
    }
}

module.exports = Conference;


