import { DioAccount } from "./DioAccount";

export class TestAccount extends DioAccount{
    constructor(name: string, accountNumber: number ){
        super(name, accountNumber)
        }
        increasedDeposit = (incDepositAmount: number): void =>{
            if(this.validateStatus()){
                this.balance = this.balance + incDepositAmount + 10
                console.log('Voce depositou', incDepositAmount, 'e foi acrescido 10')
            }
        }
    }
    