var Lbp = require("../lib/")

// r = new Lbp.Query("http://scta.info/resource/lectio1");
// var query = r.immediate_props();
// var result = r.run(query);
//
// result.then(function(data){
//   data = JSON.parse(data)
//   var results = data.results.bindings;
//   // the code you're looking for
//   var needle = 'http://www.loc.gov/loc.terms/relators/AUT';
//
// // iterate over each element in the array
// var value = '';
//
// for (var i = 0; i < results.length; i++){
//   // look for the entry with a matching `code` value
//   if (results[i].p.value === needle){
//     value = results[i].o.value;
//   }
// }
// console.log(value);
//   //console.log(data.results.bindings)
//
// });

 r = new Lbp.Expression("http://scta.info/resource/lectio1");
 //result = r.values("http://scta.info/property/hasManifestation");
 result = r.top_level_expression()

 result.then(function(data){
   console.log(data);
 });
