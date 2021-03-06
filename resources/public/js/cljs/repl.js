// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29968){
var map__29969 = p__29968;
var map__29969__$1 = (((((!((map__29969 == null))))?(((((map__29969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29969):map__29969);
var m = map__29969__$1;
var n = cljs.core.get.call(null,map__29969__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29969__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29971_29993 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29972_29994 = null;
var count__29973_29995 = (0);
var i__29974_29996 = (0);
while(true){
if((i__29974_29996 < count__29973_29995)){
var f_29997 = cljs.core._nth.call(null,chunk__29972_29994,i__29974_29996);
cljs.core.println.call(null,"  ",f_29997);


var G__29998 = seq__29971_29993;
var G__29999 = chunk__29972_29994;
var G__30000 = count__29973_29995;
var G__30001 = (i__29974_29996 + (1));
seq__29971_29993 = G__29998;
chunk__29972_29994 = G__29999;
count__29973_29995 = G__30000;
i__29974_29996 = G__30001;
continue;
} else {
var temp__5720__auto___30002 = cljs.core.seq.call(null,seq__29971_29993);
if(temp__5720__auto___30002){
var seq__29971_30003__$1 = temp__5720__auto___30002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29971_30003__$1)){
var c__4461__auto___30004 = cljs.core.chunk_first.call(null,seq__29971_30003__$1);
var G__30005 = cljs.core.chunk_rest.call(null,seq__29971_30003__$1);
var G__30006 = c__4461__auto___30004;
var G__30007 = cljs.core.count.call(null,c__4461__auto___30004);
var G__30008 = (0);
seq__29971_29993 = G__30005;
chunk__29972_29994 = G__30006;
count__29973_29995 = G__30007;
i__29974_29996 = G__30008;
continue;
} else {
var f_30009 = cljs.core.first.call(null,seq__29971_30003__$1);
cljs.core.println.call(null,"  ",f_30009);


var G__30010 = cljs.core.next.call(null,seq__29971_30003__$1);
var G__30011 = null;
var G__30012 = (0);
var G__30013 = (0);
seq__29971_29993 = G__30010;
chunk__29972_29994 = G__30011;
count__29973_29995 = G__30012;
i__29974_29996 = G__30013;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30014 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30014);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30014)))?cljs.core.second.call(null,arglists_30014):arglists_30014));
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
var seq__29975_30015 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29976_30016 = null;
var count__29977_30017 = (0);
var i__29978_30018 = (0);
while(true){
if((i__29978_30018 < count__29977_30017)){
var vec__29979_30019 = cljs.core._nth.call(null,chunk__29976_30016,i__29978_30018);
var name_30020 = cljs.core.nth.call(null,vec__29979_30019,(0),null);
var map__29982_30021 = cljs.core.nth.call(null,vec__29979_30019,(1),null);
var map__29982_30022__$1 = (((((!((map__29982_30021 == null))))?(((((map__29982_30021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29982_30021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29982_30021):map__29982_30021);
var doc_30023 = cljs.core.get.call(null,map__29982_30022__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30024 = cljs.core.get.call(null,map__29982_30022__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30020);

cljs.core.println.call(null," ",arglists_30024);

if(cljs.core.truth_(doc_30023)){
cljs.core.println.call(null," ",doc_30023);
} else {
}


var G__30025 = seq__29975_30015;
var G__30026 = chunk__29976_30016;
var G__30027 = count__29977_30017;
var G__30028 = (i__29978_30018 + (1));
seq__29975_30015 = G__30025;
chunk__29976_30016 = G__30026;
count__29977_30017 = G__30027;
i__29978_30018 = G__30028;
continue;
} else {
var temp__5720__auto___30029 = cljs.core.seq.call(null,seq__29975_30015);
if(temp__5720__auto___30029){
var seq__29975_30030__$1 = temp__5720__auto___30029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29975_30030__$1)){
var c__4461__auto___30031 = cljs.core.chunk_first.call(null,seq__29975_30030__$1);
var G__30032 = cljs.core.chunk_rest.call(null,seq__29975_30030__$1);
var G__30033 = c__4461__auto___30031;
var G__30034 = cljs.core.count.call(null,c__4461__auto___30031);
var G__30035 = (0);
seq__29975_30015 = G__30032;
chunk__29976_30016 = G__30033;
count__29977_30017 = G__30034;
i__29978_30018 = G__30035;
continue;
} else {
var vec__29984_30036 = cljs.core.first.call(null,seq__29975_30030__$1);
var name_30037 = cljs.core.nth.call(null,vec__29984_30036,(0),null);
var map__29987_30038 = cljs.core.nth.call(null,vec__29984_30036,(1),null);
var map__29987_30039__$1 = (((((!((map__29987_30038 == null))))?(((((map__29987_30038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29987_30038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29987_30038):map__29987_30038);
var doc_30040 = cljs.core.get.call(null,map__29987_30039__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30041 = cljs.core.get.call(null,map__29987_30039__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30037);

cljs.core.println.call(null," ",arglists_30041);

if(cljs.core.truth_(doc_30040)){
cljs.core.println.call(null," ",doc_30040);
} else {
}


var G__30042 = cljs.core.next.call(null,seq__29975_30030__$1);
var G__30043 = null;
var G__30044 = (0);
var G__30045 = (0);
seq__29975_30015 = G__30042;
chunk__29976_30016 = G__30043;
count__29977_30017 = G__30044;
i__29978_30018 = G__30045;
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

var seq__29989 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29990 = null;
var count__29991 = (0);
var i__29992 = (0);
while(true){
if((i__29992 < count__29991)){
var role = cljs.core._nth.call(null,chunk__29990,i__29992);
var temp__5720__auto___30046__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30046__$1)){
var spec_30047 = temp__5720__auto___30046__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30047));
} else {
}


var G__30048 = seq__29989;
var G__30049 = chunk__29990;
var G__30050 = count__29991;
var G__30051 = (i__29992 + (1));
seq__29989 = G__30048;
chunk__29990 = G__30049;
count__29991 = G__30050;
i__29992 = G__30051;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__29989);
if(temp__5720__auto____$1){
var seq__29989__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29989__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29989__$1);
var G__30052 = cljs.core.chunk_rest.call(null,seq__29989__$1);
var G__30053 = c__4461__auto__;
var G__30054 = cljs.core.count.call(null,c__4461__auto__);
var G__30055 = (0);
seq__29989 = G__30052;
chunk__29990 = G__30053;
count__29991 = G__30054;
i__29992 = G__30055;
continue;
} else {
var role = cljs.core.first.call(null,seq__29989__$1);
var temp__5720__auto___30056__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30056__$2)){
var spec_30057 = temp__5720__auto___30056__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30057));
} else {
}


var G__30058 = cljs.core.next.call(null,seq__29989__$1);
var G__30059 = null;
var G__30060 = (0);
var G__30061 = (0);
seq__29989 = G__30058;
chunk__29990 = G__30059;
count__29991 = G__30060;
i__29992 = G__30061;
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

//# sourceMappingURL=repl.js.map?rel=1546164292987
