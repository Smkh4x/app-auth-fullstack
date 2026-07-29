const logger = async (req, res, next) => {
    console.log(`\n\tDate: ${new Date().toDateString()}
        method: ${req.method}
        url: ${req.url}`)
    next();
}
export default logger;