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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28505_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28505_SHARP_));
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
var seq__28506 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28507 = null;
var count__28508 = (0);
var i__28509 = (0);
while(true){
if((i__28509 < count__28508)){
var n = cljs.core._nth.call(null,chunk__28507,i__28509);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28510 = seq__28506;
var G__28511 = chunk__28507;
var G__28512 = count__28508;
var G__28513 = (i__28509 + (1));
seq__28506 = G__28510;
chunk__28507 = G__28511;
count__28508 = G__28512;
i__28509 = G__28513;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28506);
if(temp__5720__auto__){
var seq__28506__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28506__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__28506__$1);
var G__28514 = cljs.core.chunk_rest.call(null,seq__28506__$1);
var G__28515 = c__4461__auto__;
var G__28516 = cljs.core.count.call(null,c__4461__auto__);
var G__28517 = (0);
seq__28506 = G__28514;
chunk__28507 = G__28515;
count__28508 = G__28516;
i__28509 = G__28517;
continue;
} else {
var n = cljs.core.first.call(null,seq__28506__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28518 = cljs.core.next.call(null,seq__28506__$1);
var G__28519 = null;
var G__28520 = (0);
var G__28521 = (0);
seq__28506 = G__28518;
chunk__28507 = G__28519;
count__28508 = G__28520;
i__28509 = G__28521;
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
return cljs.core.some.call(null,(function (p__28522){
var vec__28523 = p__28522;
var _ = cljs.core.nth.call(null,vec__28523,(0),null);
var v = cljs.core.nth.call(null,vec__28523,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__28526){
var vec__28527 = p__28526;
var k = cljs.core.nth.call(null,vec__28527,(0),null);
var v = cljs.core.nth.call(null,vec__28527,(1),null);
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

var seq__28539_28547 = cljs.core.seq.call(null,deps);
var chunk__28540_28548 = null;
var count__28541_28549 = (0);
var i__28542_28550 = (0);
while(true){
if((i__28542_28550 < count__28541_28549)){
var dep_28551 = cljs.core._nth.call(null,chunk__28540_28548,i__28542_28550);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_28551;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28551));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28551,(depth + (1)),state);
} else {
}


var G__28552 = seq__28539_28547;
var G__28553 = chunk__28540_28548;
var G__28554 = count__28541_28549;
var G__28555 = (i__28542_28550 + (1));
seq__28539_28547 = G__28552;
chunk__28540_28548 = G__28553;
count__28541_28549 = G__28554;
i__28542_28550 = G__28555;
continue;
} else {
var temp__5720__auto___28556 = cljs.core.seq.call(null,seq__28539_28547);
if(temp__5720__auto___28556){
var seq__28539_28557__$1 = temp__5720__auto___28556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28539_28557__$1)){
var c__4461__auto___28558 = cljs.core.chunk_first.call(null,seq__28539_28557__$1);
var G__28559 = cljs.core.chunk_rest.call(null,seq__28539_28557__$1);
var G__28560 = c__4461__auto___28558;
var G__28561 = cljs.core.count.call(null,c__4461__auto___28558);
var G__28562 = (0);
seq__28539_28547 = G__28559;
chunk__28540_28548 = G__28560;
count__28541_28549 = G__28561;
i__28542_28550 = G__28562;
continue;
} else {
var dep_28563 = cljs.core.first.call(null,seq__28539_28557__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_28563;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28563));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28563,(depth + (1)),state);
} else {
}


var G__28564 = cljs.core.next.call(null,seq__28539_28557__$1);
var G__28565 = null;
var G__28566 = (0);
var G__28567 = (0);
seq__28539_28547 = G__28564;
chunk__28540_28548 = G__28565;
count__28541_28549 = G__28566;
i__28542_28550 = G__28567;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28543){
var vec__28544 = p__28543;
var seq__28545 = cljs.core.seq.call(null,vec__28544);
var first__28546 = cljs.core.first.call(null,seq__28545);
var seq__28545__$1 = cljs.core.next.call(null,seq__28545);
var x = first__28546;
var xs = seq__28545__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28544,seq__28545,first__28546,seq__28545__$1,x,xs,get_deps__$1){
return (function (p1__28530_SHARP_){
return clojure.set.difference.call(null,p1__28530_SHARP_,x);
});})(vec__28544,seq__28545,first__28546,seq__28545__$1,x,xs,get_deps__$1))
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
var seq__28568 = cljs.core.seq.call(null,provides);
var chunk__28569 = null;
var count__28570 = (0);
var i__28571 = (0);
while(true){
if((i__28571 < count__28570)){
var prov = cljs.core._nth.call(null,chunk__28569,i__28571);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28572_28580 = cljs.core.seq.call(null,requires);
var chunk__28573_28581 = null;
var count__28574_28582 = (0);
var i__28575_28583 = (0);
while(true){
if((i__28575_28583 < count__28574_28582)){
var req_28584 = cljs.core._nth.call(null,chunk__28573_28581,i__28575_28583);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28584,prov);


var G__28585 = seq__28572_28580;
var G__28586 = chunk__28573_28581;
var G__28587 = count__28574_28582;
var G__28588 = (i__28575_28583 + (1));
seq__28572_28580 = G__28585;
chunk__28573_28581 = G__28586;
count__28574_28582 = G__28587;
i__28575_28583 = G__28588;
continue;
} else {
var temp__5720__auto___28589 = cljs.core.seq.call(null,seq__28572_28580);
if(temp__5720__auto___28589){
var seq__28572_28590__$1 = temp__5720__auto___28589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28572_28590__$1)){
var c__4461__auto___28591 = cljs.core.chunk_first.call(null,seq__28572_28590__$1);
var G__28592 = cljs.core.chunk_rest.call(null,seq__28572_28590__$1);
var G__28593 = c__4461__auto___28591;
var G__28594 = cljs.core.count.call(null,c__4461__auto___28591);
var G__28595 = (0);
seq__28572_28580 = G__28592;
chunk__28573_28581 = G__28593;
count__28574_28582 = G__28594;
i__28575_28583 = G__28595;
continue;
} else {
var req_28596 = cljs.core.first.call(null,seq__28572_28590__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28596,prov);


var G__28597 = cljs.core.next.call(null,seq__28572_28590__$1);
var G__28598 = null;
var G__28599 = (0);
var G__28600 = (0);
seq__28572_28580 = G__28597;
chunk__28573_28581 = G__28598;
count__28574_28582 = G__28599;
i__28575_28583 = G__28600;
continue;
}
} else {
}
}
break;
}


