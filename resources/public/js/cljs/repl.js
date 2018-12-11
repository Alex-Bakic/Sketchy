// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29889){
var map__29890 = p__29889;
var map__29890__$1 = (((((!((map__29890 == null))))?(((((map__29890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29890):map__29890);
var m = map__29890__$1;
var n = cljs.core.get.call(null,map__29890__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29890__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29892_29914 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29893_29915 = null;
var count__29894_29916 = (0);
var i__29895_29917 = (0);
while(true){
if((i__29895_29917 < count__29894_29916)){
var f_29918 = cljs.core._nth.call(null,chunk__29893_29915,i__29895_29917);
cljs.core.println.call(null,"  ",f_29918);


var G__29919 = seq__29892_29914;
var G__29920 = chunk__29893_29915;
var G__29921 = count__29894_29916;
var G__29922 = (i__29895_29917 + (1));
seq__29892_29914 = G__29919;
chunk__29893_29915 = G__29920;
count__29894_29916 = G__29921;
i__29895_29917 = G__29922;
continue;
} else {
var temp__5457__auto___29923 = cljs.core.seq.call(null,seq__29892_29914);
if(temp__5457__auto___29923){
var seq__29892_29924__$1 = temp__5457__auto___29923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29892_29924__$1)){
var c__4461__auto___29925 = cljs.core.chunk_first.call(null,seq__29892_29924__$1);
var G__29926 = cljs.core.chunk_rest.call(null,seq__29892_29924__$1);
var G__29927 = c__4461__auto___29925;
var G__29928 = cljs.core.count.call(null,c__4461__auto___29925);
var G__29929 = (0);
seq__29892_29914 = G__29926;
chunk__29893_29915 = G__29927;
count__29894_29916 = G__29928;
i__29895_29917 = G__29929;
continue;
} else {
var f_29930 = cljs.core.first.call(null,seq__29892_29924__$1);
cljs.core.println.call(null,"  ",f_29930);


var G__29931 = cljs.core.next.call(null,seq__29892_29924__$1);
var G__29932 = null;
var G__29933 = (0);
var G__29934 = (0);
seq__29892_29914 = G__29931;
chunk__29893_29915 = G__29932;
count__29894_29916 = G__29933;
i__29895_29917 = G__29934;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29935 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29935);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29935)))?cljs.core.second.call(null,arglists_29935):arglists_29935));
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
var seq__29896_29936 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29897_29937 = null;
var count__29898_29938 = (0);
var i__29899_29939 = (0);
while(true){
if((i__29899_29939 < count__29898_29938)){
var vec__29900_29940 = cljs.core._nth.call(null,chunk__29897_29937,i__29899_29939);
var name_29941 = cljs.core.nth.call(null,vec__29900_29940,(0),null);
var map__29903_29942 = cljs.core.nth.call(null,vec__29900_29940,(1),null);
var map__29903_29943__$1 = (((((!((map__29903_29942 == null))))?(((((map__29903_29942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29903_29942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29903_29942):map__29903_29942);
var doc_29944 = cljs.core.get.call(null,map__29903_29943__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29945 = cljs.core.get.call(null,map__29903_29943__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29941);

cljs.core.println.call(null," ",arglists_29945);

if(cljs.core.truth_(doc_29944)){
cljs.core.println.call(null," ",doc_29944);
} else {
}


var G__29946 = seq__29896_29936;
var G__29947 = chunk__29897_29937;
var G__29948 = count__29898_29938;
var G__29949 = (i__29899_29939 + (1));
seq__29896_29936 = G__29946;
chunk__29897_29937 = G__29947;
count__29898_29938 = G__29948;
i__29899_29939 = G__29949;
continue;
} else {
var temp__5457__auto___29950 = cljs.core.seq.call(null,seq__29896_29936);
if(temp__5457__auto___29950){
var seq__29896_29951__$1 = temp__5457__auto___29950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29896_29951__$1)){
var c__4461__auto___29952 = cljs.core.chunk_first.call(null,seq__29896_29951__$1);
var G__29953 = cljs.core.chunk_rest.call(null,seq__29896_29951__$1);
var G__29954 = c__4461__auto___29952;
var G__29955 = cljs.core.count.call(null,c__4461__auto___29952);
var G__29956 = (0);
seq__29896_29936 = G__29953;
chunk__29897_29937 = G__29954;
count__29898_29938 = G__29955;
i__29899_29939 = G__29956;
continue;
} else {
var vec__29905_29957 = cljs.core.first.call(null,seq__29896_29951__$1);
var name_29958 = cljs.core.nth.call(null,vec__29905_29957,(0),null);
var map__29908_29959 = cljs.core.nth.call(null,vec__29905_29957,(1),null);
var map__29908_29960__$1 = (((((!((map__29908_29959 == null))))?(((((map__29908_29959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29908_29959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29908_29959):map__29908_29959);
var doc_29961 = cljs.core.get.call(null,map__29908_29960__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29962 = cljs.core.get.call(null,map__29908_29960__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29958);

cljs.core.println.call(null," ",arglists_29962);

if(cljs.core.truth_(doc_29961)){
cljs.core.println.call(null," ",doc_29961);
} else {
}


var G__29963 = cljs.core.next.call(null,seq__29896_29951__$1);
var G__29964 = null;
var G__29965 = (0);
var G__29966 = (0);
seq__29896_29936 = G__29963;
chunk__29897_29937 = G__29964;
count__29898_29938 = G__29965;
i__29899_29939 = G__29966;
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

var seq__29910 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29911 = null;
var count__29912 = (0);
var i__29913 = (0);
while(true){
if((i__29913 < count__29912)){
var role = cljs.core._nth.call(null,chunk__29911,i__29913);
var temp__5457__auto___29967__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29967__$1)){
var spec_29968 = temp__5457__auto___29967__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29968));
} else {
}


var G__29969 = seq__29910;
var G__29970 = chunk__29911;
var G__29971 = count__29912;
var G__29972 = (i__29913 + (1));
seq__29910 = G__29969;
chunk__29911 = G__29970;
count__29912 = G__29971;
i__29913 = G__29972;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__29910);
if(temp__5457__auto____$1){
var seq__29910__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29910__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29910__$1);
var G__29973 = cljs.core.chunk_rest.call(null,seq__29910__$1);
var G__29974 = c__4461__auto__;
var G__29975 = cljs.core.count.call(null,c__4461__auto__);
var G__29976 = (0);
seq__29910 = G__29973;
chunk__29911 = G__29974;
count__29912 = G__29975;
i__29913 = G__29976;
continue;
} else {
var role = cljs.core.first.call(null,seq__29910__$1);
var temp__5457__auto___29977__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29977__$2)){
var spec_29978 = temp__5457__auto___29977__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29978));
} else {
}


var G__29979 = cljs.core.next.call(null,seq__29910__$1);
var G__29980 = null;
var G__29981 = (0);
var G__29982 = (0);
seq__29910 = G__29979;
chunk__29911 = G__29980;
count__29912 = G__29981;
i__29913 = G__29982;
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

//# sourceMappingURL=repl.js.map?rel=1544535929215
