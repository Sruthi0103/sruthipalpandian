// This file tests our application code - open the associated HTML file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 



// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

QUnit.test('Testing Mul function with four sets of inputs', function (assert) {
    assert.throws(function () { mul(); }, new Error("The given argument is not a number"), 'Passing in array correctly raises an Error');
    assert.strictEqual(mul(1,2,-1), 4, 'All positive numbers');
    assert.strictEqual(mul(1,-2,0.5), -3, 'Positive and negative numbers');
    assert.strictEqual(mul(-1,-2,0.2), 2.4, 'All are negative numbers');
});
