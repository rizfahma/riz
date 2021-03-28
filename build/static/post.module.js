(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["post"],{

/***/ "./packages/twentytwenty-theme/src/components/post/post.js":
/*!*****************************************************************!*\
  !*** ./packages/twentytwenty-theme/src/components/post/post.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./featured-media */ \"./packages/twentytwenty-theme/src/components/post/featured-media.js\");\n/* harmony import */ var _post_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-item */ \"./packages/twentytwenty-theme/src/components/post/post-item.js\");\n/* harmony import */ var _post_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-categories */ \"./packages/twentytwenty-theme/src/components/post/post-categories.js\");\n/* harmony import */ var _post_meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-meta */ \"./packages/twentytwenty-theme/src/components/post/post-meta.js\");\n/* harmony import */ var _post_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-tags */ \"./packages/twentytwenty-theme/src/components/post/post-tags.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Post=({state,actions,libraries})=>{// Get information about the current URL.\nconst data=state.source.get(state.router.link);// Get the data of the post.\nconst post=state.source[data.type][data.id];// Get the data of the author.\n// const author = state.source.author[post.author];\n// Get a human readable date.\n// const date = new Date(post.date);\n// Get the html2react component.\nconst Html2React=libraries.html2react.Component;// Get all categories\nconst allCategories=state.source.category;/**\n   * The item's categories is an array of each category id\n   * So, we'll look up the details of each category in allCategories\n   */const categories=post.categories&&post.categories.map(catId=>allCategories[catId]);// Get all tags\nconst allTags=state.source.tag;/**\n   * The item's categories is an array of each tag id\n   * So, we'll look up the details of each tag in allTags\n   */const tags=post.tags&&post.tags.map(tagId=>allTags[tagId]);/**\n   * Once the post has loaded in the DOM, prefetch both the\n   * home posts and the list component so if the user visits\n   * the home page, everything is ready and it loads instantly.\n   */Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(()=>{actions.source.fetch(\"/\");},[]);// Load the post, but only if the data is ready.\nreturn data.isReady?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(PostArticle,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(Header,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_post_item__WEBPACK_IMPORTED_MODULE_3__[\"SectionContainer\"],{children:[post.categories&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_post_categories__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{categories:categories}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_post_item__WEBPACK_IMPORTED_MODULE_3__[\"PostTitle\"],{as:\"h1\",className:\"heading-size-1\",dangerouslySetInnerHTML:{__html:post.title.rendered}}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_post_meta__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{item:post})]})}),state.theme.featuredMedia.showOnPost&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(FeaturedImage,{id:post.featured_media,isSinglePost:true}),post.content&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_post_item__WEBPACK_IMPORTED_MODULE_3__[\"PostInner\"],{size:\"thin\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_post_item__WEBPACK_IMPORTED_MODULE_3__[\"EntryContent\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(Html2React,{html:post.content.rendered})}),post.tags&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_post_tags__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{tags:tags})]})]}):null;};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(Post));const Header=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(_post_item__WEBPACK_IMPORTED_MODULE_3__[\"PostHeader\"], false?undefined:{target:\"e62fgu22\",label:\"Header\"})( false?undefined:{name:\"1iex0al\",styles:\"background-color:#fff;margin:0;padding:4rem 0;@media (min-width: 700px){padding:8rem 0;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXpxaS9yaXpmcm9udC9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1HaUMiLCJmaWxlIjoiL1VzZXJzL3JpenFpL3JpemZyb250L3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0L3Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4vZmVhdHVyZWQtbWVkaWFcIjtcbmltcG9ydCB7XG4gIEVudHJ5Q29udGVudCxcbiAgUG9zdCBhcyBfUG9zdCxcbiAgUG9zdEhlYWRlcixcbiAgUG9zdElubmVyLFxuICBQb3N0VGl0bGUsXG4gIFNlY3Rpb25Db250YWluZXIsXG59IGZyb20gXCIuL3Bvc3QtaXRlbVwiO1xuaW1wb3J0IFBvc3RDYXRlZ29yaWVzIGZyb20gXCIuL3Bvc3QtY2F0ZWdvcmllc1wiO1xuaW1wb3J0IFBvc3RNZXRhIGZyb20gXCIuL3Bvc3QtbWV0YVwiO1xuaW1wb3J0IFBvc3RUYWdzIGZyb20gXCIuL3Bvc3QtdGFnc1wiO1xuXG5jb25zdCBQb3N0ID0gKHsgc3RhdGUsIGFjdGlvbnMsIGxpYnJhcmllcyB9KSA9PiB7XG4gIC8vIEdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBVUkwuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSBwb3N0LlxuICBjb25zdCBwb3N0ID0gc3RhdGUuc291cmNlW2RhdGEudHlwZV1bZGF0YS5pZF07XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgYXV0aG9yLlxuICAvLyBjb25zdCBhdXRob3IgPSBzdGF0ZS5zb3VyY2UuYXV0aG9yW3Bvc3QuYXV0aG9yXTtcbiAgLy8gR2V0IGEgaHVtYW4gcmVhZGFibGUgZGF0ZS5cbiAgLy8gY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHBvc3QuZGF0ZSk7XG5cbiAgLy8gR2V0IHRoZSBodG1sMnJlYWN0IGNvbXBvbmVudC5cbiAgY29uc3QgSHRtbDJSZWFjdCA9IGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudDtcblxuICAvLyBHZXQgYWxsIGNhdGVnb3JpZXNcbiAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IHN0YXRlLnNvdXJjZS5jYXRlZ29yeTtcblxuICAvKipcbiAgICogVGhlIGl0ZW0ncyBjYXRlZ29yaWVzIGlzIGFuIGFycmF5IG9mIGVhY2ggY2F0ZWdvcnkgaWRcbiAgICogU28sIHdlJ2xsIGxvb2sgdXAgdGhlIGRldGFpbHMgb2YgZWFjaCBjYXRlZ29yeSBpbiBhbGxDYXRlZ29yaWVzXG4gICAqL1xuICBjb25zdCBjYXRlZ29yaWVzID1cbiAgICBwb3N0LmNhdGVnb3JpZXMgJiYgcG9zdC5jYXRlZ29yaWVzLm1hcCgoY2F0SWQpID0+IGFsbENhdGVnb3JpZXNbY2F0SWRdKTtcblxuICAvLyBHZXQgYWxsIHRhZ3NcbiAgY29uc3QgYWxsVGFncyA9IHN0YXRlLnNvdXJjZS50YWc7XG5cbiAgLyoqXG4gICAqIFRoZSBpdGVtJ3MgY2F0ZWdvcmllcyBpcyBhbiBhcnJheSBvZiBlYWNoIHRhZyBpZFxuICAgKiBTbywgd2UnbGwgbG9vayB1cCB0aGUgZGV0YWlscyBvZiBlYWNoIHRhZyBpbiBhbGxUYWdzXG4gICAqL1xuICBjb25zdCB0YWdzID0gcG9zdC50YWdzICYmIHBvc3QudGFncy5tYXAoKHRhZ0lkKSA9PiBhbGxUYWdzW3RhZ0lkXSk7XG5cbiAgLyoqXG4gICAqIE9uY2UgdGhlIHBvc3QgaGFzIGxvYWRlZCBpbiB0aGUgRE9NLCBwcmVmZXRjaCBib3RoIHRoZVxuICAgKiBob21lIHBvc3RzIGFuZCB0aGUgbGlzdCBjb21wb25lbnQgc28gaWYgdGhlIHVzZXIgdmlzaXRzXG4gICAqIHRoZSBob21lIHBhZ2UsIGV2ZXJ5dGhpbmcgaXMgcmVhZHkgYW5kIGl0IGxvYWRzIGluc3RhbnRseS5cbiAgICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvXCIpO1xuICB9LCBbXSk7XG5cbiAgLy8gTG9hZCB0aGUgcG9zdCwgYnV0IG9ubHkgaWYgdGhlIGRhdGEgaXMgcmVhZHkuXG4gIHJldHVybiBkYXRhLmlzUmVhZHkgPyAoXG4gICAgPFBvc3RBcnRpY2xlPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPFNlY3Rpb25Db250YWluZXI+XG4gICAgICAgICAgey8qIElmIHRoZSBwb3N0IGhhcyBjYXRlZ29yaWVzLCByZW5kZXIgdGhlIGNhdGVnb3JpZXMgKi99XG4gICAgICAgICAge3Bvc3QuY2F0ZWdvcmllcyAmJiA8UG9zdENhdGVnb3JpZXMgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz59XG5cbiAgICAgICAgICA8UG9zdFRpdGxlXG4gICAgICAgICAgICBhcz1cImgxXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRpbmctc2l6ZS0xXCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC50aXRsZS5yZW5kZXJlZCB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7LyogVGhlIHBvc3QncyBtZXRhZGF0YSBsaWtlIGF1dGhvciwgcHVibGlzaCBkYXRlLCBhbmQgY29tbWVudHMgKi99XG4gICAgICAgICAgPFBvc3RNZXRhIGl0ZW09e3Bvc3R9IC8+XG4gICAgICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDwvSGVhZGVyPlxuXG4gICAgICB7LypcbiAgICAgICAqIElmIHRoZSB3YW50IHRvIHNob3cgZmVhdHVyZWQgbWVkaWEgaW4gdGhlXG4gICAgICAgKiBsaXN0IG9mIGZlYXR1cmVkIHBvc3RzLCB3ZSByZW5kZXIgdGhlIG1lZGlhLlxuICAgICAgICovfVxuICAgICAge3N0YXRlLnRoZW1lLmZlYXR1cmVkTWVkaWEuc2hvd09uUG9zdCAmJiAoXG4gICAgICAgIDxGZWF0dXJlZEltYWdlIGlkPXtwb3N0LmZlYXR1cmVkX21lZGlhfSBpc1NpbmdsZVBvc3Q9e3RydWV9IC8+XG4gICAgICApfVxuXG4gICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIGFuIGV4Y2VycHQgKHNob3J0IHN1bW1hcnkgdGV4dCksIHdlIHJlbmRlciBpdCAqL31cbiAgICAgIHtwb3N0LmNvbnRlbnQgJiYgKFxuICAgICAgICA8UG9zdElubmVyIHNpemU9XCJ0aGluXCI+XG4gICAgICAgICAgPEVudHJ5Q29udGVudD5cbiAgICAgICAgICAgIDxIdG1sMlJlYWN0IGh0bWw9e3Bvc3QuY29udGVudC5yZW5kZXJlZH0gLz5cbiAgICAgICAgICA8L0VudHJ5Q29udGVudD5cbiAgICAgICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIHRhZ3MsIHJlbmRlciBpdCAqL31cbiAgICAgICAgICB7cG9zdC50YWdzICYmIDxQb3N0VGFncyB0YWdzPXt0YWdzfSAvPn1cbiAgICAgICAgPC9Qb3N0SW5uZXI+XG4gICAgICApfVxuICAgIDwvUG9zdEFydGljbGU+XG4gICkgOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KTtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkKFBvc3RIZWFkZXIpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDRyZW0gMDtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgcGFkZGluZzogOHJlbSAwO1xuICB9XG5gO1xuXG5jb25zdCBQb3N0QXJ0aWNsZSA9IHN0eWxlZChfUG9zdClgXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG5gO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gc3R5bGVkKEZlYXR1cmVkTWVkaWEpYFxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICA+IGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gIH1cbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const PostArticle=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(_post_item__WEBPACK_IMPORTED_MODULE_3__[\"Post\"], false?undefined:{target:\"e62fgu21\",label:\"PostArticle\"})( false?undefined:{name:\"1yloecn\",styles:\"padding-top:0!important\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXpxaS9yaXpmcm9udC9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHaUMiLCJmaWxlIjoiL1VzZXJzL3JpenFpL3JpemZyb250L3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0L3Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4vZmVhdHVyZWQtbWVkaWFcIjtcbmltcG9ydCB7XG4gIEVudHJ5Q29udGVudCxcbiAgUG9zdCBhcyBfUG9zdCxcbiAgUG9zdEhlYWRlcixcbiAgUG9zdElubmVyLFxuICBQb3N0VGl0bGUsXG4gIFNlY3Rpb25Db250YWluZXIsXG59IGZyb20gXCIuL3Bvc3QtaXRlbVwiO1xuaW1wb3J0IFBvc3RDYXRlZ29yaWVzIGZyb20gXCIuL3Bvc3QtY2F0ZWdvcmllc1wiO1xuaW1wb3J0IFBvc3RNZXRhIGZyb20gXCIuL3Bvc3QtbWV0YVwiO1xuaW1wb3J0IFBvc3RUYWdzIGZyb20gXCIuL3Bvc3QtdGFnc1wiO1xuXG5jb25zdCBQb3N0ID0gKHsgc3RhdGUsIGFjdGlvbnMsIGxpYnJhcmllcyB9KSA9PiB7XG4gIC8vIEdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBVUkwuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSBwb3N0LlxuICBjb25zdCBwb3N0ID0gc3RhdGUuc291cmNlW2RhdGEudHlwZV1bZGF0YS5pZF07XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgYXV0aG9yLlxuICAvLyBjb25zdCBhdXRob3IgPSBzdGF0ZS5zb3VyY2UuYXV0aG9yW3Bvc3QuYXV0aG9yXTtcbiAgLy8gR2V0IGEgaHVtYW4gcmVhZGFibGUgZGF0ZS5cbiAgLy8gY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHBvc3QuZGF0ZSk7XG5cbiAgLy8gR2V0IHRoZSBodG1sMnJlYWN0IGNvbXBvbmVudC5cbiAgY29uc3QgSHRtbDJSZWFjdCA9IGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudDtcblxuICAvLyBHZXQgYWxsIGNhdGVnb3JpZXNcbiAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IHN0YXRlLnNvdXJjZS5jYXRlZ29yeTtcblxuICAvKipcbiAgICogVGhlIGl0ZW0ncyBjYXRlZ29yaWVzIGlzIGFuIGFycmF5IG9mIGVhY2ggY2F0ZWdvcnkgaWRcbiAgICogU28sIHdlJ2xsIGxvb2sgdXAgdGhlIGRldGFpbHMgb2YgZWFjaCBjYXRlZ29yeSBpbiBhbGxDYXRlZ29yaWVzXG4gICAqL1xuICBjb25zdCBjYXRlZ29yaWVzID1cbiAgICBwb3N0LmNhdGVnb3JpZXMgJiYgcG9zdC5jYXRlZ29yaWVzLm1hcCgoY2F0SWQpID0+IGFsbENhdGVnb3JpZXNbY2F0SWRdKTtcblxuICAvLyBHZXQgYWxsIHRhZ3NcbiAgY29uc3QgYWxsVGFncyA9IHN0YXRlLnNvdXJjZS50YWc7XG5cbiAgLyoqXG4gICAqIFRoZSBpdGVtJ3MgY2F0ZWdvcmllcyBpcyBhbiBhcnJheSBvZiBlYWNoIHRhZyBpZFxuICAgKiBTbywgd2UnbGwgbG9vayB1cCB0aGUgZGV0YWlscyBvZiBlYWNoIHRhZyBpbiBhbGxUYWdzXG4gICAqL1xuICBjb25zdCB0YWdzID0gcG9zdC50YWdzICYmIHBvc3QudGFncy5tYXAoKHRhZ0lkKSA9PiBhbGxUYWdzW3RhZ0lkXSk7XG5cbiAgLyoqXG4gICAqIE9uY2UgdGhlIHBvc3QgaGFzIGxvYWRlZCBpbiB0aGUgRE9NLCBwcmVmZXRjaCBib3RoIHRoZVxuICAgKiBob21lIHBvc3RzIGFuZCB0aGUgbGlzdCBjb21wb25lbnQgc28gaWYgdGhlIHVzZXIgdmlzaXRzXG4gICAqIHRoZSBob21lIHBhZ2UsIGV2ZXJ5dGhpbmcgaXMgcmVhZHkgYW5kIGl0IGxvYWRzIGluc3RhbnRseS5cbiAgICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvXCIpO1xuICB9LCBbXSk7XG5cbiAgLy8gTG9hZCB0aGUgcG9zdCwgYnV0IG9ubHkgaWYgdGhlIGRhdGEgaXMgcmVhZHkuXG4gIHJldHVybiBkYXRhLmlzUmVhZHkgPyAoXG4gICAgPFBvc3RBcnRpY2xlPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPFNlY3Rpb25Db250YWluZXI+XG4gICAgICAgICAgey8qIElmIHRoZSBwb3N0IGhhcyBjYXRlZ29yaWVzLCByZW5kZXIgdGhlIGNhdGVnb3JpZXMgKi99XG4gICAgICAgICAge3Bvc3QuY2F0ZWdvcmllcyAmJiA8UG9zdENhdGVnb3JpZXMgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz59XG5cbiAgICAgICAgICA8UG9zdFRpdGxlXG4gICAgICAgICAgICBhcz1cImgxXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRpbmctc2l6ZS0xXCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC50aXRsZS5yZW5kZXJlZCB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7LyogVGhlIHBvc3QncyBtZXRhZGF0YSBsaWtlIGF1dGhvciwgcHVibGlzaCBkYXRlLCBhbmQgY29tbWVudHMgKi99XG4gICAgICAgICAgPFBvc3RNZXRhIGl0ZW09e3Bvc3R9IC8+XG4gICAgICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDwvSGVhZGVyPlxuXG4gICAgICB7LypcbiAgICAgICAqIElmIHRoZSB3YW50IHRvIHNob3cgZmVhdHVyZWQgbWVkaWEgaW4gdGhlXG4gICAgICAgKiBsaXN0IG9mIGZlYXR1cmVkIHBvc3RzLCB3ZSByZW5kZXIgdGhlIG1lZGlhLlxuICAgICAgICovfVxuICAgICAge3N0YXRlLnRoZW1lLmZlYXR1cmVkTWVkaWEuc2hvd09uUG9zdCAmJiAoXG4gICAgICAgIDxGZWF0dXJlZEltYWdlIGlkPXtwb3N0LmZlYXR1cmVkX21lZGlhfSBpc1NpbmdsZVBvc3Q9e3RydWV9IC8+XG4gICAgICApfVxuXG4gICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIGFuIGV4Y2VycHQgKHNob3J0IHN1bW1hcnkgdGV4dCksIHdlIHJlbmRlciBpdCAqL31cbiAgICAgIHtwb3N0LmNvbnRlbnQgJiYgKFxuICAgICAgICA8UG9zdElubmVyIHNpemU9XCJ0aGluXCI+XG4gICAgICAgICAgPEVudHJ5Q29udGVudD5cbiAgICAgICAgICAgIDxIdG1sMlJlYWN0IGh0bWw9e3Bvc3QuY29udGVudC5yZW5kZXJlZH0gLz5cbiAgICAgICAgICA8L0VudHJ5Q29udGVudD5cbiAgICAgICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIHRhZ3MsIHJlbmRlciBpdCAqL31cbiAgICAgICAgICB7cG9zdC50YWdzICYmIDxQb3N0VGFncyB0YWdzPXt0YWdzfSAvPn1cbiAgICAgICAgPC9Qb3N0SW5uZXI+XG4gICAgICApfVxuICAgIDwvUG9zdEFydGljbGU+XG4gICkgOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KTtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkKFBvc3RIZWFkZXIpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDRyZW0gMDtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgcGFkZGluZzogOHJlbSAwO1xuICB9XG5gO1xuXG5jb25zdCBQb3N0QXJ0aWNsZSA9IHN0eWxlZChfUG9zdClgXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG5gO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gc3R5bGVkKEZlYXR1cmVkTWVkaWEpYFxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICA+IGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gIH1cbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const FeaturedImage=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(_featured_media__WEBPACK_IMPORTED_MODULE_2__[\"default\"], false?undefined:{target:\"e62fgu20\",label:\"FeaturedImage\"})( false?undefined:{name:\"1w7ussq\",styles:\"margin-top:0!important;position:relative;>div{position:relative;}&:before{background:#fff;content:\\\"\\\";display:block;position:absolute;bottom:50%;left:0;right:0;top:0;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXpxaS9yaXpmcm9udC9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdIMkMiLCJmaWxlIjoiL1VzZXJzL3JpenFpL3JpemZyb250L3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0L3Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4vZmVhdHVyZWQtbWVkaWFcIjtcbmltcG9ydCB7XG4gIEVudHJ5Q29udGVudCxcbiAgUG9zdCBhcyBfUG9zdCxcbiAgUG9zdEhlYWRlcixcbiAgUG9zdElubmVyLFxuICBQb3N0VGl0bGUsXG4gIFNlY3Rpb25Db250YWluZXIsXG59IGZyb20gXCIuL3Bvc3QtaXRlbVwiO1xuaW1wb3J0IFBvc3RDYXRlZ29yaWVzIGZyb20gXCIuL3Bvc3QtY2F0ZWdvcmllc1wiO1xuaW1wb3J0IFBvc3RNZXRhIGZyb20gXCIuL3Bvc3QtbWV0YVwiO1xuaW1wb3J0IFBvc3RUYWdzIGZyb20gXCIuL3Bvc3QtdGFnc1wiO1xuXG5jb25zdCBQb3N0ID0gKHsgc3RhdGUsIGFjdGlvbnMsIGxpYnJhcmllcyB9KSA9PiB7XG4gIC8vIEdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBVUkwuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSBwb3N0LlxuICBjb25zdCBwb3N0ID0gc3RhdGUuc291cmNlW2RhdGEudHlwZV1bZGF0YS5pZF07XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgYXV0aG9yLlxuICAvLyBjb25zdCBhdXRob3IgPSBzdGF0ZS5zb3VyY2UuYXV0aG9yW3Bvc3QuYXV0aG9yXTtcbiAgLy8gR2V0IGEgaHVtYW4gcmVhZGFibGUgZGF0ZS5cbiAgLy8gY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHBvc3QuZGF0ZSk7XG5cbiAgLy8gR2V0IHRoZSBodG1sMnJlYWN0IGNvbXBvbmVudC5cbiAgY29uc3QgSHRtbDJSZWFjdCA9IGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudDtcblxuICAvLyBHZXQgYWxsIGNhdGVnb3JpZXNcbiAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IHN0YXRlLnNvdXJjZS5jYXRlZ29yeTtcblxuICAvKipcbiAgICogVGhlIGl0ZW0ncyBjYXRlZ29yaWVzIGlzIGFuIGFycmF5IG9mIGVhY2ggY2F0ZWdvcnkgaWRcbiAgICogU28sIHdlJ2xsIGxvb2sgdXAgdGhlIGRldGFpbHMgb2YgZWFjaCBjYXRlZ29yeSBpbiBhbGxDYXRlZ29yaWVzXG4gICAqL1xuICBjb25zdCBjYXRlZ29yaWVzID1cbiAgICBwb3N0LmNhdGVnb3JpZXMgJiYgcG9zdC5jYXRlZ29yaWVzLm1hcCgoY2F0SWQpID0+IGFsbENhdGVnb3JpZXNbY2F0SWRdKTtcblxuICAvLyBHZXQgYWxsIHRhZ3NcbiAgY29uc3QgYWxsVGFncyA9IHN0YXRlLnNvdXJjZS50YWc7XG5cbiAgLyoqXG4gICAqIFRoZSBpdGVtJ3MgY2F0ZWdvcmllcyBpcyBhbiBhcnJheSBvZiBlYWNoIHRhZyBpZFxuICAgKiBTbywgd2UnbGwgbG9vayB1cCB0aGUgZGV0YWlscyBvZiBlYWNoIHRhZyBpbiBhbGxUYWdzXG4gICAqL1xuICBjb25zdCB0YWdzID0gcG9zdC50YWdzICYmIHBvc3QudGFncy5tYXAoKHRhZ0lkKSA9PiBhbGxUYWdzW3RhZ0lkXSk7XG5cbiAgLyoqXG4gICAqIE9uY2UgdGhlIHBvc3QgaGFzIGxvYWRlZCBpbiB0aGUgRE9NLCBwcmVmZXRjaCBib3RoIHRoZVxuICAgKiBob21lIHBvc3RzIGFuZCB0aGUgbGlzdCBjb21wb25lbnQgc28gaWYgdGhlIHVzZXIgdmlzaXRzXG4gICAqIHRoZSBob21lIHBhZ2UsIGV2ZXJ5dGhpbmcgaXMgcmVhZHkgYW5kIGl0IGxvYWRzIGluc3RhbnRseS5cbiAgICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvXCIpO1xuICB9LCBbXSk7XG5cbiAgLy8gTG9hZCB0aGUgcG9zdCwgYnV0IG9ubHkgaWYgdGhlIGRhdGEgaXMgcmVhZHkuXG4gIHJldHVybiBkYXRhLmlzUmVhZHkgPyAoXG4gICAgPFBvc3RBcnRpY2xlPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPFNlY3Rpb25Db250YWluZXI+XG4gICAgICAgICAgey8qIElmIHRoZSBwb3N0IGhhcyBjYXRlZ29yaWVzLCByZW5kZXIgdGhlIGNhdGVnb3JpZXMgKi99XG4gICAgICAgICAge3Bvc3QuY2F0ZWdvcmllcyAmJiA8UG9zdENhdGVnb3JpZXMgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz59XG5cbiAgICAgICAgICA8UG9zdFRpdGxlXG4gICAgICAgICAgICBhcz1cImgxXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRpbmctc2l6ZS0xXCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC50aXRsZS5yZW5kZXJlZCB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7LyogVGhlIHBvc3QncyBtZXRhZGF0YSBsaWtlIGF1dGhvciwgcHVibGlzaCBkYXRlLCBhbmQgY29tbWVudHMgKi99XG4gICAgICAgICAgPFBvc3RNZXRhIGl0ZW09e3Bvc3R9IC8+XG4gICAgICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDwvSGVhZGVyPlxuXG4gICAgICB7LypcbiAgICAgICAqIElmIHRoZSB3YW50IHRvIHNob3cgZmVhdHVyZWQgbWVkaWEgaW4gdGhlXG4gICAgICAgKiBsaXN0IG9mIGZlYXR1cmVkIHBvc3RzLCB3ZSByZW5kZXIgdGhlIG1lZGlhLlxuICAgICAgICovfVxuICAgICAge3N0YXRlLnRoZW1lLmZlYXR1cmVkTWVkaWEuc2hvd09uUG9zdCAmJiAoXG4gICAgICAgIDxGZWF0dXJlZEltYWdlIGlkPXtwb3N0LmZlYXR1cmVkX21lZGlhfSBpc1NpbmdsZVBvc3Q9e3RydWV9IC8+XG4gICAgICApfVxuXG4gICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIGFuIGV4Y2VycHQgKHNob3J0IHN1bW1hcnkgdGV4dCksIHdlIHJlbmRlciBpdCAqL31cbiAgICAgIHtwb3N0LmNvbnRlbnQgJiYgKFxuICAgICAgICA8UG9zdElubmVyIHNpemU9XCJ0aGluXCI+XG4gICAgICAgICAgPEVudHJ5Q29udGVudD5cbiAgICAgICAgICAgIDxIdG1sMlJlYWN0IGh0bWw9e3Bvc3QuY29udGVudC5yZW5kZXJlZH0gLz5cbiAgICAgICAgICA8L0VudHJ5Q29udGVudD5cbiAgICAgICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIHRhZ3MsIHJlbmRlciBpdCAqL31cbiAgICAgICAgICB7cG9zdC50YWdzICYmIDxQb3N0VGFncyB0YWdzPXt0YWdzfSAvPn1cbiAgICAgICAgPC9Qb3N0SW5uZXI+XG4gICAgICApfVxuICAgIDwvUG9zdEFydGljbGU+XG4gICkgOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KTtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkKFBvc3RIZWFkZXIpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDRyZW0gMDtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgcGFkZGluZzogOHJlbSAwO1xuICB9XG5gO1xuXG5jb25zdCBQb3N0QXJ0aWNsZSA9IHN0eWxlZChfUG9zdClgXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG5gO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gc3R5bGVkKEZlYXR1cmVkTWVkaWEpYFxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICA+IGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gIH1cbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LmpzPzU2ZWEiXSwibmFtZXMiOlsiUG9zdCIsInN0YXRlIiwiYWN0aW9ucyIsImxpYnJhcmllcyIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwicG9zdCIsInR5cGUiLCJpZCIsIkh0bWwyUmVhY3QiLCJodG1sMnJlYWN0IiwiQ29tcG9uZW50IiwiYWxsQ2F0ZWdvcmllcyIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsIm1hcCIsImNhdElkIiwiYWxsVGFncyIsInRhZyIsInRhZ3MiLCJ0YWdJZCIsInVzZUVmZmVjdCIsImZldGNoIiwiaXNSZWFkeSIsIl9faHRtbCIsInRpdGxlIiwicmVuZGVyZWQiLCJ0aGVtZSIsImZlYXR1cmVkTWVkaWEiLCJzaG93T25Qb3N0IiwiZmVhdHVyZWRfbWVkaWEiLCJjb250ZW50IiwiY29ubmVjdCIsIkhlYWRlciIsIlBvc3RIZWFkZXIiLCJQb3N0QXJ0aWNsZSIsIl9Qb3N0IiwiRmVhdHVyZWRJbWFnZSIsIkZlYXR1cmVkTWVkaWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O3FSQWVBLEtBQU1BLEtBQUksQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBU0MsT0FBVCxDQUFrQkMsU0FBbEIsQ0FBRCxHQUFtQyxDQUM5QztBQUNBLEtBQU1DLEtBQUksQ0FBR0gsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJMLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0E7QUFDQSxLQUFNQyxLQUFJLENBQUdSLEtBQUssQ0FBQ0ksTUFBTixDQUFhRCxJQUFJLENBQUNNLElBQWxCLEVBQXdCTixJQUFJLENBQUNPLEVBQTdCLENBQWIsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsS0FBTUMsV0FBVSxDQUFHVCxTQUFTLENBQUNVLFVBQVYsQ0FBcUJDLFNBQXhDLENBRUE7QUFDQSxLQUFNQyxjQUFhLENBQUdkLEtBQUssQ0FBQ0ksTUFBTixDQUFhVyxRQUFuQyxDQUVBO0FBQ0Y7QUFDQTtBQUNBLEtBQ0UsS0FBTUMsV0FBVSxDQUNkUixJQUFJLENBQUNRLFVBQUwsRUFBbUJSLElBQUksQ0FBQ1EsVUFBTCxDQUFnQkMsR0FBaEIsQ0FBcUJDLEtBQUQsRUFBV0osYUFBYSxDQUFDSSxLQUFELENBQTVDLENBRHJCLENBR0E7QUFDQSxLQUFNQyxRQUFPLENBQUduQixLQUFLLENBQUNJLE1BQU4sQ0FBYWdCLEdBQTdCLENBRUE7QUFDRjtBQUNBO0FBQ0EsS0FDRSxLQUFNQyxLQUFJLENBQUdiLElBQUksQ0FBQ2EsSUFBTCxFQUFhYixJQUFJLENBQUNhLElBQUwsQ0FBVUosR0FBVixDQUFlSyxLQUFELEVBQVdILE9BQU8sQ0FBQ0csS0FBRCxDQUFoQyxDQUExQixDQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsS0FDRUMsdURBQVMsQ0FBQyxJQUFNLENBQ2R0QixPQUFPLENBQUNHLE1BQVIsQ0FBZW9CLEtBQWYsQ0FBcUIsR0FBckIsRUFDRCxDQUZRLENBRU4sRUFGTSxDQUFULENBSUE7QUFDQSxNQUFPckIsS0FBSSxDQUFDc0IsT0FBTCxDQUNMLHdFQUFDLFdBQUQsWUFDRSx1RUFBQyxNQUFELFdBQ0Usd0VBQUMsMkRBQUQsWUFFR2pCLElBQUksQ0FBQ1EsVUFBTCxFQUFtQix1RUFBQyx3REFBRCxFQUFnQixVQUFVLENBQUVBLFVBQTVCLEVBRnRCLENBSUUsdUVBQUMsb0RBQUQsRUFDRSxFQUFFLENBQUMsSUFETCxDQUVFLFNBQVMsQ0FBQyxnQkFGWixDQUdFLHVCQUF1QixDQUFFLENBQUVVLE1BQU0sQ0FBRWxCLElBQUksQ0FBQ21CLEtBQUwsQ0FBV0MsUUFBckIsQ0FIM0IsRUFKRixDQVdFLHVFQUFDLGtEQUFELEVBQVUsSUFBSSxDQUFFcEIsSUFBaEIsRUFYRixHQURGLEVBREYsQ0FxQkdSLEtBQUssQ0FBQzZCLEtBQU4sQ0FBWUMsYUFBWixDQUEwQkMsVUFBMUIsRUFDQyx1RUFBQyxhQUFELEVBQWUsRUFBRSxDQUFFdkIsSUFBSSxDQUFDd0IsY0FBeEIsQ0FBd0MsWUFBWSxDQUFFLElBQXRELEVBdEJKLENBMEJHeEIsSUFBSSxDQUFDeUIsT0FBTCxFQUNDLHdFQUFDLG9EQUFELEVBQVcsSUFBSSxDQUFDLE1BQWhCLFdBQ0UsdUVBQUMsdURBQUQsV0FDRSx1RUFBQyxVQUFELEVBQVksSUFBSSxDQUFFekIsSUFBSSxDQUFDeUIsT0FBTCxDQUFhTCxRQUEvQixFQURGLEVBREYsQ0FLR3BCLElBQUksQ0FBQ2EsSUFBTCxFQUFhLHVFQUFDLGtEQUFELEVBQVUsSUFBSSxDQUFFQSxJQUFoQixFQUxoQixHQTNCSixHQURLLENBcUNILElBckNKLENBc0NELENBaEZELENBa0ZlYSx1SEFBTyxDQUFDbkMsSUFBRCxDQUF0QixFQUVBLEtBQU1vQyxPQUFNLENBQUcsb0VBQU0sQ0FBQ0MscURBQVAscURBQUgscXlLQUFaLENBU0EsS0FBTUMsWUFBVyxDQUFHLG9FQUFNLENBQUNDLCtDQUFQLDBEQUFILG91S0FBakIsQ0FJQSxLQUFNQyxjQUFhLENBQUcsb0VBQU0sQ0FBQ0MsdURBQVAsNERBQUgscTNLQUFuQiIsImZpbGUiOiIuL3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0L3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4vZmVhdHVyZWQtbWVkaWFcIjtcbmltcG9ydCB7XG4gIEVudHJ5Q29udGVudCxcbiAgUG9zdCBhcyBfUG9zdCxcbiAgUG9zdEhlYWRlcixcbiAgUG9zdElubmVyLFxuICBQb3N0VGl0bGUsXG4gIFNlY3Rpb25Db250YWluZXIsXG59IGZyb20gXCIuL3Bvc3QtaXRlbVwiO1xuaW1wb3J0IFBvc3RDYXRlZ29yaWVzIGZyb20gXCIuL3Bvc3QtY2F0ZWdvcmllc1wiO1xuaW1wb3J0IFBvc3RNZXRhIGZyb20gXCIuL3Bvc3QtbWV0YVwiO1xuaW1wb3J0IFBvc3RUYWdzIGZyb20gXCIuL3Bvc3QtdGFnc1wiO1xuXG5jb25zdCBQb3N0ID0gKHsgc3RhdGUsIGFjdGlvbnMsIGxpYnJhcmllcyB9KSA9PiB7XG4gIC8vIEdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBVUkwuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSBwb3N0LlxuICBjb25zdCBwb3N0ID0gc3RhdGUuc291cmNlW2RhdGEudHlwZV1bZGF0YS5pZF07XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgYXV0aG9yLlxuICAvLyBjb25zdCBhdXRob3IgPSBzdGF0ZS5zb3VyY2UuYXV0aG9yW3Bvc3QuYXV0aG9yXTtcbiAgLy8gR2V0IGEgaHVtYW4gcmVhZGFibGUgZGF0ZS5cbiAgLy8gY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHBvc3QuZGF0ZSk7XG5cbiAgLy8gR2V0IHRoZSBodG1sMnJlYWN0IGNvbXBvbmVudC5cbiAgY29uc3QgSHRtbDJSZWFjdCA9IGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudDtcblxuICAvLyBHZXQgYWxsIGNhdGVnb3JpZXNcbiAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IHN0YXRlLnNvdXJjZS5jYXRlZ29yeTtcblxuICAvKipcbiAgICogVGhlIGl0ZW0ncyBjYXRlZ29yaWVzIGlzIGFuIGFycmF5IG9mIGVhY2ggY2F0ZWdvcnkgaWRcbiAgICogU28sIHdlJ2xsIGxvb2sgdXAgdGhlIGRldGFpbHMgb2YgZWFjaCBjYXRlZ29yeSBpbiBhbGxDYXRlZ29yaWVzXG4gICAqL1xuICBjb25zdCBjYXRlZ29yaWVzID1cbiAgICBwb3N0LmNhdGVnb3JpZXMgJiYgcG9zdC5jYXRlZ29yaWVzLm1hcCgoY2F0SWQpID0+IGFsbENhdGVnb3JpZXNbY2F0SWRdKTtcblxuICAvLyBHZXQgYWxsIHRhZ3NcbiAgY29uc3QgYWxsVGFncyA9IHN0YXRlLnNvdXJjZS50YWc7XG5cbiAgLyoqXG4gICAqIFRoZSBpdGVtJ3MgY2F0ZWdvcmllcyBpcyBhbiBhcnJheSBvZiBlYWNoIHRhZyBpZFxuICAgKiBTbywgd2UnbGwgbG9vayB1cCB0aGUgZGV0YWlscyBvZiBlYWNoIHRhZyBpbiBhbGxUYWdzXG4gICAqL1xuICBjb25zdCB0YWdzID0gcG9zdC50YWdzICYmIHBvc3QudGFncy5tYXAoKHRhZ0lkKSA9PiBhbGxUYWdzW3RhZ0lkXSk7XG5cbiAgLyoqXG4gICAqIE9uY2UgdGhlIHBvc3QgaGFzIGxvYWRlZCBpbiB0aGUgRE9NLCBwcmVmZXRjaCBib3RoIHRoZVxuICAgKiBob21lIHBvc3RzIGFuZCB0aGUgbGlzdCBjb21wb25lbnQgc28gaWYgdGhlIHVzZXIgdmlzaXRzXG4gICAqIHRoZSBob21lIHBhZ2UsIGV2ZXJ5dGhpbmcgaXMgcmVhZHkgYW5kIGl0IGxvYWRzIGluc3RhbnRseS5cbiAgICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvXCIpO1xuICB9LCBbXSk7XG5cbiAgLy8gTG9hZCB0aGUgcG9zdCwgYnV0IG9ubHkgaWYgdGhlIGRhdGEgaXMgcmVhZHkuXG4gIHJldHVybiBkYXRhLmlzUmVhZHkgPyAoXG4gICAgPFBvc3RBcnRpY2xlPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPFNlY3Rpb25Db250YWluZXI+XG4gICAgICAgICAgey8qIElmIHRoZSBwb3N0IGhhcyBjYXRlZ29yaWVzLCByZW5kZXIgdGhlIGNhdGVnb3JpZXMgKi99XG4gICAgICAgICAge3Bvc3QuY2F0ZWdvcmllcyAmJiA8UG9zdENhdGVnb3JpZXMgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz59XG5cbiAgICAgICAgICA8UG9zdFRpdGxlXG4gICAgICAgICAgICBhcz1cImgxXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRpbmctc2l6ZS0xXCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC50aXRsZS5yZW5kZXJlZCB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7LyogVGhlIHBvc3QncyBtZXRhZGF0YSBsaWtlIGF1dGhvciwgcHVibGlzaCBkYXRlLCBhbmQgY29tbWVudHMgKi99XG4gICAgICAgICAgPFBvc3RNZXRhIGl0ZW09e3Bvc3R9IC8+XG4gICAgICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDwvSGVhZGVyPlxuXG4gICAgICB7LypcbiAgICAgICAqIElmIHRoZSB3YW50IHRvIHNob3cgZmVhdHVyZWQgbWVkaWEgaW4gdGhlXG4gICAgICAgKiBsaXN0IG9mIGZlYXR1cmVkIHBvc3RzLCB3ZSByZW5kZXIgdGhlIG1lZGlhLlxuICAgICAgICovfVxuICAgICAge3N0YXRlLnRoZW1lLmZlYXR1cmVkTWVkaWEuc2hvd09uUG9zdCAmJiAoXG4gICAgICAgIDxGZWF0dXJlZEltYWdlIGlkPXtwb3N0LmZlYXR1cmVkX21lZGlhfSBpc1NpbmdsZVBvc3Q9e3RydWV9IC8+XG4gICAgICApfVxuXG4gICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIGFuIGV4Y2VycHQgKHNob3J0IHN1bW1hcnkgdGV4dCksIHdlIHJlbmRlciBpdCAqL31cbiAgICAgIHtwb3N0LmNvbnRlbnQgJiYgKFxuICAgICAgICA8UG9zdElubmVyIHNpemU9XCJ0aGluXCI+XG4gICAgICAgICAgPEVudHJ5Q29udGVudD5cbiAgICAgICAgICAgIDxIdG1sMlJlYWN0IGh0bWw9e3Bvc3QuY29udGVudC5yZW5kZXJlZH0gLz5cbiAgICAgICAgICA8L0VudHJ5Q29udGVudD5cbiAgICAgICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIHRhZ3MsIHJlbmRlciBpdCAqL31cbiAgICAgICAgICB7cG9zdC50YWdzICYmIDxQb3N0VGFncyB0YWdzPXt0YWdzfSAvPn1cbiAgICAgICAgPC9Qb3N0SW5uZXI+XG4gICAgICApfVxuICAgIDwvUG9zdEFydGljbGU+XG4gICkgOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KTtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkKFBvc3RIZWFkZXIpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDRyZW0gMDtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgcGFkZGluZzogOHJlbSAwO1xuICB9XG5gO1xuXG5jb25zdCBQb3N0QXJ0aWNsZSA9IHN0eWxlZChfUG9zdClgXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG5gO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gc3R5bGVkKEZlYXR1cmVkTWVkaWEpYFxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICA+IGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/components/post/post.js\n");

/***/ })

}]);