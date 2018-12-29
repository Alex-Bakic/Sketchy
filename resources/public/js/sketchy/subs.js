// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"last-id","last-id",-1231616450),(function (db,p__23801){
var vec__23802 = p__23801;
var _ = cljs.core.nth.call(null,vec__23802,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23802,(1),null);
return cljs.core.last.call(null,cljs.core.keys.call(null,db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (db,p__23805){
var vec__23806 = p__23805;
var _ = cljs.core.nth.call(null,vec__23806,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23806,(1),null);
return db;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"ideas","ideas",476314838),(function (query_v,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759)], null)),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-id","last-id",-1231616450)], null))], null);
}),(function (p__23809,_){
var vec__23810 = p__23809;
var db = cljs.core.nth.call(null,vec__23810,(0),null);
var last_id = cljs.core.nth.call(null,vec__23810,(1),null);
var iter__4434__auto__ = ((function (vec__23810,db,last_id){
return (function sketchy$subs$iter__23813(s__23814){
return (new cljs.core.LazySeq(null,((function (vec__23810,db,last_id){
return (function (){
var s__23814__$1 = s__23814;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__23814__$1);
if(temp__5720__auto__){
var s__23814__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23814__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__23814__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__23816 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__23815 = (0);
while(true){
if((i__23815 < size__4433__auto__)){
var id = cljs.core._nth.call(null,c__4432__auto__,i__23815);
cljs.core.chunk_append.call(null,b__23816,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"idea","idea",-951312199)], null)));

var G__23817 = (i__23815 + (1));
i__23815 = G__23817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23816),sketchy$subs$iter__23813.call(null,cljs.core.chunk_rest.call(null,s__23814__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23816),null);
}
} else {
var id = cljs.core.first.call(null,s__23814__$2);
return cljs.core.cons.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"idea","idea",-951312199)], null)),sketchy$subs$iter__23813.call(null,cljs.core.rest.call(null,s__23814__$2)));
}
} else {
return null;
}
break;
}
});})(vec__23810,db,last_id))
,null,null));
});})(vec__23810,db,last_id))
;
return iter__4434__auto__.call(null,cljs.core.range.call(null,(0),(last_id + (1))));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423),(function (db,p__23818){
var vec__23819 = p__23818;
var _ = cljs.core.nth.call(null,vec__23819,(0),null);
var id = cljs.core.nth.call(null,vec__23819,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"comments","comments",-293346423)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"keywords","keywords",1526959054),(function (db,p__23822){
var vec__23823 = p__23822;
var _ = cljs.core.nth.call(null,vec__23823,(0),null);
var id = cljs.core.nth.call(null,vec__23823,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"keywords","keywords",1526959054)], null));
}));

//# sourceMappingURL=subs.js.map?rel=1546104241201
