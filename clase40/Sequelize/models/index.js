const Tweet = require('./Twitter.models')
const User = require('./User.models')

Tweet.belongsTo(User)

module.exports = {User,Tweet}