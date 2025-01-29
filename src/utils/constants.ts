const currentYear = String(new Date().getFullYear());

export const arrYears: [string] = [currentYear];
for (let i = +currentYear; i > 1950; i--) {
  if (i !== +currentYear) {
    arrYears.push(String(i));
  }
}
export const arrayGenres = ['movie', 'series', 'episode']

