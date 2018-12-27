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
}catch (e30234){if((e30234 instanceof Error)){
var e = e30234;
return "Error: Unable to stringify";
} else {
throw e30234;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30237 = arguments.length;
switch (G__30237) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30235_SHARP_){
if(typeof p1__30235_SHARP_ === 'string'){
return p1__30235_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30235_SHARP_);
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
var len__4641__auto___30240 = arguments.length;
var i__4642__auto___30241 = (0);
while(true){
if((i__4642__auto___30241 < len__4641__auto___30240)){
args__4647__auto__.push((arguments[i__4642__auto___30241]));

var G__30242 = (i__4642__auto___30241 + (1));
i__4642__auto___30241 = G__30242;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30239){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30239));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30244 = arguments.length;
var i__4642__auto___30245 = (0);
while(true){
if((i__4642__auto___30245 < len__4641__auto___30244)){
args__4647__auto__.push((arguments[i__4642__auto___30245]));

var G__30246 = (i__4642__auto___30245 + (1));
i__4642__auto___30245 = G__30246;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30243){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30243));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30247){
var map__30248 = p__30247;
var map__30248__$1 = (((((!((map__30248 == null))))?(((((map__30248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30248):map__30248);
var message = cljs.core.get.call(null,map__30248__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30248__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__25235__auto___30327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___30327,ch){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___30327,ch){
return (function (state_30299){
var state_val_30300 = (state_30299[(1)]);
if((state_val_30300 === (7))){
var inst_30295 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
var statearr_30301_30328 = state_30299__$1;
(statearr_30301_30328[(2)] = inst_30295);

(statearr_30301_30328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (1))){
var state_30299__$1 = state_30299;
var statearr_30302_30329 = state_30299__$1;
(statearr_30302_30329[(2)] = null);

(statearr_30302_30329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (4))){
var inst_30252 = (state_30299[(7)]);
var inst_30252__$1 = (state_30299[(2)]);
var state_30299__$1 = (function (){var statearr_30303 = state_30299;
(statearr_30303[(7)] = inst_30252__$1);

return statearr_30303;
})();
if(cljs.core.truth_(inst_30252__$1)){
var statearr_30304_30330 = state_30299__$1;
(statearr_30304_30330[(1)] = (5));

} else {
var statearr_30305_30331 = state_30299__$1;
(statearr_30305_30331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (15))){
var inst_30259 = (state_30299[(8)]);
var inst_30274 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30259);
var inst_30275 = cljs.core.first.call(null,inst_30274);
var inst_30276 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30275);
var inst_30277 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30276)].join('');
var inst_30278 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30277);
var state_30299__$1 = state_30299;
var statearr_30306_30332 = state_30299__$1;
(statearr_30306_30332[(2)] = inst_30278);

(statearr_30306_30332[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (13))){
var inst_30283 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
var statearr_30307_30333 = state_30299__$1;
(statearr_30307_30333[(2)] = inst_30283);

(statearr_30307_30333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (6))){
var state_30299__$1 = state_30299;
var statearr_30308_30334 = state_30299__$1;
(statearr_30308_30334[(2)] = null);

(statearr_30308_30334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (17))){
var inst_30281 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
var statearr_30309_30335 = state_30299__$1;
(statearr_30309_30335[(2)] = inst_30281);

(statearr_30309_30335[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (3))){
var inst_30297 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30299__$1,inst_30297);
} else {
if((state_val_30300 === (12))){
var inst_30258 = (state_30299[(9)]);
var inst_30272 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30258,opts);
var state_30299__$1 = state_30299;
if(inst_30272){
var statearr_30310_30336 = state_30299__$1;
(statearr_30310_30336[(1)] = (15));

} else {
var statearr_30311_30337 = state_30299__$1;
(statearr_30311_30337[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (2))){
var state_30299__$1 = state_30299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30299__$1,(4),ch);
} else {
if((state_val_30300 === (11))){
var inst_30259 = (state_30299[(8)]);
var inst_30264 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30265 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30259);
var inst_30266 = cljs.core.async.timeout.call(null,(1000));
var inst_30267 = [inst_30265,inst_30266];
var inst_30268 = (new cljs.core.PersistentVector(null,2,(5),inst_30264,inst_30267,null));
var state_30299__$1 = state_30299;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30299__$1,(14),inst_30268);
} else {
if((state_val_30300 === (9))){
var inst_30259 = (state_30299[(8)]);
var inst_30285 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30286 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30259);
var inst_30287 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30286);
var inst_30288 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30287)].join('');
var inst_30289 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30288);
var state_30299__$1 = (function (){var statearr_30312 = state_30299;
(statearr_30312[(10)] = inst_30285);

return statearr_30312;
})();
var statearr_30313_30338 = state_30299__$1;
(statearr_30313_30338[(2)] = inst_30289);

(statearr_30313_30338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (5))){
var inst_30252 = (state_30299[(7)]);
var inst_30254 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30255 = (new cljs.core.PersistentArrayMap(null,2,inst_30254,null));
var inst_30256 = (new cljs.core.PersistentHashSet(null,inst_30255,null));
var inst_30257 = figwheel.client.focus_msgs.call(null,inst_30256,inst_30252);
var inst_30258 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30257);
var inst_30259 = cljs.core.first.call(null,inst_30257);
var inst_30260 = figwheel.client.autoload_QMARK_.call(null);
var state_30299__$1 = (function (){var statearr_30314 = state_30299;
(statearr_30314[(8)] = inst_30259);

(statearr_30314[(9)] = inst_30258);

return statearr_30314;
})();
if(cljs.core.truth_(inst_30260)){
var statearr_30315_30339 = state_30299__$1;
(statearr_30315_30339[(1)] = (8));

} else {
var statearr_30316_30340 = state_30299__$1;
(statearr_30316_30340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (14))){
var inst_30270 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
var statearr_30317_30341 = state_30299__$1;
(statearr_30317_30341[(2)] = inst_30270);

(statearr_30317_30341[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (16))){
var state_30299__$1 = state_30299;
var statearr_30318_30342 = state_30299__$1;
(statearr_30318_30342[(2)] = null);

(statearr_30318_30342[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (10))){
var inst_30291 = (state_30299[(2)]);
var state_30299__$1 = (function (){var statearr_30319 = state_30299;
(statearr_30319[(11)] = inst_30291);

return statearr_30319;
})();
var statearr_30320_30343 = state_30299__$1;
(statearr_30320_30343[(2)] = null);

(statearr_30320_30343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (8))){
var inst_30258 = (state_30299[(9)]);
var inst_30262 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30258,opts);
var state_30299__$1 = state_30299;
if(cljs.core.truth_(inst_30262)){
var statearr_30321_30344 = state_30299__$1;
(statearr_30321_30344[(1)] = (11));

} else {
var statearr_30322_30345 = state_30299__$1;
(statearr_30322_30345[(1)] = (12));

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
});})(c__25235__auto___30327,ch))
;
return ((function (switch__25140__auto__,c__25235__auto___30327,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25141__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25141__auto____0 = (function (){
var statearr_30323 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30323[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25141__auto__);

(statearr_30323[(1)] = (1));

return statearr_30323;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25141__auto____1 = (function (state_30299){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_30299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e30324){if((e30324 instanceof Object)){
var ex__25144__auto__ = e30324;
var statearr_30325_30346 = state_30299;
(statearr_30325_30346[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30347 = state_30299;
state_30299 = G__30347;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25141__auto__ = function(state_30299){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25141__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25141__auto____1.call(this,state_30299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25141__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25141__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___30327,ch))
})();
var state__25237__auto__ = (function (){var statearr_30326 = f__25236__auto__.call(null);
(statearr_30326[(6)] = c__25235__auto___30327);

return statearr_30326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___30327,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30348_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30348_SHARP_));
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
var base_path_30354 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30354){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30350 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30351 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30352 = true;
var _STAR_print_fn_STAR__temp_val__30353 = ((function (_STAR_print_newline_STAR__orig_val__30350,_STAR_print_fn_STAR__orig_val__30351,_STAR_print_newline_STAR__temp_val__30352,sb,base_path_30354){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__30350,_STAR_print_fn_STAR__orig_val__30351,_STAR_print_newline_STAR__temp_val__30352,sb,base_path_30354))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30352;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30353;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30351;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30350;
}}catch (e30349){if((e30349 instanceof Error)){
var e = e30349;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30354], null));
} else {
var e = e30349;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30354))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30355){
var map__30356 = p__30355;
var map__30356__$1 = (((((!((map__30356 == null))))?(((((map__30356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30356):map__30356);
var opts = map__30356__$1;
var build_id = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30356,map__30356__$1,opts,build_id){
return (function (p__30358){
var vec__30359 = p__30358;
var seq__30360 = cljs.core.seq.call(null,vec__30359);
var first__30361 = cljs.core.first.call(null,seq__30360);
var seq__30360__$1 = cljs.core.next.call(null,seq__30360);
var map__30362 = first__30361;
var map__30362__$1 = (((((!((map__30362 == null))))?(((((map__30362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30362):map__30362);
var msg = map__30362__$1;
var msg_name = cljs.core.get.call(null,map__30362__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30360__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30359,seq__30360,first__30361,seq__30360__$1,map__30362,map__30362__$1,msg,msg_name,_,map__30356,map__30356__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30359,seq__30360,first__30361,seq__30360__$1,map__30362,map__30362__$1,msg,msg_name,_,map__30356,map__30356__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30356,map__30356__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30364){
var vec__30365 = p__30364;
var seq__30366 = cljs.core.seq.call(null,vec__30365);
var first__30367 = cljs.core.first.call(null,seq__30366);
var seq__30366__$1 = cljs.core.next.call(null,seq__30366);
var map__30368 = first__30367;
var map__30368__$1 = (((((!((map__30368 == null))))?(((((map__30368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30368):map__30368);
var msg = map__30368__$1;
var msg_name = cljs.core.get.call(null,map__30368__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30366__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30370){
var map__30371 = p__30370;
var map__30371__$1 = (((((!((map__30371 == null))))?(((((map__30371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30371):map__30371);
var on_compile_warning = cljs.core.get.call(null,map__30371__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30371__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30371,map__30371__$1,on_compile_warning,on_compile_fail){
return (function (p__30373){
var vec__30374 = p__30373;
var seq__30375 = cljs.core.seq.call(null,vec__30374);
var first__30376 = cljs.core.first.call(null,seq__30375);
var seq__30375__$1 = cljs.core.next.call(null,seq__30375);
var map__30377 = first__30376;
var map__30377__$1 = (((((!((map__30377 == null))))?(((((map__30377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30377):map__30377);
var msg = map__30377__$1;
var msg_name = cljs.core.get.call(null,map__30377__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30375__$1;
var pred__30379 = cljs.core._EQ_;
var expr__30380 = msg_name;
if(cljs.core.truth_(pred__30379.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30380))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30379.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30380))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30371,map__30371__$1,on_compile_warning,on_compile_fail))
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
var c__25235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto__,msg_hist,msg_names,msg){
return (function (state_30469){
var state_val_30470 = (state_30469[(1)]);
if((state_val_30470 === (7))){
var inst_30389 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
if(cljs.core.truth_(inst_30389)){
var statearr_30471_30518 = state_30469__$1;
(statearr_30471_30518[(1)] = (8));

} else {
var statearr_30472_30519 = state_30469__$1;
(statearr_30472_30519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (20))){
var inst_30463 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
var statearr_30473_30520 = state_30469__$1;
(statearr_30473_30520[(2)] = inst_30463);

(statearr_30473_30520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (27))){
var inst_30459 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
var statearr_30474_30521 = state_30469__$1;
(statearr_30474_30521[(2)] = inst_30459);

(statearr_30474_30521[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (1))){
var inst_30382 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30469__$1 = state_30469;
if(cljs.core.truth_(inst_30382)){
var statearr_30475_30522 = state_30469__$1;
(statearr_30475_30522[(1)] = (2));

} else {
var statearr_30476_30523 = state_30469__$1;
(statearr_30476_30523[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (24))){
var inst_30461 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
var statearr_30477_30524 = state_30469__$1;
(statearr_30477_30524[(2)] = inst_30461);

(statearr_30477_30524[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (4))){
var inst_30467 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30469__$1,inst_30467);
} else {
if((state_val_30470 === (15))){
var inst_30465 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
var statearr_30478_30525 = state_30469__$1;
(statearr_30478_30525[(2)] = inst_30465);

(statearr_30478_30525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (21))){
var inst_30418 = (state_30469[(2)]);
var inst_30419 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30420 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30419);
var state_30469__$1 = (function (){var statearr_30479 = state_30469;
(statearr_30479[(7)] = inst_30418);

return statearr_30479;
})();
var statearr_30480_30526 = state_30469__$1;
(statearr_30480_30526[(2)] = inst_30420);

(statearr_30480_30526[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (31))){
var inst_30448 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30469__$1 = state_30469;
if(inst_30448){
var statearr_30481_30527 = state_30469__$1;
(statearr_30481_30527[(1)] = (34));

} else {
var statearr_30482_30528 = state_30469__$1;
(statearr_30482_30528[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (32))){
var inst_30457 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
var statearr_30483_30529 = state_30469__$1;
(statearr_30483_30529[(2)] = inst_30457);

(statearr_30483_30529[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (33))){
var inst_30444 = (state_30469[(2)]);
var inst_30445 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30446 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30445);
var state_30469__$1 = (function (){var statearr_30484 = state_30469;
(statearr_30484[(8)] = inst_30444);

return statearr_30484;
})();
var statearr_30485_30530 = state_30469__$1;
(statearr_30485_30530[(2)] = inst_30446);

(statearr_30485_30530[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (13))){
var inst_30403 = figwheel.client.heads_up.clear.call(null);
var state_30469__$1 = state_30469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30469__$1,(16),inst_30403);
} else {
if((state_val_30470 === (22))){
var inst_30424 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30425 = figwheel.client.heads_up.append_warning_message.call(null,inst_30424);
var state_30469__$1 = state_30469;
var statearr_30486_30531 = state_30469__$1;
(statearr_30486_30531[(2)] = inst_30425);

(statearr_30486_30531[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (36))){
var inst_30455 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
var statearr_30487_30532 = state_30469__$1;
(statearr_30487_30532[(2)] = inst_30455);

(statearr_30487_30532[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (29))){
var inst_30435 = (state_30469[(2)]);
var inst_30436 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30437 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30436);
var state_30469__$1 = (function (){var statearr_30488 = state_30469;
(statearr_30488[(9)] = inst_30435);

return statearr_30488;
})();
var statearr_30489_30533 = state_30469__$1;
(statearr_30489_30533[(2)] = inst_30437);

(statearr_30489_30533[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (6))){
var inst_30384 = (state_30469[(10)]);
var state_30469__$1 = state_30469;
var statearr_30490_30534 = state_30469__$1;
(statearr_30490_30534[(2)] = inst_30384);

(statearr_30490_30534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (28))){
var inst_30431 = (state_30469[(2)]);
var inst_30432 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30433 = figwheel.client.heads_up.display_warning.call(null,inst_30432);
var state_30469__$1 = (function (){var statearr_30491 = state_30469;
(statearr_30491[(11)] = inst_30431);

return statearr_30491;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30469__$1,(29),inst_30433);
} else {
if((state_val_30470 === (25))){
var inst_30429 = figwheel.client.heads_up.clear.call(null);
var state_30469__$1 = state_30469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30469__$1,(28),inst_30429);
} else {
if((state_val_30470 === (34))){
var inst_30450 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30469__$1 = state_30469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30469__$1,(37),inst_30450);
} else {
if((state_val_30470 === (17))){
var inst_30409 = (state_30469[(2)]);
var inst_30410 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30411 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30410);
var state_30469__$1 = (function (){var statearr_30492 = state_30469;
(statearr_30492[(12)] = inst_30409);

return statearr_30492;
})();
var statearr_30493_30535 = state_30469__$1;
(statearr_30493_30535[(2)] = inst_30411);

(statearr_30493_30535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (3))){
var inst_30401 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30469__$1 = state_30469;
if(inst_30401){
var statearr_30494_30536 = state_30469__$1;
(statearr_30494_30536[(1)] = (13));

} else {
var statearr_30495_30537 = state_30469__$1;
(statearr_30495_30537[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (12))){
var inst_30397 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
var statearr_30496_30538 = state_30469__$1;
(statearr_30496_30538[(2)] = inst_30397);

(statearr_30496_30538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (2))){
var inst_30384 = (state_30469[(10)]);
var inst_30384__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30469__$1 = (function (){var statearr_30497 = state_30469;
(statearr_30497[(10)] = inst_30384__$1);

return statearr_30497;
})();
if(cljs.core.truth_(inst_30384__$1)){
var statearr_30498_30539 = state_30469__$1;
(statearr_30498_30539[(1)] = (5));

} else {
var statearr_30499_30540 = state_30469__$1;
(statearr_30499_30540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (23))){
var inst_30427 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30469__$1 = state_30469;
if(inst_30427){
var statearr_30500_30541 = state_30469__$1;
(statearr_30500_30541[(1)] = (25));

} else {
var statearr_30501_30542 = state_30469__$1;
(statearr_30501_30542[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (35))){
var state_30469__$1 = state_30469;
var statearr_30502_30543 = state_30469__$1;
(statearr_30502_30543[(2)] = null);

(statearr_30502_30543[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (19))){
var inst_30422 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30469__$1 = state_30469;
if(inst_30422){
var statearr_30503_30544 = state_30469__$1;
(statearr_30503_30544[(1)] = (22));

} else {
var statearr_30504_30545 = state_30469__$1;
(statearr_30504_30545[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (11))){
var inst_30393 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
var statearr_30505_30546 = state_30469__$1;
(statearr_30505_30546[(2)] = inst_30393);

(statearr_30505_30546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (9))){
var inst_30395 = figwheel.client.heads_up.clear.call(null);
var state_30469__$1 = state_30469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30469__$1,(12),inst_30395);
} else {
if((state_val_30470 === (5))){
var inst_30386 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30469__$1 = state_30469;
var statearr_30506_30547 = state_30469__$1;
(statearr_30506_30547[(2)] = inst_30386);

(statearr_30506_30547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (14))){
var inst_30413 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30469__$1 = state_30469;
if(inst_30413){
var statearr_30507_30548 = state_30469__$1;
(statearr_30507_30548[(1)] = (18));

} else {
var statearr_30508_30549 = state_30469__$1;
(statearr_30508_30549[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (26))){
var inst_30439 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30469__$1 = state_30469;
if(inst_30439){
var statearr_30509_30550 = state_30469__$1;
(statearr_30509_30550[(1)] = (30));

} else {
var statearr_30510_30551 = state_30469__$1;
(statearr_30510_30551[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (16))){
var inst_30405 = (state_30469[(2)]);
var inst_30406 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30407 = figwheel.client.heads_up.display_exception.call(null,inst_30406);
var state_30469__$1 = (function (){var statearr_30511 = state_30469;
(statearr_30511[(13)] = inst_30405);

return statearr_30511;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30469__$1,(17),inst_30407);
} else {
if((state_val_30470 === (30))){
var inst_30441 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30442 = figwheel.client.heads_up.display_warning.call(null,inst_30441);
var state_30469__$1 = state_30469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30469__$1,(33),inst_30442);
} else {
if((state_val_30470 === (10))){
var inst_30399 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
var statearr_30512_30552 = state_30469__$1;
(statearr_30512_30552[(2)] = inst_30399);

(statearr_30512_30552[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (18))){
var inst_30415 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30416 = figwheel.client.heads_up.display_exception.call(null,inst_30415);
var state_30469__$1 = state_30469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30469__$1,(21),inst_30416);
} else {
if((state_val_30470 === (37))){
var inst_30452 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
var statearr_30513_30553 = state_30469__$1;
(statearr_30513_30553[(2)] = inst_30452);

(statearr_30513_30553[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (8))){
var inst_30391 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30469__$1 = state_30469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30469__$1,(11),inst_30391);
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
});})(c__25235__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25140__auto__,c__25235__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25141__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25141__auto____0 = (function (){
var statearr_30514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30514[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25141__auto__);

(statearr_30514[(1)] = (1));

return statearr_30514;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25141__auto____1 = (function (state_30469){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_30469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e30515){if((e30515 instanceof Object)){
var ex__25144__auto__ = e30515;
var statearr_30516_30554 = state_30469;
(statearr_30516_30554[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30555 = state_30469;
state_30469 = G__30555;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25141__auto__ = function(state_30469){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25141__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25141__auto____1.call(this,state_30469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25141__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25141__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto__,msg_hist,msg_names,msg))
})();
var state__25237__auto__ = (function (){var statearr_30517 = f__25236__auto__.call(null);
(statearr_30517[(6)] = c__25235__auto__);

return statearr_30517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto__,msg_hist,msg_names,msg))
);

return c__25235__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25235__auto___30584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___30584,ch){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___30584,ch){
return (function (state_30570){
var state_val_30571 = (state_30570[(1)]);
if((state_val_30571 === (1))){
var state_30570__$1 = state_30570;
var statearr_30572_30585 = state_30570__$1;
(statearr_30572_30585[(2)] = null);

(statearr_30572_30585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30571 === (2))){
var state_30570__$1 = state_30570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30570__$1,(4),ch);
} else {
if((state_val_30571 === (3))){
var inst_30568 = (state_30570[(2)]);
var state_30570__$1 = state_30570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30570__$1,inst_30568);
} else {
if((state_val_30571 === (4))){
var inst_30558 = (state_30570[(7)]);
var inst_30558__$1 = (state_30570[(2)]);
var state_30570__$1 = (function (){var statearr_30573 = state_30570;
(statearr_30573[(7)] = inst_30558__$1);

return statearr_30573;
})();
if(cljs.core.truth_(inst_30558__$1)){
var statearr_30574_30586 = state_30570__$1;
(statearr_30574_30586[(1)] = (5));

} else {
var statearr_30575_30587 = state_30570__$1;
(statearr_30575_30587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30571 === (5))){
var inst_30558 = (state_30570[(7)]);
var inst_30560 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30558);
var state_30570__$1 = state_30570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30570__$1,(8),inst_30560);
} else {
if((state_val_30571 === (6))){
var state_30570__$1 = state_30570;
var statearr_30576_30588 = state_30570__$1;
(statearr_30576_30588[(2)] = null);

(statearr_30576_30588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30571 === (7))){
var inst_30566 = (state_30570[(2)]);
var state_30570__$1 = state_30570;
var statearr_30577_30589 = state_30570__$1;
(statearr_30577_30589[(2)] = inst_30566);

(statearr_30577_30589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30571 === (8))){
var inst_30562 = (state_30570[(2)]);
var state_30570__$1 = (function (){var statearr_30578 = state_30570;
(statearr_30578[(8)] = inst_30562);

return statearr_30578;
})();
var statearr_30579_30590 = state_30570__$1;
(statearr_30579_30590[(2)] = null);

(statearr_30579_30590[(1)] = (2));


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
});})(c__25235__auto___30584,ch))
;
return ((function (switch__25140__auto__,c__25235__auto___30584,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25141__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25141__auto____0 = (function (){
var statearr_30580 = [null,null,null,null,null,null,null,null,null];
(statearr_30580[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25141__auto__);

(statearr_30580[(1)] = (1));

return statearr_30580;
});
var figwheel$client$heads_up_plugin_$_state_machine__25141__auto____1 = (function (state_30570){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_30570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e30581){if((e30581 instanceof Object)){
var ex__25144__auto__ = e30581;
var statearr_30582_30591 = state_30570;
(statearr_30582_30591[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30592 = state_30570;
state_30570 = G__30592;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25141__auto__ = function(state_30570){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25141__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25141__auto____1.call(this,state_30570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25141__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25141__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___30584,ch))
})();
var state__25237__auto__ = (function (){var statearr_30583 = f__25236__auto__.call(null);
(statearr_30583[(6)] = c__25235__auto___30584);

return statearr_30583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___30584,ch))
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
var c__25235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto__){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto__){
return (function (state_30598){
var state_val_30599 = (state_30598[(1)]);
if((state_val_30599 === (1))){
var inst_30593 = cljs.core.async.timeout.call(null,(3000));
var state_30598__$1 = state_30598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30598__$1,(2),inst_30593);
} else {
if((state_val_30599 === (2))){
var inst_30595 = (state_30598[(2)]);
var inst_30596 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30598__$1 = (function (){var statearr_30600 = state_30598;
(statearr_30600[(7)] = inst_30595);

return statearr_30600;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30598__$1,inst_30596);
} else {
return null;
}
}
});})(c__25235__auto__))
;
return ((function (switch__25140__auto__,c__25235__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25141__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25141__auto____0 = (function (){
var statearr_30601 = [null,null,null,null,null,null,null,null];
(statearr_30601[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25141__auto__);

(statearr_30601[(1)] = (1));

return statearr_30601;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25141__auto____1 = (function (state_30598){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_30598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e30602){if((e30602 instanceof Object)){
var ex__25144__auto__ = e30602;
var statearr_30603_30605 = state_30598;
(statearr_30603_30605[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30606 = state_30598;
state_30598 = G__30606;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25141__auto__ = function(state_30598){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25141__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25141__auto____1.call(this,state_30598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25141__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25141__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto__))
})();
var state__25237__auto__ = (function (){var statearr_30604 = f__25236__auto__.call(null);
(statearr_30604[(6)] = c__25235__auto__);

return statearr_30604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto__))
);

return c__25235__auto__;
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
var c__25235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto__,figwheel_version,temp__5720__auto__){
return (function (state_30613){
var state_val_30614 = (state_30613[(1)]);
if((state_val_30614 === (1))){
var inst_30607 = cljs.core.async.timeout.call(null,(2000));
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30613__$1,(2),inst_30607);
} else {
if((state_val_30614 === (2))){
var inst_30609 = (state_30613[(2)]);
var inst_30610 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30611 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30610);
var state_30613__$1 = (function (){var statearr_30615 = state_30613;
(statearr_30615[(7)] = inst_30609);

return statearr_30615;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30613__$1,inst_30611);
} else {
return null;
}
}
});})(c__25235__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__25140__auto__,c__25235__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25141__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25141__auto____0 = (function (){
var statearr_30616 = [null,null,null,null,null,null,null,null];
(statearr_30616[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25141__auto__);

(statearr_30616[(1)] = (1));

return statearr_30616;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25141__auto____1 = (function (state_30613){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_30613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e30617){if((e30617 instanceof Object)){
var ex__25144__auto__ = e30617;
var statearr_30618_30620 = state_30613;
(statearr_30618_30620[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30621 = state_30613;
state_30613 = G__30621;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25141__auto__ = function(state_30613){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25141__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25141__auto____1.call(this,state_30613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25141__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25141__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto__,figwheel_version,temp__5720__auto__))
})();
var state__25237__auto__ = (function (){var statearr_30619 = f__25236__auto__.call(null);
(statearr_30619[(6)] = c__25235__auto__);

return statearr_30619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto__,figwheel_version,temp__5720__auto__))
);

return c__25235__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30622){
var map__30623 = p__30622;
var map__30623__$1 = (((((!((map__30623 == null))))?(((((map__30623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30623):map__30623);
var file = cljs.core.get.call(null,map__30623__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30623__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30623__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30625 = "";
var G__30625__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30625),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30625);
var G__30625__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30625__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30625__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30625__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30625__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30626){
var map__30627 = p__30626;
var map__30627__$1 = (((((!((map__30627 == null))))?(((((map__30627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30627):map__30627);
var ed = map__30627__$1;
var formatted_exception = cljs.core.get.call(null,map__30627__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30627__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30627__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30629_30633 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30630_30634 = null;
var count__30631_30635 = (0);
var i__30632_30636 = (0);
while(true){
if((i__30632_30636 < count__30631_30635)){
var msg_30637 = cljs.core._nth.call(null,chunk__30630_30634,i__30632_30636);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30637);


var G__30638 = seq__30629_30633;
var G__30639 = chunk__30630_30634;
var G__30640 = count__30631_30635;
var G__30641 = (i__30632_30636 + (1));
seq__30629_30633 = G__30638;
chunk__30630_30634 = G__30639;
count__30631_30635 = G__30640;
i__30632_30636 = G__30641;
continue;
} else {
var temp__5720__auto___30642 = cljs.core.seq.call(null,seq__30629_30633);
if(temp__5720__auto___30642){
var seq__30629_30643__$1 = temp__5720__auto___30642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30629_30643__$1)){
var c__4461__auto___30644 = cljs.core.chunk_first.call(null,seq__30629_30643__$1);
var G__30645 = cljs.core.chunk_rest.call(null,seq__30629_30643__$1);
var G__30646 = c__4461__auto___30644;
var G__30647 = cljs.core.count.call(null,c__4461__auto___30644);
var G__30648 = (0);
seq__30629_30633 = G__30645;
chunk__30630_30634 = G__30646;
count__30631_30635 = G__30647;
i__30632_30636 = G__30648;
continue;
} else {
var msg_30649 = cljs.core.first.call(null,seq__30629_30643__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30649);


var G__30650 = cljs.core.next.call(null,seq__30629_30643__$1);
var G__30651 = null;
var G__30652 = (0);
var G__30653 = (0);
seq__30629_30633 = G__30650;
chunk__30630_30634 = G__30651;
count__30631_30635 = G__30652;
i__30632_30636 = G__30653;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30654){
var map__30655 = p__30654;
var map__30655__$1 = (((((!((map__30655 == null))))?(((((map__30655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30655):map__30655);
var w = map__30655__$1;
var message = cljs.core.get.call(null,map__30655__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__30657 = cljs.core.seq.call(null,plugins);
var chunk__30658 = null;
var count__30659 = (0);
var i__30660 = (0);
while(true){
if((i__30660 < count__30659)){
var vec__30661 = cljs.core._nth.call(null,chunk__30658,i__30660);
var k = cljs.core.nth.call(null,vec__30661,(0),null);
var plugin = cljs.core.nth.call(null,vec__30661,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30667 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30657,chunk__30658,count__30659,i__30660,pl_30667,vec__30661,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30667.call(null,msg_hist);
});})(seq__30657,chunk__30658,count__30659,i__30660,pl_30667,vec__30661,k,plugin))
);
} else {
}


var G__30668 = seq__30657;
var G__30669 = chunk__30658;
var G__30670 = count__30659;
var G__30671 = (i__30660 + (1));
seq__30657 = G__30668;
chunk__30658 = G__30669;
count__30659 = G__30670;
i__30660 = G__30671;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30657);
if(temp__5720__auto__){
var seq__30657__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30657__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30657__$1);
var G__30672 = cljs.core.chunk_rest.call(null,seq__30657__$1);
var G__30673 = c__4461__auto__;
var G__30674 = cljs.core.count.call(null,c__4461__auto__);
var G__30675 = (0);
seq__30657 = G__30672;
chunk__30658 = G__30673;
count__30659 = G__30674;
i__30660 = G__30675;
continue;
} else {
var vec__30664 = cljs.core.first.call(null,seq__30657__$1);
var k = cljs.core.nth.call(null,vec__30664,(0),null);
var plugin = cljs.core.nth.call(null,vec__30664,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30676 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30657,chunk__30658,count__30659,i__30660,pl_30676,vec__30664,k,plugin,seq__30657__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30676.call(null,msg_hist);
});})(seq__30657,chunk__30658,count__30659,i__30660,pl_30676,vec__30664,k,plugin,seq__30657__$1,temp__5720__auto__))
);
} else {
}


var G__30677 = cljs.core.next.call(null,seq__30657__$1);
var G__30678 = null;
var G__30679 = (0);
var G__30680 = (0);
seq__30657 = G__30677;
chunk__30658 = G__30678;
count__30659 = G__30679;
i__30660 = G__30680;
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
var G__30682 = arguments.length;
switch (G__30682) {
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

var seq__30683_30688 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30684_30689 = null;
var count__30685_30690 = (0);
var i__30686_30691 = (0);
while(true){
if((i__30686_30691 < count__30685_30690)){
var msg_30692 = cljs.core._nth.call(null,chunk__30684_30689,i__30686_30691);
figwheel.client.socket.handle_incoming_message.call(null,msg_30692);


var G__30693 = seq__30683_30688;
var G__30694 = chunk__30684_30689;
var G__30695 = count__30685_30690;
var G__30696 = (i__30686_30691 + (1));
seq__30683_30688 = G__30693;
chunk__30684_30689 = G__30694;
count__30685_30690 = G__30695;
i__30686_30691 = G__30696;
continue;
} else {
var temp__5720__auto___30697 = cljs.core.seq.call(null,seq__30683_30688);
if(temp__5720__auto___30697){
var seq__30683_30698__$1 = temp__5720__auto___30697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30683_30698__$1)){
var c__4461__auto___30699 = cljs.core.chunk_first.call(null,seq__30683_30698__$1);
var G__30700 = cljs.core.chunk_rest.call(null,seq__30683_30698__$1);
var G__30701 = c__4461__auto___30699;
var G__30702 = cljs.core.count.call(null,c__4461__auto___30699);
var G__30703 = (0);
seq__30683_30688 = G__30700;
chunk__30684_30689 = G__30701;
count__30685_30690 = G__30702;
i__30686_30691 = G__30703;
continue;
} else {
var msg_30704 = cljs.core.first.call(null,seq__30683_30698__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30704);


var G__30705 = cljs.core.next.call(null,seq__30683_30698__$1);
var G__30706 = null;
var G__30707 = (0);
var G__30708 = (0);
seq__30683_30688 = G__30705;
chunk__30684_30689 = G__30706;
count__30685_30690 = G__30707;
i__30686_30691 = G__30708;
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
var len__4641__auto___30713 = arguments.length;
var i__4642__auto___30714 = (0);
while(true){
if((i__4642__auto___30714 < len__4641__auto___30713)){
args__4647__auto__.push((arguments[i__4642__auto___30714]));

var G__30715 = (i__4642__auto___30714 + (1));
i__4642__auto___30714 = G__30715;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30710){
var map__30711 = p__30710;
var map__30711__$1 = (((((!((map__30711 == null))))?(((((map__30711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30711):map__30711);
var opts = map__30711__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30709){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30709));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30716){if((e30716 instanceof Error)){
var e = e30716;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30716;

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
return (function (p__30717){
var map__30718 = p__30717;
var map__30718__$1 = (((((!((map__30718 == null))))?(((((map__30718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30718):map__30718);
var msg_name = cljs.core.get.call(null,map__30718__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1545905850436
