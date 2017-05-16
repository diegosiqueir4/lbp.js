var Resource = require('./resource.js');

function Expression(url){
  Resource.call(this, url)
}

//store new object methods
var methods = {
  manifestations: function(){
    var manifestations = this.values("http://scta.info/property/hasManifestation");
    return manifestations;
  },
  canonical_manifestation: function(){
    return this.value("http://scta.info/property/hasCanonicalManifestation");
  },
  canonical_transcription: function(){

  },
  structure_type: function(){
    return this.value("http://scta.info/property/structureType");
  },
  translations: function(){
    return this.values("http://scta.info/property/hasTranslation");
  },
  canonical_translation: function(){
    return this.value("http://scta.info/property/hasCanonicalTranslation");
  },
  next: function(){
    return this.value("http://scta.info/property/next");
  },
  previous: function(){
    return this.value("http://scta.info/property/previous");
  },
  order_number: function(){

  },
  status: function(){
    return this.value("http://scta.info/property/status");
  },
  top_level_expression: function(){
    return this.value("http://scta.info/property/isPartOfTopLevelExpression");
  },
  item_level_expression: function(){
    return this.value("http://scta.info/property/isPartOfStructureItem");
  },
  level: function(){
    return this.value("http://scta.info/property/level");
  },
  abbreviates: function(){
    return this.values("http://scta.info/property/abbreviates");
  },
  abbreviateBy: function(){
    return this.values("http://scta.info/property/abbreviatedBy");
  },
  references: function(){
    return this.values("http://scta.info/property/references");
  },
  referencedBy: function(){
    return this.values("http://scta.info/property/referencedBy");
  },
  copies: function(){
    return this.values("http://scta.info/property/copies")
  },
  copiedBy: function(){
    return this.values("http://scta.info/property/copiedBy")
  },
  mentions: function(){
    return this.values("http://scta.info/property/mentions")
  },
  quotes: function(){
    return this.values("http://scta.info/property/quotes")
  },
  quotedBy: function(){
    return this.values("http://scta.info/property/quotedBy");
  },
  isRelatedTo: function(){
    return this.values("http://scta.info/property/isRelatedTo");
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
