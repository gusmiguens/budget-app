const moment = jest.requireActual('moment')

const mockMoment = (timestamp = 0) => {
    return moment(timestamp)
}

module.exports = mockMoment