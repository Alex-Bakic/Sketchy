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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28430_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28430_SHARP_));
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
var seq__28431 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28432 = null;
var count__28433 = (0);
var i__28434 = (0);
while(true){
if((i__28434 < count__28433)){
var n = cljs.core._nth.call(null,chunk__28432,i__28434);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28435 = seq__28431;
var G__28436 = chunk__28432;
var G__28437 = count__28433;
var G__28438 = (i__28434 + (1));
seq__28431 = G__28435;
chunk__28432 = G__28436;
count__28433 = G__28437;
i__28434 = G__28438;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28431);
if(temp__5457__auto__){
var seq__28431__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28431__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__28431__$1);
var G__28439 = cljs.core.chunk_rest.call(null,seq__28431__$1);
var G__28440 = c__4461__auto__;
var G__28441 = cljs.core.count.call(null,c__4461__auto__);
var G__28442 = (0);
seq__28431 = G__28439;
chunk__28432 = G__28440;
count__28433 = G__28441;
i__28434 = G__28442;
continue;
} else {
var n = cljs.core.first.call(null,seq__28431__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28443 = cljs.core.next.call(null,seq__28431__$1);
var G__28444 = null;
var G__28445 = (0);
var G__28446 = (0);
seq__28431 = G__28443;
chunk__28432 = G__28444;
count__28433 = G__28445;
i__28434 = G__28446;
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
return cljs.core.some.call(null,(function (p__28447){
var vec__28448 = p__28447;
var _ = cljs.core.nth.call(null,vec__28448,(0),null);
var v = cljs.core.nth.call(null,vec__28448,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__28451){
var vec__28452 = p__28451;
var k = cljs.core.nth.call(null,vec__28452,(0),null);
var v = cljs.core.nth.call(null,vec__28452,(1),null);
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

var seq__28464_28472 = cljs.core.seq.call(null,deps);
var chunk__28465_28473 = null;
var count__28466_28474 = (0);
var i__28467_28475 = (0);
while(true){
if((i__28467_28475 < count__28466_28474)){
var dep_28476 = cljs.core._nth.call(null,chunk__28465_28473,i__28467_28475);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_28476;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28476));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28476,(depth + (1)),state);
} else {
}


var G__28477 = seq__28464_28472;
var G__28478 = chunk__28465_28473;
var G__28479 = count__28466_28474;
var G__28480 = (i__28467_28475 + (1));
seq__28464_28472 = G__28477;
chunk__28465_28473 = G__28478;
count__28466_28474 = G__28479;
i__28467_28475 = G__28480;
continue;
} else {
var temp__5457__auto___28481 = cljs.core.seq.call(null,seq__28464_28472);
if(temp__5457__auto___28481){
var seq__28464_28482__$1 = temp__5457__auto___28481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28464_28482__$1)){
var c__4461__auto___28483 = cljs.core.chunk_first.call(null,seq__28464_28482__$1);
var G__28484 = cljs.core.chunk_rest.call(null,seq__28464_28482__$1);
var G__28485 = c__4461__auto___28483;
var G__28486 = cljs.core.count.call(null,c__4461__auto___28483);
var G__28487 = (0);
seq__28464_28472 = G__28484;
chunk__28465_28473 = G__28485;
count__28466_28474 = G__28486;
i__28467_28475 = G__28487;
continue;
} else {
var dep_28488 = cljs.core.first.call(null,seq__28464_28482__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_28488;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28488));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28488,(depth + (1)),state);
} else {
}


var G__28489 = cljs.core.next.call(null,seq__28464_28482__$1);
var G__28490 = null;
var G__28491 = (0);
var G__28492 = (0);
seq__28464_28472 = G__28489;
chunk__28465_28473 = G__28490;
count__28466_28474 = G__28491;
i__28467_28475 = G__28492;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28468){
var vec__28469 = p__28468;
var seq__28470 = cljs.core.seq.call(null,vec__28469);
var first__28471 = cljs.core.first.call(null,seq__28470);
var seq__28470__$1 = cljs.core.next.call(null,seq__28470);
var x = first__28471;
var xs = seq__28470__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28469,seq__28470,first__28471,seq__28470__$1,x,xs,get_deps__$1){
return (function (p1__28455_SHARP_){
return clojure.set.difference.call(null,p1__28455_SHARP_,x);
});})(vec__28469,seq__28470,first__28471,seq__28470__$1,x,xs,get_deps__$1))
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
var seq__28493 = cljs.core.seq.call(null,provides);
var chunk__28494 = null;
var count__28495 = (0);
var i__28496 = (0);
while(true){
if((i__28496 < count__28495)){
var prov = cljs.core._nth.call(null,chunk__28494,i__28496);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28497_28505 = cljs.core.seq.call(null,requires);
var chunk__28498_28506 = null;
var count__28499_28507 = (0);
var i__28500_28508 = (0);
while(true){
if((i__28500_28508 < count__28499_28507)){
var req_28509 = cljs.core._nth.call(null,chunk__28498_28506,i__28500_28508);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28509,prov);


var G__28510 = seq__28497_28505;
var G__28511 = chunk__28498_28506;
var G__28512 = count__28499_28507;
var G__28513 = (i__28500_28508 + (1));
seq__28497_28505 = G__28510;
chunk__28498_28506 = G__28511;
count__28499_28507 = G__28512;
i__28500_28508 = G__28513;
continue;
} else {
var temp__5457__auto___28514 = cljs.core.seq.call(null,seq__28497_28505);
if(temp__5457__auto___28514){
var seq__28497_28515__$1 = temp__5457__auto___28514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28497_28515__$1)){
var c__4461__auto___28516 = cljs.core.chunk_first.call(null,seq__28497_28515__$1);
var G__28517 = cljs.core.chunk_rest.call(null,seq__28497_28515__$1);
var G__28518 = c__4461__auto___28516;
var G__28519 = cljs.core.count.call(null,c__4461__auto___28516);
var G__28520 = (0);
seq__28497_28505 = G__28517;
chunk__28498_28506 = G__28518;
count__28499_28507 = G__28519;
i__28500_28508 = G__28520;
continue;
} else {
var req_28521 = cljs.core.first.call(null,seq__28497_28515__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28521,prov);


var G__28522 = cljs.core.next.call(null,seq__28497_28515__$1);
var G__28523 = null;
var G__28524 = (0);
var G__28525 = (0);
seq__28497_28505 = G__28522;
chunk__28498_28506 = G__28523;
count__28499_28507 = G__28524;
i__28500_28508 = G__28525;
continue;
}
} else {
}
}
break;
}


