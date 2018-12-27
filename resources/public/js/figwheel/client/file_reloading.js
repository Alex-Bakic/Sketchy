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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28483_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28483_SHARP_));
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
var seq__28484 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28485 = null;
var count__28486 = (0);
var i__28487 = (0);
while(true){
if((i__28487 < count__28486)){
var n = cljs.core._nth.call(null,chunk__28485,i__28487);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28488 = seq__28484;
var G__28489 = chunk__28485;
var G__28490 = count__28486;
var G__28491 = (i__28487 + (1));
seq__28484 = G__28488;
chunk__28485 = G__28489;
count__28486 = G__28490;
i__28487 = G__28491;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28484);
if(temp__5720__auto__){
var seq__28484__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28484__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__28484__$1);
var G__28492 = cljs.core.chunk_rest.call(null,seq__28484__$1);
var G__28493 = c__4461__auto__;
var G__28494 = cljs.core.count.call(null,c__4461__auto__);
var G__28495 = (0);
seq__28484 = G__28492;
chunk__28485 = G__28493;
count__28486 = G__28494;
i__28487 = G__28495;
continue;
} else {
var n = cljs.core.first.call(null,seq__28484__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28496 = cljs.core.next.call(null,seq__28484__$1);
var G__28497 = null;
var G__28498 = (0);
var G__28499 = (0);
seq__28484 = G__28496;
chunk__28485 = G__28497;
count__28486 = G__28498;
i__28487 = G__28499;
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
return cljs.core.some.call(null,(function (p__28500){
var vec__28501 = p__28500;
var _ = cljs.core.nth.call(null,vec__28501,(0),null);
var v = cljs.core.nth.call(null,vec__28501,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__28504){
var vec__28505 = p__28504;
var k = cljs.core.nth.call(null,vec__28505,(0),null);
var v = cljs.core.nth.call(null,vec__28505,(1),null);
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

var seq__28517_28525 = cljs.core.seq.call(null,deps);
var chunk__28518_28526 = null;
var count__28519_28527 = (0);
var i__28520_28528 = (0);
while(true){
if((i__28520_28528 < count__28519_28527)){
var dep_28529 = cljs.core._nth.call(null,chunk__28518_28526,i__28520_28528);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_28529;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28529));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28529,(depth + (1)),state);
} else {
}


var G__28530 = seq__28517_28525;
var G__28531 = chunk__28518_28526;
var G__28532 = count__28519_28527;
var G__28533 = (i__28520_28528 + (1));
seq__28517_28525 = G__28530;
chunk__28518_28526 = G__28531;
count__28519_28527 = G__28532;
i__28520_28528 = G__28533;
continue;
} else {
var temp__5720__auto___28534 = cljs.core.seq.call(null,seq__28517_28525);
if(temp__5720__auto___28534){
var seq__28517_28535__$1 = temp__5720__auto___28534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28517_28535__$1)){
var c__4461__auto___28536 = cljs.core.chunk_first.call(null,seq__28517_28535__$1);
var G__28537 = cljs.core.chunk_rest.call(null,seq__28517_28535__$1);
var G__28538 = c__4461__auto___28536;
var G__28539 = cljs.core.count.call(null,c__4461__auto___28536);
var G__28540 = (0);
seq__28517_28525 = G__28537;
chunk__28518_28526 = G__28538;
count__28519_28527 = G__28539;
i__28520_28528 = G__28540;
continue;
} else {
var dep_28541 = cljs.core.first.call(null,seq__28517_28535__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_28541;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28541));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28541,(depth + (1)),state);
} else {
}


var G__28542 = cljs.core.next.call(null,seq__28517_28535__$1);
var G__28543 = null;
var G__28544 = (0);
var G__28545 = (0);
seq__28517_28525 = G__28542;
chunk__28518_28526 = G__28543;
count__28519_28527 = G__28544;
i__28520_28528 = G__28545;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28521){
var vec__28522 = p__28521;
var seq__28523 = cljs.core.seq.call(null,vec__28522);
var first__28524 = cljs.core.first.call(null,seq__28523);
var seq__28523__$1 = cljs.core.next.call(null,seq__28523);
var x = first__28524;
var xs = seq__28523__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28522,seq__28523,first__28524,seq__28523__$1,x,xs,get_deps__$1){
return (function (p1__28508_SHARP_){
return clojure.set.difference.call(null,p1__28508_SHARP_,x);
});})(vec__28522,seq__28523,first__28524,seq__28523__$1,x,xs,get_deps__$1))
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
var seq__28546 = cljs.core.seq.call(null,provides);
var chunk__28547 = null;
var count__28548 = (0);
var i__28549 = (0);
while(true){
if((i__28549 < count__28548)){
var prov = cljs.core._nth.call(null,chunk__28547,i__28549);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28550_28558 = cljs.core.seq.call(null,requires);
var chunk__28551_28559 = null;
var count__28552_28560 = (0);
var i__28553_28561 = (0);
while(true){
if((i__28553_28561 < count__28552_28560)){
var req_28562 = cljs.core._nth.call(null,chunk__28551_28559,i__28553_28561);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28562,prov);


var G__28563 = seq__28550_28558;
var G__28564 = chunk__28551_28559;
var G__28565 = count__28552_28560;
var G__28566 = (i__28553_28561 + (1));
seq__28550_28558 = G__28563;
chunk__28551_28559 = G__28564;
count__28552_28560 = G__28565;
i__28553_28561 = G__28566;
continue;
} else {
var temp__5720__auto___28567 = cljs.core.seq.call(null,seq__28550_28558);
if(temp__5720__auto___28567){
var seq__28550_28568__$1 = temp__5720__auto___28567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28550_28568__$1)){
var c__4461__auto___28569 = cljs.core.chunk_first.call(null,seq__28550_28568__$1);
var G__28570 = cljs.core.chunk_rest.call(null,seq__28550_28568__$1);
var G__28571 = c__4461__auto___28569;
var G__28572 = cljs.core.count.call(null,c__4461__auto___28569);
var G__28573 = (0);
seq__28550_28558 = G__28570;
chunk__28551_28559 = G__28571;
count__28552_28560 = G__28572;
i__28553_28561 = G__28573;
continue;
} else {
var req_28574 = cljs.core.first.call(null,seq__28550_28568__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28574,prov);


var G__28575 = cljs.core.next.call(null,seq__28550_28568__$1);
var G__28576 = null;
var G__28577 = (0);
var G__28578 = (0);
seq__28550_28558 = G__28575;
chunk__28551_28559 = G__28576;
count__28552_28560 = G__28577;
i__28553_28561 = G__28578;
continue;
}
} else {
}
}
break;
}


