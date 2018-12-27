// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.events');
goog.require('cljs.core');
goog.require('sketchy.db');
goog.require('reagent.core');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_.call(null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"initialise","initialise",1962682894),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"local-store-ideas","local-store-ideas",901171036))], null),(function (p__23741,_){
var map__23742 = p__23741;
var map__23742__$1 = (((((!((map__23742 == null))))?(((((map__23742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23742):map__23742);
var db = cljs.core.get.call(null,map__23742__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_ideas = cljs.core.get.call(null,map__23742__$1,new cljs.core.Keyword(null,"local-store-ideas","local-store-ideas",901171036));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),local_store_ideas], null);
}));
sketchy.events.__GT_storage = re_frame.core.after.call(null,sketchy.db.ideas__GT_storage);
sketchy.events.inc_id = (function sketchy$events$inc_id(db){
return (cljs.core.last.call(null,cljs.core.keys.call(null,db)) + (1));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-idea","add-idea",1077176467),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.events.__GT_storage], null),(function (db,p__23744){
var vec__23745 = p__23744;
var _ = cljs.core.nth.call(null,vec__23745,(0),null);
var id = cljs.core.nth.call(null,vec__23745,(1),null);
var idea = cljs.core.nth.call(null,vec__23745,(2),null);
return cljs.core.assoc.call(null,db,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idea","idea",-951312199),idea,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"keywords","keywords",1526959054),cljs.core.PersistentVector.EMPTY], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-idea","remove-idea",441629595),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.events.__GT_storage], null),(function (db,p__23748){
var vec__23749 = p__23748;
var _ = cljs.core.nth.call(null,vec__23749,(0),null);
var id = cljs.core.nth.call(null,vec__23749,(1),null);
return cljs.core.dissoc.call(null,db,id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-comment","add-comment",-1169367708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.events.__GT_storage], null),(function (db,p__23752){
var vec__23753 = p__23752;
var _ = cljs.core.nth.call(null,vec__23753,(0),null);
var id = cljs.core.nth.call(null,vec__23753,(1),null);
var comment = cljs.core.nth.call(null,vec__23753,(2),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"comments","comments",-293346423)], null),cljs.core.conj,comment);
}));
sketchy.events.delete_item = (function sketchy$events$delete_item(db,meta_data){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,(function (p1__23756_SHARP_){
return cljs.core._EQ_.call(null,p1__23756_SHARP_,meta_data);
})),db);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-comment","remove-comment",1263433912),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.events.__GT_storage], null),(function (db,p__23757){
var vec__23758 = p__23757;
var _ = cljs.core.nth.call(null,vec__23758,(0),null);
var id = cljs.core.nth.call(null,vec__23758,(1),null);
var comment = cljs.core.nth.call(null,vec__23758,(2),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"comments","comments",-293346423)], null),sketchy.events.delete_item,comment);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-keyword","add-keyword",-499948334),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.events.__GT_storage], null),(function (db,p__23761){
var vec__23762 = p__23761;
var _ = cljs.core.nth.call(null,vec__23762,(0),null);
var id = cljs.core.nth.call(null,vec__23762,(1),null);
var kw = cljs.core.nth.call(null,vec__23762,(2),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"keywords","keywords",1526959054)], null),cljs.core.conj,kw);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-keyword","remove-keyword",-1152099743),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.events.__GT_storage], null),(function (db,p__23765){
var vec__23766 = p__23765;
var _ = cljs.core.nth.call(null,vec__23766,(0),null);
var id = cljs.core.nth.call(null,vec__23766,(1),null);
var kw = cljs.core.nth.call(null,vec__23766,(2),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"keywords","keywords",1526959054)], null),sketchy.events.delete_item,kw);
}));

//# sourceMappingURL=events.js.map?rel=1545905839065
