const Invoice = require("./Invoice");

class Attendee {
    #_email;

    constructor(email) {
        this.#_email = email;
    }

    payFor(confernece) {
        return new Invoice(this, confernece.costPerAttendee)
    }
}

module.exports = Attendee;
