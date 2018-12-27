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
var G__25295 = arguments.length;
switch (G__25295) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25296 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25296 = (function (f,blockable,meta25297){
this.f = f;
this.blockable = blockable;
this.meta25297 = meta25297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25298,meta25297__$1){
var self__ = this;
var _25298__$1 = this;
return (new cljs.core.async.t_cljs$core$async25296(self__.f,self__.blockable,meta25297__$1));
});

cljs.core.async.t_cljs$core$async25296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25298){
var self__ = this;
var _25298__$1 = this;
return self__.meta25297;
});

cljs.core.async.t_cljs$core$async25296.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25296.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25296.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25296.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25297","meta25297",-836478158,null)], null);
});

cljs.core.async.t_cljs$core$async25296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25296";

cljs.core.async.t_cljs$core$async25296.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25296");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25296.
 */
cljs.core.async.__GT_t_cljs$core$async25296 = (function cljs$core$async$__GT_t_cljs$core$async25296(f__$1,blockable__$1,meta25297){
return (new cljs.core.async.t_cljs$core$async25296(f__$1,blockable__$1,meta25297));
});

}

return (new cljs.core.async.t_cljs$core$async25296(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25302 = arguments.length;
switch (G__25302) {
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
var G__25305 = arguments.length;
switch (G__25305) {
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
var G__25308 = arguments.length;
switch (G__25308) {
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
var val_25310 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25310);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25310,ret){
return (function (){
return fn1.call(null,val_25310);
});})(val_25310,ret))
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
var G__25312 = arguments.length;
switch (G__25312) {
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
var n__4518__auto___25314 = n;
var x_25315 = (0);
while(true){
if((x_25315 < n__4518__auto___25314)){
(a[x_25315] = (0));

var G__25316 = (x_25315 + (1));
x_25315 = G__25316;
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

var G__25317 = (i + (1));
i = G__25317;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25318 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25318 = (function (flag,meta25319){
this.flag = flag;
this.meta25319 = meta25319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25320,meta25319__$1){
var self__ = this;
var _25320__$1 = this;
return (new cljs.core.async.t_cljs$core$async25318(self__.flag,meta25319__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25320){
var self__ = this;
var _25320__$1 = this;
return self__.meta25319;
});})(flag))
;

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25318.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25319","meta25319",1057523057,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25318.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25318";

cljs.core.async.t_cljs$core$async25318.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25318");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25318.
 */
cljs.core.async.__GT_t_cljs$core$async25318 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25318(flag__$1,meta25319){
return (new cljs.core.async.t_cljs$core$async25318(flag__$1,meta25319));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25318(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25321 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25321 = (function (flag,cb,meta25322){
this.flag = flag;
this.cb = cb;
this.meta25322 = meta25322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25323,meta25322__$1){
var self__ = this;
var _25323__$1 = this;
return (new cljs.core.async.t_cljs$core$async25321(self__.flag,self__.cb,meta25322__$1));
});

cljs.core.async.t_cljs$core$async25321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25323){
var self__ = this;
var _25323__$1 = this;
return self__.meta25322;
});

cljs.core.async.t_cljs$core$async25321.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25321.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25321.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25321.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25322","meta25322",-1844731629,null)], null);
});

cljs.core.async.t_cljs$core$async25321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25321";

cljs.core.async.t_cljs$core$async25321.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25321");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25321.
 */
cljs.core.async.__GT_t_cljs$core$async25321 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25321(flag__$1,cb__$1,meta25322){
return (new cljs.core.async.t_cljs$core$async25321(flag__$1,cb__$1,meta25322));
});

}

