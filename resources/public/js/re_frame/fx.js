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
var _STAR_current_trace_STAR__orig_val__23415 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23416 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23416;

try{try{var seq__23417 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23418 = null;
var count__23419 = (0);
var i__23420 = (0);
while(true){
if((i__23420 < count__23419)){
var vec__23421 = cljs.core._nth.call(null,chunk__23418,i__23420);
var effect_key = cljs.core.nth.call(null,vec__23421,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23421,(1),null);
var temp__5718__auto___23437 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___23437)){
var effect_fn_23438 = temp__5718__auto___23437;
effect_fn_23438.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23439 = seq__23417;
var G__23440 = chunk__23418;
var G__23441 = count__23419;
var G__23442 = (i__23420 + (1));
seq__23417 = G__23439;
chunk__23418 = G__23440;
count__23419 = G__23441;
i__23420 = G__23442;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23417);
if(temp__5720__auto__){
var seq__23417__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23417__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__23417__$1);
var G__23443 = cljs.core.chunk_rest.call(null,seq__23417__$1);
var G__23444 = c__4461__auto__;
var G__23445 = cljs.core.count.call(null,c__4461__auto__);
var G__23446 = (0);
seq__23417 = G__23443;
chunk__23418 = G__23444;
count__23419 = G__23445;
i__23420 = G__23446;
continue;
} else {
var vec__23424 = cljs.core.first.call(null,seq__23417__$1);
var effect_key = cljs.core.nth.call(null,vec__23424,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23424,(1),null);
var temp__5718__auto___23447 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___23447)){
var effect_fn_23448 = temp__5718__auto___23447;
effect_fn_23448.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23449 = cljs.core.next.call(null,seq__23417__$1);
var G__23450 = null;
var G__23451 = (0);
var G__23452 = (0);
seq__23417 = G__23449;
chunk__23418 = G__23450;
count__23419 = G__23451;
i__23420 = G__23452;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__23252__auto___23453 = re_frame.interop.now.call(null);
var duration__23253__auto___23454 = (end__23252__auto___23453 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23253__auto___23454,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__23252__auto___23453);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23415;
}} else {
var seq__23427 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23428 = null;
var count__23429 = (0);
var i__23430 = (0);
while(true){
if((i__23430 < count__23429)){
var vec__23431 = cljs.core._nth.call(null,chunk__23428,i__23430);
var effect_key = cljs.core.nth.call(null,vec__23431,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23431,(1),null);
var temp__5718__auto___23455 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___23455)){
var effect_fn_23456 = temp__5718__auto___23455;
effect_fn_23456.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23457 = seq__23427;
var G__23458 = chunk__23428;
var G__23459 = count__23429;
var G__23460 = (i__23430 + (1));
seq__23427 = G__23457;
chunk__23428 = G__23458;
count__23429 = G__23459;
i__23430 = G__23460;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23427);
if(temp__5720__auto__){
var seq__23427__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23427__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__23427__$1);
var G__23461 = cljs.core.chunk_rest.call(null,seq__23427__$1);
var G__23462 = c__4461__auto__;
var G__23463 = cljs.core.count.call(null,c__4461__auto__);
var G__23464 = (0);
seq__23427 = G__23461;
chunk__23428 = G__23462;
count__23429 = G__23463;
i__23430 = G__23464;
continue;
} else {
var vec__23434 = cljs.core.first.call(null,seq__23427__$1);
var effect_key = cljs.core.nth.call(null,vec__23434,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23434,(1),null);
var temp__5718__auto___23465 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___23465)){
var effect_fn_23466 = temp__5718__auto___23465;
effect_fn_23466.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23467 = cljs.core.next.call(null,seq__23427__$1);
var G__23468 = null;
var G__23469 = (0);
var G__23470 = (0);
seq__23427 = G__23467;
chunk__23428 = G__23468;
count__23429 = G__23469;
i__23430 = G__23470;
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
var seq__23471 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__23472 = null;
var count__23473 = (0);
var i__23474 = (0);
while(true){
if((i__23474 < count__23473)){
var map__23475 = cljs.core._nth.call(null,chunk__23472,i__23474);
var map__23475__$1 = (((((!((map__23475 == null))))?(((((map__23475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23475):map__23475);
var effect = map__23475__$1;
var ms = cljs.core.get.call(null,map__23475__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__23475__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__23471,chunk__23472,count__23473,i__23474,map__23475,map__23475__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__23471,chunk__23472,count__23473,i__23474,map__23475,map__23475__$1,effect,ms,dispatch))
,ms);
}


var G__23479 = seq__23471;
var G__23480 = chunk__23472;
var G__23481 = count__23473;
var G__23482 = (i__23474 + (1));
seq__23471 = G__23479;
chunk__23472 = G__23480;
count__23473 = G__23481;
i__23474 = G__23482;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23471);
if(temp__5720__auto__){
var seq__23471__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23471__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__23471__$1);
var G__23483 = cljs.core.chunk_rest.call(null,seq__23471__$1);
var G__23484 = c__4461__auto__;
var G__23485 = cljs.core.count.call(null,c__4461__auto__);
var G__23486 = (0);
seq__23471 = G__23483;
chunk__23472 = G__23484;
count__23473 = G__23485;
i__23474 = G__23486;
continue;
} else {
var map__23477 = cljs.core.first.call(null,seq__23471__$1);
var map__23477__$1 = (((((!((map__23477 == null))))?(((((map__23477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23477):map__23477);
var effect = map__23477__$1;
var ms = cljs.core.get.call(null,map__23477__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__23477__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__23471,chunk__23472,count__23473,i__23474,map__23477,map__23477__$1,effect,ms,dispatch,seq__23471__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__23471,chunk__23472,count__23473,i__23474,map__23477,map__23477__$1,effect,ms,dispatch,seq__23471__$1,temp__5720__auto__))
,ms);
}


var G__23487 = cljs.core.next.call(null,seq__23471__$1);
var G__23488 = null;
var G__23489 = (0);
var G__23490 = (0);
seq__23471 = G__23487;
chunk__23472 = G__23488;
count__23473 = G__23489;
i__23474 = G__23490;
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
var seq__23491 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__23492 = null;
var count__23493 = (0);
var i__23494 = (0);
while(true){
if((i__23494 < count__23493)){
var event = cljs.core._nth.call(null,chunk__23492,i__23494);
re_frame.router.dispatch.call(null,event);


var G__23495 = seq__23491;
var G__23496 = chunk__23492;
var G__23497 = count__23493;
var G__23498 = (i__23494 + (1));
seq__23491 = G__23495;
chunk__23492 = G__23496;
count__23493 = G__23497;
i__23494 = G__23498;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23491);
if(temp__5720__auto__){
var seq__23491__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23491__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__23491__$1);
var G__23499 = cljs.core.chunk_rest.call(null,seq__23491__$1);
var G__23500 = c__4461__auto__;
var G__23501 = cljs.core.count.call(null,c__4461__auto__);
var G__23502 = (0);
seq__23491 = G__23499;
chunk__23492 = G__23500;
count__23493 = G__23501;
i__23494 = G__23502;
continue;
} else {
var event = cljs.core.first.call(null,seq__23491__$1);
re_frame.router.dispatch.call(null,event);


var G__23503 = cljs.core.next.call(null,seq__23491__$1);
var G__23504 = null;
var G__23505 = (0);
var G__23506 = (0);
seq__23491 = G__23503;
chunk__23492 = G__23504;
count__23493 = G__23505;
i__23494 = G__23506;
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
var seq__23507 = cljs.core.seq.call(null,value);
var chunk__23508 = null;
var count__23509 = (0);
var i__23510 = (0);
while(true){
if((i__23510 < count__23509)){
var event = cljs.core._nth.call(null,chunk__23508,i__23510);
clear_event.call(null,event);


var G__23511 = seq__23507;
var G__23512 = chunk__23508;
var G__23513 = count__23509;
var G__23514 = (i__23510 + (1));
seq__23507 = G__23511;
chunk__23508 = G__23512;
count__23509 = G__23513;
i__23510 = G__23514;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23507);
if(temp__5720__auto__){
var seq__23507__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23507__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__23507__$1);
var G__23515 = cljs.core.chunk_rest.call(null,seq__23507__$1);
var G__23516 = c__4461__auto__;
var G__23517 = cljs.core.count.call(null,c__4461__auto__);
var G__23518 = (0);
seq__23507 = G__23515;
chunk__23508 = G__23516;
count__23509 = G__23517;
i__23510 = G__23518;
continue;
} else {
var event = cljs.core.first.call(null,seq__23507__$1);
clear_event.call(null,event);


var G__23519 = cljs.core.next.call(null,seq__23507__$1);
var G__23520 = null;
var G__23521 = (0);
var G__23522 = (0);
seq__23507 = G__23519;
chunk__23508 = G__23520;
count__23509 = G__23521;
i__23510 = G__23522;
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

//# sourceMappingURL=fx.js.map?rel=1545905838290
