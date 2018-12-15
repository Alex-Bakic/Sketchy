// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.db');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('alandipert.storage_atom');
sketchy.db.db = alandipert.storage_atom.local_storage.call(null,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"db","db",993250759));
sketchy.db.ideas__GT_storage = (function sketchy$db$ideas__GT_storage(ideas){
return cljs.core.swap_BANG_.call(null,sketchy.db.db,cljs.core.conj,ideas);
});
sketchy.db.remove_idea = (function sketchy$db$remove_idea(is,i){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,(function (p1__28270_SHARP_){
return cljs.core._EQ_.call(null,i,new cljs.core.Keyword(null,"idea","idea",-951312199).cljs$core$IFn$_invoke$arity$1(p1__28270_SHARP_));
})),is);
});
sketchy.db.storage__GT_trash = (function sketchy$db$storage__GT_trash(idea){
return cljs.core.swap_BANG_.call(null,sketchy.db.db,sketchy.db.remove_idea,idea);
});
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword(null,"local-store-ideas","local-store-ideas",901171036),(function (cofx,_){
return cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"local-store-ideas","local-store-ideas",901171036),cljs.core.deref.call(null,sketchy.db.db));
}));

//# sourceMappingURL=db.js.map?rel=1544894587551
