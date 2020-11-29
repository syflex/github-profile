/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
 // const axios = require('axios').default;
// // Make a request for a user with a given ID
// axios.post('https://api.github.com/graphql',{
//   method: 'post',  
//   query: `
//   viewer{
//     name
//   }
//     `
// },
// {headers: {
//   'Authorization': 'bearer 3b65fe1a47a0123121c857e08063af5adc24f033'
// }}
// )
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
//   axios({
//     url: 'https://1jzxrj179.lp.gql.zone/graphql',
//     method: 'post',
//     data: {
//       query: `
//         query PostsForAuthor {
//           author(id: 1) {
//             firstName
//               posts {
//                 title
//                 votes
//               }
//             }
//           }
//         `
//     }
//   }).then((result) => {
//     console.log(result.data)
//   });

var content = {
  "query": "{\n      viewer{\n        name,    \n        email,\n        avatarUrl,\n        bio,    \n        repositories(last: 20) {\n           nodes {\n               name,\n              url,\n              description,\n              updatedAt,\n              stargazerCount,\n              forkCount\n              primaryLanguage{\n                name,\n                color\n              }\n           }\n         }   \n      }\n    }\n  "
};
var body = JSON.stringify(content);
fetch('https://api.github.com/graphql', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'bearer 3b65fe1a47a0123121c857e08063af5adc24f033'
  },
  body: body
}).then(function (response) {
  return response.json();
}).then(function (data) {
  document.body.innerHTML = "<pre>".concat(JSON.stringify(data, null, 2), "</pre>");
});

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXRodWItcHJvZmlsZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9naXRodWItcHJvZmlsZS8uL3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vZ2l0aHViLXByb2ZpbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2l0aHViLXByb2ZpbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9naXRodWItcHJvZmlsZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiY29udGVudCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkb2N1bWVudCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNRSxJQUFJQSxPQUFPLEdBQUc7QUFDWjtBQURZLENBQWQ7QUF5QkEsSUFBSUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsT0FBZixDQUFYO0FBRUFJLEtBQUssQ0FBQyxnQ0FBRCxFQUFtQztBQUN0Q0MsUUFBTSxFQUFFLE1BRDhCO0FBRXRDQyxTQUFPLEVBQUU7QUFDUCxvQkFBZ0Isa0JBRFQ7QUFFUCxxQkFBaUI7QUFGVixHQUY2QjtBQU10Q0wsTUFBSSxFQUFFQTtBQU5nQyxDQUFuQyxDQUFMLENBUUdNLElBUkgsQ0FRUSxVQUFBQyxRQUFRO0FBQUEsU0FBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxDQVJoQixFQVNHRixJQVRILENBU1EsVUFBQUcsSUFBSSxFQUFJO0FBQ1pDLFVBQVEsQ0FBQ1YsSUFBVCxDQUFjVyxTQUFkLGtCQUFrQ1YsSUFBSSxDQUFDQyxTQUFMLENBQWVPLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsQ0FBM0IsQ0FBbEM7QUFDRCxDQVhILEU7Ozs7Ozs7Ozs7Ozs7O0FDakZGOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3Njc3MvaW5kZXguc2Nzc1wiO1xyXG5cclxuLy8gY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XHJcblxyXG4vLyAvLyBNYWtlIGEgcmVxdWVzdCBmb3IgYSB1c2VyIHdpdGggYSBnaXZlbiBJRFxyXG4vLyBheGlvcy5wb3N0KCdodHRwczovL2FwaS5naXRodWIuY29tL2dyYXBocWwnLHtcclxuLy8gICBtZXRob2Q6ICdwb3N0JywgIFxyXG4vLyAgIHF1ZXJ5OiBgXHJcbi8vICAgdmlld2Vye1xyXG4vLyAgICAgbmFtZVxyXG4vLyAgIH1cclxuLy8gICAgIGBcclxuLy8gfSxcclxuLy8ge2hlYWRlcnM6IHtcclxuLy8gICAnQXV0aG9yaXphdGlvbic6ICdiZWFyZXIgM2I2NWZlMWE0N2EwMTIzMTIxYzg1N2UwODA2M2FmNWFkYzI0ZjAzMydcclxuLy8gfX1cclxuICAgICAgXHJcbi8vIClcclxuLy8gICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuLy8gICAgIC8vIGhhbmRsZSBzdWNjZXNzXHJcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbi8vICAgfSlcclxuLy8gICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbi8vICAgICAvLyBoYW5kbGUgZXJyb3JcclxuLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuLy8gICB9KVxyXG4vLyAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIC8vIGFsd2F5cyBleGVjdXRlZFxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICBheGlvcyh7XHJcbi8vICAgICB1cmw6ICdodHRwczovLzFqenhyajE3OS5scC5ncWwuem9uZS9ncmFwaHFsJyxcclxuLy8gICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4vLyAgICAgZGF0YToge1xyXG4vLyAgICAgICBxdWVyeTogYFxyXG4vLyAgICAgICAgIHF1ZXJ5IFBvc3RzRm9yQXV0aG9yIHtcclxuLy8gICAgICAgICAgIGF1dGhvcihpZDogMSkge1xyXG4vLyAgICAgICAgICAgICBmaXJzdE5hbWVcclxuLy8gICAgICAgICAgICAgICBwb3N0cyB7XHJcbi8vICAgICAgICAgICAgICAgICB0aXRsZVxyXG4vLyAgICAgICAgICAgICAgICAgdm90ZXNcclxuLy8gICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICBgXHJcbi8vICAgICB9XHJcbi8vICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuLy8gICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gIGxldCBjb250ZW50ID0ge1xyXG4gICAgXCJxdWVyeVwiOiBge1xyXG4gICAgICB2aWV3ZXJ7XHJcbiAgICAgICAgbmFtZSwgICAgXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgYXZhdGFyVXJsLFxyXG4gICAgICAgIGJpbywgICAgXHJcbiAgICAgICAgcmVwb3NpdG9yaWVzKGxhc3Q6IDIwKSB7XHJcbiAgICAgICAgICAgbm9kZXMge1xyXG4gICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICB1cGRhdGVkQXQsXHJcbiAgICAgICAgICAgICAgc3RhcmdhemVyQ291bnQsXHJcbiAgICAgICAgICAgICAgZm9ya0NvdW50XHJcbiAgICAgICAgICAgICAgcHJpbWFyeUxhbmd1YWdle1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgfSAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYH07XHJcbiAgXHJcbiAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShjb250ZW50KTtcclxuICBcclxuICBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9ncmFwaHFsJywge1xyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ2JlYXJlciAzYjY1ZmUxYTQ3YTAxMjMxMjFjODU3ZTA4MDYzYWY1YWRjMjRmMDMzJ1xyXG4gICAgfSxcclxuICAgIGJvZHk6IGJvZHlcclxuICB9KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYDxwcmU+JHtKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKX08L3ByZT5gO1xyXG4gICAgfSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==