var G__28526 = seq__28493;
var G__28527 = chunk__28494;
var G__28528 = count__28495;
var G__28529 = (i__28496 + (1));
seq__28493 = G__28526;
chunk__28494 = G__28527;
count__28495 = G__28528;
i__28496 = G__28529;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28493);
if(temp__5457__auto__){
var seq__28493__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28493__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__28493__$1);
var G__28530 = cljs.core.chunk_rest.call(null,seq__28493__$1);
var G__28531 = c__4461__auto__;
var G__28532 = cljs.core.count.call(null,c__4461__auto__);
var G__28533 = (0);
seq__28493 = G__28530;
chunk__28494 = G__28531;
count__28495 = G__28532;
i__28496 = G__28533;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28493__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28501_28534 = cljs.core.seq.call(null,requires);
var chunk__28502_28535 = null;
var count__28503_28536 = (0);
var i__28504_28537 = (0);
while(true){
if((i__28504_28537 < count__28503_28536)){
var req_28538 = cljs.core._nth.call(null,chunk__28502_28535,i__28504_28537);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28538,prov);


var G__28539 = seq__28501_28534;
var G__28540 = chunk__28502_28535;
var G__28541 = count__28503_28536;
var G__28542 = (i__28504_28537 + (1));
seq__28501_28534 = G__28539;
chunk__28502_28535 = G__28540;
count__28503_28536 = G__28541;
i__28504_28537 = G__28542;
continue;
} else {
var temp__5457__auto___28543__$1 = cljs.core.seq.call(null,seq__28501_28534);
if(temp__5457__auto___28543__$1){
var seq__28501_28544__$1 = temp__5457__auto___28543__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28501_28544__$1)){
var c__4461__auto___28545 = cljs.core.chunk_first.call(null,seq__28501_28544__$1);
var G__28546 = cljs.core.chunk_rest.call(null,seq__28501_28544__$1);
var G__28547 = c__4461__auto___28545;
var G__28548 = cljs.core.count.call(null,c__4461__auto___28545);
var G__28549 = (0);
seq__28501_28534 = G__28546;
chunk__28502_28535 = G__28547;
count__28503_28536 = G__28548;
i__28504_28537 = G__28549;
continue;
} else {
var req_28550 = cljs.core.first.call(null,seq__28501_28544__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28550,prov);


var G__28551 = cljs.core.next.call(null,seq__28501_28544__$1);
var G__28552 = null;
var G__28553 = (0);
var G__28554 = (0);
seq__28501_28534 = G__28551;
chunk__28502_28535 = G__28552;
count__28503_28536 = G__28553;
i__28504_28537 = G__28554;
continue;
}
} else {
}
}
break;
}


