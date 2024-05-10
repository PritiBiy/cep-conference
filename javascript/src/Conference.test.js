const Conference = require("./Conference");
const Attendee = require("./Attendee");
const Seat = require("./Seat");
const {Feature, FeatureToggles} = require("./FeatureToggles");
const {Hoodie} = require("./Hoodie");

describe("Conference", () => {

    const conference = new Conference("C101", "Thoughtworks XConf");
    const attendeeOne = new Attendee("Johndoe@gmail.com");
    const enabledFeature= new Array(Feature.RESERVE_HOODIE)
    const featureToggles = new FeatureToggles(enabledFeature);

    it('attendee should receive seat on successful registration', () => {
        const seat = conference.register(attendeeOne)

        expect(seat).toStrictEqual(new Seat(1));

    });


    it("attendee should be able to reserve hoodie if reserve_hoodie toggle is ON", () => {
        const hoodie = new Hoodie("M", "Black");

        expect(conference.reserve(hoodie, featureToggles)).toBe(true);
    });

    it("attendee should not be able to reserve hoodie if reserve_hoodie toggle is off", () => {
        const hoodie = new Hoodie("M", "Black");

        expect(conference.reserve(hoodie, new FeatureToggles())).toBe(false);
    });

});