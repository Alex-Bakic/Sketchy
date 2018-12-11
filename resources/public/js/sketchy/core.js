// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialise","initialise",1962682894),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ideas","ideas",476314838),cljs.core.PersistentVector.EMPTY], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-idea","add-idea",1077176467),(function (db,p__28037){
var vec__28038 = p__28037;
var _ = cljs.core.nth.call(null,vec__28038,(0),null);
var idea = cljs.core.nth.call(null,vec__28038,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ideas","ideas",476314838)], null),cljs.core.conj,idea);
}));
sketchy.core.remove_idea = (function sketchy$core$remove_idea(is,i){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,(function (p1__28041_SHARP_){
return cljs.core._EQ_.call(null,p1__28041_SHARP_,i);
})),is);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-idea","remove-idea",441629595),(function (db,p__28042){
var vec__28043 = p__28042;
var _ = cljs.core.nth.call(null,vec__28043,(0),null);
var idea = cljs.core.nth.call(null,vec__28043,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ideas","ideas",476314838)], null),sketchy.core.remove_idea,idea);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"ideas","ideas",476314838),(function (db,_){
return new cljs.core.Keyword(null,"ideas","ideas",476314838).cljs$core$IFn$_invoke$arity$1(db);
}));
sketchy.core.new_idea = (function sketchy$core$new_idea(){
var val = reagent.core.atom.call(null,"");
return ((function (val){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#new-idea","div#new-idea",-1132940668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter some ideas you have",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val){
return (function (p1__28046_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__28046_SHARP_.target.value);
});})(val))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (val){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-idea","add-idea",1077176467),cljs.core.deref.call(null,val)], null));
});})(val))
], null),"Add"], null)], null);
});
;})(val))
});
sketchy.core.show_idea = (function sketchy$core$show_idea(i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),i], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-idea","remove-idea",441629595),i], null));
})], null),"Delete"], null)], null);
});
sketchy.core.ui = (function sketchy$core$ui(db){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ideas-list","div#ideas-list",-2125060092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"All of your ideas"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.core.new_idea], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4434__auto__ = (function sketchy$core$ui_$_iter__28047(s__28048){
return (new cljs.core.LazySeq(null,(function (){
var s__28048__$1 = s__28048;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28048__$1);
if(temp__5457__auto__){
var s__28048__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28048__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__28048__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__28050 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__28049 = (0);
while(true){
if((i__28049 < size__4433__auto__)){
var i = cljs.core._nth.call(null,c__4432__auto__,i__28049);
cljs.core.chunk_append.call(null,b__28050,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.core.show_idea,i], null));

var G__28051 = (i__28049 + (1));
i__28049 = G__28051;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28050),sketchy$core$ui_$_iter__28047.call(null,cljs.core.chunk_rest.call(null,s__28048__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28050),null);
}
} else {
var i = cljs.core.first.call(null,s__28048__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.core.show_idea,i], null),sketchy$core$ui_$_iter__28047.call(null,cljs.core.rest.call(null,s__28048__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,cljs.core.deref.call(null,db));
})()], null)], null);
});
sketchy.core.start = (function sketchy$core$start(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise","initialise",1962682894)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.core.ui,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ideas","ideas",476314838)], null))], null),document.getElementById("root"));
});
goog.exportSymbol('sketchy.core.start', sketchy.core.start);

//# sourceMappingURL=core.js.map?rel=1544539747291
