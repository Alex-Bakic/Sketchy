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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27925_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27925_SHARP_));
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
var seq__27926 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27927 = null;
var count__27928 = (0);
var i__27929 = (0);
while(true){
if((i__27929 < count__27928)){
var n = cljs.core._nth.call(null,chunk__27927,i__27929);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27930 = seq__27926;
var G__27931 = chunk__27927;
var G__27932 = count__27928;
var G__27933 = (i__27929 + (1));
seq__27926 = G__27930;
chunk__27927 = G__27931;
count__27928 = G__27932;
i__27929 = G__27933;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27926);
if(temp__5457__auto__){
var seq__27926__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27926__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__27926__$1);
var G__27934 = cljs.core.chunk_rest.call(null,seq__27926__$1);
var G__27935 = c__4461__auto__;
var G__27936 = cljs.core.count.call(null,c__4461__auto__);
var G__27937 = (0);
seq__27926 = G__27934;
chunk__27927 = G__27935;
count__27928 = G__27936;
i__27929 = G__27937;
continue;
} else {
var n = cljs.core.first.call(null,seq__27926__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27938 = cljs.core.next.call(null,seq__27926__$1);
var G__27939 = null;
var G__27940 = (0);
var G__27941 = (0);
seq__27926 = G__27938;
chunk__27927 = G__27939;
count__27928 = G__27940;
i__27929 = G__27941;
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
return cljs.core.some.call(null,(function (p__27942){
var vec__27943 = p__27942;
var _ = cljs.core.nth.call(null,vec__27943,(0),null);
var v = cljs.core.nth.call(null,vec__27943,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__27946){
var vec__27947 = p__27946;
var k = cljs.core.nth.call(null,vec__27947,(0),null);
var v = cljs.core.nth.call(null,vec__27947,(1),null);
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

var seq__27959_27967 = cljs.core.seq.call(null,deps);
var chunk__27960_27968 = null;
var count__27961_27969 = (0);
var i__27962_27970 = (0);
while(true){
if((i__27962_27970 < count__27961_27969)){
var dep_27971 = cljs.core._nth.call(null,chunk__27960_27968,i__27962_27970);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_27971;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27971));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27971,(depth + (1)),state);
} else {
}


var G__27972 = seq__27959_27967;
var G__27973 = chunk__27960_27968;
var G__27974 = count__27961_27969;
var G__27975 = (i__27962_27970 + (1));
seq__27959_27967 = G__27972;
chunk__27960_27968 = G__27973;
count__27961_27969 = G__27974;
i__27962_27970 = G__27975;
continue;
} else {
var temp__5457__auto___27976 = cljs.core.seq.call(null,seq__27959_27967);
if(temp__5457__auto___27976){
var seq__27959_27977__$1 = temp__5457__auto___27976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27959_27977__$1)){
var c__4461__auto___27978 = cljs.core.chunk_first.call(null,seq__27959_27977__$1);
var G__27979 = cljs.core.chunk_rest.call(null,seq__27959_27977__$1);
var G__27980 = c__4461__auto___27978;
var G__27981 = cljs.core.count.call(null,c__4461__auto___27978);
var G__27982 = (0);
seq__27959_27967 = G__27979;
chunk__27960_27968 = G__27980;
count__27961_27969 = G__27981;
i__27962_27970 = G__27982;
continue;
} else {
var dep_27983 = cljs.core.first.call(null,seq__27959_27977__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_27983;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27983));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27983,(depth + (1)),state);
} else {
}


var G__27984 = cljs.core.next.call(null,seq__27959_27977__$1);
var G__27985 = null;
var G__27986 = (0);
var G__27987 = (0);
seq__27959_27967 = G__27984;
chunk__27960_27968 = G__27985;
count__27961_27969 = G__27986;
i__27962_27970 = G__27987;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27963){
var vec__27964 = p__27963;
var seq__27965 = cljs.core.seq.call(null,vec__27964);
var first__27966 = cljs.core.first.call(null,seq__27965);
var seq__27965__$1 = cljs.core.next.call(null,seq__27965);
var x = first__27966;
var xs = seq__27965__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27964,seq__27965,first__27966,seq__27965__$1,x,xs,get_deps__$1){
return (function (p1__27950_SHARP_){
return clojure.set.difference.call(null,p1__27950_SHARP_,x);
});})(vec__27964,seq__27965,first__27966,seq__27965__$1,x,xs,get_deps__$1))
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
var seq__27988 = cljs.core.seq.call(null,provides);
var chunk__27989 = null;
var count__27990 = (0);
var i__27991 = (0);
while(true){
if((i__27991 < count__27990)){
var prov = cljs.core._nth.call(null,chunk__27989,i__27991);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27992_28000 = cljs.core.seq.call(null,requires);
var chunk__27993_28001 = null;
var count__27994_28002 = (0);
var i__27995_28003 = (0);
while(true){
if((i__27995_28003 < count__27994_28002)){
var req_28004 = cljs.core._nth.call(null,chunk__27993_28001,i__27995_28003);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28004,prov);


var G__28005 = seq__27992_28000;
var G__28006 = chunk__27993_28001;
var G__28007 = count__27994_28002;
var G__28008 = (i__27995_28003 + (1));
seq__27992_28000 = G__28005;
chunk__27993_28001 = G__28006;
count__27994_28002 = G__28007;
i__27995_28003 = G__28008;
continue;
} else {
var temp__5457__auto___28009 = cljs.core.seq.call(null,seq__27992_28000);
if(temp__5457__auto___28009){
var seq__27992_28010__$1 = temp__5457__auto___28009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27992_28010__$1)){
var c__4461__auto___28011 = cljs.core.chunk_first.call(null,seq__27992_28010__$1);
var G__28012 = cljs.core.chunk_rest.call(null,seq__27992_28010__$1);
var G__28013 = c__4461__auto___28011;
var G__28014 = cljs.core.count.call(null,c__4461__auto___28011);
var G__28015 = (0);
seq__27992_28000 = G__28012;
chunk__27993_28001 = G__28013;
count__27994_28002 = G__28014;
i__27995_28003 = G__28015;
continue;
} else {
var req_28016 = cljs.core.first.call(null,seq__27992_28010__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28016,prov);


var G__28017 = cljs.core.next.call(null,seq__27992_28010__$1);
var G__28018 = null;
var G__28019 = (0);
var G__28020 = (0);
seq__27992_28000 = G__28017;
chunk__27993_28001 = G__28018;
count__27994_28002 = G__28019;
i__27995_28003 = G__28020;
continue;
}
} else {
}
}
break;
}


