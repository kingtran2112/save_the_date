// eslint-disable-next-line import/prefer-default-export
export function counterFormat(number) {
  if (number < 10) {
    return ` 0${number} `;
  }
  return number;
}
