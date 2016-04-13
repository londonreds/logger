/**
 *
 * @param db pg-promise database
 */
function logger(db){

    return function inst(req, res, next) {

        db.query("insert into logs (url, body, timestamp) values ($1,$2, CURRENT_TIMESTAMP)", [req.originalUrl, JSON.stringify(req.body)]);
        next();
    };
}

module.exports = logger;