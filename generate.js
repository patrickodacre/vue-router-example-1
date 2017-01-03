module.exports = function() {
    const faker = require('faker')
    const _ = require('lodash')

    // Return 3 entries for each id:
    const entries = _.times(50, (n) => {

        return _.times(3, (y) => {

            const images = [
                faker.image.cats,
                faker.image.people,
                faker.image.food
            ]

            return {
                user_id: n,
                title: faker.lorem.words(3),
                note: faker.lorem.sentences(),
                image: images[y](),
                id: 1000 + n
            }
        })
    })

    const flatEntries = _.flatten(entries)

    return {
        users: _.times(50, (n) => {

            const profile = faker.helpers.contextualCard()

            const result = Object.assign({}, {
                id: n
            }, profile)
            return result
        }),
        notes: flatEntries
    }
}