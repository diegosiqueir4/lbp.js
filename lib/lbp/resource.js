var request = require('request');
var Query = require('./query.js');

function Resource(url){
  this.url = url

  //this.results is a promise
  r = new Query(url);
  var query = r.immediate_props();
  this.results = r.run(query);
}
Resource.prototype = {
  test: function(){
    return "resource" + this.url
  },
  value: function(property){
    var _this = this
    return new Promise(function(resolve, reject){
      _this.results.then(function(data){
        data = JSON.parse(data)
        var results = data.results.bindings;
        // the code you're looking for
        var needle = property;
        // iterate over each element in the array
        //console.log(value);
        var value = ''
        for (var i = 0; i < results.length; i++){
          // look for the entry with a matching `code` value
          if (results[i].p.value === needle){
            value = results[i].o.value;
          }
        }
        if (value != '') resolve(value)
        else reject()
      });

    });
  },
  values: function(property){
    var _this = this
    return new Promise(function(resolve, reject){
      _this.results.then(function(data){
        data = JSON.parse(data)
        var results = data.results.bindings;
        // the code you're looking for
        var needle = property;
        // iterate over each element in the array
        var values = []
        for (var i = 0; i < results.length; i++){
          // look for the entry with a matching `code` value
          if (results[i].p.value === needle){
            values.push(results[i].o.value);
          }
        }
        if (values.length > 0) resolve(values)
        else reject()
      });
    });

  }
}
module.exports = Resource;
