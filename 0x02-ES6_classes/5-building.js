export default class Building {
  constructor(sqft) {
    // Validate sqft input
    Building.validateNumber(sqft, 'sqft must be a number');

    // Store attribute
    this._sqft = sqft;
  }

  // Method for validation
  static validateNumber(value, errorMessage) {
    if (typeof value !== 'number') {
      throw new TypeError(errorMessage);
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Ensure subclasses implement evacuationWarningMessage()
  evacuationWarningMessage() {
    if (this._sqft) {
      throw new Error(`Class extending Building must override evacuationWarningMessage for a ${this._sqft} sqft building`);
    }
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
