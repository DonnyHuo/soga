export const shortAddress = (
  address: string | undefined,
  first = 7,
  last = 5
) => {
  return address && address.slice(0, first) + "..." + address.slice(-last);
};
