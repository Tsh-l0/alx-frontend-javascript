export default class Currency {
  constructor(code, name) {
    // Validate input types
    Currency.validateString(code, 'Code must be a string');
    Currency.validateString(name, 'Name must be a string');

    this._code = code;
    this._name = name;
  }

  // Validate string input with static method
  static validateString(value, errorMessage) {
    if (typeof value !== 'string') {
      throw new TypeError(errorMessage);
    }
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(newCode) {
    Currency.validateString(newCode, 'Code must be a string');
    this._code = newCode;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    Currency.validateString(newName, 'Name must be a string');
    this._name = newName;
  }

  // Method to display the currency format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
