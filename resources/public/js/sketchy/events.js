// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.events');
goog.require('cljs.core');
goog.require('sketchy.db');
goog.require('reagent.core');
goog.require('re_frame.core');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"initialise","initialise",1962682894),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"local-store-ideas","local-store-ideas",901171036))], null),(function (p__1974,_){
var map__1975 = p__1974;
var map__1975__$1 = (((((!((map__1975 == null))))?(((((map__1975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1975):map__1975);
var db = cljs.core.get.call(null,map__1975__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_ideas = cljs.core.get.call(null,map__1975__$1,new cljs.core.Keyword(null,"local-store-ideas","local-store-ideas",901171036));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),local_store_ideas], null);
}));
sketchy.events.__GT_storage = re_frame.core.after.call(null,sketchy.db.ideas__GT_storage);
sketchy.events.any_idea_QMARK_ = (function sketchy$events$any_idea_QMARK_(i){
if(cljs.core._EQ_.call(null,"",i)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"You can think of",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)," something"], null),"!"], null);
} else {
return i;
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-idea","add-idea",1077176467),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.events.__GT_storage], null),(function (db,p__1977){
var vec__1978 = p__1977;
var _ = cljs.core.nth.call(null,vec__1978,(0),null);
var idea = cljs.core.nth.call(null,vec__1978,(1),null);
return cljs.core.conj.call(null,db,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idea","idea",-951312199),sketchy.events.any_idea_QMARK_.call(null,idea),new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"keywords","keywords",1526959054),cljs.core.PersistentVector.EMPTY], null));
}));
sketchy.events.remove_idea = (function sketchy$events$remove_idea(is,i){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,(function (p1__1981_SHARP_){
return cljs.core._EQ_.call(null,i,new cljs.core.Keyword(null,"idea","idea",-951312199).cljs$core$IFn$_invoke$arity$1(p1__1981_SHARP_));
})),is);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-idea","remove-idea",441629595),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.events.__GT_storage], null),(function (db,p__1982){
var vec__1983 = p__1982;
var _ = cljs.core.nth.call(null,vec__1983,(0),null);
var idea = cljs.core.nth.call(null,vec__1983,(1),null);
return sketchy.events.remove_idea.call(null,db,idea);
}));
sketchy.events.inserting_comment = (function sketchy$events$inserting_comment(m,c){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.conj.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(m),c));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-comment","add-comment",-1169367708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.events.__GT_storage], null),(function (db,p__1986){
var vec__1987 = p__1986;
var _ = cljs.core.nth.call(null,vec__1987,(0),null);
var idea = cljs.core.nth.call(null,vec__1987,(1),null);
var comment = cljs.core.nth.call(null,vec__1987,(2),null);
return null;
}));

//# sourceMappingURL=events.js.map?rel=1545151556594
