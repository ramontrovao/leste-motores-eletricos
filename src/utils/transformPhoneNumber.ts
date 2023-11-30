export const transformPhoneNumber = (phoneNumber: string) => {
  const numeroString = phoneNumber.toString();

  const part1 = numeroString.slice(0, 2);
  const part2 = numeroString.slice(2, 6);
  const part3 = numeroString.slice(6);

  return `(${part1}) ${part2}-${part3}`;
};
