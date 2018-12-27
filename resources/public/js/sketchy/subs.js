// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"last-id","last-id",-1231616450),(function (db,p__27903){
var vec__27904 = p__27903;
var _ = cljs.core.nth.call(null,vec__27904,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__27904,(1),null);
return cljs.core.last.call(null,cljs.core.keys.call(null,db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (db,p__27907){
var vec__27908 = p__27907;
var _ = cljs.core.nth.call(null,vec__27908,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__27908,(1),null);
return db;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"ideas","ideas",476314838),(function (query_v,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759)], null)),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-id","last-id",-1231616450)], null))], null);
}),(function (p__27911,_){
var vec__27912 = p__27911;
var db = cljs.core.nth.call(null,vec__27912,(0),null);
var last_id = cljs.core.nth.call(null,vec__27912,(1),null);
var iter__4434__auto__ = ((function (vec__27912,db,last_id){
return (function sketchy$subs$iter__27915(s__27916){
return (new cljs.core.LazySeq(null,((function (vec__27912,db,last_id){
return (function (){
var s__27916__$1 = s__27916;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27916__$1);
if(temp__5720__auto__){
var s__27916__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27916__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__27916__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__27918 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__27917 = (0);
while(true){
if((i__27917 < size__4433__auto__)){
var id = cljs.core._nth.call(null,c__4432__auto__,i__27917);
cljs.core.chunk_append.call(null,b__27918,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"idea","idea",-951312199)], null)));

var G__27919 = (i__27917 + (1));
i__27917 = G__27919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27918),sketchy$subs$iter__27915.call(null,cljs.core.chunk_rest.call(null,s__27916__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27918),null);
}
} else {
var id = cljs.core.first.call(null,s__27916__$2);
return cljs.core.cons.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"idea","idea",-951312199)], null)),sketchy$subs$iter__27915.call(null,cljs.core.rest.call(null,s__27916__$2)));
}
} else {
return null;
}
break;
}
});})(vec__27912,db,last_id))
,null,null));
});})(vec__27912,db,last_id))
;
return iter__4434__auto__.call(null,cljs.core.range.call(null,(0),(last_id + (1))));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423),(function (db,p__27920){
var vec__27921 = p__27920;
var _ = cljs.core.nth.call(null,vec__27921,(0),null);
var id = cljs.core.nth.call(null,vec__27921,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"comments","comments",-293346423)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"keywords","keywords",1526959054),(function (db,p__27924){
var vec__27925 = p__27924;
var _ = cljs.core.nth.call(null,vec__27925,(0),null);
var id = cljs.core.nth.call(null,vec__27925,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"keywords","keywords",1526959054)], null));
}));

//# sourceMappingURL=subs.js.map?rel=1545924986341