var G__28021 = seq__27988;
var G__28022 = chunk__27989;
var G__28023 = count__27990;
var G__28024 = (i__27991 + (1));
seq__27988 = G__28021;
chunk__27989 = G__28022;
count__27990 = G__28023;
i__27991 = G__28024;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27988);
if(temp__5457__auto__){
var seq__27988__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27988__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__27988__$1);
var G__28025 = cljs.core.chunk_rest.call(null,seq__27988__$1);
var G__28026 = c__4461__auto__;
var G__28027 = cljs.core.count.call(null,c__4461__auto__);
var G__28028 = (0);
seq__27988 = G__28025;
chunk__27989 = G__28026;
count__27990 = G__28027;
i__27991 = G__28028;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27988__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27996_28029 = cljs.core.seq.call(null,requires);
var chunk__27997_28030 = null;
var count__27998_28031 = (0);
var i__27999_28032 = (0);
while(true){
if((i__27999_28032 < count__27998_28031)){
var req_28033 = cljs.core._nth.call(null,chunk__27997_28030,i__27999_28032);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28033,prov);


var G__28034 = seq__27996_28029;
var G__28035 = chunk__27997_28030;
var G__28036 = count__27998_28031;
var G__28037 = (i__27999_28032 + (1));
seq__27996_28029 = G__28034;
chunk__27997_28030 = G__28035;
count__27998_28031 = G__28036;
i__27999_28032 = G__28037;
continue;
} else {
var temp__5457__auto___28038__$1 = cljs.core.seq.call(null,seq__27996_28029);
if(temp__5457__auto___28038__$1){
var seq__27996_28039__$1 = temp__5457__auto___28038__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27996_28039__$1)){
var c__4461__auto___28040 = cljs.core.chunk_first.call(null,seq__27996_28039__$1);
var G__28041 = cljs.core.chunk_rest.call(null,seq__27996_28039__$1);
var G__28042 = c__4461__auto___28040;
var G__28043 = cljs.core.count.call(null,c__4461__auto___28040);
var G__28044 = (0);
seq__27996_28029 = G__28041;
chunk__27997_28030 = G__28042;
count__27998_28031 = G__28043;
i__27999_28032 = G__28044;
continue;
} else {
var req_28045 = cljs.core.first.call(null,seq__27996_28039__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28045,prov);


var G__28046 = cljs.core.next.call(null,seq__27996_28039__$1);
var G__28047 = null;
var G__28048 = (0);
var G__28049 = (0);
seq__27996_28029 = G__28046;
chunk__27997_28030 = G__28047;
count__27998_28031 = G__28048;
i__27999_28032 = G__28049;
continue;
}
} else {
}
}
break;
}


