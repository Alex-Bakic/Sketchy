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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28426_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28426_SHARP_));
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
var seq__28427 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28428 = null;
var count__28429 = (0);
var i__28430 = (0);
while(true){
if((i__28430 < count__28429)){
var n = cljs.core._nth.call(null,chunk__28428,i__28430);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28431 = seq__28427;
var G__28432 = chunk__28428;
var G__28433 = count__28429;
var G__28434 = (i__28430 + (1));
seq__28427 = G__28431;
chunk__28428 = G__28432;
count__28429 = G__28433;
i__28430 = G__28434;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28427);
if(temp__5457__auto__){
var seq__28427__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28427__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__28427__$1);
var G__28435 = cljs.core.chunk_rest.call(null,seq__28427__$1);
var G__28436 = c__4461__auto__;
var G__28437 = cljs.core.count.call(null,c__4461__auto__);
var G__28438 = (0);
seq__28427 = G__28435;
chunk__28428 = G__28436;
count__28429 = G__28437;
i__28430 = G__28438;
continue;
} else {
var n = cljs.core.first.call(null,seq__28427__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28439 = cljs.core.next.call(null,seq__28427__$1);
var G__28440 = null;
var G__28441 = (0);
var G__28442 = (0);
seq__28427 = G__28439;
chunk__28428 = G__28440;
count__28429 = G__28441;
i__28430 = G__28442;
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
return cljs.core.some.call(null,(function (p__28443){
var vec__28444 = p__28443;
var _ = cljs.core.nth.call(null,vec__28444,(0),null);
var v = cljs.core.nth.call(null,vec__28444,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__28447){
var vec__28448 = p__28447;
var k = cljs.core.nth.call(null,vec__28448,(0),null);
var v = cljs.core.nth.call(null,vec__28448,(1),null);
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

var seq__28460_28468 = cljs.core.seq.call(null,deps);
var chunk__28461_28469 = null;
var count__28462_28470 = (0);
var i__28463_28471 = (0);
while(true){
if((i__28463_28471 < count__28462_28470)){
var dep_28472 = cljs.core._nth.call(null,chunk__28461_28469,i__28463_28471);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_28472;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28472));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28472,(depth + (1)),state);
} else {
}


var G__28473 = seq__28460_28468;
var G__28474 = chunk__28461_28469;
var G__28475 = count__28462_28470;
var G__28476 = (i__28463_28471 + (1));
seq__28460_28468 = G__28473;
chunk__28461_28469 = G__28474;
count__28462_28470 = G__28475;
i__28463_28471 = G__28476;
continue;
} else {
var temp__5457__auto___28477 = cljs.core.seq.call(null,seq__28460_28468);
if(temp__5457__auto___28477){
var seq__28460_28478__$1 = temp__5457__auto___28477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28460_28478__$1)){
var c__4461__auto___28479 = cljs.core.chunk_first.call(null,seq__28460_28478__$1);
var G__28480 = cljs.core.chunk_rest.call(null,seq__28460_28478__$1);
var G__28481 = c__4461__auto___28479;
var G__28482 = cljs.core.count.call(null,c__4461__auto___28479);
var G__28483 = (0);
seq__28460_28468 = G__28480;
chunk__28461_28469 = G__28481;
count__28462_28470 = G__28482;
i__28463_28471 = G__28483;
continue;
} else {
var dep_28484 = cljs.core.first.call(null,seq__28460_28478__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_28484;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28484));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28484,(depth + (1)),state);
} else {
}


var G__28485 = cljs.core.next.call(null,seq__28460_28478__$1);
var G__28486 = null;
var G__28487 = (0);
var G__28488 = (0);
seq__28460_28468 = G__28485;
chunk__28461_28469 = G__28486;
count__28462_28470 = G__28487;
i__28463_28471 = G__28488;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28464){
var vec__28465 = p__28464;
var seq__28466 = cljs.core.seq.call(null,vec__28465);
var first__28467 = cljs.core.first.call(null,seq__28466);
var seq__28466__$1 = cljs.core.next.call(null,seq__28466);
var x = first__28467;
var xs = seq__28466__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28465,seq__28466,first__28467,seq__28466__$1,x,xs,get_deps__$1){
return (function (p1__28451_SHARP_){
return clojure.set.difference.call(null,p1__28451_SHARP_,x);
});})(vec__28465,seq__28466,first__28467,seq__28466__$1,x,xs,get_deps__$1))
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
var seq__28489 = cljs.core.seq.call(null,provides);
var chunk__28490 = null;
var count__28491 = (0);
var i__28492 = (0);
while(true){
if((i__28492 < count__28491)){
var prov = cljs.core._nth.call(null,chunk__28490,i__28492);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28493_28501 = cljs.core.seq.call(null,requires);
var chunk__28494_28502 = null;
var count__28495_28503 = (0);
var i__28496_28504 = (0);
while(true){
if((i__28496_28504 < count__28495_28503)){
var req_28505 = cljs.core._nth.call(null,chunk__28494_28502,i__28496_28504);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28505,prov);


var G__28506 = seq__28493_28501;
var G__28507 = chunk__28494_28502;
var G__28508 = count__28495_28503;
var G__28509 = (i__28496_28504 + (1));
seq__28493_28501 = G__28506;
chunk__28494_28502 = G__28507;
count__28495_28503 = G__28508;
i__28496_28504 = G__28509;
continue;
} else {
var temp__5457__auto___28510 = cljs.core.seq.call(null,seq__28493_28501);
if(temp__5457__auto___28510){
var seq__28493_28511__$1 = temp__5457__auto___28510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28493_28511__$1)){
var c__4461__auto___28512 = cljs.core.chunk_first.call(null,seq__28493_28511__$1);
var G__28513 = cljs.core.chunk_rest.call(null,seq__28493_28511__$1);
var G__28514 = c__4461__auto___28512;
var G__28515 = cljs.core.count.call(null,c__4461__auto___28512);
var G__28516 = (0);
seq__28493_28501 = G__28513;
chunk__28494_28502 = G__28514;
count__28495_28503 = G__28515;
i__28496_28504 = G__28516;
continue;
} else {
var req_28517 = cljs.core.first.call(null,seq__28493_28511__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28517,prov);


var G__28518 = cljs.core.next.call(null,seq__28493_28511__$1);
var G__28519 = null;
var G__28520 = (0);
var G__28521 = (0);
seq__28493_28501 = G__28518;
chunk__28494_28502 = G__28519;
count__28495_28503 = G__28520;
i__28496_28504 = G__28521;
continue;
}
} else {
}
}
break;
}


