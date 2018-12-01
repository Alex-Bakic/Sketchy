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
var G__24494 = arguments.length;
switch (G__24494) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24495 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24495 = (function (f,blockable,meta24496){
this.f = f;
this.blockable = blockable;
this.meta24496 = meta24496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24497,meta24496__$1){
var self__ = this;
var _24497__$1 = this;
return (new cljs.core.async.t_cljs$core$async24495(self__.f,self__.blockable,meta24496__$1));
});

cljs.core.async.t_cljs$core$async24495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24497){
var self__ = this;
var _24497__$1 = this;
return self__.meta24496;
});

cljs.core.async.t_cljs$core$async24495.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24495.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24495.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24495.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24496","meta24496",1090037180,null)], null);
});

cljs.core.async.t_cljs$core$async24495.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24495";

cljs.core.async.t_cljs$core$async24495.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24495");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24495.
 */
cljs.core.async.__GT_t_cljs$core$async24495 = (function cljs$core$async$__GT_t_cljs$core$async24495(f__$1,blockable__$1,meta24496){
return (new cljs.core.async.t_cljs$core$async24495(f__$1,blockable__$1,meta24496));
});

}

return (new cljs.core.async.t_cljs$core$async24495(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24501 = arguments.length;
switch (G__24501) {
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
var G__24504 = arguments.length;
switch (G__24504) {
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
var G__24507 = arguments.length;
switch (G__24507) {
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
var val_24509 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24509);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24509,ret){
return (function (){
return fn1.call(null,val_24509);
});})(val_24509,ret))
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
var G__24511 = arguments.length;
switch (G__24511) {
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
var n__4518__auto___24513 = n;
var x_24514 = (0);
while(true){
if((x_24514 < n__4518__auto___24513)){
(a[x_24514] = (0));

var G__24515 = (x_24514 + (1));
x_24514 = G__24515;
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

var G__24516 = (i + (1));
i = G__24516;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24517 = (function (flag,meta24518){
this.flag = flag;
this.meta24518 = meta24518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24519,meta24518__$1){
var self__ = this;
var _24519__$1 = this;
return (new cljs.core.async.t_cljs$core$async24517(self__.flag,meta24518__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24517.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24519){
var self__ = this;
var _24519__$1 = this;
return self__.meta24518;
});})(flag))
;

cljs.core.async.t_cljs$core$async24517.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24517.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24517.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24518","meta24518",-675509246,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24517";

cljs.core.async.t_cljs$core$async24517.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24517");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24517.
 */
cljs.core.async.__GT_t_cljs$core$async24517 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24517(flag__$1,meta24518){
return (new cljs.core.async.t_cljs$core$async24517(flag__$1,meta24518));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24517(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24520 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24520 = (function (flag,cb,meta24521){
this.flag = flag;
this.cb = cb;
this.meta24521 = meta24521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24522,meta24521__$1){
var self__ = this;
var _24522__$1 = this;
return (new cljs.core.async.t_cljs$core$async24520(self__.flag,self__.cb,meta24521__$1));
});

cljs.core.async.t_cljs$core$async24520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24522){
var self__ = this;
var _24522__$1 = this;
return self__.meta24521;
});

cljs.core.async.t_cljs$core$async24520.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24520.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24520.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24520.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24521","meta24521",-1998009759,null)], null);
});

cljs.core.async.t_cljs$core$async24520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24520";

cljs.core.async.t_cljs$core$async24520.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24520");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24520.
 */
cljs.core.async.__GT_t_cljs$core$async24520 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24520(flag__$1,cb__$1,meta24521){
return (new cljs.core.async.t_cljs$core$async24520(flag__$1,cb__$1,meta24521));
});

}

