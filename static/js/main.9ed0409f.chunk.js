(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={galleryItem:"ImageGalleryItem_galleryItem__1_a-z",galleryItemImage:"ImageGalleryItem_galleryItemImage__2KlOC"}},11:function(e,t,a){e.exports={overlay:"Modal_overlay__1HVQc",modal:"Modal_modal__3gxlV",button:"Modal_button__-zn2F"}},15:function(e,t,a){e.exports={Button:"Button_Button__bWm5F"}},16:function(e){e.exports=JSON.parse('[{"preview":"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg","original":"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg","description":"Hokkaido Flower"},{"preview":"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg","original":"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg","description":"Aerial Beach View"},{"preview":"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg","original":"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg","description":"Flower Blooms"},{"preview":"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg","original":"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg","description":"Alpine Mountains"},{"preview":"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg","original":"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg","description":"Mountain Lake Sailing"},{"preview":"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg","original":"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg","description":"Alpine Spring Meadows"},{"preview":"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg","original":"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg","description":"Nature Landscape"},{"preview":"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg","original":"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg","description":"Lighthouse Coast Sea"}]')},22:function(e,t,a){},23:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(13),c=a.n(r),i=(a(22),a(3)),s=a(4),l=a(6),p=a(5),h=(a(23),a(7)),u=a.n(h),d=a(17),g=a(1),m=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleQueryChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):alert("Please enter search query")},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:u.a.searchbar,children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,className:u.a.form,children:[Object(g.jsxs)("button",{type:"submit",className:u.a.button,children:[Object(g.jsx)(d.a,{}),Object(g.jsx)("span",{className:u.a.buttonLabel,children:"Search"})]}),Object(g.jsx)("input",{className:u.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleQueryChange})]})})}}]),a}(o.Component),b=a(12),y=a(9),j=a.n(y),_=a(10),f=a.n(_),v=function(e){var t=e.id,a=e.webformatURL,o=e.toggleModal,n=e.largeImageURL;return Object(g.jsx)("li",{className:f.a.galleryItem,children:Object(g.jsx)("img",{onClick:function(){return o(n)},className:f.a.galleryItemImage,src:a,alt:t})})},x=a(14),O=a.n(x),w=(a(45),a(15)),S=a.n(w),k=function(e){var t=e.onClick;return Object(g.jsx)("button",{type:"button",className:S.a.Button,onClick:t,children:"Load more"})},I=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={images:null,status:"idle"},e.BASE_URL="https://pixabay.com/api",e.API_KEY="23560247-693fa480425212983640fe465",e.loadMore=function(){var t=e.state.page+1;fetch("".concat(e.BASE_URL,"/?image_type=photo&orientation=horizontal&q=").concat(e.props.searchQuery,"&page=").concat(t,"&per_page=12&key=").concat(e.API_KEY)).then((function(e){return e.json()})).then((function(t){return e.setState((function(e){return{images:[].concat(Object(b.a)(e.images),Object(b.a)(t.hits)),page:e.page+1}}))})).then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.searchQuery!==this.props.searchQuery&&(this.setState({status:"pending",page:1}),fetch("".concat(this.BASE_URL,"/?image_type=photo&orientation=horizontal&q=").concat(this.props.searchQuery,"&page=").concat(1,"&per_page=12&key=").concat(this.API_KEY)).then((function(e){return e.json()})).then((function(e){return a.setState({images:e.hits,page:1,status:"resolved"})})).finally((function(){return a.setState({loading:!1})})))}},{key:"render",value:function(){var e=this.props.toggleModal,t=this.state,a=t.images,o=t.status;return"idle"===o?Object(g.jsx)("div",{children:"Please enter your search query"}):"pending"===o?Object(g.jsx)(O.a,{className:j.a.loader,type:"TailSpin",color:"#00BFFF",height:100,width:100,timeout:3e3}):"resolved"===o?Object(g.jsxs)("ul",{className:j.a.gallery,children:[a.map((function(t){return Object(g.jsx)(v,{id:t.id,webformatURL:t.webformatURL,largeImageURL:t.largeImageURL,toggleModal:e},t.id)})),Object(g.jsx)(k,{onClick:this.loadMore})]}):void 0}}]),a}(o.Component),M=a(11),L=a.n(M),C=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.toggleModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.toggleModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log("Modal componentDidMount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(g.jsx)("div",{className:L.a.overlay,onClick:this.handleBackdropClick,children:Object(g.jsx)("div",{className:L.a.modal,children:Object(g.jsx)("img",{src:e,alt:""})})})}}]),a}(o.Component),Q=a(16),U=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={showModal:!1,searchQuery:""},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal,largeImageURL:t}}))},e.handleFormSubmit=function(t){e.setState({searchQuery:t})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){console.log("App render");var e=this.state.showModal;return Object(g.jsxs)("div",{children:[Object(g.jsx)(m,{onSubmit:this.handleFormSubmit}),Object(g.jsx)(I,{galleryItems:Q,toggleModal:this.toggleModal,searchQuery:this.state.searchQuery}),e&&Object(g.jsx)(C,{toggleModal:this.toggleModal,largeImageURL:this.state.largeImageURL})]})}}]),a}(o.Component),A=U;c.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(A,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__H4LnD",form:"Searchbar_form__3sP3c",button:"Searchbar_button__1vJIy",buttonLabel:"Searchbar_buttonLabel__FaTAS",input:"Searchbar_input__3K2Hv"}},9:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__21uTr",loader:"ImageGallery_loader__1cTRn"}}},[[46,1,2]]]);
//# sourceMappingURL=main.9ed0409f.chunk.js.map