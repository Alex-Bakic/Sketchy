// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"ideas","ideas",476314838),(function (db,_){
return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"idea","idea",-951312199),db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423),(function (db,p__22454){
var vec__22455 = p__22454;
var _ = cljs.core.nth.call(null,vec__22455,(0),null);
var idea = cljs.core.nth.call(null,vec__22455,(1),null);
return cljs.core.first.call(null,(function (){var iter__4434__auto__ = ((function (vec__22455,_,idea){
return (function sketchy$subs$iter__22458(s__22459){
return (new cljs.core.LazySeq(null,((function (vec__22455,_,idea){
return (function (){
var s__22459__$1 = s__22459;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22459__$1);
if(temp__5457__auto__){
var s__22459__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22459__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__22459__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__22461 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__22460 = (0);
while(true){
if((i__22460 < size__4433__auto__)){
var m = cljs.core._nth.call(null,c__4432__auto__,i__22460);
var i = new cljs.core.Keyword(null,"idea","idea",-951312199).cljs$core$IFn$_invoke$arity$1(m);
var c = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core._EQ_.call(null,i,idea)){
cljs.core.chunk_append.call(null,b__22461,c);

var G__22462 = (i__22460 + (1));
i__22460 = G__22462;
continue;
} else {
var G__22463 = (i__22460 + (1));
i__22460 = G__22463;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22461),sketchy$subs$iter__22458.call(null,cljs.core.chunk_rest.call(null,s__22459__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22461),null);
}
} else {
var m = cljs.core.first.call(null,s__22459__$2);
var i = new cljs.core.Keyword(null,"idea","idea",-951312199).cljs$core$IFn$_invoke$arity$1(m);
var c = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core._EQ_.call(null,i,idea)){
return cljs.core.cons.call(null,c,sketchy$subs$iter__22458.call(null,cljs.core.rest.call(null,s__22459__$2)));
} else {
var G__22464 = cljs.core.rest.call(null,s__22459__$2);
s__22459__$1 = G__22464;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__22455,_,idea))
,null,null));
});})(vec__22455,_,idea))
;
return iter__4434__auto__.call(null,db);
})());
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"keywords","keywords",1526959054),(function (db,p__22465){
var vec__22466 = p__22465;
var _ = cljs.core.nth.call(null,vec__22466,(0),null);
var idea = cljs.core.nth.call(null,vec__22466,(1),null);
return cljs.core.first.call(null,(function (){var iter__4434__auto__ = ((function (vec__22466,_,idea){
return (function sketchy$subs$iter__22469(s__22470){
return (new cljs.core.LazySeq(null,((function (vec__22466,_,idea){
return (function (){
var s__22470__$1 = s__22470;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22470__$1);
if(temp__5457__auto__){
var s__22470__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22470__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__22470__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__22472 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__22471 = (0);
while(true){
if((i__22471 < size__4433__auto__)){
var m = cljs.core._nth.call(null,c__4432__auto__,i__22471);
var i = new cljs.core.Keyword(null,"idea","idea",-951312199).cljs$core$IFn$_invoke$arity$1(m);
var k = new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core._EQ_.call(null,i,idea)){
cljs.core.chunk_append.call(null,b__22472,k);

var G__22473 = (i__22471 + (1));
i__22471 = G__22473;
continue;
} else {
var G__22474 = (i__22471 + (1));
i__22471 = G__22474;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22472),sketchy$subs$iter__22469.call(null,cljs.core.chunk_rest.call(null,s__22470__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22472),null);
}
} else {
var m = cljs.core.first.call(null,s__22470__$2);
var i = new cljs.core.Keyword(null,"idea","idea",-951312199).cljs$core$IFn$_invoke$arity$1(m);
var k = new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core._EQ_.call(null,i,idea)){
return cljs.core.cons.call(null,k,sketchy$subs$iter__22469.call(null,cljs.core.rest.call(null,s__22470__$2)));
} else {
var G__22475 = cljs.core.rest.call(null,s__22470__$2);
s__22470__$1 = G__22475;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__22466,_,idea))
,null,null));
});})(vec__22466,_,idea))
;
return iter__4434__auto__.call(null,db);
})());
}));

//# sourceMappingURL=subs.js.map?rel=1545212918534
