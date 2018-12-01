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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27784_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27784_SHARP_));
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
var seq__27785 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27786 = null;
var count__27787 = (0);
var i__27788 = (0);
while(true){
if((i__27788 < count__27787)){
var n = cljs.core._nth.call(null,chunk__27786,i__27788);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27789 = seq__27785;
var G__27790 = chunk__27786;
var G__27791 = count__27787;
var G__27792 = (i__27788 + (1));
seq__27785 = G__27789;
chunk__27786 = G__27790;
count__27787 = G__27791;
i__27788 = G__27792;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27785);
if(temp__5457__auto__){
var seq__27785__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27785__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__27785__$1);
var G__27793 = cljs.core.chunk_rest.call(null,seq__27785__$1);
var G__27794 = c__4461__auto__;
var G__27795 = cljs.core.count.call(null,c__4461__auto__);
var G__27796 = (0);
seq__27785 = G__27793;
chunk__27786 = G__27794;
count__27787 = G__27795;
i__27788 = G__27796;
continue;
} else {
var n = cljs.core.first.call(null,seq__27785__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27797 = cljs.core.next.call(null,seq__27785__$1);
var G__27798 = null;
var G__27799 = (0);
var G__27800 = (0);
seq__27785 = G__27797;
chunk__27786 = G__27798;
count__27787 = G__27799;
i__27788 = G__27800;
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
return cljs.core.some.call(null,(function (p__27801){
var vec__27802 = p__27801;
var _ = cljs.core.nth.call(null,vec__27802,(0),null);
var v = cljs.core.nth.call(null,vec__27802,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__27805){
var vec__27806 = p__27805;
var k = cljs.core.nth.call(null,vec__27806,(0),null);
var v = cljs.core.nth.call(null,vec__27806,(1),null);
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

var seq__27818_27826 = cljs.core.seq.call(null,deps);
var chunk__27819_27827 = null;
var count__27820_27828 = (0);
var i__27821_27829 = (0);
while(true){
if((i__27821_27829 < count__27820_27828)){
var dep_27830 = cljs.core._nth.call(null,chunk__27819_27827,i__27821_27829);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_27830;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27830));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27830,(depth + (1)),state);
} else {
}


var G__27831 = seq__27818_27826;
var G__27832 = chunk__27819_27827;
var G__27833 = count__27820_27828;
var G__27834 = (i__27821_27829 + (1));
seq__27818_27826 = G__27831;
chunk__27819_27827 = G__27832;
count__27820_27828 = G__27833;
i__27821_27829 = G__27834;
continue;
} else {
var temp__5457__auto___27835 = cljs.core.seq.call(null,seq__27818_27826);
if(temp__5457__auto___27835){
var seq__27818_27836__$1 = temp__5457__auto___27835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27818_27836__$1)){
var c__4461__auto___27837 = cljs.core.chunk_first.call(null,seq__27818_27836__$1);
var G__27838 = cljs.core.chunk_rest.call(null,seq__27818_27836__$1);
var G__27839 = c__4461__auto___27837;
var G__27840 = cljs.core.count.call(null,c__4461__auto___27837);
var G__27841 = (0);
seq__27818_27826 = G__27838;
chunk__27819_27827 = G__27839;
count__27820_27828 = G__27840;
i__27821_27829 = G__27841;
continue;
} else {
var dep_27842 = cljs.core.first.call(null,seq__27818_27836__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_27842;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27842));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27842,(depth + (1)),state);
} else {
}


var G__27843 = cljs.core.next.call(null,seq__27818_27836__$1);
var G__27844 = null;
var G__27845 = (0);
var G__27846 = (0);
seq__27818_27826 = G__27843;
chunk__27819_27827 = G__27844;
count__27820_27828 = G__27845;
i__27821_27829 = G__27846;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27822){
var vec__27823 = p__27822;
var seq__27824 = cljs.core.seq.call(null,vec__27823);
var first__27825 = cljs.core.first.call(null,seq__27824);
var seq__27824__$1 = cljs.core.next.call(null,seq__27824);
var x = first__27825;
var xs = seq__27824__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27823,seq__27824,first__27825,seq__27824__$1,x,xs,get_deps__$1){
return (function (p1__27809_SHARP_){
return clojure.set.difference.call(null,p1__27809_SHARP_,x);
});})(vec__27823,seq__27824,first__27825,seq__27824__$1,x,xs,get_deps__$1))
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
var seq__27847 = cljs.core.seq.call(null,provides);
var chunk__27848 = null;
var count__27849 = (0);
var i__27850 = (0);
while(true){
if((i__27850 < count__27849)){
var prov = cljs.core._nth.call(null,chunk__27848,i__27850);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27851_27859 = cljs.core.seq.call(null,requires);
var chunk__27852_27860 = null;
var count__27853_27861 = (0);
var i__27854_27862 = (0);
while(true){
if((i__27854_27862 < count__27853_27861)){
var req_27863 = cljs.core._nth.call(null,chunk__27852_27860,i__27854_27862);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27863,prov);


var G__27864 = seq__27851_27859;
var G__27865 = chunk__27852_27860;
var G__27866 = count__27853_27861;
var G__27867 = (i__27854_27862 + (1));
seq__27851_27859 = G__27864;
chunk__27852_27860 = G__27865;
count__27853_27861 = G__27866;
i__27854_27862 = G__27867;
continue;
} else {
var temp__5457__auto___27868 = cljs.core.seq.call(null,seq__27851_27859);
if(temp__5457__auto___27868){
var seq__27851_27869__$1 = temp__5457__auto___27868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27851_27869__$1)){
var c__4461__auto___27870 = cljs.core.chunk_first.call(null,seq__27851_27869__$1);
var G__27871 = cljs.core.chunk_rest.call(null,seq__27851_27869__$1);
var G__27872 = c__4461__auto___27870;
var G__27873 = cljs.core.count.call(null,c__4461__auto___27870);
var G__27874 = (0);
seq__27851_27859 = G__27871;
chunk__27852_27860 = G__27872;
count__27853_27861 = G__27873;
i__27854_27862 = G__27874;
continue;
} else {
var req_27875 = cljs.core.first.call(null,seq__27851_27869__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27875,prov);


var G__27876 = cljs.core.next.call(null,seq__27851_27869__$1);
var G__27877 = null;
var G__27878 = (0);
var G__27879 = (0);
seq__27851_27859 = G__27876;
chunk__27852_27860 = G__27877;
count__27853_27861 = G__27878;
i__27854_27862 = G__27879;
continue;
}
} else {
}
}
break;
}


