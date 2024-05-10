const Feature = {
    RESERVE_HOODIE: 'RESERVE_HOODIE',
};

class FeatureToggles {
    #_enabledFeatures;

    constructor(enabledFeatures =[]) {
        this.#_enabledFeatures = enabledFeatures;
    };

    isEnabled(feature) {
        return this.#_enabledFeatures.length > 0 &&
        this.#_enabledFeatures.includes(feature)
    }
}

module.exports = { Feature, FeatureToggles };