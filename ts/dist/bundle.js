(() => {
  "use strict";
  ({
    439: function () {
      var t,
        o =
          (this && this.__extends) ||
          ((t = function (o, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var n in o)
                    Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
                }),
              t(o, n)
            );
          }),
          function (o, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            t(o, n),
              (o.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          }),
        n = (function (t) {
          function n(o) {
            return t.call(this, o) || this;
          }
          return (
            o(n, t),
            (n.prototype.saveToString = function () {
              return JSON.stringify(this.db);
            }),
            (n.prototype.restoreFromString = function (t) {
              this.db = JSON.parse(t);
            }),
            n
          );
        })(
          (function () {
            function t(t) {
              (this.db = {}), t && (this.db = t);
            }
            return (
              (t.prototype.get = function (t) {
                return this.db[t];
              }),
              (t.prototype.set = function (t, o) {
                this.db[t] = o;
              }),
              t
            );
          })(),
        ),
        r = new n({ x: 10, y: 20 });
      r.set("foo", 22), console.log(r.get("foo"));
      var e = r.saveToString();
      console.log(e), r.set("foo", 23), console.log(r.get("foo"));
      var i = new n();
      i.restoreFromString(e), console.log(i), console.log(i.get("foo"));
    },
  }[439]());
})();
//# sourceMappingURL=bundle.js.map
