var Resource = require('./resource.js');

function Manifestation(url){
  this.url = url
}
methods = {
  transcriptions: function(){
    transcriptions = "transcriptions" + this.url
    return transcriptions
  },
  canonical_transcription: function(){

  }
}

//store inherited methods
var inheritedMethods = Object.create(Resource.prototype)
//combine all methods
allMethods = Object.assign(inheritedMethods, methods);
// assigned all methods to object prototype
Manifestation.prototype = allMethods;
// override inherited constructor
Manifestation.prototype.constructor = Manifestation;
module.exports = Manifestation;
