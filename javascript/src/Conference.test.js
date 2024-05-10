const Conference = require("./Conference");
const Attendee = require("./Attendee");
const Seat = require("./Seat");

describe("Conference", () => {

    const conference = new Conference("C101", "Thoughtworks XConf");
    const attendeeOne = new Attendee("Johndoe@gmail.com")

    it('attendee should receive seat on successful registration', () => {
        const seat = conference.register(attendeeOne)

        expect(seat).toStrictEqual(new Seat(1));

    });


});