return (new cljs.core.async.t_cljs$core$async25321(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25324_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25324_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25325_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25325_SHARP_,port], null));
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
var G__25326 = (i + (1));
i = G__25326;
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
var len__4641__auto___25332 = arguments.length;
var i__4642__auto___25333 = (0);
while(true){
if((i__4642__auto___25333 < len__4641__auto___25332)){
args__4647__auto__.push((arguments[i__4642__auto___25333]));

var G__25334 = (i__4642__auto___25333 + (1));
i__4642__auto___25333 = G__25334;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25329){
var map__25330 = p__25329;
var map__25330__$1 = (((((!((map__25330 == null))))?(((((map__25330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25330):map__25330);
var opts = map__25330__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25327){
var G__25328 = cljs.core.first.call(null,seq25327);
var seq25327__$1 = cljs.core.next.call(null,seq25327);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25328,seq25327__$1);
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
var G__25336 = arguments.length;
switch (G__25336) {
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
var c__25235__auto___25382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___25382){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___25382){
return (function (state_25360){
var state_val_25361 = (state_25360[(1)]);
if((state_val_25361 === (7))){
var inst_25356 = (state_25360[(2)]);
var state_25360__$1 = state_25360;
var statearr_25362_25383 = state_25360__$1;
(statearr_25362_25383[(2)] = inst_25356);

(statearr_25362_25383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (1))){
var state_25360__$1 = state_25360;
var statearr_25363_25384 = state_25360__$1;
(statearr_25363_25384[(2)] = null);

(statearr_25363_25384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (4))){
var inst_25339 = (state_25360[(7)]);
var inst_25339__$1 = (state_25360[(2)]);
var inst_25340 = (inst_25339__$1 == null);
var state_25360__$1 = (function (){var statearr_25364 = state_25360;
(statearr_25364[(7)] = inst_25339__$1);

return statearr_25364;
})();
if(cljs.core.truth_(inst_25340)){
var statearr_25365_25385 = state_25360__$1;
(statearr_25365_25385[(1)] = (5));

} else {
var statearr_25366_25386 = state_25360__$1;
(statearr_25366_25386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (13))){
var state_25360__$1 = state_25360;
var statearr_25367_25387 = state_25360__$1;
(statearr_25367_25387[(2)] = null);

(statearr_25367_25387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (6))){
var inst_25339 = (state_25360[(7)]);
var state_25360__$1 = state_25360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25360__$1,(11),to,inst_25339);
} else {
if((state_val_25361 === (3))){
var inst_25358 = (state_25360[(2)]);
var state_25360__$1 = state_25360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25360__$1,inst_25358);
} else {
if((state_val_25361 === (12))){
var state_25360__$1 = state_25360;
var statearr_25368_25388 = state_25360__$1;
(statearr_25368_25388[(2)] = null);

(statearr_25368_25388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (2))){
var state_25360__$1 = state_25360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25360__$1,(4),from);
} else {
if((state_val_25361 === (11))){
var inst_25349 = (state_25360[(2)]);
var state_25360__$1 = state_25360;
if(cljs.core.truth_(inst_25349)){
var statearr_25369_25389 = state_25360__$1;
(statearr_25369_25389[(1)] = (12));

} else {
var statearr_25370_25390 = state_25360__$1;
(statearr_25370_25390[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (9))){
var state_25360__$1 = state_25360;
var statearr_25371_25391 = state_25360__$1;
(statearr_25371_25391[(2)] = null);

(statearr_25371_25391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (5))){
var state_25360__$1 = state_25360;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25372_25392 = state_25360__$1;
(statearr_25372_25392[(1)] = (8));

} else {
var statearr_25373_25393 = state_25360__$1;
(statearr_25373_25393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (14))){
var inst_25354 = (state_25360[(2)]);
var state_25360__$1 = state_25360;
var statearr_25374_25394 = state_25360__$1;
(statearr_25374_25394[(2)] = inst_25354);

(statearr_25374_25394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (10))){
var inst_25346 = (state_25360[(2)]);
var state_25360__$1 = state_25360;
var statearr_25375_25395 = state_25360__$1;
(statearr_25375_25395[(2)] = inst_25346);

(statearr_25375_25395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (8))){
var inst_25343 = cljs.core.async.close_BANG_.call(null,to);
var state_25360__$1 = state_25360;
var statearr_25376_25396 = state_25360__$1;
(statearr_25376_25396[(2)] = inst_25343);

(statearr_25376_25396[(1)] = (10));


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
});})(c__25235__auto___25382))
;
return ((function (switch__25140__auto__,c__25235__auto___25382){
return (function() {
var cljs$core$async$state_machine__25141__auto__ = null;
var cljs$core$async$state_machine__25141__auto____0 = (function (){
var statearr_25377 = [null,null,null,null,null,null,null,null];
(statearr_25377[(0)] = cljs$core$async$state_machine__25141__auto__);

(statearr_25377[(1)] = (1));

return statearr_25377;
});
var cljs$core$async$state_machine__25141__auto____1 = (function (state_25360){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_25360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e25378){if((e25378 instanceof Object)){
var ex__25144__auto__ = e25378;
var statearr_25379_25397 = state_25360;
(statearr_25379_25397[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25398 = state_25360;
state_25360 = G__25398;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$state_machine__25141__auto__ = function(state_25360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25141__auto____1.call(this,state_25360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25141__auto____0;
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25141__auto____1;
return cljs$core$async$state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___25382))
})();
var state__25237__auto__ = (function (){var statearr_25380 = f__25236__auto__.call(null);
(statearr_25380[(6)] = c__25235__auto___25382);

return statearr_25380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___25382))
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
return (function (p__25399){
var vec__25400 = p__25399;
var v = cljs.core.nth.call(null,vec__25400,(0),null);
var p = cljs.core.nth.call(null,vec__25400,(1),null);
var job = vec__25400;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25235__auto___25571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___25571,res,vec__25400,v,p,job,jobs,results){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___25571,res,vec__25400,v,p,job,jobs,results){
return (function (state_25407){
var state_val_25408 = (state_25407[(1)]);
if((state_val_25408 === (1))){
var state_25407__$1 = state_25407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25407__$1,(2),res,v);
} else {
if((state_val_25408 === (2))){
var inst_25404 = (state_25407[(2)]);
var inst_25405 = cljs.core.async.close_BANG_.call(null,res);
var state_25407__$1 = (function (){var statearr_25409 = state_25407;
(statearr_25409[(7)] = inst_25404);

return statearr_25409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25407__$1,inst_25405);
} else {
return null;
}
}
});})(c__25235__auto___25571,res,vec__25400,v,p,job,jobs,results))
;
return ((function (switch__25140__auto__,c__25235__auto___25571,res,vec__25400,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____0 = (function (){
var statearr_25410 = [null,null,null,null,null,null,null,null];
(statearr_25410[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__);

(statearr_25410[(1)] = (1));

return statearr_25410;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____1 = (function (state_25407){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_25407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e25411){if((e25411 instanceof Object)){
var ex__25144__auto__ = e25411;
var statearr_25412_25572 = state_25407;
(statearr_25412_25572[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25573 = state_25407;
state_25407 = G__25573;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__ = function(state_25407){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____1.call(this,state_25407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___25571,res,vec__25400,v,p,job,jobs,results))
})();
var state__25237__auto__ = (function (){var statearr_25413 = f__25236__auto__.call(null);
(statearr_25413[(6)] = c__25235__auto___25571);

return statearr_25413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___25571,res,vec__25400,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25414){
var vec__25415 = p__25414;
var v = cljs.core.nth.call(null,vec__25415,(0),null);
var p = cljs.core.nth.call(null,vec__25415,(1),null);
var job = vec__25415;
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
var n__4518__auto___25574 = n;
var __25575 = (0);
while(true){
if((__25575 < n__4518__auto___25574)){
var G__25418_25576 = type;
var G__25418_25577__$1 = (((G__25418_25576 instanceof cljs.core.Keyword))?G__25418_25576.fqn:null);
switch (G__25418_25577__$1) {
case "compute":
var c__25235__auto___25579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25575,c__25235__auto___25579,G__25418_25576,G__25418_25577__$1,n__4518__auto___25574,jobs,results,process,async){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (__25575,c__25235__auto___25579,G__25418_25576,G__25418_25577__$1,n__4518__auto___25574,jobs,results,process,async){
return (function (state_25431){
var state_val_25432 = (state_25431[(1)]);
if((state_val_25432 === (1))){
var state_25431__$1 = state_25431;
var statearr_25433_25580 = state_25431__$1;
(statearr_25433_25580[(2)] = null);

(statearr_25433_25580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (2))){
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25431__$1,(4),jobs);
} else {
if((state_val_25432 === (3))){
var inst_25429 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25431__$1,inst_25429);
} else {
if((state_val_25432 === (4))){
var inst_25421 = (state_25431[(2)]);
var inst_25422 = process.call(null,inst_25421);
var state_25431__$1 = state_25431;
if(cljs.core.truth_(inst_25422)){
var statearr_25434_25581 = state_25431__$1;
(statearr_25434_25581[(1)] = (5));

} else {
var statearr_25435_25582 = state_25431__$1;
(statearr_25435_25582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (5))){
var state_25431__$1 = state_25431;
var statearr_25436_25583 = state_25431__$1;
(statearr_25436_25583[(2)] = null);

(statearr_25436_25583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (6))){
var state_25431__$1 = state_25431;
var statearr_25437_25584 = state_25431__$1;
(statearr_25437_25584[(2)] = null);

(statearr_25437_25584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (7))){
var inst_25427 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
var statearr_25438_25585 = state_25431__$1;
(statearr_25438_25585[(2)] = inst_25427);

(statearr_25438_25585[(1)] = (3));


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
});})(__25575,c__25235__auto___25579,G__25418_25576,G__25418_25577__$1,n__4518__auto___25574,jobs,results,process,async))
;
return ((function (__25575,switch__25140__auto__,c__25235__auto___25579,G__25418_25576,G__25418_25577__$1,n__4518__auto___25574,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____0 = (function (){
var statearr_25439 = [null,null,null,null,null,null,null];
(statearr_25439[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__);

(statearr_25439[(1)] = (1));

return statearr_25439;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____1 = (function (state_25431){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_25431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e25440){if((e25440 instanceof Object)){
var ex__25144__auto__ = e25440;
var statearr_25441_25586 = state_25431;
(statearr_25441_25586[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25587 = state_25431;
state_25431 = G__25587;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__ = function(state_25431){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____1.call(this,state_25431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__;
})()
;})(__25575,switch__25140__auto__,c__25235__auto___25579,G__25418_25576,G__25418_25577__$1,n__4518__auto___25574,jobs,results,process,async))
})();
var state__25237__auto__ = (function (){var statearr_25442 = f__25236__auto__.call(null);
(statearr_25442[(6)] = c__25235__auto___25579);

return statearr_25442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(__25575,c__25235__auto___25579,G__25418_25576,G__25418_25577__$1,n__4518__auto___25574,jobs,results,process,async))
);


break;
case "async":
var c__25235__auto___25588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25575,c__25235__auto___25588,G__25418_25576,G__25418_25577__$1,n__4518__auto___25574,jobs,results,process,async){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (__25575,c__25235__auto___25588,G__25418_25576,G__25418_25577__$1,n__4518__auto___25574,jobs,results,process,async){
return (function (state_25455){
var state_val_25456 = (state_25455[(1)]);
if((state_val_25456 === (1))){
var state_25455__$1 = state_25455;
var statearr_25457_25589 = state_25455__$1;
(statearr_25457_25589[(2)] = null);

(statearr_25457_25589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (2))){
var state_25455__$1 = state_25455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25455__$1,(4),jobs);
} else {
if((state_val_25456 === (3))){
var inst_25453 = (state_25455[(2)]);
var state_25455__$1 = state_25455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25455__$1,inst_25453);
} else {
if((state_val_25456 === (4))){
var inst_25445 = (state_25455[(2)]);
var inst_25446 = async.call(null,inst_25445);
var state_25455__$1 = state_25455;
if(cljs.core.truth_(inst_25446)){
var statearr_25458_25590 = state_25455__$1;
(statearr_25458_25590[(1)] = (5));

} else {
var statearr_25459_25591 = state_25455__$1;
(statearr_25459_25591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (5))){
var state_25455__$1 = state_25455;
var statearr_25460_25592 = state_25455__$1;
(statearr_25460_25592[(2)] = null);

(statearr_25460_25592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (6))){
var state_25455__$1 = state_25455;
var statearr_25461_25593 = state_25455__$1;
(statearr_25461_25593[(2)] = null);

(statearr_25461_25593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (7))){
var inst_25451 = (state_25455[(2)]);
var state_25455__$1 = state_25455;
var statearr_25462_25594 = state_25455__$1;
(statearr_25462_25594[(2)] = inst_25451);

(statearr_25462_25594[(1)] = (3));


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
});})(__25575,c__25235__auto___25588,G__25418_25576,G__25418_25577__$1,n__4518__auto___25574,jobs,results,process,async))
;
return ((function (__25575,switch__25140__auto__,c__25235__auto___25588,G__25418_25576,G__25418_25577__$1,n__4518__auto___25574,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____0 = (function (){
var statearr_25463 = [null,null,null,null,null,null,null];
(statearr_25463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__);

(statearr_25463[(1)] = (1));

return statearr_25463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____1 = (function (state_25455){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_25455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e25464){if((e25464 instanceof Object)){
var ex__25144__auto__ = e25464;
var statearr_25465_25595 = state_25455;
(statearr_25465_25595[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25596 = state_25455;
state_25455 = G__25596;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__ = function(state_25455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____1.call(this,state_25455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__;
})()
;})(__25575,switch__25140__auto__,c__25235__auto___25588,G__25418_25576,G__25418_25577__$1,n__4518__auto___25574,jobs,results,process,async))
})();
var state__25237__auto__ = (function (){var statearr_25466 = f__25236__auto__.call(null);
(statearr_25466[(6)] = c__25235__auto___25588);

return statearr_25466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(__25575,c__25235__auto___25588,G__25418_25576,G__25418_25577__$1,n__4518__auto___25574,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25418_25577__$1)].join('')));

}

var G__25597 = (__25575 + (1));
__25575 = G__25597;
continue;
} else {
}
break;
}

var c__25235__auto___25598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___25598,jobs,results,process,async){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___25598,jobs,results,process,async){
return (function (state_25488){
var state_val_25489 = (state_25488[(1)]);
if((state_val_25489 === (7))){
var inst_25484 = (state_25488[(2)]);
var state_25488__$1 = state_25488;
var statearr_25490_25599 = state_25488__$1;
(statearr_25490_25599[(2)] = inst_25484);

(statearr_25490_25599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (1))){
var state_25488__$1 = state_25488;
var statearr_25491_25600 = state_25488__$1;
(statearr_25491_25600[(2)] = null);

(statearr_25491_25600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (4))){
var inst_25469 = (state_25488[(7)]);
var inst_25469__$1 = (state_25488[(2)]);
var inst_25470 = (inst_25469__$1 == null);
var state_25488__$1 = (function (){var statearr_25492 = state_25488;
(statearr_25492[(7)] = inst_25469__$1);

return statearr_25492;
})();
if(cljs.core.truth_(inst_25470)){
var statearr_25493_25601 = state_25488__$1;
(statearr_25493_25601[(1)] = (5));

} else {
var statearr_25494_25602 = state_25488__$1;
(statearr_25494_25602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (6))){
var inst_25469 = (state_25488[(7)]);
var inst_25474 = (state_25488[(8)]);
var inst_25474__$1 = cljs.core.async.chan.call(null,(1));
var inst_25475 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25476 = [inst_25469,inst_25474__$1];
var inst_25477 = (new cljs.core.PersistentVector(null,2,(5),inst_25475,inst_25476,null));
var state_25488__$1 = (function (){var statearr_25495 = state_25488;
(statearr_25495[(8)] = inst_25474__$1);

return statearr_25495;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25488__$1,(8),jobs,inst_25477);
} else {
if((state_val_25489 === (3))){
var inst_25486 = (state_25488[(2)]);
var state_25488__$1 = state_25488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25488__$1,inst_25486);
} else {
if((state_val_25489 === (2))){
var state_25488__$1 = state_25488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25488__$1,(4),from);
} else {
if((state_val_25489 === (9))){
var inst_25481 = (state_25488[(2)]);
var state_25488__$1 = (function (){var statearr_25496 = state_25488;
(statearr_25496[(9)] = inst_25481);

return statearr_25496;
})();
var statearr_25497_25603 = state_25488__$1;
(statearr_25497_25603[(2)] = null);

(statearr_25497_25603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (5))){
var inst_25472 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25488__$1 = state_25488;
var statearr_25498_25604 = state_25488__$1;
(statearr_25498_25604[(2)] = inst_25472);

(statearr_25498_25604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (8))){
var inst_25474 = (state_25488[(8)]);
var inst_25479 = (state_25488[(2)]);
var state_25488__$1 = (function (){var statearr_25499 = state_25488;
(statearr_25499[(10)] = inst_25479);

return statearr_25499;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25488__$1,(9),results,inst_25474);
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
});})(c__25235__auto___25598,jobs,results,process,async))
;
return ((function (switch__25140__auto__,c__25235__auto___25598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____0 = (function (){
var statearr_25500 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__);

(statearr_25500[(1)] = (1));

return statearr_25500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____1 = (function (state_25488){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_25488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e25501){if((e25501 instanceof Object)){
var ex__25144__auto__ = e25501;
var statearr_25502_25605 = state_25488;
(statearr_25502_25605[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25606 = state_25488;
state_25488 = G__25606;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__ = function(state_25488){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____1.call(this,state_25488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___25598,jobs,results,process,async))
})();
var state__25237__auto__ = (function (){var statearr_25503 = f__25236__auto__.call(null);
(statearr_25503[(6)] = c__25235__auto___25598);

return statearr_25503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___25598,jobs,results,process,async))
);


var c__25235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto__,jobs,results,process,async){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto__,jobs,results,process,async){
return (function (state_25541){
var state_val_25542 = (state_25541[(1)]);
if((state_val_25542 === (7))){
var inst_25537 = (state_25541[(2)]);
var state_25541__$1 = state_25541;
var statearr_25543_25607 = state_25541__$1;
(statearr_25543_25607[(2)] = inst_25537);

(statearr_25543_25607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (20))){
var state_25541__$1 = state_25541;
var statearr_25544_25608 = state_25541__$1;
(statearr_25544_25608[(2)] = null);

(statearr_25544_25608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (1))){
var state_25541__$1 = state_25541;
var statearr_25545_25609 = state_25541__$1;
(statearr_25545_25609[(2)] = null);

(statearr_25545_25609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (4))){
var inst_25506 = (state_25541[(7)]);
var inst_25506__$1 = (state_25541[(2)]);
var inst_25507 = (inst_25506__$1 == null);
var state_25541__$1 = (function (){var statearr_25546 = state_25541;
(statearr_25546[(7)] = inst_25506__$1);

return statearr_25546;
})();
if(cljs.core.truth_(inst_25507)){
var statearr_25547_25610 = state_25541__$1;
(statearr_25547_25610[(1)] = (5));

} else {
var statearr_25548_25611 = state_25541__$1;
(statearr_25548_25611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (15))){
var inst_25519 = (state_25541[(8)]);
var state_25541__$1 = state_25541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25541__$1,(18),to,inst_25519);
} else {
if((state_val_25542 === (21))){
var inst_25532 = (state_25541[(2)]);
var state_25541__$1 = state_25541;
var statearr_25549_25612 = state_25541__$1;
(statearr_25549_25612[(2)] = inst_25532);

(statearr_25549_25612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (13))){
var inst_25534 = (state_25541[(2)]);
var state_25541__$1 = (function (){var statearr_25550 = state_25541;
(statearr_25550[(9)] = inst_25534);

return statearr_25550;
})();
var statearr_25551_25613 = state_25541__$1;
(statearr_25551_25613[(2)] = null);

(statearr_25551_25613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (6))){
var inst_25506 = (state_25541[(7)]);
var state_25541__$1 = state_25541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25541__$1,(11),inst_25506);
} else {
if((state_val_25542 === (17))){
var inst_25527 = (state_25541[(2)]);
var state_25541__$1 = state_25541;
if(cljs.core.truth_(inst_25527)){
var statearr_25552_25614 = state_25541__$1;
(statearr_25552_25614[(1)] = (19));

} else {
var statearr_25553_25615 = state_25541__$1;
(statearr_25553_25615[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (3))){
var inst_25539 = (state_25541[(2)]);
var state_25541__$1 = state_25541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25541__$1,inst_25539);
} else {
if((state_val_25542 === (12))){
var inst_25516 = (state_25541[(10)]);
var state_25541__$1 = state_25541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25541__$1,(14),inst_25516);
} else {
if((state_val_25542 === (2))){
var state_25541__$1 = state_25541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25541__$1,(4),results);
} else {
if((state_val_25542 === (19))){
var state_25541__$1 = state_25541;
var statearr_25554_25616 = state_25541__$1;
(statearr_25554_25616[(2)] = null);

(statearr_25554_25616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (11))){
var inst_25516 = (state_25541[(2)]);
var state_25541__$1 = (function (){var statearr_25555 = state_25541;
(statearr_25555[(10)] = inst_25516);

return statearr_25555;
})();
var statearr_25556_25617 = state_25541__$1;
(statearr_25556_25617[(2)] = null);

(statearr_25556_25617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (9))){
var state_25541__$1 = state_25541;
var statearr_25557_25618 = state_25541__$1;
(statearr_25557_25618[(2)] = null);

(statearr_25557_25618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (5))){
var state_25541__$1 = state_25541;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25558_25619 = state_25541__$1;
(statearr_25558_25619[(1)] = (8));

} else {
var statearr_25559_25620 = state_25541__$1;
(statearr_25559_25620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (14))){
var inst_25521 = (state_25541[(11)]);
var inst_25519 = (state_25541[(8)]);
var inst_25519__$1 = (state_25541[(2)]);
var inst_25520 = (inst_25519__$1 == null);
var inst_25521__$1 = cljs.core.not.call(null,inst_25520);
var state_25541__$1 = (function (){var statearr_25560 = state_25541;
(statearr_25560[(11)] = inst_25521__$1);

(statearr_25560[(8)] = inst_25519__$1);

return statearr_25560;
})();
if(inst_25521__$1){
var statearr_25561_25621 = state_25541__$1;
(statearr_25561_25621[(1)] = (15));

} else {
var statearr_25562_25622 = state_25541__$1;
(statearr_25562_25622[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (16))){
var inst_25521 = (state_25541[(11)]);
var state_25541__$1 = state_25541;
var statearr_25563_25623 = state_25541__$1;
(statearr_25563_25623[(2)] = inst_25521);

(statearr_25563_25623[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (10))){
var inst_25513 = (state_25541[(2)]);
var state_25541__$1 = state_25541;
var statearr_25564_25624 = state_25541__$1;
(statearr_25564_25624[(2)] = inst_25513);

(statearr_25564_25624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (18))){
var inst_25524 = (state_25541[(2)]);
var state_25541__$1 = state_25541;
var statearr_25565_25625 = state_25541__$1;
(statearr_25565_25625[(2)] = inst_25524);

(statearr_25565_25625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (8))){
var inst_25510 = cljs.core.async.close_BANG_.call(null,to);
var state_25541__$1 = state_25541;
var statearr_25566_25626 = state_25541__$1;
(statearr_25566_25626[(2)] = inst_25510);

(statearr_25566_25626[(1)] = (10));


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
});})(c__25235__auto__,jobs,results,process,async))
;
return ((function (switch__25140__auto__,c__25235__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____0 = (function (){
var statearr_25567 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__);

(statearr_25567[(1)] = (1));

return statearr_25567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____1 = (function (state_25541){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_25541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e25568){if((e25568 instanceof Object)){
var ex__25144__auto__ = e25568;
var statearr_25569_25627 = state_25541;
(statearr_25569_25627[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25628 = state_25541;
state_25541 = G__25628;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__ = function(state_25541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____1.call(this,state_25541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto__,jobs,results,process,async))
})();
var state__25237__auto__ = (function (){var statearr_25570 = f__25236__auto__.call(null);
(statearr_25570[(6)] = c__25235__auto__);

return statearr_25570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto__,jobs,results,process,async))
);

return c__25235__auto__;
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
var G__25630 = arguments.length;
switch (G__25630) {
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
var G__25633 = arguments.length;
switch (G__25633) {
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
var G__25636 = arguments.length;
switch (G__25636) {
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
var c__25235__auto___25685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___25685,tc,fc){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___25685,tc,fc){
return (function (state_25662){
var state_val_25663 = (state_25662[(1)]);
if((state_val_25663 === (7))){
var inst_25658 = (state_25662[(2)]);
var state_25662__$1 = state_25662;
var statearr_25664_25686 = state_25662__$1;
(statearr_25664_25686[(2)] = inst_25658);

(statearr_25664_25686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25663 === (1))){
var state_25662__$1 = state_25662;
var statearr_25665_25687 = state_25662__$1;
(statearr_25665_25687[(2)] = null);

(statearr_25665_25687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25663 === (4))){
var inst_25639 = (state_25662[(7)]);
var inst_25639__$1 = (state_25662[(2)]);
var inst_25640 = (inst_25639__$1 == null);
var state_25662__$1 = (function (){var statearr_25666 = state_25662;
(statearr_25666[(7)] = inst_25639__$1);

return statearr_25666;
})();
if(cljs.core.truth_(inst_25640)){
var statearr_25667_25688 = state_25662__$1;
(statearr_25667_25688[(1)] = (5));

} else {
var statearr_25668_25689 = state_25662__$1;
(statearr_25668_25689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25663 === (13))){
var state_25662__$1 = state_25662;
var statearr_25669_25690 = state_25662__$1;
(statearr_25669_25690[(2)] = null);

(statearr_25669_25690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25663 === (6))){
var inst_25639 = (state_25662[(7)]);
var inst_25645 = p.call(null,inst_25639);
var state_25662__$1 = state_25662;
if(cljs.core.truth_(inst_25645)){
var statearr_25670_25691 = state_25662__$1;
(statearr_25670_25691[(1)] = (9));

} else {
var statearr_25671_25692 = state_25662__$1;
(statearr_25671_25692[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25663 === (3))){
var inst_25660 = (state_25662[(2)]);
var state_25662__$1 = state_25662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25662__$1,inst_25660);
} else {
if((state_val_25663 === (12))){
var state_25662__$1 = state_25662;
var statearr_25672_25693 = state_25662__$1;
(statearr_25672_25693[(2)] = null);

(statearr_25672_25693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25663 === (2))){
var state_25662__$1 = state_25662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25662__$1,(4),ch);
} else {
if((state_val_25663 === (11))){
var inst_25639 = (state_25662[(7)]);
var inst_25649 = (state_25662[(2)]);
var state_25662__$1 = state_25662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25662__$1,(8),inst_25649,inst_25639);
} else {
if((state_val_25663 === (9))){
var state_25662__$1 = state_25662;
var statearr_25673_25694 = state_25662__$1;
(statearr_25673_25694[(2)] = tc);

(statearr_25673_25694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25663 === (5))){
var inst_25642 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25643 = cljs.core.async.close_BANG_.call(null,fc);
var state_25662__$1 = (function (){var statearr_25674 = state_25662;
(statearr_25674[(8)] = inst_25642);

return statearr_25674;
})();
var statearr_25675_25695 = state_25662__$1;
(statearr_25675_25695[(2)] = inst_25643);

(statearr_25675_25695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25663 === (14))){
var inst_25656 = (state_25662[(2)]);
var state_25662__$1 = state_25662;
var statearr_25676_25696 = state_25662__$1;
(statearr_25676_25696[(2)] = inst_25656);

(statearr_25676_25696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25663 === (10))){
var state_25662__$1 = state_25662;
var statearr_25677_25697 = state_25662__$1;
(statearr_25677_25697[(2)] = fc);

(statearr_25677_25697[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25663 === (8))){
var inst_25651 = (state_25662[(2)]);
var state_25662__$1 = state_25662;
if(cljs.core.truth_(inst_25651)){
var statearr_25678_25698 = state_25662__$1;
(statearr_25678_25698[(1)] = (12));

} else {
var statearr_25679_25699 = state_25662__$1;
(statearr_25679_25699[(1)] = (13));

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
});})(c__25235__auto___25685,tc,fc))
;
return ((function (switch__25140__auto__,c__25235__auto___25685,tc,fc){
return (function() {
var cljs$core$async$state_machine__25141__auto__ = null;
var cljs$core$async$state_machine__25141__auto____0 = (function (){
var statearr_25680 = [null,null,null,null,null,null,null,null,null];
(statearr_25680[(0)] = cljs$core$async$state_machine__25141__auto__);

(statearr_25680[(1)] = (1));

return statearr_25680;
});
var cljs$core$async$state_machine__25141__auto____1 = (function (state_25662){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_25662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e25681){if((e25681 instanceof Object)){
var ex__25144__auto__ = e25681;
var statearr_25682_25700 = state_25662;
(statearr_25682_25700[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25701 = state_25662;
state_25662 = G__25701;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$state_machine__25141__auto__ = function(state_25662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25141__auto____1.call(this,state_25662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25141__auto____0;
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25141__auto____1;
return cljs$core$async$state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___25685,tc,fc))
})();
var state__25237__auto__ = (function (){var statearr_25683 = f__25236__auto__.call(null);
(statearr_25683[(6)] = c__25235__auto___25685);

return statearr_25683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___25685,tc,fc))
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
var c__25235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto__){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto__){
return (function (state_25722){
var state_val_25723 = (state_25722[(1)]);
if((state_val_25723 === (7))){
var inst_25718 = (state_25722[(2)]);
var state_25722__$1 = state_25722;
var statearr_25724_25742 = state_25722__$1;
(statearr_25724_25742[(2)] = inst_25718);

(statearr_25724_25742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (1))){
var inst_25702 = init;
var state_25722__$1 = (function (){var statearr_25725 = state_25722;
(statearr_25725[(7)] = inst_25702);

return statearr_25725;
})();
var statearr_25726_25743 = state_25722__$1;
(statearr_25726_25743[(2)] = null);

(statearr_25726_25743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (4))){
var inst_25705 = (state_25722[(8)]);
var inst_25705__$1 = (state_25722[(2)]);
var inst_25706 = (inst_25705__$1 == null);
var state_25722__$1 = (function (){var statearr_25727 = state_25722;
(statearr_25727[(8)] = inst_25705__$1);

return statearr_25727;
})();
if(cljs.core.truth_(inst_25706)){
var statearr_25728_25744 = state_25722__$1;
(statearr_25728_25744[(1)] = (5));

} else {
var statearr_25729_25745 = state_25722__$1;
(statearr_25729_25745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (6))){
var inst_25705 = (state_25722[(8)]);
var inst_25709 = (state_25722[(9)]);
var inst_25702 = (state_25722[(7)]);
var inst_25709__$1 = f.call(null,inst_25702,inst_25705);
var inst_25710 = cljs.core.reduced_QMARK_.call(null,inst_25709__$1);
var state_25722__$1 = (function (){var statearr_25730 = state_25722;
(statearr_25730[(9)] = inst_25709__$1);

return statearr_25730;
})();
if(inst_25710){
var statearr_25731_25746 = state_25722__$1;
(statearr_25731_25746[(1)] = (8));

} else {
var statearr_25732_25747 = state_25722__$1;
(statearr_25732_25747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (3))){
var inst_25720 = (state_25722[(2)]);
var state_25722__$1 = state_25722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25722__$1,inst_25720);
} else {
if((state_val_25723 === (2))){
var state_25722__$1 = state_25722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25722__$1,(4),ch);
} else {
if((state_val_25723 === (9))){
var inst_25709 = (state_25722[(9)]);
var inst_25702 = inst_25709;
var state_25722__$1 = (function (){var statearr_25733 = state_25722;
(statearr_25733[(7)] = inst_25702);

return statearr_25733;
})();
var statearr_25734_25748 = state_25722__$1;
(statearr_25734_25748[(2)] = null);

(statearr_25734_25748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (5))){
var inst_25702 = (state_25722[(7)]);
var state_25722__$1 = state_25722;
var statearr_25735_25749 = state_25722__$1;
(statearr_25735_25749[(2)] = inst_25702);

(statearr_25735_25749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (10))){
var inst_25716 = (state_25722[(2)]);
var state_25722__$1 = state_25722;
var statearr_25736_25750 = state_25722__$1;
(statearr_25736_25750[(2)] = inst_25716);

(statearr_25736_25750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (8))){
var inst_25709 = (state_25722[(9)]);
var inst_25712 = cljs.core.deref.call(null,inst_25709);
var state_25722__$1 = state_25722;
var statearr_25737_25751 = state_25722__$1;
(statearr_25737_25751[(2)] = inst_25712);

(statearr_25737_25751[(1)] = (10));


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
});})(c__25235__auto__))
;
return ((function (switch__25140__auto__,c__25235__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25141__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25141__auto____0 = (function (){
var statearr_25738 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25738[(0)] = cljs$core$async$reduce_$_state_machine__25141__auto__);

(statearr_25738[(1)] = (1));

return statearr_25738;
});
var cljs$core$async$reduce_$_state_machine__25141__auto____1 = (function (state_25722){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_25722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e25739){if((e25739 instanceof Object)){
var ex__25144__auto__ = e25739;
var statearr_25740_25752 = state_25722;
(statearr_25740_25752[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25753 = state_25722;
state_25722 = G__25753;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25141__auto__ = function(state_25722){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25141__auto____1.call(this,state_25722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25141__auto____0;
cljs$core$async$reduce_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25141__auto____1;
return cljs$core$async$reduce_$_state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto__))
})();
var state__25237__auto__ = (function (){var statearr_25741 = f__25236__auto__.call(null);
(statearr_25741[(6)] = c__25235__auto__);

return statearr_25741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto__))
);

return c__25235__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto__,f__$1){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto__,f__$1){
return (function (state_25759){
var state_val_25760 = (state_25759[(1)]);
if((state_val_25760 === (1))){
var inst_25754 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25759__$1 = state_25759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25759__$1,(2),inst_25754);
} else {
if((state_val_25760 === (2))){
var inst_25756 = (state_25759[(2)]);
var inst_25757 = f__$1.call(null,inst_25756);
var state_25759__$1 = state_25759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25759__$1,inst_25757);
} else {
return null;
}
}
});})(c__25235__auto__,f__$1))
;
return ((function (switch__25140__auto__,c__25235__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25141__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25141__auto____0 = (function (){
var statearr_25761 = [null,null,null,null,null,null,null];
(statearr_25761[(0)] = cljs$core$async$transduce_$_state_machine__25141__auto__);

(statearr_25761[(1)] = (1));

return statearr_25761;
});
var cljs$core$async$transduce_$_state_machine__25141__auto____1 = (function (state_25759){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_25759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e25762){if((e25762 instanceof Object)){
var ex__25144__auto__ = e25762;
var statearr_25763_25765 = state_25759;
(statearr_25763_25765[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25766 = state_25759;
state_25759 = G__25766;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25141__auto__ = function(state_25759){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25141__auto____1.call(this,state_25759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25141__auto____0;
cljs$core$async$transduce_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25141__auto____1;
return cljs$core$async$transduce_$_state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto__,f__$1))
})();
var state__25237__auto__ = (function (){var statearr_25764 = f__25236__auto__.call(null);
(statearr_25764[(6)] = c__25235__auto__);

return statearr_25764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto__,f__$1))
);

return c__25235__auto__;
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
var G__25768 = arguments.length;
switch (G__25768) {
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
var c__25235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto__){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto__){
return (function (state_25793){
var state_val_25794 = (state_25793[(1)]);
if((state_val_25794 === (7))){
var inst_25775 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25795_25816 = state_25793__$1;
(statearr_25795_25816[(2)] = inst_25775);

(statearr_25795_25816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (1))){
var inst_25769 = cljs.core.seq.call(null,coll);
var inst_25770 = inst_25769;
var state_25793__$1 = (function (){var statearr_25796 = state_25793;
(statearr_25796[(7)] = inst_25770);

return statearr_25796;
})();
var statearr_25797_25817 = state_25793__$1;
(statearr_25797_25817[(2)] = null);

(statearr_25797_25817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (4))){
var inst_25770 = (state_25793[(7)]);
var inst_25773 = cljs.core.first.call(null,inst_25770);
var state_25793__$1 = state_25793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25793__$1,(7),ch,inst_25773);
} else {
if((state_val_25794 === (13))){
var inst_25787 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25798_25818 = state_25793__$1;
(statearr_25798_25818[(2)] = inst_25787);

(statearr_25798_25818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (6))){
var inst_25778 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
if(cljs.core.truth_(inst_25778)){
var statearr_25799_25819 = state_25793__$1;
(statearr_25799_25819[(1)] = (8));

} else {
var statearr_25800_25820 = state_25793__$1;
(statearr_25800_25820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (3))){
var inst_25791 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25793__$1,inst_25791);
} else {
if((state_val_25794 === (12))){
var state_25793__$1 = state_25793;
var statearr_25801_25821 = state_25793__$1;
(statearr_25801_25821[(2)] = null);

(statearr_25801_25821[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (2))){
var inst_25770 = (state_25793[(7)]);
var state_25793__$1 = state_25793;
if(cljs.core.truth_(inst_25770)){
var statearr_25802_25822 = state_25793__$1;
(statearr_25802_25822[(1)] = (4));

} else {
var statearr_25803_25823 = state_25793__$1;
(statearr_25803_25823[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (11))){
var inst_25784 = cljs.core.async.close_BANG_.call(null,ch);
var state_25793__$1 = state_25793;
var statearr_25804_25824 = state_25793__$1;
(statearr_25804_25824[(2)] = inst_25784);

(statearr_25804_25824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (9))){
var state_25793__$1 = state_25793;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25805_25825 = state_25793__$1;
(statearr_25805_25825[(1)] = (11));

} else {
var statearr_25806_25826 = state_25793__$1;
(statearr_25806_25826[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (5))){
var inst_25770 = (state_25793[(7)]);
var state_25793__$1 = state_25793;
var statearr_25807_25827 = state_25793__$1;
(statearr_25807_25827[(2)] = inst_25770);

(statearr_25807_25827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (10))){
var inst_25789 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25808_25828 = state_25793__$1;
(statearr_25808_25828[(2)] = inst_25789);

(statearr_25808_25828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (8))){
var inst_25770 = (state_25793[(7)]);
var inst_25780 = cljs.core.next.call(null,inst_25770);
var inst_25770__$1 = inst_25780;
var state_25793__$1 = (function (){var statearr_25809 = state_25793;
(statearr_25809[(7)] = inst_25770__$1);

return statearr_25809;
})();
var statearr_25810_25829 = state_25793__$1;
(statearr_25810_25829[(2)] = null);

(statearr_25810_25829[(1)] = (2));


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
});})(c__25235__auto__))
;
return ((function (switch__25140__auto__,c__25235__auto__){
return (function() {
var cljs$core$async$state_machine__25141__auto__ = null;
var cljs$core$async$state_machine__25141__auto____0 = (function (){
var statearr_25811 = [null,null,null,null,null,null,null,null];
(statearr_25811[(0)] = cljs$core$async$state_machine__25141__auto__);

(statearr_25811[(1)] = (1));

return statearr_25811;
});
var cljs$core$async$state_machine__25141__auto____1 = (function (state_25793){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_25793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e25812){if((e25812 instanceof Object)){
var ex__25144__auto__ = e25812;
var statearr_25813_25830 = state_25793;
(statearr_25813_25830[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25831 = state_25793;
state_25793 = G__25831;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$state_machine__25141__auto__ = function(state_25793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25141__auto____1.call(this,state_25793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25141__auto____0;
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25141__auto____1;
return cljs$core$async$state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto__))
})();
var state__25237__auto__ = (function (){var statearr_25814 = f__25236__auto__.call(null);
(statearr_25814[(6)] = c__25235__auto__);

return statearr_25814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto__))
);

return c__25235__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25832 = (function (ch,cs,meta25833){
this.ch = ch;
this.cs = cs;
this.meta25833 = meta25833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25834,meta25833__$1){
var self__ = this;
var _25834__$1 = this;
return (new cljs.core.async.t_cljs$core$async25832(self__.ch,self__.cs,meta25833__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25832.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25834){
var self__ = this;
var _25834__$1 = this;
return self__.meta25833;
});})(cs))
;

cljs.core.async.t_cljs$core$async25832.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25832.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25832.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25832.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25832.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25832.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25832.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25833","meta25833",2096812356,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25832";

cljs.core.async.t_cljs$core$async25832.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25832");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25832.
 */
cljs.core.async.__GT_t_cljs$core$async25832 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25832(ch__$1,cs__$1,meta25833){
return (new cljs.core.async.t_cljs$core$async25832(ch__$1,cs__$1,meta25833));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25832(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25235__auto___26054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___26054,cs,m,dchan,dctr,done){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___26054,cs,m,dchan,dctr,done){
return (function (state_25969){
var state_val_25970 = (state_25969[(1)]);
if((state_val_25970 === (7))){
var inst_25965 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_25971_26055 = state_25969__$1;
(statearr_25971_26055[(2)] = inst_25965);

(statearr_25971_26055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (20))){
var inst_25868 = (state_25969[(7)]);
var inst_25880 = cljs.core.first.call(null,inst_25868);
var inst_25881 = cljs.core.nth.call(null,inst_25880,(0),null);
var inst_25882 = cljs.core.nth.call(null,inst_25880,(1),null);
var state_25969__$1 = (function (){var statearr_25972 = state_25969;
(statearr_25972[(8)] = inst_25881);

return statearr_25972;
})();
if(cljs.core.truth_(inst_25882)){
var statearr_25973_26056 = state_25969__$1;
(statearr_25973_26056[(1)] = (22));

} else {
var statearr_25974_26057 = state_25969__$1;
(statearr_25974_26057[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (27))){
var inst_25917 = (state_25969[(9)]);
var inst_25910 = (state_25969[(10)]);
var inst_25912 = (state_25969[(11)]);
var inst_25837 = (state_25969[(12)]);
var inst_25917__$1 = cljs.core._nth.call(null,inst_25910,inst_25912);
var inst_25918 = cljs.core.async.put_BANG_.call(null,inst_25917__$1,inst_25837,done);
var state_25969__$1 = (function (){var statearr_25975 = state_25969;
(statearr_25975[(9)] = inst_25917__$1);

return statearr_25975;
})();
if(cljs.core.truth_(inst_25918)){
var statearr_25976_26058 = state_25969__$1;
(statearr_25976_26058[(1)] = (30));

} else {
var statearr_25977_26059 = state_25969__$1;
(statearr_25977_26059[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (1))){
var state_25969__$1 = state_25969;
var statearr_25978_26060 = state_25969__$1;
(statearr_25978_26060[(2)] = null);

(statearr_25978_26060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (24))){
var inst_25868 = (state_25969[(7)]);
var inst_25887 = (state_25969[(2)]);
var inst_25888 = cljs.core.next.call(null,inst_25868);
var inst_25846 = inst_25888;
var inst_25847 = null;
var inst_25848 = (0);
var inst_25849 = (0);
var state_25969__$1 = (function (){var statearr_25979 = state_25969;
(statearr_25979[(13)] = inst_25887);

(statearr_25979[(14)] = inst_25847);

(statearr_25979[(15)] = inst_25849);

(statearr_25979[(16)] = inst_25848);

(statearr_25979[(17)] = inst_25846);

return statearr_25979;
})();
var statearr_25980_26061 = state_25969__$1;
(statearr_25980_26061[(2)] = null);

(statearr_25980_26061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (39))){
var state_25969__$1 = state_25969;
var statearr_25984_26062 = state_25969__$1;
(statearr_25984_26062[(2)] = null);

(statearr_25984_26062[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (4))){
var inst_25837 = (state_25969[(12)]);
var inst_25837__$1 = (state_25969[(2)]);
var inst_25838 = (inst_25837__$1 == null);
var state_25969__$1 = (function (){var statearr_25985 = state_25969;
(statearr_25985[(12)] = inst_25837__$1);

return statearr_25985;
})();
if(cljs.core.truth_(inst_25838)){
var statearr_25986_26063 = state_25969__$1;
(statearr_25986_26063[(1)] = (5));

} else {
var statearr_25987_26064 = state_25969__$1;
(statearr_25987_26064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (15))){
var inst_25847 = (state_25969[(14)]);
var inst_25849 = (state_25969[(15)]);
var inst_25848 = (state_25969[(16)]);
var inst_25846 = (state_25969[(17)]);
var inst_25864 = (state_25969[(2)]);
var inst_25865 = (inst_25849 + (1));
var tmp25981 = inst_25847;
var tmp25982 = inst_25848;
var tmp25983 = inst_25846;
var inst_25846__$1 = tmp25983;
var inst_25847__$1 = tmp25981;
var inst_25848__$1 = tmp25982;
var inst_25849__$1 = inst_25865;
var state_25969__$1 = (function (){var statearr_25988 = state_25969;
(statearr_25988[(14)] = inst_25847__$1);

(statearr_25988[(15)] = inst_25849__$1);

(statearr_25988[(16)] = inst_25848__$1);

(statearr_25988[(17)] = inst_25846__$1);

(statearr_25988[(18)] = inst_25864);

return statearr_25988;
})();
var statearr_25989_26065 = state_25969__$1;
(statearr_25989_26065[(2)] = null);

(statearr_25989_26065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (21))){
var inst_25891 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_25993_26066 = state_25969__$1;
(statearr_25993_26066[(2)] = inst_25891);

(statearr_25993_26066[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (31))){
var inst_25917 = (state_25969[(9)]);
var inst_25921 = done.call(null,null);
var inst_25922 = cljs.core.async.untap_STAR_.call(null,m,inst_25917);
var state_25969__$1 = (function (){var statearr_25994 = state_25969;
(statearr_25994[(19)] = inst_25921);

return statearr_25994;
})();
var statearr_25995_26067 = state_25969__$1;
(statearr_25995_26067[(2)] = inst_25922);

(statearr_25995_26067[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (32))){
var inst_25910 = (state_25969[(10)]);
var inst_25909 = (state_25969[(20)]);
var inst_25912 = (state_25969[(11)]);
var inst_25911 = (state_25969[(21)]);
var inst_25924 = (state_25969[(2)]);
var inst_25925 = (inst_25912 + (1));
var tmp25990 = inst_25910;
var tmp25991 = inst_25909;
var tmp25992 = inst_25911;
var inst_25909__$1 = tmp25991;
var inst_25910__$1 = tmp25990;
var inst_25911__$1 = tmp25992;
var inst_25912__$1 = inst_25925;
var state_25969__$1 = (function (){var statearr_25996 = state_25969;
(statearr_25996[(22)] = inst_25924);

(statearr_25996[(10)] = inst_25910__$1);

(statearr_25996[(20)] = inst_25909__$1);

(statearr_25996[(11)] = inst_25912__$1);

(statearr_25996[(21)] = inst_25911__$1);

return statearr_25996;
})();
var statearr_25997_26068 = state_25969__$1;
(statearr_25997_26068[(2)] = null);

(statearr_25997_26068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (40))){
var inst_25937 = (state_25969[(23)]);
var inst_25941 = done.call(null,null);
var inst_25942 = cljs.core.async.untap_STAR_.call(null,m,inst_25937);
var state_25969__$1 = (function (){var statearr_25998 = state_25969;
(statearr_25998[(24)] = inst_25941);

return statearr_25998;
})();
var statearr_25999_26069 = state_25969__$1;
(statearr_25999_26069[(2)] = inst_25942);

(statearr_25999_26069[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (33))){
var inst_25928 = (state_25969[(25)]);
var inst_25930 = cljs.core.chunked_seq_QMARK_.call(null,inst_25928);
var state_25969__$1 = state_25969;
if(inst_25930){
var statearr_26000_26070 = state_25969__$1;
(statearr_26000_26070[(1)] = (36));

} else {
var statearr_26001_26071 = state_25969__$1;
(statearr_26001_26071[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (13))){
var inst_25858 = (state_25969[(26)]);
var inst_25861 = cljs.core.async.close_BANG_.call(null,inst_25858);
var state_25969__$1 = state_25969;
var statearr_26002_26072 = state_25969__$1;
(statearr_26002_26072[(2)] = inst_25861);

(statearr_26002_26072[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (22))){
var inst_25881 = (state_25969[(8)]);
var inst_25884 = cljs.core.async.close_BANG_.call(null,inst_25881);
var state_25969__$1 = state_25969;
var statearr_26003_26073 = state_25969__$1;
(statearr_26003_26073[(2)] = inst_25884);

(statearr_26003_26073[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (36))){
var inst_25928 = (state_25969[(25)]);
var inst_25932 = cljs.core.chunk_first.call(null,inst_25928);
var inst_25933 = cljs.core.chunk_rest.call(null,inst_25928);
var inst_25934 = cljs.core.count.call(null,inst_25932);
var inst_25909 = inst_25933;
var inst_25910 = inst_25932;
var inst_25911 = inst_25934;
var inst_25912 = (0);
var state_25969__$1 = (function (){var statearr_26004 = state_25969;
(statearr_26004[(10)] = inst_25910);

(statearr_26004[(20)] = inst_25909);

(statearr_26004[(11)] = inst_25912);

(statearr_26004[(21)] = inst_25911);

return statearr_26004;
})();
var statearr_26005_26074 = state_25969__$1;
(statearr_26005_26074[(2)] = null);

(statearr_26005_26074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (41))){
var inst_25928 = (state_25969[(25)]);
var inst_25944 = (state_25969[(2)]);
var inst_25945 = cljs.core.next.call(null,inst_25928);
var inst_25909 = inst_25945;
var inst_25910 = null;
var inst_25911 = (0);
var inst_25912 = (0);
var state_25969__$1 = (function (){var statearr_26006 = state_25969;
(statearr_26006[(10)] = inst_25910);

(statearr_26006[(20)] = inst_25909);

(statearr_26006[(11)] = inst_25912);

(statearr_26006[(27)] = inst_25944);

(statearr_26006[(21)] = inst_25911);

return statearr_26006;
})();
var statearr_26007_26075 = state_25969__$1;
(statearr_26007_26075[(2)] = null);

(statearr_26007_26075[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (43))){
var state_25969__$1 = state_25969;
var statearr_26008_26076 = state_25969__$1;
(statearr_26008_26076[(2)] = null);

(statearr_26008_26076[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (29))){
var inst_25953 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_26009_26077 = state_25969__$1;
(statearr_26009_26077[(2)] = inst_25953);

(statearr_26009_26077[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (44))){
var inst_25962 = (state_25969[(2)]);
var state_25969__$1 = (function (){var statearr_26010 = state_25969;
(statearr_26010[(28)] = inst_25962);

return statearr_26010;
})();
var statearr_26011_26078 = state_25969__$1;
(statearr_26011_26078[(2)] = null);

(statearr_26011_26078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (6))){
var inst_25901 = (state_25969[(29)]);
var inst_25900 = cljs.core.deref.call(null,cs);
var inst_25901__$1 = cljs.core.keys.call(null,inst_25900);
var inst_25902 = cljs.core.count.call(null,inst_25901__$1);
var inst_25903 = cljs.core.reset_BANG_.call(null,dctr,inst_25902);
var inst_25908 = cljs.core.seq.call(null,inst_25901__$1);
var inst_25909 = inst_25908;
var inst_25910 = null;
var inst_25911 = (0);
var inst_25912 = (0);
var state_25969__$1 = (function (){var statearr_26012 = state_25969;
(statearr_26012[(29)] = inst_25901__$1);

(statearr_26012[(10)] = inst_25910);

(statearr_26012[(20)] = inst_25909);

(statearr_26012[(11)] = inst_25912);

(statearr_26012[(21)] = inst_25911);

(statearr_26012[(30)] = inst_25903);

return statearr_26012;
})();
var statearr_26013_26079 = state_25969__$1;
(statearr_26013_26079[(2)] = null);

(statearr_26013_26079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (28))){
var inst_25928 = (state_25969[(25)]);
var inst_25909 = (state_25969[(20)]);
var inst_25928__$1 = cljs.core.seq.call(null,inst_25909);
var state_25969__$1 = (function (){var statearr_26014 = state_25969;
(statearr_26014[(25)] = inst_25928__$1);

return statearr_26014;
})();
if(inst_25928__$1){
var statearr_26015_26080 = state_25969__$1;
(statearr_26015_26080[(1)] = (33));

} else {
var statearr_26016_26081 = state_25969__$1;
(statearr_26016_26081[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (25))){
var inst_25912 = (state_25969[(11)]);
var inst_25911 = (state_25969[(21)]);
var inst_25914 = (inst_25912 < inst_25911);
var inst_25915 = inst_25914;
var state_25969__$1 = state_25969;
if(cljs.core.truth_(inst_25915)){
var statearr_26017_26082 = state_25969__$1;
(statearr_26017_26082[(1)] = (27));

} else {
var statearr_26018_26083 = state_25969__$1;
(statearr_26018_26083[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (34))){
var state_25969__$1 = state_25969;
var statearr_26019_26084 = state_25969__$1;
(statearr_26019_26084[(2)] = null);

(statearr_26019_26084[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (17))){
var state_25969__$1 = state_25969;
var statearr_26020_26085 = state_25969__$1;
(statearr_26020_26085[(2)] = null);

(statearr_26020_26085[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (3))){
var inst_25967 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25969__$1,inst_25967);
} else {
if((state_val_25970 === (12))){
var inst_25896 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_26021_26086 = state_25969__$1;
(statearr_26021_26086[(2)] = inst_25896);

(statearr_26021_26086[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (2))){
var state_25969__$1 = state_25969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25969__$1,(4),ch);
} else {
if((state_val_25970 === (23))){
var state_25969__$1 = state_25969;
var statearr_26022_26087 = state_25969__$1;
(statearr_26022_26087[(2)] = null);

(statearr_26022_26087[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (35))){
var inst_25951 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_26023_26088 = state_25969__$1;
(statearr_26023_26088[(2)] = inst_25951);

(statearr_26023_26088[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (19))){
var inst_25868 = (state_25969[(7)]);
var inst_25872 = cljs.core.chunk_first.call(null,inst_25868);
var inst_25873 = cljs.core.chunk_rest.call(null,inst_25868);
var inst_25874 = cljs.core.count.call(null,inst_25872);
var inst_25846 = inst_25873;
var inst_25847 = inst_25872;
var inst_25848 = inst_25874;
var inst_25849 = (0);
var state_25969__$1 = (function (){var statearr_26024 = state_25969;
(statearr_26024[(14)] = inst_25847);

(statearr_26024[(15)] = inst_25849);

(statearr_26024[(16)] = inst_25848);

(statearr_26024[(17)] = inst_25846);

return statearr_26024;
})();
var statearr_26025_26089 = state_25969__$1;
(statearr_26025_26089[(2)] = null);

(statearr_26025_26089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (11))){
var inst_25868 = (state_25969[(7)]);
var inst_25846 = (state_25969[(17)]);
var inst_25868__$1 = cljs.core.seq.call(null,inst_25846);
var state_25969__$1 = (function (){var statearr_26026 = state_25969;
(statearr_26026[(7)] = inst_25868__$1);

return statearr_26026;
})();
if(inst_25868__$1){
var statearr_26027_26090 = state_25969__$1;
(statearr_26027_26090[(1)] = (16));

} else {
var statearr_26028_26091 = state_25969__$1;
(statearr_26028_26091[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (9))){
var inst_25898 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_26029_26092 = state_25969__$1;
(statearr_26029_26092[(2)] = inst_25898);

(statearr_26029_26092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (5))){
var inst_25844 = cljs.core.deref.call(null,cs);
var inst_25845 = cljs.core.seq.call(null,inst_25844);
var inst_25846 = inst_25845;
var inst_25847 = null;
var inst_25848 = (0);
var inst_25849 = (0);
var state_25969__$1 = (function (){var statearr_26030 = state_25969;
(statearr_26030[(14)] = inst_25847);

(statearr_26030[(15)] = inst_25849);

(statearr_26030[(16)] = inst_25848);

(statearr_26030[(17)] = inst_25846);

return statearr_26030;
})();
var statearr_26031_26093 = state_25969__$1;
(statearr_26031_26093[(2)] = null);

(statearr_26031_26093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (14))){
var state_25969__$1 = state_25969;
var statearr_26032_26094 = state_25969__$1;
(statearr_26032_26094[(2)] = null);

(statearr_26032_26094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (45))){
var inst_25959 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_26033_26095 = state_25969__$1;
(statearr_26033_26095[(2)] = inst_25959);

(statearr_26033_26095[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (26))){
var inst_25901 = (state_25969[(29)]);
var inst_25955 = (state_25969[(2)]);
var inst_25956 = cljs.core.seq.call(null,inst_25901);
var state_25969__$1 = (function (){var statearr_26034 = state_25969;
(statearr_26034[(31)] = inst_25955);

return statearr_26034;
})();
if(inst_25956){
var statearr_26035_26096 = state_25969__$1;
(statearr_26035_26096[(1)] = (42));

} else {
var statearr_26036_26097 = state_25969__$1;
(statearr_26036_26097[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (16))){
var inst_25868 = (state_25969[(7)]);
var inst_25870 = cljs.core.chunked_seq_QMARK_.call(null,inst_25868);
var state_25969__$1 = state_25969;
if(inst_25870){
var statearr_26037_26098 = state_25969__$1;
(statearr_26037_26098[(1)] = (19));

} else {
var statearr_26038_26099 = state_25969__$1;
(statearr_26038_26099[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (38))){
var inst_25948 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_26039_26100 = state_25969__$1;
(statearr_26039_26100[(2)] = inst_25948);

(statearr_26039_26100[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (30))){
var state_25969__$1 = state_25969;
var statearr_26040_26101 = state_25969__$1;
(statearr_26040_26101[(2)] = null);

(statearr_26040_26101[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (10))){
var inst_25847 = (state_25969[(14)]);
var inst_25849 = (state_25969[(15)]);
var inst_25857 = cljs.core._nth.call(null,inst_25847,inst_25849);
var inst_25858 = cljs.core.nth.call(null,inst_25857,(0),null);
var inst_25859 = cljs.core.nth.call(null,inst_25857,(1),null);
var state_25969__$1 = (function (){var statearr_26041 = state_25969;
(statearr_26041[(26)] = inst_25858);

return statearr_26041;
})();
if(cljs.core.truth_(inst_25859)){
var statearr_26042_26102 = state_25969__$1;
(statearr_26042_26102[(1)] = (13));

} else {
var statearr_26043_26103 = state_25969__$1;
(statearr_26043_26103[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (18))){
var inst_25894 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_26044_26104 = state_25969__$1;
(statearr_26044_26104[(2)] = inst_25894);

(statearr_26044_26104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (42))){
var state_25969__$1 = state_25969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25969__$1,(45),dchan);
} else {
if((state_val_25970 === (37))){
var inst_25937 = (state_25969[(23)]);
var inst_25928 = (state_25969[(25)]);
var inst_25837 = (state_25969[(12)]);
var inst_25937__$1 = cljs.core.first.call(null,inst_25928);
var inst_25938 = cljs.core.async.put_BANG_.call(null,inst_25937__$1,inst_25837,done);
var state_25969__$1 = (function (){var statearr_26045 = state_25969;
(statearr_26045[(23)] = inst_25937__$1);

return statearr_26045;
})();
if(cljs.core.truth_(inst_25938)){
var statearr_26046_26105 = state_25969__$1;
(statearr_26046_26105[(1)] = (39));

} else {
var statearr_26047_26106 = state_25969__$1;
(statearr_26047_26106[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (8))){
var inst_25849 = (state_25969[(15)]);
var inst_25848 = (state_25969[(16)]);
var inst_25851 = (inst_25849 < inst_25848);
var inst_25852 = inst_25851;
var state_25969__$1 = state_25969;
if(cljs.core.truth_(inst_25852)){
var statearr_26048_26107 = state_25969__$1;
(statearr_26048_26107[(1)] = (10));

} else {
var statearr_26049_26108 = state_25969__$1;
(statearr_26049_26108[(1)] = (11));

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
});})(c__25235__auto___26054,cs,m,dchan,dctr,done))
;
return ((function (switch__25140__auto__,c__25235__auto___26054,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25141__auto__ = null;
var cljs$core$async$mult_$_state_machine__25141__auto____0 = (function (){
var statearr_26050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26050[(0)] = cljs$core$async$mult_$_state_machine__25141__auto__);

(statearr_26050[(1)] = (1));

return statearr_26050;
});
var cljs$core$async$mult_$_state_machine__25141__auto____1 = (function (state_25969){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_25969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e26051){if((e26051 instanceof Object)){
var ex__25144__auto__ = e26051;
var statearr_26052_26109 = state_25969;
(statearr_26052_26109[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26110 = state_25969;
state_25969 = G__26110;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25141__auto__ = function(state_25969){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25141__auto____1.call(this,state_25969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25141__auto____0;
cljs$core$async$mult_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25141__auto____1;
return cljs$core$async$mult_$_state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___26054,cs,m,dchan,dctr,done))
})();
var state__25237__auto__ = (function (){var statearr_26053 = f__25236__auto__.call(null);
(statearr_26053[(6)] = c__25235__auto___26054);

return statearr_26053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___26054,cs,m,dchan,dctr,done))
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
var G__26112 = arguments.length;
switch (G__26112) {
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
var len__4641__auto___26124 = arguments.length;
var i__4642__auto___26125 = (0);
while(true){
if((i__4642__auto___26125 < len__4641__auto___26124)){
args__4647__auto__.push((arguments[i__4642__auto___26125]));

var G__26126 = (i__4642__auto___26125 + (1));
i__4642__auto___26125 = G__26126;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26118){
var map__26119 = p__26118;
var map__26119__$1 = (((((!((map__26119 == null))))?(((((map__26119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26119):map__26119);
var opts = map__26119__$1;
var statearr_26121_26127 = state;
(statearr_26121_26127[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__26119,map__26119__$1,opts){
return (function (val){
var statearr_26122_26128 = state;
(statearr_26122_26128[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26119,map__26119__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_26123_26129 = state;
(statearr_26123_26129[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26114){
var G__26115 = cljs.core.first.call(null,seq26114);
var seq26114__$1 = cljs.core.next.call(null,seq26114);
var G__26116 = cljs.core.first.call(null,seq26114__$1);
var seq26114__$2 = cljs.core.next.call(null,seq26114__$1);
var G__26117 = cljs.core.first.call(null,seq26114__$2);
var seq26114__$3 = cljs.core.next.call(null,seq26114__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26115,G__26116,G__26117,seq26114__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26130 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26131){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26131 = meta26131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26132,meta26131__$1){
var self__ = this;
var _26132__$1 = this;
return (new cljs.core.async.t_cljs$core$async26130(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26131__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26130.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26132){
var self__ = this;
var _26132__$1 = this;
return self__.meta26131;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26130.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26130.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26130.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26130.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26130.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26130.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26130.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26130.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26130.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26131","meta26131",217785883,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26130";

cljs.core.async.t_cljs$core$async26130.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26130");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26130.
 */
cljs.core.async.__GT_t_cljs$core$async26130 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26130(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26131){
return (new cljs.core.async.t_cljs$core$async26130(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26131));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26130(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25235__auto___26294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___26294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___26294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26234){
var state_val_26235 = (state_26234[(1)]);
if((state_val_26235 === (7))){
var inst_26149 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26236_26295 = state_26234__$1;
(statearr_26236_26295[(2)] = inst_26149);

(statearr_26236_26295[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (20))){
var inst_26161 = (state_26234[(7)]);
var state_26234__$1 = state_26234;
var statearr_26237_26296 = state_26234__$1;
(statearr_26237_26296[(2)] = inst_26161);

(statearr_26237_26296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (27))){
var state_26234__$1 = state_26234;
var statearr_26238_26297 = state_26234__$1;
(statearr_26238_26297[(2)] = null);

(statearr_26238_26297[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (1))){
var inst_26136 = (state_26234[(8)]);
var inst_26136__$1 = calc_state.call(null);
var inst_26138 = (inst_26136__$1 == null);
var inst_26139 = cljs.core.not.call(null,inst_26138);
var state_26234__$1 = (function (){var statearr_26239 = state_26234;
(statearr_26239[(8)] = inst_26136__$1);

return statearr_26239;
})();
if(inst_26139){
var statearr_26240_26298 = state_26234__$1;
(statearr_26240_26298[(1)] = (2));

} else {
var statearr_26241_26299 = state_26234__$1;
(statearr_26241_26299[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (24))){
var inst_26185 = (state_26234[(9)]);
var inst_26208 = (state_26234[(10)]);
var inst_26194 = (state_26234[(11)]);
var inst_26208__$1 = inst_26185.call(null,inst_26194);
var state_26234__$1 = (function (){var statearr_26242 = state_26234;
(statearr_26242[(10)] = inst_26208__$1);

return statearr_26242;
})();
if(cljs.core.truth_(inst_26208__$1)){
var statearr_26243_26300 = state_26234__$1;
(statearr_26243_26300[(1)] = (29));

} else {
var statearr_26244_26301 = state_26234__$1;
(statearr_26244_26301[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (4))){
var inst_26152 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
if(cljs.core.truth_(inst_26152)){
var statearr_26245_26302 = state_26234__$1;
(statearr_26245_26302[(1)] = (8));

} else {
var statearr_26246_26303 = state_26234__$1;
(statearr_26246_26303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (15))){
var inst_26179 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
if(cljs.core.truth_(inst_26179)){
var statearr_26247_26304 = state_26234__$1;
(statearr_26247_26304[(1)] = (19));

} else {
var statearr_26248_26305 = state_26234__$1;
(statearr_26248_26305[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (21))){
var inst_26184 = (state_26234[(12)]);
var inst_26184__$1 = (state_26234[(2)]);
var inst_26185 = cljs.core.get.call(null,inst_26184__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26186 = cljs.core.get.call(null,inst_26184__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26187 = cljs.core.get.call(null,inst_26184__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26234__$1 = (function (){var statearr_26249 = state_26234;
(statearr_26249[(9)] = inst_26185);

(statearr_26249[(12)] = inst_26184__$1);

(statearr_26249[(13)] = inst_26186);

return statearr_26249;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26234__$1,(22),inst_26187);
} else {
if((state_val_26235 === (31))){
var inst_26216 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
if(cljs.core.truth_(inst_26216)){
var statearr_26250_26306 = state_26234__$1;
(statearr_26250_26306[(1)] = (32));

} else {
var statearr_26251_26307 = state_26234__$1;
(statearr_26251_26307[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (32))){
var inst_26193 = (state_26234[(14)]);
var state_26234__$1 = state_26234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26234__$1,(35),out,inst_26193);
} else {
if((state_val_26235 === (33))){
var inst_26184 = (state_26234[(12)]);
var inst_26161 = inst_26184;
var state_26234__$1 = (function (){var statearr_26252 = state_26234;
(statearr_26252[(7)] = inst_26161);

return statearr_26252;
})();
var statearr_26253_26308 = state_26234__$1;
(statearr_26253_26308[(2)] = null);

(statearr_26253_26308[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (13))){
var inst_26161 = (state_26234[(7)]);
var inst_26168 = inst_26161.cljs$lang$protocol_mask$partition0$;
var inst_26169 = (inst_26168 & (64));
var inst_26170 = inst_26161.cljs$core$ISeq$;
var inst_26171 = (cljs.core.PROTOCOL_SENTINEL === inst_26170);
var inst_26172 = ((inst_26169) || (inst_26171));
var state_26234__$1 = state_26234;
if(cljs.core.truth_(inst_26172)){
var statearr_26254_26309 = state_26234__$1;
(statearr_26254_26309[(1)] = (16));

} else {
var statearr_26255_26310 = state_26234__$1;
(statearr_26255_26310[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (22))){
var inst_26193 = (state_26234[(14)]);
var inst_26194 = (state_26234[(11)]);
var inst_26192 = (state_26234[(2)]);
var inst_26193__$1 = cljs.core.nth.call(null,inst_26192,(0),null);
var inst_26194__$1 = cljs.core.nth.call(null,inst_26192,(1),null);
var inst_26195 = (inst_26193__$1 == null);
var inst_26196 = cljs.core._EQ_.call(null,inst_26194__$1,change);
var inst_26197 = ((inst_26195) || (inst_26196));
var state_26234__$1 = (function (){var statearr_26256 = state_26234;
(statearr_26256[(14)] = inst_26193__$1);

(statearr_26256[(11)] = inst_26194__$1);

return statearr_26256;
})();
if(cljs.core.truth_(inst_26197)){
var statearr_26257_26311 = state_26234__$1;
(statearr_26257_26311[(1)] = (23));

} else {
var statearr_26258_26312 = state_26234__$1;
(statearr_26258_26312[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (36))){
var inst_26184 = (state_26234[(12)]);
var inst_26161 = inst_26184;
var state_26234__$1 = (function (){var statearr_26259 = state_26234;
(statearr_26259[(7)] = inst_26161);

return statearr_26259;
})();
var statearr_26260_26313 = state_26234__$1;
(statearr_26260_26313[(2)] = null);

(statearr_26260_26313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (29))){
var inst_26208 = (state_26234[(10)]);
var state_26234__$1 = state_26234;
var statearr_26261_26314 = state_26234__$1;
(statearr_26261_26314[(2)] = inst_26208);

(statearr_26261_26314[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (6))){
var state_26234__$1 = state_26234;
var statearr_26262_26315 = state_26234__$1;
(statearr_26262_26315[(2)] = false);

(statearr_26262_26315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (28))){
var inst_26204 = (state_26234[(2)]);
var inst_26205 = calc_state.call(null);
var inst_26161 = inst_26205;
var state_26234__$1 = (function (){var statearr_26263 = state_26234;
(statearr_26263[(7)] = inst_26161);

(statearr_26263[(15)] = inst_26204);

return statearr_26263;
})();
var statearr_26264_26316 = state_26234__$1;
(statearr_26264_26316[(2)] = null);

(statearr_26264_26316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (25))){
var inst_26230 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26265_26317 = state_26234__$1;
(statearr_26265_26317[(2)] = inst_26230);

(statearr_26265_26317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (34))){
var inst_26228 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26266_26318 = state_26234__$1;
(statearr_26266_26318[(2)] = inst_26228);

(statearr_26266_26318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (17))){
var state_26234__$1 = state_26234;
var statearr_26267_26319 = state_26234__$1;
(statearr_26267_26319[(2)] = false);

(statearr_26267_26319[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (3))){
var state_26234__$1 = state_26234;
var statearr_26268_26320 = state_26234__$1;
(statearr_26268_26320[(2)] = false);

(statearr_26268_26320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (12))){
var inst_26232 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26234__$1,inst_26232);
} else {
if((state_val_26235 === (2))){
var inst_26136 = (state_26234[(8)]);
var inst_26141 = inst_26136.cljs$lang$protocol_mask$partition0$;
var inst_26142 = (inst_26141 & (64));
var inst_26143 = inst_26136.cljs$core$ISeq$;
var inst_26144 = (cljs.core.PROTOCOL_SENTINEL === inst_26143);
var inst_26145 = ((inst_26142) || (inst_26144));
var state_26234__$1 = state_26234;
if(cljs.core.truth_(inst_26145)){
var statearr_26269_26321 = state_26234__$1;
(statearr_26269_26321[(1)] = (5));

} else {
var statearr_26270_26322 = state_26234__$1;
(statearr_26270_26322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (23))){
var inst_26193 = (state_26234[(14)]);
var inst_26199 = (inst_26193 == null);
var state_26234__$1 = state_26234;
if(cljs.core.truth_(inst_26199)){
var statearr_26271_26323 = state_26234__$1;
(statearr_26271_26323[(1)] = (26));

} else {
var statearr_26272_26324 = state_26234__$1;
(statearr_26272_26324[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (35))){
var inst_26219 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
if(cljs.core.truth_(inst_26219)){
var statearr_26273_26325 = state_26234__$1;
(statearr_26273_26325[(1)] = (36));

} else {
var statearr_26274_26326 = state_26234__$1;
(statearr_26274_26326[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (19))){
var inst_26161 = (state_26234[(7)]);
var inst_26181 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26161);
var state_26234__$1 = state_26234;
var statearr_26275_26327 = state_26234__$1;
(statearr_26275_26327[(2)] = inst_26181);

(statearr_26275_26327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (11))){
var inst_26161 = (state_26234[(7)]);
var inst_26165 = (inst_26161 == null);
var inst_26166 = cljs.core.not.call(null,inst_26165);
var state_26234__$1 = state_26234;
if(inst_26166){
var statearr_26276_26328 = state_26234__$1;
(statearr_26276_26328[(1)] = (13));

} else {
var statearr_26277_26329 = state_26234__$1;
(statearr_26277_26329[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (9))){
var inst_26136 = (state_26234[(8)]);
var state_26234__$1 = state_26234;
var statearr_26278_26330 = state_26234__$1;
(statearr_26278_26330[(2)] = inst_26136);

(statearr_26278_26330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (5))){
var state_26234__$1 = state_26234;
var statearr_26279_26331 = state_26234__$1;
(statearr_26279_26331[(2)] = true);

(statearr_26279_26331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (14))){
var state_26234__$1 = state_26234;
var statearr_26280_26332 = state_26234__$1;
(statearr_26280_26332[(2)] = false);

(statearr_26280_26332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (26))){
var inst_26194 = (state_26234[(11)]);
var inst_26201 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26194);
var state_26234__$1 = state_26234;
var statearr_26281_26333 = state_26234__$1;
(statearr_26281_26333[(2)] = inst_26201);

(statearr_26281_26333[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (16))){
var state_26234__$1 = state_26234;
var statearr_26282_26334 = state_26234__$1;
(statearr_26282_26334[(2)] = true);

(statearr_26282_26334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (38))){
var inst_26224 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26283_26335 = state_26234__$1;
(statearr_26283_26335[(2)] = inst_26224);

(statearr_26283_26335[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (30))){
var inst_26185 = (state_26234[(9)]);
var inst_26194 = (state_26234[(11)]);
var inst_26186 = (state_26234[(13)]);
var inst_26211 = cljs.core.empty_QMARK_.call(null,inst_26185);
var inst_26212 = inst_26186.call(null,inst_26194);
var inst_26213 = cljs.core.not.call(null,inst_26212);
var inst_26214 = ((inst_26211) && (inst_26213));
var state_26234__$1 = state_26234;
var statearr_26284_26336 = state_26234__$1;
(statearr_26284_26336[(2)] = inst_26214);

(statearr_26284_26336[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (10))){
var inst_26136 = (state_26234[(8)]);
var inst_26157 = (state_26234[(2)]);
var inst_26158 = cljs.core.get.call(null,inst_26157,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26159 = cljs.core.get.call(null,inst_26157,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26160 = cljs.core.get.call(null,inst_26157,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26161 = inst_26136;
var state_26234__$1 = (function (){var statearr_26285 = state_26234;
(statearr_26285[(7)] = inst_26161);

(statearr_26285[(16)] = inst_26160);

(statearr_26285[(17)] = inst_26158);

(statearr_26285[(18)] = inst_26159);

return statearr_26285;
})();
var statearr_26286_26337 = state_26234__$1;
(statearr_26286_26337[(2)] = null);

(statearr_26286_26337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (18))){
var inst_26176 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26287_26338 = state_26234__$1;
(statearr_26287_26338[(2)] = inst_26176);

(statearr_26287_26338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (37))){
var state_26234__$1 = state_26234;
var statearr_26288_26339 = state_26234__$1;
(statearr_26288_26339[(2)] = null);

(statearr_26288_26339[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (8))){
var inst_26136 = (state_26234[(8)]);
var inst_26154 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26136);
var state_26234__$1 = state_26234;
var statearr_26289_26340 = state_26234__$1;
(statearr_26289_26340[(2)] = inst_26154);

(statearr_26289_26340[(1)] = (10));


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
});})(c__25235__auto___26294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25140__auto__,c__25235__auto___26294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25141__auto__ = null;
var cljs$core$async$mix_$_state_machine__25141__auto____0 = (function (){
var statearr_26290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26290[(0)] = cljs$core$async$mix_$_state_machine__25141__auto__);

(statearr_26290[(1)] = (1));

return statearr_26290;
});
var cljs$core$async$mix_$_state_machine__25141__auto____1 = (function (state_26234){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_26234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e26291){if((e26291 instanceof Object)){
var ex__25144__auto__ = e26291;
var statearr_26292_26341 = state_26234;
(statearr_26292_26341[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26342 = state_26234;
state_26234 = G__26342;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25141__auto__ = function(state_26234){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25141__auto____1.call(this,state_26234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25141__auto____0;
cljs$core$async$mix_$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25141__auto____1;
return cljs$core$async$mix_$_state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___26294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25237__auto__ = (function (){var statearr_26293 = f__25236__auto__.call(null);
(statearr_26293[(6)] = c__25235__auto___26294);

return statearr_26293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___26294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__26344 = arguments.length;
switch (G__26344) {
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
var G__26348 = arguments.length;
switch (G__26348) {
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
return (function (p1__26346_SHARP_){
if(cljs.core.truth_(p1__26346_SHARP_.call(null,topic))){
return p1__26346_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26346_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26349 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26350){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26350 = meta26350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26351,meta26350__$1){
var self__ = this;
var _26351__$1 = this;
return (new cljs.core.async.t_cljs$core$async26349(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26350__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26351){
var self__ = this;
var _26351__$1 = this;
return self__.meta26350;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26349.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26349.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26349.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26349.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26349.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26349.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26349.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26349.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26350","meta26350",836095480,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26349";

cljs.core.async.t_cljs$core$async26349.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26349");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26349.
 */
cljs.core.async.__GT_t_cljs$core$async26349 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26349(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26350){
return (new cljs.core.async.t_cljs$core$async26349(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26350));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26349(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25235__auto___26469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___26469,mults,ensure_mult,p){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___26469,mults,ensure_mult,p){
return (function (state_26423){
var state_val_26424 = (state_26423[(1)]);
if((state_val_26424 === (7))){
var inst_26419 = (state_26423[(2)]);
var state_26423__$1 = state_26423;
var statearr_26425_26470 = state_26423__$1;
(statearr_26425_26470[(2)] = inst_26419);

(statearr_26425_26470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (20))){
var state_26423__$1 = state_26423;
var statearr_26426_26471 = state_26423__$1;
(statearr_26426_26471[(2)] = null);

(statearr_26426_26471[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (1))){
var state_26423__$1 = state_26423;
var statearr_26427_26472 = state_26423__$1;
(statearr_26427_26472[(2)] = null);

(statearr_26427_26472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (24))){
var inst_26402 = (state_26423[(7)]);
var inst_26411 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26402);
var state_26423__$1 = state_26423;
var statearr_26428_26473 = state_26423__$1;
(statearr_26428_26473[(2)] = inst_26411);

(statearr_26428_26473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (4))){
var inst_26354 = (state_26423[(8)]);
var inst_26354__$1 = (state_26423[(2)]);
var inst_26355 = (inst_26354__$1 == null);
var state_26423__$1 = (function (){var statearr_26429 = state_26423;
(statearr_26429[(8)] = inst_26354__$1);

return statearr_26429;
})();
if(cljs.core.truth_(inst_26355)){
var statearr_26430_26474 = state_26423__$1;
(statearr_26430_26474[(1)] = (5));

} else {
var statearr_26431_26475 = state_26423__$1;
(statearr_26431_26475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (15))){
var inst_26396 = (state_26423[(2)]);
var state_26423__$1 = state_26423;
var statearr_26432_26476 = state_26423__$1;
(statearr_26432_26476[(2)] = inst_26396);

(statearr_26432_26476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (21))){
var inst_26416 = (state_26423[(2)]);
var state_26423__$1 = (function (){var statearr_26433 = state_26423;
(statearr_26433[(9)] = inst_26416);

return statearr_26433;
})();
var statearr_26434_26477 = state_26423__$1;
(statearr_26434_26477[(2)] = null);

(statearr_26434_26477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (13))){
var inst_26378 = (state_26423[(10)]);
var inst_26380 = cljs.core.chunked_seq_QMARK_.call(null,inst_26378);
var state_26423__$1 = state_26423;
if(inst_26380){
var statearr_26435_26478 = state_26423__$1;
(statearr_26435_26478[(1)] = (16));

} else {
var statearr_26436_26479 = state_26423__$1;
(statearr_26436_26479[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (22))){
var inst_26408 = (state_26423[(2)]);
var state_26423__$1 = state_26423;
if(cljs.core.truth_(inst_26408)){
var statearr_26437_26480 = state_26423__$1;
(statearr_26437_26480[(1)] = (23));

} else {
var statearr_26438_26481 = state_26423__$1;
(statearr_26438_26481[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (6))){
var inst_26354 = (state_26423[(8)]);
var inst_26404 = (state_26423[(11)]);
var inst_26402 = (state_26423[(7)]);
var inst_26402__$1 = topic_fn.call(null,inst_26354);
var inst_26403 = cljs.core.deref.call(null,mults);
var inst_26404__$1 = cljs.core.get.call(null,inst_26403,inst_26402__$1);
var state_26423__$1 = (function (){var statearr_26439 = state_26423;
(statearr_26439[(11)] = inst_26404__$1);

(statearr_26439[(7)] = inst_26402__$1);

return statearr_26439;
})();
if(cljs.core.truth_(inst_26404__$1)){
var statearr_26440_26482 = state_26423__$1;
(statearr_26440_26482[(1)] = (19));

} else {
var statearr_26441_26483 = state_26423__$1;
(statearr_26441_26483[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (25))){
var inst_26413 = (state_26423[(2)]);
var state_26423__$1 = state_26423;
var statearr_26442_26484 = state_26423__$1;
(statearr_26442_26484[(2)] = inst_26413);

(statearr_26442_26484[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (17))){
var inst_26378 = (state_26423[(10)]);
var inst_26387 = cljs.core.first.call(null,inst_26378);
var inst_26388 = cljs.core.async.muxch_STAR_.call(null,inst_26387);
var inst_26389 = cljs.core.async.close_BANG_.call(null,inst_26388);
var inst_26390 = cljs.core.next.call(null,inst_26378);
var inst_26364 = inst_26390;
var inst_26365 = null;
var inst_26366 = (0);
var inst_26367 = (0);
var state_26423__$1 = (function (){var statearr_26443 = state_26423;
(statearr_26443[(12)] = inst_26364);

(statearr_26443[(13)] = inst_26367);

(statearr_26443[(14)] = inst_26366);

(statearr_26443[(15)] = inst_26365);

(statearr_26443[(16)] = inst_26389);

return statearr_26443;
})();
var statearr_26444_26485 = state_26423__$1;
(statearr_26444_26485[(2)] = null);

(statearr_26444_26485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (3))){
var inst_26421 = (state_26423[(2)]);
var state_26423__$1 = state_26423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26423__$1,inst_26421);
} else {
if((state_val_26424 === (12))){
var inst_26398 = (state_26423[(2)]);
var state_26423__$1 = state_26423;
var statearr_26445_26486 = state_26423__$1;
(statearr_26445_26486[(2)] = inst_26398);

(statearr_26445_26486[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (2))){
var state_26423__$1 = state_26423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26423__$1,(4),ch);
} else {
if((state_val_26424 === (23))){
var state_26423__$1 = state_26423;
var statearr_26446_26487 = state_26423__$1;
(statearr_26446_26487[(2)] = null);

(statearr_26446_26487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (19))){
var inst_26354 = (state_26423[(8)]);
var inst_26404 = (state_26423[(11)]);
var inst_26406 = cljs.core.async.muxch_STAR_.call(null,inst_26404);
var state_26423__$1 = state_26423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26423__$1,(22),inst_26406,inst_26354);
} else {
if((state_val_26424 === (11))){
var inst_26364 = (state_26423[(12)]);
var inst_26378 = (state_26423[(10)]);
var inst_26378__$1 = cljs.core.seq.call(null,inst_26364);
var state_26423__$1 = (function (){var statearr_26447 = state_26423;
(statearr_26447[(10)] = inst_26378__$1);

return statearr_26447;
})();
if(inst_26378__$1){
var statearr_26448_26488 = state_26423__$1;
(statearr_26448_26488[(1)] = (13));

} else {
var statearr_26449_26489 = state_26423__$1;
(statearr_26449_26489[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (9))){
var inst_26400 = (state_26423[(2)]);
var state_26423__$1 = state_26423;
var statearr_26450_26490 = state_26423__$1;
(statearr_26450_26490[(2)] = inst_26400);

(statearr_26450_26490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (5))){
var inst_26361 = cljs.core.deref.call(null,mults);
var inst_26362 = cljs.core.vals.call(null,inst_26361);
var inst_26363 = cljs.core.seq.call(null,inst_26362);
var inst_26364 = inst_26363;
var inst_26365 = null;
var inst_26366 = (0);
var inst_26367 = (0);
var state_26423__$1 = (function (){var statearr_26451 = state_26423;
(statearr_26451[(12)] = inst_26364);

(statearr_26451[(13)] = inst_26367);

(statearr_26451[(14)] = inst_26366);

(statearr_26451[(15)] = inst_26365);

return statearr_26451;
})();
var statearr_26452_26491 = state_26423__$1;
(statearr_26452_26491[(2)] = null);

(statearr_26452_26491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (14))){
var state_26423__$1 = state_26423;
var statearr_26456_26492 = state_26423__$1;
(statearr_26456_26492[(2)] = null);

(statearr_26456_26492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (16))){
var inst_26378 = (state_26423[(10)]);
var inst_26382 = cljs.core.chunk_first.call(null,inst_26378);
var inst_26383 = cljs.core.chunk_rest.call(null,inst_26378);
var inst_26384 = cljs.core.count.call(null,inst_26382);
var inst_26364 = inst_26383;
var inst_26365 = inst_26382;
var inst_26366 = inst_26384;
var inst_26367 = (0);
var state_26423__$1 = (function (){var statearr_26457 = state_26423;
(statearr_26457[(12)] = inst_26364);

(statearr_26457[(13)] = inst_26367);

(statearr_26457[(14)] = inst_26366);

(statearr_26457[(15)] = inst_26365);

return statearr_26457;
})();
var statearr_26458_26493 = state_26423__$1;
(statearr_26458_26493[(2)] = null);

(statearr_26458_26493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (10))){
var inst_26364 = (state_26423[(12)]);
var inst_26367 = (state_26423[(13)]);
var inst_26366 = (state_26423[(14)]);
var inst_26365 = (state_26423[(15)]);
var inst_26372 = cljs.core._nth.call(null,inst_26365,inst_26367);
var inst_26373 = cljs.core.async.muxch_STAR_.call(null,inst_26372);
var inst_26374 = cljs.core.async.close_BANG_.call(null,inst_26373);
var inst_26375 = (inst_26367 + (1));
var tmp26453 = inst_26364;
var tmp26454 = inst_26366;
var tmp26455 = inst_26365;
var inst_26364__$1 = tmp26453;
var inst_26365__$1 = tmp26455;
var inst_26366__$1 = tmp26454;
var inst_26367__$1 = inst_26375;
var state_26423__$1 = (function (){var statearr_26459 = state_26423;
(statearr_26459[(12)] = inst_26364__$1);

(statearr_26459[(13)] = inst_26367__$1);

(statearr_26459[(14)] = inst_26366__$1);

(statearr_26459[(17)] = inst_26374);

(statearr_26459[(15)] = inst_26365__$1);

return statearr_26459;
})();
var statearr_26460_26494 = state_26423__$1;
(statearr_26460_26494[(2)] = null);

(statearr_26460_26494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (18))){
var inst_26393 = (state_26423[(2)]);
var state_26423__$1 = state_26423;
var statearr_26461_26495 = state_26423__$1;
(statearr_26461_26495[(2)] = inst_26393);

(statearr_26461_26495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (8))){
var inst_26367 = (state_26423[(13)]);
var inst_26366 = (state_26423[(14)]);
var inst_26369 = (inst_26367 < inst_26366);
var inst_26370 = inst_26369;
var state_26423__$1 = state_26423;
if(cljs.core.truth_(inst_26370)){
var statearr_26462_26496 = state_26423__$1;
(statearr_26462_26496[(1)] = (10));

} else {
var statearr_26463_26497 = state_26423__$1;
(statearr_26463_26497[(1)] = (11));

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
});})(c__25235__auto___26469,mults,ensure_mult,p))
;
return ((function (switch__25140__auto__,c__25235__auto___26469,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25141__auto__ = null;
var cljs$core$async$state_machine__25141__auto____0 = (function (){
var statearr_26464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26464[(0)] = cljs$core$async$state_machine__25141__auto__);

(statearr_26464[(1)] = (1));

return statearr_26464;
});
var cljs$core$async$state_machine__25141__auto____1 = (function (state_26423){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_26423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e26465){if((e26465 instanceof Object)){
var ex__25144__auto__ = e26465;
var statearr_26466_26498 = state_26423;
(statearr_26466_26498[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26499 = state_26423;
state_26423 = G__26499;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$state_machine__25141__auto__ = function(state_26423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25141__auto____1.call(this,state_26423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25141__auto____0;
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25141__auto____1;
return cljs$core$async$state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___26469,mults,ensure_mult,p))
})();
var state__25237__auto__ = (function (){var statearr_26467 = f__25236__auto__.call(null);
(statearr_26467[(6)] = c__25235__auto___26469);

return statearr_26467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___26469,mults,ensure_mult,p))
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
var G__26501 = arguments.length;
switch (G__26501) {
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
var G__26504 = arguments.length;
switch (G__26504) {
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
var G__26507 = arguments.length;
switch (G__26507) {
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
var c__25235__auto___26574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___26574,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___26574,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26546){
var state_val_26547 = (state_26546[(1)]);
if((state_val_26547 === (7))){
var state_26546__$1 = state_26546;
var statearr_26548_26575 = state_26546__$1;
(statearr_26548_26575[(2)] = null);

(statearr_26548_26575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (1))){
var state_26546__$1 = state_26546;
var statearr_26549_26576 = state_26546__$1;
(statearr_26549_26576[(2)] = null);

(statearr_26549_26576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (4))){
var inst_26510 = (state_26546[(7)]);
var inst_26512 = (inst_26510 < cnt);
var state_26546__$1 = state_26546;
if(cljs.core.truth_(inst_26512)){
var statearr_26550_26577 = state_26546__$1;
(statearr_26550_26577[(1)] = (6));

} else {
var statearr_26551_26578 = state_26546__$1;
(statearr_26551_26578[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (15))){
var inst_26542 = (state_26546[(2)]);
var state_26546__$1 = state_26546;
var statearr_26552_26579 = state_26546__$1;
(statearr_26552_26579[(2)] = inst_26542);

(statearr_26552_26579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (13))){
var inst_26535 = cljs.core.async.close_BANG_.call(null,out);
var state_26546__$1 = state_26546;
var statearr_26553_26580 = state_26546__$1;
(statearr_26553_26580[(2)] = inst_26535);

(statearr_26553_26580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (6))){
var state_26546__$1 = state_26546;
var statearr_26554_26581 = state_26546__$1;
(statearr_26554_26581[(2)] = null);

(statearr_26554_26581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (3))){
var inst_26544 = (state_26546[(2)]);
var state_26546__$1 = state_26546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26546__$1,inst_26544);
} else {
if((state_val_26547 === (12))){
var inst_26532 = (state_26546[(8)]);
var inst_26532__$1 = (state_26546[(2)]);
var inst_26533 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26532__$1);
var state_26546__$1 = (function (){var statearr_26555 = state_26546;
(statearr_26555[(8)] = inst_26532__$1);

return statearr_26555;
})();
if(cljs.core.truth_(inst_26533)){
var statearr_26556_26582 = state_26546__$1;
(statearr_26556_26582[(1)] = (13));

} else {
var statearr_26557_26583 = state_26546__$1;
(statearr_26557_26583[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (2))){
var inst_26509 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26510 = (0);
var state_26546__$1 = (function (){var statearr_26558 = state_26546;
(statearr_26558[(7)] = inst_26510);

(statearr_26558[(9)] = inst_26509);

return statearr_26558;
})();
var statearr_26559_26584 = state_26546__$1;
(statearr_26559_26584[(2)] = null);

(statearr_26559_26584[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (11))){
var inst_26510 = (state_26546[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26546,(10),Object,null,(9));
var inst_26519 = chs__$1.call(null,inst_26510);
var inst_26520 = done.call(null,inst_26510);
var inst_26521 = cljs.core.async.take_BANG_.call(null,inst_26519,inst_26520);
var state_26546__$1 = state_26546;
var statearr_26560_26585 = state_26546__$1;
(statearr_26560_26585[(2)] = inst_26521);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26546__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (9))){
var inst_26510 = (state_26546[(7)]);
var inst_26523 = (state_26546[(2)]);
var inst_26524 = (inst_26510 + (1));
var inst_26510__$1 = inst_26524;
var state_26546__$1 = (function (){var statearr_26561 = state_26546;
(statearr_26561[(7)] = inst_26510__$1);

(statearr_26561[(10)] = inst_26523);

return statearr_26561;
})();
var statearr_26562_26586 = state_26546__$1;
(statearr_26562_26586[(2)] = null);

(statearr_26562_26586[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (5))){
var inst_26530 = (state_26546[(2)]);
var state_26546__$1 = (function (){var statearr_26563 = state_26546;
(statearr_26563[(11)] = inst_26530);

return statearr_26563;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26546__$1,(12),dchan);
} else {
if((state_val_26547 === (14))){
var inst_26532 = (state_26546[(8)]);
var inst_26537 = cljs.core.apply.call(null,f,inst_26532);
var state_26546__$1 = state_26546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26546__$1,(16),out,inst_26537);
} else {
if((state_val_26547 === (16))){
var inst_26539 = (state_26546[(2)]);
var state_26546__$1 = (function (){var statearr_26564 = state_26546;
(statearr_26564[(12)] = inst_26539);

return statearr_26564;
})();
var statearr_26565_26587 = state_26546__$1;
(statearr_26565_26587[(2)] = null);

(statearr_26565_26587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (10))){
var inst_26514 = (state_26546[(2)]);
var inst_26515 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26546__$1 = (function (){var statearr_26566 = state_26546;
(statearr_26566[(13)] = inst_26514);

return statearr_26566;
})();
var statearr_26567_26588 = state_26546__$1;
(statearr_26567_26588[(2)] = inst_26515);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26546__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (8))){
var inst_26528 = (state_26546[(2)]);
var state_26546__$1 = state_26546;
var statearr_26568_26589 = state_26546__$1;
(statearr_26568_26589[(2)] = inst_26528);

(statearr_26568_26589[(1)] = (5));


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
});})(c__25235__auto___26574,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25140__auto__,c__25235__auto___26574,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25141__auto__ = null;
var cljs$core$async$state_machine__25141__auto____0 = (function (){
var statearr_26569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26569[(0)] = cljs$core$async$state_machine__25141__auto__);

(statearr_26569[(1)] = (1));

return statearr_26569;
});
var cljs$core$async$state_machine__25141__auto____1 = (function (state_26546){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_26546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e26570){if((e26570 instanceof Object)){
var ex__25144__auto__ = e26570;
var statearr_26571_26590 = state_26546;
(statearr_26571_26590[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26591 = state_26546;
state_26546 = G__26591;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$state_machine__25141__auto__ = function(state_26546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25141__auto____1.call(this,state_26546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25141__auto____0;
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25141__auto____1;
return cljs$core$async$state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___26574,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25237__auto__ = (function (){var statearr_26572 = f__25236__auto__.call(null);
(statearr_26572[(6)] = c__25235__auto___26574);

return statearr_26572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___26574,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__26594 = arguments.length;
switch (G__26594) {
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
var c__25235__auto___26648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___26648,out){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___26648,out){
return (function (state_26626){
var state_val_26627 = (state_26626[(1)]);
if((state_val_26627 === (7))){
var inst_26606 = (state_26626[(7)]);
var inst_26605 = (state_26626[(8)]);
var inst_26605__$1 = (state_26626[(2)]);
var inst_26606__$1 = cljs.core.nth.call(null,inst_26605__$1,(0),null);
var inst_26607 = cljs.core.nth.call(null,inst_26605__$1,(1),null);
var inst_26608 = (inst_26606__$1 == null);
var state_26626__$1 = (function (){var statearr_26628 = state_26626;
(statearr_26628[(7)] = inst_26606__$1);

(statearr_26628[(9)] = inst_26607);

(statearr_26628[(8)] = inst_26605__$1);

return statearr_26628;
})();
if(cljs.core.truth_(inst_26608)){
var statearr_26629_26649 = state_26626__$1;
(statearr_26629_26649[(1)] = (8));

} else {
var statearr_26630_26650 = state_26626__$1;
(statearr_26630_26650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (1))){
var inst_26595 = cljs.core.vec.call(null,chs);
var inst_26596 = inst_26595;
var state_26626__$1 = (function (){var statearr_26631 = state_26626;
(statearr_26631[(10)] = inst_26596);

return statearr_26631;
})();
var statearr_26632_26651 = state_26626__$1;
(statearr_26632_26651[(2)] = null);

(statearr_26632_26651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (4))){
var inst_26596 = (state_26626[(10)]);
var state_26626__$1 = state_26626;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26626__$1,(7),inst_26596);
} else {
if((state_val_26627 === (6))){
var inst_26622 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26633_26652 = state_26626__$1;
(statearr_26633_26652[(2)] = inst_26622);

(statearr_26633_26652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (3))){
var inst_26624 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26626__$1,inst_26624);
} else {
if((state_val_26627 === (2))){
var inst_26596 = (state_26626[(10)]);
var inst_26598 = cljs.core.count.call(null,inst_26596);
var inst_26599 = (inst_26598 > (0));
var state_26626__$1 = state_26626;
if(cljs.core.truth_(inst_26599)){
var statearr_26635_26653 = state_26626__$1;
(statearr_26635_26653[(1)] = (4));

} else {
var statearr_26636_26654 = state_26626__$1;
(statearr_26636_26654[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (11))){
var inst_26596 = (state_26626[(10)]);
var inst_26615 = (state_26626[(2)]);
var tmp26634 = inst_26596;
var inst_26596__$1 = tmp26634;
var state_26626__$1 = (function (){var statearr_26637 = state_26626;
(statearr_26637[(10)] = inst_26596__$1);

(statearr_26637[(11)] = inst_26615);

return statearr_26637;
})();
var statearr_26638_26655 = state_26626__$1;
(statearr_26638_26655[(2)] = null);

(statearr_26638_26655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (9))){
var inst_26606 = (state_26626[(7)]);
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26626__$1,(11),out,inst_26606);
} else {
if((state_val_26627 === (5))){
var inst_26620 = cljs.core.async.close_BANG_.call(null,out);
var state_26626__$1 = state_26626;
var statearr_26639_26656 = state_26626__$1;
(statearr_26639_26656[(2)] = inst_26620);

(statearr_26639_26656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (10))){
var inst_26618 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26640_26657 = state_26626__$1;
(statearr_26640_26657[(2)] = inst_26618);

(statearr_26640_26657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (8))){
var inst_26606 = (state_26626[(7)]);
var inst_26596 = (state_26626[(10)]);
var inst_26607 = (state_26626[(9)]);
var inst_26605 = (state_26626[(8)]);
var inst_26610 = (function (){var cs = inst_26596;
var vec__26601 = inst_26605;
var v = inst_26606;
var c = inst_26607;
return ((function (cs,vec__26601,v,c,inst_26606,inst_26596,inst_26607,inst_26605,state_val_26627,c__25235__auto___26648,out){
return (function (p1__26592_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26592_SHARP_);
});
;})(cs,vec__26601,v,c,inst_26606,inst_26596,inst_26607,inst_26605,state_val_26627,c__25235__auto___26648,out))
})();
var inst_26611 = cljs.core.filterv.call(null,inst_26610,inst_26596);
var inst_26596__$1 = inst_26611;
var state_26626__$1 = (function (){var statearr_26641 = state_26626;
(statearr_26641[(10)] = inst_26596__$1);

return statearr_26641;
})();
var statearr_26642_26658 = state_26626__$1;
(statearr_26642_26658[(2)] = null);

(statearr_26642_26658[(1)] = (2));


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
});})(c__25235__auto___26648,out))
;
return ((function (switch__25140__auto__,c__25235__auto___26648,out){
return (function() {
var cljs$core$async$state_machine__25141__auto__ = null;
var cljs$core$async$state_machine__25141__auto____0 = (function (){
var statearr_26643 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26643[(0)] = cljs$core$async$state_machine__25141__auto__);

(statearr_26643[(1)] = (1));

return statearr_26643;
});
var cljs$core$async$state_machine__25141__auto____1 = (function (state_26626){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_26626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e26644){if((e26644 instanceof Object)){
var ex__25144__auto__ = e26644;
var statearr_26645_26659 = state_26626;
(statearr_26645_26659[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26660 = state_26626;
state_26626 = G__26660;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$state_machine__25141__auto__ = function(state_26626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25141__auto____1.call(this,state_26626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25141__auto____0;
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25141__auto____1;
return cljs$core$async$state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___26648,out))
})();
var state__25237__auto__ = (function (){var statearr_26646 = f__25236__auto__.call(null);
(statearr_26646[(6)] = c__25235__auto___26648);

return statearr_26646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___26648,out))
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
var G__26662 = arguments.length;
switch (G__26662) {
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
var c__25235__auto___26707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___26707,out){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___26707,out){
return (function (state_26686){
var state_val_26687 = (state_26686[(1)]);
if((state_val_26687 === (7))){
var inst_26668 = (state_26686[(7)]);
var inst_26668__$1 = (state_26686[(2)]);
var inst_26669 = (inst_26668__$1 == null);
var inst_26670 = cljs.core.not.call(null,inst_26669);
var state_26686__$1 = (function (){var statearr_26688 = state_26686;
(statearr_26688[(7)] = inst_26668__$1);

return statearr_26688;
})();
if(inst_26670){
var statearr_26689_26708 = state_26686__$1;
(statearr_26689_26708[(1)] = (8));

} else {
var statearr_26690_26709 = state_26686__$1;
(statearr_26690_26709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (1))){
var inst_26663 = (0);
var state_26686__$1 = (function (){var statearr_26691 = state_26686;
(statearr_26691[(8)] = inst_26663);

return statearr_26691;
})();
var statearr_26692_26710 = state_26686__$1;
(statearr_26692_26710[(2)] = null);

(statearr_26692_26710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (4))){
var state_26686__$1 = state_26686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26686__$1,(7),ch);
} else {
if((state_val_26687 === (6))){
var inst_26681 = (state_26686[(2)]);
var state_26686__$1 = state_26686;
var statearr_26693_26711 = state_26686__$1;
(statearr_26693_26711[(2)] = inst_26681);

(statearr_26693_26711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (3))){
var inst_26683 = (state_26686[(2)]);
var inst_26684 = cljs.core.async.close_BANG_.call(null,out);
var state_26686__$1 = (function (){var statearr_26694 = state_26686;
(statearr_26694[(9)] = inst_26683);

return statearr_26694;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26686__$1,inst_26684);
} else {
if((state_val_26687 === (2))){
var inst_26663 = (state_26686[(8)]);
var inst_26665 = (inst_26663 < n);
var state_26686__$1 = state_26686;
if(cljs.core.truth_(inst_26665)){
var statearr_26695_26712 = state_26686__$1;
(statearr_26695_26712[(1)] = (4));

} else {
var statearr_26696_26713 = state_26686__$1;
(statearr_26696_26713[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (11))){
var inst_26663 = (state_26686[(8)]);
var inst_26673 = (state_26686[(2)]);
var inst_26674 = (inst_26663 + (1));
var inst_26663__$1 = inst_26674;
var state_26686__$1 = (function (){var statearr_26697 = state_26686;
(statearr_26697[(10)] = inst_26673);

(statearr_26697[(8)] = inst_26663__$1);

return statearr_26697;
})();
var statearr_26698_26714 = state_26686__$1;
(statearr_26698_26714[(2)] = null);

(statearr_26698_26714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (9))){
var state_26686__$1 = state_26686;
var statearr_26699_26715 = state_26686__$1;
(statearr_26699_26715[(2)] = null);

(statearr_26699_26715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (5))){
var state_26686__$1 = state_26686;
var statearr_26700_26716 = state_26686__$1;
(statearr_26700_26716[(2)] = null);

(statearr_26700_26716[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (10))){
var inst_26678 = (state_26686[(2)]);
var state_26686__$1 = state_26686;
var statearr_26701_26717 = state_26686__$1;
(statearr_26701_26717[(2)] = inst_26678);

(statearr_26701_26717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (8))){
var inst_26668 = (state_26686[(7)]);
var state_26686__$1 = state_26686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26686__$1,(11),out,inst_26668);
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
});})(c__25235__auto___26707,out))
;
return ((function (switch__25140__auto__,c__25235__auto___26707,out){
return (function() {
var cljs$core$async$state_machine__25141__auto__ = null;
var cljs$core$async$state_machine__25141__auto____0 = (function (){
var statearr_26702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26702[(0)] = cljs$core$async$state_machine__25141__auto__);

(statearr_26702[(1)] = (1));

return statearr_26702;
});
var cljs$core$async$state_machine__25141__auto____1 = (function (state_26686){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_26686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e26703){if((e26703 instanceof Object)){
var ex__25144__auto__ = e26703;
var statearr_26704_26718 = state_26686;
(statearr_26704_26718[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26719 = state_26686;
state_26686 = G__26719;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$state_machine__25141__auto__ = function(state_26686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25141__auto____1.call(this,state_26686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25141__auto____0;
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25141__auto____1;
return cljs$core$async$state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___26707,out))
})();
var state__25237__auto__ = (function (){var statearr_26705 = f__25236__auto__.call(null);
(statearr_26705[(6)] = c__25235__auto___26707);

return statearr_26705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___26707,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26721 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26721 = (function (f,ch,meta26722){
this.f = f;
this.ch = ch;
this.meta26722 = meta26722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26723,meta26722__$1){
var self__ = this;
var _26723__$1 = this;
return (new cljs.core.async.t_cljs$core$async26721(self__.f,self__.ch,meta26722__$1));
});

cljs.core.async.t_cljs$core$async26721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26723){
var self__ = this;
var _26723__$1 = this;
return self__.meta26722;
});

cljs.core.async.t_cljs$core$async26721.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26721.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26721.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26721.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26721.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26724 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26724 = (function (f,ch,meta26722,_,fn1,meta26725){
this.f = f;
this.ch = ch;
this.meta26722 = meta26722;
this._ = _;
this.fn1 = fn1;
this.meta26725 = meta26725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26726,meta26725__$1){
var self__ = this;
var _26726__$1 = this;
return (new cljs.core.async.t_cljs$core$async26724(self__.f,self__.ch,self__.meta26722,self__._,self__.fn1,meta26725__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26724.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26726){
var self__ = this;
var _26726__$1 = this;
return self__.meta26725;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26724.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26724.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26724.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26724.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26720_SHARP_){
return f1.call(null,(((p1__26720_SHARP_ == null))?null:self__.f.call(null,p1__26720_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26724.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26722","meta26722",622882551,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26721","cljs.core.async/t_cljs$core$async26721",611176346,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26725","meta26725",-1353641417,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26724";

cljs.core.async.t_cljs$core$async26724.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26724");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26724.
 */
cljs.core.async.__GT_t_cljs$core$async26724 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26724(f__$1,ch__$1,meta26722__$1,___$2,fn1__$1,meta26725){
return (new cljs.core.async.t_cljs$core$async26724(f__$1,ch__$1,meta26722__$1,___$2,fn1__$1,meta26725));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26724(self__.f,self__.ch,self__.meta26722,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26721.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26721.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26722","meta26722",622882551,null)], null);
});

cljs.core.async.t_cljs$core$async26721.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26721";

cljs.core.async.t_cljs$core$async26721.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26721");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26721.
 */
cljs.core.async.__GT_t_cljs$core$async26721 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26721(f__$1,ch__$1,meta26722){
return (new cljs.core.async.t_cljs$core$async26721(f__$1,ch__$1,meta26722));
});

}

return (new cljs.core.async.t_cljs$core$async26721(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26727 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26727 = (function (f,ch,meta26728){
this.f = f;
this.ch = ch;
this.meta26728 = meta26728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26729,meta26728__$1){
var self__ = this;
var _26729__$1 = this;
return (new cljs.core.async.t_cljs$core$async26727(self__.f,self__.ch,meta26728__$1));
});

cljs.core.async.t_cljs$core$async26727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26729){
var self__ = this;
var _26729__$1 = this;
return self__.meta26728;
});

cljs.core.async.t_cljs$core$async26727.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26727.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26727.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26728","meta26728",-34765358,null)], null);
});

cljs.core.async.t_cljs$core$async26727.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26727";

cljs.core.async.t_cljs$core$async26727.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26727");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26727.
 */
cljs.core.async.__GT_t_cljs$core$async26727 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26727(f__$1,ch__$1,meta26728){
return (new cljs.core.async.t_cljs$core$async26727(f__$1,ch__$1,meta26728));
});

}

return (new cljs.core.async.t_cljs$core$async26727(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26730 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26730 = (function (p,ch,meta26731){
this.p = p;
this.ch = ch;
this.meta26731 = meta26731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26732,meta26731__$1){
var self__ = this;
var _26732__$1 = this;
return (new cljs.core.async.t_cljs$core$async26730(self__.p,self__.ch,meta26731__$1));
});

cljs.core.async.t_cljs$core$async26730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26732){
var self__ = this;
var _26732__$1 = this;
return self__.meta26731;
});

cljs.core.async.t_cljs$core$async26730.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26730.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26730.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26730.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26730.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26730.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26730.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26731","meta26731",-814141678,null)], null);
});

cljs.core.async.t_cljs$core$async26730.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26730";

cljs.core.async.t_cljs$core$async26730.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26730");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26730.
 */
cljs.core.async.__GT_t_cljs$core$async26730 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26730(p__$1,ch__$1,meta26731){
return (new cljs.core.async.t_cljs$core$async26730(p__$1,ch__$1,meta26731));
});

}

return (new cljs.core.async.t_cljs$core$async26730(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26734 = arguments.length;
switch (G__26734) {
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
var c__25235__auto___26774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___26774,out){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___26774,out){
return (function (state_26755){
var state_val_26756 = (state_26755[(1)]);
if((state_val_26756 === (7))){
var inst_26751 = (state_26755[(2)]);
var state_26755__$1 = state_26755;
var statearr_26757_26775 = state_26755__$1;
(statearr_26757_26775[(2)] = inst_26751);

(statearr_26757_26775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (1))){
var state_26755__$1 = state_26755;
var statearr_26758_26776 = state_26755__$1;
(statearr_26758_26776[(2)] = null);

(statearr_26758_26776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (4))){
var inst_26737 = (state_26755[(7)]);
var inst_26737__$1 = (state_26755[(2)]);
var inst_26738 = (inst_26737__$1 == null);
var state_26755__$1 = (function (){var statearr_26759 = state_26755;
(statearr_26759[(7)] = inst_26737__$1);

return statearr_26759;
})();
if(cljs.core.truth_(inst_26738)){
var statearr_26760_26777 = state_26755__$1;
(statearr_26760_26777[(1)] = (5));

} else {
var statearr_26761_26778 = state_26755__$1;
(statearr_26761_26778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (6))){
var inst_26737 = (state_26755[(7)]);
var inst_26742 = p.call(null,inst_26737);
var state_26755__$1 = state_26755;
if(cljs.core.truth_(inst_26742)){
var statearr_26762_26779 = state_26755__$1;
(statearr_26762_26779[(1)] = (8));

} else {
var statearr_26763_26780 = state_26755__$1;
(statearr_26763_26780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (3))){
var inst_26753 = (state_26755[(2)]);
var state_26755__$1 = state_26755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26755__$1,inst_26753);
} else {
if((state_val_26756 === (2))){
var state_26755__$1 = state_26755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26755__$1,(4),ch);
} else {
if((state_val_26756 === (11))){
var inst_26745 = (state_26755[(2)]);
var state_26755__$1 = state_26755;
var statearr_26764_26781 = state_26755__$1;
(statearr_26764_26781[(2)] = inst_26745);

(statearr_26764_26781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (9))){
var state_26755__$1 = state_26755;
var statearr_26765_26782 = state_26755__$1;
(statearr_26765_26782[(2)] = null);

(statearr_26765_26782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (5))){
var inst_26740 = cljs.core.async.close_BANG_.call(null,out);
var state_26755__$1 = state_26755;
var statearr_26766_26783 = state_26755__$1;
(statearr_26766_26783[(2)] = inst_26740);

(statearr_26766_26783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (10))){
var inst_26748 = (state_26755[(2)]);
var state_26755__$1 = (function (){var statearr_26767 = state_26755;
(statearr_26767[(8)] = inst_26748);

return statearr_26767;
})();
var statearr_26768_26784 = state_26755__$1;
(statearr_26768_26784[(2)] = null);

(statearr_26768_26784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (8))){
var inst_26737 = (state_26755[(7)]);
var state_26755__$1 = state_26755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26755__$1,(11),out,inst_26737);
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
});})(c__25235__auto___26774,out))
;
return ((function (switch__25140__auto__,c__25235__auto___26774,out){
return (function() {
var cljs$core$async$state_machine__25141__auto__ = null;
var cljs$core$async$state_machine__25141__auto____0 = (function (){
var statearr_26769 = [null,null,null,null,null,null,null,null,null];
(statearr_26769[(0)] = cljs$core$async$state_machine__25141__auto__);

(statearr_26769[(1)] = (1));

return statearr_26769;
});
var cljs$core$async$state_machine__25141__auto____1 = (function (state_26755){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_26755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e26770){if((e26770 instanceof Object)){
var ex__25144__auto__ = e26770;
var statearr_26771_26785 = state_26755;
(statearr_26771_26785[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26786 = state_26755;
state_26755 = G__26786;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$state_machine__25141__auto__ = function(state_26755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25141__auto____1.call(this,state_26755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25141__auto____0;
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25141__auto____1;
return cljs$core$async$state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___26774,out))
})();
var state__25237__auto__ = (function (){var statearr_26772 = f__25236__auto__.call(null);
(statearr_26772[(6)] = c__25235__auto___26774);

return statearr_26772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___26774,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26788 = arguments.length;
switch (G__26788) {
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
var c__25235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto__){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto__){
return (function (state_26851){
var state_val_26852 = (state_26851[(1)]);
if((state_val_26852 === (7))){
var inst_26847 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26853_26891 = state_26851__$1;
(statearr_26853_26891[(2)] = inst_26847);

(statearr_26853_26891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (20))){
var inst_26817 = (state_26851[(7)]);
var inst_26828 = (state_26851[(2)]);
var inst_26829 = cljs.core.next.call(null,inst_26817);
var inst_26803 = inst_26829;
var inst_26804 = null;
var inst_26805 = (0);
var inst_26806 = (0);
var state_26851__$1 = (function (){var statearr_26854 = state_26851;
(statearr_26854[(8)] = inst_26804);

(statearr_26854[(9)] = inst_26828);

(statearr_26854[(10)] = inst_26805);

(statearr_26854[(11)] = inst_26806);

(statearr_26854[(12)] = inst_26803);

return statearr_26854;
})();
var statearr_26855_26892 = state_26851__$1;
(statearr_26855_26892[(2)] = null);

(statearr_26855_26892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (1))){
var state_26851__$1 = state_26851;
var statearr_26856_26893 = state_26851__$1;
(statearr_26856_26893[(2)] = null);

(statearr_26856_26893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (4))){
var inst_26792 = (state_26851[(13)]);
var inst_26792__$1 = (state_26851[(2)]);
var inst_26793 = (inst_26792__$1 == null);
var state_26851__$1 = (function (){var statearr_26857 = state_26851;
(statearr_26857[(13)] = inst_26792__$1);

return statearr_26857;
})();
if(cljs.core.truth_(inst_26793)){
var statearr_26858_26894 = state_26851__$1;
(statearr_26858_26894[(1)] = (5));

} else {
var statearr_26859_26895 = state_26851__$1;
(statearr_26859_26895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (15))){
var state_26851__$1 = state_26851;
var statearr_26863_26896 = state_26851__$1;
(statearr_26863_26896[(2)] = null);

(statearr_26863_26896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (21))){
var state_26851__$1 = state_26851;
var statearr_26864_26897 = state_26851__$1;
(statearr_26864_26897[(2)] = null);

(statearr_26864_26897[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (13))){
var inst_26804 = (state_26851[(8)]);
var inst_26805 = (state_26851[(10)]);
var inst_26806 = (state_26851[(11)]);
var inst_26803 = (state_26851[(12)]);
var inst_26813 = (state_26851[(2)]);
var inst_26814 = (inst_26806 + (1));
var tmp26860 = inst_26804;
var tmp26861 = inst_26805;
var tmp26862 = inst_26803;
var inst_26803__$1 = tmp26862;
var inst_26804__$1 = tmp26860;
var inst_26805__$1 = tmp26861;
var inst_26806__$1 = inst_26814;
var state_26851__$1 = (function (){var statearr_26865 = state_26851;
(statearr_26865[(8)] = inst_26804__$1);

(statearr_26865[(10)] = inst_26805__$1);

(statearr_26865[(14)] = inst_26813);

(statearr_26865[(11)] = inst_26806__$1);

(statearr_26865[(12)] = inst_26803__$1);

return statearr_26865;
})();
var statearr_26866_26898 = state_26851__$1;
(statearr_26866_26898[(2)] = null);

(statearr_26866_26898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (22))){
var state_26851__$1 = state_26851;
var statearr_26867_26899 = state_26851__$1;
(statearr_26867_26899[(2)] = null);

(statearr_26867_26899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (6))){
var inst_26792 = (state_26851[(13)]);
var inst_26801 = f.call(null,inst_26792);
var inst_26802 = cljs.core.seq.call(null,inst_26801);
var inst_26803 = inst_26802;
var inst_26804 = null;
var inst_26805 = (0);
var inst_26806 = (0);
var state_26851__$1 = (function (){var statearr_26868 = state_26851;
(statearr_26868[(8)] = inst_26804);

(statearr_26868[(10)] = inst_26805);

(statearr_26868[(11)] = inst_26806);

(statearr_26868[(12)] = inst_26803);

return statearr_26868;
})();
var statearr_26869_26900 = state_26851__$1;
(statearr_26869_26900[(2)] = null);

(statearr_26869_26900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (17))){
var inst_26817 = (state_26851[(7)]);
var inst_26821 = cljs.core.chunk_first.call(null,inst_26817);
var inst_26822 = cljs.core.chunk_rest.call(null,inst_26817);
var inst_26823 = cljs.core.count.call(null,inst_26821);
var inst_26803 = inst_26822;
var inst_26804 = inst_26821;
var inst_26805 = inst_26823;
var inst_26806 = (0);
var state_26851__$1 = (function (){var statearr_26870 = state_26851;
(statearr_26870[(8)] = inst_26804);

(statearr_26870[(10)] = inst_26805);

(statearr_26870[(11)] = inst_26806);

(statearr_26870[(12)] = inst_26803);

return statearr_26870;
})();
var statearr_26871_26901 = state_26851__$1;
(statearr_26871_26901[(2)] = null);

(statearr_26871_26901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (3))){
var inst_26849 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26851__$1,inst_26849);
} else {
if((state_val_26852 === (12))){
var inst_26837 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26872_26902 = state_26851__$1;
(statearr_26872_26902[(2)] = inst_26837);

(statearr_26872_26902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (2))){
var state_26851__$1 = state_26851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26851__$1,(4),in$);
} else {
if((state_val_26852 === (23))){
var inst_26845 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26873_26903 = state_26851__$1;
(statearr_26873_26903[(2)] = inst_26845);

(statearr_26873_26903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (19))){
var inst_26832 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26874_26904 = state_26851__$1;
(statearr_26874_26904[(2)] = inst_26832);

(statearr_26874_26904[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (11))){
var inst_26817 = (state_26851[(7)]);
var inst_26803 = (state_26851[(12)]);
var inst_26817__$1 = cljs.core.seq.call(null,inst_26803);
var state_26851__$1 = (function (){var statearr_26875 = state_26851;
(statearr_26875[(7)] = inst_26817__$1);

return statearr_26875;
})();
if(inst_26817__$1){
var statearr_26876_26905 = state_26851__$1;
(statearr_26876_26905[(1)] = (14));

} else {
var statearr_26877_26906 = state_26851__$1;
(statearr_26877_26906[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (9))){
var inst_26839 = (state_26851[(2)]);
var inst_26840 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26851__$1 = (function (){var statearr_26878 = state_26851;
(statearr_26878[(15)] = inst_26839);

return statearr_26878;
})();
if(cljs.core.truth_(inst_26840)){
var statearr_26879_26907 = state_26851__$1;
(statearr_26879_26907[(1)] = (21));

} else {
var statearr_26880_26908 = state_26851__$1;
(statearr_26880_26908[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (5))){
var inst_26795 = cljs.core.async.close_BANG_.call(null,out);
var state_26851__$1 = state_26851;
var statearr_26881_26909 = state_26851__$1;
(statearr_26881_26909[(2)] = inst_26795);

(statearr_26881_26909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (14))){
var inst_26817 = (state_26851[(7)]);
var inst_26819 = cljs.core.chunked_seq_QMARK_.call(null,inst_26817);
var state_26851__$1 = state_26851;
if(inst_26819){
var statearr_26882_26910 = state_26851__$1;
(statearr_26882_26910[(1)] = (17));

} else {
var statearr_26883_26911 = state_26851__$1;
(statearr_26883_26911[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (16))){
var inst_26835 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26884_26912 = state_26851__$1;
(statearr_26884_26912[(2)] = inst_26835);

(statearr_26884_26912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (10))){
var inst_26804 = (state_26851[(8)]);
var inst_26806 = (state_26851[(11)]);
var inst_26811 = cljs.core._nth.call(null,inst_26804,inst_26806);
var state_26851__$1 = state_26851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26851__$1,(13),out,inst_26811);
} else {
if((state_val_26852 === (18))){
var inst_26817 = (state_26851[(7)]);
var inst_26826 = cljs.core.first.call(null,inst_26817);
var state_26851__$1 = state_26851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26851__$1,(20),out,inst_26826);
} else {
if((state_val_26852 === (8))){
var inst_26805 = (state_26851[(10)]);
var inst_26806 = (state_26851[(11)]);
var inst_26808 = (inst_26806 < inst_26805);
var inst_26809 = inst_26808;
var state_26851__$1 = state_26851;
if(cljs.core.truth_(inst_26809)){
var statearr_26885_26913 = state_26851__$1;
(statearr_26885_26913[(1)] = (10));

} else {
var statearr_26886_26914 = state_26851__$1;
(statearr_26886_26914[(1)] = (11));

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
});})(c__25235__auto__))
;
return ((function (switch__25140__auto__,c__25235__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25141__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25141__auto____0 = (function (){
var statearr_26887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26887[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25141__auto__);

(statearr_26887[(1)] = (1));

return statearr_26887;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25141__auto____1 = (function (state_26851){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_26851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e26888){if((e26888 instanceof Object)){
var ex__25144__auto__ = e26888;
var statearr_26889_26915 = state_26851;
(statearr_26889_26915[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26916 = state_26851;
state_26851 = G__26916;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25141__auto__ = function(state_26851){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25141__auto____1.call(this,state_26851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25141__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25141__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto__))
})();
var state__25237__auto__ = (function (){var statearr_26890 = f__25236__auto__.call(null);
(statearr_26890[(6)] = c__25235__auto__);

return statearr_26890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto__))
);

return c__25235__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26918 = arguments.length;
switch (G__26918) {
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
var G__26921 = arguments.length;
switch (G__26921) {
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
var G__26924 = arguments.length;
switch (G__26924) {
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
var c__25235__auto___26971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___26971,out){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___26971,out){
return (function (state_26948){
var state_val_26949 = (state_26948[(1)]);
if((state_val_26949 === (7))){
var inst_26943 = (state_26948[(2)]);
var state_26948__$1 = state_26948;
var statearr_26950_26972 = state_26948__$1;
(statearr_26950_26972[(2)] = inst_26943);

(statearr_26950_26972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26949 === (1))){
var inst_26925 = null;
var state_26948__$1 = (function (){var statearr_26951 = state_26948;
(statearr_26951[(7)] = inst_26925);

return statearr_26951;
})();
var statearr_26952_26973 = state_26948__$1;
(statearr_26952_26973[(2)] = null);

(statearr_26952_26973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26949 === (4))){
var inst_26928 = (state_26948[(8)]);
var inst_26928__$1 = (state_26948[(2)]);
var inst_26929 = (inst_26928__$1 == null);
var inst_26930 = cljs.core.not.call(null,inst_26929);
var state_26948__$1 = (function (){var statearr_26953 = state_26948;
(statearr_26953[(8)] = inst_26928__$1);

return statearr_26953;
})();
if(inst_26930){
var statearr_26954_26974 = state_26948__$1;
(statearr_26954_26974[(1)] = (5));

} else {
var statearr_26955_26975 = state_26948__$1;
(statearr_26955_26975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26949 === (6))){
var state_26948__$1 = state_26948;
var statearr_26956_26976 = state_26948__$1;
(statearr_26956_26976[(2)] = null);

(statearr_26956_26976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26949 === (3))){
var inst_26945 = (state_26948[(2)]);
var inst_26946 = cljs.core.async.close_BANG_.call(null,out);
var state_26948__$1 = (function (){var statearr_26957 = state_26948;
(statearr_26957[(9)] = inst_26945);

return statearr_26957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26948__$1,inst_26946);
} else {
if((state_val_26949 === (2))){
var state_26948__$1 = state_26948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26948__$1,(4),ch);
} else {
if((state_val_26949 === (11))){
var inst_26928 = (state_26948[(8)]);
var inst_26937 = (state_26948[(2)]);
var inst_26925 = inst_26928;
var state_26948__$1 = (function (){var statearr_26958 = state_26948;
(statearr_26958[(10)] = inst_26937);

(statearr_26958[(7)] = inst_26925);

return statearr_26958;
})();
var statearr_26959_26977 = state_26948__$1;
(statearr_26959_26977[(2)] = null);

(statearr_26959_26977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26949 === (9))){
var inst_26928 = (state_26948[(8)]);
var state_26948__$1 = state_26948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26948__$1,(11),out,inst_26928);
} else {
if((state_val_26949 === (5))){
var inst_26925 = (state_26948[(7)]);
var inst_26928 = (state_26948[(8)]);
var inst_26932 = cljs.core._EQ_.call(null,inst_26928,inst_26925);
var state_26948__$1 = state_26948;
if(inst_26932){
var statearr_26961_26978 = state_26948__$1;
(statearr_26961_26978[(1)] = (8));

} else {
var statearr_26962_26979 = state_26948__$1;
(statearr_26962_26979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26949 === (10))){
var inst_26940 = (state_26948[(2)]);
var state_26948__$1 = state_26948;
var statearr_26963_26980 = state_26948__$1;
(statearr_26963_26980[(2)] = inst_26940);

(statearr_26963_26980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26949 === (8))){
var inst_26925 = (state_26948[(7)]);
var tmp26960 = inst_26925;
var inst_26925__$1 = tmp26960;
var state_26948__$1 = (function (){var statearr_26964 = state_26948;
(statearr_26964[(7)] = inst_26925__$1);

return statearr_26964;
})();
var statearr_26965_26981 = state_26948__$1;
(statearr_26965_26981[(2)] = null);

(statearr_26965_26981[(1)] = (2));


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
});})(c__25235__auto___26971,out))
;
return ((function (switch__25140__auto__,c__25235__auto___26971,out){
return (function() {
var cljs$core$async$state_machine__25141__auto__ = null;
var cljs$core$async$state_machine__25141__auto____0 = (function (){
var statearr_26966 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26966[(0)] = cljs$core$async$state_machine__25141__auto__);

(statearr_26966[(1)] = (1));

return statearr_26966;
});
var cljs$core$async$state_machine__25141__auto____1 = (function (state_26948){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_26948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e26967){if((e26967 instanceof Object)){
var ex__25144__auto__ = e26967;
var statearr_26968_26982 = state_26948;
(statearr_26968_26982[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26983 = state_26948;
state_26948 = G__26983;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$state_machine__25141__auto__ = function(state_26948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25141__auto____1.call(this,state_26948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25141__auto____0;
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25141__auto____1;
return cljs$core$async$state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___26971,out))
})();
var state__25237__auto__ = (function (){var statearr_26969 = f__25236__auto__.call(null);
(statearr_26969[(6)] = c__25235__auto___26971);

return statearr_26969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___26971,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26985 = arguments.length;
switch (G__26985) {
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
var c__25235__auto___27051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___27051,out){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___27051,out){
return (function (state_27023){
var state_val_27024 = (state_27023[(1)]);
if((state_val_27024 === (7))){
var inst_27019 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27025_27052 = state_27023__$1;
(statearr_27025_27052[(2)] = inst_27019);

(statearr_27025_27052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (1))){
var inst_26986 = (new Array(n));
var inst_26987 = inst_26986;
var inst_26988 = (0);
var state_27023__$1 = (function (){var statearr_27026 = state_27023;
(statearr_27026[(7)] = inst_26987);

(statearr_27026[(8)] = inst_26988);

return statearr_27026;
})();
var statearr_27027_27053 = state_27023__$1;
(statearr_27027_27053[(2)] = null);

(statearr_27027_27053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (4))){
var inst_26991 = (state_27023[(9)]);
var inst_26991__$1 = (state_27023[(2)]);
var inst_26992 = (inst_26991__$1 == null);
var inst_26993 = cljs.core.not.call(null,inst_26992);
var state_27023__$1 = (function (){var statearr_27028 = state_27023;
(statearr_27028[(9)] = inst_26991__$1);

return statearr_27028;
})();
if(inst_26993){
var statearr_27029_27054 = state_27023__$1;
(statearr_27029_27054[(1)] = (5));

} else {
var statearr_27030_27055 = state_27023__$1;
(statearr_27030_27055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (15))){
var inst_27013 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27031_27056 = state_27023__$1;
(statearr_27031_27056[(2)] = inst_27013);

(statearr_27031_27056[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (13))){
var state_27023__$1 = state_27023;
var statearr_27032_27057 = state_27023__$1;
(statearr_27032_27057[(2)] = null);

(statearr_27032_27057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (6))){
var inst_26988 = (state_27023[(8)]);
var inst_27009 = (inst_26988 > (0));
var state_27023__$1 = state_27023;
if(cljs.core.truth_(inst_27009)){
var statearr_27033_27058 = state_27023__$1;
(statearr_27033_27058[(1)] = (12));

} else {
var statearr_27034_27059 = state_27023__$1;
(statearr_27034_27059[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (3))){
var inst_27021 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27023__$1,inst_27021);
} else {
if((state_val_27024 === (12))){
var inst_26987 = (state_27023[(7)]);
var inst_27011 = cljs.core.vec.call(null,inst_26987);
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27023__$1,(15),out,inst_27011);
} else {
if((state_val_27024 === (2))){
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27023__$1,(4),ch);
} else {
if((state_val_27024 === (11))){
var inst_27003 = (state_27023[(2)]);
var inst_27004 = (new Array(n));
var inst_26987 = inst_27004;
var inst_26988 = (0);
var state_27023__$1 = (function (){var statearr_27035 = state_27023;
(statearr_27035[(7)] = inst_26987);

(statearr_27035[(10)] = inst_27003);

(statearr_27035[(8)] = inst_26988);

return statearr_27035;
})();
var statearr_27036_27060 = state_27023__$1;
(statearr_27036_27060[(2)] = null);

(statearr_27036_27060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (9))){
var inst_26987 = (state_27023[(7)]);
var inst_27001 = cljs.core.vec.call(null,inst_26987);
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27023__$1,(11),out,inst_27001);
} else {
if((state_val_27024 === (5))){
var inst_26991 = (state_27023[(9)]);
var inst_26996 = (state_27023[(11)]);
var inst_26987 = (state_27023[(7)]);
var inst_26988 = (state_27023[(8)]);
var inst_26995 = (inst_26987[inst_26988] = inst_26991);
var inst_26996__$1 = (inst_26988 + (1));
var inst_26997 = (inst_26996__$1 < n);
var state_27023__$1 = (function (){var statearr_27037 = state_27023;
(statearr_27037[(11)] = inst_26996__$1);

(statearr_27037[(12)] = inst_26995);

return statearr_27037;
})();
if(cljs.core.truth_(inst_26997)){
var statearr_27038_27061 = state_27023__$1;
(statearr_27038_27061[(1)] = (8));

} else {
var statearr_27039_27062 = state_27023__$1;
(statearr_27039_27062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (14))){
var inst_27016 = (state_27023[(2)]);
var inst_27017 = cljs.core.async.close_BANG_.call(null,out);
var state_27023__$1 = (function (){var statearr_27041 = state_27023;
(statearr_27041[(13)] = inst_27016);

return statearr_27041;
})();
var statearr_27042_27063 = state_27023__$1;
(statearr_27042_27063[(2)] = inst_27017);

(statearr_27042_27063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (10))){
var inst_27007 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27043_27064 = state_27023__$1;
(statearr_27043_27064[(2)] = inst_27007);

(statearr_27043_27064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (8))){
var inst_26996 = (state_27023[(11)]);
var inst_26987 = (state_27023[(7)]);
var tmp27040 = inst_26987;
var inst_26987__$1 = tmp27040;
var inst_26988 = inst_26996;
var state_27023__$1 = (function (){var statearr_27044 = state_27023;
(statearr_27044[(7)] = inst_26987__$1);

(statearr_27044[(8)] = inst_26988);

return statearr_27044;
})();
var statearr_27045_27065 = state_27023__$1;
(statearr_27045_27065[(2)] = null);

(statearr_27045_27065[(1)] = (2));


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
});})(c__25235__auto___27051,out))
;
return ((function (switch__25140__auto__,c__25235__auto___27051,out){
return (function() {
var cljs$core$async$state_machine__25141__auto__ = null;
var cljs$core$async$state_machine__25141__auto____0 = (function (){
var statearr_27046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27046[(0)] = cljs$core$async$state_machine__25141__auto__);

(statearr_27046[(1)] = (1));

return statearr_27046;
});
var cljs$core$async$state_machine__25141__auto____1 = (function (state_27023){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_27023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e27047){if((e27047 instanceof Object)){
var ex__25144__auto__ = e27047;
var statearr_27048_27066 = state_27023;
(statearr_27048_27066[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27067 = state_27023;
state_27023 = G__27067;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$state_machine__25141__auto__ = function(state_27023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25141__auto____1.call(this,state_27023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25141__auto____0;
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25141__auto____1;
return cljs$core$async$state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___27051,out))
})();
var state__25237__auto__ = (function (){var statearr_27049 = f__25236__auto__.call(null);
(statearr_27049[(6)] = c__25235__auto___27051);

return statearr_27049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___27051,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27069 = arguments.length;
switch (G__27069) {
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
var c__25235__auto___27139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25235__auto___27139,out){
return (function (){
var f__25236__auto__ = (function (){var switch__25140__auto__ = ((function (c__25235__auto___27139,out){
return (function (state_27111){
var state_val_27112 = (state_27111[(1)]);
if((state_val_27112 === (7))){
var inst_27107 = (state_27111[(2)]);
var state_27111__$1 = state_27111;
var statearr_27113_27140 = state_27111__$1;
(statearr_27113_27140[(2)] = inst_27107);

(statearr_27113_27140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (1))){
var inst_27070 = [];
var inst_27071 = inst_27070;
var inst_27072 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27111__$1 = (function (){var statearr_27114 = state_27111;
(statearr_27114[(7)] = inst_27071);

(statearr_27114[(8)] = inst_27072);

return statearr_27114;
})();
var statearr_27115_27141 = state_27111__$1;
(statearr_27115_27141[(2)] = null);

(statearr_27115_27141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (4))){
var inst_27075 = (state_27111[(9)]);
var inst_27075__$1 = (state_27111[(2)]);
var inst_27076 = (inst_27075__$1 == null);
var inst_27077 = cljs.core.not.call(null,inst_27076);
var state_27111__$1 = (function (){var statearr_27116 = state_27111;
(statearr_27116[(9)] = inst_27075__$1);

return statearr_27116;
})();
if(inst_27077){
var statearr_27117_27142 = state_27111__$1;
(statearr_27117_27142[(1)] = (5));

} else {
var statearr_27118_27143 = state_27111__$1;
(statearr_27118_27143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (15))){
var inst_27101 = (state_27111[(2)]);
var state_27111__$1 = state_27111;
var statearr_27119_27144 = state_27111__$1;
(statearr_27119_27144[(2)] = inst_27101);

(statearr_27119_27144[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (13))){
var state_27111__$1 = state_27111;
var statearr_27120_27145 = state_27111__$1;
(statearr_27120_27145[(2)] = null);

(statearr_27120_27145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (6))){
var inst_27071 = (state_27111[(7)]);
var inst_27096 = inst_27071.length;
var inst_27097 = (inst_27096 > (0));
var state_27111__$1 = state_27111;
if(cljs.core.truth_(inst_27097)){
var statearr_27121_27146 = state_27111__$1;
(statearr_27121_27146[(1)] = (12));

} else {
var statearr_27122_27147 = state_27111__$1;
(statearr_27122_27147[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (3))){
var inst_27109 = (state_27111[(2)]);
var state_27111__$1 = state_27111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27111__$1,inst_27109);
} else {
if((state_val_27112 === (12))){
var inst_27071 = (state_27111[(7)]);
var inst_27099 = cljs.core.vec.call(null,inst_27071);
var state_27111__$1 = state_27111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27111__$1,(15),out,inst_27099);
} else {
if((state_val_27112 === (2))){
var state_27111__$1 = state_27111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27111__$1,(4),ch);
} else {
if((state_val_27112 === (11))){
var inst_27075 = (state_27111[(9)]);
var inst_27079 = (state_27111[(10)]);
var inst_27089 = (state_27111[(2)]);
var inst_27090 = [];
var inst_27091 = inst_27090.push(inst_27075);
var inst_27071 = inst_27090;
var inst_27072 = inst_27079;
var state_27111__$1 = (function (){var statearr_27123 = state_27111;
(statearr_27123[(7)] = inst_27071);

(statearr_27123[(11)] = inst_27089);

(statearr_27123[(12)] = inst_27091);

(statearr_27123[(8)] = inst_27072);

return statearr_27123;
})();
var statearr_27124_27148 = state_27111__$1;
(statearr_27124_27148[(2)] = null);

(statearr_27124_27148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (9))){
var inst_27071 = (state_27111[(7)]);
var inst_27087 = cljs.core.vec.call(null,inst_27071);
var state_27111__$1 = state_27111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27111__$1,(11),out,inst_27087);
} else {
if((state_val_27112 === (5))){
var inst_27075 = (state_27111[(9)]);
var inst_27079 = (state_27111[(10)]);
var inst_27072 = (state_27111[(8)]);
var inst_27079__$1 = f.call(null,inst_27075);
var inst_27080 = cljs.core._EQ_.call(null,inst_27079__$1,inst_27072);
var inst_27081 = cljs.core.keyword_identical_QMARK_.call(null,inst_27072,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27082 = ((inst_27080) || (inst_27081));
var state_27111__$1 = (function (){var statearr_27125 = state_27111;
(statearr_27125[(10)] = inst_27079__$1);

return statearr_27125;
})();
if(cljs.core.truth_(inst_27082)){
var statearr_27126_27149 = state_27111__$1;
(statearr_27126_27149[(1)] = (8));

} else {
var statearr_27127_27150 = state_27111__$1;
(statearr_27127_27150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (14))){
var inst_27104 = (state_27111[(2)]);
var inst_27105 = cljs.core.async.close_BANG_.call(null,out);
var state_27111__$1 = (function (){var statearr_27129 = state_27111;
(statearr_27129[(13)] = inst_27104);

return statearr_27129;
})();
var statearr_27130_27151 = state_27111__$1;
(statearr_27130_27151[(2)] = inst_27105);

(statearr_27130_27151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (10))){
var inst_27094 = (state_27111[(2)]);
var state_27111__$1 = state_27111;
var statearr_27131_27152 = state_27111__$1;
(statearr_27131_27152[(2)] = inst_27094);

(statearr_27131_27152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (8))){
var inst_27075 = (state_27111[(9)]);
var inst_27071 = (state_27111[(7)]);
var inst_27079 = (state_27111[(10)]);
var inst_27084 = inst_27071.push(inst_27075);
var tmp27128 = inst_27071;
var inst_27071__$1 = tmp27128;
var inst_27072 = inst_27079;
var state_27111__$1 = (function (){var statearr_27132 = state_27111;
(statearr_27132[(7)] = inst_27071__$1);

(statearr_27132[(14)] = inst_27084);

(statearr_27132[(8)] = inst_27072);

return statearr_27132;
})();
var statearr_27133_27153 = state_27111__$1;
(statearr_27133_27153[(2)] = null);

(statearr_27133_27153[(1)] = (2));


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
});})(c__25235__auto___27139,out))
;
return ((function (switch__25140__auto__,c__25235__auto___27139,out){
return (function() {
var cljs$core$async$state_machine__25141__auto__ = null;
var cljs$core$async$state_machine__25141__auto____0 = (function (){
var statearr_27134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27134[(0)] = cljs$core$async$state_machine__25141__auto__);

(statearr_27134[(1)] = (1));

return statearr_27134;
});
var cljs$core$async$state_machine__25141__auto____1 = (function (state_27111){
while(true){
var ret_value__25142__auto__ = (function (){try{while(true){
var result__25143__auto__ = switch__25140__auto__.call(null,state_27111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25143__auto__;
}
break;
}
}catch (e27135){if((e27135 instanceof Object)){
var ex__25144__auto__ = e27135;
var statearr_27136_27154 = state_27111;
(statearr_27136_27154[(5)] = ex__25144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27155 = state_27111;
state_27111 = G__27155;
continue;
} else {
return ret_value__25142__auto__;
}
break;
}
});
cljs$core$async$state_machine__25141__auto__ = function(state_27111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25141__auto____1.call(this,state_27111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25141__auto____0;
cljs$core$async$state_machine__25141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25141__auto____1;
return cljs$core$async$state_machine__25141__auto__;
})()
;})(switch__25140__auto__,c__25235__auto___27139,out))
})();
var state__25237__auto__ = (function (){var statearr_27137 = f__25236__auto__.call(null);
(statearr_27137[(6)] = c__25235__auto___27139);

return statearr_27137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25237__auto__);
});})(c__25235__auto___27139,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1545905842507
