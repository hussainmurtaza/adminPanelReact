const differenceInDays = (_earlier = Date.now(), _future = Date.now()) => {
    const earlier = new Date(_earlier);
    const future = new Date(_future);

    // To calculate the time difference of two dates
    const difference = future.getTime() - earlier.getTime();

    // To calculate the no. of days between two dates
    return Math.round(difference / (1000 * 3600 * 24));
};

const standardDateFormat = (date) => {
    if (!date) return "No Date Available";
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

    return `${mo} ${da}, ${ye}`;
};

const standardDateTimeFormat = (date) => {
    if (!date) return "No Date Available";
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

    let hours = d.getHours();
    let minutes = d.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${mo} ${da}, ${ye} ${hours}:${minutes} ${ampm}`;
};

const formatDate = (date) => {
    var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
};

const TimeStampHelper = {
    differenceInDays,
    standardDateFormat,
    standardDateTimeFormat,
    formatDate,
};

export default TimeStampHelper;