var G__28050 = cljs.core.next.call(null,seq__27988__$1);
var G__28051 = null;
var G__28052 = (0);
var G__28053 = (0);
seq__27988 = G__28050;
chunk__27989 = G__28051;
count__27990 = G__28052;
i__27991 = G__28053;
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
var seq__28054_28058 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28055_28059 = null;
var count__28056_28060 = (0);
var i__28057_28061 = (0);
while(true){
if((i__28057_28061 < count__28056_28060)){
var ns_28062 = cljs.core._nth.call(null,chunk__28055_28059,i__28057_28061);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28062);


var G__28063 = seq__28054_28058;
var G__28064 = chunk__28055_28059;
var G__28065 = count__28056_28060;
var G__28066 = (i__28057_28061 + (1));
seq__28054_28058 = G__28063;
chunk__28055_28059 = G__28064;
count__28056_28060 = G__28065;
i__28057_28061 = G__28066;
continue;
} else {
var temp__5457__auto___28067 = cljs.core.seq.call(null,seq__28054_28058);
if(temp__5457__auto___28067){
var seq__28054_28068__$1 = temp__5457__auto___28067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28054_28068__$1)){
var c__4461__auto___28069 = cljs.core.chunk_first.call(null,seq__28054_28068__$1);
var G__28070 = cljs.core.chunk_rest.call(null,seq__28054_28068__$1);
var G__28071 = c__4461__auto___28069;
var G__28072 = cljs.core.count.call(null,c__4461__auto___28069);
var G__28073 = (0);
seq__28054_28058 = G__28070;
chunk__28055_28059 = G__28071;
count__28056_28060 = G__28072;
i__28057_28061 = G__28073;
continue;
} else {
var ns_28074 = cljs.core.first.call(null,seq__28054_28068__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28074);


var G__28075 = cljs.core.next.call(null,seq__28054_28068__$1);
var G__28076 = null;
var G__28077 = (0);
var G__28078 = (0);
seq__28054_28058 = G__28075;
chunk__28055_28059 = G__28076;
count__28056_28060 = G__28077;
i__28057_28061 = G__28078;
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
var G__28079__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28079 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28080__i = 0, G__28080__a = new Array(arguments.length -  0);
while (G__28080__i < G__28080__a.length) {G__28080__a[G__28080__i] = arguments[G__28080__i + 0]; ++G__28080__i;}
  args = new cljs.core.IndexedSeq(G__28080__a,0,null);
} 
return G__28079__delegate.call(this,args);};
G__28079.cljs$lang$maxFixedArity = 0;
G__28079.cljs$lang$applyTo = (function (arglist__28081){
var args = cljs.core.seq(arglist__28081);
return G__28079__delegate(args);
});
G__28079.cljs$core$IFn$_invoke$arity$variadic = G__28079__delegate;
return G__28079;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28082_SHARP_,p2__28083_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28082_SHARP_)),p2__28083_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28084_SHARP_,p2__28085_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28084_SHARP_),p2__28085_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28086 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28086.addCallback(((function (G__28086){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28086))
);

G__28086.addErrback(((function (G__28086){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28086))
);

return G__28086;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28087){if((e28087 instanceof Error)){
var e = e28087;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28087;

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
}catch (e28088){if((e28088 instanceof Error)){
var e = e28088;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28088;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28089 = cljs.core._EQ_;
var expr__28090 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28089.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28090))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28089.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28090))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28089.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28090))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28089,expr__28090){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28089,expr__28090))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28092,callback){
var map__28093 = p__28092;
var map__28093__$1 = (((((!((map__28093 == null))))?(((((map__28093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28093):map__28093);
var file_msg = map__28093__$1;
var request_url = cljs.core.get.call(null,map__28093__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28093,map__28093__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28093,map__28093__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto__){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto__){
return (function (state_28131){
var state_val_28132 = (state_28131[(1)]);
if((state_val_28132 === (7))){
var inst_28127 = (state_28131[(2)]);
var state_28131__$1 = state_28131;
var statearr_28133_28159 = state_28131__$1;
(statearr_28133_28159[(2)] = inst_28127);

(statearr_28133_28159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (1))){
var state_28131__$1 = state_28131;
var statearr_28134_28160 = state_28131__$1;
(statearr_28134_28160[(2)] = null);

(statearr_28134_28160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (4))){
var inst_28097 = (state_28131[(7)]);
var inst_28097__$1 = (state_28131[(2)]);
var state_28131__$1 = (function (){var statearr_28135 = state_28131;
(statearr_28135[(7)] = inst_28097__$1);

return statearr_28135;
})();
if(cljs.core.truth_(inst_28097__$1)){
var statearr_28136_28161 = state_28131__$1;
(statearr_28136_28161[(1)] = (5));

} else {
var statearr_28137_28162 = state_28131__$1;
(statearr_28137_28162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (15))){
var inst_28112 = (state_28131[(8)]);
var inst_28110 = (state_28131[(9)]);
var inst_28114 = inst_28112.call(null,inst_28110);
var state_28131__$1 = state_28131;
var statearr_28138_28163 = state_28131__$1;
(statearr_28138_28163[(2)] = inst_28114);

(statearr_28138_28163[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (13))){
var inst_28121 = (state_28131[(2)]);
var state_28131__$1 = state_28131;
var statearr_28139_28164 = state_28131__$1;
(statearr_28139_28164[(2)] = inst_28121);

(statearr_28139_28164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (6))){
var state_28131__$1 = state_28131;
var statearr_28140_28165 = state_28131__$1;
(statearr_28140_28165[(2)] = null);

(statearr_28140_28165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (17))){
var inst_28118 = (state_28131[(2)]);
var state_28131__$1 = state_28131;
var statearr_28141_28166 = state_28131__$1;
(statearr_28141_28166[(2)] = inst_28118);

(statearr_28141_28166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (3))){
var inst_28129 = (state_28131[(2)]);
var state_28131__$1 = state_28131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28131__$1,inst_28129);
} else {
if((state_val_28132 === (12))){
var state_28131__$1 = state_28131;
var statearr_28142_28167 = state_28131__$1;
(statearr_28142_28167[(2)] = null);

(statearr_28142_28167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (2))){
var state_28131__$1 = state_28131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28131__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28132 === (11))){
var inst_28102 = (state_28131[(10)]);
var inst_28108 = figwheel.client.file_reloading.blocking_load.call(null,inst_28102);
var state_28131__$1 = state_28131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28131__$1,(14),inst_28108);
} else {
if((state_val_28132 === (9))){
var inst_28102 = (state_28131[(10)]);
var state_28131__$1 = state_28131;
if(cljs.core.truth_(inst_28102)){
var statearr_28143_28168 = state_28131__$1;
(statearr_28143_28168[(1)] = (11));

} else {
var statearr_28144_28169 = state_28131__$1;
(statearr_28144_28169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (5))){
var inst_28097 = (state_28131[(7)]);
var inst_28103 = (state_28131[(11)]);
var inst_28102 = cljs.core.nth.call(null,inst_28097,(0),null);
var inst_28103__$1 = cljs.core.nth.call(null,inst_28097,(1),null);
var state_28131__$1 = (function (){var statearr_28145 = state_28131;
(statearr_28145[(10)] = inst_28102);

(statearr_28145[(11)] = inst_28103__$1);

return statearr_28145;
})();
if(cljs.core.truth_(inst_28103__$1)){
var statearr_28146_28170 = state_28131__$1;
(statearr_28146_28170[(1)] = (8));

} else {
var statearr_28147_28171 = state_28131__$1;
(statearr_28147_28171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (14))){
var inst_28102 = (state_28131[(10)]);
var inst_28112 = (state_28131[(8)]);
var inst_28110 = (state_28131[(2)]);
var inst_28111 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28112__$1 = cljs.core.get.call(null,inst_28111,inst_28102);
var state_28131__$1 = (function (){var statearr_28148 = state_28131;
(statearr_28148[(8)] = inst_28112__$1);

(statearr_28148[(9)] = inst_28110);

return statearr_28148;
})();
if(cljs.core.truth_(inst_28112__$1)){
var statearr_28149_28172 = state_28131__$1;
(statearr_28149_28172[(1)] = (15));

} else {
var statearr_28150_28173 = state_28131__$1;
(statearr_28150_28173[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (16))){
var inst_28110 = (state_28131[(9)]);
var inst_28116 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28110);
var state_28131__$1 = state_28131;
var statearr_28151_28174 = state_28131__$1;
(statearr_28151_28174[(2)] = inst_28116);

(statearr_28151_28174[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (10))){
var inst_28123 = (state_28131[(2)]);
var state_28131__$1 = (function (){var statearr_28152 = state_28131;
(statearr_28152[(12)] = inst_28123);

return statearr_28152;
})();
var statearr_28153_28175 = state_28131__$1;
(statearr_28153_28175[(2)] = null);

(statearr_28153_28175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (8))){
var inst_28103 = (state_28131[(11)]);
var inst_28105 = eval(inst_28103);
var state_28131__$1 = state_28131;
var statearr_28154_28176 = state_28131__$1;
(statearr_28154_28176[(2)] = inst_28105);

(statearr_28154_28176[(1)] = (10));


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
});})(c__24575__auto__))
;
return ((function (switch__24480__auto__,c__24575__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24481__auto__ = null;
var figwheel$client$file_reloading$state_machine__24481__auto____0 = (function (){
var statearr_28155 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28155[(0)] = figwheel$client$file_reloading$state_machine__24481__auto__);

(statearr_28155[(1)] = (1));

return statearr_28155;
});
var figwheel$client$file_reloading$state_machine__24481__auto____1 = (function (state_28131){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_28131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e28156){if((e28156 instanceof Object)){
var ex__24484__auto__ = e28156;
var statearr_28157_28177 = state_28131;
(statearr_28157_28177[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28178 = state_28131;
state_28131 = G__28178;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24481__auto__ = function(state_28131){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24481__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24481__auto____1.call(this,state_28131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24481__auto____0;
figwheel$client$file_reloading$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24481__auto____1;
return figwheel$client$file_reloading$state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto__))
})();
var state__24577__auto__ = (function (){var statearr_28158 = f__24576__auto__.call(null);
(statearr_28158[(6)] = c__24575__auto__);

return statearr_28158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto__))
);

return c__24575__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28180 = arguments.length;
switch (G__28180) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28182,callback){
var map__28183 = p__28182;
var map__28183__$1 = (((((!((map__28183 == null))))?(((((map__28183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28183):map__28183);
var file_msg = map__28183__$1;
var namespace = cljs.core.get.call(null,map__28183__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28183,map__28183__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28183,map__28183__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28185){
var map__28186 = p__28185;
var map__28186__$1 = (((((!((map__28186 == null))))?(((((map__28186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28186):map__28186);
var file_msg = map__28186__$1;
var namespace = cljs.core.get.call(null,map__28186__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28188){
var map__28189 = p__28188;
var map__28189__$1 = (((((!((map__28189 == null))))?(((((map__28189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28189):map__28189);
var file_msg = map__28189__$1;
var namespace = cljs.core.get.call(null,map__28189__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28191,callback){
var map__28192 = p__28191;
var map__28192__$1 = (((((!((map__28192 == null))))?(((((map__28192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28192):map__28192);
var file_msg = map__28192__$1;
var request_url = cljs.core.get.call(null,map__28192__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28192__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24575__auto___28242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___28242,out){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___28242,out){
return (function (state_28227){
var state_val_28228 = (state_28227[(1)]);
if((state_val_28228 === (1))){
var inst_28201 = cljs.core.seq.call(null,files);
var inst_28202 = cljs.core.first.call(null,inst_28201);
var inst_28203 = cljs.core.next.call(null,inst_28201);
var inst_28204 = files;
var state_28227__$1 = (function (){var statearr_28229 = state_28227;
(statearr_28229[(7)] = inst_28202);

(statearr_28229[(8)] = inst_28204);

(statearr_28229[(9)] = inst_28203);

return statearr_28229;
})();
var statearr_28230_28243 = state_28227__$1;
(statearr_28230_28243[(2)] = null);

(statearr_28230_28243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (2))){
var inst_28204 = (state_28227[(8)]);
var inst_28210 = (state_28227[(10)]);
var inst_28209 = cljs.core.seq.call(null,inst_28204);
var inst_28210__$1 = cljs.core.first.call(null,inst_28209);
var inst_28211 = cljs.core.next.call(null,inst_28209);
var inst_28212 = (inst_28210__$1 == null);
var inst_28213 = cljs.core.not.call(null,inst_28212);
var state_28227__$1 = (function (){var statearr_28231 = state_28227;
(statearr_28231[(11)] = inst_28211);

(statearr_28231[(10)] = inst_28210__$1);

return statearr_28231;
})();
if(inst_28213){
var statearr_28232_28244 = state_28227__$1;
(statearr_28232_28244[(1)] = (4));

} else {
var statearr_28233_28245 = state_28227__$1;
(statearr_28233_28245[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (3))){
var inst_28225 = (state_28227[(2)]);
var state_28227__$1 = state_28227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28227__$1,inst_28225);
} else {
if((state_val_28228 === (4))){
var inst_28210 = (state_28227[(10)]);
var inst_28215 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28210);
var state_28227__$1 = state_28227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28227__$1,(7),inst_28215);
} else {
if((state_val_28228 === (5))){
var inst_28221 = cljs.core.async.close_BANG_.call(null,out);
var state_28227__$1 = state_28227;
var statearr_28234_28246 = state_28227__$1;
(statearr_28234_28246[(2)] = inst_28221);

(statearr_28234_28246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (6))){
var inst_28223 = (state_28227[(2)]);
var state_28227__$1 = state_28227;
var statearr_28235_28247 = state_28227__$1;
(statearr_28235_28247[(2)] = inst_28223);

(statearr_28235_28247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (7))){
var inst_28211 = (state_28227[(11)]);
var inst_28217 = (state_28227[(2)]);
var inst_28218 = cljs.core.async.put_BANG_.call(null,out,inst_28217);
var inst_28204 = inst_28211;
var state_28227__$1 = (function (){var statearr_28236 = state_28227;
(statearr_28236[(12)] = inst_28218);

(statearr_28236[(8)] = inst_28204);

return statearr_28236;
})();
var statearr_28237_28248 = state_28227__$1;
(statearr_28237_28248[(2)] = null);

(statearr_28237_28248[(1)] = (2));


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
});})(c__24575__auto___28242,out))
;
return ((function (switch__24480__auto__,c__24575__auto___28242,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24481__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24481__auto____0 = (function (){
var statearr_28238 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28238[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24481__auto__);

(statearr_28238[(1)] = (1));

return statearr_28238;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24481__auto____1 = (function (state_28227){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_28227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e28239){if((e28239 instanceof Object)){
var ex__24484__auto__ = e28239;
var statearr_28240_28249 = state_28227;
(statearr_28240_28249[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28250 = state_28227;
state_28227 = G__28250;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24481__auto__ = function(state_28227){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24481__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24481__auto____1.call(this,state_28227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24481__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24481__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___28242,out))
})();
var state__24577__auto__ = (function (){var statearr_28241 = f__24576__auto__.call(null);
(statearr_28241[(6)] = c__24575__auto___28242);

return statearr_28241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___28242,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28251,opts){
var map__28252 = p__28251;
var map__28252__$1 = (((((!((map__28252 == null))))?(((((map__28252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28252):map__28252);
var eval_body = cljs.core.get.call(null,map__28252__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28252__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28254){var e = e28254;
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
return (function (p1__28255_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28255_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28256){
var vec__28257 = p__28256;
var k = cljs.core.nth.call(null,vec__28257,(0),null);
var v = cljs.core.nth.call(null,vec__28257,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28260){
var vec__28261 = p__28260;
var k = cljs.core.nth.call(null,vec__28261,(0),null);
var v = cljs.core.nth.call(null,vec__28261,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28267,p__28268){
var map__28269 = p__28267;
var map__28269__$1 = (((((!((map__28269 == null))))?(((((map__28269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28269):map__28269);
var opts = map__28269__$1;
var before_jsload = cljs.core.get.call(null,map__28269__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28269__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28269__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28270 = p__28268;
var map__28270__$1 = (((((!((map__28270 == null))))?(((((map__28270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28270):map__28270);
var msg = map__28270__$1;
var files = cljs.core.get.call(null,map__28270__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28270__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28270__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28424){
var state_val_28425 = (state_28424[(1)]);
if((state_val_28425 === (7))){
var inst_28285 = (state_28424[(7)]);
var inst_28287 = (state_28424[(8)]);
var inst_28284 = (state_28424[(9)]);
var inst_28286 = (state_28424[(10)]);
var inst_28292 = cljs.core._nth.call(null,inst_28285,inst_28287);
var inst_28293 = figwheel.client.file_reloading.eval_body.call(null,inst_28292,opts);
var inst_28294 = (inst_28287 + (1));
var tmp28426 = inst_28285;
var tmp28427 = inst_28284;
var tmp28428 = inst_28286;
var inst_28284__$1 = tmp28427;
var inst_28285__$1 = tmp28426;
var inst_28286__$1 = tmp28428;
var inst_28287__$1 = inst_28294;
var state_28424__$1 = (function (){var statearr_28429 = state_28424;
(statearr_28429[(7)] = inst_28285__$1);

(statearr_28429[(11)] = inst_28293);

(statearr_28429[(8)] = inst_28287__$1);

(statearr_28429[(9)] = inst_28284__$1);

(statearr_28429[(10)] = inst_28286__$1);

return statearr_28429;
})();
var statearr_28430_28513 = state_28424__$1;
(statearr_28430_28513[(2)] = null);

(statearr_28430_28513[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (20))){
var inst_28327 = (state_28424[(12)]);
var inst_28335 = figwheel.client.file_reloading.sort_files.call(null,inst_28327);
var state_28424__$1 = state_28424;
var statearr_28431_28514 = state_28424__$1;
(statearr_28431_28514[(2)] = inst_28335);

(statearr_28431_28514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (27))){
var state_28424__$1 = state_28424;
var statearr_28432_28515 = state_28424__$1;
(statearr_28432_28515[(2)] = null);

(statearr_28432_28515[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (1))){
var inst_28276 = (state_28424[(13)]);
var inst_28273 = before_jsload.call(null,files);
var inst_28274 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28275 = (function (){return ((function (inst_28276,inst_28273,inst_28274,state_val_28425,c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28264_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28264_SHARP_);
});
;})(inst_28276,inst_28273,inst_28274,state_val_28425,c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28276__$1 = cljs.core.filter.call(null,inst_28275,files);
var inst_28277 = cljs.core.not_empty.call(null,inst_28276__$1);
var state_28424__$1 = (function (){var statearr_28433 = state_28424;
(statearr_28433[(13)] = inst_28276__$1);

(statearr_28433[(14)] = inst_28273);

(statearr_28433[(15)] = inst_28274);

return statearr_28433;
})();
if(cljs.core.truth_(inst_28277)){
var statearr_28434_28516 = state_28424__$1;
(statearr_28434_28516[(1)] = (2));

} else {
var statearr_28435_28517 = state_28424__$1;
(statearr_28435_28517[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (24))){
var state_28424__$1 = state_28424;
var statearr_28436_28518 = state_28424__$1;
(statearr_28436_28518[(2)] = null);

(statearr_28436_28518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (39))){
var inst_28377 = (state_28424[(16)]);
var state_28424__$1 = state_28424;
var statearr_28437_28519 = state_28424__$1;
(statearr_28437_28519[(2)] = inst_28377);

(statearr_28437_28519[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (46))){
var inst_28419 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28438_28520 = state_28424__$1;
(statearr_28438_28520[(2)] = inst_28419);

(statearr_28438_28520[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (4))){
var inst_28321 = (state_28424[(2)]);
var inst_28322 = cljs.core.List.EMPTY;
var inst_28323 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28322);
var inst_28324 = (function (){return ((function (inst_28321,inst_28322,inst_28323,state_val_28425,c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28265_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28265_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28265_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28265_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_28321,inst_28322,inst_28323,state_val_28425,c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28325 = cljs.core.filter.call(null,inst_28324,files);
var inst_28326 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28327 = cljs.core.concat.call(null,inst_28325,inst_28326);
var state_28424__$1 = (function (){var statearr_28439 = state_28424;
(statearr_28439[(12)] = inst_28327);

(statearr_28439[(17)] = inst_28323);

(statearr_28439[(18)] = inst_28321);

return statearr_28439;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28440_28521 = state_28424__$1;
(statearr_28440_28521[(1)] = (16));

} else {
var statearr_28441_28522 = state_28424__$1;
(statearr_28441_28522[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (15))){
var inst_28311 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28442_28523 = state_28424__$1;
(statearr_28442_28523[(2)] = inst_28311);

(statearr_28442_28523[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (21))){
var inst_28337 = (state_28424[(19)]);
var inst_28337__$1 = (state_28424[(2)]);
var inst_28338 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28337__$1);
var state_28424__$1 = (function (){var statearr_28443 = state_28424;
(statearr_28443[(19)] = inst_28337__$1);

return statearr_28443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28424__$1,(22),inst_28338);
} else {
if((state_val_28425 === (31))){
var inst_28422 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28424__$1,inst_28422);
} else {
if((state_val_28425 === (32))){
var inst_28377 = (state_28424[(16)]);
var inst_28382 = inst_28377.cljs$lang$protocol_mask$partition0$;
var inst_28383 = (inst_28382 & (64));
var inst_28384 = inst_28377.cljs$core$ISeq$;
var inst_28385 = (cljs.core.PROTOCOL_SENTINEL === inst_28384);
var inst_28386 = ((inst_28383) || (inst_28385));
var state_28424__$1 = state_28424;
if(cljs.core.truth_(inst_28386)){
var statearr_28444_28524 = state_28424__$1;
(statearr_28444_28524[(1)] = (35));

} else {
var statearr_28445_28525 = state_28424__$1;
(statearr_28445_28525[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (40))){
var inst_28399 = (state_28424[(20)]);
var inst_28398 = (state_28424[(2)]);
var inst_28399__$1 = cljs.core.get.call(null,inst_28398,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28400 = cljs.core.get.call(null,inst_28398,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28401 = cljs.core.not_empty.call(null,inst_28399__$1);
var state_28424__$1 = (function (){var statearr_28446 = state_28424;
(statearr_28446[(20)] = inst_28399__$1);

(statearr_28446[(21)] = inst_28400);

return statearr_28446;
})();
if(cljs.core.truth_(inst_28401)){
var statearr_28447_28526 = state_28424__$1;
(statearr_28447_28526[(1)] = (41));

} else {
var statearr_28448_28527 = state_28424__$1;
(statearr_28448_28527[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (33))){
var state_28424__$1 = state_28424;
var statearr_28449_28528 = state_28424__$1;
(statearr_28449_28528[(2)] = false);

(statearr_28449_28528[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (13))){
var inst_28297 = (state_28424[(22)]);
var inst_28301 = cljs.core.chunk_first.call(null,inst_28297);
var inst_28302 = cljs.core.chunk_rest.call(null,inst_28297);
var inst_28303 = cljs.core.count.call(null,inst_28301);
var inst_28284 = inst_28302;
var inst_28285 = inst_28301;
var inst_28286 = inst_28303;
var inst_28287 = (0);
var state_28424__$1 = (function (){var statearr_28450 = state_28424;
(statearr_28450[(7)] = inst_28285);

(statearr_28450[(8)] = inst_28287);

(statearr_28450[(9)] = inst_28284);

(statearr_28450[(10)] = inst_28286);

return statearr_28450;
})();
var statearr_28451_28529 = state_28424__$1;
(statearr_28451_28529[(2)] = null);

(statearr_28451_28529[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (22))){
var inst_28345 = (state_28424[(23)]);
var inst_28341 = (state_28424[(24)]);
var inst_28337 = (state_28424[(19)]);
var inst_28340 = (state_28424[(25)]);
var inst_28340__$1 = (state_28424[(2)]);
var inst_28341__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28340__$1);
var inst_28342 = (function (){var all_files = inst_28337;
var res_SINGLEQUOTE_ = inst_28340__$1;
var res = inst_28341__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28345,inst_28341,inst_28337,inst_28340,inst_28340__$1,inst_28341__$1,state_val_28425,c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28266_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28266_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28345,inst_28341,inst_28337,inst_28340,inst_28340__$1,inst_28341__$1,state_val_28425,c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28343 = cljs.core.filter.call(null,inst_28342,inst_28340__$1);
var inst_28344 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28345__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28344);
var inst_28346 = cljs.core.not_empty.call(null,inst_28345__$1);
var state_28424__$1 = (function (){var statearr_28452 = state_28424;
(statearr_28452[(23)] = inst_28345__$1);

(statearr_28452[(24)] = inst_28341__$1);

(statearr_28452[(25)] = inst_28340__$1);

(statearr_28452[(26)] = inst_28343);

return statearr_28452;
})();
if(cljs.core.truth_(inst_28346)){
var statearr_28453_28530 = state_28424__$1;
(statearr_28453_28530[(1)] = (23));

} else {
var statearr_28454_28531 = state_28424__$1;
(statearr_28454_28531[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (36))){
var state_28424__$1 = state_28424;
var statearr_28455_28532 = state_28424__$1;
(statearr_28455_28532[(2)] = false);

(statearr_28455_28532[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (41))){
var inst_28399 = (state_28424[(20)]);
var inst_28403 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28404 = cljs.core.map.call(null,inst_28403,inst_28399);
var inst_28405 = cljs.core.pr_str.call(null,inst_28404);
var inst_28406 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28405)].join('');
var inst_28407 = figwheel.client.utils.log.call(null,inst_28406);
var state_28424__$1 = state_28424;
var statearr_28456_28533 = state_28424__$1;
(statearr_28456_28533[(2)] = inst_28407);

(statearr_28456_28533[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (43))){
var inst_28400 = (state_28424[(21)]);
var inst_28410 = (state_28424[(2)]);
var inst_28411 = cljs.core.not_empty.call(null,inst_28400);
var state_28424__$1 = (function (){var statearr_28457 = state_28424;
(statearr_28457[(27)] = inst_28410);

return statearr_28457;
})();
if(cljs.core.truth_(inst_28411)){
var statearr_28458_28534 = state_28424__$1;
(statearr_28458_28534[(1)] = (44));

} else {
var statearr_28459_28535 = state_28424__$1;
(statearr_28459_28535[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (29))){
var inst_28345 = (state_28424[(23)]);
var inst_28341 = (state_28424[(24)]);
var inst_28337 = (state_28424[(19)]);
var inst_28377 = (state_28424[(16)]);
var inst_28340 = (state_28424[(25)]);
var inst_28343 = (state_28424[(26)]);
var inst_28373 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28376 = (function (){var all_files = inst_28337;
var res_SINGLEQUOTE_ = inst_28340;
var res = inst_28341;
var files_not_loaded = inst_28343;
var dependencies_that_loaded = inst_28345;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28345,inst_28341,inst_28337,inst_28377,inst_28340,inst_28343,inst_28373,state_val_28425,c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28375){
var map__28460 = p__28375;
var map__28460__$1 = (((((!((map__28460 == null))))?(((((map__28460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28460):map__28460);
var namespace = cljs.core.get.call(null,map__28460__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28345,inst_28341,inst_28337,inst_28377,inst_28340,inst_28343,inst_28373,state_val_28425,c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28377__$1 = cljs.core.group_by.call(null,inst_28376,inst_28343);
var inst_28379 = (inst_28377__$1 == null);
var inst_28380 = cljs.core.not.call(null,inst_28379);
var state_28424__$1 = (function (){var statearr_28462 = state_28424;
(statearr_28462[(28)] = inst_28373);

(statearr_28462[(16)] = inst_28377__$1);

return statearr_28462;
})();
if(inst_28380){
var statearr_28463_28536 = state_28424__$1;
(statearr_28463_28536[(1)] = (32));

} else {
var statearr_28464_28537 = state_28424__$1;
(statearr_28464_28537[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (44))){
var inst_28400 = (state_28424[(21)]);
var inst_28413 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28400);
var inst_28414 = cljs.core.pr_str.call(null,inst_28413);
var inst_28415 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28414)].join('');
var inst_28416 = figwheel.client.utils.log.call(null,inst_28415);
var state_28424__$1 = state_28424;
var statearr_28465_28538 = state_28424__$1;
(statearr_28465_28538[(2)] = inst_28416);

(statearr_28465_28538[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (6))){
var inst_28318 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28466_28539 = state_28424__$1;
(statearr_28466_28539[(2)] = inst_28318);

(statearr_28466_28539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (28))){
var inst_28343 = (state_28424[(26)]);
var inst_28370 = (state_28424[(2)]);
var inst_28371 = cljs.core.not_empty.call(null,inst_28343);
var state_28424__$1 = (function (){var statearr_28467 = state_28424;
(statearr_28467[(29)] = inst_28370);

return statearr_28467;
})();
if(cljs.core.truth_(inst_28371)){
var statearr_28468_28540 = state_28424__$1;
(statearr_28468_28540[(1)] = (29));

} else {
var statearr_28469_28541 = state_28424__$1;
(statearr_28469_28541[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (25))){
var inst_28341 = (state_28424[(24)]);
var inst_28357 = (state_28424[(2)]);
var inst_28358 = cljs.core.not_empty.call(null,inst_28341);
var state_28424__$1 = (function (){var statearr_28470 = state_28424;
(statearr_28470[(30)] = inst_28357);

return statearr_28470;
})();
if(cljs.core.truth_(inst_28358)){
var statearr_28471_28542 = state_28424__$1;
(statearr_28471_28542[(1)] = (26));

} else {
var statearr_28472_28543 = state_28424__$1;
(statearr_28472_28543[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (34))){
var inst_28393 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
if(cljs.core.truth_(inst_28393)){
var statearr_28473_28544 = state_28424__$1;
(statearr_28473_28544[(1)] = (38));

} else {
var statearr_28474_28545 = state_28424__$1;
(statearr_28474_28545[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (17))){
var state_28424__$1 = state_28424;
var statearr_28475_28546 = state_28424__$1;
(statearr_28475_28546[(2)] = recompile_dependents);

(statearr_28475_28546[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (3))){
var state_28424__$1 = state_28424;
var statearr_28476_28547 = state_28424__$1;
(statearr_28476_28547[(2)] = null);

(statearr_28476_28547[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (12))){
var inst_28314 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28477_28548 = state_28424__$1;
(statearr_28477_28548[(2)] = inst_28314);

(statearr_28477_28548[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (2))){
var inst_28276 = (state_28424[(13)]);
var inst_28283 = cljs.core.seq.call(null,inst_28276);
var inst_28284 = inst_28283;
var inst_28285 = null;
var inst_28286 = (0);
var inst_28287 = (0);
var state_28424__$1 = (function (){var statearr_28478 = state_28424;
(statearr_28478[(7)] = inst_28285);

(statearr_28478[(8)] = inst_28287);

(statearr_28478[(9)] = inst_28284);

(statearr_28478[(10)] = inst_28286);

return statearr_28478;
})();
var statearr_28479_28549 = state_28424__$1;
(statearr_28479_28549[(2)] = null);

(statearr_28479_28549[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (23))){
var inst_28345 = (state_28424[(23)]);
var inst_28341 = (state_28424[(24)]);
var inst_28337 = (state_28424[(19)]);
var inst_28340 = (state_28424[(25)]);
var inst_28343 = (state_28424[(26)]);
var inst_28348 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28350 = (function (){var all_files = inst_28337;
var res_SINGLEQUOTE_ = inst_28340;
var res = inst_28341;
var files_not_loaded = inst_28343;
var dependencies_that_loaded = inst_28345;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28345,inst_28341,inst_28337,inst_28340,inst_28343,inst_28348,state_val_28425,c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28349){
var map__28480 = p__28349;
var map__28480__$1 = (((((!((map__28480 == null))))?(((((map__28480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28480):map__28480);
var request_url = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28345,inst_28341,inst_28337,inst_28340,inst_28343,inst_28348,state_val_28425,c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28351 = cljs.core.reverse.call(null,inst_28345);
var inst_28352 = cljs.core.map.call(null,inst_28350,inst_28351);
var inst_28353 = cljs.core.pr_str.call(null,inst_28352);
var inst_28354 = figwheel.client.utils.log.call(null,inst_28353);
var state_28424__$1 = (function (){var statearr_28482 = state_28424;
(statearr_28482[(31)] = inst_28348);

return statearr_28482;
})();
var statearr_28483_28550 = state_28424__$1;
(statearr_28483_28550[(2)] = inst_28354);

(statearr_28483_28550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (35))){
var state_28424__$1 = state_28424;
var statearr_28484_28551 = state_28424__$1;
(statearr_28484_28551[(2)] = true);

(statearr_28484_28551[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (19))){
var inst_28327 = (state_28424[(12)]);
var inst_28333 = figwheel.client.file_reloading.expand_files.call(null,inst_28327);
var state_28424__$1 = state_28424;
var statearr_28485_28552 = state_28424__$1;
(statearr_28485_28552[(2)] = inst_28333);

(statearr_28485_28552[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (11))){
var state_28424__$1 = state_28424;
var statearr_28486_28553 = state_28424__$1;
(statearr_28486_28553[(2)] = null);

(statearr_28486_28553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (9))){
var inst_28316 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28487_28554 = state_28424__$1;
(statearr_28487_28554[(2)] = inst_28316);

(statearr_28487_28554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (5))){
var inst_28287 = (state_28424[(8)]);
var inst_28286 = (state_28424[(10)]);
var inst_28289 = (inst_28287 < inst_28286);
var inst_28290 = inst_28289;
var state_28424__$1 = state_28424;
if(cljs.core.truth_(inst_28290)){
var statearr_28488_28555 = state_28424__$1;
(statearr_28488_28555[(1)] = (7));

} else {
var statearr_28489_28556 = state_28424__$1;
(statearr_28489_28556[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (14))){
var inst_28297 = (state_28424[(22)]);
var inst_28306 = cljs.core.first.call(null,inst_28297);
var inst_28307 = figwheel.client.file_reloading.eval_body.call(null,inst_28306,opts);
var inst_28308 = cljs.core.next.call(null,inst_28297);
var inst_28284 = inst_28308;
var inst_28285 = null;
var inst_28286 = (0);
var inst_28287 = (0);
var state_28424__$1 = (function (){var statearr_28490 = state_28424;
(statearr_28490[(7)] = inst_28285);

(statearr_28490[(8)] = inst_28287);

(statearr_28490[(9)] = inst_28284);

(statearr_28490[(32)] = inst_28307);

(statearr_28490[(10)] = inst_28286);

return statearr_28490;
})();
var statearr_28491_28557 = state_28424__$1;
(statearr_28491_28557[(2)] = null);

(statearr_28491_28557[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (45))){
var state_28424__$1 = state_28424;
var statearr_28492_28558 = state_28424__$1;
(statearr_28492_28558[(2)] = null);

(statearr_28492_28558[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (26))){
var inst_28345 = (state_28424[(23)]);
var inst_28341 = (state_28424[(24)]);
var inst_28337 = (state_28424[(19)]);
var inst_28340 = (state_28424[(25)]);
var inst_28343 = (state_28424[(26)]);
var inst_28360 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28362 = (function (){var all_files = inst_28337;
var res_SINGLEQUOTE_ = inst_28340;
var res = inst_28341;
var files_not_loaded = inst_28343;
var dependencies_that_loaded = inst_28345;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28345,inst_28341,inst_28337,inst_28340,inst_28343,inst_28360,state_val_28425,c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28361){
var map__28493 = p__28361;
var map__28493__$1 = (((((!((map__28493 == null))))?(((((map__28493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28493):map__28493);
var namespace = cljs.core.get.call(null,map__28493__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28493__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28345,inst_28341,inst_28337,inst_28340,inst_28343,inst_28360,state_val_28425,c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28363 = cljs.core.map.call(null,inst_28362,inst_28341);
var inst_28364 = cljs.core.pr_str.call(null,inst_28363);
var inst_28365 = figwheel.client.utils.log.call(null,inst_28364);
var inst_28366 = (function (){var all_files = inst_28337;
var res_SINGLEQUOTE_ = inst_28340;
var res = inst_28341;
var files_not_loaded = inst_28343;
var dependencies_that_loaded = inst_28345;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28345,inst_28341,inst_28337,inst_28340,inst_28343,inst_28360,inst_28362,inst_28363,inst_28364,inst_28365,state_val_28425,c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28345,inst_28341,inst_28337,inst_28340,inst_28343,inst_28360,inst_28362,inst_28363,inst_28364,inst_28365,state_val_28425,c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28367 = setTimeout(inst_28366,(10));
var state_28424__$1 = (function (){var statearr_28495 = state_28424;
(statearr_28495[(33)] = inst_28360);

(statearr_28495[(34)] = inst_28365);

return statearr_28495;
})();
var statearr_28496_28559 = state_28424__$1;
(statearr_28496_28559[(2)] = inst_28367);

(statearr_28496_28559[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (16))){
var state_28424__$1 = state_28424;
var statearr_28497_28560 = state_28424__$1;
(statearr_28497_28560[(2)] = reload_dependents);

(statearr_28497_28560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (38))){
var inst_28377 = (state_28424[(16)]);
var inst_28395 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28377);
var state_28424__$1 = state_28424;
var statearr_28498_28561 = state_28424__$1;
(statearr_28498_28561[(2)] = inst_28395);

(statearr_28498_28561[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (30))){
var state_28424__$1 = state_28424;
var statearr_28499_28562 = state_28424__$1;
(statearr_28499_28562[(2)] = null);

(statearr_28499_28562[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (10))){
var inst_28297 = (state_28424[(22)]);
var inst_28299 = cljs.core.chunked_seq_QMARK_.call(null,inst_28297);
var state_28424__$1 = state_28424;
if(inst_28299){
var statearr_28500_28563 = state_28424__$1;
(statearr_28500_28563[(1)] = (13));

} else {
var statearr_28501_28564 = state_28424__$1;
(statearr_28501_28564[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (18))){
var inst_28331 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
if(cljs.core.truth_(inst_28331)){
var statearr_28502_28565 = state_28424__$1;
(statearr_28502_28565[(1)] = (19));

} else {
var statearr_28503_28566 = state_28424__$1;
(statearr_28503_28566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (42))){
var state_28424__$1 = state_28424;
var statearr_28504_28567 = state_28424__$1;
(statearr_28504_28567[(2)] = null);

(statearr_28504_28567[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (37))){
var inst_28390 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28505_28568 = state_28424__$1;
(statearr_28505_28568[(2)] = inst_28390);

(statearr_28505_28568[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (8))){
var inst_28297 = (state_28424[(22)]);
var inst_28284 = (state_28424[(9)]);
var inst_28297__$1 = cljs.core.seq.call(null,inst_28284);
var state_28424__$1 = (function (){var statearr_28506 = state_28424;
(statearr_28506[(22)] = inst_28297__$1);

return statearr_28506;
})();
if(inst_28297__$1){
var statearr_28507_28569 = state_28424__$1;
(statearr_28507_28569[(1)] = (10));

} else {
var statearr_28508_28570 = state_28424__$1;
(statearr_28508_28570[(1)] = (11));

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
});})(c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24480__auto__,c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24481__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24481__auto____0 = (function (){
var statearr_28509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28509[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24481__auto__);

(statearr_28509[(1)] = (1));

return statearr_28509;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24481__auto____1 = (function (state_28424){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_28424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e28510){if((e28510 instanceof Object)){
var ex__24484__auto__ = e28510;
var statearr_28511_28571 = state_28424;
(statearr_28511_28571[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28572 = state_28424;
state_28424 = G__28572;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24481__auto__ = function(state_28424){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24481__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24481__auto____1.call(this,state_28424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24481__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24481__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24577__auto__ = (function (){var statearr_28512 = f__24576__auto__.call(null);
(statearr_28512[(6)] = c__24575__auto__);

return statearr_28512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto__,map__28269,map__28269__$1,opts,before_jsload,on_jsload,reload_dependents,map__28270,map__28270__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24575__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28575,link){
var map__28576 = p__28575;
var map__28576__$1 = (((((!((map__28576 == null))))?(((((map__28576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28576):map__28576);
var file = cljs.core.get.call(null,map__28576__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__28576,map__28576__$1,file){
return (function (p1__28573_SHARP_,p2__28574_SHARP_){
if(cljs.core._EQ_.call(null,p1__28573_SHARP_,p2__28574_SHARP_)){
return p1__28573_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__28576,map__28576__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28579){
var map__28580 = p__28579;
var map__28580__$1 = (((((!((map__28580 == null))))?(((((map__28580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28580):map__28580);
var match_length = cljs.core.get.call(null,map__28580__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28580__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28578_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28578_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28582_SHARP_,p2__28583_SHARP_){
return cljs.core.assoc.call(null,p1__28582_SHARP_,cljs.core.get.call(null,p2__28583_SHARP_,key),p2__28583_SHARP_);
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
var loaded_f_datas_28584 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28584);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28584);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28585,p__28586){
var map__28587 = p__28585;
var map__28587__$1 = (((((!((map__28587 == null))))?(((((map__28587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28587):map__28587);
var on_cssload = cljs.core.get.call(null,map__28587__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28588 = p__28586;
var map__28588__$1 = (((((!((map__28588 == null))))?(((((map__28588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28588):map__28588);
var files_msg = map__28588__$1;
var files = cljs.core.get.call(null,map__28588__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1544001715553