var G__28601 = seq__28568;
var G__28602 = chunk__28569;
var G__28603 = count__28570;
var G__28604 = (i__28571 + (1));
seq__28568 = G__28601;
chunk__28569 = G__28602;
count__28570 = G__28603;
i__28571 = G__28604;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28568);
if(temp__5720__auto__){
var seq__28568__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28568__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__28568__$1);
var G__28605 = cljs.core.chunk_rest.call(null,seq__28568__$1);
var G__28606 = c__4461__auto__;
var G__28607 = cljs.core.count.call(null,c__4461__auto__);
var G__28608 = (0);
seq__28568 = G__28605;
chunk__28569 = G__28606;
count__28570 = G__28607;
i__28571 = G__28608;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28568__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28576_28609 = cljs.core.seq.call(null,requires);
var chunk__28577_28610 = null;
var count__28578_28611 = (0);
var i__28579_28612 = (0);
while(true){
if((i__28579_28612 < count__28578_28611)){
var req_28613 = cljs.core._nth.call(null,chunk__28577_28610,i__28579_28612);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28613,prov);


var G__28614 = seq__28576_28609;
var G__28615 = chunk__28577_28610;
var G__28616 = count__28578_28611;
var G__28617 = (i__28579_28612 + (1));
seq__28576_28609 = G__28614;
chunk__28577_28610 = G__28615;
count__28578_28611 = G__28616;
i__28579_28612 = G__28617;
continue;
} else {
var temp__5720__auto___28618__$1 = cljs.core.seq.call(null,seq__28576_28609);
if(temp__5720__auto___28618__$1){
var seq__28576_28619__$1 = temp__5720__auto___28618__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28576_28619__$1)){
var c__4461__auto___28620 = cljs.core.chunk_first.call(null,seq__28576_28619__$1);
var G__28621 = cljs.core.chunk_rest.call(null,seq__28576_28619__$1);
var G__28622 = c__4461__auto___28620;
var G__28623 = cljs.core.count.call(null,c__4461__auto___28620);
var G__28624 = (0);
seq__28576_28609 = G__28621;
chunk__28577_28610 = G__28622;
count__28578_28611 = G__28623;
i__28579_28612 = G__28624;
continue;
} else {
var req_28625 = cljs.core.first.call(null,seq__28576_28619__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28625,prov);


var G__28626 = cljs.core.next.call(null,seq__28576_28619__$1);
var G__28627 = null;
var G__28628 = (0);
var G__28629 = (0);
seq__28576_28609 = G__28626;
chunk__28577_28610 = G__28627;
count__28578_28611 = G__28628;
i__28579_28612 = G__28629;
continue;
}
} else {
}
}
break;
}


