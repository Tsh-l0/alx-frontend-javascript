import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // Validate inputs
    Pricing.validateNumber(amount, 'Amount must be a number');
    Pricing.validateCurrency(currency, 'Currency must be an instance of Currency');

    this._amount = amount;
    this._currency = currency;
  }

  // Validate if the value is a number
  static validateNumber(value, errorMessage) {
    if (typeof value !== 'number') {
      throw new TypeError(errorMessage);
    }
  }

  // validate if the value is an instance of Currency
  static validateCurrency(value, errorMessage) {
    if (!(value instanceof Currency)) {
      throw new TypeError(errorMessage);
    }
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    Pricing.validateNumber(newAmount, 'Amount must be a number');
    this._amount = newAmount;
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    Pricing.validateCurrency(newCurrency, 'Currency must be an instance of Currency');
    this._currency = newCurrency;
  }

  // Method to return full price format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Convert price based on a given conversion rate
  static convertPrice(amount, conversionRate) {
    Pricing.validateNumber(amount, 'Amount must be a number');
    Pricing.validateNumber(conversionRate, 'Conversion rate must be a number');

    return amount * conversionRate;
  }
}