var G__28555 = cljs.core.next.call(null,seq__28493__$1);
var G__28556 = null;
var G__28557 = (0);
var G__28558 = (0);
seq__28493 = G__28555;
chunk__28494 = G__28556;
count__28495 = G__28557;
i__28496 = G__28558;
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
var seq__28559_28563 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28560_28564 = null;
var count__28561_28565 = (0);
var i__28562_28566 = (0);
while(true){
if((i__28562_28566 < count__28561_28565)){
var ns_28567 = cljs.core._nth.call(null,chunk__28560_28564,i__28562_28566);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28567);


var G__28568 = seq__28559_28563;
var G__28569 = chunk__28560_28564;
var G__28570 = count__28561_28565;
var G__28571 = (i__28562_28566 + (1));
seq__28559_28563 = G__28568;
chunk__28560_28564 = G__28569;
count__28561_28565 = G__28570;
i__28562_28566 = G__28571;
continue;
} else {
var temp__5457__auto___28572 = cljs.core.seq.call(null,seq__28559_28563);
if(temp__5457__auto___28572){
var seq__28559_28573__$1 = temp__5457__auto___28572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28559_28573__$1)){
var c__4461__auto___28574 = cljs.core.chunk_first.call(null,seq__28559_28573__$1);
var G__28575 = cljs.core.chunk_rest.call(null,seq__28559_28573__$1);
var G__28576 = c__4461__auto___28574;
var G__28577 = cljs.core.count.call(null,c__4461__auto___28574);
var G__28578 = (0);
seq__28559_28563 = G__28575;
chunk__28560_28564 = G__28576;
count__28561_28565 = G__28577;
i__28562_28566 = G__28578;
continue;
} else {
var ns_28579 = cljs.core.first.call(null,seq__28559_28573__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28579);


var G__28580 = cljs.core.next.call(null,seq__28559_28573__$1);
var G__28581 = null;
var G__28582 = (0);
var G__28583 = (0);
seq__28559_28563 = G__28580;
chunk__28560_28564 = G__28581;
count__28561_28565 = G__28582;
i__28562_28566 = G__28583;
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
var G__28584__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28584 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28585__i = 0, G__28585__a = new Array(arguments.length -  0);
while (G__28585__i < G__28585__a.length) {G__28585__a[G__28585__i] = arguments[G__28585__i + 0]; ++G__28585__i;}
  args = new cljs.core.IndexedSeq(G__28585__a,0,null);
} 
return G__28584__delegate.call(this,args);};
G__28584.cljs$lang$maxFixedArity = 0;
G__28584.cljs$lang$applyTo = (function (arglist__28586){
var args = cljs.core.seq(arglist__28586);
return G__28584__delegate(args);
});
G__28584.cljs$core$IFn$_invoke$arity$variadic = G__28584__delegate;
return G__28584;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28587_SHARP_,p2__28588_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28587_SHARP_)),p2__28588_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28589_SHARP_,p2__28590_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28589_SHARP_),p2__28590_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28591 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28591.addCallback(((function (G__28591){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28591))
);

G__28591.addErrback(((function (G__28591){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28591))
);

return G__28591;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28592){if((e28592 instanceof Error)){
var e = e28592;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28592;

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
}catch (e28593){if((e28593 instanceof Error)){
var e = e28593;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28593;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28594 = cljs.core._EQ_;
var expr__28595 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28594.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28595))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28594.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28595))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28594.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28595))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28594,expr__28595){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28594,expr__28595))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28597,callback){
var map__28598 = p__28597;
var map__28598__$1 = (((((!((map__28598 == null))))?(((((map__28598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28598):map__28598);
var file_msg = map__28598__$1;
var request_url = cljs.core.get.call(null,map__28598__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28598,map__28598__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28598,map__28598__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__25080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto__){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto__){
return (function (state_28636){
var state_val_28637 = (state_28636[(1)]);
if((state_val_28637 === (7))){
var inst_28632 = (state_28636[(2)]);
var state_28636__$1 = state_28636;
var statearr_28638_28664 = state_28636__$1;
(statearr_28638_28664[(2)] = inst_28632);

(statearr_28638_28664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (1))){
var state_28636__$1 = state_28636;
var statearr_28639_28665 = state_28636__$1;
(statearr_28639_28665[(2)] = null);

(statearr_28639_28665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (4))){
var inst_28602 = (state_28636[(7)]);
var inst_28602__$1 = (state_28636[(2)]);
var state_28636__$1 = (function (){var statearr_28640 = state_28636;
(statearr_28640[(7)] = inst_28602__$1);

return statearr_28640;
})();
if(cljs.core.truth_(inst_28602__$1)){
var statearr_28641_28666 = state_28636__$1;
(statearr_28641_28666[(1)] = (5));

} else {
var statearr_28642_28667 = state_28636__$1;
(statearr_28642_28667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (15))){
var inst_28617 = (state_28636[(8)]);
var inst_28615 = (state_28636[(9)]);
var inst_28619 = inst_28617.call(null,inst_28615);
var state_28636__$1 = state_28636;
var statearr_28643_28668 = state_28636__$1;
(statearr_28643_28668[(2)] = inst_28619);

(statearr_28643_28668[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (13))){
var inst_28626 = (state_28636[(2)]);
var state_28636__$1 = state_28636;
var statearr_28644_28669 = state_28636__$1;
(statearr_28644_28669[(2)] = inst_28626);

(statearr_28644_28669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (6))){
var state_28636__$1 = state_28636;
var statearr_28645_28670 = state_28636__$1;
(statearr_28645_28670[(2)] = null);

(statearr_28645_28670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (17))){
var inst_28623 = (state_28636[(2)]);
var state_28636__$1 = state_28636;
var statearr_28646_28671 = state_28636__$1;
(statearr_28646_28671[(2)] = inst_28623);

(statearr_28646_28671[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (3))){
var inst_28634 = (state_28636[(2)]);
var state_28636__$1 = state_28636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28636__$1,inst_28634);
} else {
if((state_val_28637 === (12))){
var state_28636__$1 = state_28636;
var statearr_28647_28672 = state_28636__$1;
(statearr_28647_28672[(2)] = null);

(statearr_28647_28672[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (2))){
var state_28636__$1 = state_28636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28636__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28637 === (11))){
var inst_28607 = (state_28636[(10)]);
var inst_28613 = figwheel.client.file_reloading.blocking_load.call(null,inst_28607);
var state_28636__$1 = state_28636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28636__$1,(14),inst_28613);
} else {
if((state_val_28637 === (9))){
var inst_28607 = (state_28636[(10)]);
var state_28636__$1 = state_28636;
if(cljs.core.truth_(inst_28607)){
var statearr_28648_28673 = state_28636__$1;
(statearr_28648_28673[(1)] = (11));

} else {
var statearr_28649_28674 = state_28636__$1;
(statearr_28649_28674[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (5))){
var inst_28608 = (state_28636[(11)]);
var inst_28602 = (state_28636[(7)]);
var inst_28607 = cljs.core.nth.call(null,inst_28602,(0),null);
var inst_28608__$1 = cljs.core.nth.call(null,inst_28602,(1),null);
var state_28636__$1 = (function (){var statearr_28650 = state_28636;
(statearr_28650[(11)] = inst_28608__$1);

(statearr_28650[(10)] = inst_28607);

return statearr_28650;
})();
if(cljs.core.truth_(inst_28608__$1)){
var statearr_28651_28675 = state_28636__$1;
(statearr_28651_28675[(1)] = (8));

} else {
var statearr_28652_28676 = state_28636__$1;
(statearr_28652_28676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (14))){
var inst_28607 = (state_28636[(10)]);
var inst_28617 = (state_28636[(8)]);
var inst_28615 = (state_28636[(2)]);
var inst_28616 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28617__$1 = cljs.core.get.call(null,inst_28616,inst_28607);
var state_28636__$1 = (function (){var statearr_28653 = state_28636;
(statearr_28653[(8)] = inst_28617__$1);

(statearr_28653[(9)] = inst_28615);

return statearr_28653;
})();
if(cljs.core.truth_(inst_28617__$1)){
var statearr_28654_28677 = state_28636__$1;
(statearr_28654_28677[(1)] = (15));

} else {
var statearr_28655_28678 = state_28636__$1;
(statearr_28655_28678[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (16))){
var inst_28615 = (state_28636[(9)]);
var inst_28621 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28615);
var state_28636__$1 = state_28636;
var statearr_28656_28679 = state_28636__$1;
(statearr_28656_28679[(2)] = inst_28621);

(statearr_28656_28679[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (10))){
var inst_28628 = (state_28636[(2)]);
var state_28636__$1 = (function (){var statearr_28657 = state_28636;
(statearr_28657[(12)] = inst_28628);

return statearr_28657;
})();
var statearr_28658_28680 = state_28636__$1;
(statearr_28658_28680[(2)] = null);

(statearr_28658_28680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (8))){
var inst_28608 = (state_28636[(11)]);
var inst_28610 = eval(inst_28608);
var state_28636__$1 = state_28636;
var statearr_28659_28681 = state_28636__$1;
(statearr_28659_28681[(2)] = inst_28610);

(statearr_28659_28681[(1)] = (10));


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
});})(c__25080__auto__))
;
return ((function (switch__24985__auto__,c__25080__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24986__auto__ = null;
var figwheel$client$file_reloading$state_machine__24986__auto____0 = (function (){
var statearr_28660 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28660[(0)] = figwheel$client$file_reloading$state_machine__24986__auto__);

(statearr_28660[(1)] = (1));

return statearr_28660;
});
var figwheel$client$file_reloading$state_machine__24986__auto____1 = (function (state_28636){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_28636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e28661){if((e28661 instanceof Object)){
var ex__24989__auto__ = e28661;
var statearr_28662_28682 = state_28636;
(statearr_28662_28682[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28683 = state_28636;
state_28636 = G__28683;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24986__auto__ = function(state_28636){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24986__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24986__auto____1.call(this,state_28636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24986__auto____0;
figwheel$client$file_reloading$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24986__auto____1;
return figwheel$client$file_reloading$state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto__))
})();
var state__25082__auto__ = (function (){var statearr_28663 = f__25081__auto__.call(null);
(statearr_28663[(6)] = c__25080__auto__);

return statearr_28663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto__))
);

return c__25080__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28685 = arguments.length;
switch (G__28685) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28687,callback){
var map__28688 = p__28687;
var map__28688__$1 = (((((!((map__28688 == null))))?(((((map__28688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28688):map__28688);
var file_msg = map__28688__$1;
var namespace = cljs.core.get.call(null,map__28688__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28688,map__28688__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28688,map__28688__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28690){
var map__28691 = p__28690;
var map__28691__$1 = (((((!((map__28691 == null))))?(((((map__28691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28691):map__28691);
var file_msg = map__28691__$1;
var namespace = cljs.core.get.call(null,map__28691__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28693){
var map__28694 = p__28693;
var map__28694__$1 = (((((!((map__28694 == null))))?(((((map__28694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28694):map__28694);
var file_msg = map__28694__$1;
var namespace = cljs.core.get.call(null,map__28694__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28696,callback){
var map__28697 = p__28696;
var map__28697__$1 = (((((!((map__28697 == null))))?(((((map__28697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28697):map__28697);
var file_msg = map__28697__$1;
var request_url = cljs.core.get.call(null,map__28697__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28697__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__25080__auto___28747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___28747,out){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___28747,out){
return (function (state_28732){
var state_val_28733 = (state_28732[(1)]);
if((state_val_28733 === (1))){
var inst_28706 = cljs.core.seq.call(null,files);
var inst_28707 = cljs.core.first.call(null,inst_28706);
var inst_28708 = cljs.core.next.call(null,inst_28706);
var inst_28709 = files;
var state_28732__$1 = (function (){var statearr_28734 = state_28732;
(statearr_28734[(7)] = inst_28709);

(statearr_28734[(8)] = inst_28707);

(statearr_28734[(9)] = inst_28708);

return statearr_28734;
})();
var statearr_28735_28748 = state_28732__$1;
(statearr_28735_28748[(2)] = null);

(statearr_28735_28748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (2))){
var inst_28709 = (state_28732[(7)]);
var inst_28715 = (state_28732[(10)]);
var inst_28714 = cljs.core.seq.call(null,inst_28709);
var inst_28715__$1 = cljs.core.first.call(null,inst_28714);
var inst_28716 = cljs.core.next.call(null,inst_28714);
var inst_28717 = (inst_28715__$1 == null);
var inst_28718 = cljs.core.not.call(null,inst_28717);
var state_28732__$1 = (function (){var statearr_28736 = state_28732;
(statearr_28736[(10)] = inst_28715__$1);

(statearr_28736[(11)] = inst_28716);

return statearr_28736;
})();
if(inst_28718){
var statearr_28737_28749 = state_28732__$1;
(statearr_28737_28749[(1)] = (4));

} else {
var statearr_28738_28750 = state_28732__$1;
(statearr_28738_28750[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (3))){
var inst_28730 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28732__$1,inst_28730);
} else {
if((state_val_28733 === (4))){
var inst_28715 = (state_28732[(10)]);
var inst_28720 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28715);
var state_28732__$1 = state_28732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28732__$1,(7),inst_28720);
} else {
if((state_val_28733 === (5))){
var inst_28726 = cljs.core.async.close_BANG_.call(null,out);
var state_28732__$1 = state_28732;
var statearr_28739_28751 = state_28732__$1;
(statearr_28739_28751[(2)] = inst_28726);

(statearr_28739_28751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (6))){
var inst_28728 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28740_28752 = state_28732__$1;
(statearr_28740_28752[(2)] = inst_28728);

(statearr_28740_28752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (7))){
var inst_28716 = (state_28732[(11)]);
var inst_28722 = (state_28732[(2)]);
var inst_28723 = cljs.core.async.put_BANG_.call(null,out,inst_28722);
var inst_28709 = inst_28716;
var state_28732__$1 = (function (){var statearr_28741 = state_28732;
(statearr_28741[(7)] = inst_28709);

(statearr_28741[(12)] = inst_28723);

return statearr_28741;
})();
var statearr_28742_28753 = state_28732__$1;
(statearr_28742_28753[(2)] = null);

(statearr_28742_28753[(1)] = (2));


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
});})(c__25080__auto___28747,out))
;
return ((function (switch__24985__auto__,c__25080__auto___28747,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24986__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24986__auto____0 = (function (){
var statearr_28743 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28743[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24986__auto__);

(statearr_28743[(1)] = (1));

return statearr_28743;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24986__auto____1 = (function (state_28732){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_28732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e28744){if((e28744 instanceof Object)){
var ex__24989__auto__ = e28744;
var statearr_28745_28754 = state_28732;
(statearr_28745_28754[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28755 = state_28732;
state_28732 = G__28755;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24986__auto__ = function(state_28732){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24986__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24986__auto____1.call(this,state_28732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24986__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24986__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___28747,out))
})();
var state__25082__auto__ = (function (){var statearr_28746 = f__25081__auto__.call(null);
(statearr_28746[(6)] = c__25080__auto___28747);

return statearr_28746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___28747,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28756,opts){
var map__28757 = p__28756;
var map__28757__$1 = (((((!((map__28757 == null))))?(((((map__28757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28757):map__28757);
var eval_body = cljs.core.get.call(null,map__28757__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28757__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28759){var e = e28759;
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
return (function (p1__28760_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28760_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28761){
var vec__28762 = p__28761;
var k = cljs.core.nth.call(null,vec__28762,(0),null);
var v = cljs.core.nth.call(null,vec__28762,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28765){
var vec__28766 = p__28765;
var k = cljs.core.nth.call(null,vec__28766,(0),null);
var v = cljs.core.nth.call(null,vec__28766,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28772,p__28773){
var map__28774 = p__28772;
var map__28774__$1 = (((((!((map__28774 == null))))?(((((map__28774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28774):map__28774);
var opts = map__28774__$1;
var before_jsload = cljs.core.get.call(null,map__28774__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28774__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28774__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28775 = p__28773;
var map__28775__$1 = (((((!((map__28775 == null))))?(((((map__28775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28775):map__28775);
var msg = map__28775__$1;
var files = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28929){
var state_val_28930 = (state_28929[(1)]);
if((state_val_28930 === (7))){
var inst_28790 = (state_28929[(7)]);
var inst_28791 = (state_28929[(8)]);
var inst_28789 = (state_28929[(9)]);
var inst_28792 = (state_28929[(10)]);
var inst_28797 = cljs.core._nth.call(null,inst_28790,inst_28792);
var inst_28798 = figwheel.client.file_reloading.eval_body.call(null,inst_28797,opts);
var inst_28799 = (inst_28792 + (1));
var tmp28931 = inst_28790;
var tmp28932 = inst_28791;
var tmp28933 = inst_28789;
var inst_28789__$1 = tmp28933;
var inst_28790__$1 = tmp28931;
var inst_28791__$1 = tmp28932;
var inst_28792__$1 = inst_28799;
var state_28929__$1 = (function (){var statearr_28934 = state_28929;
(statearr_28934[(7)] = inst_28790__$1);

(statearr_28934[(8)] = inst_28791__$1);

(statearr_28934[(9)] = inst_28789__$1);

(statearr_28934[(11)] = inst_28798);

(statearr_28934[(10)] = inst_28792__$1);

return statearr_28934;
})();
var statearr_28935_29018 = state_28929__$1;
(statearr_28935_29018[(2)] = null);

(statearr_28935_29018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (20))){
var inst_28832 = (state_28929[(12)]);
var inst_28840 = figwheel.client.file_reloading.sort_files.call(null,inst_28832);
var state_28929__$1 = state_28929;
var statearr_28936_29019 = state_28929__$1;
(statearr_28936_29019[(2)] = inst_28840);

(statearr_28936_29019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (27))){
var state_28929__$1 = state_28929;
var statearr_28937_29020 = state_28929__$1;
(statearr_28937_29020[(2)] = null);

(statearr_28937_29020[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (1))){
var inst_28781 = (state_28929[(13)]);
var inst_28778 = before_jsload.call(null,files);
var inst_28779 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28780 = (function (){return ((function (inst_28781,inst_28778,inst_28779,state_val_28930,c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28769_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28769_SHARP_);
});
;})(inst_28781,inst_28778,inst_28779,state_val_28930,c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28781__$1 = cljs.core.filter.call(null,inst_28780,files);
var inst_28782 = cljs.core.not_empty.call(null,inst_28781__$1);
var state_28929__$1 = (function (){var statearr_28938 = state_28929;
(statearr_28938[(14)] = inst_28779);

(statearr_28938[(15)] = inst_28778);

(statearr_28938[(13)] = inst_28781__$1);

return statearr_28938;
})();
if(cljs.core.truth_(inst_28782)){
var statearr_28939_29021 = state_28929__$1;
(statearr_28939_29021[(1)] = (2));

} else {
var statearr_28940_29022 = state_28929__$1;
(statearr_28940_29022[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (24))){
var state_28929__$1 = state_28929;
var statearr_28941_29023 = state_28929__$1;
(statearr_28941_29023[(2)] = null);

(statearr_28941_29023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (39))){
var inst_28882 = (state_28929[(16)]);
var state_28929__$1 = state_28929;
var statearr_28942_29024 = state_28929__$1;
(statearr_28942_29024[(2)] = inst_28882);

(statearr_28942_29024[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (46))){
var inst_28924 = (state_28929[(2)]);
var state_28929__$1 = state_28929;
var statearr_28943_29025 = state_28929__$1;
(statearr_28943_29025[(2)] = inst_28924);

(statearr_28943_29025[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (4))){
var inst_28826 = (state_28929[(2)]);
var inst_28827 = cljs.core.List.EMPTY;
var inst_28828 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28827);
var inst_28829 = (function (){return ((function (inst_28826,inst_28827,inst_28828,state_val_28930,c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28770_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28770_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28770_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28770_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_28826,inst_28827,inst_28828,state_val_28930,c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28830 = cljs.core.filter.call(null,inst_28829,files);
var inst_28831 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28832 = cljs.core.concat.call(null,inst_28830,inst_28831);
var state_28929__$1 = (function (){var statearr_28944 = state_28929;
(statearr_28944[(17)] = inst_28826);

(statearr_28944[(18)] = inst_28828);

(statearr_28944[(12)] = inst_28832);

return statearr_28944;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28945_29026 = state_28929__$1;
(statearr_28945_29026[(1)] = (16));

} else {
var statearr_28946_29027 = state_28929__$1;
(statearr_28946_29027[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (15))){
var inst_28816 = (state_28929[(2)]);
var state_28929__$1 = state_28929;
var statearr_28947_29028 = state_28929__$1;
(statearr_28947_29028[(2)] = inst_28816);

(statearr_28947_29028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (21))){
var inst_28842 = (state_28929[(19)]);
var inst_28842__$1 = (state_28929[(2)]);
var inst_28843 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28842__$1);
var state_28929__$1 = (function (){var statearr_28948 = state_28929;
(statearr_28948[(19)] = inst_28842__$1);

return statearr_28948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28929__$1,(22),inst_28843);
} else {
if((state_val_28930 === (31))){
var inst_28927 = (state_28929[(2)]);
var state_28929__$1 = state_28929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28929__$1,inst_28927);
} else {
if((state_val_28930 === (32))){
var inst_28882 = (state_28929[(16)]);
var inst_28887 = inst_28882.cljs$lang$protocol_mask$partition0$;
var inst_28888 = (inst_28887 & (64));
var inst_28889 = inst_28882.cljs$core$ISeq$;
var inst_28890 = (cljs.core.PROTOCOL_SENTINEL === inst_28889);
var inst_28891 = ((inst_28888) || (inst_28890));
var state_28929__$1 = state_28929;
if(cljs.core.truth_(inst_28891)){
var statearr_28949_29029 = state_28929__$1;
(statearr_28949_29029[(1)] = (35));

} else {
var statearr_28950_29030 = state_28929__$1;
(statearr_28950_29030[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (40))){
var inst_28904 = (state_28929[(20)]);
var inst_28903 = (state_28929[(2)]);
var inst_28904__$1 = cljs.core.get.call(null,inst_28903,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28905 = cljs.core.get.call(null,inst_28903,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28906 = cljs.core.not_empty.call(null,inst_28904__$1);
var state_28929__$1 = (function (){var statearr_28951 = state_28929;
(statearr_28951[(20)] = inst_28904__$1);

(statearr_28951[(21)] = inst_28905);

return statearr_28951;
})();
if(cljs.core.truth_(inst_28906)){
var statearr_28952_29031 = state_28929__$1;
(statearr_28952_29031[(1)] = (41));

} else {
var statearr_28953_29032 = state_28929__$1;
(statearr_28953_29032[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (33))){
var state_28929__$1 = state_28929;
var statearr_28954_29033 = state_28929__$1;
(statearr_28954_29033[(2)] = false);

(statearr_28954_29033[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (13))){
var inst_28802 = (state_28929[(22)]);
var inst_28806 = cljs.core.chunk_first.call(null,inst_28802);
var inst_28807 = cljs.core.chunk_rest.call(null,inst_28802);
var inst_28808 = cljs.core.count.call(null,inst_28806);
var inst_28789 = inst_28807;
var inst_28790 = inst_28806;
var inst_28791 = inst_28808;
var inst_28792 = (0);
var state_28929__$1 = (function (){var statearr_28955 = state_28929;
(statearr_28955[(7)] = inst_28790);

(statearr_28955[(8)] = inst_28791);

(statearr_28955[(9)] = inst_28789);

(statearr_28955[(10)] = inst_28792);

return statearr_28955;
})();
var statearr_28956_29034 = state_28929__$1;
(statearr_28956_29034[(2)] = null);

(statearr_28956_29034[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (22))){
var inst_28842 = (state_28929[(19)]);
var inst_28850 = (state_28929[(23)]);
var inst_28845 = (state_28929[(24)]);
var inst_28846 = (state_28929[(25)]);
var inst_28845__$1 = (state_28929[(2)]);
var inst_28846__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28845__$1);
var inst_28847 = (function (){var all_files = inst_28842;
var res_SINGLEQUOTE_ = inst_28845__$1;
var res = inst_28846__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28842,inst_28850,inst_28845,inst_28846,inst_28845__$1,inst_28846__$1,state_val_28930,c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28771_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28771_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28842,inst_28850,inst_28845,inst_28846,inst_28845__$1,inst_28846__$1,state_val_28930,c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28848 = cljs.core.filter.call(null,inst_28847,inst_28845__$1);
var inst_28849 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28850__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28849);
var inst_28851 = cljs.core.not_empty.call(null,inst_28850__$1);
var state_28929__$1 = (function (){var statearr_28957 = state_28929;
(statearr_28957[(26)] = inst_28848);

(statearr_28957[(23)] = inst_28850__$1);

(statearr_28957[(24)] = inst_28845__$1);

(statearr_28957[(25)] = inst_28846__$1);

return statearr_28957;
})();
if(cljs.core.truth_(inst_28851)){
var statearr_28958_29035 = state_28929__$1;
(statearr_28958_29035[(1)] = (23));

} else {
var statearr_28959_29036 = state_28929__$1;
(statearr_28959_29036[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (36))){
var state_28929__$1 = state_28929;
var statearr_28960_29037 = state_28929__$1;
(statearr_28960_29037[(2)] = false);

(statearr_28960_29037[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (41))){
var inst_28904 = (state_28929[(20)]);
var inst_28908 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28909 = cljs.core.map.call(null,inst_28908,inst_28904);
var inst_28910 = cljs.core.pr_str.call(null,inst_28909);
var inst_28911 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28910)].join('');
var inst_28912 = figwheel.client.utils.log.call(null,inst_28911);
var state_28929__$1 = state_28929;
var statearr_28961_29038 = state_28929__$1;
(statearr_28961_29038[(2)] = inst_28912);

(statearr_28961_29038[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (43))){
var inst_28905 = (state_28929[(21)]);
var inst_28915 = (state_28929[(2)]);
var inst_28916 = cljs.core.not_empty.call(null,inst_28905);
var state_28929__$1 = (function (){var statearr_28962 = state_28929;
(statearr_28962[(27)] = inst_28915);

return statearr_28962;
})();
if(cljs.core.truth_(inst_28916)){
var statearr_28963_29039 = state_28929__$1;
(statearr_28963_29039[(1)] = (44));

} else {
var statearr_28964_29040 = state_28929__$1;
(statearr_28964_29040[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (29))){
var inst_28842 = (state_28929[(19)]);
var inst_28848 = (state_28929[(26)]);
var inst_28850 = (state_28929[(23)]);
var inst_28882 = (state_28929[(16)]);
var inst_28845 = (state_28929[(24)]);
var inst_28846 = (state_28929[(25)]);
var inst_28878 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28881 = (function (){var all_files = inst_28842;
var res_SINGLEQUOTE_ = inst_28845;
var res = inst_28846;
var files_not_loaded = inst_28848;
var dependencies_that_loaded = inst_28850;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28842,inst_28848,inst_28850,inst_28882,inst_28845,inst_28846,inst_28878,state_val_28930,c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28880){
var map__28965 = p__28880;
var map__28965__$1 = (((((!((map__28965 == null))))?(((((map__28965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28965):map__28965);
var namespace = cljs.core.get.call(null,map__28965__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28842,inst_28848,inst_28850,inst_28882,inst_28845,inst_28846,inst_28878,state_val_28930,c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28882__$1 = cljs.core.group_by.call(null,inst_28881,inst_28848);
var inst_28884 = (inst_28882__$1 == null);
var inst_28885 = cljs.core.not.call(null,inst_28884);
var state_28929__$1 = (function (){var statearr_28967 = state_28929;
(statearr_28967[(16)] = inst_28882__$1);

(statearr_28967[(28)] = inst_28878);

return statearr_28967;
})();
if(inst_28885){
var statearr_28968_29041 = state_28929__$1;
(statearr_28968_29041[(1)] = (32));

} else {
var statearr_28969_29042 = state_28929__$1;
(statearr_28969_29042[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (44))){
var inst_28905 = (state_28929[(21)]);
var inst_28918 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28905);
var inst_28919 = cljs.core.pr_str.call(null,inst_28918);
var inst_28920 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28919)].join('');
var inst_28921 = figwheel.client.utils.log.call(null,inst_28920);
var state_28929__$1 = state_28929;
var statearr_28970_29043 = state_28929__$1;
(statearr_28970_29043[(2)] = inst_28921);

(statearr_28970_29043[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (6))){
var inst_28823 = (state_28929[(2)]);
var state_28929__$1 = state_28929;
var statearr_28971_29044 = state_28929__$1;
(statearr_28971_29044[(2)] = inst_28823);

(statearr_28971_29044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (28))){
var inst_28848 = (state_28929[(26)]);
var inst_28875 = (state_28929[(2)]);
var inst_28876 = cljs.core.not_empty.call(null,inst_28848);
var state_28929__$1 = (function (){var statearr_28972 = state_28929;
(statearr_28972[(29)] = inst_28875);

return statearr_28972;
})();
if(cljs.core.truth_(inst_28876)){
var statearr_28973_29045 = state_28929__$1;
(statearr_28973_29045[(1)] = (29));

} else {
var statearr_28974_29046 = state_28929__$1;
(statearr_28974_29046[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (25))){
var inst_28846 = (state_28929[(25)]);
var inst_28862 = (state_28929[(2)]);
var inst_28863 = cljs.core.not_empty.call(null,inst_28846);
var state_28929__$1 = (function (){var statearr_28975 = state_28929;
(statearr_28975[(30)] = inst_28862);

return statearr_28975;
})();
if(cljs.core.truth_(inst_28863)){
var statearr_28976_29047 = state_28929__$1;
(statearr_28976_29047[(1)] = (26));

} else {
var statearr_28977_29048 = state_28929__$1;
(statearr_28977_29048[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (34))){
var inst_28898 = (state_28929[(2)]);
var state_28929__$1 = state_28929;
if(cljs.core.truth_(inst_28898)){
var statearr_28978_29049 = state_28929__$1;
(statearr_28978_29049[(1)] = (38));

} else {
var statearr_28979_29050 = state_28929__$1;
(statearr_28979_29050[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (17))){
var state_28929__$1 = state_28929;
var statearr_28980_29051 = state_28929__$1;
(statearr_28980_29051[(2)] = recompile_dependents);

(statearr_28980_29051[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (3))){
var state_28929__$1 = state_28929;
var statearr_28981_29052 = state_28929__$1;
(statearr_28981_29052[(2)] = null);

(statearr_28981_29052[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (12))){
var inst_28819 = (state_28929[(2)]);
var state_28929__$1 = state_28929;
var statearr_28982_29053 = state_28929__$1;
(statearr_28982_29053[(2)] = inst_28819);

(statearr_28982_29053[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (2))){
var inst_28781 = (state_28929[(13)]);
var inst_28788 = cljs.core.seq.call(null,inst_28781);
var inst_28789 = inst_28788;
var inst_28790 = null;
var inst_28791 = (0);
var inst_28792 = (0);
var state_28929__$1 = (function (){var statearr_28983 = state_28929;
(statearr_28983[(7)] = inst_28790);

(statearr_28983[(8)] = inst_28791);

(statearr_28983[(9)] = inst_28789);

(statearr_28983[(10)] = inst_28792);

return statearr_28983;
})();
var statearr_28984_29054 = state_28929__$1;
(statearr_28984_29054[(2)] = null);

(statearr_28984_29054[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (23))){
var inst_28842 = (state_28929[(19)]);
var inst_28848 = (state_28929[(26)]);
var inst_28850 = (state_28929[(23)]);
var inst_28845 = (state_28929[(24)]);
var inst_28846 = (state_28929[(25)]);
var inst_28853 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28855 = (function (){var all_files = inst_28842;
var res_SINGLEQUOTE_ = inst_28845;
var res = inst_28846;
var files_not_loaded = inst_28848;
var dependencies_that_loaded = inst_28850;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28842,inst_28848,inst_28850,inst_28845,inst_28846,inst_28853,state_val_28930,c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28854){
var map__28985 = p__28854;
var map__28985__$1 = (((((!((map__28985 == null))))?(((((map__28985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28985):map__28985);
var request_url = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28842,inst_28848,inst_28850,inst_28845,inst_28846,inst_28853,state_val_28930,c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28856 = cljs.core.reverse.call(null,inst_28850);
var inst_28857 = cljs.core.map.call(null,inst_28855,inst_28856);
var inst_28858 = cljs.core.pr_str.call(null,inst_28857);
var inst_28859 = figwheel.client.utils.log.call(null,inst_28858);
var state_28929__$1 = (function (){var statearr_28987 = state_28929;
(statearr_28987[(31)] = inst_28853);

return statearr_28987;
})();
var statearr_28988_29055 = state_28929__$1;
(statearr_28988_29055[(2)] = inst_28859);

(statearr_28988_29055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (35))){
var state_28929__$1 = state_28929;
var statearr_28989_29056 = state_28929__$1;
(statearr_28989_29056[(2)] = true);

(statearr_28989_29056[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (19))){
var inst_28832 = (state_28929[(12)]);
var inst_28838 = figwheel.client.file_reloading.expand_files.call(null,inst_28832);
var state_28929__$1 = state_28929;
var statearr_28990_29057 = state_28929__$1;
(statearr_28990_29057[(2)] = inst_28838);

(statearr_28990_29057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (11))){
var state_28929__$1 = state_28929;
var statearr_28991_29058 = state_28929__$1;
(statearr_28991_29058[(2)] = null);

(statearr_28991_29058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (9))){
var inst_28821 = (state_28929[(2)]);
var state_28929__$1 = state_28929;
var statearr_28992_29059 = state_28929__$1;
(statearr_28992_29059[(2)] = inst_28821);

(statearr_28992_29059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (5))){
var inst_28791 = (state_28929[(8)]);
var inst_28792 = (state_28929[(10)]);
var inst_28794 = (inst_28792 < inst_28791);
var inst_28795 = inst_28794;
var state_28929__$1 = state_28929;
if(cljs.core.truth_(inst_28795)){
var statearr_28993_29060 = state_28929__$1;
(statearr_28993_29060[(1)] = (7));

} else {
var statearr_28994_29061 = state_28929__$1;
(statearr_28994_29061[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (14))){
var inst_28802 = (state_28929[(22)]);
var inst_28811 = cljs.core.first.call(null,inst_28802);
var inst_28812 = figwheel.client.file_reloading.eval_body.call(null,inst_28811,opts);
var inst_28813 = cljs.core.next.call(null,inst_28802);
var inst_28789 = inst_28813;
var inst_28790 = null;
var inst_28791 = (0);
var inst_28792 = (0);
var state_28929__$1 = (function (){var statearr_28995 = state_28929;
(statearr_28995[(32)] = inst_28812);

(statearr_28995[(7)] = inst_28790);

(statearr_28995[(8)] = inst_28791);

(statearr_28995[(9)] = inst_28789);

(statearr_28995[(10)] = inst_28792);

return statearr_28995;
})();
var statearr_28996_29062 = state_28929__$1;
(statearr_28996_29062[(2)] = null);

(statearr_28996_29062[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (45))){
var state_28929__$1 = state_28929;
var statearr_28997_29063 = state_28929__$1;
(statearr_28997_29063[(2)] = null);

(statearr_28997_29063[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (26))){
var inst_28842 = (state_28929[(19)]);
var inst_28848 = (state_28929[(26)]);
var inst_28850 = (state_28929[(23)]);
var inst_28845 = (state_28929[(24)]);
var inst_28846 = (state_28929[(25)]);
var inst_28865 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28867 = (function (){var all_files = inst_28842;
var res_SINGLEQUOTE_ = inst_28845;
var res = inst_28846;
var files_not_loaded = inst_28848;
var dependencies_that_loaded = inst_28850;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28842,inst_28848,inst_28850,inst_28845,inst_28846,inst_28865,state_val_28930,c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28866){
var map__28998 = p__28866;
var map__28998__$1 = (((((!((map__28998 == null))))?(((((map__28998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28998):map__28998);
var namespace = cljs.core.get.call(null,map__28998__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28998__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28842,inst_28848,inst_28850,inst_28845,inst_28846,inst_28865,state_val_28930,c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28868 = cljs.core.map.call(null,inst_28867,inst_28846);
var inst_28869 = cljs.core.pr_str.call(null,inst_28868);
var inst_28870 = figwheel.client.utils.log.call(null,inst_28869);
var inst_28871 = (function (){var all_files = inst_28842;
var res_SINGLEQUOTE_ = inst_28845;
var res = inst_28846;
var files_not_loaded = inst_28848;
var dependencies_that_loaded = inst_28850;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28842,inst_28848,inst_28850,inst_28845,inst_28846,inst_28865,inst_28867,inst_28868,inst_28869,inst_28870,state_val_28930,c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28842,inst_28848,inst_28850,inst_28845,inst_28846,inst_28865,inst_28867,inst_28868,inst_28869,inst_28870,state_val_28930,c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28872 = setTimeout(inst_28871,(10));
var state_28929__$1 = (function (){var statearr_29000 = state_28929;
(statearr_29000[(33)] = inst_28870);

(statearr_29000[(34)] = inst_28865);

return statearr_29000;
})();
var statearr_29001_29064 = state_28929__$1;
(statearr_29001_29064[(2)] = inst_28872);

(statearr_29001_29064[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (16))){
var state_28929__$1 = state_28929;
var statearr_29002_29065 = state_28929__$1;
(statearr_29002_29065[(2)] = reload_dependents);

(statearr_29002_29065[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (38))){
var inst_28882 = (state_28929[(16)]);
var inst_28900 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28882);
var state_28929__$1 = state_28929;
var statearr_29003_29066 = state_28929__$1;
(statearr_29003_29066[(2)] = inst_28900);

(statearr_29003_29066[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (30))){
var state_28929__$1 = state_28929;
var statearr_29004_29067 = state_28929__$1;
(statearr_29004_29067[(2)] = null);

(statearr_29004_29067[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (10))){
var inst_28802 = (state_28929[(22)]);
var inst_28804 = cljs.core.chunked_seq_QMARK_.call(null,inst_28802);
var state_28929__$1 = state_28929;
if(inst_28804){
var statearr_29005_29068 = state_28929__$1;
(statearr_29005_29068[(1)] = (13));

} else {
var statearr_29006_29069 = state_28929__$1;
(statearr_29006_29069[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (18))){
var inst_28836 = (state_28929[(2)]);
var state_28929__$1 = state_28929;
if(cljs.core.truth_(inst_28836)){
var statearr_29007_29070 = state_28929__$1;
(statearr_29007_29070[(1)] = (19));

} else {
var statearr_29008_29071 = state_28929__$1;
(statearr_29008_29071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (42))){
var state_28929__$1 = state_28929;
var statearr_29009_29072 = state_28929__$1;
(statearr_29009_29072[(2)] = null);

(statearr_29009_29072[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (37))){
var inst_28895 = (state_28929[(2)]);
var state_28929__$1 = state_28929;
var statearr_29010_29073 = state_28929__$1;
(statearr_29010_29073[(2)] = inst_28895);

(statearr_29010_29073[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (8))){
var inst_28802 = (state_28929[(22)]);
var inst_28789 = (state_28929[(9)]);
var inst_28802__$1 = cljs.core.seq.call(null,inst_28789);
var state_28929__$1 = (function (){var statearr_29011 = state_28929;
(statearr_29011[(22)] = inst_28802__$1);

return statearr_29011;
})();
if(inst_28802__$1){
var statearr_29012_29074 = state_28929__$1;
(statearr_29012_29074[(1)] = (10));

} else {
var statearr_29013_29075 = state_28929__$1;
(statearr_29013_29075[(1)] = (11));

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
});})(c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24985__auto__,c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24986__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24986__auto____0 = (function (){
var statearr_29014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29014[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24986__auto__);

(statearr_29014[(1)] = (1));

return statearr_29014;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24986__auto____1 = (function (state_28929){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_28929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e29015){if((e29015 instanceof Object)){
var ex__24989__auto__ = e29015;
var statearr_29016_29076 = state_28929;
(statearr_29016_29076[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29077 = state_28929;
state_28929 = G__29077;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24986__auto__ = function(state_28929){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24986__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24986__auto____1.call(this,state_28929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24986__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24986__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25082__auto__ = (function (){var statearr_29017 = f__25081__auto__.call(null);
(statearr_29017[(6)] = c__25080__auto__);

return statearr_29017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto__,map__28774,map__28774__$1,opts,before_jsload,on_jsload,reload_dependents,map__28775,map__28775__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25080__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29080,link){
var map__29081 = p__29080;
var map__29081__$1 = (((((!((map__29081 == null))))?(((((map__29081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29081):map__29081);
var file = cljs.core.get.call(null,map__29081__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29081,map__29081__$1,file){
return (function (p1__29078_SHARP_,p2__29079_SHARP_){
if(cljs.core._EQ_.call(null,p1__29078_SHARP_,p2__29079_SHARP_)){
return p1__29078_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29081,map__29081__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29084){
var map__29085 = p__29084;
var map__29085__$1 = (((((!((map__29085 == null))))?(((((map__29085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29085):map__29085);
var match_length = cljs.core.get.call(null,map__29085__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29085__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29083_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29083_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29087_SHARP_,p2__29088_SHARP_){
return cljs.core.assoc.call(null,p1__29087_SHARP_,cljs.core.get.call(null,p2__29088_SHARP_,key),p2__29088_SHARP_);
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
var loaded_f_datas_29089 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29089);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29089);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29090,p__29091){
var map__29092 = p__29090;
var map__29092__$1 = (((((!((map__29092 == null))))?(((((map__29092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29092):map__29092);
var on_cssload = cljs.core.get.call(null,map__29092__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29093 = p__29091;
var map__29093__$1 = (((((!((map__29093 == null))))?(((((map__29093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29093):map__29093);
var files_msg = map__29093__$1;
var files = cljs.core.get.call(null,map__29093__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1544468027017
