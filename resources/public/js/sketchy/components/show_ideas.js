// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.components.show_ideas');
goog.require('cljs.core');
goog.require('re_frame.core');
sketchy.components.show_ideas.show_comments = (function sketchy$components$show_ideas$show_comments(i){
var comments = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",-293346423),i], null));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-text"], null)], null),(function (){var iter__4434__auto__ = ((function (comments){
return (function sketchy$components$show_ideas$show_comments_$_iter__28333(s__28334){
return (new cljs.core.LazySeq(null,((function (comments){
return (function (){
var s__28334__$1 = s__28334;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28334__$1);
if(temp__5457__auto__){
var s__28334__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28334__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__28334__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__28336 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__28335 = (0);
while(true){
if((i__28335 < size__4433__auto__)){
var c = cljs.core._nth.call(null,c__4432__auto__,i__28335);
cljs.core.chunk_append.call(null,b__28336,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28335,c,c__4432__auto__,size__4433__auto__,b__28336,s__28334__$2,temp__5457__auto__,comments){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-comment","remove-comment",1263433912),c], null));
});})(i__28335,c,c__4432__auto__,size__4433__auto__,b__28336,s__28334__$2,temp__5457__auto__,comments))
], null),"x"], null)], null));

var G__28337 = (i__28335 + (1));
i__28335 = G__28337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28336),sketchy$components$show_ideas$show_comments_$_iter__28333.call(null,cljs.core.chunk_rest.call(null,s__28334__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28336),null);
}
} else {
var c = cljs.core.first.call(null,s__28334__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,s__28334__$2,temp__5457__auto__,comments){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-comment","remove-comment",1263433912),c], null));
});})(c,s__28334__$2,temp__5457__auto__,comments))
], null),"x"], null)], null),sketchy$components$show_ideas$show_comments_$_iter__28333.call(null,cljs.core.rest.call(null,s__28334__$2)));
}
} else {
return null;
}
break;
}
});})(comments))
,null,null));
});})(comments))
;
return iter__4434__auto__.call(null,cljs.core.deref.call(null,comments));
})());
});
sketchy.components.show_ideas.show_keywords = (function sketchy$components$show_ideas$show_keywords(i){
var kws = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keywords","keywords",1526959054),i], null));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-subtitle mb-2 text-muted"], null)], null),(function (){var iter__4434__auto__ = ((function (kws){
return (function sketchy$components$show_ideas$show_keywords_$_iter__28338(s__28339){
return (new cljs.core.LazySeq(null,((function (kws){
return (function (){
var s__28339__$1 = s__28339;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28339__$1);
if(temp__5457__auto__){
var s__28339__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28339__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__28339__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__28341 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__28340 = (0);
while(true){
if((i__28340 < size__4433__auto__)){
var k = cljs.core._nth.call(null,c__4432__auto__,i__28340);
cljs.core.chunk_append.call(null,b__28341,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),k], null));

var G__28342 = (i__28340 + (1));
i__28340 = G__28342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28341),sketchy$components$show_ideas$show_keywords_$_iter__28338.call(null,cljs.core.chunk_rest.call(null,s__28339__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28341),null);
}
} else {
var k = cljs.core.first.call(null,s__28339__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),k], null),sketchy$components$show_ideas$show_keywords_$_iter__28338.call(null,cljs.core.rest.call(null,s__28339__$2)));
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
sketchy.components.show_ideas.show_all_ideas = (function sketchy$components$show_ideas$show_all_ideas(){
var db = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ideas","ideas",476314838)], null));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)], null),(function (){var iter__4434__auto__ = ((function (db){
return (function sketchy$components$show_ideas$show_all_ideas_$_iter__28343(s__28344){
return (new cljs.core.LazySeq(null,((function (db){
return (function (){
var s__28344__$1 = s__28344;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28344__$1);
if(temp__5457__auto__){
var s__28344__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28344__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__28344__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__28346 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__28345 = (0);
while(true){
if((i__28345 < size__4433__auto__)){
var i = cljs.core._nth.call(null,c__4432__auto__,i__28345);
cljs.core.chunk_append.call(null,b__28346,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-body"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-title"], null),i], null),sketchy.components.show_ideas.show_comments.call(null,i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28345,i,c__4432__auto__,size__4433__auto__,b__28346,s__28344__$2,temp__5457__auto__,db){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-idea","remove-idea",441629595),i], null));
});})(i__28345,i,c__4432__auto__,size__4433__auto__,b__28346,s__28344__$2,temp__5457__auto__,db))
], null),"x"], null)], null)], null)], null));

var G__28347 = (i__28345 + (1));
i__28345 = G__28347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28346),sketchy$components$show_ideas$show_all_ideas_$_iter__28343.call(null,cljs.core.chunk_rest.call(null,s__28344__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28346),null);
}
} else {
var i = cljs.core.first.call(null,s__28344__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-body"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-title"], null),i], null),sketchy.components.show_ideas.show_comments.call(null,i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i,s__28344__$2,temp__5457__auto__,db){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-idea","remove-idea",441629595),i], null));
});})(i,s__28344__$2,temp__5457__auto__,db))
], null),"x"], null)], null)], null)], null),sketchy$components$show_ideas$show_all_ideas_$_iter__28343.call(null,cljs.core.rest.call(null,s__28344__$2)));
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
})());
});

//# sourceMappingURL=show_ideas.js.map?rel=1545231310662
