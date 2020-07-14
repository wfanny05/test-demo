import { expect } from "chai";
import sinon from "sinon";

//``````syp example```````````
function myFunction(condition, callback) {
  if (condition) {
    callback();
  }
}

describe("syp example", function() {
  beforeEach(function() {});

  afterEach(function() {});

  it("should call the callback function", function() {
    var callback = sinon.spy();

    myFunction(true, callback);

    expect(callback.calledOnce).to.be.true;
    expect(callback.called).to.be.true;
  });
});

//``````stub example```````````
var $ = {
  post: function() {}
};
function saveUser(user, callback) {
  $.post(
    "/users",
    {
      first: user.firstname,
      last: user.lastname
    },
    callback
  );
}
describe("stub example", function() {
  it("should call callback after posting", function() {
    // 我们会stub $.post，这样就不用真正的发送请求
    var post = sinon.stub($, "post");
    post.yields();

    // 针对回调函数使用一个spy
    var callback = sinon.spy();

    saveUser({ firstname: "Han", lastname: "Solo" }, callback);

    post.restore();

    expect(callback.calledOnce).to.be.true;
  });

  it("should send correct parameters to the expected URL", function() {
    // 像之前一样为$.post设置stub
    var post = sinon.stub($, "post");

    // 创建变量保存我们期望看到的结果
    var expectedUrl = "/users";
    var expectedParams = {
      first: "Expected first name",
      last: "Expected last name"
    };

    // 创建将要作为参数的数据
    var user = {
      firstname: expectedParams.first,
      lastname: expectedParams.last
    };

    saveUser(user, function() {});

    post.restore();

    expect(post.calledWith(expectedUrl, expectedParams)).to.be.true;
  });
});

//``````mock example```````````
function callmethod(callback) {
  callback(2, 5);
}

let myAPI = {
  method: function(a, b) {
    return a + b;
  }
};
describe("mock example", function() {
  it("test should call when exceptions", function() {
    let mock = sinon.mock(myAPI);
    mock
      .expects("method")
      .once()
      .withArgs(2, 5);

    callmethod(myAPI.method);

    mock.verify();
  });
});
