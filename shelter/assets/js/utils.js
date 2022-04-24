const getRandomIds = (
  idsCount,
  max,
  { idsToExclude = [], excludeFrom = 0, excludeTo = idsCount } = {}
) => {
  const ids = [];

  while (ids.length < idsCount) {
    const randomId = Math.floor(Math.random() * (max + 1));
    const shouldExclude = ids.length >= excludeFrom && ids.length < excludeTo;
    if (
      !ids.includes(randomId) &&
      (!shouldExclude || (shouldExclude && !idsToExclude.includes(randomId)))
    ) {
      ids.push(randomId);
    }
  }

  return ids;
};

export { getRandomIds };
