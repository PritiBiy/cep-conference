const Conference = require("./Conference");
const Attendee = require("./Attendee");
const Seat = require("./Seat");

describe('Attendee', () => {

    const conference = new Conference("C101", "Thoughtworks XConf", 20.00);
    const attendeeOne = new Attendee("Johndoe@gmail.com")

    it('attendee should receive seat on successful registration', () => {
        const invoice = attendeeOne.payFor(conference);
        const seat = conference.register(attendeeOne, invoice)

        expect(seat).toStrictEqual(new Seat(1));

    });

});