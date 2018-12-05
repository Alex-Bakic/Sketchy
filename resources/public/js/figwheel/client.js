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
}catch (e29676){if((e29676 instanceof Error)){
var e = e29676;
return "Error: Unable to stringify";
} else {
throw e29676;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29679 = arguments.length;
switch (G__29679) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29677_SHARP_){
if(typeof p1__29677_SHARP_ === 'string'){
return p1__29677_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29677_SHARP_);
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
var len__4641__auto___29682 = arguments.length;
var i__4642__auto___29683 = (0);
while(true){
if((i__4642__auto___29683 < len__4641__auto___29682)){
args__4647__auto__.push((arguments[i__4642__auto___29683]));

var G__29684 = (i__4642__auto___29683 + (1));
i__4642__auto___29683 = G__29684;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29681){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29681));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29686 = arguments.length;
var i__4642__auto___29687 = (0);
while(true){
if((i__4642__auto___29687 < len__4641__auto___29686)){
args__4647__auto__.push((arguments[i__4642__auto___29687]));

var G__29688 = (i__4642__auto___29687 + (1));
i__4642__auto___29687 = G__29688;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29685){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29685));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29689){
var map__29690 = p__29689;
var map__29690__$1 = (((((!((map__29690 == null))))?(((((map__29690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29690):map__29690);
var message = cljs.core.get.call(null,map__29690__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29690__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24575__auto___29769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___29769,ch){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___29769,ch){
return (function (state_29741){
var state_val_29742 = (state_29741[(1)]);
if((state_val_29742 === (7))){
var inst_29737 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29743_29770 = state_29741__$1;
(statearr_29743_29770[(2)] = inst_29737);

(statearr_29743_29770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (1))){
var state_29741__$1 = state_29741;
var statearr_29744_29771 = state_29741__$1;
(statearr_29744_29771[(2)] = null);

(statearr_29744_29771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (4))){
var inst_29694 = (state_29741[(7)]);
var inst_29694__$1 = (state_29741[(2)]);
var state_29741__$1 = (function (){var statearr_29745 = state_29741;
(statearr_29745[(7)] = inst_29694__$1);

return statearr_29745;
})();
if(cljs.core.truth_(inst_29694__$1)){
var statearr_29746_29772 = state_29741__$1;
(statearr_29746_29772[(1)] = (5));

} else {
var statearr_29747_29773 = state_29741__$1;
(statearr_29747_29773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (15))){
var inst_29701 = (state_29741[(8)]);
var inst_29716 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29701);
var inst_29717 = cljs.core.first.call(null,inst_29716);
var inst_29718 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29717);
var inst_29719 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29718)].join('');
var inst_29720 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29719);
var state_29741__$1 = state_29741;
var statearr_29748_29774 = state_29741__$1;
(statearr_29748_29774[(2)] = inst_29720);

(statearr_29748_29774[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (13))){
var inst_29725 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29749_29775 = state_29741__$1;
(statearr_29749_29775[(2)] = inst_29725);

(statearr_29749_29775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (6))){
var state_29741__$1 = state_29741;
var statearr_29750_29776 = state_29741__$1;
(statearr_29750_29776[(2)] = null);

(statearr_29750_29776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (17))){
var inst_29723 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29751_29777 = state_29741__$1;
(statearr_29751_29777[(2)] = inst_29723);

(statearr_29751_29777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (3))){
var inst_29739 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29741__$1,inst_29739);
} else {
if((state_val_29742 === (12))){
var inst_29700 = (state_29741[(9)]);
var inst_29714 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29700,opts);
var state_29741__$1 = state_29741;
if(inst_29714){
var statearr_29752_29778 = state_29741__$1;
(statearr_29752_29778[(1)] = (15));

} else {
var statearr_29753_29779 = state_29741__$1;
(statearr_29753_29779[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (2))){
var state_29741__$1 = state_29741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29741__$1,(4),ch);
} else {
if((state_val_29742 === (11))){
var inst_29701 = (state_29741[(8)]);
var inst_29706 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29707 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29701);
var inst_29708 = cljs.core.async.timeout.call(null,(1000));
var inst_29709 = [inst_29707,inst_29708];
var inst_29710 = (new cljs.core.PersistentVector(null,2,(5),inst_29706,inst_29709,null));
var state_29741__$1 = state_29741;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29741__$1,(14),inst_29710);
} else {
if((state_val_29742 === (9))){
var inst_29701 = (state_29741[(8)]);
var inst_29727 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29728 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29701);
var inst_29729 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29728);
var inst_29730 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29729)].join('');
var inst_29731 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29730);
var state_29741__$1 = (function (){var statearr_29754 = state_29741;
(statearr_29754[(10)] = inst_29727);

return statearr_29754;
})();
var statearr_29755_29780 = state_29741__$1;
(statearr_29755_29780[(2)] = inst_29731);

(statearr_29755_29780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (5))){
var inst_29694 = (state_29741[(7)]);
var inst_29696 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29697 = (new cljs.core.PersistentArrayMap(null,2,inst_29696,null));
var inst_29698 = (new cljs.core.PersistentHashSet(null,inst_29697,null));
var inst_29699 = figwheel.client.focus_msgs.call(null,inst_29698,inst_29694);
var inst_29700 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29699);
var inst_29701 = cljs.core.first.call(null,inst_29699);
var inst_29702 = figwheel.client.autoload_QMARK_.call(null);
var state_29741__$1 = (function (){var statearr_29756 = state_29741;
(statearr_29756[(8)] = inst_29701);

(statearr_29756[(9)] = inst_29700);

return statearr_29756;
})();
if(cljs.core.truth_(inst_29702)){
var statearr_29757_29781 = state_29741__$1;
(statearr_29757_29781[(1)] = (8));

} else {
var statearr_29758_29782 = state_29741__$1;
(statearr_29758_29782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (14))){
var inst_29712 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29759_29783 = state_29741__$1;
(statearr_29759_29783[(2)] = inst_29712);

(statearr_29759_29783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (16))){
var state_29741__$1 = state_29741;
var statearr_29760_29784 = state_29741__$1;
(statearr_29760_29784[(2)] = null);

(statearr_29760_29784[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (10))){
var inst_29733 = (state_29741[(2)]);
var state_29741__$1 = (function (){var statearr_29761 = state_29741;
(statearr_29761[(11)] = inst_29733);

return statearr_29761;
})();
var statearr_29762_29785 = state_29741__$1;
(statearr_29762_29785[(2)] = null);

(statearr_29762_29785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (8))){
var inst_29700 = (state_29741[(9)]);
var inst_29704 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29700,opts);
var state_29741__$1 = state_29741;
if(cljs.core.truth_(inst_29704)){
var statearr_29763_29786 = state_29741__$1;
(statearr_29763_29786[(1)] = (11));

} else {
var statearr_29764_29787 = state_29741__$1;
(statearr_29764_29787[(1)] = (12));

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
});})(c__24575__auto___29769,ch))
;
return ((function (switch__24480__auto__,c__24575__auto___29769,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24481__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24481__auto____0 = (function (){
var statearr_29765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29765[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24481__auto__);

(statearr_29765[(1)] = (1));

return statearr_29765;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24481__auto____1 = (function (state_29741){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_29741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e29766){if((e29766 instanceof Object)){
var ex__24484__auto__ = e29766;
var statearr_29767_29788 = state_29741;
(statearr_29767_29788[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29789 = state_29741;
state_29741 = G__29789;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24481__auto__ = function(state_29741){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24481__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24481__auto____1.call(this,state_29741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24481__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24481__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___29769,ch))
})();
var state__24577__auto__ = (function (){var statearr_29768 = f__24576__auto__.call(null);
(statearr_29768[(6)] = c__24575__auto___29769);

return statearr_29768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___29769,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29790_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29790_SHARP_));
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
var base_path_29796 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29796){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29792 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29793 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29794 = true;
var _STAR_print_fn_STAR__temp_val__29795 = ((function (_STAR_print_newline_STAR__orig_val__29792,_STAR_print_fn_STAR__orig_val__29793,_STAR_print_newline_STAR__temp_val__29794,sb,base_path_29796){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__29792,_STAR_print_fn_STAR__orig_val__29793,_STAR_print_newline_STAR__temp_val__29794,sb,base_path_29796))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29794;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29795;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29793;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29792;
}}catch (e29791){if((e29791 instanceof Error)){
var e = e29791;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29796], null));
} else {
var e = e29791;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29796))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29797){
var map__29798 = p__29797;
var map__29798__$1 = (((((!((map__29798 == null))))?(((((map__29798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29798):map__29798);
var opts = map__29798__$1;
var build_id = cljs.core.get.call(null,map__29798__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29798,map__29798__$1,opts,build_id){
return (function (p__29800){
var vec__29801 = p__29800;
var seq__29802 = cljs.core.seq.call(null,vec__29801);
var first__29803 = cljs.core.first.call(null,seq__29802);
var seq__29802__$1 = cljs.core.next.call(null,seq__29802);
var map__29804 = first__29803;
var map__29804__$1 = (((((!((map__29804 == null))))?(((((map__29804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29804):map__29804);
var msg = map__29804__$1;
var msg_name = cljs.core.get.call(null,map__29804__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29802__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29801,seq__29802,first__29803,seq__29802__$1,map__29804,map__29804__$1,msg,msg_name,_,map__29798,map__29798__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29801,seq__29802,first__29803,seq__29802__$1,map__29804,map__29804__$1,msg,msg_name,_,map__29798,map__29798__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29798,map__29798__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29806){
var vec__29807 = p__29806;
var seq__29808 = cljs.core.seq.call(null,vec__29807);
var first__29809 = cljs.core.first.call(null,seq__29808);
var seq__29808__$1 = cljs.core.next.call(null,seq__29808);
var map__29810 = first__29809;
var map__29810__$1 = (((((!((map__29810 == null))))?(((((map__29810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29810):map__29810);
var msg = map__29810__$1;
var msg_name = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29808__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29812){
var map__29813 = p__29812;
var map__29813__$1 = (((((!((map__29813 == null))))?(((((map__29813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29813):map__29813);
var on_compile_warning = cljs.core.get.call(null,map__29813__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29813__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29813,map__29813__$1,on_compile_warning,on_compile_fail){
return (function (p__29815){
var vec__29816 = p__29815;
var seq__29817 = cljs.core.seq.call(null,vec__29816);
var first__29818 = cljs.core.first.call(null,seq__29817);
var seq__29817__$1 = cljs.core.next.call(null,seq__29817);
var map__29819 = first__29818;
var map__29819__$1 = (((((!((map__29819 == null))))?(((((map__29819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29819):map__29819);
var msg = map__29819__$1;
var msg_name = cljs.core.get.call(null,map__29819__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29817__$1;
var pred__29821 = cljs.core._EQ_;
var expr__29822 = msg_name;
if(cljs.core.truth_(pred__29821.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29822))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29821.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29822))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29813,map__29813__$1,on_compile_warning,on_compile_fail))
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
var c__24575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto__,msg_hist,msg_names,msg){
return (function (state_29911){
var state_val_29912 = (state_29911[(1)]);
if((state_val_29912 === (7))){
var inst_29831 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
if(cljs.core.truth_(inst_29831)){
var statearr_29913_29960 = state_29911__$1;
(statearr_29913_29960[(1)] = (8));

} else {
var statearr_29914_29961 = state_29911__$1;
(statearr_29914_29961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (20))){
var inst_29905 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29915_29962 = state_29911__$1;
(statearr_29915_29962[(2)] = inst_29905);

(statearr_29915_29962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (27))){
var inst_29901 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29916_29963 = state_29911__$1;
(statearr_29916_29963[(2)] = inst_29901);

(statearr_29916_29963[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (1))){
var inst_29824 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29911__$1 = state_29911;
if(cljs.core.truth_(inst_29824)){
var statearr_29917_29964 = state_29911__$1;
(statearr_29917_29964[(1)] = (2));

} else {
var statearr_29918_29965 = state_29911__$1;
(statearr_29918_29965[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (24))){
var inst_29903 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29919_29966 = state_29911__$1;
(statearr_29919_29966[(2)] = inst_29903);

(statearr_29919_29966[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (4))){
var inst_29909 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29911__$1,inst_29909);
} else {
if((state_val_29912 === (15))){
var inst_29907 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29920_29967 = state_29911__$1;
(statearr_29920_29967[(2)] = inst_29907);

(statearr_29920_29967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (21))){
var inst_29860 = (state_29911[(2)]);
var inst_29861 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29862 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29861);
var state_29911__$1 = (function (){var statearr_29921 = state_29911;
(statearr_29921[(7)] = inst_29860);

return statearr_29921;
})();
var statearr_29922_29968 = state_29911__$1;
(statearr_29922_29968[(2)] = inst_29862);

(statearr_29922_29968[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (31))){
var inst_29890 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29911__$1 = state_29911;
if(inst_29890){
var statearr_29923_29969 = state_29911__$1;
(statearr_29923_29969[(1)] = (34));

} else {
var statearr_29924_29970 = state_29911__$1;
(statearr_29924_29970[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (32))){
var inst_29899 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29925_29971 = state_29911__$1;
(statearr_29925_29971[(2)] = inst_29899);

(statearr_29925_29971[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (33))){
var inst_29886 = (state_29911[(2)]);
var inst_29887 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29888 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29887);
var state_29911__$1 = (function (){var statearr_29926 = state_29911;
(statearr_29926[(8)] = inst_29886);

return statearr_29926;
})();
var statearr_29927_29972 = state_29911__$1;
(statearr_29927_29972[(2)] = inst_29888);

(statearr_29927_29972[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (13))){
var inst_29845 = figwheel.client.heads_up.clear.call(null);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(16),inst_29845);
} else {
if((state_val_29912 === (22))){
var inst_29866 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29867 = figwheel.client.heads_up.append_warning_message.call(null,inst_29866);
var state_29911__$1 = state_29911;
var statearr_29928_29973 = state_29911__$1;
(statearr_29928_29973[(2)] = inst_29867);

(statearr_29928_29973[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (36))){
var inst_29897 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29929_29974 = state_29911__$1;
(statearr_29929_29974[(2)] = inst_29897);

(statearr_29929_29974[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (29))){
var inst_29877 = (state_29911[(2)]);
var inst_29878 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29879 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29878);
var state_29911__$1 = (function (){var statearr_29930 = state_29911;
(statearr_29930[(9)] = inst_29877);

return statearr_29930;
})();
var statearr_29931_29975 = state_29911__$1;
(statearr_29931_29975[(2)] = inst_29879);

(statearr_29931_29975[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (6))){
var inst_29826 = (state_29911[(10)]);
var state_29911__$1 = state_29911;
var statearr_29932_29976 = state_29911__$1;
(statearr_29932_29976[(2)] = inst_29826);

(statearr_29932_29976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (28))){
var inst_29873 = (state_29911[(2)]);
var inst_29874 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29875 = figwheel.client.heads_up.display_warning.call(null,inst_29874);
var state_29911__$1 = (function (){var statearr_29933 = state_29911;
(statearr_29933[(11)] = inst_29873);

return statearr_29933;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(29),inst_29875);
} else {
if((state_val_29912 === (25))){
var inst_29871 = figwheel.client.heads_up.clear.call(null);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(28),inst_29871);
} else {
if((state_val_29912 === (34))){
var inst_29892 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(37),inst_29892);
} else {
if((state_val_29912 === (17))){
var inst_29851 = (state_29911[(2)]);
var inst_29852 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29853 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29852);
var state_29911__$1 = (function (){var statearr_29934 = state_29911;
(statearr_29934[(12)] = inst_29851);

return statearr_29934;
})();
var statearr_29935_29977 = state_29911__$1;
(statearr_29935_29977[(2)] = inst_29853);

(statearr_29935_29977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (3))){
var inst_29843 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29911__$1 = state_29911;
if(inst_29843){
var statearr_29936_29978 = state_29911__$1;
(statearr_29936_29978[(1)] = (13));

} else {
var statearr_29937_29979 = state_29911__$1;
(statearr_29937_29979[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (12))){
var inst_29839 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29938_29980 = state_29911__$1;
(statearr_29938_29980[(2)] = inst_29839);

(statearr_29938_29980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (2))){
var inst_29826 = (state_29911[(10)]);
var inst_29826__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29911__$1 = (function (){var statearr_29939 = state_29911;
(statearr_29939[(10)] = inst_29826__$1);

return statearr_29939;
})();
if(cljs.core.truth_(inst_29826__$1)){
var statearr_29940_29981 = state_29911__$1;
(statearr_29940_29981[(1)] = (5));

} else {
var statearr_29941_29982 = state_29911__$1;
(statearr_29941_29982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (23))){
var inst_29869 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29911__$1 = state_29911;
if(inst_29869){
var statearr_29942_29983 = state_29911__$1;
(statearr_29942_29983[(1)] = (25));

} else {
var statearr_29943_29984 = state_29911__$1;
(statearr_29943_29984[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (35))){
var state_29911__$1 = state_29911;
var statearr_29944_29985 = state_29911__$1;
(statearr_29944_29985[(2)] = null);

(statearr_29944_29985[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (19))){
var inst_29864 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29911__$1 = state_29911;
if(inst_29864){
var statearr_29945_29986 = state_29911__$1;
(statearr_29945_29986[(1)] = (22));

} else {
var statearr_29946_29987 = state_29911__$1;
(statearr_29946_29987[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (11))){
var inst_29835 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29947_29988 = state_29911__$1;
(statearr_29947_29988[(2)] = inst_29835);

(statearr_29947_29988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (9))){
var inst_29837 = figwheel.client.heads_up.clear.call(null);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(12),inst_29837);
} else {
if((state_val_29912 === (5))){
var inst_29828 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29911__$1 = state_29911;
var statearr_29948_29989 = state_29911__$1;
(statearr_29948_29989[(2)] = inst_29828);

(statearr_29948_29989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (14))){
var inst_29855 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29911__$1 = state_29911;
if(inst_29855){
var statearr_29949_29990 = state_29911__$1;
(statearr_29949_29990[(1)] = (18));

} else {
var statearr_29950_29991 = state_29911__$1;
(statearr_29950_29991[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (26))){
var inst_29881 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29911__$1 = state_29911;
if(inst_29881){
var statearr_29951_29992 = state_29911__$1;
(statearr_29951_29992[(1)] = (30));

} else {
var statearr_29952_29993 = state_29911__$1;
(statearr_29952_29993[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (16))){
var inst_29847 = (state_29911[(2)]);
var inst_29848 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29849 = figwheel.client.heads_up.display_exception.call(null,inst_29848);
var state_29911__$1 = (function (){var statearr_29953 = state_29911;
(statearr_29953[(13)] = inst_29847);

return statearr_29953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(17),inst_29849);
} else {
if((state_val_29912 === (30))){
var inst_29883 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29884 = figwheel.client.heads_up.display_warning.call(null,inst_29883);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(33),inst_29884);
} else {
if((state_val_29912 === (10))){
var inst_29841 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29954_29994 = state_29911__$1;
(statearr_29954_29994[(2)] = inst_29841);

(statearr_29954_29994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (18))){
var inst_29857 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29858 = figwheel.client.heads_up.display_exception.call(null,inst_29857);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(21),inst_29858);
} else {
if((state_val_29912 === (37))){
var inst_29894 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29955_29995 = state_29911__$1;
(statearr_29955_29995[(2)] = inst_29894);

(statearr_29955_29995[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (8))){
var inst_29833 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(11),inst_29833);
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
});})(c__24575__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24480__auto__,c__24575__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24481__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24481__auto____0 = (function (){
var statearr_29956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29956[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24481__auto__);

(statearr_29956[(1)] = (1));

return statearr_29956;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24481__auto____1 = (function (state_29911){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_29911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e29957){if((e29957 instanceof Object)){
var ex__24484__auto__ = e29957;
var statearr_29958_29996 = state_29911;
(statearr_29958_29996[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29997 = state_29911;
state_29911 = G__29997;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24481__auto__ = function(state_29911){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24481__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24481__auto____1.call(this,state_29911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24481__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24481__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto__,msg_hist,msg_names,msg))
})();
var state__24577__auto__ = (function (){var statearr_29959 = f__24576__auto__.call(null);
(statearr_29959[(6)] = c__24575__auto__);

return statearr_29959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto__,msg_hist,msg_names,msg))
);

return c__24575__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24575__auto___30026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___30026,ch){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___30026,ch){
return (function (state_30012){
var state_val_30013 = (state_30012[(1)]);
if((state_val_30013 === (1))){
var state_30012__$1 = state_30012;
var statearr_30014_30027 = state_30012__$1;
(statearr_30014_30027[(2)] = null);

(statearr_30014_30027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30013 === (2))){
var state_30012__$1 = state_30012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30012__$1,(4),ch);
} else {
if((state_val_30013 === (3))){
var inst_30010 = (state_30012[(2)]);
var state_30012__$1 = state_30012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30012__$1,inst_30010);
} else {
if((state_val_30013 === (4))){
var inst_30000 = (state_30012[(7)]);
var inst_30000__$1 = (state_30012[(2)]);
var state_30012__$1 = (function (){var statearr_30015 = state_30012;
(statearr_30015[(7)] = inst_30000__$1);

return statearr_30015;
})();
if(cljs.core.truth_(inst_30000__$1)){
var statearr_30016_30028 = state_30012__$1;
(statearr_30016_30028[(1)] = (5));

} else {
var statearr_30017_30029 = state_30012__$1;
(statearr_30017_30029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30013 === (5))){
var inst_30000 = (state_30012[(7)]);
var inst_30002 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30000);
var state_30012__$1 = state_30012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30012__$1,(8),inst_30002);
} else {
if((state_val_30013 === (6))){
var state_30012__$1 = state_30012;
var statearr_30018_30030 = state_30012__$1;
(statearr_30018_30030[(2)] = null);

(statearr_30018_30030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30013 === (7))){
var inst_30008 = (state_30012[(2)]);
var state_30012__$1 = state_30012;
var statearr_30019_30031 = state_30012__$1;
(statearr_30019_30031[(2)] = inst_30008);

(statearr_30019_30031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30013 === (8))){
var inst_30004 = (state_30012[(2)]);
var state_30012__$1 = (function (){var statearr_30020 = state_30012;
(statearr_30020[(8)] = inst_30004);

return statearr_30020;
})();
var statearr_30021_30032 = state_30012__$1;
(statearr_30021_30032[(2)] = null);

(statearr_30021_30032[(1)] = (2));


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
});})(c__24575__auto___30026,ch))
;
return ((function (switch__24480__auto__,c__24575__auto___30026,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24481__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24481__auto____0 = (function (){
var statearr_30022 = [null,null,null,null,null,null,null,null,null];
(statearr_30022[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24481__auto__);

(statearr_30022[(1)] = (1));

return statearr_30022;
});
var figwheel$client$heads_up_plugin_$_state_machine__24481__auto____1 = (function (state_30012){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_30012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e30023){if((e30023 instanceof Object)){
var ex__24484__auto__ = e30023;
var statearr_30024_30033 = state_30012;
(statearr_30024_30033[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30034 = state_30012;
state_30012 = G__30034;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24481__auto__ = function(state_30012){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24481__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24481__auto____1.call(this,state_30012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24481__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24481__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___30026,ch))
})();
var state__24577__auto__ = (function (){var statearr_30025 = f__24576__auto__.call(null);
(statearr_30025[(6)] = c__24575__auto___30026);

return statearr_30025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___30026,ch))
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
var c__24575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto__){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto__){
return (function (state_30040){
var state_val_30041 = (state_30040[(1)]);
if((state_val_30041 === (1))){
var inst_30035 = cljs.core.async.timeout.call(null,(3000));
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30040__$1,(2),inst_30035);
} else {
if((state_val_30041 === (2))){
var inst_30037 = (state_30040[(2)]);
var inst_30038 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30040__$1 = (function (){var statearr_30042 = state_30040;
(statearr_30042[(7)] = inst_30037);

return statearr_30042;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30040__$1,inst_30038);
} else {
return null;
}
}
});})(c__24575__auto__))
;
return ((function (switch__24480__auto__,c__24575__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24481__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24481__auto____0 = (function (){
var statearr_30043 = [null,null,null,null,null,null,null,null];
(statearr_30043[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24481__auto__);

(statearr_30043[(1)] = (1));

return statearr_30043;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24481__auto____1 = (function (state_30040){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_30040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e30044){if((e30044 instanceof Object)){
var ex__24484__auto__ = e30044;
var statearr_30045_30047 = state_30040;
(statearr_30045_30047[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30048 = state_30040;
state_30040 = G__30048;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24481__auto__ = function(state_30040){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24481__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24481__auto____1.call(this,state_30040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24481__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24481__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto__))
})();
var state__24577__auto__ = (function (){var statearr_30046 = f__24576__auto__.call(null);
(statearr_30046[(6)] = c__24575__auto__);

return statearr_30046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto__))
);

return c__24575__auto__;
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
var c__24575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto__,figwheel_version,temp__5457__auto__){
return (function (state_30055){
var state_val_30056 = (state_30055[(1)]);
if((state_val_30056 === (1))){
var inst_30049 = cljs.core.async.timeout.call(null,(2000));
var state_30055__$1 = state_30055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30055__$1,(2),inst_30049);
} else {
if((state_val_30056 === (2))){
var inst_30051 = (state_30055[(2)]);
var inst_30052 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30053 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30052);
var state_30055__$1 = (function (){var statearr_30057 = state_30055;
(statearr_30057[(7)] = inst_30051);

return statearr_30057;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30055__$1,inst_30053);
} else {
return null;
}
}
});})(c__24575__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__24480__auto__,c__24575__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24481__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24481__auto____0 = (function (){
var statearr_30058 = [null,null,null,null,null,null,null,null];
(statearr_30058[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24481__auto__);

(statearr_30058[(1)] = (1));

return statearr_30058;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24481__auto____1 = (function (state_30055){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_30055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e30059){if((e30059 instanceof Object)){
var ex__24484__auto__ = e30059;
var statearr_30060_30062 = state_30055;
(statearr_30060_30062[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30063 = state_30055;
state_30055 = G__30063;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24481__auto__ = function(state_30055){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24481__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24481__auto____1.call(this,state_30055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24481__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24481__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto__,figwheel_version,temp__5457__auto__))
})();
var state__24577__auto__ = (function (){var statearr_30061 = f__24576__auto__.call(null);
(statearr_30061[(6)] = c__24575__auto__);

return statearr_30061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto__,figwheel_version,temp__5457__auto__))
);

return c__24575__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30064){
var map__30065 = p__30064;
var map__30065__$1 = (((((!((map__30065 == null))))?(((((map__30065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30065):map__30065);
var file = cljs.core.get.call(null,map__30065__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30065__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30065__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30067 = "";
var G__30067__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30067),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30067);
var G__30067__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30067__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30067__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30067__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30067__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30068){
var map__30069 = p__30068;
var map__30069__$1 = (((((!((map__30069 == null))))?(((((map__30069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30069):map__30069);
var ed = map__30069__$1;
var formatted_exception = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30071_30075 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30072_30076 = null;
var count__30073_30077 = (0);
var i__30074_30078 = (0);
while(true){
if((i__30074_30078 < count__30073_30077)){
var msg_30079 = cljs.core._nth.call(null,chunk__30072_30076,i__30074_30078);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30079);


var G__30080 = seq__30071_30075;
var G__30081 = chunk__30072_30076;
var G__30082 = count__30073_30077;
var G__30083 = (i__30074_30078 + (1));
seq__30071_30075 = G__30080;
chunk__30072_30076 = G__30081;
count__30073_30077 = G__30082;
i__30074_30078 = G__30083;
continue;
} else {
var temp__5457__auto___30084 = cljs.core.seq.call(null,seq__30071_30075);
if(temp__5457__auto___30084){
var seq__30071_30085__$1 = temp__5457__auto___30084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30071_30085__$1)){
var c__4461__auto___30086 = cljs.core.chunk_first.call(null,seq__30071_30085__$1);
var G__30087 = cljs.core.chunk_rest.call(null,seq__30071_30085__$1);
var G__30088 = c__4461__auto___30086;
var G__30089 = cljs.core.count.call(null,c__4461__auto___30086);
var G__30090 = (0);
seq__30071_30075 = G__30087;
chunk__30072_30076 = G__30088;
count__30073_30077 = G__30089;
i__30074_30078 = G__30090;
continue;
} else {
var msg_30091 = cljs.core.first.call(null,seq__30071_30085__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30091);


var G__30092 = cljs.core.next.call(null,seq__30071_30085__$1);
var G__30093 = null;
var G__30094 = (0);
var G__30095 = (0);
seq__30071_30075 = G__30092;
chunk__30072_30076 = G__30093;
count__30073_30077 = G__30094;
i__30074_30078 = G__30095;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30096){
var map__30097 = p__30096;
var map__30097__$1 = (((((!((map__30097 == null))))?(((((map__30097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30097):map__30097);
var w = map__30097__$1;
var message = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__30099 = cljs.core.seq.call(null,plugins);
var chunk__30100 = null;
var count__30101 = (0);
var i__30102 = (0);
while(true){
if((i__30102 < count__30101)){
var vec__30103 = cljs.core._nth.call(null,chunk__30100,i__30102);
var k = cljs.core.nth.call(null,vec__30103,(0),null);
var plugin = cljs.core.nth.call(null,vec__30103,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30109 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30099,chunk__30100,count__30101,i__30102,pl_30109,vec__30103,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30109.call(null,msg_hist);
});})(seq__30099,chunk__30100,count__30101,i__30102,pl_30109,vec__30103,k,plugin))
);
} else {
}


var G__30110 = seq__30099;
var G__30111 = chunk__30100;
var G__30112 = count__30101;
var G__30113 = (i__30102 + (1));
seq__30099 = G__30110;
chunk__30100 = G__30111;
count__30101 = G__30112;
i__30102 = G__30113;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30099);
if(temp__5457__auto__){
var seq__30099__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30099__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30099__$1);
var G__30114 = cljs.core.chunk_rest.call(null,seq__30099__$1);
var G__30115 = c__4461__auto__;
var G__30116 = cljs.core.count.call(null,c__4461__auto__);
var G__30117 = (0);
seq__30099 = G__30114;
chunk__30100 = G__30115;
count__30101 = G__30116;
i__30102 = G__30117;
continue;
} else {
var vec__30106 = cljs.core.first.call(null,seq__30099__$1);
var k = cljs.core.nth.call(null,vec__30106,(0),null);
var plugin = cljs.core.nth.call(null,vec__30106,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30118 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30099,chunk__30100,count__30101,i__30102,pl_30118,vec__30106,k,plugin,seq__30099__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30118.call(null,msg_hist);
});})(seq__30099,chunk__30100,count__30101,i__30102,pl_30118,vec__30106,k,plugin,seq__30099__$1,temp__5457__auto__))
);
} else {
}


var G__30119 = cljs.core.next.call(null,seq__30099__$1);
var G__30120 = null;
var G__30121 = (0);
var G__30122 = (0);
seq__30099 = G__30119;
chunk__30100 = G__30120;
count__30101 = G__30121;
i__30102 = G__30122;
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
var G__30124 = arguments.length;
switch (G__30124) {
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

var seq__30125_30130 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30126_30131 = null;
var count__30127_30132 = (0);
var i__30128_30133 = (0);
while(true){
if((i__30128_30133 < count__30127_30132)){
var msg_30134 = cljs.core._nth.call(null,chunk__30126_30131,i__30128_30133);
figwheel.client.socket.handle_incoming_message.call(null,msg_30134);


var G__30135 = seq__30125_30130;
var G__30136 = chunk__30126_30131;
var G__30137 = count__30127_30132;
var G__30138 = (i__30128_30133 + (1));
seq__30125_30130 = G__30135;
chunk__30126_30131 = G__30136;
count__30127_30132 = G__30137;
i__30128_30133 = G__30138;
continue;
} else {
var temp__5457__auto___30139 = cljs.core.seq.call(null,seq__30125_30130);
if(temp__5457__auto___30139){
var seq__30125_30140__$1 = temp__5457__auto___30139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30125_30140__$1)){
var c__4461__auto___30141 = cljs.core.chunk_first.call(null,seq__30125_30140__$1);
var G__30142 = cljs.core.chunk_rest.call(null,seq__30125_30140__$1);
var G__30143 = c__4461__auto___30141;
var G__30144 = cljs.core.count.call(null,c__4461__auto___30141);
var G__30145 = (0);
seq__30125_30130 = G__30142;
chunk__30126_30131 = G__30143;
count__30127_30132 = G__30144;
i__30128_30133 = G__30145;
continue;
} else {
var msg_30146 = cljs.core.first.call(null,seq__30125_30140__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30146);


var G__30147 = cljs.core.next.call(null,seq__30125_30140__$1);
var G__30148 = null;
var G__30149 = (0);
var G__30150 = (0);
seq__30125_30130 = G__30147;
chunk__30126_30131 = G__30148;
count__30127_30132 = G__30149;
i__30128_30133 = G__30150;
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
var len__4641__auto___30155 = arguments.length;
var i__4642__auto___30156 = (0);
while(true){
if((i__4642__auto___30156 < len__4641__auto___30155)){
args__4647__auto__.push((arguments[i__4642__auto___30156]));

var G__30157 = (i__4642__auto___30156 + (1));
i__4642__auto___30156 = G__30157;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30152){
var map__30153 = p__30152;
var map__30153__$1 = (((((!((map__30153 == null))))?(((((map__30153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30153):map__30153);
var opts = map__30153__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30151){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30151));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30158){if((e30158 instanceof Error)){
var e = e30158;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30158;

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
return (function (p__30159){
var map__30160 = p__30159;
var map__30160__$1 = (((((!((map__30160 == null))))?(((((map__30160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30160):map__30160);
var msg_name = cljs.core.get.call(null,map__30160__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1544001719079