var G__27880 = seq__27847;
var G__27881 = chunk__27848;
var G__27882 = count__27849;
var G__27883 = (i__27850 + (1));
seq__27847 = G__27880;
chunk__27848 = G__27881;
count__27849 = G__27882;
i__27850 = G__27883;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27847);
if(temp__5457__auto__){
var seq__27847__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27847__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__27847__$1);
var G__27884 = cljs.core.chunk_rest.call(null,seq__27847__$1);
var G__27885 = c__4461__auto__;
var G__27886 = cljs.core.count.call(null,c__4461__auto__);
var G__27887 = (0);
seq__27847 = G__27884;
chunk__27848 = G__27885;
count__27849 = G__27886;
i__27850 = G__27887;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27847__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27855_27888 = cljs.core.seq.call(null,requires);
var chunk__27856_27889 = null;
var count__27857_27890 = (0);
var i__27858_27891 = (0);
while(true){
if((i__27858_27891 < count__27857_27890)){
var req_27892 = cljs.core._nth.call(null,chunk__27856_27889,i__27858_27891);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27892,prov);


var G__27893 = seq__27855_27888;
var G__27894 = chunk__27856_27889;
var G__27895 = count__27857_27890;
var G__27896 = (i__27858_27891 + (1));
seq__27855_27888 = G__27893;
chunk__27856_27889 = G__27894;
count__27857_27890 = G__27895;
i__27858_27891 = G__27896;
continue;
} else {
var temp__5457__auto___27897__$1 = cljs.core.seq.call(null,seq__27855_27888);
if(temp__5457__auto___27897__$1){
var seq__27855_27898__$1 = temp__5457__auto___27897__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27855_27898__$1)){
var c__4461__auto___27899 = cljs.core.chunk_first.call(null,seq__27855_27898__$1);
var G__27900 = cljs.core.chunk_rest.call(null,seq__27855_27898__$1);
var G__27901 = c__4461__auto___27899;
var G__27902 = cljs.core.count.call(null,c__4461__auto___27899);
var G__27903 = (0);
seq__27855_27888 = G__27900;
chunk__27856_27889 = G__27901;
count__27857_27890 = G__27902;
i__27858_27891 = G__27903;
continue;
} else {
var req_27904 = cljs.core.first.call(null,seq__27855_27898__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27904,prov);


var G__27905 = cljs.core.next.call(null,seq__27855_27898__$1);
var G__27906 = null;
var G__27907 = (0);
var G__27908 = (0);
seq__27855_27888 = G__27905;
chunk__27856_27889 = G__27906;
count__27857_27890 = G__27907;
i__27858_27891 = G__27908;
continue;
}
} else {
}
}
break;
}


