async function logger(req, res, next){
    try{
        console.log("Received request from ", req.url," Header -",req.headers);
        return next();
    } catch(e){
        console.error("Error while logging", e);
        next(e);
    }
}

module.exports = logger;