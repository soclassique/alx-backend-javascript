class Currency {
  constructor(code, name, symbol) {
    this.code = code;
    this.name = name;
    this.symbol = symbol;
  }

  convertTo(amount, targetCurrency) {
    // Currency conversion logic goes here
    // This is just a placeholder implementation
    const convertedAmount = amount * 1.2; // Assuming a conversion rate of 1 USD = 1.2 target currency
    return convertedAmount.toFixed(2);
  }
}

// Example usage
const usd = new Currency('USD', 'United States Dollar', '$');
const eur = new Currency('EUR', 'Euro', '€');

const amountInUSD = 100;
const convertedAmountInEUR = usd.convertTo(amountInUSD, eur);
console.log(`${amountInUSD} ${usd.symbol} is approximately ${convertedAmountInEUR} ${eur.symbol}.`);
