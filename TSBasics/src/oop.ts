class Invoice {
    constructor (
        private client: string,
        private details: string, 
        private amount: number) {}

    format () {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice("xjy", "work on mario web", 200)
const invTwo = new Invoice("henry", "work on mario web", 180)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv=>{
    console.log(inv.format())
})