(this["webpackJsonpown-app-training-01"]=this["webpackJsonpown-app-training-01"]||[]).push([[0],{221:function(e,a,n){"use strict";n.r(a);var r=n(0),t=n.n(r),c=n(24),s=n.n(c),l=n(11),o=n(10),i=n(21),j=n(20),d=n(45),u=n(46),b=n(2),h=n(35),O=n(1),m=function(e){var a=e.username,n=e.age,r=e.color,t=e.index;return Object(O.jsxs)(j.a,{className:"m-1",children:[Object(O.jsx)(i.a,{sm:"auto",children:Object(O.jsx)(h.a,{style:{color:r},children:Object(O.jsx)(h.a.Body,{children:Object(O.jsx)(h.a.Text,{children:t})})})}),Object(O.jsx)(i.a,{sm:"6",children:Object(O.jsx)(h.a,{style:{color:r},children:Object(O.jsx)(h.a.Body,{children:Object(O.jsxs)(h.a.Text,{children:[a," (  ",n," ",n>1?"years":"year"," old) "]})})})})]})},x=Object(r.memo)((function(e){var a=e.users;return void 0===a||0===a.length?"":a.map((function(e,a){return Object(O.jsx)(m,Object(b.a)(Object(b.a)({},e),{},{index:a}),e.key)}))})),g=n(66),p=n(80),v=n(47),f=function(e){var a=e.id,n=e.labelValue,r=e.placeHolder,t=e.onChangeHandler,c=e.onBlur,s=e.value,l=e.errorMessage,o=e.type;return Object(O.jsx)(j.a,{children:Object(O.jsxs)(v.a.Group,{className:"mb-3",controlId:"controller-".concat(a),children:[Object(O.jsx)(v.a.Label,{children:n}),Object(O.jsx)(v.a.Control,{type:o,name:a,placeholder:r,onBlur:c,onChange:t,value:s,isInvalid:l,isValid:!l}),Object(O.jsx)(v.a.Control.Feedback,{type:"invalid",children:l})]})})},y=n(110),C=function(e){var a=e.buttonDirection,n=e.isDisabled,r=e.buttonGap,t=e.submitButtonValue,c=e.resetButtonValue,s=e.onResethandler,l=a||"horizontal",o=r||2;return Object(O.jsx)(j.a,{children:Object(O.jsx)(i.a,{children:Object(O.jsxs)(y.a,{direction:l,gap:o,children:[Object(O.jsx)(d.a,{varient:"primary",type:"submit",disabled:n,children:t}),Object(O.jsx)(d.a,{varient:"primary",type:"button",onClick:s,children:c})]})})})},F=n(62),H=function(e){var a=e.onCloseFormHandler;return Object(O.jsx)(j.a,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(F.a,{onClick:a,className:"float-sm-end"})})})},B=function(e){var a=e.handleSubmit,n=e.handleChange,r=e.handleBlur,t=e.handleReset,c=e.dirty,s=e.values,l=e.touched,o=e.errors,i=e.onCloseFormHandler,j=!(c&&!o.username&&!o.age);return Object(O.jsx)("div",{children:Object(O.jsxs)(p.a,{noValidate:!0,onSubmit:a,children:[Object(O.jsx)(H,{onCloseFormHandler:i}),Object(O.jsx)(f,{id:"username",type:"text",labelValue:"Username",placeHolder:"Enter your username",onChangeHandler:n,onBlur:r,touched:l.username,errorMessage:o.username,value:s.username}),Object(O.jsx)(f,{id:"age",type:"number",labelValue:"Age",placeHolder:"Enter your age in years",onChangeHandler:n,onBlur:r,touched:l.age,errorMessage:o.age,value:s.age}),Object(O.jsx)(C,{resetButtonValue:"Reset Form",submitButtonValue:"Add User",isDisabled:j,onResethandler:t})]})})},k=function(e){var a=e.onSubmitHandler,n=e.onCloseFormHandler,r=g.b({username:g.c().min(5,"Must be >= to 5 characters").max(50,"Must be 50 characters or less").required("Required"),age:g.a().min(1,"Age has to be greater than 0").required("Required")});return Object(O.jsx)(p.b,{initialValues:{username:"",age:""},validationSchema:r,onSubmit:function(e,n){var r=n.resetForm;a(e,r)},initialErrors:{username:"Required",age:"Required"},validateOnMount:!0,children:function(e){return Object(O.jsx)(B,Object(b.a)(Object(b.a)({},e),{},{onCloseFormHandler:n}))}})},S=n(224),V=n(225),M=function(){return Object(O.jsx)(S.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(S.a.Brand,{href:"#home",children:"The Page"}),Object(O.jsx)(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(S.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsx)(V.a,{className:"me-auto",children:Object(O.jsx)(V.a.Link,{href:"#home",children:"Home"})})})]})})};var R=function(){var e=Object(r.useState)([]),a=Object(o.a)(e,2),n=a[0],t=a[1],c=Object(r.useState)(!1),s=Object(o.a)(c,2),b=s[0],h=s[1],m=function(){h((function(e){return!e}))};return Object(O.jsxs)(r.Fragment,{children:[Object(O.jsx)(M,{}),Object(O.jsxs)(u.a,{className:"p-5 bg-dark",variant:"dark",fluid:"true",children:[Object(O.jsxs)(u.a,{className:"p-3 bg-light border rounded",children:[!b&&Object(O.jsx)(d.a,{varient:"primary",type:"button",onClick:m,children:"Open User Form"}),b&&Object(O.jsx)(j.a,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(k,{onSubmitHandler:function(e,a){var n=e.username,r=e.age;t((function(e){var a=Object(l.a)(e);return a.unshift({key:Date.now(),username:n,age:r,color:"#".concat(Math.floor(16777215*Math.random()).toString(16))}),a})),m(),a()},onCloseFormHandler:m})})})]}),Object(O.jsx)(u.a,{children:Object(O.jsx)(j.a,{children:Object(O.jsx)("br",{})})}),n.length>0&&Object(O.jsx)(u.a,{className:"p-3 bg-light border",lg:"auto",children:Object(O.jsx)(x,{users:n})})]})]})},N=(n(220),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,226)).then((function(a){var n=a.getCLS,r=a.getFID,t=a.getFCP,c=a.getLCP,s=a.getTTFB;n(e),r(e),t(e),c(e),s(e)}))});s.a.render(Object(O.jsx)(t.a.StrictMode,{children:Object(O.jsx)(R,{})}),document.getElementById("root")),N()}},[[221,1,2]]]);
//# sourceMappingURL=main.6b97871c.chunk.js.map