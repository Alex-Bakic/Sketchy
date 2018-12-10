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
var G__25140 = arguments.length;
switch (G__25140) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25141 = (function (f,blockable,meta25142){
this.f = f;
this.blockable = blockable;
this.meta25142 = meta25142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25143,meta25142__$1){
var self__ = this;
var _25143__$1 = this;
return (new cljs.core.async.t_cljs$core$async25141(self__.f,self__.blockable,meta25142__$1));
});

cljs.core.async.t_cljs$core$async25141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25143){
var self__ = this;
var _25143__$1 = this;
return self__.meta25142;
});

cljs.core.async.t_cljs$core$async25141.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25141.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25141.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25141.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25142","meta25142",1872928790,null)], null);
});

cljs.core.async.t_cljs$core$async25141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25141";

cljs.core.async.t_cljs$core$async25141.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25141");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25141.
 */
cljs.core.async.__GT_t_cljs$core$async25141 = (function cljs$core$async$__GT_t_cljs$core$async25141(f__$1,blockable__$1,meta25142){
return (new cljs.core.async.t_cljs$core$async25141(f__$1,blockable__$1,meta25142));
});

}

return (new cljs.core.async.t_cljs$core$async25141(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25147 = arguments.length;
switch (G__25147) {
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
var G__25150 = arguments.length;
switch (G__25150) {
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
var G__25153 = arguments.length;
switch (G__25153) {
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
var val_25155 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25155);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25155,ret){
return (function (){
return fn1.call(null,val_25155);
});})(val_25155,ret))
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
var G__25157 = arguments.length;
switch (G__25157) {
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
var n__4518__auto___25159 = n;
var x_25160 = (0);
while(true){
if((x_25160 < n__4518__auto___25159)){
(a[x_25160] = (0));

var G__25161 = (x_25160 + (1));
x_25160 = G__25161;
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

var G__25162 = (i + (1));
i = G__25162;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25163 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25163 = (function (flag,meta25164){
this.flag = flag;
this.meta25164 = meta25164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25165,meta25164__$1){
var self__ = this;
var _25165__$1 = this;
return (new cljs.core.async.t_cljs$core$async25163(self__.flag,meta25164__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25165){
var self__ = this;
var _25165__$1 = this;
return self__.meta25164;
});})(flag))
;

cljs.core.async.t_cljs$core$async25163.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25163.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25163.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25164","meta25164",1504669997,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25163";

cljs.core.async.t_cljs$core$async25163.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25163");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25163.
 */
cljs.core.async.__GT_t_cljs$core$async25163 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25163(flag__$1,meta25164){
return (new cljs.core.async.t_cljs$core$async25163(flag__$1,meta25164));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25163(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25166 = (function (flag,cb,meta25167){
this.flag = flag;
this.cb = cb;
this.meta25167 = meta25167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25168,meta25167__$1){
var self__ = this;
var _25168__$1 = this;
return (new cljs.core.async.t_cljs$core$async25166(self__.flag,self__.cb,meta25167__$1));
});

cljs.core.async.t_cljs$core$async25166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25168){
var self__ = this;
var _25168__$1 = this;
return self__.meta25167;
});

cljs.core.async.t_cljs$core$async25166.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25166.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25167","meta25167",1278818718,null)], null);
});

cljs.core.async.t_cljs$core$async25166.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25166";

cljs.core.async.t_cljs$core$async25166.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25166");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25166.
 */
cljs.core.async.__GT_t_cljs$core$async25166 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25166(flag__$1,cb__$1,meta25167){
return (new cljs.core.async.t_cljs$core$async25166(flag__$1,cb__$1,meta25167));
});

}

