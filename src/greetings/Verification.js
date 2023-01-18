const Greeting = require("./Base");

module.exports = class Verification extends Greeting {
    constructor() {
        super();
        this.textTitle = "VERIFICATION";
        this.textMessage = "{server}";
        this.colorTitle = "#df0909";
        this.assent = `${__dirname}/../../assets/img/verification.png`;
    }
};
