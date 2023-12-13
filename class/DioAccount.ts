export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (depositAmount: number): void => {
    if(this.validateStatus()){
      this.balance += depositAmount
      console.log('Voce depositou', depositAmount)
    }
  }

  withdraw = (withdrawAmount: number): void => {
    if(this.validateStatus() && this.balance > withdrawAmount){
      this.balance -= withdrawAmount
      console.log('Voce sacou', withdrawAmount)
    } else {
      throw new Error('Saldo insuficiente')
    }
  }

  getBalance = (): void => {
    console.log('Saldo de', this.name, ':', this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
