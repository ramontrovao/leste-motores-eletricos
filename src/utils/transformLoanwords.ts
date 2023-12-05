export const transformLoanwords = (word?: string) => {
  if (!word) return null;

  word = word.replace(/[áàâãä]/g, "a");
  word = word.replace(/[éèêë]/g, "e");
  word = word.replace(/[íìîï]/g, "i");
  word = word.replace(/[óòôõö]/g, "o");
  word = word.replace(/[úùûü]/g, "u");
  word = word.replace(/[ç]/g, "c");
  word = word.replace(/[ñ]/g, "n");
  return word;
};
