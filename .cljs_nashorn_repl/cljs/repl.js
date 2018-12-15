// Compiled by ClojureScript 1.10.439 {:target :nashorn}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13359){
var map__13360 = p__13359;
var map__13360__$1 = (((((!((map__13360 == null))))?(((((map__13360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13360):map__13360);
var m = map__13360__$1;
var n = cljs.core.get.call(null,map__13360__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13360__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__13362_13384 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13363_13385 = null;
var count__13364_13386 = (0);
var i__13365_13387 = (0);
while(true){
if((i__13365_13387 < count__13364_13386)){
var f_13388 = cljs.core._nth.call(null,chunk__13363_13385,i__13365_13387);
cljs.core.println.call(null,"  ",f_13388);


var G__13389 = seq__13362_13384;
var G__13390 = chunk__13363_13385;
var G__13391 = count__13364_13386;
var G__13392 = (i__13365_13387 + (1));
seq__13362_13384 = G__13389;
chunk__13363_13385 = G__13390;
count__13364_13386 = G__13391;
i__13365_13387 = G__13392;
continue;
} else {
var temp__5457__auto___13393 = cljs.core.seq.call(null,seq__13362_13384);
if(temp__5457__auto___13393){
var seq__13362_13394__$1 = temp__5457__auto___13393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13362_13394__$1)){
var c__4461__auto___13395 = cljs.core.chunk_first.call(null,seq__13362_13394__$1);
var G__13396 = cljs.core.chunk_rest.call(null,seq__13362_13394__$1);
var G__13397 = c__4461__auto___13395;
var G__13398 = cljs.core.count.call(null,c__4461__auto___13395);
var G__13399 = (0);
seq__13362_13384 = G__13396;
chunk__13363_13385 = G__13397;
count__13364_13386 = G__13398;
i__13365_13387 = G__13399;
continue;
} else {
var f_13400 = cljs.core.first.call(null,seq__13362_13394__$1);
cljs.core.println.call(null,"  ",f_13400);


var G__13401 = cljs.core.next.call(null,seq__13362_13394__$1);
var G__13402 = null;
var G__13403 = (0);
var G__13404 = (0);
seq__13362_13384 = G__13401;
chunk__13363_13385 = G__13402;
count__13364_13386 = G__13403;
i__13365_13387 = G__13404;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13405 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13405);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13405)))?cljs.core.second.call(null,arglists_13405):arglists_13405));
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
var seq__13366_13406 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13367_13407 = null;
var count__13368_13408 = (0);
var i__13369_13409 = (0);
while(true){
if((i__13369_13409 < count__13368_13408)){
var vec__13370_13410 = cljs.core._nth.call(null,chunk__13367_13407,i__13369_13409);
var name_13411 = cljs.core.nth.call(null,vec__13370_13410,(0),null);
var map__13373_13412 = cljs.core.nth.call(null,vec__13370_13410,(1),null);
var map__13373_13413__$1 = (((((!((map__13373_13412 == null))))?(((((map__13373_13412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13373_13412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13373_13412):map__13373_13412);
var doc_13414 = cljs.core.get.call(null,map__13373_13413__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13415 = cljs.core.get.call(null,map__13373_13413__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13411);

cljs.core.println.call(null," ",arglists_13415);

if(cljs.core.truth_(doc_13414)){
cljs.core.println.call(null," ",doc_13414);
} else {
}


var G__13416 = seq__13366_13406;
var G__13417 = chunk__13367_13407;
var G__13418 = count__13368_13408;
var G__13419 = (i__13369_13409 + (1));
seq__13366_13406 = G__13416;
chunk__13367_13407 = G__13417;
count__13368_13408 = G__13418;
i__13369_13409 = G__13419;
continue;
} else {
var temp__5457__auto___13420 = cljs.core.seq.call(null,seq__13366_13406);
if(temp__5457__auto___13420){
var seq__13366_13421__$1 = temp__5457__auto___13420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13366_13421__$1)){
var c__4461__auto___13422 = cljs.core.chunk_first.call(null,seq__13366_13421__$1);
var G__13423 = cljs.core.chunk_rest.call(null,seq__13366_13421__$1);
var G__13424 = c__4461__auto___13422;
var G__13425 = cljs.core.count.call(null,c__4461__auto___13422);
var G__13426 = (0);
seq__13366_13406 = G__13423;
chunk__13367_13407 = G__13424;
count__13368_13408 = G__13425;
i__13369_13409 = G__13426;
continue;
} else {
var vec__13375_13427 = cljs.core.first.call(null,seq__13366_13421__$1);
var name_13428 = cljs.core.nth.call(null,vec__13375_13427,(0),null);
var map__13378_13429 = cljs.core.nth.call(null,vec__13375_13427,(1),null);
var map__13378_13430__$1 = (((((!((map__13378_13429 == null))))?(((((map__13378_13429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13378_13429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13378_13429):map__13378_13429);
var doc_13431 = cljs.core.get.call(null,map__13378_13430__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13432 = cljs.core.get.call(null,map__13378_13430__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13428);

cljs.core.println.call(null," ",arglists_13432);

if(cljs.core.truth_(doc_13431)){
cljs.core.println.call(null," ",doc_13431);
} else {
}


var G__13433 = cljs.core.next.call(null,seq__13366_13421__$1);
var G__13434 = null;
var G__13435 = (0);
var G__13436 = (0);
seq__13366_13406 = G__13433;
chunk__13367_13407 = G__13434;
count__13368_13408 = G__13435;
i__13369_13409 = G__13436;
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

var seq__13380 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13381 = null;
var count__13382 = (0);
var i__13383 = (0);
while(true){
if((i__13383 < count__13382)){
var role = cljs.core._nth.call(null,chunk__13381,i__13383);
var temp__5457__auto___13437__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___13437__$1)){
var spec_13438 = temp__5457__auto___13437__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13438));
} else {
}


var G__13439 = seq__13380;
var G__13440 = chunk__13381;
var G__13441 = count__13382;
var G__13442 = (i__13383 + (1));
seq__13380 = G__13439;
chunk__13381 = G__13440;
count__13382 = G__13441;
i__13383 = G__13442;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__13380);
if(temp__5457__auto____$1){
var seq__13380__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13380__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__13380__$1);
var G__13443 = cljs.core.chunk_rest.call(null,seq__13380__$1);
var G__13444 = c__4461__auto__;
var G__13445 = cljs.core.count.call(null,c__4461__auto__);
var G__13446 = (0);
seq__13380 = G__13443;
chunk__13381 = G__13444;
count__13382 = G__13445;
i__13383 = G__13446;
continue;
} else {
var role = cljs.core.first.call(null,seq__13380__$1);
var temp__5457__auto___13447__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___13447__$2)){
var spec_13448 = temp__5457__auto___13447__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13448));
} else {
}


var G__13449 = cljs.core.next.call(null,seq__13380__$1);
var G__13450 = null;
var G__13451 = (0);
var G__13452 = (0);
seq__13380 = G__13449;
chunk__13381 = G__13450;
count__13382 = G__13451;
i__13383 = G__13452;
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

//# sourceMappingURL=repl.js.map
