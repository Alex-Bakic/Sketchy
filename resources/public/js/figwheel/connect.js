// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__30050__delegate = function (x__30034__auto__){
if(cljs.core.truth_(sketchy.core.main)){
return cljs.core.apply.call(null,sketchy.core.main,x__30034__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("sketchy.core/main"),"' is missing"].join(''));
}
};
var G__30050 = function (var_args){
var x__30034__auto__ = null;
if (arguments.length > 0) {
var G__30051__i = 0, G__30051__a = new Array(arguments.length -  0);
while (G__30051__i < G__30051__a.length) {G__30051__a[G__30051__i] = arguments[G__30051__i + 0]; ++G__30051__i;}
  x__30034__auto__ = new cljs.core.IndexedSeq(G__30051__a,0,null);
} 
return G__30050__delegate.call(this,x__30034__auto__);};
G__30050.cljs$lang$maxFixedArity = 0;
G__30050.cljs$lang$applyTo = (function (arglist__30052){
var x__30034__auto__ = cljs.core.seq(arglist__30052);
return G__30050__delegate(x__30034__auto__);
});
G__30050.cljs$core$IFn$_invoke$arity$variadic = G__30050__delegate;
return G__30050;
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

//# sourceMappingURL=connect.js.map?rel=1543683812277
