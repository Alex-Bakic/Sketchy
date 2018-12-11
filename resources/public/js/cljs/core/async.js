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
var G__25136 = arguments.length;
switch (G__25136) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25137 = (function (f,blockable,meta25138){
this.f = f;
this.blockable = blockable;
this.meta25138 = meta25138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25139,meta25138__$1){
var self__ = this;
var _25139__$1 = this;
return (new cljs.core.async.t_cljs$core$async25137(self__.f,self__.blockable,meta25138__$1));
});

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25139){
var self__ = this;
var _25139__$1 = this;
return self__.meta25138;
});

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25138","meta25138",-1940239086,null)], null);
});

cljs.core.async.t_cljs$core$async25137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25137";

cljs.core.async.t_cljs$core$async25137.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25137");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25137.
 */
cljs.core.async.__GT_t_cljs$core$async25137 = (function cljs$core$async$__GT_t_cljs$core$async25137(f__$1,blockable__$1,meta25138){
return (new cljs.core.async.t_cljs$core$async25137(f__$1,blockable__$1,meta25138));
});

}

return (new cljs.core.async.t_cljs$core$async25137(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25143 = arguments.length;
switch (G__25143) {
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
var G__25146 = arguments.length;
switch (G__25146) {
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
var G__25149 = arguments.length;
switch (G__25149) {
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
var val_25151 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25151);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25151,ret){
return (function (){
return fn1.call(null,val_25151);
});})(val_25151,ret))
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
var G__25153 = arguments.length;
switch (G__25153) {
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
var n__4518__auto___25155 = n;
var x_25156 = (0);
while(true){
if((x_25156 < n__4518__auto___25155)){
(a[x_25156] = (0));

var G__25157 = (x_25156 + (1));
x_25156 = G__25157;
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

var G__25158 = (i + (1));
i = G__25158;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25159 = (function (flag,meta25160){
this.flag = flag;
this.meta25160 = meta25160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25161,meta25160__$1){
var self__ = this;
var _25161__$1 = this;
return (new cljs.core.async.t_cljs$core$async25159(self__.flag,meta25160__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25161){
var self__ = this;
var _25161__$1 = this;
return self__.meta25160;
});})(flag))
;

cljs.core.async.t_cljs$core$async25159.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25159.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25159.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25160","meta25160",975621149,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25159";

cljs.core.async.t_cljs$core$async25159.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25159");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25159.
 */
cljs.core.async.__GT_t_cljs$core$async25159 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25159(flag__$1,meta25160){
return (new cljs.core.async.t_cljs$core$async25159(flag__$1,meta25160));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25159(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25162 = (function (flag,cb,meta25163){
this.flag = flag;
this.cb = cb;
this.meta25163 = meta25163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25164,meta25163__$1){
var self__ = this;
var _25164__$1 = this;
return (new cljs.core.async.t_cljs$core$async25162(self__.flag,self__.cb,meta25163__$1));
});

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25164){
var self__ = this;
var _25164__$1 = this;
return self__.meta25163;
});

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25163","meta25163",-1264184818,null)], null);
});

cljs.core.async.t_cljs$core$async25162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25162";

cljs.core.async.t_cljs$core$async25162.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25162");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25162.
 */
cljs.core.async.__GT_t_cljs$core$async25162 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25162(flag__$1,cb__$1,meta25163){
return (new cljs.core.async.t_cljs$core$async25162(flag__$1,cb__$1,meta25163));
});

}

