// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('alandipert.storage_atom');
sketchy.core.app_state = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ideas","ideas",476314838),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.Keyword(null,"ideas","ideas",476314838));
sketchy.core.update_ideas_BANG_ = (function sketchy$core$update_ideas_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28063 = arguments.length;
var i__4642__auto___28064 = (0);
while(true){
if((i__4642__auto___28064 < len__4641__auto___28063)){
args__4647__auto__.push((arguments[i__4642__auto___28064]));

var G__28065 = (i__4642__auto___28064 + (1));
i__4642__auto___28064 = G__28065;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return sketchy.core.update_ideas_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

sketchy.core.update_ideas_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,sketchy.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ideas","ideas",476314838)], null),f,args);
});

sketchy.core.update_ideas_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sketchy.core.update_ideas_BANG_.cljs$lang$applyTo = (function (seq28061){
var G__28062 = cljs.core.first.call(null,seq28061);
var seq28061__$1 = cljs.core.next.call(null,seq28061);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28062,seq28061__$1);
});

sketchy.core.add_idea_BANG_ = (function sketchy$core$add_idea_BANG_(i){
return sketchy.core.update_ideas_BANG_.call(null,cljs.core.conj,i);
});
sketchy.core.remove_idea_BANG_ = (function sketchy$core$remove_idea_BANG_(i){
return sketchy.core.update_ideas_BANG_.call(null,(function (is){
return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__28066_SHARP_){
return cljs.core._EQ_.call(null,p1__28066_SHARP_,i);
}),is));
}),i);
});
sketchy.core.show_idea = (function sketchy$core$show_idea(i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),i], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"aria-label=","aria-label=",1436933985),"Left Align",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return sketchy.core.remove_idea_BANG_.call(null,i);
})], null),"Delete"], null)], null);
});
sketchy.core.new_idea = (function sketchy$core$new_idea(){
var val = reagent.core.atom.call(null,"");
return ((function (val){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#new-idea","div#new-idea",-1132940668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter some ideas you have",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val){
return (function (p1__28067_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__28067_SHARP_.target.value);
});})(val))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"aria-label=","aria-label=",1436933985),"Left-Align",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (val){
return (function (){
var temp__5457__auto__ = cljs.core.deref.call(null,val);
if(cljs.core.truth_(temp__5457__auto__)){
var i = temp__5457__auto__;
sketchy.core.add_idea_BANG_.call(null,i);

return cljs.core.reset_BANG_.call(null,val,"");
} else {
return null;
}
});})(val))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class=","class=",1799263312),"glyphicon glyphicon-plus",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null)], null)], null);
});
;})(val))
});
sketchy.core.ideas_list = (function sketchy$core$ideas_list(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ideas-list","div#ideas-list",-2125060092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"All of your ideas"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4434__auto__ = (function sketchy$core$ideas_list_$_iter__28068(s__28069){
return (new cljs.core.LazySeq(null,(function (){
var s__28069__$1 = s__28069;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28069__$1);
if(temp__5457__auto__){
var s__28069__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28069__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__28069__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__28071 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__28070 = (0);
while(true){
if((i__28070 < size__4433__auto__)){
var i = cljs.core._nth.call(null,c__4432__auto__,i__28070);
cljs.core.chunk_append.call(null,b__28071,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.core.show_idea,i], null));

var G__28072 = (i__28070 + (1));
i__28070 = G__28072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28071),sketchy$core$ideas_list_$_iter__28068.call(null,cljs.core.chunk_rest.call(null,s__28069__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28071),null);
}
} else {
var i = cljs.core.first.call(null,s__28069__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.core.show_idea,i], null),sketchy$core$ideas_list_$_iter__28068.call(null,cljs.core.rest.call(null,s__28069__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,new cljs.core.Keyword(null,"ideas","ideas",476314838).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sketchy.core.app_state)));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.core.new_idea], null)], null);
});
sketchy.core.start = (function sketchy$core$start(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.core.ideas_list], null),document.getElementById("root"));
});

//# sourceMappingURL=core.js.map?rel=1544022852681
