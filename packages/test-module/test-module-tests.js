// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by test-module.js.
import { name as packageName } from "meteor/test-module";

// Write your tests here!
// Here is an example.
Tinytest.add('test-module - example', function (test) {
  test.equal(packageName, "test-module");
});
