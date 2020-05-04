const config = require("../config.json")

const handler = httpRequest => {
    switch (httpRequest.method) {
        case "GET":
            return getRouteInfo(httpRequest)
        default:
            return "Method not allowed"
    }
}

function getRouteInfo() {
    return (
        config.select.depart.timesByStop +
        config.select.depart.timeService +
        "4" +
        config.select.depart.timeRestrict +
        config.select.depart.orderBy
      )
}

module.exports = handler