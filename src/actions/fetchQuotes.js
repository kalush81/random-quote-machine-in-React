
export function quotesFetched(quotes) {
    return {
      type: "FETCH_QUOTES",
      quotes
    };
}