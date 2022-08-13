const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(authHeader){
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.TOKEN_SECRET,(err,user)=>{
        if(err) {
          return res.status(403).json("token is not valid");
        }

        req.user = user;
        next();
      });
    }else{
      return res.status(401).json("unauthenticated");
    }
};

const verifyTokenAuthor = (req, res, next) => {
  verifyToken(req, res, () =>{
    if(req.user.id === req.params.id || req.user.isAdmin){
      next();
    } else {
      res.status(403).json("not allowed to do that(Author)");
    }
  });
};

const verifyTokenAdmin = (req, res, next) => {
  verifyToken(req, res, () =>{
    if(req.user.isAdmin == true){
      next();
    } else {
      res.status(403).json("not allowed to do that(check Admin)");
    }
  })
}

module.exports = {verifyToken,verifyTokenAuthor,verifyTokenAdmin}
