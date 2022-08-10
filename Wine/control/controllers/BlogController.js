

class BlogController{


  //get /blog/
  blog(req, res, next){
    res.render('blog/blog');
  }

  //get /blog-detail/
  blogDetail(req, res, next){
    res.render('blog/blog-detail');
  }
}

module.exports = new BlogController();
