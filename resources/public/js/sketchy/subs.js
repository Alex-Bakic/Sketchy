// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"ideas","ideas",476314838),(function (db,_){
return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"idea","idea",-951312199),db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423),(function (db,p__1992){
var vec__1993 = p__1992;
var _ = cljs.core.nth.call(null,vec__1993,(0),null);
var idea = cljs.core.nth.call(null,vec__1993,(1),null);
return cljs.core.first.call(null,(function (){var iter__4434__auto__ = ((function (vec__1993,_,idea){
return (function sketchy$subs$iter__1996(s__1997){
return (new cljs.core.LazySeq(null,((function (vec__1993,_,idea){
return (function (){
var s__1997__$1 = s__1997;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__1997__$1);
if(temp__5457__auto__){
var s__1997__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1997__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__1997__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__1999 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__1998 = (0);
while(true){
if((i__1998 < size__4433__auto__)){
var m = cljs.core._nth.call(null,c__4432__auto__,i__1998);
var i = new cljs.core.Keyword(null,"idea","idea",-951312199).cljs$core$IFn$_invoke$arity$1(m);
var c = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core._EQ_.call(null,i,idea)){
cljs.core.chunk_append.call(null,b__1999,c);

var G__2000 = (i__1998 + (1));
i__1998 = G__2000;
continue;
} else {
var G__2001 = (i__1998 + (1));
i__1998 = G__2001;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1999),sketchy$subs$iter__1996.call(null,cljs.core.chunk_rest.call(null,s__1997__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1999),null);
}
} else {
var m = cljs.core.first.call(null,s__1997__$2);
var i = new cljs.core.Keyword(null,"idea","idea",-951312199).cljs$core$IFn$_invoke$arity$1(m);
var c = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core._EQ_.call(null,i,idea)){
return cljs.core.cons.call(null,c,sketchy$subs$iter__1996.call(null,cljs.core.rest.call(null,s__1997__$2)));
} else {
var G__2002 = cljs.core.rest.call(null,s__1997__$2);
s__1997__$1 = G__2002;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__1993,_,idea))
,null,null));
});})(vec__1993,_,idea))
;
return iter__4434__auto__.call(null,db);
})());
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"keywords","keywords",1526959054),(function (db,p__2003){
var vec__2004 = p__2003;
var _ = cljs.core.nth.call(null,vec__2004,(0),null);
var idea = cljs.core.nth.call(null,vec__2004,(1),null);
return cljs.core.first.call(null,(function (){var iter__4434__auto__ = ((function (vec__2004,_,idea){
return (function sketchy$subs$iter__2007(s__2008){
return (new cljs.core.LazySeq(null,((function (vec__2004,_,idea){
return (function (){
var s__2008__$1 = s__2008;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2008__$1);
if(temp__5457__auto__){
var s__2008__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2008__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__2008__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__2010 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__2009 = (0);
while(true){
if((i__2009 < size__4433__auto__)){
var m = cljs.core._nth.call(null,c__4432__auto__,i__2009);
var i = new cljs.core.Keyword(null,"idea","idea",-951312199).cljs$core$IFn$_invoke$arity$1(m);
var k = new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core._EQ_.call(null,i,idea)){
cljs.core.chunk_append.call(null,b__2010,k);

var G__2011 = (i__2009 + (1));
i__2009 = G__2011;
continue;
} else {
var G__2012 = (i__2009 + (1));
i__2009 = G__2012;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2010),sketchy$subs$iter__2007.call(null,cljs.core.chunk_rest.call(null,s__2008__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2010),null);
}
} else {
var m = cljs.core.first.call(null,s__2008__$2);
var i = new cljs.core.Keyword(null,"idea","idea",-951312199).cljs$core$IFn$_invoke$arity$1(m);
var k = new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core._EQ_.call(null,i,idea)){
return cljs.core.cons.call(null,k,sketchy$subs$iter__2007.call(null,cljs.core.rest.call(null,s__2008__$2)));
} else {
var G__2013 = cljs.core.rest.call(null,s__2008__$2);
s__2008__$1 = G__2013;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__2004,_,idea))
,null,null));
});})(vec__2004,_,idea))
;
return iter__4434__auto__.call(null,db);
})());
}));

//# sourceMappingURL=subs.js.map?rel=1545151556712
