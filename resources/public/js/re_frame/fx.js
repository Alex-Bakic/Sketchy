// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__22988 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22989 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22989;

try{try{var seq__22990 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22991 = null;
var count__22992 = (0);
var i__22993 = (0);
while(true){
if((i__22993 < count__22992)){
var vec__22994 = cljs.core._nth.call(null,chunk__22991,i__22993);
var effect_key = cljs.core.nth.call(null,vec__22994,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22994,(1),null);
var temp__5455__auto___23010 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23010)){
var effect_fn_23011 = temp__5455__auto___23010;
effect_fn_23011.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23012 = seq__22990;
var G__23013 = chunk__22991;
var G__23014 = count__22992;
var G__23015 = (i__22993 + (1));
seq__22990 = G__23012;
chunk__22991 = G__23013;
count__22992 = G__23014;
i__22993 = G__23015;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22990);
if(temp__5457__auto__){
var seq__22990__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22990__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22990__$1);
var G__23016 = cljs.core.chunk_rest.call(null,seq__22990__$1);
var G__23017 = c__4461__auto__;
var G__23018 = cljs.core.count.call(null,c__4461__auto__);
var G__23019 = (0);
seq__22990 = G__23016;
chunk__22991 = G__23017;
count__22992 = G__23018;
i__22993 = G__23019;
continue;
} else {
var vec__22997 = cljs.core.first.call(null,seq__22990__$1);
var effect_key = cljs.core.nth.call(null,vec__22997,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22997,(1),null);
var temp__5455__auto___23020 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23020)){
var effect_fn_23021 = temp__5455__auto___23020;
effect_fn_23021.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23022 = cljs.core.next.call(null,seq__22990__$1);
var G__23023 = null;
var G__23024 = (0);
var G__23025 = (0);
seq__22990 = G__23022;
chunk__22991 = G__23023;
count__22992 = G__23024;
i__22993 = G__23025;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22825__auto___23026 = re_frame.interop.now.call(null);
var duration__22826__auto___23027 = (end__22825__auto___23026 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22826__auto___23027,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22825__auto___23026);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22988;
}} else {
var seq__23000 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23001 = null;
var count__23002 = (0);
var i__23003 = (0);
while(true){
if((i__23003 < count__23002)){
var vec__23004 = cljs.core._nth.call(null,chunk__23001,i__23003);
var effect_key = cljs.core.nth.call(null,vec__23004,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23004,(1),null);
var temp__5455__auto___23028 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23028)){
var effect_fn_23029 = temp__5455__auto___23028;
effect_fn_23029.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23030 = seq__23000;
var G__23031 = chunk__23001;
var G__23032 = count__23002;
var G__23033 = (i__23003 + (1));
seq__23000 = G__23030;
chunk__23001 = G__23031;
count__23002 = G__23032;
i__23003 = G__23033;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23000);
if(temp__5457__auto__){
var seq__23000__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23000__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__23000__$1);
var G__23034 = cljs.core.chunk_rest.call(null,seq__23000__$1);
var G__23035 = c__4461__auto__;
var G__23036 = cljs.core.count.call(null,c__4461__auto__);
var G__23037 = (0);
seq__23000 = G__23034;
chunk__23001 = G__23035;
count__23002 = G__23036;
i__23003 = G__23037;
continue;
} else {
var vec__23007 = cljs.core.first.call(null,seq__23000__$1);
var effect_key = cljs.core.nth.call(null,vec__23007,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23007,(1),null);
var temp__5455__auto___23038 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23038)){
var effect_fn_23039 = temp__5455__auto___23038;
effect_fn_23039.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23040 = cljs.core.next.call(null,seq__23000__$1);
var G__23041 = null;
var G__23042 = (0);
var G__23043 = (0);
seq__23000 = G__23040;
chunk__23001 = G__23041;
count__23002 = G__23042;
i__23003 = G__23043;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__23044 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__23045 = null;
var count__23046 = (0);
var i__23047 = (0);
while(true){
if((i__23047 < count__23046)){
var map__23048 = cljs.core._nth.call(null,chunk__23045,i__23047);
var map__23048__$1 = (((((!((map__23048 == null))))?(((((map__23048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23048):map__23048);
var effect = map__23048__$1;
var ms = cljs.core.get.call(null,map__23048__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__23048__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__23044,chunk__23045,count__23046,i__23047,map__23048,map__23048__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__23044,chunk__23045,count__23046,i__23047,map__23048,map__23048__$1,effect,ms,dispatch))
,ms);
}


var G__23052 = seq__23044;
var G__23053 = chunk__23045;
var G__23054 = count__23046;
var G__23055 = (i__23047 + (1));
seq__23044 = G__23052;
chunk__23045 = G__23053;
count__23046 = G__23054;
i__23047 = G__23055;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23044);
if(temp__5457__auto__){
var seq__23044__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23044__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__23044__$1);
var G__23056 = cljs.core.chunk_rest.call(null,seq__23044__$1);
var G__23057 = c__4461__auto__;
var G__23058 = cljs.core.count.call(null,c__4461__auto__);
var G__23059 = (0);
seq__23044 = G__23056;
chunk__23045 = G__23057;
count__23046 = G__23058;
i__23047 = G__23059;
continue;
} else {
var map__23050 = cljs.core.first.call(null,seq__23044__$1);
var map__23050__$1 = (((((!((map__23050 == null))))?(((((map__23050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23050):map__23050);
var effect = map__23050__$1;
var ms = cljs.core.get.call(null,map__23050__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__23050__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__23044,chunk__23045,count__23046,i__23047,map__23050,map__23050__$1,effect,ms,dispatch,seq__23044__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__23044,chunk__23045,count__23046,i__23047,map__23050,map__23050__$1,effect,ms,dispatch,seq__23044__$1,temp__5457__auto__))
,ms);
}


var G__23060 = cljs.core.next.call(null,seq__23044__$1);
var G__23061 = null;
var G__23062 = (0);
var G__23063 = (0);
seq__23044 = G__23060;
chunk__23045 = G__23061;
count__23046 = G__23062;
i__23047 = G__23063;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__23064 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__23065 = null;
var count__23066 = (0);
var i__23067 = (0);
while(true){
if((i__23067 < count__23066)){
var event = cljs.core._nth.call(null,chunk__23065,i__23067);
re_frame.router.dispatch.call(null,event);


var G__23068 = seq__23064;
var G__23069 = chunk__23065;
var G__23070 = count__23066;
var G__23071 = (i__23067 + (1));
seq__23064 = G__23068;
chunk__23065 = G__23069;
count__23066 = G__23070;
i__23067 = G__23071;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23064);
if(temp__5457__auto__){
var seq__23064__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23064__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__23064__$1);
var G__23072 = cljs.core.chunk_rest.call(null,seq__23064__$1);
var G__23073 = c__4461__auto__;
var G__23074 = cljs.core.count.call(null,c__4461__auto__);
var G__23075 = (0);
seq__23064 = G__23072;
chunk__23065 = G__23073;
count__23066 = G__23074;
i__23067 = G__23075;
continue;
} else {
var event = cljs.core.first.call(null,seq__23064__$1);
re_frame.router.dispatch.call(null,event);


var G__23076 = cljs.core.next.call(null,seq__23064__$1);
var G__23077 = null;
var G__23078 = (0);
var G__23079 = (0);
seq__23064 = G__23076;
chunk__23065 = G__23077;
count__23066 = G__23078;
i__23067 = G__23079;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__23080 = cljs.core.seq.call(null,value);
var chunk__23081 = null;
var count__23082 = (0);
var i__23083 = (0);
while(true){
if((i__23083 < count__23082)){
var event = cljs.core._nth.call(null,chunk__23081,i__23083);
clear_event.call(null,event);


var G__23084 = seq__23080;
var G__23085 = chunk__23081;
var G__23086 = count__23082;
var G__23087 = (i__23083 + (1));
seq__23080 = G__23084;
chunk__23081 = G__23085;
count__23082 = G__23086;
i__23083 = G__23087;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23080);
if(temp__5457__auto__){
var seq__23080__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23080__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__23080__$1);
var G__23088 = cljs.core.chunk_rest.call(null,seq__23080__$1);
var G__23089 = c__4461__auto__;
var G__23090 = cljs.core.count.call(null,c__4461__auto__);
var G__23091 = (0);
seq__23080 = G__23088;
chunk__23081 = G__23089;
count__23082 = G__23090;
i__23083 = G__23091;
continue;
} else {
var event = cljs.core.first.call(null,seq__23080__$1);
clear_event.call(null,event);


var G__23092 = cljs.core.next.call(null,seq__23080__$1);
var G__23093 = null;
var G__23094 = (0);
var G__23095 = (0);
seq__23080 = G__23092;
chunk__23081 = G__23093;
count__23082 = G__23094;
i__23083 = G__23095;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1544650580447
