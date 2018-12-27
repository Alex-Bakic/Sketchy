// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29946){
var map__29947 = p__29946;
var map__29947__$1 = (((((!((map__29947 == null))))?(((((map__29947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29947):map__29947);
var m = map__29947__$1;
var n = cljs.core.get.call(null,map__29947__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29947__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
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
var seq__29949_29971 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29950_29972 = null;
var count__29951_29973 = (0);
var i__29952_29974 = (0);
while(true){
if((i__29952_29974 < count__29951_29973)){
var f_29975 = cljs.core._nth.call(null,chunk__29950_29972,i__29952_29974);
cljs.core.println.call(null,"  ",f_29975);


var G__29976 = seq__29949_29971;
var G__29977 = chunk__29950_29972;
var G__29978 = count__29951_29973;
var G__29979 = (i__29952_29974 + (1));
seq__29949_29971 = G__29976;
chunk__29950_29972 = G__29977;
count__29951_29973 = G__29978;
i__29952_29974 = G__29979;
continue;
} else {
var temp__5720__auto___29980 = cljs.core.seq.call(null,seq__29949_29971);
if(temp__5720__auto___29980){
var seq__29949_29981__$1 = temp__5720__auto___29980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29949_29981__$1)){
var c__4461__auto___29982 = cljs.core.chunk_first.call(null,seq__29949_29981__$1);
var G__29983 = cljs.core.chunk_rest.call(null,seq__29949_29981__$1);
var G__29984 = c__4461__auto___29982;
var G__29985 = cljs.core.count.call(null,c__4461__auto___29982);
var G__29986 = (0);
seq__29949_29971 = G__29983;
chunk__29950_29972 = G__29984;
count__29951_29973 = G__29985;
i__29952_29974 = G__29986;
continue;
} else {
var f_29987 = cljs.core.first.call(null,seq__29949_29981__$1);
cljs.core.println.call(null,"  ",f_29987);


var G__29988 = cljs.core.next.call(null,seq__29949_29981__$1);
var G__29989 = null;
var G__29990 = (0);
var G__29991 = (0);
seq__29949_29971 = G__29988;
chunk__29950_29972 = G__29989;
count__29951_29973 = G__29990;
i__29952_29974 = G__29991;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29992 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29992);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29992)))?cljs.core.second.call(null,arglists_29992):arglists_29992));
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
var seq__29953_29993 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29954_29994 = null;
var count__29955_29995 = (0);
var i__29956_29996 = (0);
while(true){
if((i__29956_29996 < count__29955_29995)){
var vec__29957_29997 = cljs.core._nth.call(null,chunk__29954_29994,i__29956_29996);
var name_29998 = cljs.core.nth.call(null,vec__29957_29997,(0),null);
var map__29960_29999 = cljs.core.nth.call(null,vec__29957_29997,(1),null);
var map__29960_30000__$1 = (((((!((map__29960_29999 == null))))?(((((map__29960_29999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29960_29999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29960_29999):map__29960_29999);
var doc_30001 = cljs.core.get.call(null,map__29960_30000__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30002 = cljs.core.get.call(null,map__29960_30000__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29998);

cljs.core.println.call(null," ",arglists_30002);

if(cljs.core.truth_(doc_30001)){
cljs.core.println.call(null," ",doc_30001);
} else {
}


var G__30003 = seq__29953_29993;
var G__30004 = chunk__29954_29994;
var G__30005 = count__29955_29995;
var G__30006 = (i__29956_29996 + (1));
seq__29953_29993 = G__30003;
chunk__29954_29994 = G__30004;
count__29955_29995 = G__30005;
i__29956_29996 = G__30006;
continue;
} else {
var temp__5720__auto___30007 = cljs.core.seq.call(null,seq__29953_29993);
if(temp__5720__auto___30007){
var seq__29953_30008__$1 = temp__5720__auto___30007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29953_30008__$1)){
var c__4461__auto___30009 = cljs.core.chunk_first.call(null,seq__29953_30008__$1);
var G__30010 = cljs.core.chunk_rest.call(null,seq__29953_30008__$1);
var G__30011 = c__4461__auto___30009;
var G__30012 = cljs.core.count.call(null,c__4461__auto___30009);
var G__30013 = (0);
seq__29953_29993 = G__30010;
chunk__29954_29994 = G__30011;
count__29955_29995 = G__30012;
i__29956_29996 = G__30013;
continue;
} else {
var vec__29962_30014 = cljs.core.first.call(null,seq__29953_30008__$1);
var name_30015 = cljs.core.nth.call(null,vec__29962_30014,(0),null);
var map__29965_30016 = cljs.core.nth.call(null,vec__29962_30014,(1),null);
var map__29965_30017__$1 = (((((!((map__29965_30016 == null))))?(((((map__29965_30016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29965_30016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29965_30016):map__29965_30016);
var doc_30018 = cljs.core.get.call(null,map__29965_30017__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30019 = cljs.core.get.call(null,map__29965_30017__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30015);

cljs.core.println.call(null," ",arglists_30019);

if(cljs.core.truth_(doc_30018)){
cljs.core.println.call(null," ",doc_30018);
} else {
}


var G__30020 = cljs.core.next.call(null,seq__29953_30008__$1);
var G__30021 = null;
var G__30022 = (0);
var G__30023 = (0);
seq__29953_29993 = G__30020;
chunk__29954_29994 = G__30021;
count__29955_29995 = G__30022;
i__29956_29996 = G__30023;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__29967 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29968 = null;
var count__29969 = (0);
var i__29970 = (0);
while(true){
if((i__29970 < count__29969)){
var role = cljs.core._nth.call(null,chunk__29968,i__29970);
var temp__5720__auto___30024__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30024__$1)){
var spec_30025 = temp__5720__auto___30024__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30025));
} else {
}


var G__30026 = seq__29967;
var G__30027 = chunk__29968;
var G__30028 = count__29969;
var G__30029 = (i__29970 + (1));
seq__29967 = G__30026;
chunk__29968 = G__30027;
count__29969 = G__30028;
i__29970 = G__30029;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__29967);
if(temp__5720__auto____$1){
var seq__29967__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29967__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29967__$1);
var G__30030 = cljs.core.chunk_rest.call(null,seq__29967__$1);
var G__30031 = c__4461__auto__;
var G__30032 = cljs.core.count.call(null,c__4461__auto__);
var G__30033 = (0);
seq__29967 = G__30030;
chunk__29968 = G__30031;
count__29969 = G__30032;
i__29970 = G__30033;
continue;
} else {
var role = cljs.core.first.call(null,seq__29967__$1);
var temp__5720__auto___30034__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30034__$2)){
var spec_30035 = temp__5720__auto___30034__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30035));
} else {
}


var G__30036 = cljs.core.next.call(null,seq__29967__$1);
var G__30037 = null;
var G__30038 = (0);
var G__30039 = (0);
seq__29967 = G__30036;
chunk__29968 = G__30037;
count__29969 = G__30038;
i__29970 = G__30039;
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

//# sourceMappingURL=repl.js.map?rel=1545905849477