return (new cljs.core.async.t_cljs$core$async25162(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25165_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25165_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25166_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25166_SHARP_,port], null));
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
var G__25167 = (i + (1));
i = G__25167;
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
var len__4641__auto___25173 = arguments.length;
var i__4642__auto___25174 = (0);
while(true){
if((i__4642__auto___25174 < len__4641__auto___25173)){
args__4647__auto__.push((arguments[i__4642__auto___25174]));

var G__25175 = (i__4642__auto___25174 + (1));
i__4642__auto___25174 = G__25175;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25170){
var map__25171 = p__25170;
var map__25171__$1 = (((((!((map__25171 == null))))?(((((map__25171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25171):map__25171);
var opts = map__25171__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25168){
var G__25169 = cljs.core.first.call(null,seq25168);
var seq25168__$1 = cljs.core.next.call(null,seq25168);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25169,seq25168__$1);
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
var G__25177 = arguments.length;
switch (G__25177) {
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
var c__25076__auto___25223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto___25223){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto___25223){
return (function (state_25201){
var state_val_25202 = (state_25201[(1)]);
if((state_val_25202 === (7))){
var inst_25197 = (state_25201[(2)]);
var state_25201__$1 = state_25201;
var statearr_25203_25224 = state_25201__$1;
(statearr_25203_25224[(2)] = inst_25197);

(statearr_25203_25224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (1))){
var state_25201__$1 = state_25201;
var statearr_25204_25225 = state_25201__$1;
(statearr_25204_25225[(2)] = null);

(statearr_25204_25225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (4))){
var inst_25180 = (state_25201[(7)]);
var inst_25180__$1 = (state_25201[(2)]);
var inst_25181 = (inst_25180__$1 == null);
var state_25201__$1 = (function (){var statearr_25205 = state_25201;
(statearr_25205[(7)] = inst_25180__$1);

return statearr_25205;
})();
if(cljs.core.truth_(inst_25181)){
var statearr_25206_25226 = state_25201__$1;
(statearr_25206_25226[(1)] = (5));

} else {
var statearr_25207_25227 = state_25201__$1;
(statearr_25207_25227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (13))){
var state_25201__$1 = state_25201;
var statearr_25208_25228 = state_25201__$1;
(statearr_25208_25228[(2)] = null);

(statearr_25208_25228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (6))){
var inst_25180 = (state_25201[(7)]);
var state_25201__$1 = state_25201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25201__$1,(11),to,inst_25180);
} else {
if((state_val_25202 === (3))){
var inst_25199 = (state_25201[(2)]);
var state_25201__$1 = state_25201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25201__$1,inst_25199);
} else {
if((state_val_25202 === (12))){
var state_25201__$1 = state_25201;
var statearr_25209_25229 = state_25201__$1;
(statearr_25209_25229[(2)] = null);

(statearr_25209_25229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (2))){
var state_25201__$1 = state_25201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25201__$1,(4),from);
} else {
if((state_val_25202 === (11))){
var inst_25190 = (state_25201[(2)]);
var state_25201__$1 = state_25201;
if(cljs.core.truth_(inst_25190)){
var statearr_25210_25230 = state_25201__$1;
(statearr_25210_25230[(1)] = (12));

} else {
var statearr_25211_25231 = state_25201__$1;
(statearr_25211_25231[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (9))){
var state_25201__$1 = state_25201;
var statearr_25212_25232 = state_25201__$1;
(statearr_25212_25232[(2)] = null);

(statearr_25212_25232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (5))){
var state_25201__$1 = state_25201;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25213_25233 = state_25201__$1;
(statearr_25213_25233[(1)] = (8));

} else {
var statearr_25214_25234 = state_25201__$1;
(statearr_25214_25234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (14))){
var inst_25195 = (state_25201[(2)]);
var state_25201__$1 = state_25201;
var statearr_25215_25235 = state_25201__$1;
(statearr_25215_25235[(2)] = inst_25195);

(statearr_25215_25235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (10))){
var inst_25187 = (state_25201[(2)]);
var state_25201__$1 = state_25201;
var statearr_25216_25236 = state_25201__$1;
(statearr_25216_25236[(2)] = inst_25187);

(statearr_25216_25236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (8))){
var inst_25184 = cljs.core.async.close_BANG_.call(null,to);
var state_25201__$1 = state_25201;
var statearr_25217_25237 = state_25201__$1;
(statearr_25217_25237[(2)] = inst_25184);

(statearr_25217_25237[(1)] = (10));


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
});})(c__25076__auto___25223))
;
return ((function (switch__24981__auto__,c__25076__auto___25223){
return (function() {
var cljs$core$async$state_machine__24982__auto__ = null;
var cljs$core$async$state_machine__24982__auto____0 = (function (){
var statearr_25218 = [null,null,null,null,null,null,null,null];
(statearr_25218[(0)] = cljs$core$async$state_machine__24982__auto__);

(statearr_25218[(1)] = (1));

return statearr_25218;
});
var cljs$core$async$state_machine__24982__auto____1 = (function (state_25201){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_25201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e25219){if((e25219 instanceof Object)){
var ex__24985__auto__ = e25219;
var statearr_25220_25238 = state_25201;
(statearr_25220_25238[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25239 = state_25201;
state_25201 = G__25239;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$state_machine__24982__auto__ = function(state_25201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24982__auto____1.call(this,state_25201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24982__auto____0;
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24982__auto____1;
return cljs$core$async$state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto___25223))
})();
var state__25078__auto__ = (function (){var statearr_25221 = f__25077__auto__.call(null);
(statearr_25221[(6)] = c__25076__auto___25223);

return statearr_25221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto___25223))
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
return (function (p__25240){
var vec__25241 = p__25240;
var v = cljs.core.nth.call(null,vec__25241,(0),null);
var p = cljs.core.nth.call(null,vec__25241,(1),null);
var job = vec__25241;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25076__auto___25412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto___25412,res,vec__25241,v,p,job,jobs,results){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto___25412,res,vec__25241,v,p,job,jobs,results){
return (function (state_25248){
var state_val_25249 = (state_25248[(1)]);
if((state_val_25249 === (1))){
var state_25248__$1 = state_25248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25248__$1,(2),res,v);
} else {
if((state_val_25249 === (2))){
var inst_25245 = (state_25248[(2)]);
var inst_25246 = cljs.core.async.close_BANG_.call(null,res);
var state_25248__$1 = (function (){var statearr_25250 = state_25248;
(statearr_25250[(7)] = inst_25245);

return statearr_25250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25248__$1,inst_25246);
} else {
return null;
}
}
});})(c__25076__auto___25412,res,vec__25241,v,p,job,jobs,results))
;
return ((function (switch__24981__auto__,c__25076__auto___25412,res,vec__25241,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____0 = (function (){
var statearr_25251 = [null,null,null,null,null,null,null,null];
(statearr_25251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__);

(statearr_25251[(1)] = (1));

return statearr_25251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____1 = (function (state_25248){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_25248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e25252){if((e25252 instanceof Object)){
var ex__24985__auto__ = e25252;
var statearr_25253_25413 = state_25248;
(statearr_25253_25413[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25414 = state_25248;
state_25248 = G__25414;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__ = function(state_25248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____1.call(this,state_25248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto___25412,res,vec__25241,v,p,job,jobs,results))
})();
var state__25078__auto__ = (function (){var statearr_25254 = f__25077__auto__.call(null);
(statearr_25254[(6)] = c__25076__auto___25412);

return statearr_25254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto___25412,res,vec__25241,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25255){
var vec__25256 = p__25255;
var v = cljs.core.nth.call(null,vec__25256,(0),null);
var p = cljs.core.nth.call(null,vec__25256,(1),null);
var job = vec__25256;
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
var n__4518__auto___25415 = n;
var __25416 = (0);
while(true){
if((__25416 < n__4518__auto___25415)){
var G__25259_25417 = type;
var G__25259_25418__$1 = (((G__25259_25417 instanceof cljs.core.Keyword))?G__25259_25417.fqn:null);
switch (G__25259_25418__$1) {
case "compute":
var c__25076__auto___25420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25416,c__25076__auto___25420,G__25259_25417,G__25259_25418__$1,n__4518__auto___25415,jobs,results,process,async){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (__25416,c__25076__auto___25420,G__25259_25417,G__25259_25418__$1,n__4518__auto___25415,jobs,results,process,async){
return (function (state_25272){
var state_val_25273 = (state_25272[(1)]);
if((state_val_25273 === (1))){
var state_25272__$1 = state_25272;
var statearr_25274_25421 = state_25272__$1;
(statearr_25274_25421[(2)] = null);

(statearr_25274_25421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (2))){
var state_25272__$1 = state_25272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25272__$1,(4),jobs);
} else {
if((state_val_25273 === (3))){
var inst_25270 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25272__$1,inst_25270);
} else {
if((state_val_25273 === (4))){
var inst_25262 = (state_25272[(2)]);
var inst_25263 = process.call(null,inst_25262);
var state_25272__$1 = state_25272;
if(cljs.core.truth_(inst_25263)){
var statearr_25275_25422 = state_25272__$1;
(statearr_25275_25422[(1)] = (5));

} else {
var statearr_25276_25423 = state_25272__$1;
(statearr_25276_25423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (5))){
var state_25272__$1 = state_25272;
var statearr_25277_25424 = state_25272__$1;
(statearr_25277_25424[(2)] = null);

(statearr_25277_25424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (6))){
var state_25272__$1 = state_25272;
var statearr_25278_25425 = state_25272__$1;
(statearr_25278_25425[(2)] = null);

(statearr_25278_25425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (7))){
var inst_25268 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
var statearr_25279_25426 = state_25272__$1;
(statearr_25279_25426[(2)] = inst_25268);

(statearr_25279_25426[(1)] = (3));


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
});})(__25416,c__25076__auto___25420,G__25259_25417,G__25259_25418__$1,n__4518__auto___25415,jobs,results,process,async))
;
return ((function (__25416,switch__24981__auto__,c__25076__auto___25420,G__25259_25417,G__25259_25418__$1,n__4518__auto___25415,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____0 = (function (){
var statearr_25280 = [null,null,null,null,null,null,null];
(statearr_25280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__);

(statearr_25280[(1)] = (1));

return statearr_25280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____1 = (function (state_25272){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_25272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e25281){if((e25281 instanceof Object)){
var ex__24985__auto__ = e25281;
var statearr_25282_25427 = state_25272;
(statearr_25282_25427[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25428 = state_25272;
state_25272 = G__25428;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__ = function(state_25272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____1.call(this,state_25272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__;
})()
;})(__25416,switch__24981__auto__,c__25076__auto___25420,G__25259_25417,G__25259_25418__$1,n__4518__auto___25415,jobs,results,process,async))
})();
var state__25078__auto__ = (function (){var statearr_25283 = f__25077__auto__.call(null);
(statearr_25283[(6)] = c__25076__auto___25420);

return statearr_25283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(__25416,c__25076__auto___25420,G__25259_25417,G__25259_25418__$1,n__4518__auto___25415,jobs,results,process,async))
);


break;
case "async":
var c__25076__auto___25429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25416,c__25076__auto___25429,G__25259_25417,G__25259_25418__$1,n__4518__auto___25415,jobs,results,process,async){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (__25416,c__25076__auto___25429,G__25259_25417,G__25259_25418__$1,n__4518__auto___25415,jobs,results,process,async){
return (function (state_25296){
var state_val_25297 = (state_25296[(1)]);
if((state_val_25297 === (1))){
var state_25296__$1 = state_25296;
var statearr_25298_25430 = state_25296__$1;
(statearr_25298_25430[(2)] = null);

(statearr_25298_25430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (2))){
var state_25296__$1 = state_25296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25296__$1,(4),jobs);
} else {
if((state_val_25297 === (3))){
var inst_25294 = (state_25296[(2)]);
var state_25296__$1 = state_25296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25296__$1,inst_25294);
} else {
if((state_val_25297 === (4))){
var inst_25286 = (state_25296[(2)]);
var inst_25287 = async.call(null,inst_25286);
var state_25296__$1 = state_25296;
if(cljs.core.truth_(inst_25287)){
var statearr_25299_25431 = state_25296__$1;
(statearr_25299_25431[(1)] = (5));

} else {
var statearr_25300_25432 = state_25296__$1;
(statearr_25300_25432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (5))){
var state_25296__$1 = state_25296;
var statearr_25301_25433 = state_25296__$1;
(statearr_25301_25433[(2)] = null);

(statearr_25301_25433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (6))){
var state_25296__$1 = state_25296;
var statearr_25302_25434 = state_25296__$1;
(statearr_25302_25434[(2)] = null);

(statearr_25302_25434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (7))){
var inst_25292 = (state_25296[(2)]);
var state_25296__$1 = state_25296;
var statearr_25303_25435 = state_25296__$1;
(statearr_25303_25435[(2)] = inst_25292);

(statearr_25303_25435[(1)] = (3));


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
});})(__25416,c__25076__auto___25429,G__25259_25417,G__25259_25418__$1,n__4518__auto___25415,jobs,results,process,async))
;
return ((function (__25416,switch__24981__auto__,c__25076__auto___25429,G__25259_25417,G__25259_25418__$1,n__4518__auto___25415,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____0 = (function (){
var statearr_25304 = [null,null,null,null,null,null,null];
(statearr_25304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__);

(statearr_25304[(1)] = (1));

return statearr_25304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____1 = (function (state_25296){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_25296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e25305){if((e25305 instanceof Object)){
var ex__24985__auto__ = e25305;
var statearr_25306_25436 = state_25296;
(statearr_25306_25436[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25437 = state_25296;
state_25296 = G__25437;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__ = function(state_25296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____1.call(this,state_25296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__;
})()
;})(__25416,switch__24981__auto__,c__25076__auto___25429,G__25259_25417,G__25259_25418__$1,n__4518__auto___25415,jobs,results,process,async))
})();
var state__25078__auto__ = (function (){var statearr_25307 = f__25077__auto__.call(null);
(statearr_25307[(6)] = c__25076__auto___25429);

return statearr_25307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(__25416,c__25076__auto___25429,G__25259_25417,G__25259_25418__$1,n__4518__auto___25415,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25259_25418__$1)].join('')));

}

var G__25438 = (__25416 + (1));
__25416 = G__25438;
continue;
} else {
}
break;
}

var c__25076__auto___25439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto___25439,jobs,results,process,async){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto___25439,jobs,results,process,async){
return (function (state_25329){
var state_val_25330 = (state_25329[(1)]);
if((state_val_25330 === (1))){
var state_25329__$1 = state_25329;
var statearr_25331_25440 = state_25329__$1;
(statearr_25331_25440[(2)] = null);

(statearr_25331_25440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (2))){
var state_25329__$1 = state_25329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25329__$1,(4),from);
} else {
if((state_val_25330 === (3))){
var inst_25327 = (state_25329[(2)]);
var state_25329__$1 = state_25329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25329__$1,inst_25327);
} else {
if((state_val_25330 === (4))){
var inst_25310 = (state_25329[(7)]);
var inst_25310__$1 = (state_25329[(2)]);
var inst_25311 = (inst_25310__$1 == null);
var state_25329__$1 = (function (){var statearr_25332 = state_25329;
(statearr_25332[(7)] = inst_25310__$1);

return statearr_25332;
})();
if(cljs.core.truth_(inst_25311)){
var statearr_25333_25441 = state_25329__$1;
(statearr_25333_25441[(1)] = (5));

} else {
var statearr_25334_25442 = state_25329__$1;
(statearr_25334_25442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (5))){
var inst_25313 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25329__$1 = state_25329;
var statearr_25335_25443 = state_25329__$1;
(statearr_25335_25443[(2)] = inst_25313);

(statearr_25335_25443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (6))){
var inst_25310 = (state_25329[(7)]);
var inst_25315 = (state_25329[(8)]);
var inst_25315__$1 = cljs.core.async.chan.call(null,(1));
var inst_25316 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25317 = [inst_25310,inst_25315__$1];
var inst_25318 = (new cljs.core.PersistentVector(null,2,(5),inst_25316,inst_25317,null));
var state_25329__$1 = (function (){var statearr_25336 = state_25329;
(statearr_25336[(8)] = inst_25315__$1);

return statearr_25336;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25329__$1,(8),jobs,inst_25318);
} else {
if((state_val_25330 === (7))){
var inst_25325 = (state_25329[(2)]);
var state_25329__$1 = state_25329;
var statearr_25337_25444 = state_25329__$1;
(statearr_25337_25444[(2)] = inst_25325);

(statearr_25337_25444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (8))){
var inst_25315 = (state_25329[(8)]);
var inst_25320 = (state_25329[(2)]);
var state_25329__$1 = (function (){var statearr_25338 = state_25329;
(statearr_25338[(9)] = inst_25320);

return statearr_25338;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25329__$1,(9),results,inst_25315);
} else {
if((state_val_25330 === (9))){
var inst_25322 = (state_25329[(2)]);
var state_25329__$1 = (function (){var statearr_25339 = state_25329;
(statearr_25339[(10)] = inst_25322);

return statearr_25339;
})();
var statearr_25340_25445 = state_25329__$1;
(statearr_25340_25445[(2)] = null);

(statearr_25340_25445[(1)] = (2));


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
});})(c__25076__auto___25439,jobs,results,process,async))
;
return ((function (switch__24981__auto__,c__25076__auto___25439,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____0 = (function (){
var statearr_25341 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25341[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__);

(statearr_25341[(1)] = (1));

return statearr_25341;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____1 = (function (state_25329){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_25329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e25342){if((e25342 instanceof Object)){
var ex__24985__auto__ = e25342;
var statearr_25343_25446 = state_25329;
(statearr_25343_25446[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25447 = state_25329;
state_25329 = G__25447;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__ = function(state_25329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____1.call(this,state_25329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto___25439,jobs,results,process,async))
})();
var state__25078__auto__ = (function (){var statearr_25344 = f__25077__auto__.call(null);
(statearr_25344[(6)] = c__25076__auto___25439);

return statearr_25344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto___25439,jobs,results,process,async))
);


var c__25076__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto__,jobs,results,process,async){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto__,jobs,results,process,async){
return (function (state_25382){
var state_val_25383 = (state_25382[(1)]);
if((state_val_25383 === (7))){
var inst_25378 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25384_25448 = state_25382__$1;
(statearr_25384_25448[(2)] = inst_25378);

(statearr_25384_25448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (20))){
var state_25382__$1 = state_25382;
var statearr_25385_25449 = state_25382__$1;
(statearr_25385_25449[(2)] = null);

(statearr_25385_25449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (1))){
var state_25382__$1 = state_25382;
var statearr_25386_25450 = state_25382__$1;
(statearr_25386_25450[(2)] = null);

(statearr_25386_25450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (4))){
var inst_25347 = (state_25382[(7)]);
var inst_25347__$1 = (state_25382[(2)]);
var inst_25348 = (inst_25347__$1 == null);
var state_25382__$1 = (function (){var statearr_25387 = state_25382;
(statearr_25387[(7)] = inst_25347__$1);

return statearr_25387;
})();
if(cljs.core.truth_(inst_25348)){
var statearr_25388_25451 = state_25382__$1;
(statearr_25388_25451[(1)] = (5));

} else {
var statearr_25389_25452 = state_25382__$1;
(statearr_25389_25452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (15))){
var inst_25360 = (state_25382[(8)]);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25382__$1,(18),to,inst_25360);
} else {
if((state_val_25383 === (21))){
var inst_25373 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25390_25453 = state_25382__$1;
(statearr_25390_25453[(2)] = inst_25373);

(statearr_25390_25453[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (13))){
var inst_25375 = (state_25382[(2)]);
var state_25382__$1 = (function (){var statearr_25391 = state_25382;
(statearr_25391[(9)] = inst_25375);

return statearr_25391;
})();
var statearr_25392_25454 = state_25382__$1;
(statearr_25392_25454[(2)] = null);

(statearr_25392_25454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (6))){
var inst_25347 = (state_25382[(7)]);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25382__$1,(11),inst_25347);
} else {
if((state_val_25383 === (17))){
var inst_25368 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
if(cljs.core.truth_(inst_25368)){
var statearr_25393_25455 = state_25382__$1;
(statearr_25393_25455[(1)] = (19));

} else {
var statearr_25394_25456 = state_25382__$1;
(statearr_25394_25456[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (3))){
var inst_25380 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25382__$1,inst_25380);
} else {
if((state_val_25383 === (12))){
var inst_25357 = (state_25382[(10)]);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25382__$1,(14),inst_25357);
} else {
if((state_val_25383 === (2))){
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25382__$1,(4),results);
} else {
if((state_val_25383 === (19))){
var state_25382__$1 = state_25382;
var statearr_25395_25457 = state_25382__$1;
(statearr_25395_25457[(2)] = null);

(statearr_25395_25457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (11))){
var inst_25357 = (state_25382[(2)]);
var state_25382__$1 = (function (){var statearr_25396 = state_25382;
(statearr_25396[(10)] = inst_25357);

return statearr_25396;
})();
var statearr_25397_25458 = state_25382__$1;
(statearr_25397_25458[(2)] = null);

(statearr_25397_25458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (9))){
var state_25382__$1 = state_25382;
var statearr_25398_25459 = state_25382__$1;
(statearr_25398_25459[(2)] = null);

(statearr_25398_25459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (5))){
var state_25382__$1 = state_25382;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25399_25460 = state_25382__$1;
(statearr_25399_25460[(1)] = (8));

} else {
var statearr_25400_25461 = state_25382__$1;
(statearr_25400_25461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (14))){
var inst_25362 = (state_25382[(11)]);
var inst_25360 = (state_25382[(8)]);
var inst_25360__$1 = (state_25382[(2)]);
var inst_25361 = (inst_25360__$1 == null);
var inst_25362__$1 = cljs.core.not.call(null,inst_25361);
var state_25382__$1 = (function (){var statearr_25401 = state_25382;
(statearr_25401[(11)] = inst_25362__$1);

(statearr_25401[(8)] = inst_25360__$1);

return statearr_25401;
})();
if(inst_25362__$1){
var statearr_25402_25462 = state_25382__$1;
(statearr_25402_25462[(1)] = (15));

} else {
var statearr_25403_25463 = state_25382__$1;
(statearr_25403_25463[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (16))){
var inst_25362 = (state_25382[(11)]);
var state_25382__$1 = state_25382;
var statearr_25404_25464 = state_25382__$1;
(statearr_25404_25464[(2)] = inst_25362);

(statearr_25404_25464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (10))){
var inst_25354 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25405_25465 = state_25382__$1;
(statearr_25405_25465[(2)] = inst_25354);

(statearr_25405_25465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (18))){
var inst_25365 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25406_25466 = state_25382__$1;
(statearr_25406_25466[(2)] = inst_25365);

(statearr_25406_25466[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (8))){
var inst_25351 = cljs.core.async.close_BANG_.call(null,to);
var state_25382__$1 = state_25382;
var statearr_25407_25467 = state_25382__$1;
(statearr_25407_25467[(2)] = inst_25351);

(statearr_25407_25467[(1)] = (10));


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
});})(c__25076__auto__,jobs,results,process,async))
;
return ((function (switch__24981__auto__,c__25076__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____0 = (function (){
var statearr_25408 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__);

(statearr_25408[(1)] = (1));

return statearr_25408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____1 = (function (state_25382){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_25382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e25409){if((e25409 instanceof Object)){
var ex__24985__auto__ = e25409;
var statearr_25410_25468 = state_25382;
(statearr_25410_25468[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25469 = state_25382;
state_25382 = G__25469;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__ = function(state_25382){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____1.call(this,state_25382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto__,jobs,results,process,async))
})();
var state__25078__auto__ = (function (){var statearr_25411 = f__25077__auto__.call(null);
(statearr_25411[(6)] = c__25076__auto__);

return statearr_25411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto__,jobs,results,process,async))
);

return c__25076__auto__;
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
var G__25471 = arguments.length;
switch (G__25471) {
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
var G__25474 = arguments.length;
switch (G__25474) {
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
var G__25477 = arguments.length;
switch (G__25477) {
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
var c__25076__auto___25526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto___25526,tc,fc){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto___25526,tc,fc){
return (function (state_25503){
var state_val_25504 = (state_25503[(1)]);
if((state_val_25504 === (7))){
var inst_25499 = (state_25503[(2)]);
var state_25503__$1 = state_25503;
var statearr_25505_25527 = state_25503__$1;
(statearr_25505_25527[(2)] = inst_25499);

(statearr_25505_25527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (1))){
var state_25503__$1 = state_25503;
var statearr_25506_25528 = state_25503__$1;
(statearr_25506_25528[(2)] = null);

(statearr_25506_25528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (4))){
var inst_25480 = (state_25503[(7)]);
var inst_25480__$1 = (state_25503[(2)]);
var inst_25481 = (inst_25480__$1 == null);
var state_25503__$1 = (function (){var statearr_25507 = state_25503;
(statearr_25507[(7)] = inst_25480__$1);

return statearr_25507;
})();
if(cljs.core.truth_(inst_25481)){
var statearr_25508_25529 = state_25503__$1;
(statearr_25508_25529[(1)] = (5));

} else {
var statearr_25509_25530 = state_25503__$1;
(statearr_25509_25530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (13))){
var state_25503__$1 = state_25503;
var statearr_25510_25531 = state_25503__$1;
(statearr_25510_25531[(2)] = null);

(statearr_25510_25531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (6))){
var inst_25480 = (state_25503[(7)]);
var inst_25486 = p.call(null,inst_25480);
var state_25503__$1 = state_25503;
if(cljs.core.truth_(inst_25486)){
var statearr_25511_25532 = state_25503__$1;
(statearr_25511_25532[(1)] = (9));

} else {
var statearr_25512_25533 = state_25503__$1;
(statearr_25512_25533[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (3))){
var inst_25501 = (state_25503[(2)]);
var state_25503__$1 = state_25503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25503__$1,inst_25501);
} else {
if((state_val_25504 === (12))){
var state_25503__$1 = state_25503;
var statearr_25513_25534 = state_25503__$1;
(statearr_25513_25534[(2)] = null);

(statearr_25513_25534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (2))){
var state_25503__$1 = state_25503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25503__$1,(4),ch);
} else {
if((state_val_25504 === (11))){
var inst_25480 = (state_25503[(7)]);
var inst_25490 = (state_25503[(2)]);
var state_25503__$1 = state_25503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25503__$1,(8),inst_25490,inst_25480);
} else {
if((state_val_25504 === (9))){
var state_25503__$1 = state_25503;
var statearr_25514_25535 = state_25503__$1;
(statearr_25514_25535[(2)] = tc);

(statearr_25514_25535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (5))){
var inst_25483 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25484 = cljs.core.async.close_BANG_.call(null,fc);
var state_25503__$1 = (function (){var statearr_25515 = state_25503;
(statearr_25515[(8)] = inst_25483);

return statearr_25515;
})();
var statearr_25516_25536 = state_25503__$1;
(statearr_25516_25536[(2)] = inst_25484);

(statearr_25516_25536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (14))){
var inst_25497 = (state_25503[(2)]);
var state_25503__$1 = state_25503;
var statearr_25517_25537 = state_25503__$1;
(statearr_25517_25537[(2)] = inst_25497);

(statearr_25517_25537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (10))){
var state_25503__$1 = state_25503;
var statearr_25518_25538 = state_25503__$1;
(statearr_25518_25538[(2)] = fc);

(statearr_25518_25538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (8))){
var inst_25492 = (state_25503[(2)]);
var state_25503__$1 = state_25503;
if(cljs.core.truth_(inst_25492)){
var statearr_25519_25539 = state_25503__$1;
(statearr_25519_25539[(1)] = (12));

} else {
var statearr_25520_25540 = state_25503__$1;
(statearr_25520_25540[(1)] = (13));

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
});})(c__25076__auto___25526,tc,fc))
;
return ((function (switch__24981__auto__,c__25076__auto___25526,tc,fc){
return (function() {
var cljs$core$async$state_machine__24982__auto__ = null;
var cljs$core$async$state_machine__24982__auto____0 = (function (){
var statearr_25521 = [null,null,null,null,null,null,null,null,null];
(statearr_25521[(0)] = cljs$core$async$state_machine__24982__auto__);

(statearr_25521[(1)] = (1));

return statearr_25521;
});
var cljs$core$async$state_machine__24982__auto____1 = (function (state_25503){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_25503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e25522){if((e25522 instanceof Object)){
var ex__24985__auto__ = e25522;
var statearr_25523_25541 = state_25503;
(statearr_25523_25541[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25542 = state_25503;
state_25503 = G__25542;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$state_machine__24982__auto__ = function(state_25503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24982__auto____1.call(this,state_25503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24982__auto____0;
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24982__auto____1;
return cljs$core$async$state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto___25526,tc,fc))
})();
var state__25078__auto__ = (function (){var statearr_25524 = f__25077__auto__.call(null);
(statearr_25524[(6)] = c__25076__auto___25526);

return statearr_25524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto___25526,tc,fc))
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
var c__25076__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto__){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto__){
return (function (state_25563){
var state_val_25564 = (state_25563[(1)]);
if((state_val_25564 === (7))){
var inst_25559 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
var statearr_25565_25583 = state_25563__$1;
(statearr_25565_25583[(2)] = inst_25559);

(statearr_25565_25583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (1))){
var inst_25543 = init;
var state_25563__$1 = (function (){var statearr_25566 = state_25563;
(statearr_25566[(7)] = inst_25543);

return statearr_25566;
})();
var statearr_25567_25584 = state_25563__$1;
(statearr_25567_25584[(2)] = null);

(statearr_25567_25584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (4))){
var inst_25546 = (state_25563[(8)]);
var inst_25546__$1 = (state_25563[(2)]);
var inst_25547 = (inst_25546__$1 == null);
var state_25563__$1 = (function (){var statearr_25568 = state_25563;
(statearr_25568[(8)] = inst_25546__$1);

return statearr_25568;
})();
if(cljs.core.truth_(inst_25547)){
var statearr_25569_25585 = state_25563__$1;
(statearr_25569_25585[(1)] = (5));

} else {
var statearr_25570_25586 = state_25563__$1;
(statearr_25570_25586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (6))){
var inst_25546 = (state_25563[(8)]);
var inst_25543 = (state_25563[(7)]);
var inst_25550 = (state_25563[(9)]);
var inst_25550__$1 = f.call(null,inst_25543,inst_25546);
var inst_25551 = cljs.core.reduced_QMARK_.call(null,inst_25550__$1);
var state_25563__$1 = (function (){var statearr_25571 = state_25563;
(statearr_25571[(9)] = inst_25550__$1);

return statearr_25571;
})();
if(inst_25551){
var statearr_25572_25587 = state_25563__$1;
(statearr_25572_25587[(1)] = (8));

} else {
var statearr_25573_25588 = state_25563__$1;
(statearr_25573_25588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (3))){
var inst_25561 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25563__$1,inst_25561);
} else {
if((state_val_25564 === (2))){
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25563__$1,(4),ch);
} else {
if((state_val_25564 === (9))){
var inst_25550 = (state_25563[(9)]);
var inst_25543 = inst_25550;
var state_25563__$1 = (function (){var statearr_25574 = state_25563;
(statearr_25574[(7)] = inst_25543);

return statearr_25574;
})();
var statearr_25575_25589 = state_25563__$1;
(statearr_25575_25589[(2)] = null);

(statearr_25575_25589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (5))){
var inst_25543 = (state_25563[(7)]);
var state_25563__$1 = state_25563;
var statearr_25576_25590 = state_25563__$1;
(statearr_25576_25590[(2)] = inst_25543);

(statearr_25576_25590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (10))){
var inst_25557 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
var statearr_25577_25591 = state_25563__$1;
(statearr_25577_25591[(2)] = inst_25557);

(statearr_25577_25591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (8))){
var inst_25550 = (state_25563[(9)]);
var inst_25553 = cljs.core.deref.call(null,inst_25550);
var state_25563__$1 = state_25563;
var statearr_25578_25592 = state_25563__$1;
(statearr_25578_25592[(2)] = inst_25553);

(statearr_25578_25592[(1)] = (10));


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
});})(c__25076__auto__))
;
return ((function (switch__24981__auto__,c__25076__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24982__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24982__auto____0 = (function (){
var statearr_25579 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25579[(0)] = cljs$core$async$reduce_$_state_machine__24982__auto__);

(statearr_25579[(1)] = (1));

return statearr_25579;
});
var cljs$core$async$reduce_$_state_machine__24982__auto____1 = (function (state_25563){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_25563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e25580){if((e25580 instanceof Object)){
var ex__24985__auto__ = e25580;
var statearr_25581_25593 = state_25563;
(statearr_25581_25593[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25594 = state_25563;
state_25563 = G__25594;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24982__auto__ = function(state_25563){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24982__auto____1.call(this,state_25563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24982__auto____0;
cljs$core$async$reduce_$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24982__auto____1;
return cljs$core$async$reduce_$_state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto__))
})();
var state__25078__auto__ = (function (){var statearr_25582 = f__25077__auto__.call(null);
(statearr_25582[(6)] = c__25076__auto__);

return statearr_25582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto__))
);

return c__25076__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25076__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto__,f__$1){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto__,f__$1){
return (function (state_25600){
var state_val_25601 = (state_25600[(1)]);
if((state_val_25601 === (1))){
var inst_25595 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25600__$1 = state_25600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25600__$1,(2),inst_25595);
} else {
if((state_val_25601 === (2))){
var inst_25597 = (state_25600[(2)]);
var inst_25598 = f__$1.call(null,inst_25597);
var state_25600__$1 = state_25600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25600__$1,inst_25598);
} else {
return null;
}
}
});})(c__25076__auto__,f__$1))
;
return ((function (switch__24981__auto__,c__25076__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24982__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24982__auto____0 = (function (){
var statearr_25602 = [null,null,null,null,null,null,null];
(statearr_25602[(0)] = cljs$core$async$transduce_$_state_machine__24982__auto__);

(statearr_25602[(1)] = (1));

return statearr_25602;
});
var cljs$core$async$transduce_$_state_machine__24982__auto____1 = (function (state_25600){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_25600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e25603){if((e25603 instanceof Object)){
var ex__24985__auto__ = e25603;
var statearr_25604_25606 = state_25600;
(statearr_25604_25606[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25607 = state_25600;
state_25600 = G__25607;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24982__auto__ = function(state_25600){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24982__auto____1.call(this,state_25600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24982__auto____0;
cljs$core$async$transduce_$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24982__auto____1;
return cljs$core$async$transduce_$_state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto__,f__$1))
})();
var state__25078__auto__ = (function (){var statearr_25605 = f__25077__auto__.call(null);
(statearr_25605[(6)] = c__25076__auto__);

return statearr_25605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto__,f__$1))
);

return c__25076__auto__;
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
var G__25609 = arguments.length;
switch (G__25609) {
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
var c__25076__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto__){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto__){
return (function (state_25634){
var state_val_25635 = (state_25634[(1)]);
if((state_val_25635 === (7))){
var inst_25616 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25636_25657 = state_25634__$1;
(statearr_25636_25657[(2)] = inst_25616);

(statearr_25636_25657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (1))){
var inst_25610 = cljs.core.seq.call(null,coll);
var inst_25611 = inst_25610;
var state_25634__$1 = (function (){var statearr_25637 = state_25634;
(statearr_25637[(7)] = inst_25611);

return statearr_25637;
})();
var statearr_25638_25658 = state_25634__$1;
(statearr_25638_25658[(2)] = null);

(statearr_25638_25658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (4))){
var inst_25611 = (state_25634[(7)]);
var inst_25614 = cljs.core.first.call(null,inst_25611);
var state_25634__$1 = state_25634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25634__$1,(7),ch,inst_25614);
} else {
if((state_val_25635 === (13))){
var inst_25628 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25639_25659 = state_25634__$1;
(statearr_25639_25659[(2)] = inst_25628);

(statearr_25639_25659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (6))){
var inst_25619 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
if(cljs.core.truth_(inst_25619)){
var statearr_25640_25660 = state_25634__$1;
(statearr_25640_25660[(1)] = (8));

} else {
var statearr_25641_25661 = state_25634__$1;
(statearr_25641_25661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (3))){
var inst_25632 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25634__$1,inst_25632);
} else {
if((state_val_25635 === (12))){
var state_25634__$1 = state_25634;
var statearr_25642_25662 = state_25634__$1;
(statearr_25642_25662[(2)] = null);

(statearr_25642_25662[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (2))){
var inst_25611 = (state_25634[(7)]);
var state_25634__$1 = state_25634;
if(cljs.core.truth_(inst_25611)){
var statearr_25643_25663 = state_25634__$1;
(statearr_25643_25663[(1)] = (4));

} else {
var statearr_25644_25664 = state_25634__$1;
(statearr_25644_25664[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (11))){
var inst_25625 = cljs.core.async.close_BANG_.call(null,ch);
var state_25634__$1 = state_25634;
var statearr_25645_25665 = state_25634__$1;
(statearr_25645_25665[(2)] = inst_25625);

(statearr_25645_25665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (9))){
var state_25634__$1 = state_25634;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25646_25666 = state_25634__$1;
(statearr_25646_25666[(1)] = (11));

} else {
var statearr_25647_25667 = state_25634__$1;
(statearr_25647_25667[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (5))){
var inst_25611 = (state_25634[(7)]);
var state_25634__$1 = state_25634;
var statearr_25648_25668 = state_25634__$1;
(statearr_25648_25668[(2)] = inst_25611);

(statearr_25648_25668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (10))){
var inst_25630 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25649_25669 = state_25634__$1;
(statearr_25649_25669[(2)] = inst_25630);

(statearr_25649_25669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (8))){
var inst_25611 = (state_25634[(7)]);
var inst_25621 = cljs.core.next.call(null,inst_25611);
var inst_25611__$1 = inst_25621;
var state_25634__$1 = (function (){var statearr_25650 = state_25634;
(statearr_25650[(7)] = inst_25611__$1);

return statearr_25650;
})();
var statearr_25651_25670 = state_25634__$1;
(statearr_25651_25670[(2)] = null);

(statearr_25651_25670[(1)] = (2));


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
});})(c__25076__auto__))
;
return ((function (switch__24981__auto__,c__25076__auto__){
return (function() {
var cljs$core$async$state_machine__24982__auto__ = null;
var cljs$core$async$state_machine__24982__auto____0 = (function (){
var statearr_25652 = [null,null,null,null,null,null,null,null];
(statearr_25652[(0)] = cljs$core$async$state_machine__24982__auto__);

(statearr_25652[(1)] = (1));

return statearr_25652;
});
var cljs$core$async$state_machine__24982__auto____1 = (function (state_25634){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_25634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e25653){if((e25653 instanceof Object)){
var ex__24985__auto__ = e25653;
var statearr_25654_25671 = state_25634;
(statearr_25654_25671[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25672 = state_25634;
state_25634 = G__25672;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$state_machine__24982__auto__ = function(state_25634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24982__auto____1.call(this,state_25634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24982__auto____0;
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24982__auto____1;
return cljs$core$async$state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto__))
})();
var state__25078__auto__ = (function (){var statearr_25655 = f__25077__auto__.call(null);
(statearr_25655[(6)] = c__25076__auto__);

return statearr_25655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto__))
);

return c__25076__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25673 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25673 = (function (ch,cs,meta25674){
this.ch = ch;
this.cs = cs;
this.meta25674 = meta25674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25675,meta25674__$1){
var self__ = this;
var _25675__$1 = this;
return (new cljs.core.async.t_cljs$core$async25673(self__.ch,self__.cs,meta25674__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25675){
var self__ = this;
var _25675__$1 = this;
return self__.meta25674;
});})(cs))
;

cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25673.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25674","meta25674",1364409851,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25673";

cljs.core.async.t_cljs$core$async25673.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25673");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25673.
 */
cljs.core.async.__GT_t_cljs$core$async25673 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25673(ch__$1,cs__$1,meta25674){
return (new cljs.core.async.t_cljs$core$async25673(ch__$1,cs__$1,meta25674));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25673(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25076__auto___25895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto___25895,cs,m,dchan,dctr,done){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto___25895,cs,m,dchan,dctr,done){
return (function (state_25810){
var state_val_25811 = (state_25810[(1)]);
if((state_val_25811 === (7))){
var inst_25806 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
var statearr_25812_25896 = state_25810__$1;
(statearr_25812_25896[(2)] = inst_25806);

(statearr_25812_25896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (20))){
var inst_25709 = (state_25810[(7)]);
var inst_25721 = cljs.core.first.call(null,inst_25709);
var inst_25722 = cljs.core.nth.call(null,inst_25721,(0),null);
var inst_25723 = cljs.core.nth.call(null,inst_25721,(1),null);
var state_25810__$1 = (function (){var statearr_25813 = state_25810;
(statearr_25813[(8)] = inst_25722);

return statearr_25813;
})();
if(cljs.core.truth_(inst_25723)){
var statearr_25814_25897 = state_25810__$1;
(statearr_25814_25897[(1)] = (22));

} else {
var statearr_25815_25898 = state_25810__$1;
(statearr_25815_25898[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (27))){
var inst_25758 = (state_25810[(9)]);
var inst_25753 = (state_25810[(10)]);
var inst_25678 = (state_25810[(11)]);
var inst_25751 = (state_25810[(12)]);
var inst_25758__$1 = cljs.core._nth.call(null,inst_25751,inst_25753);
var inst_25759 = cljs.core.async.put_BANG_.call(null,inst_25758__$1,inst_25678,done);
var state_25810__$1 = (function (){var statearr_25816 = state_25810;
(statearr_25816[(9)] = inst_25758__$1);

return statearr_25816;
})();
if(cljs.core.truth_(inst_25759)){
var statearr_25817_25899 = state_25810__$1;
(statearr_25817_25899[(1)] = (30));

} else {
var statearr_25818_25900 = state_25810__$1;
(statearr_25818_25900[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (1))){
var state_25810__$1 = state_25810;
var statearr_25819_25901 = state_25810__$1;
(statearr_25819_25901[(2)] = null);

(statearr_25819_25901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (24))){
var inst_25709 = (state_25810[(7)]);
var inst_25728 = (state_25810[(2)]);
var inst_25729 = cljs.core.next.call(null,inst_25709);
var inst_25687 = inst_25729;
var inst_25688 = null;
var inst_25689 = (0);
var inst_25690 = (0);
var state_25810__$1 = (function (){var statearr_25820 = state_25810;
(statearr_25820[(13)] = inst_25728);

(statearr_25820[(14)] = inst_25690);

(statearr_25820[(15)] = inst_25689);

(statearr_25820[(16)] = inst_25687);

(statearr_25820[(17)] = inst_25688);

return statearr_25820;
})();
var statearr_25821_25902 = state_25810__$1;
(statearr_25821_25902[(2)] = null);

(statearr_25821_25902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (39))){
var state_25810__$1 = state_25810;
var statearr_25825_25903 = state_25810__$1;
(statearr_25825_25903[(2)] = null);

(statearr_25825_25903[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (4))){
var inst_25678 = (state_25810[(11)]);
var inst_25678__$1 = (state_25810[(2)]);
var inst_25679 = (inst_25678__$1 == null);
var state_25810__$1 = (function (){var statearr_25826 = state_25810;
(statearr_25826[(11)] = inst_25678__$1);

return statearr_25826;
})();
if(cljs.core.truth_(inst_25679)){
var statearr_25827_25904 = state_25810__$1;
(statearr_25827_25904[(1)] = (5));

} else {
var statearr_25828_25905 = state_25810__$1;
(statearr_25828_25905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (15))){
var inst_25690 = (state_25810[(14)]);
var inst_25689 = (state_25810[(15)]);
var inst_25687 = (state_25810[(16)]);
var inst_25688 = (state_25810[(17)]);
var inst_25705 = (state_25810[(2)]);
var inst_25706 = (inst_25690 + (1));
var tmp25822 = inst_25689;
var tmp25823 = inst_25687;
var tmp25824 = inst_25688;
var inst_25687__$1 = tmp25823;
var inst_25688__$1 = tmp25824;
var inst_25689__$1 = tmp25822;
var inst_25690__$1 = inst_25706;
var state_25810__$1 = (function (){var statearr_25829 = state_25810;
(statearr_25829[(18)] = inst_25705);

(statearr_25829[(14)] = inst_25690__$1);

(statearr_25829[(15)] = inst_25689__$1);

(statearr_25829[(16)] = inst_25687__$1);

(statearr_25829[(17)] = inst_25688__$1);

return statearr_25829;
})();
var statearr_25830_25906 = state_25810__$1;
(statearr_25830_25906[(2)] = null);

(statearr_25830_25906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (21))){
var inst_25732 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
var statearr_25834_25907 = state_25810__$1;
(statearr_25834_25907[(2)] = inst_25732);

(statearr_25834_25907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (31))){
var inst_25758 = (state_25810[(9)]);
var inst_25762 = done.call(null,null);
var inst_25763 = cljs.core.async.untap_STAR_.call(null,m,inst_25758);
var state_25810__$1 = (function (){var statearr_25835 = state_25810;
(statearr_25835[(19)] = inst_25762);

return statearr_25835;
})();
var statearr_25836_25908 = state_25810__$1;
(statearr_25836_25908[(2)] = inst_25763);

(statearr_25836_25908[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (32))){
var inst_25750 = (state_25810[(20)]);
var inst_25753 = (state_25810[(10)]);
var inst_25752 = (state_25810[(21)]);
var inst_25751 = (state_25810[(12)]);
var inst_25765 = (state_25810[(2)]);
var inst_25766 = (inst_25753 + (1));
var tmp25831 = inst_25750;
var tmp25832 = inst_25752;
var tmp25833 = inst_25751;
var inst_25750__$1 = tmp25831;
var inst_25751__$1 = tmp25833;
var inst_25752__$1 = tmp25832;
var inst_25753__$1 = inst_25766;
var state_25810__$1 = (function (){var statearr_25837 = state_25810;
(statearr_25837[(20)] = inst_25750__$1);

(statearr_25837[(10)] = inst_25753__$1);

(statearr_25837[(21)] = inst_25752__$1);

(statearr_25837[(22)] = inst_25765);

(statearr_25837[(12)] = inst_25751__$1);

return statearr_25837;
})();
var statearr_25838_25909 = state_25810__$1;
(statearr_25838_25909[(2)] = null);

(statearr_25838_25909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (40))){
var inst_25778 = (state_25810[(23)]);
var inst_25782 = done.call(null,null);
var inst_25783 = cljs.core.async.untap_STAR_.call(null,m,inst_25778);
var state_25810__$1 = (function (){var statearr_25839 = state_25810;
(statearr_25839[(24)] = inst_25782);

return statearr_25839;
})();
var statearr_25840_25910 = state_25810__$1;
(statearr_25840_25910[(2)] = inst_25783);

(statearr_25840_25910[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (33))){
var inst_25769 = (state_25810[(25)]);
var inst_25771 = cljs.core.chunked_seq_QMARK_.call(null,inst_25769);
var state_25810__$1 = state_25810;
if(inst_25771){
var statearr_25841_25911 = state_25810__$1;
(statearr_25841_25911[(1)] = (36));

} else {
var statearr_25842_25912 = state_25810__$1;
(statearr_25842_25912[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (13))){
var inst_25699 = (state_25810[(26)]);
var inst_25702 = cljs.core.async.close_BANG_.call(null,inst_25699);
var state_25810__$1 = state_25810;
var statearr_25843_25913 = state_25810__$1;
(statearr_25843_25913[(2)] = inst_25702);

(statearr_25843_25913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (22))){
var inst_25722 = (state_25810[(8)]);
var inst_25725 = cljs.core.async.close_BANG_.call(null,inst_25722);
var state_25810__$1 = state_25810;
var statearr_25844_25914 = state_25810__$1;
(statearr_25844_25914[(2)] = inst_25725);

(statearr_25844_25914[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (36))){
var inst_25769 = (state_25810[(25)]);
var inst_25773 = cljs.core.chunk_first.call(null,inst_25769);
var inst_25774 = cljs.core.chunk_rest.call(null,inst_25769);
var inst_25775 = cljs.core.count.call(null,inst_25773);
var inst_25750 = inst_25774;
var inst_25751 = inst_25773;
var inst_25752 = inst_25775;
var inst_25753 = (0);
var state_25810__$1 = (function (){var statearr_25845 = state_25810;
(statearr_25845[(20)] = inst_25750);

(statearr_25845[(10)] = inst_25753);

(statearr_25845[(21)] = inst_25752);

(statearr_25845[(12)] = inst_25751);

return statearr_25845;
})();
var statearr_25846_25915 = state_25810__$1;
(statearr_25846_25915[(2)] = null);

(statearr_25846_25915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (41))){
var inst_25769 = (state_25810[(25)]);
var inst_25785 = (state_25810[(2)]);
var inst_25786 = cljs.core.next.call(null,inst_25769);
var inst_25750 = inst_25786;
var inst_25751 = null;
var inst_25752 = (0);
var inst_25753 = (0);
var state_25810__$1 = (function (){var statearr_25847 = state_25810;
(statearr_25847[(20)] = inst_25750);

(statearr_25847[(10)] = inst_25753);

(statearr_25847[(21)] = inst_25752);

(statearr_25847[(27)] = inst_25785);

(statearr_25847[(12)] = inst_25751);

return statearr_25847;
})();
var statearr_25848_25916 = state_25810__$1;
(statearr_25848_25916[(2)] = null);

(statearr_25848_25916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (43))){
var state_25810__$1 = state_25810;
var statearr_25849_25917 = state_25810__$1;
(statearr_25849_25917[(2)] = null);

(statearr_25849_25917[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (29))){
var inst_25794 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
var statearr_25850_25918 = state_25810__$1;
(statearr_25850_25918[(2)] = inst_25794);

(statearr_25850_25918[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (44))){
var inst_25803 = (state_25810[(2)]);
var state_25810__$1 = (function (){var statearr_25851 = state_25810;
(statearr_25851[(28)] = inst_25803);

return statearr_25851;
})();
var statearr_25852_25919 = state_25810__$1;
(statearr_25852_25919[(2)] = null);

(statearr_25852_25919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (6))){
var inst_25742 = (state_25810[(29)]);
var inst_25741 = cljs.core.deref.call(null,cs);
var inst_25742__$1 = cljs.core.keys.call(null,inst_25741);
var inst_25743 = cljs.core.count.call(null,inst_25742__$1);
var inst_25744 = cljs.core.reset_BANG_.call(null,dctr,inst_25743);
var inst_25749 = cljs.core.seq.call(null,inst_25742__$1);
var inst_25750 = inst_25749;
var inst_25751 = null;
var inst_25752 = (0);
var inst_25753 = (0);
var state_25810__$1 = (function (){var statearr_25853 = state_25810;
(statearr_25853[(30)] = inst_25744);

(statearr_25853[(20)] = inst_25750);

(statearr_25853[(10)] = inst_25753);

(statearr_25853[(21)] = inst_25752);

(statearr_25853[(12)] = inst_25751);

(statearr_25853[(29)] = inst_25742__$1);

return statearr_25853;
})();
var statearr_25854_25920 = state_25810__$1;
(statearr_25854_25920[(2)] = null);

(statearr_25854_25920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (28))){
var inst_25769 = (state_25810[(25)]);
var inst_25750 = (state_25810[(20)]);
var inst_25769__$1 = cljs.core.seq.call(null,inst_25750);
var state_25810__$1 = (function (){var statearr_25855 = state_25810;
(statearr_25855[(25)] = inst_25769__$1);

return statearr_25855;
})();
if(inst_25769__$1){
var statearr_25856_25921 = state_25810__$1;
(statearr_25856_25921[(1)] = (33));

} else {
var statearr_25857_25922 = state_25810__$1;
(statearr_25857_25922[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (25))){
var inst_25753 = (state_25810[(10)]);
var inst_25752 = (state_25810[(21)]);
var inst_25755 = (inst_25753 < inst_25752);
var inst_25756 = inst_25755;
var state_25810__$1 = state_25810;
if(cljs.core.truth_(inst_25756)){
var statearr_25858_25923 = state_25810__$1;
(statearr_25858_25923[(1)] = (27));

} else {
var statearr_25859_25924 = state_25810__$1;
(statearr_25859_25924[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (34))){
var state_25810__$1 = state_25810;
var statearr_25860_25925 = state_25810__$1;
(statearr_25860_25925[(2)] = null);

(statearr_25860_25925[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (17))){
var state_25810__$1 = state_25810;
var statearr_25861_25926 = state_25810__$1;
(statearr_25861_25926[(2)] = null);

(statearr_25861_25926[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (3))){
var inst_25808 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25810__$1,inst_25808);
} else {
if((state_val_25811 === (12))){
var inst_25737 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
var statearr_25862_25927 = state_25810__$1;
(statearr_25862_25927[(2)] = inst_25737);

(statearr_25862_25927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (2))){
var state_25810__$1 = state_25810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25810__$1,(4),ch);
} else {
if((state_val_25811 === (23))){
var state_25810__$1 = state_25810;
var statearr_25863_25928 = state_25810__$1;
(statearr_25863_25928[(2)] = null);

(statearr_25863_25928[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (35))){
var inst_25792 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
var statearr_25864_25929 = state_25810__$1;
(statearr_25864_25929[(2)] = inst_25792);

(statearr_25864_25929[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (19))){
var inst_25709 = (state_25810[(7)]);
var inst_25713 = cljs.core.chunk_first.call(null,inst_25709);
var inst_25714 = cljs.core.chunk_rest.call(null,inst_25709);
var inst_25715 = cljs.core.count.call(null,inst_25713);
var inst_25687 = inst_25714;
var inst_25688 = inst_25713;
var inst_25689 = inst_25715;
var inst_25690 = (0);
var state_25810__$1 = (function (){var statearr_25865 = state_25810;
(statearr_25865[(14)] = inst_25690);

(statearr_25865[(15)] = inst_25689);

(statearr_25865[(16)] = inst_25687);

(statearr_25865[(17)] = inst_25688);

return statearr_25865;
})();
var statearr_25866_25930 = state_25810__$1;
(statearr_25866_25930[(2)] = null);

(statearr_25866_25930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (11))){
var inst_25709 = (state_25810[(7)]);
var inst_25687 = (state_25810[(16)]);
var inst_25709__$1 = cljs.core.seq.call(null,inst_25687);
var state_25810__$1 = (function (){var statearr_25867 = state_25810;
(statearr_25867[(7)] = inst_25709__$1);

return statearr_25867;
})();
if(inst_25709__$1){
var statearr_25868_25931 = state_25810__$1;
(statearr_25868_25931[(1)] = (16));

} else {
var statearr_25869_25932 = state_25810__$1;
(statearr_25869_25932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (9))){
var inst_25739 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
var statearr_25870_25933 = state_25810__$1;
(statearr_25870_25933[(2)] = inst_25739);

(statearr_25870_25933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (5))){
var inst_25685 = cljs.core.deref.call(null,cs);
var inst_25686 = cljs.core.seq.call(null,inst_25685);
var inst_25687 = inst_25686;
var inst_25688 = null;
var inst_25689 = (0);
var inst_25690 = (0);
var state_25810__$1 = (function (){var statearr_25871 = state_25810;
(statearr_25871[(14)] = inst_25690);

(statearr_25871[(15)] = inst_25689);

(statearr_25871[(16)] = inst_25687);

(statearr_25871[(17)] = inst_25688);

return statearr_25871;
})();
var statearr_25872_25934 = state_25810__$1;
(statearr_25872_25934[(2)] = null);

(statearr_25872_25934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (14))){
var state_25810__$1 = state_25810;
var statearr_25873_25935 = state_25810__$1;
(statearr_25873_25935[(2)] = null);

(statearr_25873_25935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (45))){
var inst_25800 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
var statearr_25874_25936 = state_25810__$1;
(statearr_25874_25936[(2)] = inst_25800);

(statearr_25874_25936[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (26))){
var inst_25742 = (state_25810[(29)]);
var inst_25796 = (state_25810[(2)]);
var inst_25797 = cljs.core.seq.call(null,inst_25742);
var state_25810__$1 = (function (){var statearr_25875 = state_25810;
(statearr_25875[(31)] = inst_25796);

return statearr_25875;
})();
if(inst_25797){
var statearr_25876_25937 = state_25810__$1;
(statearr_25876_25937[(1)] = (42));

} else {
var statearr_25877_25938 = state_25810__$1;
(statearr_25877_25938[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (16))){
var inst_25709 = (state_25810[(7)]);
var inst_25711 = cljs.core.chunked_seq_QMARK_.call(null,inst_25709);
var state_25810__$1 = state_25810;
if(inst_25711){
var statearr_25878_25939 = state_25810__$1;
(statearr_25878_25939[(1)] = (19));

} else {
var statearr_25879_25940 = state_25810__$1;
(statearr_25879_25940[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (38))){
var inst_25789 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
var statearr_25880_25941 = state_25810__$1;
(statearr_25880_25941[(2)] = inst_25789);

(statearr_25880_25941[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (30))){
var state_25810__$1 = state_25810;
var statearr_25881_25942 = state_25810__$1;
(statearr_25881_25942[(2)] = null);

(statearr_25881_25942[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (10))){
var inst_25690 = (state_25810[(14)]);
var inst_25688 = (state_25810[(17)]);
var inst_25698 = cljs.core._nth.call(null,inst_25688,inst_25690);
var inst_25699 = cljs.core.nth.call(null,inst_25698,(0),null);
var inst_25700 = cljs.core.nth.call(null,inst_25698,(1),null);
var state_25810__$1 = (function (){var statearr_25882 = state_25810;
(statearr_25882[(26)] = inst_25699);

return statearr_25882;
})();
if(cljs.core.truth_(inst_25700)){
var statearr_25883_25943 = state_25810__$1;
(statearr_25883_25943[(1)] = (13));

} else {
var statearr_25884_25944 = state_25810__$1;
(statearr_25884_25944[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (18))){
var inst_25735 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
var statearr_25885_25945 = state_25810__$1;
(statearr_25885_25945[(2)] = inst_25735);

(statearr_25885_25945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (42))){
var state_25810__$1 = state_25810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25810__$1,(45),dchan);
} else {
if((state_val_25811 === (37))){
var inst_25769 = (state_25810[(25)]);
var inst_25778 = (state_25810[(23)]);
var inst_25678 = (state_25810[(11)]);
var inst_25778__$1 = cljs.core.first.call(null,inst_25769);
var inst_25779 = cljs.core.async.put_BANG_.call(null,inst_25778__$1,inst_25678,done);
var state_25810__$1 = (function (){var statearr_25886 = state_25810;
(statearr_25886[(23)] = inst_25778__$1);

return statearr_25886;
})();
if(cljs.core.truth_(inst_25779)){
var statearr_25887_25946 = state_25810__$1;
(statearr_25887_25946[(1)] = (39));

} else {
var statearr_25888_25947 = state_25810__$1;
(statearr_25888_25947[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (8))){
var inst_25690 = (state_25810[(14)]);
var inst_25689 = (state_25810[(15)]);
var inst_25692 = (inst_25690 < inst_25689);
var inst_25693 = inst_25692;
var state_25810__$1 = state_25810;
if(cljs.core.truth_(inst_25693)){
var statearr_25889_25948 = state_25810__$1;
(statearr_25889_25948[(1)] = (10));

} else {
var statearr_25890_25949 = state_25810__$1;
(statearr_25890_25949[(1)] = (11));

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
});})(c__25076__auto___25895,cs,m,dchan,dctr,done))
;
return ((function (switch__24981__auto__,c__25076__auto___25895,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24982__auto__ = null;
var cljs$core$async$mult_$_state_machine__24982__auto____0 = (function (){
var statearr_25891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25891[(0)] = cljs$core$async$mult_$_state_machine__24982__auto__);

(statearr_25891[(1)] = (1));

return statearr_25891;
});
var cljs$core$async$mult_$_state_machine__24982__auto____1 = (function (state_25810){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_25810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e25892){if((e25892 instanceof Object)){
var ex__24985__auto__ = e25892;
var statearr_25893_25950 = state_25810;
(statearr_25893_25950[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25951 = state_25810;
state_25810 = G__25951;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24982__auto__ = function(state_25810){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24982__auto____1.call(this,state_25810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24982__auto____0;
cljs$core$async$mult_$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24982__auto____1;
return cljs$core$async$mult_$_state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto___25895,cs,m,dchan,dctr,done))
})();
var state__25078__auto__ = (function (){var statearr_25894 = f__25077__auto__.call(null);
(statearr_25894[(6)] = c__25076__auto___25895);

return statearr_25894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto___25895,cs,m,dchan,dctr,done))
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
var G__25953 = arguments.length;
switch (G__25953) {
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
var len__4641__auto___25965 = arguments.length;
var i__4642__auto___25966 = (0);
while(true){
if((i__4642__auto___25966 < len__4641__auto___25965)){
args__4647__auto__.push((arguments[i__4642__auto___25966]));

var G__25967 = (i__4642__auto___25966 + (1));
i__4642__auto___25966 = G__25967;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25959){
var map__25960 = p__25959;
var map__25960__$1 = (((((!((map__25960 == null))))?(((((map__25960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25960):map__25960);
var opts = map__25960__$1;
var statearr_25962_25968 = state;
(statearr_25962_25968[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__25960,map__25960__$1,opts){
return (function (val){
var statearr_25963_25969 = state;
(statearr_25963_25969[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25960,map__25960__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25964_25970 = state;
(statearr_25964_25970[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25955){
var G__25956 = cljs.core.first.call(null,seq25955);
var seq25955__$1 = cljs.core.next.call(null,seq25955);
var G__25957 = cljs.core.first.call(null,seq25955__$1);
var seq25955__$2 = cljs.core.next.call(null,seq25955__$1);
var G__25958 = cljs.core.first.call(null,seq25955__$2);
var seq25955__$3 = cljs.core.next.call(null,seq25955__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25956,G__25957,G__25958,seq25955__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25971 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25972){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25972 = meta25972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25973,meta25972__$1){
var self__ = this;
var _25973__$1 = this;
return (new cljs.core.async.t_cljs$core$async25971(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25972__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25973){
var self__ = this;
var _25973__$1 = this;
return self__.meta25972;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25971.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta25972","meta25972",1645234660,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25971.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25971";

cljs.core.async.t_cljs$core$async25971.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25971");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25971.
 */
cljs.core.async.__GT_t_cljs$core$async25971 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25971(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25972){
return (new cljs.core.async.t_cljs$core$async25971(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25972));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25971(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25076__auto___26135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto___26135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto___26135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26075){
var state_val_26076 = (state_26075[(1)]);
if((state_val_26076 === (7))){
var inst_25990 = (state_26075[(2)]);
var state_26075__$1 = state_26075;
var statearr_26077_26136 = state_26075__$1;
(statearr_26077_26136[(2)] = inst_25990);

(statearr_26077_26136[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (20))){
var inst_26002 = (state_26075[(7)]);
var state_26075__$1 = state_26075;
var statearr_26078_26137 = state_26075__$1;
(statearr_26078_26137[(2)] = inst_26002);

(statearr_26078_26137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (27))){
var state_26075__$1 = state_26075;
var statearr_26079_26138 = state_26075__$1;
(statearr_26079_26138[(2)] = null);

(statearr_26079_26138[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (1))){
var inst_25977 = (state_26075[(8)]);
var inst_25977__$1 = calc_state.call(null);
var inst_25979 = (inst_25977__$1 == null);
var inst_25980 = cljs.core.not.call(null,inst_25979);
var state_26075__$1 = (function (){var statearr_26080 = state_26075;
(statearr_26080[(8)] = inst_25977__$1);

return statearr_26080;
})();
if(inst_25980){
var statearr_26081_26139 = state_26075__$1;
(statearr_26081_26139[(1)] = (2));

} else {
var statearr_26082_26140 = state_26075__$1;
(statearr_26082_26140[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (24))){
var inst_26049 = (state_26075[(9)]);
var inst_26026 = (state_26075[(10)]);
var inst_26035 = (state_26075[(11)]);
var inst_26049__$1 = inst_26026.call(null,inst_26035);
var state_26075__$1 = (function (){var statearr_26083 = state_26075;
(statearr_26083[(9)] = inst_26049__$1);

return statearr_26083;
})();
if(cljs.core.truth_(inst_26049__$1)){
var statearr_26084_26141 = state_26075__$1;
(statearr_26084_26141[(1)] = (29));

} else {
var statearr_26085_26142 = state_26075__$1;
(statearr_26085_26142[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (4))){
var inst_25993 = (state_26075[(2)]);
var state_26075__$1 = state_26075;
if(cljs.core.truth_(inst_25993)){
var statearr_26086_26143 = state_26075__$1;
(statearr_26086_26143[(1)] = (8));

} else {
var statearr_26087_26144 = state_26075__$1;
(statearr_26087_26144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (15))){
var inst_26020 = (state_26075[(2)]);
var state_26075__$1 = state_26075;
if(cljs.core.truth_(inst_26020)){
var statearr_26088_26145 = state_26075__$1;
(statearr_26088_26145[(1)] = (19));

} else {
var statearr_26089_26146 = state_26075__$1;
(statearr_26089_26146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (21))){
var inst_26025 = (state_26075[(12)]);
var inst_26025__$1 = (state_26075[(2)]);
var inst_26026 = cljs.core.get.call(null,inst_26025__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26027 = cljs.core.get.call(null,inst_26025__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26028 = cljs.core.get.call(null,inst_26025__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26075__$1 = (function (){var statearr_26090 = state_26075;
(statearr_26090[(12)] = inst_26025__$1);

(statearr_26090[(10)] = inst_26026);

(statearr_26090[(13)] = inst_26027);

return statearr_26090;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26075__$1,(22),inst_26028);
} else {
if((state_val_26076 === (31))){
var inst_26057 = (state_26075[(2)]);
var state_26075__$1 = state_26075;
if(cljs.core.truth_(inst_26057)){
var statearr_26091_26147 = state_26075__$1;
(statearr_26091_26147[(1)] = (32));

} else {
var statearr_26092_26148 = state_26075__$1;
(statearr_26092_26148[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (32))){
var inst_26034 = (state_26075[(14)]);
var state_26075__$1 = state_26075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26075__$1,(35),out,inst_26034);
} else {
if((state_val_26076 === (33))){
var inst_26025 = (state_26075[(12)]);
var inst_26002 = inst_26025;
var state_26075__$1 = (function (){var statearr_26093 = state_26075;
(statearr_26093[(7)] = inst_26002);

return statearr_26093;
})();
var statearr_26094_26149 = state_26075__$1;
(statearr_26094_26149[(2)] = null);

(statearr_26094_26149[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (13))){
var inst_26002 = (state_26075[(7)]);
var inst_26009 = inst_26002.cljs$lang$protocol_mask$partition0$;
var inst_26010 = (inst_26009 & (64));
var inst_26011 = inst_26002.cljs$core$ISeq$;
var inst_26012 = (cljs.core.PROTOCOL_SENTINEL === inst_26011);
var inst_26013 = ((inst_26010) || (inst_26012));
var state_26075__$1 = state_26075;
if(cljs.core.truth_(inst_26013)){
var statearr_26095_26150 = state_26075__$1;
(statearr_26095_26150[(1)] = (16));

} else {
var statearr_26096_26151 = state_26075__$1;
(statearr_26096_26151[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (22))){
var inst_26035 = (state_26075[(11)]);
var inst_26034 = (state_26075[(14)]);
var inst_26033 = (state_26075[(2)]);
var inst_26034__$1 = cljs.core.nth.call(null,inst_26033,(0),null);
var inst_26035__$1 = cljs.core.nth.call(null,inst_26033,(1),null);
var inst_26036 = (inst_26034__$1 == null);
var inst_26037 = cljs.core._EQ_.call(null,inst_26035__$1,change);
var inst_26038 = ((inst_26036) || (inst_26037));
var state_26075__$1 = (function (){var statearr_26097 = state_26075;
(statearr_26097[(11)] = inst_26035__$1);

(statearr_26097[(14)] = inst_26034__$1);

return statearr_26097;
})();
if(cljs.core.truth_(inst_26038)){
var statearr_26098_26152 = state_26075__$1;
(statearr_26098_26152[(1)] = (23));

} else {
var statearr_26099_26153 = state_26075__$1;
(statearr_26099_26153[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (36))){
var inst_26025 = (state_26075[(12)]);
var inst_26002 = inst_26025;
var state_26075__$1 = (function (){var statearr_26100 = state_26075;
(statearr_26100[(7)] = inst_26002);

return statearr_26100;
})();
var statearr_26101_26154 = state_26075__$1;
(statearr_26101_26154[(2)] = null);

(statearr_26101_26154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (29))){
var inst_26049 = (state_26075[(9)]);
var state_26075__$1 = state_26075;
var statearr_26102_26155 = state_26075__$1;
(statearr_26102_26155[(2)] = inst_26049);

(statearr_26102_26155[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (6))){
var state_26075__$1 = state_26075;
var statearr_26103_26156 = state_26075__$1;
(statearr_26103_26156[(2)] = false);

(statearr_26103_26156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (28))){
var inst_26045 = (state_26075[(2)]);
var inst_26046 = calc_state.call(null);
var inst_26002 = inst_26046;
var state_26075__$1 = (function (){var statearr_26104 = state_26075;
(statearr_26104[(15)] = inst_26045);

(statearr_26104[(7)] = inst_26002);

return statearr_26104;
})();
var statearr_26105_26157 = state_26075__$1;
(statearr_26105_26157[(2)] = null);

(statearr_26105_26157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (25))){
var inst_26071 = (state_26075[(2)]);
var state_26075__$1 = state_26075;
var statearr_26106_26158 = state_26075__$1;
(statearr_26106_26158[(2)] = inst_26071);

(statearr_26106_26158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (34))){
var inst_26069 = (state_26075[(2)]);
var state_26075__$1 = state_26075;
var statearr_26107_26159 = state_26075__$1;
(statearr_26107_26159[(2)] = inst_26069);

(statearr_26107_26159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (17))){
var state_26075__$1 = state_26075;
var statearr_26108_26160 = state_26075__$1;
(statearr_26108_26160[(2)] = false);

(statearr_26108_26160[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (3))){
var state_26075__$1 = state_26075;
var statearr_26109_26161 = state_26075__$1;
(statearr_26109_26161[(2)] = false);

(statearr_26109_26161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (12))){
var inst_26073 = (state_26075[(2)]);
var state_26075__$1 = state_26075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26075__$1,inst_26073);
} else {
if((state_val_26076 === (2))){
var inst_25977 = (state_26075[(8)]);
var inst_25982 = inst_25977.cljs$lang$protocol_mask$partition0$;
var inst_25983 = (inst_25982 & (64));
var inst_25984 = inst_25977.cljs$core$ISeq$;
var inst_25985 = (cljs.core.PROTOCOL_SENTINEL === inst_25984);
var inst_25986 = ((inst_25983) || (inst_25985));
var state_26075__$1 = state_26075;
if(cljs.core.truth_(inst_25986)){
var statearr_26110_26162 = state_26075__$1;
(statearr_26110_26162[(1)] = (5));

} else {
var statearr_26111_26163 = state_26075__$1;
(statearr_26111_26163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (23))){
var inst_26034 = (state_26075[(14)]);
var inst_26040 = (inst_26034 == null);
var state_26075__$1 = state_26075;
if(cljs.core.truth_(inst_26040)){
var statearr_26112_26164 = state_26075__$1;
(statearr_26112_26164[(1)] = (26));

} else {
var statearr_26113_26165 = state_26075__$1;
(statearr_26113_26165[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (35))){
var inst_26060 = (state_26075[(2)]);
var state_26075__$1 = state_26075;
if(cljs.core.truth_(inst_26060)){
var statearr_26114_26166 = state_26075__$1;
(statearr_26114_26166[(1)] = (36));

} else {
var statearr_26115_26167 = state_26075__$1;
(statearr_26115_26167[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (19))){
var inst_26002 = (state_26075[(7)]);
var inst_26022 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26002);
var state_26075__$1 = state_26075;
var statearr_26116_26168 = state_26075__$1;
(statearr_26116_26168[(2)] = inst_26022);

(statearr_26116_26168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (11))){
var inst_26002 = (state_26075[(7)]);
var inst_26006 = (inst_26002 == null);
var inst_26007 = cljs.core.not.call(null,inst_26006);
var state_26075__$1 = state_26075;
if(inst_26007){
var statearr_26117_26169 = state_26075__$1;
(statearr_26117_26169[(1)] = (13));

} else {
var statearr_26118_26170 = state_26075__$1;
(statearr_26118_26170[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (9))){
var inst_25977 = (state_26075[(8)]);
var state_26075__$1 = state_26075;
var statearr_26119_26171 = state_26075__$1;
(statearr_26119_26171[(2)] = inst_25977);

(statearr_26119_26171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (5))){
var state_26075__$1 = state_26075;
var statearr_26120_26172 = state_26075__$1;
(statearr_26120_26172[(2)] = true);

(statearr_26120_26172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (14))){
var state_26075__$1 = state_26075;
var statearr_26121_26173 = state_26075__$1;
(statearr_26121_26173[(2)] = false);

(statearr_26121_26173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (26))){
var inst_26035 = (state_26075[(11)]);
var inst_26042 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26035);
var state_26075__$1 = state_26075;
var statearr_26122_26174 = state_26075__$1;
(statearr_26122_26174[(2)] = inst_26042);

(statearr_26122_26174[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (16))){
var state_26075__$1 = state_26075;
var statearr_26123_26175 = state_26075__$1;
(statearr_26123_26175[(2)] = true);

(statearr_26123_26175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (38))){
var inst_26065 = (state_26075[(2)]);
var state_26075__$1 = state_26075;
var statearr_26124_26176 = state_26075__$1;
(statearr_26124_26176[(2)] = inst_26065);

(statearr_26124_26176[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (30))){
var inst_26026 = (state_26075[(10)]);
var inst_26027 = (state_26075[(13)]);
var inst_26035 = (state_26075[(11)]);
var inst_26052 = cljs.core.empty_QMARK_.call(null,inst_26026);
var inst_26053 = inst_26027.call(null,inst_26035);
var inst_26054 = cljs.core.not.call(null,inst_26053);
var inst_26055 = ((inst_26052) && (inst_26054));
var state_26075__$1 = state_26075;
var statearr_26125_26177 = state_26075__$1;
(statearr_26125_26177[(2)] = inst_26055);

(statearr_26125_26177[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (10))){
var inst_25977 = (state_26075[(8)]);
var inst_25998 = (state_26075[(2)]);
var inst_25999 = cljs.core.get.call(null,inst_25998,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26000 = cljs.core.get.call(null,inst_25998,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26001 = cljs.core.get.call(null,inst_25998,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26002 = inst_25977;
var state_26075__$1 = (function (){var statearr_26126 = state_26075;
(statearr_26126[(16)] = inst_25999);

(statearr_26126[(17)] = inst_26001);

(statearr_26126[(7)] = inst_26002);

(statearr_26126[(18)] = inst_26000);

return statearr_26126;
})();
var statearr_26127_26178 = state_26075__$1;
(statearr_26127_26178[(2)] = null);

(statearr_26127_26178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (18))){
var inst_26017 = (state_26075[(2)]);
var state_26075__$1 = state_26075;
var statearr_26128_26179 = state_26075__$1;
(statearr_26128_26179[(2)] = inst_26017);

(statearr_26128_26179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (37))){
var state_26075__$1 = state_26075;
var statearr_26129_26180 = state_26075__$1;
(statearr_26129_26180[(2)] = null);

(statearr_26129_26180[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (8))){
var inst_25977 = (state_26075[(8)]);
var inst_25995 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25977);
var state_26075__$1 = state_26075;
var statearr_26130_26181 = state_26075__$1;
(statearr_26130_26181[(2)] = inst_25995);

(statearr_26130_26181[(1)] = (10));


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
});})(c__25076__auto___26135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24981__auto__,c__25076__auto___26135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24982__auto__ = null;
var cljs$core$async$mix_$_state_machine__24982__auto____0 = (function (){
var statearr_26131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26131[(0)] = cljs$core$async$mix_$_state_machine__24982__auto__);

(statearr_26131[(1)] = (1));

return statearr_26131;
});
var cljs$core$async$mix_$_state_machine__24982__auto____1 = (function (state_26075){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_26075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e26132){if((e26132 instanceof Object)){
var ex__24985__auto__ = e26132;
var statearr_26133_26182 = state_26075;
(statearr_26133_26182[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26183 = state_26075;
state_26075 = G__26183;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24982__auto__ = function(state_26075){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24982__auto____1.call(this,state_26075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24982__auto____0;
cljs$core$async$mix_$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24982__auto____1;
return cljs$core$async$mix_$_state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto___26135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25078__auto__ = (function (){var statearr_26134 = f__25077__auto__.call(null);
(statearr_26134[(6)] = c__25076__auto___26135);

return statearr_26134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto___26135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__26185 = arguments.length;
switch (G__26185) {
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
var G__26189 = arguments.length;
switch (G__26189) {
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
return (function (p1__26187_SHARP_){
if(cljs.core.truth_(p1__26187_SHARP_.call(null,topic))){
return p1__26187_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26187_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26190 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26190 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26191){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26191 = meta26191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26192,meta26191__$1){
var self__ = this;
var _26192__$1 = this;
return (new cljs.core.async.t_cljs$core$async26190(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26191__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26192){
var self__ = this;
var _26192__$1 = this;
return self__.meta26191;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26190.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26190.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26190.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26190.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26190.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26190.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26190.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26190.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26191","meta26191",-1142146912,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26190";

cljs.core.async.t_cljs$core$async26190.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26190");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26190.
 */
cljs.core.async.__GT_t_cljs$core$async26190 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26190(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26191){
return (new cljs.core.async.t_cljs$core$async26190(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26191));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26190(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25076__auto___26310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto___26310,mults,ensure_mult,p){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto___26310,mults,ensure_mult,p){
return (function (state_26264){
var state_val_26265 = (state_26264[(1)]);
if((state_val_26265 === (7))){
var inst_26260 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26266_26311 = state_26264__$1;
(statearr_26266_26311[(2)] = inst_26260);

(statearr_26266_26311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (20))){
var state_26264__$1 = state_26264;
var statearr_26267_26312 = state_26264__$1;
(statearr_26267_26312[(2)] = null);

(statearr_26267_26312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (1))){
var state_26264__$1 = state_26264;
var statearr_26268_26313 = state_26264__$1;
(statearr_26268_26313[(2)] = null);

(statearr_26268_26313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (24))){
var inst_26243 = (state_26264[(7)]);
var inst_26252 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26243);
var state_26264__$1 = state_26264;
var statearr_26269_26314 = state_26264__$1;
(statearr_26269_26314[(2)] = inst_26252);

(statearr_26269_26314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (4))){
var inst_26195 = (state_26264[(8)]);
var inst_26195__$1 = (state_26264[(2)]);
var inst_26196 = (inst_26195__$1 == null);
var state_26264__$1 = (function (){var statearr_26270 = state_26264;
(statearr_26270[(8)] = inst_26195__$1);

return statearr_26270;
})();
if(cljs.core.truth_(inst_26196)){
var statearr_26271_26315 = state_26264__$1;
(statearr_26271_26315[(1)] = (5));

} else {
var statearr_26272_26316 = state_26264__$1;
(statearr_26272_26316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (15))){
var inst_26237 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26273_26317 = state_26264__$1;
(statearr_26273_26317[(2)] = inst_26237);

(statearr_26273_26317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (21))){
var inst_26257 = (state_26264[(2)]);
var state_26264__$1 = (function (){var statearr_26274 = state_26264;
(statearr_26274[(9)] = inst_26257);

return statearr_26274;
})();
var statearr_26275_26318 = state_26264__$1;
(statearr_26275_26318[(2)] = null);

(statearr_26275_26318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (13))){
var inst_26219 = (state_26264[(10)]);
var inst_26221 = cljs.core.chunked_seq_QMARK_.call(null,inst_26219);
var state_26264__$1 = state_26264;
if(inst_26221){
var statearr_26276_26319 = state_26264__$1;
(statearr_26276_26319[(1)] = (16));

} else {
var statearr_26277_26320 = state_26264__$1;
(statearr_26277_26320[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (22))){
var inst_26249 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
if(cljs.core.truth_(inst_26249)){
var statearr_26278_26321 = state_26264__$1;
(statearr_26278_26321[(1)] = (23));

} else {
var statearr_26279_26322 = state_26264__$1;
(statearr_26279_26322[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (6))){
var inst_26245 = (state_26264[(11)]);
var inst_26195 = (state_26264[(8)]);
var inst_26243 = (state_26264[(7)]);
var inst_26243__$1 = topic_fn.call(null,inst_26195);
var inst_26244 = cljs.core.deref.call(null,mults);
var inst_26245__$1 = cljs.core.get.call(null,inst_26244,inst_26243__$1);
var state_26264__$1 = (function (){var statearr_26280 = state_26264;
(statearr_26280[(11)] = inst_26245__$1);

(statearr_26280[(7)] = inst_26243__$1);

return statearr_26280;
})();
if(cljs.core.truth_(inst_26245__$1)){
var statearr_26281_26323 = state_26264__$1;
(statearr_26281_26323[(1)] = (19));

} else {
var statearr_26282_26324 = state_26264__$1;
(statearr_26282_26324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (25))){
var inst_26254 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26283_26325 = state_26264__$1;
(statearr_26283_26325[(2)] = inst_26254);

(statearr_26283_26325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (17))){
var inst_26219 = (state_26264[(10)]);
var inst_26228 = cljs.core.first.call(null,inst_26219);
var inst_26229 = cljs.core.async.muxch_STAR_.call(null,inst_26228);
var inst_26230 = cljs.core.async.close_BANG_.call(null,inst_26229);
var inst_26231 = cljs.core.next.call(null,inst_26219);
var inst_26205 = inst_26231;
var inst_26206 = null;
var inst_26207 = (0);
var inst_26208 = (0);
var state_26264__$1 = (function (){var statearr_26284 = state_26264;
(statearr_26284[(12)] = inst_26207);

(statearr_26284[(13)] = inst_26230);

(statearr_26284[(14)] = inst_26205);

(statearr_26284[(15)] = inst_26208);

(statearr_26284[(16)] = inst_26206);

return statearr_26284;
})();
var statearr_26285_26326 = state_26264__$1;
(statearr_26285_26326[(2)] = null);

(statearr_26285_26326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (3))){
var inst_26262 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26264__$1,inst_26262);
} else {
if((state_val_26265 === (12))){
var inst_26239 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26286_26327 = state_26264__$1;
(statearr_26286_26327[(2)] = inst_26239);

(statearr_26286_26327[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (2))){
var state_26264__$1 = state_26264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26264__$1,(4),ch);
} else {
if((state_val_26265 === (23))){
var state_26264__$1 = state_26264;
var statearr_26287_26328 = state_26264__$1;
(statearr_26287_26328[(2)] = null);

(statearr_26287_26328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (19))){
var inst_26245 = (state_26264[(11)]);
var inst_26195 = (state_26264[(8)]);
var inst_26247 = cljs.core.async.muxch_STAR_.call(null,inst_26245);
var state_26264__$1 = state_26264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26264__$1,(22),inst_26247,inst_26195);
} else {
if((state_val_26265 === (11))){
var inst_26219 = (state_26264[(10)]);
var inst_26205 = (state_26264[(14)]);
var inst_26219__$1 = cljs.core.seq.call(null,inst_26205);
var state_26264__$1 = (function (){var statearr_26288 = state_26264;
(statearr_26288[(10)] = inst_26219__$1);

return statearr_26288;
})();
if(inst_26219__$1){
var statearr_26289_26329 = state_26264__$1;
(statearr_26289_26329[(1)] = (13));

} else {
var statearr_26290_26330 = state_26264__$1;
(statearr_26290_26330[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (9))){
var inst_26241 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26291_26331 = state_26264__$1;
(statearr_26291_26331[(2)] = inst_26241);

(statearr_26291_26331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (5))){
var inst_26202 = cljs.core.deref.call(null,mults);
var inst_26203 = cljs.core.vals.call(null,inst_26202);
var inst_26204 = cljs.core.seq.call(null,inst_26203);
var inst_26205 = inst_26204;
var inst_26206 = null;
var inst_26207 = (0);
var inst_26208 = (0);
var state_26264__$1 = (function (){var statearr_26292 = state_26264;
(statearr_26292[(12)] = inst_26207);

(statearr_26292[(14)] = inst_26205);

(statearr_26292[(15)] = inst_26208);

(statearr_26292[(16)] = inst_26206);

return statearr_26292;
})();
var statearr_26293_26332 = state_26264__$1;
(statearr_26293_26332[(2)] = null);

(statearr_26293_26332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (14))){
var state_26264__$1 = state_26264;
var statearr_26297_26333 = state_26264__$1;
(statearr_26297_26333[(2)] = null);

(statearr_26297_26333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (16))){
var inst_26219 = (state_26264[(10)]);
var inst_26223 = cljs.core.chunk_first.call(null,inst_26219);
var inst_26224 = cljs.core.chunk_rest.call(null,inst_26219);
var inst_26225 = cljs.core.count.call(null,inst_26223);
var inst_26205 = inst_26224;
var inst_26206 = inst_26223;
var inst_26207 = inst_26225;
var inst_26208 = (0);
var state_26264__$1 = (function (){var statearr_26298 = state_26264;
(statearr_26298[(12)] = inst_26207);

(statearr_26298[(14)] = inst_26205);

(statearr_26298[(15)] = inst_26208);

(statearr_26298[(16)] = inst_26206);

return statearr_26298;
})();
var statearr_26299_26334 = state_26264__$1;
(statearr_26299_26334[(2)] = null);

(statearr_26299_26334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (10))){
var inst_26207 = (state_26264[(12)]);
var inst_26205 = (state_26264[(14)]);
var inst_26208 = (state_26264[(15)]);
var inst_26206 = (state_26264[(16)]);
var inst_26213 = cljs.core._nth.call(null,inst_26206,inst_26208);
var inst_26214 = cljs.core.async.muxch_STAR_.call(null,inst_26213);
var inst_26215 = cljs.core.async.close_BANG_.call(null,inst_26214);
var inst_26216 = (inst_26208 + (1));
var tmp26294 = inst_26207;
var tmp26295 = inst_26205;
var tmp26296 = inst_26206;
var inst_26205__$1 = tmp26295;
var inst_26206__$1 = tmp26296;
var inst_26207__$1 = tmp26294;
var inst_26208__$1 = inst_26216;
var state_26264__$1 = (function (){var statearr_26300 = state_26264;
(statearr_26300[(12)] = inst_26207__$1);

(statearr_26300[(17)] = inst_26215);

(statearr_26300[(14)] = inst_26205__$1);

(statearr_26300[(15)] = inst_26208__$1);

(statearr_26300[(16)] = inst_26206__$1);

return statearr_26300;
})();
var statearr_26301_26335 = state_26264__$1;
(statearr_26301_26335[(2)] = null);

(statearr_26301_26335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (18))){
var inst_26234 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26302_26336 = state_26264__$1;
(statearr_26302_26336[(2)] = inst_26234);

(statearr_26302_26336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (8))){
var inst_26207 = (state_26264[(12)]);
var inst_26208 = (state_26264[(15)]);
var inst_26210 = (inst_26208 < inst_26207);
var inst_26211 = inst_26210;
var state_26264__$1 = state_26264;
if(cljs.core.truth_(inst_26211)){
var statearr_26303_26337 = state_26264__$1;
(statearr_26303_26337[(1)] = (10));

} else {
var statearr_26304_26338 = state_26264__$1;
(statearr_26304_26338[(1)] = (11));

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
});})(c__25076__auto___26310,mults,ensure_mult,p))
;
return ((function (switch__24981__auto__,c__25076__auto___26310,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24982__auto__ = null;
var cljs$core$async$state_machine__24982__auto____0 = (function (){
var statearr_26305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26305[(0)] = cljs$core$async$state_machine__24982__auto__);

(statearr_26305[(1)] = (1));

return statearr_26305;
});
var cljs$core$async$state_machine__24982__auto____1 = (function (state_26264){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_26264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e26306){if((e26306 instanceof Object)){
var ex__24985__auto__ = e26306;
var statearr_26307_26339 = state_26264;
(statearr_26307_26339[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26340 = state_26264;
state_26264 = G__26340;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$state_machine__24982__auto__ = function(state_26264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24982__auto____1.call(this,state_26264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24982__auto____0;
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24982__auto____1;
return cljs$core$async$state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto___26310,mults,ensure_mult,p))
})();
var state__25078__auto__ = (function (){var statearr_26308 = f__25077__auto__.call(null);
(statearr_26308[(6)] = c__25076__auto___26310);

return statearr_26308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto___26310,mults,ensure_mult,p))
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
var G__26342 = arguments.length;
switch (G__26342) {
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
var G__26345 = arguments.length;
switch (G__26345) {
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
var G__26348 = arguments.length;
switch (G__26348) {
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
var c__25076__auto___26415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto___26415,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto___26415,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26387){
var state_val_26388 = (state_26387[(1)]);
if((state_val_26388 === (7))){
var state_26387__$1 = state_26387;
var statearr_26389_26416 = state_26387__$1;
(statearr_26389_26416[(2)] = null);

(statearr_26389_26416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (1))){
var state_26387__$1 = state_26387;
var statearr_26390_26417 = state_26387__$1;
(statearr_26390_26417[(2)] = null);

(statearr_26390_26417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (4))){
var inst_26351 = (state_26387[(7)]);
var inst_26353 = (inst_26351 < cnt);
var state_26387__$1 = state_26387;
if(cljs.core.truth_(inst_26353)){
var statearr_26391_26418 = state_26387__$1;
(statearr_26391_26418[(1)] = (6));

} else {
var statearr_26392_26419 = state_26387__$1;
(statearr_26392_26419[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (15))){
var inst_26383 = (state_26387[(2)]);
var state_26387__$1 = state_26387;
var statearr_26393_26420 = state_26387__$1;
(statearr_26393_26420[(2)] = inst_26383);

(statearr_26393_26420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (13))){
var inst_26376 = cljs.core.async.close_BANG_.call(null,out);
var state_26387__$1 = state_26387;
var statearr_26394_26421 = state_26387__$1;
(statearr_26394_26421[(2)] = inst_26376);

(statearr_26394_26421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (6))){
var state_26387__$1 = state_26387;
var statearr_26395_26422 = state_26387__$1;
(statearr_26395_26422[(2)] = null);

(statearr_26395_26422[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (3))){
var inst_26385 = (state_26387[(2)]);
var state_26387__$1 = state_26387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26387__$1,inst_26385);
} else {
if((state_val_26388 === (12))){
var inst_26373 = (state_26387[(8)]);
var inst_26373__$1 = (state_26387[(2)]);
var inst_26374 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26373__$1);
var state_26387__$1 = (function (){var statearr_26396 = state_26387;
(statearr_26396[(8)] = inst_26373__$1);

return statearr_26396;
})();
if(cljs.core.truth_(inst_26374)){
var statearr_26397_26423 = state_26387__$1;
(statearr_26397_26423[(1)] = (13));

} else {
var statearr_26398_26424 = state_26387__$1;
(statearr_26398_26424[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (2))){
var inst_26350 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26351 = (0);
var state_26387__$1 = (function (){var statearr_26399 = state_26387;
(statearr_26399[(9)] = inst_26350);

(statearr_26399[(7)] = inst_26351);

return statearr_26399;
})();
var statearr_26400_26425 = state_26387__$1;
(statearr_26400_26425[(2)] = null);

(statearr_26400_26425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (11))){
var inst_26351 = (state_26387[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26387,(10),Object,null,(9));
var inst_26360 = chs__$1.call(null,inst_26351);
var inst_26361 = done.call(null,inst_26351);
var inst_26362 = cljs.core.async.take_BANG_.call(null,inst_26360,inst_26361);
var state_26387__$1 = state_26387;
var statearr_26401_26426 = state_26387__$1;
(statearr_26401_26426[(2)] = inst_26362);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26387__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (9))){
var inst_26351 = (state_26387[(7)]);
var inst_26364 = (state_26387[(2)]);
var inst_26365 = (inst_26351 + (1));
var inst_26351__$1 = inst_26365;
var state_26387__$1 = (function (){var statearr_26402 = state_26387;
(statearr_26402[(10)] = inst_26364);

(statearr_26402[(7)] = inst_26351__$1);

return statearr_26402;
})();
var statearr_26403_26427 = state_26387__$1;
(statearr_26403_26427[(2)] = null);

(statearr_26403_26427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (5))){
var inst_26371 = (state_26387[(2)]);
var state_26387__$1 = (function (){var statearr_26404 = state_26387;
(statearr_26404[(11)] = inst_26371);

return statearr_26404;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26387__$1,(12),dchan);
} else {
if((state_val_26388 === (14))){
var inst_26373 = (state_26387[(8)]);
var inst_26378 = cljs.core.apply.call(null,f,inst_26373);
var state_26387__$1 = state_26387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26387__$1,(16),out,inst_26378);
} else {
if((state_val_26388 === (16))){
var inst_26380 = (state_26387[(2)]);
var state_26387__$1 = (function (){var statearr_26405 = state_26387;
(statearr_26405[(12)] = inst_26380);

return statearr_26405;
})();
var statearr_26406_26428 = state_26387__$1;
(statearr_26406_26428[(2)] = null);

(statearr_26406_26428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (10))){
var inst_26355 = (state_26387[(2)]);
var inst_26356 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26387__$1 = (function (){var statearr_26407 = state_26387;
(statearr_26407[(13)] = inst_26355);

return statearr_26407;
})();
var statearr_26408_26429 = state_26387__$1;
(statearr_26408_26429[(2)] = inst_26356);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26387__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (8))){
var inst_26369 = (state_26387[(2)]);
var state_26387__$1 = state_26387;
var statearr_26409_26430 = state_26387__$1;
(statearr_26409_26430[(2)] = inst_26369);

(statearr_26409_26430[(1)] = (5));


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
});})(c__25076__auto___26415,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24981__auto__,c__25076__auto___26415,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24982__auto__ = null;
var cljs$core$async$state_machine__24982__auto____0 = (function (){
var statearr_26410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26410[(0)] = cljs$core$async$state_machine__24982__auto__);

(statearr_26410[(1)] = (1));

return statearr_26410;
});
var cljs$core$async$state_machine__24982__auto____1 = (function (state_26387){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_26387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e26411){if((e26411 instanceof Object)){
var ex__24985__auto__ = e26411;
var statearr_26412_26431 = state_26387;
(statearr_26412_26431[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26432 = state_26387;
state_26387 = G__26432;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$state_machine__24982__auto__ = function(state_26387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24982__auto____1.call(this,state_26387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24982__auto____0;
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24982__auto____1;
return cljs$core$async$state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto___26415,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25078__auto__ = (function (){var statearr_26413 = f__25077__auto__.call(null);
(statearr_26413[(6)] = c__25076__auto___26415);

return statearr_26413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto___26415,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__26435 = arguments.length;
switch (G__26435) {
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
var c__25076__auto___26489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto___26489,out){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto___26489,out){
return (function (state_26467){
var state_val_26468 = (state_26467[(1)]);
if((state_val_26468 === (7))){
var inst_26447 = (state_26467[(7)]);
var inst_26446 = (state_26467[(8)]);
var inst_26446__$1 = (state_26467[(2)]);
var inst_26447__$1 = cljs.core.nth.call(null,inst_26446__$1,(0),null);
var inst_26448 = cljs.core.nth.call(null,inst_26446__$1,(1),null);
var inst_26449 = (inst_26447__$1 == null);
var state_26467__$1 = (function (){var statearr_26469 = state_26467;
(statearr_26469[(7)] = inst_26447__$1);

(statearr_26469[(8)] = inst_26446__$1);

(statearr_26469[(9)] = inst_26448);

return statearr_26469;
})();
if(cljs.core.truth_(inst_26449)){
var statearr_26470_26490 = state_26467__$1;
(statearr_26470_26490[(1)] = (8));

} else {
var statearr_26471_26491 = state_26467__$1;
(statearr_26471_26491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26468 === (1))){
var inst_26436 = cljs.core.vec.call(null,chs);
var inst_26437 = inst_26436;
var state_26467__$1 = (function (){var statearr_26472 = state_26467;
(statearr_26472[(10)] = inst_26437);

return statearr_26472;
})();
var statearr_26473_26492 = state_26467__$1;
(statearr_26473_26492[(2)] = null);

(statearr_26473_26492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26468 === (4))){
var inst_26437 = (state_26467[(10)]);
var state_26467__$1 = state_26467;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26467__$1,(7),inst_26437);
} else {
if((state_val_26468 === (6))){
var inst_26463 = (state_26467[(2)]);
var state_26467__$1 = state_26467;
var statearr_26474_26493 = state_26467__$1;
(statearr_26474_26493[(2)] = inst_26463);

(statearr_26474_26493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26468 === (3))){
var inst_26465 = (state_26467[(2)]);
var state_26467__$1 = state_26467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26467__$1,inst_26465);
} else {
if((state_val_26468 === (2))){
var inst_26437 = (state_26467[(10)]);
var inst_26439 = cljs.core.count.call(null,inst_26437);
var inst_26440 = (inst_26439 > (0));
var state_26467__$1 = state_26467;
if(cljs.core.truth_(inst_26440)){
var statearr_26476_26494 = state_26467__$1;
(statearr_26476_26494[(1)] = (4));

} else {
var statearr_26477_26495 = state_26467__$1;
(statearr_26477_26495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26468 === (11))){
var inst_26437 = (state_26467[(10)]);
var inst_26456 = (state_26467[(2)]);
var tmp26475 = inst_26437;
var inst_26437__$1 = tmp26475;
var state_26467__$1 = (function (){var statearr_26478 = state_26467;
(statearr_26478[(10)] = inst_26437__$1);

(statearr_26478[(11)] = inst_26456);

return statearr_26478;
})();
var statearr_26479_26496 = state_26467__$1;
(statearr_26479_26496[(2)] = null);

(statearr_26479_26496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26468 === (9))){
var inst_26447 = (state_26467[(7)]);
var state_26467__$1 = state_26467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26467__$1,(11),out,inst_26447);
} else {
if((state_val_26468 === (5))){
var inst_26461 = cljs.core.async.close_BANG_.call(null,out);
var state_26467__$1 = state_26467;
var statearr_26480_26497 = state_26467__$1;
(statearr_26480_26497[(2)] = inst_26461);

(statearr_26480_26497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26468 === (10))){
var inst_26459 = (state_26467[(2)]);
var state_26467__$1 = state_26467;
var statearr_26481_26498 = state_26467__$1;
(statearr_26481_26498[(2)] = inst_26459);

(statearr_26481_26498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26468 === (8))){
var inst_26447 = (state_26467[(7)]);
var inst_26437 = (state_26467[(10)]);
var inst_26446 = (state_26467[(8)]);
var inst_26448 = (state_26467[(9)]);
var inst_26451 = (function (){var cs = inst_26437;
var vec__26442 = inst_26446;
var v = inst_26447;
var c = inst_26448;
return ((function (cs,vec__26442,v,c,inst_26447,inst_26437,inst_26446,inst_26448,state_val_26468,c__25076__auto___26489,out){
return (function (p1__26433_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26433_SHARP_);
});
;})(cs,vec__26442,v,c,inst_26447,inst_26437,inst_26446,inst_26448,state_val_26468,c__25076__auto___26489,out))
})();
var inst_26452 = cljs.core.filterv.call(null,inst_26451,inst_26437);
var inst_26437__$1 = inst_26452;
var state_26467__$1 = (function (){var statearr_26482 = state_26467;
(statearr_26482[(10)] = inst_26437__$1);

return statearr_26482;
})();
var statearr_26483_26499 = state_26467__$1;
(statearr_26483_26499[(2)] = null);

(statearr_26483_26499[(1)] = (2));


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
});})(c__25076__auto___26489,out))
;
return ((function (switch__24981__auto__,c__25076__auto___26489,out){
return (function() {
var cljs$core$async$state_machine__24982__auto__ = null;
var cljs$core$async$state_machine__24982__auto____0 = (function (){
var statearr_26484 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26484[(0)] = cljs$core$async$state_machine__24982__auto__);

(statearr_26484[(1)] = (1));

return statearr_26484;
});
var cljs$core$async$state_machine__24982__auto____1 = (function (state_26467){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_26467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e26485){if((e26485 instanceof Object)){
var ex__24985__auto__ = e26485;
var statearr_26486_26500 = state_26467;
(statearr_26486_26500[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26501 = state_26467;
state_26467 = G__26501;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$state_machine__24982__auto__ = function(state_26467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24982__auto____1.call(this,state_26467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24982__auto____0;
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24982__auto____1;
return cljs$core$async$state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto___26489,out))
})();
var state__25078__auto__ = (function (){var statearr_26487 = f__25077__auto__.call(null);
(statearr_26487[(6)] = c__25076__auto___26489);

return statearr_26487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto___26489,out))
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
var G__26503 = arguments.length;
switch (G__26503) {
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
var c__25076__auto___26548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto___26548,out){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto___26548,out){
return (function (state_26527){
var state_val_26528 = (state_26527[(1)]);
if((state_val_26528 === (7))){
var inst_26509 = (state_26527[(7)]);
var inst_26509__$1 = (state_26527[(2)]);
var inst_26510 = (inst_26509__$1 == null);
var inst_26511 = cljs.core.not.call(null,inst_26510);
var state_26527__$1 = (function (){var statearr_26529 = state_26527;
(statearr_26529[(7)] = inst_26509__$1);

return statearr_26529;
})();
if(inst_26511){
var statearr_26530_26549 = state_26527__$1;
(statearr_26530_26549[(1)] = (8));

} else {
var statearr_26531_26550 = state_26527__$1;
(statearr_26531_26550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (1))){
var inst_26504 = (0);
var state_26527__$1 = (function (){var statearr_26532 = state_26527;
(statearr_26532[(8)] = inst_26504);

return statearr_26532;
})();
var statearr_26533_26551 = state_26527__$1;
(statearr_26533_26551[(2)] = null);

(statearr_26533_26551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (4))){
var state_26527__$1 = state_26527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26527__$1,(7),ch);
} else {
if((state_val_26528 === (6))){
var inst_26522 = (state_26527[(2)]);
var state_26527__$1 = state_26527;
var statearr_26534_26552 = state_26527__$1;
(statearr_26534_26552[(2)] = inst_26522);

(statearr_26534_26552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (3))){
var inst_26524 = (state_26527[(2)]);
var inst_26525 = cljs.core.async.close_BANG_.call(null,out);
var state_26527__$1 = (function (){var statearr_26535 = state_26527;
(statearr_26535[(9)] = inst_26524);

return statearr_26535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26527__$1,inst_26525);
} else {
if((state_val_26528 === (2))){
var inst_26504 = (state_26527[(8)]);
var inst_26506 = (inst_26504 < n);
var state_26527__$1 = state_26527;
if(cljs.core.truth_(inst_26506)){
var statearr_26536_26553 = state_26527__$1;
(statearr_26536_26553[(1)] = (4));

} else {
var statearr_26537_26554 = state_26527__$1;
(statearr_26537_26554[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (11))){
var inst_26504 = (state_26527[(8)]);
var inst_26514 = (state_26527[(2)]);
var inst_26515 = (inst_26504 + (1));
var inst_26504__$1 = inst_26515;
var state_26527__$1 = (function (){var statearr_26538 = state_26527;
(statearr_26538[(8)] = inst_26504__$1);

(statearr_26538[(10)] = inst_26514);

return statearr_26538;
})();
var statearr_26539_26555 = state_26527__$1;
(statearr_26539_26555[(2)] = null);

(statearr_26539_26555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (9))){
var state_26527__$1 = state_26527;
var statearr_26540_26556 = state_26527__$1;
(statearr_26540_26556[(2)] = null);

(statearr_26540_26556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (5))){
var state_26527__$1 = state_26527;
var statearr_26541_26557 = state_26527__$1;
(statearr_26541_26557[(2)] = null);

(statearr_26541_26557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (10))){
var inst_26519 = (state_26527[(2)]);
var state_26527__$1 = state_26527;
var statearr_26542_26558 = state_26527__$1;
(statearr_26542_26558[(2)] = inst_26519);

(statearr_26542_26558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (8))){
var inst_26509 = (state_26527[(7)]);
var state_26527__$1 = state_26527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26527__$1,(11),out,inst_26509);
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
});})(c__25076__auto___26548,out))
;
return ((function (switch__24981__auto__,c__25076__auto___26548,out){
return (function() {
var cljs$core$async$state_machine__24982__auto__ = null;
var cljs$core$async$state_machine__24982__auto____0 = (function (){
var statearr_26543 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26543[(0)] = cljs$core$async$state_machine__24982__auto__);

(statearr_26543[(1)] = (1));

return statearr_26543;
});
var cljs$core$async$state_machine__24982__auto____1 = (function (state_26527){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_26527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e26544){if((e26544 instanceof Object)){
var ex__24985__auto__ = e26544;
var statearr_26545_26559 = state_26527;
(statearr_26545_26559[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26560 = state_26527;
state_26527 = G__26560;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$state_machine__24982__auto__ = function(state_26527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24982__auto____1.call(this,state_26527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24982__auto____0;
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24982__auto____1;
return cljs$core$async$state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto___26548,out))
})();
var state__25078__auto__ = (function (){var statearr_26546 = f__25077__auto__.call(null);
(statearr_26546[(6)] = c__25076__auto___26548);

return statearr_26546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto___26548,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26562 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26562 = (function (f,ch,meta26563){
this.f = f;
this.ch = ch;
this.meta26563 = meta26563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26564,meta26563__$1){
var self__ = this;
var _26564__$1 = this;
return (new cljs.core.async.t_cljs$core$async26562(self__.f,self__.ch,meta26563__$1));
});

cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26564){
var self__ = this;
var _26564__$1 = this;
return self__.meta26563;
});

cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26565 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26565 = (function (f,ch,meta26563,_,fn1,meta26566){
this.f = f;
this.ch = ch;
this.meta26563 = meta26563;
this._ = _;
this.fn1 = fn1;
this.meta26566 = meta26566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26567,meta26566__$1){
var self__ = this;
var _26567__$1 = this;
return (new cljs.core.async.t_cljs$core$async26565(self__.f,self__.ch,self__.meta26563,self__._,self__.fn1,meta26566__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26567){
var self__ = this;
var _26567__$1 = this;
return self__.meta26566;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26565.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26565.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26561_SHARP_){
return f1.call(null,(((p1__26561_SHARP_ == null))?null:self__.f.call(null,p1__26561_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26565.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26563","meta26563",1340269502,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26562","cljs.core.async/t_cljs$core$async26562",-1088136973,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26566","meta26566",1238251353,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26565.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26565";

cljs.core.async.t_cljs$core$async26565.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26565");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26565.
 */
cljs.core.async.__GT_t_cljs$core$async26565 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26565(f__$1,ch__$1,meta26563__$1,___$2,fn1__$1,meta26566){
return (new cljs.core.async.t_cljs$core$async26565(f__$1,ch__$1,meta26563__$1,___$2,fn1__$1,meta26566));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26565(self__.f,self__.ch,self__.meta26563,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26563","meta26563",1340269502,null)], null);
});

cljs.core.async.t_cljs$core$async26562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26562";

cljs.core.async.t_cljs$core$async26562.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26562");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26562.
 */
cljs.core.async.__GT_t_cljs$core$async26562 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26562(f__$1,ch__$1,meta26563){
return (new cljs.core.async.t_cljs$core$async26562(f__$1,ch__$1,meta26563));
});

}

return (new cljs.core.async.t_cljs$core$async26562(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26568 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26568 = (function (f,ch,meta26569){
this.f = f;
this.ch = ch;
this.meta26569 = meta26569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26570,meta26569__$1){
var self__ = this;
var _26570__$1 = this;
return (new cljs.core.async.t_cljs$core$async26568(self__.f,self__.ch,meta26569__$1));
});

cljs.core.async.t_cljs$core$async26568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26570){
var self__ = this;
var _26570__$1 = this;
return self__.meta26569;
});

cljs.core.async.t_cljs$core$async26568.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26568.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26568.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26568.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26568.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26568.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26569","meta26569",1480171014,null)], null);
});

cljs.core.async.t_cljs$core$async26568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26568";

cljs.core.async.t_cljs$core$async26568.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26568");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26568.
 */
cljs.core.async.__GT_t_cljs$core$async26568 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26568(f__$1,ch__$1,meta26569){
return (new cljs.core.async.t_cljs$core$async26568(f__$1,ch__$1,meta26569));
});

}

return (new cljs.core.async.t_cljs$core$async26568(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26571 = (function (p,ch,meta26572){
this.p = p;
this.ch = ch;
this.meta26572 = meta26572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26573,meta26572__$1){
var self__ = this;
var _26573__$1 = this;
return (new cljs.core.async.t_cljs$core$async26571(self__.p,self__.ch,meta26572__$1));
});

cljs.core.async.t_cljs$core$async26571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26573){
var self__ = this;
var _26573__$1 = this;
return self__.meta26572;
});

cljs.core.async.t_cljs$core$async26571.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26571.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26571.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26571.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26571.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26571.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26571.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26572","meta26572",1540984587,null)], null);
});

cljs.core.async.t_cljs$core$async26571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26571";

cljs.core.async.t_cljs$core$async26571.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26571");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26571.
 */
cljs.core.async.__GT_t_cljs$core$async26571 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26571(p__$1,ch__$1,meta26572){
return (new cljs.core.async.t_cljs$core$async26571(p__$1,ch__$1,meta26572));
});

}

return (new cljs.core.async.t_cljs$core$async26571(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26575 = arguments.length;
switch (G__26575) {
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
var c__25076__auto___26615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto___26615,out){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto___26615,out){
return (function (state_26596){
var state_val_26597 = (state_26596[(1)]);
if((state_val_26597 === (7))){
var inst_26592 = (state_26596[(2)]);
var state_26596__$1 = state_26596;
var statearr_26598_26616 = state_26596__$1;
(statearr_26598_26616[(2)] = inst_26592);

(statearr_26598_26616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (1))){
var state_26596__$1 = state_26596;
var statearr_26599_26617 = state_26596__$1;
(statearr_26599_26617[(2)] = null);

(statearr_26599_26617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (4))){
var inst_26578 = (state_26596[(7)]);
var inst_26578__$1 = (state_26596[(2)]);
var inst_26579 = (inst_26578__$1 == null);
var state_26596__$1 = (function (){var statearr_26600 = state_26596;
(statearr_26600[(7)] = inst_26578__$1);

return statearr_26600;
})();
if(cljs.core.truth_(inst_26579)){
var statearr_26601_26618 = state_26596__$1;
(statearr_26601_26618[(1)] = (5));

} else {
var statearr_26602_26619 = state_26596__$1;
(statearr_26602_26619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (6))){
var inst_26578 = (state_26596[(7)]);
var inst_26583 = p.call(null,inst_26578);
var state_26596__$1 = state_26596;
if(cljs.core.truth_(inst_26583)){
var statearr_26603_26620 = state_26596__$1;
(statearr_26603_26620[(1)] = (8));

} else {
var statearr_26604_26621 = state_26596__$1;
(statearr_26604_26621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (3))){
var inst_26594 = (state_26596[(2)]);
var state_26596__$1 = state_26596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26596__$1,inst_26594);
} else {
if((state_val_26597 === (2))){
var state_26596__$1 = state_26596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26596__$1,(4),ch);
} else {
if((state_val_26597 === (11))){
var inst_26586 = (state_26596[(2)]);
var state_26596__$1 = state_26596;
var statearr_26605_26622 = state_26596__$1;
(statearr_26605_26622[(2)] = inst_26586);

(statearr_26605_26622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (9))){
var state_26596__$1 = state_26596;
var statearr_26606_26623 = state_26596__$1;
(statearr_26606_26623[(2)] = null);

(statearr_26606_26623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (5))){
var inst_26581 = cljs.core.async.close_BANG_.call(null,out);
var state_26596__$1 = state_26596;
var statearr_26607_26624 = state_26596__$1;
(statearr_26607_26624[(2)] = inst_26581);

(statearr_26607_26624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (10))){
var inst_26589 = (state_26596[(2)]);
var state_26596__$1 = (function (){var statearr_26608 = state_26596;
(statearr_26608[(8)] = inst_26589);

return statearr_26608;
})();
var statearr_26609_26625 = state_26596__$1;
(statearr_26609_26625[(2)] = null);

(statearr_26609_26625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (8))){
var inst_26578 = (state_26596[(7)]);
var state_26596__$1 = state_26596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26596__$1,(11),out,inst_26578);
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
});})(c__25076__auto___26615,out))
;
return ((function (switch__24981__auto__,c__25076__auto___26615,out){
return (function() {
var cljs$core$async$state_machine__24982__auto__ = null;
var cljs$core$async$state_machine__24982__auto____0 = (function (){
var statearr_26610 = [null,null,null,null,null,null,null,null,null];
(statearr_26610[(0)] = cljs$core$async$state_machine__24982__auto__);

(statearr_26610[(1)] = (1));

return statearr_26610;
});
var cljs$core$async$state_machine__24982__auto____1 = (function (state_26596){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_26596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e26611){if((e26611 instanceof Object)){
var ex__24985__auto__ = e26611;
var statearr_26612_26626 = state_26596;
(statearr_26612_26626[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26627 = state_26596;
state_26596 = G__26627;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$state_machine__24982__auto__ = function(state_26596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24982__auto____1.call(this,state_26596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24982__auto____0;
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24982__auto____1;
return cljs$core$async$state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto___26615,out))
})();
var state__25078__auto__ = (function (){var statearr_26613 = f__25077__auto__.call(null);
(statearr_26613[(6)] = c__25076__auto___26615);

return statearr_26613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto___26615,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26629 = arguments.length;
switch (G__26629) {
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
var c__25076__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto__){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto__){
return (function (state_26692){
var state_val_26693 = (state_26692[(1)]);
if((state_val_26693 === (7))){
var inst_26688 = (state_26692[(2)]);
var state_26692__$1 = state_26692;
var statearr_26694_26732 = state_26692__$1;
(statearr_26694_26732[(2)] = inst_26688);

(statearr_26694_26732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (20))){
var inst_26658 = (state_26692[(7)]);
var inst_26669 = (state_26692[(2)]);
var inst_26670 = cljs.core.next.call(null,inst_26658);
var inst_26644 = inst_26670;
var inst_26645 = null;
var inst_26646 = (0);
var inst_26647 = (0);
var state_26692__$1 = (function (){var statearr_26695 = state_26692;
(statearr_26695[(8)] = inst_26644);

(statearr_26695[(9)] = inst_26647);

(statearr_26695[(10)] = inst_26669);

(statearr_26695[(11)] = inst_26645);

(statearr_26695[(12)] = inst_26646);

return statearr_26695;
})();
var statearr_26696_26733 = state_26692__$1;
(statearr_26696_26733[(2)] = null);

(statearr_26696_26733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (1))){
var state_26692__$1 = state_26692;
var statearr_26697_26734 = state_26692__$1;
(statearr_26697_26734[(2)] = null);

(statearr_26697_26734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (4))){
var inst_26633 = (state_26692[(13)]);
var inst_26633__$1 = (state_26692[(2)]);
var inst_26634 = (inst_26633__$1 == null);
var state_26692__$1 = (function (){var statearr_26698 = state_26692;
(statearr_26698[(13)] = inst_26633__$1);

return statearr_26698;
})();
if(cljs.core.truth_(inst_26634)){
var statearr_26699_26735 = state_26692__$1;
(statearr_26699_26735[(1)] = (5));

} else {
var statearr_26700_26736 = state_26692__$1;
(statearr_26700_26736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (15))){
var state_26692__$1 = state_26692;
var statearr_26704_26737 = state_26692__$1;
(statearr_26704_26737[(2)] = null);

(statearr_26704_26737[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (21))){
var state_26692__$1 = state_26692;
var statearr_26705_26738 = state_26692__$1;
(statearr_26705_26738[(2)] = null);

(statearr_26705_26738[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (13))){
var inst_26644 = (state_26692[(8)]);
var inst_26647 = (state_26692[(9)]);
var inst_26645 = (state_26692[(11)]);
var inst_26646 = (state_26692[(12)]);
var inst_26654 = (state_26692[(2)]);
var inst_26655 = (inst_26647 + (1));
var tmp26701 = inst_26644;
var tmp26702 = inst_26645;
var tmp26703 = inst_26646;
var inst_26644__$1 = tmp26701;
var inst_26645__$1 = tmp26702;
var inst_26646__$1 = tmp26703;
var inst_26647__$1 = inst_26655;
var state_26692__$1 = (function (){var statearr_26706 = state_26692;
(statearr_26706[(8)] = inst_26644__$1);

(statearr_26706[(9)] = inst_26647__$1);

(statearr_26706[(14)] = inst_26654);

(statearr_26706[(11)] = inst_26645__$1);

(statearr_26706[(12)] = inst_26646__$1);

return statearr_26706;
})();
var statearr_26707_26739 = state_26692__$1;
(statearr_26707_26739[(2)] = null);

(statearr_26707_26739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (22))){
var state_26692__$1 = state_26692;
var statearr_26708_26740 = state_26692__$1;
(statearr_26708_26740[(2)] = null);

(statearr_26708_26740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (6))){
var inst_26633 = (state_26692[(13)]);
var inst_26642 = f.call(null,inst_26633);
var inst_26643 = cljs.core.seq.call(null,inst_26642);
var inst_26644 = inst_26643;
var inst_26645 = null;
var inst_26646 = (0);
var inst_26647 = (0);
var state_26692__$1 = (function (){var statearr_26709 = state_26692;
(statearr_26709[(8)] = inst_26644);

(statearr_26709[(9)] = inst_26647);

(statearr_26709[(11)] = inst_26645);

(statearr_26709[(12)] = inst_26646);

return statearr_26709;
})();
var statearr_26710_26741 = state_26692__$1;
(statearr_26710_26741[(2)] = null);

(statearr_26710_26741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (17))){
var inst_26658 = (state_26692[(7)]);
var inst_26662 = cljs.core.chunk_first.call(null,inst_26658);
var inst_26663 = cljs.core.chunk_rest.call(null,inst_26658);
var inst_26664 = cljs.core.count.call(null,inst_26662);
var inst_26644 = inst_26663;
var inst_26645 = inst_26662;
var inst_26646 = inst_26664;
var inst_26647 = (0);
var state_26692__$1 = (function (){var statearr_26711 = state_26692;
(statearr_26711[(8)] = inst_26644);

(statearr_26711[(9)] = inst_26647);

(statearr_26711[(11)] = inst_26645);

(statearr_26711[(12)] = inst_26646);

return statearr_26711;
})();
var statearr_26712_26742 = state_26692__$1;
(statearr_26712_26742[(2)] = null);

(statearr_26712_26742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (3))){
var inst_26690 = (state_26692[(2)]);
var state_26692__$1 = state_26692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26692__$1,inst_26690);
} else {
if((state_val_26693 === (12))){
var inst_26678 = (state_26692[(2)]);
var state_26692__$1 = state_26692;
var statearr_26713_26743 = state_26692__$1;
(statearr_26713_26743[(2)] = inst_26678);

(statearr_26713_26743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (2))){
var state_26692__$1 = state_26692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26692__$1,(4),in$);
} else {
if((state_val_26693 === (23))){
var inst_26686 = (state_26692[(2)]);
var state_26692__$1 = state_26692;
var statearr_26714_26744 = state_26692__$1;
(statearr_26714_26744[(2)] = inst_26686);

(statearr_26714_26744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (19))){
var inst_26673 = (state_26692[(2)]);
var state_26692__$1 = state_26692;
var statearr_26715_26745 = state_26692__$1;
(statearr_26715_26745[(2)] = inst_26673);

(statearr_26715_26745[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (11))){
var inst_26644 = (state_26692[(8)]);
var inst_26658 = (state_26692[(7)]);
var inst_26658__$1 = cljs.core.seq.call(null,inst_26644);
var state_26692__$1 = (function (){var statearr_26716 = state_26692;
(statearr_26716[(7)] = inst_26658__$1);

return statearr_26716;
})();
if(inst_26658__$1){
var statearr_26717_26746 = state_26692__$1;
(statearr_26717_26746[(1)] = (14));

} else {
var statearr_26718_26747 = state_26692__$1;
(statearr_26718_26747[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (9))){
var inst_26680 = (state_26692[(2)]);
var inst_26681 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26692__$1 = (function (){var statearr_26719 = state_26692;
(statearr_26719[(15)] = inst_26680);

return statearr_26719;
})();
if(cljs.core.truth_(inst_26681)){
var statearr_26720_26748 = state_26692__$1;
(statearr_26720_26748[(1)] = (21));

} else {
var statearr_26721_26749 = state_26692__$1;
(statearr_26721_26749[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (5))){
var inst_26636 = cljs.core.async.close_BANG_.call(null,out);
var state_26692__$1 = state_26692;
var statearr_26722_26750 = state_26692__$1;
(statearr_26722_26750[(2)] = inst_26636);

(statearr_26722_26750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (14))){
var inst_26658 = (state_26692[(7)]);
var inst_26660 = cljs.core.chunked_seq_QMARK_.call(null,inst_26658);
var state_26692__$1 = state_26692;
if(inst_26660){
var statearr_26723_26751 = state_26692__$1;
(statearr_26723_26751[(1)] = (17));

} else {
var statearr_26724_26752 = state_26692__$1;
(statearr_26724_26752[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (16))){
var inst_26676 = (state_26692[(2)]);
var state_26692__$1 = state_26692;
var statearr_26725_26753 = state_26692__$1;
(statearr_26725_26753[(2)] = inst_26676);

(statearr_26725_26753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (10))){
var inst_26647 = (state_26692[(9)]);
var inst_26645 = (state_26692[(11)]);
var inst_26652 = cljs.core._nth.call(null,inst_26645,inst_26647);
var state_26692__$1 = state_26692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26692__$1,(13),out,inst_26652);
} else {
if((state_val_26693 === (18))){
var inst_26658 = (state_26692[(7)]);
var inst_26667 = cljs.core.first.call(null,inst_26658);
var state_26692__$1 = state_26692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26692__$1,(20),out,inst_26667);
} else {
if((state_val_26693 === (8))){
var inst_26647 = (state_26692[(9)]);
var inst_26646 = (state_26692[(12)]);
var inst_26649 = (inst_26647 < inst_26646);
var inst_26650 = inst_26649;
var state_26692__$1 = state_26692;
if(cljs.core.truth_(inst_26650)){
var statearr_26726_26754 = state_26692__$1;
(statearr_26726_26754[(1)] = (10));

} else {
var statearr_26727_26755 = state_26692__$1;
(statearr_26727_26755[(1)] = (11));

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
});})(c__25076__auto__))
;
return ((function (switch__24981__auto__,c__25076__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24982__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24982__auto____0 = (function (){
var statearr_26728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26728[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24982__auto__);

(statearr_26728[(1)] = (1));

return statearr_26728;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24982__auto____1 = (function (state_26692){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_26692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e26729){if((e26729 instanceof Object)){
var ex__24985__auto__ = e26729;
var statearr_26730_26756 = state_26692;
(statearr_26730_26756[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26757 = state_26692;
state_26692 = G__26757;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24982__auto__ = function(state_26692){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24982__auto____1.call(this,state_26692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24982__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24982__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto__))
})();
var state__25078__auto__ = (function (){var statearr_26731 = f__25077__auto__.call(null);
(statearr_26731[(6)] = c__25076__auto__);

return statearr_26731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto__))
);

return c__25076__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26759 = arguments.length;
switch (G__26759) {
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
var G__26762 = arguments.length;
switch (G__26762) {
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
var G__26765 = arguments.length;
switch (G__26765) {
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
var c__25076__auto___26812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto___26812,out){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto___26812,out){
return (function (state_26789){
var state_val_26790 = (state_26789[(1)]);
if((state_val_26790 === (7))){
var inst_26784 = (state_26789[(2)]);
var state_26789__$1 = state_26789;
var statearr_26791_26813 = state_26789__$1;
(statearr_26791_26813[(2)] = inst_26784);

(statearr_26791_26813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (1))){
var inst_26766 = null;
var state_26789__$1 = (function (){var statearr_26792 = state_26789;
(statearr_26792[(7)] = inst_26766);

return statearr_26792;
})();
var statearr_26793_26814 = state_26789__$1;
(statearr_26793_26814[(2)] = null);

(statearr_26793_26814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (4))){
var inst_26769 = (state_26789[(8)]);
var inst_26769__$1 = (state_26789[(2)]);
var inst_26770 = (inst_26769__$1 == null);
var inst_26771 = cljs.core.not.call(null,inst_26770);
var state_26789__$1 = (function (){var statearr_26794 = state_26789;
(statearr_26794[(8)] = inst_26769__$1);

return statearr_26794;
})();
if(inst_26771){
var statearr_26795_26815 = state_26789__$1;
(statearr_26795_26815[(1)] = (5));

} else {
var statearr_26796_26816 = state_26789__$1;
(statearr_26796_26816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (6))){
var state_26789__$1 = state_26789;
var statearr_26797_26817 = state_26789__$1;
(statearr_26797_26817[(2)] = null);

(statearr_26797_26817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (3))){
var inst_26786 = (state_26789[(2)]);
var inst_26787 = cljs.core.async.close_BANG_.call(null,out);
var state_26789__$1 = (function (){var statearr_26798 = state_26789;
(statearr_26798[(9)] = inst_26786);

return statearr_26798;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26789__$1,inst_26787);
} else {
if((state_val_26790 === (2))){
var state_26789__$1 = state_26789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26789__$1,(4),ch);
} else {
if((state_val_26790 === (11))){
var inst_26769 = (state_26789[(8)]);
var inst_26778 = (state_26789[(2)]);
var inst_26766 = inst_26769;
var state_26789__$1 = (function (){var statearr_26799 = state_26789;
(statearr_26799[(7)] = inst_26766);

(statearr_26799[(10)] = inst_26778);

return statearr_26799;
})();
var statearr_26800_26818 = state_26789__$1;
(statearr_26800_26818[(2)] = null);

(statearr_26800_26818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (9))){
var inst_26769 = (state_26789[(8)]);
var state_26789__$1 = state_26789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26789__$1,(11),out,inst_26769);
} else {
if((state_val_26790 === (5))){
var inst_26766 = (state_26789[(7)]);
var inst_26769 = (state_26789[(8)]);
var inst_26773 = cljs.core._EQ_.call(null,inst_26769,inst_26766);
var state_26789__$1 = state_26789;
if(inst_26773){
var statearr_26802_26819 = state_26789__$1;
(statearr_26802_26819[(1)] = (8));

} else {
var statearr_26803_26820 = state_26789__$1;
(statearr_26803_26820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (10))){
var inst_26781 = (state_26789[(2)]);
var state_26789__$1 = state_26789;
var statearr_26804_26821 = state_26789__$1;
(statearr_26804_26821[(2)] = inst_26781);

(statearr_26804_26821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (8))){
var inst_26766 = (state_26789[(7)]);
var tmp26801 = inst_26766;
var inst_26766__$1 = tmp26801;
var state_26789__$1 = (function (){var statearr_26805 = state_26789;
(statearr_26805[(7)] = inst_26766__$1);

return statearr_26805;
})();
var statearr_26806_26822 = state_26789__$1;
(statearr_26806_26822[(2)] = null);

(statearr_26806_26822[(1)] = (2));


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
});})(c__25076__auto___26812,out))
;
return ((function (switch__24981__auto__,c__25076__auto___26812,out){
return (function() {
var cljs$core$async$state_machine__24982__auto__ = null;
var cljs$core$async$state_machine__24982__auto____0 = (function (){
var statearr_26807 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26807[(0)] = cljs$core$async$state_machine__24982__auto__);

(statearr_26807[(1)] = (1));

return statearr_26807;
});
var cljs$core$async$state_machine__24982__auto____1 = (function (state_26789){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_26789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e26808){if((e26808 instanceof Object)){
var ex__24985__auto__ = e26808;
var statearr_26809_26823 = state_26789;
(statearr_26809_26823[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26824 = state_26789;
state_26789 = G__26824;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$state_machine__24982__auto__ = function(state_26789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24982__auto____1.call(this,state_26789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24982__auto____0;
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24982__auto____1;
return cljs$core$async$state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto___26812,out))
})();
var state__25078__auto__ = (function (){var statearr_26810 = f__25077__auto__.call(null);
(statearr_26810[(6)] = c__25076__auto___26812);

return statearr_26810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto___26812,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26826 = arguments.length;
switch (G__26826) {
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
var c__25076__auto___26892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto___26892,out){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto___26892,out){
return (function (state_26864){
var state_val_26865 = (state_26864[(1)]);
if((state_val_26865 === (7))){
var inst_26860 = (state_26864[(2)]);
var state_26864__$1 = state_26864;
var statearr_26866_26893 = state_26864__$1;
(statearr_26866_26893[(2)] = inst_26860);

(statearr_26866_26893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (1))){
var inst_26827 = (new Array(n));
var inst_26828 = inst_26827;
var inst_26829 = (0);
var state_26864__$1 = (function (){var statearr_26867 = state_26864;
(statearr_26867[(7)] = inst_26829);

(statearr_26867[(8)] = inst_26828);

return statearr_26867;
})();
var statearr_26868_26894 = state_26864__$1;
(statearr_26868_26894[(2)] = null);

(statearr_26868_26894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (4))){
var inst_26832 = (state_26864[(9)]);
var inst_26832__$1 = (state_26864[(2)]);
var inst_26833 = (inst_26832__$1 == null);
var inst_26834 = cljs.core.not.call(null,inst_26833);
var state_26864__$1 = (function (){var statearr_26869 = state_26864;
(statearr_26869[(9)] = inst_26832__$1);

return statearr_26869;
})();
if(inst_26834){
var statearr_26870_26895 = state_26864__$1;
(statearr_26870_26895[(1)] = (5));

} else {
var statearr_26871_26896 = state_26864__$1;
(statearr_26871_26896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (15))){
var inst_26854 = (state_26864[(2)]);
var state_26864__$1 = state_26864;
var statearr_26872_26897 = state_26864__$1;
(statearr_26872_26897[(2)] = inst_26854);

(statearr_26872_26897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (13))){
var state_26864__$1 = state_26864;
var statearr_26873_26898 = state_26864__$1;
(statearr_26873_26898[(2)] = null);

(statearr_26873_26898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (6))){
var inst_26829 = (state_26864[(7)]);
var inst_26850 = (inst_26829 > (0));
var state_26864__$1 = state_26864;
if(cljs.core.truth_(inst_26850)){
var statearr_26874_26899 = state_26864__$1;
(statearr_26874_26899[(1)] = (12));

} else {
var statearr_26875_26900 = state_26864__$1;
(statearr_26875_26900[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (3))){
var inst_26862 = (state_26864[(2)]);
var state_26864__$1 = state_26864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26864__$1,inst_26862);
} else {
if((state_val_26865 === (12))){
var inst_26828 = (state_26864[(8)]);
var inst_26852 = cljs.core.vec.call(null,inst_26828);
var state_26864__$1 = state_26864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26864__$1,(15),out,inst_26852);
} else {
if((state_val_26865 === (2))){
var state_26864__$1 = state_26864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26864__$1,(4),ch);
} else {
if((state_val_26865 === (11))){
var inst_26844 = (state_26864[(2)]);
var inst_26845 = (new Array(n));
var inst_26828 = inst_26845;
var inst_26829 = (0);
var state_26864__$1 = (function (){var statearr_26876 = state_26864;
(statearr_26876[(7)] = inst_26829);

(statearr_26876[(10)] = inst_26844);

(statearr_26876[(8)] = inst_26828);

return statearr_26876;
})();
var statearr_26877_26901 = state_26864__$1;
(statearr_26877_26901[(2)] = null);

(statearr_26877_26901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (9))){
var inst_26828 = (state_26864[(8)]);
var inst_26842 = cljs.core.vec.call(null,inst_26828);
var state_26864__$1 = state_26864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26864__$1,(11),out,inst_26842);
} else {
if((state_val_26865 === (5))){
var inst_26832 = (state_26864[(9)]);
var inst_26829 = (state_26864[(7)]);
var inst_26837 = (state_26864[(11)]);
var inst_26828 = (state_26864[(8)]);
var inst_26836 = (inst_26828[inst_26829] = inst_26832);
var inst_26837__$1 = (inst_26829 + (1));
var inst_26838 = (inst_26837__$1 < n);
var state_26864__$1 = (function (){var statearr_26878 = state_26864;
(statearr_26878[(12)] = inst_26836);

(statearr_26878[(11)] = inst_26837__$1);

return statearr_26878;
})();
if(cljs.core.truth_(inst_26838)){
var statearr_26879_26902 = state_26864__$1;
(statearr_26879_26902[(1)] = (8));

} else {
var statearr_26880_26903 = state_26864__$1;
(statearr_26880_26903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (14))){
var inst_26857 = (state_26864[(2)]);
var inst_26858 = cljs.core.async.close_BANG_.call(null,out);
var state_26864__$1 = (function (){var statearr_26882 = state_26864;
(statearr_26882[(13)] = inst_26857);

return statearr_26882;
})();
var statearr_26883_26904 = state_26864__$1;
(statearr_26883_26904[(2)] = inst_26858);

(statearr_26883_26904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (10))){
var inst_26848 = (state_26864[(2)]);
var state_26864__$1 = state_26864;
var statearr_26884_26905 = state_26864__$1;
(statearr_26884_26905[(2)] = inst_26848);

(statearr_26884_26905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (8))){
var inst_26837 = (state_26864[(11)]);
var inst_26828 = (state_26864[(8)]);
var tmp26881 = inst_26828;
var inst_26828__$1 = tmp26881;
var inst_26829 = inst_26837;
var state_26864__$1 = (function (){var statearr_26885 = state_26864;
(statearr_26885[(7)] = inst_26829);

(statearr_26885[(8)] = inst_26828__$1);

return statearr_26885;
})();
var statearr_26886_26906 = state_26864__$1;
(statearr_26886_26906[(2)] = null);

(statearr_26886_26906[(1)] = (2));


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
});})(c__25076__auto___26892,out))
;
return ((function (switch__24981__auto__,c__25076__auto___26892,out){
return (function() {
var cljs$core$async$state_machine__24982__auto__ = null;
var cljs$core$async$state_machine__24982__auto____0 = (function (){
var statearr_26887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26887[(0)] = cljs$core$async$state_machine__24982__auto__);

(statearr_26887[(1)] = (1));

return statearr_26887;
});
var cljs$core$async$state_machine__24982__auto____1 = (function (state_26864){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_26864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e26888){if((e26888 instanceof Object)){
var ex__24985__auto__ = e26888;
var statearr_26889_26907 = state_26864;
(statearr_26889_26907[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26908 = state_26864;
state_26864 = G__26908;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$state_machine__24982__auto__ = function(state_26864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24982__auto____1.call(this,state_26864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24982__auto____0;
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24982__auto____1;
return cljs$core$async$state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto___26892,out))
})();
var state__25078__auto__ = (function (){var statearr_26890 = f__25077__auto__.call(null);
(statearr_26890[(6)] = c__25076__auto___26892);

return statearr_26890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto___26892,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26910 = arguments.length;
switch (G__26910) {
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
var c__25076__auto___26980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25076__auto___26980,out){
return (function (){
var f__25077__auto__ = (function (){var switch__24981__auto__ = ((function (c__25076__auto___26980,out){
return (function (state_26952){
var state_val_26953 = (state_26952[(1)]);
if((state_val_26953 === (7))){
var inst_26948 = (state_26952[(2)]);
var state_26952__$1 = state_26952;
var statearr_26954_26981 = state_26952__$1;
(statearr_26954_26981[(2)] = inst_26948);

(statearr_26954_26981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (1))){
var inst_26911 = [];
var inst_26912 = inst_26911;
var inst_26913 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26952__$1 = (function (){var statearr_26955 = state_26952;
(statearr_26955[(7)] = inst_26912);

(statearr_26955[(8)] = inst_26913);

return statearr_26955;
})();
var statearr_26956_26982 = state_26952__$1;
(statearr_26956_26982[(2)] = null);

(statearr_26956_26982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (4))){
var inst_26916 = (state_26952[(9)]);
var inst_26916__$1 = (state_26952[(2)]);
var inst_26917 = (inst_26916__$1 == null);
var inst_26918 = cljs.core.not.call(null,inst_26917);
var state_26952__$1 = (function (){var statearr_26957 = state_26952;
(statearr_26957[(9)] = inst_26916__$1);

return statearr_26957;
})();
if(inst_26918){
var statearr_26958_26983 = state_26952__$1;
(statearr_26958_26983[(1)] = (5));

} else {
var statearr_26959_26984 = state_26952__$1;
(statearr_26959_26984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (15))){
var inst_26942 = (state_26952[(2)]);
var state_26952__$1 = state_26952;
var statearr_26960_26985 = state_26952__$1;
(statearr_26960_26985[(2)] = inst_26942);

(statearr_26960_26985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (13))){
var state_26952__$1 = state_26952;
var statearr_26961_26986 = state_26952__$1;
(statearr_26961_26986[(2)] = null);

(statearr_26961_26986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (6))){
var inst_26912 = (state_26952[(7)]);
var inst_26937 = inst_26912.length;
var inst_26938 = (inst_26937 > (0));
var state_26952__$1 = state_26952;
if(cljs.core.truth_(inst_26938)){
var statearr_26962_26987 = state_26952__$1;
(statearr_26962_26987[(1)] = (12));

} else {
var statearr_26963_26988 = state_26952__$1;
(statearr_26963_26988[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (3))){
var inst_26950 = (state_26952[(2)]);
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26952__$1,inst_26950);
} else {
if((state_val_26953 === (12))){
var inst_26912 = (state_26952[(7)]);
var inst_26940 = cljs.core.vec.call(null,inst_26912);
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26952__$1,(15),out,inst_26940);
} else {
if((state_val_26953 === (2))){
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26952__$1,(4),ch);
} else {
if((state_val_26953 === (11))){
var inst_26916 = (state_26952[(9)]);
var inst_26920 = (state_26952[(10)]);
var inst_26930 = (state_26952[(2)]);
var inst_26931 = [];
var inst_26932 = inst_26931.push(inst_26916);
var inst_26912 = inst_26931;
var inst_26913 = inst_26920;
var state_26952__$1 = (function (){var statearr_26964 = state_26952;
(statearr_26964[(7)] = inst_26912);

(statearr_26964[(8)] = inst_26913);

(statearr_26964[(11)] = inst_26930);

(statearr_26964[(12)] = inst_26932);

return statearr_26964;
})();
var statearr_26965_26989 = state_26952__$1;
(statearr_26965_26989[(2)] = null);

(statearr_26965_26989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (9))){
var inst_26912 = (state_26952[(7)]);
var inst_26928 = cljs.core.vec.call(null,inst_26912);
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26952__$1,(11),out,inst_26928);
} else {
if((state_val_26953 === (5))){
var inst_26916 = (state_26952[(9)]);
var inst_26920 = (state_26952[(10)]);
var inst_26913 = (state_26952[(8)]);
var inst_26920__$1 = f.call(null,inst_26916);
var inst_26921 = cljs.core._EQ_.call(null,inst_26920__$1,inst_26913);
var inst_26922 = cljs.core.keyword_identical_QMARK_.call(null,inst_26913,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26923 = ((inst_26921) || (inst_26922));
var state_26952__$1 = (function (){var statearr_26966 = state_26952;
(statearr_26966[(10)] = inst_26920__$1);

return statearr_26966;
})();
if(cljs.core.truth_(inst_26923)){
var statearr_26967_26990 = state_26952__$1;
(statearr_26967_26990[(1)] = (8));

} else {
var statearr_26968_26991 = state_26952__$1;
(statearr_26968_26991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (14))){
var inst_26945 = (state_26952[(2)]);
var inst_26946 = cljs.core.async.close_BANG_.call(null,out);
var state_26952__$1 = (function (){var statearr_26970 = state_26952;
(statearr_26970[(13)] = inst_26945);

return statearr_26970;
})();
var statearr_26971_26992 = state_26952__$1;
(statearr_26971_26992[(2)] = inst_26946);

(statearr_26971_26992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (10))){
var inst_26935 = (state_26952[(2)]);
var state_26952__$1 = state_26952;
var statearr_26972_26993 = state_26952__$1;
(statearr_26972_26993[(2)] = inst_26935);

(statearr_26972_26993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (8))){
var inst_26916 = (state_26952[(9)]);
var inst_26920 = (state_26952[(10)]);
var inst_26912 = (state_26952[(7)]);
var inst_26925 = inst_26912.push(inst_26916);
var tmp26969 = inst_26912;
var inst_26912__$1 = tmp26969;
var inst_26913 = inst_26920;
var state_26952__$1 = (function (){var statearr_26973 = state_26952;
(statearr_26973[(14)] = inst_26925);

(statearr_26973[(7)] = inst_26912__$1);

(statearr_26973[(8)] = inst_26913);

return statearr_26973;
})();
var statearr_26974_26994 = state_26952__$1;
(statearr_26974_26994[(2)] = null);

(statearr_26974_26994[(1)] = (2));


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
});})(c__25076__auto___26980,out))
;
return ((function (switch__24981__auto__,c__25076__auto___26980,out){
return (function() {
var cljs$core$async$state_machine__24982__auto__ = null;
var cljs$core$async$state_machine__24982__auto____0 = (function (){
var statearr_26975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26975[(0)] = cljs$core$async$state_machine__24982__auto__);

(statearr_26975[(1)] = (1));

return statearr_26975;
});
var cljs$core$async$state_machine__24982__auto____1 = (function (state_26952){
while(true){
var ret_value__24983__auto__ = (function (){try{while(true){
var result__24984__auto__ = switch__24981__auto__.call(null,state_26952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24984__auto__;
}
break;
}
}catch (e26976){if((e26976 instanceof Object)){
var ex__24985__auto__ = e26976;
var statearr_26977_26995 = state_26952;
(statearr_26977_26995[(5)] = ex__24985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26996 = state_26952;
state_26952 = G__26996;
continue;
} else {
return ret_value__24983__auto__;
}
break;
}
});
cljs$core$async$state_machine__24982__auto__ = function(state_26952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24982__auto____1.call(this,state_26952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24982__auto____0;
cljs$core$async$state_machine__24982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24982__auto____1;
return cljs$core$async$state_machine__24982__auto__;
})()
;})(switch__24981__auto__,c__25076__auto___26980,out))
})();
var state__25078__auto__ = (function (){var statearr_26978 = f__25077__auto__.call(null);
(statearr_26978[(6)] = c__25076__auto___26980);

return statearr_26978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25078__auto__);
});})(c__25076__auto___26980,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1544535922202