var G__28522 = seq__28489;
var G__28523 = chunk__28490;
var G__28524 = count__28491;
var G__28525 = (i__28492 + (1));
seq__28489 = G__28522;
chunk__28490 = G__28523;
count__28491 = G__28524;
i__28492 = G__28525;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28489);
if(temp__5457__auto__){
var seq__28489__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28489__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__28489__$1);
var G__28526 = cljs.core.chunk_rest.call(null,seq__28489__$1);
var G__28527 = c__4461__auto__;
var G__28528 = cljs.core.count.call(null,c__4461__auto__);
var G__28529 = (0);
seq__28489 = G__28526;
chunk__28490 = G__28527;
count__28491 = G__28528;
i__28492 = G__28529;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28489__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28497_28530 = cljs.core.seq.call(null,requires);
var chunk__28498_28531 = null;
var count__28499_28532 = (0);
var i__28500_28533 = (0);
while(true){
if((i__28500_28533 < count__28499_28532)){
var req_28534 = cljs.core._nth.call(null,chunk__28498_28531,i__28500_28533);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28534,prov);


var G__28535 = seq__28497_28530;
var G__28536 = chunk__28498_28531;
var G__28537 = count__28499_28532;
var G__28538 = (i__28500_28533 + (1));
seq__28497_28530 = G__28535;
chunk__28498_28531 = G__28536;
count__28499_28532 = G__28537;
i__28500_28533 = G__28538;
continue;
} else {
var temp__5457__auto___28539__$1 = cljs.core.seq.call(null,seq__28497_28530);
if(temp__5457__auto___28539__$1){
var seq__28497_28540__$1 = temp__5457__auto___28539__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28497_28540__$1)){
var c__4461__auto___28541 = cljs.core.chunk_first.call(null,seq__28497_28540__$1);
var G__28542 = cljs.core.chunk_rest.call(null,seq__28497_28540__$1);
var G__28543 = c__4461__auto___28541;
var G__28544 = cljs.core.count.call(null,c__4461__auto___28541);
var G__28545 = (0);
seq__28497_28530 = G__28542;
chunk__28498_28531 = G__28543;
count__28499_28532 = G__28544;
i__28500_28533 = G__28545;
continue;
} else {
var req_28546 = cljs.core.first.call(null,seq__28497_28540__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28546,prov);


var G__28547 = cljs.core.next.call(null,seq__28497_28540__$1);
var G__28548 = null;
var G__28549 = (0);
var G__28550 = (0);
seq__28497_28530 = G__28547;
chunk__28498_28531 = G__28548;
count__28499_28532 = G__28549;
i__28500_28533 = G__28550;
continue;
}
} else {
}
}
break;
}


