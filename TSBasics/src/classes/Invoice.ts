import { HasFormatter } from "../interfaces/HasFormatter"

// Invoice must have all attritues and methods in HasFormatter interface
export class Invoice implements HasFormatter {
    constructor (
        private client: string,
        private details: string, 
        private amount: number) {}

    format () {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}