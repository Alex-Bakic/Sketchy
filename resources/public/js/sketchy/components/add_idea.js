// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.components.add_idea');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
sketchy.components.add_idea.new_idea = (function sketchy$components$add_idea$new_idea(){
var val = reagent.core.atom.call(null,"");
return ((function (val){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#new-idea","div#new-idea",-1132940668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter some ideas you have",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val){
return (function (p1__36245_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__36245_SHARP_.target.value);
});})(val))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (val){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-idea","add-idea",1077176467),cljs.core.deref.call(null,val)], null));
});})(val))
], null),"Add"], null)], null);
});
;})(val))
});

//# sourceMappingURL=add_idea.js.map?rel=1544651364336
