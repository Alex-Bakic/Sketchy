// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.events');
goog.require('cljs.core');
goog.require('sketchy.db');
goog.require('reagent.core');
goog.require('re_frame.core');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"initialise","initialise",1962682894),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"local-store-ideas","local-store-ideas",901171036))], null),(function (p__22414,_){
var map__22415 = p__22414;
var map__22415__$1 = (((((!((map__22415 == null))))?(((((map__22415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22415):map__22415);
var db = cljs.core.get.call(null,map__22415__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_ideas = cljs.core.get.call(null,map__22415__$1,new cljs.core.Keyword(null,"local-store-ideas","local-store-ideas",901171036));
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-idea","add-idea",1077176467),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.events.__GT_storage], null),(function (db,p__22417){
var vec__22418 = p__22417;
var _ = cljs.core.nth.call(null,vec__22418,(0),null);
var idea = cljs.core.nth.call(null,vec__22418,(1),null);
return cljs.core.conj.call(null,db,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idea","idea",-951312199),sketchy.events.any_idea_QMARK_.call(null,idea),new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"keywords","keywords",1526959054),cljs.core.PersistentVector.EMPTY], null));
}));
sketchy.events.remove_idea = (function sketchy$events$remove_idea(is,i){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,(function (p1__22421_SHARP_){
return cljs.core._EQ_.call(null,i,new cljs.core.Keyword(null,"idea","idea",-951312199).cljs$core$IFn$_invoke$arity$1(p1__22421_SHARP_));
})),is);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-idea","remove-idea",441629595),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.events.__GT_storage], null),(function (db,p__22422){
var vec__22423 = p__22422;
var _ = cljs.core.nth.call(null,vec__22423,(0),null);
var idea = cljs.core.nth.call(null,vec__22423,(1),null);
return sketchy.events.remove_idea.call(null,db,idea);
}));
sketchy.events.finding_index = (function sketchy$events$finding_index(db,idea){
return db.indexOf(cljs.core.first.call(null,cljs.core.filterv.call(null,(function (p1__22426_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"idea","idea",-951312199).cljs$core$IFn$_invoke$arity$1(p1__22426_SHARP_),idea);
}),db)));
});
sketchy.events.update_ideas = (function sketchy$events$update_ideas(db,idea,k,f,v){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.events.finding_index.call(null,db,idea),k], null),f,v);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-comment","add-comment",-1169367708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.events.__GT_storage], null),(function (db,p__22427){
var vec__22428 = p__22427;
var _ = cljs.core.nth.call(null,vec__22428,(0),null);
var idea = cljs.core.nth.call(null,vec__22428,(1),null);
var comment = cljs.core.nth.call(null,vec__22428,(2),null);
return sketchy.events.update_ideas.call(null,db,idea,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.conj,comment);
}));
sketchy.events.remove_comment = (function sketchy$events$remove_comment(db,comment){
return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__22431_SHARP_){
return cljs.core._EQ_.call(null,p1__22431_SHARP_,comment);
}),db));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-comment","remove-comment",1263433912),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.events.__GT_storage], null),(function (db,p__22432){
var vec__22433 = p__22432;
var _ = cljs.core.nth.call(null,vec__22433,(0),null);
var idea = cljs.core.nth.call(null,vec__22433,(1),null);
var comment = cljs.core.nth.call(null,vec__22433,(2),null);
return sketchy.events.update_ideas.call(null,db,idea,new cljs.core.Keyword(null,"comments","comments",-293346423),sketchy.events.remove_comment,comment);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-keyword","add-keyword",-499948334),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.events.__GT_storage], null),(function (db,p__22436){
var vec__22437 = p__22436;
var _ = cljs.core.nth.call(null,vec__22437,(0),null);
var idea = cljs.core.nth.call(null,vec__22437,(1),null);
var kw = cljs.core.nth.call(null,vec__22437,(2),null);
return sketchy.events.update_ideas.call(null,db,idea,new cljs.core.Keyword(null,"keywords","keywords",1526959054),cljs.core.conj,kw);
}));
sketchy.events.remove_keyword = (function sketchy$events$remove_keyword(db,kw){
return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__22440_SHARP_){
return cljs.core._EQ_.call(null,p1__22440_SHARP_,kw);
}),db));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-keyword","remove-keyword",-1152099743),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.events.__GT_storage], null),(function (db,p__22441){
var vec__22442 = p__22441;
var _ = cljs.core.nth.call(null,vec__22442,(0),null);
var idea = cljs.core.nth.call(null,vec__22442,(1),null);
var kw = cljs.core.nth.call(null,vec__22442,(2),null);
return sketchy.events.update_ideas.call(null,db,idea,new cljs.core.Keyword(null,"keywords","keywords",1526959054),sketchy.events.remove_keyword,kw);
}));

//# sourceMappingURL=events.js.map?rel=1545212918399
