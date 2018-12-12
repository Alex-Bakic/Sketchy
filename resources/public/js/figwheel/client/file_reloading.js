// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28434_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28434_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28435 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28436 = null;
var count__28437 = (0);
var i__28438 = (0);
while(true){
if((i__28438 < count__28437)){
var n = cljs.core._nth.call(null,chunk__28436,i__28438);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28439 = seq__28435;
var G__28440 = chunk__28436;
var G__28441 = count__28437;
var G__28442 = (i__28438 + (1));
seq__28435 = G__28439;
chunk__28436 = G__28440;
count__28437 = G__28441;
i__28438 = G__28442;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28435);
if(temp__5457__auto__){
var seq__28435__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28435__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__28435__$1);
var G__28443 = cljs.core.chunk_rest.call(null,seq__28435__$1);
var G__28444 = c__4461__auto__;
var G__28445 = cljs.core.count.call(null,c__4461__auto__);
var G__28446 = (0);
seq__28435 = G__28443;
chunk__28436 = G__28444;
count__28437 = G__28445;
i__28438 = G__28446;
continue;
} else {
var n = cljs.core.first.call(null,seq__28435__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28447 = cljs.core.next.call(null,seq__28435__$1);
var G__28448 = null;
var G__28449 = (0);
var G__28450 = (0);
seq__28435 = G__28447;
chunk__28436 = G__28448;
count__28437 = G__28449;
i__28438 = G__28450;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28451){
var vec__28452 = p__28451;
var _ = cljs.core.nth.call(null,vec__28452,(0),null);
var v = cljs.core.nth.call(null,vec__28452,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__28455){
var vec__28456 = p__28455;
var k = cljs.core.nth.call(null,vec__28456,(0),null);
var v = cljs.core.nth.call(null,vec__28456,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28468_28476 = cljs.core.seq.call(null,deps);
var chunk__28469_28477 = null;
var count__28470_28478 = (0);
var i__28471_28479 = (0);
while(true){
if((i__28471_28479 < count__28470_28478)){
var dep_28480 = cljs.core._nth.call(null,chunk__28469_28477,i__28471_28479);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_28480;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28480));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28480,(depth + (1)),state);
} else {
}


var G__28481 = seq__28468_28476;
var G__28482 = chunk__28469_28477;
var G__28483 = count__28470_28478;
var G__28484 = (i__28471_28479 + (1));
seq__28468_28476 = G__28481;
chunk__28469_28477 = G__28482;
count__28470_28478 = G__28483;
i__28471_28479 = G__28484;
continue;
} else {
var temp__5457__auto___28485 = cljs.core.seq.call(null,seq__28468_28476);
if(temp__5457__auto___28485){
var seq__28468_28486__$1 = temp__5457__auto___28485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28468_28486__$1)){
var c__4461__auto___28487 = cljs.core.chunk_first.call(null,seq__28468_28486__$1);
var G__28488 = cljs.core.chunk_rest.call(null,seq__28468_28486__$1);
var G__28489 = c__4461__auto___28487;
var G__28490 = cljs.core.count.call(null,c__4461__auto___28487);
var G__28491 = (0);
seq__28468_28476 = G__28488;
chunk__28469_28477 = G__28489;
count__28470_28478 = G__28490;
i__28471_28479 = G__28491;
continue;
} else {
var dep_28492 = cljs.core.first.call(null,seq__28468_28486__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_28492;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28492));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28492,(depth + (1)),state);
} else {
}


var G__28493 = cljs.core.next.call(null,seq__28468_28486__$1);
var G__28494 = null;
var G__28495 = (0);
var G__28496 = (0);
seq__28468_28476 = G__28493;
chunk__28469_28477 = G__28494;
count__28470_28478 = G__28495;
i__28471_28479 = G__28496;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28472){
var vec__28473 = p__28472;
var seq__28474 = cljs.core.seq.call(null,vec__28473);
var first__28475 = cljs.core.first.call(null,seq__28474);
var seq__28474__$1 = cljs.core.next.call(null,seq__28474);
var x = first__28475;
var xs = seq__28474__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28473,seq__28474,first__28475,seq__28474__$1,x,xs,get_deps__$1){
return (function (p1__28459_SHARP_){
return clojure.set.difference.call(null,p1__28459_SHARP_,x);
});})(vec__28473,seq__28474,first__28475,seq__28474__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28497 = cljs.core.seq.call(null,provides);
var chunk__28498 = null;
var count__28499 = (0);
var i__28500 = (0);
while(true){
if((i__28500 < count__28499)){
var prov = cljs.core._nth.call(null,chunk__28498,i__28500);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28501_28509 = cljs.core.seq.call(null,requires);
var chunk__28502_28510 = null;
var count__28503_28511 = (0);
var i__28504_28512 = (0);
while(true){
if((i__28504_28512 < count__28503_28511)){
var req_28513 = cljs.core._nth.call(null,chunk__28502_28510,i__28504_28512);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28513,prov);


var G__28514 = seq__28501_28509;
var G__28515 = chunk__28502_28510;
var G__28516 = count__28503_28511;
var G__28517 = (i__28504_28512 + (1));
seq__28501_28509 = G__28514;
chunk__28502_28510 = G__28515;
count__28503_28511 = G__28516;
i__28504_28512 = G__28517;
continue;
} else {
var temp__5457__auto___28518 = cljs.core.seq.call(null,seq__28501_28509);
if(temp__5457__auto___28518){
var seq__28501_28519__$1 = temp__5457__auto___28518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28501_28519__$1)){
var c__4461__auto___28520 = cljs.core.chunk_first.call(null,seq__28501_28519__$1);
var G__28521 = cljs.core.chunk_rest.call(null,seq__28501_28519__$1);
var G__28522 = c__4461__auto___28520;
var G__28523 = cljs.core.count.call(null,c__4461__auto___28520);
var G__28524 = (0);
seq__28501_28509 = G__28521;
chunk__28502_28510 = G__28522;
count__28503_28511 = G__28523;
i__28504_28512 = G__28524;
continue;
} else {
var req_28525 = cljs.core.first.call(null,seq__28501_28519__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28525,prov);


var G__28526 = cljs.core.next.call(null,seq__28501_28519__$1);
var G__28527 = null;
var G__28528 = (0);
var G__28529 = (0);
seq__28501_28509 = G__28526;
chunk__28502_28510 = G__28527;
count__28503_28511 = G__28528;
i__28504_28512 = G__28529;
continue;
}
} else {
}
}
break;
}