var G__27909 = cljs.core.next.call(null,seq__27847__$1);
var G__27910 = null;
var G__27911 = (0);
var G__27912 = (0);
seq__27847 = G__27909;
chunk__27848 = G__27910;
count__27849 = G__27911;
i__27850 = G__27912;
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
var seq__27913_27917 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27914_27918 = null;
var count__27915_27919 = (0);
var i__27916_27920 = (0);
while(true){
if((i__27916_27920 < count__27915_27919)){
var ns_27921 = cljs.core._nth.call(null,chunk__27914_27918,i__27916_27920);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27921);


var G__27922 = seq__27913_27917;
var G__27923 = chunk__27914_27918;
var G__27924 = count__27915_27919;
var G__27925 = (i__27916_27920 + (1));
seq__27913_27917 = G__27922;
chunk__27914_27918 = G__27923;
count__27915_27919 = G__27924;
i__27916_27920 = G__27925;
continue;
} else {
var temp__5457__auto___27926 = cljs.core.seq.call(null,seq__27913_27917);
if(temp__5457__auto___27926){
var seq__27913_27927__$1 = temp__5457__auto___27926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27913_27927__$1)){
var c__4461__auto___27928 = cljs.core.chunk_first.call(null,seq__27913_27927__$1);
var G__27929 = cljs.core.chunk_rest.call(null,seq__27913_27927__$1);
var G__27930 = c__4461__auto___27928;
var G__27931 = cljs.core.count.call(null,c__4461__auto___27928);
var G__27932 = (0);
seq__27913_27917 = G__27929;
chunk__27914_27918 = G__27930;
count__27915_27919 = G__27931;
i__27916_27920 = G__27932;
continue;
} else {
var ns_27933 = cljs.core.first.call(null,seq__27913_27927__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27933);


var G__27934 = cljs.core.next.call(null,seq__27913_27927__$1);
var G__27935 = null;
var G__27936 = (0);
var G__27937 = (0);
seq__27913_27917 = G__27934;
chunk__27914_27918 = G__27935;
count__27915_27919 = G__27936;
i__27916_27920 = G__27937;
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
var G__27938__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27939__i = 0, G__27939__a = new Array(arguments.length -  0);
while (G__27939__i < G__27939__a.length) {G__27939__a[G__27939__i] = arguments[G__27939__i + 0]; ++G__27939__i;}
  args = new cljs.core.IndexedSeq(G__27939__a,0,null);
} 
return G__27938__delegate.call(this,args);};
G__27938.cljs$lang$maxFixedArity = 0;
G__27938.cljs$lang$applyTo = (function (arglist__27940){
var args = cljs.core.seq(arglist__27940);
return G__27938__delegate(args);
});
G__27938.cljs$core$IFn$_invoke$arity$variadic = G__27938__delegate;
return G__27938;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27941_SHARP_,p2__27942_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27941_SHARP_)),p2__27942_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27943_SHARP_,p2__27944_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27943_SHARP_),p2__27944_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27945 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27945.addCallback(((function (G__27945){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27945))
);

G__27945.addErrback(((function (G__27945){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27945))
);

return G__27945;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27946){if((e27946 instanceof Error)){
var e = e27946;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27946;

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
}catch (e27947){if((e27947 instanceof Error)){
var e = e27947;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27947;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27948 = cljs.core._EQ_;
var expr__27949 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27948.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27949))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27948.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27949))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27948.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27949))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27948,expr__27949){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27948,expr__27949))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27951,callback){
var map__27952 = p__27951;
var map__27952__$1 = (((((!((map__27952 == null))))?(((((map__27952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27952):map__27952);
var file_msg = map__27952__$1;
var request_url = cljs.core.get.call(null,map__27952__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27952,map__27952__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27952,map__27952__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto__){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto__){
return (function (state_27990){
var state_val_27991 = (state_27990[(1)]);
if((state_val_27991 === (7))){
var inst_27986 = (state_27990[(2)]);
var state_27990__$1 = state_27990;
var statearr_27992_28018 = state_27990__$1;
(statearr_27992_28018[(2)] = inst_27986);

(statearr_27992_28018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (1))){
var state_27990__$1 = state_27990;
var statearr_27993_28019 = state_27990__$1;
(statearr_27993_28019[(2)] = null);

(statearr_27993_28019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (4))){
var inst_27956 = (state_27990[(7)]);
var inst_27956__$1 = (state_27990[(2)]);
var state_27990__$1 = (function (){var statearr_27994 = state_27990;
(statearr_27994[(7)] = inst_27956__$1);

return statearr_27994;
})();
if(cljs.core.truth_(inst_27956__$1)){
var statearr_27995_28020 = state_27990__$1;
(statearr_27995_28020[(1)] = (5));

} else {
var statearr_27996_28021 = state_27990__$1;
(statearr_27996_28021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (15))){
var inst_27969 = (state_27990[(8)]);
var inst_27971 = (state_27990[(9)]);
var inst_27973 = inst_27971.call(null,inst_27969);
var state_27990__$1 = state_27990;
var statearr_27997_28022 = state_27990__$1;
(statearr_27997_28022[(2)] = inst_27973);

(statearr_27997_28022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (13))){
var inst_27980 = (state_27990[(2)]);
var state_27990__$1 = state_27990;
var statearr_27998_28023 = state_27990__$1;
(statearr_27998_28023[(2)] = inst_27980);

(statearr_27998_28023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (6))){
var state_27990__$1 = state_27990;
var statearr_27999_28024 = state_27990__$1;
(statearr_27999_28024[(2)] = null);

(statearr_27999_28024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (17))){
var inst_27977 = (state_27990[(2)]);
var state_27990__$1 = state_27990;
var statearr_28000_28025 = state_27990__$1;
(statearr_28000_28025[(2)] = inst_27977);

(statearr_28000_28025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (3))){
var inst_27988 = (state_27990[(2)]);
var state_27990__$1 = state_27990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27990__$1,inst_27988);
} else {
if((state_val_27991 === (12))){
var state_27990__$1 = state_27990;
var statearr_28001_28026 = state_27990__$1;
(statearr_28001_28026[(2)] = null);

(statearr_28001_28026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (2))){
var state_27990__$1 = state_27990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27990__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27991 === (11))){
var inst_27961 = (state_27990[(10)]);
var inst_27967 = figwheel.client.file_reloading.blocking_load.call(null,inst_27961);
var state_27990__$1 = state_27990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27990__$1,(14),inst_27967);
} else {
if((state_val_27991 === (9))){
var inst_27961 = (state_27990[(10)]);
var state_27990__$1 = state_27990;
if(cljs.core.truth_(inst_27961)){
var statearr_28002_28027 = state_27990__$1;
(statearr_28002_28027[(1)] = (11));

} else {
var statearr_28003_28028 = state_27990__$1;
(statearr_28003_28028[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (5))){
var inst_27956 = (state_27990[(7)]);
var inst_27962 = (state_27990[(11)]);
var inst_27961 = cljs.core.nth.call(null,inst_27956,(0),null);
var inst_27962__$1 = cljs.core.nth.call(null,inst_27956,(1),null);
var state_27990__$1 = (function (){var statearr_28004 = state_27990;
(statearr_28004[(10)] = inst_27961);

(statearr_28004[(11)] = inst_27962__$1);

return statearr_28004;
})();
if(cljs.core.truth_(inst_27962__$1)){
var statearr_28005_28029 = state_27990__$1;
(statearr_28005_28029[(1)] = (8));

} else {
var statearr_28006_28030 = state_27990__$1;
(statearr_28006_28030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (14))){
var inst_27961 = (state_27990[(10)]);
var inst_27971 = (state_27990[(9)]);
var inst_27969 = (state_27990[(2)]);
var inst_27970 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27971__$1 = cljs.core.get.call(null,inst_27970,inst_27961);
var state_27990__$1 = (function (){var statearr_28007 = state_27990;
(statearr_28007[(8)] = inst_27969);

(statearr_28007[(9)] = inst_27971__$1);

return statearr_28007;
})();
if(cljs.core.truth_(inst_27971__$1)){
var statearr_28008_28031 = state_27990__$1;
(statearr_28008_28031[(1)] = (15));

} else {
var statearr_28009_28032 = state_27990__$1;
(statearr_28009_28032[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (16))){
var inst_27969 = (state_27990[(8)]);
var inst_27975 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27969);
var state_27990__$1 = state_27990;
var statearr_28010_28033 = state_27990__$1;
(statearr_28010_28033[(2)] = inst_27975);

(statearr_28010_28033[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (10))){
var inst_27982 = (state_27990[(2)]);
var state_27990__$1 = (function (){var statearr_28011 = state_27990;
(statearr_28011[(12)] = inst_27982);

return statearr_28011;
})();
var statearr_28012_28034 = state_27990__$1;
(statearr_28012_28034[(2)] = null);

(statearr_28012_28034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (8))){
var inst_27962 = (state_27990[(11)]);
var inst_27964 = eval(inst_27962);
var state_27990__$1 = state_27990;
var statearr_28013_28035 = state_27990__$1;
(statearr_28013_28035[(2)] = inst_27964);

(statearr_28013_28035[(1)] = (10));


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
});})(c__24434__auto__))
;
return ((function (switch__24339__auto__,c__24434__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24340__auto__ = null;
var figwheel$client$file_reloading$state_machine__24340__auto____0 = (function (){
var statearr_28014 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28014[(0)] = figwheel$client$file_reloading$state_machine__24340__auto__);

(statearr_28014[(1)] = (1));

return statearr_28014;
});
var figwheel$client$file_reloading$state_machine__24340__auto____1 = (function (state_27990){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_27990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e28015){if((e28015 instanceof Object)){
var ex__24343__auto__ = e28015;
var statearr_28016_28036 = state_27990;
(statearr_28016_28036[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28037 = state_27990;
state_27990 = G__28037;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24340__auto__ = function(state_27990){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24340__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24340__auto____1.call(this,state_27990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24340__auto____0;
figwheel$client$file_reloading$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24340__auto____1;
return figwheel$client$file_reloading$state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto__))
})();
var state__24436__auto__ = (function (){var statearr_28017 = f__24435__auto__.call(null);
(statearr_28017[(6)] = c__24434__auto__);

return statearr_28017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto__))
);

return c__24434__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28039 = arguments.length;
switch (G__28039) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28041,callback){
var map__28042 = p__28041;
var map__28042__$1 = (((((!((map__28042 == null))))?(((((map__28042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28042):map__28042);
var file_msg = map__28042__$1;
var namespace = cljs.core.get.call(null,map__28042__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28042,map__28042__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28042,map__28042__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28044){
var map__28045 = p__28044;
var map__28045__$1 = (((((!((map__28045 == null))))?(((((map__28045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28045):map__28045);
var file_msg = map__28045__$1;
var namespace = cljs.core.get.call(null,map__28045__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28047){
var map__28048 = p__28047;
var map__28048__$1 = (((((!((map__28048 == null))))?(((((map__28048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28048):map__28048);
var file_msg = map__28048__$1;
var namespace = cljs.core.get.call(null,map__28048__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28050,callback){
var map__28051 = p__28050;
var map__28051__$1 = (((((!((map__28051 == null))))?(((((map__28051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28051):map__28051);
var file_msg = map__28051__$1;
var request_url = cljs.core.get.call(null,map__28051__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28051__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24434__auto___28101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___28101,out){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___28101,out){
return (function (state_28086){
var state_val_28087 = (state_28086[(1)]);
if((state_val_28087 === (1))){
var inst_28060 = cljs.core.seq.call(null,files);
var inst_28061 = cljs.core.first.call(null,inst_28060);
var inst_28062 = cljs.core.next.call(null,inst_28060);
var inst_28063 = files;
var state_28086__$1 = (function (){var statearr_28088 = state_28086;
(statearr_28088[(7)] = inst_28061);

(statearr_28088[(8)] = inst_28062);

(statearr_28088[(9)] = inst_28063);

return statearr_28088;
})();
var statearr_28089_28102 = state_28086__$1;
(statearr_28089_28102[(2)] = null);

(statearr_28089_28102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (2))){
var inst_28069 = (state_28086[(10)]);
var inst_28063 = (state_28086[(9)]);
var inst_28068 = cljs.core.seq.call(null,inst_28063);
var inst_28069__$1 = cljs.core.first.call(null,inst_28068);
var inst_28070 = cljs.core.next.call(null,inst_28068);
var inst_28071 = (inst_28069__$1 == null);
var inst_28072 = cljs.core.not.call(null,inst_28071);
var state_28086__$1 = (function (){var statearr_28090 = state_28086;
(statearr_28090[(10)] = inst_28069__$1);

(statearr_28090[(11)] = inst_28070);

return statearr_28090;
})();
if(inst_28072){
var statearr_28091_28103 = state_28086__$1;
(statearr_28091_28103[(1)] = (4));

} else {
var statearr_28092_28104 = state_28086__$1;
(statearr_28092_28104[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (3))){
var inst_28084 = (state_28086[(2)]);
var state_28086__$1 = state_28086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28086__$1,inst_28084);
} else {
if((state_val_28087 === (4))){
var inst_28069 = (state_28086[(10)]);
var inst_28074 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28069);
var state_28086__$1 = state_28086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28086__$1,(7),inst_28074);
} else {
if((state_val_28087 === (5))){
var inst_28080 = cljs.core.async.close_BANG_.call(null,out);
var state_28086__$1 = state_28086;
var statearr_28093_28105 = state_28086__$1;
(statearr_28093_28105[(2)] = inst_28080);

(statearr_28093_28105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (6))){
var inst_28082 = (state_28086[(2)]);
var state_28086__$1 = state_28086;
var statearr_28094_28106 = state_28086__$1;
(statearr_28094_28106[(2)] = inst_28082);

(statearr_28094_28106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (7))){
var inst_28070 = (state_28086[(11)]);
var inst_28076 = (state_28086[(2)]);
var inst_28077 = cljs.core.async.put_BANG_.call(null,out,inst_28076);
var inst_28063 = inst_28070;
var state_28086__$1 = (function (){var statearr_28095 = state_28086;
(statearr_28095[(12)] = inst_28077);

(statearr_28095[(9)] = inst_28063);

return statearr_28095;
})();
var statearr_28096_28107 = state_28086__$1;
(statearr_28096_28107[(2)] = null);

(statearr_28096_28107[(1)] = (2));


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
});})(c__24434__auto___28101,out))
;
return ((function (switch__24339__auto__,c__24434__auto___28101,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24340__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24340__auto____0 = (function (){
var statearr_28097 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28097[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24340__auto__);

(statearr_28097[(1)] = (1));

return statearr_28097;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24340__auto____1 = (function (state_28086){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_28086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e28098){if((e28098 instanceof Object)){
var ex__24343__auto__ = e28098;
var statearr_28099_28108 = state_28086;
(statearr_28099_28108[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28109 = state_28086;
state_28086 = G__28109;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24340__auto__ = function(state_28086){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24340__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24340__auto____1.call(this,state_28086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24340__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24340__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___28101,out))
})();
var state__24436__auto__ = (function (){var statearr_28100 = f__24435__auto__.call(null);
(statearr_28100[(6)] = c__24434__auto___28101);

return statearr_28100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___28101,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28110,opts){
var map__28111 = p__28110;
var map__28111__$1 = (((((!((map__28111 == null))))?(((((map__28111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28111):map__28111);
var eval_body = cljs.core.get.call(null,map__28111__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28111__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28113){var e = e28113;
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
return (function (p1__28114_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28114_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28115){
var vec__28116 = p__28115;
var k = cljs.core.nth.call(null,vec__28116,(0),null);
var v = cljs.core.nth.call(null,vec__28116,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28119){
var vec__28120 = p__28119;
var k = cljs.core.nth.call(null,vec__28120,(0),null);
var v = cljs.core.nth.call(null,vec__28120,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28126,p__28127){
var map__28128 = p__28126;
var map__28128__$1 = (((((!((map__28128 == null))))?(((((map__28128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28128):map__28128);
var opts = map__28128__$1;
var before_jsload = cljs.core.get.call(null,map__28128__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28128__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28128__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28129 = p__28127;
var map__28129__$1 = (((((!((map__28129 == null))))?(((((map__28129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28129):map__28129);
var msg = map__28129__$1;
var files = cljs.core.get.call(null,map__28129__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28129__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28129__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28283){
var state_val_28284 = (state_28283[(1)]);
if((state_val_28284 === (7))){
var inst_28143 = (state_28283[(7)]);
var inst_28146 = (state_28283[(8)]);
var inst_28144 = (state_28283[(9)]);
var inst_28145 = (state_28283[(10)]);
var inst_28151 = cljs.core._nth.call(null,inst_28144,inst_28146);
var inst_28152 = figwheel.client.file_reloading.eval_body.call(null,inst_28151,opts);
var inst_28153 = (inst_28146 + (1));
var tmp28285 = inst_28143;
var tmp28286 = inst_28144;
var tmp28287 = inst_28145;
var inst_28143__$1 = tmp28285;
var inst_28144__$1 = tmp28286;
var inst_28145__$1 = tmp28287;
var inst_28146__$1 = inst_28153;
var state_28283__$1 = (function (){var statearr_28288 = state_28283;
(statearr_28288[(7)] = inst_28143__$1);

(statearr_28288[(11)] = inst_28152);

(statearr_28288[(8)] = inst_28146__$1);

(statearr_28288[(9)] = inst_28144__$1);

(statearr_28288[(10)] = inst_28145__$1);

return statearr_28288;
})();
var statearr_28289_28372 = state_28283__$1;
(statearr_28289_28372[(2)] = null);

(statearr_28289_28372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (20))){
var inst_28186 = (state_28283[(12)]);
var inst_28194 = figwheel.client.file_reloading.sort_files.call(null,inst_28186);
var state_28283__$1 = state_28283;
var statearr_28290_28373 = state_28283__$1;
(statearr_28290_28373[(2)] = inst_28194);

(statearr_28290_28373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (27))){
var state_28283__$1 = state_28283;
var statearr_28291_28374 = state_28283__$1;
(statearr_28291_28374[(2)] = null);

(statearr_28291_28374[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (1))){
var inst_28135 = (state_28283[(13)]);
var inst_28132 = before_jsload.call(null,files);
var inst_28133 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28134 = (function (){return ((function (inst_28135,inst_28132,inst_28133,state_val_28284,c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28123_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28123_SHARP_);
});
;})(inst_28135,inst_28132,inst_28133,state_val_28284,c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28135__$1 = cljs.core.filter.call(null,inst_28134,files);
var inst_28136 = cljs.core.not_empty.call(null,inst_28135__$1);
var state_28283__$1 = (function (){var statearr_28292 = state_28283;
(statearr_28292[(13)] = inst_28135__$1);

(statearr_28292[(14)] = inst_28132);

(statearr_28292[(15)] = inst_28133);

return statearr_28292;
})();
if(cljs.core.truth_(inst_28136)){
var statearr_28293_28375 = state_28283__$1;
(statearr_28293_28375[(1)] = (2));

} else {
var statearr_28294_28376 = state_28283__$1;
(statearr_28294_28376[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (24))){
var state_28283__$1 = state_28283;
var statearr_28295_28377 = state_28283__$1;
(statearr_28295_28377[(2)] = null);

(statearr_28295_28377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (39))){
var inst_28236 = (state_28283[(16)]);
var state_28283__$1 = state_28283;
var statearr_28296_28378 = state_28283__$1;
(statearr_28296_28378[(2)] = inst_28236);

(statearr_28296_28378[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (46))){
var inst_28278 = (state_28283[(2)]);
var state_28283__$1 = state_28283;
var statearr_28297_28379 = state_28283__$1;
(statearr_28297_28379[(2)] = inst_28278);

(statearr_28297_28379[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (4))){
var inst_28180 = (state_28283[(2)]);
var inst_28181 = cljs.core.List.EMPTY;
var inst_28182 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28181);
var inst_28183 = (function (){return ((function (inst_28180,inst_28181,inst_28182,state_val_28284,c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28124_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28124_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28124_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28124_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_28180,inst_28181,inst_28182,state_val_28284,c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28184 = cljs.core.filter.call(null,inst_28183,files);
var inst_28185 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28186 = cljs.core.concat.call(null,inst_28184,inst_28185);
var state_28283__$1 = (function (){var statearr_28298 = state_28283;
(statearr_28298[(12)] = inst_28186);

(statearr_28298[(17)] = inst_28182);

(statearr_28298[(18)] = inst_28180);

return statearr_28298;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28299_28380 = state_28283__$1;
(statearr_28299_28380[(1)] = (16));

} else {
var statearr_28300_28381 = state_28283__$1;
(statearr_28300_28381[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (15))){
var inst_28170 = (state_28283[(2)]);
var state_28283__$1 = state_28283;
var statearr_28301_28382 = state_28283__$1;
(statearr_28301_28382[(2)] = inst_28170);

(statearr_28301_28382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (21))){
var inst_28196 = (state_28283[(19)]);
var inst_28196__$1 = (state_28283[(2)]);
var inst_28197 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28196__$1);
var state_28283__$1 = (function (){var statearr_28302 = state_28283;
(statearr_28302[(19)] = inst_28196__$1);

return statearr_28302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28283__$1,(22),inst_28197);
} else {
if((state_val_28284 === (31))){
var inst_28281 = (state_28283[(2)]);
var state_28283__$1 = state_28283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28283__$1,inst_28281);
} else {
if((state_val_28284 === (32))){
var inst_28236 = (state_28283[(16)]);
var inst_28241 = inst_28236.cljs$lang$protocol_mask$partition0$;
var inst_28242 = (inst_28241 & (64));
var inst_28243 = inst_28236.cljs$core$ISeq$;
var inst_28244 = (cljs.core.PROTOCOL_SENTINEL === inst_28243);
var inst_28245 = ((inst_28242) || (inst_28244));
var state_28283__$1 = state_28283;
if(cljs.core.truth_(inst_28245)){
var statearr_28303_28383 = state_28283__$1;
(statearr_28303_28383[(1)] = (35));

} else {
var statearr_28304_28384 = state_28283__$1;
(statearr_28304_28384[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (40))){
var inst_28258 = (state_28283[(20)]);
var inst_28257 = (state_28283[(2)]);
var inst_28258__$1 = cljs.core.get.call(null,inst_28257,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28259 = cljs.core.get.call(null,inst_28257,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28260 = cljs.core.not_empty.call(null,inst_28258__$1);
var state_28283__$1 = (function (){var statearr_28305 = state_28283;
(statearr_28305[(20)] = inst_28258__$1);

(statearr_28305[(21)] = inst_28259);

return statearr_28305;
})();
if(cljs.core.truth_(inst_28260)){
var statearr_28306_28385 = state_28283__$1;
(statearr_28306_28385[(1)] = (41));

} else {
var statearr_28307_28386 = state_28283__$1;
(statearr_28307_28386[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (33))){
var state_28283__$1 = state_28283;
var statearr_28308_28387 = state_28283__$1;
(statearr_28308_28387[(2)] = false);

(statearr_28308_28387[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (13))){
var inst_28156 = (state_28283[(22)]);
var inst_28160 = cljs.core.chunk_first.call(null,inst_28156);
var inst_28161 = cljs.core.chunk_rest.call(null,inst_28156);
var inst_28162 = cljs.core.count.call(null,inst_28160);
var inst_28143 = inst_28161;
var inst_28144 = inst_28160;
var inst_28145 = inst_28162;
var inst_28146 = (0);
var state_28283__$1 = (function (){var statearr_28309 = state_28283;
(statearr_28309[(7)] = inst_28143);

(statearr_28309[(8)] = inst_28146);

(statearr_28309[(9)] = inst_28144);

(statearr_28309[(10)] = inst_28145);

return statearr_28309;
})();
var statearr_28310_28388 = state_28283__$1;
(statearr_28310_28388[(2)] = null);

(statearr_28310_28388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (22))){
var inst_28196 = (state_28283[(19)]);
var inst_28199 = (state_28283[(23)]);
var inst_28204 = (state_28283[(24)]);
var inst_28200 = (state_28283[(25)]);
var inst_28199__$1 = (state_28283[(2)]);
var inst_28200__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28199__$1);
var inst_28201 = (function (){var all_files = inst_28196;
var res_SINGLEQUOTE_ = inst_28199__$1;
var res = inst_28200__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28196,inst_28199,inst_28204,inst_28200,inst_28199__$1,inst_28200__$1,state_val_28284,c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28125_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28125_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28196,inst_28199,inst_28204,inst_28200,inst_28199__$1,inst_28200__$1,state_val_28284,c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28202 = cljs.core.filter.call(null,inst_28201,inst_28199__$1);
var inst_28203 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28204__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28203);
var inst_28205 = cljs.core.not_empty.call(null,inst_28204__$1);
var state_28283__$1 = (function (){var statearr_28311 = state_28283;
(statearr_28311[(23)] = inst_28199__$1);

(statearr_28311[(26)] = inst_28202);

(statearr_28311[(24)] = inst_28204__$1);

(statearr_28311[(25)] = inst_28200__$1);

return statearr_28311;
})();
if(cljs.core.truth_(inst_28205)){
var statearr_28312_28389 = state_28283__$1;
(statearr_28312_28389[(1)] = (23));

} else {
var statearr_28313_28390 = state_28283__$1;
(statearr_28313_28390[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (36))){
var state_28283__$1 = state_28283;
var statearr_28314_28391 = state_28283__$1;
(statearr_28314_28391[(2)] = false);

(statearr_28314_28391[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (41))){
var inst_28258 = (state_28283[(20)]);
var inst_28262 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28263 = cljs.core.map.call(null,inst_28262,inst_28258);
var inst_28264 = cljs.core.pr_str.call(null,inst_28263);
var inst_28265 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28264)].join('');
var inst_28266 = figwheel.client.utils.log.call(null,inst_28265);
var state_28283__$1 = state_28283;
var statearr_28315_28392 = state_28283__$1;
(statearr_28315_28392[(2)] = inst_28266);

(statearr_28315_28392[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (43))){
var inst_28259 = (state_28283[(21)]);
var inst_28269 = (state_28283[(2)]);
var inst_28270 = cljs.core.not_empty.call(null,inst_28259);
var state_28283__$1 = (function (){var statearr_28316 = state_28283;
(statearr_28316[(27)] = inst_28269);

return statearr_28316;
})();
if(cljs.core.truth_(inst_28270)){
var statearr_28317_28393 = state_28283__$1;
(statearr_28317_28393[(1)] = (44));

} else {
var statearr_28318_28394 = state_28283__$1;
(statearr_28318_28394[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (29))){
var inst_28196 = (state_28283[(19)]);
var inst_28199 = (state_28283[(23)]);
var inst_28202 = (state_28283[(26)]);
var inst_28204 = (state_28283[(24)]);
var inst_28200 = (state_28283[(25)]);
var inst_28236 = (state_28283[(16)]);
var inst_28232 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28235 = (function (){var all_files = inst_28196;
var res_SINGLEQUOTE_ = inst_28199;
var res = inst_28200;
var files_not_loaded = inst_28202;
var dependencies_that_loaded = inst_28204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28196,inst_28199,inst_28202,inst_28204,inst_28200,inst_28236,inst_28232,state_val_28284,c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28234){
var map__28319 = p__28234;
var map__28319__$1 = (((((!((map__28319 == null))))?(((((map__28319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28319):map__28319);
var namespace = cljs.core.get.call(null,map__28319__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28196,inst_28199,inst_28202,inst_28204,inst_28200,inst_28236,inst_28232,state_val_28284,c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28236__$1 = cljs.core.group_by.call(null,inst_28235,inst_28202);
var inst_28238 = (inst_28236__$1 == null);
var inst_28239 = cljs.core.not.call(null,inst_28238);
var state_28283__$1 = (function (){var statearr_28321 = state_28283;
(statearr_28321[(28)] = inst_28232);

(statearr_28321[(16)] = inst_28236__$1);

return statearr_28321;
})();
if(inst_28239){
var statearr_28322_28395 = state_28283__$1;
(statearr_28322_28395[(1)] = (32));

} else {
var statearr_28323_28396 = state_28283__$1;
(statearr_28323_28396[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (44))){
var inst_28259 = (state_28283[(21)]);
var inst_28272 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28259);
var inst_28273 = cljs.core.pr_str.call(null,inst_28272);
var inst_28274 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28273)].join('');
var inst_28275 = figwheel.client.utils.log.call(null,inst_28274);
var state_28283__$1 = state_28283;
var statearr_28324_28397 = state_28283__$1;
(statearr_28324_28397[(2)] = inst_28275);

(statearr_28324_28397[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (6))){
var inst_28177 = (state_28283[(2)]);
var state_28283__$1 = state_28283;
var statearr_28325_28398 = state_28283__$1;
(statearr_28325_28398[(2)] = inst_28177);

(statearr_28325_28398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (28))){
var inst_28202 = (state_28283[(26)]);
var inst_28229 = (state_28283[(2)]);
var inst_28230 = cljs.core.not_empty.call(null,inst_28202);
var state_28283__$1 = (function (){var statearr_28326 = state_28283;
(statearr_28326[(29)] = inst_28229);

return statearr_28326;
})();
if(cljs.core.truth_(inst_28230)){
var statearr_28327_28399 = state_28283__$1;
(statearr_28327_28399[(1)] = (29));

} else {
var statearr_28328_28400 = state_28283__$1;
(statearr_28328_28400[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (25))){
var inst_28200 = (state_28283[(25)]);
var inst_28216 = (state_28283[(2)]);
var inst_28217 = cljs.core.not_empty.call(null,inst_28200);
var state_28283__$1 = (function (){var statearr_28329 = state_28283;
(statearr_28329[(30)] = inst_28216);

return statearr_28329;
})();
if(cljs.core.truth_(inst_28217)){
var statearr_28330_28401 = state_28283__$1;
(statearr_28330_28401[(1)] = (26));

} else {
var statearr_28331_28402 = state_28283__$1;
(statearr_28331_28402[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (34))){
var inst_28252 = (state_28283[(2)]);
var state_28283__$1 = state_28283;
if(cljs.core.truth_(inst_28252)){
var statearr_28332_28403 = state_28283__$1;
(statearr_28332_28403[(1)] = (38));

} else {
var statearr_28333_28404 = state_28283__$1;
(statearr_28333_28404[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (17))){
var state_28283__$1 = state_28283;
var statearr_28334_28405 = state_28283__$1;
(statearr_28334_28405[(2)] = recompile_dependents);

(statearr_28334_28405[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (3))){
var state_28283__$1 = state_28283;
var statearr_28335_28406 = state_28283__$1;
(statearr_28335_28406[(2)] = null);

(statearr_28335_28406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (12))){
var inst_28173 = (state_28283[(2)]);
var state_28283__$1 = state_28283;
var statearr_28336_28407 = state_28283__$1;
(statearr_28336_28407[(2)] = inst_28173);

(statearr_28336_28407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (2))){
var inst_28135 = (state_28283[(13)]);
var inst_28142 = cljs.core.seq.call(null,inst_28135);
var inst_28143 = inst_28142;
var inst_28144 = null;
var inst_28145 = (0);
var inst_28146 = (0);
var state_28283__$1 = (function (){var statearr_28337 = state_28283;
(statearr_28337[(7)] = inst_28143);

(statearr_28337[(8)] = inst_28146);

(statearr_28337[(9)] = inst_28144);

(statearr_28337[(10)] = inst_28145);

return statearr_28337;
})();
var statearr_28338_28408 = state_28283__$1;
(statearr_28338_28408[(2)] = null);

(statearr_28338_28408[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (23))){
var inst_28196 = (state_28283[(19)]);
var inst_28199 = (state_28283[(23)]);
var inst_28202 = (state_28283[(26)]);
var inst_28204 = (state_28283[(24)]);
var inst_28200 = (state_28283[(25)]);
var inst_28207 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28209 = (function (){var all_files = inst_28196;
var res_SINGLEQUOTE_ = inst_28199;
var res = inst_28200;
var files_not_loaded = inst_28202;
var dependencies_that_loaded = inst_28204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28196,inst_28199,inst_28202,inst_28204,inst_28200,inst_28207,state_val_28284,c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28208){
var map__28339 = p__28208;
var map__28339__$1 = (((((!((map__28339 == null))))?(((((map__28339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28339):map__28339);
var request_url = cljs.core.get.call(null,map__28339__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28196,inst_28199,inst_28202,inst_28204,inst_28200,inst_28207,state_val_28284,c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28210 = cljs.core.reverse.call(null,inst_28204);
var inst_28211 = cljs.core.map.call(null,inst_28209,inst_28210);
var inst_28212 = cljs.core.pr_str.call(null,inst_28211);
var inst_28213 = figwheel.client.utils.log.call(null,inst_28212);
var state_28283__$1 = (function (){var statearr_28341 = state_28283;
(statearr_28341[(31)] = inst_28207);

return statearr_28341;
})();
var statearr_28342_28409 = state_28283__$1;
(statearr_28342_28409[(2)] = inst_28213);

(statearr_28342_28409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (35))){
var state_28283__$1 = state_28283;
var statearr_28343_28410 = state_28283__$1;
(statearr_28343_28410[(2)] = true);

(statearr_28343_28410[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (19))){
var inst_28186 = (state_28283[(12)]);
var inst_28192 = figwheel.client.file_reloading.expand_files.call(null,inst_28186);
var state_28283__$1 = state_28283;
var statearr_28344_28411 = state_28283__$1;
(statearr_28344_28411[(2)] = inst_28192);

(statearr_28344_28411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (11))){
var state_28283__$1 = state_28283;
var statearr_28345_28412 = state_28283__$1;
(statearr_28345_28412[(2)] = null);

(statearr_28345_28412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (9))){
var inst_28175 = (state_28283[(2)]);
var state_28283__$1 = state_28283;
var statearr_28346_28413 = state_28283__$1;
(statearr_28346_28413[(2)] = inst_28175);

(statearr_28346_28413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (5))){
var inst_28146 = (state_28283[(8)]);
var inst_28145 = (state_28283[(10)]);
var inst_28148 = (inst_28146 < inst_28145);
var inst_28149 = inst_28148;
var state_28283__$1 = state_28283;
if(cljs.core.truth_(inst_28149)){
var statearr_28347_28414 = state_28283__$1;
(statearr_28347_28414[(1)] = (7));

} else {
var statearr_28348_28415 = state_28283__$1;
(statearr_28348_28415[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (14))){
var inst_28156 = (state_28283[(22)]);
var inst_28165 = cljs.core.first.call(null,inst_28156);
var inst_28166 = figwheel.client.file_reloading.eval_body.call(null,inst_28165,opts);
var inst_28167 = cljs.core.next.call(null,inst_28156);
var inst_28143 = inst_28167;
var inst_28144 = null;
var inst_28145 = (0);
var inst_28146 = (0);
var state_28283__$1 = (function (){var statearr_28349 = state_28283;
(statearr_28349[(7)] = inst_28143);

(statearr_28349[(32)] = inst_28166);

(statearr_28349[(8)] = inst_28146);

(statearr_28349[(9)] = inst_28144);

(statearr_28349[(10)] = inst_28145);

return statearr_28349;
})();
var statearr_28350_28416 = state_28283__$1;
(statearr_28350_28416[(2)] = null);

(statearr_28350_28416[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (45))){
var state_28283__$1 = state_28283;
var statearr_28351_28417 = state_28283__$1;
(statearr_28351_28417[(2)] = null);

(statearr_28351_28417[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (26))){
var inst_28196 = (state_28283[(19)]);
var inst_28199 = (state_28283[(23)]);
var inst_28202 = (state_28283[(26)]);
var inst_28204 = (state_28283[(24)]);
var inst_28200 = (state_28283[(25)]);
var inst_28219 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28221 = (function (){var all_files = inst_28196;
var res_SINGLEQUOTE_ = inst_28199;
var res = inst_28200;
var files_not_loaded = inst_28202;
var dependencies_that_loaded = inst_28204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28196,inst_28199,inst_28202,inst_28204,inst_28200,inst_28219,state_val_28284,c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28220){
var map__28352 = p__28220;
var map__28352__$1 = (((((!((map__28352 == null))))?(((((map__28352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28352):map__28352);
var namespace = cljs.core.get.call(null,map__28352__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28352__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28196,inst_28199,inst_28202,inst_28204,inst_28200,inst_28219,state_val_28284,c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28222 = cljs.core.map.call(null,inst_28221,inst_28200);
var inst_28223 = cljs.core.pr_str.call(null,inst_28222);
var inst_28224 = figwheel.client.utils.log.call(null,inst_28223);
var inst_28225 = (function (){var all_files = inst_28196;
var res_SINGLEQUOTE_ = inst_28199;
var res = inst_28200;
var files_not_loaded = inst_28202;
var dependencies_that_loaded = inst_28204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28196,inst_28199,inst_28202,inst_28204,inst_28200,inst_28219,inst_28221,inst_28222,inst_28223,inst_28224,state_val_28284,c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28196,inst_28199,inst_28202,inst_28204,inst_28200,inst_28219,inst_28221,inst_28222,inst_28223,inst_28224,state_val_28284,c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28226 = setTimeout(inst_28225,(10));
var state_28283__$1 = (function (){var statearr_28354 = state_28283;
(statearr_28354[(33)] = inst_28224);

(statearr_28354[(34)] = inst_28219);

return statearr_28354;
})();
var statearr_28355_28418 = state_28283__$1;
(statearr_28355_28418[(2)] = inst_28226);

(statearr_28355_28418[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (16))){
var state_28283__$1 = state_28283;
var statearr_28356_28419 = state_28283__$1;
(statearr_28356_28419[(2)] = reload_dependents);

(statearr_28356_28419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (38))){
var inst_28236 = (state_28283[(16)]);
var inst_28254 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28236);
var state_28283__$1 = state_28283;
var statearr_28357_28420 = state_28283__$1;
(statearr_28357_28420[(2)] = inst_28254);

(statearr_28357_28420[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (30))){
var state_28283__$1 = state_28283;
var statearr_28358_28421 = state_28283__$1;
(statearr_28358_28421[(2)] = null);

(statearr_28358_28421[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (10))){
var inst_28156 = (state_28283[(22)]);
var inst_28158 = cljs.core.chunked_seq_QMARK_.call(null,inst_28156);
var state_28283__$1 = state_28283;
if(inst_28158){
var statearr_28359_28422 = state_28283__$1;
(statearr_28359_28422[(1)] = (13));

} else {
var statearr_28360_28423 = state_28283__$1;
(statearr_28360_28423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (18))){
var inst_28190 = (state_28283[(2)]);
var state_28283__$1 = state_28283;
if(cljs.core.truth_(inst_28190)){
var statearr_28361_28424 = state_28283__$1;
(statearr_28361_28424[(1)] = (19));

} else {
var statearr_28362_28425 = state_28283__$1;
(statearr_28362_28425[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (42))){
var state_28283__$1 = state_28283;
var statearr_28363_28426 = state_28283__$1;
(statearr_28363_28426[(2)] = null);

(statearr_28363_28426[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (37))){
var inst_28249 = (state_28283[(2)]);
var state_28283__$1 = state_28283;
var statearr_28364_28427 = state_28283__$1;
(statearr_28364_28427[(2)] = inst_28249);

(statearr_28364_28427[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28284 === (8))){
var inst_28143 = (state_28283[(7)]);
var inst_28156 = (state_28283[(22)]);
var inst_28156__$1 = cljs.core.seq.call(null,inst_28143);
var state_28283__$1 = (function (){var statearr_28365 = state_28283;
(statearr_28365[(22)] = inst_28156__$1);

return statearr_28365;
})();
if(inst_28156__$1){
var statearr_28366_28428 = state_28283__$1;
(statearr_28366_28428[(1)] = (10));

} else {
var statearr_28367_28429 = state_28283__$1;
(statearr_28367_28429[(1)] = (11));

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
});})(c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24339__auto__,c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24340__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24340__auto____0 = (function (){
var statearr_28368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28368[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24340__auto__);

(statearr_28368[(1)] = (1));

return statearr_28368;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24340__auto____1 = (function (state_28283){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_28283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e28369){if((e28369 instanceof Object)){
var ex__24343__auto__ = e28369;
var statearr_28370_28430 = state_28283;
(statearr_28370_28430[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28431 = state_28283;
state_28283 = G__28431;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24340__auto__ = function(state_28283){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24340__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24340__auto____1.call(this,state_28283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24340__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24340__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24436__auto__ = (function (){var statearr_28371 = f__24435__auto__.call(null);
(statearr_28371[(6)] = c__24434__auto__);

return statearr_28371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto__,map__28128,map__28128__$1,opts,before_jsload,on_jsload,reload_dependents,map__28129,map__28129__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24434__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28434,link){
var map__28435 = p__28434;
var map__28435__$1 = (((((!((map__28435 == null))))?(((((map__28435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28435):map__28435);
var file = cljs.core.get.call(null,map__28435__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__28435,map__28435__$1,file){
return (function (p1__28432_SHARP_,p2__28433_SHARP_){
if(cljs.core._EQ_.call(null,p1__28432_SHARP_,p2__28433_SHARP_)){
return p1__28432_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__28435,map__28435__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28438){
var map__28439 = p__28438;
var map__28439__$1 = (((((!((map__28439 == null))))?(((((map__28439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28439):map__28439);
var match_length = cljs.core.get.call(null,map__28439__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28439__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28437_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28437_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28441_SHARP_,p2__28442_SHARP_){
return cljs.core.assoc.call(null,p1__28441_SHARP_,cljs.core.get.call(null,p2__28442_SHARP_,key),p2__28442_SHARP_);
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
var loaded_f_datas_28443 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28443);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28443);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28444,p__28445){
var map__28446 = p__28444;
var map__28446__$1 = (((((!((map__28446 == null))))?(((((map__28446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28446):map__28446);
var on_cssload = cljs.core.get.call(null,map__28446__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28447 = p__28445;
var map__28447__$1 = (((((!((map__28447 == null))))?(((((map__28447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28447):map__28447);
var files_msg = map__28447__$1;
var files = cljs.core.get.call(null,map__28447__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1543683808309
