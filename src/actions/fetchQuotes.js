
export function quotesFetched(data) {
    return {
      type: "FETCH_QUOTES",
      payload: data
    };
}