var G__28530 = seq__28497;
var G__28531 = chunk__28498;
var G__28532 = count__28499;
var G__28533 = (i__28500 + (1));
seq__28497 = G__28530;
chunk__28498 = G__28531;
count__28499 = G__28532;
i__28500 = G__28533;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28497);
if(temp__5457__auto__){
var seq__28497__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28497__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__28497__$1);
var G__28534 = cljs.core.chunk_rest.call(null,seq__28497__$1);
var G__28535 = c__4461__auto__;
var G__28536 = cljs.core.count.call(null,c__4461__auto__);
var G__28537 = (0);
seq__28497 = G__28534;
chunk__28498 = G__28535;
count__28499 = G__28536;
i__28500 = G__28537;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28497__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28505_28538 = cljs.core.seq.call(null,requires);
var chunk__28506_28539 = null;
var count__28507_28540 = (0);
var i__28508_28541 = (0);
while(true){
if((i__28508_28541 < count__28507_28540)){
var req_28542 = cljs.core._nth.call(null,chunk__28506_28539,i__28508_28541);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28542,prov);


var G__28543 = seq__28505_28538;
var G__28544 = chunk__28506_28539;
var G__28545 = count__28507_28540;
var G__28546 = (i__28508_28541 + (1));
seq__28505_28538 = G__28543;
chunk__28506_28539 = G__28544;
count__28507_28540 = G__28545;
i__28508_28541 = G__28546;
continue;
} else {
var temp__5457__auto___28547__$1 = cljs.core.seq.call(null,seq__28505_28538);
if(temp__5457__auto___28547__$1){
var seq__28505_28548__$1 = temp__5457__auto___28547__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28505_28548__$1)){
var c__4461__auto___28549 = cljs.core.chunk_first.call(null,seq__28505_28548__$1);
var G__28550 = cljs.core.chunk_rest.call(null,seq__28505_28548__$1);
var G__28551 = c__4461__auto___28549;
var G__28552 = cljs.core.count.call(null,c__4461__auto___28549);
var G__28553 = (0);
seq__28505_28538 = G__28550;
chunk__28506_28539 = G__28551;
count__28507_28540 = G__28552;
i__28508_28541 = G__28553;
continue;
} else {
var req_28554 = cljs.core.first.call(null,seq__28505_28548__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28554,prov);


var G__28555 = cljs.core.next.call(null,seq__28505_28548__$1);
var G__28556 = null;
var G__28557 = (0);
var G__28558 = (0);
seq__28505_28538 = G__28555;
chunk__28506_28539 = G__28556;
count__28507_28540 = G__28557;
i__28508_28541 = G__28558;
continue;
}
} else {
}
}
break;
}


