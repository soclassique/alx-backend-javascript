class Pricing {
  constructor(basePrice, discount) {
    this.basePrice = basePrice;
    this.discount = discount;
  }

  calculateFinalPrice() {
    const discountAmount = (this.basePrice * this.discount) / 100;
    const finalPrice = this.basePrice - discountAmount;
    return finalPrice.toFixed(2);
  }
}

// Example usage
const productPrice = 100;
const discountPercentage = 20;

const pricing = new Pricing(productPrice, discountPercentage);
const finalPrice = pricing.calculateFinalPrice();

console.log(`The final price after a ${discountPercentage}% discount is $${finalPrice}.`);
