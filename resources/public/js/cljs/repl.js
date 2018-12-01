// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29247){
var map__29248 = p__29247;
var map__29248__$1 = (((((!((map__29248 == null))))?(((((map__29248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29248):map__29248);
var m = map__29248__$1;
var n = cljs.core.get.call(null,map__29248__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29248__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29250_29272 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29251_29273 = null;
var count__29252_29274 = (0);
var i__29253_29275 = (0);
while(true){
if((i__29253_29275 < count__29252_29274)){
var f_29276 = cljs.core._nth.call(null,chunk__29251_29273,i__29253_29275);
cljs.core.println.call(null,"  ",f_29276);


var G__29277 = seq__29250_29272;
var G__29278 = chunk__29251_29273;
var G__29279 = count__29252_29274;
var G__29280 = (i__29253_29275 + (1));
seq__29250_29272 = G__29277;
chunk__29251_29273 = G__29278;
count__29252_29274 = G__29279;
i__29253_29275 = G__29280;
continue;
} else {
var temp__5457__auto___29281 = cljs.core.seq.call(null,seq__29250_29272);
if(temp__5457__auto___29281){
var seq__29250_29282__$1 = temp__5457__auto___29281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29250_29282__$1)){
var c__4461__auto___29283 = cljs.core.chunk_first.call(null,seq__29250_29282__$1);
var G__29284 = cljs.core.chunk_rest.call(null,seq__29250_29282__$1);
var G__29285 = c__4461__auto___29283;
var G__29286 = cljs.core.count.call(null,c__4461__auto___29283);
var G__29287 = (0);
seq__29250_29272 = G__29284;
chunk__29251_29273 = G__29285;
count__29252_29274 = G__29286;
i__29253_29275 = G__29287;
continue;
} else {
var f_29288 = cljs.core.first.call(null,seq__29250_29282__$1);
cljs.core.println.call(null,"  ",f_29288);


var G__29289 = cljs.core.next.call(null,seq__29250_29282__$1);
var G__29290 = null;
var G__29291 = (0);
var G__29292 = (0);
seq__29250_29272 = G__29289;
chunk__29251_29273 = G__29290;
count__29252_29274 = G__29291;
i__29253_29275 = G__29292;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29293 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29293);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29293)))?cljs.core.second.call(null,arglists_29293):arglists_29293));
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
var seq__29254_29294 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29255_29295 = null;
var count__29256_29296 = (0);
var i__29257_29297 = (0);
while(true){
if((i__29257_29297 < count__29256_29296)){
var vec__29258_29298 = cljs.core._nth.call(null,chunk__29255_29295,i__29257_29297);
var name_29299 = cljs.core.nth.call(null,vec__29258_29298,(0),null);
var map__29261_29300 = cljs.core.nth.call(null,vec__29258_29298,(1),null);
var map__29261_29301__$1 = (((((!((map__29261_29300 == null))))?(((((map__29261_29300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29261_29300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29261_29300):map__29261_29300);
var doc_29302 = cljs.core.get.call(null,map__29261_29301__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29303 = cljs.core.get.call(null,map__29261_29301__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29299);

cljs.core.println.call(null," ",arglists_29303);

if(cljs.core.truth_(doc_29302)){
cljs.core.println.call(null," ",doc_29302);
} else {
}


var G__29304 = seq__29254_29294;
var G__29305 = chunk__29255_29295;
var G__29306 = count__29256_29296;
var G__29307 = (i__29257_29297 + (1));
seq__29254_29294 = G__29304;
chunk__29255_29295 = G__29305;
count__29256_29296 = G__29306;
i__29257_29297 = G__29307;
continue;
} else {
var temp__5457__auto___29308 = cljs.core.seq.call(null,seq__29254_29294);
if(temp__5457__auto___29308){
var seq__29254_29309__$1 = temp__5457__auto___29308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29254_29309__$1)){
var c__4461__auto___29310 = cljs.core.chunk_first.call(null,seq__29254_29309__$1);
var G__29311 = cljs.core.chunk_rest.call(null,seq__29254_29309__$1);
var G__29312 = c__4461__auto___29310;
var G__29313 = cljs.core.count.call(null,c__4461__auto___29310);
var G__29314 = (0);
seq__29254_29294 = G__29311;
chunk__29255_29295 = G__29312;
count__29256_29296 = G__29313;
i__29257_29297 = G__29314;
continue;
} else {
var vec__29263_29315 = cljs.core.first.call(null,seq__29254_29309__$1);
var name_29316 = cljs.core.nth.call(null,vec__29263_29315,(0),null);
var map__29266_29317 = cljs.core.nth.call(null,vec__29263_29315,(1),null);
var map__29266_29318__$1 = (((((!((map__29266_29317 == null))))?(((((map__29266_29317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29266_29317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29266_29317):map__29266_29317);
var doc_29319 = cljs.core.get.call(null,map__29266_29318__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29320 = cljs.core.get.call(null,map__29266_29318__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29316);

cljs.core.println.call(null," ",arglists_29320);

if(cljs.core.truth_(doc_29319)){
cljs.core.println.call(null," ",doc_29319);
} else {
}


var G__29321 = cljs.core.next.call(null,seq__29254_29309__$1);
var G__29322 = null;
var G__29323 = (0);
var G__29324 = (0);
seq__29254_29294 = G__29321;
chunk__29255_29295 = G__29322;
count__29256_29296 = G__29323;
i__29257_29297 = G__29324;
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

var seq__29268 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29269 = null;
var count__29270 = (0);
var i__29271 = (0);
while(true){
if((i__29271 < count__29270)){
var role = cljs.core._nth.call(null,chunk__29269,i__29271);
var temp__5457__auto___29325__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29325__$1)){
var spec_29326 = temp__5457__auto___29325__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29326));
} else {
}


var G__29327 = seq__29268;
var G__29328 = chunk__29269;
var G__29329 = count__29270;
var G__29330 = (i__29271 + (1));
seq__29268 = G__29327;
chunk__29269 = G__29328;
count__29270 = G__29329;
i__29271 = G__29330;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__29268);
if(temp__5457__auto____$1){
var seq__29268__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29268__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29268__$1);
var G__29331 = cljs.core.chunk_rest.call(null,seq__29268__$1);
var G__29332 = c__4461__auto__;
var G__29333 = cljs.core.count.call(null,c__4461__auto__);
var G__29334 = (0);
seq__29268 = G__29331;
chunk__29269 = G__29332;
count__29270 = G__29333;
i__29271 = G__29334;
continue;
} else {
var role = cljs.core.first.call(null,seq__29268__$1);
var temp__5457__auto___29335__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29335__$2)){
var spec_29336 = temp__5457__auto___29335__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29336));
} else {
}


var G__29337 = cljs.core.next.call(null,seq__29268__$1);
var G__29338 = null;
var G__29339 = (0);
var G__29340 = (0);
seq__29268 = G__29337;
chunk__29269 = G__29338;
count__29270 = G__29339;
i__29271 = G__29340;
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

//# sourceMappingURL=repl.js.map?rel=1543683811215
