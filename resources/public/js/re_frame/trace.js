// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22847){
var map__22848 = p__22847;
var map__22848__$1 = (((((!((map__22848 == null))))?(((((map__22848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22848):map__22848);
var operation = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4047__auto__ = child_of;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__22850_22862 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__22851_22863 = null;
var count__22852_22864 = (0);
var i__22853_22865 = (0);
while(true){
if((i__22853_22865 < count__22852_22864)){
var vec__22854_22866 = cljs.core._nth.call(null,chunk__22851_22863,i__22853_22865);
var k_22867 = cljs.core.nth.call(null,vec__22854_22866,(0),null);
var cb_22868 = cljs.core.nth.call(null,vec__22854_22866,(1),null);
try{cb_22868.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e22857){var e_22869 = e22857;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_22867,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_22869);
}

var G__22870 = seq__22850_22862;
var G__22871 = chunk__22851_22863;
var G__22872 = count__22852_22864;
var G__22873 = (i__22853_22865 + (1));
seq__22850_22862 = G__22870;
chunk__22851_22863 = G__22871;
count__22852_22864 = G__22872;
i__22853_22865 = G__22873;
continue;
} else {
var temp__5457__auto___22874 = cljs.core.seq.call(null,seq__22850_22862);
if(temp__5457__auto___22874){
var seq__22850_22875__$1 = temp__5457__auto___22874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22850_22875__$1)){
var c__4461__auto___22876 = cljs.core.chunk_first.call(null,seq__22850_22875__$1);
var G__22877 = cljs.core.chunk_rest.call(null,seq__22850_22875__$1);
var G__22878 = c__4461__auto___22876;
var G__22879 = cljs.core.count.call(null,c__4461__auto___22876);
var G__22880 = (0);
seq__22850_22862 = G__22877;
chunk__22851_22863 = G__22878;
count__22852_22864 = G__22879;
i__22853_22865 = G__22880;
continue;
} else {
var vec__22858_22881 = cljs.core.first.call(null,seq__22850_22875__$1);
var k_22882 = cljs.core.nth.call(null,vec__22858_22881,(0),null);
var cb_22883 = cljs.core.nth.call(null,vec__22858_22881,(1),null);
try{cb_22883.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e22861){var e_22884 = e22861;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_22882,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_22884);
}

var G__22885 = cljs.core.next.call(null,seq__22850_22875__$1);
var G__22886 = null;
var G__22887 = (0);
var G__22888 = (0);
seq__22850_22862 = G__22885;
chunk__22851_22863 = G__22886;
count__22852_22864 = G__22887;
i__22853_22865 = G__22888;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1544535915942