return (new cljs.core.async.t_cljs$core$async24520(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24523_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24523_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24524_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24524_SHARP_,port], null));
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
var G__24525 = (i + (1));
i = G__24525;
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
var len__4641__auto___24531 = arguments.length;
var i__4642__auto___24532 = (0);
while(true){
if((i__4642__auto___24532 < len__4641__auto___24531)){
args__4647__auto__.push((arguments[i__4642__auto___24532]));

var G__24533 = (i__4642__auto___24532 + (1));
i__4642__auto___24532 = G__24533;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24528){
var map__24529 = p__24528;
var map__24529__$1 = (((((!((map__24529 == null))))?(((((map__24529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24529):map__24529);
var opts = map__24529__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24526){
var G__24527 = cljs.core.first.call(null,seq24526);
var seq24526__$1 = cljs.core.next.call(null,seq24526);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24527,seq24526__$1);
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
var G__24535 = arguments.length;
switch (G__24535) {
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
var c__24434__auto___24581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___24581){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___24581){
return (function (state_24559){
var state_val_24560 = (state_24559[(1)]);
if((state_val_24560 === (7))){
var inst_24555 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
var statearr_24561_24582 = state_24559__$1;
(statearr_24561_24582[(2)] = inst_24555);

(statearr_24561_24582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (1))){
var state_24559__$1 = state_24559;
var statearr_24562_24583 = state_24559__$1;
(statearr_24562_24583[(2)] = null);

(statearr_24562_24583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (4))){
var inst_24538 = (state_24559[(7)]);
var inst_24538__$1 = (state_24559[(2)]);
var inst_24539 = (inst_24538__$1 == null);
var state_24559__$1 = (function (){var statearr_24563 = state_24559;
(statearr_24563[(7)] = inst_24538__$1);

return statearr_24563;
})();
if(cljs.core.truth_(inst_24539)){
var statearr_24564_24584 = state_24559__$1;
(statearr_24564_24584[(1)] = (5));

} else {
var statearr_24565_24585 = state_24559__$1;
(statearr_24565_24585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (13))){
var state_24559__$1 = state_24559;
var statearr_24566_24586 = state_24559__$1;
(statearr_24566_24586[(2)] = null);

(statearr_24566_24586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (6))){
var inst_24538 = (state_24559[(7)]);
var state_24559__$1 = state_24559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24559__$1,(11),to,inst_24538);
} else {
if((state_val_24560 === (3))){
var inst_24557 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24559__$1,inst_24557);
} else {
if((state_val_24560 === (12))){
var state_24559__$1 = state_24559;
var statearr_24567_24587 = state_24559__$1;
(statearr_24567_24587[(2)] = null);

(statearr_24567_24587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (2))){
var state_24559__$1 = state_24559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24559__$1,(4),from);
} else {
if((state_val_24560 === (11))){
var inst_24548 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
if(cljs.core.truth_(inst_24548)){
var statearr_24568_24588 = state_24559__$1;
(statearr_24568_24588[(1)] = (12));

} else {
var statearr_24569_24589 = state_24559__$1;
(statearr_24569_24589[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (9))){
var state_24559__$1 = state_24559;
var statearr_24570_24590 = state_24559__$1;
(statearr_24570_24590[(2)] = null);

(statearr_24570_24590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (5))){
var state_24559__$1 = state_24559;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24571_24591 = state_24559__$1;
(statearr_24571_24591[(1)] = (8));

} else {
var statearr_24572_24592 = state_24559__$1;
(statearr_24572_24592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (14))){
var inst_24553 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
var statearr_24573_24593 = state_24559__$1;
(statearr_24573_24593[(2)] = inst_24553);

(statearr_24573_24593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (10))){
var inst_24545 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
var statearr_24574_24594 = state_24559__$1;
(statearr_24574_24594[(2)] = inst_24545);

(statearr_24574_24594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (8))){
var inst_24542 = cljs.core.async.close_BANG_.call(null,to);
var state_24559__$1 = state_24559;
var statearr_24575_24595 = state_24559__$1;
(statearr_24575_24595[(2)] = inst_24542);

(statearr_24575_24595[(1)] = (10));


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
});})(c__24434__auto___24581))
;
return ((function (switch__24339__auto__,c__24434__auto___24581){
return (function() {
var cljs$core$async$state_machine__24340__auto__ = null;
var cljs$core$async$state_machine__24340__auto____0 = (function (){
var statearr_24576 = [null,null,null,null,null,null,null,null];
(statearr_24576[(0)] = cljs$core$async$state_machine__24340__auto__);

(statearr_24576[(1)] = (1));

return statearr_24576;
});
var cljs$core$async$state_machine__24340__auto____1 = (function (state_24559){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_24559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e24577){if((e24577 instanceof Object)){
var ex__24343__auto__ = e24577;
var statearr_24578_24596 = state_24559;
(statearr_24578_24596[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24597 = state_24559;
state_24559 = G__24597;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$state_machine__24340__auto__ = function(state_24559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24340__auto____1.call(this,state_24559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24340__auto____0;
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24340__auto____1;
return cljs$core$async$state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___24581))
})();
var state__24436__auto__ = (function (){var statearr_24579 = f__24435__auto__.call(null);
(statearr_24579[(6)] = c__24434__auto___24581);

return statearr_24579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___24581))
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
return (function (p__24598){
var vec__24599 = p__24598;
var v = cljs.core.nth.call(null,vec__24599,(0),null);
var p = cljs.core.nth.call(null,vec__24599,(1),null);
var job = vec__24599;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24434__auto___24770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___24770,res,vec__24599,v,p,job,jobs,results){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___24770,res,vec__24599,v,p,job,jobs,results){
return (function (state_24606){
var state_val_24607 = (state_24606[(1)]);
if((state_val_24607 === (1))){
var state_24606__$1 = state_24606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24606__$1,(2),res,v);
} else {
if((state_val_24607 === (2))){
var inst_24603 = (state_24606[(2)]);
var inst_24604 = cljs.core.async.close_BANG_.call(null,res);
var state_24606__$1 = (function (){var statearr_24608 = state_24606;
(statearr_24608[(7)] = inst_24603);

return statearr_24608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24606__$1,inst_24604);
} else {
return null;
}
}
});})(c__24434__auto___24770,res,vec__24599,v,p,job,jobs,results))
;
return ((function (switch__24339__auto__,c__24434__auto___24770,res,vec__24599,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____0 = (function (){
var statearr_24609 = [null,null,null,null,null,null,null,null];
(statearr_24609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__);

(statearr_24609[(1)] = (1));

return statearr_24609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____1 = (function (state_24606){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_24606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e24610){if((e24610 instanceof Object)){
var ex__24343__auto__ = e24610;
var statearr_24611_24771 = state_24606;
(statearr_24611_24771[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24772 = state_24606;
state_24606 = G__24772;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__ = function(state_24606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____1.call(this,state_24606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___24770,res,vec__24599,v,p,job,jobs,results))
})();
var state__24436__auto__ = (function (){var statearr_24612 = f__24435__auto__.call(null);
(statearr_24612[(6)] = c__24434__auto___24770);

return statearr_24612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___24770,res,vec__24599,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24613){
var vec__24614 = p__24613;
var v = cljs.core.nth.call(null,vec__24614,(0),null);
var p = cljs.core.nth.call(null,vec__24614,(1),null);
var job = vec__24614;
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
var n__4518__auto___24773 = n;
var __24774 = (0);
while(true){
if((__24774 < n__4518__auto___24773)){
var G__24617_24775 = type;
var G__24617_24776__$1 = (((G__24617_24775 instanceof cljs.core.Keyword))?G__24617_24775.fqn:null);
switch (G__24617_24776__$1) {
case "compute":
var c__24434__auto___24778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24774,c__24434__auto___24778,G__24617_24775,G__24617_24776__$1,n__4518__auto___24773,jobs,results,process,async){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (__24774,c__24434__auto___24778,G__24617_24775,G__24617_24776__$1,n__4518__auto___24773,jobs,results,process,async){
return (function (state_24630){
var state_val_24631 = (state_24630[(1)]);
if((state_val_24631 === (1))){
var state_24630__$1 = state_24630;
var statearr_24632_24779 = state_24630__$1;
(statearr_24632_24779[(2)] = null);

(statearr_24632_24779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (2))){
var state_24630__$1 = state_24630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24630__$1,(4),jobs);
} else {
if((state_val_24631 === (3))){
var inst_24628 = (state_24630[(2)]);
var state_24630__$1 = state_24630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24630__$1,inst_24628);
} else {
if((state_val_24631 === (4))){
var inst_24620 = (state_24630[(2)]);
var inst_24621 = process.call(null,inst_24620);
var state_24630__$1 = state_24630;
if(cljs.core.truth_(inst_24621)){
var statearr_24633_24780 = state_24630__$1;
(statearr_24633_24780[(1)] = (5));

} else {
var statearr_24634_24781 = state_24630__$1;
(statearr_24634_24781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (5))){
var state_24630__$1 = state_24630;
var statearr_24635_24782 = state_24630__$1;
(statearr_24635_24782[(2)] = null);

(statearr_24635_24782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (6))){
var state_24630__$1 = state_24630;
var statearr_24636_24783 = state_24630__$1;
(statearr_24636_24783[(2)] = null);

(statearr_24636_24783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (7))){
var inst_24626 = (state_24630[(2)]);
var state_24630__$1 = state_24630;
var statearr_24637_24784 = state_24630__$1;
(statearr_24637_24784[(2)] = inst_24626);

(statearr_24637_24784[(1)] = (3));


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
});})(__24774,c__24434__auto___24778,G__24617_24775,G__24617_24776__$1,n__4518__auto___24773,jobs,results,process,async))
;
return ((function (__24774,switch__24339__auto__,c__24434__auto___24778,G__24617_24775,G__24617_24776__$1,n__4518__auto___24773,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____0 = (function (){
var statearr_24638 = [null,null,null,null,null,null,null];
(statearr_24638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__);

(statearr_24638[(1)] = (1));

return statearr_24638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____1 = (function (state_24630){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_24630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e24639){if((e24639 instanceof Object)){
var ex__24343__auto__ = e24639;
var statearr_24640_24785 = state_24630;
(statearr_24640_24785[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24786 = state_24630;
state_24630 = G__24786;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__ = function(state_24630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____1.call(this,state_24630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__;
})()
;})(__24774,switch__24339__auto__,c__24434__auto___24778,G__24617_24775,G__24617_24776__$1,n__4518__auto___24773,jobs,results,process,async))
})();
var state__24436__auto__ = (function (){var statearr_24641 = f__24435__auto__.call(null);
(statearr_24641[(6)] = c__24434__auto___24778);

return statearr_24641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(__24774,c__24434__auto___24778,G__24617_24775,G__24617_24776__$1,n__4518__auto___24773,jobs,results,process,async))
);


break;
case "async":
var c__24434__auto___24787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24774,c__24434__auto___24787,G__24617_24775,G__24617_24776__$1,n__4518__auto___24773,jobs,results,process,async){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (__24774,c__24434__auto___24787,G__24617_24775,G__24617_24776__$1,n__4518__auto___24773,jobs,results,process,async){
return (function (state_24654){
var state_val_24655 = (state_24654[(1)]);
if((state_val_24655 === (1))){
var state_24654__$1 = state_24654;
var statearr_24656_24788 = state_24654__$1;
(statearr_24656_24788[(2)] = null);

(statearr_24656_24788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (2))){
var state_24654__$1 = state_24654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24654__$1,(4),jobs);
} else {
if((state_val_24655 === (3))){
var inst_24652 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24654__$1,inst_24652);
} else {
if((state_val_24655 === (4))){
var inst_24644 = (state_24654[(2)]);
var inst_24645 = async.call(null,inst_24644);
var state_24654__$1 = state_24654;
if(cljs.core.truth_(inst_24645)){
var statearr_24657_24789 = state_24654__$1;
(statearr_24657_24789[(1)] = (5));

} else {
var statearr_24658_24790 = state_24654__$1;
(statearr_24658_24790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (5))){
var state_24654__$1 = state_24654;
var statearr_24659_24791 = state_24654__$1;
(statearr_24659_24791[(2)] = null);

(statearr_24659_24791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (6))){
var state_24654__$1 = state_24654;
var statearr_24660_24792 = state_24654__$1;
(statearr_24660_24792[(2)] = null);

(statearr_24660_24792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (7))){
var inst_24650 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24661_24793 = state_24654__$1;
(statearr_24661_24793[(2)] = inst_24650);

(statearr_24661_24793[(1)] = (3));


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
});})(__24774,c__24434__auto___24787,G__24617_24775,G__24617_24776__$1,n__4518__auto___24773,jobs,results,process,async))
;
return ((function (__24774,switch__24339__auto__,c__24434__auto___24787,G__24617_24775,G__24617_24776__$1,n__4518__auto___24773,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____0 = (function (){
var statearr_24662 = [null,null,null,null,null,null,null];
(statearr_24662[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__);

(statearr_24662[(1)] = (1));

return statearr_24662;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____1 = (function (state_24654){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_24654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e24663){if((e24663 instanceof Object)){
var ex__24343__auto__ = e24663;
var statearr_24664_24794 = state_24654;
(statearr_24664_24794[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24795 = state_24654;
state_24654 = G__24795;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__ = function(state_24654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____1.call(this,state_24654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__;
})()
;})(__24774,switch__24339__auto__,c__24434__auto___24787,G__24617_24775,G__24617_24776__$1,n__4518__auto___24773,jobs,results,process,async))
})();
var state__24436__auto__ = (function (){var statearr_24665 = f__24435__auto__.call(null);
(statearr_24665[(6)] = c__24434__auto___24787);

return statearr_24665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(__24774,c__24434__auto___24787,G__24617_24775,G__24617_24776__$1,n__4518__auto___24773,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24617_24776__$1)].join('')));

}

var G__24796 = (__24774 + (1));
__24774 = G__24796;
continue;
} else {
}
break;
}

var c__24434__auto___24797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___24797,jobs,results,process,async){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___24797,jobs,results,process,async){
return (function (state_24687){
var state_val_24688 = (state_24687[(1)]);
if((state_val_24688 === (1))){
var state_24687__$1 = state_24687;
var statearr_24689_24798 = state_24687__$1;
(statearr_24689_24798[(2)] = null);

(statearr_24689_24798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24688 === (2))){
var state_24687__$1 = state_24687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24687__$1,(4),from);
} else {
if((state_val_24688 === (3))){
var inst_24685 = (state_24687[(2)]);
var state_24687__$1 = state_24687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24687__$1,inst_24685);
} else {
if((state_val_24688 === (4))){
var inst_24668 = (state_24687[(7)]);
var inst_24668__$1 = (state_24687[(2)]);
var inst_24669 = (inst_24668__$1 == null);
var state_24687__$1 = (function (){var statearr_24690 = state_24687;
(statearr_24690[(7)] = inst_24668__$1);

return statearr_24690;
})();
if(cljs.core.truth_(inst_24669)){
var statearr_24691_24799 = state_24687__$1;
(statearr_24691_24799[(1)] = (5));

} else {
var statearr_24692_24800 = state_24687__$1;
(statearr_24692_24800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24688 === (5))){
var inst_24671 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24687__$1 = state_24687;
var statearr_24693_24801 = state_24687__$1;
(statearr_24693_24801[(2)] = inst_24671);

(statearr_24693_24801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24688 === (6))){
var inst_24668 = (state_24687[(7)]);
var inst_24673 = (state_24687[(8)]);
var inst_24673__$1 = cljs.core.async.chan.call(null,(1));
var inst_24674 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24675 = [inst_24668,inst_24673__$1];
var inst_24676 = (new cljs.core.PersistentVector(null,2,(5),inst_24674,inst_24675,null));
var state_24687__$1 = (function (){var statearr_24694 = state_24687;
(statearr_24694[(8)] = inst_24673__$1);

return statearr_24694;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24687__$1,(8),jobs,inst_24676);
} else {
if((state_val_24688 === (7))){
var inst_24683 = (state_24687[(2)]);
var state_24687__$1 = state_24687;
var statearr_24695_24802 = state_24687__$1;
(statearr_24695_24802[(2)] = inst_24683);

(statearr_24695_24802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24688 === (8))){
var inst_24673 = (state_24687[(8)]);
var inst_24678 = (state_24687[(2)]);
var state_24687__$1 = (function (){var statearr_24696 = state_24687;
(statearr_24696[(9)] = inst_24678);

return statearr_24696;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24687__$1,(9),results,inst_24673);
} else {
if((state_val_24688 === (9))){
var inst_24680 = (state_24687[(2)]);
var state_24687__$1 = (function (){var statearr_24697 = state_24687;
(statearr_24697[(10)] = inst_24680);

return statearr_24697;
})();
var statearr_24698_24803 = state_24687__$1;
(statearr_24698_24803[(2)] = null);

(statearr_24698_24803[(1)] = (2));


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
});})(c__24434__auto___24797,jobs,results,process,async))
;
return ((function (switch__24339__auto__,c__24434__auto___24797,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____0 = (function (){
var statearr_24699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__);

(statearr_24699[(1)] = (1));

return statearr_24699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____1 = (function (state_24687){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_24687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e24700){if((e24700 instanceof Object)){
var ex__24343__auto__ = e24700;
var statearr_24701_24804 = state_24687;
(statearr_24701_24804[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24805 = state_24687;
state_24687 = G__24805;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__ = function(state_24687){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____1.call(this,state_24687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___24797,jobs,results,process,async))
})();
var state__24436__auto__ = (function (){var statearr_24702 = f__24435__auto__.call(null);
(statearr_24702[(6)] = c__24434__auto___24797);

return statearr_24702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___24797,jobs,results,process,async))
);


var c__24434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto__,jobs,results,process,async){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto__,jobs,results,process,async){
return (function (state_24740){
var state_val_24741 = (state_24740[(1)]);
if((state_val_24741 === (7))){
var inst_24736 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24742_24806 = state_24740__$1;
(statearr_24742_24806[(2)] = inst_24736);

(statearr_24742_24806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (20))){
var state_24740__$1 = state_24740;
var statearr_24743_24807 = state_24740__$1;
(statearr_24743_24807[(2)] = null);

(statearr_24743_24807[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (1))){
var state_24740__$1 = state_24740;
var statearr_24744_24808 = state_24740__$1;
(statearr_24744_24808[(2)] = null);

(statearr_24744_24808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (4))){
var inst_24705 = (state_24740[(7)]);
var inst_24705__$1 = (state_24740[(2)]);
var inst_24706 = (inst_24705__$1 == null);
var state_24740__$1 = (function (){var statearr_24745 = state_24740;
(statearr_24745[(7)] = inst_24705__$1);

return statearr_24745;
})();
if(cljs.core.truth_(inst_24706)){
var statearr_24746_24809 = state_24740__$1;
(statearr_24746_24809[(1)] = (5));

} else {
var statearr_24747_24810 = state_24740__$1;
(statearr_24747_24810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (15))){
var inst_24718 = (state_24740[(8)]);
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24740__$1,(18),to,inst_24718);
} else {
if((state_val_24741 === (21))){
var inst_24731 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24748_24811 = state_24740__$1;
(statearr_24748_24811[(2)] = inst_24731);

(statearr_24748_24811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (13))){
var inst_24733 = (state_24740[(2)]);
var state_24740__$1 = (function (){var statearr_24749 = state_24740;
(statearr_24749[(9)] = inst_24733);

return statearr_24749;
})();
var statearr_24750_24812 = state_24740__$1;
(statearr_24750_24812[(2)] = null);

(statearr_24750_24812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (6))){
var inst_24705 = (state_24740[(7)]);
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24740__$1,(11),inst_24705);
} else {
if((state_val_24741 === (17))){
var inst_24726 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
if(cljs.core.truth_(inst_24726)){
var statearr_24751_24813 = state_24740__$1;
(statearr_24751_24813[(1)] = (19));

} else {
var statearr_24752_24814 = state_24740__$1;
(statearr_24752_24814[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (3))){
var inst_24738 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24740__$1,inst_24738);
} else {
if((state_val_24741 === (12))){
var inst_24715 = (state_24740[(10)]);
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24740__$1,(14),inst_24715);
} else {
if((state_val_24741 === (2))){
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24740__$1,(4),results);
} else {
if((state_val_24741 === (19))){
var state_24740__$1 = state_24740;
var statearr_24753_24815 = state_24740__$1;
(statearr_24753_24815[(2)] = null);

(statearr_24753_24815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (11))){
var inst_24715 = (state_24740[(2)]);
var state_24740__$1 = (function (){var statearr_24754 = state_24740;
(statearr_24754[(10)] = inst_24715);

return statearr_24754;
})();
var statearr_24755_24816 = state_24740__$1;
(statearr_24755_24816[(2)] = null);

(statearr_24755_24816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (9))){
var state_24740__$1 = state_24740;
var statearr_24756_24817 = state_24740__$1;
(statearr_24756_24817[(2)] = null);

(statearr_24756_24817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (5))){
var state_24740__$1 = state_24740;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24757_24818 = state_24740__$1;
(statearr_24757_24818[(1)] = (8));

} else {
var statearr_24758_24819 = state_24740__$1;
(statearr_24758_24819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (14))){
var inst_24720 = (state_24740[(11)]);
var inst_24718 = (state_24740[(8)]);
var inst_24718__$1 = (state_24740[(2)]);
var inst_24719 = (inst_24718__$1 == null);
var inst_24720__$1 = cljs.core.not.call(null,inst_24719);
var state_24740__$1 = (function (){var statearr_24759 = state_24740;
(statearr_24759[(11)] = inst_24720__$1);

(statearr_24759[(8)] = inst_24718__$1);

return statearr_24759;
})();
if(inst_24720__$1){
var statearr_24760_24820 = state_24740__$1;
(statearr_24760_24820[(1)] = (15));

} else {
var statearr_24761_24821 = state_24740__$1;
(statearr_24761_24821[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (16))){
var inst_24720 = (state_24740[(11)]);
var state_24740__$1 = state_24740;
var statearr_24762_24822 = state_24740__$1;
(statearr_24762_24822[(2)] = inst_24720);

(statearr_24762_24822[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (10))){
var inst_24712 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24763_24823 = state_24740__$1;
(statearr_24763_24823[(2)] = inst_24712);

(statearr_24763_24823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (18))){
var inst_24723 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24764_24824 = state_24740__$1;
(statearr_24764_24824[(2)] = inst_24723);

(statearr_24764_24824[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (8))){
var inst_24709 = cljs.core.async.close_BANG_.call(null,to);
var state_24740__$1 = state_24740;
var statearr_24765_24825 = state_24740__$1;
(statearr_24765_24825[(2)] = inst_24709);

(statearr_24765_24825[(1)] = (10));


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
});})(c__24434__auto__,jobs,results,process,async))
;
return ((function (switch__24339__auto__,c__24434__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____0 = (function (){
var statearr_24766 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__);

(statearr_24766[(1)] = (1));

return statearr_24766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____1 = (function (state_24740){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_24740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e24767){if((e24767 instanceof Object)){
var ex__24343__auto__ = e24767;
var statearr_24768_24826 = state_24740;
(statearr_24768_24826[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24827 = state_24740;
state_24740 = G__24827;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__ = function(state_24740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____1.call(this,state_24740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto__,jobs,results,process,async))
})();
var state__24436__auto__ = (function (){var statearr_24769 = f__24435__auto__.call(null);
(statearr_24769[(6)] = c__24434__auto__);

return statearr_24769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto__,jobs,results,process,async))
);

return c__24434__auto__;
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
var G__24829 = arguments.length;
switch (G__24829) {
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
var G__24832 = arguments.length;
switch (G__24832) {
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
var G__24835 = arguments.length;
switch (G__24835) {
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
var c__24434__auto___24884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___24884,tc,fc){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___24884,tc,fc){
return (function (state_24861){
var state_val_24862 = (state_24861[(1)]);
if((state_val_24862 === (7))){
var inst_24857 = (state_24861[(2)]);
var state_24861__$1 = state_24861;
var statearr_24863_24885 = state_24861__$1;
(statearr_24863_24885[(2)] = inst_24857);

(statearr_24863_24885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24862 === (1))){
var state_24861__$1 = state_24861;
var statearr_24864_24886 = state_24861__$1;
(statearr_24864_24886[(2)] = null);

(statearr_24864_24886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24862 === (4))){
var inst_24838 = (state_24861[(7)]);
var inst_24838__$1 = (state_24861[(2)]);
var inst_24839 = (inst_24838__$1 == null);
var state_24861__$1 = (function (){var statearr_24865 = state_24861;
(statearr_24865[(7)] = inst_24838__$1);

return statearr_24865;
})();
if(cljs.core.truth_(inst_24839)){
var statearr_24866_24887 = state_24861__$1;
(statearr_24866_24887[(1)] = (5));

} else {
var statearr_24867_24888 = state_24861__$1;
(statearr_24867_24888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24862 === (13))){
var state_24861__$1 = state_24861;
var statearr_24868_24889 = state_24861__$1;
(statearr_24868_24889[(2)] = null);

(statearr_24868_24889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24862 === (6))){
var inst_24838 = (state_24861[(7)]);
var inst_24844 = p.call(null,inst_24838);
var state_24861__$1 = state_24861;
if(cljs.core.truth_(inst_24844)){
var statearr_24869_24890 = state_24861__$1;
(statearr_24869_24890[(1)] = (9));

} else {
var statearr_24870_24891 = state_24861__$1;
(statearr_24870_24891[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24862 === (3))){
var inst_24859 = (state_24861[(2)]);
var state_24861__$1 = state_24861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24861__$1,inst_24859);
} else {
if((state_val_24862 === (12))){
var state_24861__$1 = state_24861;
var statearr_24871_24892 = state_24861__$1;
(statearr_24871_24892[(2)] = null);

(statearr_24871_24892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24862 === (2))){
var state_24861__$1 = state_24861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24861__$1,(4),ch);
} else {
if((state_val_24862 === (11))){
var inst_24838 = (state_24861[(7)]);
var inst_24848 = (state_24861[(2)]);
var state_24861__$1 = state_24861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24861__$1,(8),inst_24848,inst_24838);
} else {
if((state_val_24862 === (9))){
var state_24861__$1 = state_24861;
var statearr_24872_24893 = state_24861__$1;
(statearr_24872_24893[(2)] = tc);

(statearr_24872_24893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24862 === (5))){
var inst_24841 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24842 = cljs.core.async.close_BANG_.call(null,fc);
var state_24861__$1 = (function (){var statearr_24873 = state_24861;
(statearr_24873[(8)] = inst_24841);

return statearr_24873;
})();
var statearr_24874_24894 = state_24861__$1;
(statearr_24874_24894[(2)] = inst_24842);

(statearr_24874_24894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24862 === (14))){
var inst_24855 = (state_24861[(2)]);
var state_24861__$1 = state_24861;
var statearr_24875_24895 = state_24861__$1;
(statearr_24875_24895[(2)] = inst_24855);

(statearr_24875_24895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24862 === (10))){
var state_24861__$1 = state_24861;
var statearr_24876_24896 = state_24861__$1;
(statearr_24876_24896[(2)] = fc);

(statearr_24876_24896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24862 === (8))){
var inst_24850 = (state_24861[(2)]);
var state_24861__$1 = state_24861;
if(cljs.core.truth_(inst_24850)){
var statearr_24877_24897 = state_24861__$1;
(statearr_24877_24897[(1)] = (12));

} else {
var statearr_24878_24898 = state_24861__$1;
(statearr_24878_24898[(1)] = (13));

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
});})(c__24434__auto___24884,tc,fc))
;
return ((function (switch__24339__auto__,c__24434__auto___24884,tc,fc){
return (function() {
var cljs$core$async$state_machine__24340__auto__ = null;
var cljs$core$async$state_machine__24340__auto____0 = (function (){
var statearr_24879 = [null,null,null,null,null,null,null,null,null];
(statearr_24879[(0)] = cljs$core$async$state_machine__24340__auto__);

(statearr_24879[(1)] = (1));

return statearr_24879;
});
var cljs$core$async$state_machine__24340__auto____1 = (function (state_24861){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_24861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e24880){if((e24880 instanceof Object)){
var ex__24343__auto__ = e24880;
var statearr_24881_24899 = state_24861;
(statearr_24881_24899[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24900 = state_24861;
state_24861 = G__24900;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$state_machine__24340__auto__ = function(state_24861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24340__auto____1.call(this,state_24861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24340__auto____0;
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24340__auto____1;
return cljs$core$async$state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___24884,tc,fc))
})();
var state__24436__auto__ = (function (){var statearr_24882 = f__24435__auto__.call(null);
(statearr_24882[(6)] = c__24434__auto___24884);

return statearr_24882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___24884,tc,fc))
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
var c__24434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto__){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto__){
return (function (state_24921){
var state_val_24922 = (state_24921[(1)]);
if((state_val_24922 === (7))){
var inst_24917 = (state_24921[(2)]);
var state_24921__$1 = state_24921;
var statearr_24923_24941 = state_24921__$1;
(statearr_24923_24941[(2)] = inst_24917);

(statearr_24923_24941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24922 === (1))){
var inst_24901 = init;
var state_24921__$1 = (function (){var statearr_24924 = state_24921;
(statearr_24924[(7)] = inst_24901);

return statearr_24924;
})();
var statearr_24925_24942 = state_24921__$1;
(statearr_24925_24942[(2)] = null);

(statearr_24925_24942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24922 === (4))){
var inst_24904 = (state_24921[(8)]);
var inst_24904__$1 = (state_24921[(2)]);
var inst_24905 = (inst_24904__$1 == null);
var state_24921__$1 = (function (){var statearr_24926 = state_24921;
(statearr_24926[(8)] = inst_24904__$1);

return statearr_24926;
})();
if(cljs.core.truth_(inst_24905)){
var statearr_24927_24943 = state_24921__$1;
(statearr_24927_24943[(1)] = (5));

} else {
var statearr_24928_24944 = state_24921__$1;
(statearr_24928_24944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24922 === (6))){
var inst_24908 = (state_24921[(9)]);
var inst_24901 = (state_24921[(7)]);
var inst_24904 = (state_24921[(8)]);
var inst_24908__$1 = f.call(null,inst_24901,inst_24904);
var inst_24909 = cljs.core.reduced_QMARK_.call(null,inst_24908__$1);
var state_24921__$1 = (function (){var statearr_24929 = state_24921;
(statearr_24929[(9)] = inst_24908__$1);

return statearr_24929;
})();
if(inst_24909){
var statearr_24930_24945 = state_24921__$1;
(statearr_24930_24945[(1)] = (8));

} else {
var statearr_24931_24946 = state_24921__$1;
(statearr_24931_24946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24922 === (3))){
var inst_24919 = (state_24921[(2)]);
var state_24921__$1 = state_24921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24921__$1,inst_24919);
} else {
if((state_val_24922 === (2))){
var state_24921__$1 = state_24921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24921__$1,(4),ch);
} else {
if((state_val_24922 === (9))){
var inst_24908 = (state_24921[(9)]);
var inst_24901 = inst_24908;
var state_24921__$1 = (function (){var statearr_24932 = state_24921;
(statearr_24932[(7)] = inst_24901);

return statearr_24932;
})();
var statearr_24933_24947 = state_24921__$1;
(statearr_24933_24947[(2)] = null);

(statearr_24933_24947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24922 === (5))){
var inst_24901 = (state_24921[(7)]);
var state_24921__$1 = state_24921;
var statearr_24934_24948 = state_24921__$1;
(statearr_24934_24948[(2)] = inst_24901);

(statearr_24934_24948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24922 === (10))){
var inst_24915 = (state_24921[(2)]);
var state_24921__$1 = state_24921;
var statearr_24935_24949 = state_24921__$1;
(statearr_24935_24949[(2)] = inst_24915);

(statearr_24935_24949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24922 === (8))){
var inst_24908 = (state_24921[(9)]);
var inst_24911 = cljs.core.deref.call(null,inst_24908);
var state_24921__$1 = state_24921;
var statearr_24936_24950 = state_24921__$1;
(statearr_24936_24950[(2)] = inst_24911);

(statearr_24936_24950[(1)] = (10));


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
});})(c__24434__auto__))
;
return ((function (switch__24339__auto__,c__24434__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24340__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24340__auto____0 = (function (){
var statearr_24937 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24937[(0)] = cljs$core$async$reduce_$_state_machine__24340__auto__);

(statearr_24937[(1)] = (1));

return statearr_24937;
});
var cljs$core$async$reduce_$_state_machine__24340__auto____1 = (function (state_24921){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_24921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e24938){if((e24938 instanceof Object)){
var ex__24343__auto__ = e24938;
var statearr_24939_24951 = state_24921;
(statearr_24939_24951[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24952 = state_24921;
state_24921 = G__24952;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24340__auto__ = function(state_24921){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24340__auto____1.call(this,state_24921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24340__auto____0;
cljs$core$async$reduce_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24340__auto____1;
return cljs$core$async$reduce_$_state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto__))
})();
var state__24436__auto__ = (function (){var statearr_24940 = f__24435__auto__.call(null);
(statearr_24940[(6)] = c__24434__auto__);

return statearr_24940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto__))
);

return c__24434__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto__,f__$1){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto__,f__$1){
return (function (state_24958){
var state_val_24959 = (state_24958[(1)]);
if((state_val_24959 === (1))){
var inst_24953 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24958__$1 = state_24958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24958__$1,(2),inst_24953);
} else {
if((state_val_24959 === (2))){
var inst_24955 = (state_24958[(2)]);
var inst_24956 = f__$1.call(null,inst_24955);
var state_24958__$1 = state_24958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24958__$1,inst_24956);
} else {
return null;
}
}
});})(c__24434__auto__,f__$1))
;
return ((function (switch__24339__auto__,c__24434__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24340__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24340__auto____0 = (function (){
var statearr_24960 = [null,null,null,null,null,null,null];
(statearr_24960[(0)] = cljs$core$async$transduce_$_state_machine__24340__auto__);

(statearr_24960[(1)] = (1));

return statearr_24960;
});
var cljs$core$async$transduce_$_state_machine__24340__auto____1 = (function (state_24958){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_24958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e24961){if((e24961 instanceof Object)){
var ex__24343__auto__ = e24961;
var statearr_24962_24964 = state_24958;
(statearr_24962_24964[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24965 = state_24958;
state_24958 = G__24965;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24340__auto__ = function(state_24958){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24340__auto____1.call(this,state_24958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24340__auto____0;
cljs$core$async$transduce_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24340__auto____1;
return cljs$core$async$transduce_$_state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto__,f__$1))
})();
var state__24436__auto__ = (function (){var statearr_24963 = f__24435__auto__.call(null);
(statearr_24963[(6)] = c__24434__auto__);

return statearr_24963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto__,f__$1))
);

return c__24434__auto__;
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
var G__24967 = arguments.length;
switch (G__24967) {
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
var c__24434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto__){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto__){
return (function (state_24992){
var state_val_24993 = (state_24992[(1)]);
if((state_val_24993 === (7))){
var inst_24974 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
var statearr_24994_25015 = state_24992__$1;
(statearr_24994_25015[(2)] = inst_24974);

(statearr_24994_25015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (1))){
var inst_24968 = cljs.core.seq.call(null,coll);
var inst_24969 = inst_24968;
var state_24992__$1 = (function (){var statearr_24995 = state_24992;
(statearr_24995[(7)] = inst_24969);

return statearr_24995;
})();
var statearr_24996_25016 = state_24992__$1;
(statearr_24996_25016[(2)] = null);

(statearr_24996_25016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (4))){
var inst_24969 = (state_24992[(7)]);
var inst_24972 = cljs.core.first.call(null,inst_24969);
var state_24992__$1 = state_24992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24992__$1,(7),ch,inst_24972);
} else {
if((state_val_24993 === (13))){
var inst_24986 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
var statearr_24997_25017 = state_24992__$1;
(statearr_24997_25017[(2)] = inst_24986);

(statearr_24997_25017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (6))){
var inst_24977 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
if(cljs.core.truth_(inst_24977)){
var statearr_24998_25018 = state_24992__$1;
(statearr_24998_25018[(1)] = (8));

} else {
var statearr_24999_25019 = state_24992__$1;
(statearr_24999_25019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (3))){
var inst_24990 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24992__$1,inst_24990);
} else {
if((state_val_24993 === (12))){
var state_24992__$1 = state_24992;
var statearr_25000_25020 = state_24992__$1;
(statearr_25000_25020[(2)] = null);

(statearr_25000_25020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (2))){
var inst_24969 = (state_24992[(7)]);
var state_24992__$1 = state_24992;
if(cljs.core.truth_(inst_24969)){
var statearr_25001_25021 = state_24992__$1;
(statearr_25001_25021[(1)] = (4));

} else {
var statearr_25002_25022 = state_24992__$1;
(statearr_25002_25022[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (11))){
var inst_24983 = cljs.core.async.close_BANG_.call(null,ch);
var state_24992__$1 = state_24992;
var statearr_25003_25023 = state_24992__$1;
(statearr_25003_25023[(2)] = inst_24983);

(statearr_25003_25023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (9))){
var state_24992__$1 = state_24992;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25004_25024 = state_24992__$1;
(statearr_25004_25024[(1)] = (11));

} else {
var statearr_25005_25025 = state_24992__$1;
(statearr_25005_25025[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (5))){
var inst_24969 = (state_24992[(7)]);
var state_24992__$1 = state_24992;
var statearr_25006_25026 = state_24992__$1;
(statearr_25006_25026[(2)] = inst_24969);

(statearr_25006_25026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (10))){
var inst_24988 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
var statearr_25007_25027 = state_24992__$1;
(statearr_25007_25027[(2)] = inst_24988);

(statearr_25007_25027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (8))){
var inst_24969 = (state_24992[(7)]);
var inst_24979 = cljs.core.next.call(null,inst_24969);
var inst_24969__$1 = inst_24979;
var state_24992__$1 = (function (){var statearr_25008 = state_24992;
(statearr_25008[(7)] = inst_24969__$1);

return statearr_25008;
})();
var statearr_25009_25028 = state_24992__$1;
(statearr_25009_25028[(2)] = null);

(statearr_25009_25028[(1)] = (2));


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
});})(c__24434__auto__))
;
return ((function (switch__24339__auto__,c__24434__auto__){
return (function() {
var cljs$core$async$state_machine__24340__auto__ = null;
var cljs$core$async$state_machine__24340__auto____0 = (function (){
var statearr_25010 = [null,null,null,null,null,null,null,null];
(statearr_25010[(0)] = cljs$core$async$state_machine__24340__auto__);

(statearr_25010[(1)] = (1));

return statearr_25010;
});
var cljs$core$async$state_machine__24340__auto____1 = (function (state_24992){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_24992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e25011){if((e25011 instanceof Object)){
var ex__24343__auto__ = e25011;
var statearr_25012_25029 = state_24992;
(statearr_25012_25029[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25030 = state_24992;
state_24992 = G__25030;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$state_machine__24340__auto__ = function(state_24992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24340__auto____1.call(this,state_24992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24340__auto____0;
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24340__auto____1;
return cljs$core$async$state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto__))
})();
var state__24436__auto__ = (function (){var statearr_25013 = f__24435__auto__.call(null);
(statearr_25013[(6)] = c__24434__auto__);

return statearr_25013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto__))
);

return c__24434__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25031 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25031 = (function (ch,cs,meta25032){
this.ch = ch;
this.cs = cs;
this.meta25032 = meta25032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25033,meta25032__$1){
var self__ = this;
var _25033__$1 = this;
return (new cljs.core.async.t_cljs$core$async25031(self__.ch,self__.cs,meta25032__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25033){
var self__ = this;
var _25033__$1 = this;
return self__.meta25032;
});})(cs))
;

cljs.core.async.t_cljs$core$async25031.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25031.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25031.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25031.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25031.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25031.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25031.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25032","meta25032",-1254626370,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25031.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25031";

cljs.core.async.t_cljs$core$async25031.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25031");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25031.
 */
cljs.core.async.__GT_t_cljs$core$async25031 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25031(ch__$1,cs__$1,meta25032){
return (new cljs.core.async.t_cljs$core$async25031(ch__$1,cs__$1,meta25032));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25031(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24434__auto___25253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___25253,cs,m,dchan,dctr,done){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___25253,cs,m,dchan,dctr,done){
return (function (state_25168){
var state_val_25169 = (state_25168[(1)]);
if((state_val_25169 === (7))){
var inst_25164 = (state_25168[(2)]);
var state_25168__$1 = state_25168;
var statearr_25170_25254 = state_25168__$1;
(statearr_25170_25254[(2)] = inst_25164);

(statearr_25170_25254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (20))){
var inst_25067 = (state_25168[(7)]);
var inst_25079 = cljs.core.first.call(null,inst_25067);
var inst_25080 = cljs.core.nth.call(null,inst_25079,(0),null);
var inst_25081 = cljs.core.nth.call(null,inst_25079,(1),null);
var state_25168__$1 = (function (){var statearr_25171 = state_25168;
(statearr_25171[(8)] = inst_25080);

return statearr_25171;
})();
if(cljs.core.truth_(inst_25081)){
var statearr_25172_25255 = state_25168__$1;
(statearr_25172_25255[(1)] = (22));

} else {
var statearr_25173_25256 = state_25168__$1;
(statearr_25173_25256[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (27))){
var inst_25116 = (state_25168[(9)]);
var inst_25109 = (state_25168[(10)]);
var inst_25036 = (state_25168[(11)]);
var inst_25111 = (state_25168[(12)]);
var inst_25116__$1 = cljs.core._nth.call(null,inst_25109,inst_25111);
var inst_25117 = cljs.core.async.put_BANG_.call(null,inst_25116__$1,inst_25036,done);
var state_25168__$1 = (function (){var statearr_25174 = state_25168;
(statearr_25174[(9)] = inst_25116__$1);

return statearr_25174;
})();
if(cljs.core.truth_(inst_25117)){
var statearr_25175_25257 = state_25168__$1;
(statearr_25175_25257[(1)] = (30));

} else {
var statearr_25176_25258 = state_25168__$1;
(statearr_25176_25258[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (1))){
var state_25168__$1 = state_25168;
var statearr_25177_25259 = state_25168__$1;
(statearr_25177_25259[(2)] = null);

(statearr_25177_25259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (24))){
var inst_25067 = (state_25168[(7)]);
var inst_25086 = (state_25168[(2)]);
var inst_25087 = cljs.core.next.call(null,inst_25067);
var inst_25045 = inst_25087;
var inst_25046 = null;
var inst_25047 = (0);
var inst_25048 = (0);
var state_25168__$1 = (function (){var statearr_25178 = state_25168;
(statearr_25178[(13)] = inst_25048);

(statearr_25178[(14)] = inst_25047);

(statearr_25178[(15)] = inst_25086);

(statearr_25178[(16)] = inst_25046);

(statearr_25178[(17)] = inst_25045);

return statearr_25178;
})();
var statearr_25179_25260 = state_25168__$1;
(statearr_25179_25260[(2)] = null);

(statearr_25179_25260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (39))){
var state_25168__$1 = state_25168;
var statearr_25183_25261 = state_25168__$1;
(statearr_25183_25261[(2)] = null);

(statearr_25183_25261[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (4))){
var inst_25036 = (state_25168[(11)]);
var inst_25036__$1 = (state_25168[(2)]);
var inst_25037 = (inst_25036__$1 == null);
var state_25168__$1 = (function (){var statearr_25184 = state_25168;
(statearr_25184[(11)] = inst_25036__$1);

return statearr_25184;
})();
if(cljs.core.truth_(inst_25037)){
var statearr_25185_25262 = state_25168__$1;
(statearr_25185_25262[(1)] = (5));

} else {
var statearr_25186_25263 = state_25168__$1;
(statearr_25186_25263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (15))){
var inst_25048 = (state_25168[(13)]);
var inst_25047 = (state_25168[(14)]);
var inst_25046 = (state_25168[(16)]);
var inst_25045 = (state_25168[(17)]);
var inst_25063 = (state_25168[(2)]);
var inst_25064 = (inst_25048 + (1));
var tmp25180 = inst_25047;
var tmp25181 = inst_25046;
var tmp25182 = inst_25045;
var inst_25045__$1 = tmp25182;
var inst_25046__$1 = tmp25181;
var inst_25047__$1 = tmp25180;
var inst_25048__$1 = inst_25064;
var state_25168__$1 = (function (){var statearr_25187 = state_25168;
(statearr_25187[(13)] = inst_25048__$1);

(statearr_25187[(14)] = inst_25047__$1);

(statearr_25187[(18)] = inst_25063);

(statearr_25187[(16)] = inst_25046__$1);

(statearr_25187[(17)] = inst_25045__$1);

return statearr_25187;
})();
var statearr_25188_25264 = state_25168__$1;
(statearr_25188_25264[(2)] = null);

(statearr_25188_25264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (21))){
var inst_25090 = (state_25168[(2)]);
var state_25168__$1 = state_25168;
var statearr_25192_25265 = state_25168__$1;
(statearr_25192_25265[(2)] = inst_25090);

(statearr_25192_25265[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (31))){
var inst_25116 = (state_25168[(9)]);
var inst_25120 = done.call(null,null);
var inst_25121 = cljs.core.async.untap_STAR_.call(null,m,inst_25116);
var state_25168__$1 = (function (){var statearr_25193 = state_25168;
(statearr_25193[(19)] = inst_25120);

return statearr_25193;
})();
var statearr_25194_25266 = state_25168__$1;
(statearr_25194_25266[(2)] = inst_25121);

(statearr_25194_25266[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (32))){
var inst_25110 = (state_25168[(20)]);
var inst_25108 = (state_25168[(21)]);
var inst_25109 = (state_25168[(10)]);
var inst_25111 = (state_25168[(12)]);
var inst_25123 = (state_25168[(2)]);
var inst_25124 = (inst_25111 + (1));
var tmp25189 = inst_25110;
var tmp25190 = inst_25108;
var tmp25191 = inst_25109;
var inst_25108__$1 = tmp25190;
var inst_25109__$1 = tmp25191;
var inst_25110__$1 = tmp25189;
var inst_25111__$1 = inst_25124;
var state_25168__$1 = (function (){var statearr_25195 = state_25168;
(statearr_25195[(20)] = inst_25110__$1);

(statearr_25195[(21)] = inst_25108__$1);

(statearr_25195[(10)] = inst_25109__$1);

(statearr_25195[(22)] = inst_25123);

(statearr_25195[(12)] = inst_25111__$1);

return statearr_25195;
})();
var statearr_25196_25267 = state_25168__$1;
(statearr_25196_25267[(2)] = null);

(statearr_25196_25267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (40))){
var inst_25136 = (state_25168[(23)]);
var inst_25140 = done.call(null,null);
var inst_25141 = cljs.core.async.untap_STAR_.call(null,m,inst_25136);
var state_25168__$1 = (function (){var statearr_25197 = state_25168;
(statearr_25197[(24)] = inst_25140);

return statearr_25197;
})();
var statearr_25198_25268 = state_25168__$1;
(statearr_25198_25268[(2)] = inst_25141);

(statearr_25198_25268[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (33))){
var inst_25127 = (state_25168[(25)]);
var inst_25129 = cljs.core.chunked_seq_QMARK_.call(null,inst_25127);
var state_25168__$1 = state_25168;
if(inst_25129){
var statearr_25199_25269 = state_25168__$1;
(statearr_25199_25269[(1)] = (36));

} else {
var statearr_25200_25270 = state_25168__$1;
(statearr_25200_25270[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (13))){
var inst_25057 = (state_25168[(26)]);
var inst_25060 = cljs.core.async.close_BANG_.call(null,inst_25057);
var state_25168__$1 = state_25168;
var statearr_25201_25271 = state_25168__$1;
(statearr_25201_25271[(2)] = inst_25060);

(statearr_25201_25271[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (22))){
var inst_25080 = (state_25168[(8)]);
var inst_25083 = cljs.core.async.close_BANG_.call(null,inst_25080);
var state_25168__$1 = state_25168;
var statearr_25202_25272 = state_25168__$1;
(statearr_25202_25272[(2)] = inst_25083);

(statearr_25202_25272[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (36))){
var inst_25127 = (state_25168[(25)]);
var inst_25131 = cljs.core.chunk_first.call(null,inst_25127);
var inst_25132 = cljs.core.chunk_rest.call(null,inst_25127);
var inst_25133 = cljs.core.count.call(null,inst_25131);
var inst_25108 = inst_25132;
var inst_25109 = inst_25131;
var inst_25110 = inst_25133;
var inst_25111 = (0);
var state_25168__$1 = (function (){var statearr_25203 = state_25168;
(statearr_25203[(20)] = inst_25110);

(statearr_25203[(21)] = inst_25108);

(statearr_25203[(10)] = inst_25109);

(statearr_25203[(12)] = inst_25111);

return statearr_25203;
})();
var statearr_25204_25273 = state_25168__$1;
(statearr_25204_25273[(2)] = null);

(statearr_25204_25273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (41))){
var inst_25127 = (state_25168[(25)]);
var inst_25143 = (state_25168[(2)]);
var inst_25144 = cljs.core.next.call(null,inst_25127);
var inst_25108 = inst_25144;
var inst_25109 = null;
var inst_25110 = (0);
var inst_25111 = (0);
var state_25168__$1 = (function (){var statearr_25205 = state_25168;
(statearr_25205[(27)] = inst_25143);

(statearr_25205[(20)] = inst_25110);

(statearr_25205[(21)] = inst_25108);

(statearr_25205[(10)] = inst_25109);

(statearr_25205[(12)] = inst_25111);

return statearr_25205;
})();
var statearr_25206_25274 = state_25168__$1;
(statearr_25206_25274[(2)] = null);

(statearr_25206_25274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (43))){
var state_25168__$1 = state_25168;
var statearr_25207_25275 = state_25168__$1;
(statearr_25207_25275[(2)] = null);

(statearr_25207_25275[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (29))){
var inst_25152 = (state_25168[(2)]);
var state_25168__$1 = state_25168;
var statearr_25208_25276 = state_25168__$1;
(statearr_25208_25276[(2)] = inst_25152);

(statearr_25208_25276[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (44))){
var inst_25161 = (state_25168[(2)]);
var state_25168__$1 = (function (){var statearr_25209 = state_25168;
(statearr_25209[(28)] = inst_25161);

return statearr_25209;
})();
var statearr_25210_25277 = state_25168__$1;
(statearr_25210_25277[(2)] = null);

(statearr_25210_25277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (6))){
var inst_25100 = (state_25168[(29)]);
var inst_25099 = cljs.core.deref.call(null,cs);
var inst_25100__$1 = cljs.core.keys.call(null,inst_25099);
var inst_25101 = cljs.core.count.call(null,inst_25100__$1);
var inst_25102 = cljs.core.reset_BANG_.call(null,dctr,inst_25101);
var inst_25107 = cljs.core.seq.call(null,inst_25100__$1);
var inst_25108 = inst_25107;
var inst_25109 = null;
var inst_25110 = (0);
var inst_25111 = (0);
var state_25168__$1 = (function (){var statearr_25211 = state_25168;
(statearr_25211[(29)] = inst_25100__$1);

(statearr_25211[(20)] = inst_25110);

(statearr_25211[(21)] = inst_25108);

(statearr_25211[(10)] = inst_25109);

(statearr_25211[(12)] = inst_25111);

(statearr_25211[(30)] = inst_25102);

return statearr_25211;
})();
var statearr_25212_25278 = state_25168__$1;
(statearr_25212_25278[(2)] = null);

(statearr_25212_25278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (28))){
var inst_25127 = (state_25168[(25)]);
var inst_25108 = (state_25168[(21)]);
var inst_25127__$1 = cljs.core.seq.call(null,inst_25108);
var state_25168__$1 = (function (){var statearr_25213 = state_25168;
(statearr_25213[(25)] = inst_25127__$1);

return statearr_25213;
})();
if(inst_25127__$1){
var statearr_25214_25279 = state_25168__$1;
(statearr_25214_25279[(1)] = (33));

} else {
var statearr_25215_25280 = state_25168__$1;
(statearr_25215_25280[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (25))){
var inst_25110 = (state_25168[(20)]);
var inst_25111 = (state_25168[(12)]);
var inst_25113 = (inst_25111 < inst_25110);
var inst_25114 = inst_25113;
var state_25168__$1 = state_25168;
if(cljs.core.truth_(inst_25114)){
var statearr_25216_25281 = state_25168__$1;
(statearr_25216_25281[(1)] = (27));

} else {
var statearr_25217_25282 = state_25168__$1;
(statearr_25217_25282[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (34))){
var state_25168__$1 = state_25168;
var statearr_25218_25283 = state_25168__$1;
(statearr_25218_25283[(2)] = null);

(statearr_25218_25283[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (17))){
var state_25168__$1 = state_25168;
var statearr_25219_25284 = state_25168__$1;
(statearr_25219_25284[(2)] = null);

(statearr_25219_25284[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (3))){
var inst_25166 = (state_25168[(2)]);
var state_25168__$1 = state_25168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25168__$1,inst_25166);
} else {
if((state_val_25169 === (12))){
var inst_25095 = (state_25168[(2)]);
var state_25168__$1 = state_25168;
var statearr_25220_25285 = state_25168__$1;
(statearr_25220_25285[(2)] = inst_25095);

(statearr_25220_25285[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (2))){
var state_25168__$1 = state_25168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25168__$1,(4),ch);
} else {
if((state_val_25169 === (23))){
var state_25168__$1 = state_25168;
var statearr_25221_25286 = state_25168__$1;
(statearr_25221_25286[(2)] = null);

(statearr_25221_25286[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (35))){
var inst_25150 = (state_25168[(2)]);
var state_25168__$1 = state_25168;
var statearr_25222_25287 = state_25168__$1;
(statearr_25222_25287[(2)] = inst_25150);

(statearr_25222_25287[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (19))){
var inst_25067 = (state_25168[(7)]);
var inst_25071 = cljs.core.chunk_first.call(null,inst_25067);
var inst_25072 = cljs.core.chunk_rest.call(null,inst_25067);
var inst_25073 = cljs.core.count.call(null,inst_25071);
var inst_25045 = inst_25072;
var inst_25046 = inst_25071;
var inst_25047 = inst_25073;
var inst_25048 = (0);
var state_25168__$1 = (function (){var statearr_25223 = state_25168;
(statearr_25223[(13)] = inst_25048);

(statearr_25223[(14)] = inst_25047);

(statearr_25223[(16)] = inst_25046);

(statearr_25223[(17)] = inst_25045);

return statearr_25223;
})();
var statearr_25224_25288 = state_25168__$1;
(statearr_25224_25288[(2)] = null);

(statearr_25224_25288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (11))){
var inst_25067 = (state_25168[(7)]);
var inst_25045 = (state_25168[(17)]);
var inst_25067__$1 = cljs.core.seq.call(null,inst_25045);
var state_25168__$1 = (function (){var statearr_25225 = state_25168;
(statearr_25225[(7)] = inst_25067__$1);

return statearr_25225;
})();
if(inst_25067__$1){
var statearr_25226_25289 = state_25168__$1;
(statearr_25226_25289[(1)] = (16));

} else {
var statearr_25227_25290 = state_25168__$1;
(statearr_25227_25290[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (9))){
var inst_25097 = (state_25168[(2)]);
var state_25168__$1 = state_25168;
var statearr_25228_25291 = state_25168__$1;
(statearr_25228_25291[(2)] = inst_25097);

(statearr_25228_25291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (5))){
var inst_25043 = cljs.core.deref.call(null,cs);
var inst_25044 = cljs.core.seq.call(null,inst_25043);
var inst_25045 = inst_25044;
var inst_25046 = null;
var inst_25047 = (0);
var inst_25048 = (0);
var state_25168__$1 = (function (){var statearr_25229 = state_25168;
(statearr_25229[(13)] = inst_25048);

(statearr_25229[(14)] = inst_25047);

(statearr_25229[(16)] = inst_25046);

(statearr_25229[(17)] = inst_25045);

return statearr_25229;
})();
var statearr_25230_25292 = state_25168__$1;
(statearr_25230_25292[(2)] = null);

(statearr_25230_25292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (14))){
var state_25168__$1 = state_25168;
var statearr_25231_25293 = state_25168__$1;
(statearr_25231_25293[(2)] = null);

(statearr_25231_25293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (45))){
var inst_25158 = (state_25168[(2)]);
var state_25168__$1 = state_25168;
var statearr_25232_25294 = state_25168__$1;
(statearr_25232_25294[(2)] = inst_25158);

(statearr_25232_25294[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (26))){
var inst_25100 = (state_25168[(29)]);
var inst_25154 = (state_25168[(2)]);
var inst_25155 = cljs.core.seq.call(null,inst_25100);
var state_25168__$1 = (function (){var statearr_25233 = state_25168;
(statearr_25233[(31)] = inst_25154);

return statearr_25233;
})();
if(inst_25155){
var statearr_25234_25295 = state_25168__$1;
(statearr_25234_25295[(1)] = (42));

} else {
var statearr_25235_25296 = state_25168__$1;
(statearr_25235_25296[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (16))){
var inst_25067 = (state_25168[(7)]);
var inst_25069 = cljs.core.chunked_seq_QMARK_.call(null,inst_25067);
var state_25168__$1 = state_25168;
if(inst_25069){
var statearr_25236_25297 = state_25168__$1;
(statearr_25236_25297[(1)] = (19));

} else {
var statearr_25237_25298 = state_25168__$1;
(statearr_25237_25298[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (38))){
var inst_25147 = (state_25168[(2)]);
var state_25168__$1 = state_25168;
var statearr_25238_25299 = state_25168__$1;
(statearr_25238_25299[(2)] = inst_25147);

(statearr_25238_25299[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (30))){
var state_25168__$1 = state_25168;
var statearr_25239_25300 = state_25168__$1;
(statearr_25239_25300[(2)] = null);

(statearr_25239_25300[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (10))){
var inst_25048 = (state_25168[(13)]);
var inst_25046 = (state_25168[(16)]);
var inst_25056 = cljs.core._nth.call(null,inst_25046,inst_25048);
var inst_25057 = cljs.core.nth.call(null,inst_25056,(0),null);
var inst_25058 = cljs.core.nth.call(null,inst_25056,(1),null);
var state_25168__$1 = (function (){var statearr_25240 = state_25168;
(statearr_25240[(26)] = inst_25057);

return statearr_25240;
})();
if(cljs.core.truth_(inst_25058)){
var statearr_25241_25301 = state_25168__$1;
(statearr_25241_25301[(1)] = (13));

} else {
var statearr_25242_25302 = state_25168__$1;
(statearr_25242_25302[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (18))){
var inst_25093 = (state_25168[(2)]);
var state_25168__$1 = state_25168;
var statearr_25243_25303 = state_25168__$1;
(statearr_25243_25303[(2)] = inst_25093);

(statearr_25243_25303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (42))){
var state_25168__$1 = state_25168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25168__$1,(45),dchan);
} else {
if((state_val_25169 === (37))){
var inst_25127 = (state_25168[(25)]);
var inst_25036 = (state_25168[(11)]);
var inst_25136 = (state_25168[(23)]);
var inst_25136__$1 = cljs.core.first.call(null,inst_25127);
var inst_25137 = cljs.core.async.put_BANG_.call(null,inst_25136__$1,inst_25036,done);
var state_25168__$1 = (function (){var statearr_25244 = state_25168;
(statearr_25244[(23)] = inst_25136__$1);

return statearr_25244;
})();
if(cljs.core.truth_(inst_25137)){
var statearr_25245_25304 = state_25168__$1;
(statearr_25245_25304[(1)] = (39));

} else {
var statearr_25246_25305 = state_25168__$1;
(statearr_25246_25305[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (8))){
var inst_25048 = (state_25168[(13)]);
var inst_25047 = (state_25168[(14)]);
var inst_25050 = (inst_25048 < inst_25047);
var inst_25051 = inst_25050;
var state_25168__$1 = state_25168;
if(cljs.core.truth_(inst_25051)){
var statearr_25247_25306 = state_25168__$1;
(statearr_25247_25306[(1)] = (10));

} else {
var statearr_25248_25307 = state_25168__$1;
(statearr_25248_25307[(1)] = (11));

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
});})(c__24434__auto___25253,cs,m,dchan,dctr,done))
;
return ((function (switch__24339__auto__,c__24434__auto___25253,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24340__auto__ = null;
var cljs$core$async$mult_$_state_machine__24340__auto____0 = (function (){
var statearr_25249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25249[(0)] = cljs$core$async$mult_$_state_machine__24340__auto__);

(statearr_25249[(1)] = (1));

return statearr_25249;
});
var cljs$core$async$mult_$_state_machine__24340__auto____1 = (function (state_25168){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_25168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e25250){if((e25250 instanceof Object)){
var ex__24343__auto__ = e25250;
var statearr_25251_25308 = state_25168;
(statearr_25251_25308[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25309 = state_25168;
state_25168 = G__25309;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24340__auto__ = function(state_25168){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24340__auto____1.call(this,state_25168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24340__auto____0;
cljs$core$async$mult_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24340__auto____1;
return cljs$core$async$mult_$_state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___25253,cs,m,dchan,dctr,done))
})();
var state__24436__auto__ = (function (){var statearr_25252 = f__24435__auto__.call(null);
(statearr_25252[(6)] = c__24434__auto___25253);

return statearr_25252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___25253,cs,m,dchan,dctr,done))
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
var G__25311 = arguments.length;
switch (G__25311) {
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
var len__4641__auto___25323 = arguments.length;
var i__4642__auto___25324 = (0);
while(true){
if((i__4642__auto___25324 < len__4641__auto___25323)){
args__4647__auto__.push((arguments[i__4642__auto___25324]));

var G__25325 = (i__4642__auto___25324 + (1));
i__4642__auto___25324 = G__25325;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25317){
var map__25318 = p__25317;
var map__25318__$1 = (((((!((map__25318 == null))))?(((((map__25318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25318):map__25318);
var opts = map__25318__$1;
var statearr_25320_25326 = state;
(statearr_25320_25326[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__25318,map__25318__$1,opts){
return (function (val){
var statearr_25321_25327 = state;
(statearr_25321_25327[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25318,map__25318__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25322_25328 = state;
(statearr_25322_25328[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25313){
var G__25314 = cljs.core.first.call(null,seq25313);
var seq25313__$1 = cljs.core.next.call(null,seq25313);
var G__25315 = cljs.core.first.call(null,seq25313__$1);
var seq25313__$2 = cljs.core.next.call(null,seq25313__$1);
var G__25316 = cljs.core.first.call(null,seq25313__$2);
var seq25313__$3 = cljs.core.next.call(null,seq25313__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25314,G__25315,G__25316,seq25313__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25329 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25329 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25330){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25330 = meta25330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25331,meta25330__$1){
var self__ = this;
var _25331__$1 = this;
return (new cljs.core.async.t_cljs$core$async25329(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25330__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25331){
var self__ = this;
var _25331__$1 = this;
return self__.meta25330;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25329.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25329.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25329.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25329.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25329.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25329.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25329.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25329.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25329.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta25330","meta25330",-2034323817,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25329";

cljs.core.async.t_cljs$core$async25329.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25329");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25329.
 */
cljs.core.async.__GT_t_cljs$core$async25329 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25329(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25330){
return (new cljs.core.async.t_cljs$core$async25329(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25330));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25329(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24434__auto___25493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___25493,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___25493,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25433){
var state_val_25434 = (state_25433[(1)]);
if((state_val_25434 === (7))){
var inst_25348 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
var statearr_25435_25494 = state_25433__$1;
(statearr_25435_25494[(2)] = inst_25348);

(statearr_25435_25494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (20))){
var inst_25360 = (state_25433[(7)]);
var state_25433__$1 = state_25433;
var statearr_25436_25495 = state_25433__$1;
(statearr_25436_25495[(2)] = inst_25360);

(statearr_25436_25495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (27))){
var state_25433__$1 = state_25433;
var statearr_25437_25496 = state_25433__$1;
(statearr_25437_25496[(2)] = null);

(statearr_25437_25496[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (1))){
var inst_25335 = (state_25433[(8)]);
var inst_25335__$1 = calc_state.call(null);
var inst_25337 = (inst_25335__$1 == null);
var inst_25338 = cljs.core.not.call(null,inst_25337);
var state_25433__$1 = (function (){var statearr_25438 = state_25433;
(statearr_25438[(8)] = inst_25335__$1);

return statearr_25438;
})();
if(inst_25338){
var statearr_25439_25497 = state_25433__$1;
(statearr_25439_25497[(1)] = (2));

} else {
var statearr_25440_25498 = state_25433__$1;
(statearr_25440_25498[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (24))){
var inst_25384 = (state_25433[(9)]);
var inst_25407 = (state_25433[(10)]);
var inst_25393 = (state_25433[(11)]);
var inst_25407__$1 = inst_25384.call(null,inst_25393);
var state_25433__$1 = (function (){var statearr_25441 = state_25433;
(statearr_25441[(10)] = inst_25407__$1);

return statearr_25441;
})();
if(cljs.core.truth_(inst_25407__$1)){
var statearr_25442_25499 = state_25433__$1;
(statearr_25442_25499[(1)] = (29));

} else {
var statearr_25443_25500 = state_25433__$1;
(statearr_25443_25500[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (4))){
var inst_25351 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
if(cljs.core.truth_(inst_25351)){
var statearr_25444_25501 = state_25433__$1;
(statearr_25444_25501[(1)] = (8));

} else {
var statearr_25445_25502 = state_25433__$1;
(statearr_25445_25502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (15))){
var inst_25378 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
if(cljs.core.truth_(inst_25378)){
var statearr_25446_25503 = state_25433__$1;
(statearr_25446_25503[(1)] = (19));

} else {
var statearr_25447_25504 = state_25433__$1;
(statearr_25447_25504[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (21))){
var inst_25383 = (state_25433[(12)]);
var inst_25383__$1 = (state_25433[(2)]);
var inst_25384 = cljs.core.get.call(null,inst_25383__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25385 = cljs.core.get.call(null,inst_25383__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25386 = cljs.core.get.call(null,inst_25383__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25433__$1 = (function (){var statearr_25448 = state_25433;
(statearr_25448[(9)] = inst_25384);

(statearr_25448[(12)] = inst_25383__$1);

(statearr_25448[(13)] = inst_25385);

return statearr_25448;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25433__$1,(22),inst_25386);
} else {
if((state_val_25434 === (31))){
var inst_25415 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
if(cljs.core.truth_(inst_25415)){
var statearr_25449_25505 = state_25433__$1;
(statearr_25449_25505[(1)] = (32));

} else {
var statearr_25450_25506 = state_25433__$1;
(statearr_25450_25506[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (32))){
var inst_25392 = (state_25433[(14)]);
var state_25433__$1 = state_25433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25433__$1,(35),out,inst_25392);
} else {
if((state_val_25434 === (33))){
var inst_25383 = (state_25433[(12)]);
var inst_25360 = inst_25383;
var state_25433__$1 = (function (){var statearr_25451 = state_25433;
(statearr_25451[(7)] = inst_25360);

return statearr_25451;
})();
var statearr_25452_25507 = state_25433__$1;
(statearr_25452_25507[(2)] = null);

(statearr_25452_25507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (13))){
var inst_25360 = (state_25433[(7)]);
var inst_25367 = inst_25360.cljs$lang$protocol_mask$partition0$;
var inst_25368 = (inst_25367 & (64));
var inst_25369 = inst_25360.cljs$core$ISeq$;
var inst_25370 = (cljs.core.PROTOCOL_SENTINEL === inst_25369);
var inst_25371 = ((inst_25368) || (inst_25370));
var state_25433__$1 = state_25433;
if(cljs.core.truth_(inst_25371)){
var statearr_25453_25508 = state_25433__$1;
(statearr_25453_25508[(1)] = (16));

} else {
var statearr_25454_25509 = state_25433__$1;
(statearr_25454_25509[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (22))){
var inst_25392 = (state_25433[(14)]);
var inst_25393 = (state_25433[(11)]);
var inst_25391 = (state_25433[(2)]);
var inst_25392__$1 = cljs.core.nth.call(null,inst_25391,(0),null);
var inst_25393__$1 = cljs.core.nth.call(null,inst_25391,(1),null);
var inst_25394 = (inst_25392__$1 == null);
var inst_25395 = cljs.core._EQ_.call(null,inst_25393__$1,change);
var inst_25396 = ((inst_25394) || (inst_25395));
var state_25433__$1 = (function (){var statearr_25455 = state_25433;
(statearr_25455[(14)] = inst_25392__$1);

(statearr_25455[(11)] = inst_25393__$1);

return statearr_25455;
})();
if(cljs.core.truth_(inst_25396)){
var statearr_25456_25510 = state_25433__$1;
(statearr_25456_25510[(1)] = (23));

} else {
var statearr_25457_25511 = state_25433__$1;
(statearr_25457_25511[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (36))){
var inst_25383 = (state_25433[(12)]);
var inst_25360 = inst_25383;
var state_25433__$1 = (function (){var statearr_25458 = state_25433;
(statearr_25458[(7)] = inst_25360);

return statearr_25458;
})();
var statearr_25459_25512 = state_25433__$1;
(statearr_25459_25512[(2)] = null);

(statearr_25459_25512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (29))){
var inst_25407 = (state_25433[(10)]);
var state_25433__$1 = state_25433;
var statearr_25460_25513 = state_25433__$1;
(statearr_25460_25513[(2)] = inst_25407);

(statearr_25460_25513[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (6))){
var state_25433__$1 = state_25433;
var statearr_25461_25514 = state_25433__$1;
(statearr_25461_25514[(2)] = false);

(statearr_25461_25514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (28))){
var inst_25403 = (state_25433[(2)]);
var inst_25404 = calc_state.call(null);
var inst_25360 = inst_25404;
var state_25433__$1 = (function (){var statearr_25462 = state_25433;
(statearr_25462[(7)] = inst_25360);

(statearr_25462[(15)] = inst_25403);

return statearr_25462;
})();
var statearr_25463_25515 = state_25433__$1;
(statearr_25463_25515[(2)] = null);

(statearr_25463_25515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (25))){
var inst_25429 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
var statearr_25464_25516 = state_25433__$1;
(statearr_25464_25516[(2)] = inst_25429);

(statearr_25464_25516[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (34))){
var inst_25427 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
var statearr_25465_25517 = state_25433__$1;
(statearr_25465_25517[(2)] = inst_25427);

(statearr_25465_25517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (17))){
var state_25433__$1 = state_25433;
var statearr_25466_25518 = state_25433__$1;
(statearr_25466_25518[(2)] = false);

(statearr_25466_25518[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (3))){
var state_25433__$1 = state_25433;
var statearr_25467_25519 = state_25433__$1;
(statearr_25467_25519[(2)] = false);

(statearr_25467_25519[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (12))){
var inst_25431 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25433__$1,inst_25431);
} else {
if((state_val_25434 === (2))){
var inst_25335 = (state_25433[(8)]);
var inst_25340 = inst_25335.cljs$lang$protocol_mask$partition0$;
var inst_25341 = (inst_25340 & (64));
var inst_25342 = inst_25335.cljs$core$ISeq$;
var inst_25343 = (cljs.core.PROTOCOL_SENTINEL === inst_25342);
var inst_25344 = ((inst_25341) || (inst_25343));
var state_25433__$1 = state_25433;
if(cljs.core.truth_(inst_25344)){
var statearr_25468_25520 = state_25433__$1;
(statearr_25468_25520[(1)] = (5));

} else {
var statearr_25469_25521 = state_25433__$1;
(statearr_25469_25521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (23))){
var inst_25392 = (state_25433[(14)]);
var inst_25398 = (inst_25392 == null);
var state_25433__$1 = state_25433;
if(cljs.core.truth_(inst_25398)){
var statearr_25470_25522 = state_25433__$1;
(statearr_25470_25522[(1)] = (26));

} else {
var statearr_25471_25523 = state_25433__$1;
(statearr_25471_25523[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (35))){
var inst_25418 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
if(cljs.core.truth_(inst_25418)){
var statearr_25472_25524 = state_25433__$1;
(statearr_25472_25524[(1)] = (36));

} else {
var statearr_25473_25525 = state_25433__$1;
(statearr_25473_25525[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (19))){
var inst_25360 = (state_25433[(7)]);
var inst_25380 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25360);
var state_25433__$1 = state_25433;
var statearr_25474_25526 = state_25433__$1;
(statearr_25474_25526[(2)] = inst_25380);

(statearr_25474_25526[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (11))){
var inst_25360 = (state_25433[(7)]);
var inst_25364 = (inst_25360 == null);
var inst_25365 = cljs.core.not.call(null,inst_25364);
var state_25433__$1 = state_25433;
if(inst_25365){
var statearr_25475_25527 = state_25433__$1;
(statearr_25475_25527[(1)] = (13));

} else {
var statearr_25476_25528 = state_25433__$1;
(statearr_25476_25528[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (9))){
var inst_25335 = (state_25433[(8)]);
var state_25433__$1 = state_25433;
var statearr_25477_25529 = state_25433__$1;
(statearr_25477_25529[(2)] = inst_25335);

(statearr_25477_25529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (5))){
var state_25433__$1 = state_25433;
var statearr_25478_25530 = state_25433__$1;
(statearr_25478_25530[(2)] = true);

(statearr_25478_25530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (14))){
var state_25433__$1 = state_25433;
var statearr_25479_25531 = state_25433__$1;
(statearr_25479_25531[(2)] = false);

(statearr_25479_25531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (26))){
var inst_25393 = (state_25433[(11)]);
var inst_25400 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25393);
var state_25433__$1 = state_25433;
var statearr_25480_25532 = state_25433__$1;
(statearr_25480_25532[(2)] = inst_25400);

(statearr_25480_25532[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (16))){
var state_25433__$1 = state_25433;
var statearr_25481_25533 = state_25433__$1;
(statearr_25481_25533[(2)] = true);

(statearr_25481_25533[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (38))){
var inst_25423 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
var statearr_25482_25534 = state_25433__$1;
(statearr_25482_25534[(2)] = inst_25423);

(statearr_25482_25534[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (30))){
var inst_25384 = (state_25433[(9)]);
var inst_25385 = (state_25433[(13)]);
var inst_25393 = (state_25433[(11)]);
var inst_25410 = cljs.core.empty_QMARK_.call(null,inst_25384);
var inst_25411 = inst_25385.call(null,inst_25393);
var inst_25412 = cljs.core.not.call(null,inst_25411);
var inst_25413 = ((inst_25410) && (inst_25412));
var state_25433__$1 = state_25433;
var statearr_25483_25535 = state_25433__$1;
(statearr_25483_25535[(2)] = inst_25413);

(statearr_25483_25535[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (10))){
var inst_25335 = (state_25433[(8)]);
var inst_25356 = (state_25433[(2)]);
var inst_25357 = cljs.core.get.call(null,inst_25356,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25358 = cljs.core.get.call(null,inst_25356,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25359 = cljs.core.get.call(null,inst_25356,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25360 = inst_25335;
var state_25433__$1 = (function (){var statearr_25484 = state_25433;
(statearr_25484[(16)] = inst_25357);

(statearr_25484[(17)] = inst_25358);

(statearr_25484[(7)] = inst_25360);

(statearr_25484[(18)] = inst_25359);

return statearr_25484;
})();
var statearr_25485_25536 = state_25433__$1;
(statearr_25485_25536[(2)] = null);

(statearr_25485_25536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (18))){
var inst_25375 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
var statearr_25486_25537 = state_25433__$1;
(statearr_25486_25537[(2)] = inst_25375);

(statearr_25486_25537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (37))){
var state_25433__$1 = state_25433;
var statearr_25487_25538 = state_25433__$1;
(statearr_25487_25538[(2)] = null);

(statearr_25487_25538[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (8))){
var inst_25335 = (state_25433[(8)]);
var inst_25353 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25335);
var state_25433__$1 = state_25433;
var statearr_25488_25539 = state_25433__$1;
(statearr_25488_25539[(2)] = inst_25353);

(statearr_25488_25539[(1)] = (10));


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
});})(c__24434__auto___25493,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24339__auto__,c__24434__auto___25493,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24340__auto__ = null;
var cljs$core$async$mix_$_state_machine__24340__auto____0 = (function (){
var statearr_25489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25489[(0)] = cljs$core$async$mix_$_state_machine__24340__auto__);

(statearr_25489[(1)] = (1));

return statearr_25489;
});
var cljs$core$async$mix_$_state_machine__24340__auto____1 = (function (state_25433){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_25433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e25490){if((e25490 instanceof Object)){
var ex__24343__auto__ = e25490;
var statearr_25491_25540 = state_25433;
(statearr_25491_25540[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25541 = state_25433;
state_25433 = G__25541;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24340__auto__ = function(state_25433){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24340__auto____1.call(this,state_25433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24340__auto____0;
cljs$core$async$mix_$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24340__auto____1;
return cljs$core$async$mix_$_state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___25493,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24436__auto__ = (function (){var statearr_25492 = f__24435__auto__.call(null);
(statearr_25492[(6)] = c__24434__auto___25493);

return statearr_25492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___25493,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__25543 = arguments.length;
switch (G__25543) {
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
var G__25547 = arguments.length;
switch (G__25547) {
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
return (function (p1__25545_SHARP_){
if(cljs.core.truth_(p1__25545_SHARP_.call(null,topic))){
return p1__25545_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25545_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25548 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25548 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25549){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25549 = meta25549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25550,meta25549__$1){
var self__ = this;
var _25550__$1 = this;
return (new cljs.core.async.t_cljs$core$async25548(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25549__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25550){
var self__ = this;
var _25550__$1 = this;
return self__.meta25549;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25548.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25549","meta25549",1151107139,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25548";

cljs.core.async.t_cljs$core$async25548.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25548");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25548.
 */
cljs.core.async.__GT_t_cljs$core$async25548 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25548(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25549){
return (new cljs.core.async.t_cljs$core$async25548(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25549));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25548(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24434__auto___25668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___25668,mults,ensure_mult,p){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___25668,mults,ensure_mult,p){
return (function (state_25622){
var state_val_25623 = (state_25622[(1)]);
if((state_val_25623 === (7))){
var inst_25618 = (state_25622[(2)]);
var state_25622__$1 = state_25622;
var statearr_25624_25669 = state_25622__$1;
(statearr_25624_25669[(2)] = inst_25618);

(statearr_25624_25669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (20))){
var state_25622__$1 = state_25622;
var statearr_25625_25670 = state_25622__$1;
(statearr_25625_25670[(2)] = null);

(statearr_25625_25670[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (1))){
var state_25622__$1 = state_25622;
var statearr_25626_25671 = state_25622__$1;
(statearr_25626_25671[(2)] = null);

(statearr_25626_25671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (24))){
var inst_25601 = (state_25622[(7)]);
var inst_25610 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25601);
var state_25622__$1 = state_25622;
var statearr_25627_25672 = state_25622__$1;
(statearr_25627_25672[(2)] = inst_25610);

(statearr_25627_25672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (4))){
var inst_25553 = (state_25622[(8)]);
var inst_25553__$1 = (state_25622[(2)]);
var inst_25554 = (inst_25553__$1 == null);
var state_25622__$1 = (function (){var statearr_25628 = state_25622;
(statearr_25628[(8)] = inst_25553__$1);

return statearr_25628;
})();
if(cljs.core.truth_(inst_25554)){
var statearr_25629_25673 = state_25622__$1;
(statearr_25629_25673[(1)] = (5));

} else {
var statearr_25630_25674 = state_25622__$1;
(statearr_25630_25674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (15))){
var inst_25595 = (state_25622[(2)]);
var state_25622__$1 = state_25622;
var statearr_25631_25675 = state_25622__$1;
(statearr_25631_25675[(2)] = inst_25595);

(statearr_25631_25675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (21))){
var inst_25615 = (state_25622[(2)]);
var state_25622__$1 = (function (){var statearr_25632 = state_25622;
(statearr_25632[(9)] = inst_25615);

return statearr_25632;
})();
var statearr_25633_25676 = state_25622__$1;
(statearr_25633_25676[(2)] = null);

(statearr_25633_25676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (13))){
var inst_25577 = (state_25622[(10)]);
var inst_25579 = cljs.core.chunked_seq_QMARK_.call(null,inst_25577);
var state_25622__$1 = state_25622;
if(inst_25579){
var statearr_25634_25677 = state_25622__$1;
(statearr_25634_25677[(1)] = (16));

} else {
var statearr_25635_25678 = state_25622__$1;
(statearr_25635_25678[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (22))){
var inst_25607 = (state_25622[(2)]);
var state_25622__$1 = state_25622;
if(cljs.core.truth_(inst_25607)){
var statearr_25636_25679 = state_25622__$1;
(statearr_25636_25679[(1)] = (23));

} else {
var statearr_25637_25680 = state_25622__$1;
(statearr_25637_25680[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (6))){
var inst_25603 = (state_25622[(11)]);
var inst_25601 = (state_25622[(7)]);
var inst_25553 = (state_25622[(8)]);
var inst_25601__$1 = topic_fn.call(null,inst_25553);
var inst_25602 = cljs.core.deref.call(null,mults);
var inst_25603__$1 = cljs.core.get.call(null,inst_25602,inst_25601__$1);
var state_25622__$1 = (function (){var statearr_25638 = state_25622;
(statearr_25638[(11)] = inst_25603__$1);

(statearr_25638[(7)] = inst_25601__$1);

return statearr_25638;
})();
if(cljs.core.truth_(inst_25603__$1)){
var statearr_25639_25681 = state_25622__$1;
(statearr_25639_25681[(1)] = (19));

} else {
var statearr_25640_25682 = state_25622__$1;
(statearr_25640_25682[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (25))){
var inst_25612 = (state_25622[(2)]);
var state_25622__$1 = state_25622;
var statearr_25641_25683 = state_25622__$1;
(statearr_25641_25683[(2)] = inst_25612);

(statearr_25641_25683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (17))){
var inst_25577 = (state_25622[(10)]);
var inst_25586 = cljs.core.first.call(null,inst_25577);
var inst_25587 = cljs.core.async.muxch_STAR_.call(null,inst_25586);
var inst_25588 = cljs.core.async.close_BANG_.call(null,inst_25587);
var inst_25589 = cljs.core.next.call(null,inst_25577);
var inst_25563 = inst_25589;
var inst_25564 = null;
var inst_25565 = (0);
var inst_25566 = (0);
var state_25622__$1 = (function (){var statearr_25642 = state_25622;
(statearr_25642[(12)] = inst_25564);

(statearr_25642[(13)] = inst_25588);

(statearr_25642[(14)] = inst_25566);

(statearr_25642[(15)] = inst_25565);

(statearr_25642[(16)] = inst_25563);

return statearr_25642;
})();
var statearr_25643_25684 = state_25622__$1;
(statearr_25643_25684[(2)] = null);

(statearr_25643_25684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (3))){
var inst_25620 = (state_25622[(2)]);
var state_25622__$1 = state_25622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25622__$1,inst_25620);
} else {
if((state_val_25623 === (12))){
var inst_25597 = (state_25622[(2)]);
var state_25622__$1 = state_25622;
var statearr_25644_25685 = state_25622__$1;
(statearr_25644_25685[(2)] = inst_25597);

(statearr_25644_25685[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (2))){
var state_25622__$1 = state_25622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25622__$1,(4),ch);
} else {
if((state_val_25623 === (23))){
var state_25622__$1 = state_25622;
var statearr_25645_25686 = state_25622__$1;
(statearr_25645_25686[(2)] = null);

(statearr_25645_25686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (19))){
var inst_25603 = (state_25622[(11)]);
var inst_25553 = (state_25622[(8)]);
var inst_25605 = cljs.core.async.muxch_STAR_.call(null,inst_25603);
var state_25622__$1 = state_25622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25622__$1,(22),inst_25605,inst_25553);
} else {
if((state_val_25623 === (11))){
var inst_25577 = (state_25622[(10)]);
var inst_25563 = (state_25622[(16)]);
var inst_25577__$1 = cljs.core.seq.call(null,inst_25563);
var state_25622__$1 = (function (){var statearr_25646 = state_25622;
(statearr_25646[(10)] = inst_25577__$1);

return statearr_25646;
})();
if(inst_25577__$1){
var statearr_25647_25687 = state_25622__$1;
(statearr_25647_25687[(1)] = (13));

} else {
var statearr_25648_25688 = state_25622__$1;
(statearr_25648_25688[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (9))){
var inst_25599 = (state_25622[(2)]);
var state_25622__$1 = state_25622;
var statearr_25649_25689 = state_25622__$1;
(statearr_25649_25689[(2)] = inst_25599);

(statearr_25649_25689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (5))){
var inst_25560 = cljs.core.deref.call(null,mults);
var inst_25561 = cljs.core.vals.call(null,inst_25560);
var inst_25562 = cljs.core.seq.call(null,inst_25561);
var inst_25563 = inst_25562;
var inst_25564 = null;
var inst_25565 = (0);
var inst_25566 = (0);
var state_25622__$1 = (function (){var statearr_25650 = state_25622;
(statearr_25650[(12)] = inst_25564);

(statearr_25650[(14)] = inst_25566);

(statearr_25650[(15)] = inst_25565);

(statearr_25650[(16)] = inst_25563);

return statearr_25650;
})();
var statearr_25651_25690 = state_25622__$1;
(statearr_25651_25690[(2)] = null);

(statearr_25651_25690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (14))){
var state_25622__$1 = state_25622;
var statearr_25655_25691 = state_25622__$1;
(statearr_25655_25691[(2)] = null);

(statearr_25655_25691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (16))){
var inst_25577 = (state_25622[(10)]);
var inst_25581 = cljs.core.chunk_first.call(null,inst_25577);
var inst_25582 = cljs.core.chunk_rest.call(null,inst_25577);
var inst_25583 = cljs.core.count.call(null,inst_25581);
var inst_25563 = inst_25582;
var inst_25564 = inst_25581;
var inst_25565 = inst_25583;
var inst_25566 = (0);
var state_25622__$1 = (function (){var statearr_25656 = state_25622;
(statearr_25656[(12)] = inst_25564);

(statearr_25656[(14)] = inst_25566);

(statearr_25656[(15)] = inst_25565);

(statearr_25656[(16)] = inst_25563);

return statearr_25656;
})();
var statearr_25657_25692 = state_25622__$1;
(statearr_25657_25692[(2)] = null);

(statearr_25657_25692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (10))){
var inst_25564 = (state_25622[(12)]);
var inst_25566 = (state_25622[(14)]);
var inst_25565 = (state_25622[(15)]);
var inst_25563 = (state_25622[(16)]);
var inst_25571 = cljs.core._nth.call(null,inst_25564,inst_25566);
var inst_25572 = cljs.core.async.muxch_STAR_.call(null,inst_25571);
var inst_25573 = cljs.core.async.close_BANG_.call(null,inst_25572);
var inst_25574 = (inst_25566 + (1));
var tmp25652 = inst_25564;
var tmp25653 = inst_25565;
var tmp25654 = inst_25563;
var inst_25563__$1 = tmp25654;
var inst_25564__$1 = tmp25652;
var inst_25565__$1 = tmp25653;
var inst_25566__$1 = inst_25574;
var state_25622__$1 = (function (){var statearr_25658 = state_25622;
(statearr_25658[(17)] = inst_25573);

(statearr_25658[(12)] = inst_25564__$1);

(statearr_25658[(14)] = inst_25566__$1);

(statearr_25658[(15)] = inst_25565__$1);

(statearr_25658[(16)] = inst_25563__$1);

return statearr_25658;
})();
var statearr_25659_25693 = state_25622__$1;
(statearr_25659_25693[(2)] = null);

(statearr_25659_25693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (18))){
var inst_25592 = (state_25622[(2)]);
var state_25622__$1 = state_25622;
var statearr_25660_25694 = state_25622__$1;
(statearr_25660_25694[(2)] = inst_25592);

(statearr_25660_25694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (8))){
var inst_25566 = (state_25622[(14)]);
var inst_25565 = (state_25622[(15)]);
var inst_25568 = (inst_25566 < inst_25565);
var inst_25569 = inst_25568;
var state_25622__$1 = state_25622;
if(cljs.core.truth_(inst_25569)){
var statearr_25661_25695 = state_25622__$1;
(statearr_25661_25695[(1)] = (10));

} else {
var statearr_25662_25696 = state_25622__$1;
(statearr_25662_25696[(1)] = (11));

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
});})(c__24434__auto___25668,mults,ensure_mult,p))
;
return ((function (switch__24339__auto__,c__24434__auto___25668,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24340__auto__ = null;
var cljs$core$async$state_machine__24340__auto____0 = (function (){
var statearr_25663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25663[(0)] = cljs$core$async$state_machine__24340__auto__);

(statearr_25663[(1)] = (1));

return statearr_25663;
});
var cljs$core$async$state_machine__24340__auto____1 = (function (state_25622){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_25622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e25664){if((e25664 instanceof Object)){
var ex__24343__auto__ = e25664;
var statearr_25665_25697 = state_25622;
(statearr_25665_25697[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25698 = state_25622;
state_25622 = G__25698;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$state_machine__24340__auto__ = function(state_25622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24340__auto____1.call(this,state_25622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24340__auto____0;
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24340__auto____1;
return cljs$core$async$state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___25668,mults,ensure_mult,p))
})();
var state__24436__auto__ = (function (){var statearr_25666 = f__24435__auto__.call(null);
(statearr_25666[(6)] = c__24434__auto___25668);

return statearr_25666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___25668,mults,ensure_mult,p))
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
var G__25700 = arguments.length;
switch (G__25700) {
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
var G__25703 = arguments.length;
switch (G__25703) {
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
var G__25706 = arguments.length;
switch (G__25706) {
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
var c__24434__auto___25773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___25773,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___25773,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25745){
var state_val_25746 = (state_25745[(1)]);
if((state_val_25746 === (7))){
var state_25745__$1 = state_25745;
var statearr_25747_25774 = state_25745__$1;
(statearr_25747_25774[(2)] = null);

(statearr_25747_25774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (1))){
var state_25745__$1 = state_25745;
var statearr_25748_25775 = state_25745__$1;
(statearr_25748_25775[(2)] = null);

(statearr_25748_25775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (4))){
var inst_25709 = (state_25745[(7)]);
var inst_25711 = (inst_25709 < cnt);
var state_25745__$1 = state_25745;
if(cljs.core.truth_(inst_25711)){
var statearr_25749_25776 = state_25745__$1;
(statearr_25749_25776[(1)] = (6));

} else {
var statearr_25750_25777 = state_25745__$1;
(statearr_25750_25777[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (15))){
var inst_25741 = (state_25745[(2)]);
var state_25745__$1 = state_25745;
var statearr_25751_25778 = state_25745__$1;
(statearr_25751_25778[(2)] = inst_25741);

(statearr_25751_25778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (13))){
var inst_25734 = cljs.core.async.close_BANG_.call(null,out);
var state_25745__$1 = state_25745;
var statearr_25752_25779 = state_25745__$1;
(statearr_25752_25779[(2)] = inst_25734);

(statearr_25752_25779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (6))){
var state_25745__$1 = state_25745;
var statearr_25753_25780 = state_25745__$1;
(statearr_25753_25780[(2)] = null);

(statearr_25753_25780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (3))){
var inst_25743 = (state_25745[(2)]);
var state_25745__$1 = state_25745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25745__$1,inst_25743);
} else {
if((state_val_25746 === (12))){
var inst_25731 = (state_25745[(8)]);
var inst_25731__$1 = (state_25745[(2)]);
var inst_25732 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25731__$1);
var state_25745__$1 = (function (){var statearr_25754 = state_25745;
(statearr_25754[(8)] = inst_25731__$1);

return statearr_25754;
})();
if(cljs.core.truth_(inst_25732)){
var statearr_25755_25781 = state_25745__$1;
(statearr_25755_25781[(1)] = (13));

} else {
var statearr_25756_25782 = state_25745__$1;
(statearr_25756_25782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (2))){
var inst_25708 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25709 = (0);
var state_25745__$1 = (function (){var statearr_25757 = state_25745;
(statearr_25757[(7)] = inst_25709);

(statearr_25757[(9)] = inst_25708);

return statearr_25757;
})();
var statearr_25758_25783 = state_25745__$1;
(statearr_25758_25783[(2)] = null);

(statearr_25758_25783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (11))){
var inst_25709 = (state_25745[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25745,(10),Object,null,(9));
var inst_25718 = chs__$1.call(null,inst_25709);
var inst_25719 = done.call(null,inst_25709);
var inst_25720 = cljs.core.async.take_BANG_.call(null,inst_25718,inst_25719);
var state_25745__$1 = state_25745;
var statearr_25759_25784 = state_25745__$1;
(statearr_25759_25784[(2)] = inst_25720);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25745__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (9))){
var inst_25709 = (state_25745[(7)]);
var inst_25722 = (state_25745[(2)]);
var inst_25723 = (inst_25709 + (1));
var inst_25709__$1 = inst_25723;
var state_25745__$1 = (function (){var statearr_25760 = state_25745;
(statearr_25760[(7)] = inst_25709__$1);

(statearr_25760[(10)] = inst_25722);

return statearr_25760;
})();
var statearr_25761_25785 = state_25745__$1;
(statearr_25761_25785[(2)] = null);

(statearr_25761_25785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (5))){
var inst_25729 = (state_25745[(2)]);
var state_25745__$1 = (function (){var statearr_25762 = state_25745;
(statearr_25762[(11)] = inst_25729);

return statearr_25762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25745__$1,(12),dchan);
} else {
if((state_val_25746 === (14))){
var inst_25731 = (state_25745[(8)]);
var inst_25736 = cljs.core.apply.call(null,f,inst_25731);
var state_25745__$1 = state_25745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25745__$1,(16),out,inst_25736);
} else {
if((state_val_25746 === (16))){
var inst_25738 = (state_25745[(2)]);
var state_25745__$1 = (function (){var statearr_25763 = state_25745;
(statearr_25763[(12)] = inst_25738);

return statearr_25763;
})();
var statearr_25764_25786 = state_25745__$1;
(statearr_25764_25786[(2)] = null);

(statearr_25764_25786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (10))){
var inst_25713 = (state_25745[(2)]);
var inst_25714 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25745__$1 = (function (){var statearr_25765 = state_25745;
(statearr_25765[(13)] = inst_25713);

return statearr_25765;
})();
var statearr_25766_25787 = state_25745__$1;
(statearr_25766_25787[(2)] = inst_25714);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25745__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (8))){
var inst_25727 = (state_25745[(2)]);
var state_25745__$1 = state_25745;
var statearr_25767_25788 = state_25745__$1;
(statearr_25767_25788[(2)] = inst_25727);

(statearr_25767_25788[(1)] = (5));


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
});})(c__24434__auto___25773,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24339__auto__,c__24434__auto___25773,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24340__auto__ = null;
var cljs$core$async$state_machine__24340__auto____0 = (function (){
var statearr_25768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25768[(0)] = cljs$core$async$state_machine__24340__auto__);

(statearr_25768[(1)] = (1));

return statearr_25768;
});
var cljs$core$async$state_machine__24340__auto____1 = (function (state_25745){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_25745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e25769){if((e25769 instanceof Object)){
var ex__24343__auto__ = e25769;
var statearr_25770_25789 = state_25745;
(statearr_25770_25789[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25790 = state_25745;
state_25745 = G__25790;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$state_machine__24340__auto__ = function(state_25745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24340__auto____1.call(this,state_25745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24340__auto____0;
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24340__auto____1;
return cljs$core$async$state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___25773,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24436__auto__ = (function (){var statearr_25771 = f__24435__auto__.call(null);
(statearr_25771[(6)] = c__24434__auto___25773);

return statearr_25771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___25773,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__25793 = arguments.length;
switch (G__25793) {
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
var c__24434__auto___25847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___25847,out){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___25847,out){
return (function (state_25825){
var state_val_25826 = (state_25825[(1)]);
if((state_val_25826 === (7))){
var inst_25805 = (state_25825[(7)]);
var inst_25804 = (state_25825[(8)]);
var inst_25804__$1 = (state_25825[(2)]);
var inst_25805__$1 = cljs.core.nth.call(null,inst_25804__$1,(0),null);
var inst_25806 = cljs.core.nth.call(null,inst_25804__$1,(1),null);
var inst_25807 = (inst_25805__$1 == null);
var state_25825__$1 = (function (){var statearr_25827 = state_25825;
(statearr_25827[(7)] = inst_25805__$1);

(statearr_25827[(8)] = inst_25804__$1);

(statearr_25827[(9)] = inst_25806);

return statearr_25827;
})();
if(cljs.core.truth_(inst_25807)){
var statearr_25828_25848 = state_25825__$1;
(statearr_25828_25848[(1)] = (8));

} else {
var statearr_25829_25849 = state_25825__$1;
(statearr_25829_25849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25826 === (1))){
var inst_25794 = cljs.core.vec.call(null,chs);
var inst_25795 = inst_25794;
var state_25825__$1 = (function (){var statearr_25830 = state_25825;
(statearr_25830[(10)] = inst_25795);

return statearr_25830;
})();
var statearr_25831_25850 = state_25825__$1;
(statearr_25831_25850[(2)] = null);

(statearr_25831_25850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25826 === (4))){
var inst_25795 = (state_25825[(10)]);
var state_25825__$1 = state_25825;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25825__$1,(7),inst_25795);
} else {
if((state_val_25826 === (6))){
var inst_25821 = (state_25825[(2)]);
var state_25825__$1 = state_25825;
var statearr_25832_25851 = state_25825__$1;
(statearr_25832_25851[(2)] = inst_25821);

(statearr_25832_25851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25826 === (3))){
var inst_25823 = (state_25825[(2)]);
var state_25825__$1 = state_25825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25825__$1,inst_25823);
} else {
if((state_val_25826 === (2))){
var inst_25795 = (state_25825[(10)]);
var inst_25797 = cljs.core.count.call(null,inst_25795);
var inst_25798 = (inst_25797 > (0));
var state_25825__$1 = state_25825;
if(cljs.core.truth_(inst_25798)){
var statearr_25834_25852 = state_25825__$1;
(statearr_25834_25852[(1)] = (4));

} else {
var statearr_25835_25853 = state_25825__$1;
(statearr_25835_25853[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25826 === (11))){
var inst_25795 = (state_25825[(10)]);
var inst_25814 = (state_25825[(2)]);
var tmp25833 = inst_25795;
var inst_25795__$1 = tmp25833;
var state_25825__$1 = (function (){var statearr_25836 = state_25825;
(statearr_25836[(11)] = inst_25814);

(statearr_25836[(10)] = inst_25795__$1);

return statearr_25836;
})();
var statearr_25837_25854 = state_25825__$1;
(statearr_25837_25854[(2)] = null);

(statearr_25837_25854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25826 === (9))){
var inst_25805 = (state_25825[(7)]);
var state_25825__$1 = state_25825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25825__$1,(11),out,inst_25805);
} else {
if((state_val_25826 === (5))){
var inst_25819 = cljs.core.async.close_BANG_.call(null,out);
var state_25825__$1 = state_25825;
var statearr_25838_25855 = state_25825__$1;
(statearr_25838_25855[(2)] = inst_25819);

(statearr_25838_25855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25826 === (10))){
var inst_25817 = (state_25825[(2)]);
var state_25825__$1 = state_25825;
var statearr_25839_25856 = state_25825__$1;
(statearr_25839_25856[(2)] = inst_25817);

(statearr_25839_25856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25826 === (8))){
var inst_25805 = (state_25825[(7)]);
var inst_25804 = (state_25825[(8)]);
var inst_25795 = (state_25825[(10)]);
var inst_25806 = (state_25825[(9)]);
var inst_25809 = (function (){var cs = inst_25795;
var vec__25800 = inst_25804;
var v = inst_25805;
var c = inst_25806;
return ((function (cs,vec__25800,v,c,inst_25805,inst_25804,inst_25795,inst_25806,state_val_25826,c__24434__auto___25847,out){
return (function (p1__25791_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25791_SHARP_);
});
;})(cs,vec__25800,v,c,inst_25805,inst_25804,inst_25795,inst_25806,state_val_25826,c__24434__auto___25847,out))
})();
var inst_25810 = cljs.core.filterv.call(null,inst_25809,inst_25795);
var inst_25795__$1 = inst_25810;
var state_25825__$1 = (function (){var statearr_25840 = state_25825;
(statearr_25840[(10)] = inst_25795__$1);

return statearr_25840;
})();
var statearr_25841_25857 = state_25825__$1;
(statearr_25841_25857[(2)] = null);

(statearr_25841_25857[(1)] = (2));


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
});})(c__24434__auto___25847,out))
;
return ((function (switch__24339__auto__,c__24434__auto___25847,out){
return (function() {
var cljs$core$async$state_machine__24340__auto__ = null;
var cljs$core$async$state_machine__24340__auto____0 = (function (){
var statearr_25842 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25842[(0)] = cljs$core$async$state_machine__24340__auto__);

(statearr_25842[(1)] = (1));

return statearr_25842;
});
var cljs$core$async$state_machine__24340__auto____1 = (function (state_25825){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_25825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e25843){if((e25843 instanceof Object)){
var ex__24343__auto__ = e25843;
var statearr_25844_25858 = state_25825;
(statearr_25844_25858[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25859 = state_25825;
state_25825 = G__25859;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$state_machine__24340__auto__ = function(state_25825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24340__auto____1.call(this,state_25825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24340__auto____0;
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24340__auto____1;
return cljs$core$async$state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___25847,out))
})();
var state__24436__auto__ = (function (){var statearr_25845 = f__24435__auto__.call(null);
(statearr_25845[(6)] = c__24434__auto___25847);

return statearr_25845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___25847,out))
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
var G__25861 = arguments.length;
switch (G__25861) {
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
var c__24434__auto___25906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___25906,out){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___25906,out){
return (function (state_25885){
var state_val_25886 = (state_25885[(1)]);
if((state_val_25886 === (7))){
var inst_25867 = (state_25885[(7)]);
var inst_25867__$1 = (state_25885[(2)]);
var inst_25868 = (inst_25867__$1 == null);
var inst_25869 = cljs.core.not.call(null,inst_25868);
var state_25885__$1 = (function (){var statearr_25887 = state_25885;
(statearr_25887[(7)] = inst_25867__$1);

return statearr_25887;
})();
if(inst_25869){
var statearr_25888_25907 = state_25885__$1;
(statearr_25888_25907[(1)] = (8));

} else {
var statearr_25889_25908 = state_25885__$1;
(statearr_25889_25908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25886 === (1))){
var inst_25862 = (0);
var state_25885__$1 = (function (){var statearr_25890 = state_25885;
(statearr_25890[(8)] = inst_25862);

return statearr_25890;
})();
var statearr_25891_25909 = state_25885__$1;
(statearr_25891_25909[(2)] = null);

(statearr_25891_25909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25886 === (4))){
var state_25885__$1 = state_25885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25885__$1,(7),ch);
} else {
if((state_val_25886 === (6))){
var inst_25880 = (state_25885[(2)]);
var state_25885__$1 = state_25885;
var statearr_25892_25910 = state_25885__$1;
(statearr_25892_25910[(2)] = inst_25880);

(statearr_25892_25910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25886 === (3))){
var inst_25882 = (state_25885[(2)]);
var inst_25883 = cljs.core.async.close_BANG_.call(null,out);
var state_25885__$1 = (function (){var statearr_25893 = state_25885;
(statearr_25893[(9)] = inst_25882);

return statearr_25893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25885__$1,inst_25883);
} else {
if((state_val_25886 === (2))){
var inst_25862 = (state_25885[(8)]);
var inst_25864 = (inst_25862 < n);
var state_25885__$1 = state_25885;
if(cljs.core.truth_(inst_25864)){
var statearr_25894_25911 = state_25885__$1;
(statearr_25894_25911[(1)] = (4));

} else {
var statearr_25895_25912 = state_25885__$1;
(statearr_25895_25912[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25886 === (11))){
var inst_25862 = (state_25885[(8)]);
var inst_25872 = (state_25885[(2)]);
var inst_25873 = (inst_25862 + (1));
var inst_25862__$1 = inst_25873;
var state_25885__$1 = (function (){var statearr_25896 = state_25885;
(statearr_25896[(10)] = inst_25872);

(statearr_25896[(8)] = inst_25862__$1);

return statearr_25896;
})();
var statearr_25897_25913 = state_25885__$1;
(statearr_25897_25913[(2)] = null);

(statearr_25897_25913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25886 === (9))){
var state_25885__$1 = state_25885;
var statearr_25898_25914 = state_25885__$1;
(statearr_25898_25914[(2)] = null);

(statearr_25898_25914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25886 === (5))){
var state_25885__$1 = state_25885;
var statearr_25899_25915 = state_25885__$1;
(statearr_25899_25915[(2)] = null);

(statearr_25899_25915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25886 === (10))){
var inst_25877 = (state_25885[(2)]);
var state_25885__$1 = state_25885;
var statearr_25900_25916 = state_25885__$1;
(statearr_25900_25916[(2)] = inst_25877);

(statearr_25900_25916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25886 === (8))){
var inst_25867 = (state_25885[(7)]);
var state_25885__$1 = state_25885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25885__$1,(11),out,inst_25867);
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
});})(c__24434__auto___25906,out))
;
return ((function (switch__24339__auto__,c__24434__auto___25906,out){
return (function() {
var cljs$core$async$state_machine__24340__auto__ = null;
var cljs$core$async$state_machine__24340__auto____0 = (function (){
var statearr_25901 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25901[(0)] = cljs$core$async$state_machine__24340__auto__);

(statearr_25901[(1)] = (1));

return statearr_25901;
});
var cljs$core$async$state_machine__24340__auto____1 = (function (state_25885){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_25885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e25902){if((e25902 instanceof Object)){
var ex__24343__auto__ = e25902;
var statearr_25903_25917 = state_25885;
(statearr_25903_25917[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25918 = state_25885;
state_25885 = G__25918;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$state_machine__24340__auto__ = function(state_25885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24340__auto____1.call(this,state_25885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24340__auto____0;
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24340__auto____1;
return cljs$core$async$state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___25906,out))
})();
var state__24436__auto__ = (function (){var statearr_25904 = f__24435__auto__.call(null);
(statearr_25904[(6)] = c__24434__auto___25906);

return statearr_25904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___25906,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25920 = (function (f,ch,meta25921){
this.f = f;
this.ch = ch;
this.meta25921 = meta25921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25922,meta25921__$1){
var self__ = this;
var _25922__$1 = this;
return (new cljs.core.async.t_cljs$core$async25920(self__.f,self__.ch,meta25921__$1));
});

cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25922){
var self__ = this;
var _25922__$1 = this;
return self__.meta25921;
});

cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25923 = (function (f,ch,meta25921,_,fn1,meta25924){
this.f = f;
this.ch = ch;
this.meta25921 = meta25921;
this._ = _;
this.fn1 = fn1;
this.meta25924 = meta25924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25925,meta25924__$1){
var self__ = this;
var _25925__$1 = this;
return (new cljs.core.async.t_cljs$core$async25923(self__.f,self__.ch,self__.meta25921,self__._,self__.fn1,meta25924__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25925){
var self__ = this;
var _25925__$1 = this;
return self__.meta25924;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25923.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25923.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25919_SHARP_){
return f1.call(null,(((p1__25919_SHARP_ == null))?null:self__.f.call(null,p1__25919_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25923.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25921","meta25921",401644249,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25920","cljs.core.async/t_cljs$core$async25920",-596710222,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25924","meta25924",-185312964,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25923";

cljs.core.async.t_cljs$core$async25923.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25923");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25923.
 */
cljs.core.async.__GT_t_cljs$core$async25923 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25923(f__$1,ch__$1,meta25921__$1,___$2,fn1__$1,meta25924){
return (new cljs.core.async.t_cljs$core$async25923(f__$1,ch__$1,meta25921__$1,___$2,fn1__$1,meta25924));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25923(self__.f,self__.ch,self__.meta25921,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25921","meta25921",401644249,null)], null);
});

cljs.core.async.t_cljs$core$async25920.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25920";

cljs.core.async.t_cljs$core$async25920.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25920");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25920.
 */
cljs.core.async.__GT_t_cljs$core$async25920 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25920(f__$1,ch__$1,meta25921){
return (new cljs.core.async.t_cljs$core$async25920(f__$1,ch__$1,meta25921));
});

}

return (new cljs.core.async.t_cljs$core$async25920(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25926 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25926 = (function (f,ch,meta25927){
this.f = f;
this.ch = ch;
this.meta25927 = meta25927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25928,meta25927__$1){
var self__ = this;
var _25928__$1 = this;
return (new cljs.core.async.t_cljs$core$async25926(self__.f,self__.ch,meta25927__$1));
});

cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25928){
var self__ = this;
var _25928__$1 = this;
return self__.meta25927;
});

cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25927","meta25927",128528058,null)], null);
});

cljs.core.async.t_cljs$core$async25926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25926";

cljs.core.async.t_cljs$core$async25926.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25926");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25926.
 */
cljs.core.async.__GT_t_cljs$core$async25926 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25926(f__$1,ch__$1,meta25927){
return (new cljs.core.async.t_cljs$core$async25926(f__$1,ch__$1,meta25927));
});

}

return (new cljs.core.async.t_cljs$core$async25926(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25929 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25929 = (function (p,ch,meta25930){
this.p = p;
this.ch = ch;
this.meta25930 = meta25930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25931,meta25930__$1){
var self__ = this;
var _25931__$1 = this;
return (new cljs.core.async.t_cljs$core$async25929(self__.p,self__.ch,meta25930__$1));
});

cljs.core.async.t_cljs$core$async25929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25931){
var self__ = this;
var _25931__$1 = this;
return self__.meta25930;
});

cljs.core.async.t_cljs$core$async25929.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25929.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25929.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25929.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25929.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25929.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25929.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25930","meta25930",-1513434472,null)], null);
});

cljs.core.async.t_cljs$core$async25929.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25929";

cljs.core.async.t_cljs$core$async25929.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25929");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25929.
 */
cljs.core.async.__GT_t_cljs$core$async25929 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25929(p__$1,ch__$1,meta25930){
return (new cljs.core.async.t_cljs$core$async25929(p__$1,ch__$1,meta25930));
});

}

return (new cljs.core.async.t_cljs$core$async25929(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25933 = arguments.length;
switch (G__25933) {
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
var c__24434__auto___25973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___25973,out){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___25973,out){
return (function (state_25954){
var state_val_25955 = (state_25954[(1)]);
if((state_val_25955 === (7))){
var inst_25950 = (state_25954[(2)]);
var state_25954__$1 = state_25954;
var statearr_25956_25974 = state_25954__$1;
(statearr_25956_25974[(2)] = inst_25950);

(statearr_25956_25974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25955 === (1))){
var state_25954__$1 = state_25954;
var statearr_25957_25975 = state_25954__$1;
(statearr_25957_25975[(2)] = null);

(statearr_25957_25975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25955 === (4))){
var inst_25936 = (state_25954[(7)]);
var inst_25936__$1 = (state_25954[(2)]);
var inst_25937 = (inst_25936__$1 == null);
var state_25954__$1 = (function (){var statearr_25958 = state_25954;
(statearr_25958[(7)] = inst_25936__$1);

return statearr_25958;
})();
if(cljs.core.truth_(inst_25937)){
var statearr_25959_25976 = state_25954__$1;
(statearr_25959_25976[(1)] = (5));

} else {
var statearr_25960_25977 = state_25954__$1;
(statearr_25960_25977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25955 === (6))){
var inst_25936 = (state_25954[(7)]);
var inst_25941 = p.call(null,inst_25936);
var state_25954__$1 = state_25954;
if(cljs.core.truth_(inst_25941)){
var statearr_25961_25978 = state_25954__$1;
(statearr_25961_25978[(1)] = (8));

} else {
var statearr_25962_25979 = state_25954__$1;
(statearr_25962_25979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25955 === (3))){
var inst_25952 = (state_25954[(2)]);
var state_25954__$1 = state_25954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25954__$1,inst_25952);
} else {
if((state_val_25955 === (2))){
var state_25954__$1 = state_25954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25954__$1,(4),ch);
} else {
if((state_val_25955 === (11))){
var inst_25944 = (state_25954[(2)]);
var state_25954__$1 = state_25954;
var statearr_25963_25980 = state_25954__$1;
(statearr_25963_25980[(2)] = inst_25944);

(statearr_25963_25980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25955 === (9))){
var state_25954__$1 = state_25954;
var statearr_25964_25981 = state_25954__$1;
(statearr_25964_25981[(2)] = null);

(statearr_25964_25981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25955 === (5))){
var inst_25939 = cljs.core.async.close_BANG_.call(null,out);
var state_25954__$1 = state_25954;
var statearr_25965_25982 = state_25954__$1;
(statearr_25965_25982[(2)] = inst_25939);

(statearr_25965_25982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25955 === (10))){
var inst_25947 = (state_25954[(2)]);
var state_25954__$1 = (function (){var statearr_25966 = state_25954;
(statearr_25966[(8)] = inst_25947);

return statearr_25966;
})();
var statearr_25967_25983 = state_25954__$1;
(statearr_25967_25983[(2)] = null);

(statearr_25967_25983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25955 === (8))){
var inst_25936 = (state_25954[(7)]);
var state_25954__$1 = state_25954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25954__$1,(11),out,inst_25936);
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
});})(c__24434__auto___25973,out))
;
return ((function (switch__24339__auto__,c__24434__auto___25973,out){
return (function() {
var cljs$core$async$state_machine__24340__auto__ = null;
var cljs$core$async$state_machine__24340__auto____0 = (function (){
var statearr_25968 = [null,null,null,null,null,null,null,null,null];
(statearr_25968[(0)] = cljs$core$async$state_machine__24340__auto__);

(statearr_25968[(1)] = (1));

return statearr_25968;
});
var cljs$core$async$state_machine__24340__auto____1 = (function (state_25954){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_25954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e25969){if((e25969 instanceof Object)){
var ex__24343__auto__ = e25969;
var statearr_25970_25984 = state_25954;
(statearr_25970_25984[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25985 = state_25954;
state_25954 = G__25985;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$state_machine__24340__auto__ = function(state_25954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24340__auto____1.call(this,state_25954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24340__auto____0;
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24340__auto____1;
return cljs$core$async$state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___25973,out))
})();
var state__24436__auto__ = (function (){var statearr_25971 = f__24435__auto__.call(null);
(statearr_25971[(6)] = c__24434__auto___25973);

return statearr_25971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___25973,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25987 = arguments.length;
switch (G__25987) {
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
var c__24434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto__){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto__){
return (function (state_26050){
var state_val_26051 = (state_26050[(1)]);
if((state_val_26051 === (7))){
var inst_26046 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
var statearr_26052_26090 = state_26050__$1;
(statearr_26052_26090[(2)] = inst_26046);

(statearr_26052_26090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (20))){
var inst_26016 = (state_26050[(7)]);
var inst_26027 = (state_26050[(2)]);
var inst_26028 = cljs.core.next.call(null,inst_26016);
var inst_26002 = inst_26028;
var inst_26003 = null;
var inst_26004 = (0);
var inst_26005 = (0);
var state_26050__$1 = (function (){var statearr_26053 = state_26050;
(statearr_26053[(8)] = inst_26005);

(statearr_26053[(9)] = inst_26002);

(statearr_26053[(10)] = inst_26027);

(statearr_26053[(11)] = inst_26003);

(statearr_26053[(12)] = inst_26004);

return statearr_26053;
})();
var statearr_26054_26091 = state_26050__$1;
(statearr_26054_26091[(2)] = null);

(statearr_26054_26091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (1))){
var state_26050__$1 = state_26050;
var statearr_26055_26092 = state_26050__$1;
(statearr_26055_26092[(2)] = null);

(statearr_26055_26092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (4))){
var inst_25991 = (state_26050[(13)]);
var inst_25991__$1 = (state_26050[(2)]);
var inst_25992 = (inst_25991__$1 == null);
var state_26050__$1 = (function (){var statearr_26056 = state_26050;
(statearr_26056[(13)] = inst_25991__$1);

return statearr_26056;
})();
if(cljs.core.truth_(inst_25992)){
var statearr_26057_26093 = state_26050__$1;
(statearr_26057_26093[(1)] = (5));

} else {
var statearr_26058_26094 = state_26050__$1;
(statearr_26058_26094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (15))){
var state_26050__$1 = state_26050;
var statearr_26062_26095 = state_26050__$1;
(statearr_26062_26095[(2)] = null);

(statearr_26062_26095[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (21))){
var state_26050__$1 = state_26050;
var statearr_26063_26096 = state_26050__$1;
(statearr_26063_26096[(2)] = null);

(statearr_26063_26096[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (13))){
var inst_26005 = (state_26050[(8)]);
var inst_26002 = (state_26050[(9)]);
var inst_26003 = (state_26050[(11)]);
var inst_26004 = (state_26050[(12)]);
var inst_26012 = (state_26050[(2)]);
var inst_26013 = (inst_26005 + (1));
var tmp26059 = inst_26002;
var tmp26060 = inst_26003;
var tmp26061 = inst_26004;
var inst_26002__$1 = tmp26059;
var inst_26003__$1 = tmp26060;
var inst_26004__$1 = tmp26061;
var inst_26005__$1 = inst_26013;
var state_26050__$1 = (function (){var statearr_26064 = state_26050;
(statearr_26064[(8)] = inst_26005__$1);

(statearr_26064[(9)] = inst_26002__$1);

(statearr_26064[(14)] = inst_26012);

(statearr_26064[(11)] = inst_26003__$1);

(statearr_26064[(12)] = inst_26004__$1);

return statearr_26064;
})();
var statearr_26065_26097 = state_26050__$1;
(statearr_26065_26097[(2)] = null);

(statearr_26065_26097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (22))){
var state_26050__$1 = state_26050;
var statearr_26066_26098 = state_26050__$1;
(statearr_26066_26098[(2)] = null);

(statearr_26066_26098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (6))){
var inst_25991 = (state_26050[(13)]);
var inst_26000 = f.call(null,inst_25991);
var inst_26001 = cljs.core.seq.call(null,inst_26000);
var inst_26002 = inst_26001;
var inst_26003 = null;
var inst_26004 = (0);
var inst_26005 = (0);
var state_26050__$1 = (function (){var statearr_26067 = state_26050;
(statearr_26067[(8)] = inst_26005);

(statearr_26067[(9)] = inst_26002);

(statearr_26067[(11)] = inst_26003);

(statearr_26067[(12)] = inst_26004);

return statearr_26067;
})();
var statearr_26068_26099 = state_26050__$1;
(statearr_26068_26099[(2)] = null);

(statearr_26068_26099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (17))){
var inst_26016 = (state_26050[(7)]);
var inst_26020 = cljs.core.chunk_first.call(null,inst_26016);
var inst_26021 = cljs.core.chunk_rest.call(null,inst_26016);
var inst_26022 = cljs.core.count.call(null,inst_26020);
var inst_26002 = inst_26021;
var inst_26003 = inst_26020;
var inst_26004 = inst_26022;
var inst_26005 = (0);
var state_26050__$1 = (function (){var statearr_26069 = state_26050;
(statearr_26069[(8)] = inst_26005);

(statearr_26069[(9)] = inst_26002);

(statearr_26069[(11)] = inst_26003);

(statearr_26069[(12)] = inst_26004);

return statearr_26069;
})();
var statearr_26070_26100 = state_26050__$1;
(statearr_26070_26100[(2)] = null);

(statearr_26070_26100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (3))){
var inst_26048 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26050__$1,inst_26048);
} else {
if((state_val_26051 === (12))){
var inst_26036 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
var statearr_26071_26101 = state_26050__$1;
(statearr_26071_26101[(2)] = inst_26036);

(statearr_26071_26101[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (2))){
var state_26050__$1 = state_26050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26050__$1,(4),in$);
} else {
if((state_val_26051 === (23))){
var inst_26044 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
var statearr_26072_26102 = state_26050__$1;
(statearr_26072_26102[(2)] = inst_26044);

(statearr_26072_26102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (19))){
var inst_26031 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
var statearr_26073_26103 = state_26050__$1;
(statearr_26073_26103[(2)] = inst_26031);

(statearr_26073_26103[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (11))){
var inst_26002 = (state_26050[(9)]);
var inst_26016 = (state_26050[(7)]);
var inst_26016__$1 = cljs.core.seq.call(null,inst_26002);
var state_26050__$1 = (function (){var statearr_26074 = state_26050;
(statearr_26074[(7)] = inst_26016__$1);

return statearr_26074;
})();
if(inst_26016__$1){
var statearr_26075_26104 = state_26050__$1;
(statearr_26075_26104[(1)] = (14));

} else {
var statearr_26076_26105 = state_26050__$1;
(statearr_26076_26105[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (9))){
var inst_26038 = (state_26050[(2)]);
var inst_26039 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26050__$1 = (function (){var statearr_26077 = state_26050;
(statearr_26077[(15)] = inst_26038);

return statearr_26077;
})();
if(cljs.core.truth_(inst_26039)){
var statearr_26078_26106 = state_26050__$1;
(statearr_26078_26106[(1)] = (21));

} else {
var statearr_26079_26107 = state_26050__$1;
(statearr_26079_26107[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (5))){
var inst_25994 = cljs.core.async.close_BANG_.call(null,out);
var state_26050__$1 = state_26050;
var statearr_26080_26108 = state_26050__$1;
(statearr_26080_26108[(2)] = inst_25994);

(statearr_26080_26108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (14))){
var inst_26016 = (state_26050[(7)]);
var inst_26018 = cljs.core.chunked_seq_QMARK_.call(null,inst_26016);
var state_26050__$1 = state_26050;
if(inst_26018){
var statearr_26081_26109 = state_26050__$1;
(statearr_26081_26109[(1)] = (17));

} else {
var statearr_26082_26110 = state_26050__$1;
(statearr_26082_26110[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (16))){
var inst_26034 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
var statearr_26083_26111 = state_26050__$1;
(statearr_26083_26111[(2)] = inst_26034);

(statearr_26083_26111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (10))){
var inst_26005 = (state_26050[(8)]);
var inst_26003 = (state_26050[(11)]);
var inst_26010 = cljs.core._nth.call(null,inst_26003,inst_26005);
var state_26050__$1 = state_26050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26050__$1,(13),out,inst_26010);
} else {
if((state_val_26051 === (18))){
var inst_26016 = (state_26050[(7)]);
var inst_26025 = cljs.core.first.call(null,inst_26016);
var state_26050__$1 = state_26050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26050__$1,(20),out,inst_26025);
} else {
if((state_val_26051 === (8))){
var inst_26005 = (state_26050[(8)]);
var inst_26004 = (state_26050[(12)]);
var inst_26007 = (inst_26005 < inst_26004);
var inst_26008 = inst_26007;
var state_26050__$1 = state_26050;
if(cljs.core.truth_(inst_26008)){
var statearr_26084_26112 = state_26050__$1;
(statearr_26084_26112[(1)] = (10));

} else {
var statearr_26085_26113 = state_26050__$1;
(statearr_26085_26113[(1)] = (11));

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
});})(c__24434__auto__))
;
return ((function (switch__24339__auto__,c__24434__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24340__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24340__auto____0 = (function (){
var statearr_26086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26086[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24340__auto__);

(statearr_26086[(1)] = (1));

return statearr_26086;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24340__auto____1 = (function (state_26050){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_26050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e26087){if((e26087 instanceof Object)){
var ex__24343__auto__ = e26087;
var statearr_26088_26114 = state_26050;
(statearr_26088_26114[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26115 = state_26050;
state_26050 = G__26115;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24340__auto__ = function(state_26050){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24340__auto____1.call(this,state_26050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24340__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24340__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto__))
})();
var state__24436__auto__ = (function (){var statearr_26089 = f__24435__auto__.call(null);
(statearr_26089[(6)] = c__24434__auto__);

return statearr_26089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto__))
);

return c__24434__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26117 = arguments.length;
switch (G__26117) {
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
var G__26120 = arguments.length;
switch (G__26120) {
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
var G__26123 = arguments.length;
switch (G__26123) {
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
var c__24434__auto___26170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___26170,out){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___26170,out){
return (function (state_26147){
var state_val_26148 = (state_26147[(1)]);
if((state_val_26148 === (7))){
var inst_26142 = (state_26147[(2)]);
var state_26147__$1 = state_26147;
var statearr_26149_26171 = state_26147__$1;
(statearr_26149_26171[(2)] = inst_26142);

(statearr_26149_26171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26148 === (1))){
var inst_26124 = null;
var state_26147__$1 = (function (){var statearr_26150 = state_26147;
(statearr_26150[(7)] = inst_26124);

return statearr_26150;
})();
var statearr_26151_26172 = state_26147__$1;
(statearr_26151_26172[(2)] = null);

(statearr_26151_26172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26148 === (4))){
var inst_26127 = (state_26147[(8)]);
var inst_26127__$1 = (state_26147[(2)]);
var inst_26128 = (inst_26127__$1 == null);
var inst_26129 = cljs.core.not.call(null,inst_26128);
var state_26147__$1 = (function (){var statearr_26152 = state_26147;
(statearr_26152[(8)] = inst_26127__$1);

return statearr_26152;
})();
if(inst_26129){
var statearr_26153_26173 = state_26147__$1;
(statearr_26153_26173[(1)] = (5));

} else {
var statearr_26154_26174 = state_26147__$1;
(statearr_26154_26174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26148 === (6))){
var state_26147__$1 = state_26147;
var statearr_26155_26175 = state_26147__$1;
(statearr_26155_26175[(2)] = null);

(statearr_26155_26175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26148 === (3))){
var inst_26144 = (state_26147[(2)]);
var inst_26145 = cljs.core.async.close_BANG_.call(null,out);
var state_26147__$1 = (function (){var statearr_26156 = state_26147;
(statearr_26156[(9)] = inst_26144);

return statearr_26156;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26147__$1,inst_26145);
} else {
if((state_val_26148 === (2))){
var state_26147__$1 = state_26147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26147__$1,(4),ch);
} else {
if((state_val_26148 === (11))){
var inst_26127 = (state_26147[(8)]);
var inst_26136 = (state_26147[(2)]);
var inst_26124 = inst_26127;
var state_26147__$1 = (function (){var statearr_26157 = state_26147;
(statearr_26157[(7)] = inst_26124);

(statearr_26157[(10)] = inst_26136);

return statearr_26157;
})();
var statearr_26158_26176 = state_26147__$1;
(statearr_26158_26176[(2)] = null);

(statearr_26158_26176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26148 === (9))){
var inst_26127 = (state_26147[(8)]);
var state_26147__$1 = state_26147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26147__$1,(11),out,inst_26127);
} else {
if((state_val_26148 === (5))){
var inst_26127 = (state_26147[(8)]);
var inst_26124 = (state_26147[(7)]);
var inst_26131 = cljs.core._EQ_.call(null,inst_26127,inst_26124);
var state_26147__$1 = state_26147;
if(inst_26131){
var statearr_26160_26177 = state_26147__$1;
(statearr_26160_26177[(1)] = (8));

} else {
var statearr_26161_26178 = state_26147__$1;
(statearr_26161_26178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26148 === (10))){
var inst_26139 = (state_26147[(2)]);
var state_26147__$1 = state_26147;
var statearr_26162_26179 = state_26147__$1;
(statearr_26162_26179[(2)] = inst_26139);

(statearr_26162_26179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26148 === (8))){
var inst_26124 = (state_26147[(7)]);
var tmp26159 = inst_26124;
var inst_26124__$1 = tmp26159;
var state_26147__$1 = (function (){var statearr_26163 = state_26147;
(statearr_26163[(7)] = inst_26124__$1);

return statearr_26163;
})();
var statearr_26164_26180 = state_26147__$1;
(statearr_26164_26180[(2)] = null);

(statearr_26164_26180[(1)] = (2));


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
});})(c__24434__auto___26170,out))
;
return ((function (switch__24339__auto__,c__24434__auto___26170,out){
return (function() {
var cljs$core$async$state_machine__24340__auto__ = null;
var cljs$core$async$state_machine__24340__auto____0 = (function (){
var statearr_26165 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26165[(0)] = cljs$core$async$state_machine__24340__auto__);

(statearr_26165[(1)] = (1));

return statearr_26165;
});
var cljs$core$async$state_machine__24340__auto____1 = (function (state_26147){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_26147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e26166){if((e26166 instanceof Object)){
var ex__24343__auto__ = e26166;
var statearr_26167_26181 = state_26147;
(statearr_26167_26181[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26182 = state_26147;
state_26147 = G__26182;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$state_machine__24340__auto__ = function(state_26147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24340__auto____1.call(this,state_26147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24340__auto____0;
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24340__auto____1;
return cljs$core$async$state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___26170,out))
})();
var state__24436__auto__ = (function (){var statearr_26168 = f__24435__auto__.call(null);
(statearr_26168[(6)] = c__24434__auto___26170);

return statearr_26168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___26170,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26184 = arguments.length;
switch (G__26184) {
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
var c__24434__auto___26250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___26250,out){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___26250,out){
return (function (state_26222){
var state_val_26223 = (state_26222[(1)]);
if((state_val_26223 === (7))){
var inst_26218 = (state_26222[(2)]);
var state_26222__$1 = state_26222;
var statearr_26224_26251 = state_26222__$1;
(statearr_26224_26251[(2)] = inst_26218);

(statearr_26224_26251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26223 === (1))){
var inst_26185 = (new Array(n));
var inst_26186 = inst_26185;
var inst_26187 = (0);
var state_26222__$1 = (function (){var statearr_26225 = state_26222;
(statearr_26225[(7)] = inst_26187);

(statearr_26225[(8)] = inst_26186);

return statearr_26225;
})();
var statearr_26226_26252 = state_26222__$1;
(statearr_26226_26252[(2)] = null);

(statearr_26226_26252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26223 === (4))){
var inst_26190 = (state_26222[(9)]);
var inst_26190__$1 = (state_26222[(2)]);
var inst_26191 = (inst_26190__$1 == null);
var inst_26192 = cljs.core.not.call(null,inst_26191);
var state_26222__$1 = (function (){var statearr_26227 = state_26222;
(statearr_26227[(9)] = inst_26190__$1);

return statearr_26227;
})();
if(inst_26192){
var statearr_26228_26253 = state_26222__$1;
(statearr_26228_26253[(1)] = (5));

} else {
var statearr_26229_26254 = state_26222__$1;
(statearr_26229_26254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26223 === (15))){
var inst_26212 = (state_26222[(2)]);
var state_26222__$1 = state_26222;
var statearr_26230_26255 = state_26222__$1;
(statearr_26230_26255[(2)] = inst_26212);

(statearr_26230_26255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26223 === (13))){
var state_26222__$1 = state_26222;
var statearr_26231_26256 = state_26222__$1;
(statearr_26231_26256[(2)] = null);

(statearr_26231_26256[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26223 === (6))){
var inst_26187 = (state_26222[(7)]);
var inst_26208 = (inst_26187 > (0));
var state_26222__$1 = state_26222;
if(cljs.core.truth_(inst_26208)){
var statearr_26232_26257 = state_26222__$1;
(statearr_26232_26257[(1)] = (12));

} else {
var statearr_26233_26258 = state_26222__$1;
(statearr_26233_26258[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26223 === (3))){
var inst_26220 = (state_26222[(2)]);
var state_26222__$1 = state_26222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26222__$1,inst_26220);
} else {
if((state_val_26223 === (12))){
var inst_26186 = (state_26222[(8)]);
var inst_26210 = cljs.core.vec.call(null,inst_26186);
var state_26222__$1 = state_26222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26222__$1,(15),out,inst_26210);
} else {
if((state_val_26223 === (2))){
var state_26222__$1 = state_26222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26222__$1,(4),ch);
} else {
if((state_val_26223 === (11))){
var inst_26202 = (state_26222[(2)]);
var inst_26203 = (new Array(n));
var inst_26186 = inst_26203;
var inst_26187 = (0);
var state_26222__$1 = (function (){var statearr_26234 = state_26222;
(statearr_26234[(10)] = inst_26202);

(statearr_26234[(7)] = inst_26187);

(statearr_26234[(8)] = inst_26186);

return statearr_26234;
})();
var statearr_26235_26259 = state_26222__$1;
(statearr_26235_26259[(2)] = null);

(statearr_26235_26259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26223 === (9))){
var inst_26186 = (state_26222[(8)]);
var inst_26200 = cljs.core.vec.call(null,inst_26186);
var state_26222__$1 = state_26222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26222__$1,(11),out,inst_26200);
} else {
if((state_val_26223 === (5))){
var inst_26190 = (state_26222[(9)]);
var inst_26195 = (state_26222[(11)]);
var inst_26187 = (state_26222[(7)]);
var inst_26186 = (state_26222[(8)]);
var inst_26194 = (inst_26186[inst_26187] = inst_26190);
var inst_26195__$1 = (inst_26187 + (1));
var inst_26196 = (inst_26195__$1 < n);
var state_26222__$1 = (function (){var statearr_26236 = state_26222;
(statearr_26236[(11)] = inst_26195__$1);

(statearr_26236[(12)] = inst_26194);

return statearr_26236;
})();
if(cljs.core.truth_(inst_26196)){
var statearr_26237_26260 = state_26222__$1;
(statearr_26237_26260[(1)] = (8));

} else {
var statearr_26238_26261 = state_26222__$1;
(statearr_26238_26261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26223 === (14))){
var inst_26215 = (state_26222[(2)]);
var inst_26216 = cljs.core.async.close_BANG_.call(null,out);
var state_26222__$1 = (function (){var statearr_26240 = state_26222;
(statearr_26240[(13)] = inst_26215);

return statearr_26240;
})();
var statearr_26241_26262 = state_26222__$1;
(statearr_26241_26262[(2)] = inst_26216);

(statearr_26241_26262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26223 === (10))){
var inst_26206 = (state_26222[(2)]);
var state_26222__$1 = state_26222;
var statearr_26242_26263 = state_26222__$1;
(statearr_26242_26263[(2)] = inst_26206);

(statearr_26242_26263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26223 === (8))){
var inst_26195 = (state_26222[(11)]);
var inst_26186 = (state_26222[(8)]);
var tmp26239 = inst_26186;
var inst_26186__$1 = tmp26239;
var inst_26187 = inst_26195;
var state_26222__$1 = (function (){var statearr_26243 = state_26222;
(statearr_26243[(7)] = inst_26187);

(statearr_26243[(8)] = inst_26186__$1);

return statearr_26243;
})();
var statearr_26244_26264 = state_26222__$1;
(statearr_26244_26264[(2)] = null);

(statearr_26244_26264[(1)] = (2));


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
});})(c__24434__auto___26250,out))
;
return ((function (switch__24339__auto__,c__24434__auto___26250,out){
return (function() {
var cljs$core$async$state_machine__24340__auto__ = null;
var cljs$core$async$state_machine__24340__auto____0 = (function (){
var statearr_26245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26245[(0)] = cljs$core$async$state_machine__24340__auto__);

(statearr_26245[(1)] = (1));

return statearr_26245;
});
var cljs$core$async$state_machine__24340__auto____1 = (function (state_26222){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_26222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e26246){if((e26246 instanceof Object)){
var ex__24343__auto__ = e26246;
var statearr_26247_26265 = state_26222;
(statearr_26247_26265[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26266 = state_26222;
state_26222 = G__26266;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$state_machine__24340__auto__ = function(state_26222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24340__auto____1.call(this,state_26222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24340__auto____0;
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24340__auto____1;
return cljs$core$async$state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___26250,out))
})();
var state__24436__auto__ = (function (){var statearr_26248 = f__24435__auto__.call(null);
(statearr_26248[(6)] = c__24434__auto___26250);

return statearr_26248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___26250,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26268 = arguments.length;
switch (G__26268) {
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
var c__24434__auto___26338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24434__auto___26338,out){
return (function (){
var f__24435__auto__ = (function (){var switch__24339__auto__ = ((function (c__24434__auto___26338,out){
return (function (state_26310){
var state_val_26311 = (state_26310[(1)]);
if((state_val_26311 === (7))){
var inst_26306 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26312_26339 = state_26310__$1;
(statearr_26312_26339[(2)] = inst_26306);

(statearr_26312_26339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (1))){
var inst_26269 = [];
var inst_26270 = inst_26269;
var inst_26271 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26310__$1 = (function (){var statearr_26313 = state_26310;
(statearr_26313[(7)] = inst_26270);

(statearr_26313[(8)] = inst_26271);

return statearr_26313;
})();
var statearr_26314_26340 = state_26310__$1;
(statearr_26314_26340[(2)] = null);

(statearr_26314_26340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (4))){
var inst_26274 = (state_26310[(9)]);
var inst_26274__$1 = (state_26310[(2)]);
var inst_26275 = (inst_26274__$1 == null);
var inst_26276 = cljs.core.not.call(null,inst_26275);
var state_26310__$1 = (function (){var statearr_26315 = state_26310;
(statearr_26315[(9)] = inst_26274__$1);

return statearr_26315;
})();
if(inst_26276){
var statearr_26316_26341 = state_26310__$1;
(statearr_26316_26341[(1)] = (5));

} else {
var statearr_26317_26342 = state_26310__$1;
(statearr_26317_26342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (15))){
var inst_26300 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26318_26343 = state_26310__$1;
(statearr_26318_26343[(2)] = inst_26300);

(statearr_26318_26343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (13))){
var state_26310__$1 = state_26310;
var statearr_26319_26344 = state_26310__$1;
(statearr_26319_26344[(2)] = null);

(statearr_26319_26344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (6))){
var inst_26270 = (state_26310[(7)]);
var inst_26295 = inst_26270.length;
var inst_26296 = (inst_26295 > (0));
var state_26310__$1 = state_26310;
if(cljs.core.truth_(inst_26296)){
var statearr_26320_26345 = state_26310__$1;
(statearr_26320_26345[(1)] = (12));

} else {
var statearr_26321_26346 = state_26310__$1;
(statearr_26321_26346[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (3))){
var inst_26308 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26310__$1,inst_26308);
} else {
if((state_val_26311 === (12))){
var inst_26270 = (state_26310[(7)]);
var inst_26298 = cljs.core.vec.call(null,inst_26270);
var state_26310__$1 = state_26310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26310__$1,(15),out,inst_26298);
} else {
if((state_val_26311 === (2))){
var state_26310__$1 = state_26310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26310__$1,(4),ch);
} else {
if((state_val_26311 === (11))){
var inst_26274 = (state_26310[(9)]);
var inst_26278 = (state_26310[(10)]);
var inst_26288 = (state_26310[(2)]);
var inst_26289 = [];
var inst_26290 = inst_26289.push(inst_26274);
var inst_26270 = inst_26289;
var inst_26271 = inst_26278;
var state_26310__$1 = (function (){var statearr_26322 = state_26310;
(statearr_26322[(7)] = inst_26270);

(statearr_26322[(11)] = inst_26290);

(statearr_26322[(8)] = inst_26271);

(statearr_26322[(12)] = inst_26288);

return statearr_26322;
})();
var statearr_26323_26347 = state_26310__$1;
(statearr_26323_26347[(2)] = null);

(statearr_26323_26347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (9))){
var inst_26270 = (state_26310[(7)]);
var inst_26286 = cljs.core.vec.call(null,inst_26270);
var state_26310__$1 = state_26310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26310__$1,(11),out,inst_26286);
} else {
if((state_val_26311 === (5))){
var inst_26274 = (state_26310[(9)]);
var inst_26278 = (state_26310[(10)]);
var inst_26271 = (state_26310[(8)]);
var inst_26278__$1 = f.call(null,inst_26274);
var inst_26279 = cljs.core._EQ_.call(null,inst_26278__$1,inst_26271);
var inst_26280 = cljs.core.keyword_identical_QMARK_.call(null,inst_26271,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26281 = ((inst_26279) || (inst_26280));
var state_26310__$1 = (function (){var statearr_26324 = state_26310;
(statearr_26324[(10)] = inst_26278__$1);

return statearr_26324;
})();
if(cljs.core.truth_(inst_26281)){
var statearr_26325_26348 = state_26310__$1;
(statearr_26325_26348[(1)] = (8));

} else {
var statearr_26326_26349 = state_26310__$1;
(statearr_26326_26349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (14))){
var inst_26303 = (state_26310[(2)]);
var inst_26304 = cljs.core.async.close_BANG_.call(null,out);
var state_26310__$1 = (function (){var statearr_26328 = state_26310;
(statearr_26328[(13)] = inst_26303);

return statearr_26328;
})();
var statearr_26329_26350 = state_26310__$1;
(statearr_26329_26350[(2)] = inst_26304);

(statearr_26329_26350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (10))){
var inst_26293 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26330_26351 = state_26310__$1;
(statearr_26330_26351[(2)] = inst_26293);

(statearr_26330_26351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (8))){
var inst_26270 = (state_26310[(7)]);
var inst_26274 = (state_26310[(9)]);
var inst_26278 = (state_26310[(10)]);
var inst_26283 = inst_26270.push(inst_26274);
var tmp26327 = inst_26270;
var inst_26270__$1 = tmp26327;
var inst_26271 = inst_26278;
var state_26310__$1 = (function (){var statearr_26331 = state_26310;
(statearr_26331[(14)] = inst_26283);

(statearr_26331[(7)] = inst_26270__$1);

(statearr_26331[(8)] = inst_26271);

return statearr_26331;
})();
var statearr_26332_26352 = state_26310__$1;
(statearr_26332_26352[(2)] = null);

(statearr_26332_26352[(1)] = (2));


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
});})(c__24434__auto___26338,out))
;
return ((function (switch__24339__auto__,c__24434__auto___26338,out){
return (function() {
var cljs$core$async$state_machine__24340__auto__ = null;
var cljs$core$async$state_machine__24340__auto____0 = (function (){
var statearr_26333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26333[(0)] = cljs$core$async$state_machine__24340__auto__);

(statearr_26333[(1)] = (1));

return statearr_26333;
});
var cljs$core$async$state_machine__24340__auto____1 = (function (state_26310){
while(true){
var ret_value__24341__auto__ = (function (){try{while(true){
var result__24342__auto__ = switch__24339__auto__.call(null,state_26310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24342__auto__;
}
break;
}
}catch (e26334){if((e26334 instanceof Object)){
var ex__24343__auto__ = e26334;
var statearr_26335_26353 = state_26310;
(statearr_26335_26353[(5)] = ex__24343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26354 = state_26310;
state_26310 = G__26354;
continue;
} else {
return ret_value__24341__auto__;
}
break;
}
});
cljs$core$async$state_machine__24340__auto__ = function(state_26310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24340__auto____1.call(this,state_26310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24340__auto____0;
cljs$core$async$state_machine__24340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24340__auto____1;
return cljs$core$async$state_machine__24340__auto__;
})()
;})(switch__24339__auto__,c__24434__auto___26338,out))
})();
var state__24436__auto__ = (function (){var statearr_26336 = f__24435__auto__.call(null);
(statearr_26336[(6)] = c__24434__auto___26338);

return statearr_26336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24436__auto__);
});})(c__24434__auto___26338,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1543683803964
