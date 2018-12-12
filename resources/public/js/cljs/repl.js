// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29897){
var map__29898 = p__29897;
var map__29898__$1 = (((((!((map__29898 == null))))?(((((map__29898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29898):map__29898);
var m = map__29898__$1;
var n = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29900_29922 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29901_29923 = null;
var count__29902_29924 = (0);
var i__29903_29925 = (0);
while(true){
if((i__29903_29925 < count__29902_29924)){
var f_29926 = cljs.core._nth.call(null,chunk__29901_29923,i__29903_29925);
cljs.core.println.call(null,"  ",f_29926);


var G__29927 = seq__29900_29922;
var G__29928 = chunk__29901_29923;
var G__29929 = count__29902_29924;
var G__29930 = (i__29903_29925 + (1));
seq__29900_29922 = G__29927;
chunk__29901_29923 = G__29928;
count__29902_29924 = G__29929;
i__29903_29925 = G__29930;
continue;
} else {
var temp__5457__auto___29931 = cljs.core.seq.call(null,seq__29900_29922);
if(temp__5457__auto___29931){
var seq__29900_29932__$1 = temp__5457__auto___29931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29900_29932__$1)){
var c__4461__auto___29933 = cljs.core.chunk_first.call(null,seq__29900_29932__$1);
var G__29934 = cljs.core.chunk_rest.call(null,seq__29900_29932__$1);
var G__29935 = c__4461__auto___29933;
var G__29936 = cljs.core.count.call(null,c__4461__auto___29933);
var G__29937 = (0);
seq__29900_29922 = G__29934;
chunk__29901_29923 = G__29935;
count__29902_29924 = G__29936;
i__29903_29925 = G__29937;
continue;
} else {
var f_29938 = cljs.core.first.call(null,seq__29900_29932__$1);
cljs.core.println.call(null,"  ",f_29938);


var G__29939 = cljs.core.next.call(null,seq__29900_29932__$1);
var G__29940 = null;
var G__29941 = (0);
var G__29942 = (0);
seq__29900_29922 = G__29939;
chunk__29901_29923 = G__29940;
count__29902_29924 = G__29941;
i__29903_29925 = G__29942;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29943 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29943);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29943)))?cljs.core.second.call(null,arglists_29943):arglists_29943));
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
var seq__29904_29944 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29905_29945 = null;
var count__29906_29946 = (0);
var i__29907_29947 = (0);
while(true){
if((i__29907_29947 < count__29906_29946)){
var vec__29908_29948 = cljs.core._nth.call(null,chunk__29905_29945,i__29907_29947);
var name_29949 = cljs.core.nth.call(null,vec__29908_29948,(0),null);
var map__29911_29950 = cljs.core.nth.call(null,vec__29908_29948,(1),null);
var map__29911_29951__$1 = (((((!((map__29911_29950 == null))))?(((((map__29911_29950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29911_29950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29911_29950):map__29911_29950);
var doc_29952 = cljs.core.get.call(null,map__29911_29951__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29953 = cljs.core.get.call(null,map__29911_29951__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29949);

cljs.core.println.call(null," ",arglists_29953);

if(cljs.core.truth_(doc_29952)){
cljs.core.println.call(null," ",doc_29952);
} else {
}


var G__29954 = seq__29904_29944;
var G__29955 = chunk__29905_29945;
var G__29956 = count__29906_29946;
var G__29957 = (i__29907_29947 + (1));
seq__29904_29944 = G__29954;
chunk__29905_29945 = G__29955;
count__29906_29946 = G__29956;
i__29907_29947 = G__29957;
continue;
} else {
var temp__5457__auto___29958 = cljs.core.seq.call(null,seq__29904_29944);
if(temp__5457__auto___29958){
var seq__29904_29959__$1 = temp__5457__auto___29958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29904_29959__$1)){
var c__4461__auto___29960 = cljs.core.chunk_first.call(null,seq__29904_29959__$1);
var G__29961 = cljs.core.chunk_rest.call(null,seq__29904_29959__$1);
var G__29962 = c__4461__auto___29960;
var G__29963 = cljs.core.count.call(null,c__4461__auto___29960);
var G__29964 = (0);
seq__29904_29944 = G__29961;
chunk__29905_29945 = G__29962;
count__29906_29946 = G__29963;
i__29907_29947 = G__29964;
continue;
} else {
var vec__29913_29965 = cljs.core.first.call(null,seq__29904_29959__$1);
var name_29966 = cljs.core.nth.call(null,vec__29913_29965,(0),null);
var map__29916_29967 = cljs.core.nth.call(null,vec__29913_29965,(1),null);
var map__29916_29968__$1 = (((((!((map__29916_29967 == null))))?(((((map__29916_29967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29916_29967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29916_29967):map__29916_29967);
var doc_29969 = cljs.core.get.call(null,map__29916_29968__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29970 = cljs.core.get.call(null,map__29916_29968__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29966);

cljs.core.println.call(null," ",arglists_29970);

if(cljs.core.truth_(doc_29969)){
cljs.core.println.call(null," ",doc_29969);
} else {
}


var G__29971 = cljs.core.next.call(null,seq__29904_29959__$1);
var G__29972 = null;
var G__29973 = (0);
var G__29974 = (0);
seq__29904_29944 = G__29971;
chunk__29905_29945 = G__29972;
count__29906_29946 = G__29973;
i__29907_29947 = G__29974;
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

var seq__29918 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29919 = null;
var count__29920 = (0);
var i__29921 = (0);
while(true){
if((i__29921 < count__29920)){
var role = cljs.core._nth.call(null,chunk__29919,i__29921);
var temp__5457__auto___29975__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29975__$1)){
var spec_29976 = temp__5457__auto___29975__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29976));
} else {
}


var G__29977 = seq__29918;
var G__29978 = chunk__29919;
var G__29979 = count__29920;
var G__29980 = (i__29921 + (1));
seq__29918 = G__29977;
chunk__29919 = G__29978;
count__29920 = G__29979;
i__29921 = G__29980;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__29918);
if(temp__5457__auto____$1){
var seq__29918__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29918__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29918__$1);
var G__29981 = cljs.core.chunk_rest.call(null,seq__29918__$1);
var G__29982 = c__4461__auto__;
var G__29983 = cljs.core.count.call(null,c__4461__auto__);
var G__29984 = (0);
seq__29918 = G__29981;
chunk__29919 = G__29982;
count__29920 = G__29983;
i__29921 = G__29984;
continue;
} else {
var role = cljs.core.first.call(null,seq__29918__$1);
var temp__5457__auto___29985__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29985__$2)){
var spec_29986 = temp__5457__auto___29985__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29986));
} else {
}


var G__29987 = cljs.core.next.call(null,seq__29918__$1);
var G__29988 = null;
var G__29989 = (0);
var G__29990 = (0);
seq__29918 = G__29987;
chunk__29919 = G__29988;
count__29920 = G__29989;
i__29921 = G__29990;
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

//# sourceMappingURL=repl.js.map?rel=1544650593703
