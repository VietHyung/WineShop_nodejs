const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    //const token = req.header('auth-token');
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(404);


    //if (!token) return res.status(401).send('You need to login to access this page');

    try {
        //const verified =
        jwt.verify(token, process.env.TOKEN_SECRET,(err,accounts)=>{
          if(err) return res.sendStatus(403);
          req.accounts = accounts;
        });
        next();
    } catch (err) {
        return res.status(400).send('Invalid Token');
    }
};
