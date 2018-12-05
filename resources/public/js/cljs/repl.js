// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29388){
var map__29389 = p__29388;
var map__29389__$1 = (((((!((map__29389 == null))))?(((((map__29389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29389):map__29389);
var m = map__29389__$1;
var n = cljs.core.get.call(null,map__29389__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29389__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29391_29413 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29392_29414 = null;
var count__29393_29415 = (0);
var i__29394_29416 = (0);
while(true){
if((i__29394_29416 < count__29393_29415)){
var f_29417 = cljs.core._nth.call(null,chunk__29392_29414,i__29394_29416);
cljs.core.println.call(null,"  ",f_29417);


var G__29418 = seq__29391_29413;
var G__29419 = chunk__29392_29414;
var G__29420 = count__29393_29415;
var G__29421 = (i__29394_29416 + (1));
seq__29391_29413 = G__29418;
chunk__29392_29414 = G__29419;
count__29393_29415 = G__29420;
i__29394_29416 = G__29421;
continue;
} else {
var temp__5457__auto___29422 = cljs.core.seq.call(null,seq__29391_29413);
if(temp__5457__auto___29422){
var seq__29391_29423__$1 = temp__5457__auto___29422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29391_29423__$1)){
var c__4461__auto___29424 = cljs.core.chunk_first.call(null,seq__29391_29423__$1);
var G__29425 = cljs.core.chunk_rest.call(null,seq__29391_29423__$1);
var G__29426 = c__4461__auto___29424;
var G__29427 = cljs.core.count.call(null,c__4461__auto___29424);
var G__29428 = (0);
seq__29391_29413 = G__29425;
chunk__29392_29414 = G__29426;
count__29393_29415 = G__29427;
i__29394_29416 = G__29428;
continue;
} else {
var f_29429 = cljs.core.first.call(null,seq__29391_29423__$1);
cljs.core.println.call(null,"  ",f_29429);


var G__29430 = cljs.core.next.call(null,seq__29391_29423__$1);
var G__29431 = null;
var G__29432 = (0);
var G__29433 = (0);
seq__29391_29413 = G__29430;
chunk__29392_29414 = G__29431;
count__29393_29415 = G__29432;
i__29394_29416 = G__29433;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29434 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29434);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29434)))?cljs.core.second.call(null,arglists_29434):arglists_29434));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29395_29435 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29396_29436 = null;
var count__29397_29437 = (0);
var i__29398_29438 = (0);
while(true){
if((i__29398_29438 < count__29397_29437)){
var vec__29399_29439 = cljs.core._nth.call(null,chunk__29396_29436,i__29398_29438);
var name_29440 = cljs.core.nth.call(null,vec__29399_29439,(0),null);
var map__29402_29441 = cljs.core.nth.call(null,vec__29399_29439,(1),null);
var map__29402_29442__$1 = (((((!((map__29402_29441 == null))))?(((((map__29402_29441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29402_29441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29402_29441):map__29402_29441);
var doc_29443 = cljs.core.get.call(null,map__29402_29442__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29444 = cljs.core.get.call(null,map__29402_29442__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29440);

cljs.core.println.call(null," ",arglists_29444);

if(cljs.core.truth_(doc_29443)){
cljs.core.println.call(null," ",doc_29443);
} else {
}


var G__29445 = seq__29395_29435;
var G__29446 = chunk__29396_29436;
var G__29447 = count__29397_29437;
var G__29448 = (i__29398_29438 + (1));
seq__29395_29435 = G__29445;
chunk__29396_29436 = G__29446;
count__29397_29437 = G__29447;
i__29398_29438 = G__29448;
continue;
} else {
var temp__5457__auto___29449 = cljs.core.seq.call(null,seq__29395_29435);
if(temp__5457__auto___29449){
var seq__29395_29450__$1 = temp__5457__auto___29449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29395_29450__$1)){
var c__4461__auto___29451 = cljs.core.chunk_first.call(null,seq__29395_29450__$1);
var G__29452 = cljs.core.chunk_rest.call(null,seq__29395_29450__$1);
var G__29453 = c__4461__auto___29451;
var G__29454 = cljs.core.count.call(null,c__4461__auto___29451);
var G__29455 = (0);
seq__29395_29435 = G__29452;
chunk__29396_29436 = G__29453;
count__29397_29437 = G__29454;
i__29398_29438 = G__29455;
continue;
} else {
var vec__29404_29456 = cljs.core.first.call(null,seq__29395_29450__$1);
var name_29457 = cljs.core.nth.call(null,vec__29404_29456,(0),null);
var map__29407_29458 = cljs.core.nth.call(null,vec__29404_29456,(1),null);
var map__29407_29459__$1 = (((((!((map__29407_29458 == null))))?(((((map__29407_29458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29407_29458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29407_29458):map__29407_29458);
var doc_29460 = cljs.core.get.call(null,map__29407_29459__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29461 = cljs.core.get.call(null,map__29407_29459__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29457);

cljs.core.println.call(null," ",arglists_29461);

if(cljs.core.truth_(doc_29460)){
cljs.core.println.call(null," ",doc_29460);
} else {
}


var G__29462 = cljs.core.next.call(null,seq__29395_29450__$1);
var G__29463 = null;
var G__29464 = (0);
var G__29465 = (0);
seq__29395_29435 = G__29462;
chunk__29396_29436 = G__29463;
count__29397_29437 = G__29464;
i__29398_29438 = G__29465;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__29409 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29410 = null;
var count__29411 = (0);
var i__29412 = (0);
while(true){
if((i__29412 < count__29411)){
var role = cljs.core._nth.call(null,chunk__29410,i__29412);
var temp__5457__auto___29466__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29466__$1)){
var spec_29467 = temp__5457__auto___29466__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29467));
} else {
}


var G__29468 = seq__29409;
var G__29469 = chunk__29410;
var G__29470 = count__29411;
var G__29471 = (i__29412 + (1));
seq__29409 = G__29468;
chunk__29410 = G__29469;
count__29411 = G__29470;
i__29412 = G__29471;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__29409);
if(temp__5457__auto____$1){
var seq__29409__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29409__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29409__$1);
var G__29472 = cljs.core.chunk_rest.call(null,seq__29409__$1);
var G__29473 = c__4461__auto__;
var G__29474 = cljs.core.count.call(null,c__4461__auto__);
var G__29475 = (0);
seq__29409 = G__29472;
chunk__29410 = G__29473;
count__29411 = G__29474;
i__29412 = G__29475;
continue;
} else {
var role = cljs.core.first.call(null,seq__29409__$1);
var temp__5457__auto___29476__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29476__$2)){
var spec_29477 = temp__5457__auto___29476__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29477));
} else {
}


var G__29478 = cljs.core.next.call(null,seq__29409__$1);
var G__29479 = null;
var G__29480 = (0);
var G__29481 = (0);
seq__29409 = G__29478;
chunk__29410 = G__29479;
count__29411 = G__29480;
i__29412 = G__29481;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1544001718169
