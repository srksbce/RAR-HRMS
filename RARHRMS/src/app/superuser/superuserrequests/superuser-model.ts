export interface IExpensedata
{
    id:any,
    employeeId: number,
    expensedate: string,
    expenseType:string,
    amount: number,
    invoice:string,
    status:string,
    firstName:string,
    attchment:any,



}

export interface Iinvoices
{
    id:number,
    employeeId: number,
    invoicenumber:number,
    invoicedate:string,
    invoiceType:string,
    attchment:null,
    amount: number,
    status:string,

}