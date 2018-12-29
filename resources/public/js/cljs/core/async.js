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
var G__25317 = arguments.length;
switch (G__25317) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25318 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25318 = (function (f,blockable,meta25319){
this.f = f;
this.blockable = blockable;
this.meta25319 = meta25319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25320,meta25319__$1){
var self__ = this;
var _25320__$1 = this;
return (new cljs.core.async.t_cljs$core$async25318(self__.f,self__.blockable,meta25319__$1));
});

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25320){
var self__ = this;
var _25320__$1 = this;
return self__.meta25319;
});

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25319","meta25319",1057523057,null)], null);
});

cljs.core.async.t_cljs$core$async25318.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25318";

cljs.core.async.t_cljs$core$async25318.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25318");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25318.
 */
cljs.core.async.__GT_t_cljs$core$async25318 = (function cljs$core$async$__GT_t_cljs$core$async25318(f__$1,blockable__$1,meta25319){
return (new cljs.core.async.t_cljs$core$async25318(f__$1,blockable__$1,meta25319));
});

}

return (new cljs.core.async.t_cljs$core$async25318(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25324 = arguments.length;
switch (G__25324) {
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
var G__25327 = arguments.length;
switch (G__25327) {
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
var G__25330 = arguments.length;
switch (G__25330) {
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
var val_25332 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25332);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25332,ret){
return (function (){
return fn1.call(null,val_25332);
});})(val_25332,ret))
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
var G__25334 = arguments.length;
switch (G__25334) {
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
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
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
var n__4518__auto___25336 = n;
var x_25337 = (0);
while(true){
if((x_25337 < n__4518__auto___25336)){
(a[x_25337] = (0));

var G__25338 = (x_25337 + (1));
x_25337 = G__25338;
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

var G__25339 = (i + (1));
i = G__25339;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25340 = (function (flag,meta25341){
this.flag = flag;
this.meta25341 = meta25341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25342,meta25341__$1){
var self__ = this;
var _25342__$1 = this;
return (new cljs.core.async.t_cljs$core$async25340(self__.flag,meta25341__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25342){
var self__ = this;
var _25342__$1 = this;
return self__.meta25341;
});})(flag))
;

cljs.core.async.t_cljs$core$async25340.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25340.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25340.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25341","meta25341",-814876177,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25340";

cljs.core.async.t_cljs$core$async25340.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25340");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25340.
 */
cljs.core.async.__GT_t_cljs$core$async25340 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25340(flag__$1,meta25341){
return (new cljs.core.async.t_cljs$core$async25340(flag__$1,meta25341));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25340(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25343 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25343 = (function (flag,cb,meta25344){
this.flag = flag;
this.cb = cb;
this.meta25344 = meta25344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25345,meta25344__$1){
var self__ = this;
var _25345__$1 = this;
return (new cljs.core.async.t_cljs$core$async25343(self__.flag,self__.cb,meta25344__$1));
});

cljs.core.async.t_cljs$core$async25343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25345){
var self__ = this;
var _25345__$1 = this;
return self__.meta25344;
});

cljs.core.async.t_cljs$core$async25343.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25343.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25344","meta25344",900865575,null)], null);
});

cljs.core.async.t_cljs$core$async25343.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25343";

cljs.core.async.t_cljs$core$async25343.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25343");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25343.
 */
cljs.core.async.__GT_t_cljs$core$async25343 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25343(flag__$1,cb__$1,meta25344){
return (new cljs.core.async.t_cljs$core$async25343(flag__$1,cb__$1,meta25344));
});

}

