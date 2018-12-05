// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__30191__delegate = function (x__30175__auto__){
if(cljs.core.truth_(sketchy.core.main)){
return cljs.core.apply.call(null,sketchy.core.main,x__30175__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("sketchy.core/main"),"' is missing"].join(''));
}
};
var G__30191 = function (var_args){
var x__30175__auto__ = null;
if (arguments.length > 0) {
var G__30192__i = 0, G__30192__a = new Array(arguments.length -  0);
while (G__30192__i < G__30192__a.length) {G__30192__a[G__30192__i] = arguments[G__30192__i + 0]; ++G__30192__i;}
  x__30175__auto__ = new cljs.core.IndexedSeq(G__30192__a,0,null);
} 
return G__30191__delegate.call(this,x__30175__auto__);};
G__30191.cljs$lang$maxFixedArity = 0;
G__30191.cljs$lang$applyTo = (function (arglist__30193){
var x__30175__auto__ = cljs.core.seq(arglist__30193);
return G__30191__delegate(x__30175__auto__);
});
G__30191.cljs$core$IFn$_invoke$arity$variadic = G__30191__delegate;
return G__30191;
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

//# sourceMappingURL=connect.js.map?rel=1544001719223
