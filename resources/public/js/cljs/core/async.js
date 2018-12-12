// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25144 = arguments.length;
switch (G__25144) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25145 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25145 = (function (f,blockable,meta25146){
this.f = f;
this.blockable = blockable;
this.meta25146 = meta25146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25147,meta25146__$1){
var self__ = this;
var _25147__$1 = this;
return (new cljs.core.async.t_cljs$core$async25145(self__.f,self__.blockable,meta25146__$1));
});

cljs.core.async.t_cljs$core$async25145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25147){
var self__ = this;
var _25147__$1 = this;
return self__.meta25146;
});

cljs.core.async.t_cljs$core$async25145.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25145.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25145.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25145.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25146","meta25146",181144181,null)], null);
});

cljs.core.async.t_cljs$core$async25145.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25145";

cljs.core.async.t_cljs$core$async25145.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25145");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25145.
 */
cljs.core.async.__GT_t_cljs$core$async25145 = (function cljs$core$async$__GT_t_cljs$core$async25145(f__$1,blockable__$1,meta25146){
return (new cljs.core.async.t_cljs$core$async25145(f__$1,blockable__$1,meta25146));
});

}

return (new cljs.core.async.t_cljs$core$async25145(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25151 = arguments.length;
switch (G__25151) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25154 = arguments.length;
switch (G__25154) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25157 = arguments.length;
switch (G__25157) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25159 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25159);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25159,ret){
return (function (){
return fn1.call(null,val_25159);
});})(val_25159,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25161 = arguments.length;
switch (G__25161) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___25163 = n;
var x_25164 = (0);
while(true){
if((x_25164 < n__4518__auto___25163)){
(a[x_25164] = (0));

var G__25165 = (x_25164 + (1));
x_25164 = G__25165;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25166 = (i + (1));
i = G__25166;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25167 = (function (flag,meta25168){
this.flag = flag;
this.meta25168 = meta25168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25169,meta25168__$1){
var self__ = this;
var _25169__$1 = this;
return (new cljs.core.async.t_cljs$core$async25167(self__.flag,meta25168__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25169){
var self__ = this;
var _25169__$1 = this;
return self__.meta25168;
});})(flag))
;

cljs.core.async.t_cljs$core$async25167.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25167.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25167.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25168","meta25168",-1704856395,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25167";

cljs.core.async.t_cljs$core$async25167.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25167");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25167.
 */
cljs.core.async.__GT_t_cljs$core$async25167 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25167(flag__$1,meta25168){
return (new cljs.core.async.t_cljs$core$async25167(flag__$1,meta25168));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25167(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25170 = (function (flag,cb,meta25171){
this.flag = flag;
this.cb = cb;
this.meta25171 = meta25171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25172,meta25171__$1){
var self__ = this;
var _25172__$1 = this;
return (new cljs.core.async.t_cljs$core$async25170(self__.flag,self__.cb,meta25171__$1));
});

cljs.core.async.t_cljs$core$async25170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25172){
var self__ = this;
var _25172__$1 = this;
return self__.meta25171;
});

cljs.core.async.t_cljs$core$async25170.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25170.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25171","meta25171",170629271,null)], null);
});

cljs.core.async.t_cljs$core$async25170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25170";

cljs.core.async.t_cljs$core$async25170.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25170");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25170.
 */
cljs.core.async.__GT_t_cljs$core$async25170 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25170(flag__$1,cb__$1,meta25171){
return (new cljs.core.async.t_cljs$core$async25170(flag__$1,cb__$1,meta25171));
});

}

