const capital = (string) => {
    try {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } catch {
        console.log("Capitalize error");
    }
};

const removeUnderscore = (string) => {
    try {
        const value = string.replaceAll("_", " ");
        return value;
    } catch {
        console.log("Capitalize error");
    }
};

const Capitilize = {
    capital,
    removeUnderscore,
};

export default Capitilize;
