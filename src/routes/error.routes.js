const { logError, errorHandler, ormErrorhandler } = require('../middlewares/errorHandler.middleware');

const errorHandlerRoutes = (app) => {
    app.use(logError);
    app.use(ormErrorhandler)
    app.use(errorHandler);

    app.use('*', (req, res) => {
        return res.status(404).send('page not found')
    })
};

module.exports = errorHandlerRoutes;