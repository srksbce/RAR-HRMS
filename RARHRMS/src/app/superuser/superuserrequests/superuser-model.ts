export interface IExpensedata
{
    id:any,
    employeeID: number,
    expensedate: string,
    expenseType:string,
    amount: number,
    invoice:string,
    status:string,
    
    attchment:any,



}

export interface Iinvoices
{
    id:number,
    invoicenumber:number,
    invoicedate:string,
    invoiceType:string,
    attchment:null,
    amount: number,
    status:string,

}