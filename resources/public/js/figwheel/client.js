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
}catch (e30185){if((e30185 instanceof Error)){
var e = e30185;
return "Error: Unable to stringify";
} else {
throw e30185;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30188 = arguments.length;
switch (G__30188) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30186_SHARP_){
if(typeof p1__30186_SHARP_ === 'string'){
return p1__30186_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30186_SHARP_);
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
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30190){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30190));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30195 = arguments.length;
var i__4642__auto___30196 = (0);
while(true){
if((i__4642__auto___30196 < len__4641__auto___30195)){
args__4647__auto__.push((arguments[i__4642__auto___30196]));

var G__30197 = (i__4642__auto___30196 + (1));
i__4642__auto___30196 = G__30197;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30194){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30194));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30198){
var map__30199 = p__30198;
var map__30199__$1 = (((((!((map__30199 == null))))?(((((map__30199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30199):map__30199);
var message = cljs.core.get.call(null,map__30199__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30199__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__25084__auto___30278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___30278,ch){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___30278,ch){
return (function (state_30250){
var state_val_30251 = (state_30250[(1)]);
if((state_val_30251 === (7))){
var inst_30246 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30252_30279 = state_30250__$1;
(statearr_30252_30279[(2)] = inst_30246);

(statearr_30252_30279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (1))){
var state_30250__$1 = state_30250;
var statearr_30253_30280 = state_30250__$1;
(statearr_30253_30280[(2)] = null);

(statearr_30253_30280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (4))){
var inst_30203 = (state_30250[(7)]);
var inst_30203__$1 = (state_30250[(2)]);
var state_30250__$1 = (function (){var statearr_30254 = state_30250;
(statearr_30254[(7)] = inst_30203__$1);

return statearr_30254;
})();
if(cljs.core.truth_(inst_30203__$1)){
var statearr_30255_30281 = state_30250__$1;
(statearr_30255_30281[(1)] = (5));

} else {
var statearr_30256_30282 = state_30250__$1;
(statearr_30256_30282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (15))){
var inst_30210 = (state_30250[(8)]);
var inst_30225 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30210);
var inst_30226 = cljs.core.first.call(null,inst_30225);
var inst_30227 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30226);
var inst_30228 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30227)].join('');
var inst_30229 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30228);
var state_30250__$1 = state_30250;
var statearr_30257_30283 = state_30250__$1;
(statearr_30257_30283[(2)] = inst_30229);

(statearr_30257_30283[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (13))){
var inst_30234 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30258_30284 = state_30250__$1;
(statearr_30258_30284[(2)] = inst_30234);

(statearr_30258_30284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (6))){
var state_30250__$1 = state_30250;
var statearr_30259_30285 = state_30250__$1;
(statearr_30259_30285[(2)] = null);

(statearr_30259_30285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (17))){
var inst_30232 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30260_30286 = state_30250__$1;
(statearr_30260_30286[(2)] = inst_30232);

(statearr_30260_30286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (3))){
var inst_30248 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30250__$1,inst_30248);
} else {
if((state_val_30251 === (12))){
var inst_30209 = (state_30250[(9)]);
var inst_30223 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30209,opts);
var state_30250__$1 = state_30250;
if(inst_30223){
var statearr_30261_30287 = state_30250__$1;
(statearr_30261_30287[(1)] = (15));

} else {
var statearr_30262_30288 = state_30250__$1;
(statearr_30262_30288[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (2))){
var state_30250__$1 = state_30250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30250__$1,(4),ch);
} else {
if((state_val_30251 === (11))){
var inst_30210 = (state_30250[(8)]);
var inst_30215 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30216 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30210);
var inst_30217 = cljs.core.async.timeout.call(null,(1000));
var inst_30218 = [inst_30216,inst_30217];
var inst_30219 = (new cljs.core.PersistentVector(null,2,(5),inst_30215,inst_30218,null));
var state_30250__$1 = state_30250;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30250__$1,(14),inst_30219);
} else {
if((state_val_30251 === (9))){
var inst_30210 = (state_30250[(8)]);
var inst_30236 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30237 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30210);
var inst_30238 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30237);
var inst_30239 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30238)].join('');
var inst_30240 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30239);
var state_30250__$1 = (function (){var statearr_30263 = state_30250;
(statearr_30263[(10)] = inst_30236);

return statearr_30263;
})();
var statearr_30264_30289 = state_30250__$1;
(statearr_30264_30289[(2)] = inst_30240);

(statearr_30264_30289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (5))){
var inst_30203 = (state_30250[(7)]);
var inst_30205 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30206 = (new cljs.core.PersistentArrayMap(null,2,inst_30205,null));
var inst_30207 = (new cljs.core.PersistentHashSet(null,inst_30206,null));
var inst_30208 = figwheel.client.focus_msgs.call(null,inst_30207,inst_30203);
var inst_30209 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30208);
var inst_30210 = cljs.core.first.call(null,inst_30208);
var inst_30211 = figwheel.client.autoload_QMARK_.call(null);
var state_30250__$1 = (function (){var statearr_30265 = state_30250;
(statearr_30265[(9)] = inst_30209);

(statearr_30265[(8)] = inst_30210);

return statearr_30265;
})();
if(cljs.core.truth_(inst_30211)){
var statearr_30266_30290 = state_30250__$1;
(statearr_30266_30290[(1)] = (8));

} else {
var statearr_30267_30291 = state_30250__$1;
(statearr_30267_30291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (14))){
var inst_30221 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30268_30292 = state_30250__$1;
(statearr_30268_30292[(2)] = inst_30221);

(statearr_30268_30292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (16))){
var state_30250__$1 = state_30250;
var statearr_30269_30293 = state_30250__$1;
(statearr_30269_30293[(2)] = null);

(statearr_30269_30293[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (10))){
var inst_30242 = (state_30250[(2)]);
var state_30250__$1 = (function (){var statearr_30270 = state_30250;
(statearr_30270[(11)] = inst_30242);

return statearr_30270;
})();
var statearr_30271_30294 = state_30250__$1;
(statearr_30271_30294[(2)] = null);

(statearr_30271_30294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (8))){
var inst_30209 = (state_30250[(9)]);
var inst_30213 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30209,opts);
var state_30250__$1 = state_30250;
if(cljs.core.truth_(inst_30213)){
var statearr_30272_30295 = state_30250__$1;
(statearr_30272_30295[(1)] = (11));

} else {
var statearr_30273_30296 = state_30250__$1;
(statearr_30273_30296[(1)] = (12));

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
});})(c__25084__auto___30278,ch))
;
return ((function (switch__24989__auto__,c__25084__auto___30278,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24990__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24990__auto____0 = (function (){
var statearr_30274 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30274[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24990__auto__);

(statearr_30274[(1)] = (1));

return statearr_30274;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24990__auto____1 = (function (state_30250){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_30250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e30275){if((e30275 instanceof Object)){
var ex__24993__auto__ = e30275;
var statearr_30276_30297 = state_30250;
(statearr_30276_30297[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30298 = state_30250;
state_30250 = G__30298;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24990__auto__ = function(state_30250){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24990__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24990__auto____1.call(this,state_30250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24990__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24990__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___30278,ch))
})();
var state__25086__auto__ = (function (){var statearr_30277 = f__25085__auto__.call(null);
(statearr_30277[(6)] = c__25084__auto___30278);

return statearr_30277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___30278,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30299_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30299_SHARP_));
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
var base_path_30305 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30305){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30301 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30302 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30303 = true;
var _STAR_print_fn_STAR__temp_val__30304 = ((function (_STAR_print_newline_STAR__orig_val__30301,_STAR_print_fn_STAR__orig_val__30302,_STAR_print_newline_STAR__temp_val__30303,sb,base_path_30305){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__30301,_STAR_print_fn_STAR__orig_val__30302,_STAR_print_newline_STAR__temp_val__30303,sb,base_path_30305))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30303;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30304;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30302;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30301;
}}catch (e30300){if((e30300 instanceof Error)){
var e = e30300;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30305], null));
} else {
var e = e30300;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30305))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30306){
var map__30307 = p__30306;
var map__30307__$1 = (((((!((map__30307 == null))))?(((((map__30307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30307):map__30307);
var opts = map__30307__$1;
var build_id = cljs.core.get.call(null,map__30307__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30307,map__30307__$1,opts,build_id){
return (function (p__30309){
var vec__30310 = p__30309;
var seq__30311 = cljs.core.seq.call(null,vec__30310);
var first__30312 = cljs.core.first.call(null,seq__30311);
var seq__30311__$1 = cljs.core.next.call(null,seq__30311);
var map__30313 = first__30312;
var map__30313__$1 = (((((!((map__30313 == null))))?(((((map__30313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30313):map__30313);
var msg = map__30313__$1;
var msg_name = cljs.core.get.call(null,map__30313__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30311__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30310,seq__30311,first__30312,seq__30311__$1,map__30313,map__30313__$1,msg,msg_name,_,map__30307,map__30307__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30310,seq__30311,first__30312,seq__30311__$1,map__30313,map__30313__$1,msg,msg_name,_,map__30307,map__30307__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30307,map__30307__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30315){
var vec__30316 = p__30315;
var seq__30317 = cljs.core.seq.call(null,vec__30316);
var first__30318 = cljs.core.first.call(null,seq__30317);
var seq__30317__$1 = cljs.core.next.call(null,seq__30317);
var map__30319 = first__30318;
var map__30319__$1 = (((((!((map__30319 == null))))?(((((map__30319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30319):map__30319);
var msg = map__30319__$1;
var msg_name = cljs.core.get.call(null,map__30319__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30317__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30321){
var map__30322 = p__30321;
var map__30322__$1 = (((((!((map__30322 == null))))?(((((map__30322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30322):map__30322);
var on_compile_warning = cljs.core.get.call(null,map__30322__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30322__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30322,map__30322__$1,on_compile_warning,on_compile_fail){
return (function (p__30324){
var vec__30325 = p__30324;
var seq__30326 = cljs.core.seq.call(null,vec__30325);
var first__30327 = cljs.core.first.call(null,seq__30326);
var seq__30326__$1 = cljs.core.next.call(null,seq__30326);
var map__30328 = first__30327;
var map__30328__$1 = (((((!((map__30328 == null))))?(((((map__30328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30328):map__30328);
var msg = map__30328__$1;
var msg_name = cljs.core.get.call(null,map__30328__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30326__$1;
var pred__30330 = cljs.core._EQ_;
var expr__30331 = msg_name;
if(cljs.core.truth_(pred__30330.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30331))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30330.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30331))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30322,map__30322__$1,on_compile_warning,on_compile_fail))
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
var c__25084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto__,msg_hist,msg_names,msg){
return (function (state_30420){
var state_val_30421 = (state_30420[(1)]);
if((state_val_30421 === (7))){
var inst_30340 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
if(cljs.core.truth_(inst_30340)){
var statearr_30422_30469 = state_30420__$1;
(statearr_30422_30469[(1)] = (8));

} else {
var statearr_30423_30470 = state_30420__$1;
(statearr_30423_30470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (20))){
var inst_30414 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
var statearr_30424_30471 = state_30420__$1;
(statearr_30424_30471[(2)] = inst_30414);

(statearr_30424_30471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (27))){
var inst_30410 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
var statearr_30425_30472 = state_30420__$1;
(statearr_30425_30472[(2)] = inst_30410);

(statearr_30425_30472[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (1))){
var inst_30333 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30420__$1 = state_30420;
if(cljs.core.truth_(inst_30333)){
var statearr_30426_30473 = state_30420__$1;
(statearr_30426_30473[(1)] = (2));

} else {
var statearr_30427_30474 = state_30420__$1;
(statearr_30427_30474[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (24))){
var inst_30412 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
var statearr_30428_30475 = state_30420__$1;
(statearr_30428_30475[(2)] = inst_30412);

(statearr_30428_30475[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (4))){
var inst_30418 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30420__$1,inst_30418);
} else {
if((state_val_30421 === (15))){
var inst_30416 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
var statearr_30429_30476 = state_30420__$1;
(statearr_30429_30476[(2)] = inst_30416);

(statearr_30429_30476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (21))){
var inst_30369 = (state_30420[(2)]);
var inst_30370 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30371 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30370);
var state_30420__$1 = (function (){var statearr_30430 = state_30420;
(statearr_30430[(7)] = inst_30369);

return statearr_30430;
})();
var statearr_30431_30477 = state_30420__$1;
(statearr_30431_30477[(2)] = inst_30371);

(statearr_30431_30477[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (31))){
var inst_30399 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30420__$1 = state_30420;
if(inst_30399){
var statearr_30432_30478 = state_30420__$1;
(statearr_30432_30478[(1)] = (34));

} else {
var statearr_30433_30479 = state_30420__$1;
(statearr_30433_30479[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (32))){
var inst_30408 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
var statearr_30434_30480 = state_30420__$1;
(statearr_30434_30480[(2)] = inst_30408);

(statearr_30434_30480[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (33))){
var inst_30395 = (state_30420[(2)]);
var inst_30396 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30397 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30396);
var state_30420__$1 = (function (){var statearr_30435 = state_30420;
(statearr_30435[(8)] = inst_30395);

return statearr_30435;
})();
var statearr_30436_30481 = state_30420__$1;
(statearr_30436_30481[(2)] = inst_30397);

(statearr_30436_30481[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (13))){
var inst_30354 = figwheel.client.heads_up.clear.call(null);
var state_30420__$1 = state_30420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30420__$1,(16),inst_30354);
} else {
if((state_val_30421 === (22))){
var inst_30375 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30376 = figwheel.client.heads_up.append_warning_message.call(null,inst_30375);
var state_30420__$1 = state_30420;
var statearr_30437_30482 = state_30420__$1;
(statearr_30437_30482[(2)] = inst_30376);

(statearr_30437_30482[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (36))){
var inst_30406 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
var statearr_30438_30483 = state_30420__$1;
(statearr_30438_30483[(2)] = inst_30406);

(statearr_30438_30483[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (29))){
var inst_30386 = (state_30420[(2)]);
var inst_30387 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30388 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30387);
var state_30420__$1 = (function (){var statearr_30439 = state_30420;
(statearr_30439[(9)] = inst_30386);

return statearr_30439;
})();
var statearr_30440_30484 = state_30420__$1;
(statearr_30440_30484[(2)] = inst_30388);

(statearr_30440_30484[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (6))){
var inst_30335 = (state_30420[(10)]);
var state_30420__$1 = state_30420;
var statearr_30441_30485 = state_30420__$1;
(statearr_30441_30485[(2)] = inst_30335);

(statearr_30441_30485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (28))){
var inst_30382 = (state_30420[(2)]);
var inst_30383 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30384 = figwheel.client.heads_up.display_warning.call(null,inst_30383);
var state_30420__$1 = (function (){var statearr_30442 = state_30420;
(statearr_30442[(11)] = inst_30382);

return statearr_30442;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30420__$1,(29),inst_30384);
} else {
if((state_val_30421 === (25))){
var inst_30380 = figwheel.client.heads_up.clear.call(null);
var state_30420__$1 = state_30420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30420__$1,(28),inst_30380);
} else {
if((state_val_30421 === (34))){
var inst_30401 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30420__$1 = state_30420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30420__$1,(37),inst_30401);
} else {
if((state_val_30421 === (17))){
var inst_30360 = (state_30420[(2)]);
var inst_30361 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30362 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30361);
var state_30420__$1 = (function (){var statearr_30443 = state_30420;
(statearr_30443[(12)] = inst_30360);

return statearr_30443;
})();
var statearr_30444_30486 = state_30420__$1;
(statearr_30444_30486[(2)] = inst_30362);

(statearr_30444_30486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (3))){
var inst_30352 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30420__$1 = state_30420;
if(inst_30352){
var statearr_30445_30487 = state_30420__$1;
(statearr_30445_30487[(1)] = (13));

} else {
var statearr_30446_30488 = state_30420__$1;
(statearr_30446_30488[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (12))){
var inst_30348 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
var statearr_30447_30489 = state_30420__$1;
(statearr_30447_30489[(2)] = inst_30348);

(statearr_30447_30489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (2))){
var inst_30335 = (state_30420[(10)]);
var inst_30335__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30420__$1 = (function (){var statearr_30448 = state_30420;
(statearr_30448[(10)] = inst_30335__$1);

return statearr_30448;
})();
if(cljs.core.truth_(inst_30335__$1)){
var statearr_30449_30490 = state_30420__$1;
(statearr_30449_30490[(1)] = (5));

} else {
var statearr_30450_30491 = state_30420__$1;
(statearr_30450_30491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (23))){
var inst_30378 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30420__$1 = state_30420;
if(inst_30378){
var statearr_30451_30492 = state_30420__$1;
(statearr_30451_30492[(1)] = (25));

} else {
var statearr_30452_30493 = state_30420__$1;
(statearr_30452_30493[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (35))){
var state_30420__$1 = state_30420;
var statearr_30453_30494 = state_30420__$1;
(statearr_30453_30494[(2)] = null);

(statearr_30453_30494[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (19))){
var inst_30373 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30420__$1 = state_30420;
if(inst_30373){
var statearr_30454_30495 = state_30420__$1;
(statearr_30454_30495[(1)] = (22));

} else {
var statearr_30455_30496 = state_30420__$1;
(statearr_30455_30496[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (11))){
var inst_30344 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
var statearr_30456_30497 = state_30420__$1;
(statearr_30456_30497[(2)] = inst_30344);

(statearr_30456_30497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (9))){
var inst_30346 = figwheel.client.heads_up.clear.call(null);
var state_30420__$1 = state_30420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30420__$1,(12),inst_30346);
} else {
if((state_val_30421 === (5))){
var inst_30337 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30420__$1 = state_30420;
var statearr_30457_30498 = state_30420__$1;
(statearr_30457_30498[(2)] = inst_30337);

(statearr_30457_30498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (14))){
var inst_30364 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30420__$1 = state_30420;
if(inst_30364){
var statearr_30458_30499 = state_30420__$1;
(statearr_30458_30499[(1)] = (18));

} else {
var statearr_30459_30500 = state_30420__$1;
(statearr_30459_30500[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (26))){
var inst_30390 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30420__$1 = state_30420;
if(inst_30390){
var statearr_30460_30501 = state_30420__$1;
(statearr_30460_30501[(1)] = (30));

} else {
var statearr_30461_30502 = state_30420__$1;
(statearr_30461_30502[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (16))){
var inst_30356 = (state_30420[(2)]);
var inst_30357 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30358 = figwheel.client.heads_up.display_exception.call(null,inst_30357);
var state_30420__$1 = (function (){var statearr_30462 = state_30420;
(statearr_30462[(13)] = inst_30356);

return statearr_30462;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30420__$1,(17),inst_30358);
} else {
if((state_val_30421 === (30))){
var inst_30392 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30393 = figwheel.client.heads_up.display_warning.call(null,inst_30392);
var state_30420__$1 = state_30420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30420__$1,(33),inst_30393);
} else {
if((state_val_30421 === (10))){
var inst_30350 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
var statearr_30463_30503 = state_30420__$1;
(statearr_30463_30503[(2)] = inst_30350);

(statearr_30463_30503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (18))){
var inst_30366 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30367 = figwheel.client.heads_up.display_exception.call(null,inst_30366);
var state_30420__$1 = state_30420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30420__$1,(21),inst_30367);
} else {
if((state_val_30421 === (37))){
var inst_30403 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
var statearr_30464_30504 = state_30420__$1;
(statearr_30464_30504[(2)] = inst_30403);

(statearr_30464_30504[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (8))){
var inst_30342 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30420__$1 = state_30420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30420__$1,(11),inst_30342);
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
});})(c__25084__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24989__auto__,c__25084__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24990__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24990__auto____0 = (function (){
var statearr_30465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30465[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24990__auto__);

(statearr_30465[(1)] = (1));

return statearr_30465;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24990__auto____1 = (function (state_30420){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_30420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e30466){if((e30466 instanceof Object)){
var ex__24993__auto__ = e30466;
var statearr_30467_30505 = state_30420;
(statearr_30467_30505[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30506 = state_30420;
state_30420 = G__30506;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24990__auto__ = function(state_30420){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24990__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24990__auto____1.call(this,state_30420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24990__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24990__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto__,msg_hist,msg_names,msg))
})();
var state__25086__auto__ = (function (){var statearr_30468 = f__25085__auto__.call(null);
(statearr_30468[(6)] = c__25084__auto__);

return statearr_30468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto__,msg_hist,msg_names,msg))
);

return c__25084__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25084__auto___30535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___30535,ch){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___30535,ch){
return (function (state_30521){
var state_val_30522 = (state_30521[(1)]);
if((state_val_30522 === (1))){
var state_30521__$1 = state_30521;
var statearr_30523_30536 = state_30521__$1;
(statearr_30523_30536[(2)] = null);

(statearr_30523_30536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30522 === (2))){
var state_30521__$1 = state_30521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30521__$1,(4),ch);
} else {
if((state_val_30522 === (3))){
var inst_30519 = (state_30521[(2)]);
var state_30521__$1 = state_30521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30521__$1,inst_30519);
} else {
if((state_val_30522 === (4))){
var inst_30509 = (state_30521[(7)]);
var inst_30509__$1 = (state_30521[(2)]);
var state_30521__$1 = (function (){var statearr_30524 = state_30521;
(statearr_30524[(7)] = inst_30509__$1);

return statearr_30524;
})();
if(cljs.core.truth_(inst_30509__$1)){
var statearr_30525_30537 = state_30521__$1;
(statearr_30525_30537[(1)] = (5));

} else {
var statearr_30526_30538 = state_30521__$1;
(statearr_30526_30538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30522 === (5))){
var inst_30509 = (state_30521[(7)]);
var inst_30511 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30509);
var state_30521__$1 = state_30521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30521__$1,(8),inst_30511);
} else {
if((state_val_30522 === (6))){
var state_30521__$1 = state_30521;
var statearr_30527_30539 = state_30521__$1;
(statearr_30527_30539[(2)] = null);

(statearr_30527_30539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30522 === (7))){
var inst_30517 = (state_30521[(2)]);
var state_30521__$1 = state_30521;
var statearr_30528_30540 = state_30521__$1;
(statearr_30528_30540[(2)] = inst_30517);

(statearr_30528_30540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30522 === (8))){
var inst_30513 = (state_30521[(2)]);
var state_30521__$1 = (function (){var statearr_30529 = state_30521;
(statearr_30529[(8)] = inst_30513);

return statearr_30529;
})();
var statearr_30530_30541 = state_30521__$1;
(statearr_30530_30541[(2)] = null);

(statearr_30530_30541[(1)] = (2));


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
});})(c__25084__auto___30535,ch))
;
return ((function (switch__24989__auto__,c__25084__auto___30535,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24990__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24990__auto____0 = (function (){
var statearr_30531 = [null,null,null,null,null,null,null,null,null];
(statearr_30531[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24990__auto__);

(statearr_30531[(1)] = (1));

return statearr_30531;
});
var figwheel$client$heads_up_plugin_$_state_machine__24990__auto____1 = (function (state_30521){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_30521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e30532){if((e30532 instanceof Object)){
var ex__24993__auto__ = e30532;
var statearr_30533_30542 = state_30521;
(statearr_30533_30542[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30543 = state_30521;
state_30521 = G__30543;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24990__auto__ = function(state_30521){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24990__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24990__auto____1.call(this,state_30521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24990__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24990__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___30535,ch))
})();
var state__25086__auto__ = (function (){var statearr_30534 = f__25085__auto__.call(null);
(statearr_30534[(6)] = c__25084__auto___30535);

return statearr_30534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___30535,ch))
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
var c__25084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto__){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto__){
return (function (state_30549){
var state_val_30550 = (state_30549[(1)]);
if((state_val_30550 === (1))){
var inst_30544 = cljs.core.async.timeout.call(null,(3000));
var state_30549__$1 = state_30549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30549__$1,(2),inst_30544);
} else {
if((state_val_30550 === (2))){
var inst_30546 = (state_30549[(2)]);
var inst_30547 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30549__$1 = (function (){var statearr_30551 = state_30549;
(statearr_30551[(7)] = inst_30546);

return statearr_30551;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30549__$1,inst_30547);
} else {
return null;
}
}
});})(c__25084__auto__))
;
return ((function (switch__24989__auto__,c__25084__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24990__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24990__auto____0 = (function (){
var statearr_30552 = [null,null,null,null,null,null,null,null];
(statearr_30552[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24990__auto__);

(statearr_30552[(1)] = (1));

return statearr_30552;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24990__auto____1 = (function (state_30549){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_30549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e30553){if((e30553 instanceof Object)){
var ex__24993__auto__ = e30553;
var statearr_30554_30556 = state_30549;
(statearr_30554_30556[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30557 = state_30549;
state_30549 = G__30557;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24990__auto__ = function(state_30549){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24990__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24990__auto____1.call(this,state_30549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24990__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24990__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto__))
})();
var state__25086__auto__ = (function (){var statearr_30555 = f__25085__auto__.call(null);
(statearr_30555[(6)] = c__25084__auto__);

return statearr_30555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto__))
);

return c__25084__auto__;
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
var c__25084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto__,figwheel_version,temp__5457__auto__){
return (function (state_30564){
var state_val_30565 = (state_30564[(1)]);
if((state_val_30565 === (1))){
var inst_30558 = cljs.core.async.timeout.call(null,(2000));
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30564__$1,(2),inst_30558);
} else {
if((state_val_30565 === (2))){
var inst_30560 = (state_30564[(2)]);
var inst_30561 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30562 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30561);
var state_30564__$1 = (function (){var statearr_30566 = state_30564;
(statearr_30566[(7)] = inst_30560);

return statearr_30566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30564__$1,inst_30562);
} else {
return null;
}
}
});})(c__25084__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__24989__auto__,c__25084__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24990__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24990__auto____0 = (function (){
var statearr_30567 = [null,null,null,null,null,null,null,null];
(statearr_30567[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24990__auto__);

(statearr_30567[(1)] = (1));

return statearr_30567;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24990__auto____1 = (function (state_30564){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_30564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e30568){if((e30568 instanceof Object)){
var ex__24993__auto__ = e30568;
var statearr_30569_30571 = state_30564;
(statearr_30569_30571[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30572 = state_30564;
state_30564 = G__30572;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24990__auto__ = function(state_30564){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24990__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24990__auto____1.call(this,state_30564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24990__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24990__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto__,figwheel_version,temp__5457__auto__))
})();
var state__25086__auto__ = (function (){var statearr_30570 = f__25085__auto__.call(null);
(statearr_30570[(6)] = c__25084__auto__);

return statearr_30570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto__,figwheel_version,temp__5457__auto__))
);

return c__25084__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30573){
var map__30574 = p__30573;
var map__30574__$1 = (((((!((map__30574 == null))))?(((((map__30574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30574):map__30574);
var file = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30576 = "";
var G__30576__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30576),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30576);
var G__30576__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30576__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30576__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30576__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30576__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30577){
var map__30578 = p__30577;
var map__30578__$1 = (((((!((map__30578 == null))))?(((((map__30578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30578):map__30578);
var ed = map__30578__$1;
var formatted_exception = cljs.core.get.call(null,map__30578__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30578__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30578__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30580_30584 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30581_30585 = null;
var count__30582_30586 = (0);
var i__30583_30587 = (0);
while(true){
if((i__30583_30587 < count__30582_30586)){
var msg_30588 = cljs.core._nth.call(null,chunk__30581_30585,i__30583_30587);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30588);


var G__30589 = seq__30580_30584;
var G__30590 = chunk__30581_30585;
var G__30591 = count__30582_30586;
var G__30592 = (i__30583_30587 + (1));
seq__30580_30584 = G__30589;
chunk__30581_30585 = G__30590;
count__30582_30586 = G__30591;
i__30583_30587 = G__30592;
continue;
} else {
var temp__5457__auto___30593 = cljs.core.seq.call(null,seq__30580_30584);
if(temp__5457__auto___30593){
var seq__30580_30594__$1 = temp__5457__auto___30593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30580_30594__$1)){
var c__4461__auto___30595 = cljs.core.chunk_first.call(null,seq__30580_30594__$1);
var G__30596 = cljs.core.chunk_rest.call(null,seq__30580_30594__$1);
var G__30597 = c__4461__auto___30595;
var G__30598 = cljs.core.count.call(null,c__4461__auto___30595);
var G__30599 = (0);
seq__30580_30584 = G__30596;
chunk__30581_30585 = G__30597;
count__30582_30586 = G__30598;
i__30583_30587 = G__30599;
continue;
} else {
var msg_30600 = cljs.core.first.call(null,seq__30580_30594__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30600);


var G__30601 = cljs.core.next.call(null,seq__30580_30594__$1);
var G__30602 = null;
var G__30603 = (0);
var G__30604 = (0);
seq__30580_30584 = G__30601;
chunk__30581_30585 = G__30602;
count__30582_30586 = G__30603;
i__30583_30587 = G__30604;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30605){
var map__30606 = p__30605;
var map__30606__$1 = (((((!((map__30606 == null))))?(((((map__30606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30606):map__30606);
var w = map__30606__$1;
var message = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__30608 = cljs.core.seq.call(null,plugins);
var chunk__30609 = null;
var count__30610 = (0);
var i__30611 = (0);
while(true){
if((i__30611 < count__30610)){
var vec__30612 = cljs.core._nth.call(null,chunk__30609,i__30611);
var k = cljs.core.nth.call(null,vec__30612,(0),null);
var plugin = cljs.core.nth.call(null,vec__30612,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30618 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30608,chunk__30609,count__30610,i__30611,pl_30618,vec__30612,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30618.call(null,msg_hist);
});})(seq__30608,chunk__30609,count__30610,i__30611,pl_30618,vec__30612,k,plugin))
);
} else {
}


var G__30619 = seq__30608;
var G__30620 = chunk__30609;
var G__30621 = count__30610;
var G__30622 = (i__30611 + (1));
seq__30608 = G__30619;
chunk__30609 = G__30620;
count__30610 = G__30621;
i__30611 = G__30622;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30608);
if(temp__5457__auto__){
var seq__30608__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30608__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30608__$1);
var G__30623 = cljs.core.chunk_rest.call(null,seq__30608__$1);
var G__30624 = c__4461__auto__;
var G__30625 = cljs.core.count.call(null,c__4461__auto__);
var G__30626 = (0);
seq__30608 = G__30623;
chunk__30609 = G__30624;
count__30610 = G__30625;
i__30611 = G__30626;
continue;
} else {
var vec__30615 = cljs.core.first.call(null,seq__30608__$1);
var k = cljs.core.nth.call(null,vec__30615,(0),null);
var plugin = cljs.core.nth.call(null,vec__30615,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30627 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30608,chunk__30609,count__30610,i__30611,pl_30627,vec__30615,k,plugin,seq__30608__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30627.call(null,msg_hist);
});})(seq__30608,chunk__30609,count__30610,i__30611,pl_30627,vec__30615,k,plugin,seq__30608__$1,temp__5457__auto__))
);
} else {
}


var G__30628 = cljs.core.next.call(null,seq__30608__$1);
var G__30629 = null;
var G__30630 = (0);
var G__30631 = (0);
seq__30608 = G__30628;
chunk__30609 = G__30629;
count__30610 = G__30630;
i__30611 = G__30631;
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
var G__30633 = arguments.length;
switch (G__30633) {
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

var seq__30634_30639 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30635_30640 = null;
var count__30636_30641 = (0);
var i__30637_30642 = (0);
while(true){
if((i__30637_30642 < count__30636_30641)){
var msg_30643 = cljs.core._nth.call(null,chunk__30635_30640,i__30637_30642);
figwheel.client.socket.handle_incoming_message.call(null,msg_30643);


var G__30644 = seq__30634_30639;
var G__30645 = chunk__30635_30640;
var G__30646 = count__30636_30641;
var G__30647 = (i__30637_30642 + (1));
seq__30634_30639 = G__30644;
chunk__30635_30640 = G__30645;
count__30636_30641 = G__30646;
i__30637_30642 = G__30647;
continue;
} else {
var temp__5457__auto___30648 = cljs.core.seq.call(null,seq__30634_30639);
if(temp__5457__auto___30648){
var seq__30634_30649__$1 = temp__5457__auto___30648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30634_30649__$1)){
var c__4461__auto___30650 = cljs.core.chunk_first.call(null,seq__30634_30649__$1);
var G__30651 = cljs.core.chunk_rest.call(null,seq__30634_30649__$1);
var G__30652 = c__4461__auto___30650;
var G__30653 = cljs.core.count.call(null,c__4461__auto___30650);
var G__30654 = (0);
seq__30634_30639 = G__30651;
chunk__30635_30640 = G__30652;
count__30636_30641 = G__30653;
i__30637_30642 = G__30654;
continue;
} else {
var msg_30655 = cljs.core.first.call(null,seq__30634_30649__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30655);


var G__30656 = cljs.core.next.call(null,seq__30634_30649__$1);
var G__30657 = null;
var G__30658 = (0);
var G__30659 = (0);
seq__30634_30639 = G__30656;
chunk__30635_30640 = G__30657;
count__30636_30641 = G__30658;
i__30637_30642 = G__30659;
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
var len__4641__auto___30664 = arguments.length;
var i__4642__auto___30665 = (0);
while(true){
if((i__4642__auto___30665 < len__4641__auto___30664)){
args__4647__auto__.push((arguments[i__4642__auto___30665]));

var G__30666 = (i__4642__auto___30665 + (1));
i__4642__auto___30665 = G__30666;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30661){
var map__30662 = p__30661;
var map__30662__$1 = (((((!((map__30662 == null))))?(((((map__30662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30662):map__30662);
var opts = map__30662__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30660){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30660));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30667){if((e30667 instanceof Error)){
var e = e30667;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30667;

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
return (function (p__30668){
var map__30669 = p__30668;
var map__30669__$1 = (((((!((map__30669 == null))))?(((((map__30669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30669):map__30669);
var msg_name = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1544650594760
