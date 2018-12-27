// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.components.show_comments');
goog.require('cljs.core');
goog.require('sketchy.components.add_comments');
goog.require('re_frame.core');
sketchy.components.show_comments.show_comment = (function sketchy$components$show_comments$show_comment(id,comment){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),""].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-comment","remove-comment",1263433912),id,comment], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-minus"], null)], null)], null)], null);
});
sketchy.components.show_comments.show_all_comments = (function sketchy$components$show_comments$show_all_comments(id){
var comments = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",-293346423),id], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-body"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.components.add_comments.add_comment,id], null)], null),(function (){var iter__4434__auto__ = ((function (comments){
return (function sketchy$components$show_comments$show_all_comments_$_iter__28251(s__28252){
return (new cljs.core.LazySeq(null,((function (comments){
return (function (){
var s__28252__$1 = s__28252;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28252__$1);
if(temp__5720__auto__){
var s__28252__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28252__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__28252__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__28254 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__28253 = (0);
while(true){
if((i__28253 < size__4433__auto__)){
var comment = cljs.core._nth.call(null,c__4432__auto__,i__28253);
cljs.core.chunk_append.call(null,b__28254,sketchy.components.show_comments.show_comment.call(null,id,comment));

var G__28255 = (i__28253 + (1));
i__28253 = G__28255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28254),sketchy$components$show_comments$show_all_comments_$_iter__28251.call(null,cljs.core.chunk_rest.call(null,s__28252__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28254),null);
}
} else {
var comment = cljs.core.first.call(null,s__28252__$2);
return cljs.core.cons.call(null,sketchy.components.show_comments.show_comment.call(null,id,comment),sketchy$components$show_comments$show_all_comments_$_iter__28251.call(null,cljs.core.rest.call(null,s__28252__$2)));
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
})())], null);
});

//# sourceMappingURL=show_comments.js.map?rel=1545932600925
