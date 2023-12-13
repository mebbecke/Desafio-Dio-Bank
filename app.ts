import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { TestAccount } from "./class/TestAccount";

// Instancia e testes de PeopleAccount
const peopleAccount: PeopleAccount = new PeopleAccount(123, 'Marina', 1)
peopleAccount.getBalance()
peopleAccount.deposit(100)
peopleAccount.getBalance()
peopleAccount.withdraw(90)
peopleAccount.getBalance()

// Instancia e testes de CompanyAccount
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 2)
companyAccount.getBalance()
companyAccount.getLoan(200)
companyAccount.getBalance()

// Instancia e testes de TestAccount
const testAccount: TestAccount = new TestAccount('Teste', 3)
testAccount.getBalance()
testAccount.increasedDeposit(100)
testAccount.getBalance()
