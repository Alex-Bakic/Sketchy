// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.components.show_keywords');
goog.require('cljs.core');
goog.require('re_frame.core');
sketchy.components.show_keywords.show_keyword = (function sketchy$components$show_keywords$show_keyword(id,kw){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-info kw-btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-keyword","remove-keyword",-1152099743),id,kw], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw)], null)], null)], null);
});
sketchy.components.show_keywords.show_all_keywords = (function sketchy$components$show_keywords$show_all_keywords(id){
var kws = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keywords","keywords",1526959054),id], null));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-subtitle"], null)], null),(function (){var iter__4434__auto__ = ((function (kws){
return (function sketchy$components$show_keywords$show_all_keywords_$_iter__23312(s__23313){
return (new cljs.core.LazySeq(null,((function (kws){
return (function (){
var s__23313__$1 = s__23313;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__23313__$1);
if(temp__5720__auto__){
var s__23313__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23313__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__23313__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__23315 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__23314 = (0);
while(true){
if((i__23314 < size__4433__auto__)){
var kw = cljs.core._nth.call(null,c__4432__auto__,i__23314);
cljs.core.chunk_append.call(null,b__23315,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.components.show_keywords.show_keyword,id,kw], null));

var G__23316 = (i__23314 + (1));
i__23314 = G__23316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23315),sketchy$components$show_keywords$show_all_keywords_$_iter__23312.call(null,cljs.core.chunk_rest.call(null,s__23313__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23315),null);
}
} else {
var kw = cljs.core.first.call(null,s__23313__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.components.show_keywords.show_keyword,id,kw], null),sketchy$components$show_keywords$show_all_keywords_$_iter__23312.call(null,cljs.core.rest.call(null,s__23313__$2)));
}
} else {
return null;
}
break;
}
});})(kws))
,null,null));
});})(kws))
;
return iter__4434__auto__.call(null,cljs.core.deref.call(null,kws));
})());
});

//# sourceMappingURL=show_keywords.js.map?rel=1546104239060
