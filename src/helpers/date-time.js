import moment from "moment"


export const formatDateYYYYMMM = (date) => {
    return moment(date).format("YYYY MMM")
}

export const formatTimeHHmm = (time) => {
    return moment(time, "HH:mm:ss").format("HH:mm")
}