(this["webpackJsonpreact-homework-4-hooks-phonebook"]=this["webpackJsonpreact-homework-4-hooks-phonebook"]||[]).push([[0],{17:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=(n(17),n(12)),i=n(2),l=n(3),u=n.n(l),b=n(10),m=n.n(b),j=n(0),h=function(e){var t=e.getContact,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),b=l[0],h=l[1],_=m.a.generate(),d=m.a.generate(),f=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":h(a);break;default:return}},O=function(){o(""),h("")};return Object(j.jsxs)("form",{className:u.a.form,onSubmit:function(e){e.preventDefault(),t(r,b),o(""),h(""),O()},children:[Object(j.jsxs)("label",{className:u.a.form_label,htmlFor:_,children:["Name",Object(j.jsx)("input",{className:u.a.form_input,type:"text",name:"name",id:_,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:f})]}),Object(j.jsxs)("label",{className:u.a.form_label,htmlFor:d,children:["Phone",Object(j.jsx)("input",{className:u.a.form_input,type:"tel",name:"number",id:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:b,onChange:f})]}),Object(j.jsx)("button",{className:u.a.form_button,type:"submit",children:"Add Contact"})]})},_=n(7),d=n.n(_),f=function(e){var t=e.value,n=e.onChange;return Object(j.jsx)("div",{className:d.a.search,children:Object(j.jsx)("label",{className:d.a.search_label,children:Object(j.jsx)("input",{className:d.a.search_input,type:"text",value:t,onChange:n})})})},O=n(8),p=n.n(O),x=function(e){var t=e.contacts,n=e.deleteContact;return Object(j.jsx)("ul",{className:p.a.contact_list,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(j.jsxs)("li",{children:[Object(j.jsxs)("span",{className:p.a.name,children:[a,":"]}),Object(j.jsx)("span",{className:p.a.number,children:c}),Object(j.jsx)("button",{type:"button",name:"delete",onClick:function(){return n(t)},children:"Delete"})]},t)}))})},C=n(29),g=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)((function(){return JSON.parse(window.localStorage.getItem("contacts")||[])})),o=Object(i.a)(r,2),l=o[0],u=o[1],b=Object(a.useState)([]),m=Object(i.a)(b,2),_=m[0],d=m[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(l))}),[l]);return Object(j.jsxs)("div",{className:"main_content",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(h,{getContact:function(e,t){if(l.find((function(t){return t.name===e})))alert("".concat(e," is already in contacts"));else{var n={id:Object(C.a)(),name:e,number:t};u((function(e){return[].concat(Object(s.a)(e),[n])}))}}}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)("p",{children:"Find contacts by name"}),Object(j.jsx)(f,{value:n,onChange:function(e){c(e.target.value),d(l.filter((function(t){return t.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())})))}}),Object(j.jsx)(x,{deleteContact:function(e){u((function(t){return t.filter((function(t){return t.id!==e}))}))},contacts:_.length?_:l})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={form:"Form_form__IThxD",form_label:"Form_form_label__1ECtu",form_input:"Form_form_input__1RJza",form_button:"Form_form_button__3Lobx"}},7:function(e,t,n){e.exports={search:"Search_search__3Q-BZ",search_label:"Search_search_label__3eGqB",search_input:"Search_search_input__3-qVe"}},8:function(e,t,n){e.exports={contact_list:"ContactList_contact_list__CJczP",name:"ContactList_name__1ikjf",number:"ContactList_number__36A13"}}},[[27,1,2]]]);
//# sourceMappingURL=main.8de1b2af.chunk.js.map