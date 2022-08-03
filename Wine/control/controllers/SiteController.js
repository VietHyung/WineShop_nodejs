

class SiteController{

  //get news
  index(req, res, next){

      return res.render('home')

  }

  //get /search/
  about(req, res, next){
    res.render('about');
  }
}

module.exports = new SiteController;
