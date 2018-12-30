// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"last-id","last-id",-1231616450),(function (db,p__36310){
var vec__36311 = p__36310;
var _ = cljs.core.nth.call(null,vec__36311,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__36311,(1),null);
return cljs.core.last.call(null,cljs.core.keys.call(null,db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (db,p__36314){
var vec__36315 = p__36314;
var _ = cljs.core.nth.call(null,vec__36315,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__36315,(1),null);
return db;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"ideas","ideas",476314838),(function (query_v,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759)], null)),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-id","last-id",-1231616450)], null))], null);
}),(function (p__36318,_){
var vec__36319 = p__36318;
var db = cljs.core.nth.call(null,vec__36319,(0),null);
var last_id = cljs.core.nth.call(null,vec__36319,(1),null);
var iter__4434__auto__ = ((function (vec__36319,db,last_id){
return (function sketchy$subs$iter__36322(s__36323){
return (new cljs.core.LazySeq(null,((function (vec__36319,db,last_id){
return (function (){
var s__36323__$1 = s__36323;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36323__$1);
if(temp__5720__auto__){
var s__36323__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36323__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__36323__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__36325 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__36324 = (0);
while(true){
if((i__36324 < size__4433__auto__)){
var id = cljs.core._nth.call(null,c__4432__auto__,i__36324);
cljs.core.chunk_append.call(null,b__36325,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"idea","idea",-951312199)], null)));

var G__36326 = (i__36324 + (1));
i__36324 = G__36326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36325),sketchy$subs$iter__36322.call(null,cljs.core.chunk_rest.call(null,s__36323__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36325),null);
}
} else {
var id = cljs.core.first.call(null,s__36323__$2);
return cljs.core.cons.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"idea","idea",-951312199)], null)),sketchy$subs$iter__36322.call(null,cljs.core.rest.call(null,s__36323__$2)));
}
} else {
return null;
}
break;
}
});})(vec__36319,db,last_id))
,null,null));
});})(vec__36319,db,last_id))
;
return iter__4434__auto__.call(null,cljs.core.range.call(null,(0),(last_id + (1))));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423),(function (db,p__36327){
var vec__36328 = p__36327;
var _ = cljs.core.nth.call(null,vec__36328,(0),null);
var id = cljs.core.nth.call(null,vec__36328,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"comments","comments",-293346423)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"keywords","keywords",1526959054),(function (db,p__36331){
var vec__36332 = p__36331;
var _ = cljs.core.nth.call(null,vec__36332,(0),null);
var id = cljs.core.nth.call(null,vec__36332,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"keywords","keywords",1526959054)], null));
}));

//# sourceMappingURL=subs.js.map?rel=1546166618249
