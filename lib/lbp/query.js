var request = require('request')

function Query(url){
  this.url = "<"+url+">";
}
Query.prototype = {
  run: function(query){

    var parameters = {"query" : query, "output": "json"}
    return promise = new Promise(function(resolve, reject){
      request({url:"http://sparql-staging.scta.info/ds/query", qs:parameters}, function(error, response, body){
        if (error) reject(error);
        else resolve(body);
      });
    });
  },
  immediate_props: function(){
    var query = [
    			"SELECT ?p ?o ",
    			"WHERE {",
    			this.url + " ?p ?o .",
          "}"
        ].join('');
    return query;
  }

}
module.exports = Query;
