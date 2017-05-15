var expect = require('chai').expect;
var Lbp = require("../lib");


describe("resource test", function(){
  it('logs resource test', function(){
    r = new Lbp.Resource("TEST");
    console.log(r.test());
    var result = r.test();

    expect(result).to.equal("resourceTEST");
  });
});
