(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotif = void 0;

var handleMessageNotif = function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
};

exports.handleMessageNotif = handleMessageNotif;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLElBQUksRUFBSTtBQUFBLE1BQ3ZCQyxPQUR1QixHQUNERCxJQURDLENBQ3ZCQyxPQUR1QjtBQUFBLE1BQ2RDLFFBRGMsR0FDREYsSUFEQyxDQUNkRSxRQURjO0FBRy9CQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsV0FBZUYsUUFBZixlQUE0QkQsT0FBNUI7QUFDSCxDQUpEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGFuZGxlTWVzc2FnZU5vdGlmID0gZGF0YSA9PiB7XG4gICAgY29uc3QgeyBtZXNzYWdlLCBuaWNrbmFtZSB9ID0gZGF0YVxuXG4gICAgY29uc29sZS5sb2coYCR7bmlja25hbWV9OiAke21lc3NhZ2V9YClcbn1cblxuZXhwb3J0IHsgaGFuZGxlTWVzc2FnZU5vdGlmIH0iXX0=
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

// eslint-disable-next-line no-undef
var socket = io('/');

var sendMessage = function sendMessage(message) {
  socket.emit('newMessage', {
    message: message
  });
  console.log("You: ".concat(message));
};

var setNickname = function setNickname(nickname) {
  socket.emit('setNickname', {
    nickname: nickname
  });
};

socket.on('messageNotif', _chat.handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTZkYTA4OWEuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTtBQUNBLElBQU1BLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakI7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsT0FBTyxFQUFJO0FBQzNCSCxFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxZQUFaLEVBQTBCO0FBQUVELElBQUFBLE9BQU8sRUFBUEE7QUFBRixHQUExQjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsZ0JBQW9CSCxPQUFwQjtBQUNILENBSEQ7O0FBS0EsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsUUFBUSxFQUFJO0FBQzVCUixFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQUVJLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUEzQjtBQUNILENBRkQ7O0FBSUFSLE1BQU0sQ0FBQ1MsRUFBUCxDQUFVLGNBQVYsRUFBMEJDLHdCQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU1lc3NhZ2VOb3RpZiB9IGZyb20gXCIuL2NoYXRcIlxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmNvbnN0IHNvY2tldCA9IGlvKCcvJylcblxuY29uc3Qgc2VuZE1lc3NhZ2UgPSBtZXNzYWdlID0+IHtcbiAgICBzb2NrZXQuZW1pdCgnbmV3TWVzc2FnZScsIHsgbWVzc2FnZSB9KVxuICAgIGNvbnNvbGUubG9nKGBZb3U6ICR7bWVzc2FnZX1gKVxufVxuXG5jb25zdCBzZXROaWNrbmFtZSA9IG5pY2tuYW1lID0+IHtcbiAgICBzb2NrZXQuZW1pdCgnc2V0Tmlja25hbWUnLCB7IG5pY2tuYW1lIH0pXG59XG5cbnNvY2tldC5vbignbWVzc2FnZU5vdGlmJywgaGFuZGxlTWVzc2FnZU5vdGlmKSJdfQ==
},{"./chat":1}]},{},[2])