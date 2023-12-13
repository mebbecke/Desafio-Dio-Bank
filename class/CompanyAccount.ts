import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanAmount: number): void => {
    if(this.validateStatus()){
        this.balance += loanAmount
        console.log('Voce pegou um empréstimo de', loanAmount)
    }
  }
}
