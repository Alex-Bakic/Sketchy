// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.components.add_comments');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
sketchy.components.add_comments.add_comment = (function sketchy$components$add_comments$add_comment(id){
var val = reagent.core.atom.call(null,"");
var clear = ((function (val){
return (function (){
return cljs.core.reset_BANG_.call(null,val,"");
});})(val))
;
var save = ((function (val,clear){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-comment","add-comment",-1169367708),id,cljs.core.deref.call(null,val)], null),clear.call(null));
});})(val,clear))
;
return ((function (val,clear,save){
return (function (id__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item active"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group input-group-sm mb-3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Add a comment",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,clear,save){
return (function (p1__23778_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__23778_SHARP_.target.value);
});})(val,clear,save))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,clear,save){
return (function (p1__23779_SHARP_){
var G__23780 = p1__23779_SHARP_.which;
switch (G__23780) {
case (13):
return save.call(null);

break;
default:
return null;

}
});})(val,clear,save))
], null)], null)], null)], null);
});
;})(val,clear,save))
});

//# sourceMappingURL=add_comments.js.map?rel=1546104241100
