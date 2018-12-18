// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.components.show_comments');
goog.require('cljs.core');
goog.require('re_frame.core');
sketchy.components.show_comments.show_comment = (function sketchy$components$show_comments$show_comment(c){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-idea","remove-idea",441629595),c], null));
})], null),"Delete"], null)], null);
});
sketchy.components.show_comments.show_all_comments = (function sketchy$components$show_comments$show_all_comments(){
var db = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",-293346423)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#comments-list","div#comments-list",1252664678)], null),(function (){var iter__4434__auto__ = ((function (db){
return (function sketchy$components$show_comments$show_all_comments_$_iter__22437(s__22438){
return (new cljs.core.LazySeq(null,((function (db){
return (function (){
var s__22438__$1 = s__22438;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22438__$1);
if(temp__5457__auto__){
var s__22438__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22438__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__22438__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__22440 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__22439 = (0);
while(true){
if((i__22439 < size__4433__auto__)){
var c = cljs.core._nth.call(null,c__4432__auto__,i__22439);
cljs.core.chunk_append.call(null,b__22440,sketchy.components.show_comments.show_comment.call(null,c));

var G__22441 = (i__22439 + (1));
i__22439 = G__22441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22440),sketchy$components$show_comments$show_all_comments_$_iter__22437.call(null,cljs.core.chunk_rest.call(null,s__22438__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22440),null);
}
} else {
var c = cljs.core.first.call(null,s__22438__$2);
return cljs.core.cons.call(null,sketchy.components.show_comments.show_comment.call(null,c),sketchy$components$show_comments$show_all_comments_$_iter__22437.call(null,cljs.core.rest.call(null,s__22438__$2)));
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

//# sourceMappingURL=show_comments.js.map?rel=1545059109660