var G__28551 = cljs.core.next.call(null,seq__28489__$1);
var G__28552 = null;
var G__28553 = (0);
var G__28554 = (0);
seq__28489 = G__28551;
chunk__28490 = G__28552;
count__28491 = G__28553;
i__28492 = G__28554;
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
var seq__28555_28559 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28556_28560 = null;
var count__28557_28561 = (0);
var i__28558_28562 = (0);
while(true){
if((i__28558_28562 < count__28557_28561)){
var ns_28563 = cljs.core._nth.call(null,chunk__28556_28560,i__28558_28562);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28563);


var G__28564 = seq__28555_28559;
var G__28565 = chunk__28556_28560;
var G__28566 = count__28557_28561;
var G__28567 = (i__28558_28562 + (1));
seq__28555_28559 = G__28564;
chunk__28556_28560 = G__28565;
count__28557_28561 = G__28566;
i__28558_28562 = G__28567;
continue;
} else {
var temp__5457__auto___28568 = cljs.core.seq.call(null,seq__28555_28559);
if(temp__5457__auto___28568){
var seq__28555_28569__$1 = temp__5457__auto___28568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28555_28569__$1)){
var c__4461__auto___28570 = cljs.core.chunk_first.call(null,seq__28555_28569__$1);
var G__28571 = cljs.core.chunk_rest.call(null,seq__28555_28569__$1);
var G__28572 = c__4461__auto___28570;
var G__28573 = cljs.core.count.call(null,c__4461__auto___28570);
var G__28574 = (0);
seq__28555_28559 = G__28571;
chunk__28556_28560 = G__28572;
count__28557_28561 = G__28573;
i__28558_28562 = G__28574;
continue;
} else {
var ns_28575 = cljs.core.first.call(null,seq__28555_28569__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28575);


var G__28576 = cljs.core.next.call(null,seq__28555_28569__$1);
var G__28577 = null;
var G__28578 = (0);
var G__28579 = (0);
seq__28555_28559 = G__28576;
chunk__28556_28560 = G__28577;
count__28557_28561 = G__28578;
i__28558_28562 = G__28579;
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
var G__28580__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28581__i = 0, G__28581__a = new Array(arguments.length -  0);
while (G__28581__i < G__28581__a.length) {G__28581__a[G__28581__i] = arguments[G__28581__i + 0]; ++G__28581__i;}
  args = new cljs.core.IndexedSeq(G__28581__a,0,null);
} 
return G__28580__delegate.call(this,args);};
G__28580.cljs$lang$maxFixedArity = 0;
G__28580.cljs$lang$applyTo = (function (arglist__28582){
var args = cljs.core.seq(arglist__28582);
return G__28580__delegate(args);
});
G__28580.cljs$core$IFn$_invoke$arity$variadic = G__28580__delegate;
return G__28580;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28583_SHARP_,p2__28584_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28583_SHARP_)),p2__28584_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28585_SHARP_,p2__28586_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28585_SHARP_),p2__28586_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28587 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28587.addCallback(((function (G__28587){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28587))
);

G__28587.addErrback(((function (G__28587){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28587))
);

return G__28587;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28588){if((e28588 instanceof Error)){
var e = e28588;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28588;

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
}catch (e28589){if((e28589 instanceof Error)){
var e = e28589;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28589;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28590 = cljs.core._EQ_;
var expr__28591 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28590.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28591))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28590.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28591))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28590.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28591))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28590,expr__28591){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28590,expr__28591))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28593,callback){
var map__28594 = p__28593;
var map__28594__$1 = (((((!((map__28594 == null))))?(((((map__28594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28594):map__28594);
var file_msg = map__28594__$1;
var request_url = cljs.core.get.call(null,map__28594__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28594,map__28594__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28594,map__28594__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__25076__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto__){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto__){
return (function (state_28632){
var state_val_28633 = (state_28632[(1)]);
if((state_val_28633 === (7))){
var inst_28628 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
var statearr_28634_28660 = state_28632__$1;
(statearr_28634_28660[(2)] = inst_28628);

(statearr_28634_28660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (1))){
var state_28632__$1 = state_28632;
var statearr_28635_28661 = state_28632__$1;
(statearr_28635_28661[(2)] = null);

(statearr_28635_28661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (4))){
var inst_28598 = (state_28632[(7)]);
var inst_28598__$1 = (state_28632[(2)]);
var state_28632__$1 = (function (){var statearr_28636 = state_28632;
(statearr_28636[(7)] = inst_28598__$1);

return statearr_28636;
})();
if(cljs.core.truth_(inst_28598__$1)){
var statearr_28637_28662 = state_28632__$1;
(statearr_28637_28662[(1)] = (5));

} else {
var statearr_28638_28663 = state_28632__$1;
(statearr_28638_28663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (15))){
var inst_28611 = (state_28632[(8)]);
var inst_28613 = (state_28632[(9)]);
var inst_28615 = inst_28613.call(null,inst_28611);
var state_28632__$1 = state_28632;
var statearr_28639_28664 = state_28632__$1;
(statearr_28639_28664[(2)] = inst_28615);

(statearr_28639_28664[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (13))){
var inst_28622 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
var statearr_28640_28665 = state_28632__$1;
(statearr_28640_28665[(2)] = inst_28622);

(statearr_28640_28665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (6))){
var state_28632__$1 = state_28632;
var statearr_28641_28666 = state_28632__$1;
(statearr_28641_28666[(2)] = null);

(statearr_28641_28666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (17))){
var inst_28619 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
var statearr_28642_28667 = state_28632__$1;
(statearr_28642_28667[(2)] = inst_28619);

(statearr_28642_28667[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (3))){
var inst_28630 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28632__$1,inst_28630);
} else {
if((state_val_28633 === (12))){
var state_28632__$1 = state_28632;
var statearr_28643_28668 = state_28632__$1;
(statearr_28643_28668[(2)] = null);

(statearr_28643_28668[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (2))){
var state_28632__$1 = state_28632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28632__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28633 === (11))){
var inst_28603 = (state_28632[(10)]);
var inst_28609 = figwheel.client.file_reloading.blocking_load.call(null,inst_28603);
var state_28632__$1 = state_28632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28632__$1,(14),inst_28609);
} else {
if((state_val_28633 === (9))){
var inst_28603 = (state_28632[(10)]);
var state_28632__$1 = state_28632;
if(cljs.core.truth_(inst_28603)){
var statearr_28644_28669 = state_28632__$1;
(statearr_28644_28669[(1)] = (11));

} else {
var statearr_28645_28670 = state_28632__$1;
(statearr_28645_28670[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (5))){
var inst_28604 = (state_28632[(11)]);
var inst_28598 = (state_28632[(7)]);
var inst_28603 = cljs.core.nth.call(null,inst_28598,(0),null);
var inst_28604__$1 = cljs.core.nth.call(null,inst_28598,(1),null);
var state_28632__$1 = (function (){var statearr_28646 = state_28632;
(statearr_28646[(11)] = inst_28604__$1);

(statearr_28646[(10)] = inst_28603);

return statearr_28646;
})();
if(cljs.core.truth_(inst_28604__$1)){
var statearr_28647_28671 = state_28632__$1;
(statearr_28647_28671[(1)] = (8));

} else {
var statearr_28648_28672 = state_28632__$1;
(statearr_28648_28672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (14))){
var inst_28603 = (state_28632[(10)]);
var inst_28613 = (state_28632[(9)]);
var inst_28611 = (state_28632[(2)]);
var inst_28612 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28613__$1 = cljs.core.get.call(null,inst_28612,inst_28603);
var state_28632__$1 = (function (){var statearr_28649 = state_28632;
(statearr_28649[(8)] = inst_28611);

(statearr_28649[(9)] = inst_28613__$1);

return statearr_28649;
})();
if(cljs.core.truth_(inst_28613__$1)){
var statearr_28650_28673 = state_28632__$1;
(statearr_28650_28673[(1)] = (15));

} else {
var statearr_28651_28674 = state_28632__$1;
(statearr_28651_28674[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (16))){
var inst_28611 = (state_28632[(8)]);
var inst_28617 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28611);
var state_28632__$1 = state_28632;
var statearr_28652_28675 = state_28632__$1;
(statearr_28652_28675[(2)] = inst_28617);

(statearr_28652_28675[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (10))){
var inst_28624 = (state_28632[(2)]);
var state_28632__$1 = (function (){var statearr_28653 = state_28632;
(statearr_28653[(12)] = inst_28624);

return statearr_28653;
})();
var statearr_28654_28676 = state_28632__$1;
(statearr_28654_28676[(2)] = null);

(statearr_28654_28676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (8))){
var inst_28604 = (state_28632[(11)]);
var inst_28606 = eval(inst_28604);
var state_28632__$1 = state_28632;
var statearr_28655_28677 = state_28632__$1;
(statearr_28655_28677[(2)] = inst_28606);

(statearr_28655_28677[(1)] = (10));


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
});})(c__25076__auto__))
;
return ((function (switch__24981__auto__,c__25076__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24982__auto__ = null;
var figwheel$client$file_reloading$state_machine__24982__auto____0 = (function (){
var statearr_28656 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28656[(0)] = figwheel$client$file_reloading$state_machine__24982__auto__);

(statearr_28656[(1)] = (1));

return statearr_28656;
});
var figwheel$client$file_reloading$state_machine__24982__auto____1 = (function (state_28632){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_28632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e28657){if((e28657 instanceof Object)){
var ex__24985__auto__ = e28657;
var statearr_28658_28678 = state_28632;
(statearr_28658_28678[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28679 = state_28632;
state_28632 = G__28679;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24982__auto__ = function(state_28632){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24982__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24982__auto____1.call(this,state_28632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24982__auto____0;
figwheel$client$file_reloading$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24982__auto____1;
return figwheel$client$file_reloading$state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto__))
})();
var state__25078__auto__ = (function (){var statearr_28659 = f__25077__auto__.call(null);
(statearr_28659[(6)] = c__25076__auto__);

return statearr_28659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto__))
);

return c__25076__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28681 = arguments.length;
switch (G__28681) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28683,callback){
var map__28684 = p__28683;
var map__28684__$1 = (((((!((map__28684 == null))))?(((((map__28684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28684):map__28684);
var file_msg = map__28684__$1;
var namespace = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28684,map__28684__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28684,map__28684__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28686){
var map__28687 = p__28686;
var map__28687__$1 = (((((!((map__28687 == null))))?(((((map__28687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28687):map__28687);
var file_msg = map__28687__$1;
var namespace = cljs.core.get.call(null,map__28687__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28689){
var map__28690 = p__28689;
var map__28690__$1 = (((((!((map__28690 == null))))?(((((map__28690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28690):map__28690);
var file_msg = map__28690__$1;
var namespace = cljs.core.get.call(null,map__28690__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28692,callback){
var map__28693 = p__28692;
var map__28693__$1 = (((((!((map__28693 == null))))?(((((map__28693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28693):map__28693);
var file_msg = map__28693__$1;
var request_url = cljs.core.get.call(null,map__28693__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28693__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__25076__auto___28743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto___28743,out){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto___28743,out){
return (function (state_28728){
var state_val_28729 = (state_28728[(1)]);
if((state_val_28729 === (1))){
var inst_28702 = cljs.core.seq.call(null,files);
var inst_28703 = cljs.core.first.call(null,inst_28702);
var inst_28704 = cljs.core.next.call(null,inst_28702);
var inst_28705 = files;
var state_28728__$1 = (function (){var statearr_28730 = state_28728;
(statearr_28730[(7)] = inst_28704);

(statearr_28730[(8)] = inst_28705);

(statearr_28730[(9)] = inst_28703);

return statearr_28730;
})();
var statearr_28731_28744 = state_28728__$1;
(statearr_28731_28744[(2)] = null);

(statearr_28731_28744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (2))){
var inst_28705 = (state_28728[(8)]);
var inst_28711 = (state_28728[(10)]);
var inst_28710 = cljs.core.seq.call(null,inst_28705);
var inst_28711__$1 = cljs.core.first.call(null,inst_28710);
var inst_28712 = cljs.core.next.call(null,inst_28710);
var inst_28713 = (inst_28711__$1 == null);
var inst_28714 = cljs.core.not.call(null,inst_28713);
var state_28728__$1 = (function (){var statearr_28732 = state_28728;
(statearr_28732[(10)] = inst_28711__$1);

(statearr_28732[(11)] = inst_28712);

return statearr_28732;
})();
if(inst_28714){
var statearr_28733_28745 = state_28728__$1;
(statearr_28733_28745[(1)] = (4));

} else {
var statearr_28734_28746 = state_28728__$1;
(statearr_28734_28746[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (3))){
var inst_28726 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28728__$1,inst_28726);
} else {
if((state_val_28729 === (4))){
var inst_28711 = (state_28728[(10)]);
var inst_28716 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28711);
var state_28728__$1 = state_28728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28728__$1,(7),inst_28716);
} else {
if((state_val_28729 === (5))){
var inst_28722 = cljs.core.async.close_BANG_.call(null,out);
var state_28728__$1 = state_28728;
var statearr_28735_28747 = state_28728__$1;
(statearr_28735_28747[(2)] = inst_28722);

(statearr_28735_28747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (6))){
var inst_28724 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
var statearr_28736_28748 = state_28728__$1;
(statearr_28736_28748[(2)] = inst_28724);

(statearr_28736_28748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (7))){
var inst_28712 = (state_28728[(11)]);
var inst_28718 = (state_28728[(2)]);
var inst_28719 = cljs.core.async.put_BANG_.call(null,out,inst_28718);
var inst_28705 = inst_28712;
var state_28728__$1 = (function (){var statearr_28737 = state_28728;
(statearr_28737[(8)] = inst_28705);

(statearr_28737[(12)] = inst_28719);

return statearr_28737;
})();
var statearr_28738_28749 = state_28728__$1;
(statearr_28738_28749[(2)] = null);

(statearr_28738_28749[(1)] = (2));


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
});})(c__25076__auto___28743,out))
;
return ((function (switch__24981__auto__,c__25076__auto___28743,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24982__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24982__auto____0 = (function (){
var statearr_28739 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28739[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24982__auto__);

(statearr_28739[(1)] = (1));

return statearr_28739;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24982__auto____1 = (function (state_28728){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_28728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e28740){if((e28740 instanceof Object)){
var ex__24985__auto__ = e28740;
var statearr_28741_28750 = state_28728;
(statearr_28741_28750[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28751 = state_28728;
state_28728 = G__28751;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24982__auto__ = function(state_28728){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24982__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24982__auto____1.call(this,state_28728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24982__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24982__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto___28743,out))
})();
var state__25078__auto__ = (function (){var statearr_28742 = f__25077__auto__.call(null);
(statearr_28742[(6)] = c__25076__auto___28743);

return statearr_28742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto___28743,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28752,opts){
var map__28753 = p__28752;
var map__28753__$1 = (((((!((map__28753 == null))))?(((((map__28753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28753):map__28753);
var eval_body = cljs.core.get.call(null,map__28753__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28753__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28755){var e = e28755;
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
return (function (p1__28756_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28756_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28757){
var vec__28758 = p__28757;
var k = cljs.core.nth.call(null,vec__28758,(0),null);
var v = cljs.core.nth.call(null,vec__28758,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28761){
var vec__28762 = p__28761;
var k = cljs.core.nth.call(null,vec__28762,(0),null);
var v = cljs.core.nth.call(null,vec__28762,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28768,p__28769){
var map__28770 = p__28768;
var map__28770__$1 = (((((!((map__28770 == null))))?(((((map__28770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28770):map__28770);
var opts = map__28770__$1;
var before_jsload = cljs.core.get.call(null,map__28770__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28770__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28770__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28771 = p__28769;
var map__28771__$1 = (((((!((map__28771 == null))))?(((((map__28771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28771):map__28771);
var msg = map__28771__$1;
var files = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25076__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28925){
var state_val_28926 = (state_28925[(1)]);
if((state_val_28926 === (7))){
var inst_28787 = (state_28925[(7)]);
var inst_28786 = (state_28925[(8)]);
var inst_28788 = (state_28925[(9)]);
var inst_28785 = (state_28925[(10)]);
var inst_28793 = cljs.core._nth.call(null,inst_28786,inst_28788);
var inst_28794 = figwheel.client.file_reloading.eval_body.call(null,inst_28793,opts);
var inst_28795 = (inst_28788 + (1));
var tmp28927 = inst_28787;
var tmp28928 = inst_28786;
var tmp28929 = inst_28785;
var inst_28785__$1 = tmp28929;
var inst_28786__$1 = tmp28928;
var inst_28787__$1 = tmp28927;
var inst_28788__$1 = inst_28795;
var state_28925__$1 = (function (){var statearr_28930 = state_28925;
(statearr_28930[(7)] = inst_28787__$1);

(statearr_28930[(8)] = inst_28786__$1);

(statearr_28930[(9)] = inst_28788__$1);

(statearr_28930[(10)] = inst_28785__$1);

(statearr_28930[(11)] = inst_28794);

return statearr_28930;
})();
var statearr_28931_29014 = state_28925__$1;
(statearr_28931_29014[(2)] = null);

(statearr_28931_29014[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (20))){
var inst_28828 = (state_28925[(12)]);
var inst_28836 = figwheel.client.file_reloading.sort_files.call(null,inst_28828);
var state_28925__$1 = state_28925;
var statearr_28932_29015 = state_28925__$1;
(statearr_28932_29015[(2)] = inst_28836);

(statearr_28932_29015[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (27))){
var state_28925__$1 = state_28925;
var statearr_28933_29016 = state_28925__$1;
(statearr_28933_29016[(2)] = null);

(statearr_28933_29016[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (1))){
var inst_28777 = (state_28925[(13)]);
var inst_28774 = before_jsload.call(null,files);
var inst_28775 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28776 = (function (){return ((function (inst_28777,inst_28774,inst_28775,state_val_28926,c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28765_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28765_SHARP_);
});
;})(inst_28777,inst_28774,inst_28775,state_val_28926,c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28777__$1 = cljs.core.filter.call(null,inst_28776,files);
var inst_28778 = cljs.core.not_empty.call(null,inst_28777__$1);
var state_28925__$1 = (function (){var statearr_28934 = state_28925;
(statearr_28934[(14)] = inst_28775);

(statearr_28934[(15)] = inst_28774);

(statearr_28934[(13)] = inst_28777__$1);

return statearr_28934;
})();
if(cljs.core.truth_(inst_28778)){
var statearr_28935_29017 = state_28925__$1;
(statearr_28935_29017[(1)] = (2));

} else {
var statearr_28936_29018 = state_28925__$1;
(statearr_28936_29018[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (24))){
var state_28925__$1 = state_28925;
var statearr_28937_29019 = state_28925__$1;
(statearr_28937_29019[(2)] = null);

(statearr_28937_29019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (39))){
var inst_28878 = (state_28925[(16)]);
var state_28925__$1 = state_28925;
var statearr_28938_29020 = state_28925__$1;
(statearr_28938_29020[(2)] = inst_28878);

(statearr_28938_29020[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (46))){
var inst_28920 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28939_29021 = state_28925__$1;
(statearr_28939_29021[(2)] = inst_28920);

(statearr_28939_29021[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (4))){
var inst_28822 = (state_28925[(2)]);
var inst_28823 = cljs.core.List.EMPTY;
var inst_28824 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28823);
var inst_28825 = (function (){return ((function (inst_28822,inst_28823,inst_28824,state_val_28926,c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28766_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28766_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28766_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28766_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_28822,inst_28823,inst_28824,state_val_28926,c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28826 = cljs.core.filter.call(null,inst_28825,files);
var inst_28827 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28828 = cljs.core.concat.call(null,inst_28826,inst_28827);
var state_28925__$1 = (function (){var statearr_28940 = state_28925;
(statearr_28940[(17)] = inst_28822);

(statearr_28940[(18)] = inst_28824);

(statearr_28940[(12)] = inst_28828);

return statearr_28940;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28941_29022 = state_28925__$1;
(statearr_28941_29022[(1)] = (16));

} else {
var statearr_28942_29023 = state_28925__$1;
(statearr_28942_29023[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (15))){
var inst_28812 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28943_29024 = state_28925__$1;
(statearr_28943_29024[(2)] = inst_28812);

(statearr_28943_29024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (21))){
var inst_28838 = (state_28925[(19)]);
var inst_28838__$1 = (state_28925[(2)]);
var inst_28839 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28838__$1);
var state_28925__$1 = (function (){var statearr_28944 = state_28925;
(statearr_28944[(19)] = inst_28838__$1);

return statearr_28944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28925__$1,(22),inst_28839);
} else {
if((state_val_28926 === (31))){
var inst_28923 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28925__$1,inst_28923);
} else {
if((state_val_28926 === (32))){
var inst_28878 = (state_28925[(16)]);
var inst_28883 = inst_28878.cljs$lang$protocol_mask$partition0$;
var inst_28884 = (inst_28883 & (64));
var inst_28885 = inst_28878.cljs$core$ISeq$;
var inst_28886 = (cljs.core.PROTOCOL_SENTINEL === inst_28885);
var inst_28887 = ((inst_28884) || (inst_28886));
var state_28925__$1 = state_28925;
if(cljs.core.truth_(inst_28887)){
var statearr_28945_29025 = state_28925__$1;
(statearr_28945_29025[(1)] = (35));

} else {
var statearr_28946_29026 = state_28925__$1;
(statearr_28946_29026[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (40))){
var inst_28900 = (state_28925[(20)]);
var inst_28899 = (state_28925[(2)]);
var inst_28900__$1 = cljs.core.get.call(null,inst_28899,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28901 = cljs.core.get.call(null,inst_28899,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28902 = cljs.core.not_empty.call(null,inst_28900__$1);
var state_28925__$1 = (function (){var statearr_28947 = state_28925;
(statearr_28947[(20)] = inst_28900__$1);

(statearr_28947[(21)] = inst_28901);

return statearr_28947;
})();
if(cljs.core.truth_(inst_28902)){
var statearr_28948_29027 = state_28925__$1;
(statearr_28948_29027[(1)] = (41));

} else {
var statearr_28949_29028 = state_28925__$1;
(statearr_28949_29028[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (33))){
var state_28925__$1 = state_28925;
var statearr_28950_29029 = state_28925__$1;
(statearr_28950_29029[(2)] = false);

(statearr_28950_29029[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (13))){
var inst_28798 = (state_28925[(22)]);
var inst_28802 = cljs.core.chunk_first.call(null,inst_28798);
var inst_28803 = cljs.core.chunk_rest.call(null,inst_28798);
var inst_28804 = cljs.core.count.call(null,inst_28802);
var inst_28785 = inst_28803;
var inst_28786 = inst_28802;
var inst_28787 = inst_28804;
var inst_28788 = (0);
var state_28925__$1 = (function (){var statearr_28951 = state_28925;
(statearr_28951[(7)] = inst_28787);

(statearr_28951[(8)] = inst_28786);

(statearr_28951[(9)] = inst_28788);

(statearr_28951[(10)] = inst_28785);

return statearr_28951;
})();
var statearr_28952_29030 = state_28925__$1;
(statearr_28952_29030[(2)] = null);

(statearr_28952_29030[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (22))){
var inst_28842 = (state_28925[(23)]);
var inst_28838 = (state_28925[(19)]);
var inst_28841 = (state_28925[(24)]);
var inst_28846 = (state_28925[(25)]);
var inst_28841__$1 = (state_28925[(2)]);
var inst_28842__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28841__$1);
var inst_28843 = (function (){var all_files = inst_28838;
var res_SINGLEQUOTE_ = inst_28841__$1;
var res = inst_28842__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28842,inst_28838,inst_28841,inst_28846,inst_28841__$1,inst_28842__$1,state_val_28926,c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28767_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28767_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28842,inst_28838,inst_28841,inst_28846,inst_28841__$1,inst_28842__$1,state_val_28926,c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28844 = cljs.core.filter.call(null,inst_28843,inst_28841__$1);
var inst_28845 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28846__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28845);
var inst_28847 = cljs.core.not_empty.call(null,inst_28846__$1);
var state_28925__$1 = (function (){var statearr_28953 = state_28925;
(statearr_28953[(26)] = inst_28844);

(statearr_28953[(23)] = inst_28842__$1);

(statearr_28953[(24)] = inst_28841__$1);

(statearr_28953[(25)] = inst_28846__$1);

return statearr_28953;
})();
if(cljs.core.truth_(inst_28847)){
var statearr_28954_29031 = state_28925__$1;
(statearr_28954_29031[(1)] = (23));

} else {
var statearr_28955_29032 = state_28925__$1;
(statearr_28955_29032[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (36))){
var state_28925__$1 = state_28925;
var statearr_28956_29033 = state_28925__$1;
(statearr_28956_29033[(2)] = false);

(statearr_28956_29033[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (41))){
var inst_28900 = (state_28925[(20)]);
var inst_28904 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28905 = cljs.core.map.call(null,inst_28904,inst_28900);
var inst_28906 = cljs.core.pr_str.call(null,inst_28905);
var inst_28907 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28906)].join('');
var inst_28908 = figwheel.client.utils.log.call(null,inst_28907);
var state_28925__$1 = state_28925;
var statearr_28957_29034 = state_28925__$1;
(statearr_28957_29034[(2)] = inst_28908);

(statearr_28957_29034[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (43))){
var inst_28901 = (state_28925[(21)]);
var inst_28911 = (state_28925[(2)]);
var inst_28912 = cljs.core.not_empty.call(null,inst_28901);
var state_28925__$1 = (function (){var statearr_28958 = state_28925;
(statearr_28958[(27)] = inst_28911);

return statearr_28958;
})();
if(cljs.core.truth_(inst_28912)){
var statearr_28959_29035 = state_28925__$1;
(statearr_28959_29035[(1)] = (44));

} else {
var statearr_28960_29036 = state_28925__$1;
(statearr_28960_29036[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (29))){
var inst_28844 = (state_28925[(26)]);
var inst_28842 = (state_28925[(23)]);
var inst_28838 = (state_28925[(19)]);
var inst_28841 = (state_28925[(24)]);
var inst_28846 = (state_28925[(25)]);
var inst_28878 = (state_28925[(16)]);
var inst_28874 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28877 = (function (){var all_files = inst_28838;
var res_SINGLEQUOTE_ = inst_28841;
var res = inst_28842;
var files_not_loaded = inst_28844;
var dependencies_that_loaded = inst_28846;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28844,inst_28842,inst_28838,inst_28841,inst_28846,inst_28878,inst_28874,state_val_28926,c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28876){
var map__28961 = p__28876;
var map__28961__$1 = (((((!((map__28961 == null))))?(((((map__28961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28961):map__28961);
var namespace = cljs.core.get.call(null,map__28961__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28844,inst_28842,inst_28838,inst_28841,inst_28846,inst_28878,inst_28874,state_val_28926,c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28878__$1 = cljs.core.group_by.call(null,inst_28877,inst_28844);
var inst_28880 = (inst_28878__$1 == null);
var inst_28881 = cljs.core.not.call(null,inst_28880);
var state_28925__$1 = (function (){var statearr_28963 = state_28925;
(statearr_28963[(28)] = inst_28874);

(statearr_28963[(16)] = inst_28878__$1);

return statearr_28963;
})();
if(inst_28881){
var statearr_28964_29037 = state_28925__$1;
(statearr_28964_29037[(1)] = (32));

} else {
var statearr_28965_29038 = state_28925__$1;
(statearr_28965_29038[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (44))){
var inst_28901 = (state_28925[(21)]);
var inst_28914 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28901);
var inst_28915 = cljs.core.pr_str.call(null,inst_28914);
var inst_28916 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28915)].join('');
var inst_28917 = figwheel.client.utils.log.call(null,inst_28916);
var state_28925__$1 = state_28925;
var statearr_28966_29039 = state_28925__$1;
(statearr_28966_29039[(2)] = inst_28917);

(statearr_28966_29039[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (6))){
var inst_28819 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28967_29040 = state_28925__$1;
(statearr_28967_29040[(2)] = inst_28819);

(statearr_28967_29040[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (28))){
var inst_28844 = (state_28925[(26)]);
var inst_28871 = (state_28925[(2)]);
var inst_28872 = cljs.core.not_empty.call(null,inst_28844);
var state_28925__$1 = (function (){var statearr_28968 = state_28925;
(statearr_28968[(29)] = inst_28871);

return statearr_28968;
})();
if(cljs.core.truth_(inst_28872)){
var statearr_28969_29041 = state_28925__$1;
(statearr_28969_29041[(1)] = (29));

} else {
var statearr_28970_29042 = state_28925__$1;
(statearr_28970_29042[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (25))){
var inst_28842 = (state_28925[(23)]);
var inst_28858 = (state_28925[(2)]);
var inst_28859 = cljs.core.not_empty.call(null,inst_28842);
var state_28925__$1 = (function (){var statearr_28971 = state_28925;
(statearr_28971[(30)] = inst_28858);

return statearr_28971;
})();
if(cljs.core.truth_(inst_28859)){
var statearr_28972_29043 = state_28925__$1;
(statearr_28972_29043[(1)] = (26));

} else {
var statearr_28973_29044 = state_28925__$1;
(statearr_28973_29044[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (34))){
var inst_28894 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
if(cljs.core.truth_(inst_28894)){
var statearr_28974_29045 = state_28925__$1;
(statearr_28974_29045[(1)] = (38));

} else {
var statearr_28975_29046 = state_28925__$1;
(statearr_28975_29046[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (17))){
var state_28925__$1 = state_28925;
var statearr_28976_29047 = state_28925__$1;
(statearr_28976_29047[(2)] = recompile_dependents);

(statearr_28976_29047[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (3))){
var state_28925__$1 = state_28925;
var statearr_28977_29048 = state_28925__$1;
(statearr_28977_29048[(2)] = null);

(statearr_28977_29048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (12))){
var inst_28815 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28978_29049 = state_28925__$1;
(statearr_28978_29049[(2)] = inst_28815);

(statearr_28978_29049[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (2))){
var inst_28777 = (state_28925[(13)]);
var inst_28784 = cljs.core.seq.call(null,inst_28777);
var inst_28785 = inst_28784;
var inst_28786 = null;
var inst_28787 = (0);
var inst_28788 = (0);
var state_28925__$1 = (function (){var statearr_28979 = state_28925;
(statearr_28979[(7)] = inst_28787);

(statearr_28979[(8)] = inst_28786);

(statearr_28979[(9)] = inst_28788);

(statearr_28979[(10)] = inst_28785);

return statearr_28979;
})();
var statearr_28980_29050 = state_28925__$1;
(statearr_28980_29050[(2)] = null);

(statearr_28980_29050[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (23))){
var inst_28844 = (state_28925[(26)]);
var inst_28842 = (state_28925[(23)]);
var inst_28838 = (state_28925[(19)]);
var inst_28841 = (state_28925[(24)]);
var inst_28846 = (state_28925[(25)]);
var inst_28849 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28851 = (function (){var all_files = inst_28838;
var res_SINGLEQUOTE_ = inst_28841;
var res = inst_28842;
var files_not_loaded = inst_28844;
var dependencies_that_loaded = inst_28846;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28844,inst_28842,inst_28838,inst_28841,inst_28846,inst_28849,state_val_28926,c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28850){
var map__28981 = p__28850;
var map__28981__$1 = (((((!((map__28981 == null))))?(((((map__28981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28981):map__28981);
var request_url = cljs.core.get.call(null,map__28981__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28844,inst_28842,inst_28838,inst_28841,inst_28846,inst_28849,state_val_28926,c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28852 = cljs.core.reverse.call(null,inst_28846);
var inst_28853 = cljs.core.map.call(null,inst_28851,inst_28852);
var inst_28854 = cljs.core.pr_str.call(null,inst_28853);
var inst_28855 = figwheel.client.utils.log.call(null,inst_28854);
var state_28925__$1 = (function (){var statearr_28983 = state_28925;
(statearr_28983[(31)] = inst_28849);

return statearr_28983;
})();
var statearr_28984_29051 = state_28925__$1;
(statearr_28984_29051[(2)] = inst_28855);

(statearr_28984_29051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (35))){
var state_28925__$1 = state_28925;
var statearr_28985_29052 = state_28925__$1;
(statearr_28985_29052[(2)] = true);

(statearr_28985_29052[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (19))){
var inst_28828 = (state_28925[(12)]);
var inst_28834 = figwheel.client.file_reloading.expand_files.call(null,inst_28828);
var state_28925__$1 = state_28925;
var statearr_28986_29053 = state_28925__$1;
(statearr_28986_29053[(2)] = inst_28834);

(statearr_28986_29053[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (11))){
var state_28925__$1 = state_28925;
var statearr_28987_29054 = state_28925__$1;
(statearr_28987_29054[(2)] = null);

(statearr_28987_29054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (9))){
var inst_28817 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28988_29055 = state_28925__$1;
(statearr_28988_29055[(2)] = inst_28817);

(statearr_28988_29055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (5))){
var inst_28787 = (state_28925[(7)]);
var inst_28788 = (state_28925[(9)]);
var inst_28790 = (inst_28788 < inst_28787);
var inst_28791 = inst_28790;
var state_28925__$1 = state_28925;
if(cljs.core.truth_(inst_28791)){
var statearr_28989_29056 = state_28925__$1;
(statearr_28989_29056[(1)] = (7));

} else {
var statearr_28990_29057 = state_28925__$1;
(statearr_28990_29057[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (14))){
var inst_28798 = (state_28925[(22)]);
var inst_28807 = cljs.core.first.call(null,inst_28798);
var inst_28808 = figwheel.client.file_reloading.eval_body.call(null,inst_28807,opts);
var inst_28809 = cljs.core.next.call(null,inst_28798);
var inst_28785 = inst_28809;
var inst_28786 = null;
var inst_28787 = (0);
var inst_28788 = (0);
var state_28925__$1 = (function (){var statearr_28991 = state_28925;
(statearr_28991[(7)] = inst_28787);

(statearr_28991[(8)] = inst_28786);

(statearr_28991[(9)] = inst_28788);

(statearr_28991[(10)] = inst_28785);

(statearr_28991[(32)] = inst_28808);

return statearr_28991;
})();
var statearr_28992_29058 = state_28925__$1;
(statearr_28992_29058[(2)] = null);

(statearr_28992_29058[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (45))){
var state_28925__$1 = state_28925;
var statearr_28993_29059 = state_28925__$1;
(statearr_28993_29059[(2)] = null);

(statearr_28993_29059[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (26))){
var inst_28844 = (state_28925[(26)]);
var inst_28842 = (state_28925[(23)]);
var inst_28838 = (state_28925[(19)]);
var inst_28841 = (state_28925[(24)]);
var inst_28846 = (state_28925[(25)]);
var inst_28861 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28863 = (function (){var all_files = inst_28838;
var res_SINGLEQUOTE_ = inst_28841;
var res = inst_28842;
var files_not_loaded = inst_28844;
var dependencies_that_loaded = inst_28846;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28844,inst_28842,inst_28838,inst_28841,inst_28846,inst_28861,state_val_28926,c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28862){
var map__28994 = p__28862;
var map__28994__$1 = (((((!((map__28994 == null))))?(((((map__28994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28994):map__28994);
var namespace = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28844,inst_28842,inst_28838,inst_28841,inst_28846,inst_28861,state_val_28926,c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28864 = cljs.core.map.call(null,inst_28863,inst_28842);
var inst_28865 = cljs.core.pr_str.call(null,inst_28864);
var inst_28866 = figwheel.client.utils.log.call(null,inst_28865);
var inst_28867 = (function (){var all_files = inst_28838;
var res_SINGLEQUOTE_ = inst_28841;
var res = inst_28842;
var files_not_loaded = inst_28844;
var dependencies_that_loaded = inst_28846;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28844,inst_28842,inst_28838,inst_28841,inst_28846,inst_28861,inst_28863,inst_28864,inst_28865,inst_28866,state_val_28926,c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28844,inst_28842,inst_28838,inst_28841,inst_28846,inst_28861,inst_28863,inst_28864,inst_28865,inst_28866,state_val_28926,c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28868 = setTimeout(inst_28867,(10));
var state_28925__$1 = (function (){var statearr_28996 = state_28925;
(statearr_28996[(33)] = inst_28866);

(statearr_28996[(34)] = inst_28861);

return statearr_28996;
})();
var statearr_28997_29060 = state_28925__$1;
(statearr_28997_29060[(2)] = inst_28868);

(statearr_28997_29060[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (16))){
var state_28925__$1 = state_28925;
var statearr_28998_29061 = state_28925__$1;
(statearr_28998_29061[(2)] = reload_dependents);

(statearr_28998_29061[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (38))){
var inst_28878 = (state_28925[(16)]);
var inst_28896 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28878);
var state_28925__$1 = state_28925;
var statearr_28999_29062 = state_28925__$1;
(statearr_28999_29062[(2)] = inst_28896);

(statearr_28999_29062[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (30))){
var state_28925__$1 = state_28925;
var statearr_29000_29063 = state_28925__$1;
(statearr_29000_29063[(2)] = null);

(statearr_29000_29063[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (10))){
var inst_28798 = (state_28925[(22)]);
var inst_28800 = cljs.core.chunked_seq_QMARK_.call(null,inst_28798);
var state_28925__$1 = state_28925;
if(inst_28800){
var statearr_29001_29064 = state_28925__$1;
(statearr_29001_29064[(1)] = (13));

} else {
var statearr_29002_29065 = state_28925__$1;
(statearr_29002_29065[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (18))){
var inst_28832 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
if(cljs.core.truth_(inst_28832)){
var statearr_29003_29066 = state_28925__$1;
(statearr_29003_29066[(1)] = (19));

} else {
var statearr_29004_29067 = state_28925__$1;
(statearr_29004_29067[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (42))){
var state_28925__$1 = state_28925;
var statearr_29005_29068 = state_28925__$1;
(statearr_29005_29068[(2)] = null);

(statearr_29005_29068[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (37))){
var inst_28891 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_29006_29069 = state_28925__$1;
(statearr_29006_29069[(2)] = inst_28891);

(statearr_29006_29069[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (8))){
var inst_28785 = (state_28925[(10)]);
var inst_28798 = (state_28925[(22)]);
var inst_28798__$1 = cljs.core.seq.call(null,inst_28785);
var state_28925__$1 = (function (){var statearr_29007 = state_28925;
(statearr_29007[(22)] = inst_28798__$1);

return statearr_29007;
})();
if(inst_28798__$1){
var statearr_29008_29070 = state_28925__$1;
(statearr_29008_29070[(1)] = (10));

} else {
var statearr_29009_29071 = state_28925__$1;
(statearr_29009_29071[(1)] = (11));

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
});})(c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24981__auto__,c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24982__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24982__auto____0 = (function (){
var statearr_29010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29010[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24982__auto__);

(statearr_29010[(1)] = (1));

return statearr_29010;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24982__auto____1 = (function (state_28925){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_28925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e29011){if((e29011 instanceof Object)){
var ex__24985__auto__ = e29011;
var statearr_29012_29072 = state_28925;
(statearr_29012_29072[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29073 = state_28925;
state_28925 = G__29073;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24982__auto__ = function(state_28925){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24982__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24982__auto____1.call(this,state_28925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24982__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24982__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25078__auto__ = (function (){var statearr_29013 = f__25077__auto__.call(null);
(statearr_29013[(6)] = c__25076__auto__);

return statearr_29013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto__,map__28770,map__28770__$1,opts,before_jsload,on_jsload,reload_dependents,map__28771,map__28771__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25076__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29076,link){
var map__29077 = p__29076;
var map__29077__$1 = (((((!((map__29077 == null))))?(((((map__29077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29077):map__29077);
var file = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29077,map__29077__$1,file){
return (function (p1__29074_SHARP_,p2__29075_SHARP_){
if(cljs.core._EQ_.call(null,p1__29074_SHARP_,p2__29075_SHARP_)){
return p1__29074_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29077,map__29077__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29080){
var map__29081 = p__29080;
var map__29081__$1 = (((((!((map__29081 == null))))?(((((map__29081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29081):map__29081);
var match_length = cljs.core.get.call(null,map__29081__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29081__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29079_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29079_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29083_SHARP_,p2__29084_SHARP_){
return cljs.core.assoc.call(null,p1__29083_SHARP_,cljs.core.get.call(null,p2__29084_SHARP_,key),p2__29084_SHARP_);
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
var loaded_f_datas_29085 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29085);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29085);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29086,p__29087){
var map__29088 = p__29086;
var map__29088__$1 = (((((!((map__29088 == null))))?(((((map__29088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29088):map__29088);
var on_cssload = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29089 = p__29087;
var map__29089__$1 = (((((!((map__29089 == null))))?(((((map__29089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29089):map__29089);
var files_msg = map__29089__$1;
var files = cljs.core.get.call(null,map__29089__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1544535926592
