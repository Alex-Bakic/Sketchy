// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__30696__delegate = function (x__30680__auto__){
if(cljs.core.truth_(sketchy.core._main)){
return cljs.core.apply.call(null,sketchy.core._main,x__30680__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("sketchy.core/-main"),"' is missing"].join(''));
}
};
var G__30696 = function (var_args){
var x__30680__auto__ = null;
if (arguments.length > 0) {
var G__30697__i = 0, G__30697__a = new Array(arguments.length -  0);
while (G__30697__i < G__30697__a.length) {G__30697__a[G__30697__i] = arguments[G__30697__i + 0]; ++G__30697__i;}
  x__30680__auto__ = new cljs.core.IndexedSeq(G__30697__a,0,null);
} 
return G__30696__delegate.call(this,x__30680__auto__);};
G__30696.cljs$lang$maxFixedArity = 0;
G__30696.cljs$lang$applyTo = (function (arglist__30698){
var x__30680__auto__ = cljs.core.seq(arglist__30698);
return G__30696__delegate(x__30680__auto__);
});
G__30696.cljs$core$IFn$_invoke$arity$variadic = G__30696__delegate;
return G__30696;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"client",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3450/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1544468030885
