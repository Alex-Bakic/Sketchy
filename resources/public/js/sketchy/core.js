// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('sketchy.components.show_ideas');
goog.require('sketchy.components.add_ideas');
goog.require('sketchy.db');
goog.require('sketchy.events');
goog.require('sketchy.subs');
sketchy.core.ui = (function sketchy$core$ui(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ui","div#ui",1361076716),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.components.add_ideas.add_idea], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"All your ideas"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.components.show_ideas.show_all_ideas], null)], null);
});
sketchy.core.start = (function sketchy$core$start(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise","initialise",1962682894)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.core.ui], null),document.getElementById("root"));
});
goog.exportSymbol('sketchy.core.start', sketchy.core.start);

//# sourceMappingURL=core.js.map?rel=1545932600965
