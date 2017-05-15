function Resource(url){
  this.url = url
}
Resource.prototype = {
  test: function(){
    return "resource" + this.url
  }
}
module.exports = Resource;