return (new cljs.core.async.t_cljs$core$async25166(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25169_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25169_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25170_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25170_SHARP_,port], null));
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
var G__25171 = (i + (1));
i = G__25171;
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
var len__4641__auto___25177 = arguments.length;
var i__4642__auto___25178 = (0);
while(true){
if((i__4642__auto___25178 < len__4641__auto___25177)){
args__4647__auto__.push((arguments[i__4642__auto___25178]));

var G__25179 = (i__4642__auto___25178 + (1));
i__4642__auto___25178 = G__25179;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25174){
var map__25175 = p__25174;
var map__25175__$1 = (((((!((map__25175 == null))))?(((((map__25175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25175):map__25175);
var opts = map__25175__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25172){
var G__25173 = cljs.core.first.call(null,seq25172);
var seq25172__$1 = cljs.core.next.call(null,seq25172);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25173,seq25172__$1);
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
var G__25181 = arguments.length;
switch (G__25181) {
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
var c__25080__auto___25227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___25227){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___25227){
return (function (state_25205){
var state_val_25206 = (state_25205[(1)]);
if((state_val_25206 === (7))){
var inst_25201 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25207_25228 = state_25205__$1;
(statearr_25207_25228[(2)] = inst_25201);

(statearr_25207_25228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (1))){
var state_25205__$1 = state_25205;
var statearr_25208_25229 = state_25205__$1;
(statearr_25208_25229[(2)] = null);

(statearr_25208_25229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (4))){
var inst_25184 = (state_25205[(7)]);
var inst_25184__$1 = (state_25205[(2)]);
var inst_25185 = (inst_25184__$1 == null);
var state_25205__$1 = (function (){var statearr_25209 = state_25205;
(statearr_25209[(7)] = inst_25184__$1);

return statearr_25209;
})();
if(cljs.core.truth_(inst_25185)){
var statearr_25210_25230 = state_25205__$1;
(statearr_25210_25230[(1)] = (5));

} else {
var statearr_25211_25231 = state_25205__$1;
(statearr_25211_25231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (13))){
var state_25205__$1 = state_25205;
var statearr_25212_25232 = state_25205__$1;
(statearr_25212_25232[(2)] = null);

(statearr_25212_25232[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (6))){
var inst_25184 = (state_25205[(7)]);
var state_25205__$1 = state_25205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25205__$1,(11),to,inst_25184);
} else {
if((state_val_25206 === (3))){
var inst_25203 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25205__$1,inst_25203);
} else {
if((state_val_25206 === (12))){
var state_25205__$1 = state_25205;
var statearr_25213_25233 = state_25205__$1;
(statearr_25213_25233[(2)] = null);

(statearr_25213_25233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (2))){
var state_25205__$1 = state_25205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25205__$1,(4),from);
} else {
if((state_val_25206 === (11))){
var inst_25194 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
if(cljs.core.truth_(inst_25194)){
var statearr_25214_25234 = state_25205__$1;
(statearr_25214_25234[(1)] = (12));

} else {
var statearr_25215_25235 = state_25205__$1;
(statearr_25215_25235[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (9))){
var state_25205__$1 = state_25205;
var statearr_25216_25236 = state_25205__$1;
(statearr_25216_25236[(2)] = null);

(statearr_25216_25236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (5))){
var state_25205__$1 = state_25205;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25217_25237 = state_25205__$1;
(statearr_25217_25237[(1)] = (8));

} else {
var statearr_25218_25238 = state_25205__$1;
(statearr_25218_25238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (14))){
var inst_25199 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25219_25239 = state_25205__$1;
(statearr_25219_25239[(2)] = inst_25199);

(statearr_25219_25239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (10))){
var inst_25191 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25220_25240 = state_25205__$1;
(statearr_25220_25240[(2)] = inst_25191);

(statearr_25220_25240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (8))){
var inst_25188 = cljs.core.async.close_BANG_.call(null,to);
var state_25205__$1 = state_25205;
var statearr_25221_25241 = state_25205__$1;
(statearr_25221_25241[(2)] = inst_25188);

(statearr_25221_25241[(1)] = (10));


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
});})(c__25080__auto___25227))
;
return ((function (switch__24985__auto__,c__25080__auto___25227){
return (function() {
var cljs$core$async$state_machine__24986__auto__ = null;
var cljs$core$async$state_machine__24986__auto____0 = (function (){
var statearr_25222 = [null,null,null,null,null,null,null,null];
(statearr_25222[(0)] = cljs$core$async$state_machine__24986__auto__);

(statearr_25222[(1)] = (1));

return statearr_25222;
});
var cljs$core$async$state_machine__24986__auto____1 = (function (state_25205){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_25205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e25223){if((e25223 instanceof Object)){
var ex__24989__auto__ = e25223;
var statearr_25224_25242 = state_25205;
(statearr_25224_25242[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25243 = state_25205;
state_25205 = G__25243;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$state_machine__24986__auto__ = function(state_25205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24986__auto____1.call(this,state_25205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24986__auto____0;
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24986__auto____1;
return cljs$core$async$state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___25227))
})();
var state__25082__auto__ = (function (){var statearr_25225 = f__25081__auto__.call(null);
(statearr_25225[(6)] = c__25080__auto___25227);

return statearr_25225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___25227))
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
return (function (p__25244){
var vec__25245 = p__25244;
var v = cljs.core.nth.call(null,vec__25245,(0),null);
var p = cljs.core.nth.call(null,vec__25245,(1),null);
var job = vec__25245;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25080__auto___25416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___25416,res,vec__25245,v,p,job,jobs,results){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___25416,res,vec__25245,v,p,job,jobs,results){
return (function (state_25252){
var state_val_25253 = (state_25252[(1)]);
if((state_val_25253 === (1))){
var state_25252__$1 = state_25252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25252__$1,(2),res,v);
} else {
if((state_val_25253 === (2))){
var inst_25249 = (state_25252[(2)]);
var inst_25250 = cljs.core.async.close_BANG_.call(null,res);
var state_25252__$1 = (function (){var statearr_25254 = state_25252;
(statearr_25254[(7)] = inst_25249);

return statearr_25254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25252__$1,inst_25250);
} else {
return null;
}
}
});})(c__25080__auto___25416,res,vec__25245,v,p,job,jobs,results))
;
return ((function (switch__24985__auto__,c__25080__auto___25416,res,vec__25245,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____0 = (function (){
var statearr_25255 = [null,null,null,null,null,null,null,null];
(statearr_25255[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__);

(statearr_25255[(1)] = (1));

return statearr_25255;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____1 = (function (state_25252){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_25252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e25256){if((e25256 instanceof Object)){
var ex__24989__auto__ = e25256;
var statearr_25257_25417 = state_25252;
(statearr_25257_25417[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25418 = state_25252;
state_25252 = G__25418;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__ = function(state_25252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____1.call(this,state_25252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___25416,res,vec__25245,v,p,job,jobs,results))
})();
var state__25082__auto__ = (function (){var statearr_25258 = f__25081__auto__.call(null);
(statearr_25258[(6)] = c__25080__auto___25416);

return statearr_25258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___25416,res,vec__25245,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25259){
var vec__25260 = p__25259;
var v = cljs.core.nth.call(null,vec__25260,(0),null);
var p = cljs.core.nth.call(null,vec__25260,(1),null);
var job = vec__25260;
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
var n__4518__auto___25419 = n;
var __25420 = (0);
while(true){
if((__25420 < n__4518__auto___25419)){
var G__25263_25421 = type;
var G__25263_25422__$1 = (((G__25263_25421 instanceof cljs.core.Keyword))?G__25263_25421.fqn:null);
switch (G__25263_25422__$1) {
case "compute":
var c__25080__auto___25424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25420,c__25080__auto___25424,G__25263_25421,G__25263_25422__$1,n__4518__auto___25419,jobs,results,process,async){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (__25420,c__25080__auto___25424,G__25263_25421,G__25263_25422__$1,n__4518__auto___25419,jobs,results,process,async){
return (function (state_25276){
var state_val_25277 = (state_25276[(1)]);
if((state_val_25277 === (1))){
var state_25276__$1 = state_25276;
var statearr_25278_25425 = state_25276__$1;
(statearr_25278_25425[(2)] = null);

(statearr_25278_25425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (2))){
var state_25276__$1 = state_25276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25276__$1,(4),jobs);
} else {
if((state_val_25277 === (3))){
var inst_25274 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25276__$1,inst_25274);
} else {
if((state_val_25277 === (4))){
var inst_25266 = (state_25276[(2)]);
var inst_25267 = process.call(null,inst_25266);
var state_25276__$1 = state_25276;
if(cljs.core.truth_(inst_25267)){
var statearr_25279_25426 = state_25276__$1;
(statearr_25279_25426[(1)] = (5));

} else {
var statearr_25280_25427 = state_25276__$1;
(statearr_25280_25427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (5))){
var state_25276__$1 = state_25276;
var statearr_25281_25428 = state_25276__$1;
(statearr_25281_25428[(2)] = null);

(statearr_25281_25428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (6))){
var state_25276__$1 = state_25276;
var statearr_25282_25429 = state_25276__$1;
(statearr_25282_25429[(2)] = null);

(statearr_25282_25429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (7))){
var inst_25272 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25283_25430 = state_25276__$1;
(statearr_25283_25430[(2)] = inst_25272);

(statearr_25283_25430[(1)] = (3));


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
});})(__25420,c__25080__auto___25424,G__25263_25421,G__25263_25422__$1,n__4518__auto___25419,jobs,results,process,async))
;
return ((function (__25420,switch__24985__auto__,c__25080__auto___25424,G__25263_25421,G__25263_25422__$1,n__4518__auto___25419,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____0 = (function (){
var statearr_25284 = [null,null,null,null,null,null,null];
(statearr_25284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__);

(statearr_25284[(1)] = (1));

return statearr_25284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____1 = (function (state_25276){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_25276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e25285){if((e25285 instanceof Object)){
var ex__24989__auto__ = e25285;
var statearr_25286_25431 = state_25276;
(statearr_25286_25431[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25432 = state_25276;
state_25276 = G__25432;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__ = function(state_25276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____1.call(this,state_25276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__;
})()
;})(__25420,switch__24985__auto__,c__25080__auto___25424,G__25263_25421,G__25263_25422__$1,n__4518__auto___25419,jobs,results,process,async))
})();
var state__25082__auto__ = (function (){var statearr_25287 = f__25081__auto__.call(null);
(statearr_25287[(6)] = c__25080__auto___25424);

return statearr_25287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(__25420,c__25080__auto___25424,G__25263_25421,G__25263_25422__$1,n__4518__auto___25419,jobs,results,process,async))
);


break;
case "async":
var c__25080__auto___25433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25420,c__25080__auto___25433,G__25263_25421,G__25263_25422__$1,n__4518__auto___25419,jobs,results,process,async){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (__25420,c__25080__auto___25433,G__25263_25421,G__25263_25422__$1,n__4518__auto___25419,jobs,results,process,async){
return (function (state_25300){
var state_val_25301 = (state_25300[(1)]);
if((state_val_25301 === (1))){
var state_25300__$1 = state_25300;
var statearr_25302_25434 = state_25300__$1;
(statearr_25302_25434[(2)] = null);

(statearr_25302_25434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25301 === (2))){
var state_25300__$1 = state_25300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25300__$1,(4),jobs);
} else {
if((state_val_25301 === (3))){
var inst_25298 = (state_25300[(2)]);
var state_25300__$1 = state_25300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25300__$1,inst_25298);
} else {
if((state_val_25301 === (4))){
var inst_25290 = (state_25300[(2)]);
var inst_25291 = async.call(null,inst_25290);
var state_25300__$1 = state_25300;
if(cljs.core.truth_(inst_25291)){
var statearr_25303_25435 = state_25300__$1;
(statearr_25303_25435[(1)] = (5));

} else {
var statearr_25304_25436 = state_25300__$1;
(statearr_25304_25436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25301 === (5))){
var state_25300__$1 = state_25300;
var statearr_25305_25437 = state_25300__$1;
(statearr_25305_25437[(2)] = null);

(statearr_25305_25437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25301 === (6))){
var state_25300__$1 = state_25300;
var statearr_25306_25438 = state_25300__$1;
(statearr_25306_25438[(2)] = null);

(statearr_25306_25438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25301 === (7))){
var inst_25296 = (state_25300[(2)]);
var state_25300__$1 = state_25300;
var statearr_25307_25439 = state_25300__$1;
(statearr_25307_25439[(2)] = inst_25296);

(statearr_25307_25439[(1)] = (3));


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
});})(__25420,c__25080__auto___25433,G__25263_25421,G__25263_25422__$1,n__4518__auto___25419,jobs,results,process,async))
;
return ((function (__25420,switch__24985__auto__,c__25080__auto___25433,G__25263_25421,G__25263_25422__$1,n__4518__auto___25419,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____0 = (function (){
var statearr_25308 = [null,null,null,null,null,null,null];
(statearr_25308[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__);

(statearr_25308[(1)] = (1));

return statearr_25308;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____1 = (function (state_25300){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_25300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e25309){if((e25309 instanceof Object)){
var ex__24989__auto__ = e25309;
var statearr_25310_25440 = state_25300;
(statearr_25310_25440[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25441 = state_25300;
state_25300 = G__25441;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__ = function(state_25300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____1.call(this,state_25300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__;
})()
;})(__25420,switch__24985__auto__,c__25080__auto___25433,G__25263_25421,G__25263_25422__$1,n__4518__auto___25419,jobs,results,process,async))
})();
var state__25082__auto__ = (function (){var statearr_25311 = f__25081__auto__.call(null);
(statearr_25311[(6)] = c__25080__auto___25433);

return statearr_25311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(__25420,c__25080__auto___25433,G__25263_25421,G__25263_25422__$1,n__4518__auto___25419,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25263_25422__$1)].join('')));

}

var G__25442 = (__25420 + (1));
__25420 = G__25442;
continue;
} else {
}
break;
}

var c__25080__auto___25443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___25443,jobs,results,process,async){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___25443,jobs,results,process,async){
return (function (state_25333){
var state_val_25334 = (state_25333[(1)]);
if((state_val_25334 === (1))){
var state_25333__$1 = state_25333;
var statearr_25335_25444 = state_25333__$1;
(statearr_25335_25444[(2)] = null);

(statearr_25335_25444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (2))){
var state_25333__$1 = state_25333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25333__$1,(4),from);
} else {
if((state_val_25334 === (3))){
var inst_25331 = (state_25333[(2)]);
var state_25333__$1 = state_25333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25333__$1,inst_25331);
} else {
if((state_val_25334 === (4))){
var inst_25314 = (state_25333[(7)]);
var inst_25314__$1 = (state_25333[(2)]);
var inst_25315 = (inst_25314__$1 == null);
var state_25333__$1 = (function (){var statearr_25336 = state_25333;
(statearr_25336[(7)] = inst_25314__$1);

return statearr_25336;
})();
if(cljs.core.truth_(inst_25315)){
var statearr_25337_25445 = state_25333__$1;
(statearr_25337_25445[(1)] = (5));

} else {
var statearr_25338_25446 = state_25333__$1;
(statearr_25338_25446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (5))){
var inst_25317 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25333__$1 = state_25333;
var statearr_25339_25447 = state_25333__$1;
(statearr_25339_25447[(2)] = inst_25317);

(statearr_25339_25447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (6))){
var inst_25319 = (state_25333[(8)]);
var inst_25314 = (state_25333[(7)]);
var inst_25319__$1 = cljs.core.async.chan.call(null,(1));
var inst_25320 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25321 = [inst_25314,inst_25319__$1];
var inst_25322 = (new cljs.core.PersistentVector(null,2,(5),inst_25320,inst_25321,null));
var state_25333__$1 = (function (){var statearr_25340 = state_25333;
(statearr_25340[(8)] = inst_25319__$1);

return statearr_25340;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25333__$1,(8),jobs,inst_25322);
} else {
if((state_val_25334 === (7))){
var inst_25329 = (state_25333[(2)]);
var state_25333__$1 = state_25333;
var statearr_25341_25448 = state_25333__$1;
(statearr_25341_25448[(2)] = inst_25329);

(statearr_25341_25448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (8))){
var inst_25319 = (state_25333[(8)]);
var inst_25324 = (state_25333[(2)]);
var state_25333__$1 = (function (){var statearr_25342 = state_25333;
(statearr_25342[(9)] = inst_25324);

return statearr_25342;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25333__$1,(9),results,inst_25319);
} else {
if((state_val_25334 === (9))){
var inst_25326 = (state_25333[(2)]);
var state_25333__$1 = (function (){var statearr_25343 = state_25333;
(statearr_25343[(10)] = inst_25326);

return statearr_25343;
})();
var statearr_25344_25449 = state_25333__$1;
(statearr_25344_25449[(2)] = null);

(statearr_25344_25449[(1)] = (2));


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
});})(c__25080__auto___25443,jobs,results,process,async))
;
return ((function (switch__24985__auto__,c__25080__auto___25443,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____0 = (function (){
var statearr_25345 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__);

(statearr_25345[(1)] = (1));

return statearr_25345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____1 = (function (state_25333){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_25333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e25346){if((e25346 instanceof Object)){
var ex__24989__auto__ = e25346;
var statearr_25347_25450 = state_25333;
(statearr_25347_25450[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25451 = state_25333;
state_25333 = G__25451;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__ = function(state_25333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____1.call(this,state_25333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___25443,jobs,results,process,async))
})();
var state__25082__auto__ = (function (){var statearr_25348 = f__25081__auto__.call(null);
(statearr_25348[(6)] = c__25080__auto___25443);

return statearr_25348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___25443,jobs,results,process,async))
);


var c__25080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto__,jobs,results,process,async){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto__,jobs,results,process,async){
return (function (state_25386){
var state_val_25387 = (state_25386[(1)]);
if((state_val_25387 === (7))){
var inst_25382 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25388_25452 = state_25386__$1;
(statearr_25388_25452[(2)] = inst_25382);

(statearr_25388_25452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (20))){
var state_25386__$1 = state_25386;
var statearr_25389_25453 = state_25386__$1;
(statearr_25389_25453[(2)] = null);

(statearr_25389_25453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (1))){
var state_25386__$1 = state_25386;
var statearr_25390_25454 = state_25386__$1;
(statearr_25390_25454[(2)] = null);

(statearr_25390_25454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (4))){
var inst_25351 = (state_25386[(7)]);
var inst_25351__$1 = (state_25386[(2)]);
var inst_25352 = (inst_25351__$1 == null);
var state_25386__$1 = (function (){var statearr_25391 = state_25386;
(statearr_25391[(7)] = inst_25351__$1);

return statearr_25391;
})();
if(cljs.core.truth_(inst_25352)){
var statearr_25392_25455 = state_25386__$1;
(statearr_25392_25455[(1)] = (5));

} else {
var statearr_25393_25456 = state_25386__$1;
(statearr_25393_25456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (15))){
var inst_25364 = (state_25386[(8)]);
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25386__$1,(18),to,inst_25364);
} else {
if((state_val_25387 === (21))){
var inst_25377 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25394_25457 = state_25386__$1;
(statearr_25394_25457[(2)] = inst_25377);

(statearr_25394_25457[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (13))){
var inst_25379 = (state_25386[(2)]);
var state_25386__$1 = (function (){var statearr_25395 = state_25386;
(statearr_25395[(9)] = inst_25379);

return statearr_25395;
})();
var statearr_25396_25458 = state_25386__$1;
(statearr_25396_25458[(2)] = null);

(statearr_25396_25458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (6))){
var inst_25351 = (state_25386[(7)]);
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25386__$1,(11),inst_25351);
} else {
if((state_val_25387 === (17))){
var inst_25372 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
if(cljs.core.truth_(inst_25372)){
var statearr_25397_25459 = state_25386__$1;
(statearr_25397_25459[(1)] = (19));

} else {
var statearr_25398_25460 = state_25386__$1;
(statearr_25398_25460[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (3))){
var inst_25384 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25386__$1,inst_25384);
} else {
if((state_val_25387 === (12))){
var inst_25361 = (state_25386[(10)]);
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25386__$1,(14),inst_25361);
} else {
if((state_val_25387 === (2))){
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25386__$1,(4),results);
} else {
if((state_val_25387 === (19))){
var state_25386__$1 = state_25386;
var statearr_25399_25461 = state_25386__$1;
(statearr_25399_25461[(2)] = null);

(statearr_25399_25461[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (11))){
var inst_25361 = (state_25386[(2)]);
var state_25386__$1 = (function (){var statearr_25400 = state_25386;
(statearr_25400[(10)] = inst_25361);

return statearr_25400;
})();
var statearr_25401_25462 = state_25386__$1;
(statearr_25401_25462[(2)] = null);

(statearr_25401_25462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (9))){
var state_25386__$1 = state_25386;
var statearr_25402_25463 = state_25386__$1;
(statearr_25402_25463[(2)] = null);

(statearr_25402_25463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (5))){
var state_25386__$1 = state_25386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25403_25464 = state_25386__$1;
(statearr_25403_25464[(1)] = (8));

} else {
var statearr_25404_25465 = state_25386__$1;
(statearr_25404_25465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (14))){
var inst_25364 = (state_25386[(8)]);
var inst_25366 = (state_25386[(11)]);
var inst_25364__$1 = (state_25386[(2)]);
var inst_25365 = (inst_25364__$1 == null);
var inst_25366__$1 = cljs.core.not.call(null,inst_25365);
var state_25386__$1 = (function (){var statearr_25405 = state_25386;
(statearr_25405[(8)] = inst_25364__$1);

(statearr_25405[(11)] = inst_25366__$1);

return statearr_25405;
})();
if(inst_25366__$1){
var statearr_25406_25466 = state_25386__$1;
(statearr_25406_25466[(1)] = (15));

} else {
var statearr_25407_25467 = state_25386__$1;
(statearr_25407_25467[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (16))){
var inst_25366 = (state_25386[(11)]);
var state_25386__$1 = state_25386;
var statearr_25408_25468 = state_25386__$1;
(statearr_25408_25468[(2)] = inst_25366);

(statearr_25408_25468[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (10))){
var inst_25358 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25409_25469 = state_25386__$1;
(statearr_25409_25469[(2)] = inst_25358);

(statearr_25409_25469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (18))){
var inst_25369 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25410_25470 = state_25386__$1;
(statearr_25410_25470[(2)] = inst_25369);

(statearr_25410_25470[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (8))){
var inst_25355 = cljs.core.async.close_BANG_.call(null,to);
var state_25386__$1 = state_25386;
var statearr_25411_25471 = state_25386__$1;
(statearr_25411_25471[(2)] = inst_25355);

(statearr_25411_25471[(1)] = (10));


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
});})(c__25080__auto__,jobs,results,process,async))
;
return ((function (switch__24985__auto__,c__25080__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____0 = (function (){
var statearr_25412 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25412[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__);

(statearr_25412[(1)] = (1));

return statearr_25412;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____1 = (function (state_25386){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_25386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e25413){if((e25413 instanceof Object)){
var ex__24989__auto__ = e25413;
var statearr_25414_25472 = state_25386;
(statearr_25414_25472[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25473 = state_25386;
state_25386 = G__25473;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__ = function(state_25386){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____1.call(this,state_25386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto__,jobs,results,process,async))
})();
var state__25082__auto__ = (function (){var statearr_25415 = f__25081__auto__.call(null);
(statearr_25415[(6)] = c__25080__auto__);

return statearr_25415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto__,jobs,results,process,async))
);

return c__25080__auto__;
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
var G__25475 = arguments.length;
switch (G__25475) {
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
var G__25478 = arguments.length;
switch (G__25478) {
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
var G__25481 = arguments.length;
switch (G__25481) {
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
var c__25080__auto___25530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___25530,tc,fc){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___25530,tc,fc){
return (function (state_25507){
var state_val_25508 = (state_25507[(1)]);
if((state_val_25508 === (7))){
var inst_25503 = (state_25507[(2)]);
var state_25507__$1 = state_25507;
var statearr_25509_25531 = state_25507__$1;
(statearr_25509_25531[(2)] = inst_25503);

(statearr_25509_25531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (1))){
var state_25507__$1 = state_25507;
var statearr_25510_25532 = state_25507__$1;
(statearr_25510_25532[(2)] = null);

(statearr_25510_25532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (4))){
var inst_25484 = (state_25507[(7)]);
var inst_25484__$1 = (state_25507[(2)]);
var inst_25485 = (inst_25484__$1 == null);
var state_25507__$1 = (function (){var statearr_25511 = state_25507;
(statearr_25511[(7)] = inst_25484__$1);

return statearr_25511;
})();
if(cljs.core.truth_(inst_25485)){
var statearr_25512_25533 = state_25507__$1;
(statearr_25512_25533[(1)] = (5));

} else {
var statearr_25513_25534 = state_25507__$1;
(statearr_25513_25534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (13))){
var state_25507__$1 = state_25507;
var statearr_25514_25535 = state_25507__$1;
(statearr_25514_25535[(2)] = null);

(statearr_25514_25535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (6))){
var inst_25484 = (state_25507[(7)]);
var inst_25490 = p.call(null,inst_25484);
var state_25507__$1 = state_25507;
if(cljs.core.truth_(inst_25490)){
var statearr_25515_25536 = state_25507__$1;
(statearr_25515_25536[(1)] = (9));

} else {
var statearr_25516_25537 = state_25507__$1;
(statearr_25516_25537[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (3))){
var inst_25505 = (state_25507[(2)]);
var state_25507__$1 = state_25507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25507__$1,inst_25505);
} else {
if((state_val_25508 === (12))){
var state_25507__$1 = state_25507;
var statearr_25517_25538 = state_25507__$1;
(statearr_25517_25538[(2)] = null);

(statearr_25517_25538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (2))){
var state_25507__$1 = state_25507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25507__$1,(4),ch);
} else {
if((state_val_25508 === (11))){
var inst_25484 = (state_25507[(7)]);
var inst_25494 = (state_25507[(2)]);
var state_25507__$1 = state_25507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25507__$1,(8),inst_25494,inst_25484);
} else {
if((state_val_25508 === (9))){
var state_25507__$1 = state_25507;
var statearr_25518_25539 = state_25507__$1;
(statearr_25518_25539[(2)] = tc);

(statearr_25518_25539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (5))){
var inst_25487 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25488 = cljs.core.async.close_BANG_.call(null,fc);
var state_25507__$1 = (function (){var statearr_25519 = state_25507;
(statearr_25519[(8)] = inst_25487);

return statearr_25519;
})();
var statearr_25520_25540 = state_25507__$1;
(statearr_25520_25540[(2)] = inst_25488);

(statearr_25520_25540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (14))){
var inst_25501 = (state_25507[(2)]);
var state_25507__$1 = state_25507;
var statearr_25521_25541 = state_25507__$1;
(statearr_25521_25541[(2)] = inst_25501);

(statearr_25521_25541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (10))){
var state_25507__$1 = state_25507;
var statearr_25522_25542 = state_25507__$1;
(statearr_25522_25542[(2)] = fc);

(statearr_25522_25542[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (8))){
var inst_25496 = (state_25507[(2)]);
var state_25507__$1 = state_25507;
if(cljs.core.truth_(inst_25496)){
var statearr_25523_25543 = state_25507__$1;
(statearr_25523_25543[(1)] = (12));

} else {
var statearr_25524_25544 = state_25507__$1;
(statearr_25524_25544[(1)] = (13));

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
});})(c__25080__auto___25530,tc,fc))
;
return ((function (switch__24985__auto__,c__25080__auto___25530,tc,fc){
return (function() {
var cljs$core$async$state_machine__24986__auto__ = null;
var cljs$core$async$state_machine__24986__auto____0 = (function (){
var statearr_25525 = [null,null,null,null,null,null,null,null,null];
(statearr_25525[(0)] = cljs$core$async$state_machine__24986__auto__);

(statearr_25525[(1)] = (1));

return statearr_25525;
});
var cljs$core$async$state_machine__24986__auto____1 = (function (state_25507){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_25507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e25526){if((e25526 instanceof Object)){
var ex__24989__auto__ = e25526;
var statearr_25527_25545 = state_25507;
(statearr_25527_25545[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25546 = state_25507;
state_25507 = G__25546;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$state_machine__24986__auto__ = function(state_25507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24986__auto____1.call(this,state_25507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24986__auto____0;
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24986__auto____1;
return cljs$core$async$state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___25530,tc,fc))
})();
var state__25082__auto__ = (function (){var statearr_25528 = f__25081__auto__.call(null);
(statearr_25528[(6)] = c__25080__auto___25530);

return statearr_25528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___25530,tc,fc))
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
var c__25080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto__){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto__){
return (function (state_25567){
var state_val_25568 = (state_25567[(1)]);
if((state_val_25568 === (7))){
var inst_25563 = (state_25567[(2)]);
var state_25567__$1 = state_25567;
var statearr_25569_25587 = state_25567__$1;
(statearr_25569_25587[(2)] = inst_25563);

(statearr_25569_25587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25568 === (1))){
var inst_25547 = init;
var state_25567__$1 = (function (){var statearr_25570 = state_25567;
(statearr_25570[(7)] = inst_25547);

return statearr_25570;
})();
var statearr_25571_25588 = state_25567__$1;
(statearr_25571_25588[(2)] = null);

(statearr_25571_25588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25568 === (4))){
var inst_25550 = (state_25567[(8)]);
var inst_25550__$1 = (state_25567[(2)]);
var inst_25551 = (inst_25550__$1 == null);
var state_25567__$1 = (function (){var statearr_25572 = state_25567;
(statearr_25572[(8)] = inst_25550__$1);

return statearr_25572;
})();
if(cljs.core.truth_(inst_25551)){
var statearr_25573_25589 = state_25567__$1;
(statearr_25573_25589[(1)] = (5));

} else {
var statearr_25574_25590 = state_25567__$1;
(statearr_25574_25590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25568 === (6))){
var inst_25550 = (state_25567[(8)]);
var inst_25554 = (state_25567[(9)]);
var inst_25547 = (state_25567[(7)]);
var inst_25554__$1 = f.call(null,inst_25547,inst_25550);
var inst_25555 = cljs.core.reduced_QMARK_.call(null,inst_25554__$1);
var state_25567__$1 = (function (){var statearr_25575 = state_25567;
(statearr_25575[(9)] = inst_25554__$1);

return statearr_25575;
})();
if(inst_25555){
var statearr_25576_25591 = state_25567__$1;
(statearr_25576_25591[(1)] = (8));

} else {
var statearr_25577_25592 = state_25567__$1;
(statearr_25577_25592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25568 === (3))){
var inst_25565 = (state_25567[(2)]);
var state_25567__$1 = state_25567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25567__$1,inst_25565);
} else {
if((state_val_25568 === (2))){
var state_25567__$1 = state_25567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25567__$1,(4),ch);
} else {
if((state_val_25568 === (9))){
var inst_25554 = (state_25567[(9)]);
var inst_25547 = inst_25554;
var state_25567__$1 = (function (){var statearr_25578 = state_25567;
(statearr_25578[(7)] = inst_25547);

return statearr_25578;
})();
var statearr_25579_25593 = state_25567__$1;
(statearr_25579_25593[(2)] = null);

(statearr_25579_25593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25568 === (5))){
var inst_25547 = (state_25567[(7)]);
var state_25567__$1 = state_25567;
var statearr_25580_25594 = state_25567__$1;
(statearr_25580_25594[(2)] = inst_25547);

(statearr_25580_25594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25568 === (10))){
var inst_25561 = (state_25567[(2)]);
var state_25567__$1 = state_25567;
var statearr_25581_25595 = state_25567__$1;
(statearr_25581_25595[(2)] = inst_25561);

(statearr_25581_25595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25568 === (8))){
var inst_25554 = (state_25567[(9)]);
var inst_25557 = cljs.core.deref.call(null,inst_25554);
var state_25567__$1 = state_25567;
var statearr_25582_25596 = state_25567__$1;
(statearr_25582_25596[(2)] = inst_25557);

(statearr_25582_25596[(1)] = (10));


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
});})(c__25080__auto__))
;
return ((function (switch__24985__auto__,c__25080__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24986__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24986__auto____0 = (function (){
var statearr_25583 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25583[(0)] = cljs$core$async$reduce_$_state_machine__24986__auto__);

(statearr_25583[(1)] = (1));

return statearr_25583;
});
var cljs$core$async$reduce_$_state_machine__24986__auto____1 = (function (state_25567){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_25567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e25584){if((e25584 instanceof Object)){
var ex__24989__auto__ = e25584;
var statearr_25585_25597 = state_25567;
(statearr_25585_25597[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25598 = state_25567;
state_25567 = G__25598;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24986__auto__ = function(state_25567){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24986__auto____1.call(this,state_25567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24986__auto____0;
cljs$core$async$reduce_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24986__auto____1;
return cljs$core$async$reduce_$_state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto__))
})();
var state__25082__auto__ = (function (){var statearr_25586 = f__25081__auto__.call(null);
(statearr_25586[(6)] = c__25080__auto__);

return statearr_25586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto__))
);

return c__25080__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto__,f__$1){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto__,f__$1){
return (function (state_25604){
var state_val_25605 = (state_25604[(1)]);
if((state_val_25605 === (1))){
var inst_25599 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25604__$1 = state_25604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25604__$1,(2),inst_25599);
} else {
if((state_val_25605 === (2))){
var inst_25601 = (state_25604[(2)]);
var inst_25602 = f__$1.call(null,inst_25601);
var state_25604__$1 = state_25604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25604__$1,inst_25602);
} else {
return null;
}
}
});})(c__25080__auto__,f__$1))
;
return ((function (switch__24985__auto__,c__25080__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24986__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24986__auto____0 = (function (){
var statearr_25606 = [null,null,null,null,null,null,null];
(statearr_25606[(0)] = cljs$core$async$transduce_$_state_machine__24986__auto__);

(statearr_25606[(1)] = (1));

return statearr_25606;
});
var cljs$core$async$transduce_$_state_machine__24986__auto____1 = (function (state_25604){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_25604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e25607){if((e25607 instanceof Object)){
var ex__24989__auto__ = e25607;
var statearr_25608_25610 = state_25604;
(statearr_25608_25610[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25611 = state_25604;
state_25604 = G__25611;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24986__auto__ = function(state_25604){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24986__auto____1.call(this,state_25604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24986__auto____0;
cljs$core$async$transduce_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24986__auto____1;
return cljs$core$async$transduce_$_state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto__,f__$1))
})();
var state__25082__auto__ = (function (){var statearr_25609 = f__25081__auto__.call(null);
(statearr_25609[(6)] = c__25080__auto__);

return statearr_25609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto__,f__$1))
);

return c__25080__auto__;
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
var G__25613 = arguments.length;
switch (G__25613) {
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
var c__25080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto__){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto__){
return (function (state_25638){
var state_val_25639 = (state_25638[(1)]);
if((state_val_25639 === (7))){
var inst_25620 = (state_25638[(2)]);
var state_25638__$1 = state_25638;
var statearr_25640_25661 = state_25638__$1;
(statearr_25640_25661[(2)] = inst_25620);

(statearr_25640_25661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (1))){
var inst_25614 = cljs.core.seq.call(null,coll);
var inst_25615 = inst_25614;
var state_25638__$1 = (function (){var statearr_25641 = state_25638;
(statearr_25641[(7)] = inst_25615);

return statearr_25641;
})();
var statearr_25642_25662 = state_25638__$1;
(statearr_25642_25662[(2)] = null);

(statearr_25642_25662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (4))){
var inst_25615 = (state_25638[(7)]);
var inst_25618 = cljs.core.first.call(null,inst_25615);
var state_25638__$1 = state_25638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25638__$1,(7),ch,inst_25618);
} else {
if((state_val_25639 === (13))){
var inst_25632 = (state_25638[(2)]);
var state_25638__$1 = state_25638;
var statearr_25643_25663 = state_25638__$1;
(statearr_25643_25663[(2)] = inst_25632);

(statearr_25643_25663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (6))){
var inst_25623 = (state_25638[(2)]);
var state_25638__$1 = state_25638;
if(cljs.core.truth_(inst_25623)){
var statearr_25644_25664 = state_25638__$1;
(statearr_25644_25664[(1)] = (8));

} else {
var statearr_25645_25665 = state_25638__$1;
(statearr_25645_25665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (3))){
var inst_25636 = (state_25638[(2)]);
var state_25638__$1 = state_25638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25638__$1,inst_25636);
} else {
if((state_val_25639 === (12))){
var state_25638__$1 = state_25638;
var statearr_25646_25666 = state_25638__$1;
(statearr_25646_25666[(2)] = null);

(statearr_25646_25666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (2))){
var inst_25615 = (state_25638[(7)]);
var state_25638__$1 = state_25638;
if(cljs.core.truth_(inst_25615)){
var statearr_25647_25667 = state_25638__$1;
(statearr_25647_25667[(1)] = (4));

} else {
var statearr_25648_25668 = state_25638__$1;
(statearr_25648_25668[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (11))){
var inst_25629 = cljs.core.async.close_BANG_.call(null,ch);
var state_25638__$1 = state_25638;
var statearr_25649_25669 = state_25638__$1;
(statearr_25649_25669[(2)] = inst_25629);

(statearr_25649_25669[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (9))){
var state_25638__$1 = state_25638;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25650_25670 = state_25638__$1;
(statearr_25650_25670[(1)] = (11));

} else {
var statearr_25651_25671 = state_25638__$1;
(statearr_25651_25671[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (5))){
var inst_25615 = (state_25638[(7)]);
var state_25638__$1 = state_25638;
var statearr_25652_25672 = state_25638__$1;
(statearr_25652_25672[(2)] = inst_25615);

(statearr_25652_25672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (10))){
var inst_25634 = (state_25638[(2)]);
var state_25638__$1 = state_25638;
var statearr_25653_25673 = state_25638__$1;
(statearr_25653_25673[(2)] = inst_25634);

(statearr_25653_25673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (8))){
var inst_25615 = (state_25638[(7)]);
var inst_25625 = cljs.core.next.call(null,inst_25615);
var inst_25615__$1 = inst_25625;
var state_25638__$1 = (function (){var statearr_25654 = state_25638;
(statearr_25654[(7)] = inst_25615__$1);

return statearr_25654;
})();
var statearr_25655_25674 = state_25638__$1;
(statearr_25655_25674[(2)] = null);

(statearr_25655_25674[(1)] = (2));


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
});})(c__25080__auto__))
;
return ((function (switch__24985__auto__,c__25080__auto__){
return (function() {
var cljs$core$async$state_machine__24986__auto__ = null;
var cljs$core$async$state_machine__24986__auto____0 = (function (){
var statearr_25656 = [null,null,null,null,null,null,null,null];
(statearr_25656[(0)] = cljs$core$async$state_machine__24986__auto__);

(statearr_25656[(1)] = (1));

return statearr_25656;
});
var cljs$core$async$state_machine__24986__auto____1 = (function (state_25638){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_25638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e25657){if((e25657 instanceof Object)){
var ex__24989__auto__ = e25657;
var statearr_25658_25675 = state_25638;
(statearr_25658_25675[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25676 = state_25638;
state_25638 = G__25676;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$state_machine__24986__auto__ = function(state_25638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24986__auto____1.call(this,state_25638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24986__auto____0;
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24986__auto____1;
return cljs$core$async$state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto__))
})();
var state__25082__auto__ = (function (){var statearr_25659 = f__25081__auto__.call(null);
(statearr_25659[(6)] = c__25080__auto__);

return statearr_25659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto__))
);

return c__25080__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25677 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25677 = (function (ch,cs,meta25678){
this.ch = ch;
this.cs = cs;
this.meta25678 = meta25678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25679,meta25678__$1){
var self__ = this;
var _25679__$1 = this;
return (new cljs.core.async.t_cljs$core$async25677(self__.ch,self__.cs,meta25678__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25679){
var self__ = this;
var _25679__$1 = this;
return self__.meta25678;
});})(cs))
;

cljs.core.async.t_cljs$core$async25677.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25677.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25677.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25677.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25677.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25677.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25677.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25678","meta25678",1496111840,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25677";

cljs.core.async.t_cljs$core$async25677.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25677");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25677.
 */
cljs.core.async.__GT_t_cljs$core$async25677 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25677(ch__$1,cs__$1,meta25678){
return (new cljs.core.async.t_cljs$core$async25677(ch__$1,cs__$1,meta25678));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25677(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25080__auto___25899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___25899,cs,m,dchan,dctr,done){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___25899,cs,m,dchan,dctr,done){
return (function (state_25814){
var state_val_25815 = (state_25814[(1)]);
if((state_val_25815 === (7))){
var inst_25810 = (state_25814[(2)]);
var state_25814__$1 = state_25814;
var statearr_25816_25900 = state_25814__$1;
(statearr_25816_25900[(2)] = inst_25810);

(statearr_25816_25900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (20))){
var inst_25713 = (state_25814[(7)]);
var inst_25725 = cljs.core.first.call(null,inst_25713);
var inst_25726 = cljs.core.nth.call(null,inst_25725,(0),null);
var inst_25727 = cljs.core.nth.call(null,inst_25725,(1),null);
var state_25814__$1 = (function (){var statearr_25817 = state_25814;
(statearr_25817[(8)] = inst_25726);

return statearr_25817;
})();
if(cljs.core.truth_(inst_25727)){
var statearr_25818_25901 = state_25814__$1;
(statearr_25818_25901[(1)] = (22));

} else {
var statearr_25819_25902 = state_25814__$1;
(statearr_25819_25902[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (27))){
var inst_25755 = (state_25814[(9)]);
var inst_25757 = (state_25814[(10)]);
var inst_25762 = (state_25814[(11)]);
var inst_25682 = (state_25814[(12)]);
var inst_25762__$1 = cljs.core._nth.call(null,inst_25755,inst_25757);
var inst_25763 = cljs.core.async.put_BANG_.call(null,inst_25762__$1,inst_25682,done);
var state_25814__$1 = (function (){var statearr_25820 = state_25814;
(statearr_25820[(11)] = inst_25762__$1);

return statearr_25820;
})();
if(cljs.core.truth_(inst_25763)){
var statearr_25821_25903 = state_25814__$1;
(statearr_25821_25903[(1)] = (30));

} else {
var statearr_25822_25904 = state_25814__$1;
(statearr_25822_25904[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (1))){
var state_25814__$1 = state_25814;
var statearr_25823_25905 = state_25814__$1;
(statearr_25823_25905[(2)] = null);

(statearr_25823_25905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (24))){
var inst_25713 = (state_25814[(7)]);
var inst_25732 = (state_25814[(2)]);
var inst_25733 = cljs.core.next.call(null,inst_25713);
var inst_25691 = inst_25733;
var inst_25692 = null;
var inst_25693 = (0);
var inst_25694 = (0);
var state_25814__$1 = (function (){var statearr_25824 = state_25814;
(statearr_25824[(13)] = inst_25693);

(statearr_25824[(14)] = inst_25692);

(statearr_25824[(15)] = inst_25691);

(statearr_25824[(16)] = inst_25694);

(statearr_25824[(17)] = inst_25732);

return statearr_25824;
})();
var statearr_25825_25906 = state_25814__$1;
(statearr_25825_25906[(2)] = null);

(statearr_25825_25906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (39))){
var state_25814__$1 = state_25814;
var statearr_25829_25907 = state_25814__$1;
(statearr_25829_25907[(2)] = null);

(statearr_25829_25907[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (4))){
var inst_25682 = (state_25814[(12)]);
var inst_25682__$1 = (state_25814[(2)]);
var inst_25683 = (inst_25682__$1 == null);
var state_25814__$1 = (function (){var statearr_25830 = state_25814;
(statearr_25830[(12)] = inst_25682__$1);

return statearr_25830;
})();
if(cljs.core.truth_(inst_25683)){
var statearr_25831_25908 = state_25814__$1;
(statearr_25831_25908[(1)] = (5));

} else {
var statearr_25832_25909 = state_25814__$1;
(statearr_25832_25909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (15))){
var inst_25693 = (state_25814[(13)]);
var inst_25692 = (state_25814[(14)]);
var inst_25691 = (state_25814[(15)]);
var inst_25694 = (state_25814[(16)]);
var inst_25709 = (state_25814[(2)]);
var inst_25710 = (inst_25694 + (1));
var tmp25826 = inst_25693;
var tmp25827 = inst_25692;
var tmp25828 = inst_25691;
var inst_25691__$1 = tmp25828;
var inst_25692__$1 = tmp25827;
var inst_25693__$1 = tmp25826;
var inst_25694__$1 = inst_25710;
var state_25814__$1 = (function (){var statearr_25833 = state_25814;
(statearr_25833[(13)] = inst_25693__$1);

(statearr_25833[(14)] = inst_25692__$1);

(statearr_25833[(15)] = inst_25691__$1);

(statearr_25833[(18)] = inst_25709);

(statearr_25833[(16)] = inst_25694__$1);

return statearr_25833;
})();
var statearr_25834_25910 = state_25814__$1;
(statearr_25834_25910[(2)] = null);

(statearr_25834_25910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (21))){
var inst_25736 = (state_25814[(2)]);
var state_25814__$1 = state_25814;
var statearr_25838_25911 = state_25814__$1;
(statearr_25838_25911[(2)] = inst_25736);

(statearr_25838_25911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (31))){
var inst_25762 = (state_25814[(11)]);
var inst_25766 = done.call(null,null);
var inst_25767 = cljs.core.async.untap_STAR_.call(null,m,inst_25762);
var state_25814__$1 = (function (){var statearr_25839 = state_25814;
(statearr_25839[(19)] = inst_25766);

return statearr_25839;
})();
var statearr_25840_25912 = state_25814__$1;
(statearr_25840_25912[(2)] = inst_25767);

(statearr_25840_25912[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (32))){
var inst_25756 = (state_25814[(20)]);
var inst_25755 = (state_25814[(9)]);
var inst_25757 = (state_25814[(10)]);
var inst_25754 = (state_25814[(21)]);
var inst_25769 = (state_25814[(2)]);
var inst_25770 = (inst_25757 + (1));
var tmp25835 = inst_25756;
var tmp25836 = inst_25755;
var tmp25837 = inst_25754;
var inst_25754__$1 = tmp25837;
var inst_25755__$1 = tmp25836;
var inst_25756__$1 = tmp25835;
var inst_25757__$1 = inst_25770;
var state_25814__$1 = (function (){var statearr_25841 = state_25814;
(statearr_25841[(22)] = inst_25769);

(statearr_25841[(20)] = inst_25756__$1);

(statearr_25841[(9)] = inst_25755__$1);

(statearr_25841[(10)] = inst_25757__$1);

(statearr_25841[(21)] = inst_25754__$1);

return statearr_25841;
})();
var statearr_25842_25913 = state_25814__$1;
(statearr_25842_25913[(2)] = null);

(statearr_25842_25913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (40))){
var inst_25782 = (state_25814[(23)]);
var inst_25786 = done.call(null,null);
var inst_25787 = cljs.core.async.untap_STAR_.call(null,m,inst_25782);
var state_25814__$1 = (function (){var statearr_25843 = state_25814;
(statearr_25843[(24)] = inst_25786);

return statearr_25843;
})();
var statearr_25844_25914 = state_25814__$1;
(statearr_25844_25914[(2)] = inst_25787);

(statearr_25844_25914[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (33))){
var inst_25773 = (state_25814[(25)]);
var inst_25775 = cljs.core.chunked_seq_QMARK_.call(null,inst_25773);
var state_25814__$1 = state_25814;
if(inst_25775){
var statearr_25845_25915 = state_25814__$1;
(statearr_25845_25915[(1)] = (36));

} else {
var statearr_25846_25916 = state_25814__$1;
(statearr_25846_25916[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (13))){
var inst_25703 = (state_25814[(26)]);
var inst_25706 = cljs.core.async.close_BANG_.call(null,inst_25703);
var state_25814__$1 = state_25814;
var statearr_25847_25917 = state_25814__$1;
(statearr_25847_25917[(2)] = inst_25706);

(statearr_25847_25917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (22))){
var inst_25726 = (state_25814[(8)]);
var inst_25729 = cljs.core.async.close_BANG_.call(null,inst_25726);
var state_25814__$1 = state_25814;
var statearr_25848_25918 = state_25814__$1;
(statearr_25848_25918[(2)] = inst_25729);

(statearr_25848_25918[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (36))){
var inst_25773 = (state_25814[(25)]);
var inst_25777 = cljs.core.chunk_first.call(null,inst_25773);
var inst_25778 = cljs.core.chunk_rest.call(null,inst_25773);
var inst_25779 = cljs.core.count.call(null,inst_25777);
var inst_25754 = inst_25778;
var inst_25755 = inst_25777;
var inst_25756 = inst_25779;
var inst_25757 = (0);
var state_25814__$1 = (function (){var statearr_25849 = state_25814;
(statearr_25849[(20)] = inst_25756);

(statearr_25849[(9)] = inst_25755);

(statearr_25849[(10)] = inst_25757);

(statearr_25849[(21)] = inst_25754);

return statearr_25849;
})();
var statearr_25850_25919 = state_25814__$1;
(statearr_25850_25919[(2)] = null);

(statearr_25850_25919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (41))){
var inst_25773 = (state_25814[(25)]);
var inst_25789 = (state_25814[(2)]);
var inst_25790 = cljs.core.next.call(null,inst_25773);
var inst_25754 = inst_25790;
var inst_25755 = null;
var inst_25756 = (0);
var inst_25757 = (0);
var state_25814__$1 = (function (){var statearr_25851 = state_25814;
(statearr_25851[(20)] = inst_25756);

(statearr_25851[(9)] = inst_25755);

(statearr_25851[(10)] = inst_25757);

(statearr_25851[(27)] = inst_25789);

(statearr_25851[(21)] = inst_25754);

return statearr_25851;
})();
var statearr_25852_25920 = state_25814__$1;
(statearr_25852_25920[(2)] = null);

(statearr_25852_25920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (43))){
var state_25814__$1 = state_25814;
var statearr_25853_25921 = state_25814__$1;
(statearr_25853_25921[(2)] = null);

(statearr_25853_25921[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (29))){
var inst_25798 = (state_25814[(2)]);
var state_25814__$1 = state_25814;
var statearr_25854_25922 = state_25814__$1;
(statearr_25854_25922[(2)] = inst_25798);

(statearr_25854_25922[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (44))){
var inst_25807 = (state_25814[(2)]);
var state_25814__$1 = (function (){var statearr_25855 = state_25814;
(statearr_25855[(28)] = inst_25807);

return statearr_25855;
})();
var statearr_25856_25923 = state_25814__$1;
(statearr_25856_25923[(2)] = null);

(statearr_25856_25923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (6))){
var inst_25746 = (state_25814[(29)]);
var inst_25745 = cljs.core.deref.call(null,cs);
var inst_25746__$1 = cljs.core.keys.call(null,inst_25745);
var inst_25747 = cljs.core.count.call(null,inst_25746__$1);
var inst_25748 = cljs.core.reset_BANG_.call(null,dctr,inst_25747);
var inst_25753 = cljs.core.seq.call(null,inst_25746__$1);
var inst_25754 = inst_25753;
var inst_25755 = null;
var inst_25756 = (0);
var inst_25757 = (0);
var state_25814__$1 = (function (){var statearr_25857 = state_25814;
(statearr_25857[(30)] = inst_25748);

(statearr_25857[(20)] = inst_25756);

(statearr_25857[(9)] = inst_25755);

(statearr_25857[(10)] = inst_25757);

(statearr_25857[(21)] = inst_25754);

(statearr_25857[(29)] = inst_25746__$1);

return statearr_25857;
})();
var statearr_25858_25924 = state_25814__$1;
(statearr_25858_25924[(2)] = null);

(statearr_25858_25924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (28))){
var inst_25754 = (state_25814[(21)]);
var inst_25773 = (state_25814[(25)]);
var inst_25773__$1 = cljs.core.seq.call(null,inst_25754);
var state_25814__$1 = (function (){var statearr_25859 = state_25814;
(statearr_25859[(25)] = inst_25773__$1);

return statearr_25859;
})();
if(inst_25773__$1){
var statearr_25860_25925 = state_25814__$1;
(statearr_25860_25925[(1)] = (33));

} else {
var statearr_25861_25926 = state_25814__$1;
(statearr_25861_25926[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (25))){
var inst_25756 = (state_25814[(20)]);
var inst_25757 = (state_25814[(10)]);
var inst_25759 = (inst_25757 < inst_25756);
var inst_25760 = inst_25759;
var state_25814__$1 = state_25814;
if(cljs.core.truth_(inst_25760)){
var statearr_25862_25927 = state_25814__$1;
(statearr_25862_25927[(1)] = (27));

} else {
var statearr_25863_25928 = state_25814__$1;
(statearr_25863_25928[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (34))){
var state_25814__$1 = state_25814;
var statearr_25864_25929 = state_25814__$1;
(statearr_25864_25929[(2)] = null);

(statearr_25864_25929[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (17))){
var state_25814__$1 = state_25814;
var statearr_25865_25930 = state_25814__$1;
(statearr_25865_25930[(2)] = null);

(statearr_25865_25930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (3))){
var inst_25812 = (state_25814[(2)]);
var state_25814__$1 = state_25814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25814__$1,inst_25812);
} else {
if((state_val_25815 === (12))){
var inst_25741 = (state_25814[(2)]);
var state_25814__$1 = state_25814;
var statearr_25866_25931 = state_25814__$1;
(statearr_25866_25931[(2)] = inst_25741);

(statearr_25866_25931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (2))){
var state_25814__$1 = state_25814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25814__$1,(4),ch);
} else {
if((state_val_25815 === (23))){
var state_25814__$1 = state_25814;
var statearr_25867_25932 = state_25814__$1;
(statearr_25867_25932[(2)] = null);

(statearr_25867_25932[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (35))){
var inst_25796 = (state_25814[(2)]);
var state_25814__$1 = state_25814;
var statearr_25868_25933 = state_25814__$1;
(statearr_25868_25933[(2)] = inst_25796);

(statearr_25868_25933[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (19))){
var inst_25713 = (state_25814[(7)]);
var inst_25717 = cljs.core.chunk_first.call(null,inst_25713);
var inst_25718 = cljs.core.chunk_rest.call(null,inst_25713);
var inst_25719 = cljs.core.count.call(null,inst_25717);
var inst_25691 = inst_25718;
var inst_25692 = inst_25717;
var inst_25693 = inst_25719;
var inst_25694 = (0);
var state_25814__$1 = (function (){var statearr_25869 = state_25814;
(statearr_25869[(13)] = inst_25693);

(statearr_25869[(14)] = inst_25692);

(statearr_25869[(15)] = inst_25691);

(statearr_25869[(16)] = inst_25694);

return statearr_25869;
})();
var statearr_25870_25934 = state_25814__$1;
(statearr_25870_25934[(2)] = null);

(statearr_25870_25934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (11))){
var inst_25691 = (state_25814[(15)]);
var inst_25713 = (state_25814[(7)]);
var inst_25713__$1 = cljs.core.seq.call(null,inst_25691);
var state_25814__$1 = (function (){var statearr_25871 = state_25814;
(statearr_25871[(7)] = inst_25713__$1);

return statearr_25871;
})();
if(inst_25713__$1){
var statearr_25872_25935 = state_25814__$1;
(statearr_25872_25935[(1)] = (16));

} else {
var statearr_25873_25936 = state_25814__$1;
(statearr_25873_25936[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (9))){
var inst_25743 = (state_25814[(2)]);
var state_25814__$1 = state_25814;
var statearr_25874_25937 = state_25814__$1;
(statearr_25874_25937[(2)] = inst_25743);

(statearr_25874_25937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (5))){
var inst_25689 = cljs.core.deref.call(null,cs);
var inst_25690 = cljs.core.seq.call(null,inst_25689);
var inst_25691 = inst_25690;
var inst_25692 = null;
var inst_25693 = (0);
var inst_25694 = (0);
var state_25814__$1 = (function (){var statearr_25875 = state_25814;
(statearr_25875[(13)] = inst_25693);

(statearr_25875[(14)] = inst_25692);

(statearr_25875[(15)] = inst_25691);

(statearr_25875[(16)] = inst_25694);

return statearr_25875;
})();
var statearr_25876_25938 = state_25814__$1;
(statearr_25876_25938[(2)] = null);

(statearr_25876_25938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (14))){
var state_25814__$1 = state_25814;
var statearr_25877_25939 = state_25814__$1;
(statearr_25877_25939[(2)] = null);

(statearr_25877_25939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (45))){
var inst_25804 = (state_25814[(2)]);
var state_25814__$1 = state_25814;
var statearr_25878_25940 = state_25814__$1;
(statearr_25878_25940[(2)] = inst_25804);

(statearr_25878_25940[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (26))){
var inst_25746 = (state_25814[(29)]);
var inst_25800 = (state_25814[(2)]);
var inst_25801 = cljs.core.seq.call(null,inst_25746);
var state_25814__$1 = (function (){var statearr_25879 = state_25814;
(statearr_25879[(31)] = inst_25800);

return statearr_25879;
})();
if(inst_25801){
var statearr_25880_25941 = state_25814__$1;
(statearr_25880_25941[(1)] = (42));

} else {
var statearr_25881_25942 = state_25814__$1;
(statearr_25881_25942[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (16))){
var inst_25713 = (state_25814[(7)]);
var inst_25715 = cljs.core.chunked_seq_QMARK_.call(null,inst_25713);
var state_25814__$1 = state_25814;
if(inst_25715){
var statearr_25882_25943 = state_25814__$1;
(statearr_25882_25943[(1)] = (19));

} else {
var statearr_25883_25944 = state_25814__$1;
(statearr_25883_25944[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (38))){
var inst_25793 = (state_25814[(2)]);
var state_25814__$1 = state_25814;
var statearr_25884_25945 = state_25814__$1;
(statearr_25884_25945[(2)] = inst_25793);

(statearr_25884_25945[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (30))){
var state_25814__$1 = state_25814;
var statearr_25885_25946 = state_25814__$1;
(statearr_25885_25946[(2)] = null);

(statearr_25885_25946[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (10))){
var inst_25692 = (state_25814[(14)]);
var inst_25694 = (state_25814[(16)]);
var inst_25702 = cljs.core._nth.call(null,inst_25692,inst_25694);
var inst_25703 = cljs.core.nth.call(null,inst_25702,(0),null);
var inst_25704 = cljs.core.nth.call(null,inst_25702,(1),null);
var state_25814__$1 = (function (){var statearr_25886 = state_25814;
(statearr_25886[(26)] = inst_25703);

return statearr_25886;
})();
if(cljs.core.truth_(inst_25704)){
var statearr_25887_25947 = state_25814__$1;
(statearr_25887_25947[(1)] = (13));

} else {
var statearr_25888_25948 = state_25814__$1;
(statearr_25888_25948[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (18))){
var inst_25739 = (state_25814[(2)]);
var state_25814__$1 = state_25814;
var statearr_25889_25949 = state_25814__$1;
(statearr_25889_25949[(2)] = inst_25739);

(statearr_25889_25949[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (42))){
var state_25814__$1 = state_25814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25814__$1,(45),dchan);
} else {
if((state_val_25815 === (37))){
var inst_25773 = (state_25814[(25)]);
var inst_25682 = (state_25814[(12)]);
var inst_25782 = (state_25814[(23)]);
var inst_25782__$1 = cljs.core.first.call(null,inst_25773);
var inst_25783 = cljs.core.async.put_BANG_.call(null,inst_25782__$1,inst_25682,done);
var state_25814__$1 = (function (){var statearr_25890 = state_25814;
(statearr_25890[(23)] = inst_25782__$1);

return statearr_25890;
})();
if(cljs.core.truth_(inst_25783)){
var statearr_25891_25950 = state_25814__$1;
(statearr_25891_25950[(1)] = (39));

} else {
var statearr_25892_25951 = state_25814__$1;
(statearr_25892_25951[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25815 === (8))){
var inst_25693 = (state_25814[(13)]);
var inst_25694 = (state_25814[(16)]);
var inst_25696 = (inst_25694 < inst_25693);
var inst_25697 = inst_25696;
var state_25814__$1 = state_25814;
if(cljs.core.truth_(inst_25697)){
var statearr_25893_25952 = state_25814__$1;
(statearr_25893_25952[(1)] = (10));

} else {
var statearr_25894_25953 = state_25814__$1;
(statearr_25894_25953[(1)] = (11));

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
});})(c__25080__auto___25899,cs,m,dchan,dctr,done))
;
return ((function (switch__24985__auto__,c__25080__auto___25899,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24986__auto__ = null;
var cljs$core$async$mult_$_state_machine__24986__auto____0 = (function (){
var statearr_25895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25895[(0)] = cljs$core$async$mult_$_state_machine__24986__auto__);

(statearr_25895[(1)] = (1));

return statearr_25895;
});
var cljs$core$async$mult_$_state_machine__24986__auto____1 = (function (state_25814){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_25814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e25896){if((e25896 instanceof Object)){
var ex__24989__auto__ = e25896;
var statearr_25897_25954 = state_25814;
(statearr_25897_25954[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25955 = state_25814;
state_25814 = G__25955;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24986__auto__ = function(state_25814){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24986__auto____1.call(this,state_25814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24986__auto____0;
cljs$core$async$mult_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24986__auto____1;
return cljs$core$async$mult_$_state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___25899,cs,m,dchan,dctr,done))
})();
var state__25082__auto__ = (function (){var statearr_25898 = f__25081__auto__.call(null);
(statearr_25898[(6)] = c__25080__auto___25899);

return statearr_25898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___25899,cs,m,dchan,dctr,done))
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
var G__25957 = arguments.length;
switch (G__25957) {
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
var len__4641__auto___25969 = arguments.length;
var i__4642__auto___25970 = (0);
while(true){
if((i__4642__auto___25970 < len__4641__auto___25969)){
args__4647__auto__.push((arguments[i__4642__auto___25970]));

var G__25971 = (i__4642__auto___25970 + (1));
i__4642__auto___25970 = G__25971;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25963){
var map__25964 = p__25963;
var map__25964__$1 = (((((!((map__25964 == null))))?(((((map__25964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25964):map__25964);
var opts = map__25964__$1;
var statearr_25966_25972 = state;
(statearr_25966_25972[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__25964,map__25964__$1,opts){
return (function (val){
var statearr_25967_25973 = state;
(statearr_25967_25973[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25964,map__25964__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25968_25974 = state;
(statearr_25968_25974[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25959){
var G__25960 = cljs.core.first.call(null,seq25959);
var seq25959__$1 = cljs.core.next.call(null,seq25959);
var G__25961 = cljs.core.first.call(null,seq25959__$1);
var seq25959__$2 = cljs.core.next.call(null,seq25959__$1);
var G__25962 = cljs.core.first.call(null,seq25959__$2);
var seq25959__$3 = cljs.core.next.call(null,seq25959__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25960,G__25961,G__25962,seq25959__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25975 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25975 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25976){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25976 = meta25976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25977,meta25976__$1){
var self__ = this;
var _25977__$1 = this;
return (new cljs.core.async.t_cljs$core$async25975(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25976__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25977){
var self__ = this;
var _25977__$1 = this;
return self__.meta25976;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25975.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta25976","meta25976",753003520,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25975.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25975";

cljs.core.async.t_cljs$core$async25975.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25975");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25975.
 */
cljs.core.async.__GT_t_cljs$core$async25975 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25975(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25976){
return (new cljs.core.async.t_cljs$core$async25975(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25976));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25975(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25080__auto___26139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___26139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___26139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26079){
var state_val_26080 = (state_26079[(1)]);
if((state_val_26080 === (7))){
var inst_25994 = (state_26079[(2)]);
var state_26079__$1 = state_26079;
var statearr_26081_26140 = state_26079__$1;
(statearr_26081_26140[(2)] = inst_25994);

(statearr_26081_26140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (20))){
var inst_26006 = (state_26079[(7)]);
var state_26079__$1 = state_26079;
var statearr_26082_26141 = state_26079__$1;
(statearr_26082_26141[(2)] = inst_26006);

(statearr_26082_26141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (27))){
var state_26079__$1 = state_26079;
var statearr_26083_26142 = state_26079__$1;
(statearr_26083_26142[(2)] = null);

(statearr_26083_26142[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (1))){
var inst_25981 = (state_26079[(8)]);
var inst_25981__$1 = calc_state.call(null);
var inst_25983 = (inst_25981__$1 == null);
var inst_25984 = cljs.core.not.call(null,inst_25983);
var state_26079__$1 = (function (){var statearr_26084 = state_26079;
(statearr_26084[(8)] = inst_25981__$1);

return statearr_26084;
})();
if(inst_25984){
var statearr_26085_26143 = state_26079__$1;
(statearr_26085_26143[(1)] = (2));

} else {
var statearr_26086_26144 = state_26079__$1;
(statearr_26086_26144[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (24))){
var inst_26030 = (state_26079[(9)]);
var inst_26053 = (state_26079[(10)]);
var inst_26039 = (state_26079[(11)]);
var inst_26053__$1 = inst_26030.call(null,inst_26039);
var state_26079__$1 = (function (){var statearr_26087 = state_26079;
(statearr_26087[(10)] = inst_26053__$1);

return statearr_26087;
})();
if(cljs.core.truth_(inst_26053__$1)){
var statearr_26088_26145 = state_26079__$1;
(statearr_26088_26145[(1)] = (29));

} else {
var statearr_26089_26146 = state_26079__$1;
(statearr_26089_26146[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (4))){
var inst_25997 = (state_26079[(2)]);
var state_26079__$1 = state_26079;
if(cljs.core.truth_(inst_25997)){
var statearr_26090_26147 = state_26079__$1;
(statearr_26090_26147[(1)] = (8));

} else {
var statearr_26091_26148 = state_26079__$1;
(statearr_26091_26148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (15))){
var inst_26024 = (state_26079[(2)]);
var state_26079__$1 = state_26079;
if(cljs.core.truth_(inst_26024)){
var statearr_26092_26149 = state_26079__$1;
(statearr_26092_26149[(1)] = (19));

} else {
var statearr_26093_26150 = state_26079__$1;
(statearr_26093_26150[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (21))){
var inst_26029 = (state_26079[(12)]);
var inst_26029__$1 = (state_26079[(2)]);
var inst_26030 = cljs.core.get.call(null,inst_26029__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26031 = cljs.core.get.call(null,inst_26029__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26032 = cljs.core.get.call(null,inst_26029__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26079__$1 = (function (){var statearr_26094 = state_26079;
(statearr_26094[(13)] = inst_26031);

(statearr_26094[(9)] = inst_26030);

(statearr_26094[(12)] = inst_26029__$1);

return statearr_26094;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26079__$1,(22),inst_26032);
} else {
if((state_val_26080 === (31))){
var inst_26061 = (state_26079[(2)]);
var state_26079__$1 = state_26079;
if(cljs.core.truth_(inst_26061)){
var statearr_26095_26151 = state_26079__$1;
(statearr_26095_26151[(1)] = (32));

} else {
var statearr_26096_26152 = state_26079__$1;
(statearr_26096_26152[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (32))){
var inst_26038 = (state_26079[(14)]);
var state_26079__$1 = state_26079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26079__$1,(35),out,inst_26038);
} else {
if((state_val_26080 === (33))){
var inst_26029 = (state_26079[(12)]);
var inst_26006 = inst_26029;
var state_26079__$1 = (function (){var statearr_26097 = state_26079;
(statearr_26097[(7)] = inst_26006);

return statearr_26097;
})();
var statearr_26098_26153 = state_26079__$1;
(statearr_26098_26153[(2)] = null);

(statearr_26098_26153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (13))){
var inst_26006 = (state_26079[(7)]);
var inst_26013 = inst_26006.cljs$lang$protocol_mask$partition0$;
var inst_26014 = (inst_26013 & (64));
var inst_26015 = inst_26006.cljs$core$ISeq$;
var inst_26016 = (cljs.core.PROTOCOL_SENTINEL === inst_26015);
var inst_26017 = ((inst_26014) || (inst_26016));
var state_26079__$1 = state_26079;
if(cljs.core.truth_(inst_26017)){
var statearr_26099_26154 = state_26079__$1;
(statearr_26099_26154[(1)] = (16));

} else {
var statearr_26100_26155 = state_26079__$1;
(statearr_26100_26155[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (22))){
var inst_26038 = (state_26079[(14)]);
var inst_26039 = (state_26079[(11)]);
var inst_26037 = (state_26079[(2)]);
var inst_26038__$1 = cljs.core.nth.call(null,inst_26037,(0),null);
var inst_26039__$1 = cljs.core.nth.call(null,inst_26037,(1),null);
var inst_26040 = (inst_26038__$1 == null);
var inst_26041 = cljs.core._EQ_.call(null,inst_26039__$1,change);
var inst_26042 = ((inst_26040) || (inst_26041));
var state_26079__$1 = (function (){var statearr_26101 = state_26079;
(statearr_26101[(14)] = inst_26038__$1);

(statearr_26101[(11)] = inst_26039__$1);

return statearr_26101;
})();
if(cljs.core.truth_(inst_26042)){
var statearr_26102_26156 = state_26079__$1;
(statearr_26102_26156[(1)] = (23));

} else {
var statearr_26103_26157 = state_26079__$1;
(statearr_26103_26157[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (36))){
var inst_26029 = (state_26079[(12)]);
var inst_26006 = inst_26029;
var state_26079__$1 = (function (){var statearr_26104 = state_26079;
(statearr_26104[(7)] = inst_26006);

return statearr_26104;
})();
var statearr_26105_26158 = state_26079__$1;
(statearr_26105_26158[(2)] = null);

(statearr_26105_26158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (29))){
var inst_26053 = (state_26079[(10)]);
var state_26079__$1 = state_26079;
var statearr_26106_26159 = state_26079__$1;
(statearr_26106_26159[(2)] = inst_26053);

(statearr_26106_26159[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (6))){
var state_26079__$1 = state_26079;
var statearr_26107_26160 = state_26079__$1;
(statearr_26107_26160[(2)] = false);

(statearr_26107_26160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (28))){
var inst_26049 = (state_26079[(2)]);
var inst_26050 = calc_state.call(null);
var inst_26006 = inst_26050;
var state_26079__$1 = (function (){var statearr_26108 = state_26079;
(statearr_26108[(15)] = inst_26049);

(statearr_26108[(7)] = inst_26006);

return statearr_26108;
})();
var statearr_26109_26161 = state_26079__$1;
(statearr_26109_26161[(2)] = null);

(statearr_26109_26161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (25))){
var inst_26075 = (state_26079[(2)]);
var state_26079__$1 = state_26079;
var statearr_26110_26162 = state_26079__$1;
(statearr_26110_26162[(2)] = inst_26075);

(statearr_26110_26162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (34))){
var inst_26073 = (state_26079[(2)]);
var state_26079__$1 = state_26079;
var statearr_26111_26163 = state_26079__$1;
(statearr_26111_26163[(2)] = inst_26073);

(statearr_26111_26163[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (17))){
var state_26079__$1 = state_26079;
var statearr_26112_26164 = state_26079__$1;
(statearr_26112_26164[(2)] = false);

(statearr_26112_26164[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (3))){
var state_26079__$1 = state_26079;
var statearr_26113_26165 = state_26079__$1;
(statearr_26113_26165[(2)] = false);

(statearr_26113_26165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (12))){
var inst_26077 = (state_26079[(2)]);
var state_26079__$1 = state_26079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26079__$1,inst_26077);
} else {
if((state_val_26080 === (2))){
var inst_25981 = (state_26079[(8)]);
var inst_25986 = inst_25981.cljs$lang$protocol_mask$partition0$;
var inst_25987 = (inst_25986 & (64));
var inst_25988 = inst_25981.cljs$core$ISeq$;
var inst_25989 = (cljs.core.PROTOCOL_SENTINEL === inst_25988);
var inst_25990 = ((inst_25987) || (inst_25989));
var state_26079__$1 = state_26079;
if(cljs.core.truth_(inst_25990)){
var statearr_26114_26166 = state_26079__$1;
(statearr_26114_26166[(1)] = (5));

} else {
var statearr_26115_26167 = state_26079__$1;
(statearr_26115_26167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (23))){
var inst_26038 = (state_26079[(14)]);
var inst_26044 = (inst_26038 == null);
var state_26079__$1 = state_26079;
if(cljs.core.truth_(inst_26044)){
var statearr_26116_26168 = state_26079__$1;
(statearr_26116_26168[(1)] = (26));

} else {
var statearr_26117_26169 = state_26079__$1;
(statearr_26117_26169[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (35))){
var inst_26064 = (state_26079[(2)]);
var state_26079__$1 = state_26079;
if(cljs.core.truth_(inst_26064)){
var statearr_26118_26170 = state_26079__$1;
(statearr_26118_26170[(1)] = (36));

} else {
var statearr_26119_26171 = state_26079__$1;
(statearr_26119_26171[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (19))){
var inst_26006 = (state_26079[(7)]);
var inst_26026 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26006);
var state_26079__$1 = state_26079;
var statearr_26120_26172 = state_26079__$1;
(statearr_26120_26172[(2)] = inst_26026);

(statearr_26120_26172[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (11))){
var inst_26006 = (state_26079[(7)]);
var inst_26010 = (inst_26006 == null);
var inst_26011 = cljs.core.not.call(null,inst_26010);
var state_26079__$1 = state_26079;
if(inst_26011){
var statearr_26121_26173 = state_26079__$1;
(statearr_26121_26173[(1)] = (13));

} else {
var statearr_26122_26174 = state_26079__$1;
(statearr_26122_26174[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (9))){
var inst_25981 = (state_26079[(8)]);
var state_26079__$1 = state_26079;
var statearr_26123_26175 = state_26079__$1;
(statearr_26123_26175[(2)] = inst_25981);

(statearr_26123_26175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (5))){
var state_26079__$1 = state_26079;
var statearr_26124_26176 = state_26079__$1;
(statearr_26124_26176[(2)] = true);

(statearr_26124_26176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (14))){
var state_26079__$1 = state_26079;
var statearr_26125_26177 = state_26079__$1;
(statearr_26125_26177[(2)] = false);

(statearr_26125_26177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (26))){
var inst_26039 = (state_26079[(11)]);
var inst_26046 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26039);
var state_26079__$1 = state_26079;
var statearr_26126_26178 = state_26079__$1;
(statearr_26126_26178[(2)] = inst_26046);

(statearr_26126_26178[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (16))){
var state_26079__$1 = state_26079;
var statearr_26127_26179 = state_26079__$1;
(statearr_26127_26179[(2)] = true);

(statearr_26127_26179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (38))){
var inst_26069 = (state_26079[(2)]);
var state_26079__$1 = state_26079;
var statearr_26128_26180 = state_26079__$1;
(statearr_26128_26180[(2)] = inst_26069);

(statearr_26128_26180[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (30))){
var inst_26031 = (state_26079[(13)]);
var inst_26030 = (state_26079[(9)]);
var inst_26039 = (state_26079[(11)]);
var inst_26056 = cljs.core.empty_QMARK_.call(null,inst_26030);
var inst_26057 = inst_26031.call(null,inst_26039);
var inst_26058 = cljs.core.not.call(null,inst_26057);
var inst_26059 = ((inst_26056) && (inst_26058));
var state_26079__$1 = state_26079;
var statearr_26129_26181 = state_26079__$1;
(statearr_26129_26181[(2)] = inst_26059);

(statearr_26129_26181[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (10))){
var inst_25981 = (state_26079[(8)]);
var inst_26002 = (state_26079[(2)]);
var inst_26003 = cljs.core.get.call(null,inst_26002,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26004 = cljs.core.get.call(null,inst_26002,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26005 = cljs.core.get.call(null,inst_26002,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26006 = inst_25981;
var state_26079__$1 = (function (){var statearr_26130 = state_26079;
(statearr_26130[(16)] = inst_26005);

(statearr_26130[(7)] = inst_26006);

(statearr_26130[(17)] = inst_26003);

(statearr_26130[(18)] = inst_26004);

return statearr_26130;
})();
var statearr_26131_26182 = state_26079__$1;
(statearr_26131_26182[(2)] = null);

(statearr_26131_26182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (18))){
var inst_26021 = (state_26079[(2)]);
var state_26079__$1 = state_26079;
var statearr_26132_26183 = state_26079__$1;
(statearr_26132_26183[(2)] = inst_26021);

(statearr_26132_26183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (37))){
var state_26079__$1 = state_26079;
var statearr_26133_26184 = state_26079__$1;
(statearr_26133_26184[(2)] = null);

(statearr_26133_26184[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (8))){
var inst_25981 = (state_26079[(8)]);
var inst_25999 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25981);
var state_26079__$1 = state_26079;
var statearr_26134_26185 = state_26079__$1;
(statearr_26134_26185[(2)] = inst_25999);

(statearr_26134_26185[(1)] = (10));


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
});})(c__25080__auto___26139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24985__auto__,c__25080__auto___26139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24986__auto__ = null;
var cljs$core$async$mix_$_state_machine__24986__auto____0 = (function (){
var statearr_26135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26135[(0)] = cljs$core$async$mix_$_state_machine__24986__auto__);

(statearr_26135[(1)] = (1));

return statearr_26135;
});
var cljs$core$async$mix_$_state_machine__24986__auto____1 = (function (state_26079){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_26079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e26136){if((e26136 instanceof Object)){
var ex__24989__auto__ = e26136;
var statearr_26137_26186 = state_26079;
(statearr_26137_26186[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26187 = state_26079;
state_26079 = G__26187;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24986__auto__ = function(state_26079){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24986__auto____1.call(this,state_26079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24986__auto____0;
cljs$core$async$mix_$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24986__auto____1;
return cljs$core$async$mix_$_state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___26139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25082__auto__ = (function (){var statearr_26138 = f__25081__auto__.call(null);
(statearr_26138[(6)] = c__25080__auto___26139);

return statearr_26138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___26139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__26189 = arguments.length;
switch (G__26189) {
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
var G__26193 = arguments.length;
switch (G__26193) {
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
return (function (p1__26191_SHARP_){
if(cljs.core.truth_(p1__26191_SHARP_.call(null,topic))){
return p1__26191_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26191_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26194 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26195){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26195 = meta26195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26196,meta26195__$1){
var self__ = this;
var _26196__$1 = this;
return (new cljs.core.async.t_cljs$core$async26194(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26195__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26194.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26196){
var self__ = this;
var _26196__$1 = this;
return self__.meta26195;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26194.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26194.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26194.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26194.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26194.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26194.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26194.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26194.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26195","meta26195",1361924558,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26194";

cljs.core.async.t_cljs$core$async26194.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26194");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26194.
 */
cljs.core.async.__GT_t_cljs$core$async26194 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26194(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26195){
return (new cljs.core.async.t_cljs$core$async26194(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26195));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26194(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25080__auto___26314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___26314,mults,ensure_mult,p){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___26314,mults,ensure_mult,p){
return (function (state_26268){
var state_val_26269 = (state_26268[(1)]);
if((state_val_26269 === (7))){
var inst_26264 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
var statearr_26270_26315 = state_26268__$1;
(statearr_26270_26315[(2)] = inst_26264);

(statearr_26270_26315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (20))){
var state_26268__$1 = state_26268;
var statearr_26271_26316 = state_26268__$1;
(statearr_26271_26316[(2)] = null);

(statearr_26271_26316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (1))){
var state_26268__$1 = state_26268;
var statearr_26272_26317 = state_26268__$1;
(statearr_26272_26317[(2)] = null);

(statearr_26272_26317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (24))){
var inst_26247 = (state_26268[(7)]);
var inst_26256 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26247);
var state_26268__$1 = state_26268;
var statearr_26273_26318 = state_26268__$1;
(statearr_26273_26318[(2)] = inst_26256);

(statearr_26273_26318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (4))){
var inst_26199 = (state_26268[(8)]);
var inst_26199__$1 = (state_26268[(2)]);
var inst_26200 = (inst_26199__$1 == null);
var state_26268__$1 = (function (){var statearr_26274 = state_26268;
(statearr_26274[(8)] = inst_26199__$1);

return statearr_26274;
})();
if(cljs.core.truth_(inst_26200)){
var statearr_26275_26319 = state_26268__$1;
(statearr_26275_26319[(1)] = (5));

} else {
var statearr_26276_26320 = state_26268__$1;
(statearr_26276_26320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (15))){
var inst_26241 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
var statearr_26277_26321 = state_26268__$1;
(statearr_26277_26321[(2)] = inst_26241);

(statearr_26277_26321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (21))){
var inst_26261 = (state_26268[(2)]);
var state_26268__$1 = (function (){var statearr_26278 = state_26268;
(statearr_26278[(9)] = inst_26261);

return statearr_26278;
})();
var statearr_26279_26322 = state_26268__$1;
(statearr_26279_26322[(2)] = null);

(statearr_26279_26322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (13))){
var inst_26223 = (state_26268[(10)]);
var inst_26225 = cljs.core.chunked_seq_QMARK_.call(null,inst_26223);
var state_26268__$1 = state_26268;
if(inst_26225){
var statearr_26280_26323 = state_26268__$1;
(statearr_26280_26323[(1)] = (16));

} else {
var statearr_26281_26324 = state_26268__$1;
(statearr_26281_26324[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (22))){
var inst_26253 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
if(cljs.core.truth_(inst_26253)){
var statearr_26282_26325 = state_26268__$1;
(statearr_26282_26325[(1)] = (23));

} else {
var statearr_26283_26326 = state_26268__$1;
(statearr_26283_26326[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (6))){
var inst_26249 = (state_26268[(11)]);
var inst_26247 = (state_26268[(7)]);
var inst_26199 = (state_26268[(8)]);
var inst_26247__$1 = topic_fn.call(null,inst_26199);
var inst_26248 = cljs.core.deref.call(null,mults);
var inst_26249__$1 = cljs.core.get.call(null,inst_26248,inst_26247__$1);
var state_26268__$1 = (function (){var statearr_26284 = state_26268;
(statearr_26284[(11)] = inst_26249__$1);

(statearr_26284[(7)] = inst_26247__$1);

return statearr_26284;
})();
if(cljs.core.truth_(inst_26249__$1)){
var statearr_26285_26327 = state_26268__$1;
(statearr_26285_26327[(1)] = (19));

} else {
var statearr_26286_26328 = state_26268__$1;
(statearr_26286_26328[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (25))){
var inst_26258 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
var statearr_26287_26329 = state_26268__$1;
(statearr_26287_26329[(2)] = inst_26258);

(statearr_26287_26329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (17))){
var inst_26223 = (state_26268[(10)]);
var inst_26232 = cljs.core.first.call(null,inst_26223);
var inst_26233 = cljs.core.async.muxch_STAR_.call(null,inst_26232);
var inst_26234 = cljs.core.async.close_BANG_.call(null,inst_26233);
var inst_26235 = cljs.core.next.call(null,inst_26223);
var inst_26209 = inst_26235;
var inst_26210 = null;
var inst_26211 = (0);
var inst_26212 = (0);
var state_26268__$1 = (function (){var statearr_26288 = state_26268;
(statearr_26288[(12)] = inst_26234);

(statearr_26288[(13)] = inst_26211);

(statearr_26288[(14)] = inst_26212);

(statearr_26288[(15)] = inst_26209);

(statearr_26288[(16)] = inst_26210);

return statearr_26288;
})();
var statearr_26289_26330 = state_26268__$1;
(statearr_26289_26330[(2)] = null);

(statearr_26289_26330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (3))){
var inst_26266 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26268__$1,inst_26266);
} else {
if((state_val_26269 === (12))){
var inst_26243 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
var statearr_26290_26331 = state_26268__$1;
(statearr_26290_26331[(2)] = inst_26243);

(statearr_26290_26331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (2))){
var state_26268__$1 = state_26268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26268__$1,(4),ch);
} else {
if((state_val_26269 === (23))){
var state_26268__$1 = state_26268;
var statearr_26291_26332 = state_26268__$1;
(statearr_26291_26332[(2)] = null);

(statearr_26291_26332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (19))){
var inst_26249 = (state_26268[(11)]);
var inst_26199 = (state_26268[(8)]);
var inst_26251 = cljs.core.async.muxch_STAR_.call(null,inst_26249);
var state_26268__$1 = state_26268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26268__$1,(22),inst_26251,inst_26199);
} else {
if((state_val_26269 === (11))){
var inst_26223 = (state_26268[(10)]);
var inst_26209 = (state_26268[(15)]);
var inst_26223__$1 = cljs.core.seq.call(null,inst_26209);
var state_26268__$1 = (function (){var statearr_26292 = state_26268;
(statearr_26292[(10)] = inst_26223__$1);

return statearr_26292;
})();
if(inst_26223__$1){
var statearr_26293_26333 = state_26268__$1;
(statearr_26293_26333[(1)] = (13));

} else {
var statearr_26294_26334 = state_26268__$1;
(statearr_26294_26334[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (9))){
var inst_26245 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
var statearr_26295_26335 = state_26268__$1;
(statearr_26295_26335[(2)] = inst_26245);

(statearr_26295_26335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (5))){
var inst_26206 = cljs.core.deref.call(null,mults);
var inst_26207 = cljs.core.vals.call(null,inst_26206);
var inst_26208 = cljs.core.seq.call(null,inst_26207);
var inst_26209 = inst_26208;
var inst_26210 = null;
var inst_26211 = (0);
var inst_26212 = (0);
var state_26268__$1 = (function (){var statearr_26296 = state_26268;
(statearr_26296[(13)] = inst_26211);

(statearr_26296[(14)] = inst_26212);

(statearr_26296[(15)] = inst_26209);

(statearr_26296[(16)] = inst_26210);

return statearr_26296;
})();
var statearr_26297_26336 = state_26268__$1;
(statearr_26297_26336[(2)] = null);

(statearr_26297_26336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (14))){
var state_26268__$1 = state_26268;
var statearr_26301_26337 = state_26268__$1;
(statearr_26301_26337[(2)] = null);

(statearr_26301_26337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (16))){
var inst_26223 = (state_26268[(10)]);
var inst_26227 = cljs.core.chunk_first.call(null,inst_26223);
var inst_26228 = cljs.core.chunk_rest.call(null,inst_26223);
var inst_26229 = cljs.core.count.call(null,inst_26227);
var inst_26209 = inst_26228;
var inst_26210 = inst_26227;
var inst_26211 = inst_26229;
var inst_26212 = (0);
var state_26268__$1 = (function (){var statearr_26302 = state_26268;
(statearr_26302[(13)] = inst_26211);

(statearr_26302[(14)] = inst_26212);

(statearr_26302[(15)] = inst_26209);

(statearr_26302[(16)] = inst_26210);

return statearr_26302;
})();
var statearr_26303_26338 = state_26268__$1;
(statearr_26303_26338[(2)] = null);

(statearr_26303_26338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (10))){
var inst_26211 = (state_26268[(13)]);
var inst_26212 = (state_26268[(14)]);
var inst_26209 = (state_26268[(15)]);
var inst_26210 = (state_26268[(16)]);
var inst_26217 = cljs.core._nth.call(null,inst_26210,inst_26212);
var inst_26218 = cljs.core.async.muxch_STAR_.call(null,inst_26217);
var inst_26219 = cljs.core.async.close_BANG_.call(null,inst_26218);
var inst_26220 = (inst_26212 + (1));
var tmp26298 = inst_26211;
var tmp26299 = inst_26209;
var tmp26300 = inst_26210;
var inst_26209__$1 = tmp26299;
var inst_26210__$1 = tmp26300;
var inst_26211__$1 = tmp26298;
var inst_26212__$1 = inst_26220;
var state_26268__$1 = (function (){var statearr_26304 = state_26268;
(statearr_26304[(17)] = inst_26219);

(statearr_26304[(13)] = inst_26211__$1);

(statearr_26304[(14)] = inst_26212__$1);

(statearr_26304[(15)] = inst_26209__$1);

(statearr_26304[(16)] = inst_26210__$1);

return statearr_26304;
})();
var statearr_26305_26339 = state_26268__$1;
(statearr_26305_26339[(2)] = null);

(statearr_26305_26339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (18))){
var inst_26238 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
var statearr_26306_26340 = state_26268__$1;
(statearr_26306_26340[(2)] = inst_26238);

(statearr_26306_26340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (8))){
var inst_26211 = (state_26268[(13)]);
var inst_26212 = (state_26268[(14)]);
var inst_26214 = (inst_26212 < inst_26211);
var inst_26215 = inst_26214;
var state_26268__$1 = state_26268;
if(cljs.core.truth_(inst_26215)){
var statearr_26307_26341 = state_26268__$1;
(statearr_26307_26341[(1)] = (10));

} else {
var statearr_26308_26342 = state_26268__$1;
(statearr_26308_26342[(1)] = (11));

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
});})(c__25080__auto___26314,mults,ensure_mult,p))
;
return ((function (switch__24985__auto__,c__25080__auto___26314,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24986__auto__ = null;
var cljs$core$async$state_machine__24986__auto____0 = (function (){
var statearr_26309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26309[(0)] = cljs$core$async$state_machine__24986__auto__);

(statearr_26309[(1)] = (1));

return statearr_26309;
});
var cljs$core$async$state_machine__24986__auto____1 = (function (state_26268){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_26268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e26310){if((e26310 instanceof Object)){
var ex__24989__auto__ = e26310;
var statearr_26311_26343 = state_26268;
(statearr_26311_26343[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26344 = state_26268;
state_26268 = G__26344;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$state_machine__24986__auto__ = function(state_26268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24986__auto____1.call(this,state_26268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24986__auto____0;
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24986__auto____1;
return cljs$core$async$state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___26314,mults,ensure_mult,p))
})();
var state__25082__auto__ = (function (){var statearr_26312 = f__25081__auto__.call(null);
(statearr_26312[(6)] = c__25080__auto___26314);

return statearr_26312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___26314,mults,ensure_mult,p))
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
var G__26346 = arguments.length;
switch (G__26346) {
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
var G__26349 = arguments.length;
switch (G__26349) {
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
var G__26352 = arguments.length;
switch (G__26352) {
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
var c__25080__auto___26419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___26419,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___26419,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26391){
var state_val_26392 = (state_26391[(1)]);
if((state_val_26392 === (7))){
var state_26391__$1 = state_26391;
var statearr_26393_26420 = state_26391__$1;
(statearr_26393_26420[(2)] = null);

(statearr_26393_26420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (1))){
var state_26391__$1 = state_26391;
var statearr_26394_26421 = state_26391__$1;
(statearr_26394_26421[(2)] = null);

(statearr_26394_26421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (4))){
var inst_26355 = (state_26391[(7)]);
var inst_26357 = (inst_26355 < cnt);
var state_26391__$1 = state_26391;
if(cljs.core.truth_(inst_26357)){
var statearr_26395_26422 = state_26391__$1;
(statearr_26395_26422[(1)] = (6));

} else {
var statearr_26396_26423 = state_26391__$1;
(statearr_26396_26423[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (15))){
var inst_26387 = (state_26391[(2)]);
var state_26391__$1 = state_26391;
var statearr_26397_26424 = state_26391__$1;
(statearr_26397_26424[(2)] = inst_26387);

(statearr_26397_26424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (13))){
var inst_26380 = cljs.core.async.close_BANG_.call(null,out);
var state_26391__$1 = state_26391;
var statearr_26398_26425 = state_26391__$1;
(statearr_26398_26425[(2)] = inst_26380);

(statearr_26398_26425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (6))){
var state_26391__$1 = state_26391;
var statearr_26399_26426 = state_26391__$1;
(statearr_26399_26426[(2)] = null);

(statearr_26399_26426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (3))){
var inst_26389 = (state_26391[(2)]);
var state_26391__$1 = state_26391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26391__$1,inst_26389);
} else {
if((state_val_26392 === (12))){
var inst_26377 = (state_26391[(8)]);
var inst_26377__$1 = (state_26391[(2)]);
var inst_26378 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26377__$1);
var state_26391__$1 = (function (){var statearr_26400 = state_26391;
(statearr_26400[(8)] = inst_26377__$1);

return statearr_26400;
})();
if(cljs.core.truth_(inst_26378)){
var statearr_26401_26427 = state_26391__$1;
(statearr_26401_26427[(1)] = (13));

} else {
var statearr_26402_26428 = state_26391__$1;
(statearr_26402_26428[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (2))){
var inst_26354 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26355 = (0);
var state_26391__$1 = (function (){var statearr_26403 = state_26391;
(statearr_26403[(9)] = inst_26354);

(statearr_26403[(7)] = inst_26355);

return statearr_26403;
})();
var statearr_26404_26429 = state_26391__$1;
(statearr_26404_26429[(2)] = null);

(statearr_26404_26429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (11))){
var inst_26355 = (state_26391[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26391,(10),Object,null,(9));
var inst_26364 = chs__$1.call(null,inst_26355);
var inst_26365 = done.call(null,inst_26355);
var inst_26366 = cljs.core.async.take_BANG_.call(null,inst_26364,inst_26365);
var state_26391__$1 = state_26391;
var statearr_26405_26430 = state_26391__$1;
(statearr_26405_26430[(2)] = inst_26366);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26391__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (9))){
var inst_26355 = (state_26391[(7)]);
var inst_26368 = (state_26391[(2)]);
var inst_26369 = (inst_26355 + (1));
var inst_26355__$1 = inst_26369;
var state_26391__$1 = (function (){var statearr_26406 = state_26391;
(statearr_26406[(10)] = inst_26368);

(statearr_26406[(7)] = inst_26355__$1);

return statearr_26406;
})();
var statearr_26407_26431 = state_26391__$1;
(statearr_26407_26431[(2)] = null);

(statearr_26407_26431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (5))){
var inst_26375 = (state_26391[(2)]);
var state_26391__$1 = (function (){var statearr_26408 = state_26391;
(statearr_26408[(11)] = inst_26375);

return statearr_26408;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26391__$1,(12),dchan);
} else {
if((state_val_26392 === (14))){
var inst_26377 = (state_26391[(8)]);
var inst_26382 = cljs.core.apply.call(null,f,inst_26377);
var state_26391__$1 = state_26391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26391__$1,(16),out,inst_26382);
} else {
if((state_val_26392 === (16))){
var inst_26384 = (state_26391[(2)]);
var state_26391__$1 = (function (){var statearr_26409 = state_26391;
(statearr_26409[(12)] = inst_26384);

return statearr_26409;
})();
var statearr_26410_26432 = state_26391__$1;
(statearr_26410_26432[(2)] = null);

(statearr_26410_26432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (10))){
var inst_26359 = (state_26391[(2)]);
var inst_26360 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26391__$1 = (function (){var statearr_26411 = state_26391;
(statearr_26411[(13)] = inst_26359);

return statearr_26411;
})();
var statearr_26412_26433 = state_26391__$1;
(statearr_26412_26433[(2)] = inst_26360);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26391__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (8))){
var inst_26373 = (state_26391[(2)]);
var state_26391__$1 = state_26391;
var statearr_26413_26434 = state_26391__$1;
(statearr_26413_26434[(2)] = inst_26373);

(statearr_26413_26434[(1)] = (5));


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
});})(c__25080__auto___26419,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24985__auto__,c__25080__auto___26419,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24986__auto__ = null;
var cljs$core$async$state_machine__24986__auto____0 = (function (){
var statearr_26414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26414[(0)] = cljs$core$async$state_machine__24986__auto__);

(statearr_26414[(1)] = (1));

return statearr_26414;
});
var cljs$core$async$state_machine__24986__auto____1 = (function (state_26391){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_26391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e26415){if((e26415 instanceof Object)){
var ex__24989__auto__ = e26415;
var statearr_26416_26435 = state_26391;
(statearr_26416_26435[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26436 = state_26391;
state_26391 = G__26436;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$state_machine__24986__auto__ = function(state_26391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24986__auto____1.call(this,state_26391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24986__auto____0;
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24986__auto____1;
return cljs$core$async$state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___26419,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25082__auto__ = (function (){var statearr_26417 = f__25081__auto__.call(null);
(statearr_26417[(6)] = c__25080__auto___26419);

return statearr_26417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___26419,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__26439 = arguments.length;
switch (G__26439) {
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
var c__25080__auto___26493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___26493,out){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___26493,out){
return (function (state_26471){
var state_val_26472 = (state_26471[(1)]);
if((state_val_26472 === (7))){
var inst_26450 = (state_26471[(7)]);
var inst_26451 = (state_26471[(8)]);
var inst_26450__$1 = (state_26471[(2)]);
var inst_26451__$1 = cljs.core.nth.call(null,inst_26450__$1,(0),null);
var inst_26452 = cljs.core.nth.call(null,inst_26450__$1,(1),null);
var inst_26453 = (inst_26451__$1 == null);
var state_26471__$1 = (function (){var statearr_26473 = state_26471;
(statearr_26473[(7)] = inst_26450__$1);

(statearr_26473[(8)] = inst_26451__$1);

(statearr_26473[(9)] = inst_26452);

return statearr_26473;
})();
if(cljs.core.truth_(inst_26453)){
var statearr_26474_26494 = state_26471__$1;
(statearr_26474_26494[(1)] = (8));

} else {
var statearr_26475_26495 = state_26471__$1;
(statearr_26475_26495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (1))){
var inst_26440 = cljs.core.vec.call(null,chs);
var inst_26441 = inst_26440;
var state_26471__$1 = (function (){var statearr_26476 = state_26471;
(statearr_26476[(10)] = inst_26441);

return statearr_26476;
})();
var statearr_26477_26496 = state_26471__$1;
(statearr_26477_26496[(2)] = null);

(statearr_26477_26496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (4))){
var inst_26441 = (state_26471[(10)]);
var state_26471__$1 = state_26471;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26471__$1,(7),inst_26441);
} else {
if((state_val_26472 === (6))){
var inst_26467 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26478_26497 = state_26471__$1;
(statearr_26478_26497[(2)] = inst_26467);

(statearr_26478_26497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (3))){
var inst_26469 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26471__$1,inst_26469);
} else {
if((state_val_26472 === (2))){
var inst_26441 = (state_26471[(10)]);
var inst_26443 = cljs.core.count.call(null,inst_26441);
var inst_26444 = (inst_26443 > (0));
var state_26471__$1 = state_26471;
if(cljs.core.truth_(inst_26444)){
var statearr_26480_26498 = state_26471__$1;
(statearr_26480_26498[(1)] = (4));

} else {
var statearr_26481_26499 = state_26471__$1;
(statearr_26481_26499[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (11))){
var inst_26441 = (state_26471[(10)]);
var inst_26460 = (state_26471[(2)]);
var tmp26479 = inst_26441;
var inst_26441__$1 = tmp26479;
var state_26471__$1 = (function (){var statearr_26482 = state_26471;
(statearr_26482[(11)] = inst_26460);

(statearr_26482[(10)] = inst_26441__$1);

return statearr_26482;
})();
var statearr_26483_26500 = state_26471__$1;
(statearr_26483_26500[(2)] = null);

(statearr_26483_26500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (9))){
var inst_26451 = (state_26471[(8)]);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26471__$1,(11),out,inst_26451);
} else {
if((state_val_26472 === (5))){
var inst_26465 = cljs.core.async.close_BANG_.call(null,out);
var state_26471__$1 = state_26471;
var statearr_26484_26501 = state_26471__$1;
(statearr_26484_26501[(2)] = inst_26465);

(statearr_26484_26501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (10))){
var inst_26463 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26485_26502 = state_26471__$1;
(statearr_26485_26502[(2)] = inst_26463);

(statearr_26485_26502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (8))){
var inst_26441 = (state_26471[(10)]);
var inst_26450 = (state_26471[(7)]);
var inst_26451 = (state_26471[(8)]);
var inst_26452 = (state_26471[(9)]);
var inst_26455 = (function (){var cs = inst_26441;
var vec__26446 = inst_26450;
var v = inst_26451;
var c = inst_26452;
return ((function (cs,vec__26446,v,c,inst_26441,inst_26450,inst_26451,inst_26452,state_val_26472,c__25080__auto___26493,out){
return (function (p1__26437_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26437_SHARP_);
});
;})(cs,vec__26446,v,c,inst_26441,inst_26450,inst_26451,inst_26452,state_val_26472,c__25080__auto___26493,out))
})();
var inst_26456 = cljs.core.filterv.call(null,inst_26455,inst_26441);
var inst_26441__$1 = inst_26456;
var state_26471__$1 = (function (){var statearr_26486 = state_26471;
(statearr_26486[(10)] = inst_26441__$1);

return statearr_26486;
})();
var statearr_26487_26503 = state_26471__$1;
(statearr_26487_26503[(2)] = null);

(statearr_26487_26503[(1)] = (2));


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
});})(c__25080__auto___26493,out))
;
return ((function (switch__24985__auto__,c__25080__auto___26493,out){
return (function() {
var cljs$core$async$state_machine__24986__auto__ = null;
var cljs$core$async$state_machine__24986__auto____0 = (function (){
var statearr_26488 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26488[(0)] = cljs$core$async$state_machine__24986__auto__);

(statearr_26488[(1)] = (1));

return statearr_26488;
});
var cljs$core$async$state_machine__24986__auto____1 = (function (state_26471){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_26471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e26489){if((e26489 instanceof Object)){
var ex__24989__auto__ = e26489;
var statearr_26490_26504 = state_26471;
(statearr_26490_26504[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26505 = state_26471;
state_26471 = G__26505;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$state_machine__24986__auto__ = function(state_26471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24986__auto____1.call(this,state_26471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24986__auto____0;
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24986__auto____1;
return cljs$core$async$state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___26493,out))
})();
var state__25082__auto__ = (function (){var statearr_26491 = f__25081__auto__.call(null);
(statearr_26491[(6)] = c__25080__auto___26493);

return statearr_26491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___26493,out))
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
var G__26507 = arguments.length;
switch (G__26507) {
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
var c__25080__auto___26552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___26552,out){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___26552,out){
return (function (state_26531){
var state_val_26532 = (state_26531[(1)]);
if((state_val_26532 === (7))){
var inst_26513 = (state_26531[(7)]);
var inst_26513__$1 = (state_26531[(2)]);
var inst_26514 = (inst_26513__$1 == null);
var inst_26515 = cljs.core.not.call(null,inst_26514);
var state_26531__$1 = (function (){var statearr_26533 = state_26531;
(statearr_26533[(7)] = inst_26513__$1);

return statearr_26533;
})();
if(inst_26515){
var statearr_26534_26553 = state_26531__$1;
(statearr_26534_26553[(1)] = (8));

} else {
var statearr_26535_26554 = state_26531__$1;
(statearr_26535_26554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (1))){
var inst_26508 = (0);
var state_26531__$1 = (function (){var statearr_26536 = state_26531;
(statearr_26536[(8)] = inst_26508);

return statearr_26536;
})();
var statearr_26537_26555 = state_26531__$1;
(statearr_26537_26555[(2)] = null);

(statearr_26537_26555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (4))){
var state_26531__$1 = state_26531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26531__$1,(7),ch);
} else {
if((state_val_26532 === (6))){
var inst_26526 = (state_26531[(2)]);
var state_26531__$1 = state_26531;
var statearr_26538_26556 = state_26531__$1;
(statearr_26538_26556[(2)] = inst_26526);

(statearr_26538_26556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (3))){
var inst_26528 = (state_26531[(2)]);
var inst_26529 = cljs.core.async.close_BANG_.call(null,out);
var state_26531__$1 = (function (){var statearr_26539 = state_26531;
(statearr_26539[(9)] = inst_26528);

return statearr_26539;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26531__$1,inst_26529);
} else {
if((state_val_26532 === (2))){
var inst_26508 = (state_26531[(8)]);
var inst_26510 = (inst_26508 < n);
var state_26531__$1 = state_26531;
if(cljs.core.truth_(inst_26510)){
var statearr_26540_26557 = state_26531__$1;
(statearr_26540_26557[(1)] = (4));

} else {
var statearr_26541_26558 = state_26531__$1;
(statearr_26541_26558[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (11))){
var inst_26508 = (state_26531[(8)]);
var inst_26518 = (state_26531[(2)]);
var inst_26519 = (inst_26508 + (1));
var inst_26508__$1 = inst_26519;
var state_26531__$1 = (function (){var statearr_26542 = state_26531;
(statearr_26542[(10)] = inst_26518);

(statearr_26542[(8)] = inst_26508__$1);

return statearr_26542;
})();
var statearr_26543_26559 = state_26531__$1;
(statearr_26543_26559[(2)] = null);

(statearr_26543_26559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (9))){
var state_26531__$1 = state_26531;
var statearr_26544_26560 = state_26531__$1;
(statearr_26544_26560[(2)] = null);

(statearr_26544_26560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (5))){
var state_26531__$1 = state_26531;
var statearr_26545_26561 = state_26531__$1;
(statearr_26545_26561[(2)] = null);

(statearr_26545_26561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (10))){
var inst_26523 = (state_26531[(2)]);
var state_26531__$1 = state_26531;
var statearr_26546_26562 = state_26531__$1;
(statearr_26546_26562[(2)] = inst_26523);

(statearr_26546_26562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (8))){
var inst_26513 = (state_26531[(7)]);
var state_26531__$1 = state_26531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26531__$1,(11),out,inst_26513);
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
});})(c__25080__auto___26552,out))
;
return ((function (switch__24985__auto__,c__25080__auto___26552,out){
return (function() {
var cljs$core$async$state_machine__24986__auto__ = null;
var cljs$core$async$state_machine__24986__auto____0 = (function (){
var statearr_26547 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26547[(0)] = cljs$core$async$state_machine__24986__auto__);

(statearr_26547[(1)] = (1));

return statearr_26547;
});
var cljs$core$async$state_machine__24986__auto____1 = (function (state_26531){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_26531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e26548){if((e26548 instanceof Object)){
var ex__24989__auto__ = e26548;
var statearr_26549_26563 = state_26531;
(statearr_26549_26563[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26564 = state_26531;
state_26531 = G__26564;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$state_machine__24986__auto__ = function(state_26531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24986__auto____1.call(this,state_26531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24986__auto____0;
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24986__auto____1;
return cljs$core$async$state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___26552,out))
})();
var state__25082__auto__ = (function (){var statearr_26550 = f__25081__auto__.call(null);
(statearr_26550[(6)] = c__25080__auto___26552);

return statearr_26550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___26552,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26566 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26566 = (function (f,ch,meta26567){
this.f = f;
this.ch = ch;
this.meta26567 = meta26567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26568,meta26567__$1){
var self__ = this;
var _26568__$1 = this;
return (new cljs.core.async.t_cljs$core$async26566(self__.f,self__.ch,meta26567__$1));
});

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26568){
var self__ = this;
var _26568__$1 = this;
return self__.meta26567;
});

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26569 = (function (f,ch,meta26567,_,fn1,meta26570){
this.f = f;
this.ch = ch;
this.meta26567 = meta26567;
this._ = _;
this.fn1 = fn1;
this.meta26570 = meta26570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26571,meta26570__$1){
var self__ = this;
var _26571__$1 = this;
return (new cljs.core.async.t_cljs$core$async26569(self__.f,self__.ch,self__.meta26567,self__._,self__.fn1,meta26570__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26571){
var self__ = this;
var _26571__$1 = this;
return self__.meta26570;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26565_SHARP_){
return f1.call(null,(((p1__26565_SHARP_ == null))?null:self__.f.call(null,p1__26565_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26569.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26567","meta26567",-1525770078,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26566","cljs.core.async/t_cljs$core$async26566",814081064,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26570","meta26570",1438083756,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26569";

cljs.core.async.t_cljs$core$async26569.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26569");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26569.
 */
cljs.core.async.__GT_t_cljs$core$async26569 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26569(f__$1,ch__$1,meta26567__$1,___$2,fn1__$1,meta26570){
return (new cljs.core.async.t_cljs$core$async26569(f__$1,ch__$1,meta26567__$1,___$2,fn1__$1,meta26570));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26569(self__.f,self__.ch,self__.meta26567,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26567","meta26567",-1525770078,null)], null);
});

cljs.core.async.t_cljs$core$async26566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26566";

cljs.core.async.t_cljs$core$async26566.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26566");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26566.
 */
cljs.core.async.__GT_t_cljs$core$async26566 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26566(f__$1,ch__$1,meta26567){
return (new cljs.core.async.t_cljs$core$async26566(f__$1,ch__$1,meta26567));
});

}

return (new cljs.core.async.t_cljs$core$async26566(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26572 = (function (f,ch,meta26573){
this.f = f;
this.ch = ch;
this.meta26573 = meta26573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26574,meta26573__$1){
var self__ = this;
var _26574__$1 = this;
return (new cljs.core.async.t_cljs$core$async26572(self__.f,self__.ch,meta26573__$1));
});

cljs.core.async.t_cljs$core$async26572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26574){
var self__ = this;
var _26574__$1 = this;
return self__.meta26573;
});

cljs.core.async.t_cljs$core$async26572.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26572.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26572.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26572.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26572.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26572.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26573","meta26573",-37463208,null)], null);
});

cljs.core.async.t_cljs$core$async26572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26572";

cljs.core.async.t_cljs$core$async26572.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26572");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26572.
 */
cljs.core.async.__GT_t_cljs$core$async26572 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26572(f__$1,ch__$1,meta26573){
return (new cljs.core.async.t_cljs$core$async26572(f__$1,ch__$1,meta26573));
});

}

return (new cljs.core.async.t_cljs$core$async26572(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26575 = (function (p,ch,meta26576){
this.p = p;
this.ch = ch;
this.meta26576 = meta26576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26577,meta26576__$1){
var self__ = this;
var _26577__$1 = this;
return (new cljs.core.async.t_cljs$core$async26575(self__.p,self__.ch,meta26576__$1));
});

cljs.core.async.t_cljs$core$async26575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26577){
var self__ = this;
var _26577__$1 = this;
return self__.meta26576;
});

cljs.core.async.t_cljs$core$async26575.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26575.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26575.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26575.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26576","meta26576",-490975060,null)], null);
});

cljs.core.async.t_cljs$core$async26575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26575";

cljs.core.async.t_cljs$core$async26575.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26575");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26575.
 */
cljs.core.async.__GT_t_cljs$core$async26575 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26575(p__$1,ch__$1,meta26576){
return (new cljs.core.async.t_cljs$core$async26575(p__$1,ch__$1,meta26576));
});

}

return (new cljs.core.async.t_cljs$core$async26575(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26579 = arguments.length;
switch (G__26579) {
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
var c__25080__auto___26619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___26619,out){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___26619,out){
return (function (state_26600){
var state_val_26601 = (state_26600[(1)]);
if((state_val_26601 === (7))){
var inst_26596 = (state_26600[(2)]);
var state_26600__$1 = state_26600;
var statearr_26602_26620 = state_26600__$1;
(statearr_26602_26620[(2)] = inst_26596);

(statearr_26602_26620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26601 === (1))){
var state_26600__$1 = state_26600;
var statearr_26603_26621 = state_26600__$1;
(statearr_26603_26621[(2)] = null);

(statearr_26603_26621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26601 === (4))){
var inst_26582 = (state_26600[(7)]);
var inst_26582__$1 = (state_26600[(2)]);
var inst_26583 = (inst_26582__$1 == null);
var state_26600__$1 = (function (){var statearr_26604 = state_26600;
(statearr_26604[(7)] = inst_26582__$1);

return statearr_26604;
})();
if(cljs.core.truth_(inst_26583)){
var statearr_26605_26622 = state_26600__$1;
(statearr_26605_26622[(1)] = (5));

} else {
var statearr_26606_26623 = state_26600__$1;
(statearr_26606_26623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26601 === (6))){
var inst_26582 = (state_26600[(7)]);
var inst_26587 = p.call(null,inst_26582);
var state_26600__$1 = state_26600;
if(cljs.core.truth_(inst_26587)){
var statearr_26607_26624 = state_26600__$1;
(statearr_26607_26624[(1)] = (8));

} else {
var statearr_26608_26625 = state_26600__$1;
(statearr_26608_26625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26601 === (3))){
var inst_26598 = (state_26600[(2)]);
var state_26600__$1 = state_26600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26600__$1,inst_26598);
} else {
if((state_val_26601 === (2))){
var state_26600__$1 = state_26600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26600__$1,(4),ch);
} else {
if((state_val_26601 === (11))){
var inst_26590 = (state_26600[(2)]);
var state_26600__$1 = state_26600;
var statearr_26609_26626 = state_26600__$1;
(statearr_26609_26626[(2)] = inst_26590);

(statearr_26609_26626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26601 === (9))){
var state_26600__$1 = state_26600;
var statearr_26610_26627 = state_26600__$1;
(statearr_26610_26627[(2)] = null);

(statearr_26610_26627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26601 === (5))){
var inst_26585 = cljs.core.async.close_BANG_.call(null,out);
var state_26600__$1 = state_26600;
var statearr_26611_26628 = state_26600__$1;
(statearr_26611_26628[(2)] = inst_26585);

(statearr_26611_26628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26601 === (10))){
var inst_26593 = (state_26600[(2)]);
var state_26600__$1 = (function (){var statearr_26612 = state_26600;
(statearr_26612[(8)] = inst_26593);

return statearr_26612;
})();
var statearr_26613_26629 = state_26600__$1;
(statearr_26613_26629[(2)] = null);

(statearr_26613_26629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26601 === (8))){
var inst_26582 = (state_26600[(7)]);
var state_26600__$1 = state_26600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26600__$1,(11),out,inst_26582);
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
});})(c__25080__auto___26619,out))
;
return ((function (switch__24985__auto__,c__25080__auto___26619,out){
return (function() {
var cljs$core$async$state_machine__24986__auto__ = null;
var cljs$core$async$state_machine__24986__auto____0 = (function (){
var statearr_26614 = [null,null,null,null,null,null,null,null,null];
(statearr_26614[(0)] = cljs$core$async$state_machine__24986__auto__);

(statearr_26614[(1)] = (1));

return statearr_26614;
});
var cljs$core$async$state_machine__24986__auto____1 = (function (state_26600){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_26600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e26615){if((e26615 instanceof Object)){
var ex__24989__auto__ = e26615;
var statearr_26616_26630 = state_26600;
(statearr_26616_26630[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26631 = state_26600;
state_26600 = G__26631;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$state_machine__24986__auto__ = function(state_26600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24986__auto____1.call(this,state_26600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24986__auto____0;
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24986__auto____1;
return cljs$core$async$state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___26619,out))
})();
var state__25082__auto__ = (function (){var statearr_26617 = f__25081__auto__.call(null);
(statearr_26617[(6)] = c__25080__auto___26619);

return statearr_26617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___26619,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26633 = arguments.length;
switch (G__26633) {
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
var c__25080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto__){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto__){
return (function (state_26696){
var state_val_26697 = (state_26696[(1)]);
if((state_val_26697 === (7))){
var inst_26692 = (state_26696[(2)]);
var state_26696__$1 = state_26696;
var statearr_26698_26736 = state_26696__$1;
(statearr_26698_26736[(2)] = inst_26692);

(statearr_26698_26736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (20))){
var inst_26662 = (state_26696[(7)]);
var inst_26673 = (state_26696[(2)]);
var inst_26674 = cljs.core.next.call(null,inst_26662);
var inst_26648 = inst_26674;
var inst_26649 = null;
var inst_26650 = (0);
var inst_26651 = (0);
var state_26696__$1 = (function (){var statearr_26699 = state_26696;
(statearr_26699[(8)] = inst_26673);

(statearr_26699[(9)] = inst_26651);

(statearr_26699[(10)] = inst_26648);

(statearr_26699[(11)] = inst_26650);

(statearr_26699[(12)] = inst_26649);

return statearr_26699;
})();
var statearr_26700_26737 = state_26696__$1;
(statearr_26700_26737[(2)] = null);

(statearr_26700_26737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (1))){
var state_26696__$1 = state_26696;
var statearr_26701_26738 = state_26696__$1;
(statearr_26701_26738[(2)] = null);

(statearr_26701_26738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (4))){
var inst_26637 = (state_26696[(13)]);
var inst_26637__$1 = (state_26696[(2)]);
var inst_26638 = (inst_26637__$1 == null);
var state_26696__$1 = (function (){var statearr_26702 = state_26696;
(statearr_26702[(13)] = inst_26637__$1);

return statearr_26702;
})();
if(cljs.core.truth_(inst_26638)){
var statearr_26703_26739 = state_26696__$1;
(statearr_26703_26739[(1)] = (5));

} else {
var statearr_26704_26740 = state_26696__$1;
(statearr_26704_26740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (15))){
var state_26696__$1 = state_26696;
var statearr_26708_26741 = state_26696__$1;
(statearr_26708_26741[(2)] = null);

(statearr_26708_26741[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (21))){
var state_26696__$1 = state_26696;
var statearr_26709_26742 = state_26696__$1;
(statearr_26709_26742[(2)] = null);

(statearr_26709_26742[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (13))){
var inst_26651 = (state_26696[(9)]);
var inst_26648 = (state_26696[(10)]);
var inst_26650 = (state_26696[(11)]);
var inst_26649 = (state_26696[(12)]);
var inst_26658 = (state_26696[(2)]);
var inst_26659 = (inst_26651 + (1));
var tmp26705 = inst_26648;
var tmp26706 = inst_26650;
var tmp26707 = inst_26649;
var inst_26648__$1 = tmp26705;
var inst_26649__$1 = tmp26707;
var inst_26650__$1 = tmp26706;
var inst_26651__$1 = inst_26659;
var state_26696__$1 = (function (){var statearr_26710 = state_26696;
(statearr_26710[(9)] = inst_26651__$1);

(statearr_26710[(10)] = inst_26648__$1);

(statearr_26710[(11)] = inst_26650__$1);

(statearr_26710[(12)] = inst_26649__$1);

(statearr_26710[(14)] = inst_26658);

return statearr_26710;
})();
var statearr_26711_26743 = state_26696__$1;
(statearr_26711_26743[(2)] = null);

(statearr_26711_26743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (22))){
var state_26696__$1 = state_26696;
var statearr_26712_26744 = state_26696__$1;
(statearr_26712_26744[(2)] = null);

(statearr_26712_26744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (6))){
var inst_26637 = (state_26696[(13)]);
var inst_26646 = f.call(null,inst_26637);
var inst_26647 = cljs.core.seq.call(null,inst_26646);
var inst_26648 = inst_26647;
var inst_26649 = null;
var inst_26650 = (0);
var inst_26651 = (0);
var state_26696__$1 = (function (){var statearr_26713 = state_26696;
(statearr_26713[(9)] = inst_26651);

(statearr_26713[(10)] = inst_26648);

(statearr_26713[(11)] = inst_26650);

(statearr_26713[(12)] = inst_26649);

return statearr_26713;
})();
var statearr_26714_26745 = state_26696__$1;
(statearr_26714_26745[(2)] = null);

(statearr_26714_26745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (17))){
var inst_26662 = (state_26696[(7)]);
var inst_26666 = cljs.core.chunk_first.call(null,inst_26662);
var inst_26667 = cljs.core.chunk_rest.call(null,inst_26662);
var inst_26668 = cljs.core.count.call(null,inst_26666);
var inst_26648 = inst_26667;
var inst_26649 = inst_26666;
var inst_26650 = inst_26668;
var inst_26651 = (0);
var state_26696__$1 = (function (){var statearr_26715 = state_26696;
(statearr_26715[(9)] = inst_26651);

(statearr_26715[(10)] = inst_26648);

(statearr_26715[(11)] = inst_26650);

(statearr_26715[(12)] = inst_26649);

return statearr_26715;
})();
var statearr_26716_26746 = state_26696__$1;
(statearr_26716_26746[(2)] = null);

(statearr_26716_26746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (3))){
var inst_26694 = (state_26696[(2)]);
var state_26696__$1 = state_26696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26696__$1,inst_26694);
} else {
if((state_val_26697 === (12))){
var inst_26682 = (state_26696[(2)]);
var state_26696__$1 = state_26696;
var statearr_26717_26747 = state_26696__$1;
(statearr_26717_26747[(2)] = inst_26682);

(statearr_26717_26747[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (2))){
var state_26696__$1 = state_26696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26696__$1,(4),in$);
} else {
if((state_val_26697 === (23))){
var inst_26690 = (state_26696[(2)]);
var state_26696__$1 = state_26696;
var statearr_26718_26748 = state_26696__$1;
(statearr_26718_26748[(2)] = inst_26690);

(statearr_26718_26748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (19))){
var inst_26677 = (state_26696[(2)]);
var state_26696__$1 = state_26696;
var statearr_26719_26749 = state_26696__$1;
(statearr_26719_26749[(2)] = inst_26677);

(statearr_26719_26749[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (11))){
var inst_26648 = (state_26696[(10)]);
var inst_26662 = (state_26696[(7)]);
var inst_26662__$1 = cljs.core.seq.call(null,inst_26648);
var state_26696__$1 = (function (){var statearr_26720 = state_26696;
(statearr_26720[(7)] = inst_26662__$1);

return statearr_26720;
})();
if(inst_26662__$1){
var statearr_26721_26750 = state_26696__$1;
(statearr_26721_26750[(1)] = (14));

} else {
var statearr_26722_26751 = state_26696__$1;
(statearr_26722_26751[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (9))){
var inst_26684 = (state_26696[(2)]);
var inst_26685 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26696__$1 = (function (){var statearr_26723 = state_26696;
(statearr_26723[(15)] = inst_26684);

return statearr_26723;
})();
if(cljs.core.truth_(inst_26685)){
var statearr_26724_26752 = state_26696__$1;
(statearr_26724_26752[(1)] = (21));

} else {
var statearr_26725_26753 = state_26696__$1;
(statearr_26725_26753[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (5))){
var inst_26640 = cljs.core.async.close_BANG_.call(null,out);
var state_26696__$1 = state_26696;
var statearr_26726_26754 = state_26696__$1;
(statearr_26726_26754[(2)] = inst_26640);

(statearr_26726_26754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (14))){
var inst_26662 = (state_26696[(7)]);
var inst_26664 = cljs.core.chunked_seq_QMARK_.call(null,inst_26662);
var state_26696__$1 = state_26696;
if(inst_26664){
var statearr_26727_26755 = state_26696__$1;
(statearr_26727_26755[(1)] = (17));

} else {
var statearr_26728_26756 = state_26696__$1;
(statearr_26728_26756[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (16))){
var inst_26680 = (state_26696[(2)]);
var state_26696__$1 = state_26696;
var statearr_26729_26757 = state_26696__$1;
(statearr_26729_26757[(2)] = inst_26680);

(statearr_26729_26757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (10))){
var inst_26651 = (state_26696[(9)]);
var inst_26649 = (state_26696[(12)]);
var inst_26656 = cljs.core._nth.call(null,inst_26649,inst_26651);
var state_26696__$1 = state_26696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26696__$1,(13),out,inst_26656);
} else {
if((state_val_26697 === (18))){
var inst_26662 = (state_26696[(7)]);
var inst_26671 = cljs.core.first.call(null,inst_26662);
var state_26696__$1 = state_26696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26696__$1,(20),out,inst_26671);
} else {
if((state_val_26697 === (8))){
var inst_26651 = (state_26696[(9)]);
var inst_26650 = (state_26696[(11)]);
var inst_26653 = (inst_26651 < inst_26650);
var inst_26654 = inst_26653;
var state_26696__$1 = state_26696;
if(cljs.core.truth_(inst_26654)){
var statearr_26730_26758 = state_26696__$1;
(statearr_26730_26758[(1)] = (10));

} else {
var statearr_26731_26759 = state_26696__$1;
(statearr_26731_26759[(1)] = (11));

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
});})(c__25080__auto__))
;
return ((function (switch__24985__auto__,c__25080__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24986__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24986__auto____0 = (function (){
var statearr_26732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26732[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24986__auto__);

(statearr_26732[(1)] = (1));

return statearr_26732;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24986__auto____1 = (function (state_26696){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_26696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e26733){if((e26733 instanceof Object)){
var ex__24989__auto__ = e26733;
var statearr_26734_26760 = state_26696;
(statearr_26734_26760[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26761 = state_26696;
state_26696 = G__26761;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24986__auto__ = function(state_26696){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24986__auto____1.call(this,state_26696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24986__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24986__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto__))
})();
var state__25082__auto__ = (function (){var statearr_26735 = f__25081__auto__.call(null);
(statearr_26735[(6)] = c__25080__auto__);

return statearr_26735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto__))
);

return c__25080__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26763 = arguments.length;
switch (G__26763) {
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
var G__26766 = arguments.length;
switch (G__26766) {
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
var G__26769 = arguments.length;
switch (G__26769) {
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
var c__25080__auto___26816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___26816,out){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___26816,out){
return (function (state_26793){
var state_val_26794 = (state_26793[(1)]);
if((state_val_26794 === (7))){
var inst_26788 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26795_26817 = state_26793__$1;
(statearr_26795_26817[(2)] = inst_26788);

(statearr_26795_26817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (1))){
var inst_26770 = null;
var state_26793__$1 = (function (){var statearr_26796 = state_26793;
(statearr_26796[(7)] = inst_26770);

return statearr_26796;
})();
var statearr_26797_26818 = state_26793__$1;
(statearr_26797_26818[(2)] = null);

(statearr_26797_26818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (4))){
var inst_26773 = (state_26793[(8)]);
var inst_26773__$1 = (state_26793[(2)]);
var inst_26774 = (inst_26773__$1 == null);
var inst_26775 = cljs.core.not.call(null,inst_26774);
var state_26793__$1 = (function (){var statearr_26798 = state_26793;
(statearr_26798[(8)] = inst_26773__$1);

return statearr_26798;
})();
if(inst_26775){
var statearr_26799_26819 = state_26793__$1;
(statearr_26799_26819[(1)] = (5));

} else {
var statearr_26800_26820 = state_26793__$1;
(statearr_26800_26820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (6))){
var state_26793__$1 = state_26793;
var statearr_26801_26821 = state_26793__$1;
(statearr_26801_26821[(2)] = null);

(statearr_26801_26821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (3))){
var inst_26790 = (state_26793[(2)]);
var inst_26791 = cljs.core.async.close_BANG_.call(null,out);
var state_26793__$1 = (function (){var statearr_26802 = state_26793;
(statearr_26802[(9)] = inst_26790);

return statearr_26802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26793__$1,inst_26791);
} else {
if((state_val_26794 === (2))){
var state_26793__$1 = state_26793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26793__$1,(4),ch);
} else {
if((state_val_26794 === (11))){
var inst_26773 = (state_26793[(8)]);
var inst_26782 = (state_26793[(2)]);
var inst_26770 = inst_26773;
var state_26793__$1 = (function (){var statearr_26803 = state_26793;
(statearr_26803[(7)] = inst_26770);

(statearr_26803[(10)] = inst_26782);

return statearr_26803;
})();
var statearr_26804_26822 = state_26793__$1;
(statearr_26804_26822[(2)] = null);

(statearr_26804_26822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (9))){
var inst_26773 = (state_26793[(8)]);
var state_26793__$1 = state_26793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26793__$1,(11),out,inst_26773);
} else {
if((state_val_26794 === (5))){
var inst_26770 = (state_26793[(7)]);
var inst_26773 = (state_26793[(8)]);
var inst_26777 = cljs.core._EQ_.call(null,inst_26773,inst_26770);
var state_26793__$1 = state_26793;
if(inst_26777){
var statearr_26806_26823 = state_26793__$1;
(statearr_26806_26823[(1)] = (8));

} else {
var statearr_26807_26824 = state_26793__$1;
(statearr_26807_26824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (10))){
var inst_26785 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26808_26825 = state_26793__$1;
(statearr_26808_26825[(2)] = inst_26785);

(statearr_26808_26825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (8))){
var inst_26770 = (state_26793[(7)]);
var tmp26805 = inst_26770;
var inst_26770__$1 = tmp26805;
var state_26793__$1 = (function (){var statearr_26809 = state_26793;
(statearr_26809[(7)] = inst_26770__$1);

return statearr_26809;
})();
var statearr_26810_26826 = state_26793__$1;
(statearr_26810_26826[(2)] = null);

(statearr_26810_26826[(1)] = (2));


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
});})(c__25080__auto___26816,out))
;
return ((function (switch__24985__auto__,c__25080__auto___26816,out){
return (function() {
var cljs$core$async$state_machine__24986__auto__ = null;
var cljs$core$async$state_machine__24986__auto____0 = (function (){
var statearr_26811 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26811[(0)] = cljs$core$async$state_machine__24986__auto__);

(statearr_26811[(1)] = (1));

return statearr_26811;
});
var cljs$core$async$state_machine__24986__auto____1 = (function (state_26793){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_26793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e26812){if((e26812 instanceof Object)){
var ex__24989__auto__ = e26812;
var statearr_26813_26827 = state_26793;
(statearr_26813_26827[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26828 = state_26793;
state_26793 = G__26828;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$state_machine__24986__auto__ = function(state_26793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24986__auto____1.call(this,state_26793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24986__auto____0;
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24986__auto____1;
return cljs$core$async$state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___26816,out))
})();
var state__25082__auto__ = (function (){var statearr_26814 = f__25081__auto__.call(null);
(statearr_26814[(6)] = c__25080__auto___26816);

return statearr_26814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___26816,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26830 = arguments.length;
switch (G__26830) {
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
var c__25080__auto___26896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___26896,out){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___26896,out){
return (function (state_26868){
var state_val_26869 = (state_26868[(1)]);
if((state_val_26869 === (7))){
var inst_26864 = (state_26868[(2)]);
var state_26868__$1 = state_26868;
var statearr_26870_26897 = state_26868__$1;
(statearr_26870_26897[(2)] = inst_26864);

(statearr_26870_26897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (1))){
var inst_26831 = (new Array(n));
var inst_26832 = inst_26831;
var inst_26833 = (0);
var state_26868__$1 = (function (){var statearr_26871 = state_26868;
(statearr_26871[(7)] = inst_26832);

(statearr_26871[(8)] = inst_26833);

return statearr_26871;
})();
var statearr_26872_26898 = state_26868__$1;
(statearr_26872_26898[(2)] = null);

(statearr_26872_26898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (4))){
var inst_26836 = (state_26868[(9)]);
var inst_26836__$1 = (state_26868[(2)]);
var inst_26837 = (inst_26836__$1 == null);
var inst_26838 = cljs.core.not.call(null,inst_26837);
var state_26868__$1 = (function (){var statearr_26873 = state_26868;
(statearr_26873[(9)] = inst_26836__$1);

return statearr_26873;
})();
if(inst_26838){
var statearr_26874_26899 = state_26868__$1;
(statearr_26874_26899[(1)] = (5));

} else {
var statearr_26875_26900 = state_26868__$1;
(statearr_26875_26900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (15))){
var inst_26858 = (state_26868[(2)]);
var state_26868__$1 = state_26868;
var statearr_26876_26901 = state_26868__$1;
(statearr_26876_26901[(2)] = inst_26858);

(statearr_26876_26901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (13))){
var state_26868__$1 = state_26868;
var statearr_26877_26902 = state_26868__$1;
(statearr_26877_26902[(2)] = null);

(statearr_26877_26902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (6))){
var inst_26833 = (state_26868[(8)]);
var inst_26854 = (inst_26833 > (0));
var state_26868__$1 = state_26868;
if(cljs.core.truth_(inst_26854)){
var statearr_26878_26903 = state_26868__$1;
(statearr_26878_26903[(1)] = (12));

} else {
var statearr_26879_26904 = state_26868__$1;
(statearr_26879_26904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (3))){
var inst_26866 = (state_26868[(2)]);
var state_26868__$1 = state_26868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26868__$1,inst_26866);
} else {
if((state_val_26869 === (12))){
var inst_26832 = (state_26868[(7)]);
var inst_26856 = cljs.core.vec.call(null,inst_26832);
var state_26868__$1 = state_26868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26868__$1,(15),out,inst_26856);
} else {
if((state_val_26869 === (2))){
var state_26868__$1 = state_26868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26868__$1,(4),ch);
} else {
if((state_val_26869 === (11))){
var inst_26848 = (state_26868[(2)]);
var inst_26849 = (new Array(n));
var inst_26832 = inst_26849;
var inst_26833 = (0);
var state_26868__$1 = (function (){var statearr_26880 = state_26868;
(statearr_26880[(7)] = inst_26832);

(statearr_26880[(10)] = inst_26848);

(statearr_26880[(8)] = inst_26833);

return statearr_26880;
})();
var statearr_26881_26905 = state_26868__$1;
(statearr_26881_26905[(2)] = null);

(statearr_26881_26905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (9))){
var inst_26832 = (state_26868[(7)]);
var inst_26846 = cljs.core.vec.call(null,inst_26832);
var state_26868__$1 = state_26868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26868__$1,(11),out,inst_26846);
} else {
if((state_val_26869 === (5))){
var inst_26832 = (state_26868[(7)]);
var inst_26836 = (state_26868[(9)]);
var inst_26841 = (state_26868[(11)]);
var inst_26833 = (state_26868[(8)]);
var inst_26840 = (inst_26832[inst_26833] = inst_26836);
var inst_26841__$1 = (inst_26833 + (1));
var inst_26842 = (inst_26841__$1 < n);
var state_26868__$1 = (function (){var statearr_26882 = state_26868;
(statearr_26882[(11)] = inst_26841__$1);

(statearr_26882[(12)] = inst_26840);

return statearr_26882;
})();
if(cljs.core.truth_(inst_26842)){
var statearr_26883_26906 = state_26868__$1;
(statearr_26883_26906[(1)] = (8));

} else {
var statearr_26884_26907 = state_26868__$1;
(statearr_26884_26907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (14))){
var inst_26861 = (state_26868[(2)]);
var inst_26862 = cljs.core.async.close_BANG_.call(null,out);
var state_26868__$1 = (function (){var statearr_26886 = state_26868;
(statearr_26886[(13)] = inst_26861);

return statearr_26886;
})();
var statearr_26887_26908 = state_26868__$1;
(statearr_26887_26908[(2)] = inst_26862);

(statearr_26887_26908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (10))){
var inst_26852 = (state_26868[(2)]);
var state_26868__$1 = state_26868;
var statearr_26888_26909 = state_26868__$1;
(statearr_26888_26909[(2)] = inst_26852);

(statearr_26888_26909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (8))){
var inst_26832 = (state_26868[(7)]);
var inst_26841 = (state_26868[(11)]);
var tmp26885 = inst_26832;
var inst_26832__$1 = tmp26885;
var inst_26833 = inst_26841;
var state_26868__$1 = (function (){var statearr_26889 = state_26868;
(statearr_26889[(7)] = inst_26832__$1);

(statearr_26889[(8)] = inst_26833);

return statearr_26889;
})();
var statearr_26890_26910 = state_26868__$1;
(statearr_26890_26910[(2)] = null);

(statearr_26890_26910[(1)] = (2));


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
});})(c__25080__auto___26896,out))
;
return ((function (switch__24985__auto__,c__25080__auto___26896,out){
return (function() {
var cljs$core$async$state_machine__24986__auto__ = null;
var cljs$core$async$state_machine__24986__auto____0 = (function (){
var statearr_26891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26891[(0)] = cljs$core$async$state_machine__24986__auto__);

(statearr_26891[(1)] = (1));

return statearr_26891;
});
var cljs$core$async$state_machine__24986__auto____1 = (function (state_26868){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_26868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e26892){if((e26892 instanceof Object)){
var ex__24989__auto__ = e26892;
var statearr_26893_26911 = state_26868;
(statearr_26893_26911[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26912 = state_26868;
state_26868 = G__26912;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$state_machine__24986__auto__ = function(state_26868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24986__auto____1.call(this,state_26868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24986__auto____0;
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24986__auto____1;
return cljs$core$async$state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___26896,out))
})();
var state__25082__auto__ = (function (){var statearr_26894 = f__25081__auto__.call(null);
(statearr_26894[(6)] = c__25080__auto___26896);

return statearr_26894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___26896,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26914 = arguments.length;
switch (G__26914) {
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
var c__25080__auto___26984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25080__auto___26984,out){
return (function (){
var f__25081__auto__ = (function (){var switch__24985__auto__ = ((function (c__25080__auto___26984,out){
return (function (state_26956){
var state_val_26957 = (state_26956[(1)]);
if((state_val_26957 === (7))){
var inst_26952 = (state_26956[(2)]);
var state_26956__$1 = state_26956;
var statearr_26958_26985 = state_26956__$1;
(statearr_26958_26985[(2)] = inst_26952);

(statearr_26958_26985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26957 === (1))){
var inst_26915 = [];
var inst_26916 = inst_26915;
var inst_26917 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26956__$1 = (function (){var statearr_26959 = state_26956;
(statearr_26959[(7)] = inst_26916);

(statearr_26959[(8)] = inst_26917);

return statearr_26959;
})();
var statearr_26960_26986 = state_26956__$1;
(statearr_26960_26986[(2)] = null);

(statearr_26960_26986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26957 === (4))){
var inst_26920 = (state_26956[(9)]);
var inst_26920__$1 = (state_26956[(2)]);
var inst_26921 = (inst_26920__$1 == null);
var inst_26922 = cljs.core.not.call(null,inst_26921);
var state_26956__$1 = (function (){var statearr_26961 = state_26956;
(statearr_26961[(9)] = inst_26920__$1);

return statearr_26961;
})();
if(inst_26922){
var statearr_26962_26987 = state_26956__$1;
(statearr_26962_26987[(1)] = (5));

} else {
var statearr_26963_26988 = state_26956__$1;
(statearr_26963_26988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26957 === (15))){
var inst_26946 = (state_26956[(2)]);
var state_26956__$1 = state_26956;
var statearr_26964_26989 = state_26956__$1;
(statearr_26964_26989[(2)] = inst_26946);

(statearr_26964_26989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26957 === (13))){
var state_26956__$1 = state_26956;
var statearr_26965_26990 = state_26956__$1;
(statearr_26965_26990[(2)] = null);

(statearr_26965_26990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26957 === (6))){
var inst_26916 = (state_26956[(7)]);
var inst_26941 = inst_26916.length;
var inst_26942 = (inst_26941 > (0));
var state_26956__$1 = state_26956;
if(cljs.core.truth_(inst_26942)){
var statearr_26966_26991 = state_26956__$1;
(statearr_26966_26991[(1)] = (12));

} else {
var statearr_26967_26992 = state_26956__$1;
(statearr_26967_26992[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26957 === (3))){
var inst_26954 = (state_26956[(2)]);
var state_26956__$1 = state_26956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26956__$1,inst_26954);
} else {
if((state_val_26957 === (12))){
var inst_26916 = (state_26956[(7)]);
var inst_26944 = cljs.core.vec.call(null,inst_26916);
var state_26956__$1 = state_26956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26956__$1,(15),out,inst_26944);
} else {
if((state_val_26957 === (2))){
var state_26956__$1 = state_26956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26956__$1,(4),ch);
} else {
if((state_val_26957 === (11))){
var inst_26920 = (state_26956[(9)]);
var inst_26924 = (state_26956[(10)]);
var inst_26934 = (state_26956[(2)]);
var inst_26935 = [];
var inst_26936 = inst_26935.push(inst_26920);
var inst_26916 = inst_26935;
var inst_26917 = inst_26924;
var state_26956__$1 = (function (){var statearr_26968 = state_26956;
(statearr_26968[(7)] = inst_26916);

(statearr_26968[(11)] = inst_26934);

(statearr_26968[(8)] = inst_26917);

(statearr_26968[(12)] = inst_26936);

return statearr_26968;
})();
var statearr_26969_26993 = state_26956__$1;
(statearr_26969_26993[(2)] = null);

(statearr_26969_26993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26957 === (9))){
var inst_26916 = (state_26956[(7)]);
var inst_26932 = cljs.core.vec.call(null,inst_26916);
var state_26956__$1 = state_26956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26956__$1,(11),out,inst_26932);
} else {
if((state_val_26957 === (5))){
var inst_26920 = (state_26956[(9)]);
var inst_26917 = (state_26956[(8)]);
var inst_26924 = (state_26956[(10)]);
var inst_26924__$1 = f.call(null,inst_26920);
var inst_26925 = cljs.core._EQ_.call(null,inst_26924__$1,inst_26917);
var inst_26926 = cljs.core.keyword_identical_QMARK_.call(null,inst_26917,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26927 = ((inst_26925) || (inst_26926));
var state_26956__$1 = (function (){var statearr_26970 = state_26956;
(statearr_26970[(10)] = inst_26924__$1);

return statearr_26970;
})();
if(cljs.core.truth_(inst_26927)){
var statearr_26971_26994 = state_26956__$1;
(statearr_26971_26994[(1)] = (8));

} else {
var statearr_26972_26995 = state_26956__$1;
(statearr_26972_26995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26957 === (14))){
var inst_26949 = (state_26956[(2)]);
var inst_26950 = cljs.core.async.close_BANG_.call(null,out);
var state_26956__$1 = (function (){var statearr_26974 = state_26956;
(statearr_26974[(13)] = inst_26949);

return statearr_26974;
})();
var statearr_26975_26996 = state_26956__$1;
(statearr_26975_26996[(2)] = inst_26950);

(statearr_26975_26996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26957 === (10))){
var inst_26939 = (state_26956[(2)]);
var state_26956__$1 = state_26956;
var statearr_26976_26997 = state_26956__$1;
(statearr_26976_26997[(2)] = inst_26939);

(statearr_26976_26997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26957 === (8))){
var inst_26916 = (state_26956[(7)]);
var inst_26920 = (state_26956[(9)]);
var inst_26924 = (state_26956[(10)]);
var inst_26929 = inst_26916.push(inst_26920);
var tmp26973 = inst_26916;
var inst_26916__$1 = tmp26973;
var inst_26917 = inst_26924;
var state_26956__$1 = (function (){var statearr_26977 = state_26956;
(statearr_26977[(7)] = inst_26916__$1);

(statearr_26977[(8)] = inst_26917);

(statearr_26977[(14)] = inst_26929);

return statearr_26977;
})();
var statearr_26978_26998 = state_26956__$1;
(statearr_26978_26998[(2)] = null);

(statearr_26978_26998[(1)] = (2));


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
});})(c__25080__auto___26984,out))
;
return ((function (switch__24985__auto__,c__25080__auto___26984,out){
return (function() {
var cljs$core$async$state_machine__24986__auto__ = null;
var cljs$core$async$state_machine__24986__auto____0 = (function (){
var statearr_26979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26979[(0)] = cljs$core$async$state_machine__24986__auto__);

(statearr_26979[(1)] = (1));

return statearr_26979;
});
var cljs$core$async$state_machine__24986__auto____1 = (function (state_26956){
while(true){
var ret_value__24987__auto__ = (function (){try{while(true){
var result__24988__auto__ = switch__24985__auto__.call(null,state_26956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24988__auto__;
}
break;
}
}catch (e26980){if((e26980 instanceof Object)){
var ex__24989__auto__ = e26980;
var statearr_26981_26999 = state_26956;
(statearr_26981_26999[(5)] = ex__24989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27000 = state_26956;
state_26956 = G__27000;
continue;
} else {
return ret_value__24987__auto__;
}
break;
}
});
cljs$core$async$state_machine__24986__auto__ = function(state_26956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24986__auto____1.call(this,state_26956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24986__auto____0;
cljs$core$async$state_machine__24986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24986__auto____1;
return cljs$core$async$state_machine__24986__auto__;
})()
;})(switch__24985__auto__,c__25080__auto___26984,out))
})();
var state__25082__auto__ = (function (){var statearr_26982 = f__25081__auto__.call(null);
(statearr_26982[(6)] = c__25080__auto___26984);

return statearr_26982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25082__auto__);
});})(c__25080__auto___26984,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1544468022636
