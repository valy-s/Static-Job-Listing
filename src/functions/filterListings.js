export function filters(listings, filters) {
  const filtered = listings.map((listing) => {
    const flags = filters.map((filter) => {
      return (
        listing.role === filter ||
        listing.level === filter ||
        listing.languages.includes(filter) ||
        listing.tools.includes(filter)
      );
    });
    return !flags.includes(false) ? listing : null;
  });

  const finalFiltered = filtered.filter(function (item) {
    return item !== null;
  });

  return finalFiltered;
}
