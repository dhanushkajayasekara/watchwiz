const INTEREST_LIST_KEY = "movieInterestList";

// Get the interest list from local storage
export const getInterestList = () => {
    const list = localStorage.getItem(INTEREST_LIST_KEY);
    return list ? JSON.parse(list) : [];
};

// Add an IMDb ID to the interest list
export const addToInterestList = (imdbID) => {
    const list = getInterestList();
    if (!isMovieInInterestList(imdbID)) {
        list.push(imdbID);
        localStorage.setItem(INTEREST_LIST_KEY, JSON.stringify(list));
    }
};

// Remove an IMDb ID from the interest list
export const removeFromInterestList = (imdbID) => {
    let list = getInterestList();
    list = list.filter((id) => id !== imdbID);
    localStorage.setItem(INTEREST_LIST_KEY, JSON.stringify(list));
};

// Check if an IMDb ID is in the interest list
export const isMovieInInterestList = (imdbID) => {
    console.log("imdbID - ", imdbID);

    const list = getInterestList();
    return list.includes(imdbID);
};
