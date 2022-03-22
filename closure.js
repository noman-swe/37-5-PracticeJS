/*   const bank = owner => {
      balance = 0;
      return amount => {
          balance += amount;
          return balance;
      }
  }

  const mofizBank = bank('Mofij');
  console.log(mofizBank(100));
  console.log(mofizBank(300));
  console.log(mofizBank(50));
   */

const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            balance -= amount;
            return balance;
        }
    }
}

const mofizBank = bank('Mofij');
console.log(mofizBank.deposit(50));
console.log(mofizBank.deposit(500));
console.log(mofizBank.deposit(250));
console.log(mofizBank.deposit(100));

console.log(mofizBank.withdraw(700) , 'after withdraw');
