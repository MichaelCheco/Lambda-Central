function feed(parent, args, context, info) {
    return context.prisma.links()
}
function tracks(parent, args, context, info) {
    return context.prisma.tracks()
}

module.exports = {
    feed,
    tracks,
}