var G__28559 = cljs.core.next.call(null,seq__28497__$1);
var G__28560 = null;
var G__28561 = (0);
var G__28562 = (0);
seq__28497 = G__28559;
chunk__28498 = G__28560;
count__28499 = G__28561;
i__28500 = G__28562;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28563_28567 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28564_28568 = null;
var count__28565_28569 = (0);
var i__28566_28570 = (0);
while(true){
if((i__28566_28570 < count__28565_28569)){
var ns_28571 = cljs.core._nth.call(null,chunk__28564_28568,i__28566_28570);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28571);


var G__28572 = seq__28563_28567;
var G__28573 = chunk__28564_28568;
var G__28574 = count__28565_28569;
var G__28575 = (i__28566_28570 + (1));
seq__28563_28567 = G__28572;
chunk__28564_28568 = G__28573;
count__28565_28569 = G__28574;
i__28566_28570 = G__28575;
continue;
} else {
var temp__5457__auto___28576 = cljs.core.seq.call(null,seq__28563_28567);
if(temp__5457__auto___28576){
var seq__28563_28577__$1 = temp__5457__auto___28576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28563_28577__$1)){
var c__4461__auto___28578 = cljs.core.chunk_first.call(null,seq__28563_28577__$1);
var G__28579 = cljs.core.chunk_rest.call(null,seq__28563_28577__$1);
var G__28580 = c__4461__auto___28578;
var G__28581 = cljs.core.count.call(null,c__4461__auto___28578);
var G__28582 = (0);
seq__28563_28567 = G__28579;
chunk__28564_28568 = G__28580;
count__28565_28569 = G__28581;
i__28566_28570 = G__28582;
continue;
} else {
var ns_28583 = cljs.core.first.call(null,seq__28563_28577__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28583);


var G__28584 = cljs.core.next.call(null,seq__28563_28577__$1);
var G__28585 = null;
var G__28586 = (0);
var G__28587 = (0);
seq__28563_28567 = G__28584;
chunk__28564_28568 = G__28585;
count__28565_28569 = G__28586;
i__28566_28570 = G__28587;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28588__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28589__i = 0, G__28589__a = new Array(arguments.length -  0);
while (G__28589__i < G__28589__a.length) {G__28589__a[G__28589__i] = arguments[G__28589__i + 0]; ++G__28589__i;}
  args = new cljs.core.IndexedSeq(G__28589__a,0,null);
} 
return G__28588__delegate.call(this,args);};
G__28588.cljs$lang$maxFixedArity = 0;
G__28588.cljs$lang$applyTo = (function (arglist__28590){
var args = cljs.core.seq(arglist__28590);
return G__28588__delegate(args);
});
G__28588.cljs$core$IFn$_invoke$arity$variadic = G__28588__delegate;
return G__28588;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28591_SHARP_,p2__28592_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28591_SHARP_)),p2__28592_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28593_SHARP_,p2__28594_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28593_SHARP_),p2__28594_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28595 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28595.addCallback(((function (G__28595){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28595))
);

G__28595.addErrback(((function (G__28595){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28595))
);

return G__28595;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28596){if((e28596 instanceof Error)){
var e = e28596;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28596;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28597){if((e28597 instanceof Error)){
var e = e28597;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28597;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28598 = cljs.core._EQ_;
var expr__28599 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28598.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28599))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28598.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28599))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28598.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28599))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28598,expr__28599){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28598,expr__28599))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28601,callback){
var map__28602 = p__28601;
var map__28602__$1 = (((((!((map__28602 == null))))?(((((map__28602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28602):map__28602);
var file_msg = map__28602__$1;
var request_url = cljs.core.get.call(null,map__28602__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28602,map__28602__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28602,map__28602__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto__){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto__){
return (function (state_28640){
var state_val_28641 = (state_28640[(1)]);
if((state_val_28641 === (7))){
var inst_28636 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28642_28668 = state_28640__$1;
(statearr_28642_28668[(2)] = inst_28636);

(statearr_28642_28668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (1))){
var state_28640__$1 = state_28640;
var statearr_28643_28669 = state_28640__$1;
(statearr_28643_28669[(2)] = null);

(statearr_28643_28669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (4))){
var inst_28606 = (state_28640[(7)]);
var inst_28606__$1 = (state_28640[(2)]);
var state_28640__$1 = (function (){var statearr_28644 = state_28640;
(statearr_28644[(7)] = inst_28606__$1);

return statearr_28644;
})();
if(cljs.core.truth_(inst_28606__$1)){
var statearr_28645_28670 = state_28640__$1;
(statearr_28645_28670[(1)] = (5));

} else {
var statearr_28646_28671 = state_28640__$1;
(statearr_28646_28671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (15))){
var inst_28621 = (state_28640[(8)]);
var inst_28619 = (state_28640[(9)]);
var inst_28623 = inst_28621.call(null,inst_28619);
var state_28640__$1 = state_28640;
var statearr_28647_28672 = state_28640__$1;
(statearr_28647_28672[(2)] = inst_28623);

(statearr_28647_28672[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (13))){
var inst_28630 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28648_28673 = state_28640__$1;
(statearr_28648_28673[(2)] = inst_28630);

(statearr_28648_28673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (6))){
var state_28640__$1 = state_28640;
var statearr_28649_28674 = state_28640__$1;
(statearr_28649_28674[(2)] = null);

(statearr_28649_28674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (17))){
var inst_28627 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28650_28675 = state_28640__$1;
(statearr_28650_28675[(2)] = inst_28627);

(statearr_28650_28675[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (3))){
var inst_28638 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28640__$1,inst_28638);
} else {
if((state_val_28641 === (12))){
var state_28640__$1 = state_28640;
var statearr_28651_28676 = state_28640__$1;
(statearr_28651_28676[(2)] = null);

(statearr_28651_28676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (2))){
var state_28640__$1 = state_28640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28640__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28641 === (11))){
var inst_28611 = (state_28640[(10)]);
var inst_28617 = figwheel.client.file_reloading.blocking_load.call(null,inst_28611);
var state_28640__$1 = state_28640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28640__$1,(14),inst_28617);
} else {
if((state_val_28641 === (9))){
var inst_28611 = (state_28640[(10)]);
var state_28640__$1 = state_28640;
if(cljs.core.truth_(inst_28611)){
var statearr_28652_28677 = state_28640__$1;
(statearr_28652_28677[(1)] = (11));

} else {
var statearr_28653_28678 = state_28640__$1;
(statearr_28653_28678[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (5))){
var inst_28612 = (state_28640[(11)]);
var inst_28606 = (state_28640[(7)]);
var inst_28611 = cljs.core.nth.call(null,inst_28606,(0),null);
var inst_28612__$1 = cljs.core.nth.call(null,inst_28606,(1),null);
var state_28640__$1 = (function (){var statearr_28654 = state_28640;
(statearr_28654[(10)] = inst_28611);

(statearr_28654[(11)] = inst_28612__$1);

return statearr_28654;
})();
if(cljs.core.truth_(inst_28612__$1)){
var statearr_28655_28679 = state_28640__$1;
(statearr_28655_28679[(1)] = (8));

} else {
var statearr_28656_28680 = state_28640__$1;
(statearr_28656_28680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (14))){
var inst_28611 = (state_28640[(10)]);
var inst_28621 = (state_28640[(8)]);
var inst_28619 = (state_28640[(2)]);
var inst_28620 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28621__$1 = cljs.core.get.call(null,inst_28620,inst_28611);
var state_28640__$1 = (function (){var statearr_28657 = state_28640;
(statearr_28657[(8)] = inst_28621__$1);

(statearr_28657[(9)] = inst_28619);

return statearr_28657;
})();
if(cljs.core.truth_(inst_28621__$1)){
var statearr_28658_28681 = state_28640__$1;
(statearr_28658_28681[(1)] = (15));

} else {
var statearr_28659_28682 = state_28640__$1;
(statearr_28659_28682[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (16))){
var inst_28619 = (state_28640[(9)]);
var inst_28625 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28619);
var state_28640__$1 = state_28640;
var statearr_28660_28683 = state_28640__$1;
(statearr_28660_28683[(2)] = inst_28625);

(statearr_28660_28683[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (10))){
var inst_28632 = (state_28640[(2)]);
var state_28640__$1 = (function (){var statearr_28661 = state_28640;
(statearr_28661[(12)] = inst_28632);

return statearr_28661;
})();
var statearr_28662_28684 = state_28640__$1;
(statearr_28662_28684[(2)] = null);

(statearr_28662_28684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (8))){
var inst_28612 = (state_28640[(11)]);
var inst_28614 = eval(inst_28612);
var state_28640__$1 = state_28640;
var statearr_28663_28685 = state_28640__$1;
(statearr_28663_28685[(2)] = inst_28614);

(statearr_28663_28685[(1)] = (10));


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
});})(c__25084__auto__))
;
return ((function (switch__24989__auto__,c__25084__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24990__auto__ = null;
var figwheel$client$file_reloading$state_machine__24990__auto____0 = (function (){
var statearr_28664 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28664[(0)] = figwheel$client$file_reloading$state_machine__24990__auto__);

(statearr_28664[(1)] = (1));

return statearr_28664;
});
var figwheel$client$file_reloading$state_machine__24990__auto____1 = (function (state_28640){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_28640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e28665){if((e28665 instanceof Object)){
var ex__24993__auto__ = e28665;
var statearr_28666_28686 = state_28640;
(statearr_28666_28686[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28687 = state_28640;
state_28640 = G__28687;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24990__auto__ = function(state_28640){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24990__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24990__auto____1.call(this,state_28640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24990__auto____0;
figwheel$client$file_reloading$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24990__auto____1;
return figwheel$client$file_reloading$state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto__))
})();
var state__25086__auto__ = (function (){var statearr_28667 = f__25085__auto__.call(null);
(statearr_28667[(6)] = c__25084__auto__);

return statearr_28667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto__))
);

return c__25084__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28689 = arguments.length;
switch (G__28689) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28691,callback){
var map__28692 = p__28691;
var map__28692__$1 = (((((!((map__28692 == null))))?(((((map__28692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28692):map__28692);
var file_msg = map__28692__$1;
var namespace = cljs.core.get.call(null,map__28692__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28692,map__28692__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28692,map__28692__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28694){
var map__28695 = p__28694;
var map__28695__$1 = (((((!((map__28695 == null))))?(((((map__28695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28695):map__28695);
var file_msg = map__28695__$1;
var namespace = cljs.core.get.call(null,map__28695__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28697){
var map__28698 = p__28697;
var map__28698__$1 = (((((!((map__28698 == null))))?(((((map__28698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28698):map__28698);
var file_msg = map__28698__$1;
var namespace = cljs.core.get.call(null,map__28698__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28700,callback){
var map__28701 = p__28700;
var map__28701__$1 = (((((!((map__28701 == null))))?(((((map__28701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28701):map__28701);
var file_msg = map__28701__$1;
var request_url = cljs.core.get.call(null,map__28701__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28701__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25084__auto___28751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___28751,out){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___28751,out){
return (function (state_28736){
var state_val_28737 = (state_28736[(1)]);
if((state_val_28737 === (1))){
var inst_28710 = cljs.core.seq.call(null,files);
var inst_28711 = cljs.core.first.call(null,inst_28710);
var inst_28712 = cljs.core.next.call(null,inst_28710);
var inst_28713 = files;
var state_28736__$1 = (function (){var statearr_28738 = state_28736;
(statearr_28738[(7)] = inst_28713);

(statearr_28738[(8)] = inst_28711);

(statearr_28738[(9)] = inst_28712);

return statearr_28738;
})();
var statearr_28739_28752 = state_28736__$1;
(statearr_28739_28752[(2)] = null);

(statearr_28739_28752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28737 === (2))){
var inst_28713 = (state_28736[(7)]);
var inst_28719 = (state_28736[(10)]);
var inst_28718 = cljs.core.seq.call(null,inst_28713);
var inst_28719__$1 = cljs.core.first.call(null,inst_28718);
var inst_28720 = cljs.core.next.call(null,inst_28718);
var inst_28721 = (inst_28719__$1 == null);
var inst_28722 = cljs.core.not.call(null,inst_28721);
var state_28736__$1 = (function (){var statearr_28740 = state_28736;
(statearr_28740[(11)] = inst_28720);

(statearr_28740[(10)] = inst_28719__$1);

return statearr_28740;
})();
if(inst_28722){
var statearr_28741_28753 = state_28736__$1;
(statearr_28741_28753[(1)] = (4));

} else {
var statearr_28742_28754 = state_28736__$1;
(statearr_28742_28754[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28737 === (3))){
var inst_28734 = (state_28736[(2)]);
var state_28736__$1 = state_28736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28736__$1,inst_28734);
} else {
if((state_val_28737 === (4))){
var inst_28719 = (state_28736[(10)]);
var inst_28724 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28719);
var state_28736__$1 = state_28736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28736__$1,(7),inst_28724);
} else {
if((state_val_28737 === (5))){
var inst_28730 = cljs.core.async.close_BANG_.call(null,out);
var state_28736__$1 = state_28736;
var statearr_28743_28755 = state_28736__$1;
(statearr_28743_28755[(2)] = inst_28730);

(statearr_28743_28755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28737 === (6))){
var inst_28732 = (state_28736[(2)]);
var state_28736__$1 = state_28736;
var statearr_28744_28756 = state_28736__$1;
(statearr_28744_28756[(2)] = inst_28732);

(statearr_28744_28756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28737 === (7))){
var inst_28720 = (state_28736[(11)]);
var inst_28726 = (state_28736[(2)]);
var inst_28727 = cljs.core.async.put_BANG_.call(null,out,inst_28726);
var inst_28713 = inst_28720;
var state_28736__$1 = (function (){var statearr_28745 = state_28736;
(statearr_28745[(7)] = inst_28713);

(statearr_28745[(12)] = inst_28727);

return statearr_28745;
})();
var statearr_28746_28757 = state_28736__$1;
(statearr_28746_28757[(2)] = null);

(statearr_28746_28757[(1)] = (2));


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
});})(c__25084__auto___28751,out))
;
return ((function (switch__24989__auto__,c__25084__auto___28751,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24990__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24990__auto____0 = (function (){
var statearr_28747 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28747[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24990__auto__);

(statearr_28747[(1)] = (1));

return statearr_28747;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24990__auto____1 = (function (state_28736){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_28736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e28748){if((e28748 instanceof Object)){
var ex__24993__auto__ = e28748;
var statearr_28749_28758 = state_28736;
(statearr_28749_28758[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28759 = state_28736;
state_28736 = G__28759;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24990__auto__ = function(state_28736){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24990__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24990__auto____1.call(this,state_28736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24990__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24990__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___28751,out))
})();
var state__25086__auto__ = (function (){var statearr_28750 = f__25085__auto__.call(null);
(statearr_28750[(6)] = c__25084__auto___28751);

return statearr_28750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___28751,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28760,opts){
var map__28761 = p__28760;
var map__28761__$1 = (((((!((map__28761 == null))))?(((((map__28761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28761):map__28761);
var eval_body = cljs.core.get.call(null,map__28761__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28761__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28763){var e = e28763;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28764_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28764_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28765){
var vec__28766 = p__28765;
var k = cljs.core.nth.call(null,vec__28766,(0),null);
var v = cljs.core.nth.call(null,vec__28766,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28769){
var vec__28770 = p__28769;
var k = cljs.core.nth.call(null,vec__28770,(0),null);
var v = cljs.core.nth.call(null,vec__28770,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28776,p__28777){
var map__28778 = p__28776;
var map__28778__$1 = (((((!((map__28778 == null))))?(((((map__28778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28778):map__28778);
var opts = map__28778__$1;
var before_jsload = cljs.core.get.call(null,map__28778__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28778__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28778__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28779 = p__28777;
var map__28779__$1 = (((((!((map__28779 == null))))?(((((map__28779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28779):map__28779);
var msg = map__28779__$1;
var files = cljs.core.get.call(null,map__28779__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28779__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28779__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28933){
var state_val_28934 = (state_28933[(1)]);
if((state_val_28934 === (7))){
var inst_28793 = (state_28933[(7)]);
var inst_28796 = (state_28933[(8)]);
var inst_28795 = (state_28933[(9)]);
var inst_28794 = (state_28933[(10)]);
var inst_28801 = cljs.core._nth.call(null,inst_28794,inst_28796);
var inst_28802 = figwheel.client.file_reloading.eval_body.call(null,inst_28801,opts);
var inst_28803 = (inst_28796 + (1));
var tmp28935 = inst_28793;
var tmp28936 = inst_28795;
var tmp28937 = inst_28794;
var inst_28793__$1 = tmp28935;
var inst_28794__$1 = tmp28937;
var inst_28795__$1 = tmp28936;
var inst_28796__$1 = inst_28803;
var state_28933__$1 = (function (){var statearr_28938 = state_28933;
(statearr_28938[(7)] = inst_28793__$1);

(statearr_28938[(8)] = inst_28796__$1);

(statearr_28938[(9)] = inst_28795__$1);

(statearr_28938[(11)] = inst_28802);

(statearr_28938[(10)] = inst_28794__$1);

return statearr_28938;
})();
var statearr_28939_29022 = state_28933__$1;
(statearr_28939_29022[(2)] = null);

(statearr_28939_29022[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (20))){
var inst_28836 = (state_28933[(12)]);
var inst_28844 = figwheel.client.file_reloading.sort_files.call(null,inst_28836);
var state_28933__$1 = state_28933;
var statearr_28940_29023 = state_28933__$1;
(statearr_28940_29023[(2)] = inst_28844);

(statearr_28940_29023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (27))){
var state_28933__$1 = state_28933;
var statearr_28941_29024 = state_28933__$1;
(statearr_28941_29024[(2)] = null);

(statearr_28941_29024[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (1))){
var inst_28785 = (state_28933[(13)]);
var inst_28782 = before_jsload.call(null,files);
var inst_28783 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28784 = (function (){return ((function (inst_28785,inst_28782,inst_28783,state_val_28934,c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28773_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28773_SHARP_);
});
;})(inst_28785,inst_28782,inst_28783,state_val_28934,c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28785__$1 = cljs.core.filter.call(null,inst_28784,files);
var inst_28786 = cljs.core.not_empty.call(null,inst_28785__$1);
var state_28933__$1 = (function (){var statearr_28942 = state_28933;
(statearr_28942[(14)] = inst_28782);

(statearr_28942[(15)] = inst_28783);

(statearr_28942[(13)] = inst_28785__$1);

return statearr_28942;
})();
if(cljs.core.truth_(inst_28786)){
var statearr_28943_29025 = state_28933__$1;
(statearr_28943_29025[(1)] = (2));

} else {
var statearr_28944_29026 = state_28933__$1;
(statearr_28944_29026[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (24))){
var state_28933__$1 = state_28933;
var statearr_28945_29027 = state_28933__$1;
(statearr_28945_29027[(2)] = null);

(statearr_28945_29027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (39))){
var inst_28886 = (state_28933[(16)]);
var state_28933__$1 = state_28933;
var statearr_28946_29028 = state_28933__$1;
(statearr_28946_29028[(2)] = inst_28886);

(statearr_28946_29028[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (46))){
var inst_28928 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
var statearr_28947_29029 = state_28933__$1;
(statearr_28947_29029[(2)] = inst_28928);

(statearr_28947_29029[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (4))){
var inst_28830 = (state_28933[(2)]);
var inst_28831 = cljs.core.List.EMPTY;
var inst_28832 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28831);
var inst_28833 = (function (){return ((function (inst_28830,inst_28831,inst_28832,state_val_28934,c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28774_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28774_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28774_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28774_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_28830,inst_28831,inst_28832,state_val_28934,c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28834 = cljs.core.filter.call(null,inst_28833,files);
var inst_28835 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28836 = cljs.core.concat.call(null,inst_28834,inst_28835);
var state_28933__$1 = (function (){var statearr_28948 = state_28933;
(statearr_28948[(12)] = inst_28836);

(statearr_28948[(17)] = inst_28832);

(statearr_28948[(18)] = inst_28830);

return statearr_28948;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28949_29030 = state_28933__$1;
(statearr_28949_29030[(1)] = (16));

} else {
var statearr_28950_29031 = state_28933__$1;
(statearr_28950_29031[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (15))){
var inst_28820 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
var statearr_28951_29032 = state_28933__$1;
(statearr_28951_29032[(2)] = inst_28820);

(statearr_28951_29032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (21))){
var inst_28846 = (state_28933[(19)]);
var inst_28846__$1 = (state_28933[(2)]);
var inst_28847 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28846__$1);
var state_28933__$1 = (function (){var statearr_28952 = state_28933;
(statearr_28952[(19)] = inst_28846__$1);

return statearr_28952;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28933__$1,(22),inst_28847);
} else {
if((state_val_28934 === (31))){
var inst_28931 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28933__$1,inst_28931);
} else {
if((state_val_28934 === (32))){
var inst_28886 = (state_28933[(16)]);
var inst_28891 = inst_28886.cljs$lang$protocol_mask$partition0$;
var inst_28892 = (inst_28891 & (64));
var inst_28893 = inst_28886.cljs$core$ISeq$;
var inst_28894 = (cljs.core.PROTOCOL_SENTINEL === inst_28893);
var inst_28895 = ((inst_28892) || (inst_28894));
var state_28933__$1 = state_28933;
if(cljs.core.truth_(inst_28895)){
var statearr_28953_29033 = state_28933__$1;
(statearr_28953_29033[(1)] = (35));

} else {
var statearr_28954_29034 = state_28933__$1;
(statearr_28954_29034[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (40))){
var inst_28908 = (state_28933[(20)]);
var inst_28907 = (state_28933[(2)]);
var inst_28908__$1 = cljs.core.get.call(null,inst_28907,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28909 = cljs.core.get.call(null,inst_28907,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28910 = cljs.core.not_empty.call(null,inst_28908__$1);
var state_28933__$1 = (function (){var statearr_28955 = state_28933;
(statearr_28955[(20)] = inst_28908__$1);

(statearr_28955[(21)] = inst_28909);

return statearr_28955;
})();
if(cljs.core.truth_(inst_28910)){
var statearr_28956_29035 = state_28933__$1;
(statearr_28956_29035[(1)] = (41));

} else {
var statearr_28957_29036 = state_28933__$1;
(statearr_28957_29036[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (33))){
var state_28933__$1 = state_28933;
var statearr_28958_29037 = state_28933__$1;
(statearr_28958_29037[(2)] = false);

(statearr_28958_29037[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (13))){
var inst_28806 = (state_28933[(22)]);
var inst_28810 = cljs.core.chunk_first.call(null,inst_28806);
var inst_28811 = cljs.core.chunk_rest.call(null,inst_28806);
var inst_28812 = cljs.core.count.call(null,inst_28810);
var inst_28793 = inst_28811;
var inst_28794 = inst_28810;
var inst_28795 = inst_28812;
var inst_28796 = (0);
var state_28933__$1 = (function (){var statearr_28959 = state_28933;
(statearr_28959[(7)] = inst_28793);

(statearr_28959[(8)] = inst_28796);

(statearr_28959[(9)] = inst_28795);

(statearr_28959[(10)] = inst_28794);

return statearr_28959;
})();
var statearr_28960_29038 = state_28933__$1;
(statearr_28960_29038[(2)] = null);

(statearr_28960_29038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (22))){
var inst_28854 = (state_28933[(23)]);
var inst_28849 = (state_28933[(24)]);
var inst_28850 = (state_28933[(25)]);
var inst_28846 = (state_28933[(19)]);
var inst_28849__$1 = (state_28933[(2)]);
var inst_28850__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28849__$1);
var inst_28851 = (function (){var all_files = inst_28846;
var res_SINGLEQUOTE_ = inst_28849__$1;
var res = inst_28850__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28854,inst_28849,inst_28850,inst_28846,inst_28849__$1,inst_28850__$1,state_val_28934,c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28775_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28775_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28854,inst_28849,inst_28850,inst_28846,inst_28849__$1,inst_28850__$1,state_val_28934,c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28852 = cljs.core.filter.call(null,inst_28851,inst_28849__$1);
var inst_28853 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28854__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28853);
var inst_28855 = cljs.core.not_empty.call(null,inst_28854__$1);
var state_28933__$1 = (function (){var statearr_28961 = state_28933;
(statearr_28961[(23)] = inst_28854__$1);

(statearr_28961[(24)] = inst_28849__$1);

(statearr_28961[(26)] = inst_28852);

(statearr_28961[(25)] = inst_28850__$1);

return statearr_28961;
})();
if(cljs.core.truth_(inst_28855)){
var statearr_28962_29039 = state_28933__$1;
(statearr_28962_29039[(1)] = (23));

} else {
var statearr_28963_29040 = state_28933__$1;
(statearr_28963_29040[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (36))){
var state_28933__$1 = state_28933;
var statearr_28964_29041 = state_28933__$1;
(statearr_28964_29041[(2)] = false);

(statearr_28964_29041[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (41))){
var inst_28908 = (state_28933[(20)]);
var inst_28912 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28913 = cljs.core.map.call(null,inst_28912,inst_28908);
var inst_28914 = cljs.core.pr_str.call(null,inst_28913);
var inst_28915 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28914)].join('');
var inst_28916 = figwheel.client.utils.log.call(null,inst_28915);
var state_28933__$1 = state_28933;
var statearr_28965_29042 = state_28933__$1;
(statearr_28965_29042[(2)] = inst_28916);

(statearr_28965_29042[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (43))){
var inst_28909 = (state_28933[(21)]);
var inst_28919 = (state_28933[(2)]);
var inst_28920 = cljs.core.not_empty.call(null,inst_28909);
var state_28933__$1 = (function (){var statearr_28966 = state_28933;
(statearr_28966[(27)] = inst_28919);

return statearr_28966;
})();
if(cljs.core.truth_(inst_28920)){
var statearr_28967_29043 = state_28933__$1;
(statearr_28967_29043[(1)] = (44));

} else {
var statearr_28968_29044 = state_28933__$1;
(statearr_28968_29044[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (29))){
var inst_28854 = (state_28933[(23)]);
var inst_28849 = (state_28933[(24)]);
var inst_28852 = (state_28933[(26)]);
var inst_28886 = (state_28933[(16)]);
var inst_28850 = (state_28933[(25)]);
var inst_28846 = (state_28933[(19)]);
var inst_28882 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28885 = (function (){var all_files = inst_28846;
var res_SINGLEQUOTE_ = inst_28849;
var res = inst_28850;
var files_not_loaded = inst_28852;
var dependencies_that_loaded = inst_28854;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28849,inst_28852,inst_28886,inst_28850,inst_28846,inst_28882,state_val_28934,c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28884){
var map__28969 = p__28884;
var map__28969__$1 = (((((!((map__28969 == null))))?(((((map__28969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28969):map__28969);
var namespace = cljs.core.get.call(null,map__28969__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28849,inst_28852,inst_28886,inst_28850,inst_28846,inst_28882,state_val_28934,c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28886__$1 = cljs.core.group_by.call(null,inst_28885,inst_28852);
var inst_28888 = (inst_28886__$1 == null);
var inst_28889 = cljs.core.not.call(null,inst_28888);
var state_28933__$1 = (function (){var statearr_28971 = state_28933;
(statearr_28971[(16)] = inst_28886__$1);

(statearr_28971[(28)] = inst_28882);

return statearr_28971;
})();
if(inst_28889){
var statearr_28972_29045 = state_28933__$1;
(statearr_28972_29045[(1)] = (32));

} else {
var statearr_28973_29046 = state_28933__$1;
(statearr_28973_29046[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (44))){
var inst_28909 = (state_28933[(21)]);
var inst_28922 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28909);
var inst_28923 = cljs.core.pr_str.call(null,inst_28922);
var inst_28924 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28923)].join('');
var inst_28925 = figwheel.client.utils.log.call(null,inst_28924);
var state_28933__$1 = state_28933;
var statearr_28974_29047 = state_28933__$1;
(statearr_28974_29047[(2)] = inst_28925);

(statearr_28974_29047[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (6))){
var inst_28827 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
var statearr_28975_29048 = state_28933__$1;
(statearr_28975_29048[(2)] = inst_28827);

(statearr_28975_29048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (28))){
var inst_28852 = (state_28933[(26)]);
var inst_28879 = (state_28933[(2)]);
var inst_28880 = cljs.core.not_empty.call(null,inst_28852);
var state_28933__$1 = (function (){var statearr_28976 = state_28933;
(statearr_28976[(29)] = inst_28879);

return statearr_28976;
})();
if(cljs.core.truth_(inst_28880)){
var statearr_28977_29049 = state_28933__$1;
(statearr_28977_29049[(1)] = (29));

} else {
var statearr_28978_29050 = state_28933__$1;
(statearr_28978_29050[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (25))){
var inst_28850 = (state_28933[(25)]);
var inst_28866 = (state_28933[(2)]);
var inst_28867 = cljs.core.not_empty.call(null,inst_28850);
var state_28933__$1 = (function (){var statearr_28979 = state_28933;
(statearr_28979[(30)] = inst_28866);

return statearr_28979;
})();
if(cljs.core.truth_(inst_28867)){
var statearr_28980_29051 = state_28933__$1;
(statearr_28980_29051[(1)] = (26));

} else {
var statearr_28981_29052 = state_28933__$1;
(statearr_28981_29052[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (34))){
var inst_28902 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
if(cljs.core.truth_(inst_28902)){
var statearr_28982_29053 = state_28933__$1;
(statearr_28982_29053[(1)] = (38));

} else {
var statearr_28983_29054 = state_28933__$1;
(statearr_28983_29054[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (17))){
var state_28933__$1 = state_28933;
var statearr_28984_29055 = state_28933__$1;
(statearr_28984_29055[(2)] = recompile_dependents);

(statearr_28984_29055[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (3))){
var state_28933__$1 = state_28933;
var statearr_28985_29056 = state_28933__$1;
(statearr_28985_29056[(2)] = null);

(statearr_28985_29056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (12))){
var inst_28823 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
var statearr_28986_29057 = state_28933__$1;
(statearr_28986_29057[(2)] = inst_28823);

(statearr_28986_29057[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (2))){
var inst_28785 = (state_28933[(13)]);
var inst_28792 = cljs.core.seq.call(null,inst_28785);
var inst_28793 = inst_28792;
var inst_28794 = null;
var inst_28795 = (0);
var inst_28796 = (0);
var state_28933__$1 = (function (){var statearr_28987 = state_28933;
(statearr_28987[(7)] = inst_28793);

(statearr_28987[(8)] = inst_28796);

(statearr_28987[(9)] = inst_28795);

(statearr_28987[(10)] = inst_28794);

return statearr_28987;
})();
var statearr_28988_29058 = state_28933__$1;
(statearr_28988_29058[(2)] = null);

(statearr_28988_29058[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (23))){
var inst_28854 = (state_28933[(23)]);
var inst_28849 = (state_28933[(24)]);
var inst_28852 = (state_28933[(26)]);
var inst_28850 = (state_28933[(25)]);
var inst_28846 = (state_28933[(19)]);
var inst_28857 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28859 = (function (){var all_files = inst_28846;
var res_SINGLEQUOTE_ = inst_28849;
var res = inst_28850;
var files_not_loaded = inst_28852;
var dependencies_that_loaded = inst_28854;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28849,inst_28852,inst_28850,inst_28846,inst_28857,state_val_28934,c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28858){
var map__28989 = p__28858;
var map__28989__$1 = (((((!((map__28989 == null))))?(((((map__28989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28989):map__28989);
var request_url = cljs.core.get.call(null,map__28989__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28849,inst_28852,inst_28850,inst_28846,inst_28857,state_val_28934,c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28860 = cljs.core.reverse.call(null,inst_28854);
var inst_28861 = cljs.core.map.call(null,inst_28859,inst_28860);
var inst_28862 = cljs.core.pr_str.call(null,inst_28861);
var inst_28863 = figwheel.client.utils.log.call(null,inst_28862);
var state_28933__$1 = (function (){var statearr_28991 = state_28933;
(statearr_28991[(31)] = inst_28857);

return statearr_28991;
})();
var statearr_28992_29059 = state_28933__$1;
(statearr_28992_29059[(2)] = inst_28863);

(statearr_28992_29059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (35))){
var state_28933__$1 = state_28933;
var statearr_28993_29060 = state_28933__$1;
(statearr_28993_29060[(2)] = true);

(statearr_28993_29060[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (19))){
var inst_28836 = (state_28933[(12)]);
var inst_28842 = figwheel.client.file_reloading.expand_files.call(null,inst_28836);
var state_28933__$1 = state_28933;
var statearr_28994_29061 = state_28933__$1;
(statearr_28994_29061[(2)] = inst_28842);

(statearr_28994_29061[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (11))){
var state_28933__$1 = state_28933;
var statearr_28995_29062 = state_28933__$1;
(statearr_28995_29062[(2)] = null);

(statearr_28995_29062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (9))){
var inst_28825 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
var statearr_28996_29063 = state_28933__$1;
(statearr_28996_29063[(2)] = inst_28825);

(statearr_28996_29063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (5))){
var inst_28796 = (state_28933[(8)]);
var inst_28795 = (state_28933[(9)]);
var inst_28798 = (inst_28796 < inst_28795);
var inst_28799 = inst_28798;
var state_28933__$1 = state_28933;
if(cljs.core.truth_(inst_28799)){
var statearr_28997_29064 = state_28933__$1;
(statearr_28997_29064[(1)] = (7));

} else {
var statearr_28998_29065 = state_28933__$1;
(statearr_28998_29065[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (14))){
var inst_28806 = (state_28933[(22)]);
var inst_28815 = cljs.core.first.call(null,inst_28806);
var inst_28816 = figwheel.client.file_reloading.eval_body.call(null,inst_28815,opts);
var inst_28817 = cljs.core.next.call(null,inst_28806);
var inst_28793 = inst_28817;
var inst_28794 = null;
var inst_28795 = (0);
var inst_28796 = (0);
var state_28933__$1 = (function (){var statearr_28999 = state_28933;
(statearr_28999[(7)] = inst_28793);

(statearr_28999[(32)] = inst_28816);

(statearr_28999[(8)] = inst_28796);

(statearr_28999[(9)] = inst_28795);

(statearr_28999[(10)] = inst_28794);

return statearr_28999;
})();
var statearr_29000_29066 = state_28933__$1;
(statearr_29000_29066[(2)] = null);

(statearr_29000_29066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (45))){
var state_28933__$1 = state_28933;
var statearr_29001_29067 = state_28933__$1;
(statearr_29001_29067[(2)] = null);

(statearr_29001_29067[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (26))){
var inst_28854 = (state_28933[(23)]);
var inst_28849 = (state_28933[(24)]);
var inst_28852 = (state_28933[(26)]);
var inst_28850 = (state_28933[(25)]);
var inst_28846 = (state_28933[(19)]);
var inst_28869 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28871 = (function (){var all_files = inst_28846;
var res_SINGLEQUOTE_ = inst_28849;
var res = inst_28850;
var files_not_loaded = inst_28852;
var dependencies_that_loaded = inst_28854;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28849,inst_28852,inst_28850,inst_28846,inst_28869,state_val_28934,c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28870){
var map__29002 = p__28870;
var map__29002__$1 = (((((!((map__29002 == null))))?(((((map__29002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29002):map__29002);
var namespace = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28849,inst_28852,inst_28850,inst_28846,inst_28869,state_val_28934,c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28872 = cljs.core.map.call(null,inst_28871,inst_28850);
var inst_28873 = cljs.core.pr_str.call(null,inst_28872);
var inst_28874 = figwheel.client.utils.log.call(null,inst_28873);
var inst_28875 = (function (){var all_files = inst_28846;
var res_SINGLEQUOTE_ = inst_28849;
var res = inst_28850;
var files_not_loaded = inst_28852;
var dependencies_that_loaded = inst_28854;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28849,inst_28852,inst_28850,inst_28846,inst_28869,inst_28871,inst_28872,inst_28873,inst_28874,state_val_28934,c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28849,inst_28852,inst_28850,inst_28846,inst_28869,inst_28871,inst_28872,inst_28873,inst_28874,state_val_28934,c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28876 = setTimeout(inst_28875,(10));
var state_28933__$1 = (function (){var statearr_29004 = state_28933;
(statearr_29004[(33)] = inst_28869);

(statearr_29004[(34)] = inst_28874);

return statearr_29004;
})();
var statearr_29005_29068 = state_28933__$1;
(statearr_29005_29068[(2)] = inst_28876);

(statearr_29005_29068[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (16))){
var state_28933__$1 = state_28933;
var statearr_29006_29069 = state_28933__$1;
(statearr_29006_29069[(2)] = reload_dependents);

(statearr_29006_29069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (38))){
var inst_28886 = (state_28933[(16)]);
var inst_28904 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28886);
var state_28933__$1 = state_28933;
var statearr_29007_29070 = state_28933__$1;
(statearr_29007_29070[(2)] = inst_28904);

(statearr_29007_29070[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (30))){
var state_28933__$1 = state_28933;
var statearr_29008_29071 = state_28933__$1;
(statearr_29008_29071[(2)] = null);

(statearr_29008_29071[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (10))){
var inst_28806 = (state_28933[(22)]);
var inst_28808 = cljs.core.chunked_seq_QMARK_.call(null,inst_28806);
var state_28933__$1 = state_28933;
if(inst_28808){
var statearr_29009_29072 = state_28933__$1;
(statearr_29009_29072[(1)] = (13));

} else {
var statearr_29010_29073 = state_28933__$1;
(statearr_29010_29073[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (18))){
var inst_28840 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
if(cljs.core.truth_(inst_28840)){
var statearr_29011_29074 = state_28933__$1;
(statearr_29011_29074[(1)] = (19));

} else {
var statearr_29012_29075 = state_28933__$1;
(statearr_29012_29075[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (42))){
var state_28933__$1 = state_28933;
var statearr_29013_29076 = state_28933__$1;
(statearr_29013_29076[(2)] = null);

(statearr_29013_29076[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (37))){
var inst_28899 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
var statearr_29014_29077 = state_28933__$1;
(statearr_29014_29077[(2)] = inst_28899);

(statearr_29014_29077[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (8))){
var inst_28793 = (state_28933[(7)]);
var inst_28806 = (state_28933[(22)]);
var inst_28806__$1 = cljs.core.seq.call(null,inst_28793);
var state_28933__$1 = (function (){var statearr_29015 = state_28933;
(statearr_29015[(22)] = inst_28806__$1);

return statearr_29015;
})();
if(inst_28806__$1){
var statearr_29016_29078 = state_28933__$1;
(statearr_29016_29078[(1)] = (10));

} else {
var statearr_29017_29079 = state_28933__$1;
(statearr_29017_29079[(1)] = (11));

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
});})(c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24989__auto__,c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24990__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24990__auto____0 = (function (){
var statearr_29018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29018[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24990__auto__);

(statearr_29018[(1)] = (1));

return statearr_29018;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24990__auto____1 = (function (state_28933){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_28933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e29019){if((e29019 instanceof Object)){
var ex__24993__auto__ = e29019;
var statearr_29020_29080 = state_28933;
(statearr_29020_29080[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29081 = state_28933;
state_28933 = G__29081;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24990__auto__ = function(state_28933){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24990__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24990__auto____1.call(this,state_28933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24990__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24990__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25086__auto__ = (function (){var statearr_29021 = f__25085__auto__.call(null);
(statearr_29021[(6)] = c__25084__auto__);

return statearr_29021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto__,map__28778,map__28778__$1,opts,before_jsload,on_jsload,reload_dependents,map__28779,map__28779__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25084__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29084,link){
var map__29085 = p__29084;
var map__29085__$1 = (((((!((map__29085 == null))))?(((((map__29085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29085):map__29085);
var file = cljs.core.get.call(null,map__29085__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29085,map__29085__$1,file){
return (function (p1__29082_SHARP_,p2__29083_SHARP_){
if(cljs.core._EQ_.call(null,p1__29082_SHARP_,p2__29083_SHARP_)){
return p1__29082_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29085,map__29085__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29088){
var map__29089 = p__29088;
var map__29089__$1 = (((((!((map__29089 == null))))?(((((map__29089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29089):map__29089);
var match_length = cljs.core.get.call(null,map__29089__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29089__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29087_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29087_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29091_SHARP_,p2__29092_SHARP_){
return cljs.core.assoc.call(null,p1__29091_SHARP_,cljs.core.get.call(null,p2__29092_SHARP_,key),p2__29092_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29093 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29093);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29093);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29094,p__29095){
var map__29096 = p__29094;
var map__29096__$1 = (((((!((map__29096 == null))))?(((((map__29096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29096):map__29096);
var on_cssload = cljs.core.get.call(null,map__29096__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29097 = p__29095;
var map__29097__$1 = (((((!((map__29097 == null))))?(((((map__29097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29097):map__29097);
var files_msg = map__29097__$1;
var files = cljs.core.get.call(null,map__29097__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1544650590889
