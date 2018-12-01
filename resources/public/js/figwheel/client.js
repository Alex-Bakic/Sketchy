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
}catch (e29535){if((e29535 instanceof Error)){
var e = e29535;
return "Error: Unable to stringify";
} else {
throw e29535;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29538 = arguments.length;
switch (G__29538) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29536_SHARP_){
if(typeof p1__29536_SHARP_ === 'string'){
return p1__29536_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29536_SHARP_);
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
var len__4641__auto___29541 = arguments.length;
var i__4642__auto___29542 = (0);
while(true){
if((i__4642__auto___29542 < len__4641__auto___29541)){
args__4647__auto__.push((arguments[i__4642__auto___29542]));

var G__29543 = (i__4642__auto___29542 + (1));
i__4642__auto___29542 = G__29543;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29540){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29540));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29545 = arguments.length;
var i__4642__auto___29546 = (0);
while(true){
if((i__4642__auto___29546 < len__4641__auto___29545)){
args__4647__auto__.push((arguments[i__4642__auto___29546]));

var G__29547 = (i__4642__auto___29546 + (1));
i__4642__auto___29546 = G__29547;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29544){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29544));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29548){
var map__29549 = p__29548;
var map__29549__$1 = (((((!((map__29549 == null))))?(((((map__29549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29549):map__29549);
var message = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24434__auto___29628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___29628,ch){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___29628,ch){
return (function (state_29600){
var state_val_29601 = (state_29600[(1)]);
if((state_val_29601 === (7))){
var inst_29596 = (state_29600[(2)]);
var state_29600__$1 = state_29600;
var statearr_29602_29629 = state_29600__$1;
(statearr_29602_29629[(2)] = inst_29596);

(statearr_29602_29629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (1))){
var state_29600__$1 = state_29600;
var statearr_29603_29630 = state_29600__$1;
(statearr_29603_29630[(2)] = null);

(statearr_29603_29630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (4))){
var inst_29553 = (state_29600[(7)]);
var inst_29553__$1 = (state_29600[(2)]);
var state_29600__$1 = (function (){var statearr_29604 = state_29600;
(statearr_29604[(7)] = inst_29553__$1);

return statearr_29604;
})();
if(cljs.core.truth_(inst_29553__$1)){
var statearr_29605_29631 = state_29600__$1;
(statearr_29605_29631[(1)] = (5));

} else {
var statearr_29606_29632 = state_29600__$1;
(statearr_29606_29632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (15))){
var inst_29560 = (state_29600[(8)]);
var inst_29575 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29560);
var inst_29576 = cljs.core.first.call(null,inst_29575);
var inst_29577 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29576);
var inst_29578 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29577)].join('');
var inst_29579 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29578);
var state_29600__$1 = state_29600;
var statearr_29607_29633 = state_29600__$1;
(statearr_29607_29633[(2)] = inst_29579);

(statearr_29607_29633[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (13))){
var inst_29584 = (state_29600[(2)]);
var state_29600__$1 = state_29600;
var statearr_29608_29634 = state_29600__$1;
(statearr_29608_29634[(2)] = inst_29584);

(statearr_29608_29634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (6))){
var state_29600__$1 = state_29600;
var statearr_29609_29635 = state_29600__$1;
(statearr_29609_29635[(2)] = null);

(statearr_29609_29635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (17))){
var inst_29582 = (state_29600[(2)]);
var state_29600__$1 = state_29600;
var statearr_29610_29636 = state_29600__$1;
(statearr_29610_29636[(2)] = inst_29582);

(statearr_29610_29636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (3))){
var inst_29598 = (state_29600[(2)]);
var state_29600__$1 = state_29600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29600__$1,inst_29598);
} else {
if((state_val_29601 === (12))){
var inst_29559 = (state_29600[(9)]);
var inst_29573 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29559,opts);
var state_29600__$1 = state_29600;
if(inst_29573){
var statearr_29611_29637 = state_29600__$1;
(statearr_29611_29637[(1)] = (15));

} else {
var statearr_29612_29638 = state_29600__$1;
(statearr_29612_29638[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (2))){
var state_29600__$1 = state_29600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29600__$1,(4),ch);
} else {
if((state_val_29601 === (11))){
var inst_29560 = (state_29600[(8)]);
var inst_29565 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29566 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29560);
var inst_29567 = cljs.core.async.timeout.call(null,(1000));
var inst_29568 = [inst_29566,inst_29567];
var inst_29569 = (new cljs.core.PersistentVector(null,2,(5),inst_29565,inst_29568,null));
var state_29600__$1 = state_29600;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29600__$1,(14),inst_29569);
} else {
if((state_val_29601 === (9))){
var inst_29560 = (state_29600[(8)]);
var inst_29586 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29587 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29560);
var inst_29588 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29587);
var inst_29589 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29588)].join('');
var inst_29590 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29589);
var state_29600__$1 = (function (){var statearr_29613 = state_29600;
(statearr_29613[(10)] = inst_29586);

return statearr_29613;
})();
var statearr_29614_29639 = state_29600__$1;
(statearr_29614_29639[(2)] = inst_29590);

(statearr_29614_29639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (5))){
var inst_29553 = (state_29600[(7)]);
var inst_29555 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29556 = (new cljs.core.PersistentArrayMap(null,2,inst_29555,null));
var inst_29557 = (new cljs.core.PersistentHashSet(null,inst_29556,null));
var inst_29558 = figwheel.client.focus_msgs.call(null,inst_29557,inst_29553);
var inst_29559 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29558);
var inst_29560 = cljs.core.first.call(null,inst_29558);
var inst_29561 = figwheel.client.autoload_QMARK_.call(null);
var state_29600__$1 = (function (){var statearr_29615 = state_29600;
(statearr_29615[(8)] = inst_29560);

(statearr_29615[(9)] = inst_29559);

return statearr_29615;
})();
if(cljs.core.truth_(inst_29561)){
var statearr_29616_29640 = state_29600__$1;
(statearr_29616_29640[(1)] = (8));

} else {
var statearr_29617_29641 = state_29600__$1;
(statearr_29617_29641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (14))){
var inst_29571 = (state_29600[(2)]);
var state_29600__$1 = state_29600;
var statearr_29618_29642 = state_29600__$1;
(statearr_29618_29642[(2)] = inst_29571);

(statearr_29618_29642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (16))){
var state_29600__$1 = state_29600;
var statearr_29619_29643 = state_29600__$1;
(statearr_29619_29643[(2)] = null);

(statearr_29619_29643[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (10))){
var inst_29592 = (state_29600[(2)]);
var state_29600__$1 = (function (){var statearr_29620 = state_29600;
(statearr_29620[(11)] = inst_29592);

return statearr_29620;
})();
var statearr_29621_29644 = state_29600__$1;
(statearr_29621_29644[(2)] = null);

(statearr_29621_29644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (8))){
var inst_29559 = (state_29600[(9)]);
var inst_29563 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29559,opts);
var state_29600__$1 = state_29600;
if(cljs.core.truth_(inst_29563)){
var statearr_29622_29645 = state_29600__$1;
(statearr_29622_29645[(1)] = (11));

} else {
var statearr_29623_29646 = state_29600__$1;
(statearr_29623_29646[(1)] = (12));

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
});})(c__24434__auto___29628,ch))
;
return ((function (switch__24339__auto__,c__24434__auto___29628,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24340__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24340__auto____0 = (function (){
var statearr_29624 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29624[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24340__auto__);

(statearr_29624[(1)] = (1));

return statearr_29624;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24340__auto____1 = (function (state_29600){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_29600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e29625){if((e29625 instanceof Object)){
var ex__24343__auto__ = e29625;
var statearr_29626_29647 = state_29600;
(statearr_29626_29647[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29648 = state_29600;
state_29600 = G__29648;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24340__auto__ = function(state_29600){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24340__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24340__auto____1.call(this,state_29600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24340__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24340__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___29628,ch))
})();
var state__24436__auto__ = (function (){var statearr_29627 = f__24435__auto__.call(null);
(statearr_29627[(6)] = c__24434__auto___29628);

return statearr_29627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___29628,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29649_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29649_SHARP_));
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
var base_path_29655 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29655){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29651 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29652 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29653 = true;
var _STAR_print_fn_STAR__temp_val__29654 = ((function (_STAR_print_newline_STAR__orig_val__29651,_STAR_print_fn_STAR__orig_val__29652,_STAR_print_newline_STAR__temp_val__29653,sb,base_path_29655){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__29651,_STAR_print_fn_STAR__orig_val__29652,_STAR_print_newline_STAR__temp_val__29653,sb,base_path_29655))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29653;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29654;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29652;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29651;
}}catch (e29650){if((e29650 instanceof Error)){
var e = e29650;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29655], null));
} else {
var e = e29650;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29655))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29656){
var map__29657 = p__29656;
var map__29657__$1 = (((((!((map__29657 == null))))?(((((map__29657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29657):map__29657);
var opts = map__29657__$1;
var build_id = cljs.core.get.call(null,map__29657__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29657,map__29657__$1,opts,build_id){
return (function (p__29659){
var vec__29660 = p__29659;
var seq__29661 = cljs.core.seq.call(null,vec__29660);
var first__29662 = cljs.core.first.call(null,seq__29661);
var seq__29661__$1 = cljs.core.next.call(null,seq__29661);
var map__29663 = first__29662;
var map__29663__$1 = (((((!((map__29663 == null))))?(((((map__29663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29663):map__29663);
var msg = map__29663__$1;
var msg_name = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29661__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29660,seq__29661,first__29662,seq__29661__$1,map__29663,map__29663__$1,msg,msg_name,_,map__29657,map__29657__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29660,seq__29661,first__29662,seq__29661__$1,map__29663,map__29663__$1,msg,msg_name,_,map__29657,map__29657__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29657,map__29657__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29665){
var vec__29666 = p__29665;
var seq__29667 = cljs.core.seq.call(null,vec__29666);
var first__29668 = cljs.core.first.call(null,seq__29667);
var seq__29667__$1 = cljs.core.next.call(null,seq__29667);
var map__29669 = first__29668;
var map__29669__$1 = (((((!((map__29669 == null))))?(((((map__29669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29669):map__29669);
var msg = map__29669__$1;
var msg_name = cljs.core.get.call(null,map__29669__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29667__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29671){
var map__29672 = p__29671;
var map__29672__$1 = (((((!((map__29672 == null))))?(((((map__29672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29672):map__29672);
var on_compile_warning = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29672,map__29672__$1,on_compile_warning,on_compile_fail){
return (function (p__29674){
var vec__29675 = p__29674;
var seq__29676 = cljs.core.seq.call(null,vec__29675);
var first__29677 = cljs.core.first.call(null,seq__29676);
var seq__29676__$1 = cljs.core.next.call(null,seq__29676);
var map__29678 = first__29677;
var map__29678__$1 = (((((!((map__29678 == null))))?(((((map__29678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29678):map__29678);
var msg = map__29678__$1;
var msg_name = cljs.core.get.call(null,map__29678__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29676__$1;
var pred__29680 = cljs.core._EQ_;
var expr__29681 = msg_name;
if(cljs.core.truth_(pred__29680.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29681))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29680.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29681))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29672,map__29672__$1,on_compile_warning,on_compile_fail))
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
var c__24434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto__,msg_hist,msg_names,msg){
return (function (state_29770){
var state_val_29771 = (state_29770[(1)]);
if((state_val_29771 === (7))){
var inst_29690 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
if(cljs.core.truth_(inst_29690)){
var statearr_29772_29819 = state_29770__$1;
(statearr_29772_29819[(1)] = (8));

} else {
var statearr_29773_29820 = state_29770__$1;
(statearr_29773_29820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (20))){
var inst_29764 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29774_29821 = state_29770__$1;
(statearr_29774_29821[(2)] = inst_29764);

(statearr_29774_29821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (27))){
var inst_29760 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29775_29822 = state_29770__$1;
(statearr_29775_29822[(2)] = inst_29760);

(statearr_29775_29822[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (1))){
var inst_29683 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29770__$1 = state_29770;
if(cljs.core.truth_(inst_29683)){
var statearr_29776_29823 = state_29770__$1;
(statearr_29776_29823[(1)] = (2));

} else {
var statearr_29777_29824 = state_29770__$1;
(statearr_29777_29824[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (24))){
var inst_29762 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29778_29825 = state_29770__$1;
(statearr_29778_29825[(2)] = inst_29762);

(statearr_29778_29825[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (4))){
var inst_29768 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29770__$1,inst_29768);
} else {
if((state_val_29771 === (15))){
var inst_29766 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29779_29826 = state_29770__$1;
(statearr_29779_29826[(2)] = inst_29766);

(statearr_29779_29826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (21))){
var inst_29719 = (state_29770[(2)]);
var inst_29720 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29721 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29720);
var state_29770__$1 = (function (){var statearr_29780 = state_29770;
(statearr_29780[(7)] = inst_29719);

return statearr_29780;
})();
var statearr_29781_29827 = state_29770__$1;
(statearr_29781_29827[(2)] = inst_29721);

(statearr_29781_29827[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (31))){
var inst_29749 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29770__$1 = state_29770;
if(inst_29749){
var statearr_29782_29828 = state_29770__$1;
(statearr_29782_29828[(1)] = (34));

} else {
var statearr_29783_29829 = state_29770__$1;
(statearr_29783_29829[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (32))){
var inst_29758 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29784_29830 = state_29770__$1;
(statearr_29784_29830[(2)] = inst_29758);

(statearr_29784_29830[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (33))){
var inst_29745 = (state_29770[(2)]);
var inst_29746 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29747 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29746);
var state_29770__$1 = (function (){var statearr_29785 = state_29770;
(statearr_29785[(8)] = inst_29745);

return statearr_29785;
})();
var statearr_29786_29831 = state_29770__$1;
(statearr_29786_29831[(2)] = inst_29747);

(statearr_29786_29831[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (13))){
var inst_29704 = figwheel.client.heads_up.clear.call(null);
var state_29770__$1 = state_29770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29770__$1,(16),inst_29704);
} else {
if((state_val_29771 === (22))){
var inst_29725 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29726 = figwheel.client.heads_up.append_warning_message.call(null,inst_29725);
var state_29770__$1 = state_29770;
var statearr_29787_29832 = state_29770__$1;
(statearr_29787_29832[(2)] = inst_29726);

(statearr_29787_29832[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (36))){
var inst_29756 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29788_29833 = state_29770__$1;
(statearr_29788_29833[(2)] = inst_29756);

(statearr_29788_29833[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (29))){
var inst_29736 = (state_29770[(2)]);
var inst_29737 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29738 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29737);
var state_29770__$1 = (function (){var statearr_29789 = state_29770;
(statearr_29789[(9)] = inst_29736);

return statearr_29789;
})();
var statearr_29790_29834 = state_29770__$1;
(statearr_29790_29834[(2)] = inst_29738);

(statearr_29790_29834[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (6))){
var inst_29685 = (state_29770[(10)]);
var state_29770__$1 = state_29770;
var statearr_29791_29835 = state_29770__$1;
(statearr_29791_29835[(2)] = inst_29685);

(statearr_29791_29835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (28))){
var inst_29732 = (state_29770[(2)]);
var inst_29733 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29734 = figwheel.client.heads_up.display_warning.call(null,inst_29733);
var state_29770__$1 = (function (){var statearr_29792 = state_29770;
(statearr_29792[(11)] = inst_29732);

return statearr_29792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29770__$1,(29),inst_29734);
} else {
if((state_val_29771 === (25))){
var inst_29730 = figwheel.client.heads_up.clear.call(null);
var state_29770__$1 = state_29770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29770__$1,(28),inst_29730);
} else {
if((state_val_29771 === (34))){
var inst_29751 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29770__$1 = state_29770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29770__$1,(37),inst_29751);
} else {
if((state_val_29771 === (17))){
var inst_29710 = (state_29770[(2)]);
var inst_29711 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29712 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29711);
var state_29770__$1 = (function (){var statearr_29793 = state_29770;
(statearr_29793[(12)] = inst_29710);

return statearr_29793;
})();
var statearr_29794_29836 = state_29770__$1;
(statearr_29794_29836[(2)] = inst_29712);

(statearr_29794_29836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (3))){
var inst_29702 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29770__$1 = state_29770;
if(inst_29702){
var statearr_29795_29837 = state_29770__$1;
(statearr_29795_29837[(1)] = (13));

} else {
var statearr_29796_29838 = state_29770__$1;
(statearr_29796_29838[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (12))){
var inst_29698 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29797_29839 = state_29770__$1;
(statearr_29797_29839[(2)] = inst_29698);

(statearr_29797_29839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (2))){
var inst_29685 = (state_29770[(10)]);
var inst_29685__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29770__$1 = (function (){var statearr_29798 = state_29770;
(statearr_29798[(10)] = inst_29685__$1);

return statearr_29798;
})();
if(cljs.core.truth_(inst_29685__$1)){
var statearr_29799_29840 = state_29770__$1;
(statearr_29799_29840[(1)] = (5));

} else {
var statearr_29800_29841 = state_29770__$1;
(statearr_29800_29841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (23))){
var inst_29728 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29770__$1 = state_29770;
if(inst_29728){
var statearr_29801_29842 = state_29770__$1;
(statearr_29801_29842[(1)] = (25));

} else {
var statearr_29802_29843 = state_29770__$1;
(statearr_29802_29843[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (35))){
var state_29770__$1 = state_29770;
var statearr_29803_29844 = state_29770__$1;
(statearr_29803_29844[(2)] = null);

(statearr_29803_29844[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (19))){
var inst_29723 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29770__$1 = state_29770;
if(inst_29723){
var statearr_29804_29845 = state_29770__$1;
(statearr_29804_29845[(1)] = (22));

} else {
var statearr_29805_29846 = state_29770__$1;
(statearr_29805_29846[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (11))){
var inst_29694 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29806_29847 = state_29770__$1;
(statearr_29806_29847[(2)] = inst_29694);

(statearr_29806_29847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (9))){
var inst_29696 = figwheel.client.heads_up.clear.call(null);
var state_29770__$1 = state_29770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29770__$1,(12),inst_29696);
} else {
if((state_val_29771 === (5))){
var inst_29687 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29770__$1 = state_29770;
var statearr_29807_29848 = state_29770__$1;
(statearr_29807_29848[(2)] = inst_29687);

(statearr_29807_29848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (14))){
var inst_29714 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29770__$1 = state_29770;
if(inst_29714){
var statearr_29808_29849 = state_29770__$1;
(statearr_29808_29849[(1)] = (18));

} else {
var statearr_29809_29850 = state_29770__$1;
(statearr_29809_29850[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (26))){
var inst_29740 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29770__$1 = state_29770;
if(inst_29740){
var statearr_29810_29851 = state_29770__$1;
(statearr_29810_29851[(1)] = (30));

} else {
var statearr_29811_29852 = state_29770__$1;
(statearr_29811_29852[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (16))){
var inst_29706 = (state_29770[(2)]);
var inst_29707 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29708 = figwheel.client.heads_up.display_exception.call(null,inst_29707);
var state_29770__$1 = (function (){var statearr_29812 = state_29770;
(statearr_29812[(13)] = inst_29706);

return statearr_29812;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29770__$1,(17),inst_29708);
} else {
if((state_val_29771 === (30))){
var inst_29742 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29743 = figwheel.client.heads_up.display_warning.call(null,inst_29742);
var state_29770__$1 = state_29770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29770__$1,(33),inst_29743);
} else {
if((state_val_29771 === (10))){
var inst_29700 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29813_29853 = state_29770__$1;
(statearr_29813_29853[(2)] = inst_29700);

(statearr_29813_29853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (18))){
var inst_29716 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29717 = figwheel.client.heads_up.display_exception.call(null,inst_29716);
var state_29770__$1 = state_29770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29770__$1,(21),inst_29717);
} else {
if((state_val_29771 === (37))){
var inst_29753 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29814_29854 = state_29770__$1;
(statearr_29814_29854[(2)] = inst_29753);

(statearr_29814_29854[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (8))){
var inst_29692 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29770__$1 = state_29770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29770__$1,(11),inst_29692);
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
});})(c__24434__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24339__auto__,c__24434__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24340__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24340__auto____0 = (function (){
var statearr_29815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29815[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24340__auto__);

(statearr_29815[(1)] = (1));

return statearr_29815;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24340__auto____1 = (function (state_29770){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_29770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e29816){if((e29816 instanceof Object)){
var ex__24343__auto__ = e29816;
var statearr_29817_29855 = state_29770;
(statearr_29817_29855[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29856 = state_29770;
state_29770 = G__29856;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24340__auto__ = function(state_29770){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24340__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24340__auto____1.call(this,state_29770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24340__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24340__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto__,msg_hist,msg_names,msg))
})();
var state__24436__auto__ = (function (){var statearr_29818 = f__24435__auto__.call(null);
(statearr_29818[(6)] = c__24434__auto__);

return statearr_29818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto__,msg_hist,msg_names,msg))
);

return c__24434__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24434__auto___29885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___29885,ch){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___29885,ch){
return (function (state_29871){
var state_val_29872 = (state_29871[(1)]);
if((state_val_29872 === (1))){
var state_29871__$1 = state_29871;
var statearr_29873_29886 = state_29871__$1;
(statearr_29873_29886[(2)] = null);

(statearr_29873_29886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29872 === (2))){
var state_29871__$1 = state_29871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29871__$1,(4),ch);
} else {
if((state_val_29872 === (3))){
var inst_29869 = (state_29871[(2)]);
var state_29871__$1 = state_29871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29871__$1,inst_29869);
} else {
if((state_val_29872 === (4))){
var inst_29859 = (state_29871[(7)]);
var inst_29859__$1 = (state_29871[(2)]);
var state_29871__$1 = (function (){var statearr_29874 = state_29871;
(statearr_29874[(7)] = inst_29859__$1);

return statearr_29874;
})();
if(cljs.core.truth_(inst_29859__$1)){
var statearr_29875_29887 = state_29871__$1;
(statearr_29875_29887[(1)] = (5));

} else {
var statearr_29876_29888 = state_29871__$1;
(statearr_29876_29888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29872 === (5))){
var inst_29859 = (state_29871[(7)]);
var inst_29861 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29859);
var state_29871__$1 = state_29871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29871__$1,(8),inst_29861);
} else {
if((state_val_29872 === (6))){
var state_29871__$1 = state_29871;
var statearr_29877_29889 = state_29871__$1;
(statearr_29877_29889[(2)] = null);

(statearr_29877_29889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29872 === (7))){
var inst_29867 = (state_29871[(2)]);
var state_29871__$1 = state_29871;
var statearr_29878_29890 = state_29871__$1;
(statearr_29878_29890[(2)] = inst_29867);

(statearr_29878_29890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29872 === (8))){
var inst_29863 = (state_29871[(2)]);
var state_29871__$1 = (function (){var statearr_29879 = state_29871;
(statearr_29879[(8)] = inst_29863);

return statearr_29879;
})();
var statearr_29880_29891 = state_29871__$1;
(statearr_29880_29891[(2)] = null);

(statearr_29880_29891[(1)] = (2));


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
});})(c__24434__auto___29885,ch))
;
return ((function (switch__24339__auto__,c__24434__auto___29885,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24340__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24340__auto____0 = (function (){
var statearr_29881 = [null,null,null,null,null,null,null,null,null];
(statearr_29881[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24340__auto__);

(statearr_29881[(1)] = (1));

return statearr_29881;
});
var figwheel$client$heads_up_plugin_$_state_machine__24340__auto____1 = (function (state_29871){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_29871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e29882){if((e29882 instanceof Object)){
var ex__24343__auto__ = e29882;
var statearr_29883_29892 = state_29871;
(statearr_29883_29892[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29893 = state_29871;
state_29871 = G__29893;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24340__auto__ = function(state_29871){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24340__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24340__auto____1.call(this,state_29871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24340__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24340__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___29885,ch))
})();
var state__24436__auto__ = (function (){var statearr_29884 = f__24435__auto__.call(null);
(statearr_29884[(6)] = c__24434__auto___29885);

return statearr_29884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___29885,ch))
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
var c__24434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto__){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto__){
return (function (state_29899){
var state_val_29900 = (state_29899[(1)]);
if((state_val_29900 === (1))){
var inst_29894 = cljs.core.async.timeout.call(null,(3000));
var state_29899__$1 = state_29899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29899__$1,(2),inst_29894);
} else {
if((state_val_29900 === (2))){
var inst_29896 = (state_29899[(2)]);
var inst_29897 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29899__$1 = (function (){var statearr_29901 = state_29899;
(statearr_29901[(7)] = inst_29896);

return statearr_29901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29899__$1,inst_29897);
} else {
return null;
}
}
});})(c__24434__auto__))
;
return ((function (switch__24339__auto__,c__24434__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24340__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24340__auto____0 = (function (){
var statearr_29902 = [null,null,null,null,null,null,null,null];
(statearr_29902[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24340__auto__);

(statearr_29902[(1)] = (1));

return statearr_29902;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24340__auto____1 = (function (state_29899){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_29899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e29903){if((e29903 instanceof Object)){
var ex__24343__auto__ = e29903;
var statearr_29904_29906 = state_29899;
(statearr_29904_29906[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29907 = state_29899;
state_29899 = G__29907;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24340__auto__ = function(state_29899){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24340__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24340__auto____1.call(this,state_29899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24340__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24340__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto__))
})();
var state__24436__auto__ = (function (){var statearr_29905 = f__24435__auto__.call(null);
(statearr_29905[(6)] = c__24434__auto__);

return statearr_29905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto__))
);

return c__24434__auto__;
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
var c__24434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto__,figwheel_version,temp__5457__auto__){
return (function (state_29914){
var state_val_29915 = (state_29914[(1)]);
if((state_val_29915 === (1))){
var inst_29908 = cljs.core.async.timeout.call(null,(2000));
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29914__$1,(2),inst_29908);
} else {
if((state_val_29915 === (2))){
var inst_29910 = (state_29914[(2)]);
var inst_29911 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29912 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29911);
var state_29914__$1 = (function (){var statearr_29916 = state_29914;
(statearr_29916[(7)] = inst_29910);

return statearr_29916;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29914__$1,inst_29912);
} else {
return null;
}
}
});})(c__24434__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__24339__auto__,c__24434__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24340__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24340__auto____0 = (function (){
var statearr_29917 = [null,null,null,null,null,null,null,null];
(statearr_29917[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24340__auto__);

(statearr_29917[(1)] = (1));

return statearr_29917;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24340__auto____1 = (function (state_29914){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_29914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e29918){if((e29918 instanceof Object)){
var ex__24343__auto__ = e29918;
var statearr_29919_29921 = state_29914;
(statearr_29919_29921[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29922 = state_29914;
state_29914 = G__29922;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24340__auto__ = function(state_29914){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24340__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24340__auto____1.call(this,state_29914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24340__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24340__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto__,figwheel_version,temp__5457__auto__))
})();
var state__24436__auto__ = (function (){var statearr_29920 = f__24435__auto__.call(null);
(statearr_29920[(6)] = c__24434__auto__);

return statearr_29920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto__,figwheel_version,temp__5457__auto__))
);

return c__24434__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29923){
var map__29924 = p__29923;
var map__29924__$1 = (((((!((map__29924 == null))))?(((((map__29924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29924):map__29924);
var file = cljs.core.get.call(null,map__29924__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29924__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29924__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29926 = "";
var G__29926__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29926),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29926);
var G__29926__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29926__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29926__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29926__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29926__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29927){
var map__29928 = p__29927;
var map__29928__$1 = (((((!((map__29928 == null))))?(((((map__29928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29928):map__29928);
var ed = map__29928__$1;
var formatted_exception = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29930_29934 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29931_29935 = null;
var count__29932_29936 = (0);
var i__29933_29937 = (0);
while(true){
if((i__29933_29937 < count__29932_29936)){
var msg_29938 = cljs.core._nth.call(null,chunk__29931_29935,i__29933_29937);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29938);


var G__29939 = seq__29930_29934;
var G__29940 = chunk__29931_29935;
var G__29941 = count__29932_29936;
var G__29942 = (i__29933_29937 + (1));
seq__29930_29934 = G__29939;
chunk__29931_29935 = G__29940;
count__29932_29936 = G__29941;
i__29933_29937 = G__29942;
continue;
} else {
var temp__5457__auto___29943 = cljs.core.seq.call(null,seq__29930_29934);
if(temp__5457__auto___29943){
var seq__29930_29944__$1 = temp__5457__auto___29943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29930_29944__$1)){
var c__4461__auto___29945 = cljs.core.chunk_first.call(null,seq__29930_29944__$1);
var G__29946 = cljs.core.chunk_rest.call(null,seq__29930_29944__$1);
var G__29947 = c__4461__auto___29945;
var G__29948 = cljs.core.count.call(null,c__4461__auto___29945);
var G__29949 = (0);
seq__29930_29934 = G__29946;
chunk__29931_29935 = G__29947;
count__29932_29936 = G__29948;
i__29933_29937 = G__29949;
continue;
} else {
var msg_29950 = cljs.core.first.call(null,seq__29930_29944__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29950);


var G__29951 = cljs.core.next.call(null,seq__29930_29944__$1);
var G__29952 = null;
var G__29953 = (0);
var G__29954 = (0);
seq__29930_29934 = G__29951;
chunk__29931_29935 = G__29952;
count__29932_29936 = G__29953;
i__29933_29937 = G__29954;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29955){
var map__29956 = p__29955;
var map__29956__$1 = (((((!((map__29956 == null))))?(((((map__29956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29956):map__29956);
var w = map__29956__$1;
var message = cljs.core.get.call(null,map__29956__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29958 = cljs.core.seq.call(null,plugins);
var chunk__29959 = null;
var count__29960 = (0);
var i__29961 = (0);
while(true){
if((i__29961 < count__29960)){
var vec__29962 = cljs.core._nth.call(null,chunk__29959,i__29961);
var k = cljs.core.nth.call(null,vec__29962,(0),null);
var plugin = cljs.core.nth.call(null,vec__29962,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29968 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29958,chunk__29959,count__29960,i__29961,pl_29968,vec__29962,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29968.call(null,msg_hist);
});})(seq__29958,chunk__29959,count__29960,i__29961,pl_29968,vec__29962,k,plugin))
);
} else {
}


var G__29969 = seq__29958;
var G__29970 = chunk__29959;
var G__29971 = count__29960;
var G__29972 = (i__29961 + (1));
seq__29958 = G__29969;
chunk__29959 = G__29970;
count__29960 = G__29971;
i__29961 = G__29972;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29958);
if(temp__5457__auto__){
var seq__29958__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29958__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29958__$1);
var G__29973 = cljs.core.chunk_rest.call(null,seq__29958__$1);
var G__29974 = c__4461__auto__;
var G__29975 = cljs.core.count.call(null,c__4461__auto__);
var G__29976 = (0);
seq__29958 = G__29973;
chunk__29959 = G__29974;
count__29960 = G__29975;
i__29961 = G__29976;
continue;
} else {
var vec__29965 = cljs.core.first.call(null,seq__29958__$1);
var k = cljs.core.nth.call(null,vec__29965,(0),null);
var plugin = cljs.core.nth.call(null,vec__29965,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29977 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29958,chunk__29959,count__29960,i__29961,pl_29977,vec__29965,k,plugin,seq__29958__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29977.call(null,msg_hist);
});})(seq__29958,chunk__29959,count__29960,i__29961,pl_29977,vec__29965,k,plugin,seq__29958__$1,temp__5457__auto__))
);
} else {
}


var G__29978 = cljs.core.next.call(null,seq__29958__$1);
var G__29979 = null;
var G__29980 = (0);
var G__29981 = (0);
seq__29958 = G__29978;
chunk__29959 = G__29979;
count__29960 = G__29980;
i__29961 = G__29981;
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
var G__29983 = arguments.length;
switch (G__29983) {
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

var seq__29984_29989 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29985_29990 = null;
var count__29986_29991 = (0);
var i__29987_29992 = (0);
while(true){
if((i__29987_29992 < count__29986_29991)){
var msg_29993 = cljs.core._nth.call(null,chunk__29985_29990,i__29987_29992);
figwheel.client.socket.handle_incoming_message.call(null,msg_29993);


var G__29994 = seq__29984_29989;
var G__29995 = chunk__29985_29990;
var G__29996 = count__29986_29991;
var G__29997 = (i__29987_29992 + (1));
seq__29984_29989 = G__29994;
chunk__29985_29990 = G__29995;
count__29986_29991 = G__29996;
i__29987_29992 = G__29997;
continue;
} else {
var temp__5457__auto___29998 = cljs.core.seq.call(null,seq__29984_29989);
if(temp__5457__auto___29998){
var seq__29984_29999__$1 = temp__5457__auto___29998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29984_29999__$1)){
var c__4461__auto___30000 = cljs.core.chunk_first.call(null,seq__29984_29999__$1);
var G__30001 = cljs.core.chunk_rest.call(null,seq__29984_29999__$1);
var G__30002 = c__4461__auto___30000;
var G__30003 = cljs.core.count.call(null,c__4461__auto___30000);
var G__30004 = (0);
seq__29984_29989 = G__30001;
chunk__29985_29990 = G__30002;
count__29986_29991 = G__30003;
i__29987_29992 = G__30004;
continue;
} else {
var msg_30005 = cljs.core.first.call(null,seq__29984_29999__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30005);


var G__30006 = cljs.core.next.call(null,seq__29984_29999__$1);
var G__30007 = null;
var G__30008 = (0);
var G__30009 = (0);
seq__29984_29989 = G__30006;
chunk__29985_29990 = G__30007;
count__29986_29991 = G__30008;
i__29987_29992 = G__30009;
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
var len__4641__auto___30014 = arguments.length;
var i__4642__auto___30015 = (0);
while(true){
if((i__4642__auto___30015 < len__4641__auto___30014)){
args__4647__auto__.push((arguments[i__4642__auto___30015]));

var G__30016 = (i__4642__auto___30015 + (1));
i__4642__auto___30015 = G__30016;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30011){
var map__30012 = p__30011;
var map__30012__$1 = (((((!((map__30012 == null))))?(((((map__30012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30012):map__30012);
var opts = map__30012__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30010){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30010));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30017){if((e30017 instanceof Error)){
var e = e30017;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30017;

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
return (function (p__30018){
var map__30019 = p__30018;
var map__30019__$1 = (((((!((map__30019 == null))))?(((((map__30019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30019):map__30019);
var msg_name = cljs.core.get.call(null,map__30019__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1543683812124
