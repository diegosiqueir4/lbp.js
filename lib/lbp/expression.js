var Resource = require('./resource.js');

function Expression(url){
  Resource.call(this, url)
}

//store new object methods
var methods = {
  manifestations: function(){
    manifestations = "TEST manifestations"
    return manifestations
  },
  canonical_manifestation: function(){

  },
  canonical_transcription: function(){

  }
}

//store inherited methods
var inheritedMethods = Object.create(Resource.prototype)
//combine all methods
allMethods = Object.assign(inheritedMethods, methods);
// assigned all methods to object prototype
Expression.prototype = allMethods;
// override inherited constructor
Expression.prototype.constructor = Expression;
//export module
module.exports = Expression;
