// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialise","initialise",1962682894),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ideas","ideas",476314838),cljs.core.PersistentVector.EMPTY], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-idea","add-idea",1077176467),(function (db,p__23311){
var vec__23312 = p__23311;
var _ = cljs.core.nth.call(null,vec__23312,(0),null);
var idea = cljs.core.nth.call(null,vec__23312,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ideas","ideas",476314838)], null),cljs.core.conj,idea);
}));
sketchy.events.remove_idea = (function sketchy$events$remove_idea(is,i){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,(function (p1__23315_SHARP_){
return cljs.core._EQ_.call(null,p1__23315_SHARP_,i);
})),is);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-idea","remove-idea",441629595),(function (db,p__23316){
var vec__23317 = p__23316;
var _ = cljs.core.nth.call(null,vec__23317,(0),null);
var idea = cljs.core.nth.call(null,vec__23317,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ideas","ideas",476314838)], null),sketchy.events.remove_idea,idea);
}));

//# sourceMappingURL=events.js.map?rel=1544650581225
