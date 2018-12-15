// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.components.show_ideas');
goog.require('cljs.core');
goog.require('re_frame.core');
sketchy.components.show_ideas.show_idea = (function sketchy$components$show_ideas$show_idea(i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),i], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-idea","remove-idea",441629595),i], null));
})], null),"Delete"], null)], null);
});
sketchy.components.show_ideas.show_all_ideas = (function sketchy$components$show_ideas$show_all_ideas(){
var db = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ideas","ideas",476314838)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ideas-list","div#ideas-list",-2125060092)], null),(function (){var iter__4434__auto__ = ((function (db){
return (function sketchy$components$show_ideas$show_all_ideas_$_iter__28003(s__28004){
return (new cljs.core.LazySeq(null,((function (db){
return (function (){
var s__28004__$1 = s__28004;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28004__$1);
if(temp__5457__auto__){
var s__28004__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28004__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__28004__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__28006 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__28005 = (0);
while(true){
if((i__28005 < size__4433__auto__)){
var i = cljs.core._nth.call(null,c__4432__auto__,i__28005);
cljs.core.chunk_append.call(null,b__28006,sketchy.components.show_ideas.show_idea.call(null,i));

var G__28007 = (i__28005 + (1));
i__28005 = G__28007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28006),sketchy$components$show_ideas$show_all_ideas_$_iter__28003.call(null,cljs.core.chunk_rest.call(null,s__28004__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28006),null);
}
} else {
var i = cljs.core.first.call(null,s__28004__$2);
return cljs.core.cons.call(null,sketchy.components.show_ideas.show_idea.call(null,i),sketchy$components$show_ideas$show_all_ideas_$_iter__28003.call(null,cljs.core.rest.call(null,s__28004__$2)));
}
} else {
return null;
}
break;
}
});})(db))
,null,null));
});})(db))
;
return iter__4434__auto__.call(null,cljs.core.deref.call(null,db));
})())], null);
});

//# sourceMappingURL=show_ideas.js.map?rel=1544803882376
