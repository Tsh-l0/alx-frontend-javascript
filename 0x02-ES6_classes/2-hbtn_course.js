export default class ALXCourse {
  constructor(name, length, students) {
    // Validate input types before assigning values
    ALXCourse.validateString(name, 'Name must be a string');
    ALXCourse.validateNumber(length, 'Length must be a number');
    ALXCourse.validateArray(students, 'Students must be an array of strings');

    // Store attributes using underscore notation
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Validate if value == string
  static validateString(value, errorMessage) {
    if (typeof value !== 'string') {
      throw new TypeError(errorMessage);
    }
  }

  // Validate if value == number
  static validateNumber(value, errorMessage) {
    if (typeof value !== 'number') {
      throw new TypeError(errorMessage);
    }
  }

  // Validate if a value is an array of strings
  static validateArray(value, errorMessage) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError(errorMessage);
    }
  }

  // Get a getter and setter for names
  get name() {
    return this._name;
  }

  set name(newName) {
    ALXCourse.validateString(newName, 'Name must be a string');
    this._name = newName;
  }

  // Get a getter and setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    ALXCourse.validateNumber(newLength, 'Length must be a number');
    this._length = newLength;
  }

  // Get a getter and setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    ALXCourse.validateArray(newStudents, 'Students must be an array of strings');
    this._students = newStudents;
  }
}
