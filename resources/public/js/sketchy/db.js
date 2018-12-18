// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.db');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('re_frame.core');
goog.require('alandipert.storage_atom');
sketchy.db.ls_key = "db";
sketchy.db.ideas__GT_storage = (function sketchy$db$ideas__GT_storage(ideas){
return localStorage.setItem(sketchy.db.ls_key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ideas));
});
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword(null,"local-store-ideas","local-store-ideas",901171036),(function (cofx,_){
return cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"local-store-ideas","local-store-ideas",901171036),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var G__22414 = localStorage.getItem(sketchy.db.ls_key);
if((G__22414 == null)){
return null;
} else {
return cljs.reader.read_string.call(null,G__22414);
}
})()));
}));

//# sourceMappingURL=db.js.map?rel=1544959480040
