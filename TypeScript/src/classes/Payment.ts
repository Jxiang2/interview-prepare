import { HasFormatter } from "../interfaces/HasFormatter";

// Invoice must have all attritues and methods in HasFormatter interface
export class Payment implements HasFormatter {
    constructor (
        private recipient: string,
        private details: string,
        private amount: number) { }

    format () {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}