var G__28579 = seq__28546;
var G__28580 = chunk__28547;
var G__28581 = count__28548;
var G__28582 = (i__28549 + (1));
seq__28546 = G__28579;
chunk__28547 = G__28580;
count__28548 = G__28581;
i__28549 = G__28582;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28546);
if(temp__5720__auto__){
var seq__28546__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28546__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__28546__$1);
var G__28583 = cljs.core.chunk_rest.call(null,seq__28546__$1);
var G__28584 = c__4461__auto__;
var G__28585 = cljs.core.count.call(null,c__4461__auto__);
var G__28586 = (0);
seq__28546 = G__28583;
chunk__28547 = G__28584;
count__28548 = G__28585;
i__28549 = G__28586;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28546__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28554_28587 = cljs.core.seq.call(null,requires);
var chunk__28555_28588 = null;
var count__28556_28589 = (0);
var i__28557_28590 = (0);
while(true){
if((i__28557_28590 < count__28556_28589)){
var req_28591 = cljs.core._nth.call(null,chunk__28555_28588,i__28557_28590);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28591,prov);


var G__28592 = seq__28554_28587;
var G__28593 = chunk__28555_28588;
var G__28594 = count__28556_28589;
var G__28595 = (i__28557_28590 + (1));
seq__28554_28587 = G__28592;
chunk__28555_28588 = G__28593;
count__28556_28589 = G__28594;
i__28557_28590 = G__28595;
continue;
} else {
var temp__5720__auto___28596__$1 = cljs.core.seq.call(null,seq__28554_28587);
if(temp__5720__auto___28596__$1){
var seq__28554_28597__$1 = temp__5720__auto___28596__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28554_28597__$1)){
var c__4461__auto___28598 = cljs.core.chunk_first.call(null,seq__28554_28597__$1);
var G__28599 = cljs.core.chunk_rest.call(null,seq__28554_28597__$1);
var G__28600 = c__4461__auto___28598;
var G__28601 = cljs.core.count.call(null,c__4461__auto___28598);
var G__28602 = (0);
seq__28554_28587 = G__28599;
chunk__28555_28588 = G__28600;
count__28556_28589 = G__28601;
i__28557_28590 = G__28602;
continue;
} else {
var req_28603 = cljs.core.first.call(null,seq__28554_28597__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28603,prov);


var G__28604 = cljs.core.next.call(null,seq__28554_28597__$1);
var G__28605 = null;
var G__28606 = (0);
var G__28607 = (0);
seq__28554_28587 = G__28604;
chunk__28555_28588 = G__28605;
count__28556_28589 = G__28606;
i__28557_28590 = G__28607;
continue;
}
} else {
}
}
break;
}


