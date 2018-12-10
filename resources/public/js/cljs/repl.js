// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29893){
var map__29894 = p__29893;
var map__29894__$1 = (((((!((map__29894 == null))))?(((((map__29894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29894):map__29894);
var m = map__29894__$1;
var n = cljs.core.get.call(null,map__29894__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29894__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29896_29918 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29897_29919 = null;
var count__29898_29920 = (0);
var i__29899_29921 = (0);
while(true){
if((i__29899_29921 < count__29898_29920)){
var f_29922 = cljs.core._nth.call(null,chunk__29897_29919,i__29899_29921);
cljs.core.println.call(null,"  ",f_29922);


var G__29923 = seq__29896_29918;
var G__29924 = chunk__29897_29919;
var G__29925 = count__29898_29920;
var G__29926 = (i__29899_29921 + (1));
seq__29896_29918 = G__29923;
chunk__29897_29919 = G__29924;
count__29898_29920 = G__29925;
i__29899_29921 = G__29926;
continue;
} else {
var temp__5457__auto___29927 = cljs.core.seq.call(null,seq__29896_29918);
if(temp__5457__auto___29927){
var seq__29896_29928__$1 = temp__5457__auto___29927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29896_29928__$1)){
var c__4461__auto___29929 = cljs.core.chunk_first.call(null,seq__29896_29928__$1);
var G__29930 = cljs.core.chunk_rest.call(null,seq__29896_29928__$1);
var G__29931 = c__4461__auto___29929;
var G__29932 = cljs.core.count.call(null,c__4461__auto___29929);
var G__29933 = (0);
seq__29896_29918 = G__29930;
chunk__29897_29919 = G__29931;
count__29898_29920 = G__29932;
i__29899_29921 = G__29933;
continue;
} else {
var f_29934 = cljs.core.first.call(null,seq__29896_29928__$1);
cljs.core.println.call(null,"  ",f_29934);


var G__29935 = cljs.core.next.call(null,seq__29896_29928__$1);
var G__29936 = null;
var G__29937 = (0);
var G__29938 = (0);
seq__29896_29918 = G__29935;
chunk__29897_29919 = G__29936;
count__29898_29920 = G__29937;
i__29899_29921 = G__29938;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29939 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29939);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29939)))?cljs.core.second.call(null,arglists_29939):arglists_29939));
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
var seq__29900_29940 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29901_29941 = null;
var count__29902_29942 = (0);
var i__29903_29943 = (0);
while(true){
if((i__29903_29943 < count__29902_29942)){
var vec__29904_29944 = cljs.core._nth.call(null,chunk__29901_29941,i__29903_29943);
var name_29945 = cljs.core.nth.call(null,vec__29904_29944,(0),null);
var map__29907_29946 = cljs.core.nth.call(null,vec__29904_29944,(1),null);
var map__29907_29947__$1 = (((((!((map__29907_29946 == null))))?(((((map__29907_29946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29907_29946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29907_29946):map__29907_29946);
var doc_29948 = cljs.core.get.call(null,map__29907_29947__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29949 = cljs.core.get.call(null,map__29907_29947__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29945);

cljs.core.println.call(null," ",arglists_29949);

if(cljs.core.truth_(doc_29948)){
cljs.core.println.call(null," ",doc_29948);
} else {
}


var G__29950 = seq__29900_29940;
var G__29951 = chunk__29901_29941;
var G__29952 = count__29902_29942;
var G__29953 = (i__29903_29943 + (1));
seq__29900_29940 = G__29950;
chunk__29901_29941 = G__29951;
count__29902_29942 = G__29952;
i__29903_29943 = G__29953;
continue;
} else {
var temp__5457__auto___29954 = cljs.core.seq.call(null,seq__29900_29940);
if(temp__5457__auto___29954){
var seq__29900_29955__$1 = temp__5457__auto___29954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29900_29955__$1)){
var c__4461__auto___29956 = cljs.core.chunk_first.call(null,seq__29900_29955__$1);
var G__29957 = cljs.core.chunk_rest.call(null,seq__29900_29955__$1);
var G__29958 = c__4461__auto___29956;
var G__29959 = cljs.core.count.call(null,c__4461__auto___29956);
var G__29960 = (0);
seq__29900_29940 = G__29957;
chunk__29901_29941 = G__29958;
count__29902_29942 = G__29959;
i__29903_29943 = G__29960;
continue;
} else {
var vec__29909_29961 = cljs.core.first.call(null,seq__29900_29955__$1);
var name_29962 = cljs.core.nth.call(null,vec__29909_29961,(0),null);
var map__29912_29963 = cljs.core.nth.call(null,vec__29909_29961,(1),null);
var map__29912_29964__$1 = (((((!((map__29912_29963 == null))))?(((((map__29912_29963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29912_29963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29912_29963):map__29912_29963);
var doc_29965 = cljs.core.get.call(null,map__29912_29964__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29966 = cljs.core.get.call(null,map__29912_29964__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29962);

cljs.core.println.call(null," ",arglists_29966);

if(cljs.core.truth_(doc_29965)){
cljs.core.println.call(null," ",doc_29965);
} else {
}


var G__29967 = cljs.core.next.call(null,seq__29900_29955__$1);
var G__29968 = null;
var G__29969 = (0);
var G__29970 = (0);
seq__29900_29940 = G__29967;
chunk__29901_29941 = G__29968;
count__29902_29942 = G__29969;
i__29903_29943 = G__29970;
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

var seq__29914 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29915 = null;
var count__29916 = (0);
var i__29917 = (0);
while(true){
if((i__29917 < count__29916)){
var role = cljs.core._nth.call(null,chunk__29915,i__29917);
var temp__5457__auto___29971__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29971__$1)){
var spec_29972 = temp__5457__auto___29971__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29972));
} else {
}


var G__29973 = seq__29914;
var G__29974 = chunk__29915;
var G__29975 = count__29916;
var G__29976 = (i__29917 + (1));
seq__29914 = G__29973;
chunk__29915 = G__29974;
count__29916 = G__29975;
i__29917 = G__29976;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__29914);
if(temp__5457__auto____$1){
var seq__29914__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29914__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29914__$1);
var G__29977 = cljs.core.chunk_rest.call(null,seq__29914__$1);
var G__29978 = c__4461__auto__;
var G__29979 = cljs.core.count.call(null,c__4461__auto__);
var G__29980 = (0);
seq__29914 = G__29977;
chunk__29915 = G__29978;
count__29916 = G__29979;
i__29917 = G__29980;
continue;
} else {
var role = cljs.core.first.call(null,seq__29914__$1);
var temp__5457__auto___29981__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29981__$2)){
var spec_29982 = temp__5457__auto___29981__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29982));
} else {
}


var G__29983 = cljs.core.next.call(null,seq__29914__$1);
var G__29984 = null;
var G__29985 = (0);
var G__29986 = (0);
seq__29914 = G__29983;
chunk__29915 = G__29984;
count__29916 = G__29985;
i__29917 = G__29986;
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

//# sourceMappingURL=repl.js.map?rel=1544468029817
