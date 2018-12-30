// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.17";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e30256){if((e30256 instanceof Error)){
var e = e30256;
return "Error: Unable to stringify";
} else {
throw e30256;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30259 = arguments.length;
switch (G__30259) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30257_SHARP_){
if(typeof p1__30257_SHARP_ === 'string'){
return p1__30257_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30257_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30262 = arguments.length;
var i__4642__auto___30263 = (0);
while(true){
if((i__4642__auto___30263 < len__4641__auto___30262)){
args__4647__auto__.push((arguments[i__4642__auto___30263]));

var G__30264 = (i__4642__auto___30263 + (1));
i__4642__auto___30263 = G__30264;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30261){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30261));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30266 = arguments.length;
var i__4642__auto___30267 = (0);
while(true){
if((i__4642__auto___30267 < len__4641__auto___30266)){
args__4647__auto__.push((arguments[i__4642__auto___30267]));

var G__30268 = (i__4642__auto___30267 + (1));
i__4642__auto___30267 = G__30268;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30265){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30265));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30269){
var map__30270 = p__30269;
var map__30270__$1 = (((((!((map__30270 == null))))?(((((map__30270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30270):map__30270);
var message = cljs.core.get.call(null,map__30270__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30270__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25257__auto___30349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___30349,ch){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___30349,ch){
return (function (state_30321){
var state_val_30322 = (state_30321[(1)]);
if((state_val_30322 === (7))){
var inst_30317 = (state_30321[(2)]);
var state_30321__$1 = state_30321;
var statearr_30323_30350 = state_30321__$1;
(statearr_30323_30350[(2)] = inst_30317);

(statearr_30323_30350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (1))){
var state_30321__$1 = state_30321;
var statearr_30324_30351 = state_30321__$1;
(statearr_30324_30351[(2)] = null);

(statearr_30324_30351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (4))){
var inst_30274 = (state_30321[(7)]);
var inst_30274__$1 = (state_30321[(2)]);
var state_30321__$1 = (function (){var statearr_30325 = state_30321;
(statearr_30325[(7)] = inst_30274__$1);

return statearr_30325;
})();
if(cljs.core.truth_(inst_30274__$1)){
var statearr_30326_30352 = state_30321__$1;
(statearr_30326_30352[(1)] = (5));

} else {
var statearr_30327_30353 = state_30321__$1;
(statearr_30327_30353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (15))){
var inst_30281 = (state_30321[(8)]);
var inst_30296 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30281);
var inst_30297 = cljs.core.first.call(null,inst_30296);
var inst_30298 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30297);
var inst_30299 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30298)].join('');
var inst_30300 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30299);
var state_30321__$1 = state_30321;
var statearr_30328_30354 = state_30321__$1;
(statearr_30328_30354[(2)] = inst_30300);

(statearr_30328_30354[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (13))){
var inst_30305 = (state_30321[(2)]);
var state_30321__$1 = state_30321;
var statearr_30329_30355 = state_30321__$1;
(statearr_30329_30355[(2)] = inst_30305);

(statearr_30329_30355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (6))){
var state_30321__$1 = state_30321;
var statearr_30330_30356 = state_30321__$1;
(statearr_30330_30356[(2)] = null);

(statearr_30330_30356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (17))){
var inst_30303 = (state_30321[(2)]);
var state_30321__$1 = state_30321;
var statearr_30331_30357 = state_30321__$1;
(statearr_30331_30357[(2)] = inst_30303);

(statearr_30331_30357[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (3))){
var inst_30319 = (state_30321[(2)]);
var state_30321__$1 = state_30321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30321__$1,inst_30319);
} else {
if((state_val_30322 === (12))){
var inst_30280 = (state_30321[(9)]);
var inst_30294 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30280,opts);
var state_30321__$1 = state_30321;
if(inst_30294){
var statearr_30332_30358 = state_30321__$1;
(statearr_30332_30358[(1)] = (15));

} else {
var statearr_30333_30359 = state_30321__$1;
(statearr_30333_30359[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (2))){
var state_30321__$1 = state_30321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30321__$1,(4),ch);
} else {
if((state_val_30322 === (11))){
var inst_30281 = (state_30321[(8)]);
var inst_30286 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30287 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30281);
var inst_30288 = cljs.core.async.timeout.call(null,(1000));
var inst_30289 = [inst_30287,inst_30288];
var inst_30290 = (new cljs.core.PersistentVector(null,2,(5),inst_30286,inst_30289,null));
var state_30321__$1 = state_30321;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30321__$1,(14),inst_30290);
} else {
if((state_val_30322 === (9))){
var inst_30281 = (state_30321[(8)]);
var inst_30307 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30308 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30281);
var inst_30309 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30308);
var inst_30310 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30309)].join('');
var inst_30311 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30310);
var state_30321__$1 = (function (){var statearr_30334 = state_30321;
(statearr_30334[(10)] = inst_30307);

return statearr_30334;
})();
var statearr_30335_30360 = state_30321__$1;
(statearr_30335_30360[(2)] = inst_30311);

(statearr_30335_30360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (5))){
var inst_30274 = (state_30321[(7)]);
var inst_30276 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30277 = (new cljs.core.PersistentArrayMap(null,2,inst_30276,null));
var inst_30278 = (new cljs.core.PersistentHashSet(null,inst_30277,null));
var inst_30279 = figwheel.client.focus_msgs.call(null,inst_30278,inst_30274);
var inst_30280 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30279);
var inst_30281 = cljs.core.first.call(null,inst_30279);
var inst_30282 = figwheel.client.autoload_QMARK_.call(null);
var state_30321__$1 = (function (){var statearr_30336 = state_30321;
(statearr_30336[(8)] = inst_30281);

(statearr_30336[(9)] = inst_30280);

return statearr_30336;
})();
if(cljs.core.truth_(inst_30282)){
var statearr_30337_30361 = state_30321__$1;
(statearr_30337_30361[(1)] = (8));

} else {
var statearr_30338_30362 = state_30321__$1;
(statearr_30338_30362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (14))){
var inst_30292 = (state_30321[(2)]);
var state_30321__$1 = state_30321;
var statearr_30339_30363 = state_30321__$1;
(statearr_30339_30363[(2)] = inst_30292);

(statearr_30339_30363[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (16))){
var state_30321__$1 = state_30321;
var statearr_30340_30364 = state_30321__$1;
(statearr_30340_30364[(2)] = null);

(statearr_30340_30364[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (10))){
var inst_30313 = (state_30321[(2)]);
var state_30321__$1 = (function (){var statearr_30341 = state_30321;
(statearr_30341[(11)] = inst_30313);

return statearr_30341;
})();
var statearr_30342_30365 = state_30321__$1;
(statearr_30342_30365[(2)] = null);

(statearr_30342_30365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (8))){
var inst_30280 = (state_30321[(9)]);
var inst_30284 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30280,opts);
var state_30321__$1 = state_30321;
if(cljs.core.truth_(inst_30284)){
var statearr_30343_30366 = state_30321__$1;
(statearr_30343_30366[(1)] = (11));

} else {
var statearr_30344_30367 = state_30321__$1;
(statearr_30344_30367[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25257__auto___30349,ch))
;
return ((function (switch__25162__auto__,c__25257__auto___30349,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25163__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25163__auto____0 = (function (){
var statearr_30345 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30345[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25163__auto__);

(statearr_30345[(1)] = (1));

return statearr_30345;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25163__auto____1 = (function (state_30321){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_30321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e30346){if((e30346 instanceof Object)){
var ex__25166__auto__ = e30346;
var statearr_30347_30368 = state_30321;
(statearr_30347_30368[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30369 = state_30321;
state_30321 = G__30369;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25163__auto__ = function(state_30321){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25163__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25163__auto____1.call(this,state_30321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25163__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25163__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___30349,ch))
})();
var state__25259__auto__ = (function (){var statearr_30348 = f__25258__auto__.call(null);
(statearr_30348[(6)] = c__25257__auto___30349);

return statearr_30348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___30349,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30370_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30370_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30376 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30376){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30372 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30373 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30374 = true;
var _STAR_print_fn_STAR__temp_val__30375 = ((function (_STAR_print_newline_STAR__orig_val__30372,_STAR_print_fn_STAR__orig_val__30373,_STAR_print_newline_STAR__temp_val__30374,sb,base_path_30376){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__30372,_STAR_print_fn_STAR__orig_val__30373,_STAR_print_newline_STAR__temp_val__30374,sb,base_path_30376))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30374;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30375;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30373;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30372;
}}catch (e30371){if((e30371 instanceof Error)){
var e = e30371;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30376], null));
} else {
var e = e30371;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30376))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30377){
var map__30378 = p__30377;
var map__30378__$1 = (((((!((map__30378 == null))))?(((((map__30378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30378):map__30378);
var opts = map__30378__$1;
var build_id = cljs.core.get.call(null,map__30378__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30378,map__30378__$1,opts,build_id){
return (function (p__30380){
var vec__30381 = p__30380;
var seq__30382 = cljs.core.seq.call(null,vec__30381);
var first__30383 = cljs.core.first.call(null,seq__30382);
var seq__30382__$1 = cljs.core.next.call(null,seq__30382);
var map__30384 = first__30383;
var map__30384__$1 = (((((!((map__30384 == null))))?(((((map__30384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30384):map__30384);
var msg = map__30384__$1;
var msg_name = cljs.core.get.call(null,map__30384__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30382__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30381,seq__30382,first__30383,seq__30382__$1,map__30384,map__30384__$1,msg,msg_name,_,map__30378,map__30378__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30381,seq__30382,first__30383,seq__30382__$1,map__30384,map__30384__$1,msg,msg_name,_,map__30378,map__30378__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30378,map__30378__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30386){
var vec__30387 = p__30386;
var seq__30388 = cljs.core.seq.call(null,vec__30387);
var first__30389 = cljs.core.first.call(null,seq__30388);
var seq__30388__$1 = cljs.core.next.call(null,seq__30388);
var map__30390 = first__30389;
var map__30390__$1 = (((((!((map__30390 == null))))?(((((map__30390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30390):map__30390);
var msg = map__30390__$1;
var msg_name = cljs.core.get.call(null,map__30390__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30388__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30392){
var map__30393 = p__30392;
var map__30393__$1 = (((((!((map__30393 == null))))?(((((map__30393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30393):map__30393);
var on_compile_warning = cljs.core.get.call(null,map__30393__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30393__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30393,map__30393__$1,on_compile_warning,on_compile_fail){
return (function (p__30395){
var vec__30396 = p__30395;
var seq__30397 = cljs.core.seq.call(null,vec__30396);
var first__30398 = cljs.core.first.call(null,seq__30397);
var seq__30397__$1 = cljs.core.next.call(null,seq__30397);
var map__30399 = first__30398;
var map__30399__$1 = (((((!((map__30399 == null))))?(((((map__30399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30399):map__30399);
var msg = map__30399__$1;
var msg_name = cljs.core.get.call(null,map__30399__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30397__$1;
var pred__30401 = cljs.core._EQ_;
var expr__30402 = msg_name;
if(cljs.core.truth_(pred__30401.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30402))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30401.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30402))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30393,map__30393__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto__,msg_hist,msg_names,msg){
return (function (state_30491){
var state_val_30492 = (state_30491[(1)]);
if((state_val_30492 === (7))){
var inst_30411 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
if(cljs.core.truth_(inst_30411)){
var statearr_30493_30540 = state_30491__$1;
(statearr_30493_30540[(1)] = (8));

} else {
var statearr_30494_30541 = state_30491__$1;
(statearr_30494_30541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (20))){
var inst_30485 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30495_30542 = state_30491__$1;
(statearr_30495_30542[(2)] = inst_30485);

(statearr_30495_30542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (27))){
var inst_30481 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30496_30543 = state_30491__$1;
(statearr_30496_30543[(2)] = inst_30481);

(statearr_30496_30543[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (1))){
var inst_30404 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30491__$1 = state_30491;
if(cljs.core.truth_(inst_30404)){
var statearr_30497_30544 = state_30491__$1;
(statearr_30497_30544[(1)] = (2));

} else {
var statearr_30498_30545 = state_30491__$1;
(statearr_30498_30545[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (24))){
var inst_30483 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30499_30546 = state_30491__$1;
(statearr_30499_30546[(2)] = inst_30483);

(statearr_30499_30546[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (4))){
var inst_30489 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30491__$1,inst_30489);
} else {
if((state_val_30492 === (15))){
var inst_30487 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30500_30547 = state_30491__$1;
(statearr_30500_30547[(2)] = inst_30487);

(statearr_30500_30547[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (21))){
var inst_30440 = (state_30491[(2)]);
var inst_30441 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30442 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30441);
var state_30491__$1 = (function (){var statearr_30501 = state_30491;
(statearr_30501[(7)] = inst_30440);

return statearr_30501;
})();
var statearr_30502_30548 = state_30491__$1;
(statearr_30502_30548[(2)] = inst_30442);

(statearr_30502_30548[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (31))){
var inst_30470 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30491__$1 = state_30491;
if(inst_30470){
var statearr_30503_30549 = state_30491__$1;
(statearr_30503_30549[(1)] = (34));

} else {
var statearr_30504_30550 = state_30491__$1;
(statearr_30504_30550[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (32))){
var inst_30479 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30505_30551 = state_30491__$1;
(statearr_30505_30551[(2)] = inst_30479);

(statearr_30505_30551[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (33))){
var inst_30466 = (state_30491[(2)]);
var inst_30467 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30468 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30467);
var state_30491__$1 = (function (){var statearr_30506 = state_30491;
(statearr_30506[(8)] = inst_30466);

return statearr_30506;
})();
var statearr_30507_30552 = state_30491__$1;
(statearr_30507_30552[(2)] = inst_30468);

(statearr_30507_30552[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (13))){
var inst_30425 = figwheel.client.heads_up.clear.call(null);
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30491__$1,(16),inst_30425);
} else {
if((state_val_30492 === (22))){
var inst_30446 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30447 = figwheel.client.heads_up.append_warning_message.call(null,inst_30446);
var state_30491__$1 = state_30491;
var statearr_30508_30553 = state_30491__$1;
(statearr_30508_30553[(2)] = inst_30447);

(statearr_30508_30553[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (36))){
var inst_30477 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30509_30554 = state_30491__$1;
(statearr_30509_30554[(2)] = inst_30477);

(statearr_30509_30554[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (29))){
var inst_30457 = (state_30491[(2)]);
var inst_30458 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30459 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30458);
var state_30491__$1 = (function (){var statearr_30510 = state_30491;
(statearr_30510[(9)] = inst_30457);

return statearr_30510;
})();
var statearr_30511_30555 = state_30491__$1;
(statearr_30511_30555[(2)] = inst_30459);

(statearr_30511_30555[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (6))){
var inst_30406 = (state_30491[(10)]);
var state_30491__$1 = state_30491;
var statearr_30512_30556 = state_30491__$1;
(statearr_30512_30556[(2)] = inst_30406);

(statearr_30512_30556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (28))){
var inst_30453 = (state_30491[(2)]);
var inst_30454 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30455 = figwheel.client.heads_up.display_warning.call(null,inst_30454);
var state_30491__$1 = (function (){var statearr_30513 = state_30491;
(statearr_30513[(11)] = inst_30453);

return statearr_30513;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30491__$1,(29),inst_30455);
} else {
if((state_val_30492 === (25))){
var inst_30451 = figwheel.client.heads_up.clear.call(null);
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30491__$1,(28),inst_30451);
} else {
if((state_val_30492 === (34))){
var inst_30472 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30491__$1,(37),inst_30472);
} else {
if((state_val_30492 === (17))){
var inst_30431 = (state_30491[(2)]);
var inst_30432 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30433 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30432);
var state_30491__$1 = (function (){var statearr_30514 = state_30491;
(statearr_30514[(12)] = inst_30431);

return statearr_30514;
})();
var statearr_30515_30557 = state_30491__$1;
(statearr_30515_30557[(2)] = inst_30433);

(statearr_30515_30557[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (3))){
var inst_30423 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30491__$1 = state_30491;
if(inst_30423){
var statearr_30516_30558 = state_30491__$1;
(statearr_30516_30558[(1)] = (13));

} else {
var statearr_30517_30559 = state_30491__$1;
(statearr_30517_30559[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (12))){
var inst_30419 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30518_30560 = state_30491__$1;
(statearr_30518_30560[(2)] = inst_30419);

(statearr_30518_30560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (2))){
var inst_30406 = (state_30491[(10)]);
var inst_30406__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30491__$1 = (function (){var statearr_30519 = state_30491;
(statearr_30519[(10)] = inst_30406__$1);

return statearr_30519;
})();
if(cljs.core.truth_(inst_30406__$1)){
var statearr_30520_30561 = state_30491__$1;
(statearr_30520_30561[(1)] = (5));

} else {
var statearr_30521_30562 = state_30491__$1;
(statearr_30521_30562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (23))){
var inst_30449 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30491__$1 = state_30491;
if(inst_30449){
var statearr_30522_30563 = state_30491__$1;
(statearr_30522_30563[(1)] = (25));

} else {
var statearr_30523_30564 = state_30491__$1;
(statearr_30523_30564[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (35))){
var state_30491__$1 = state_30491;
var statearr_30524_30565 = state_30491__$1;
(statearr_30524_30565[(2)] = null);

(statearr_30524_30565[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (19))){
var inst_30444 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30491__$1 = state_30491;
if(inst_30444){
var statearr_30525_30566 = state_30491__$1;
(statearr_30525_30566[(1)] = (22));

} else {
var statearr_30526_30567 = state_30491__$1;
(statearr_30526_30567[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (11))){
var inst_30415 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30527_30568 = state_30491__$1;
(statearr_30527_30568[(2)] = inst_30415);

(statearr_30527_30568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (9))){
var inst_30417 = figwheel.client.heads_up.clear.call(null);
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30491__$1,(12),inst_30417);
} else {
if((state_val_30492 === (5))){
var inst_30408 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30491__$1 = state_30491;
var statearr_30528_30569 = state_30491__$1;
(statearr_30528_30569[(2)] = inst_30408);

(statearr_30528_30569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (14))){
var inst_30435 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30491__$1 = state_30491;
if(inst_30435){
var statearr_30529_30570 = state_30491__$1;
(statearr_30529_30570[(1)] = (18));

} else {
var statearr_30530_30571 = state_30491__$1;
(statearr_30530_30571[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (26))){
var inst_30461 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30491__$1 = state_30491;
if(inst_30461){
var statearr_30531_30572 = state_30491__$1;
(statearr_30531_30572[(1)] = (30));

} else {
var statearr_30532_30573 = state_30491__$1;
(statearr_30532_30573[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (16))){
var inst_30427 = (state_30491[(2)]);
var inst_30428 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30429 = figwheel.client.heads_up.display_exception.call(null,inst_30428);
var state_30491__$1 = (function (){var statearr_30533 = state_30491;
(statearr_30533[(13)] = inst_30427);

return statearr_30533;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30491__$1,(17),inst_30429);
} else {
if((state_val_30492 === (30))){
var inst_30463 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30464 = figwheel.client.heads_up.display_warning.call(null,inst_30463);
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30491__$1,(33),inst_30464);
} else {
if((state_val_30492 === (10))){
var inst_30421 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30534_30574 = state_30491__$1;
(statearr_30534_30574[(2)] = inst_30421);

(statearr_30534_30574[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (18))){
var inst_30437 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30438 = figwheel.client.heads_up.display_exception.call(null,inst_30437);
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30491__$1,(21),inst_30438);
} else {
if((state_val_30492 === (37))){
var inst_30474 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30535_30575 = state_30491__$1;
(statearr_30535_30575[(2)] = inst_30474);

(statearr_30535_30575[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (8))){
var inst_30413 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30491__$1,(11),inst_30413);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25257__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25162__auto__,c__25257__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25163__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25163__auto____0 = (function (){
var statearr_30536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30536[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25163__auto__);

(statearr_30536[(1)] = (1));

return statearr_30536;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25163__auto____1 = (function (state_30491){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_30491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e30537){if((e30537 instanceof Object)){
var ex__25166__auto__ = e30537;
var statearr_30538_30576 = state_30491;
(statearr_30538_30576[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30577 = state_30491;
state_30491 = G__30577;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25163__auto__ = function(state_30491){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25163__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25163__auto____1.call(this,state_30491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25163__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25163__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto__,msg_hist,msg_names,msg))
})();
var state__25259__auto__ = (function (){var statearr_30539 = f__25258__auto__.call(null);
(statearr_30539[(6)] = c__25257__auto__);

return statearr_30539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto__,msg_hist,msg_names,msg))
);

return c__25257__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25257__auto___30606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___30606,ch){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___30606,ch){
return (function (state_30592){
var state_val_30593 = (state_30592[(1)]);
if((state_val_30593 === (1))){
var state_30592__$1 = state_30592;
var statearr_30594_30607 = state_30592__$1;
(statearr_30594_30607[(2)] = null);

(statearr_30594_30607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (2))){
var state_30592__$1 = state_30592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30592__$1,(4),ch);
} else {
if((state_val_30593 === (3))){
var inst_30590 = (state_30592[(2)]);
var state_30592__$1 = state_30592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30592__$1,inst_30590);
} else {
if((state_val_30593 === (4))){
var inst_30580 = (state_30592[(7)]);
var inst_30580__$1 = (state_30592[(2)]);
var state_30592__$1 = (function (){var statearr_30595 = state_30592;
(statearr_30595[(7)] = inst_30580__$1);

return statearr_30595;
})();
if(cljs.core.truth_(inst_30580__$1)){
var statearr_30596_30608 = state_30592__$1;
(statearr_30596_30608[(1)] = (5));

} else {
var statearr_30597_30609 = state_30592__$1;
(statearr_30597_30609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (5))){
var inst_30580 = (state_30592[(7)]);
var inst_30582 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30580);
var state_30592__$1 = state_30592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30592__$1,(8),inst_30582);
} else {
if((state_val_30593 === (6))){
var state_30592__$1 = state_30592;
var statearr_30598_30610 = state_30592__$1;
(statearr_30598_30610[(2)] = null);

(statearr_30598_30610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (7))){
var inst_30588 = (state_30592[(2)]);
var state_30592__$1 = state_30592;
var statearr_30599_30611 = state_30592__$1;
(statearr_30599_30611[(2)] = inst_30588);

(statearr_30599_30611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (8))){
var inst_30584 = (state_30592[(2)]);
var state_30592__$1 = (function (){var statearr_30600 = state_30592;
(statearr_30600[(8)] = inst_30584);

return statearr_30600;
})();
var statearr_30601_30612 = state_30592__$1;
(statearr_30601_30612[(2)] = null);

(statearr_30601_30612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__25257__auto___30606,ch))
;
return ((function (switch__25162__auto__,c__25257__auto___30606,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25163__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25163__auto____0 = (function (){
var statearr_30602 = [null,null,null,null,null,null,null,null,null];
(statearr_30602[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25163__auto__);

(statearr_30602[(1)] = (1));

return statearr_30602;
});
var figwheel$client$heads_up_plugin_$_state_machine__25163__auto____1 = (function (state_30592){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_30592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e30603){if((e30603 instanceof Object)){
var ex__25166__auto__ = e30603;
var statearr_30604_30613 = state_30592;
(statearr_30604_30613[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30614 = state_30592;
state_30592 = G__30614;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25163__auto__ = function(state_30592){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25163__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25163__auto____1.call(this,state_30592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25163__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25163__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___30606,ch))
})();
var state__25259__auto__ = (function (){var statearr_30605 = f__25258__auto__.call(null);
(statearr_30605[(6)] = c__25257__auto___30606);

return statearr_30605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___30606,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto__){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto__){
return (function (state_30620){
var state_val_30621 = (state_30620[(1)]);
if((state_val_30621 === (1))){
var inst_30615 = cljs.core.async.timeout.call(null,(3000));
var state_30620__$1 = state_30620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30620__$1,(2),inst_30615);
} else {
if((state_val_30621 === (2))){
var inst_30617 = (state_30620[(2)]);
var inst_30618 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30620__$1 = (function (){var statearr_30622 = state_30620;
(statearr_30622[(7)] = inst_30617);

return statearr_30622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30620__$1,inst_30618);
} else {
return null;
}
}
});})(c__25257__auto__))
;
return ((function (switch__25162__auto__,c__25257__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25163__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25163__auto____0 = (function (){
var statearr_30623 = [null,null,null,null,null,null,null,null];
(statearr_30623[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25163__auto__);

(statearr_30623[(1)] = (1));

return statearr_30623;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25163__auto____1 = (function (state_30620){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_30620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e30624){if((e30624 instanceof Object)){
var ex__25166__auto__ = e30624;
var statearr_30625_30627 = state_30620;
(statearr_30625_30627[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30628 = state_30620;
state_30620 = G__30628;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25163__auto__ = function(state_30620){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25163__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25163__auto____1.call(this,state_30620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25163__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25163__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto__))
})();
var state__25259__auto__ = (function (){var statearr_30626 = f__25258__auto__.call(null);
(statearr_30626[(6)] = c__25257__auto__);

return statearr_30626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto__))
);

return c__25257__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto__,figwheel_version,temp__5720__auto__){
return (function (state_30635){
var state_val_30636 = (state_30635[(1)]);
if((state_val_30636 === (1))){
var inst_30629 = cljs.core.async.timeout.call(null,(2000));
var state_30635__$1 = state_30635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30635__$1,(2),inst_30629);
} else {
if((state_val_30636 === (2))){
var inst_30631 = (state_30635[(2)]);
var inst_30632 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30633 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30632);
var state_30635__$1 = (function (){var statearr_30637 = state_30635;
(statearr_30637[(7)] = inst_30631);

return statearr_30637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30635__$1,inst_30633);
} else {
return null;
}
}
});})(c__25257__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__25162__auto__,c__25257__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25163__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25163__auto____0 = (function (){
var statearr_30638 = [null,null,null,null,null,null,null,null];
(statearr_30638[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25163__auto__);

(statearr_30638[(1)] = (1));

return statearr_30638;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25163__auto____1 = (function (state_30635){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_30635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e30639){if((e30639 instanceof Object)){
var ex__25166__auto__ = e30639;
var statearr_30640_30642 = state_30635;
(statearr_30640_30642[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30643 = state_30635;
state_30635 = G__30643;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25163__auto__ = function(state_30635){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25163__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25163__auto____1.call(this,state_30635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25163__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25163__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto__,figwheel_version,temp__5720__auto__))
})();
var state__25259__auto__ = (function (){var statearr_30641 = f__25258__auto__.call(null);
(statearr_30641[(6)] = c__25257__auto__);

return statearr_30641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto__,figwheel_version,temp__5720__auto__))
);

return c__25257__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30644){
var map__30645 = p__30644;
var map__30645__$1 = (((((!((map__30645 == null))))?(((((map__30645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30645):map__30645);
var file = cljs.core.get.call(null,map__30645__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30645__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30645__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30647 = "";
var G__30647__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30647),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30647);
var G__30647__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30647__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30647__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30647__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30647__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30648){
var map__30649 = p__30648;
var map__30649__$1 = (((((!((map__30649 == null))))?(((((map__30649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30649):map__30649);
var ed = map__30649__$1;
var formatted_exception = cljs.core.get.call(null,map__30649__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30649__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30649__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30651_30655 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30652_30656 = null;
var count__30653_30657 = (0);
var i__30654_30658 = (0);
while(true){
if((i__30654_30658 < count__30653_30657)){
var msg_30659 = cljs.core._nth.call(null,chunk__30652_30656,i__30654_30658);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30659);


var G__30660 = seq__30651_30655;
var G__30661 = chunk__30652_30656;
var G__30662 = count__30653_30657;
var G__30663 = (i__30654_30658 + (1));
seq__30651_30655 = G__30660;
chunk__30652_30656 = G__30661;
count__30653_30657 = G__30662;
i__30654_30658 = G__30663;
continue;
} else {
var temp__5720__auto___30664 = cljs.core.seq.call(null,seq__30651_30655);
if(temp__5720__auto___30664){
var seq__30651_30665__$1 = temp__5720__auto___30664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30651_30665__$1)){
var c__4461__auto___30666 = cljs.core.chunk_first.call(null,seq__30651_30665__$1);
var G__30667 = cljs.core.chunk_rest.call(null,seq__30651_30665__$1);
var G__30668 = c__4461__auto___30666;
var G__30669 = cljs.core.count.call(null,c__4461__auto___30666);
var G__30670 = (0);
seq__30651_30655 = G__30667;
chunk__30652_30656 = G__30668;
count__30653_30657 = G__30669;
i__30654_30658 = G__30670;
continue;
} else {
var msg_30671 = cljs.core.first.call(null,seq__30651_30665__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30671);


var G__30672 = cljs.core.next.call(null,seq__30651_30665__$1);
var G__30673 = null;
var G__30674 = (0);
var G__30675 = (0);
seq__30651_30655 = G__30672;
chunk__30652_30656 = G__30673;
count__30653_30657 = G__30674;
i__30654_30658 = G__30675;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30676){
var map__30677 = p__30676;
var map__30677__$1 = (((((!((map__30677 == null))))?(((((map__30677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30677):map__30677);
var w = map__30677__$1;
var message = cljs.core.get.call(null,map__30677__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,364,364,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,356,356,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30679 = cljs.core.seq.call(null,plugins);
var chunk__30680 = null;
var count__30681 = (0);
var i__30682 = (0);
while(true){
if((i__30682 < count__30681)){
var vec__30683 = cljs.core._nth.call(null,chunk__30680,i__30682);
var k = cljs.core.nth.call(null,vec__30683,(0),null);
var plugin = cljs.core.nth.call(null,vec__30683,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30689 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30679,chunk__30680,count__30681,i__30682,pl_30689,vec__30683,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30689.call(null,msg_hist);
});})(seq__30679,chunk__30680,count__30681,i__30682,pl_30689,vec__30683,k,plugin))
);
} else {
}


var G__30690 = seq__30679;
var G__30691 = chunk__30680;
var G__30692 = count__30681;
var G__30693 = (i__30682 + (1));
seq__30679 = G__30690;
chunk__30680 = G__30691;
count__30681 = G__30692;
i__30682 = G__30693;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30679);
if(temp__5720__auto__){
var seq__30679__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30679__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30679__$1);
var G__30694 = cljs.core.chunk_rest.call(null,seq__30679__$1);
var G__30695 = c__4461__auto__;
var G__30696 = cljs.core.count.call(null,c__4461__auto__);
var G__30697 = (0);
seq__30679 = G__30694;
chunk__30680 = G__30695;
count__30681 = G__30696;
i__30682 = G__30697;
continue;
} else {
var vec__30686 = cljs.core.first.call(null,seq__30679__$1);
var k = cljs.core.nth.call(null,vec__30686,(0),null);
var plugin = cljs.core.nth.call(null,vec__30686,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30698 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30679,chunk__30680,count__30681,i__30682,pl_30698,vec__30686,k,plugin,seq__30679__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30698.call(null,msg_hist);
});})(seq__30679,chunk__30680,count__30681,i__30682,pl_30698,vec__30686,k,plugin,seq__30679__$1,temp__5720__auto__))
);
} else {
}


var G__30699 = cljs.core.next.call(null,seq__30679__$1);
var G__30700 = null;
var G__30701 = (0);
var G__30702 = (0);
seq__30679 = G__30699;
chunk__30680 = G__30700;
count__30681 = G__30701;
i__30682 = G__30702;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30704 = arguments.length;
switch (G__30704) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30705_30710 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30706_30711 = null;
var count__30707_30712 = (0);
var i__30708_30713 = (0);
while(true){
if((i__30708_30713 < count__30707_30712)){
var msg_30714 = cljs.core._nth.call(null,chunk__30706_30711,i__30708_30713);
figwheel.client.socket.handle_incoming_message.call(null,msg_30714);


var G__30715 = seq__30705_30710;
var G__30716 = chunk__30706_30711;
var G__30717 = count__30707_30712;
var G__30718 = (i__30708_30713 + (1));
seq__30705_30710 = G__30715;
chunk__30706_30711 = G__30716;
count__30707_30712 = G__30717;
i__30708_30713 = G__30718;
continue;
} else {
var temp__5720__auto___30719 = cljs.core.seq.call(null,seq__30705_30710);
if(temp__5720__auto___30719){
var seq__30705_30720__$1 = temp__5720__auto___30719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30705_30720__$1)){
var c__4461__auto___30721 = cljs.core.chunk_first.call(null,seq__30705_30720__$1);
var G__30722 = cljs.core.chunk_rest.call(null,seq__30705_30720__$1);
var G__30723 = c__4461__auto___30721;
var G__30724 = cljs.core.count.call(null,c__4461__auto___30721);
var G__30725 = (0);
seq__30705_30710 = G__30722;
chunk__30706_30711 = G__30723;
count__30707_30712 = G__30724;
i__30708_30713 = G__30725;
continue;
} else {
var msg_30726 = cljs.core.first.call(null,seq__30705_30720__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30726);


var G__30727 = cljs.core.next.call(null,seq__30705_30720__$1);
var G__30728 = null;
var G__30729 = (0);
var G__30730 = (0);
seq__30705_30710 = G__30727;
chunk__30706_30711 = G__30728;
count__30707_30712 = G__30729;
i__30708_30713 = G__30730;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30735 = arguments.length;
var i__4642__auto___30736 = (0);
while(true){
if((i__4642__auto___30736 < len__4641__auto___30735)){
args__4647__auto__.push((arguments[i__4642__auto___30736]));

var G__30737 = (i__4642__auto___30736 + (1));
i__4642__auto___30736 = G__30737;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30732){
var map__30733 = p__30732;
var map__30733__$1 = (((((!((map__30733 == null))))?(((((map__30733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30733):map__30733);
var opts = map__30733__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30731){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30731));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30738){if((e30738 instanceof Error)){
var e = e30738;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30738;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30739){
var map__30740 = p__30739;
var map__30740__$1 = (((((!((map__30740 == null))))?(((((map__30740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30740):map__30740);
var msg_name = cljs.core.get.call(null,map__30740__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1546164293957