var G__28608 = cljs.core.next.call(null,seq__28546__$1);
var G__28609 = null;
var G__28610 = (0);
var G__28611 = (0);
seq__28546 = G__28608;
chunk__28547 = G__28609;
count__28548 = G__28610;
i__28549 = G__28611;
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
var seq__28612_28616 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28613_28617 = null;
var count__28614_28618 = (0);
var i__28615_28619 = (0);
while(true){
if((i__28615_28619 < count__28614_28618)){
var ns_28620 = cljs.core._nth.call(null,chunk__28613_28617,i__28615_28619);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28620);


var G__28621 = seq__28612_28616;
var G__28622 = chunk__28613_28617;
var G__28623 = count__28614_28618;
var G__28624 = (i__28615_28619 + (1));
seq__28612_28616 = G__28621;
chunk__28613_28617 = G__28622;
count__28614_28618 = G__28623;
i__28615_28619 = G__28624;
continue;
} else {
var temp__5720__auto___28625 = cljs.core.seq.call(null,seq__28612_28616);
if(temp__5720__auto___28625){
var seq__28612_28626__$1 = temp__5720__auto___28625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28612_28626__$1)){
var c__4461__auto___28627 = cljs.core.chunk_first.call(null,seq__28612_28626__$1);
var G__28628 = cljs.core.chunk_rest.call(null,seq__28612_28626__$1);
var G__28629 = c__4461__auto___28627;
var G__28630 = cljs.core.count.call(null,c__4461__auto___28627);
var G__28631 = (0);
seq__28612_28616 = G__28628;
chunk__28613_28617 = G__28629;
count__28614_28618 = G__28630;
i__28615_28619 = G__28631;
continue;
} else {
var ns_28632 = cljs.core.first.call(null,seq__28612_28626__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28632);


var G__28633 = cljs.core.next.call(null,seq__28612_28626__$1);
var G__28634 = null;
var G__28635 = (0);
var G__28636 = (0);
seq__28612_28616 = G__28633;
chunk__28613_28617 = G__28634;
count__28614_28618 = G__28635;
i__28615_28619 = G__28636;
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
var G__28637__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28637 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28638__i = 0, G__28638__a = new Array(arguments.length -  0);
while (G__28638__i < G__28638__a.length) {G__28638__a[G__28638__i] = arguments[G__28638__i + 0]; ++G__28638__i;}
  args = new cljs.core.IndexedSeq(G__28638__a,0,null);
} 
return G__28637__delegate.call(this,args);};
G__28637.cljs$lang$maxFixedArity = 0;
G__28637.cljs$lang$applyTo = (function (arglist__28639){
var args = cljs.core.seq(arglist__28639);
return G__28637__delegate(args);
});
G__28637.cljs$core$IFn$_invoke$arity$variadic = G__28637__delegate;
return G__28637;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28640_SHARP_,p2__28641_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28640_SHARP_)),p2__28641_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28642_SHARP_,p2__28643_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28642_SHARP_),p2__28643_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28644 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28644.addCallback(((function (G__28644){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28644))
);

G__28644.addErrback(((function (G__28644){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28644))
);

return G__28644;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28645){if((e28645 instanceof Error)){
var e = e28645;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28645;

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
}catch (e28646){if((e28646 instanceof Error)){
var e = e28646;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28646;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28647 = cljs.core._EQ_;
var expr__28648 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28647.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28648))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28647.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28648))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28647.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28648))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28647,expr__28648){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28647,expr__28648))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28650,callback){
var map__28651 = p__28650;
var map__28651__$1 = (((((!((map__28651 == null))))?(((((map__28651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28651):map__28651);
var file_msg = map__28651__$1;
var request_url = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28651,map__28651__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28651,map__28651__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__25235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto__){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto__){
return (function (state_28689){
var state_val_28690 = (state_28689[(1)]);
if((state_val_28690 === (7))){
var inst_28685 = (state_28689[(2)]);
var state_28689__$1 = state_28689;
var statearr_28691_28717 = state_28689__$1;
(statearr_28691_28717[(2)] = inst_28685);

(statearr_28691_28717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (1))){
var state_28689__$1 = state_28689;
var statearr_28692_28718 = state_28689__$1;
(statearr_28692_28718[(2)] = null);

(statearr_28692_28718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (4))){
var inst_28655 = (state_28689[(7)]);
var inst_28655__$1 = (state_28689[(2)]);
var state_28689__$1 = (function (){var statearr_28693 = state_28689;
(statearr_28693[(7)] = inst_28655__$1);

return statearr_28693;
})();
if(cljs.core.truth_(inst_28655__$1)){
var statearr_28694_28719 = state_28689__$1;
(statearr_28694_28719[(1)] = (5));

} else {
var statearr_28695_28720 = state_28689__$1;
(statearr_28695_28720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (15))){
var inst_28668 = (state_28689[(8)]);
var inst_28670 = (state_28689[(9)]);
var inst_28672 = inst_28670.call(null,inst_28668);
var state_28689__$1 = state_28689;
var statearr_28696_28721 = state_28689__$1;
(statearr_28696_28721[(2)] = inst_28672);

(statearr_28696_28721[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (13))){
var inst_28679 = (state_28689[(2)]);
var state_28689__$1 = state_28689;
var statearr_28697_28722 = state_28689__$1;
(statearr_28697_28722[(2)] = inst_28679);

(statearr_28697_28722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (6))){
var state_28689__$1 = state_28689;
var statearr_28698_28723 = state_28689__$1;
(statearr_28698_28723[(2)] = null);

(statearr_28698_28723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (17))){
var inst_28676 = (state_28689[(2)]);
var state_28689__$1 = state_28689;
var statearr_28699_28724 = state_28689__$1;
(statearr_28699_28724[(2)] = inst_28676);

(statearr_28699_28724[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (3))){
var inst_28687 = (state_28689[(2)]);
var state_28689__$1 = state_28689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28689__$1,inst_28687);
} else {
if((state_val_28690 === (12))){
var state_28689__$1 = state_28689;
var statearr_28700_28725 = state_28689__$1;
(statearr_28700_28725[(2)] = null);

(statearr_28700_28725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (2))){
var state_28689__$1 = state_28689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28689__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28690 === (11))){
var inst_28660 = (state_28689[(10)]);
var inst_28666 = figwheel.client.file_reloading.blocking_load.call(null,inst_28660);
var state_28689__$1 = state_28689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28689__$1,(14),inst_28666);
} else {
if((state_val_28690 === (9))){
var inst_28660 = (state_28689[(10)]);
var state_28689__$1 = state_28689;
if(cljs.core.truth_(inst_28660)){
var statearr_28701_28726 = state_28689__$1;
(statearr_28701_28726[(1)] = (11));

} else {
var statearr_28702_28727 = state_28689__$1;
(statearr_28702_28727[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (5))){
var inst_28655 = (state_28689[(7)]);
var inst_28661 = (state_28689[(11)]);
var inst_28660 = cljs.core.nth.call(null,inst_28655,(0),null);
var inst_28661__$1 = cljs.core.nth.call(null,inst_28655,(1),null);
var state_28689__$1 = (function (){var statearr_28703 = state_28689;
(statearr_28703[(11)] = inst_28661__$1);

(statearr_28703[(10)] = inst_28660);

return statearr_28703;
})();
if(cljs.core.truth_(inst_28661__$1)){
var statearr_28704_28728 = state_28689__$1;
(statearr_28704_28728[(1)] = (8));

} else {
var statearr_28705_28729 = state_28689__$1;
(statearr_28705_28729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (14))){
var inst_28670 = (state_28689[(9)]);
var inst_28660 = (state_28689[(10)]);
var inst_28668 = (state_28689[(2)]);
var inst_28669 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28670__$1 = cljs.core.get.call(null,inst_28669,inst_28660);
var state_28689__$1 = (function (){var statearr_28706 = state_28689;
(statearr_28706[(8)] = inst_28668);

(statearr_28706[(9)] = inst_28670__$1);

return statearr_28706;
})();
if(cljs.core.truth_(inst_28670__$1)){
var statearr_28707_28730 = state_28689__$1;
(statearr_28707_28730[(1)] = (15));

} else {
var statearr_28708_28731 = state_28689__$1;
(statearr_28708_28731[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (16))){
var inst_28668 = (state_28689[(8)]);
var inst_28674 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28668);
var state_28689__$1 = state_28689;
var statearr_28709_28732 = state_28689__$1;
(statearr_28709_28732[(2)] = inst_28674);

(statearr_28709_28732[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (10))){
var inst_28681 = (state_28689[(2)]);
var state_28689__$1 = (function (){var statearr_28710 = state_28689;
(statearr_28710[(12)] = inst_28681);

return statearr_28710;
})();
var statearr_28711_28733 = state_28689__$1;
(statearr_28711_28733[(2)] = null);

(statearr_28711_28733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (8))){
var inst_28661 = (state_28689[(11)]);
var inst_28663 = eval(inst_28661);
var state_28689__$1 = state_28689;
var statearr_28712_28734 = state_28689__$1;
(statearr_28712_28734[(2)] = inst_28663);

(statearr_28712_28734[(1)] = (10));


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
});})(c__25235__auto__))
;
return ((function (switch__25140__auto__,c__25235__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25141__auto__ = null;
var figwheel$client$file_reloading$state_machine__25141__auto____0 = (function (){
var statearr_28713 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28713[(0)] = figwheel$client$file_reloading$state_machine__25141__auto__);

(statearr_28713[(1)] = (1));

return statearr_28713;
});
var figwheel$client$file_reloading$state_machine__25141__auto____1 = (function (state_28689){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_28689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e28714){if((e28714 instanceof Object)){
var ex__25144__auto__ = e28714;
var statearr_28715_28735 = state_28689;
(statearr_28715_28735[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28736 = state_28689;
state_28689 = G__28736;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25141__auto__ = function(state_28689){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25141__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25141__auto____1.call(this,state_28689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25141__auto____0;
figwheel$client$file_reloading$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25141__auto____1;
return figwheel$client$file_reloading$state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto__))
})();
var state__25237__auto__ = (function (){var statearr_28716 = f__25236__auto__.call(null);
(statearr_28716[(6)] = c__25235__auto__);

return statearr_28716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto__))
);

return c__25235__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28738 = arguments.length;
switch (G__28738) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28740,callback){
var map__28741 = p__28740;
var map__28741__$1 = (((((!((map__28741 == null))))?(((((map__28741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28741):map__28741);
var file_msg = map__28741__$1;
var namespace = cljs.core.get.call(null,map__28741__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28741,map__28741__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28741,map__28741__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28743){
var map__28744 = p__28743;
var map__28744__$1 = (((((!((map__28744 == null))))?(((((map__28744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28744):map__28744);
var file_msg = map__28744__$1;
var namespace = cljs.core.get.call(null,map__28744__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28746){
var map__28747 = p__28746;
var map__28747__$1 = (((((!((map__28747 == null))))?(((((map__28747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28747):map__28747);
var file_msg = map__28747__$1;
var namespace = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28749,callback){
var map__28750 = p__28749;
var map__28750__$1 = (((((!((map__28750 == null))))?(((((map__28750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28750):map__28750);
var file_msg = map__28750__$1;
var request_url = cljs.core.get.call(null,map__28750__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28750__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__25235__auto___28800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___28800,out){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___28800,out){
return (function (state_28785){
var state_val_28786 = (state_28785[(1)]);
if((state_val_28786 === (1))){
var inst_28759 = cljs.core.seq.call(null,files);
var inst_28760 = cljs.core.first.call(null,inst_28759);
var inst_28761 = cljs.core.next.call(null,inst_28759);
var inst_28762 = files;
var state_28785__$1 = (function (){var statearr_28787 = state_28785;
(statearr_28787[(7)] = inst_28762);

(statearr_28787[(8)] = inst_28761);

(statearr_28787[(9)] = inst_28760);

return statearr_28787;
})();
var statearr_28788_28801 = state_28785__$1;
(statearr_28788_28801[(2)] = null);

(statearr_28788_28801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (2))){
var inst_28762 = (state_28785[(7)]);
var inst_28768 = (state_28785[(10)]);
var inst_28767 = cljs.core.seq.call(null,inst_28762);
var inst_28768__$1 = cljs.core.first.call(null,inst_28767);
var inst_28769 = cljs.core.next.call(null,inst_28767);
var inst_28770 = (inst_28768__$1 == null);
var inst_28771 = cljs.core.not.call(null,inst_28770);
var state_28785__$1 = (function (){var statearr_28789 = state_28785;
(statearr_28789[(11)] = inst_28769);

(statearr_28789[(10)] = inst_28768__$1);

return statearr_28789;
})();
if(inst_28771){
var statearr_28790_28802 = state_28785__$1;
(statearr_28790_28802[(1)] = (4));

} else {
var statearr_28791_28803 = state_28785__$1;
(statearr_28791_28803[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (3))){
var inst_28783 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28785__$1,inst_28783);
} else {
if((state_val_28786 === (4))){
var inst_28768 = (state_28785[(10)]);
var inst_28773 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28768);
var state_28785__$1 = state_28785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28785__$1,(7),inst_28773);
} else {
if((state_val_28786 === (5))){
var inst_28779 = cljs.core.async.close_BANG_.call(null,out);
var state_28785__$1 = state_28785;
var statearr_28792_28804 = state_28785__$1;
(statearr_28792_28804[(2)] = inst_28779);

(statearr_28792_28804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (6))){
var inst_28781 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
var statearr_28793_28805 = state_28785__$1;
(statearr_28793_28805[(2)] = inst_28781);

(statearr_28793_28805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (7))){
var inst_28769 = (state_28785[(11)]);
var inst_28775 = (state_28785[(2)]);
var inst_28776 = cljs.core.async.put_BANG_.call(null,out,inst_28775);
var inst_28762 = inst_28769;
var state_28785__$1 = (function (){var statearr_28794 = state_28785;
(statearr_28794[(7)] = inst_28762);

(statearr_28794[(12)] = inst_28776);

return statearr_28794;
})();
var statearr_28795_28806 = state_28785__$1;
(statearr_28795_28806[(2)] = null);

(statearr_28795_28806[(1)] = (2));


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
});})(c__25235__auto___28800,out))
;
return ((function (switch__25140__auto__,c__25235__auto___28800,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25141__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25141__auto____0 = (function (){
var statearr_28796 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28796[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25141__auto__);

(statearr_28796[(1)] = (1));

return statearr_28796;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25141__auto____1 = (function (state_28785){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_28785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e28797){if((e28797 instanceof Object)){
var ex__25144__auto__ = e28797;
var statearr_28798_28807 = state_28785;
(statearr_28798_28807[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28808 = state_28785;
state_28785 = G__28808;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25141__auto__ = function(state_28785){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25141__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25141__auto____1.call(this,state_28785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25141__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25141__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___28800,out))
})();
var state__25237__auto__ = (function (){var statearr_28799 = f__25236__auto__.call(null);
(statearr_28799[(6)] = c__25235__auto___28800);

return statearr_28799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___28800,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28809,opts){
var map__28810 = p__28809;
var map__28810__$1 = (((((!((map__28810 == null))))?(((((map__28810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28810):map__28810);
var eval_body = cljs.core.get.call(null,map__28810__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28810__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28812){var e = e28812;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28813_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28813_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
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
return cljs.core.map.call(null,(function (p__28814){
var vec__28815 = p__28814;
var k = cljs.core.nth.call(null,vec__28815,(0),null);
var v = cljs.core.nth.call(null,vec__28815,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28818){
var vec__28819 = p__28818;
var k = cljs.core.nth.call(null,vec__28819,(0),null);
var v = cljs.core.nth.call(null,vec__28819,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28825,p__28826){
var map__28827 = p__28825;
var map__28827__$1 = (((((!((map__28827 == null))))?(((((map__28827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28827):map__28827);
var opts = map__28827__$1;
var before_jsload = cljs.core.get.call(null,map__28827__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28827__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28827__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28828 = p__28826;
var map__28828__$1 = (((((!((map__28828 == null))))?(((((map__28828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28828):map__28828);
var msg = map__28828__$1;
var files = cljs.core.get.call(null,map__28828__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28828__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28828__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28982){
var state_val_28983 = (state_28982[(1)]);
if((state_val_28983 === (7))){
var inst_28844 = (state_28982[(7)]);
var inst_28842 = (state_28982[(8)]);
var inst_28845 = (state_28982[(9)]);
var inst_28843 = (state_28982[(10)]);
var inst_28850 = cljs.core._nth.call(null,inst_28843,inst_28845);
var inst_28851 = figwheel.client.file_reloading.eval_body.call(null,inst_28850,opts);
var inst_28852 = (inst_28845 + (1));
var tmp28984 = inst_28844;
var tmp28985 = inst_28842;
var tmp28986 = inst_28843;
var inst_28842__$1 = tmp28985;
var inst_28843__$1 = tmp28986;
var inst_28844__$1 = tmp28984;
var inst_28845__$1 = inst_28852;
var state_28982__$1 = (function (){var statearr_28987 = state_28982;
(statearr_28987[(7)] = inst_28844__$1);

(statearr_28987[(8)] = inst_28842__$1);

(statearr_28987[(9)] = inst_28845__$1);

(statearr_28987[(10)] = inst_28843__$1);

(statearr_28987[(11)] = inst_28851);

return statearr_28987;
})();
var statearr_28988_29071 = state_28982__$1;
(statearr_28988_29071[(2)] = null);

(statearr_28988_29071[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (20))){
var inst_28885 = (state_28982[(12)]);
var inst_28893 = figwheel.client.file_reloading.sort_files.call(null,inst_28885);
var state_28982__$1 = state_28982;
var statearr_28989_29072 = state_28982__$1;
(statearr_28989_29072[(2)] = inst_28893);

(statearr_28989_29072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (27))){
var state_28982__$1 = state_28982;
var statearr_28990_29073 = state_28982__$1;
(statearr_28990_29073[(2)] = null);

(statearr_28990_29073[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (1))){
var inst_28834 = (state_28982[(13)]);
var inst_28831 = before_jsload.call(null,files);
var inst_28832 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28833 = (function (){return ((function (inst_28834,inst_28831,inst_28832,state_val_28983,c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28822_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28822_SHARP_);
});
;})(inst_28834,inst_28831,inst_28832,state_val_28983,c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28834__$1 = cljs.core.filter.call(null,inst_28833,files);
var inst_28835 = cljs.core.not_empty.call(null,inst_28834__$1);
var state_28982__$1 = (function (){var statearr_28991 = state_28982;
(statearr_28991[(14)] = inst_28831);

(statearr_28991[(13)] = inst_28834__$1);

(statearr_28991[(15)] = inst_28832);

return statearr_28991;
})();
if(cljs.core.truth_(inst_28835)){
var statearr_28992_29074 = state_28982__$1;
(statearr_28992_29074[(1)] = (2));

} else {
var statearr_28993_29075 = state_28982__$1;
(statearr_28993_29075[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (24))){
var state_28982__$1 = state_28982;
var statearr_28994_29076 = state_28982__$1;
(statearr_28994_29076[(2)] = null);

(statearr_28994_29076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (39))){
var inst_28935 = (state_28982[(16)]);
var state_28982__$1 = state_28982;
var statearr_28995_29077 = state_28982__$1;
(statearr_28995_29077[(2)] = inst_28935);

(statearr_28995_29077[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (46))){
var inst_28977 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_28996_29078 = state_28982__$1;
(statearr_28996_29078[(2)] = inst_28977);

(statearr_28996_29078[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (4))){
var inst_28879 = (state_28982[(2)]);
var inst_28880 = cljs.core.List.EMPTY;
var inst_28881 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28880);
var inst_28882 = (function (){return ((function (inst_28879,inst_28880,inst_28881,state_val_28983,c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28823_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28823_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28823_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28823_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_28879,inst_28880,inst_28881,state_val_28983,c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28883 = cljs.core.filter.call(null,inst_28882,files);
var inst_28884 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28885 = cljs.core.concat.call(null,inst_28883,inst_28884);
var state_28982__$1 = (function (){var statearr_28997 = state_28982;
(statearr_28997[(12)] = inst_28885);

(statearr_28997[(17)] = inst_28879);

(statearr_28997[(18)] = inst_28881);

return statearr_28997;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28998_29079 = state_28982__$1;
(statearr_28998_29079[(1)] = (16));

} else {
var statearr_28999_29080 = state_28982__$1;
(statearr_28999_29080[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (15))){
var inst_28869 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_29000_29081 = state_28982__$1;
(statearr_29000_29081[(2)] = inst_28869);

(statearr_29000_29081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (21))){
var inst_28895 = (state_28982[(19)]);
var inst_28895__$1 = (state_28982[(2)]);
var inst_28896 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28895__$1);
var state_28982__$1 = (function (){var statearr_29001 = state_28982;
(statearr_29001[(19)] = inst_28895__$1);

return statearr_29001;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28982__$1,(22),inst_28896);
} else {
if((state_val_28983 === (31))){
var inst_28980 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28982__$1,inst_28980);
} else {
if((state_val_28983 === (32))){
var inst_28935 = (state_28982[(16)]);
var inst_28940 = inst_28935.cljs$lang$protocol_mask$partition0$;
var inst_28941 = (inst_28940 & (64));
var inst_28942 = inst_28935.cljs$core$ISeq$;
var inst_28943 = (cljs.core.PROTOCOL_SENTINEL === inst_28942);
var inst_28944 = ((inst_28941) || (inst_28943));
var state_28982__$1 = state_28982;
if(cljs.core.truth_(inst_28944)){
var statearr_29002_29082 = state_28982__$1;
(statearr_29002_29082[(1)] = (35));

} else {
var statearr_29003_29083 = state_28982__$1;
(statearr_29003_29083[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (40))){
var inst_28957 = (state_28982[(20)]);
var inst_28956 = (state_28982[(2)]);
var inst_28957__$1 = cljs.core.get.call(null,inst_28956,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28958 = cljs.core.get.call(null,inst_28956,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28959 = cljs.core.not_empty.call(null,inst_28957__$1);
var state_28982__$1 = (function (){var statearr_29004 = state_28982;
(statearr_29004[(20)] = inst_28957__$1);

(statearr_29004[(21)] = inst_28958);

return statearr_29004;
})();
if(cljs.core.truth_(inst_28959)){
var statearr_29005_29084 = state_28982__$1;
(statearr_29005_29084[(1)] = (41));

} else {
var statearr_29006_29085 = state_28982__$1;
(statearr_29006_29085[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (33))){
var state_28982__$1 = state_28982;
var statearr_29007_29086 = state_28982__$1;
(statearr_29007_29086[(2)] = false);

(statearr_29007_29086[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (13))){
var inst_28855 = (state_28982[(22)]);
var inst_28859 = cljs.core.chunk_first.call(null,inst_28855);
var inst_28860 = cljs.core.chunk_rest.call(null,inst_28855);
var inst_28861 = cljs.core.count.call(null,inst_28859);
var inst_28842 = inst_28860;
var inst_28843 = inst_28859;
var inst_28844 = inst_28861;
var inst_28845 = (0);
var state_28982__$1 = (function (){var statearr_29008 = state_28982;
(statearr_29008[(7)] = inst_28844);

(statearr_29008[(8)] = inst_28842);

(statearr_29008[(9)] = inst_28845);

(statearr_29008[(10)] = inst_28843);

return statearr_29008;
})();
var statearr_29009_29087 = state_28982__$1;
(statearr_29009_29087[(2)] = null);

(statearr_29009_29087[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (22))){
var inst_28895 = (state_28982[(19)]);
var inst_28903 = (state_28982[(23)]);
var inst_28898 = (state_28982[(24)]);
var inst_28899 = (state_28982[(25)]);
var inst_28898__$1 = (state_28982[(2)]);
var inst_28899__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28898__$1);
var inst_28900 = (function (){var all_files = inst_28895;
var res_SINGLEQUOTE_ = inst_28898__$1;
var res = inst_28899__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28895,inst_28903,inst_28898,inst_28899,inst_28898__$1,inst_28899__$1,state_val_28983,c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28824_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28824_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28895,inst_28903,inst_28898,inst_28899,inst_28898__$1,inst_28899__$1,state_val_28983,c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28901 = cljs.core.filter.call(null,inst_28900,inst_28898__$1);
var inst_28902 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28903__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28902);
var inst_28904 = cljs.core.not_empty.call(null,inst_28903__$1);
var state_28982__$1 = (function (){var statearr_29010 = state_28982;
(statearr_29010[(23)] = inst_28903__$1);

(statearr_29010[(24)] = inst_28898__$1);

(statearr_29010[(25)] = inst_28899__$1);

(statearr_29010[(26)] = inst_28901);

return statearr_29010;
})();
if(cljs.core.truth_(inst_28904)){
var statearr_29011_29088 = state_28982__$1;
(statearr_29011_29088[(1)] = (23));

} else {
var statearr_29012_29089 = state_28982__$1;
(statearr_29012_29089[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (36))){
var state_28982__$1 = state_28982;
var statearr_29013_29090 = state_28982__$1;
(statearr_29013_29090[(2)] = false);

(statearr_29013_29090[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (41))){
var inst_28957 = (state_28982[(20)]);
var inst_28961 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28962 = cljs.core.map.call(null,inst_28961,inst_28957);
var inst_28963 = cljs.core.pr_str.call(null,inst_28962);
var inst_28964 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28963)].join('');
var inst_28965 = figwheel.client.utils.log.call(null,inst_28964);
var state_28982__$1 = state_28982;
var statearr_29014_29091 = state_28982__$1;
(statearr_29014_29091[(2)] = inst_28965);

(statearr_29014_29091[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (43))){
var inst_28958 = (state_28982[(21)]);
var inst_28968 = (state_28982[(2)]);
var inst_28969 = cljs.core.not_empty.call(null,inst_28958);
var state_28982__$1 = (function (){var statearr_29015 = state_28982;
(statearr_29015[(27)] = inst_28968);

return statearr_29015;
})();
if(cljs.core.truth_(inst_28969)){
var statearr_29016_29092 = state_28982__$1;
(statearr_29016_29092[(1)] = (44));

} else {
var statearr_29017_29093 = state_28982__$1;
(statearr_29017_29093[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (29))){
var inst_28895 = (state_28982[(19)]);
var inst_28903 = (state_28982[(23)]);
var inst_28898 = (state_28982[(24)]);
var inst_28899 = (state_28982[(25)]);
var inst_28935 = (state_28982[(16)]);
var inst_28901 = (state_28982[(26)]);
var inst_28931 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28934 = (function (){var all_files = inst_28895;
var res_SINGLEQUOTE_ = inst_28898;
var res = inst_28899;
var files_not_loaded = inst_28901;
var dependencies_that_loaded = inst_28903;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28895,inst_28903,inst_28898,inst_28899,inst_28935,inst_28901,inst_28931,state_val_28983,c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28933){
var map__29018 = p__28933;
var map__29018__$1 = (((((!((map__29018 == null))))?(((((map__29018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29018):map__29018);
var namespace = cljs.core.get.call(null,map__29018__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28895,inst_28903,inst_28898,inst_28899,inst_28935,inst_28901,inst_28931,state_val_28983,c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28935__$1 = cljs.core.group_by.call(null,inst_28934,inst_28901);
var inst_28937 = (inst_28935__$1 == null);
var inst_28938 = cljs.core.not.call(null,inst_28937);
var state_28982__$1 = (function (){var statearr_29020 = state_28982;
(statearr_29020[(28)] = inst_28931);

(statearr_29020[(16)] = inst_28935__$1);

return statearr_29020;
})();
if(inst_28938){
var statearr_29021_29094 = state_28982__$1;
(statearr_29021_29094[(1)] = (32));

} else {
var statearr_29022_29095 = state_28982__$1;
(statearr_29022_29095[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (44))){
var inst_28958 = (state_28982[(21)]);
var inst_28971 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28958);
var inst_28972 = cljs.core.pr_str.call(null,inst_28971);
var inst_28973 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28972)].join('');
var inst_28974 = figwheel.client.utils.log.call(null,inst_28973);
var state_28982__$1 = state_28982;
var statearr_29023_29096 = state_28982__$1;
(statearr_29023_29096[(2)] = inst_28974);

(statearr_29023_29096[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (6))){
var inst_28876 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_29024_29097 = state_28982__$1;
(statearr_29024_29097[(2)] = inst_28876);

(statearr_29024_29097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (28))){
var inst_28901 = (state_28982[(26)]);
var inst_28928 = (state_28982[(2)]);
var inst_28929 = cljs.core.not_empty.call(null,inst_28901);
var state_28982__$1 = (function (){var statearr_29025 = state_28982;
(statearr_29025[(29)] = inst_28928);

return statearr_29025;
})();
if(cljs.core.truth_(inst_28929)){
var statearr_29026_29098 = state_28982__$1;
(statearr_29026_29098[(1)] = (29));

} else {
var statearr_29027_29099 = state_28982__$1;
(statearr_29027_29099[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (25))){
var inst_28899 = (state_28982[(25)]);
var inst_28915 = (state_28982[(2)]);
var inst_28916 = cljs.core.not_empty.call(null,inst_28899);
var state_28982__$1 = (function (){var statearr_29028 = state_28982;
(statearr_29028[(30)] = inst_28915);

return statearr_29028;
})();
if(cljs.core.truth_(inst_28916)){
var statearr_29029_29100 = state_28982__$1;
(statearr_29029_29100[(1)] = (26));

} else {
var statearr_29030_29101 = state_28982__$1;
(statearr_29030_29101[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (34))){
var inst_28951 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
if(cljs.core.truth_(inst_28951)){
var statearr_29031_29102 = state_28982__$1;
(statearr_29031_29102[(1)] = (38));

} else {
var statearr_29032_29103 = state_28982__$1;
(statearr_29032_29103[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (17))){
var state_28982__$1 = state_28982;
var statearr_29033_29104 = state_28982__$1;
(statearr_29033_29104[(2)] = recompile_dependents);

(statearr_29033_29104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (3))){
var state_28982__$1 = state_28982;
var statearr_29034_29105 = state_28982__$1;
(statearr_29034_29105[(2)] = null);

(statearr_29034_29105[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (12))){
var inst_28872 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_29035_29106 = state_28982__$1;
(statearr_29035_29106[(2)] = inst_28872);

(statearr_29035_29106[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (2))){
var inst_28834 = (state_28982[(13)]);
var inst_28841 = cljs.core.seq.call(null,inst_28834);
var inst_28842 = inst_28841;
var inst_28843 = null;
var inst_28844 = (0);
var inst_28845 = (0);
var state_28982__$1 = (function (){var statearr_29036 = state_28982;
(statearr_29036[(7)] = inst_28844);

(statearr_29036[(8)] = inst_28842);

(statearr_29036[(9)] = inst_28845);

(statearr_29036[(10)] = inst_28843);

return statearr_29036;
})();
var statearr_29037_29107 = state_28982__$1;
(statearr_29037_29107[(2)] = null);

(statearr_29037_29107[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (23))){
var inst_28895 = (state_28982[(19)]);
var inst_28903 = (state_28982[(23)]);
var inst_28898 = (state_28982[(24)]);
var inst_28899 = (state_28982[(25)]);
var inst_28901 = (state_28982[(26)]);
var inst_28906 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28908 = (function (){var all_files = inst_28895;
var res_SINGLEQUOTE_ = inst_28898;
var res = inst_28899;
var files_not_loaded = inst_28901;
var dependencies_that_loaded = inst_28903;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28895,inst_28903,inst_28898,inst_28899,inst_28901,inst_28906,state_val_28983,c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28907){
var map__29038 = p__28907;
var map__29038__$1 = (((((!((map__29038 == null))))?(((((map__29038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29038):map__29038);
var request_url = cljs.core.get.call(null,map__29038__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28895,inst_28903,inst_28898,inst_28899,inst_28901,inst_28906,state_val_28983,c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28909 = cljs.core.reverse.call(null,inst_28903);
var inst_28910 = cljs.core.map.call(null,inst_28908,inst_28909);
var inst_28911 = cljs.core.pr_str.call(null,inst_28910);
var inst_28912 = figwheel.client.utils.log.call(null,inst_28911);
var state_28982__$1 = (function (){var statearr_29040 = state_28982;
(statearr_29040[(31)] = inst_28906);

return statearr_29040;
})();
var statearr_29041_29108 = state_28982__$1;
(statearr_29041_29108[(2)] = inst_28912);

(statearr_29041_29108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (35))){
var state_28982__$1 = state_28982;
var statearr_29042_29109 = state_28982__$1;
(statearr_29042_29109[(2)] = true);

(statearr_29042_29109[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (19))){
var inst_28885 = (state_28982[(12)]);
var inst_28891 = figwheel.client.file_reloading.expand_files.call(null,inst_28885);
var state_28982__$1 = state_28982;
var statearr_29043_29110 = state_28982__$1;
(statearr_29043_29110[(2)] = inst_28891);

(statearr_29043_29110[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (11))){
var state_28982__$1 = state_28982;
var statearr_29044_29111 = state_28982__$1;
(statearr_29044_29111[(2)] = null);

(statearr_29044_29111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (9))){
var inst_28874 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_29045_29112 = state_28982__$1;
(statearr_29045_29112[(2)] = inst_28874);

(statearr_29045_29112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (5))){
var inst_28844 = (state_28982[(7)]);
var inst_28845 = (state_28982[(9)]);
var inst_28847 = (inst_28845 < inst_28844);
var inst_28848 = inst_28847;
var state_28982__$1 = state_28982;
if(cljs.core.truth_(inst_28848)){
var statearr_29046_29113 = state_28982__$1;
(statearr_29046_29113[(1)] = (7));

} else {
var statearr_29047_29114 = state_28982__$1;
(statearr_29047_29114[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (14))){
var inst_28855 = (state_28982[(22)]);
var inst_28864 = cljs.core.first.call(null,inst_28855);
var inst_28865 = figwheel.client.file_reloading.eval_body.call(null,inst_28864,opts);
var inst_28866 = cljs.core.next.call(null,inst_28855);
var inst_28842 = inst_28866;
var inst_28843 = null;
var inst_28844 = (0);
var inst_28845 = (0);
var state_28982__$1 = (function (){var statearr_29048 = state_28982;
(statearr_29048[(7)] = inst_28844);

(statearr_29048[(8)] = inst_28842);

(statearr_29048[(9)] = inst_28845);

(statearr_29048[(32)] = inst_28865);

(statearr_29048[(10)] = inst_28843);

return statearr_29048;
})();
var statearr_29049_29115 = state_28982__$1;
(statearr_29049_29115[(2)] = null);

(statearr_29049_29115[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (45))){
var state_28982__$1 = state_28982;
var statearr_29050_29116 = state_28982__$1;
(statearr_29050_29116[(2)] = null);

(statearr_29050_29116[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (26))){
var inst_28895 = (state_28982[(19)]);
var inst_28903 = (state_28982[(23)]);
var inst_28898 = (state_28982[(24)]);
var inst_28899 = (state_28982[(25)]);
var inst_28901 = (state_28982[(26)]);
var inst_28918 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28920 = (function (){var all_files = inst_28895;
var res_SINGLEQUOTE_ = inst_28898;
var res = inst_28899;
var files_not_loaded = inst_28901;
var dependencies_that_loaded = inst_28903;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28895,inst_28903,inst_28898,inst_28899,inst_28901,inst_28918,state_val_28983,c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28919){
var map__29051 = p__28919;
var map__29051__$1 = (((((!((map__29051 == null))))?(((((map__29051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29051):map__29051);
var namespace = cljs.core.get.call(null,map__29051__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29051__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28895,inst_28903,inst_28898,inst_28899,inst_28901,inst_28918,state_val_28983,c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28921 = cljs.core.map.call(null,inst_28920,inst_28899);
var inst_28922 = cljs.core.pr_str.call(null,inst_28921);
var inst_28923 = figwheel.client.utils.log.call(null,inst_28922);
var inst_28924 = (function (){var all_files = inst_28895;
var res_SINGLEQUOTE_ = inst_28898;
var res = inst_28899;
var files_not_loaded = inst_28901;
var dependencies_that_loaded = inst_28903;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28895,inst_28903,inst_28898,inst_28899,inst_28901,inst_28918,inst_28920,inst_28921,inst_28922,inst_28923,state_val_28983,c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28895,inst_28903,inst_28898,inst_28899,inst_28901,inst_28918,inst_28920,inst_28921,inst_28922,inst_28923,state_val_28983,c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28925 = setTimeout(inst_28924,(10));
var state_28982__$1 = (function (){var statearr_29053 = state_28982;
(statearr_29053[(33)] = inst_28923);

(statearr_29053[(34)] = inst_28918);

return statearr_29053;
})();
var statearr_29054_29117 = state_28982__$1;
(statearr_29054_29117[(2)] = inst_28925);

(statearr_29054_29117[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (16))){
var state_28982__$1 = state_28982;
var statearr_29055_29118 = state_28982__$1;
(statearr_29055_29118[(2)] = reload_dependents);

(statearr_29055_29118[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (38))){
var inst_28935 = (state_28982[(16)]);
var inst_28953 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28935);
var state_28982__$1 = state_28982;
var statearr_29056_29119 = state_28982__$1;
(statearr_29056_29119[(2)] = inst_28953);

(statearr_29056_29119[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (30))){
var state_28982__$1 = state_28982;
var statearr_29057_29120 = state_28982__$1;
(statearr_29057_29120[(2)] = null);

(statearr_29057_29120[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (10))){
var inst_28855 = (state_28982[(22)]);
var inst_28857 = cljs.core.chunked_seq_QMARK_.call(null,inst_28855);
var state_28982__$1 = state_28982;
if(inst_28857){
var statearr_29058_29121 = state_28982__$1;
(statearr_29058_29121[(1)] = (13));

} else {
var statearr_29059_29122 = state_28982__$1;
(statearr_29059_29122[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (18))){
var inst_28889 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
if(cljs.core.truth_(inst_28889)){
var statearr_29060_29123 = state_28982__$1;
(statearr_29060_29123[(1)] = (19));

} else {
var statearr_29061_29124 = state_28982__$1;
(statearr_29061_29124[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (42))){
var state_28982__$1 = state_28982;
var statearr_29062_29125 = state_28982__$1;
(statearr_29062_29125[(2)] = null);

(statearr_29062_29125[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (37))){
var inst_28948 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_29063_29126 = state_28982__$1;
(statearr_29063_29126[(2)] = inst_28948);

(statearr_29063_29126[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (8))){
var inst_28842 = (state_28982[(8)]);
var inst_28855 = (state_28982[(22)]);
var inst_28855__$1 = cljs.core.seq.call(null,inst_28842);
var state_28982__$1 = (function (){var statearr_29064 = state_28982;
(statearr_29064[(22)] = inst_28855__$1);

return statearr_29064;
})();
if(inst_28855__$1){
var statearr_29065_29127 = state_28982__$1;
(statearr_29065_29127[(1)] = (10));

} else {
var statearr_29066_29128 = state_28982__$1;
(statearr_29066_29128[(1)] = (11));

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
});})(c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25140__auto__,c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25141__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25141__auto____0 = (function (){
var statearr_29067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29067[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25141__auto__);

(statearr_29067[(1)] = (1));

return statearr_29067;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25141__auto____1 = (function (state_28982){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_28982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e29068){if((e29068 instanceof Object)){
var ex__25144__auto__ = e29068;
var statearr_29069_29129 = state_28982;
(statearr_29069_29129[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29130 = state_28982;
state_28982 = G__29130;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25141__auto__ = function(state_28982){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25141__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25141__auto____1.call(this,state_28982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25141__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25141__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25237__auto__ = (function (){var statearr_29070 = f__25236__auto__.call(null);
(statearr_29070[(6)] = c__25235__auto__);

return statearr_29070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto__,map__28827,map__28827__$1,opts,before_jsload,on_jsload,reload_dependents,map__28828,map__28828__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25235__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29133,link){
var map__29134 = p__29133;
var map__29134__$1 = (((((!((map__29134 == null))))?(((((map__29134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29134):map__29134);
var file = cljs.core.get.call(null,map__29134__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__29134,map__29134__$1,file){
return (function (p1__29131_SHARP_,p2__29132_SHARP_){
if(cljs.core._EQ_.call(null,p1__29131_SHARP_,p2__29132_SHARP_)){
return p1__29131_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__29134,map__29134__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29137){
var map__29138 = p__29137;
var map__29138__$1 = (((((!((map__29138 == null))))?(((((map__29138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29138):map__29138);
var match_length = cljs.core.get.call(null,map__29138__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29138__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29136_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29136_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29140_SHARP_,p2__29141_SHARP_){
return cljs.core.assoc.call(null,p1__29140_SHARP_,cljs.core.get.call(null,p2__29141_SHARP_,key),p2__29141_SHARP_);
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
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29142 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29142);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29142);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29143,p__29144){
var map__29145 = p__29143;
var map__29145__$1 = (((((!((map__29145 == null))))?(((((map__29145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29145):map__29145);
var on_cssload = cljs.core.get.call(null,map__29145__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29146 = p__29144;
var map__29146__$1 = (((((!((map__29146 == null))))?(((((map__29146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29146):map__29146);
var files_msg = map__29146__$1;
var files = cljs.core.get.call(null,map__29146__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1545905846812
