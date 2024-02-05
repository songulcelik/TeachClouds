import moment from "moment"


export const formatDateYYYYMMM = (date) => {
    return moment(date).format("YYYY MMM")
}