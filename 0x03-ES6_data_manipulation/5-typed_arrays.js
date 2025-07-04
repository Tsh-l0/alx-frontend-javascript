export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to allow setting values at specific positions
  const view = new DataView(buffer);

  // Check if the position is within valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Set the Int8 value at the specified position
  view.setInt8(position, value);

  return view;
}