return (new cljs.core.async.t_cljs$core$async25170(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25173_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25173_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25174_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25174_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25175 = (i + (1));
i = G__25175;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___25181 = arguments.length;
var i__4642__auto___25182 = (0);
while(true){
if((i__4642__auto___25182 < len__4641__auto___25181)){
args__4647__auto__.push((arguments[i__4642__auto___25182]));

var G__25183 = (i__4642__auto___25182 + (1));
i__4642__auto___25182 = G__25183;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25178){
var map__25179 = p__25178;
var map__25179__$1 = (((((!((map__25179 == null))))?(((((map__25179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25179):map__25179);
var opts = map__25179__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25176){
var G__25177 = cljs.core.first.call(null,seq25176);
var seq25176__$1 = cljs.core.next.call(null,seq25176);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25177,seq25176__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25185 = arguments.length;
switch (G__25185) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25084__auto___25231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___25231){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___25231){
return (function (state_25209){
var state_val_25210 = (state_25209[(1)]);
if((state_val_25210 === (7))){
var inst_25205 = (state_25209[(2)]);
var state_25209__$1 = state_25209;
var statearr_25211_25232 = state_25209__$1;
(statearr_25211_25232[(2)] = inst_25205);

(statearr_25211_25232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (1))){
var state_25209__$1 = state_25209;
var statearr_25212_25233 = state_25209__$1;
(statearr_25212_25233[(2)] = null);

(statearr_25212_25233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (4))){
var inst_25188 = (state_25209[(7)]);
var inst_25188__$1 = (state_25209[(2)]);
var inst_25189 = (inst_25188__$1 == null);
var state_25209__$1 = (function (){var statearr_25213 = state_25209;
(statearr_25213[(7)] = inst_25188__$1);

return statearr_25213;
})();
if(cljs.core.truth_(inst_25189)){
var statearr_25214_25234 = state_25209__$1;
(statearr_25214_25234[(1)] = (5));

} else {
var statearr_25215_25235 = state_25209__$1;
(statearr_25215_25235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (13))){
var state_25209__$1 = state_25209;
var statearr_25216_25236 = state_25209__$1;
(statearr_25216_25236[(2)] = null);

(statearr_25216_25236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (6))){
var inst_25188 = (state_25209[(7)]);
var state_25209__$1 = state_25209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25209__$1,(11),to,inst_25188);
} else {
if((state_val_25210 === (3))){
var inst_25207 = (state_25209[(2)]);
var state_25209__$1 = state_25209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25209__$1,inst_25207);
} else {
if((state_val_25210 === (12))){
var state_25209__$1 = state_25209;
var statearr_25217_25237 = state_25209__$1;
(statearr_25217_25237[(2)] = null);

(statearr_25217_25237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (2))){
var state_25209__$1 = state_25209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25209__$1,(4),from);
} else {
if((state_val_25210 === (11))){
var inst_25198 = (state_25209[(2)]);
var state_25209__$1 = state_25209;
if(cljs.core.truth_(inst_25198)){
var statearr_25218_25238 = state_25209__$1;
(statearr_25218_25238[(1)] = (12));

} else {
var statearr_25219_25239 = state_25209__$1;
(statearr_25219_25239[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (9))){
var state_25209__$1 = state_25209;
var statearr_25220_25240 = state_25209__$1;
(statearr_25220_25240[(2)] = null);

(statearr_25220_25240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (5))){
var state_25209__$1 = state_25209;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25221_25241 = state_25209__$1;
(statearr_25221_25241[(1)] = (8));

} else {
var statearr_25222_25242 = state_25209__$1;
(statearr_25222_25242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (14))){
var inst_25203 = (state_25209[(2)]);
var state_25209__$1 = state_25209;
var statearr_25223_25243 = state_25209__$1;
(statearr_25223_25243[(2)] = inst_25203);

(statearr_25223_25243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (10))){
var inst_25195 = (state_25209[(2)]);
var state_25209__$1 = state_25209;
var statearr_25224_25244 = state_25209__$1;
(statearr_25224_25244[(2)] = inst_25195);

(statearr_25224_25244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (8))){
var inst_25192 = cljs.core.async.close_BANG_.call(null,to);
var state_25209__$1 = state_25209;
var statearr_25225_25245 = state_25209__$1;
(statearr_25225_25245[(2)] = inst_25192);

(statearr_25225_25245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25084__auto___25231))
;
return ((function (switch__24989__auto__,c__25084__auto___25231){
return (function() {
var cljs$core$async$state_machine__24990__auto__ = null;
var cljs$core$async$state_machine__24990__auto____0 = (function (){
var statearr_25226 = [null,null,null,null,null,null,null,null];
(statearr_25226[(0)] = cljs$core$async$state_machine__24990__auto__);

(statearr_25226[(1)] = (1));

return statearr_25226;
});
var cljs$core$async$state_machine__24990__auto____1 = (function (state_25209){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_25209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e25227){if((e25227 instanceof Object)){
var ex__24993__auto__ = e25227;
var statearr_25228_25246 = state_25209;
(statearr_25228_25246[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25247 = state_25209;
state_25209 = G__25247;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$state_machine__24990__auto__ = function(state_25209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24990__auto____1.call(this,state_25209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24990__auto____0;
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24990__auto____1;
return cljs$core$async$state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___25231))
})();
var state__25086__auto__ = (function (){var statearr_25229 = f__25085__auto__.call(null);
(statearr_25229[(6)] = c__25084__auto___25231);

return statearr_25229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___25231))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25248){
var vec__25249 = p__25248;
var v = cljs.core.nth.call(null,vec__25249,(0),null);
var p = cljs.core.nth.call(null,vec__25249,(1),null);
var job = vec__25249;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25084__auto___25420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___25420,res,vec__25249,v,p,job,jobs,results){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___25420,res,vec__25249,v,p,job,jobs,results){
return (function (state_25256){
var state_val_25257 = (state_25256[(1)]);
if((state_val_25257 === (1))){
var state_25256__$1 = state_25256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25256__$1,(2),res,v);
} else {
if((state_val_25257 === (2))){
var inst_25253 = (state_25256[(2)]);
var inst_25254 = cljs.core.async.close_BANG_.call(null,res);
var state_25256__$1 = (function (){var statearr_25258 = state_25256;
(statearr_25258[(7)] = inst_25253);

return statearr_25258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25256__$1,inst_25254);
} else {
return null;
}
}
});})(c__25084__auto___25420,res,vec__25249,v,p,job,jobs,results))
;
return ((function (switch__24989__auto__,c__25084__auto___25420,res,vec__25249,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____0 = (function (){
var statearr_25259 = [null,null,null,null,null,null,null,null];
(statearr_25259[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__);

(statearr_25259[(1)] = (1));

return statearr_25259;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____1 = (function (state_25256){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_25256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e25260){if((e25260 instanceof Object)){
var ex__24993__auto__ = e25260;
var statearr_25261_25421 = state_25256;
(statearr_25261_25421[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25422 = state_25256;
state_25256 = G__25422;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__ = function(state_25256){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____1.call(this,state_25256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___25420,res,vec__25249,v,p,job,jobs,results))
})();
var state__25086__auto__ = (function (){var statearr_25262 = f__25085__auto__.call(null);
(statearr_25262[(6)] = c__25084__auto___25420);

return statearr_25262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___25420,res,vec__25249,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25263){
var vec__25264 = p__25263;
var v = cljs.core.nth.call(null,vec__25264,(0),null);
var p = cljs.core.nth.call(null,vec__25264,(1),null);
var job = vec__25264;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___25423 = n;
var __25424 = (0);
while(true){
if((__25424 < n__4518__auto___25423)){
var G__25267_25425 = type;
var G__25267_25426__$1 = (((G__25267_25425 instanceof cljs.core.Keyword))?G__25267_25425.fqn:null);
switch (G__25267_25426__$1) {
case "compute":
var c__25084__auto___25428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25424,c__25084__auto___25428,G__25267_25425,G__25267_25426__$1,n__4518__auto___25423,jobs,results,process,async){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (__25424,c__25084__auto___25428,G__25267_25425,G__25267_25426__$1,n__4518__auto___25423,jobs,results,process,async){
return (function (state_25280){
var state_val_25281 = (state_25280[(1)]);
if((state_val_25281 === (1))){
var state_25280__$1 = state_25280;
var statearr_25282_25429 = state_25280__$1;
(statearr_25282_25429[(2)] = null);

(statearr_25282_25429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25281 === (2))){
var state_25280__$1 = state_25280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25280__$1,(4),jobs);
} else {
if((state_val_25281 === (3))){
var inst_25278 = (state_25280[(2)]);
var state_25280__$1 = state_25280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25280__$1,inst_25278);
} else {
if((state_val_25281 === (4))){
var inst_25270 = (state_25280[(2)]);
var inst_25271 = process.call(null,inst_25270);
var state_25280__$1 = state_25280;
if(cljs.core.truth_(inst_25271)){
var statearr_25283_25430 = state_25280__$1;
(statearr_25283_25430[(1)] = (5));

} else {
var statearr_25284_25431 = state_25280__$1;
(statearr_25284_25431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25281 === (5))){
var state_25280__$1 = state_25280;
var statearr_25285_25432 = state_25280__$1;
(statearr_25285_25432[(2)] = null);

(statearr_25285_25432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25281 === (6))){
var state_25280__$1 = state_25280;
var statearr_25286_25433 = state_25280__$1;
(statearr_25286_25433[(2)] = null);

(statearr_25286_25433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25281 === (7))){
var inst_25276 = (state_25280[(2)]);
var state_25280__$1 = state_25280;
var statearr_25287_25434 = state_25280__$1;
(statearr_25287_25434[(2)] = inst_25276);

(statearr_25287_25434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25424,c__25084__auto___25428,G__25267_25425,G__25267_25426__$1,n__4518__auto___25423,jobs,results,process,async))
;
return ((function (__25424,switch__24989__auto__,c__25084__auto___25428,G__25267_25425,G__25267_25426__$1,n__4518__auto___25423,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____0 = (function (){
var statearr_25288 = [null,null,null,null,null,null,null];
(statearr_25288[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__);

(statearr_25288[(1)] = (1));

return statearr_25288;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____1 = (function (state_25280){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_25280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e25289){if((e25289 instanceof Object)){
var ex__24993__auto__ = e25289;
var statearr_25290_25435 = state_25280;
(statearr_25290_25435[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25436 = state_25280;
state_25280 = G__25436;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__ = function(state_25280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____1.call(this,state_25280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__;
})()
;})(__25424,switch__24989__auto__,c__25084__auto___25428,G__25267_25425,G__25267_25426__$1,n__4518__auto___25423,jobs,results,process,async))
})();
var state__25086__auto__ = (function (){var statearr_25291 = f__25085__auto__.call(null);
(statearr_25291[(6)] = c__25084__auto___25428);

return statearr_25291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(__25424,c__25084__auto___25428,G__25267_25425,G__25267_25426__$1,n__4518__auto___25423,jobs,results,process,async))
);


break;
case "async":
var c__25084__auto___25437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25424,c__25084__auto___25437,G__25267_25425,G__25267_25426__$1,n__4518__auto___25423,jobs,results,process,async){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (__25424,c__25084__auto___25437,G__25267_25425,G__25267_25426__$1,n__4518__auto___25423,jobs,results,process,async){
return (function (state_25304){
var state_val_25305 = (state_25304[(1)]);
if((state_val_25305 === (1))){
var state_25304__$1 = state_25304;
var statearr_25306_25438 = state_25304__$1;
(statearr_25306_25438[(2)] = null);

(statearr_25306_25438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25305 === (2))){
var state_25304__$1 = state_25304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25304__$1,(4),jobs);
} else {
if((state_val_25305 === (3))){
var inst_25302 = (state_25304[(2)]);
var state_25304__$1 = state_25304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25304__$1,inst_25302);
} else {
if((state_val_25305 === (4))){
var inst_25294 = (state_25304[(2)]);
var inst_25295 = async.call(null,inst_25294);
var state_25304__$1 = state_25304;
if(cljs.core.truth_(inst_25295)){
var statearr_25307_25439 = state_25304__$1;
(statearr_25307_25439[(1)] = (5));

} else {
var statearr_25308_25440 = state_25304__$1;
(statearr_25308_25440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25305 === (5))){
var state_25304__$1 = state_25304;
var statearr_25309_25441 = state_25304__$1;
(statearr_25309_25441[(2)] = null);

(statearr_25309_25441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25305 === (6))){
var state_25304__$1 = state_25304;
var statearr_25310_25442 = state_25304__$1;
(statearr_25310_25442[(2)] = null);

(statearr_25310_25442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25305 === (7))){
var inst_25300 = (state_25304[(2)]);
var state_25304__$1 = state_25304;
var statearr_25311_25443 = state_25304__$1;
(statearr_25311_25443[(2)] = inst_25300);

(statearr_25311_25443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25424,c__25084__auto___25437,G__25267_25425,G__25267_25426__$1,n__4518__auto___25423,jobs,results,process,async))
;
return ((function (__25424,switch__24989__auto__,c__25084__auto___25437,G__25267_25425,G__25267_25426__$1,n__4518__auto___25423,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____0 = (function (){
var statearr_25312 = [null,null,null,null,null,null,null];
(statearr_25312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__);

(statearr_25312[(1)] = (1));

return statearr_25312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____1 = (function (state_25304){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_25304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e25313){if((e25313 instanceof Object)){
var ex__24993__auto__ = e25313;
var statearr_25314_25444 = state_25304;
(statearr_25314_25444[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25445 = state_25304;
state_25304 = G__25445;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__ = function(state_25304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____1.call(this,state_25304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__;
})()
;})(__25424,switch__24989__auto__,c__25084__auto___25437,G__25267_25425,G__25267_25426__$1,n__4518__auto___25423,jobs,results,process,async))
})();
var state__25086__auto__ = (function (){var statearr_25315 = f__25085__auto__.call(null);
(statearr_25315[(6)] = c__25084__auto___25437);

return statearr_25315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(__25424,c__25084__auto___25437,G__25267_25425,G__25267_25426__$1,n__4518__auto___25423,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25267_25426__$1)].join('')));

}

var G__25446 = (__25424 + (1));
__25424 = G__25446;
continue;
} else {
}
break;
}

var c__25084__auto___25447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___25447,jobs,results,process,async){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___25447,jobs,results,process,async){
return (function (state_25337){
var state_val_25338 = (state_25337[(1)]);
if((state_val_25338 === (1))){
var state_25337__$1 = state_25337;
var statearr_25339_25448 = state_25337__$1;
(statearr_25339_25448[(2)] = null);

(statearr_25339_25448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25338 === (2))){
var state_25337__$1 = state_25337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25337__$1,(4),from);
} else {
if((state_val_25338 === (3))){
var inst_25335 = (state_25337[(2)]);
var state_25337__$1 = state_25337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25337__$1,inst_25335);
} else {
if((state_val_25338 === (4))){
var inst_25318 = (state_25337[(7)]);
var inst_25318__$1 = (state_25337[(2)]);
var inst_25319 = (inst_25318__$1 == null);
var state_25337__$1 = (function (){var statearr_25340 = state_25337;
(statearr_25340[(7)] = inst_25318__$1);

return statearr_25340;
})();
if(cljs.core.truth_(inst_25319)){
var statearr_25341_25449 = state_25337__$1;
(statearr_25341_25449[(1)] = (5));

} else {
var statearr_25342_25450 = state_25337__$1;
(statearr_25342_25450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25338 === (5))){
var inst_25321 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25337__$1 = state_25337;
var statearr_25343_25451 = state_25337__$1;
(statearr_25343_25451[(2)] = inst_25321);

(statearr_25343_25451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25338 === (6))){
var inst_25318 = (state_25337[(7)]);
var inst_25323 = (state_25337[(8)]);
var inst_25323__$1 = cljs.core.async.chan.call(null,(1));
var inst_25324 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25325 = [inst_25318,inst_25323__$1];
var inst_25326 = (new cljs.core.PersistentVector(null,2,(5),inst_25324,inst_25325,null));
var state_25337__$1 = (function (){var statearr_25344 = state_25337;
(statearr_25344[(8)] = inst_25323__$1);

return statearr_25344;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25337__$1,(8),jobs,inst_25326);
} else {
if((state_val_25338 === (7))){
var inst_25333 = (state_25337[(2)]);
var state_25337__$1 = state_25337;
var statearr_25345_25452 = state_25337__$1;
(statearr_25345_25452[(2)] = inst_25333);

(statearr_25345_25452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25338 === (8))){
var inst_25323 = (state_25337[(8)]);
var inst_25328 = (state_25337[(2)]);
var state_25337__$1 = (function (){var statearr_25346 = state_25337;
(statearr_25346[(9)] = inst_25328);

return statearr_25346;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25337__$1,(9),results,inst_25323);
} else {
if((state_val_25338 === (9))){
var inst_25330 = (state_25337[(2)]);
var state_25337__$1 = (function (){var statearr_25347 = state_25337;
(statearr_25347[(10)] = inst_25330);

return statearr_25347;
})();
var statearr_25348_25453 = state_25337__$1;
(statearr_25348_25453[(2)] = null);

(statearr_25348_25453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__25084__auto___25447,jobs,results,process,async))
;
return ((function (switch__24989__auto__,c__25084__auto___25447,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____0 = (function (){
var statearr_25349 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25349[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__);

(statearr_25349[(1)] = (1));

return statearr_25349;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____1 = (function (state_25337){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_25337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e25350){if((e25350 instanceof Object)){
var ex__24993__auto__ = e25350;
var statearr_25351_25454 = state_25337;
(statearr_25351_25454[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25455 = state_25337;
state_25337 = G__25455;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__ = function(state_25337){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____1.call(this,state_25337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___25447,jobs,results,process,async))
})();
var state__25086__auto__ = (function (){var statearr_25352 = f__25085__auto__.call(null);
(statearr_25352[(6)] = c__25084__auto___25447);

return statearr_25352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___25447,jobs,results,process,async))
);


var c__25084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto__,jobs,results,process,async){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto__,jobs,results,process,async){
return (function (state_25390){
var state_val_25391 = (state_25390[(1)]);
if((state_val_25391 === (7))){
var inst_25386 = (state_25390[(2)]);
var state_25390__$1 = state_25390;
var statearr_25392_25456 = state_25390__$1;
(statearr_25392_25456[(2)] = inst_25386);

(statearr_25392_25456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (20))){
var state_25390__$1 = state_25390;
var statearr_25393_25457 = state_25390__$1;
(statearr_25393_25457[(2)] = null);

(statearr_25393_25457[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (1))){
var state_25390__$1 = state_25390;
var statearr_25394_25458 = state_25390__$1;
(statearr_25394_25458[(2)] = null);

(statearr_25394_25458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (4))){
var inst_25355 = (state_25390[(7)]);
var inst_25355__$1 = (state_25390[(2)]);
var inst_25356 = (inst_25355__$1 == null);
var state_25390__$1 = (function (){var statearr_25395 = state_25390;
(statearr_25395[(7)] = inst_25355__$1);

return statearr_25395;
})();
if(cljs.core.truth_(inst_25356)){
var statearr_25396_25459 = state_25390__$1;
(statearr_25396_25459[(1)] = (5));

} else {
var statearr_25397_25460 = state_25390__$1;
(statearr_25397_25460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (15))){
var inst_25368 = (state_25390[(8)]);
var state_25390__$1 = state_25390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25390__$1,(18),to,inst_25368);
} else {
if((state_val_25391 === (21))){
var inst_25381 = (state_25390[(2)]);
var state_25390__$1 = state_25390;
var statearr_25398_25461 = state_25390__$1;
(statearr_25398_25461[(2)] = inst_25381);

(statearr_25398_25461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (13))){
var inst_25383 = (state_25390[(2)]);
var state_25390__$1 = (function (){var statearr_25399 = state_25390;
(statearr_25399[(9)] = inst_25383);

return statearr_25399;
})();
var statearr_25400_25462 = state_25390__$1;
(statearr_25400_25462[(2)] = null);

(statearr_25400_25462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (6))){
var inst_25355 = (state_25390[(7)]);
var state_25390__$1 = state_25390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25390__$1,(11),inst_25355);
} else {
if((state_val_25391 === (17))){
var inst_25376 = (state_25390[(2)]);
var state_25390__$1 = state_25390;
if(cljs.core.truth_(inst_25376)){
var statearr_25401_25463 = state_25390__$1;
(statearr_25401_25463[(1)] = (19));

} else {
var statearr_25402_25464 = state_25390__$1;
(statearr_25402_25464[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (3))){
var inst_25388 = (state_25390[(2)]);
var state_25390__$1 = state_25390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25390__$1,inst_25388);
} else {
if((state_val_25391 === (12))){
var inst_25365 = (state_25390[(10)]);
var state_25390__$1 = state_25390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25390__$1,(14),inst_25365);
} else {
if((state_val_25391 === (2))){
var state_25390__$1 = state_25390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25390__$1,(4),results);
} else {
if((state_val_25391 === (19))){
var state_25390__$1 = state_25390;
var statearr_25403_25465 = state_25390__$1;
(statearr_25403_25465[(2)] = null);

(statearr_25403_25465[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (11))){
var inst_25365 = (state_25390[(2)]);
var state_25390__$1 = (function (){var statearr_25404 = state_25390;
(statearr_25404[(10)] = inst_25365);

return statearr_25404;
})();
var statearr_25405_25466 = state_25390__$1;
(statearr_25405_25466[(2)] = null);

(statearr_25405_25466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (9))){
var state_25390__$1 = state_25390;
var statearr_25406_25467 = state_25390__$1;
(statearr_25406_25467[(2)] = null);

(statearr_25406_25467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (5))){
var state_25390__$1 = state_25390;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25407_25468 = state_25390__$1;
(statearr_25407_25468[(1)] = (8));

} else {
var statearr_25408_25469 = state_25390__$1;
(statearr_25408_25469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (14))){
var inst_25370 = (state_25390[(11)]);
var inst_25368 = (state_25390[(8)]);
var inst_25368__$1 = (state_25390[(2)]);
var inst_25369 = (inst_25368__$1 == null);
var inst_25370__$1 = cljs.core.not.call(null,inst_25369);
var state_25390__$1 = (function (){var statearr_25409 = state_25390;
(statearr_25409[(11)] = inst_25370__$1);

(statearr_25409[(8)] = inst_25368__$1);

return statearr_25409;
})();
if(inst_25370__$1){
var statearr_25410_25470 = state_25390__$1;
(statearr_25410_25470[(1)] = (15));

} else {
var statearr_25411_25471 = state_25390__$1;
(statearr_25411_25471[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (16))){
var inst_25370 = (state_25390[(11)]);
var state_25390__$1 = state_25390;
var statearr_25412_25472 = state_25390__$1;
(statearr_25412_25472[(2)] = inst_25370);

(statearr_25412_25472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (10))){
var inst_25362 = (state_25390[(2)]);
var state_25390__$1 = state_25390;
var statearr_25413_25473 = state_25390__$1;
(statearr_25413_25473[(2)] = inst_25362);

(statearr_25413_25473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (18))){
var inst_25373 = (state_25390[(2)]);
var state_25390__$1 = state_25390;
var statearr_25414_25474 = state_25390__$1;
(statearr_25414_25474[(2)] = inst_25373);

(statearr_25414_25474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (8))){
var inst_25359 = cljs.core.async.close_BANG_.call(null,to);
var state_25390__$1 = state_25390;
var statearr_25415_25475 = state_25390__$1;
(statearr_25415_25475[(2)] = inst_25359);

(statearr_25415_25475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25084__auto__,jobs,results,process,async))
;
return ((function (switch__24989__auto__,c__25084__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____0 = (function (){
var statearr_25416 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25416[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__);

(statearr_25416[(1)] = (1));

return statearr_25416;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____1 = (function (state_25390){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_25390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e25417){if((e25417 instanceof Object)){
var ex__24993__auto__ = e25417;
var statearr_25418_25476 = state_25390;
(statearr_25418_25476[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25477 = state_25390;
state_25390 = G__25477;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__ = function(state_25390){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____1.call(this,state_25390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24990__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto__,jobs,results,process,async))
})();
var state__25086__auto__ = (function (){var statearr_25419 = f__25085__auto__.call(null);
(statearr_25419[(6)] = c__25084__auto__);

return statearr_25419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto__,jobs,results,process,async))
);

return c__25084__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25479 = arguments.length;
switch (G__25479) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25482 = arguments.length;
switch (G__25482) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25485 = arguments.length;
switch (G__25485) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25084__auto___25534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___25534,tc,fc){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___25534,tc,fc){
return (function (state_25511){
var state_val_25512 = (state_25511[(1)]);
if((state_val_25512 === (7))){
var inst_25507 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25513_25535 = state_25511__$1;
(statearr_25513_25535[(2)] = inst_25507);

(statearr_25513_25535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (1))){
var state_25511__$1 = state_25511;
var statearr_25514_25536 = state_25511__$1;
(statearr_25514_25536[(2)] = null);

(statearr_25514_25536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (4))){
var inst_25488 = (state_25511[(7)]);
var inst_25488__$1 = (state_25511[(2)]);
var inst_25489 = (inst_25488__$1 == null);
var state_25511__$1 = (function (){var statearr_25515 = state_25511;
(statearr_25515[(7)] = inst_25488__$1);

return statearr_25515;
})();
if(cljs.core.truth_(inst_25489)){
var statearr_25516_25537 = state_25511__$1;
(statearr_25516_25537[(1)] = (5));

} else {
var statearr_25517_25538 = state_25511__$1;
(statearr_25517_25538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (13))){
var state_25511__$1 = state_25511;
var statearr_25518_25539 = state_25511__$1;
(statearr_25518_25539[(2)] = null);

(statearr_25518_25539[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (6))){
var inst_25488 = (state_25511[(7)]);
var inst_25494 = p.call(null,inst_25488);
var state_25511__$1 = state_25511;
if(cljs.core.truth_(inst_25494)){
var statearr_25519_25540 = state_25511__$1;
(statearr_25519_25540[(1)] = (9));

} else {
var statearr_25520_25541 = state_25511__$1;
(statearr_25520_25541[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (3))){
var inst_25509 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25511__$1,inst_25509);
} else {
if((state_val_25512 === (12))){
var state_25511__$1 = state_25511;
var statearr_25521_25542 = state_25511__$1;
(statearr_25521_25542[(2)] = null);

(statearr_25521_25542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (2))){
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25511__$1,(4),ch);
} else {
if((state_val_25512 === (11))){
var inst_25488 = (state_25511[(7)]);
var inst_25498 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25511__$1,(8),inst_25498,inst_25488);
} else {
if((state_val_25512 === (9))){
var state_25511__$1 = state_25511;
var statearr_25522_25543 = state_25511__$1;
(statearr_25522_25543[(2)] = tc);

(statearr_25522_25543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (5))){
var inst_25491 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25492 = cljs.core.async.close_BANG_.call(null,fc);
var state_25511__$1 = (function (){var statearr_25523 = state_25511;
(statearr_25523[(8)] = inst_25491);

return statearr_25523;
})();
var statearr_25524_25544 = state_25511__$1;
(statearr_25524_25544[(2)] = inst_25492);

(statearr_25524_25544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (14))){
var inst_25505 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25525_25545 = state_25511__$1;
(statearr_25525_25545[(2)] = inst_25505);

(statearr_25525_25545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (10))){
var state_25511__$1 = state_25511;
var statearr_25526_25546 = state_25511__$1;
(statearr_25526_25546[(2)] = fc);

(statearr_25526_25546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (8))){
var inst_25500 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
if(cljs.core.truth_(inst_25500)){
var statearr_25527_25547 = state_25511__$1;
(statearr_25527_25547[(1)] = (12));

} else {
var statearr_25528_25548 = state_25511__$1;
(statearr_25528_25548[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25084__auto___25534,tc,fc))
;
return ((function (switch__24989__auto__,c__25084__auto___25534,tc,fc){
return (function() {
var cljs$core$async$state_machine__24990__auto__ = null;
var cljs$core$async$state_machine__24990__auto____0 = (function (){
var statearr_25529 = [null,null,null,null,null,null,null,null,null];
(statearr_25529[(0)] = cljs$core$async$state_machine__24990__auto__);

(statearr_25529[(1)] = (1));

return statearr_25529;
});
var cljs$core$async$state_machine__24990__auto____1 = (function (state_25511){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_25511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e25530){if((e25530 instanceof Object)){
var ex__24993__auto__ = e25530;
var statearr_25531_25549 = state_25511;
(statearr_25531_25549[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25550 = state_25511;
state_25511 = G__25550;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$state_machine__24990__auto__ = function(state_25511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24990__auto____1.call(this,state_25511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24990__auto____0;
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24990__auto____1;
return cljs$core$async$state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___25534,tc,fc))
})();
var state__25086__auto__ = (function (){var statearr_25532 = f__25085__auto__.call(null);
(statearr_25532[(6)] = c__25084__auto___25534);

return statearr_25532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___25534,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto__){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto__){
return (function (state_25571){
var state_val_25572 = (state_25571[(1)]);
if((state_val_25572 === (7))){
var inst_25567 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
var statearr_25573_25591 = state_25571__$1;
(statearr_25573_25591[(2)] = inst_25567);

(statearr_25573_25591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (1))){
var inst_25551 = init;
var state_25571__$1 = (function (){var statearr_25574 = state_25571;
(statearr_25574[(7)] = inst_25551);

return statearr_25574;
})();
var statearr_25575_25592 = state_25571__$1;
(statearr_25575_25592[(2)] = null);

(statearr_25575_25592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (4))){
var inst_25554 = (state_25571[(8)]);
var inst_25554__$1 = (state_25571[(2)]);
var inst_25555 = (inst_25554__$1 == null);
var state_25571__$1 = (function (){var statearr_25576 = state_25571;
(statearr_25576[(8)] = inst_25554__$1);

return statearr_25576;
})();
if(cljs.core.truth_(inst_25555)){
var statearr_25577_25593 = state_25571__$1;
(statearr_25577_25593[(1)] = (5));

} else {
var statearr_25578_25594 = state_25571__$1;
(statearr_25578_25594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (6))){
var inst_25551 = (state_25571[(7)]);
var inst_25558 = (state_25571[(9)]);
var inst_25554 = (state_25571[(8)]);
var inst_25558__$1 = f.call(null,inst_25551,inst_25554);
var inst_25559 = cljs.core.reduced_QMARK_.call(null,inst_25558__$1);
var state_25571__$1 = (function (){var statearr_25579 = state_25571;
(statearr_25579[(9)] = inst_25558__$1);

return statearr_25579;
})();
if(inst_25559){
var statearr_25580_25595 = state_25571__$1;
(statearr_25580_25595[(1)] = (8));

} else {
var statearr_25581_25596 = state_25571__$1;
(statearr_25581_25596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (3))){
var inst_25569 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25571__$1,inst_25569);
} else {
if((state_val_25572 === (2))){
var state_25571__$1 = state_25571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25571__$1,(4),ch);
} else {
if((state_val_25572 === (9))){
var inst_25558 = (state_25571[(9)]);
var inst_25551 = inst_25558;
var state_25571__$1 = (function (){var statearr_25582 = state_25571;
(statearr_25582[(7)] = inst_25551);

return statearr_25582;
})();
var statearr_25583_25597 = state_25571__$1;
(statearr_25583_25597[(2)] = null);

(statearr_25583_25597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (5))){
var inst_25551 = (state_25571[(7)]);
var state_25571__$1 = state_25571;
var statearr_25584_25598 = state_25571__$1;
(statearr_25584_25598[(2)] = inst_25551);

(statearr_25584_25598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (10))){
var inst_25565 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
var statearr_25585_25599 = state_25571__$1;
(statearr_25585_25599[(2)] = inst_25565);

(statearr_25585_25599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (8))){
var inst_25558 = (state_25571[(9)]);
var inst_25561 = cljs.core.deref.call(null,inst_25558);
var state_25571__$1 = state_25571;
var statearr_25586_25600 = state_25571__$1;
(statearr_25586_25600[(2)] = inst_25561);

(statearr_25586_25600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__25084__auto__))
;
return ((function (switch__24989__auto__,c__25084__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24990__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24990__auto____0 = (function (){
var statearr_25587 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25587[(0)] = cljs$core$async$reduce_$_state_machine__24990__auto__);

(statearr_25587[(1)] = (1));

return statearr_25587;
});
var cljs$core$async$reduce_$_state_machine__24990__auto____1 = (function (state_25571){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_25571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e25588){if((e25588 instanceof Object)){
var ex__24993__auto__ = e25588;
var statearr_25589_25601 = state_25571;
(statearr_25589_25601[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25602 = state_25571;
state_25571 = G__25602;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24990__auto__ = function(state_25571){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24990__auto____1.call(this,state_25571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24990__auto____0;
cljs$core$async$reduce_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24990__auto____1;
return cljs$core$async$reduce_$_state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto__))
})();
var state__25086__auto__ = (function (){var statearr_25590 = f__25085__auto__.call(null);
(statearr_25590[(6)] = c__25084__auto__);

return statearr_25590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto__))
);

return c__25084__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto__,f__$1){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto__,f__$1){
return (function (state_25608){
var state_val_25609 = (state_25608[(1)]);
if((state_val_25609 === (1))){
var inst_25603 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25608__$1 = state_25608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25608__$1,(2),inst_25603);
} else {
if((state_val_25609 === (2))){
var inst_25605 = (state_25608[(2)]);
var inst_25606 = f__$1.call(null,inst_25605);
var state_25608__$1 = state_25608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25608__$1,inst_25606);
} else {
return null;
}
}
});})(c__25084__auto__,f__$1))
;
return ((function (switch__24989__auto__,c__25084__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24990__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24990__auto____0 = (function (){
var statearr_25610 = [null,null,null,null,null,null,null];
(statearr_25610[(0)] = cljs$core$async$transduce_$_state_machine__24990__auto__);

(statearr_25610[(1)] = (1));

return statearr_25610;
});
var cljs$core$async$transduce_$_state_machine__24990__auto____1 = (function (state_25608){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_25608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e25611){if((e25611 instanceof Object)){
var ex__24993__auto__ = e25611;
var statearr_25612_25614 = state_25608;
(statearr_25612_25614[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25615 = state_25608;
state_25608 = G__25615;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24990__auto__ = function(state_25608){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24990__auto____1.call(this,state_25608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24990__auto____0;
cljs$core$async$transduce_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24990__auto____1;
return cljs$core$async$transduce_$_state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto__,f__$1))
})();
var state__25086__auto__ = (function (){var statearr_25613 = f__25085__auto__.call(null);
(statearr_25613[(6)] = c__25084__auto__);

return statearr_25613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto__,f__$1))
);

return c__25084__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25617 = arguments.length;
switch (G__25617) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto__){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto__){
return (function (state_25642){
var state_val_25643 = (state_25642[(1)]);
if((state_val_25643 === (7))){
var inst_25624 = (state_25642[(2)]);
var state_25642__$1 = state_25642;
var statearr_25644_25665 = state_25642__$1;
(statearr_25644_25665[(2)] = inst_25624);

(statearr_25644_25665[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (1))){
var inst_25618 = cljs.core.seq.call(null,coll);
var inst_25619 = inst_25618;
var state_25642__$1 = (function (){var statearr_25645 = state_25642;
(statearr_25645[(7)] = inst_25619);

return statearr_25645;
})();
var statearr_25646_25666 = state_25642__$1;
(statearr_25646_25666[(2)] = null);

(statearr_25646_25666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (4))){
var inst_25619 = (state_25642[(7)]);
var inst_25622 = cljs.core.first.call(null,inst_25619);
var state_25642__$1 = state_25642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25642__$1,(7),ch,inst_25622);
} else {
if((state_val_25643 === (13))){
var inst_25636 = (state_25642[(2)]);
var state_25642__$1 = state_25642;
var statearr_25647_25667 = state_25642__$1;
(statearr_25647_25667[(2)] = inst_25636);

(statearr_25647_25667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (6))){
var inst_25627 = (state_25642[(2)]);
var state_25642__$1 = state_25642;
if(cljs.core.truth_(inst_25627)){
var statearr_25648_25668 = state_25642__$1;
(statearr_25648_25668[(1)] = (8));

} else {
var statearr_25649_25669 = state_25642__$1;
(statearr_25649_25669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (3))){
var inst_25640 = (state_25642[(2)]);
var state_25642__$1 = state_25642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25642__$1,inst_25640);
} else {
if((state_val_25643 === (12))){
var state_25642__$1 = state_25642;
var statearr_25650_25670 = state_25642__$1;
(statearr_25650_25670[(2)] = null);

(statearr_25650_25670[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (2))){
var inst_25619 = (state_25642[(7)]);
var state_25642__$1 = state_25642;
if(cljs.core.truth_(inst_25619)){
var statearr_25651_25671 = state_25642__$1;
(statearr_25651_25671[(1)] = (4));

} else {
var statearr_25652_25672 = state_25642__$1;
(statearr_25652_25672[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (11))){
var inst_25633 = cljs.core.async.close_BANG_.call(null,ch);
var state_25642__$1 = state_25642;
var statearr_25653_25673 = state_25642__$1;
(statearr_25653_25673[(2)] = inst_25633);

(statearr_25653_25673[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (9))){
var state_25642__$1 = state_25642;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25654_25674 = state_25642__$1;
(statearr_25654_25674[(1)] = (11));

} else {
var statearr_25655_25675 = state_25642__$1;
(statearr_25655_25675[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (5))){
var inst_25619 = (state_25642[(7)]);
var state_25642__$1 = state_25642;
var statearr_25656_25676 = state_25642__$1;
(statearr_25656_25676[(2)] = inst_25619);

(statearr_25656_25676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (10))){
var inst_25638 = (state_25642[(2)]);
var state_25642__$1 = state_25642;
var statearr_25657_25677 = state_25642__$1;
(statearr_25657_25677[(2)] = inst_25638);

(statearr_25657_25677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (8))){
var inst_25619 = (state_25642[(7)]);
var inst_25629 = cljs.core.next.call(null,inst_25619);
var inst_25619__$1 = inst_25629;
var state_25642__$1 = (function (){var statearr_25658 = state_25642;
(statearr_25658[(7)] = inst_25619__$1);

return statearr_25658;
})();
var statearr_25659_25678 = state_25642__$1;
(statearr_25659_25678[(2)] = null);

(statearr_25659_25678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25084__auto__))
;
return ((function (switch__24989__auto__,c__25084__auto__){
return (function() {
var cljs$core$async$state_machine__24990__auto__ = null;
var cljs$core$async$state_machine__24990__auto____0 = (function (){
var statearr_25660 = [null,null,null,null,null,null,null,null];
(statearr_25660[(0)] = cljs$core$async$state_machine__24990__auto__);

(statearr_25660[(1)] = (1));

return statearr_25660;
});
var cljs$core$async$state_machine__24990__auto____1 = (function (state_25642){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_25642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e25661){if((e25661 instanceof Object)){
var ex__24993__auto__ = e25661;
var statearr_25662_25679 = state_25642;
(statearr_25662_25679[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25680 = state_25642;
state_25642 = G__25680;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$state_machine__24990__auto__ = function(state_25642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24990__auto____1.call(this,state_25642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24990__auto____0;
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24990__auto____1;
return cljs$core$async$state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto__))
})();
var state__25086__auto__ = (function (){var statearr_25663 = f__25085__auto__.call(null);
(statearr_25663[(6)] = c__25084__auto__);

return statearr_25663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto__))
);

return c__25084__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25681 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25681 = (function (ch,cs,meta25682){
this.ch = ch;
this.cs = cs;
this.meta25682 = meta25682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25683,meta25682__$1){
var self__ = this;
var _25683__$1 = this;
return (new cljs.core.async.t_cljs$core$async25681(self__.ch,self__.cs,meta25682__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25683){
var self__ = this;
var _25683__$1 = this;
return self__.meta25682;
});})(cs))
;

cljs.core.async.t_cljs$core$async25681.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25681.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25681.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25681.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25681.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25681.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25682","meta25682",-811320461,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25681";

cljs.core.async.t_cljs$core$async25681.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25681");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25681.
 */
cljs.core.async.__GT_t_cljs$core$async25681 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25681(ch__$1,cs__$1,meta25682){
return (new cljs.core.async.t_cljs$core$async25681(ch__$1,cs__$1,meta25682));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25681(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25084__auto___25903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___25903,cs,m,dchan,dctr,done){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___25903,cs,m,dchan,dctr,done){
return (function (state_25818){
var state_val_25819 = (state_25818[(1)]);
if((state_val_25819 === (7))){
var inst_25814 = (state_25818[(2)]);
var state_25818__$1 = state_25818;
var statearr_25820_25904 = state_25818__$1;
(statearr_25820_25904[(2)] = inst_25814);

(statearr_25820_25904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (20))){
var inst_25717 = (state_25818[(7)]);
var inst_25729 = cljs.core.first.call(null,inst_25717);
var inst_25730 = cljs.core.nth.call(null,inst_25729,(0),null);
var inst_25731 = cljs.core.nth.call(null,inst_25729,(1),null);
var state_25818__$1 = (function (){var statearr_25821 = state_25818;
(statearr_25821[(8)] = inst_25730);

return statearr_25821;
})();
if(cljs.core.truth_(inst_25731)){
var statearr_25822_25905 = state_25818__$1;
(statearr_25822_25905[(1)] = (22));

} else {
var statearr_25823_25906 = state_25818__$1;
(statearr_25823_25906[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (27))){
var inst_25766 = (state_25818[(9)]);
var inst_25761 = (state_25818[(10)]);
var inst_25686 = (state_25818[(11)]);
var inst_25759 = (state_25818[(12)]);
var inst_25766__$1 = cljs.core._nth.call(null,inst_25759,inst_25761);
var inst_25767 = cljs.core.async.put_BANG_.call(null,inst_25766__$1,inst_25686,done);
var state_25818__$1 = (function (){var statearr_25824 = state_25818;
(statearr_25824[(9)] = inst_25766__$1);

return statearr_25824;
})();
if(cljs.core.truth_(inst_25767)){
var statearr_25825_25907 = state_25818__$1;
(statearr_25825_25907[(1)] = (30));

} else {
var statearr_25826_25908 = state_25818__$1;
(statearr_25826_25908[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (1))){
var state_25818__$1 = state_25818;
var statearr_25827_25909 = state_25818__$1;
(statearr_25827_25909[(2)] = null);

(statearr_25827_25909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (24))){
var inst_25717 = (state_25818[(7)]);
var inst_25736 = (state_25818[(2)]);
var inst_25737 = cljs.core.next.call(null,inst_25717);
var inst_25695 = inst_25737;
var inst_25696 = null;
var inst_25697 = (0);
var inst_25698 = (0);
var state_25818__$1 = (function (){var statearr_25828 = state_25818;
(statearr_25828[(13)] = inst_25736);

(statearr_25828[(14)] = inst_25697);

(statearr_25828[(15)] = inst_25698);

(statearr_25828[(16)] = inst_25696);

(statearr_25828[(17)] = inst_25695);

return statearr_25828;
})();
var statearr_25829_25910 = state_25818__$1;
(statearr_25829_25910[(2)] = null);

(statearr_25829_25910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (39))){
var state_25818__$1 = state_25818;
var statearr_25833_25911 = state_25818__$1;
(statearr_25833_25911[(2)] = null);

(statearr_25833_25911[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (4))){
var inst_25686 = (state_25818[(11)]);
var inst_25686__$1 = (state_25818[(2)]);
var inst_25687 = (inst_25686__$1 == null);
var state_25818__$1 = (function (){var statearr_25834 = state_25818;
(statearr_25834[(11)] = inst_25686__$1);

return statearr_25834;
})();
if(cljs.core.truth_(inst_25687)){
var statearr_25835_25912 = state_25818__$1;
(statearr_25835_25912[(1)] = (5));

} else {
var statearr_25836_25913 = state_25818__$1;
(statearr_25836_25913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (15))){
var inst_25697 = (state_25818[(14)]);
var inst_25698 = (state_25818[(15)]);
var inst_25696 = (state_25818[(16)]);
var inst_25695 = (state_25818[(17)]);
var inst_25713 = (state_25818[(2)]);
var inst_25714 = (inst_25698 + (1));
var tmp25830 = inst_25697;
var tmp25831 = inst_25696;
var tmp25832 = inst_25695;
var inst_25695__$1 = tmp25832;
var inst_25696__$1 = tmp25831;
var inst_25697__$1 = tmp25830;
var inst_25698__$1 = inst_25714;
var state_25818__$1 = (function (){var statearr_25837 = state_25818;
(statearr_25837[(18)] = inst_25713);

(statearr_25837[(14)] = inst_25697__$1);

(statearr_25837[(15)] = inst_25698__$1);

(statearr_25837[(16)] = inst_25696__$1);

(statearr_25837[(17)] = inst_25695__$1);

return statearr_25837;
})();
var statearr_25838_25914 = state_25818__$1;
(statearr_25838_25914[(2)] = null);

(statearr_25838_25914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (21))){
var inst_25740 = (state_25818[(2)]);
var state_25818__$1 = state_25818;
var statearr_25842_25915 = state_25818__$1;
(statearr_25842_25915[(2)] = inst_25740);

(statearr_25842_25915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (31))){
var inst_25766 = (state_25818[(9)]);
var inst_25770 = done.call(null,null);
var inst_25771 = cljs.core.async.untap_STAR_.call(null,m,inst_25766);
var state_25818__$1 = (function (){var statearr_25843 = state_25818;
(statearr_25843[(19)] = inst_25770);

return statearr_25843;
})();
var statearr_25844_25916 = state_25818__$1;
(statearr_25844_25916[(2)] = inst_25771);

(statearr_25844_25916[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (32))){
var inst_25761 = (state_25818[(10)]);
var inst_25758 = (state_25818[(20)]);
var inst_25759 = (state_25818[(12)]);
var inst_25760 = (state_25818[(21)]);
var inst_25773 = (state_25818[(2)]);
var inst_25774 = (inst_25761 + (1));
var tmp25839 = inst_25758;
var tmp25840 = inst_25759;
var tmp25841 = inst_25760;
var inst_25758__$1 = tmp25839;
var inst_25759__$1 = tmp25840;
var inst_25760__$1 = tmp25841;
var inst_25761__$1 = inst_25774;
var state_25818__$1 = (function (){var statearr_25845 = state_25818;
(statearr_25845[(10)] = inst_25761__$1);

(statearr_25845[(20)] = inst_25758__$1);

(statearr_25845[(12)] = inst_25759__$1);

(statearr_25845[(22)] = inst_25773);

(statearr_25845[(21)] = inst_25760__$1);

return statearr_25845;
})();
var statearr_25846_25917 = state_25818__$1;
(statearr_25846_25917[(2)] = null);

(statearr_25846_25917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (40))){
var inst_25786 = (state_25818[(23)]);
var inst_25790 = done.call(null,null);
var inst_25791 = cljs.core.async.untap_STAR_.call(null,m,inst_25786);
var state_25818__$1 = (function (){var statearr_25847 = state_25818;
(statearr_25847[(24)] = inst_25790);

return statearr_25847;
})();
var statearr_25848_25918 = state_25818__$1;
(statearr_25848_25918[(2)] = inst_25791);

(statearr_25848_25918[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (33))){
var inst_25777 = (state_25818[(25)]);
var inst_25779 = cljs.core.chunked_seq_QMARK_.call(null,inst_25777);
var state_25818__$1 = state_25818;
if(inst_25779){
var statearr_25849_25919 = state_25818__$1;
(statearr_25849_25919[(1)] = (36));

} else {
var statearr_25850_25920 = state_25818__$1;
(statearr_25850_25920[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (13))){
var inst_25707 = (state_25818[(26)]);
var inst_25710 = cljs.core.async.close_BANG_.call(null,inst_25707);
var state_25818__$1 = state_25818;
var statearr_25851_25921 = state_25818__$1;
(statearr_25851_25921[(2)] = inst_25710);

(statearr_25851_25921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (22))){
var inst_25730 = (state_25818[(8)]);
var inst_25733 = cljs.core.async.close_BANG_.call(null,inst_25730);
var state_25818__$1 = state_25818;
var statearr_25852_25922 = state_25818__$1;
(statearr_25852_25922[(2)] = inst_25733);

(statearr_25852_25922[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (36))){
var inst_25777 = (state_25818[(25)]);
var inst_25781 = cljs.core.chunk_first.call(null,inst_25777);
var inst_25782 = cljs.core.chunk_rest.call(null,inst_25777);
var inst_25783 = cljs.core.count.call(null,inst_25781);
var inst_25758 = inst_25782;
var inst_25759 = inst_25781;
var inst_25760 = inst_25783;
var inst_25761 = (0);
var state_25818__$1 = (function (){var statearr_25853 = state_25818;
(statearr_25853[(10)] = inst_25761);

(statearr_25853[(20)] = inst_25758);

(statearr_25853[(12)] = inst_25759);

(statearr_25853[(21)] = inst_25760);

return statearr_25853;
})();
var statearr_25854_25923 = state_25818__$1;
(statearr_25854_25923[(2)] = null);

(statearr_25854_25923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (41))){
var inst_25777 = (state_25818[(25)]);
var inst_25793 = (state_25818[(2)]);
var inst_25794 = cljs.core.next.call(null,inst_25777);
var inst_25758 = inst_25794;
var inst_25759 = null;
var inst_25760 = (0);
var inst_25761 = (0);
var state_25818__$1 = (function (){var statearr_25855 = state_25818;
(statearr_25855[(10)] = inst_25761);

(statearr_25855[(20)] = inst_25758);

(statearr_25855[(27)] = inst_25793);

(statearr_25855[(12)] = inst_25759);

(statearr_25855[(21)] = inst_25760);

return statearr_25855;
})();
var statearr_25856_25924 = state_25818__$1;
(statearr_25856_25924[(2)] = null);

(statearr_25856_25924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (43))){
var state_25818__$1 = state_25818;
var statearr_25857_25925 = state_25818__$1;
(statearr_25857_25925[(2)] = null);

(statearr_25857_25925[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (29))){
var inst_25802 = (state_25818[(2)]);
var state_25818__$1 = state_25818;
var statearr_25858_25926 = state_25818__$1;
(statearr_25858_25926[(2)] = inst_25802);

(statearr_25858_25926[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (44))){
var inst_25811 = (state_25818[(2)]);
var state_25818__$1 = (function (){var statearr_25859 = state_25818;
(statearr_25859[(28)] = inst_25811);

return statearr_25859;
})();
var statearr_25860_25927 = state_25818__$1;
(statearr_25860_25927[(2)] = null);

(statearr_25860_25927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (6))){
var inst_25750 = (state_25818[(29)]);
var inst_25749 = cljs.core.deref.call(null,cs);
var inst_25750__$1 = cljs.core.keys.call(null,inst_25749);
var inst_25751 = cljs.core.count.call(null,inst_25750__$1);
var inst_25752 = cljs.core.reset_BANG_.call(null,dctr,inst_25751);
var inst_25757 = cljs.core.seq.call(null,inst_25750__$1);
var inst_25758 = inst_25757;
var inst_25759 = null;
var inst_25760 = (0);
var inst_25761 = (0);
var state_25818__$1 = (function (){var statearr_25861 = state_25818;
(statearr_25861[(29)] = inst_25750__$1);

(statearr_25861[(10)] = inst_25761);

(statearr_25861[(20)] = inst_25758);

(statearr_25861[(30)] = inst_25752);

(statearr_25861[(12)] = inst_25759);

(statearr_25861[(21)] = inst_25760);

return statearr_25861;
})();
var statearr_25862_25928 = state_25818__$1;
(statearr_25862_25928[(2)] = null);

(statearr_25862_25928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (28))){
var inst_25777 = (state_25818[(25)]);
var inst_25758 = (state_25818[(20)]);
var inst_25777__$1 = cljs.core.seq.call(null,inst_25758);
var state_25818__$1 = (function (){var statearr_25863 = state_25818;
(statearr_25863[(25)] = inst_25777__$1);

return statearr_25863;
})();
if(inst_25777__$1){
var statearr_25864_25929 = state_25818__$1;
(statearr_25864_25929[(1)] = (33));

} else {
var statearr_25865_25930 = state_25818__$1;
(statearr_25865_25930[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (25))){
var inst_25761 = (state_25818[(10)]);
var inst_25760 = (state_25818[(21)]);
var inst_25763 = (inst_25761 < inst_25760);
var inst_25764 = inst_25763;
var state_25818__$1 = state_25818;
if(cljs.core.truth_(inst_25764)){
var statearr_25866_25931 = state_25818__$1;
(statearr_25866_25931[(1)] = (27));

} else {
var statearr_25867_25932 = state_25818__$1;
(statearr_25867_25932[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (34))){
var state_25818__$1 = state_25818;
var statearr_25868_25933 = state_25818__$1;
(statearr_25868_25933[(2)] = null);

(statearr_25868_25933[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (17))){
var state_25818__$1 = state_25818;
var statearr_25869_25934 = state_25818__$1;
(statearr_25869_25934[(2)] = null);

(statearr_25869_25934[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (3))){
var inst_25816 = (state_25818[(2)]);
var state_25818__$1 = state_25818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25818__$1,inst_25816);
} else {
if((state_val_25819 === (12))){
var inst_25745 = (state_25818[(2)]);
var state_25818__$1 = state_25818;
var statearr_25870_25935 = state_25818__$1;
(statearr_25870_25935[(2)] = inst_25745);

(statearr_25870_25935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (2))){
var state_25818__$1 = state_25818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25818__$1,(4),ch);
} else {
if((state_val_25819 === (23))){
var state_25818__$1 = state_25818;
var statearr_25871_25936 = state_25818__$1;
(statearr_25871_25936[(2)] = null);

(statearr_25871_25936[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (35))){
var inst_25800 = (state_25818[(2)]);
var state_25818__$1 = state_25818;
var statearr_25872_25937 = state_25818__$1;
(statearr_25872_25937[(2)] = inst_25800);

(statearr_25872_25937[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (19))){
var inst_25717 = (state_25818[(7)]);
var inst_25721 = cljs.core.chunk_first.call(null,inst_25717);
var inst_25722 = cljs.core.chunk_rest.call(null,inst_25717);
var inst_25723 = cljs.core.count.call(null,inst_25721);
var inst_25695 = inst_25722;
var inst_25696 = inst_25721;
var inst_25697 = inst_25723;
var inst_25698 = (0);
var state_25818__$1 = (function (){var statearr_25873 = state_25818;
(statearr_25873[(14)] = inst_25697);

(statearr_25873[(15)] = inst_25698);

(statearr_25873[(16)] = inst_25696);

(statearr_25873[(17)] = inst_25695);

return statearr_25873;
})();
var statearr_25874_25938 = state_25818__$1;
(statearr_25874_25938[(2)] = null);

(statearr_25874_25938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (11))){
var inst_25717 = (state_25818[(7)]);
var inst_25695 = (state_25818[(17)]);
var inst_25717__$1 = cljs.core.seq.call(null,inst_25695);
var state_25818__$1 = (function (){var statearr_25875 = state_25818;
(statearr_25875[(7)] = inst_25717__$1);

return statearr_25875;
})();
if(inst_25717__$1){
var statearr_25876_25939 = state_25818__$1;
(statearr_25876_25939[(1)] = (16));

} else {
var statearr_25877_25940 = state_25818__$1;
(statearr_25877_25940[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (9))){
var inst_25747 = (state_25818[(2)]);
var state_25818__$1 = state_25818;
var statearr_25878_25941 = state_25818__$1;
(statearr_25878_25941[(2)] = inst_25747);

(statearr_25878_25941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (5))){
var inst_25693 = cljs.core.deref.call(null,cs);
var inst_25694 = cljs.core.seq.call(null,inst_25693);
var inst_25695 = inst_25694;
var inst_25696 = null;
var inst_25697 = (0);
var inst_25698 = (0);
var state_25818__$1 = (function (){var statearr_25879 = state_25818;
(statearr_25879[(14)] = inst_25697);

(statearr_25879[(15)] = inst_25698);

(statearr_25879[(16)] = inst_25696);

(statearr_25879[(17)] = inst_25695);

return statearr_25879;
})();
var statearr_25880_25942 = state_25818__$1;
(statearr_25880_25942[(2)] = null);

(statearr_25880_25942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (14))){
var state_25818__$1 = state_25818;
var statearr_25881_25943 = state_25818__$1;
(statearr_25881_25943[(2)] = null);

(statearr_25881_25943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (45))){
var inst_25808 = (state_25818[(2)]);
var state_25818__$1 = state_25818;
var statearr_25882_25944 = state_25818__$1;
(statearr_25882_25944[(2)] = inst_25808);

(statearr_25882_25944[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (26))){
var inst_25750 = (state_25818[(29)]);
var inst_25804 = (state_25818[(2)]);
var inst_25805 = cljs.core.seq.call(null,inst_25750);
var state_25818__$1 = (function (){var statearr_25883 = state_25818;
(statearr_25883[(31)] = inst_25804);

return statearr_25883;
})();
if(inst_25805){
var statearr_25884_25945 = state_25818__$1;
(statearr_25884_25945[(1)] = (42));

} else {
var statearr_25885_25946 = state_25818__$1;
(statearr_25885_25946[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (16))){
var inst_25717 = (state_25818[(7)]);
var inst_25719 = cljs.core.chunked_seq_QMARK_.call(null,inst_25717);
var state_25818__$1 = state_25818;
if(inst_25719){
var statearr_25886_25947 = state_25818__$1;
(statearr_25886_25947[(1)] = (19));

} else {
var statearr_25887_25948 = state_25818__$1;
(statearr_25887_25948[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (38))){
var inst_25797 = (state_25818[(2)]);
var state_25818__$1 = state_25818;
var statearr_25888_25949 = state_25818__$1;
(statearr_25888_25949[(2)] = inst_25797);

(statearr_25888_25949[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (30))){
var state_25818__$1 = state_25818;
var statearr_25889_25950 = state_25818__$1;
(statearr_25889_25950[(2)] = null);

(statearr_25889_25950[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (10))){
var inst_25698 = (state_25818[(15)]);
var inst_25696 = (state_25818[(16)]);
var inst_25706 = cljs.core._nth.call(null,inst_25696,inst_25698);
var inst_25707 = cljs.core.nth.call(null,inst_25706,(0),null);
var inst_25708 = cljs.core.nth.call(null,inst_25706,(1),null);
var state_25818__$1 = (function (){var statearr_25890 = state_25818;
(statearr_25890[(26)] = inst_25707);

return statearr_25890;
})();
if(cljs.core.truth_(inst_25708)){
var statearr_25891_25951 = state_25818__$1;
(statearr_25891_25951[(1)] = (13));

} else {
var statearr_25892_25952 = state_25818__$1;
(statearr_25892_25952[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (18))){
var inst_25743 = (state_25818[(2)]);
var state_25818__$1 = state_25818;
var statearr_25893_25953 = state_25818__$1;
(statearr_25893_25953[(2)] = inst_25743);

(statearr_25893_25953[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (42))){
var state_25818__$1 = state_25818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25818__$1,(45),dchan);
} else {
if((state_val_25819 === (37))){
var inst_25777 = (state_25818[(25)]);
var inst_25686 = (state_25818[(11)]);
var inst_25786 = (state_25818[(23)]);
var inst_25786__$1 = cljs.core.first.call(null,inst_25777);
var inst_25787 = cljs.core.async.put_BANG_.call(null,inst_25786__$1,inst_25686,done);
var state_25818__$1 = (function (){var statearr_25894 = state_25818;
(statearr_25894[(23)] = inst_25786__$1);

return statearr_25894;
})();
if(cljs.core.truth_(inst_25787)){
var statearr_25895_25954 = state_25818__$1;
(statearr_25895_25954[(1)] = (39));

} else {
var statearr_25896_25955 = state_25818__$1;
(statearr_25896_25955[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (8))){
var inst_25697 = (state_25818[(14)]);
var inst_25698 = (state_25818[(15)]);
var inst_25700 = (inst_25698 < inst_25697);
var inst_25701 = inst_25700;
var state_25818__$1 = state_25818;
if(cljs.core.truth_(inst_25701)){
var statearr_25897_25956 = state_25818__$1;
(statearr_25897_25956[(1)] = (10));

} else {
var statearr_25898_25957 = state_25818__$1;
(statearr_25898_25957[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25084__auto___25903,cs,m,dchan,dctr,done))
;
return ((function (switch__24989__auto__,c__25084__auto___25903,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24990__auto__ = null;
var cljs$core$async$mult_$_state_machine__24990__auto____0 = (function (){
var statearr_25899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25899[(0)] = cljs$core$async$mult_$_state_machine__24990__auto__);

(statearr_25899[(1)] = (1));

return statearr_25899;
});
var cljs$core$async$mult_$_state_machine__24990__auto____1 = (function (state_25818){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_25818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e25900){if((e25900 instanceof Object)){
var ex__24993__auto__ = e25900;
var statearr_25901_25958 = state_25818;
(statearr_25901_25958[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25959 = state_25818;
state_25818 = G__25959;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24990__auto__ = function(state_25818){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24990__auto____1.call(this,state_25818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24990__auto____0;
cljs$core$async$mult_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24990__auto____1;
return cljs$core$async$mult_$_state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___25903,cs,m,dchan,dctr,done))
})();
var state__25086__auto__ = (function (){var statearr_25902 = f__25085__auto__.call(null);
(statearr_25902[(6)] = c__25084__auto___25903);

return statearr_25902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___25903,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25961 = arguments.length;
switch (G__25961) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___25973 = arguments.length;
var i__4642__auto___25974 = (0);
while(true){
if((i__4642__auto___25974 < len__4641__auto___25973)){
args__4647__auto__.push((arguments[i__4642__auto___25974]));

var G__25975 = (i__4642__auto___25974 + (1));
i__4642__auto___25974 = G__25975;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25967){
var map__25968 = p__25967;
var map__25968__$1 = (((((!((map__25968 == null))))?(((((map__25968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25968):map__25968);
var opts = map__25968__$1;
var statearr_25970_25976 = state;
(statearr_25970_25976[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__25968,map__25968__$1,opts){
return (function (val){
var statearr_25971_25977 = state;
(statearr_25971_25977[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25968,map__25968__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25972_25978 = state;
(statearr_25972_25978[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25963){
var G__25964 = cljs.core.first.call(null,seq25963);
var seq25963__$1 = cljs.core.next.call(null,seq25963);
var G__25965 = cljs.core.first.call(null,seq25963__$1);
var seq25963__$2 = cljs.core.next.call(null,seq25963__$1);
var G__25966 = cljs.core.first.call(null,seq25963__$2);
var seq25963__$3 = cljs.core.next.call(null,seq25963__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25964,G__25965,G__25966,seq25963__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25979 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25980){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25980 = meta25980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25981,meta25980__$1){
var self__ = this;
var _25981__$1 = this;
return (new cljs.core.async.t_cljs$core$async25979(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25980__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25981){
var self__ = this;
var _25981__$1 = this;
return self__.meta25980;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25979.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta25980","meta25980",-431244044,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25979";

cljs.core.async.t_cljs$core$async25979.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25979");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25979.
 */
cljs.core.async.__GT_t_cljs$core$async25979 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25979(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25980){
return (new cljs.core.async.t_cljs$core$async25979(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25980));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25979(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25084__auto___26143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___26143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___26143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26083){
var state_val_26084 = (state_26083[(1)]);
if((state_val_26084 === (7))){
var inst_25998 = (state_26083[(2)]);
var state_26083__$1 = state_26083;
var statearr_26085_26144 = state_26083__$1;
(statearr_26085_26144[(2)] = inst_25998);

(statearr_26085_26144[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (20))){
var inst_26010 = (state_26083[(7)]);
var state_26083__$1 = state_26083;
var statearr_26086_26145 = state_26083__$1;
(statearr_26086_26145[(2)] = inst_26010);

(statearr_26086_26145[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (27))){
var state_26083__$1 = state_26083;
var statearr_26087_26146 = state_26083__$1;
(statearr_26087_26146[(2)] = null);

(statearr_26087_26146[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (1))){
var inst_25985 = (state_26083[(8)]);
var inst_25985__$1 = calc_state.call(null);
var inst_25987 = (inst_25985__$1 == null);
var inst_25988 = cljs.core.not.call(null,inst_25987);
var state_26083__$1 = (function (){var statearr_26088 = state_26083;
(statearr_26088[(8)] = inst_25985__$1);

return statearr_26088;
})();
if(inst_25988){
var statearr_26089_26147 = state_26083__$1;
(statearr_26089_26147[(1)] = (2));

} else {
var statearr_26090_26148 = state_26083__$1;
(statearr_26090_26148[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (24))){
var inst_26043 = (state_26083[(9)]);
var inst_26057 = (state_26083[(10)]);
var inst_26034 = (state_26083[(11)]);
var inst_26057__$1 = inst_26034.call(null,inst_26043);
var state_26083__$1 = (function (){var statearr_26091 = state_26083;
(statearr_26091[(10)] = inst_26057__$1);

return statearr_26091;
})();
if(cljs.core.truth_(inst_26057__$1)){
var statearr_26092_26149 = state_26083__$1;
(statearr_26092_26149[(1)] = (29));

} else {
var statearr_26093_26150 = state_26083__$1;
(statearr_26093_26150[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (4))){
var inst_26001 = (state_26083[(2)]);
var state_26083__$1 = state_26083;
if(cljs.core.truth_(inst_26001)){
var statearr_26094_26151 = state_26083__$1;
(statearr_26094_26151[(1)] = (8));

} else {
var statearr_26095_26152 = state_26083__$1;
(statearr_26095_26152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (15))){
var inst_26028 = (state_26083[(2)]);
var state_26083__$1 = state_26083;
if(cljs.core.truth_(inst_26028)){
var statearr_26096_26153 = state_26083__$1;
(statearr_26096_26153[(1)] = (19));

} else {
var statearr_26097_26154 = state_26083__$1;
(statearr_26097_26154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (21))){
var inst_26033 = (state_26083[(12)]);
var inst_26033__$1 = (state_26083[(2)]);
var inst_26034 = cljs.core.get.call(null,inst_26033__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26035 = cljs.core.get.call(null,inst_26033__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26036 = cljs.core.get.call(null,inst_26033__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26083__$1 = (function (){var statearr_26098 = state_26083;
(statearr_26098[(13)] = inst_26035);

(statearr_26098[(11)] = inst_26034);

(statearr_26098[(12)] = inst_26033__$1);

return statearr_26098;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26083__$1,(22),inst_26036);
} else {
if((state_val_26084 === (31))){
var inst_26065 = (state_26083[(2)]);
var state_26083__$1 = state_26083;
if(cljs.core.truth_(inst_26065)){
var statearr_26099_26155 = state_26083__$1;
(statearr_26099_26155[(1)] = (32));

} else {
var statearr_26100_26156 = state_26083__$1;
(statearr_26100_26156[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (32))){
var inst_26042 = (state_26083[(14)]);
var state_26083__$1 = state_26083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26083__$1,(35),out,inst_26042);
} else {
if((state_val_26084 === (33))){
var inst_26033 = (state_26083[(12)]);
var inst_26010 = inst_26033;
var state_26083__$1 = (function (){var statearr_26101 = state_26083;
(statearr_26101[(7)] = inst_26010);

return statearr_26101;
})();
var statearr_26102_26157 = state_26083__$1;
(statearr_26102_26157[(2)] = null);

(statearr_26102_26157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (13))){
var inst_26010 = (state_26083[(7)]);
var inst_26017 = inst_26010.cljs$lang$protocol_mask$partition0$;
var inst_26018 = (inst_26017 & (64));
var inst_26019 = inst_26010.cljs$core$ISeq$;
var inst_26020 = (cljs.core.PROTOCOL_SENTINEL === inst_26019);
var inst_26021 = ((inst_26018) || (inst_26020));
var state_26083__$1 = state_26083;
if(cljs.core.truth_(inst_26021)){
var statearr_26103_26158 = state_26083__$1;
(statearr_26103_26158[(1)] = (16));

} else {
var statearr_26104_26159 = state_26083__$1;
(statearr_26104_26159[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (22))){
var inst_26043 = (state_26083[(9)]);
var inst_26042 = (state_26083[(14)]);
var inst_26041 = (state_26083[(2)]);
var inst_26042__$1 = cljs.core.nth.call(null,inst_26041,(0),null);
var inst_26043__$1 = cljs.core.nth.call(null,inst_26041,(1),null);
var inst_26044 = (inst_26042__$1 == null);
var inst_26045 = cljs.core._EQ_.call(null,inst_26043__$1,change);
var inst_26046 = ((inst_26044) || (inst_26045));
var state_26083__$1 = (function (){var statearr_26105 = state_26083;
(statearr_26105[(9)] = inst_26043__$1);

(statearr_26105[(14)] = inst_26042__$1);

return statearr_26105;
})();
if(cljs.core.truth_(inst_26046)){
var statearr_26106_26160 = state_26083__$1;
(statearr_26106_26160[(1)] = (23));

} else {
var statearr_26107_26161 = state_26083__$1;
(statearr_26107_26161[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (36))){
var inst_26033 = (state_26083[(12)]);
var inst_26010 = inst_26033;
var state_26083__$1 = (function (){var statearr_26108 = state_26083;
(statearr_26108[(7)] = inst_26010);

return statearr_26108;
})();
var statearr_26109_26162 = state_26083__$1;
(statearr_26109_26162[(2)] = null);

(statearr_26109_26162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (29))){
var inst_26057 = (state_26083[(10)]);
var state_26083__$1 = state_26083;
var statearr_26110_26163 = state_26083__$1;
(statearr_26110_26163[(2)] = inst_26057);

(statearr_26110_26163[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (6))){
var state_26083__$1 = state_26083;
var statearr_26111_26164 = state_26083__$1;
(statearr_26111_26164[(2)] = false);

(statearr_26111_26164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (28))){
var inst_26053 = (state_26083[(2)]);
var inst_26054 = calc_state.call(null);
var inst_26010 = inst_26054;
var state_26083__$1 = (function (){var statearr_26112 = state_26083;
(statearr_26112[(15)] = inst_26053);

(statearr_26112[(7)] = inst_26010);

return statearr_26112;
})();
var statearr_26113_26165 = state_26083__$1;
(statearr_26113_26165[(2)] = null);

(statearr_26113_26165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (25))){
var inst_26079 = (state_26083[(2)]);
var state_26083__$1 = state_26083;
var statearr_26114_26166 = state_26083__$1;
(statearr_26114_26166[(2)] = inst_26079);

(statearr_26114_26166[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (34))){
var inst_26077 = (state_26083[(2)]);
var state_26083__$1 = state_26083;
var statearr_26115_26167 = state_26083__$1;
(statearr_26115_26167[(2)] = inst_26077);

(statearr_26115_26167[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (17))){
var state_26083__$1 = state_26083;
var statearr_26116_26168 = state_26083__$1;
(statearr_26116_26168[(2)] = false);

(statearr_26116_26168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (3))){
var state_26083__$1 = state_26083;
var statearr_26117_26169 = state_26083__$1;
(statearr_26117_26169[(2)] = false);

(statearr_26117_26169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (12))){
var inst_26081 = (state_26083[(2)]);
var state_26083__$1 = state_26083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26083__$1,inst_26081);
} else {
if((state_val_26084 === (2))){
var inst_25985 = (state_26083[(8)]);
var inst_25990 = inst_25985.cljs$lang$protocol_mask$partition0$;
var inst_25991 = (inst_25990 & (64));
var inst_25992 = inst_25985.cljs$core$ISeq$;
var inst_25993 = (cljs.core.PROTOCOL_SENTINEL === inst_25992);
var inst_25994 = ((inst_25991) || (inst_25993));
var state_26083__$1 = state_26083;
if(cljs.core.truth_(inst_25994)){
var statearr_26118_26170 = state_26083__$1;
(statearr_26118_26170[(1)] = (5));

} else {
var statearr_26119_26171 = state_26083__$1;
(statearr_26119_26171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (23))){
var inst_26042 = (state_26083[(14)]);
var inst_26048 = (inst_26042 == null);
var state_26083__$1 = state_26083;
if(cljs.core.truth_(inst_26048)){
var statearr_26120_26172 = state_26083__$1;
(statearr_26120_26172[(1)] = (26));

} else {
var statearr_26121_26173 = state_26083__$1;
(statearr_26121_26173[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (35))){
var inst_26068 = (state_26083[(2)]);
var state_26083__$1 = state_26083;
if(cljs.core.truth_(inst_26068)){
var statearr_26122_26174 = state_26083__$1;
(statearr_26122_26174[(1)] = (36));

} else {
var statearr_26123_26175 = state_26083__$1;
(statearr_26123_26175[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (19))){
var inst_26010 = (state_26083[(7)]);
var inst_26030 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26010);
var state_26083__$1 = state_26083;
var statearr_26124_26176 = state_26083__$1;
(statearr_26124_26176[(2)] = inst_26030);

(statearr_26124_26176[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (11))){
var inst_26010 = (state_26083[(7)]);
var inst_26014 = (inst_26010 == null);
var inst_26015 = cljs.core.not.call(null,inst_26014);
var state_26083__$1 = state_26083;
if(inst_26015){
var statearr_26125_26177 = state_26083__$1;
(statearr_26125_26177[(1)] = (13));

} else {
var statearr_26126_26178 = state_26083__$1;
(statearr_26126_26178[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (9))){
var inst_25985 = (state_26083[(8)]);
var state_26083__$1 = state_26083;
var statearr_26127_26179 = state_26083__$1;
(statearr_26127_26179[(2)] = inst_25985);

(statearr_26127_26179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (5))){
var state_26083__$1 = state_26083;
var statearr_26128_26180 = state_26083__$1;
(statearr_26128_26180[(2)] = true);

(statearr_26128_26180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (14))){
var state_26083__$1 = state_26083;
var statearr_26129_26181 = state_26083__$1;
(statearr_26129_26181[(2)] = false);

(statearr_26129_26181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (26))){
var inst_26043 = (state_26083[(9)]);
var inst_26050 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26043);
var state_26083__$1 = state_26083;
var statearr_26130_26182 = state_26083__$1;
(statearr_26130_26182[(2)] = inst_26050);

(statearr_26130_26182[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (16))){
var state_26083__$1 = state_26083;
var statearr_26131_26183 = state_26083__$1;
(statearr_26131_26183[(2)] = true);

(statearr_26131_26183[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (38))){
var inst_26073 = (state_26083[(2)]);
var state_26083__$1 = state_26083;
var statearr_26132_26184 = state_26083__$1;
(statearr_26132_26184[(2)] = inst_26073);

(statearr_26132_26184[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (30))){
var inst_26043 = (state_26083[(9)]);
var inst_26035 = (state_26083[(13)]);
var inst_26034 = (state_26083[(11)]);
var inst_26060 = cljs.core.empty_QMARK_.call(null,inst_26034);
var inst_26061 = inst_26035.call(null,inst_26043);
var inst_26062 = cljs.core.not.call(null,inst_26061);
var inst_26063 = ((inst_26060) && (inst_26062));
var state_26083__$1 = state_26083;
var statearr_26133_26185 = state_26083__$1;
(statearr_26133_26185[(2)] = inst_26063);

(statearr_26133_26185[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (10))){
var inst_25985 = (state_26083[(8)]);
var inst_26006 = (state_26083[(2)]);
var inst_26007 = cljs.core.get.call(null,inst_26006,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26008 = cljs.core.get.call(null,inst_26006,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26009 = cljs.core.get.call(null,inst_26006,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26010 = inst_25985;
var state_26083__$1 = (function (){var statearr_26134 = state_26083;
(statearr_26134[(7)] = inst_26010);

(statearr_26134[(16)] = inst_26009);

(statearr_26134[(17)] = inst_26007);

(statearr_26134[(18)] = inst_26008);

return statearr_26134;
})();
var statearr_26135_26186 = state_26083__$1;
(statearr_26135_26186[(2)] = null);

(statearr_26135_26186[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (18))){
var inst_26025 = (state_26083[(2)]);
var state_26083__$1 = state_26083;
var statearr_26136_26187 = state_26083__$1;
(statearr_26136_26187[(2)] = inst_26025);

(statearr_26136_26187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (37))){
var state_26083__$1 = state_26083;
var statearr_26137_26188 = state_26083__$1;
(statearr_26137_26188[(2)] = null);

(statearr_26137_26188[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (8))){
var inst_25985 = (state_26083[(8)]);
var inst_26003 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25985);
var state_26083__$1 = state_26083;
var statearr_26138_26189 = state_26083__$1;
(statearr_26138_26189[(2)] = inst_26003);

(statearr_26138_26189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25084__auto___26143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24989__auto__,c__25084__auto___26143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24990__auto__ = null;
var cljs$core$async$mix_$_state_machine__24990__auto____0 = (function (){
var statearr_26139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26139[(0)] = cljs$core$async$mix_$_state_machine__24990__auto__);

(statearr_26139[(1)] = (1));

return statearr_26139;
});
var cljs$core$async$mix_$_state_machine__24990__auto____1 = (function (state_26083){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_26083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e26140){if((e26140 instanceof Object)){
var ex__24993__auto__ = e26140;
var statearr_26141_26190 = state_26083;
(statearr_26141_26190[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26191 = state_26083;
state_26083 = G__26191;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24990__auto__ = function(state_26083){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24990__auto____1.call(this,state_26083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24990__auto____0;
cljs$core$async$mix_$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24990__auto____1;
return cljs$core$async$mix_$_state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___26143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25086__auto__ = (function (){var statearr_26142 = f__25085__auto__.call(null);
(statearr_26142[(6)] = c__25084__auto___26143);

return statearr_26142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___26143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26193 = arguments.length;
switch (G__26193) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26197 = arguments.length;
switch (G__26197) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__26195_SHARP_){
if(cljs.core.truth_(p1__26195_SHARP_.call(null,topic))){
return p1__26195_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26195_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26198 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26198 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26199){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26199 = meta26199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26200,meta26199__$1){
var self__ = this;
var _26200__$1 = this;
return (new cljs.core.async.t_cljs$core$async26198(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26199__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26200){
var self__ = this;
var _26200__$1 = this;
return self__.meta26199;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26198.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26199","meta26199",-1178753688,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26198.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26198";

cljs.core.async.t_cljs$core$async26198.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26198");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26198.
 */
cljs.core.async.__GT_t_cljs$core$async26198 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26198(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26199){
return (new cljs.core.async.t_cljs$core$async26198(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26199));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26198(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25084__auto___26318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___26318,mults,ensure_mult,p){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___26318,mults,ensure_mult,p){
return (function (state_26272){
var state_val_26273 = (state_26272[(1)]);
if((state_val_26273 === (7))){
var inst_26268 = (state_26272[(2)]);
var state_26272__$1 = state_26272;
var statearr_26274_26319 = state_26272__$1;
(statearr_26274_26319[(2)] = inst_26268);

(statearr_26274_26319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (20))){
var state_26272__$1 = state_26272;
var statearr_26275_26320 = state_26272__$1;
(statearr_26275_26320[(2)] = null);

(statearr_26275_26320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (1))){
var state_26272__$1 = state_26272;
var statearr_26276_26321 = state_26272__$1;
(statearr_26276_26321[(2)] = null);

(statearr_26276_26321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (24))){
var inst_26251 = (state_26272[(7)]);
var inst_26260 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26251);
var state_26272__$1 = state_26272;
var statearr_26277_26322 = state_26272__$1;
(statearr_26277_26322[(2)] = inst_26260);

(statearr_26277_26322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (4))){
var inst_26203 = (state_26272[(8)]);
var inst_26203__$1 = (state_26272[(2)]);
var inst_26204 = (inst_26203__$1 == null);
var state_26272__$1 = (function (){var statearr_26278 = state_26272;
(statearr_26278[(8)] = inst_26203__$1);

return statearr_26278;
})();
if(cljs.core.truth_(inst_26204)){
var statearr_26279_26323 = state_26272__$1;
(statearr_26279_26323[(1)] = (5));

} else {
var statearr_26280_26324 = state_26272__$1;
(statearr_26280_26324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (15))){
var inst_26245 = (state_26272[(2)]);
var state_26272__$1 = state_26272;
var statearr_26281_26325 = state_26272__$1;
(statearr_26281_26325[(2)] = inst_26245);

(statearr_26281_26325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (21))){
var inst_26265 = (state_26272[(2)]);
var state_26272__$1 = (function (){var statearr_26282 = state_26272;
(statearr_26282[(9)] = inst_26265);

return statearr_26282;
})();
var statearr_26283_26326 = state_26272__$1;
(statearr_26283_26326[(2)] = null);

(statearr_26283_26326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (13))){
var inst_26227 = (state_26272[(10)]);
var inst_26229 = cljs.core.chunked_seq_QMARK_.call(null,inst_26227);
var state_26272__$1 = state_26272;
if(inst_26229){
var statearr_26284_26327 = state_26272__$1;
(statearr_26284_26327[(1)] = (16));

} else {
var statearr_26285_26328 = state_26272__$1;
(statearr_26285_26328[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (22))){
var inst_26257 = (state_26272[(2)]);
var state_26272__$1 = state_26272;
if(cljs.core.truth_(inst_26257)){
var statearr_26286_26329 = state_26272__$1;
(statearr_26286_26329[(1)] = (23));

} else {
var statearr_26287_26330 = state_26272__$1;
(statearr_26287_26330[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (6))){
var inst_26251 = (state_26272[(7)]);
var inst_26253 = (state_26272[(11)]);
var inst_26203 = (state_26272[(8)]);
var inst_26251__$1 = topic_fn.call(null,inst_26203);
var inst_26252 = cljs.core.deref.call(null,mults);
var inst_26253__$1 = cljs.core.get.call(null,inst_26252,inst_26251__$1);
var state_26272__$1 = (function (){var statearr_26288 = state_26272;
(statearr_26288[(7)] = inst_26251__$1);

(statearr_26288[(11)] = inst_26253__$1);

return statearr_26288;
})();
if(cljs.core.truth_(inst_26253__$1)){
var statearr_26289_26331 = state_26272__$1;
(statearr_26289_26331[(1)] = (19));

} else {
var statearr_26290_26332 = state_26272__$1;
(statearr_26290_26332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (25))){
var inst_26262 = (state_26272[(2)]);
var state_26272__$1 = state_26272;
var statearr_26291_26333 = state_26272__$1;
(statearr_26291_26333[(2)] = inst_26262);

(statearr_26291_26333[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (17))){
var inst_26227 = (state_26272[(10)]);
var inst_26236 = cljs.core.first.call(null,inst_26227);
var inst_26237 = cljs.core.async.muxch_STAR_.call(null,inst_26236);
var inst_26238 = cljs.core.async.close_BANG_.call(null,inst_26237);
var inst_26239 = cljs.core.next.call(null,inst_26227);
var inst_26213 = inst_26239;
var inst_26214 = null;
var inst_26215 = (0);
var inst_26216 = (0);
var state_26272__$1 = (function (){var statearr_26292 = state_26272;
(statearr_26292[(12)] = inst_26216);

(statearr_26292[(13)] = inst_26238);

(statearr_26292[(14)] = inst_26215);

(statearr_26292[(15)] = inst_26214);

(statearr_26292[(16)] = inst_26213);

return statearr_26292;
})();
var statearr_26293_26334 = state_26272__$1;
(statearr_26293_26334[(2)] = null);

(statearr_26293_26334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (3))){
var inst_26270 = (state_26272[(2)]);
var state_26272__$1 = state_26272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26272__$1,inst_26270);
} else {
if((state_val_26273 === (12))){
var inst_26247 = (state_26272[(2)]);
var state_26272__$1 = state_26272;
var statearr_26294_26335 = state_26272__$1;
(statearr_26294_26335[(2)] = inst_26247);

(statearr_26294_26335[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (2))){
var state_26272__$1 = state_26272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26272__$1,(4),ch);
} else {
if((state_val_26273 === (23))){
var state_26272__$1 = state_26272;
var statearr_26295_26336 = state_26272__$1;
(statearr_26295_26336[(2)] = null);

(statearr_26295_26336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (19))){
var inst_26253 = (state_26272[(11)]);
var inst_26203 = (state_26272[(8)]);
var inst_26255 = cljs.core.async.muxch_STAR_.call(null,inst_26253);
var state_26272__$1 = state_26272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26272__$1,(22),inst_26255,inst_26203);
} else {
if((state_val_26273 === (11))){
var inst_26227 = (state_26272[(10)]);
var inst_26213 = (state_26272[(16)]);
var inst_26227__$1 = cljs.core.seq.call(null,inst_26213);
var state_26272__$1 = (function (){var statearr_26296 = state_26272;
(statearr_26296[(10)] = inst_26227__$1);

return statearr_26296;
})();
if(inst_26227__$1){
var statearr_26297_26337 = state_26272__$1;
(statearr_26297_26337[(1)] = (13));

} else {
var statearr_26298_26338 = state_26272__$1;
(statearr_26298_26338[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (9))){
var inst_26249 = (state_26272[(2)]);
var state_26272__$1 = state_26272;
var statearr_26299_26339 = state_26272__$1;
(statearr_26299_26339[(2)] = inst_26249);

(statearr_26299_26339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (5))){
var inst_26210 = cljs.core.deref.call(null,mults);
var inst_26211 = cljs.core.vals.call(null,inst_26210);
var inst_26212 = cljs.core.seq.call(null,inst_26211);
var inst_26213 = inst_26212;
var inst_26214 = null;
var inst_26215 = (0);
var inst_26216 = (0);
var state_26272__$1 = (function (){var statearr_26300 = state_26272;
(statearr_26300[(12)] = inst_26216);

(statearr_26300[(14)] = inst_26215);

(statearr_26300[(15)] = inst_26214);

(statearr_26300[(16)] = inst_26213);

return statearr_26300;
})();
var statearr_26301_26340 = state_26272__$1;
(statearr_26301_26340[(2)] = null);

(statearr_26301_26340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (14))){
var state_26272__$1 = state_26272;
var statearr_26305_26341 = state_26272__$1;
(statearr_26305_26341[(2)] = null);

(statearr_26305_26341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (16))){
var inst_26227 = (state_26272[(10)]);
var inst_26231 = cljs.core.chunk_first.call(null,inst_26227);
var inst_26232 = cljs.core.chunk_rest.call(null,inst_26227);
var inst_26233 = cljs.core.count.call(null,inst_26231);
var inst_26213 = inst_26232;
var inst_26214 = inst_26231;
var inst_26215 = inst_26233;
var inst_26216 = (0);
var state_26272__$1 = (function (){var statearr_26306 = state_26272;
(statearr_26306[(12)] = inst_26216);

(statearr_26306[(14)] = inst_26215);

(statearr_26306[(15)] = inst_26214);

(statearr_26306[(16)] = inst_26213);

return statearr_26306;
})();
var statearr_26307_26342 = state_26272__$1;
(statearr_26307_26342[(2)] = null);

(statearr_26307_26342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (10))){
var inst_26216 = (state_26272[(12)]);
var inst_26215 = (state_26272[(14)]);
var inst_26214 = (state_26272[(15)]);
var inst_26213 = (state_26272[(16)]);
var inst_26221 = cljs.core._nth.call(null,inst_26214,inst_26216);
var inst_26222 = cljs.core.async.muxch_STAR_.call(null,inst_26221);
var inst_26223 = cljs.core.async.close_BANG_.call(null,inst_26222);
var inst_26224 = (inst_26216 + (1));
var tmp26302 = inst_26215;
var tmp26303 = inst_26214;
var tmp26304 = inst_26213;
var inst_26213__$1 = tmp26304;
var inst_26214__$1 = tmp26303;
var inst_26215__$1 = tmp26302;
var inst_26216__$1 = inst_26224;
var state_26272__$1 = (function (){var statearr_26308 = state_26272;
(statearr_26308[(12)] = inst_26216__$1);

(statearr_26308[(14)] = inst_26215__$1);

(statearr_26308[(17)] = inst_26223);

(statearr_26308[(15)] = inst_26214__$1);

(statearr_26308[(16)] = inst_26213__$1);

return statearr_26308;
})();
var statearr_26309_26343 = state_26272__$1;
(statearr_26309_26343[(2)] = null);

(statearr_26309_26343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (18))){
var inst_26242 = (state_26272[(2)]);
var state_26272__$1 = state_26272;
var statearr_26310_26344 = state_26272__$1;
(statearr_26310_26344[(2)] = inst_26242);

(statearr_26310_26344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26273 === (8))){
var inst_26216 = (state_26272[(12)]);
var inst_26215 = (state_26272[(14)]);
var inst_26218 = (inst_26216 < inst_26215);
var inst_26219 = inst_26218;
var state_26272__$1 = state_26272;
if(cljs.core.truth_(inst_26219)){
var statearr_26311_26345 = state_26272__$1;
(statearr_26311_26345[(1)] = (10));

} else {
var statearr_26312_26346 = state_26272__$1;
(statearr_26312_26346[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25084__auto___26318,mults,ensure_mult,p))
;
return ((function (switch__24989__auto__,c__25084__auto___26318,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24990__auto__ = null;
var cljs$core$async$state_machine__24990__auto____0 = (function (){
var statearr_26313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26313[(0)] = cljs$core$async$state_machine__24990__auto__);

(statearr_26313[(1)] = (1));

return statearr_26313;
});
var cljs$core$async$state_machine__24990__auto____1 = (function (state_26272){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_26272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e26314){if((e26314 instanceof Object)){
var ex__24993__auto__ = e26314;
var statearr_26315_26347 = state_26272;
(statearr_26315_26347[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26348 = state_26272;
state_26272 = G__26348;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$state_machine__24990__auto__ = function(state_26272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24990__auto____1.call(this,state_26272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24990__auto____0;
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24990__auto____1;
return cljs$core$async$state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___26318,mults,ensure_mult,p))
})();
var state__25086__auto__ = (function (){var statearr_26316 = f__25085__auto__.call(null);
(statearr_26316[(6)] = c__25084__auto___26318);

return statearr_26316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___26318,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26350 = arguments.length;
switch (G__26350) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26353 = arguments.length;
switch (G__26353) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__26356 = arguments.length;
switch (G__26356) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25084__auto___26423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___26423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___26423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26395){
var state_val_26396 = (state_26395[(1)]);
if((state_val_26396 === (7))){
var state_26395__$1 = state_26395;
var statearr_26397_26424 = state_26395__$1;
(statearr_26397_26424[(2)] = null);

(statearr_26397_26424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (1))){
var state_26395__$1 = state_26395;
var statearr_26398_26425 = state_26395__$1;
(statearr_26398_26425[(2)] = null);

(statearr_26398_26425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (4))){
var inst_26359 = (state_26395[(7)]);
var inst_26361 = (inst_26359 < cnt);
var state_26395__$1 = state_26395;
if(cljs.core.truth_(inst_26361)){
var statearr_26399_26426 = state_26395__$1;
(statearr_26399_26426[(1)] = (6));

} else {
var statearr_26400_26427 = state_26395__$1;
(statearr_26400_26427[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (15))){
var inst_26391 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26401_26428 = state_26395__$1;
(statearr_26401_26428[(2)] = inst_26391);

(statearr_26401_26428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (13))){
var inst_26384 = cljs.core.async.close_BANG_.call(null,out);
var state_26395__$1 = state_26395;
var statearr_26402_26429 = state_26395__$1;
(statearr_26402_26429[(2)] = inst_26384);

(statearr_26402_26429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (6))){
var state_26395__$1 = state_26395;
var statearr_26403_26430 = state_26395__$1;
(statearr_26403_26430[(2)] = null);

(statearr_26403_26430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (3))){
var inst_26393 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26395__$1,inst_26393);
} else {
if((state_val_26396 === (12))){
var inst_26381 = (state_26395[(8)]);
var inst_26381__$1 = (state_26395[(2)]);
var inst_26382 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26381__$1);
var state_26395__$1 = (function (){var statearr_26404 = state_26395;
(statearr_26404[(8)] = inst_26381__$1);

return statearr_26404;
})();
if(cljs.core.truth_(inst_26382)){
var statearr_26405_26431 = state_26395__$1;
(statearr_26405_26431[(1)] = (13));

} else {
var statearr_26406_26432 = state_26395__$1;
(statearr_26406_26432[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (2))){
var inst_26358 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26359 = (0);
var state_26395__$1 = (function (){var statearr_26407 = state_26395;
(statearr_26407[(9)] = inst_26358);

(statearr_26407[(7)] = inst_26359);

return statearr_26407;
})();
var statearr_26408_26433 = state_26395__$1;
(statearr_26408_26433[(2)] = null);

(statearr_26408_26433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (11))){
var inst_26359 = (state_26395[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26395,(10),Object,null,(9));
var inst_26368 = chs__$1.call(null,inst_26359);
var inst_26369 = done.call(null,inst_26359);
var inst_26370 = cljs.core.async.take_BANG_.call(null,inst_26368,inst_26369);
var state_26395__$1 = state_26395;
var statearr_26409_26434 = state_26395__$1;
(statearr_26409_26434[(2)] = inst_26370);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26395__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (9))){
var inst_26359 = (state_26395[(7)]);
var inst_26372 = (state_26395[(2)]);
var inst_26373 = (inst_26359 + (1));
var inst_26359__$1 = inst_26373;
var state_26395__$1 = (function (){var statearr_26410 = state_26395;
(statearr_26410[(10)] = inst_26372);

(statearr_26410[(7)] = inst_26359__$1);

return statearr_26410;
})();
var statearr_26411_26435 = state_26395__$1;
(statearr_26411_26435[(2)] = null);

(statearr_26411_26435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (5))){
var inst_26379 = (state_26395[(2)]);
var state_26395__$1 = (function (){var statearr_26412 = state_26395;
(statearr_26412[(11)] = inst_26379);

return statearr_26412;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26395__$1,(12),dchan);
} else {
if((state_val_26396 === (14))){
var inst_26381 = (state_26395[(8)]);
var inst_26386 = cljs.core.apply.call(null,f,inst_26381);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26395__$1,(16),out,inst_26386);
} else {
if((state_val_26396 === (16))){
var inst_26388 = (state_26395[(2)]);
var state_26395__$1 = (function (){var statearr_26413 = state_26395;
(statearr_26413[(12)] = inst_26388);

return statearr_26413;
})();
var statearr_26414_26436 = state_26395__$1;
(statearr_26414_26436[(2)] = null);

(statearr_26414_26436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (10))){
var inst_26363 = (state_26395[(2)]);
var inst_26364 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26395__$1 = (function (){var statearr_26415 = state_26395;
(statearr_26415[(13)] = inst_26363);

return statearr_26415;
})();
var statearr_26416_26437 = state_26395__$1;
(statearr_26416_26437[(2)] = inst_26364);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26395__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (8))){
var inst_26377 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26417_26438 = state_26395__$1;
(statearr_26417_26438[(2)] = inst_26377);

(statearr_26417_26438[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25084__auto___26423,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24989__auto__,c__25084__auto___26423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24990__auto__ = null;
var cljs$core$async$state_machine__24990__auto____0 = (function (){
var statearr_26418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26418[(0)] = cljs$core$async$state_machine__24990__auto__);

(statearr_26418[(1)] = (1));

return statearr_26418;
});
var cljs$core$async$state_machine__24990__auto____1 = (function (state_26395){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_26395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e26419){if((e26419 instanceof Object)){
var ex__24993__auto__ = e26419;
var statearr_26420_26439 = state_26395;
(statearr_26420_26439[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26440 = state_26395;
state_26395 = G__26440;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$state_machine__24990__auto__ = function(state_26395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24990__auto____1.call(this,state_26395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24990__auto____0;
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24990__auto____1;
return cljs$core$async$state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___26423,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25086__auto__ = (function (){var statearr_26421 = f__25085__auto__.call(null);
(statearr_26421[(6)] = c__25084__auto___26423);

return statearr_26421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___26423,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26443 = arguments.length;
switch (G__26443) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25084__auto___26497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___26497,out){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___26497,out){
return (function (state_26475){
var state_val_26476 = (state_26475[(1)]);
if((state_val_26476 === (7))){
var inst_26454 = (state_26475[(7)]);
var inst_26455 = (state_26475[(8)]);
var inst_26454__$1 = (state_26475[(2)]);
var inst_26455__$1 = cljs.core.nth.call(null,inst_26454__$1,(0),null);
var inst_26456 = cljs.core.nth.call(null,inst_26454__$1,(1),null);
var inst_26457 = (inst_26455__$1 == null);
var state_26475__$1 = (function (){var statearr_26477 = state_26475;
(statearr_26477[(7)] = inst_26454__$1);

(statearr_26477[(9)] = inst_26456);

(statearr_26477[(8)] = inst_26455__$1);

return statearr_26477;
})();
if(cljs.core.truth_(inst_26457)){
var statearr_26478_26498 = state_26475__$1;
(statearr_26478_26498[(1)] = (8));

} else {
var statearr_26479_26499 = state_26475__$1;
(statearr_26479_26499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (1))){
var inst_26444 = cljs.core.vec.call(null,chs);
var inst_26445 = inst_26444;
var state_26475__$1 = (function (){var statearr_26480 = state_26475;
(statearr_26480[(10)] = inst_26445);

return statearr_26480;
})();
var statearr_26481_26500 = state_26475__$1;
(statearr_26481_26500[(2)] = null);

(statearr_26481_26500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (4))){
var inst_26445 = (state_26475[(10)]);
var state_26475__$1 = state_26475;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26475__$1,(7),inst_26445);
} else {
if((state_val_26476 === (6))){
var inst_26471 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
var statearr_26482_26501 = state_26475__$1;
(statearr_26482_26501[(2)] = inst_26471);

(statearr_26482_26501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (3))){
var inst_26473 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26475__$1,inst_26473);
} else {
if((state_val_26476 === (2))){
var inst_26445 = (state_26475[(10)]);
var inst_26447 = cljs.core.count.call(null,inst_26445);
var inst_26448 = (inst_26447 > (0));
var state_26475__$1 = state_26475;
if(cljs.core.truth_(inst_26448)){
var statearr_26484_26502 = state_26475__$1;
(statearr_26484_26502[(1)] = (4));

} else {
var statearr_26485_26503 = state_26475__$1;
(statearr_26485_26503[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (11))){
var inst_26445 = (state_26475[(10)]);
var inst_26464 = (state_26475[(2)]);
var tmp26483 = inst_26445;
var inst_26445__$1 = tmp26483;
var state_26475__$1 = (function (){var statearr_26486 = state_26475;
(statearr_26486[(11)] = inst_26464);

(statearr_26486[(10)] = inst_26445__$1);

return statearr_26486;
})();
var statearr_26487_26504 = state_26475__$1;
(statearr_26487_26504[(2)] = null);

(statearr_26487_26504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (9))){
var inst_26455 = (state_26475[(8)]);
var state_26475__$1 = state_26475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26475__$1,(11),out,inst_26455);
} else {
if((state_val_26476 === (5))){
var inst_26469 = cljs.core.async.close_BANG_.call(null,out);
var state_26475__$1 = state_26475;
var statearr_26488_26505 = state_26475__$1;
(statearr_26488_26505[(2)] = inst_26469);

(statearr_26488_26505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (10))){
var inst_26467 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
var statearr_26489_26506 = state_26475__$1;
(statearr_26489_26506[(2)] = inst_26467);

(statearr_26489_26506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (8))){
var inst_26445 = (state_26475[(10)]);
var inst_26454 = (state_26475[(7)]);
var inst_26456 = (state_26475[(9)]);
var inst_26455 = (state_26475[(8)]);
var inst_26459 = (function (){var cs = inst_26445;
var vec__26450 = inst_26454;
var v = inst_26455;
var c = inst_26456;
return ((function (cs,vec__26450,v,c,inst_26445,inst_26454,inst_26456,inst_26455,state_val_26476,c__25084__auto___26497,out){
return (function (p1__26441_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26441_SHARP_);
});
;})(cs,vec__26450,v,c,inst_26445,inst_26454,inst_26456,inst_26455,state_val_26476,c__25084__auto___26497,out))
})();
var inst_26460 = cljs.core.filterv.call(null,inst_26459,inst_26445);
var inst_26445__$1 = inst_26460;
var state_26475__$1 = (function (){var statearr_26490 = state_26475;
(statearr_26490[(10)] = inst_26445__$1);

return statearr_26490;
})();
var statearr_26491_26507 = state_26475__$1;
(statearr_26491_26507[(2)] = null);

(statearr_26491_26507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25084__auto___26497,out))
;
return ((function (switch__24989__auto__,c__25084__auto___26497,out){
return (function() {
var cljs$core$async$state_machine__24990__auto__ = null;
var cljs$core$async$state_machine__24990__auto____0 = (function (){
var statearr_26492 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26492[(0)] = cljs$core$async$state_machine__24990__auto__);

(statearr_26492[(1)] = (1));

return statearr_26492;
});
var cljs$core$async$state_machine__24990__auto____1 = (function (state_26475){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_26475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e26493){if((e26493 instanceof Object)){
var ex__24993__auto__ = e26493;
var statearr_26494_26508 = state_26475;
(statearr_26494_26508[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26509 = state_26475;
state_26475 = G__26509;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$state_machine__24990__auto__ = function(state_26475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24990__auto____1.call(this,state_26475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24990__auto____0;
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24990__auto____1;
return cljs$core$async$state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___26497,out))
})();
var state__25086__auto__ = (function (){var statearr_26495 = f__25085__auto__.call(null);
(statearr_26495[(6)] = c__25084__auto___26497);

return statearr_26495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___26497,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26511 = arguments.length;
switch (G__26511) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25084__auto___26556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___26556,out){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___26556,out){
return (function (state_26535){
var state_val_26536 = (state_26535[(1)]);
if((state_val_26536 === (7))){
var inst_26517 = (state_26535[(7)]);
var inst_26517__$1 = (state_26535[(2)]);
var inst_26518 = (inst_26517__$1 == null);
var inst_26519 = cljs.core.not.call(null,inst_26518);
var state_26535__$1 = (function (){var statearr_26537 = state_26535;
(statearr_26537[(7)] = inst_26517__$1);

return statearr_26537;
})();
if(inst_26519){
var statearr_26538_26557 = state_26535__$1;
(statearr_26538_26557[(1)] = (8));

} else {
var statearr_26539_26558 = state_26535__$1;
(statearr_26539_26558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26536 === (1))){
var inst_26512 = (0);
var state_26535__$1 = (function (){var statearr_26540 = state_26535;
(statearr_26540[(8)] = inst_26512);

return statearr_26540;
})();
var statearr_26541_26559 = state_26535__$1;
(statearr_26541_26559[(2)] = null);

(statearr_26541_26559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26536 === (4))){
var state_26535__$1 = state_26535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26535__$1,(7),ch);
} else {
if((state_val_26536 === (6))){
var inst_26530 = (state_26535[(2)]);
var state_26535__$1 = state_26535;
var statearr_26542_26560 = state_26535__$1;
(statearr_26542_26560[(2)] = inst_26530);

(statearr_26542_26560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26536 === (3))){
var inst_26532 = (state_26535[(2)]);
var inst_26533 = cljs.core.async.close_BANG_.call(null,out);
var state_26535__$1 = (function (){var statearr_26543 = state_26535;
(statearr_26543[(9)] = inst_26532);

return statearr_26543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26535__$1,inst_26533);
} else {
if((state_val_26536 === (2))){
var inst_26512 = (state_26535[(8)]);
var inst_26514 = (inst_26512 < n);
var state_26535__$1 = state_26535;
if(cljs.core.truth_(inst_26514)){
var statearr_26544_26561 = state_26535__$1;
(statearr_26544_26561[(1)] = (4));

} else {
var statearr_26545_26562 = state_26535__$1;
(statearr_26545_26562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26536 === (11))){
var inst_26512 = (state_26535[(8)]);
var inst_26522 = (state_26535[(2)]);
var inst_26523 = (inst_26512 + (1));
var inst_26512__$1 = inst_26523;
var state_26535__$1 = (function (){var statearr_26546 = state_26535;
(statearr_26546[(8)] = inst_26512__$1);

(statearr_26546[(10)] = inst_26522);

return statearr_26546;
})();
var statearr_26547_26563 = state_26535__$1;
(statearr_26547_26563[(2)] = null);

(statearr_26547_26563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26536 === (9))){
var state_26535__$1 = state_26535;
var statearr_26548_26564 = state_26535__$1;
(statearr_26548_26564[(2)] = null);

(statearr_26548_26564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26536 === (5))){
var state_26535__$1 = state_26535;
var statearr_26549_26565 = state_26535__$1;
(statearr_26549_26565[(2)] = null);

(statearr_26549_26565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26536 === (10))){
var inst_26527 = (state_26535[(2)]);
var state_26535__$1 = state_26535;
var statearr_26550_26566 = state_26535__$1;
(statearr_26550_26566[(2)] = inst_26527);

(statearr_26550_26566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26536 === (8))){
var inst_26517 = (state_26535[(7)]);
var state_26535__$1 = state_26535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26535__$1,(11),out,inst_26517);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25084__auto___26556,out))
;
return ((function (switch__24989__auto__,c__25084__auto___26556,out){
return (function() {
var cljs$core$async$state_machine__24990__auto__ = null;
var cljs$core$async$state_machine__24990__auto____0 = (function (){
var statearr_26551 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26551[(0)] = cljs$core$async$state_machine__24990__auto__);

(statearr_26551[(1)] = (1));

return statearr_26551;
});
var cljs$core$async$state_machine__24990__auto____1 = (function (state_26535){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_26535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e26552){if((e26552 instanceof Object)){
var ex__24993__auto__ = e26552;
var statearr_26553_26567 = state_26535;
(statearr_26553_26567[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26568 = state_26535;
state_26535 = G__26568;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$state_machine__24990__auto__ = function(state_26535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24990__auto____1.call(this,state_26535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24990__auto____0;
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24990__auto____1;
return cljs$core$async$state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___26556,out))
})();
var state__25086__auto__ = (function (){var statearr_26554 = f__25085__auto__.call(null);
(statearr_26554[(6)] = c__25084__auto___26556);

return statearr_26554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___26556,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26570 = (function (f,ch,meta26571){
this.f = f;
this.ch = ch;
this.meta26571 = meta26571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26572,meta26571__$1){
var self__ = this;
var _26572__$1 = this;
return (new cljs.core.async.t_cljs$core$async26570(self__.f,self__.ch,meta26571__$1));
});

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26572){
var self__ = this;
var _26572__$1 = this;
return self__.meta26571;
});

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26573 = (function (f,ch,meta26571,_,fn1,meta26574){
this.f = f;
this.ch = ch;
this.meta26571 = meta26571;
this._ = _;
this.fn1 = fn1;
this.meta26574 = meta26574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26575,meta26574__$1){
var self__ = this;
var _26575__$1 = this;
return (new cljs.core.async.t_cljs$core$async26573(self__.f,self__.ch,self__.meta26571,self__._,self__.fn1,meta26574__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26575){
var self__ = this;
var _26575__$1 = this;
return self__.meta26574;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26573.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26573.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26569_SHARP_){
return f1.call(null,(((p1__26569_SHARP_ == null))?null:self__.f.call(null,p1__26569_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26573.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26571","meta26571",-197481522,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26570","cljs.core.async/t_cljs$core$async26570",229233293,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26574","meta26574",-761346690,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26573.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26573";

cljs.core.async.t_cljs$core$async26573.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26573");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26573.
 */
cljs.core.async.__GT_t_cljs$core$async26573 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26573(f__$1,ch__$1,meta26571__$1,___$2,fn1__$1,meta26574){
return (new cljs.core.async.t_cljs$core$async26573(f__$1,ch__$1,meta26571__$1,___$2,fn1__$1,meta26574));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26573(self__.f,self__.ch,self__.meta26571,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26571","meta26571",-197481522,null)], null);
});

cljs.core.async.t_cljs$core$async26570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26570";

cljs.core.async.t_cljs$core$async26570.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26570");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26570.
 */
cljs.core.async.__GT_t_cljs$core$async26570 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26570(f__$1,ch__$1,meta26571){
return (new cljs.core.async.t_cljs$core$async26570(f__$1,ch__$1,meta26571));
});

}

return (new cljs.core.async.t_cljs$core$async26570(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26576 = (function (f,ch,meta26577){
this.f = f;
this.ch = ch;
this.meta26577 = meta26577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26578,meta26577__$1){
var self__ = this;
var _26578__$1 = this;
return (new cljs.core.async.t_cljs$core$async26576(self__.f,self__.ch,meta26577__$1));
});

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26578){
var self__ = this;
var _26578__$1 = this;
return self__.meta26577;
});

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26577","meta26577",1575442916,null)], null);
});

cljs.core.async.t_cljs$core$async26576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26576";

cljs.core.async.t_cljs$core$async26576.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26576");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26576.
 */
cljs.core.async.__GT_t_cljs$core$async26576 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26576(f__$1,ch__$1,meta26577){
return (new cljs.core.async.t_cljs$core$async26576(f__$1,ch__$1,meta26577));
});

}

return (new cljs.core.async.t_cljs$core$async26576(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26579 = (function (p,ch,meta26580){
this.p = p;
this.ch = ch;
this.meta26580 = meta26580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26581,meta26580__$1){
var self__ = this;
var _26581__$1 = this;
return (new cljs.core.async.t_cljs$core$async26579(self__.p,self__.ch,meta26580__$1));
});

cljs.core.async.t_cljs$core$async26579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26581){
var self__ = this;
var _26581__$1 = this;
return self__.meta26580;
});

cljs.core.async.t_cljs$core$async26579.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26579.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26579.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26579.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26579.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26579.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26579.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26580","meta26580",-2021145787,null)], null);
});

cljs.core.async.t_cljs$core$async26579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26579";

cljs.core.async.t_cljs$core$async26579.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26579");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26579.
 */
cljs.core.async.__GT_t_cljs$core$async26579 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26579(p__$1,ch__$1,meta26580){
return (new cljs.core.async.t_cljs$core$async26579(p__$1,ch__$1,meta26580));
});

}

return (new cljs.core.async.t_cljs$core$async26579(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26583 = arguments.length;
switch (G__26583) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25084__auto___26623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___26623,out){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___26623,out){
return (function (state_26604){
var state_val_26605 = (state_26604[(1)]);
if((state_val_26605 === (7))){
var inst_26600 = (state_26604[(2)]);
var state_26604__$1 = state_26604;
var statearr_26606_26624 = state_26604__$1;
(statearr_26606_26624[(2)] = inst_26600);

(statearr_26606_26624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (1))){
var state_26604__$1 = state_26604;
var statearr_26607_26625 = state_26604__$1;
(statearr_26607_26625[(2)] = null);

(statearr_26607_26625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (4))){
var inst_26586 = (state_26604[(7)]);
var inst_26586__$1 = (state_26604[(2)]);
var inst_26587 = (inst_26586__$1 == null);
var state_26604__$1 = (function (){var statearr_26608 = state_26604;
(statearr_26608[(7)] = inst_26586__$1);

return statearr_26608;
})();
if(cljs.core.truth_(inst_26587)){
var statearr_26609_26626 = state_26604__$1;
(statearr_26609_26626[(1)] = (5));

} else {
var statearr_26610_26627 = state_26604__$1;
(statearr_26610_26627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (6))){
var inst_26586 = (state_26604[(7)]);
var inst_26591 = p.call(null,inst_26586);
var state_26604__$1 = state_26604;
if(cljs.core.truth_(inst_26591)){
var statearr_26611_26628 = state_26604__$1;
(statearr_26611_26628[(1)] = (8));

} else {
var statearr_26612_26629 = state_26604__$1;
(statearr_26612_26629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (3))){
var inst_26602 = (state_26604[(2)]);
var state_26604__$1 = state_26604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26604__$1,inst_26602);
} else {
if((state_val_26605 === (2))){
var state_26604__$1 = state_26604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26604__$1,(4),ch);
} else {
if((state_val_26605 === (11))){
var inst_26594 = (state_26604[(2)]);
var state_26604__$1 = state_26604;
var statearr_26613_26630 = state_26604__$1;
(statearr_26613_26630[(2)] = inst_26594);

(statearr_26613_26630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (9))){
var state_26604__$1 = state_26604;
var statearr_26614_26631 = state_26604__$1;
(statearr_26614_26631[(2)] = null);

(statearr_26614_26631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (5))){
var inst_26589 = cljs.core.async.close_BANG_.call(null,out);
var state_26604__$1 = state_26604;
var statearr_26615_26632 = state_26604__$1;
(statearr_26615_26632[(2)] = inst_26589);

(statearr_26615_26632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (10))){
var inst_26597 = (state_26604[(2)]);
var state_26604__$1 = (function (){var statearr_26616 = state_26604;
(statearr_26616[(8)] = inst_26597);

return statearr_26616;
})();
var statearr_26617_26633 = state_26604__$1;
(statearr_26617_26633[(2)] = null);

(statearr_26617_26633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (8))){
var inst_26586 = (state_26604[(7)]);
var state_26604__$1 = state_26604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26604__$1,(11),out,inst_26586);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25084__auto___26623,out))
;
return ((function (switch__24989__auto__,c__25084__auto___26623,out){
return (function() {
var cljs$core$async$state_machine__24990__auto__ = null;
var cljs$core$async$state_machine__24990__auto____0 = (function (){
var statearr_26618 = [null,null,null,null,null,null,null,null,null];
(statearr_26618[(0)] = cljs$core$async$state_machine__24990__auto__);

(statearr_26618[(1)] = (1));

return statearr_26618;
});
var cljs$core$async$state_machine__24990__auto____1 = (function (state_26604){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_26604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e26619){if((e26619 instanceof Object)){
var ex__24993__auto__ = e26619;
var statearr_26620_26634 = state_26604;
(statearr_26620_26634[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26635 = state_26604;
state_26604 = G__26635;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$state_machine__24990__auto__ = function(state_26604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24990__auto____1.call(this,state_26604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24990__auto____0;
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24990__auto____1;
return cljs$core$async$state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___26623,out))
})();
var state__25086__auto__ = (function (){var statearr_26621 = f__25085__auto__.call(null);
(statearr_26621[(6)] = c__25084__auto___26623);

return statearr_26621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___26623,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26637 = arguments.length;
switch (G__26637) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto__){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto__){
return (function (state_26700){
var state_val_26701 = (state_26700[(1)]);
if((state_val_26701 === (7))){
var inst_26696 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
var statearr_26702_26740 = state_26700__$1;
(statearr_26702_26740[(2)] = inst_26696);

(statearr_26702_26740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (20))){
var inst_26666 = (state_26700[(7)]);
var inst_26677 = (state_26700[(2)]);
var inst_26678 = cljs.core.next.call(null,inst_26666);
var inst_26652 = inst_26678;
var inst_26653 = null;
var inst_26654 = (0);
var inst_26655 = (0);
var state_26700__$1 = (function (){var statearr_26703 = state_26700;
(statearr_26703[(8)] = inst_26652);

(statearr_26703[(9)] = inst_26654);

(statearr_26703[(10)] = inst_26653);

(statearr_26703[(11)] = inst_26677);

(statearr_26703[(12)] = inst_26655);

return statearr_26703;
})();
var statearr_26704_26741 = state_26700__$1;
(statearr_26704_26741[(2)] = null);

(statearr_26704_26741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (1))){
var state_26700__$1 = state_26700;
var statearr_26705_26742 = state_26700__$1;
(statearr_26705_26742[(2)] = null);

(statearr_26705_26742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (4))){
var inst_26641 = (state_26700[(13)]);
var inst_26641__$1 = (state_26700[(2)]);
var inst_26642 = (inst_26641__$1 == null);
var state_26700__$1 = (function (){var statearr_26706 = state_26700;
(statearr_26706[(13)] = inst_26641__$1);

return statearr_26706;
})();
if(cljs.core.truth_(inst_26642)){
var statearr_26707_26743 = state_26700__$1;
(statearr_26707_26743[(1)] = (5));

} else {
var statearr_26708_26744 = state_26700__$1;
(statearr_26708_26744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (15))){
var state_26700__$1 = state_26700;
var statearr_26712_26745 = state_26700__$1;
(statearr_26712_26745[(2)] = null);

(statearr_26712_26745[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (21))){
var state_26700__$1 = state_26700;
var statearr_26713_26746 = state_26700__$1;
(statearr_26713_26746[(2)] = null);

(statearr_26713_26746[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (13))){
var inst_26652 = (state_26700[(8)]);
var inst_26654 = (state_26700[(9)]);
var inst_26653 = (state_26700[(10)]);
var inst_26655 = (state_26700[(12)]);
var inst_26662 = (state_26700[(2)]);
var inst_26663 = (inst_26655 + (1));
var tmp26709 = inst_26652;
var tmp26710 = inst_26654;
var tmp26711 = inst_26653;
var inst_26652__$1 = tmp26709;
var inst_26653__$1 = tmp26711;
var inst_26654__$1 = tmp26710;
var inst_26655__$1 = inst_26663;
var state_26700__$1 = (function (){var statearr_26714 = state_26700;
(statearr_26714[(8)] = inst_26652__$1);

(statearr_26714[(9)] = inst_26654__$1);

(statearr_26714[(10)] = inst_26653__$1);

(statearr_26714[(12)] = inst_26655__$1);

(statearr_26714[(14)] = inst_26662);

return statearr_26714;
})();
var statearr_26715_26747 = state_26700__$1;
(statearr_26715_26747[(2)] = null);

(statearr_26715_26747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (22))){
var state_26700__$1 = state_26700;
var statearr_26716_26748 = state_26700__$1;
(statearr_26716_26748[(2)] = null);

(statearr_26716_26748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (6))){
var inst_26641 = (state_26700[(13)]);
var inst_26650 = f.call(null,inst_26641);
var inst_26651 = cljs.core.seq.call(null,inst_26650);
var inst_26652 = inst_26651;
var inst_26653 = null;
var inst_26654 = (0);
var inst_26655 = (0);
var state_26700__$1 = (function (){var statearr_26717 = state_26700;
(statearr_26717[(8)] = inst_26652);

(statearr_26717[(9)] = inst_26654);

(statearr_26717[(10)] = inst_26653);

(statearr_26717[(12)] = inst_26655);

return statearr_26717;
})();
var statearr_26718_26749 = state_26700__$1;
(statearr_26718_26749[(2)] = null);

(statearr_26718_26749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (17))){
var inst_26666 = (state_26700[(7)]);
var inst_26670 = cljs.core.chunk_first.call(null,inst_26666);
var inst_26671 = cljs.core.chunk_rest.call(null,inst_26666);
var inst_26672 = cljs.core.count.call(null,inst_26670);
var inst_26652 = inst_26671;
var inst_26653 = inst_26670;
var inst_26654 = inst_26672;
var inst_26655 = (0);
var state_26700__$1 = (function (){var statearr_26719 = state_26700;
(statearr_26719[(8)] = inst_26652);

(statearr_26719[(9)] = inst_26654);

(statearr_26719[(10)] = inst_26653);

(statearr_26719[(12)] = inst_26655);

return statearr_26719;
})();
var statearr_26720_26750 = state_26700__$1;
(statearr_26720_26750[(2)] = null);

(statearr_26720_26750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (3))){
var inst_26698 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26700__$1,inst_26698);
} else {
if((state_val_26701 === (12))){
var inst_26686 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
var statearr_26721_26751 = state_26700__$1;
(statearr_26721_26751[(2)] = inst_26686);

(statearr_26721_26751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (2))){
var state_26700__$1 = state_26700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26700__$1,(4),in$);
} else {
if((state_val_26701 === (23))){
var inst_26694 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
var statearr_26722_26752 = state_26700__$1;
(statearr_26722_26752[(2)] = inst_26694);

(statearr_26722_26752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (19))){
var inst_26681 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
var statearr_26723_26753 = state_26700__$1;
(statearr_26723_26753[(2)] = inst_26681);

(statearr_26723_26753[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (11))){
var inst_26652 = (state_26700[(8)]);
var inst_26666 = (state_26700[(7)]);
var inst_26666__$1 = cljs.core.seq.call(null,inst_26652);
var state_26700__$1 = (function (){var statearr_26724 = state_26700;
(statearr_26724[(7)] = inst_26666__$1);

return statearr_26724;
})();
if(inst_26666__$1){
var statearr_26725_26754 = state_26700__$1;
(statearr_26725_26754[(1)] = (14));

} else {
var statearr_26726_26755 = state_26700__$1;
(statearr_26726_26755[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (9))){
var inst_26688 = (state_26700[(2)]);
var inst_26689 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26700__$1 = (function (){var statearr_26727 = state_26700;
(statearr_26727[(15)] = inst_26688);

return statearr_26727;
})();
if(cljs.core.truth_(inst_26689)){
var statearr_26728_26756 = state_26700__$1;
(statearr_26728_26756[(1)] = (21));

} else {
var statearr_26729_26757 = state_26700__$1;
(statearr_26729_26757[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (5))){
var inst_26644 = cljs.core.async.close_BANG_.call(null,out);
var state_26700__$1 = state_26700;
var statearr_26730_26758 = state_26700__$1;
(statearr_26730_26758[(2)] = inst_26644);

(statearr_26730_26758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (14))){
var inst_26666 = (state_26700[(7)]);
var inst_26668 = cljs.core.chunked_seq_QMARK_.call(null,inst_26666);
var state_26700__$1 = state_26700;
if(inst_26668){
var statearr_26731_26759 = state_26700__$1;
(statearr_26731_26759[(1)] = (17));

} else {
var statearr_26732_26760 = state_26700__$1;
(statearr_26732_26760[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (16))){
var inst_26684 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
var statearr_26733_26761 = state_26700__$1;
(statearr_26733_26761[(2)] = inst_26684);

(statearr_26733_26761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (10))){
var inst_26653 = (state_26700[(10)]);
var inst_26655 = (state_26700[(12)]);
var inst_26660 = cljs.core._nth.call(null,inst_26653,inst_26655);
var state_26700__$1 = state_26700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26700__$1,(13),out,inst_26660);
} else {
if((state_val_26701 === (18))){
var inst_26666 = (state_26700[(7)]);
var inst_26675 = cljs.core.first.call(null,inst_26666);
var state_26700__$1 = state_26700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26700__$1,(20),out,inst_26675);
} else {
if((state_val_26701 === (8))){
var inst_26654 = (state_26700[(9)]);
var inst_26655 = (state_26700[(12)]);
var inst_26657 = (inst_26655 < inst_26654);
var inst_26658 = inst_26657;
var state_26700__$1 = state_26700;
if(cljs.core.truth_(inst_26658)){
var statearr_26734_26762 = state_26700__$1;
(statearr_26734_26762[(1)] = (10));

} else {
var statearr_26735_26763 = state_26700__$1;
(statearr_26735_26763[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25084__auto__))
;
return ((function (switch__24989__auto__,c__25084__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24990__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24990__auto____0 = (function (){
var statearr_26736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26736[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24990__auto__);

(statearr_26736[(1)] = (1));

return statearr_26736;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24990__auto____1 = (function (state_26700){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_26700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e26737){if((e26737 instanceof Object)){
var ex__24993__auto__ = e26737;
var statearr_26738_26764 = state_26700;
(statearr_26738_26764[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26765 = state_26700;
state_26700 = G__26765;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24990__auto__ = function(state_26700){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24990__auto____1.call(this,state_26700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24990__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24990__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto__))
})();
var state__25086__auto__ = (function (){var statearr_26739 = f__25085__auto__.call(null);
(statearr_26739[(6)] = c__25084__auto__);

return statearr_26739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto__))
);

return c__25084__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26767 = arguments.length;
switch (G__26767) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26770 = arguments.length;
switch (G__26770) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26773 = arguments.length;
switch (G__26773) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25084__auto___26820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___26820,out){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___26820,out){
return (function (state_26797){
var state_val_26798 = (state_26797[(1)]);
if((state_val_26798 === (7))){
var inst_26792 = (state_26797[(2)]);
var state_26797__$1 = state_26797;
var statearr_26799_26821 = state_26797__$1;
(statearr_26799_26821[(2)] = inst_26792);

(statearr_26799_26821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (1))){
var inst_26774 = null;
var state_26797__$1 = (function (){var statearr_26800 = state_26797;
(statearr_26800[(7)] = inst_26774);

return statearr_26800;
})();
var statearr_26801_26822 = state_26797__$1;
(statearr_26801_26822[(2)] = null);

(statearr_26801_26822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (4))){
var inst_26777 = (state_26797[(8)]);
var inst_26777__$1 = (state_26797[(2)]);
var inst_26778 = (inst_26777__$1 == null);
var inst_26779 = cljs.core.not.call(null,inst_26778);
var state_26797__$1 = (function (){var statearr_26802 = state_26797;
(statearr_26802[(8)] = inst_26777__$1);

return statearr_26802;
})();
if(inst_26779){
var statearr_26803_26823 = state_26797__$1;
(statearr_26803_26823[(1)] = (5));

} else {
var statearr_26804_26824 = state_26797__$1;
(statearr_26804_26824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (6))){
var state_26797__$1 = state_26797;
var statearr_26805_26825 = state_26797__$1;
(statearr_26805_26825[(2)] = null);

(statearr_26805_26825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (3))){
var inst_26794 = (state_26797[(2)]);
var inst_26795 = cljs.core.async.close_BANG_.call(null,out);
var state_26797__$1 = (function (){var statearr_26806 = state_26797;
(statearr_26806[(9)] = inst_26794);

return statearr_26806;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26797__$1,inst_26795);
} else {
if((state_val_26798 === (2))){
var state_26797__$1 = state_26797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26797__$1,(4),ch);
} else {
if((state_val_26798 === (11))){
var inst_26777 = (state_26797[(8)]);
var inst_26786 = (state_26797[(2)]);
var inst_26774 = inst_26777;
var state_26797__$1 = (function (){var statearr_26807 = state_26797;
(statearr_26807[(10)] = inst_26786);

(statearr_26807[(7)] = inst_26774);

return statearr_26807;
})();
var statearr_26808_26826 = state_26797__$1;
(statearr_26808_26826[(2)] = null);

(statearr_26808_26826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (9))){
var inst_26777 = (state_26797[(8)]);
var state_26797__$1 = state_26797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26797__$1,(11),out,inst_26777);
} else {
if((state_val_26798 === (5))){
var inst_26774 = (state_26797[(7)]);
var inst_26777 = (state_26797[(8)]);
var inst_26781 = cljs.core._EQ_.call(null,inst_26777,inst_26774);
var state_26797__$1 = state_26797;
if(inst_26781){
var statearr_26810_26827 = state_26797__$1;
(statearr_26810_26827[(1)] = (8));

} else {
var statearr_26811_26828 = state_26797__$1;
(statearr_26811_26828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (10))){
var inst_26789 = (state_26797[(2)]);
var state_26797__$1 = state_26797;
var statearr_26812_26829 = state_26797__$1;
(statearr_26812_26829[(2)] = inst_26789);

(statearr_26812_26829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (8))){
var inst_26774 = (state_26797[(7)]);
var tmp26809 = inst_26774;
var inst_26774__$1 = tmp26809;
var state_26797__$1 = (function (){var statearr_26813 = state_26797;
(statearr_26813[(7)] = inst_26774__$1);

return statearr_26813;
})();
var statearr_26814_26830 = state_26797__$1;
(statearr_26814_26830[(2)] = null);

(statearr_26814_26830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25084__auto___26820,out))
;
return ((function (switch__24989__auto__,c__25084__auto___26820,out){
return (function() {
var cljs$core$async$state_machine__24990__auto__ = null;
var cljs$core$async$state_machine__24990__auto____0 = (function (){
var statearr_26815 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26815[(0)] = cljs$core$async$state_machine__24990__auto__);

(statearr_26815[(1)] = (1));

return statearr_26815;
});
var cljs$core$async$state_machine__24990__auto____1 = (function (state_26797){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_26797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e26816){if((e26816 instanceof Object)){
var ex__24993__auto__ = e26816;
var statearr_26817_26831 = state_26797;
(statearr_26817_26831[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26832 = state_26797;
state_26797 = G__26832;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$state_machine__24990__auto__ = function(state_26797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24990__auto____1.call(this,state_26797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24990__auto____0;
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24990__auto____1;
return cljs$core$async$state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___26820,out))
})();
var state__25086__auto__ = (function (){var statearr_26818 = f__25085__auto__.call(null);
(statearr_26818[(6)] = c__25084__auto___26820);

return statearr_26818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___26820,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26834 = arguments.length;
switch (G__26834) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25084__auto___26900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___26900,out){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___26900,out){
return (function (state_26872){
var state_val_26873 = (state_26872[(1)]);
if((state_val_26873 === (7))){
var inst_26868 = (state_26872[(2)]);
var state_26872__$1 = state_26872;
var statearr_26874_26901 = state_26872__$1;
(statearr_26874_26901[(2)] = inst_26868);

(statearr_26874_26901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (1))){
var inst_26835 = (new Array(n));
var inst_26836 = inst_26835;
var inst_26837 = (0);
var state_26872__$1 = (function (){var statearr_26875 = state_26872;
(statearr_26875[(7)] = inst_26836);

(statearr_26875[(8)] = inst_26837);

return statearr_26875;
})();
var statearr_26876_26902 = state_26872__$1;
(statearr_26876_26902[(2)] = null);

(statearr_26876_26902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (4))){
var inst_26840 = (state_26872[(9)]);
var inst_26840__$1 = (state_26872[(2)]);
var inst_26841 = (inst_26840__$1 == null);
var inst_26842 = cljs.core.not.call(null,inst_26841);
var state_26872__$1 = (function (){var statearr_26877 = state_26872;
(statearr_26877[(9)] = inst_26840__$1);

return statearr_26877;
})();
if(inst_26842){
var statearr_26878_26903 = state_26872__$1;
(statearr_26878_26903[(1)] = (5));

} else {
var statearr_26879_26904 = state_26872__$1;
(statearr_26879_26904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (15))){
var inst_26862 = (state_26872[(2)]);
var state_26872__$1 = state_26872;
var statearr_26880_26905 = state_26872__$1;
(statearr_26880_26905[(2)] = inst_26862);

(statearr_26880_26905[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (13))){
var state_26872__$1 = state_26872;
var statearr_26881_26906 = state_26872__$1;
(statearr_26881_26906[(2)] = null);

(statearr_26881_26906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (6))){
var inst_26837 = (state_26872[(8)]);
var inst_26858 = (inst_26837 > (0));
var state_26872__$1 = state_26872;
if(cljs.core.truth_(inst_26858)){
var statearr_26882_26907 = state_26872__$1;
(statearr_26882_26907[(1)] = (12));

} else {
var statearr_26883_26908 = state_26872__$1;
(statearr_26883_26908[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (3))){
var inst_26870 = (state_26872[(2)]);
var state_26872__$1 = state_26872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26872__$1,inst_26870);
} else {
if((state_val_26873 === (12))){
var inst_26836 = (state_26872[(7)]);
var inst_26860 = cljs.core.vec.call(null,inst_26836);
var state_26872__$1 = state_26872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26872__$1,(15),out,inst_26860);
} else {
if((state_val_26873 === (2))){
var state_26872__$1 = state_26872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26872__$1,(4),ch);
} else {
if((state_val_26873 === (11))){
var inst_26852 = (state_26872[(2)]);
var inst_26853 = (new Array(n));
var inst_26836 = inst_26853;
var inst_26837 = (0);
var state_26872__$1 = (function (){var statearr_26884 = state_26872;
(statearr_26884[(7)] = inst_26836);

(statearr_26884[(10)] = inst_26852);

(statearr_26884[(8)] = inst_26837);

return statearr_26884;
})();
var statearr_26885_26909 = state_26872__$1;
(statearr_26885_26909[(2)] = null);

(statearr_26885_26909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (9))){
var inst_26836 = (state_26872[(7)]);
var inst_26850 = cljs.core.vec.call(null,inst_26836);
var state_26872__$1 = state_26872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26872__$1,(11),out,inst_26850);
} else {
if((state_val_26873 === (5))){
var inst_26836 = (state_26872[(7)]);
var inst_26837 = (state_26872[(8)]);
var inst_26840 = (state_26872[(9)]);
var inst_26845 = (state_26872[(11)]);
var inst_26844 = (inst_26836[inst_26837] = inst_26840);
var inst_26845__$1 = (inst_26837 + (1));
var inst_26846 = (inst_26845__$1 < n);
var state_26872__$1 = (function (){var statearr_26886 = state_26872;
(statearr_26886[(12)] = inst_26844);

(statearr_26886[(11)] = inst_26845__$1);

return statearr_26886;
})();
if(cljs.core.truth_(inst_26846)){
var statearr_26887_26910 = state_26872__$1;
(statearr_26887_26910[(1)] = (8));

} else {
var statearr_26888_26911 = state_26872__$1;
(statearr_26888_26911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (14))){
var inst_26865 = (state_26872[(2)]);
var inst_26866 = cljs.core.async.close_BANG_.call(null,out);
var state_26872__$1 = (function (){var statearr_26890 = state_26872;
(statearr_26890[(13)] = inst_26865);

return statearr_26890;
})();
var statearr_26891_26912 = state_26872__$1;
(statearr_26891_26912[(2)] = inst_26866);

(statearr_26891_26912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (10))){
var inst_26856 = (state_26872[(2)]);
var state_26872__$1 = state_26872;
var statearr_26892_26913 = state_26872__$1;
(statearr_26892_26913[(2)] = inst_26856);

(statearr_26892_26913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (8))){
var inst_26836 = (state_26872[(7)]);
var inst_26845 = (state_26872[(11)]);
var tmp26889 = inst_26836;
var inst_26836__$1 = tmp26889;
var inst_26837 = inst_26845;
var state_26872__$1 = (function (){var statearr_26893 = state_26872;
(statearr_26893[(7)] = inst_26836__$1);

(statearr_26893[(8)] = inst_26837);

return statearr_26893;
})();
var statearr_26894_26914 = state_26872__$1;
(statearr_26894_26914[(2)] = null);

(statearr_26894_26914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25084__auto___26900,out))
;
return ((function (switch__24989__auto__,c__25084__auto___26900,out){
return (function() {
var cljs$core$async$state_machine__24990__auto__ = null;
var cljs$core$async$state_machine__24990__auto____0 = (function (){
var statearr_26895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26895[(0)] = cljs$core$async$state_machine__24990__auto__);

(statearr_26895[(1)] = (1));

return statearr_26895;
});
var cljs$core$async$state_machine__24990__auto____1 = (function (state_26872){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_26872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e26896){if((e26896 instanceof Object)){
var ex__24993__auto__ = e26896;
var statearr_26897_26915 = state_26872;
(statearr_26897_26915[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26916 = state_26872;
state_26872 = G__26916;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$state_machine__24990__auto__ = function(state_26872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24990__auto____1.call(this,state_26872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24990__auto____0;
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24990__auto____1;
return cljs$core$async$state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___26900,out))
})();
var state__25086__auto__ = (function (){var statearr_26898 = f__25085__auto__.call(null);
(statearr_26898[(6)] = c__25084__auto___26900);

return statearr_26898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___26900,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26918 = arguments.length;
switch (G__26918) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25084__auto___26988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25084__auto___26988,out){
return (function (){
var f__25085__auto__ = (function (){var switch__24989__auto__ = ((function (c__25084__auto___26988,out){
return (function (state_26960){
var state_val_26961 = (state_26960[(1)]);
if((state_val_26961 === (7))){
var inst_26956 = (state_26960[(2)]);
var state_26960__$1 = state_26960;
var statearr_26962_26989 = state_26960__$1;
(statearr_26962_26989[(2)] = inst_26956);

(statearr_26962_26989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26961 === (1))){
var inst_26919 = [];
var inst_26920 = inst_26919;
var inst_26921 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26960__$1 = (function (){var statearr_26963 = state_26960;
(statearr_26963[(7)] = inst_26920);

(statearr_26963[(8)] = inst_26921);

return statearr_26963;
})();
var statearr_26964_26990 = state_26960__$1;
(statearr_26964_26990[(2)] = null);

(statearr_26964_26990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26961 === (4))){
var inst_26924 = (state_26960[(9)]);
var inst_26924__$1 = (state_26960[(2)]);
var inst_26925 = (inst_26924__$1 == null);
var inst_26926 = cljs.core.not.call(null,inst_26925);
var state_26960__$1 = (function (){var statearr_26965 = state_26960;
(statearr_26965[(9)] = inst_26924__$1);

return statearr_26965;
})();
if(inst_26926){
var statearr_26966_26991 = state_26960__$1;
(statearr_26966_26991[(1)] = (5));

} else {
var statearr_26967_26992 = state_26960__$1;
(statearr_26967_26992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26961 === (15))){
var inst_26950 = (state_26960[(2)]);
var state_26960__$1 = state_26960;
var statearr_26968_26993 = state_26960__$1;
(statearr_26968_26993[(2)] = inst_26950);

(statearr_26968_26993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26961 === (13))){
var state_26960__$1 = state_26960;
var statearr_26969_26994 = state_26960__$1;
(statearr_26969_26994[(2)] = null);

(statearr_26969_26994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26961 === (6))){
var inst_26920 = (state_26960[(7)]);
var inst_26945 = inst_26920.length;
var inst_26946 = (inst_26945 > (0));
var state_26960__$1 = state_26960;
if(cljs.core.truth_(inst_26946)){
var statearr_26970_26995 = state_26960__$1;
(statearr_26970_26995[(1)] = (12));

} else {
var statearr_26971_26996 = state_26960__$1;
(statearr_26971_26996[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26961 === (3))){
var inst_26958 = (state_26960[(2)]);
var state_26960__$1 = state_26960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26960__$1,inst_26958);
} else {
if((state_val_26961 === (12))){
var inst_26920 = (state_26960[(7)]);
var inst_26948 = cljs.core.vec.call(null,inst_26920);
var state_26960__$1 = state_26960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26960__$1,(15),out,inst_26948);
} else {
if((state_val_26961 === (2))){
var state_26960__$1 = state_26960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26960__$1,(4),ch);
} else {
if((state_val_26961 === (11))){
var inst_26928 = (state_26960[(10)]);
var inst_26924 = (state_26960[(9)]);
var inst_26938 = (state_26960[(2)]);
var inst_26939 = [];
var inst_26940 = inst_26939.push(inst_26924);
var inst_26920 = inst_26939;
var inst_26921 = inst_26928;
var state_26960__$1 = (function (){var statearr_26972 = state_26960;
(statearr_26972[(11)] = inst_26940);

(statearr_26972[(7)] = inst_26920);

(statearr_26972[(12)] = inst_26938);

(statearr_26972[(8)] = inst_26921);

return statearr_26972;
})();
var statearr_26973_26997 = state_26960__$1;
(statearr_26973_26997[(2)] = null);

(statearr_26973_26997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26961 === (9))){
var inst_26920 = (state_26960[(7)]);
var inst_26936 = cljs.core.vec.call(null,inst_26920);
var state_26960__$1 = state_26960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26960__$1,(11),out,inst_26936);
} else {
if((state_val_26961 === (5))){
var inst_26928 = (state_26960[(10)]);
var inst_26924 = (state_26960[(9)]);
var inst_26921 = (state_26960[(8)]);
var inst_26928__$1 = f.call(null,inst_26924);
var inst_26929 = cljs.core._EQ_.call(null,inst_26928__$1,inst_26921);
var inst_26930 = cljs.core.keyword_identical_QMARK_.call(null,inst_26921,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26931 = ((inst_26929) || (inst_26930));
var state_26960__$1 = (function (){var statearr_26974 = state_26960;
(statearr_26974[(10)] = inst_26928__$1);

return statearr_26974;
})();
if(cljs.core.truth_(inst_26931)){
var statearr_26975_26998 = state_26960__$1;
(statearr_26975_26998[(1)] = (8));

} else {
var statearr_26976_26999 = state_26960__$1;
(statearr_26976_26999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26961 === (14))){
var inst_26953 = (state_26960[(2)]);
var inst_26954 = cljs.core.async.close_BANG_.call(null,out);
var state_26960__$1 = (function (){var statearr_26978 = state_26960;
(statearr_26978[(13)] = inst_26953);

return statearr_26978;
})();
var statearr_26979_27000 = state_26960__$1;
(statearr_26979_27000[(2)] = inst_26954);

(statearr_26979_27000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26961 === (10))){
var inst_26943 = (state_26960[(2)]);
var state_26960__$1 = state_26960;
var statearr_26980_27001 = state_26960__$1;
(statearr_26980_27001[(2)] = inst_26943);

(statearr_26980_27001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26961 === (8))){
var inst_26920 = (state_26960[(7)]);
var inst_26928 = (state_26960[(10)]);
var inst_26924 = (state_26960[(9)]);
var inst_26933 = inst_26920.push(inst_26924);
var tmp26977 = inst_26920;
var inst_26920__$1 = tmp26977;
var inst_26921 = inst_26928;
var state_26960__$1 = (function (){var statearr_26981 = state_26960;
(statearr_26981[(14)] = inst_26933);

(statearr_26981[(7)] = inst_26920__$1);

(statearr_26981[(8)] = inst_26921);

return statearr_26981;
})();
var statearr_26982_27002 = state_26960__$1;
(statearr_26982_27002[(2)] = null);

(statearr_26982_27002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25084__auto___26988,out))
;
return ((function (switch__24989__auto__,c__25084__auto___26988,out){
return (function() {
var cljs$core$async$state_machine__24990__auto__ = null;
var cljs$core$async$state_machine__24990__auto____0 = (function (){
var statearr_26983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26983[(0)] = cljs$core$async$state_machine__24990__auto__);

(statearr_26983[(1)] = (1));

return statearr_26983;
});
var cljs$core$async$state_machine__24990__auto____1 = (function (state_26960){
while(true){
var ret_value__24991__auto__ = (function (){try{while(true){
var result__24992__auto__ = switch__24989__auto__.call(null,state_26960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24992__auto__;
}
break;
}
}catch (e26984){if((e26984 instanceof Object)){
var ex__24993__auto__ = e26984;
var statearr_26985_27003 = state_26960;
(statearr_26985_27003[(5)] = ex__24993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27004 = state_26960;
state_26960 = G__27004;
continue;
} else {
return ret_value__24991__auto__;
}
break;
}
});
cljs$core$async$state_machine__24990__auto__ = function(state_26960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24990__auto____1.call(this,state_26960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24990__auto____0;
cljs$core$async$state_machine__24990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24990__auto____1;
return cljs$core$async$state_machine__24990__auto__;
})()
;})(switch__24989__auto__,c__25084__auto___26988,out))
})();
var state__25086__auto__ = (function (){var statearr_26986 = f__25085__auto__.call(null);
(statearr_26986[(6)] = c__25084__auto___26988);

return statearr_26986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25086__auto__);
});})(c__25084__auto___26988,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1544650586320
