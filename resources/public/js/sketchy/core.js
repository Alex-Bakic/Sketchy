// Compiled by ClojureScript 1.10.439 {}
goog.provide('sketchy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
sketchy.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contacts","contacts",333503174),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),"Ben",new cljs.core.Keyword(null,"last","last",1105735132),"Bitdiddle",new cljs.core.Keyword(null,"email","email",1415816706),"benb@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Alyssa",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"P",new cljs.core.Keyword(null,"last","last",1105735132),"Hacker",new cljs.core.Keyword(null,"email","email",1415816706),"aphacker@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Eva",new cljs.core.Keyword(null,"middle","middle",-701029031),"Lu",new cljs.core.Keyword(null,"last","last",1105735132),"Ator",new cljs.core.Keyword(null,"email","email",1415816706),"eval@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),"Louis",new cljs.core.Keyword(null,"last","last",1105735132),"Reasoner",new cljs.core.Keyword(null,"email","email",1415816706),"prolog@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Cy",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"D",new cljs.core.Keyword(null,"last","last",1105735132),"Effect",new cljs.core.Keyword(null,"email","email",1415816706),"bugs@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Lem",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"E",new cljs.core.Keyword(null,"last","last",1105735132),"Tweakit",new cljs.core.Keyword(null,"email","email",1415816706),"morebugs@mit.edu"], null)], null)], null));
sketchy.core.update_contacts_BANG_ = (function sketchy$core$update_contacts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___35591 = arguments.length;
var i__4642__auto___35592 = (0);
while(true){
if((i__4642__auto___35592 < len__4641__auto___35591)){
args__4647__auto__.push((arguments[i__4642__auto___35592]));

var G__35593 = (i__4642__auto___35592 + (1));
i__4642__auto___35592 = G__35593;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return sketchy.core.update_contacts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

sketchy.core.update_contacts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,sketchy.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contacts","contacts",333503174)], null),f,args);
});

sketchy.core.update_contacts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sketchy.core.update_contacts_BANG_.cljs$lang$applyTo = (function (seq35589){
var G__35590 = cljs.core.first.call(null,seq35589);
var seq35589__$1 = cljs.core.next.call(null,seq35589);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35590,seq35589__$1);
});

