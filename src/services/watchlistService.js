const INTEREST_LIST_KEY = "movieWatchlist";

export const getWatchlist = () => {
    const list = localStorage.getItem(INTEREST_LIST_KEY);
    return list ? JSON.parse(list) : [];
};

export const addToWatchlist = (imdbID) => {
    const list = getWatchlist();
    if (!isMovieInWatchlist(imdbID)) {
        list.push(imdbID);
        localStorage.setItem(INTEREST_LIST_KEY, JSON.stringify(list));
    }
};

export const removeFromWatchlist = (imdbID) => {
    let list = getWatchlist();
    list = list.filter((id) => id !== imdbID);
    localStorage.setItem(INTEREST_LIST_KEY, JSON.stringify(list));
};

export const isMovieInWatchlist = (imdbID) => {
    const list = getWatchlist();
    return list.includes(imdbID);
};