var G__28630 = cljs.core.next.call(null,seq__28568__$1);
var G__28631 = null;
var G__28632 = (0);
var G__28633 = (0);
seq__28568 = G__28630;
chunk__28569 = G__28631;
count__28570 = G__28632;
i__28571 = G__28633;
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
var seq__28634_28638 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28635_28639 = null;
var count__28636_28640 = (0);
var i__28637_28641 = (0);
while(true){
if((i__28637_28641 < count__28636_28640)){
var ns_28642 = cljs.core._nth.call(null,chunk__28635_28639,i__28637_28641);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28642);


var G__28643 = seq__28634_28638;
var G__28644 = chunk__28635_28639;
var G__28645 = count__28636_28640;
var G__28646 = (i__28637_28641 + (1));
seq__28634_28638 = G__28643;
chunk__28635_28639 = G__28644;
count__28636_28640 = G__28645;
i__28637_28641 = G__28646;
continue;
} else {
var temp__5720__auto___28647 = cljs.core.seq.call(null,seq__28634_28638);
if(temp__5720__auto___28647){
var seq__28634_28648__$1 = temp__5720__auto___28647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28634_28648__$1)){
var c__4461__auto___28649 = cljs.core.chunk_first.call(null,seq__28634_28648__$1);
var G__28650 = cljs.core.chunk_rest.call(null,seq__28634_28648__$1);
var G__28651 = c__4461__auto___28649;
var G__28652 = cljs.core.count.call(null,c__4461__auto___28649);
var G__28653 = (0);
seq__28634_28638 = G__28650;
chunk__28635_28639 = G__28651;
count__28636_28640 = G__28652;
i__28637_28641 = G__28653;
continue;
} else {
var ns_28654 = cljs.core.first.call(null,seq__28634_28648__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28654);


var G__28655 = cljs.core.next.call(null,seq__28634_28648__$1);
var G__28656 = null;
var G__28657 = (0);
var G__28658 = (0);
seq__28634_28638 = G__28655;
chunk__28635_28639 = G__28656;
count__28636_28640 = G__28657;
i__28637_28641 = G__28658;
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
var G__28659__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28659 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28660__i = 0, G__28660__a = new Array(arguments.length -  0);
while (G__28660__i < G__28660__a.length) {G__28660__a[G__28660__i] = arguments[G__28660__i + 0]; ++G__28660__i;}
  args = new cljs.core.IndexedSeq(G__28660__a,0,null);
} 
return G__28659__delegate.call(this,args);};
G__28659.cljs$lang$maxFixedArity = 0;
G__28659.cljs$lang$applyTo = (function (arglist__28661){
var args = cljs.core.seq(arglist__28661);
return G__28659__delegate(args);
});
G__28659.cljs$core$IFn$_invoke$arity$variadic = G__28659__delegate;
return G__28659;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28662_SHARP_,p2__28663_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28662_SHARP_)),p2__28663_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28664_SHARP_,p2__28665_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28664_SHARP_),p2__28665_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28666 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28666.addCallback(((function (G__28666){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28666))
);

G__28666.addErrback(((function (G__28666){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28666))
);

return G__28666;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28667){if((e28667 instanceof Error)){
var e = e28667;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28667;

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
}catch (e28668){if((e28668 instanceof Error)){
var e = e28668;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28668;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28669 = cljs.core._EQ_;
var expr__28670 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28669.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28670))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28669.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28670))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28669.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28670))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28669,expr__28670){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28669,expr__28670))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28672,callback){
var map__28673 = p__28672;
var map__28673__$1 = (((((!((map__28673 == null))))?(((((map__28673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28673):map__28673);
var file_msg = map__28673__$1;
var request_url = cljs.core.get.call(null,map__28673__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28673,map__28673__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28673,map__28673__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__25257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto__){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto__){
return (function (state_28711){
var state_val_28712 = (state_28711[(1)]);
if((state_val_28712 === (7))){
var inst_28707 = (state_28711[(2)]);
var state_28711__$1 = state_28711;
var statearr_28713_28739 = state_28711__$1;
(statearr_28713_28739[(2)] = inst_28707);

(statearr_28713_28739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (1))){
var state_28711__$1 = state_28711;
var statearr_28714_28740 = state_28711__$1;
(statearr_28714_28740[(2)] = null);

(statearr_28714_28740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (4))){
var inst_28677 = (state_28711[(7)]);
var inst_28677__$1 = (state_28711[(2)]);
var state_28711__$1 = (function (){var statearr_28715 = state_28711;
(statearr_28715[(7)] = inst_28677__$1);

return statearr_28715;
})();
if(cljs.core.truth_(inst_28677__$1)){
var statearr_28716_28741 = state_28711__$1;
(statearr_28716_28741[(1)] = (5));

} else {
var statearr_28717_28742 = state_28711__$1;
(statearr_28717_28742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (15))){
var inst_28690 = (state_28711[(8)]);
var inst_28692 = (state_28711[(9)]);
var inst_28694 = inst_28692.call(null,inst_28690);
var state_28711__$1 = state_28711;
var statearr_28718_28743 = state_28711__$1;
(statearr_28718_28743[(2)] = inst_28694);

(statearr_28718_28743[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (13))){
var inst_28701 = (state_28711[(2)]);
var state_28711__$1 = state_28711;
var statearr_28719_28744 = state_28711__$1;
(statearr_28719_28744[(2)] = inst_28701);

(statearr_28719_28744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (6))){
var state_28711__$1 = state_28711;
var statearr_28720_28745 = state_28711__$1;
(statearr_28720_28745[(2)] = null);

(statearr_28720_28745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (17))){
var inst_28698 = (state_28711[(2)]);
var state_28711__$1 = state_28711;
var statearr_28721_28746 = state_28711__$1;
(statearr_28721_28746[(2)] = inst_28698);

(statearr_28721_28746[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (3))){
var inst_28709 = (state_28711[(2)]);
var state_28711__$1 = state_28711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28711__$1,inst_28709);
} else {
if((state_val_28712 === (12))){
var state_28711__$1 = state_28711;
var statearr_28722_28747 = state_28711__$1;
(statearr_28722_28747[(2)] = null);

(statearr_28722_28747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (2))){
var state_28711__$1 = state_28711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28711__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28712 === (11))){
var inst_28682 = (state_28711[(10)]);
var inst_28688 = figwheel.client.file_reloading.blocking_load.call(null,inst_28682);
var state_28711__$1 = state_28711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28711__$1,(14),inst_28688);
} else {
if((state_val_28712 === (9))){
var inst_28682 = (state_28711[(10)]);
var state_28711__$1 = state_28711;
if(cljs.core.truth_(inst_28682)){
var statearr_28723_28748 = state_28711__$1;
(statearr_28723_28748[(1)] = (11));

} else {
var statearr_28724_28749 = state_28711__$1;
(statearr_28724_28749[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (5))){
var inst_28677 = (state_28711[(7)]);
var inst_28683 = (state_28711[(11)]);
var inst_28682 = cljs.core.nth.call(null,inst_28677,(0),null);
var inst_28683__$1 = cljs.core.nth.call(null,inst_28677,(1),null);
var state_28711__$1 = (function (){var statearr_28725 = state_28711;
(statearr_28725[(10)] = inst_28682);

(statearr_28725[(11)] = inst_28683__$1);

return statearr_28725;
})();
if(cljs.core.truth_(inst_28683__$1)){
var statearr_28726_28750 = state_28711__$1;
(statearr_28726_28750[(1)] = (8));

} else {
var statearr_28727_28751 = state_28711__$1;
(statearr_28727_28751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (14))){
var inst_28692 = (state_28711[(9)]);
var inst_28682 = (state_28711[(10)]);
var inst_28690 = (state_28711[(2)]);
var inst_28691 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28692__$1 = cljs.core.get.call(null,inst_28691,inst_28682);
var state_28711__$1 = (function (){var statearr_28728 = state_28711;
(statearr_28728[(8)] = inst_28690);

(statearr_28728[(9)] = inst_28692__$1);

return statearr_28728;
})();
if(cljs.core.truth_(inst_28692__$1)){
var statearr_28729_28752 = state_28711__$1;
(statearr_28729_28752[(1)] = (15));

} else {
var statearr_28730_28753 = state_28711__$1;
(statearr_28730_28753[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (16))){
var inst_28690 = (state_28711[(8)]);
var inst_28696 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28690);
var state_28711__$1 = state_28711;
var statearr_28731_28754 = state_28711__$1;
(statearr_28731_28754[(2)] = inst_28696);

(statearr_28731_28754[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (10))){
var inst_28703 = (state_28711[(2)]);
var state_28711__$1 = (function (){var statearr_28732 = state_28711;
(statearr_28732[(12)] = inst_28703);

return statearr_28732;
})();
var statearr_28733_28755 = state_28711__$1;
(statearr_28733_28755[(2)] = null);

(statearr_28733_28755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (8))){
var inst_28683 = (state_28711[(11)]);
var inst_28685 = eval(inst_28683);
var state_28711__$1 = state_28711;
var statearr_28734_28756 = state_28711__$1;
(statearr_28734_28756[(2)] = inst_28685);

(statearr_28734_28756[(1)] = (10));


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
});})(c__25257__auto__))
;
return ((function (switch__25162__auto__,c__25257__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25163__auto__ = null;
var figwheel$client$file_reloading$state_machine__25163__auto____0 = (function (){
var statearr_28735 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28735[(0)] = figwheel$client$file_reloading$state_machine__25163__auto__);

(statearr_28735[(1)] = (1));

return statearr_28735;
});
var figwheel$client$file_reloading$state_machine__25163__auto____1 = (function (state_28711){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_28711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e28736){if((e28736 instanceof Object)){
var ex__25166__auto__ = e28736;
var statearr_28737_28757 = state_28711;
(statearr_28737_28757[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28758 = state_28711;
state_28711 = G__28758;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25163__auto__ = function(state_28711){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25163__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25163__auto____1.call(this,state_28711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25163__auto____0;
figwheel$client$file_reloading$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25163__auto____1;
return figwheel$client$file_reloading$state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto__))
})();
var state__25259__auto__ = (function (){var statearr_28738 = f__25258__auto__.call(null);
(statearr_28738[(6)] = c__25257__auto__);

return statearr_28738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto__))
);

return c__25257__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28760 = arguments.length;
switch (G__28760) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28762,callback){
var map__28763 = p__28762;
var map__28763__$1 = (((((!((map__28763 == null))))?(((((map__28763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28763):map__28763);
var file_msg = map__28763__$1;
var namespace = cljs.core.get.call(null,map__28763__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28763,map__28763__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28763,map__28763__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28765){
var map__28766 = p__28765;
var map__28766__$1 = (((((!((map__28766 == null))))?(((((map__28766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28766):map__28766);
var file_msg = map__28766__$1;
var namespace = cljs.core.get.call(null,map__28766__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28768){
var map__28769 = p__28768;
var map__28769__$1 = (((((!((map__28769 == null))))?(((((map__28769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28769):map__28769);
var file_msg = map__28769__$1;
var namespace = cljs.core.get.call(null,map__28769__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28771,callback){
var map__28772 = p__28771;
var map__28772__$1 = (((((!((map__28772 == null))))?(((((map__28772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28772):map__28772);
var file_msg = map__28772__$1;
var request_url = cljs.core.get.call(null,map__28772__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28772__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__25257__auto___28822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___28822,out){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___28822,out){
return (function (state_28807){
var state_val_28808 = (state_28807[(1)]);
if((state_val_28808 === (1))){
var inst_28781 = cljs.core.seq.call(null,files);
var inst_28782 = cljs.core.first.call(null,inst_28781);
var inst_28783 = cljs.core.next.call(null,inst_28781);
var inst_28784 = files;
var state_28807__$1 = (function (){var statearr_28809 = state_28807;
(statearr_28809[(7)] = inst_28784);

(statearr_28809[(8)] = inst_28782);

(statearr_28809[(9)] = inst_28783);

return statearr_28809;
})();
var statearr_28810_28823 = state_28807__$1;
(statearr_28810_28823[(2)] = null);

(statearr_28810_28823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28808 === (2))){
var inst_28790 = (state_28807[(10)]);
var inst_28784 = (state_28807[(7)]);
var inst_28789 = cljs.core.seq.call(null,inst_28784);
var inst_28790__$1 = cljs.core.first.call(null,inst_28789);
var inst_28791 = cljs.core.next.call(null,inst_28789);
var inst_28792 = (inst_28790__$1 == null);
var inst_28793 = cljs.core.not.call(null,inst_28792);
var state_28807__$1 = (function (){var statearr_28811 = state_28807;
(statearr_28811[(10)] = inst_28790__$1);

(statearr_28811[(11)] = inst_28791);

return statearr_28811;
})();
if(inst_28793){
var statearr_28812_28824 = state_28807__$1;
(statearr_28812_28824[(1)] = (4));

} else {
var statearr_28813_28825 = state_28807__$1;
(statearr_28813_28825[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28808 === (3))){
var inst_28805 = (state_28807[(2)]);
var state_28807__$1 = state_28807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28807__$1,inst_28805);
} else {
if((state_val_28808 === (4))){
var inst_28790 = (state_28807[(10)]);
var inst_28795 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28790);
var state_28807__$1 = state_28807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28807__$1,(7),inst_28795);
} else {
if((state_val_28808 === (5))){
var inst_28801 = cljs.core.async.close_BANG_.call(null,out);
var state_28807__$1 = state_28807;
var statearr_28814_28826 = state_28807__$1;
(statearr_28814_28826[(2)] = inst_28801);

(statearr_28814_28826[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28808 === (6))){
var inst_28803 = (state_28807[(2)]);
var state_28807__$1 = state_28807;
var statearr_28815_28827 = state_28807__$1;
(statearr_28815_28827[(2)] = inst_28803);

(statearr_28815_28827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28808 === (7))){
var inst_28791 = (state_28807[(11)]);
var inst_28797 = (state_28807[(2)]);
var inst_28798 = cljs.core.async.put_BANG_.call(null,out,inst_28797);
var inst_28784 = inst_28791;
var state_28807__$1 = (function (){var statearr_28816 = state_28807;
(statearr_28816[(7)] = inst_28784);

(statearr_28816[(12)] = inst_28798);

return statearr_28816;
})();
var statearr_28817_28828 = state_28807__$1;
(statearr_28817_28828[(2)] = null);

(statearr_28817_28828[(1)] = (2));


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
});})(c__25257__auto___28822,out))
;
return ((function (switch__25162__auto__,c__25257__auto___28822,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25163__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25163__auto____0 = (function (){
var statearr_28818 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28818[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25163__auto__);

(statearr_28818[(1)] = (1));

return statearr_28818;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25163__auto____1 = (function (state_28807){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_28807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e28819){if((e28819 instanceof Object)){
var ex__25166__auto__ = e28819;
var statearr_28820_28829 = state_28807;
(statearr_28820_28829[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28830 = state_28807;
state_28807 = G__28830;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25163__auto__ = function(state_28807){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25163__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25163__auto____1.call(this,state_28807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25163__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25163__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___28822,out))
})();
var state__25259__auto__ = (function (){var statearr_28821 = f__25258__auto__.call(null);
(statearr_28821[(6)] = c__25257__auto___28822);

return statearr_28821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___28822,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28831,opts){
var map__28832 = p__28831;
var map__28832__$1 = (((((!((map__28832 == null))))?(((((map__28832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28832):map__28832);
var eval_body = cljs.core.get.call(null,map__28832__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28832__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28834){var e = e28834;
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
return (function (p1__28835_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28835_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28836){
var vec__28837 = p__28836;
var k = cljs.core.nth.call(null,vec__28837,(0),null);
var v = cljs.core.nth.call(null,vec__28837,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28840){
var vec__28841 = p__28840;
var k = cljs.core.nth.call(null,vec__28841,(0),null);
var v = cljs.core.nth.call(null,vec__28841,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28847,p__28848){
var map__28849 = p__28847;
var map__28849__$1 = (((((!((map__28849 == null))))?(((((map__28849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28849):map__28849);
var opts = map__28849__$1;
var before_jsload = cljs.core.get.call(null,map__28849__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28849__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28849__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28850 = p__28848;
var map__28850__$1 = (((((!((map__28850 == null))))?(((((map__28850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28850):map__28850);
var msg = map__28850__$1;
var files = cljs.core.get.call(null,map__28850__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28850__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28850__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29004){
var state_val_29005 = (state_29004[(1)]);
if((state_val_29005 === (7))){
var inst_28867 = (state_29004[(7)]);
var inst_28864 = (state_29004[(8)]);
var inst_28866 = (state_29004[(9)]);
var inst_28865 = (state_29004[(10)]);
var inst_28872 = cljs.core._nth.call(null,inst_28865,inst_28867);
var inst_28873 = figwheel.client.file_reloading.eval_body.call(null,inst_28872,opts);
var inst_28874 = (inst_28867 + (1));
var tmp29006 = inst_28864;
var tmp29007 = inst_28866;
var tmp29008 = inst_28865;
var inst_28864__$1 = tmp29006;
var inst_28865__$1 = tmp29008;
var inst_28866__$1 = tmp29007;
var inst_28867__$1 = inst_28874;
var state_29004__$1 = (function (){var statearr_29009 = state_29004;
(statearr_29009[(7)] = inst_28867__$1);

(statearr_29009[(8)] = inst_28864__$1);

(statearr_29009[(9)] = inst_28866__$1);

(statearr_29009[(11)] = inst_28873);

(statearr_29009[(10)] = inst_28865__$1);

return statearr_29009;
})();
var statearr_29010_29093 = state_29004__$1;
(statearr_29010_29093[(2)] = null);

(statearr_29010_29093[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (20))){
var inst_28907 = (state_29004[(12)]);
var inst_28915 = figwheel.client.file_reloading.sort_files.call(null,inst_28907);
var state_29004__$1 = state_29004;
var statearr_29011_29094 = state_29004__$1;
(statearr_29011_29094[(2)] = inst_28915);

(statearr_29011_29094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (27))){
var state_29004__$1 = state_29004;
var statearr_29012_29095 = state_29004__$1;
(statearr_29012_29095[(2)] = null);

(statearr_29012_29095[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (1))){
var inst_28856 = (state_29004[(13)]);
var inst_28853 = before_jsload.call(null,files);
var inst_28854 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28855 = (function (){return ((function (inst_28856,inst_28853,inst_28854,state_val_29005,c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28844_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28844_SHARP_);
});
;})(inst_28856,inst_28853,inst_28854,state_val_29005,c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28856__$1 = cljs.core.filter.call(null,inst_28855,files);
var inst_28857 = cljs.core.not_empty.call(null,inst_28856__$1);
var state_29004__$1 = (function (){var statearr_29013 = state_29004;
(statearr_29013[(14)] = inst_28854);

(statearr_29013[(15)] = inst_28853);

(statearr_29013[(13)] = inst_28856__$1);

return statearr_29013;
})();
if(cljs.core.truth_(inst_28857)){
var statearr_29014_29096 = state_29004__$1;
(statearr_29014_29096[(1)] = (2));

} else {
var statearr_29015_29097 = state_29004__$1;
(statearr_29015_29097[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (24))){
var state_29004__$1 = state_29004;
var statearr_29016_29098 = state_29004__$1;
(statearr_29016_29098[(2)] = null);

(statearr_29016_29098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (39))){
var inst_28957 = (state_29004[(16)]);
var state_29004__$1 = state_29004;
var statearr_29017_29099 = state_29004__$1;
(statearr_29017_29099[(2)] = inst_28957);

(statearr_29017_29099[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (46))){
var inst_28999 = (state_29004[(2)]);
var state_29004__$1 = state_29004;
var statearr_29018_29100 = state_29004__$1;
(statearr_29018_29100[(2)] = inst_28999);

(statearr_29018_29100[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (4))){
var inst_28901 = (state_29004[(2)]);
var inst_28902 = cljs.core.List.EMPTY;
var inst_28903 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28902);
var inst_28904 = (function (){return ((function (inst_28901,inst_28902,inst_28903,state_val_29005,c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28845_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28845_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28845_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28845_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_28901,inst_28902,inst_28903,state_val_29005,c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28905 = cljs.core.filter.call(null,inst_28904,files);
var inst_28906 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28907 = cljs.core.concat.call(null,inst_28905,inst_28906);
var state_29004__$1 = (function (){var statearr_29019 = state_29004;
(statearr_29019[(17)] = inst_28903);

(statearr_29019[(12)] = inst_28907);

(statearr_29019[(18)] = inst_28901);

return statearr_29019;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29020_29101 = state_29004__$1;
(statearr_29020_29101[(1)] = (16));

} else {
var statearr_29021_29102 = state_29004__$1;
(statearr_29021_29102[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (15))){
var inst_28891 = (state_29004[(2)]);
var state_29004__$1 = state_29004;
var statearr_29022_29103 = state_29004__$1;
(statearr_29022_29103[(2)] = inst_28891);

(statearr_29022_29103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (21))){
var inst_28917 = (state_29004[(19)]);
var inst_28917__$1 = (state_29004[(2)]);
var inst_28918 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28917__$1);
var state_29004__$1 = (function (){var statearr_29023 = state_29004;
(statearr_29023[(19)] = inst_28917__$1);

return statearr_29023;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29004__$1,(22),inst_28918);
} else {
if((state_val_29005 === (31))){
var inst_29002 = (state_29004[(2)]);
var state_29004__$1 = state_29004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29004__$1,inst_29002);
} else {
if((state_val_29005 === (32))){
var inst_28957 = (state_29004[(16)]);
var inst_28962 = inst_28957.cljs$lang$protocol_mask$partition0$;
var inst_28963 = (inst_28962 & (64));
var inst_28964 = inst_28957.cljs$core$ISeq$;
var inst_28965 = (cljs.core.PROTOCOL_SENTINEL === inst_28964);
var inst_28966 = ((inst_28963) || (inst_28965));
var state_29004__$1 = state_29004;
if(cljs.core.truth_(inst_28966)){
var statearr_29024_29104 = state_29004__$1;
(statearr_29024_29104[(1)] = (35));

} else {
var statearr_29025_29105 = state_29004__$1;
(statearr_29025_29105[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (40))){
var inst_28979 = (state_29004[(20)]);
var inst_28978 = (state_29004[(2)]);
var inst_28979__$1 = cljs.core.get.call(null,inst_28978,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28980 = cljs.core.get.call(null,inst_28978,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28981 = cljs.core.not_empty.call(null,inst_28979__$1);
var state_29004__$1 = (function (){var statearr_29026 = state_29004;
(statearr_29026[(21)] = inst_28980);

(statearr_29026[(20)] = inst_28979__$1);

return statearr_29026;
})();
if(cljs.core.truth_(inst_28981)){
var statearr_29027_29106 = state_29004__$1;
(statearr_29027_29106[(1)] = (41));

} else {
var statearr_29028_29107 = state_29004__$1;
(statearr_29028_29107[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (33))){
var state_29004__$1 = state_29004;
var statearr_29029_29108 = state_29004__$1;
(statearr_29029_29108[(2)] = false);

(statearr_29029_29108[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (13))){
var inst_28877 = (state_29004[(22)]);
var inst_28881 = cljs.core.chunk_first.call(null,inst_28877);
var inst_28882 = cljs.core.chunk_rest.call(null,inst_28877);
var inst_28883 = cljs.core.count.call(null,inst_28881);
var inst_28864 = inst_28882;
var inst_28865 = inst_28881;
var inst_28866 = inst_28883;
var inst_28867 = (0);
var state_29004__$1 = (function (){var statearr_29030 = state_29004;
(statearr_29030[(7)] = inst_28867);

(statearr_29030[(8)] = inst_28864);

(statearr_29030[(9)] = inst_28866);

(statearr_29030[(10)] = inst_28865);

return statearr_29030;
})();
var statearr_29031_29109 = state_29004__$1;
(statearr_29031_29109[(2)] = null);

(statearr_29031_29109[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (22))){
var inst_28921 = (state_29004[(23)]);
var inst_28920 = (state_29004[(24)]);
var inst_28925 = (state_29004[(25)]);
var inst_28917 = (state_29004[(19)]);
var inst_28920__$1 = (state_29004[(2)]);
var inst_28921__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28920__$1);
var inst_28922 = (function (){var all_files = inst_28917;
var res_SINGLEQUOTE_ = inst_28920__$1;
var res = inst_28921__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28921,inst_28920,inst_28925,inst_28917,inst_28920__$1,inst_28921__$1,state_val_29005,c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28846_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28846_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28921,inst_28920,inst_28925,inst_28917,inst_28920__$1,inst_28921__$1,state_val_29005,c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28923 = cljs.core.filter.call(null,inst_28922,inst_28920__$1);
var inst_28924 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28925__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28924);
var inst_28926 = cljs.core.not_empty.call(null,inst_28925__$1);
var state_29004__$1 = (function (){var statearr_29032 = state_29004;
(statearr_29032[(23)] = inst_28921__$1);

(statearr_29032[(24)] = inst_28920__$1);

(statearr_29032[(26)] = inst_28923);

(statearr_29032[(25)] = inst_28925__$1);

return statearr_29032;
})();
if(cljs.core.truth_(inst_28926)){
var statearr_29033_29110 = state_29004__$1;
(statearr_29033_29110[(1)] = (23));

} else {
var statearr_29034_29111 = state_29004__$1;
(statearr_29034_29111[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (36))){
var state_29004__$1 = state_29004;
var statearr_29035_29112 = state_29004__$1;
(statearr_29035_29112[(2)] = false);

(statearr_29035_29112[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (41))){
var inst_28979 = (state_29004[(20)]);
var inst_28983 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28984 = cljs.core.map.call(null,inst_28983,inst_28979);
var inst_28985 = cljs.core.pr_str.call(null,inst_28984);
var inst_28986 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28985)].join('');
var inst_28987 = figwheel.client.utils.log.call(null,inst_28986);
var state_29004__$1 = state_29004;
var statearr_29036_29113 = state_29004__$1;
(statearr_29036_29113[(2)] = inst_28987);

(statearr_29036_29113[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (43))){
var inst_28980 = (state_29004[(21)]);
var inst_28990 = (state_29004[(2)]);
var inst_28991 = cljs.core.not_empty.call(null,inst_28980);
var state_29004__$1 = (function (){var statearr_29037 = state_29004;
(statearr_29037[(27)] = inst_28990);

return statearr_29037;
})();
if(cljs.core.truth_(inst_28991)){
var statearr_29038_29114 = state_29004__$1;
(statearr_29038_29114[(1)] = (44));

} else {
var statearr_29039_29115 = state_29004__$1;
(statearr_29039_29115[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (29))){
var inst_28921 = (state_29004[(23)]);
var inst_28920 = (state_29004[(24)]);
var inst_28957 = (state_29004[(16)]);
var inst_28923 = (state_29004[(26)]);
var inst_28925 = (state_29004[(25)]);
var inst_28917 = (state_29004[(19)]);
var inst_28953 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28956 = (function (){var all_files = inst_28917;
var res_SINGLEQUOTE_ = inst_28920;
var res = inst_28921;
var files_not_loaded = inst_28923;
var dependencies_that_loaded = inst_28925;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28921,inst_28920,inst_28957,inst_28923,inst_28925,inst_28917,inst_28953,state_val_29005,c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28955){
var map__29040 = p__28955;
var map__29040__$1 = (((((!((map__29040 == null))))?(((((map__29040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29040):map__29040);
var namespace = cljs.core.get.call(null,map__29040__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28921,inst_28920,inst_28957,inst_28923,inst_28925,inst_28917,inst_28953,state_val_29005,c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28957__$1 = cljs.core.group_by.call(null,inst_28956,inst_28923);
var inst_28959 = (inst_28957__$1 == null);
var inst_28960 = cljs.core.not.call(null,inst_28959);
var state_29004__$1 = (function (){var statearr_29042 = state_29004;
(statearr_29042[(16)] = inst_28957__$1);

(statearr_29042[(28)] = inst_28953);

return statearr_29042;
})();
if(inst_28960){
var statearr_29043_29116 = state_29004__$1;
(statearr_29043_29116[(1)] = (32));

} else {
var statearr_29044_29117 = state_29004__$1;
(statearr_29044_29117[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (44))){
var inst_28980 = (state_29004[(21)]);
var inst_28993 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28980);
var inst_28994 = cljs.core.pr_str.call(null,inst_28993);
var inst_28995 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28994)].join('');
var inst_28996 = figwheel.client.utils.log.call(null,inst_28995);
var state_29004__$1 = state_29004;
var statearr_29045_29118 = state_29004__$1;
(statearr_29045_29118[(2)] = inst_28996);

(statearr_29045_29118[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (6))){
var inst_28898 = (state_29004[(2)]);
var state_29004__$1 = state_29004;
var statearr_29046_29119 = state_29004__$1;
(statearr_29046_29119[(2)] = inst_28898);

(statearr_29046_29119[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (28))){
var inst_28923 = (state_29004[(26)]);
var inst_28950 = (state_29004[(2)]);
var inst_28951 = cljs.core.not_empty.call(null,inst_28923);
var state_29004__$1 = (function (){var statearr_29047 = state_29004;
(statearr_29047[(29)] = inst_28950);

return statearr_29047;
})();
if(cljs.core.truth_(inst_28951)){
var statearr_29048_29120 = state_29004__$1;
(statearr_29048_29120[(1)] = (29));

} else {
var statearr_29049_29121 = state_29004__$1;
(statearr_29049_29121[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (25))){
var inst_28921 = (state_29004[(23)]);
var inst_28937 = (state_29004[(2)]);
var inst_28938 = cljs.core.not_empty.call(null,inst_28921);
var state_29004__$1 = (function (){var statearr_29050 = state_29004;
(statearr_29050[(30)] = inst_28937);

return statearr_29050;
})();
if(cljs.core.truth_(inst_28938)){
var statearr_29051_29122 = state_29004__$1;
(statearr_29051_29122[(1)] = (26));

} else {
var statearr_29052_29123 = state_29004__$1;
(statearr_29052_29123[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (34))){
var inst_28973 = (state_29004[(2)]);
var state_29004__$1 = state_29004;
if(cljs.core.truth_(inst_28973)){
var statearr_29053_29124 = state_29004__$1;
(statearr_29053_29124[(1)] = (38));

} else {
var statearr_29054_29125 = state_29004__$1;
(statearr_29054_29125[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (17))){
var state_29004__$1 = state_29004;
var statearr_29055_29126 = state_29004__$1;
(statearr_29055_29126[(2)] = recompile_dependents);

(statearr_29055_29126[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (3))){
var state_29004__$1 = state_29004;
var statearr_29056_29127 = state_29004__$1;
(statearr_29056_29127[(2)] = null);

(statearr_29056_29127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (12))){
var inst_28894 = (state_29004[(2)]);
var state_29004__$1 = state_29004;
var statearr_29057_29128 = state_29004__$1;
(statearr_29057_29128[(2)] = inst_28894);

(statearr_29057_29128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (2))){
var inst_28856 = (state_29004[(13)]);
var inst_28863 = cljs.core.seq.call(null,inst_28856);
var inst_28864 = inst_28863;
var inst_28865 = null;
var inst_28866 = (0);
var inst_28867 = (0);
var state_29004__$1 = (function (){var statearr_29058 = state_29004;
(statearr_29058[(7)] = inst_28867);

(statearr_29058[(8)] = inst_28864);

(statearr_29058[(9)] = inst_28866);

(statearr_29058[(10)] = inst_28865);

return statearr_29058;
})();
var statearr_29059_29129 = state_29004__$1;
(statearr_29059_29129[(2)] = null);

(statearr_29059_29129[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (23))){
var inst_28921 = (state_29004[(23)]);
var inst_28920 = (state_29004[(24)]);
var inst_28923 = (state_29004[(26)]);
var inst_28925 = (state_29004[(25)]);
var inst_28917 = (state_29004[(19)]);
var inst_28928 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28930 = (function (){var all_files = inst_28917;
var res_SINGLEQUOTE_ = inst_28920;
var res = inst_28921;
var files_not_loaded = inst_28923;
var dependencies_that_loaded = inst_28925;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28921,inst_28920,inst_28923,inst_28925,inst_28917,inst_28928,state_val_29005,c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28929){
var map__29060 = p__28929;
var map__29060__$1 = (((((!((map__29060 == null))))?(((((map__29060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29060):map__29060);
var request_url = cljs.core.get.call(null,map__29060__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28921,inst_28920,inst_28923,inst_28925,inst_28917,inst_28928,state_val_29005,c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28931 = cljs.core.reverse.call(null,inst_28925);
var inst_28932 = cljs.core.map.call(null,inst_28930,inst_28931);
var inst_28933 = cljs.core.pr_str.call(null,inst_28932);
var inst_28934 = figwheel.client.utils.log.call(null,inst_28933);
var state_29004__$1 = (function (){var statearr_29062 = state_29004;
(statearr_29062[(31)] = inst_28928);

return statearr_29062;
})();
var statearr_29063_29130 = state_29004__$1;
(statearr_29063_29130[(2)] = inst_28934);

(statearr_29063_29130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (35))){
var state_29004__$1 = state_29004;
var statearr_29064_29131 = state_29004__$1;
(statearr_29064_29131[(2)] = true);

(statearr_29064_29131[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (19))){
var inst_28907 = (state_29004[(12)]);
var inst_28913 = figwheel.client.file_reloading.expand_files.call(null,inst_28907);
var state_29004__$1 = state_29004;
var statearr_29065_29132 = state_29004__$1;
(statearr_29065_29132[(2)] = inst_28913);

(statearr_29065_29132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (11))){
var state_29004__$1 = state_29004;
var statearr_29066_29133 = state_29004__$1;
(statearr_29066_29133[(2)] = null);

(statearr_29066_29133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (9))){
var inst_28896 = (state_29004[(2)]);
var state_29004__$1 = state_29004;
var statearr_29067_29134 = state_29004__$1;
(statearr_29067_29134[(2)] = inst_28896);

(statearr_29067_29134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (5))){
var inst_28867 = (state_29004[(7)]);
var inst_28866 = (state_29004[(9)]);
var inst_28869 = (inst_28867 < inst_28866);
var inst_28870 = inst_28869;
var state_29004__$1 = state_29004;
if(cljs.core.truth_(inst_28870)){
var statearr_29068_29135 = state_29004__$1;
(statearr_29068_29135[(1)] = (7));

} else {
var statearr_29069_29136 = state_29004__$1;
(statearr_29069_29136[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (14))){
var inst_28877 = (state_29004[(22)]);
var inst_28886 = cljs.core.first.call(null,inst_28877);
var inst_28887 = figwheel.client.file_reloading.eval_body.call(null,inst_28886,opts);
var inst_28888 = cljs.core.next.call(null,inst_28877);
var inst_28864 = inst_28888;
var inst_28865 = null;
var inst_28866 = (0);
var inst_28867 = (0);
var state_29004__$1 = (function (){var statearr_29070 = state_29004;
(statearr_29070[(7)] = inst_28867);

(statearr_29070[(8)] = inst_28864);

(statearr_29070[(9)] = inst_28866);

(statearr_29070[(32)] = inst_28887);

(statearr_29070[(10)] = inst_28865);

return statearr_29070;
})();
var statearr_29071_29137 = state_29004__$1;
(statearr_29071_29137[(2)] = null);

(statearr_29071_29137[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (45))){
var state_29004__$1 = state_29004;
var statearr_29072_29138 = state_29004__$1;
(statearr_29072_29138[(2)] = null);

(statearr_29072_29138[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (26))){
var inst_28921 = (state_29004[(23)]);
var inst_28920 = (state_29004[(24)]);
var inst_28923 = (state_29004[(26)]);
var inst_28925 = (state_29004[(25)]);
var inst_28917 = (state_29004[(19)]);
var inst_28940 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28942 = (function (){var all_files = inst_28917;
var res_SINGLEQUOTE_ = inst_28920;
var res = inst_28921;
var files_not_loaded = inst_28923;
var dependencies_that_loaded = inst_28925;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28921,inst_28920,inst_28923,inst_28925,inst_28917,inst_28940,state_val_29005,c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28941){
var map__29073 = p__28941;
var map__29073__$1 = (((((!((map__29073 == null))))?(((((map__29073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29073):map__29073);
var namespace = cljs.core.get.call(null,map__29073__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29073__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28921,inst_28920,inst_28923,inst_28925,inst_28917,inst_28940,state_val_29005,c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28943 = cljs.core.map.call(null,inst_28942,inst_28921);
var inst_28944 = cljs.core.pr_str.call(null,inst_28943);
var inst_28945 = figwheel.client.utils.log.call(null,inst_28944);
var inst_28946 = (function (){var all_files = inst_28917;
var res_SINGLEQUOTE_ = inst_28920;
var res = inst_28921;
var files_not_loaded = inst_28923;
var dependencies_that_loaded = inst_28925;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28921,inst_28920,inst_28923,inst_28925,inst_28917,inst_28940,inst_28942,inst_28943,inst_28944,inst_28945,state_val_29005,c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28921,inst_28920,inst_28923,inst_28925,inst_28917,inst_28940,inst_28942,inst_28943,inst_28944,inst_28945,state_val_29005,c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28947 = setTimeout(inst_28946,(10));
var state_29004__$1 = (function (){var statearr_29075 = state_29004;
(statearr_29075[(33)] = inst_28940);

(statearr_29075[(34)] = inst_28945);

return statearr_29075;
})();
var statearr_29076_29139 = state_29004__$1;
(statearr_29076_29139[(2)] = inst_28947);

(statearr_29076_29139[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (16))){
var state_29004__$1 = state_29004;
var statearr_29077_29140 = state_29004__$1;
(statearr_29077_29140[(2)] = reload_dependents);

(statearr_29077_29140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (38))){
var inst_28957 = (state_29004[(16)]);
var inst_28975 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28957);
var state_29004__$1 = state_29004;
var statearr_29078_29141 = state_29004__$1;
(statearr_29078_29141[(2)] = inst_28975);

(statearr_29078_29141[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (30))){
var state_29004__$1 = state_29004;
var statearr_29079_29142 = state_29004__$1;
(statearr_29079_29142[(2)] = null);

(statearr_29079_29142[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (10))){
var inst_28877 = (state_29004[(22)]);
var inst_28879 = cljs.core.chunked_seq_QMARK_.call(null,inst_28877);
var state_29004__$1 = state_29004;
if(inst_28879){
var statearr_29080_29143 = state_29004__$1;
(statearr_29080_29143[(1)] = (13));

} else {
var statearr_29081_29144 = state_29004__$1;
(statearr_29081_29144[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (18))){
var inst_28911 = (state_29004[(2)]);
var state_29004__$1 = state_29004;
if(cljs.core.truth_(inst_28911)){
var statearr_29082_29145 = state_29004__$1;
(statearr_29082_29145[(1)] = (19));

} else {
var statearr_29083_29146 = state_29004__$1;
(statearr_29083_29146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (42))){
var state_29004__$1 = state_29004;
var statearr_29084_29147 = state_29004__$1;
(statearr_29084_29147[(2)] = null);

(statearr_29084_29147[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (37))){
var inst_28970 = (state_29004[(2)]);
var state_29004__$1 = state_29004;
var statearr_29085_29148 = state_29004__$1;
(statearr_29085_29148[(2)] = inst_28970);

(statearr_29085_29148[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (8))){
var inst_28864 = (state_29004[(8)]);
var inst_28877 = (state_29004[(22)]);
var inst_28877__$1 = cljs.core.seq.call(null,inst_28864);
var state_29004__$1 = (function (){var statearr_29086 = state_29004;
(statearr_29086[(22)] = inst_28877__$1);

return statearr_29086;
})();
if(inst_28877__$1){
var statearr_29087_29149 = state_29004__$1;
(statearr_29087_29149[(1)] = (10));

} else {
var statearr_29088_29150 = state_29004__$1;
(statearr_29088_29150[(1)] = (11));

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
});})(c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25162__auto__,c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25163__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25163__auto____0 = (function (){
var statearr_29089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29089[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25163__auto__);

(statearr_29089[(1)] = (1));

return statearr_29089;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25163__auto____1 = (function (state_29004){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_29004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e29090){if((e29090 instanceof Object)){
var ex__25166__auto__ = e29090;
var statearr_29091_29151 = state_29004;
(statearr_29091_29151[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29152 = state_29004;
state_29004 = G__29152;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25163__auto__ = function(state_29004){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25163__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25163__auto____1.call(this,state_29004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25163__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25163__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25259__auto__ = (function (){var statearr_29092 = f__25258__auto__.call(null);
(statearr_29092[(6)] = c__25257__auto__);

return statearr_29092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto__,map__28849,map__28849__$1,opts,before_jsload,on_jsload,reload_dependents,map__28850,map__28850__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25257__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29155,link){
var map__29156 = p__29155;
var map__29156__$1 = (((((!((map__29156 == null))))?(((((map__29156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29156):map__29156);
var file = cljs.core.get.call(null,map__29156__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__29156,map__29156__$1,file){
return (function (p1__29153_SHARP_,p2__29154_SHARP_){
if(cljs.core._EQ_.call(null,p1__29153_SHARP_,p2__29154_SHARP_)){
return p1__29153_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__29156,map__29156__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29159){
var map__29160 = p__29159;
var map__29160__$1 = (((((!((map__29160 == null))))?(((((map__29160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29160):map__29160);
var match_length = cljs.core.get.call(null,map__29160__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29160__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29158_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29158_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29162_SHARP_,p2__29163_SHARP_){
return cljs.core.assoc.call(null,p1__29162_SHARP_,cljs.core.get.call(null,p2__29163_SHARP_,key),p2__29163_SHARP_);
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
var loaded_f_datas_29164 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29164);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29164);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29165,p__29166){
var map__29167 = p__29165;
var map__29167__$1 = (((((!((map__29167 == null))))?(((((map__29167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29167):map__29167);
var on_cssload = cljs.core.get.call(null,map__29167__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29168 = p__29166;
var map__29168__$1 = (((((!((map__29168 == null))))?(((((map__29168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29168):map__29168);
var files_msg = map__29168__$1;
var files = cljs.core.get.call(null,map__29168__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1546164290052
