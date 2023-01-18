const Greeting = require("./Base");

module.exports = class Promote extends Greeting {
    constructor() {
        super();
        this.textTitle = "PROMOTE";
        this.textMessage = "{server}";
        this.colorTitle = "#df0909";
        this.assent = `${__dirname}/../../assets/img/promote.png`;
    }
};
