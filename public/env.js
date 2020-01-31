var Env = function() {};
(Env.init = function() {
  Env.baseUrl = "http://192.168.0.77:20000";
  Env.emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  Env.mobile = /^(?:254|\+254|0)?(7|1(?:(?:[123456789][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/;

  Env.validateEmail = function(email) {
    return Env.emailRe.test(String(email).toLowerCase());
  };

  Env.validateMobile = function(mobile) {
    return Env.mobile.test(String(mobile).toLowerCase());
  };

  
})();
