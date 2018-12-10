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
}catch (e30181){if((e30181 instanceof Error)){
var e = e30181;
return "Error: Unable to stringify";
} else {
throw e30181;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30184 = arguments.length;
switch (G__30184) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30182_SHARP_){
if(typeof p1__30182_SHARP_ === 'string'){
return p1__30182_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30182_SHARP_);
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
var len__4641__auto___30187 = arguments.length;
var i__4642__auto___30188 = (0);
while(true){
if((i__4642__auto___30188 < len__4641__auto___30187)){
args__4647__auto__.push((arguments[i__4642__auto___30188]));

var G__30189 = (i__4642__auto___30188 + (1));
i__4642__auto___30188 = G__30189;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30186){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30186));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30191 = arguments.length;
var i__4642__auto___30192 = (0);
while(true){
if((i__4642__auto___30192 < len__4641__auto___30191)){
args__4647__auto__.push((arguments[i__4642__auto___30192]));

var G__30193 = (i__4642__auto___30192 + (1));
i__4642__auto___30192 = G__30193;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30190){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30190));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30194){
var map__30195 = p__30194;
var map__30195__$1 = (((((!((map__30195 == null))))?(((((map__30195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30195):map__30195);
var message = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__25080__auto___30274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___30274,ch){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___30274,ch){
return (function (state_30246){
var state_val_30247 = (state_30246[(1)]);
if((state_val_30247 === (7))){
var inst_30242 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
var statearr_30248_30275 = state_30246__$1;
(statearr_30248_30275[(2)] = inst_30242);

(statearr_30248_30275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (1))){
var state_30246__$1 = state_30246;
var statearr_30249_30276 = state_30246__$1;
(statearr_30249_30276[(2)] = null);

(statearr_30249_30276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (4))){
var inst_30199 = (state_30246[(7)]);
var inst_30199__$1 = (state_30246[(2)]);
var state_30246__$1 = (function (){var statearr_30250 = state_30246;
(statearr_30250[(7)] = inst_30199__$1);

return statearr_30250;
})();
if(cljs.core.truth_(inst_30199__$1)){
var statearr_30251_30277 = state_30246__$1;
(statearr_30251_30277[(1)] = (5));

} else {
var statearr_30252_30278 = state_30246__$1;
(statearr_30252_30278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (15))){
var inst_30206 = (state_30246[(8)]);
var inst_30221 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30206);
var inst_30222 = cljs.core.first.call(null,inst_30221);
var inst_30223 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30222);
var inst_30224 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30223)].join('');
var inst_30225 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30224);
var state_30246__$1 = state_30246;
var statearr_30253_30279 = state_30246__$1;
(statearr_30253_30279[(2)] = inst_30225);

(statearr_30253_30279[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (13))){
var inst_30230 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
var statearr_30254_30280 = state_30246__$1;
(statearr_30254_30280[(2)] = inst_30230);

(statearr_30254_30280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (6))){
var state_30246__$1 = state_30246;
var statearr_30255_30281 = state_30246__$1;
(statearr_30255_30281[(2)] = null);

(statearr_30255_30281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (17))){
var inst_30228 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
var statearr_30256_30282 = state_30246__$1;
(statearr_30256_30282[(2)] = inst_30228);

(statearr_30256_30282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (3))){
var inst_30244 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30246__$1,inst_30244);
} else {
if((state_val_30247 === (12))){
var inst_30205 = (state_30246[(9)]);
var inst_30219 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30205,opts);
var state_30246__$1 = state_30246;
if(inst_30219){
var statearr_30257_30283 = state_30246__$1;
(statearr_30257_30283[(1)] = (15));

} else {
var statearr_30258_30284 = state_30246__$1;
(statearr_30258_30284[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (2))){
var state_30246__$1 = state_30246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30246__$1,(4),ch);
} else {
if((state_val_30247 === (11))){
var inst_30206 = (state_30246[(8)]);
var inst_30211 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30212 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30206);
var inst_30213 = cljs.core.async.timeout.call(null,(1000));
var inst_30214 = [inst_30212,inst_30213];
var inst_30215 = (new cljs.core.PersistentVector(null,2,(5),inst_30211,inst_30214,null));
var state_30246__$1 = state_30246;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30246__$1,(14),inst_30215);
} else {
if((state_val_30247 === (9))){
var inst_30206 = (state_30246[(8)]);
var inst_30232 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30233 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30206);
var inst_30234 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30233);
var inst_30235 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30234)].join('');
var inst_30236 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30235);
var state_30246__$1 = (function (){var statearr_30259 = state_30246;
(statearr_30259[(10)] = inst_30232);

return statearr_30259;
})();
var statearr_30260_30285 = state_30246__$1;
(statearr_30260_30285[(2)] = inst_30236);

(statearr_30260_30285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (5))){
var inst_30199 = (state_30246[(7)]);
var inst_30201 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30202 = (new cljs.core.PersistentArrayMap(null,2,inst_30201,null));
var inst_30203 = (new cljs.core.PersistentHashSet(null,inst_30202,null));
var inst_30204 = figwheel.client.focus_msgs.call(null,inst_30203,inst_30199);
var inst_30205 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30204);
var inst_30206 = cljs.core.first.call(null,inst_30204);
var inst_30207 = figwheel.client.autoload_QMARK_.call(null);
var state_30246__$1 = (function (){var statearr_30261 = state_30246;
(statearr_30261[(9)] = inst_30205);

(statearr_30261[(8)] = inst_30206);

return statearr_30261;
})();
if(cljs.core.truth_(inst_30207)){
var statearr_30262_30286 = state_30246__$1;
(statearr_30262_30286[(1)] = (8));

} else {
var statearr_30263_30287 = state_30246__$1;
(statearr_30263_30287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (14))){
var inst_30217 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
var statearr_30264_30288 = state_30246__$1;
(statearr_30264_30288[(2)] = inst_30217);

(statearr_30264_30288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (16))){
var state_30246__$1 = state_30246;
var statearr_30265_30289 = state_30246__$1;
(statearr_30265_30289[(2)] = null);

(statearr_30265_30289[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (10))){
var inst_30238 = (state_30246[(2)]);
var state_30246__$1 = (function (){var statearr_30266 = state_30246;
(statearr_30266[(11)] = inst_30238);

return statearr_30266;
})();
var statearr_30267_30290 = state_30246__$1;
(statearr_30267_30290[(2)] = null);

(statearr_30267_30290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (8))){
var inst_30205 = (state_30246[(9)]);
var inst_30209 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30205,opts);
var state_30246__$1 = state_30246;
if(cljs.core.truth_(inst_30209)){
var statearr_30268_30291 = state_30246__$1;
(statearr_30268_30291[(1)] = (11));

} else {
var statearr_30269_30292 = state_30246__$1;
(statearr_30269_30292[(1)] = (12));

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
});})(c__25080__auto___30274,ch))
;
return ((function (switch__24985__auto__,c__25080__auto___30274,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24986__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24986__auto____0 = (function (){
var statearr_30270 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30270[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24986__auto__);

(statearr_30270[(1)] = (1));

return statearr_30270;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24986__auto____1 = (function (state_30246){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_30246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e30271){if((e30271 instanceof Object)){
var ex__24989__auto__ = e30271;
var statearr_30272_30293 = state_30246;
(statearr_30272_30293[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30294 = state_30246;
state_30246 = G__30294;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24986__auto__ = function(state_30246){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24986__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24986__auto____1.call(this,state_30246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24986__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24986__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___30274,ch))
})();
var state__25082__auto__ = (function (){var statearr_30273 = f__25081__auto__.call(null);
(statearr_30273[(6)] = c__25080__auto___30274);

return statearr_30273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___30274,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30295_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30295_SHARP_));
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
var base_path_30301 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30301){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30297 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30298 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30299 = true;
var _STAR_print_fn_STAR__temp_val__30300 = ((function (_STAR_print_newline_STAR__orig_val__30297,_STAR_print_fn_STAR__orig_val__30298,_STAR_print_newline_STAR__temp_val__30299,sb,base_path_30301){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__30297,_STAR_print_fn_STAR__orig_val__30298,_STAR_print_newline_STAR__temp_val__30299,sb,base_path_30301))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30299;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30300;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30298;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30297;
}}catch (e30296){if((e30296 instanceof Error)){
var e = e30296;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30301], null));
} else {
var e = e30296;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30301))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30302){
var map__30303 = p__30302;
var map__30303__$1 = (((((!((map__30303 == null))))?(((((map__30303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30303):map__30303);
var opts = map__30303__$1;
var build_id = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30303,map__30303__$1,opts,build_id){
return (function (p__30305){
var vec__30306 = p__30305;
var seq__30307 = cljs.core.seq.call(null,vec__30306);
var first__30308 = cljs.core.first.call(null,seq__30307);
var seq__30307__$1 = cljs.core.next.call(null,seq__30307);
var map__30309 = first__30308;
var map__30309__$1 = (((((!((map__30309 == null))))?(((((map__30309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30309):map__30309);
var msg = map__30309__$1;
var msg_name = cljs.core.get.call(null,map__30309__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30307__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30306,seq__30307,first__30308,seq__30307__$1,map__30309,map__30309__$1,msg,msg_name,_,map__30303,map__30303__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30306,seq__30307,first__30308,seq__30307__$1,map__30309,map__30309__$1,msg,msg_name,_,map__30303,map__30303__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30303,map__30303__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30311){
var vec__30312 = p__30311;
var seq__30313 = cljs.core.seq.call(null,vec__30312);
var first__30314 = cljs.core.first.call(null,seq__30313);
var seq__30313__$1 = cljs.core.next.call(null,seq__30313);
var map__30315 = first__30314;
var map__30315__$1 = (((((!((map__30315 == null))))?(((((map__30315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30315):map__30315);
var msg = map__30315__$1;
var msg_name = cljs.core.get.call(null,map__30315__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30313__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30317){
var map__30318 = p__30317;
var map__30318__$1 = (((((!((map__30318 == null))))?(((((map__30318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30318):map__30318);
var on_compile_warning = cljs.core.get.call(null,map__30318__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30318__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30318,map__30318__$1,on_compile_warning,on_compile_fail){
return (function (p__30320){
var vec__30321 = p__30320;
var seq__30322 = cljs.core.seq.call(null,vec__30321);
var first__30323 = cljs.core.first.call(null,seq__30322);
var seq__30322__$1 = cljs.core.next.call(null,seq__30322);
var map__30324 = first__30323;
var map__30324__$1 = (((((!((map__30324 == null))))?(((((map__30324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30324):map__30324);
var msg = map__30324__$1;
var msg_name = cljs.core.get.call(null,map__30324__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30322__$1;
var pred__30326 = cljs.core._EQ_;
var expr__30327 = msg_name;
if(cljs.core.truth_(pred__30326.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30327))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30326.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30327))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30318,map__30318__$1,on_compile_warning,on_compile_fail))
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
var c__25080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto__,msg_hist,msg_names,msg){
return (function (state_30416){
var state_val_30417 = (state_30416[(1)]);
if((state_val_30417 === (7))){
var inst_30336 = (state_30416[(2)]);
var state_30416__$1 = state_30416;
if(cljs.core.truth_(inst_30336)){
var statearr_30418_30465 = state_30416__$1;
(statearr_30418_30465[(1)] = (8));

} else {
var statearr_30419_30466 = state_30416__$1;
(statearr_30419_30466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (20))){
var inst_30410 = (state_30416[(2)]);
var state_30416__$1 = state_30416;
var statearr_30420_30467 = state_30416__$1;
(statearr_30420_30467[(2)] = inst_30410);

(statearr_30420_30467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (27))){
var inst_30406 = (state_30416[(2)]);
var state_30416__$1 = state_30416;
var statearr_30421_30468 = state_30416__$1;
(statearr_30421_30468[(2)] = inst_30406);

(statearr_30421_30468[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (1))){
var inst_30329 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30416__$1 = state_30416;
if(cljs.core.truth_(inst_30329)){
var statearr_30422_30469 = state_30416__$1;
(statearr_30422_30469[(1)] = (2));

} else {
var statearr_30423_30470 = state_30416__$1;
(statearr_30423_30470[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (24))){
var inst_30408 = (state_30416[(2)]);
var state_30416__$1 = state_30416;
var statearr_30424_30471 = state_30416__$1;
(statearr_30424_30471[(2)] = inst_30408);

(statearr_30424_30471[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (4))){
var inst_30414 = (state_30416[(2)]);
var state_30416__$1 = state_30416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30416__$1,inst_30414);
} else {
if((state_val_30417 === (15))){
var inst_30412 = (state_30416[(2)]);
var state_30416__$1 = state_30416;
var statearr_30425_30472 = state_30416__$1;
(statearr_30425_30472[(2)] = inst_30412);

(statearr_30425_30472[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (21))){
var inst_30365 = (state_30416[(2)]);
var inst_30366 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30367 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30366);
var state_30416__$1 = (function (){var statearr_30426 = state_30416;
(statearr_30426[(7)] = inst_30365);

return statearr_30426;
})();
var statearr_30427_30473 = state_30416__$1;
(statearr_30427_30473[(2)] = inst_30367);

(statearr_30427_30473[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (31))){
var inst_30395 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30416__$1 = state_30416;
if(inst_30395){
var statearr_30428_30474 = state_30416__$1;
(statearr_30428_30474[(1)] = (34));

} else {
var statearr_30429_30475 = state_30416__$1;
(statearr_30429_30475[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (32))){
var inst_30404 = (state_30416[(2)]);
var state_30416__$1 = state_30416;
var statearr_30430_30476 = state_30416__$1;
(statearr_30430_30476[(2)] = inst_30404);

(statearr_30430_30476[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (33))){
var inst_30391 = (state_30416[(2)]);
var inst_30392 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30393 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30392);
var state_30416__$1 = (function (){var statearr_30431 = state_30416;
(statearr_30431[(8)] = inst_30391);

return statearr_30431;
})();
var statearr_30432_30477 = state_30416__$1;
(statearr_30432_30477[(2)] = inst_30393);

(statearr_30432_30477[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (13))){
var inst_30350 = figwheel.client.heads_up.clear.call(null);
var state_30416__$1 = state_30416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30416__$1,(16),inst_30350);
} else {
if((state_val_30417 === (22))){
var inst_30371 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30372 = figwheel.client.heads_up.append_warning_message.call(null,inst_30371);
var state_30416__$1 = state_30416;
var statearr_30433_30478 = state_30416__$1;
(statearr_30433_30478[(2)] = inst_30372);

(statearr_30433_30478[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (36))){
var inst_30402 = (state_30416[(2)]);
var state_30416__$1 = state_30416;
var statearr_30434_30479 = state_30416__$1;
(statearr_30434_30479[(2)] = inst_30402);

(statearr_30434_30479[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (29))){
var inst_30382 = (state_30416[(2)]);
var inst_30383 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30384 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30383);
var state_30416__$1 = (function (){var statearr_30435 = state_30416;
(statearr_30435[(9)] = inst_30382);

return statearr_30435;
})();
var statearr_30436_30480 = state_30416__$1;
(statearr_30436_30480[(2)] = inst_30384);

(statearr_30436_30480[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (6))){
var inst_30331 = (state_30416[(10)]);
var state_30416__$1 = state_30416;
var statearr_30437_30481 = state_30416__$1;
(statearr_30437_30481[(2)] = inst_30331);

(statearr_30437_30481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (28))){
var inst_30378 = (state_30416[(2)]);
var inst_30379 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30380 = figwheel.client.heads_up.display_warning.call(null,inst_30379);
var state_30416__$1 = (function (){var statearr_30438 = state_30416;
(statearr_30438[(11)] = inst_30378);

return statearr_30438;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30416__$1,(29),inst_30380);
} else {
if((state_val_30417 === (25))){
var inst_30376 = figwheel.client.heads_up.clear.call(null);
var state_30416__$1 = state_30416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30416__$1,(28),inst_30376);
} else {
if((state_val_30417 === (34))){
var inst_30397 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30416__$1 = state_30416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30416__$1,(37),inst_30397);
} else {
if((state_val_30417 === (17))){
var inst_30356 = (state_30416[(2)]);
var inst_30357 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30358 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30357);
var state_30416__$1 = (function (){var statearr_30439 = state_30416;
(statearr_30439[(12)] = inst_30356);

return statearr_30439;
})();
var statearr_30440_30482 = state_30416__$1;
(statearr_30440_30482[(2)] = inst_30358);

(statearr_30440_30482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (3))){
var inst_30348 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30416__$1 = state_30416;
if(inst_30348){
var statearr_30441_30483 = state_30416__$1;
(statearr_30441_30483[(1)] = (13));

} else {
var statearr_30442_30484 = state_30416__$1;
(statearr_30442_30484[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (12))){
var inst_30344 = (state_30416[(2)]);
var state_30416__$1 = state_30416;
var statearr_30443_30485 = state_30416__$1;
(statearr_30443_30485[(2)] = inst_30344);

(statearr_30443_30485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (2))){
var inst_30331 = (state_30416[(10)]);
var inst_30331__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30416__$1 = (function (){var statearr_30444 = state_30416;
(statearr_30444[(10)] = inst_30331__$1);

return statearr_30444;
})();
if(cljs.core.truth_(inst_30331__$1)){
var statearr_30445_30486 = state_30416__$1;
(statearr_30445_30486[(1)] = (5));

} else {
var statearr_30446_30487 = state_30416__$1;
(statearr_30446_30487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (23))){
var inst_30374 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30416__$1 = state_30416;
if(inst_30374){
var statearr_30447_30488 = state_30416__$1;
(statearr_30447_30488[(1)] = (25));

} else {
var statearr_30448_30489 = state_30416__$1;
(statearr_30448_30489[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (35))){
var state_30416__$1 = state_30416;
var statearr_30449_30490 = state_30416__$1;
(statearr_30449_30490[(2)] = null);

(statearr_30449_30490[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (19))){
var inst_30369 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30416__$1 = state_30416;
if(inst_30369){
var statearr_30450_30491 = state_30416__$1;
(statearr_30450_30491[(1)] = (22));

} else {
var statearr_30451_30492 = state_30416__$1;
(statearr_30451_30492[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (11))){
var inst_30340 = (state_30416[(2)]);
var state_30416__$1 = state_30416;
var statearr_30452_30493 = state_30416__$1;
(statearr_30452_30493[(2)] = inst_30340);

(statearr_30452_30493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (9))){
var inst_30342 = figwheel.client.heads_up.clear.call(null);
var state_30416__$1 = state_30416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30416__$1,(12),inst_30342);
} else {
if((state_val_30417 === (5))){
var inst_30333 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30416__$1 = state_30416;
var statearr_30453_30494 = state_30416__$1;
(statearr_30453_30494[(2)] = inst_30333);

(statearr_30453_30494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (14))){
var inst_30360 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30416__$1 = state_30416;
if(inst_30360){
var statearr_30454_30495 = state_30416__$1;
(statearr_30454_30495[(1)] = (18));

} else {
var statearr_30455_30496 = state_30416__$1;
(statearr_30455_30496[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (26))){
var inst_30386 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30416__$1 = state_30416;
if(inst_30386){
var statearr_30456_30497 = state_30416__$1;
(statearr_30456_30497[(1)] = (30));

} else {
var statearr_30457_30498 = state_30416__$1;
(statearr_30457_30498[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (16))){
var inst_30352 = (state_30416[(2)]);
var inst_30353 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30354 = figwheel.client.heads_up.display_exception.call(null,inst_30353);
var state_30416__$1 = (function (){var statearr_30458 = state_30416;
(statearr_30458[(13)] = inst_30352);

return statearr_30458;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30416__$1,(17),inst_30354);
} else {
if((state_val_30417 === (30))){
var inst_30388 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30389 = figwheel.client.heads_up.display_warning.call(null,inst_30388);
var state_30416__$1 = state_30416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30416__$1,(33),inst_30389);
} else {
if((state_val_30417 === (10))){
var inst_30346 = (state_30416[(2)]);
var state_30416__$1 = state_30416;
var statearr_30459_30499 = state_30416__$1;
(statearr_30459_30499[(2)] = inst_30346);

(statearr_30459_30499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (18))){
var inst_30362 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30363 = figwheel.client.heads_up.display_exception.call(null,inst_30362);
var state_30416__$1 = state_30416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30416__$1,(21),inst_30363);
} else {
if((state_val_30417 === (37))){
var inst_30399 = (state_30416[(2)]);
var state_30416__$1 = state_30416;
var statearr_30460_30500 = state_30416__$1;
(statearr_30460_30500[(2)] = inst_30399);

(statearr_30460_30500[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30417 === (8))){
var inst_30338 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30416__$1 = state_30416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30416__$1,(11),inst_30338);
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
});})(c__25080__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24985__auto__,c__25080__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24986__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24986__auto____0 = (function (){
var statearr_30461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30461[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24986__auto__);

(statearr_30461[(1)] = (1));

return statearr_30461;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24986__auto____1 = (function (state_30416){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_30416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e30462){if((e30462 instanceof Object)){
var ex__24989__auto__ = e30462;
var statearr_30463_30501 = state_30416;
(statearr_30463_30501[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30502 = state_30416;
state_30416 = G__30502;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24986__auto__ = function(state_30416){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24986__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24986__auto____1.call(this,state_30416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24986__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24986__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto__,msg_hist,msg_names,msg))
})();
var state__25082__auto__ = (function (){var statearr_30464 = f__25081__auto__.call(null);
(statearr_30464[(6)] = c__25080__auto__);

return statearr_30464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto__,msg_hist,msg_names,msg))
);

return c__25080__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25080__auto___30531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___30531,ch){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___30531,ch){
return (function (state_30517){
var state_val_30518 = (state_30517[(1)]);
if((state_val_30518 === (1))){
var state_30517__$1 = state_30517;
var statearr_30519_30532 = state_30517__$1;
(statearr_30519_30532[(2)] = null);

(statearr_30519_30532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30518 === (2))){
var state_30517__$1 = state_30517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30517__$1,(4),ch);
} else {
if((state_val_30518 === (3))){
var inst_30515 = (state_30517[(2)]);
var state_30517__$1 = state_30517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30517__$1,inst_30515);
} else {
if((state_val_30518 === (4))){
var inst_30505 = (state_30517[(7)]);
var inst_30505__$1 = (state_30517[(2)]);
var state_30517__$1 = (function (){var statearr_30520 = state_30517;
(statearr_30520[(7)] = inst_30505__$1);

return statearr_30520;
})();
if(cljs.core.truth_(inst_30505__$1)){
var statearr_30521_30533 = state_30517__$1;
(statearr_30521_30533[(1)] = (5));

} else {
var statearr_30522_30534 = state_30517__$1;
(statearr_30522_30534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30518 === (5))){
var inst_30505 = (state_30517[(7)]);
var inst_30507 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30505);
var state_30517__$1 = state_30517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30517__$1,(8),inst_30507);
} else {
if((state_val_30518 === (6))){
var state_30517__$1 = state_30517;
var statearr_30523_30535 = state_30517__$1;
(statearr_30523_30535[(2)] = null);

(statearr_30523_30535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30518 === (7))){
var inst_30513 = (state_30517[(2)]);
var state_30517__$1 = state_30517;
var statearr_30524_30536 = state_30517__$1;
(statearr_30524_30536[(2)] = inst_30513);

(statearr_30524_30536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30518 === (8))){
var inst_30509 = (state_30517[(2)]);
var state_30517__$1 = (function (){var statearr_30525 = state_30517;
(statearr_30525[(8)] = inst_30509);

return statearr_30525;
})();
var statearr_30526_30537 = state_30517__$1;
(statearr_30526_30537[(2)] = null);

(statearr_30526_30537[(1)] = (2));


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
});})(c__25080__auto___30531,ch))
;
return ((function (switch__24985__auto__,c__25080__auto___30531,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24986__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24986__auto____0 = (function (){
var statearr_30527 = [null,null,null,null,null,null,null,null,null];
(statearr_30527[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24986__auto__);

(statearr_30527[(1)] = (1));

return statearr_30527;
});
var figwheel$client$heads_up_plugin_$_state_machine__24986__auto____1 = (function (state_30517){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_30517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e30528){if((e30528 instanceof Object)){
var ex__24989__auto__ = e30528;
var statearr_30529_30538 = state_30517;
(statearr_30529_30538[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30539 = state_30517;
state_30517 = G__30539;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24986__auto__ = function(state_30517){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24986__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24986__auto____1.call(this,state_30517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24986__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24986__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___30531,ch))
})();
var state__25082__auto__ = (function (){var statearr_30530 = f__25081__auto__.call(null);
(statearr_30530[(6)] = c__25080__auto___30531);

return statearr_30530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___30531,ch))
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
var c__25080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto__){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto__){
return (function (state_30545){
var state_val_30546 = (state_30545[(1)]);
if((state_val_30546 === (1))){
var inst_30540 = cljs.core.async.timeout.call(null,(3000));
var state_30545__$1 = state_30545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30545__$1,(2),inst_30540);
} else {
if((state_val_30546 === (2))){
var inst_30542 = (state_30545[(2)]);
var inst_30543 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30545__$1 = (function (){var statearr_30547 = state_30545;
(statearr_30547[(7)] = inst_30542);

return statearr_30547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30545__$1,inst_30543);
} else {
return null;
}
}
});})(c__25080__auto__))
;
return ((function (switch__24985__auto__,c__25080__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24986__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24986__auto____0 = (function (){
var statearr_30548 = [null,null,null,null,null,null,null,null];
(statearr_30548[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24986__auto__);

(statearr_30548[(1)] = (1));

return statearr_30548;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24986__auto____1 = (function (state_30545){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_30545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e30549){if((e30549 instanceof Object)){
var ex__24989__auto__ = e30549;
var statearr_30550_30552 = state_30545;
(statearr_30550_30552[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30553 = state_30545;
state_30545 = G__30553;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24986__auto__ = function(state_30545){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24986__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24986__auto____1.call(this,state_30545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24986__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24986__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto__))
})();
var state__25082__auto__ = (function (){var statearr_30551 = f__25081__auto__.call(null);
(statearr_30551[(6)] = c__25080__auto__);

return statearr_30551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto__))
);

return c__25080__auto__;
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
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto__,figwheel_version,temp__5457__auto__){
return (function (state_30560){
var state_val_30561 = (state_30560[(1)]);
if((state_val_30561 === (1))){
var inst_30554 = cljs.core.async.timeout.call(null,(2000));
var state_30560__$1 = state_30560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30560__$1,(2),inst_30554);
} else {
if((state_val_30561 === (2))){
var inst_30556 = (state_30560[(2)]);
var inst_30557 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30558 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30557);
var state_30560__$1 = (function (){var statearr_30562 = state_30560;
(statearr_30562[(7)] = inst_30556);

return statearr_30562;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30560__$1,inst_30558);
} else {
return null;
}
}
});})(c__25080__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__24985__auto__,c__25080__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24986__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24986__auto____0 = (function (){
var statearr_30563 = [null,null,null,null,null,null,null,null];
(statearr_30563[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24986__auto__);

(statearr_30563[(1)] = (1));

return statearr_30563;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24986__auto____1 = (function (state_30560){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_30560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e30564){if((e30564 instanceof Object)){
var ex__24989__auto__ = e30564;
var statearr_30565_30567 = state_30560;
(statearr_30565_30567[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30568 = state_30560;
state_30560 = G__30568;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24986__auto__ = function(state_30560){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24986__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24986__auto____1.call(this,state_30560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24986__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24986__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto__,figwheel_version,temp__5457__auto__))
})();
var state__25082__auto__ = (function (){var statearr_30566 = f__25081__auto__.call(null);
(statearr_30566[(6)] = c__25080__auto__);

return statearr_30566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto__,figwheel_version,temp__5457__auto__))
);

return c__25080__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30569){
var map__30570 = p__30569;
var map__30570__$1 = (((((!((map__30570 == null))))?(((((map__30570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30570):map__30570);
var file = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30572 = "";
var G__30572__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30572),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30572);
var G__30572__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30572__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30572__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30572__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30572__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30573){
var map__30574 = p__30573;
var map__30574__$1 = (((((!((map__30574 == null))))?(((((map__30574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30574):map__30574);
var ed = map__30574__$1;
var formatted_exception = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30576_30580 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30577_30581 = null;
var count__30578_30582 = (0);
var i__30579_30583 = (0);
while(true){
if((i__30579_30583 < count__30578_30582)){
var msg_30584 = cljs.core._nth.call(null,chunk__30577_30581,i__30579_30583);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30584);


var G__30585 = seq__30576_30580;
var G__30586 = chunk__30577_30581;
var G__30587 = count__30578_30582;
var G__30588 = (i__30579_30583 + (1));
seq__30576_30580 = G__30585;
chunk__30577_30581 = G__30586;
count__30578_30582 = G__30587;
i__30579_30583 = G__30588;
continue;
} else {
var temp__5457__auto___30589 = cljs.core.seq.call(null,seq__30576_30580);
if(temp__5457__auto___30589){
var seq__30576_30590__$1 = temp__5457__auto___30589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30576_30590__$1)){
var c__4461__auto___30591 = cljs.core.chunk_first.call(null,seq__30576_30590__$1);
var G__30592 = cljs.core.chunk_rest.call(null,seq__30576_30590__$1);
var G__30593 = c__4461__auto___30591;
var G__30594 = cljs.core.count.call(null,c__4461__auto___30591);
var G__30595 = (0);
seq__30576_30580 = G__30592;
chunk__30577_30581 = G__30593;
count__30578_30582 = G__30594;
i__30579_30583 = G__30595;
continue;
} else {
var msg_30596 = cljs.core.first.call(null,seq__30576_30590__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30596);


var G__30597 = cljs.core.next.call(null,seq__30576_30590__$1);
var G__30598 = null;
var G__30599 = (0);
var G__30600 = (0);
seq__30576_30580 = G__30597;
chunk__30577_30581 = G__30598;
count__30578_30582 = G__30599;
i__30579_30583 = G__30600;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30601){
var map__30602 = p__30601;
var map__30602__$1 = (((((!((map__30602 == null))))?(((((map__30602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30602):map__30602);
var w = map__30602__$1;
var message = cljs.core.get.call(null,map__30602__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__30604 = cljs.core.seq.call(null,plugins);
var chunk__30605 = null;
var count__30606 = (0);
var i__30607 = (0);
while(true){
if((i__30607 < count__30606)){
var vec__30608 = cljs.core._nth.call(null,chunk__30605,i__30607);
var k = cljs.core.nth.call(null,vec__30608,(0),null);
var plugin = cljs.core.nth.call(null,vec__30608,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30614 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30604,chunk__30605,count__30606,i__30607,pl_30614,vec__30608,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30614.call(null,msg_hist);
});})(seq__30604,chunk__30605,count__30606,i__30607,pl_30614,vec__30608,k,plugin))
);
} else {
}


var G__30615 = seq__30604;
var G__30616 = chunk__30605;
var G__30617 = count__30606;
var G__30618 = (i__30607 + (1));
seq__30604 = G__30615;
chunk__30605 = G__30616;
count__30606 = G__30617;
i__30607 = G__30618;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30604);
if(temp__5457__auto__){
var seq__30604__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30604__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30604__$1);
var G__30619 = cljs.core.chunk_rest.call(null,seq__30604__$1);
var G__30620 = c__4461__auto__;
var G__30621 = cljs.core.count.call(null,c__4461__auto__);
var G__30622 = (0);
seq__30604 = G__30619;
chunk__30605 = G__30620;
count__30606 = G__30621;
i__30607 = G__30622;
continue;
} else {
var vec__30611 = cljs.core.first.call(null,seq__30604__$1);
var k = cljs.core.nth.call(null,vec__30611,(0),null);
var plugin = cljs.core.nth.call(null,vec__30611,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30623 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30604,chunk__30605,count__30606,i__30607,pl_30623,vec__30611,k,plugin,seq__30604__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30623.call(null,msg_hist);
});})(seq__30604,chunk__30605,count__30606,i__30607,pl_30623,vec__30611,k,plugin,seq__30604__$1,temp__5457__auto__))
);
} else {
}


var G__30624 = cljs.core.next.call(null,seq__30604__$1);
var G__30625 = null;
var G__30626 = (0);
var G__30627 = (0);
seq__30604 = G__30624;
chunk__30605 = G__30625;
count__30606 = G__30626;
i__30607 = G__30627;
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
var G__30629 = arguments.length;
switch (G__30629) {
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

var seq__30630_30635 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30631_30636 = null;
var count__30632_30637 = (0);
var i__30633_30638 = (0);
while(true){
if((i__30633_30638 < count__30632_30637)){
var msg_30639 = cljs.core._nth.call(null,chunk__30631_30636,i__30633_30638);
figwheel.client.socket.handle_incoming_message.call(null,msg_30639);


var G__30640 = seq__30630_30635;
var G__30641 = chunk__30631_30636;
var G__30642 = count__30632_30637;
var G__30643 = (i__30633_30638 + (1));
seq__30630_30635 = G__30640;
chunk__30631_30636 = G__30641;
count__30632_30637 = G__30642;
i__30633_30638 = G__30643;
continue;
} else {
var temp__5457__auto___30644 = cljs.core.seq.call(null,seq__30630_30635);
if(temp__5457__auto___30644){
var seq__30630_30645__$1 = temp__5457__auto___30644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30630_30645__$1)){
var c__4461__auto___30646 = cljs.core.chunk_first.call(null,seq__30630_30645__$1);
var G__30647 = cljs.core.chunk_rest.call(null,seq__30630_30645__$1);
var G__30648 = c__4461__auto___30646;
var G__30649 = cljs.core.count.call(null,c__4461__auto___30646);
var G__30650 = (0);
seq__30630_30635 = G__30647;
chunk__30631_30636 = G__30648;
count__30632_30637 = G__30649;
i__30633_30638 = G__30650;
continue;
} else {
var msg_30651 = cljs.core.first.call(null,seq__30630_30645__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30651);


var G__30652 = cljs.core.next.call(null,seq__30630_30645__$1);
var G__30653 = null;
var G__30654 = (0);
var G__30655 = (0);
seq__30630_30635 = G__30652;
chunk__30631_30636 = G__30653;
count__30632_30637 = G__30654;
i__30633_30638 = G__30655;
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
var len__4641__auto___30660 = arguments.length;
var i__4642__auto___30661 = (0);
while(true){
if((i__4642__auto___30661 < len__4641__auto___30660)){
args__4647__auto__.push((arguments[i__4642__auto___30661]));

var G__30662 = (i__4642__auto___30661 + (1));
i__4642__auto___30661 = G__30662;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30657){
var map__30658 = p__30657;
var map__30658__$1 = (((((!((map__30658 == null))))?(((((map__30658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30658):map__30658);
var opts = map__30658__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30656){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30656));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30663){if((e30663 instanceof Error)){
var e = e30663;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30663;

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
return (function (p__30664){
var map__30665 = p__30664;
var map__30665__$1 = (((((!((map__30665 == null))))?(((((map__30665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30665):map__30665);
var msg_name = cljs.core.get.call(null,map__30665__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1544468030739