return (new cljs.core.async.t_cljs$core$async25343(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25346_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25346_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25347_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25347_SHARP_,port], null));
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
var G__25348 = (i + (1));
i = G__25348;
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
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var len__4641__auto___25354 = arguments.length;
var i__4642__auto___25355 = (0);
while(true){
if((i__4642__auto___25355 < len__4641__auto___25354)){
args__4647__auto__.push((arguments[i__4642__auto___25355]));

var G__25356 = (i__4642__auto___25355 + (1));
i__4642__auto___25355 = G__25356;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25351){
var map__25352 = p__25351;
var map__25352__$1 = (((((!((map__25352 == null))))?(((((map__25352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25352):map__25352);
var opts = map__25352__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25349){
var G__25350 = cljs.core.first.call(null,seq25349);
var seq25349__$1 = cljs.core.next.call(null,seq25349);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25350,seq25349__$1);
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
var G__25358 = arguments.length;
switch (G__25358) {
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
var c__25257__auto___25404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___25404){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___25404){
return (function (state_25382){
var state_val_25383 = (state_25382[(1)]);
if((state_val_25383 === (7))){
var inst_25378 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25384_25405 = state_25382__$1;
(statearr_25384_25405[(2)] = inst_25378);

(statearr_25384_25405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (1))){
var state_25382__$1 = state_25382;
var statearr_25385_25406 = state_25382__$1;
(statearr_25385_25406[(2)] = null);

(statearr_25385_25406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (4))){
var inst_25361 = (state_25382[(7)]);
var inst_25361__$1 = (state_25382[(2)]);
var inst_25362 = (inst_25361__$1 == null);
var state_25382__$1 = (function (){var statearr_25386 = state_25382;
(statearr_25386[(7)] = inst_25361__$1);

return statearr_25386;
})();
if(cljs.core.truth_(inst_25362)){
var statearr_25387_25407 = state_25382__$1;
(statearr_25387_25407[(1)] = (5));

} else {
var statearr_25388_25408 = state_25382__$1;
(statearr_25388_25408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (13))){
var state_25382__$1 = state_25382;
var statearr_25389_25409 = state_25382__$1;
(statearr_25389_25409[(2)] = null);

(statearr_25389_25409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (6))){
var inst_25361 = (state_25382[(7)]);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25382__$1,(11),to,inst_25361);
} else {
if((state_val_25383 === (3))){
var inst_25380 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25382__$1,inst_25380);
} else {
if((state_val_25383 === (12))){
var state_25382__$1 = state_25382;
var statearr_25390_25410 = state_25382__$1;
(statearr_25390_25410[(2)] = null);

(statearr_25390_25410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (2))){
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25382__$1,(4),from);
} else {
if((state_val_25383 === (11))){
var inst_25371 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
if(cljs.core.truth_(inst_25371)){
var statearr_25391_25411 = state_25382__$1;
(statearr_25391_25411[(1)] = (12));

} else {
var statearr_25392_25412 = state_25382__$1;
(statearr_25392_25412[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (9))){
var state_25382__$1 = state_25382;
var statearr_25393_25413 = state_25382__$1;
(statearr_25393_25413[(2)] = null);

(statearr_25393_25413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (5))){
var state_25382__$1 = state_25382;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25394_25414 = state_25382__$1;
(statearr_25394_25414[(1)] = (8));

} else {
var statearr_25395_25415 = state_25382__$1;
(statearr_25395_25415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (14))){
var inst_25376 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25396_25416 = state_25382__$1;
(statearr_25396_25416[(2)] = inst_25376);

(statearr_25396_25416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (10))){
var inst_25368 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25397_25417 = state_25382__$1;
(statearr_25397_25417[(2)] = inst_25368);

(statearr_25397_25417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (8))){
var inst_25365 = cljs.core.async.close_BANG_.call(null,to);
var state_25382__$1 = state_25382;
var statearr_25398_25418 = state_25382__$1;
(statearr_25398_25418[(2)] = inst_25365);

(statearr_25398_25418[(1)] = (10));


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
});})(c__25257__auto___25404))
;
return ((function (switch__25162__auto__,c__25257__auto___25404){
return (function() {
var cljs$core$async$state_machine__25163__auto__ = null;
var cljs$core$async$state_machine__25163__auto____0 = (function (){
var statearr_25399 = [null,null,null,null,null,null,null,null];
(statearr_25399[(0)] = cljs$core$async$state_machine__25163__auto__);

(statearr_25399[(1)] = (1));

return statearr_25399;
});
var cljs$core$async$state_machine__25163__auto____1 = (function (state_25382){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_25382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e25400){if((e25400 instanceof Object)){
var ex__25166__auto__ = e25400;
var statearr_25401_25419 = state_25382;
(statearr_25401_25419[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25420 = state_25382;
state_25382 = G__25420;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$state_machine__25163__auto__ = function(state_25382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25163__auto____1.call(this,state_25382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25163__auto____0;
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25163__auto____1;
return cljs$core$async$state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___25404))
})();
var state__25259__auto__ = (function (){var statearr_25402 = f__25258__auto__.call(null);
(statearr_25402[(6)] = c__25257__auto___25404);

return statearr_25402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___25404))
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
return (function (p__25421){
var vec__25422 = p__25421;
var v = cljs.core.nth.call(null,vec__25422,(0),null);
var p = cljs.core.nth.call(null,vec__25422,(1),null);
var job = vec__25422;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25257__auto___25593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___25593,res,vec__25422,v,p,job,jobs,results){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___25593,res,vec__25422,v,p,job,jobs,results){
return (function (state_25429){
var state_val_25430 = (state_25429[(1)]);
if((state_val_25430 === (1))){
var state_25429__$1 = state_25429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25429__$1,(2),res,v);
} else {
if((state_val_25430 === (2))){
var inst_25426 = (state_25429[(2)]);
var inst_25427 = cljs.core.async.close_BANG_.call(null,res);
var state_25429__$1 = (function (){var statearr_25431 = state_25429;
(statearr_25431[(7)] = inst_25426);

return statearr_25431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25429__$1,inst_25427);
} else {
return null;
}
}
});})(c__25257__auto___25593,res,vec__25422,v,p,job,jobs,results))
;
return ((function (switch__25162__auto__,c__25257__auto___25593,res,vec__25422,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____0 = (function (){
var statearr_25432 = [null,null,null,null,null,null,null,null];
(statearr_25432[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__);

(statearr_25432[(1)] = (1));

return statearr_25432;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____1 = (function (state_25429){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_25429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e25433){if((e25433 instanceof Object)){
var ex__25166__auto__ = e25433;
var statearr_25434_25594 = state_25429;
(statearr_25434_25594[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25595 = state_25429;
state_25429 = G__25595;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__ = function(state_25429){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____1.call(this,state_25429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___25593,res,vec__25422,v,p,job,jobs,results))
})();
var state__25259__auto__ = (function (){var statearr_25435 = f__25258__auto__.call(null);
(statearr_25435[(6)] = c__25257__auto___25593);

return statearr_25435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___25593,res,vec__25422,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25436){
var vec__25437 = p__25436;
var v = cljs.core.nth.call(null,vec__25437,(0),null);
var p = cljs.core.nth.call(null,vec__25437,(1),null);
var job = vec__25437;
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
var n__4518__auto___25596 = n;
var __25597 = (0);
while(true){
if((__25597 < n__4518__auto___25596)){
var G__25440_25598 = type;
var G__25440_25599__$1 = (((G__25440_25598 instanceof cljs.core.Keyword))?G__25440_25598.fqn:null);
switch (G__25440_25599__$1) {
case "compute":
var c__25257__auto___25601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25597,c__25257__auto___25601,G__25440_25598,G__25440_25599__$1,n__4518__auto___25596,jobs,results,process,async){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (__25597,c__25257__auto___25601,G__25440_25598,G__25440_25599__$1,n__4518__auto___25596,jobs,results,process,async){
return (function (state_25453){
var state_val_25454 = (state_25453[(1)]);
if((state_val_25454 === (1))){
var state_25453__$1 = state_25453;
var statearr_25455_25602 = state_25453__$1;
(statearr_25455_25602[(2)] = null);

(statearr_25455_25602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25454 === (2))){
var state_25453__$1 = state_25453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25453__$1,(4),jobs);
} else {
if((state_val_25454 === (3))){
var inst_25451 = (state_25453[(2)]);
var state_25453__$1 = state_25453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25453__$1,inst_25451);
} else {
if((state_val_25454 === (4))){
var inst_25443 = (state_25453[(2)]);
var inst_25444 = process.call(null,inst_25443);
var state_25453__$1 = state_25453;
if(cljs.core.truth_(inst_25444)){
var statearr_25456_25603 = state_25453__$1;
(statearr_25456_25603[(1)] = (5));

} else {
var statearr_25457_25604 = state_25453__$1;
(statearr_25457_25604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25454 === (5))){
var state_25453__$1 = state_25453;
var statearr_25458_25605 = state_25453__$1;
(statearr_25458_25605[(2)] = null);

(statearr_25458_25605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25454 === (6))){
var state_25453__$1 = state_25453;
var statearr_25459_25606 = state_25453__$1;
(statearr_25459_25606[(2)] = null);

(statearr_25459_25606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25454 === (7))){
var inst_25449 = (state_25453[(2)]);
var state_25453__$1 = state_25453;
var statearr_25460_25607 = state_25453__$1;
(statearr_25460_25607[(2)] = inst_25449);

(statearr_25460_25607[(1)] = (3));


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
});})(__25597,c__25257__auto___25601,G__25440_25598,G__25440_25599__$1,n__4518__auto___25596,jobs,results,process,async))
;
return ((function (__25597,switch__25162__auto__,c__25257__auto___25601,G__25440_25598,G__25440_25599__$1,n__4518__auto___25596,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____0 = (function (){
var statearr_25461 = [null,null,null,null,null,null,null];
(statearr_25461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__);

(statearr_25461[(1)] = (1));

return statearr_25461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____1 = (function (state_25453){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_25453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e25462){if((e25462 instanceof Object)){
var ex__25166__auto__ = e25462;
var statearr_25463_25608 = state_25453;
(statearr_25463_25608[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25609 = state_25453;
state_25453 = G__25609;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__ = function(state_25453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____1.call(this,state_25453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__;
})()
;})(__25597,switch__25162__auto__,c__25257__auto___25601,G__25440_25598,G__25440_25599__$1,n__4518__auto___25596,jobs,results,process,async))
})();
var state__25259__auto__ = (function (){var statearr_25464 = f__25258__auto__.call(null);
(statearr_25464[(6)] = c__25257__auto___25601);

return statearr_25464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(__25597,c__25257__auto___25601,G__25440_25598,G__25440_25599__$1,n__4518__auto___25596,jobs,results,process,async))
);


break;
case "async":
var c__25257__auto___25610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25597,c__25257__auto___25610,G__25440_25598,G__25440_25599__$1,n__4518__auto___25596,jobs,results,process,async){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (__25597,c__25257__auto___25610,G__25440_25598,G__25440_25599__$1,n__4518__auto___25596,jobs,results,process,async){
return (function (state_25477){
var state_val_25478 = (state_25477[(1)]);
if((state_val_25478 === (1))){
var state_25477__$1 = state_25477;
var statearr_25479_25611 = state_25477__$1;
(statearr_25479_25611[(2)] = null);

(statearr_25479_25611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (2))){
var state_25477__$1 = state_25477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25477__$1,(4),jobs);
} else {
if((state_val_25478 === (3))){
var inst_25475 = (state_25477[(2)]);
var state_25477__$1 = state_25477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25477__$1,inst_25475);
} else {
if((state_val_25478 === (4))){
var inst_25467 = (state_25477[(2)]);
var inst_25468 = async.call(null,inst_25467);
var state_25477__$1 = state_25477;
if(cljs.core.truth_(inst_25468)){
var statearr_25480_25612 = state_25477__$1;
(statearr_25480_25612[(1)] = (5));

} else {
var statearr_25481_25613 = state_25477__$1;
(statearr_25481_25613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (5))){
var state_25477__$1 = state_25477;
var statearr_25482_25614 = state_25477__$1;
(statearr_25482_25614[(2)] = null);

(statearr_25482_25614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (6))){
var state_25477__$1 = state_25477;
var statearr_25483_25615 = state_25477__$1;
(statearr_25483_25615[(2)] = null);

(statearr_25483_25615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (7))){
var inst_25473 = (state_25477[(2)]);
var state_25477__$1 = state_25477;
var statearr_25484_25616 = state_25477__$1;
(statearr_25484_25616[(2)] = inst_25473);

(statearr_25484_25616[(1)] = (3));


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
});})(__25597,c__25257__auto___25610,G__25440_25598,G__25440_25599__$1,n__4518__auto___25596,jobs,results,process,async))
;
return ((function (__25597,switch__25162__auto__,c__25257__auto___25610,G__25440_25598,G__25440_25599__$1,n__4518__auto___25596,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____0 = (function (){
var statearr_25485 = [null,null,null,null,null,null,null];
(statearr_25485[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__);

(statearr_25485[(1)] = (1));

return statearr_25485;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____1 = (function (state_25477){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_25477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e25486){if((e25486 instanceof Object)){
var ex__25166__auto__ = e25486;
var statearr_25487_25617 = state_25477;
(statearr_25487_25617[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25618 = state_25477;
state_25477 = G__25618;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__ = function(state_25477){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____1.call(this,state_25477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__;
})()
;})(__25597,switch__25162__auto__,c__25257__auto___25610,G__25440_25598,G__25440_25599__$1,n__4518__auto___25596,jobs,results,process,async))
})();
var state__25259__auto__ = (function (){var statearr_25488 = f__25258__auto__.call(null);
(statearr_25488[(6)] = c__25257__auto___25610);

return statearr_25488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(__25597,c__25257__auto___25610,G__25440_25598,G__25440_25599__$1,n__4518__auto___25596,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25440_25599__$1)].join('')));

}

var G__25619 = (__25597 + (1));
__25597 = G__25619;
continue;
} else {
}
break;
}

var c__25257__auto___25620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___25620,jobs,results,process,async){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___25620,jobs,results,process,async){
return (function (state_25510){
var state_val_25511 = (state_25510[(1)]);
if((state_val_25511 === (7))){
var inst_25506 = (state_25510[(2)]);
var state_25510__$1 = state_25510;
var statearr_25512_25621 = state_25510__$1;
(statearr_25512_25621[(2)] = inst_25506);

(statearr_25512_25621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25511 === (1))){
var state_25510__$1 = state_25510;
var statearr_25513_25622 = state_25510__$1;
(statearr_25513_25622[(2)] = null);

(statearr_25513_25622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25511 === (4))){
var inst_25491 = (state_25510[(7)]);
var inst_25491__$1 = (state_25510[(2)]);
var inst_25492 = (inst_25491__$1 == null);
var state_25510__$1 = (function (){var statearr_25514 = state_25510;
(statearr_25514[(7)] = inst_25491__$1);

return statearr_25514;
})();
if(cljs.core.truth_(inst_25492)){
var statearr_25515_25623 = state_25510__$1;
(statearr_25515_25623[(1)] = (5));

} else {
var statearr_25516_25624 = state_25510__$1;
(statearr_25516_25624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25511 === (6))){
var inst_25491 = (state_25510[(7)]);
var inst_25496 = (state_25510[(8)]);
var inst_25496__$1 = cljs.core.async.chan.call(null,(1));
var inst_25497 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25498 = [inst_25491,inst_25496__$1];
var inst_25499 = (new cljs.core.PersistentVector(null,2,(5),inst_25497,inst_25498,null));
var state_25510__$1 = (function (){var statearr_25517 = state_25510;
(statearr_25517[(8)] = inst_25496__$1);

return statearr_25517;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25510__$1,(8),jobs,inst_25499);
} else {
if((state_val_25511 === (3))){
var inst_25508 = (state_25510[(2)]);
var state_25510__$1 = state_25510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25510__$1,inst_25508);
} else {
if((state_val_25511 === (2))){
var state_25510__$1 = state_25510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25510__$1,(4),from);
} else {
if((state_val_25511 === (9))){
var inst_25503 = (state_25510[(2)]);
var state_25510__$1 = (function (){var statearr_25518 = state_25510;
(statearr_25518[(9)] = inst_25503);

return statearr_25518;
})();
var statearr_25519_25625 = state_25510__$1;
(statearr_25519_25625[(2)] = null);

(statearr_25519_25625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25511 === (5))){
var inst_25494 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25510__$1 = state_25510;
var statearr_25520_25626 = state_25510__$1;
(statearr_25520_25626[(2)] = inst_25494);

(statearr_25520_25626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25511 === (8))){
var inst_25496 = (state_25510[(8)]);
var inst_25501 = (state_25510[(2)]);
var state_25510__$1 = (function (){var statearr_25521 = state_25510;
(statearr_25521[(10)] = inst_25501);

return statearr_25521;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25510__$1,(9),results,inst_25496);
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
});})(c__25257__auto___25620,jobs,results,process,async))
;
return ((function (switch__25162__auto__,c__25257__auto___25620,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____0 = (function (){
var statearr_25522 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25522[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__);

(statearr_25522[(1)] = (1));

return statearr_25522;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____1 = (function (state_25510){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_25510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e25523){if((e25523 instanceof Object)){
var ex__25166__auto__ = e25523;
var statearr_25524_25627 = state_25510;
(statearr_25524_25627[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25628 = state_25510;
state_25510 = G__25628;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__ = function(state_25510){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____1.call(this,state_25510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___25620,jobs,results,process,async))
})();
var state__25259__auto__ = (function (){var statearr_25525 = f__25258__auto__.call(null);
(statearr_25525[(6)] = c__25257__auto___25620);

return statearr_25525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___25620,jobs,results,process,async))
);


var c__25257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto__,jobs,results,process,async){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto__,jobs,results,process,async){
return (function (state_25563){
var state_val_25564 = (state_25563[(1)]);
if((state_val_25564 === (7))){
var inst_25559 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
var statearr_25565_25629 = state_25563__$1;
(statearr_25565_25629[(2)] = inst_25559);

(statearr_25565_25629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (20))){
var state_25563__$1 = state_25563;
var statearr_25566_25630 = state_25563__$1;
(statearr_25566_25630[(2)] = null);

(statearr_25566_25630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (1))){
var state_25563__$1 = state_25563;
var statearr_25567_25631 = state_25563__$1;
(statearr_25567_25631[(2)] = null);

(statearr_25567_25631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (4))){
var inst_25528 = (state_25563[(7)]);
var inst_25528__$1 = (state_25563[(2)]);
var inst_25529 = (inst_25528__$1 == null);
var state_25563__$1 = (function (){var statearr_25568 = state_25563;
(statearr_25568[(7)] = inst_25528__$1);

return statearr_25568;
})();
if(cljs.core.truth_(inst_25529)){
var statearr_25569_25632 = state_25563__$1;
(statearr_25569_25632[(1)] = (5));

} else {
var statearr_25570_25633 = state_25563__$1;
(statearr_25570_25633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (15))){
var inst_25541 = (state_25563[(8)]);
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25563__$1,(18),to,inst_25541);
} else {
if((state_val_25564 === (21))){
var inst_25554 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
var statearr_25571_25634 = state_25563__$1;
(statearr_25571_25634[(2)] = inst_25554);

(statearr_25571_25634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (13))){
var inst_25556 = (state_25563[(2)]);
var state_25563__$1 = (function (){var statearr_25572 = state_25563;
(statearr_25572[(9)] = inst_25556);

return statearr_25572;
})();
var statearr_25573_25635 = state_25563__$1;
(statearr_25573_25635[(2)] = null);

(statearr_25573_25635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (6))){
var inst_25528 = (state_25563[(7)]);
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25563__$1,(11),inst_25528);
} else {
if((state_val_25564 === (17))){
var inst_25549 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
if(cljs.core.truth_(inst_25549)){
var statearr_25574_25636 = state_25563__$1;
(statearr_25574_25636[(1)] = (19));

} else {
var statearr_25575_25637 = state_25563__$1;
(statearr_25575_25637[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (3))){
var inst_25561 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25563__$1,inst_25561);
} else {
if((state_val_25564 === (12))){
var inst_25538 = (state_25563[(10)]);
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25563__$1,(14),inst_25538);
} else {
if((state_val_25564 === (2))){
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25563__$1,(4),results);
} else {
if((state_val_25564 === (19))){
var state_25563__$1 = state_25563;
var statearr_25576_25638 = state_25563__$1;
(statearr_25576_25638[(2)] = null);

(statearr_25576_25638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (11))){
var inst_25538 = (state_25563[(2)]);
var state_25563__$1 = (function (){var statearr_25577 = state_25563;
(statearr_25577[(10)] = inst_25538);

return statearr_25577;
})();
var statearr_25578_25639 = state_25563__$1;
(statearr_25578_25639[(2)] = null);

(statearr_25578_25639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (9))){
var state_25563__$1 = state_25563;
var statearr_25579_25640 = state_25563__$1;
(statearr_25579_25640[(2)] = null);

(statearr_25579_25640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (5))){
var state_25563__$1 = state_25563;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25580_25641 = state_25563__$1;
(statearr_25580_25641[(1)] = (8));

} else {
var statearr_25581_25642 = state_25563__$1;
(statearr_25581_25642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (14))){
var inst_25541 = (state_25563[(8)]);
var inst_25543 = (state_25563[(11)]);
var inst_25541__$1 = (state_25563[(2)]);
var inst_25542 = (inst_25541__$1 == null);
var inst_25543__$1 = cljs.core.not.call(null,inst_25542);
var state_25563__$1 = (function (){var statearr_25582 = state_25563;
(statearr_25582[(8)] = inst_25541__$1);

(statearr_25582[(11)] = inst_25543__$1);

return statearr_25582;
})();
if(inst_25543__$1){
var statearr_25583_25643 = state_25563__$1;
(statearr_25583_25643[(1)] = (15));

} else {
var statearr_25584_25644 = state_25563__$1;
(statearr_25584_25644[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (16))){
var inst_25543 = (state_25563[(11)]);
var state_25563__$1 = state_25563;
var statearr_25585_25645 = state_25563__$1;
(statearr_25585_25645[(2)] = inst_25543);

(statearr_25585_25645[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (10))){
var inst_25535 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
var statearr_25586_25646 = state_25563__$1;
(statearr_25586_25646[(2)] = inst_25535);

(statearr_25586_25646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (18))){
var inst_25546 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
var statearr_25587_25647 = state_25563__$1;
(statearr_25587_25647[(2)] = inst_25546);

(statearr_25587_25647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (8))){
var inst_25532 = cljs.core.async.close_BANG_.call(null,to);
var state_25563__$1 = state_25563;
var statearr_25588_25648 = state_25563__$1;
(statearr_25588_25648[(2)] = inst_25532);

(statearr_25588_25648[(1)] = (10));


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
});})(c__25257__auto__,jobs,results,process,async))
;
return ((function (switch__25162__auto__,c__25257__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____0 = (function (){
var statearr_25589 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25589[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__);

(statearr_25589[(1)] = (1));

return statearr_25589;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____1 = (function (state_25563){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_25563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e25590){if((e25590 instanceof Object)){
var ex__25166__auto__ = e25590;
var statearr_25591_25649 = state_25563;
(statearr_25591_25649[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25650 = state_25563;
state_25563 = G__25650;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__ = function(state_25563){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____1.call(this,state_25563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25163__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto__,jobs,results,process,async))
})();
var state__25259__auto__ = (function (){var statearr_25592 = f__25258__auto__.call(null);
(statearr_25592[(6)] = c__25257__auto__);

return statearr_25592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto__,jobs,results,process,async))
);

return c__25257__auto__;
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
var G__25652 = arguments.length;
switch (G__25652) {
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
var G__25655 = arguments.length;
switch (G__25655) {
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
var G__25658 = arguments.length;
switch (G__25658) {
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
var c__25257__auto___25707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___25707,tc,fc){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___25707,tc,fc){
return (function (state_25684){
var state_val_25685 = (state_25684[(1)]);
if((state_val_25685 === (7))){
var inst_25680 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
var statearr_25686_25708 = state_25684__$1;
(statearr_25686_25708[(2)] = inst_25680);

(statearr_25686_25708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (1))){
var state_25684__$1 = state_25684;
var statearr_25687_25709 = state_25684__$1;
(statearr_25687_25709[(2)] = null);

(statearr_25687_25709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (4))){
var inst_25661 = (state_25684[(7)]);
var inst_25661__$1 = (state_25684[(2)]);
var inst_25662 = (inst_25661__$1 == null);
var state_25684__$1 = (function (){var statearr_25688 = state_25684;
(statearr_25688[(7)] = inst_25661__$1);

return statearr_25688;
})();
if(cljs.core.truth_(inst_25662)){
var statearr_25689_25710 = state_25684__$1;
(statearr_25689_25710[(1)] = (5));

} else {
var statearr_25690_25711 = state_25684__$1;
(statearr_25690_25711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (13))){
var state_25684__$1 = state_25684;
var statearr_25691_25712 = state_25684__$1;
(statearr_25691_25712[(2)] = null);

(statearr_25691_25712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (6))){
var inst_25661 = (state_25684[(7)]);
var inst_25667 = p.call(null,inst_25661);
var state_25684__$1 = state_25684;
if(cljs.core.truth_(inst_25667)){
var statearr_25692_25713 = state_25684__$1;
(statearr_25692_25713[(1)] = (9));

} else {
var statearr_25693_25714 = state_25684__$1;
(statearr_25693_25714[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (3))){
var inst_25682 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25684__$1,inst_25682);
} else {
if((state_val_25685 === (12))){
var state_25684__$1 = state_25684;
var statearr_25694_25715 = state_25684__$1;
(statearr_25694_25715[(2)] = null);

(statearr_25694_25715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (2))){
var state_25684__$1 = state_25684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25684__$1,(4),ch);
} else {
if((state_val_25685 === (11))){
var inst_25661 = (state_25684[(7)]);
var inst_25671 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25684__$1,(8),inst_25671,inst_25661);
} else {
if((state_val_25685 === (9))){
var state_25684__$1 = state_25684;
var statearr_25695_25716 = state_25684__$1;
(statearr_25695_25716[(2)] = tc);

(statearr_25695_25716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (5))){
var inst_25664 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25665 = cljs.core.async.close_BANG_.call(null,fc);
var state_25684__$1 = (function (){var statearr_25696 = state_25684;
(statearr_25696[(8)] = inst_25664);

return statearr_25696;
})();
var statearr_25697_25717 = state_25684__$1;
(statearr_25697_25717[(2)] = inst_25665);

(statearr_25697_25717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (14))){
var inst_25678 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
var statearr_25698_25718 = state_25684__$1;
(statearr_25698_25718[(2)] = inst_25678);

(statearr_25698_25718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (10))){
var state_25684__$1 = state_25684;
var statearr_25699_25719 = state_25684__$1;
(statearr_25699_25719[(2)] = fc);

(statearr_25699_25719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (8))){
var inst_25673 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
if(cljs.core.truth_(inst_25673)){
var statearr_25700_25720 = state_25684__$1;
(statearr_25700_25720[(1)] = (12));

} else {
var statearr_25701_25721 = state_25684__$1;
(statearr_25701_25721[(1)] = (13));

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
});})(c__25257__auto___25707,tc,fc))
;
return ((function (switch__25162__auto__,c__25257__auto___25707,tc,fc){
return (function() {
var cljs$core$async$state_machine__25163__auto__ = null;
var cljs$core$async$state_machine__25163__auto____0 = (function (){
var statearr_25702 = [null,null,null,null,null,null,null,null,null];
(statearr_25702[(0)] = cljs$core$async$state_machine__25163__auto__);

(statearr_25702[(1)] = (1));

return statearr_25702;
});
var cljs$core$async$state_machine__25163__auto____1 = (function (state_25684){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_25684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e25703){if((e25703 instanceof Object)){
var ex__25166__auto__ = e25703;
var statearr_25704_25722 = state_25684;
(statearr_25704_25722[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25723 = state_25684;
state_25684 = G__25723;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$state_machine__25163__auto__ = function(state_25684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25163__auto____1.call(this,state_25684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25163__auto____0;
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25163__auto____1;
return cljs$core$async$state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___25707,tc,fc))
})();
var state__25259__auto__ = (function (){var statearr_25705 = f__25258__auto__.call(null);
(statearr_25705[(6)] = c__25257__auto___25707);

return statearr_25705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___25707,tc,fc))
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
var c__25257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto__){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto__){
return (function (state_25744){
var state_val_25745 = (state_25744[(1)]);
if((state_val_25745 === (7))){
var inst_25740 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25746_25764 = state_25744__$1;
(statearr_25746_25764[(2)] = inst_25740);

(statearr_25746_25764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (1))){
var inst_25724 = init;
var state_25744__$1 = (function (){var statearr_25747 = state_25744;
(statearr_25747[(7)] = inst_25724);

return statearr_25747;
})();
var statearr_25748_25765 = state_25744__$1;
(statearr_25748_25765[(2)] = null);

(statearr_25748_25765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (4))){
var inst_25727 = (state_25744[(8)]);
var inst_25727__$1 = (state_25744[(2)]);
var inst_25728 = (inst_25727__$1 == null);
var state_25744__$1 = (function (){var statearr_25749 = state_25744;
(statearr_25749[(8)] = inst_25727__$1);

return statearr_25749;
})();
if(cljs.core.truth_(inst_25728)){
var statearr_25750_25766 = state_25744__$1;
(statearr_25750_25766[(1)] = (5));

} else {
var statearr_25751_25767 = state_25744__$1;
(statearr_25751_25767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (6))){
var inst_25731 = (state_25744[(9)]);
var inst_25724 = (state_25744[(7)]);
var inst_25727 = (state_25744[(8)]);
var inst_25731__$1 = f.call(null,inst_25724,inst_25727);
var inst_25732 = cljs.core.reduced_QMARK_.call(null,inst_25731__$1);
var state_25744__$1 = (function (){var statearr_25752 = state_25744;
(statearr_25752[(9)] = inst_25731__$1);

return statearr_25752;
})();
if(inst_25732){
var statearr_25753_25768 = state_25744__$1;
(statearr_25753_25768[(1)] = (8));

} else {
var statearr_25754_25769 = state_25744__$1;
(statearr_25754_25769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (3))){
var inst_25742 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25744__$1,inst_25742);
} else {
if((state_val_25745 === (2))){
var state_25744__$1 = state_25744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25744__$1,(4),ch);
} else {
if((state_val_25745 === (9))){
var inst_25731 = (state_25744[(9)]);
var inst_25724 = inst_25731;
var state_25744__$1 = (function (){var statearr_25755 = state_25744;
(statearr_25755[(7)] = inst_25724);

return statearr_25755;
})();
var statearr_25756_25770 = state_25744__$1;
(statearr_25756_25770[(2)] = null);

(statearr_25756_25770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (5))){
var inst_25724 = (state_25744[(7)]);
var state_25744__$1 = state_25744;
var statearr_25757_25771 = state_25744__$1;
(statearr_25757_25771[(2)] = inst_25724);

(statearr_25757_25771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (10))){
var inst_25738 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25758_25772 = state_25744__$1;
(statearr_25758_25772[(2)] = inst_25738);

(statearr_25758_25772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (8))){
var inst_25731 = (state_25744[(9)]);
var inst_25734 = cljs.core.deref.call(null,inst_25731);
var state_25744__$1 = state_25744;
var statearr_25759_25773 = state_25744__$1;
(statearr_25759_25773[(2)] = inst_25734);

(statearr_25759_25773[(1)] = (10));


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
});})(c__25257__auto__))
;
return ((function (switch__25162__auto__,c__25257__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25163__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25163__auto____0 = (function (){
var statearr_25760 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25760[(0)] = cljs$core$async$reduce_$_state_machine__25163__auto__);

(statearr_25760[(1)] = (1));

return statearr_25760;
});
var cljs$core$async$reduce_$_state_machine__25163__auto____1 = (function (state_25744){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_25744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e25761){if((e25761 instanceof Object)){
var ex__25166__auto__ = e25761;
var statearr_25762_25774 = state_25744;
(statearr_25762_25774[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25775 = state_25744;
state_25744 = G__25775;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25163__auto__ = function(state_25744){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25163__auto____1.call(this,state_25744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25163__auto____0;
cljs$core$async$reduce_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25163__auto____1;
return cljs$core$async$reduce_$_state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto__))
})();
var state__25259__auto__ = (function (){var statearr_25763 = f__25258__auto__.call(null);
(statearr_25763[(6)] = c__25257__auto__);

return statearr_25763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto__))
);

return c__25257__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto__,f__$1){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto__,f__$1){
return (function (state_25781){
var state_val_25782 = (state_25781[(1)]);
if((state_val_25782 === (1))){
var inst_25776 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25781__$1 = state_25781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25781__$1,(2),inst_25776);
} else {
if((state_val_25782 === (2))){
var inst_25778 = (state_25781[(2)]);
var inst_25779 = f__$1.call(null,inst_25778);
var state_25781__$1 = state_25781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25781__$1,inst_25779);
} else {
return null;
}
}
});})(c__25257__auto__,f__$1))
;
return ((function (switch__25162__auto__,c__25257__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25163__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25163__auto____0 = (function (){
var statearr_25783 = [null,null,null,null,null,null,null];
(statearr_25783[(0)] = cljs$core$async$transduce_$_state_machine__25163__auto__);

(statearr_25783[(1)] = (1));

return statearr_25783;
});
var cljs$core$async$transduce_$_state_machine__25163__auto____1 = (function (state_25781){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_25781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e25784){if((e25784 instanceof Object)){
var ex__25166__auto__ = e25784;
var statearr_25785_25787 = state_25781;
(statearr_25785_25787[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25788 = state_25781;
state_25781 = G__25788;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25163__auto__ = function(state_25781){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25163__auto____1.call(this,state_25781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25163__auto____0;
cljs$core$async$transduce_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25163__auto____1;
return cljs$core$async$transduce_$_state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto__,f__$1))
})();
var state__25259__auto__ = (function (){var statearr_25786 = f__25258__auto__.call(null);
(statearr_25786[(6)] = c__25257__auto__);

return statearr_25786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto__,f__$1))
);

return c__25257__auto__;
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
var G__25790 = arguments.length;
switch (G__25790) {
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
var c__25257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto__){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto__){
return (function (state_25815){
var state_val_25816 = (state_25815[(1)]);
if((state_val_25816 === (7))){
var inst_25797 = (state_25815[(2)]);
var state_25815__$1 = state_25815;
var statearr_25817_25838 = state_25815__$1;
(statearr_25817_25838[(2)] = inst_25797);

(statearr_25817_25838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25816 === (1))){
var inst_25791 = cljs.core.seq.call(null,coll);
var inst_25792 = inst_25791;
var state_25815__$1 = (function (){var statearr_25818 = state_25815;
(statearr_25818[(7)] = inst_25792);

return statearr_25818;
})();
var statearr_25819_25839 = state_25815__$1;
(statearr_25819_25839[(2)] = null);

(statearr_25819_25839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25816 === (4))){
var inst_25792 = (state_25815[(7)]);
var inst_25795 = cljs.core.first.call(null,inst_25792);
var state_25815__$1 = state_25815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25815__$1,(7),ch,inst_25795);
} else {
if((state_val_25816 === (13))){
var inst_25809 = (state_25815[(2)]);
var state_25815__$1 = state_25815;
var statearr_25820_25840 = state_25815__$1;
(statearr_25820_25840[(2)] = inst_25809);

(statearr_25820_25840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25816 === (6))){
var inst_25800 = (state_25815[(2)]);
var state_25815__$1 = state_25815;
if(cljs.core.truth_(inst_25800)){
var statearr_25821_25841 = state_25815__$1;
(statearr_25821_25841[(1)] = (8));

} else {
var statearr_25822_25842 = state_25815__$1;
(statearr_25822_25842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25816 === (3))){
var inst_25813 = (state_25815[(2)]);
var state_25815__$1 = state_25815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25815__$1,inst_25813);
} else {
if((state_val_25816 === (12))){
var state_25815__$1 = state_25815;
var statearr_25823_25843 = state_25815__$1;
(statearr_25823_25843[(2)] = null);

(statearr_25823_25843[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25816 === (2))){
var inst_25792 = (state_25815[(7)]);
var state_25815__$1 = state_25815;
if(cljs.core.truth_(inst_25792)){
var statearr_25824_25844 = state_25815__$1;
(statearr_25824_25844[(1)] = (4));

} else {
var statearr_25825_25845 = state_25815__$1;
(statearr_25825_25845[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25816 === (11))){
var inst_25806 = cljs.core.async.close_BANG_.call(null,ch);
var state_25815__$1 = state_25815;
var statearr_25826_25846 = state_25815__$1;
(statearr_25826_25846[(2)] = inst_25806);

(statearr_25826_25846[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25816 === (9))){
var state_25815__$1 = state_25815;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25827_25847 = state_25815__$1;
(statearr_25827_25847[(1)] = (11));

} else {
var statearr_25828_25848 = state_25815__$1;
(statearr_25828_25848[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25816 === (5))){
var inst_25792 = (state_25815[(7)]);
var state_25815__$1 = state_25815;
var statearr_25829_25849 = state_25815__$1;
(statearr_25829_25849[(2)] = inst_25792);

(statearr_25829_25849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25816 === (10))){
var inst_25811 = (state_25815[(2)]);
var state_25815__$1 = state_25815;
var statearr_25830_25850 = state_25815__$1;
(statearr_25830_25850[(2)] = inst_25811);

(statearr_25830_25850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25816 === (8))){
var inst_25792 = (state_25815[(7)]);
var inst_25802 = cljs.core.next.call(null,inst_25792);
var inst_25792__$1 = inst_25802;
var state_25815__$1 = (function (){var statearr_25831 = state_25815;
(statearr_25831[(7)] = inst_25792__$1);

return statearr_25831;
})();
var statearr_25832_25851 = state_25815__$1;
(statearr_25832_25851[(2)] = null);

(statearr_25832_25851[(1)] = (2));


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
});})(c__25257__auto__))
;
return ((function (switch__25162__auto__,c__25257__auto__){
return (function() {
var cljs$core$async$state_machine__25163__auto__ = null;
var cljs$core$async$state_machine__25163__auto____0 = (function (){
var statearr_25833 = [null,null,null,null,null,null,null,null];
(statearr_25833[(0)] = cljs$core$async$state_machine__25163__auto__);

(statearr_25833[(1)] = (1));

return statearr_25833;
});
var cljs$core$async$state_machine__25163__auto____1 = (function (state_25815){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_25815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e25834){if((e25834 instanceof Object)){
var ex__25166__auto__ = e25834;
var statearr_25835_25852 = state_25815;
(statearr_25835_25852[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25853 = state_25815;
state_25815 = G__25853;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$state_machine__25163__auto__ = function(state_25815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25163__auto____1.call(this,state_25815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25163__auto____0;
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25163__auto____1;
return cljs$core$async$state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto__))
})();
var state__25259__auto__ = (function (){var statearr_25836 = f__25258__auto__.call(null);
(statearr_25836[(6)] = c__25257__auto__);

return statearr_25836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto__))
);

return c__25257__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25854 = (function (ch,cs,meta25855){
this.ch = ch;
this.cs = cs;
this.meta25855 = meta25855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25856,meta25855__$1){
var self__ = this;
var _25856__$1 = this;
return (new cljs.core.async.t_cljs$core$async25854(self__.ch,self__.cs,meta25855__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25856){
var self__ = this;
var _25856__$1 = this;
return self__.meta25855;
});})(cs))
;

cljs.core.async.t_cljs$core$async25854.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25854.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25854.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25854.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25854.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25854.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25855","meta25855",-1773253510,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25854";

cljs.core.async.t_cljs$core$async25854.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25854");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25854.
 */
cljs.core.async.__GT_t_cljs$core$async25854 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25854(ch__$1,cs__$1,meta25855){
return (new cljs.core.async.t_cljs$core$async25854(ch__$1,cs__$1,meta25855));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25854(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25257__auto___26076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___26076,cs,m,dchan,dctr,done){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___26076,cs,m,dchan,dctr,done){
return (function (state_25991){
var state_val_25992 = (state_25991[(1)]);
if((state_val_25992 === (7))){
var inst_25987 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
var statearr_25993_26077 = state_25991__$1;
(statearr_25993_26077[(2)] = inst_25987);

(statearr_25993_26077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (20))){
var inst_25890 = (state_25991[(7)]);
var inst_25902 = cljs.core.first.call(null,inst_25890);
var inst_25903 = cljs.core.nth.call(null,inst_25902,(0),null);
var inst_25904 = cljs.core.nth.call(null,inst_25902,(1),null);
var state_25991__$1 = (function (){var statearr_25994 = state_25991;
(statearr_25994[(8)] = inst_25903);

return statearr_25994;
})();
if(cljs.core.truth_(inst_25904)){
var statearr_25995_26078 = state_25991__$1;
(statearr_25995_26078[(1)] = (22));

} else {
var statearr_25996_26079 = state_25991__$1;
(statearr_25996_26079[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (27))){
var inst_25859 = (state_25991[(9)]);
var inst_25932 = (state_25991[(10)]);
var inst_25934 = (state_25991[(11)]);
var inst_25939 = (state_25991[(12)]);
var inst_25939__$1 = cljs.core._nth.call(null,inst_25932,inst_25934);
var inst_25940 = cljs.core.async.put_BANG_.call(null,inst_25939__$1,inst_25859,done);
var state_25991__$1 = (function (){var statearr_25997 = state_25991;
(statearr_25997[(12)] = inst_25939__$1);

return statearr_25997;
})();
if(cljs.core.truth_(inst_25940)){
var statearr_25998_26080 = state_25991__$1;
(statearr_25998_26080[(1)] = (30));

} else {
var statearr_25999_26081 = state_25991__$1;
(statearr_25999_26081[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (1))){
var state_25991__$1 = state_25991;
var statearr_26000_26082 = state_25991__$1;
(statearr_26000_26082[(2)] = null);

(statearr_26000_26082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (24))){
var inst_25890 = (state_25991[(7)]);
var inst_25909 = (state_25991[(2)]);
var inst_25910 = cljs.core.next.call(null,inst_25890);
var inst_25868 = inst_25910;
var inst_25869 = null;
var inst_25870 = (0);
var inst_25871 = (0);
var state_25991__$1 = (function (){var statearr_26001 = state_25991;
(statearr_26001[(13)] = inst_25871);

(statearr_26001[(14)] = inst_25868);

(statearr_26001[(15)] = inst_25869);

(statearr_26001[(16)] = inst_25909);

(statearr_26001[(17)] = inst_25870);

return statearr_26001;
})();
var statearr_26002_26083 = state_25991__$1;
(statearr_26002_26083[(2)] = null);

(statearr_26002_26083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (39))){
var state_25991__$1 = state_25991;
var statearr_26006_26084 = state_25991__$1;
(statearr_26006_26084[(2)] = null);

(statearr_26006_26084[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (4))){
var inst_25859 = (state_25991[(9)]);
var inst_25859__$1 = (state_25991[(2)]);
var inst_25860 = (inst_25859__$1 == null);
var state_25991__$1 = (function (){var statearr_26007 = state_25991;
(statearr_26007[(9)] = inst_25859__$1);

return statearr_26007;
})();
if(cljs.core.truth_(inst_25860)){
var statearr_26008_26085 = state_25991__$1;
(statearr_26008_26085[(1)] = (5));

} else {
var statearr_26009_26086 = state_25991__$1;
(statearr_26009_26086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (15))){
var inst_25871 = (state_25991[(13)]);
var inst_25868 = (state_25991[(14)]);
var inst_25869 = (state_25991[(15)]);
var inst_25870 = (state_25991[(17)]);
var inst_25886 = (state_25991[(2)]);
var inst_25887 = (inst_25871 + (1));
var tmp26003 = inst_25868;
var tmp26004 = inst_25869;
var tmp26005 = inst_25870;
var inst_25868__$1 = tmp26003;
var inst_25869__$1 = tmp26004;
var inst_25870__$1 = tmp26005;
var inst_25871__$1 = inst_25887;
var state_25991__$1 = (function (){var statearr_26010 = state_25991;
(statearr_26010[(18)] = inst_25886);

(statearr_26010[(13)] = inst_25871__$1);

(statearr_26010[(14)] = inst_25868__$1);

(statearr_26010[(15)] = inst_25869__$1);

(statearr_26010[(17)] = inst_25870__$1);

return statearr_26010;
})();
var statearr_26011_26087 = state_25991__$1;
(statearr_26011_26087[(2)] = null);

(statearr_26011_26087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (21))){
var inst_25913 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
var statearr_26015_26088 = state_25991__$1;
(statearr_26015_26088[(2)] = inst_25913);

(statearr_26015_26088[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (31))){
var inst_25939 = (state_25991[(12)]);
var inst_25943 = done.call(null,null);
var inst_25944 = cljs.core.async.untap_STAR_.call(null,m,inst_25939);
var state_25991__$1 = (function (){var statearr_26016 = state_25991;
(statearr_26016[(19)] = inst_25943);

return statearr_26016;
})();
var statearr_26017_26089 = state_25991__$1;
(statearr_26017_26089[(2)] = inst_25944);

(statearr_26017_26089[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (32))){
var inst_25932 = (state_25991[(10)]);
var inst_25934 = (state_25991[(11)]);
var inst_25933 = (state_25991[(20)]);
var inst_25931 = (state_25991[(21)]);
var inst_25946 = (state_25991[(2)]);
var inst_25947 = (inst_25934 + (1));
var tmp26012 = inst_25932;
var tmp26013 = inst_25933;
var tmp26014 = inst_25931;
var inst_25931__$1 = tmp26014;
var inst_25932__$1 = tmp26012;
var inst_25933__$1 = tmp26013;
var inst_25934__$1 = inst_25947;
var state_25991__$1 = (function (){var statearr_26018 = state_25991;
(statearr_26018[(22)] = inst_25946);

(statearr_26018[(10)] = inst_25932__$1);

(statearr_26018[(11)] = inst_25934__$1);

(statearr_26018[(20)] = inst_25933__$1);

(statearr_26018[(21)] = inst_25931__$1);

return statearr_26018;
})();
var statearr_26019_26090 = state_25991__$1;
(statearr_26019_26090[(2)] = null);

(statearr_26019_26090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (40))){
var inst_25959 = (state_25991[(23)]);
var inst_25963 = done.call(null,null);
var inst_25964 = cljs.core.async.untap_STAR_.call(null,m,inst_25959);
var state_25991__$1 = (function (){var statearr_26020 = state_25991;
(statearr_26020[(24)] = inst_25963);

return statearr_26020;
})();
var statearr_26021_26091 = state_25991__$1;
(statearr_26021_26091[(2)] = inst_25964);

(statearr_26021_26091[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (33))){
var inst_25950 = (state_25991[(25)]);
var inst_25952 = cljs.core.chunked_seq_QMARK_.call(null,inst_25950);
var state_25991__$1 = state_25991;
if(inst_25952){
var statearr_26022_26092 = state_25991__$1;
(statearr_26022_26092[(1)] = (36));

} else {
var statearr_26023_26093 = state_25991__$1;
(statearr_26023_26093[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (13))){
var inst_25880 = (state_25991[(26)]);
var inst_25883 = cljs.core.async.close_BANG_.call(null,inst_25880);
var state_25991__$1 = state_25991;
var statearr_26024_26094 = state_25991__$1;
(statearr_26024_26094[(2)] = inst_25883);

(statearr_26024_26094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (22))){
var inst_25903 = (state_25991[(8)]);
var inst_25906 = cljs.core.async.close_BANG_.call(null,inst_25903);
var state_25991__$1 = state_25991;
var statearr_26025_26095 = state_25991__$1;
(statearr_26025_26095[(2)] = inst_25906);

(statearr_26025_26095[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (36))){
var inst_25950 = (state_25991[(25)]);
var inst_25954 = cljs.core.chunk_first.call(null,inst_25950);
var inst_25955 = cljs.core.chunk_rest.call(null,inst_25950);
var inst_25956 = cljs.core.count.call(null,inst_25954);
var inst_25931 = inst_25955;
var inst_25932 = inst_25954;
var inst_25933 = inst_25956;
var inst_25934 = (0);
var state_25991__$1 = (function (){var statearr_26026 = state_25991;
(statearr_26026[(10)] = inst_25932);

(statearr_26026[(11)] = inst_25934);

(statearr_26026[(20)] = inst_25933);

(statearr_26026[(21)] = inst_25931);

return statearr_26026;
})();
var statearr_26027_26096 = state_25991__$1;
(statearr_26027_26096[(2)] = null);

(statearr_26027_26096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (41))){
var inst_25950 = (state_25991[(25)]);
var inst_25966 = (state_25991[(2)]);
var inst_25967 = cljs.core.next.call(null,inst_25950);
var inst_25931 = inst_25967;
var inst_25932 = null;
var inst_25933 = (0);
var inst_25934 = (0);
var state_25991__$1 = (function (){var statearr_26028 = state_25991;
(statearr_26028[(10)] = inst_25932);

(statearr_26028[(11)] = inst_25934);

(statearr_26028[(27)] = inst_25966);

(statearr_26028[(20)] = inst_25933);

(statearr_26028[(21)] = inst_25931);

return statearr_26028;
})();
var statearr_26029_26097 = state_25991__$1;
(statearr_26029_26097[(2)] = null);

(statearr_26029_26097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (43))){
var state_25991__$1 = state_25991;
var statearr_26030_26098 = state_25991__$1;
(statearr_26030_26098[(2)] = null);

(statearr_26030_26098[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (29))){
var inst_25975 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
var statearr_26031_26099 = state_25991__$1;
(statearr_26031_26099[(2)] = inst_25975);

(statearr_26031_26099[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (44))){
var inst_25984 = (state_25991[(2)]);
var state_25991__$1 = (function (){var statearr_26032 = state_25991;
(statearr_26032[(28)] = inst_25984);

return statearr_26032;
})();
var statearr_26033_26100 = state_25991__$1;
(statearr_26033_26100[(2)] = null);

(statearr_26033_26100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (6))){
var inst_25923 = (state_25991[(29)]);
var inst_25922 = cljs.core.deref.call(null,cs);
var inst_25923__$1 = cljs.core.keys.call(null,inst_25922);
var inst_25924 = cljs.core.count.call(null,inst_25923__$1);
var inst_25925 = cljs.core.reset_BANG_.call(null,dctr,inst_25924);
var inst_25930 = cljs.core.seq.call(null,inst_25923__$1);
var inst_25931 = inst_25930;
var inst_25932 = null;
var inst_25933 = (0);
var inst_25934 = (0);
var state_25991__$1 = (function (){var statearr_26034 = state_25991;
(statearr_26034[(10)] = inst_25932);

(statearr_26034[(11)] = inst_25934);

(statearr_26034[(20)] = inst_25933);

(statearr_26034[(21)] = inst_25931);

(statearr_26034[(30)] = inst_25925);

(statearr_26034[(29)] = inst_25923__$1);

return statearr_26034;
})();
var statearr_26035_26101 = state_25991__$1;
(statearr_26035_26101[(2)] = null);

(statearr_26035_26101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (28))){
var inst_25931 = (state_25991[(21)]);
var inst_25950 = (state_25991[(25)]);
var inst_25950__$1 = cljs.core.seq.call(null,inst_25931);
var state_25991__$1 = (function (){var statearr_26036 = state_25991;
(statearr_26036[(25)] = inst_25950__$1);

return statearr_26036;
})();
if(inst_25950__$1){
var statearr_26037_26102 = state_25991__$1;
(statearr_26037_26102[(1)] = (33));

} else {
var statearr_26038_26103 = state_25991__$1;
(statearr_26038_26103[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (25))){
var inst_25934 = (state_25991[(11)]);
var inst_25933 = (state_25991[(20)]);
var inst_25936 = (inst_25934 < inst_25933);
var inst_25937 = inst_25936;
var state_25991__$1 = state_25991;
if(cljs.core.truth_(inst_25937)){
var statearr_26039_26104 = state_25991__$1;
(statearr_26039_26104[(1)] = (27));

} else {
var statearr_26040_26105 = state_25991__$1;
(statearr_26040_26105[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (34))){
var state_25991__$1 = state_25991;
var statearr_26041_26106 = state_25991__$1;
(statearr_26041_26106[(2)] = null);

(statearr_26041_26106[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (17))){
var state_25991__$1 = state_25991;
var statearr_26042_26107 = state_25991__$1;
(statearr_26042_26107[(2)] = null);

(statearr_26042_26107[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (3))){
var inst_25989 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25991__$1,inst_25989);
} else {
if((state_val_25992 === (12))){
var inst_25918 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
var statearr_26043_26108 = state_25991__$1;
(statearr_26043_26108[(2)] = inst_25918);

(statearr_26043_26108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (2))){
var state_25991__$1 = state_25991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25991__$1,(4),ch);
} else {
if((state_val_25992 === (23))){
var state_25991__$1 = state_25991;
var statearr_26044_26109 = state_25991__$1;
(statearr_26044_26109[(2)] = null);

(statearr_26044_26109[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (35))){
var inst_25973 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
var statearr_26045_26110 = state_25991__$1;
(statearr_26045_26110[(2)] = inst_25973);

(statearr_26045_26110[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (19))){
var inst_25890 = (state_25991[(7)]);
var inst_25894 = cljs.core.chunk_first.call(null,inst_25890);
var inst_25895 = cljs.core.chunk_rest.call(null,inst_25890);
var inst_25896 = cljs.core.count.call(null,inst_25894);
var inst_25868 = inst_25895;
var inst_25869 = inst_25894;
var inst_25870 = inst_25896;
var inst_25871 = (0);
var state_25991__$1 = (function (){var statearr_26046 = state_25991;
(statearr_26046[(13)] = inst_25871);

(statearr_26046[(14)] = inst_25868);

(statearr_26046[(15)] = inst_25869);

(statearr_26046[(17)] = inst_25870);

return statearr_26046;
})();
var statearr_26047_26111 = state_25991__$1;
(statearr_26047_26111[(2)] = null);

(statearr_26047_26111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (11))){
var inst_25868 = (state_25991[(14)]);
var inst_25890 = (state_25991[(7)]);
var inst_25890__$1 = cljs.core.seq.call(null,inst_25868);
var state_25991__$1 = (function (){var statearr_26048 = state_25991;
(statearr_26048[(7)] = inst_25890__$1);

return statearr_26048;
})();
if(inst_25890__$1){
var statearr_26049_26112 = state_25991__$1;
(statearr_26049_26112[(1)] = (16));

} else {
var statearr_26050_26113 = state_25991__$1;
(statearr_26050_26113[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (9))){
var inst_25920 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
var statearr_26051_26114 = state_25991__$1;
(statearr_26051_26114[(2)] = inst_25920);

(statearr_26051_26114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (5))){
var inst_25866 = cljs.core.deref.call(null,cs);
var inst_25867 = cljs.core.seq.call(null,inst_25866);
var inst_25868 = inst_25867;
var inst_25869 = null;
var inst_25870 = (0);
var inst_25871 = (0);
var state_25991__$1 = (function (){var statearr_26052 = state_25991;
(statearr_26052[(13)] = inst_25871);

(statearr_26052[(14)] = inst_25868);

(statearr_26052[(15)] = inst_25869);

(statearr_26052[(17)] = inst_25870);

return statearr_26052;
})();
var statearr_26053_26115 = state_25991__$1;
(statearr_26053_26115[(2)] = null);

(statearr_26053_26115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (14))){
var state_25991__$1 = state_25991;
var statearr_26054_26116 = state_25991__$1;
(statearr_26054_26116[(2)] = null);

(statearr_26054_26116[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (45))){
var inst_25981 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
var statearr_26055_26117 = state_25991__$1;
(statearr_26055_26117[(2)] = inst_25981);

(statearr_26055_26117[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (26))){
var inst_25923 = (state_25991[(29)]);
var inst_25977 = (state_25991[(2)]);
var inst_25978 = cljs.core.seq.call(null,inst_25923);
var state_25991__$1 = (function (){var statearr_26056 = state_25991;
(statearr_26056[(31)] = inst_25977);

return statearr_26056;
})();
if(inst_25978){
var statearr_26057_26118 = state_25991__$1;
(statearr_26057_26118[(1)] = (42));

} else {
var statearr_26058_26119 = state_25991__$1;
(statearr_26058_26119[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (16))){
var inst_25890 = (state_25991[(7)]);
var inst_25892 = cljs.core.chunked_seq_QMARK_.call(null,inst_25890);
var state_25991__$1 = state_25991;
if(inst_25892){
var statearr_26059_26120 = state_25991__$1;
(statearr_26059_26120[(1)] = (19));

} else {
var statearr_26060_26121 = state_25991__$1;
(statearr_26060_26121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (38))){
var inst_25970 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
var statearr_26061_26122 = state_25991__$1;
(statearr_26061_26122[(2)] = inst_25970);

(statearr_26061_26122[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (30))){
var state_25991__$1 = state_25991;
var statearr_26062_26123 = state_25991__$1;
(statearr_26062_26123[(2)] = null);

(statearr_26062_26123[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (10))){
var inst_25871 = (state_25991[(13)]);
var inst_25869 = (state_25991[(15)]);
var inst_25879 = cljs.core._nth.call(null,inst_25869,inst_25871);
var inst_25880 = cljs.core.nth.call(null,inst_25879,(0),null);
var inst_25881 = cljs.core.nth.call(null,inst_25879,(1),null);
var state_25991__$1 = (function (){var statearr_26063 = state_25991;
(statearr_26063[(26)] = inst_25880);

return statearr_26063;
})();
if(cljs.core.truth_(inst_25881)){
var statearr_26064_26124 = state_25991__$1;
(statearr_26064_26124[(1)] = (13));

} else {
var statearr_26065_26125 = state_25991__$1;
(statearr_26065_26125[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (18))){
var inst_25916 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
var statearr_26066_26126 = state_25991__$1;
(statearr_26066_26126[(2)] = inst_25916);

(statearr_26066_26126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (42))){
var state_25991__$1 = state_25991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25991__$1,(45),dchan);
} else {
if((state_val_25992 === (37))){
var inst_25859 = (state_25991[(9)]);
var inst_25959 = (state_25991[(23)]);
var inst_25950 = (state_25991[(25)]);
var inst_25959__$1 = cljs.core.first.call(null,inst_25950);
var inst_25960 = cljs.core.async.put_BANG_.call(null,inst_25959__$1,inst_25859,done);
var state_25991__$1 = (function (){var statearr_26067 = state_25991;
(statearr_26067[(23)] = inst_25959__$1);

return statearr_26067;
})();
if(cljs.core.truth_(inst_25960)){
var statearr_26068_26127 = state_25991__$1;
(statearr_26068_26127[(1)] = (39));

} else {
var statearr_26069_26128 = state_25991__$1;
(statearr_26069_26128[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (8))){
var inst_25871 = (state_25991[(13)]);
var inst_25870 = (state_25991[(17)]);
var inst_25873 = (inst_25871 < inst_25870);
var inst_25874 = inst_25873;
var state_25991__$1 = state_25991;
if(cljs.core.truth_(inst_25874)){
var statearr_26070_26129 = state_25991__$1;
(statearr_26070_26129[(1)] = (10));

} else {
var statearr_26071_26130 = state_25991__$1;
(statearr_26071_26130[(1)] = (11));

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
});})(c__25257__auto___26076,cs,m,dchan,dctr,done))
;
return ((function (switch__25162__auto__,c__25257__auto___26076,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25163__auto__ = null;
var cljs$core$async$mult_$_state_machine__25163__auto____0 = (function (){
var statearr_26072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26072[(0)] = cljs$core$async$mult_$_state_machine__25163__auto__);

(statearr_26072[(1)] = (1));

return statearr_26072;
});
var cljs$core$async$mult_$_state_machine__25163__auto____1 = (function (state_25991){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_25991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e26073){if((e26073 instanceof Object)){
var ex__25166__auto__ = e26073;
var statearr_26074_26131 = state_25991;
(statearr_26074_26131[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26132 = state_25991;
state_25991 = G__26132;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25163__auto__ = function(state_25991){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25163__auto____1.call(this,state_25991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25163__auto____0;
cljs$core$async$mult_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25163__auto____1;
return cljs$core$async$mult_$_state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___26076,cs,m,dchan,dctr,done))
})();
var state__25259__auto__ = (function (){var statearr_26075 = f__25258__auto__.call(null);
(statearr_26075[(6)] = c__25257__auto___26076);

return statearr_26075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___26076,cs,m,dchan,dctr,done))
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
var G__26134 = arguments.length;
switch (G__26134) {
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
var len__4641__auto___26146 = arguments.length;
var i__4642__auto___26147 = (0);
while(true){
if((i__4642__auto___26147 < len__4641__auto___26146)){
args__4647__auto__.push((arguments[i__4642__auto___26147]));

var G__26148 = (i__4642__auto___26147 + (1));
i__4642__auto___26147 = G__26148;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26140){
var map__26141 = p__26140;
var map__26141__$1 = (((((!((map__26141 == null))))?(((((map__26141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26141):map__26141);
var opts = map__26141__$1;
var statearr_26143_26149 = state;
(statearr_26143_26149[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__26141,map__26141__$1,opts){
return (function (val){
var statearr_26144_26150 = state;
(statearr_26144_26150[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26141,map__26141__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_26145_26151 = state;
(statearr_26145_26151[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26136){
var G__26137 = cljs.core.first.call(null,seq26136);
var seq26136__$1 = cljs.core.next.call(null,seq26136);
var G__26138 = cljs.core.first.call(null,seq26136__$1);
var seq26136__$2 = cljs.core.next.call(null,seq26136__$1);
var G__26139 = cljs.core.first.call(null,seq26136__$2);
var seq26136__$3 = cljs.core.next.call(null,seq26136__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26137,G__26138,G__26139,seq26136__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26152 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26152 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26153){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26153 = meta26153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26154,meta26153__$1){
var self__ = this;
var _26154__$1 = this;
return (new cljs.core.async.t_cljs$core$async26152(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26153__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26154){
var self__ = this;
var _26154__$1 = this;
return self__.meta26153;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26152.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26152.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26152.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26152.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26152.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26152.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26152.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26152.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26152.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26153","meta26153",-1267781885,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26152";

cljs.core.async.t_cljs$core$async26152.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26152");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26152.
 */
cljs.core.async.__GT_t_cljs$core$async26152 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26152(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26153){
return (new cljs.core.async.t_cljs$core$async26152(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26153));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26152(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25257__auto___26316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___26316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___26316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26256){
var state_val_26257 = (state_26256[(1)]);
if((state_val_26257 === (7))){
var inst_26171 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
var statearr_26258_26317 = state_26256__$1;
(statearr_26258_26317[(2)] = inst_26171);

(statearr_26258_26317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (20))){
var inst_26183 = (state_26256[(7)]);
var state_26256__$1 = state_26256;
var statearr_26259_26318 = state_26256__$1;
(statearr_26259_26318[(2)] = inst_26183);

(statearr_26259_26318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (27))){
var state_26256__$1 = state_26256;
var statearr_26260_26319 = state_26256__$1;
(statearr_26260_26319[(2)] = null);

(statearr_26260_26319[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (1))){
var inst_26158 = (state_26256[(8)]);
var inst_26158__$1 = calc_state.call(null);
var inst_26160 = (inst_26158__$1 == null);
var inst_26161 = cljs.core.not.call(null,inst_26160);
var state_26256__$1 = (function (){var statearr_26261 = state_26256;
(statearr_26261[(8)] = inst_26158__$1);

return statearr_26261;
})();
if(inst_26161){
var statearr_26262_26320 = state_26256__$1;
(statearr_26262_26320[(1)] = (2));

} else {
var statearr_26263_26321 = state_26256__$1;
(statearr_26263_26321[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (24))){
var inst_26216 = (state_26256[(9)]);
var inst_26207 = (state_26256[(10)]);
var inst_26230 = (state_26256[(11)]);
var inst_26230__$1 = inst_26207.call(null,inst_26216);
var state_26256__$1 = (function (){var statearr_26264 = state_26256;
(statearr_26264[(11)] = inst_26230__$1);

return statearr_26264;
})();
if(cljs.core.truth_(inst_26230__$1)){
var statearr_26265_26322 = state_26256__$1;
(statearr_26265_26322[(1)] = (29));

} else {
var statearr_26266_26323 = state_26256__$1;
(statearr_26266_26323[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (4))){
var inst_26174 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
if(cljs.core.truth_(inst_26174)){
var statearr_26267_26324 = state_26256__$1;
(statearr_26267_26324[(1)] = (8));

} else {
var statearr_26268_26325 = state_26256__$1;
(statearr_26268_26325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (15))){
var inst_26201 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
if(cljs.core.truth_(inst_26201)){
var statearr_26269_26326 = state_26256__$1;
(statearr_26269_26326[(1)] = (19));

} else {
var statearr_26270_26327 = state_26256__$1;
(statearr_26270_26327[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (21))){
var inst_26206 = (state_26256[(12)]);
var inst_26206__$1 = (state_26256[(2)]);
var inst_26207 = cljs.core.get.call(null,inst_26206__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26208 = cljs.core.get.call(null,inst_26206__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26209 = cljs.core.get.call(null,inst_26206__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26256__$1 = (function (){var statearr_26271 = state_26256;
(statearr_26271[(10)] = inst_26207);

(statearr_26271[(13)] = inst_26208);

(statearr_26271[(12)] = inst_26206__$1);

return statearr_26271;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26256__$1,(22),inst_26209);
} else {
if((state_val_26257 === (31))){
var inst_26238 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
if(cljs.core.truth_(inst_26238)){
var statearr_26272_26328 = state_26256__$1;
(statearr_26272_26328[(1)] = (32));

} else {
var statearr_26273_26329 = state_26256__$1;
(statearr_26273_26329[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (32))){
var inst_26215 = (state_26256[(14)]);
var state_26256__$1 = state_26256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26256__$1,(35),out,inst_26215);
} else {
if((state_val_26257 === (33))){
var inst_26206 = (state_26256[(12)]);
var inst_26183 = inst_26206;
var state_26256__$1 = (function (){var statearr_26274 = state_26256;
(statearr_26274[(7)] = inst_26183);

return statearr_26274;
})();
var statearr_26275_26330 = state_26256__$1;
(statearr_26275_26330[(2)] = null);

(statearr_26275_26330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (13))){
var inst_26183 = (state_26256[(7)]);
var inst_26190 = inst_26183.cljs$lang$protocol_mask$partition0$;
var inst_26191 = (inst_26190 & (64));
var inst_26192 = inst_26183.cljs$core$ISeq$;
var inst_26193 = (cljs.core.PROTOCOL_SENTINEL === inst_26192);
var inst_26194 = ((inst_26191) || (inst_26193));
var state_26256__$1 = state_26256;
if(cljs.core.truth_(inst_26194)){
var statearr_26276_26331 = state_26256__$1;
(statearr_26276_26331[(1)] = (16));

} else {
var statearr_26277_26332 = state_26256__$1;
(statearr_26277_26332[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (22))){
var inst_26216 = (state_26256[(9)]);
var inst_26215 = (state_26256[(14)]);
var inst_26214 = (state_26256[(2)]);
var inst_26215__$1 = cljs.core.nth.call(null,inst_26214,(0),null);
var inst_26216__$1 = cljs.core.nth.call(null,inst_26214,(1),null);
var inst_26217 = (inst_26215__$1 == null);
var inst_26218 = cljs.core._EQ_.call(null,inst_26216__$1,change);
var inst_26219 = ((inst_26217) || (inst_26218));
var state_26256__$1 = (function (){var statearr_26278 = state_26256;
(statearr_26278[(9)] = inst_26216__$1);

(statearr_26278[(14)] = inst_26215__$1);

return statearr_26278;
})();
if(cljs.core.truth_(inst_26219)){
var statearr_26279_26333 = state_26256__$1;
(statearr_26279_26333[(1)] = (23));

} else {
var statearr_26280_26334 = state_26256__$1;
(statearr_26280_26334[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (36))){
var inst_26206 = (state_26256[(12)]);
var inst_26183 = inst_26206;
var state_26256__$1 = (function (){var statearr_26281 = state_26256;
(statearr_26281[(7)] = inst_26183);

return statearr_26281;
})();
var statearr_26282_26335 = state_26256__$1;
(statearr_26282_26335[(2)] = null);

(statearr_26282_26335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (29))){
var inst_26230 = (state_26256[(11)]);
var state_26256__$1 = state_26256;
var statearr_26283_26336 = state_26256__$1;
(statearr_26283_26336[(2)] = inst_26230);

(statearr_26283_26336[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (6))){
var state_26256__$1 = state_26256;
var statearr_26284_26337 = state_26256__$1;
(statearr_26284_26337[(2)] = false);

(statearr_26284_26337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (28))){
var inst_26226 = (state_26256[(2)]);
var inst_26227 = calc_state.call(null);
var inst_26183 = inst_26227;
var state_26256__$1 = (function (){var statearr_26285 = state_26256;
(statearr_26285[(7)] = inst_26183);

(statearr_26285[(15)] = inst_26226);

return statearr_26285;
})();
var statearr_26286_26338 = state_26256__$1;
(statearr_26286_26338[(2)] = null);

(statearr_26286_26338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (25))){
var inst_26252 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
var statearr_26287_26339 = state_26256__$1;
(statearr_26287_26339[(2)] = inst_26252);

(statearr_26287_26339[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (34))){
var inst_26250 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
var statearr_26288_26340 = state_26256__$1;
(statearr_26288_26340[(2)] = inst_26250);

(statearr_26288_26340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (17))){
var state_26256__$1 = state_26256;
var statearr_26289_26341 = state_26256__$1;
(statearr_26289_26341[(2)] = false);

(statearr_26289_26341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (3))){
var state_26256__$1 = state_26256;
var statearr_26290_26342 = state_26256__$1;
(statearr_26290_26342[(2)] = false);

(statearr_26290_26342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (12))){
var inst_26254 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26256__$1,inst_26254);
} else {
if((state_val_26257 === (2))){
var inst_26158 = (state_26256[(8)]);
var inst_26163 = inst_26158.cljs$lang$protocol_mask$partition0$;
var inst_26164 = (inst_26163 & (64));
var inst_26165 = inst_26158.cljs$core$ISeq$;
var inst_26166 = (cljs.core.PROTOCOL_SENTINEL === inst_26165);
var inst_26167 = ((inst_26164) || (inst_26166));
var state_26256__$1 = state_26256;
if(cljs.core.truth_(inst_26167)){
var statearr_26291_26343 = state_26256__$1;
(statearr_26291_26343[(1)] = (5));

} else {
var statearr_26292_26344 = state_26256__$1;
(statearr_26292_26344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (23))){
var inst_26215 = (state_26256[(14)]);
var inst_26221 = (inst_26215 == null);
var state_26256__$1 = state_26256;
if(cljs.core.truth_(inst_26221)){
var statearr_26293_26345 = state_26256__$1;
(statearr_26293_26345[(1)] = (26));

} else {
var statearr_26294_26346 = state_26256__$1;
(statearr_26294_26346[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (35))){
var inst_26241 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
if(cljs.core.truth_(inst_26241)){
var statearr_26295_26347 = state_26256__$1;
(statearr_26295_26347[(1)] = (36));

} else {
var statearr_26296_26348 = state_26256__$1;
(statearr_26296_26348[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (19))){
var inst_26183 = (state_26256[(7)]);
var inst_26203 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26183);
var state_26256__$1 = state_26256;
var statearr_26297_26349 = state_26256__$1;
(statearr_26297_26349[(2)] = inst_26203);

(statearr_26297_26349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (11))){
var inst_26183 = (state_26256[(7)]);
var inst_26187 = (inst_26183 == null);
var inst_26188 = cljs.core.not.call(null,inst_26187);
var state_26256__$1 = state_26256;
if(inst_26188){
var statearr_26298_26350 = state_26256__$1;
(statearr_26298_26350[(1)] = (13));

} else {
var statearr_26299_26351 = state_26256__$1;
(statearr_26299_26351[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (9))){
var inst_26158 = (state_26256[(8)]);
var state_26256__$1 = state_26256;
var statearr_26300_26352 = state_26256__$1;
(statearr_26300_26352[(2)] = inst_26158);

(statearr_26300_26352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (5))){
var state_26256__$1 = state_26256;
var statearr_26301_26353 = state_26256__$1;
(statearr_26301_26353[(2)] = true);

(statearr_26301_26353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (14))){
var state_26256__$1 = state_26256;
var statearr_26302_26354 = state_26256__$1;
(statearr_26302_26354[(2)] = false);

(statearr_26302_26354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (26))){
var inst_26216 = (state_26256[(9)]);
var inst_26223 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26216);
var state_26256__$1 = state_26256;
var statearr_26303_26355 = state_26256__$1;
(statearr_26303_26355[(2)] = inst_26223);

(statearr_26303_26355[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (16))){
var state_26256__$1 = state_26256;
var statearr_26304_26356 = state_26256__$1;
(statearr_26304_26356[(2)] = true);

(statearr_26304_26356[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (38))){
var inst_26246 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
var statearr_26305_26357 = state_26256__$1;
(statearr_26305_26357[(2)] = inst_26246);

(statearr_26305_26357[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (30))){
var inst_26216 = (state_26256[(9)]);
var inst_26207 = (state_26256[(10)]);
var inst_26208 = (state_26256[(13)]);
var inst_26233 = cljs.core.empty_QMARK_.call(null,inst_26207);
var inst_26234 = inst_26208.call(null,inst_26216);
var inst_26235 = cljs.core.not.call(null,inst_26234);
var inst_26236 = ((inst_26233) && (inst_26235));
var state_26256__$1 = state_26256;
var statearr_26306_26358 = state_26256__$1;
(statearr_26306_26358[(2)] = inst_26236);

(statearr_26306_26358[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (10))){
var inst_26158 = (state_26256[(8)]);
var inst_26179 = (state_26256[(2)]);
var inst_26180 = cljs.core.get.call(null,inst_26179,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26181 = cljs.core.get.call(null,inst_26179,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26182 = cljs.core.get.call(null,inst_26179,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26183 = inst_26158;
var state_26256__$1 = (function (){var statearr_26307 = state_26256;
(statearr_26307[(16)] = inst_26180);

(statearr_26307[(7)] = inst_26183);

(statearr_26307[(17)] = inst_26182);

(statearr_26307[(18)] = inst_26181);

return statearr_26307;
})();
var statearr_26308_26359 = state_26256__$1;
(statearr_26308_26359[(2)] = null);

(statearr_26308_26359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (18))){
var inst_26198 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
var statearr_26309_26360 = state_26256__$1;
(statearr_26309_26360[(2)] = inst_26198);

(statearr_26309_26360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (37))){
var state_26256__$1 = state_26256;
var statearr_26310_26361 = state_26256__$1;
(statearr_26310_26361[(2)] = null);

(statearr_26310_26361[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (8))){
var inst_26158 = (state_26256[(8)]);
var inst_26176 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26158);
var state_26256__$1 = state_26256;
var statearr_26311_26362 = state_26256__$1;
(statearr_26311_26362[(2)] = inst_26176);

(statearr_26311_26362[(1)] = (10));


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
});})(c__25257__auto___26316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25162__auto__,c__25257__auto___26316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25163__auto__ = null;
var cljs$core$async$mix_$_state_machine__25163__auto____0 = (function (){
var statearr_26312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26312[(0)] = cljs$core$async$mix_$_state_machine__25163__auto__);

(statearr_26312[(1)] = (1));

return statearr_26312;
});
var cljs$core$async$mix_$_state_machine__25163__auto____1 = (function (state_26256){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_26256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e26313){if((e26313 instanceof Object)){
var ex__25166__auto__ = e26313;
var statearr_26314_26363 = state_26256;
(statearr_26314_26363[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26364 = state_26256;
state_26256 = G__26364;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25163__auto__ = function(state_26256){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25163__auto____1.call(this,state_26256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25163__auto____0;
cljs$core$async$mix_$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25163__auto____1;
return cljs$core$async$mix_$_state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___26316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25259__auto__ = (function (){var statearr_26315 = f__25258__auto__.call(null);
(statearr_26315[(6)] = c__25257__auto___26316);

return statearr_26315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___26316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__26366 = arguments.length;
switch (G__26366) {
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
var G__26370 = arguments.length;
switch (G__26370) {
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
return (function (p1__26368_SHARP_){
if(cljs.core.truth_(p1__26368_SHARP_.call(null,topic))){
return p1__26368_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26368_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26371 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26372){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26372 = meta26372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26373,meta26372__$1){
var self__ = this;
var _26373__$1 = this;
return (new cljs.core.async.t_cljs$core$async26371(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26372__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26373){
var self__ = this;
var _26373__$1 = this;
return self__.meta26372;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26371.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26372","meta26372",853510743,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26371";

cljs.core.async.t_cljs$core$async26371.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26371");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26371.
 */
cljs.core.async.__GT_t_cljs$core$async26371 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26371(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26372){
return (new cljs.core.async.t_cljs$core$async26371(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26372));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26371(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25257__auto___26491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___26491,mults,ensure_mult,p){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___26491,mults,ensure_mult,p){
return (function (state_26445){
var state_val_26446 = (state_26445[(1)]);
if((state_val_26446 === (7))){
var inst_26441 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26447_26492 = state_26445__$1;
(statearr_26447_26492[(2)] = inst_26441);

(statearr_26447_26492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (20))){
var state_26445__$1 = state_26445;
var statearr_26448_26493 = state_26445__$1;
(statearr_26448_26493[(2)] = null);

(statearr_26448_26493[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (1))){
var state_26445__$1 = state_26445;
var statearr_26449_26494 = state_26445__$1;
(statearr_26449_26494[(2)] = null);

(statearr_26449_26494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (24))){
var inst_26424 = (state_26445[(7)]);
var inst_26433 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26424);
var state_26445__$1 = state_26445;
var statearr_26450_26495 = state_26445__$1;
(statearr_26450_26495[(2)] = inst_26433);

(statearr_26450_26495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (4))){
var inst_26376 = (state_26445[(8)]);
var inst_26376__$1 = (state_26445[(2)]);
var inst_26377 = (inst_26376__$1 == null);
var state_26445__$1 = (function (){var statearr_26451 = state_26445;
(statearr_26451[(8)] = inst_26376__$1);

return statearr_26451;
})();
if(cljs.core.truth_(inst_26377)){
var statearr_26452_26496 = state_26445__$1;
(statearr_26452_26496[(1)] = (5));

} else {
var statearr_26453_26497 = state_26445__$1;
(statearr_26453_26497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (15))){
var inst_26418 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26454_26498 = state_26445__$1;
(statearr_26454_26498[(2)] = inst_26418);

(statearr_26454_26498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (21))){
var inst_26438 = (state_26445[(2)]);
var state_26445__$1 = (function (){var statearr_26455 = state_26445;
(statearr_26455[(9)] = inst_26438);

return statearr_26455;
})();
var statearr_26456_26499 = state_26445__$1;
(statearr_26456_26499[(2)] = null);

(statearr_26456_26499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (13))){
var inst_26400 = (state_26445[(10)]);
var inst_26402 = cljs.core.chunked_seq_QMARK_.call(null,inst_26400);
var state_26445__$1 = state_26445;
if(inst_26402){
var statearr_26457_26500 = state_26445__$1;
(statearr_26457_26500[(1)] = (16));

} else {
var statearr_26458_26501 = state_26445__$1;
(statearr_26458_26501[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (22))){
var inst_26430 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
if(cljs.core.truth_(inst_26430)){
var statearr_26459_26502 = state_26445__$1;
(statearr_26459_26502[(1)] = (23));

} else {
var statearr_26460_26503 = state_26445__$1;
(statearr_26460_26503[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (6))){
var inst_26426 = (state_26445[(11)]);
var inst_26424 = (state_26445[(7)]);
var inst_26376 = (state_26445[(8)]);
var inst_26424__$1 = topic_fn.call(null,inst_26376);
var inst_26425 = cljs.core.deref.call(null,mults);
var inst_26426__$1 = cljs.core.get.call(null,inst_26425,inst_26424__$1);
var state_26445__$1 = (function (){var statearr_26461 = state_26445;
(statearr_26461[(11)] = inst_26426__$1);

(statearr_26461[(7)] = inst_26424__$1);

return statearr_26461;
})();
if(cljs.core.truth_(inst_26426__$1)){
var statearr_26462_26504 = state_26445__$1;
(statearr_26462_26504[(1)] = (19));

} else {
var statearr_26463_26505 = state_26445__$1;
(statearr_26463_26505[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (25))){
var inst_26435 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26464_26506 = state_26445__$1;
(statearr_26464_26506[(2)] = inst_26435);

(statearr_26464_26506[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (17))){
var inst_26400 = (state_26445[(10)]);
var inst_26409 = cljs.core.first.call(null,inst_26400);
var inst_26410 = cljs.core.async.muxch_STAR_.call(null,inst_26409);
var inst_26411 = cljs.core.async.close_BANG_.call(null,inst_26410);
var inst_26412 = cljs.core.next.call(null,inst_26400);
var inst_26386 = inst_26412;
var inst_26387 = null;
var inst_26388 = (0);
var inst_26389 = (0);
var state_26445__$1 = (function (){var statearr_26465 = state_26445;
(statearr_26465[(12)] = inst_26386);

(statearr_26465[(13)] = inst_26387);

(statearr_26465[(14)] = inst_26411);

(statearr_26465[(15)] = inst_26388);

(statearr_26465[(16)] = inst_26389);

return statearr_26465;
})();
var statearr_26466_26507 = state_26445__$1;
(statearr_26466_26507[(2)] = null);

(statearr_26466_26507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (3))){
var inst_26443 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26445__$1,inst_26443);
} else {
if((state_val_26446 === (12))){
var inst_26420 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26467_26508 = state_26445__$1;
(statearr_26467_26508[(2)] = inst_26420);

(statearr_26467_26508[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (2))){
var state_26445__$1 = state_26445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26445__$1,(4),ch);
} else {
if((state_val_26446 === (23))){
var state_26445__$1 = state_26445;
var statearr_26468_26509 = state_26445__$1;
(statearr_26468_26509[(2)] = null);

(statearr_26468_26509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (19))){
var inst_26426 = (state_26445[(11)]);
var inst_26376 = (state_26445[(8)]);
var inst_26428 = cljs.core.async.muxch_STAR_.call(null,inst_26426);
var state_26445__$1 = state_26445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26445__$1,(22),inst_26428,inst_26376);
} else {
if((state_val_26446 === (11))){
var inst_26386 = (state_26445[(12)]);
var inst_26400 = (state_26445[(10)]);
var inst_26400__$1 = cljs.core.seq.call(null,inst_26386);
var state_26445__$1 = (function (){var statearr_26469 = state_26445;
(statearr_26469[(10)] = inst_26400__$1);

return statearr_26469;
})();
if(inst_26400__$1){
var statearr_26470_26510 = state_26445__$1;
(statearr_26470_26510[(1)] = (13));

} else {
var statearr_26471_26511 = state_26445__$1;
(statearr_26471_26511[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (9))){
var inst_26422 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26472_26512 = state_26445__$1;
(statearr_26472_26512[(2)] = inst_26422);

(statearr_26472_26512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (5))){
var inst_26383 = cljs.core.deref.call(null,mults);
var inst_26384 = cljs.core.vals.call(null,inst_26383);
var inst_26385 = cljs.core.seq.call(null,inst_26384);
var inst_26386 = inst_26385;
var inst_26387 = null;
var inst_26388 = (0);
var inst_26389 = (0);
var state_26445__$1 = (function (){var statearr_26473 = state_26445;
(statearr_26473[(12)] = inst_26386);

(statearr_26473[(13)] = inst_26387);

(statearr_26473[(15)] = inst_26388);

(statearr_26473[(16)] = inst_26389);

return statearr_26473;
})();
var statearr_26474_26513 = state_26445__$1;
(statearr_26474_26513[(2)] = null);

(statearr_26474_26513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (14))){
var state_26445__$1 = state_26445;
var statearr_26478_26514 = state_26445__$1;
(statearr_26478_26514[(2)] = null);

(statearr_26478_26514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (16))){
var inst_26400 = (state_26445[(10)]);
var inst_26404 = cljs.core.chunk_first.call(null,inst_26400);
var inst_26405 = cljs.core.chunk_rest.call(null,inst_26400);
var inst_26406 = cljs.core.count.call(null,inst_26404);
var inst_26386 = inst_26405;
var inst_26387 = inst_26404;
var inst_26388 = inst_26406;
var inst_26389 = (0);
var state_26445__$1 = (function (){var statearr_26479 = state_26445;
(statearr_26479[(12)] = inst_26386);

(statearr_26479[(13)] = inst_26387);

(statearr_26479[(15)] = inst_26388);

(statearr_26479[(16)] = inst_26389);

return statearr_26479;
})();
var statearr_26480_26515 = state_26445__$1;
(statearr_26480_26515[(2)] = null);

(statearr_26480_26515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (10))){
var inst_26386 = (state_26445[(12)]);
var inst_26387 = (state_26445[(13)]);
var inst_26388 = (state_26445[(15)]);
var inst_26389 = (state_26445[(16)]);
var inst_26394 = cljs.core._nth.call(null,inst_26387,inst_26389);
var inst_26395 = cljs.core.async.muxch_STAR_.call(null,inst_26394);
var inst_26396 = cljs.core.async.close_BANG_.call(null,inst_26395);
var inst_26397 = (inst_26389 + (1));
var tmp26475 = inst_26386;
var tmp26476 = inst_26387;
var tmp26477 = inst_26388;
var inst_26386__$1 = tmp26475;
var inst_26387__$1 = tmp26476;
var inst_26388__$1 = tmp26477;
var inst_26389__$1 = inst_26397;
var state_26445__$1 = (function (){var statearr_26481 = state_26445;
(statearr_26481[(12)] = inst_26386__$1);

(statearr_26481[(13)] = inst_26387__$1);

(statearr_26481[(15)] = inst_26388__$1);

(statearr_26481[(17)] = inst_26396);

(statearr_26481[(16)] = inst_26389__$1);

return statearr_26481;
})();
var statearr_26482_26516 = state_26445__$1;
(statearr_26482_26516[(2)] = null);

(statearr_26482_26516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (18))){
var inst_26415 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26483_26517 = state_26445__$1;
(statearr_26483_26517[(2)] = inst_26415);

(statearr_26483_26517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (8))){
var inst_26388 = (state_26445[(15)]);
var inst_26389 = (state_26445[(16)]);
var inst_26391 = (inst_26389 < inst_26388);
var inst_26392 = inst_26391;
var state_26445__$1 = state_26445;
if(cljs.core.truth_(inst_26392)){
var statearr_26484_26518 = state_26445__$1;
(statearr_26484_26518[(1)] = (10));

} else {
var statearr_26485_26519 = state_26445__$1;
(statearr_26485_26519[(1)] = (11));

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
});})(c__25257__auto___26491,mults,ensure_mult,p))
;
return ((function (switch__25162__auto__,c__25257__auto___26491,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25163__auto__ = null;
var cljs$core$async$state_machine__25163__auto____0 = (function (){
var statearr_26486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26486[(0)] = cljs$core$async$state_machine__25163__auto__);

(statearr_26486[(1)] = (1));

return statearr_26486;
});
var cljs$core$async$state_machine__25163__auto____1 = (function (state_26445){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_26445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e26487){if((e26487 instanceof Object)){
var ex__25166__auto__ = e26487;
var statearr_26488_26520 = state_26445;
(statearr_26488_26520[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26521 = state_26445;
state_26445 = G__26521;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$state_machine__25163__auto__ = function(state_26445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25163__auto____1.call(this,state_26445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25163__auto____0;
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25163__auto____1;
return cljs$core$async$state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___26491,mults,ensure_mult,p))
})();
var state__25259__auto__ = (function (){var statearr_26489 = f__25258__auto__.call(null);
(statearr_26489[(6)] = c__25257__auto___26491);

return statearr_26489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___26491,mults,ensure_mult,p))
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
var G__26523 = arguments.length;
switch (G__26523) {
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
var G__26526 = arguments.length;
switch (G__26526) {
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
var G__26529 = arguments.length;
switch (G__26529) {
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
var c__25257__auto___26596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___26596,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___26596,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26568){
var state_val_26569 = (state_26568[(1)]);
if((state_val_26569 === (7))){
var state_26568__$1 = state_26568;
var statearr_26570_26597 = state_26568__$1;
(statearr_26570_26597[(2)] = null);

(statearr_26570_26597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (1))){
var state_26568__$1 = state_26568;
var statearr_26571_26598 = state_26568__$1;
(statearr_26571_26598[(2)] = null);

(statearr_26571_26598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (4))){
var inst_26532 = (state_26568[(7)]);
var inst_26534 = (inst_26532 < cnt);
var state_26568__$1 = state_26568;
if(cljs.core.truth_(inst_26534)){
var statearr_26572_26599 = state_26568__$1;
(statearr_26572_26599[(1)] = (6));

} else {
var statearr_26573_26600 = state_26568__$1;
(statearr_26573_26600[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (15))){
var inst_26564 = (state_26568[(2)]);
var state_26568__$1 = state_26568;
var statearr_26574_26601 = state_26568__$1;
(statearr_26574_26601[(2)] = inst_26564);

(statearr_26574_26601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (13))){
var inst_26557 = cljs.core.async.close_BANG_.call(null,out);
var state_26568__$1 = state_26568;
var statearr_26575_26602 = state_26568__$1;
(statearr_26575_26602[(2)] = inst_26557);

(statearr_26575_26602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (6))){
var state_26568__$1 = state_26568;
var statearr_26576_26603 = state_26568__$1;
(statearr_26576_26603[(2)] = null);

(statearr_26576_26603[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (3))){
var inst_26566 = (state_26568[(2)]);
var state_26568__$1 = state_26568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26568__$1,inst_26566);
} else {
if((state_val_26569 === (12))){
var inst_26554 = (state_26568[(8)]);
var inst_26554__$1 = (state_26568[(2)]);
var inst_26555 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26554__$1);
var state_26568__$1 = (function (){var statearr_26577 = state_26568;
(statearr_26577[(8)] = inst_26554__$1);

return statearr_26577;
})();
if(cljs.core.truth_(inst_26555)){
var statearr_26578_26604 = state_26568__$1;
(statearr_26578_26604[(1)] = (13));

} else {
var statearr_26579_26605 = state_26568__$1;
(statearr_26579_26605[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (2))){
var inst_26531 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26532 = (0);
var state_26568__$1 = (function (){var statearr_26580 = state_26568;
(statearr_26580[(9)] = inst_26531);

(statearr_26580[(7)] = inst_26532);

return statearr_26580;
})();
var statearr_26581_26606 = state_26568__$1;
(statearr_26581_26606[(2)] = null);

(statearr_26581_26606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (11))){
var inst_26532 = (state_26568[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26568,(10),Object,null,(9));
var inst_26541 = chs__$1.call(null,inst_26532);
var inst_26542 = done.call(null,inst_26532);
var inst_26543 = cljs.core.async.take_BANG_.call(null,inst_26541,inst_26542);
var state_26568__$1 = state_26568;
var statearr_26582_26607 = state_26568__$1;
(statearr_26582_26607[(2)] = inst_26543);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26568__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (9))){
var inst_26532 = (state_26568[(7)]);
var inst_26545 = (state_26568[(2)]);
var inst_26546 = (inst_26532 + (1));
var inst_26532__$1 = inst_26546;
var state_26568__$1 = (function (){var statearr_26583 = state_26568;
(statearr_26583[(10)] = inst_26545);

(statearr_26583[(7)] = inst_26532__$1);

return statearr_26583;
})();
var statearr_26584_26608 = state_26568__$1;
(statearr_26584_26608[(2)] = null);

(statearr_26584_26608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (5))){
var inst_26552 = (state_26568[(2)]);
var state_26568__$1 = (function (){var statearr_26585 = state_26568;
(statearr_26585[(11)] = inst_26552);

return statearr_26585;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26568__$1,(12),dchan);
} else {
if((state_val_26569 === (14))){
var inst_26554 = (state_26568[(8)]);
var inst_26559 = cljs.core.apply.call(null,f,inst_26554);
var state_26568__$1 = state_26568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26568__$1,(16),out,inst_26559);
} else {
if((state_val_26569 === (16))){
var inst_26561 = (state_26568[(2)]);
var state_26568__$1 = (function (){var statearr_26586 = state_26568;
(statearr_26586[(12)] = inst_26561);

return statearr_26586;
})();
var statearr_26587_26609 = state_26568__$1;
(statearr_26587_26609[(2)] = null);

(statearr_26587_26609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (10))){
var inst_26536 = (state_26568[(2)]);
var inst_26537 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26568__$1 = (function (){var statearr_26588 = state_26568;
(statearr_26588[(13)] = inst_26536);

return statearr_26588;
})();
var statearr_26589_26610 = state_26568__$1;
(statearr_26589_26610[(2)] = inst_26537);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26568__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (8))){
var inst_26550 = (state_26568[(2)]);
var state_26568__$1 = state_26568;
var statearr_26590_26611 = state_26568__$1;
(statearr_26590_26611[(2)] = inst_26550);

(statearr_26590_26611[(1)] = (5));


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
});})(c__25257__auto___26596,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25162__auto__,c__25257__auto___26596,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25163__auto__ = null;
var cljs$core$async$state_machine__25163__auto____0 = (function (){
var statearr_26591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26591[(0)] = cljs$core$async$state_machine__25163__auto__);

(statearr_26591[(1)] = (1));

return statearr_26591;
});
var cljs$core$async$state_machine__25163__auto____1 = (function (state_26568){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_26568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e26592){if((e26592 instanceof Object)){
var ex__25166__auto__ = e26592;
var statearr_26593_26612 = state_26568;
(statearr_26593_26612[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26613 = state_26568;
state_26568 = G__26613;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$state_machine__25163__auto__ = function(state_26568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25163__auto____1.call(this,state_26568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25163__auto____0;
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25163__auto____1;
return cljs$core$async$state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___26596,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25259__auto__ = (function (){var statearr_26594 = f__25258__auto__.call(null);
(statearr_26594[(6)] = c__25257__auto___26596);

return statearr_26594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___26596,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__26616 = arguments.length;
switch (G__26616) {
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
var c__25257__auto___26670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___26670,out){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___26670,out){
return (function (state_26648){
var state_val_26649 = (state_26648[(1)]);
if((state_val_26649 === (7))){
var inst_26628 = (state_26648[(7)]);
var inst_26627 = (state_26648[(8)]);
var inst_26627__$1 = (state_26648[(2)]);
var inst_26628__$1 = cljs.core.nth.call(null,inst_26627__$1,(0),null);
var inst_26629 = cljs.core.nth.call(null,inst_26627__$1,(1),null);
var inst_26630 = (inst_26628__$1 == null);
var state_26648__$1 = (function (){var statearr_26650 = state_26648;
(statearr_26650[(7)] = inst_26628__$1);

(statearr_26650[(9)] = inst_26629);

(statearr_26650[(8)] = inst_26627__$1);

return statearr_26650;
})();
if(cljs.core.truth_(inst_26630)){
var statearr_26651_26671 = state_26648__$1;
(statearr_26651_26671[(1)] = (8));

} else {
var statearr_26652_26672 = state_26648__$1;
(statearr_26652_26672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (1))){
var inst_26617 = cljs.core.vec.call(null,chs);
var inst_26618 = inst_26617;
var state_26648__$1 = (function (){var statearr_26653 = state_26648;
(statearr_26653[(10)] = inst_26618);

return statearr_26653;
})();
var statearr_26654_26673 = state_26648__$1;
(statearr_26654_26673[(2)] = null);

(statearr_26654_26673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (4))){
var inst_26618 = (state_26648[(10)]);
var state_26648__$1 = state_26648;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26648__$1,(7),inst_26618);
} else {
if((state_val_26649 === (6))){
var inst_26644 = (state_26648[(2)]);
var state_26648__$1 = state_26648;
var statearr_26655_26674 = state_26648__$1;
(statearr_26655_26674[(2)] = inst_26644);

(statearr_26655_26674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (3))){
var inst_26646 = (state_26648[(2)]);
var state_26648__$1 = state_26648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26648__$1,inst_26646);
} else {
if((state_val_26649 === (2))){
var inst_26618 = (state_26648[(10)]);
var inst_26620 = cljs.core.count.call(null,inst_26618);
var inst_26621 = (inst_26620 > (0));
var state_26648__$1 = state_26648;
if(cljs.core.truth_(inst_26621)){
var statearr_26657_26675 = state_26648__$1;
(statearr_26657_26675[(1)] = (4));

} else {
var statearr_26658_26676 = state_26648__$1;
(statearr_26658_26676[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (11))){
var inst_26618 = (state_26648[(10)]);
var inst_26637 = (state_26648[(2)]);
var tmp26656 = inst_26618;
var inst_26618__$1 = tmp26656;
var state_26648__$1 = (function (){var statearr_26659 = state_26648;
(statearr_26659[(11)] = inst_26637);

(statearr_26659[(10)] = inst_26618__$1);

return statearr_26659;
})();
var statearr_26660_26677 = state_26648__$1;
(statearr_26660_26677[(2)] = null);

(statearr_26660_26677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (9))){
var inst_26628 = (state_26648[(7)]);
var state_26648__$1 = state_26648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26648__$1,(11),out,inst_26628);
} else {
if((state_val_26649 === (5))){
var inst_26642 = cljs.core.async.close_BANG_.call(null,out);
var state_26648__$1 = state_26648;
var statearr_26661_26678 = state_26648__$1;
(statearr_26661_26678[(2)] = inst_26642);

(statearr_26661_26678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (10))){
var inst_26640 = (state_26648[(2)]);
var state_26648__$1 = state_26648;
var statearr_26662_26679 = state_26648__$1;
(statearr_26662_26679[(2)] = inst_26640);

(statearr_26662_26679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (8))){
var inst_26628 = (state_26648[(7)]);
var inst_26618 = (state_26648[(10)]);
var inst_26629 = (state_26648[(9)]);
var inst_26627 = (state_26648[(8)]);
var inst_26632 = (function (){var cs = inst_26618;
var vec__26623 = inst_26627;
var v = inst_26628;
var c = inst_26629;
return ((function (cs,vec__26623,v,c,inst_26628,inst_26618,inst_26629,inst_26627,state_val_26649,c__25257__auto___26670,out){
return (function (p1__26614_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26614_SHARP_);
});
;})(cs,vec__26623,v,c,inst_26628,inst_26618,inst_26629,inst_26627,state_val_26649,c__25257__auto___26670,out))
})();
var inst_26633 = cljs.core.filterv.call(null,inst_26632,inst_26618);
var inst_26618__$1 = inst_26633;
var state_26648__$1 = (function (){var statearr_26663 = state_26648;
(statearr_26663[(10)] = inst_26618__$1);

return statearr_26663;
})();
var statearr_26664_26680 = state_26648__$1;
(statearr_26664_26680[(2)] = null);

(statearr_26664_26680[(1)] = (2));


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
});})(c__25257__auto___26670,out))
;
return ((function (switch__25162__auto__,c__25257__auto___26670,out){
return (function() {
var cljs$core$async$state_machine__25163__auto__ = null;
var cljs$core$async$state_machine__25163__auto____0 = (function (){
var statearr_26665 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26665[(0)] = cljs$core$async$state_machine__25163__auto__);

(statearr_26665[(1)] = (1));

return statearr_26665;
});
var cljs$core$async$state_machine__25163__auto____1 = (function (state_26648){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_26648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e26666){if((e26666 instanceof Object)){
var ex__25166__auto__ = e26666;
var statearr_26667_26681 = state_26648;
(statearr_26667_26681[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26682 = state_26648;
state_26648 = G__26682;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$state_machine__25163__auto__ = function(state_26648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25163__auto____1.call(this,state_26648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25163__auto____0;
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25163__auto____1;
return cljs$core$async$state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___26670,out))
})();
var state__25259__auto__ = (function (){var statearr_26668 = f__25258__auto__.call(null);
(statearr_26668[(6)] = c__25257__auto___26670);

return statearr_26668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___26670,out))
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
var G__26684 = arguments.length;
switch (G__26684) {
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
var c__25257__auto___26729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___26729,out){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___26729,out){
return (function (state_26708){
var state_val_26709 = (state_26708[(1)]);
if((state_val_26709 === (7))){
var inst_26690 = (state_26708[(7)]);
var inst_26690__$1 = (state_26708[(2)]);
var inst_26691 = (inst_26690__$1 == null);
var inst_26692 = cljs.core.not.call(null,inst_26691);
var state_26708__$1 = (function (){var statearr_26710 = state_26708;
(statearr_26710[(7)] = inst_26690__$1);

return statearr_26710;
})();
if(inst_26692){
var statearr_26711_26730 = state_26708__$1;
(statearr_26711_26730[(1)] = (8));

} else {
var statearr_26712_26731 = state_26708__$1;
(statearr_26712_26731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (1))){
var inst_26685 = (0);
var state_26708__$1 = (function (){var statearr_26713 = state_26708;
(statearr_26713[(8)] = inst_26685);

return statearr_26713;
})();
var statearr_26714_26732 = state_26708__$1;
(statearr_26714_26732[(2)] = null);

(statearr_26714_26732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (4))){
var state_26708__$1 = state_26708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26708__$1,(7),ch);
} else {
if((state_val_26709 === (6))){
var inst_26703 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26715_26733 = state_26708__$1;
(statearr_26715_26733[(2)] = inst_26703);

(statearr_26715_26733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (3))){
var inst_26705 = (state_26708[(2)]);
var inst_26706 = cljs.core.async.close_BANG_.call(null,out);
var state_26708__$1 = (function (){var statearr_26716 = state_26708;
(statearr_26716[(9)] = inst_26705);

return statearr_26716;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26708__$1,inst_26706);
} else {
if((state_val_26709 === (2))){
var inst_26685 = (state_26708[(8)]);
var inst_26687 = (inst_26685 < n);
var state_26708__$1 = state_26708;
if(cljs.core.truth_(inst_26687)){
var statearr_26717_26734 = state_26708__$1;
(statearr_26717_26734[(1)] = (4));

} else {
var statearr_26718_26735 = state_26708__$1;
(statearr_26718_26735[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (11))){
var inst_26685 = (state_26708[(8)]);
var inst_26695 = (state_26708[(2)]);
var inst_26696 = (inst_26685 + (1));
var inst_26685__$1 = inst_26696;
var state_26708__$1 = (function (){var statearr_26719 = state_26708;
(statearr_26719[(10)] = inst_26695);

(statearr_26719[(8)] = inst_26685__$1);

return statearr_26719;
})();
var statearr_26720_26736 = state_26708__$1;
(statearr_26720_26736[(2)] = null);

(statearr_26720_26736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (9))){
var state_26708__$1 = state_26708;
var statearr_26721_26737 = state_26708__$1;
(statearr_26721_26737[(2)] = null);

(statearr_26721_26737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (5))){
var state_26708__$1 = state_26708;
var statearr_26722_26738 = state_26708__$1;
(statearr_26722_26738[(2)] = null);

(statearr_26722_26738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (10))){
var inst_26700 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26723_26739 = state_26708__$1;
(statearr_26723_26739[(2)] = inst_26700);

(statearr_26723_26739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (8))){
var inst_26690 = (state_26708[(7)]);
var state_26708__$1 = state_26708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26708__$1,(11),out,inst_26690);
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
});})(c__25257__auto___26729,out))
;
return ((function (switch__25162__auto__,c__25257__auto___26729,out){
return (function() {
var cljs$core$async$state_machine__25163__auto__ = null;
var cljs$core$async$state_machine__25163__auto____0 = (function (){
var statearr_26724 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26724[(0)] = cljs$core$async$state_machine__25163__auto__);

(statearr_26724[(1)] = (1));

return statearr_26724;
});
var cljs$core$async$state_machine__25163__auto____1 = (function (state_26708){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_26708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e26725){if((e26725 instanceof Object)){
var ex__25166__auto__ = e26725;
var statearr_26726_26740 = state_26708;
(statearr_26726_26740[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26741 = state_26708;
state_26708 = G__26741;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$state_machine__25163__auto__ = function(state_26708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25163__auto____1.call(this,state_26708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25163__auto____0;
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25163__auto____1;
return cljs$core$async$state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___26729,out))
})();
var state__25259__auto__ = (function (){var statearr_26727 = f__25258__auto__.call(null);
(statearr_26727[(6)] = c__25257__auto___26729);

return statearr_26727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___26729,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26743 = (function (f,ch,meta26744){
this.f = f;
this.ch = ch;
this.meta26744 = meta26744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26745,meta26744__$1){
var self__ = this;
var _26745__$1 = this;
return (new cljs.core.async.t_cljs$core$async26743(self__.f,self__.ch,meta26744__$1));
});

cljs.core.async.t_cljs$core$async26743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26745){
var self__ = this;
var _26745__$1 = this;
return self__.meta26744;
});

cljs.core.async.t_cljs$core$async26743.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26743.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26743.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26743.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26743.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26746 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26746 = (function (f,ch,meta26744,_,fn1,meta26747){
this.f = f;
this.ch = ch;
this.meta26744 = meta26744;
this._ = _;
this.fn1 = fn1;
this.meta26747 = meta26747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26748,meta26747__$1){
var self__ = this;
var _26748__$1 = this;
return (new cljs.core.async.t_cljs$core$async26746(self__.f,self__.ch,self__.meta26744,self__._,self__.fn1,meta26747__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26746.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26748){
var self__ = this;
var _26748__$1 = this;
return self__.meta26747;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26746.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26746.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26742_SHARP_){
return f1.call(null,(((p1__26742_SHARP_ == null))?null:self__.f.call(null,p1__26742_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26746.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26744","meta26744",1461216746,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26743","cljs.core.async/t_cljs$core$async26743",-2102620262,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26747","meta26747",1532024212,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26746";

cljs.core.async.t_cljs$core$async26746.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26746");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26746.
 */
cljs.core.async.__GT_t_cljs$core$async26746 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26746(f__$1,ch__$1,meta26744__$1,___$2,fn1__$1,meta26747){
return (new cljs.core.async.t_cljs$core$async26746(f__$1,ch__$1,meta26744__$1,___$2,fn1__$1,meta26747));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26746(self__.f,self__.ch,self__.meta26744,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26743.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26743.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26744","meta26744",1461216746,null)], null);
});

cljs.core.async.t_cljs$core$async26743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26743";

cljs.core.async.t_cljs$core$async26743.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26743");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26743.
 */
cljs.core.async.__GT_t_cljs$core$async26743 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26743(f__$1,ch__$1,meta26744){
return (new cljs.core.async.t_cljs$core$async26743(f__$1,ch__$1,meta26744));
});

}

return (new cljs.core.async.t_cljs$core$async26743(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26749 = (function (f,ch,meta26750){
this.f = f;
this.ch = ch;
this.meta26750 = meta26750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26751,meta26750__$1){
var self__ = this;
var _26751__$1 = this;
return (new cljs.core.async.t_cljs$core$async26749(self__.f,self__.ch,meta26750__$1));
});

cljs.core.async.t_cljs$core$async26749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26751){
var self__ = this;
var _26751__$1 = this;
return self__.meta26750;
});

cljs.core.async.t_cljs$core$async26749.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26749.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26749.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26749.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26749.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26749.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26750","meta26750",364660246,null)], null);
});

cljs.core.async.t_cljs$core$async26749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26749";

cljs.core.async.t_cljs$core$async26749.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26749");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26749.
 */
cljs.core.async.__GT_t_cljs$core$async26749 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26749(f__$1,ch__$1,meta26750){
return (new cljs.core.async.t_cljs$core$async26749(f__$1,ch__$1,meta26750));
});

}

return (new cljs.core.async.t_cljs$core$async26749(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26752 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26752 = (function (p,ch,meta26753){
this.p = p;
this.ch = ch;
this.meta26753 = meta26753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26754,meta26753__$1){
var self__ = this;
var _26754__$1 = this;
return (new cljs.core.async.t_cljs$core$async26752(self__.p,self__.ch,meta26753__$1));
});

cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26754){
var self__ = this;
var _26754__$1 = this;
return self__.meta26753;
});

cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26753","meta26753",2014372375,null)], null);
});

cljs.core.async.t_cljs$core$async26752.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26752";

cljs.core.async.t_cljs$core$async26752.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26752");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26752.
 */
cljs.core.async.__GT_t_cljs$core$async26752 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26752(p__$1,ch__$1,meta26753){
return (new cljs.core.async.t_cljs$core$async26752(p__$1,ch__$1,meta26753));
});

}

return (new cljs.core.async.t_cljs$core$async26752(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26756 = arguments.length;
switch (G__26756) {
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
var c__25257__auto___26796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___26796,out){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___26796,out){
return (function (state_26777){
var state_val_26778 = (state_26777[(1)]);
if((state_val_26778 === (7))){
var inst_26773 = (state_26777[(2)]);
var state_26777__$1 = state_26777;
var statearr_26779_26797 = state_26777__$1;
(statearr_26779_26797[(2)] = inst_26773);

(statearr_26779_26797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (1))){
var state_26777__$1 = state_26777;
var statearr_26780_26798 = state_26777__$1;
(statearr_26780_26798[(2)] = null);

(statearr_26780_26798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (4))){
var inst_26759 = (state_26777[(7)]);
var inst_26759__$1 = (state_26777[(2)]);
var inst_26760 = (inst_26759__$1 == null);
var state_26777__$1 = (function (){var statearr_26781 = state_26777;
(statearr_26781[(7)] = inst_26759__$1);

return statearr_26781;
})();
if(cljs.core.truth_(inst_26760)){
var statearr_26782_26799 = state_26777__$1;
(statearr_26782_26799[(1)] = (5));

} else {
var statearr_26783_26800 = state_26777__$1;
(statearr_26783_26800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (6))){
var inst_26759 = (state_26777[(7)]);
var inst_26764 = p.call(null,inst_26759);
var state_26777__$1 = state_26777;
if(cljs.core.truth_(inst_26764)){
var statearr_26784_26801 = state_26777__$1;
(statearr_26784_26801[(1)] = (8));

} else {
var statearr_26785_26802 = state_26777__$1;
(statearr_26785_26802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (3))){
var inst_26775 = (state_26777[(2)]);
var state_26777__$1 = state_26777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26777__$1,inst_26775);
} else {
if((state_val_26778 === (2))){
var state_26777__$1 = state_26777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26777__$1,(4),ch);
} else {
if((state_val_26778 === (11))){
var inst_26767 = (state_26777[(2)]);
var state_26777__$1 = state_26777;
var statearr_26786_26803 = state_26777__$1;
(statearr_26786_26803[(2)] = inst_26767);

(statearr_26786_26803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (9))){
var state_26777__$1 = state_26777;
var statearr_26787_26804 = state_26777__$1;
(statearr_26787_26804[(2)] = null);

(statearr_26787_26804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (5))){
var inst_26762 = cljs.core.async.close_BANG_.call(null,out);
var state_26777__$1 = state_26777;
var statearr_26788_26805 = state_26777__$1;
(statearr_26788_26805[(2)] = inst_26762);

(statearr_26788_26805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (10))){
var inst_26770 = (state_26777[(2)]);
var state_26777__$1 = (function (){var statearr_26789 = state_26777;
(statearr_26789[(8)] = inst_26770);

return statearr_26789;
})();
var statearr_26790_26806 = state_26777__$1;
(statearr_26790_26806[(2)] = null);

(statearr_26790_26806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (8))){
var inst_26759 = (state_26777[(7)]);
var state_26777__$1 = state_26777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26777__$1,(11),out,inst_26759);
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
});})(c__25257__auto___26796,out))
;
return ((function (switch__25162__auto__,c__25257__auto___26796,out){
return (function() {
var cljs$core$async$state_machine__25163__auto__ = null;
var cljs$core$async$state_machine__25163__auto____0 = (function (){
var statearr_26791 = [null,null,null,null,null,null,null,null,null];
(statearr_26791[(0)] = cljs$core$async$state_machine__25163__auto__);

(statearr_26791[(1)] = (1));

return statearr_26791;
});
var cljs$core$async$state_machine__25163__auto____1 = (function (state_26777){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_26777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e26792){if((e26792 instanceof Object)){
var ex__25166__auto__ = e26792;
var statearr_26793_26807 = state_26777;
(statearr_26793_26807[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26808 = state_26777;
state_26777 = G__26808;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$state_machine__25163__auto__ = function(state_26777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25163__auto____1.call(this,state_26777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25163__auto____0;
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25163__auto____1;
return cljs$core$async$state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___26796,out))
})();
var state__25259__auto__ = (function (){var statearr_26794 = f__25258__auto__.call(null);
(statearr_26794[(6)] = c__25257__auto___26796);

return statearr_26794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___26796,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26810 = arguments.length;
switch (G__26810) {
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
var c__25257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto__){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto__){
return (function (state_26873){
var state_val_26874 = (state_26873[(1)]);
if((state_val_26874 === (7))){
var inst_26869 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
var statearr_26875_26913 = state_26873__$1;
(statearr_26875_26913[(2)] = inst_26869);

(statearr_26875_26913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (20))){
var inst_26839 = (state_26873[(7)]);
var inst_26850 = (state_26873[(2)]);
var inst_26851 = cljs.core.next.call(null,inst_26839);
var inst_26825 = inst_26851;
var inst_26826 = null;
var inst_26827 = (0);
var inst_26828 = (0);
var state_26873__$1 = (function (){var statearr_26876 = state_26873;
(statearr_26876[(8)] = inst_26825);

(statearr_26876[(9)] = inst_26850);

(statearr_26876[(10)] = inst_26827);

(statearr_26876[(11)] = inst_26826);

(statearr_26876[(12)] = inst_26828);

return statearr_26876;
})();
var statearr_26877_26914 = state_26873__$1;
(statearr_26877_26914[(2)] = null);

(statearr_26877_26914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (1))){
var state_26873__$1 = state_26873;
var statearr_26878_26915 = state_26873__$1;
(statearr_26878_26915[(2)] = null);

(statearr_26878_26915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (4))){
var inst_26814 = (state_26873[(13)]);
var inst_26814__$1 = (state_26873[(2)]);
var inst_26815 = (inst_26814__$1 == null);
var state_26873__$1 = (function (){var statearr_26879 = state_26873;
(statearr_26879[(13)] = inst_26814__$1);

return statearr_26879;
})();
if(cljs.core.truth_(inst_26815)){
var statearr_26880_26916 = state_26873__$1;
(statearr_26880_26916[(1)] = (5));

} else {
var statearr_26881_26917 = state_26873__$1;
(statearr_26881_26917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (15))){
var state_26873__$1 = state_26873;
var statearr_26885_26918 = state_26873__$1;
(statearr_26885_26918[(2)] = null);

(statearr_26885_26918[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (21))){
var state_26873__$1 = state_26873;
var statearr_26886_26919 = state_26873__$1;
(statearr_26886_26919[(2)] = null);

(statearr_26886_26919[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (13))){
var inst_26825 = (state_26873[(8)]);
var inst_26827 = (state_26873[(10)]);
var inst_26826 = (state_26873[(11)]);
var inst_26828 = (state_26873[(12)]);
var inst_26835 = (state_26873[(2)]);
var inst_26836 = (inst_26828 + (1));
var tmp26882 = inst_26825;
var tmp26883 = inst_26827;
var tmp26884 = inst_26826;
var inst_26825__$1 = tmp26882;
var inst_26826__$1 = tmp26884;
var inst_26827__$1 = tmp26883;
var inst_26828__$1 = inst_26836;
var state_26873__$1 = (function (){var statearr_26887 = state_26873;
(statearr_26887[(8)] = inst_26825__$1);

(statearr_26887[(10)] = inst_26827__$1);

(statearr_26887[(11)] = inst_26826__$1);

(statearr_26887[(14)] = inst_26835);

(statearr_26887[(12)] = inst_26828__$1);

return statearr_26887;
})();
var statearr_26888_26920 = state_26873__$1;
(statearr_26888_26920[(2)] = null);

(statearr_26888_26920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (22))){
var state_26873__$1 = state_26873;
var statearr_26889_26921 = state_26873__$1;
(statearr_26889_26921[(2)] = null);

(statearr_26889_26921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (6))){
var inst_26814 = (state_26873[(13)]);
var inst_26823 = f.call(null,inst_26814);
var inst_26824 = cljs.core.seq.call(null,inst_26823);
var inst_26825 = inst_26824;
var inst_26826 = null;
var inst_26827 = (0);
var inst_26828 = (0);
var state_26873__$1 = (function (){var statearr_26890 = state_26873;
(statearr_26890[(8)] = inst_26825);

(statearr_26890[(10)] = inst_26827);

(statearr_26890[(11)] = inst_26826);

(statearr_26890[(12)] = inst_26828);

return statearr_26890;
})();
var statearr_26891_26922 = state_26873__$1;
(statearr_26891_26922[(2)] = null);

(statearr_26891_26922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (17))){
var inst_26839 = (state_26873[(7)]);
var inst_26843 = cljs.core.chunk_first.call(null,inst_26839);
var inst_26844 = cljs.core.chunk_rest.call(null,inst_26839);
var inst_26845 = cljs.core.count.call(null,inst_26843);
var inst_26825 = inst_26844;
var inst_26826 = inst_26843;
var inst_26827 = inst_26845;
var inst_26828 = (0);
var state_26873__$1 = (function (){var statearr_26892 = state_26873;
(statearr_26892[(8)] = inst_26825);

(statearr_26892[(10)] = inst_26827);

(statearr_26892[(11)] = inst_26826);

(statearr_26892[(12)] = inst_26828);

return statearr_26892;
})();
var statearr_26893_26923 = state_26873__$1;
(statearr_26893_26923[(2)] = null);

(statearr_26893_26923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (3))){
var inst_26871 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26873__$1,inst_26871);
} else {
if((state_val_26874 === (12))){
var inst_26859 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
var statearr_26894_26924 = state_26873__$1;
(statearr_26894_26924[(2)] = inst_26859);

(statearr_26894_26924[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (2))){
var state_26873__$1 = state_26873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26873__$1,(4),in$);
} else {
if((state_val_26874 === (23))){
var inst_26867 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
var statearr_26895_26925 = state_26873__$1;
(statearr_26895_26925[(2)] = inst_26867);

(statearr_26895_26925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (19))){
var inst_26854 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
var statearr_26896_26926 = state_26873__$1;
(statearr_26896_26926[(2)] = inst_26854);

(statearr_26896_26926[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (11))){
var inst_26825 = (state_26873[(8)]);
var inst_26839 = (state_26873[(7)]);
var inst_26839__$1 = cljs.core.seq.call(null,inst_26825);
var state_26873__$1 = (function (){var statearr_26897 = state_26873;
(statearr_26897[(7)] = inst_26839__$1);

return statearr_26897;
})();
if(inst_26839__$1){
var statearr_26898_26927 = state_26873__$1;
(statearr_26898_26927[(1)] = (14));

} else {
var statearr_26899_26928 = state_26873__$1;
(statearr_26899_26928[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (9))){
var inst_26861 = (state_26873[(2)]);
var inst_26862 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26873__$1 = (function (){var statearr_26900 = state_26873;
(statearr_26900[(15)] = inst_26861);

return statearr_26900;
})();
if(cljs.core.truth_(inst_26862)){
var statearr_26901_26929 = state_26873__$1;
(statearr_26901_26929[(1)] = (21));

} else {
var statearr_26902_26930 = state_26873__$1;
(statearr_26902_26930[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (5))){
var inst_26817 = cljs.core.async.close_BANG_.call(null,out);
var state_26873__$1 = state_26873;
var statearr_26903_26931 = state_26873__$1;
(statearr_26903_26931[(2)] = inst_26817);

(statearr_26903_26931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (14))){
var inst_26839 = (state_26873[(7)]);
var inst_26841 = cljs.core.chunked_seq_QMARK_.call(null,inst_26839);
var state_26873__$1 = state_26873;
if(inst_26841){
var statearr_26904_26932 = state_26873__$1;
(statearr_26904_26932[(1)] = (17));

} else {
var statearr_26905_26933 = state_26873__$1;
(statearr_26905_26933[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (16))){
var inst_26857 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
var statearr_26906_26934 = state_26873__$1;
(statearr_26906_26934[(2)] = inst_26857);

(statearr_26906_26934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (10))){
var inst_26826 = (state_26873[(11)]);
var inst_26828 = (state_26873[(12)]);
var inst_26833 = cljs.core._nth.call(null,inst_26826,inst_26828);
var state_26873__$1 = state_26873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26873__$1,(13),out,inst_26833);
} else {
if((state_val_26874 === (18))){
var inst_26839 = (state_26873[(7)]);
var inst_26848 = cljs.core.first.call(null,inst_26839);
var state_26873__$1 = state_26873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26873__$1,(20),out,inst_26848);
} else {
if((state_val_26874 === (8))){
var inst_26827 = (state_26873[(10)]);
var inst_26828 = (state_26873[(12)]);
var inst_26830 = (inst_26828 < inst_26827);
var inst_26831 = inst_26830;
var state_26873__$1 = state_26873;
if(cljs.core.truth_(inst_26831)){
var statearr_26907_26935 = state_26873__$1;
(statearr_26907_26935[(1)] = (10));

} else {
var statearr_26908_26936 = state_26873__$1;
(statearr_26908_26936[(1)] = (11));

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
});})(c__25257__auto__))
;
return ((function (switch__25162__auto__,c__25257__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25163__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25163__auto____0 = (function (){
var statearr_26909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26909[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25163__auto__);

(statearr_26909[(1)] = (1));

return statearr_26909;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25163__auto____1 = (function (state_26873){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_26873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e26910){if((e26910 instanceof Object)){
var ex__25166__auto__ = e26910;
var statearr_26911_26937 = state_26873;
(statearr_26911_26937[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26938 = state_26873;
state_26873 = G__26938;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25163__auto__ = function(state_26873){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25163__auto____1.call(this,state_26873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25163__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25163__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto__))
})();
var state__25259__auto__ = (function (){var statearr_26912 = f__25258__auto__.call(null);
(statearr_26912[(6)] = c__25257__auto__);

return statearr_26912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto__))
);

return c__25257__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26940 = arguments.length;
switch (G__26940) {
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
var G__26943 = arguments.length;
switch (G__26943) {
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
var G__26946 = arguments.length;
switch (G__26946) {
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
var c__25257__auto___26993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___26993,out){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___26993,out){
return (function (state_26970){
var state_val_26971 = (state_26970[(1)]);
if((state_val_26971 === (7))){
var inst_26965 = (state_26970[(2)]);
var state_26970__$1 = state_26970;
var statearr_26972_26994 = state_26970__$1;
(statearr_26972_26994[(2)] = inst_26965);

(statearr_26972_26994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (1))){
var inst_26947 = null;
var state_26970__$1 = (function (){var statearr_26973 = state_26970;
(statearr_26973[(7)] = inst_26947);

return statearr_26973;
})();
var statearr_26974_26995 = state_26970__$1;
(statearr_26974_26995[(2)] = null);

(statearr_26974_26995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (4))){
var inst_26950 = (state_26970[(8)]);
var inst_26950__$1 = (state_26970[(2)]);
var inst_26951 = (inst_26950__$1 == null);
var inst_26952 = cljs.core.not.call(null,inst_26951);
var state_26970__$1 = (function (){var statearr_26975 = state_26970;
(statearr_26975[(8)] = inst_26950__$1);

return statearr_26975;
})();
if(inst_26952){
var statearr_26976_26996 = state_26970__$1;
(statearr_26976_26996[(1)] = (5));

} else {
var statearr_26977_26997 = state_26970__$1;
(statearr_26977_26997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (6))){
var state_26970__$1 = state_26970;
var statearr_26978_26998 = state_26970__$1;
(statearr_26978_26998[(2)] = null);

(statearr_26978_26998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (3))){
var inst_26967 = (state_26970[(2)]);
var inst_26968 = cljs.core.async.close_BANG_.call(null,out);
var state_26970__$1 = (function (){var statearr_26979 = state_26970;
(statearr_26979[(9)] = inst_26967);

return statearr_26979;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26970__$1,inst_26968);
} else {
if((state_val_26971 === (2))){
var state_26970__$1 = state_26970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26970__$1,(4),ch);
} else {
if((state_val_26971 === (11))){
var inst_26950 = (state_26970[(8)]);
var inst_26959 = (state_26970[(2)]);
var inst_26947 = inst_26950;
var state_26970__$1 = (function (){var statearr_26980 = state_26970;
(statearr_26980[(7)] = inst_26947);

(statearr_26980[(10)] = inst_26959);

return statearr_26980;
})();
var statearr_26981_26999 = state_26970__$1;
(statearr_26981_26999[(2)] = null);

(statearr_26981_26999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (9))){
var inst_26950 = (state_26970[(8)]);
var state_26970__$1 = state_26970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26970__$1,(11),out,inst_26950);
} else {
if((state_val_26971 === (5))){
var inst_26947 = (state_26970[(7)]);
var inst_26950 = (state_26970[(8)]);
var inst_26954 = cljs.core._EQ_.call(null,inst_26950,inst_26947);
var state_26970__$1 = state_26970;
if(inst_26954){
var statearr_26983_27000 = state_26970__$1;
(statearr_26983_27000[(1)] = (8));

} else {
var statearr_26984_27001 = state_26970__$1;
(statearr_26984_27001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (10))){
var inst_26962 = (state_26970[(2)]);
var state_26970__$1 = state_26970;
var statearr_26985_27002 = state_26970__$1;
(statearr_26985_27002[(2)] = inst_26962);

(statearr_26985_27002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (8))){
var inst_26947 = (state_26970[(7)]);
var tmp26982 = inst_26947;
var inst_26947__$1 = tmp26982;
var state_26970__$1 = (function (){var statearr_26986 = state_26970;
(statearr_26986[(7)] = inst_26947__$1);

return statearr_26986;
})();
var statearr_26987_27003 = state_26970__$1;
(statearr_26987_27003[(2)] = null);

(statearr_26987_27003[(1)] = (2));


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
});})(c__25257__auto___26993,out))
;
return ((function (switch__25162__auto__,c__25257__auto___26993,out){
return (function() {
var cljs$core$async$state_machine__25163__auto__ = null;
var cljs$core$async$state_machine__25163__auto____0 = (function (){
var statearr_26988 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26988[(0)] = cljs$core$async$state_machine__25163__auto__);

(statearr_26988[(1)] = (1));

return statearr_26988;
});
var cljs$core$async$state_machine__25163__auto____1 = (function (state_26970){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_26970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e26989){if((e26989 instanceof Object)){
var ex__25166__auto__ = e26989;
var statearr_26990_27004 = state_26970;
(statearr_26990_27004[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27005 = state_26970;
state_26970 = G__27005;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$state_machine__25163__auto__ = function(state_26970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25163__auto____1.call(this,state_26970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25163__auto____0;
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25163__auto____1;
return cljs$core$async$state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___26993,out))
})();
var state__25259__auto__ = (function (){var statearr_26991 = f__25258__auto__.call(null);
(statearr_26991[(6)] = c__25257__auto___26993);

return statearr_26991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___26993,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27007 = arguments.length;
switch (G__27007) {
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
var c__25257__auto___27073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___27073,out){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___27073,out){
return (function (state_27045){
var state_val_27046 = (state_27045[(1)]);
if((state_val_27046 === (7))){
var inst_27041 = (state_27045[(2)]);
var state_27045__$1 = state_27045;
var statearr_27047_27074 = state_27045__$1;
(statearr_27047_27074[(2)] = inst_27041);

(statearr_27047_27074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (1))){
var inst_27008 = (new Array(n));
var inst_27009 = inst_27008;
var inst_27010 = (0);
var state_27045__$1 = (function (){var statearr_27048 = state_27045;
(statearr_27048[(7)] = inst_27010);

(statearr_27048[(8)] = inst_27009);

return statearr_27048;
})();
var statearr_27049_27075 = state_27045__$1;
(statearr_27049_27075[(2)] = null);

(statearr_27049_27075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (4))){
var inst_27013 = (state_27045[(9)]);
var inst_27013__$1 = (state_27045[(2)]);
var inst_27014 = (inst_27013__$1 == null);
var inst_27015 = cljs.core.not.call(null,inst_27014);
var state_27045__$1 = (function (){var statearr_27050 = state_27045;
(statearr_27050[(9)] = inst_27013__$1);

return statearr_27050;
})();
if(inst_27015){
var statearr_27051_27076 = state_27045__$1;
(statearr_27051_27076[(1)] = (5));

} else {
var statearr_27052_27077 = state_27045__$1;
(statearr_27052_27077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (15))){
var inst_27035 = (state_27045[(2)]);
var state_27045__$1 = state_27045;
var statearr_27053_27078 = state_27045__$1;
(statearr_27053_27078[(2)] = inst_27035);

(statearr_27053_27078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (13))){
var state_27045__$1 = state_27045;
var statearr_27054_27079 = state_27045__$1;
(statearr_27054_27079[(2)] = null);

(statearr_27054_27079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (6))){
var inst_27010 = (state_27045[(7)]);
var inst_27031 = (inst_27010 > (0));
var state_27045__$1 = state_27045;
if(cljs.core.truth_(inst_27031)){
var statearr_27055_27080 = state_27045__$1;
(statearr_27055_27080[(1)] = (12));

} else {
var statearr_27056_27081 = state_27045__$1;
(statearr_27056_27081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (3))){
var inst_27043 = (state_27045[(2)]);
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27045__$1,inst_27043);
} else {
if((state_val_27046 === (12))){
var inst_27009 = (state_27045[(8)]);
var inst_27033 = cljs.core.vec.call(null,inst_27009);
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27045__$1,(15),out,inst_27033);
} else {
if((state_val_27046 === (2))){
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27045__$1,(4),ch);
} else {
if((state_val_27046 === (11))){
var inst_27025 = (state_27045[(2)]);
var inst_27026 = (new Array(n));
var inst_27009 = inst_27026;
var inst_27010 = (0);
var state_27045__$1 = (function (){var statearr_27057 = state_27045;
(statearr_27057[(7)] = inst_27010);

(statearr_27057[(10)] = inst_27025);

(statearr_27057[(8)] = inst_27009);

return statearr_27057;
})();
var statearr_27058_27082 = state_27045__$1;
(statearr_27058_27082[(2)] = null);

(statearr_27058_27082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (9))){
var inst_27009 = (state_27045[(8)]);
var inst_27023 = cljs.core.vec.call(null,inst_27009);
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27045__$1,(11),out,inst_27023);
} else {
if((state_val_27046 === (5))){
var inst_27018 = (state_27045[(11)]);
var inst_27010 = (state_27045[(7)]);
var inst_27013 = (state_27045[(9)]);
var inst_27009 = (state_27045[(8)]);
var inst_27017 = (inst_27009[inst_27010] = inst_27013);
var inst_27018__$1 = (inst_27010 + (1));
var inst_27019 = (inst_27018__$1 < n);
var state_27045__$1 = (function (){var statearr_27059 = state_27045;
(statearr_27059[(11)] = inst_27018__$1);

(statearr_27059[(12)] = inst_27017);

return statearr_27059;
})();
if(cljs.core.truth_(inst_27019)){
var statearr_27060_27083 = state_27045__$1;
(statearr_27060_27083[(1)] = (8));

} else {
var statearr_27061_27084 = state_27045__$1;
(statearr_27061_27084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (14))){
var inst_27038 = (state_27045[(2)]);
var inst_27039 = cljs.core.async.close_BANG_.call(null,out);
var state_27045__$1 = (function (){var statearr_27063 = state_27045;
(statearr_27063[(13)] = inst_27038);

return statearr_27063;
})();
var statearr_27064_27085 = state_27045__$1;
(statearr_27064_27085[(2)] = inst_27039);

(statearr_27064_27085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (10))){
var inst_27029 = (state_27045[(2)]);
var state_27045__$1 = state_27045;
var statearr_27065_27086 = state_27045__$1;
(statearr_27065_27086[(2)] = inst_27029);

(statearr_27065_27086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (8))){
var inst_27018 = (state_27045[(11)]);
var inst_27009 = (state_27045[(8)]);
var tmp27062 = inst_27009;
var inst_27009__$1 = tmp27062;
var inst_27010 = inst_27018;
var state_27045__$1 = (function (){var statearr_27066 = state_27045;
(statearr_27066[(7)] = inst_27010);

(statearr_27066[(8)] = inst_27009__$1);

return statearr_27066;
})();
var statearr_27067_27087 = state_27045__$1;
(statearr_27067_27087[(2)] = null);

(statearr_27067_27087[(1)] = (2));


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
});})(c__25257__auto___27073,out))
;
return ((function (switch__25162__auto__,c__25257__auto___27073,out){
return (function() {
var cljs$core$async$state_machine__25163__auto__ = null;
var cljs$core$async$state_machine__25163__auto____0 = (function (){
var statearr_27068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27068[(0)] = cljs$core$async$state_machine__25163__auto__);

(statearr_27068[(1)] = (1));

return statearr_27068;
});
var cljs$core$async$state_machine__25163__auto____1 = (function (state_27045){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_27045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e27069){if((e27069 instanceof Object)){
var ex__25166__auto__ = e27069;
var statearr_27070_27088 = state_27045;
(statearr_27070_27088[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27089 = state_27045;
state_27045 = G__27089;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$state_machine__25163__auto__ = function(state_27045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25163__auto____1.call(this,state_27045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25163__auto____0;
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25163__auto____1;
return cljs$core$async$state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___27073,out))
})();
var state__25259__auto__ = (function (){var statearr_27071 = f__25258__auto__.call(null);
(statearr_27071[(6)] = c__25257__auto___27073);

return statearr_27071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___27073,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27091 = arguments.length;
switch (G__27091) {
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
var c__25257__auto___27161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25257__auto___27161,out){
return (function (){
var f__25258__auto__ = (function (){var switch__25162__auto__ = ((function (c__25257__auto___27161,out){
return (function (state_27133){
var state_val_27134 = (state_27133[(1)]);
if((state_val_27134 === (7))){
var inst_27129 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
var statearr_27135_27162 = state_27133__$1;
(statearr_27135_27162[(2)] = inst_27129);

(statearr_27135_27162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (1))){
var inst_27092 = [];
var inst_27093 = inst_27092;
var inst_27094 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27133__$1 = (function (){var statearr_27136 = state_27133;
(statearr_27136[(7)] = inst_27094);

(statearr_27136[(8)] = inst_27093);

return statearr_27136;
})();
var statearr_27137_27163 = state_27133__$1;
(statearr_27137_27163[(2)] = null);

(statearr_27137_27163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (4))){
var inst_27097 = (state_27133[(9)]);
var inst_27097__$1 = (state_27133[(2)]);
var inst_27098 = (inst_27097__$1 == null);
var inst_27099 = cljs.core.not.call(null,inst_27098);
var state_27133__$1 = (function (){var statearr_27138 = state_27133;
(statearr_27138[(9)] = inst_27097__$1);

return statearr_27138;
})();
if(inst_27099){
var statearr_27139_27164 = state_27133__$1;
(statearr_27139_27164[(1)] = (5));

} else {
var statearr_27140_27165 = state_27133__$1;
(statearr_27140_27165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (15))){
var inst_27123 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
var statearr_27141_27166 = state_27133__$1;
(statearr_27141_27166[(2)] = inst_27123);

(statearr_27141_27166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (13))){
var state_27133__$1 = state_27133;
var statearr_27142_27167 = state_27133__$1;
(statearr_27142_27167[(2)] = null);

(statearr_27142_27167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (6))){
var inst_27093 = (state_27133[(8)]);
var inst_27118 = inst_27093.length;
var inst_27119 = (inst_27118 > (0));
var state_27133__$1 = state_27133;
if(cljs.core.truth_(inst_27119)){
var statearr_27143_27168 = state_27133__$1;
(statearr_27143_27168[(1)] = (12));

} else {
var statearr_27144_27169 = state_27133__$1;
(statearr_27144_27169[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (3))){
var inst_27131 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27133__$1,inst_27131);
} else {
if((state_val_27134 === (12))){
var inst_27093 = (state_27133[(8)]);
var inst_27121 = cljs.core.vec.call(null,inst_27093);
var state_27133__$1 = state_27133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27133__$1,(15),out,inst_27121);
} else {
if((state_val_27134 === (2))){
var state_27133__$1 = state_27133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27133__$1,(4),ch);
} else {
if((state_val_27134 === (11))){
var inst_27097 = (state_27133[(9)]);
var inst_27101 = (state_27133[(10)]);
var inst_27111 = (state_27133[(2)]);
var inst_27112 = [];
var inst_27113 = inst_27112.push(inst_27097);
var inst_27093 = inst_27112;
var inst_27094 = inst_27101;
var state_27133__$1 = (function (){var statearr_27145 = state_27133;
(statearr_27145[(11)] = inst_27113);

(statearr_27145[(7)] = inst_27094);

(statearr_27145[(12)] = inst_27111);

(statearr_27145[(8)] = inst_27093);

return statearr_27145;
})();
var statearr_27146_27170 = state_27133__$1;
(statearr_27146_27170[(2)] = null);

(statearr_27146_27170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (9))){
var inst_27093 = (state_27133[(8)]);
var inst_27109 = cljs.core.vec.call(null,inst_27093);
var state_27133__$1 = state_27133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27133__$1,(11),out,inst_27109);
} else {
if((state_val_27134 === (5))){
var inst_27094 = (state_27133[(7)]);
var inst_27097 = (state_27133[(9)]);
var inst_27101 = (state_27133[(10)]);
var inst_27101__$1 = f.call(null,inst_27097);
var inst_27102 = cljs.core._EQ_.call(null,inst_27101__$1,inst_27094);
var inst_27103 = cljs.core.keyword_identical_QMARK_.call(null,inst_27094,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27104 = ((inst_27102) || (inst_27103));
var state_27133__$1 = (function (){var statearr_27147 = state_27133;
(statearr_27147[(10)] = inst_27101__$1);

return statearr_27147;
})();
if(cljs.core.truth_(inst_27104)){
var statearr_27148_27171 = state_27133__$1;
(statearr_27148_27171[(1)] = (8));

} else {
var statearr_27149_27172 = state_27133__$1;
(statearr_27149_27172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (14))){
var inst_27126 = (state_27133[(2)]);
var inst_27127 = cljs.core.async.close_BANG_.call(null,out);
var state_27133__$1 = (function (){var statearr_27151 = state_27133;
(statearr_27151[(13)] = inst_27126);

return statearr_27151;
})();
var statearr_27152_27173 = state_27133__$1;
(statearr_27152_27173[(2)] = inst_27127);

(statearr_27152_27173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (10))){
var inst_27116 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
var statearr_27153_27174 = state_27133__$1;
(statearr_27153_27174[(2)] = inst_27116);

(statearr_27153_27174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (8))){
var inst_27097 = (state_27133[(9)]);
var inst_27093 = (state_27133[(8)]);
var inst_27101 = (state_27133[(10)]);
var inst_27106 = inst_27093.push(inst_27097);
var tmp27150 = inst_27093;
var inst_27093__$1 = tmp27150;
var inst_27094 = inst_27101;
var state_27133__$1 = (function (){var statearr_27154 = state_27133;
(statearr_27154[(7)] = inst_27094);

(statearr_27154[(14)] = inst_27106);

(statearr_27154[(8)] = inst_27093__$1);

return statearr_27154;
})();
var statearr_27155_27175 = state_27133__$1;
(statearr_27155_27175[(2)] = null);

(statearr_27155_27175[(1)] = (2));


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
});})(c__25257__auto___27161,out))
;
return ((function (switch__25162__auto__,c__25257__auto___27161,out){
return (function() {
var cljs$core$async$state_machine__25163__auto__ = null;
var cljs$core$async$state_machine__25163__auto____0 = (function (){
var statearr_27156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27156[(0)] = cljs$core$async$state_machine__25163__auto__);

(statearr_27156[(1)] = (1));

return statearr_27156;
});
var cljs$core$async$state_machine__25163__auto____1 = (function (state_27133){
while(true){
var ret_value__25164__auto__ = (function (){try{while(true){
var result__25165__auto__ = switch__25162__auto__.call(null,state_27133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25165__auto__;
}
break;
}
}catch (e27157){if((e27157 instanceof Object)){
var ex__25166__auto__ = e27157;
var statearr_27158_27176 = state_27133;
(statearr_27158_27176[(5)] = ex__25166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27177 = state_27133;
state_27133 = G__27177;
continue;
} else {
return ret_value__25164__auto__;
}
break;
}
});
cljs$core$async$state_machine__25163__auto__ = function(state_27133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25163__auto____1.call(this,state_27133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25163__auto____0;
cljs$core$async$state_machine__25163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25163__auto____1;
return cljs$core$async$state_machine__25163__auto__;
})()
;})(switch__25162__auto__,c__25257__auto___27161,out))
})();
var state__25259__auto__ = (function (){var statearr_27159 = f__25258__auto__.call(null);
(statearr_27159[(6)] = c__25257__auto___27161);

return statearr_27159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25259__auto__);
});})(c__25257__auto___27161,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1546104244953