sketchy.core.add_contact_BANG_ = (function sketchy$core$add_contact_BANG_(c){
return sketchy.core.update_contacts_BANG_.call(null,cljs.core.conj,c);
});
sketchy.core.remove_contact_BANG_ = (function sketchy$core$remove_contact_BANG_(c){
return sketchy.core.update_contacts_BANG_.call(null,(function (cs){
return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__35594_SHARP_){
return cljs.core._EQ_.call(null,p1__35594_SHARP_,c);
}),cs));
}),c);
});
sketchy.core.middle_name = (function sketchy$core$middle_name(p__35595){
var map__35596 = p__35595;
var map__35596__$1 = (((((!((map__35596 == null))))?(((((map__35596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35596):map__35596);
var middle = cljs.core.get.call(null,map__35596__$1,new cljs.core.Keyword(null,"middle","middle",-701029031));
var middle_initial = cljs.core.get.call(null,map__35596__$1,new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765));
if(cljs.core.truth_(middle)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(middle)].join('');
} else {
if(cljs.core.truth_(middle_initial)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(middle_initial),"."].join('');
} else {
return null;
}
}
});
sketchy.core.display_name = (function sketchy$core$display_name(p__35598){
var map__35599 = p__35598;
var map__35599__$1 = (((((!((map__35599 == null))))?(((((map__35599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35599):map__35599);
var contact = map__35599__$1;
var first = cljs.core.get.call(null,map__35599__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__35599__$1,new cljs.core.Keyword(null,"last","last",1105735132));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(last),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sketchy.core.middle_name.call(null,contact))].join('');
});
sketchy.core.parse_contact = (function sketchy$core$parse_contact(contact_str){
var vec__35602 = clojure.string.split.call(null,contact_str,/\s+/);
var first = cljs.core.nth.call(null,vec__35602,(0),null);
var middle = cljs.core.nth.call(null,vec__35602,(1),null);
var last = cljs.core.nth.call(null,vec__35602,(2),null);
var parts = vec__35602;
var vec__35605 = (((last == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,middle], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last,middle], null));
var first__$1 = cljs.core.nth.call(null,vec__35605,(0),null);
var last__$1 = cljs.core.nth.call(null,vec__35605,(1),null);
var middle__$1 = cljs.core.nth.call(null,vec__35605,(2),null);
var middle__$2 = (cljs.core.truth_(middle__$1)?clojure.string.replace.call(null,middle__$1,".",""):null);
var c = (cljs.core.truth_(middle__$2)?cljs.core.count.call(null,middle__$2):(0));
if((cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__35602,first,middle,last,parts,vec__35605,first__$1,last__$1,middle__$1,middle__$2,c){
return (function (p1__35601_SHARP_){
if(cljs.core.truth_(p1__35601_SHARP_)){
return (1);
} else {
return (0);
}
});})(vec__35602,first,middle,last,parts,vec__35605,first__$1,last__$1,middle__$1,middle__$2,c))
,parts)) >= (2))){
var G__35608 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",-644103046),first__$1,new cljs.core.Keyword(null,"last","last",1105735132),last__$1], null);
var G__35608__$1 = (((c === (1)))?cljs.core.assoc.call(null,G__35608,new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),middle__$2):G__35608);
if((c >= (2))){
return cljs.core.assoc.call(null,G__35608__$1,new cljs.core.Keyword(null,"middle","middle",-701029031),middle__$2);
} else {
return G__35608__$1;
}
} else {
return null;
}
});
sketchy.core.contact = (function sketchy$core$contact(c){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),sketchy.core.display_name.call(null,c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return sketchy.core.remove_contact_BANG_.call(null,c);
})], null),"Delete"], null)], null);
});
sketchy.core.new_contact = (function sketchy$core$new_contact(){
var val = reagent.core.atom.call(null,"");
return ((function (val){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Contact Name",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val){
return (function (p1__35609_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__35609_SHARP_.target.value);
});})(val))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (val){
return (function (){
var temp__5457__auto__ = sketchy.core.parse_contact.call(null,cljs.core.deref.call(null,val));
if(cljs.core.truth_(temp__5457__auto__)){
var c = temp__5457__auto__;
sketchy.core.add_contact_BANG_.call(null,c);

return cljs.core.reset_BANG_.call(null,val,"");
} else {
return null;
}
});})(val))
], null),"Add"], null)], null);
});
;})(val))
});
sketchy.core.contact_list = (function sketchy$core$contact_list(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Contact list"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4434__auto__ = (function sketchy$core$contact_list_$_iter__35610(s__35611){
return (new cljs.core.LazySeq(null,(function (){
var s__35611__$1 = s__35611;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35611__$1);
if(temp__5457__auto__){
var s__35611__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35611__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__35611__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__35613 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__35612 = (0);
while(true){
if((i__35612 < size__4433__auto__)){
var c = cljs.core._nth.call(null,c__4432__auto__,i__35612);
cljs.core.chunk_append.call(null,b__35613,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.core.contact,c], null));

var G__35614 = (i__35612 + (1));
i__35612 = G__35614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35613),sketchy$core$contact_list_$_iter__35610.call(null,cljs.core.chunk_rest.call(null,s__35611__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35613),null);
}
} else {
var c = cljs.core.first.call(null,s__35611__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.core.contact,c], null),sketchy$core$contact_list_$_iter__35610.call(null,cljs.core.rest.call(null,s__35611__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sketchy.core.app_state)));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.core.new_contact], null)], null);
});
sketchy.core.start = (function sketchy$core$start(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketchy.core.contact_list], null),document.getElementById("root"));
});

//# sourceMappingURL=core.js.map?rel=1543684606445
