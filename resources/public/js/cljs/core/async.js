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
var G__24635 = arguments.length;
switch (G__24635) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24636 = (function (f,blockable,meta24637){
this.f = f;
this.blockable = blockable;
this.meta24637 = meta24637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24638,meta24637__$1){
var self__ = this;
var _24638__$1 = this;
return (new cljs.core.async.t_cljs$core$async24636(self__.f,self__.blockable,meta24637__$1));
});

cljs.core.async.t_cljs$core$async24636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24638){
var self__ = this;
var _24638__$1 = this;
return self__.meta24637;
});

cljs.core.async.t_cljs$core$async24636.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24636.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24637","meta24637",-695840747,null)], null);
});

cljs.core.async.t_cljs$core$async24636.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24636";

cljs.core.async.t_cljs$core$async24636.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24636");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24636.
 */
cljs.core.async.__GT_t_cljs$core$async24636 = (function cljs$core$async$__GT_t_cljs$core$async24636(f__$1,blockable__$1,meta24637){
return (new cljs.core.async.t_cljs$core$async24636(f__$1,blockable__$1,meta24637));
});

}

return (new cljs.core.async.t_cljs$core$async24636(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24642 = arguments.length;
switch (G__24642) {
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
var G__24645 = arguments.length;
switch (G__24645) {
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
var G__24648 = arguments.length;
switch (G__24648) {
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
var val_24650 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24650);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24650,ret){
return (function (){
return fn1.call(null,val_24650);
});})(val_24650,ret))
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
var G__24652 = arguments.length;
switch (G__24652) {
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
var n__4518__auto___24654 = n;
var x_24655 = (0);
while(true){
if((x_24655 < n__4518__auto___24654)){
(a[x_24655] = (0));

var G__24656 = (x_24655 + (1));
x_24655 = G__24656;
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

var G__24657 = (i + (1));
i = G__24657;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24658 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24658 = (function (flag,meta24659){
this.flag = flag;
this.meta24659 = meta24659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24660,meta24659__$1){
var self__ = this;
var _24660__$1 = this;
return (new cljs.core.async.t_cljs$core$async24658(self__.flag,meta24659__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24660){
var self__ = this;
var _24660__$1 = this;
return self__.meta24659;
});})(flag))
;

cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24658.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24659","meta24659",-421922739,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24658.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24658";

cljs.core.async.t_cljs$core$async24658.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24658");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24658.
 */
cljs.core.async.__GT_t_cljs$core$async24658 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24658(flag__$1,meta24659){
return (new cljs.core.async.t_cljs$core$async24658(flag__$1,meta24659));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24658(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24661 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24661 = (function (flag,cb,meta24662){
this.flag = flag;
this.cb = cb;
this.meta24662 = meta24662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24663,meta24662__$1){
var self__ = this;
var _24663__$1 = this;
return (new cljs.core.async.t_cljs$core$async24661(self__.flag,self__.cb,meta24662__$1));
});

cljs.core.async.t_cljs$core$async24661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24663){
var self__ = this;
var _24663__$1 = this;
return self__.meta24662;
});

cljs.core.async.t_cljs$core$async24661.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24661.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24661.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24661.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24662","meta24662",328029315,null)], null);
});

cljs.core.async.t_cljs$core$async24661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24661";

cljs.core.async.t_cljs$core$async24661.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24661");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24661.
 */
cljs.core.async.__GT_t_cljs$core$async24661 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24661(flag__$1,cb__$1,meta24662){
return (new cljs.core.async.t_cljs$core$async24661(flag__$1,cb__$1,meta24662));
});

}

return (new cljs.core.async.t_cljs$core$async24661(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24664_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24664_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24665_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24665_SHARP_,port], null));
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
var G__24666 = (i + (1));
i = G__24666;
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
var len__4641__auto___24672 = arguments.length;
var i__4642__auto___24673 = (0);
while(true){
if((i__4642__auto___24673 < len__4641__auto___24672)){
args__4647__auto__.push((arguments[i__4642__auto___24673]));

var G__24674 = (i__4642__auto___24673 + (1));
i__4642__auto___24673 = G__24674;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24669){
var map__24670 = p__24669;
var map__24670__$1 = (((((!((map__24670 == null))))?(((((map__24670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24670):map__24670);
var opts = map__24670__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24667){
var G__24668 = cljs.core.first.call(null,seq24667);
var seq24667__$1 = cljs.core.next.call(null,seq24667);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24668,seq24667__$1);
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
var G__24676 = arguments.length;
switch (G__24676) {
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
var c__24575__auto___24722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___24722){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___24722){
return (function (state_24700){
var state_val_24701 = (state_24700[(1)]);
if((state_val_24701 === (7))){
var inst_24696 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24702_24723 = state_24700__$1;
(statearr_24702_24723[(2)] = inst_24696);

(statearr_24702_24723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (1))){
var state_24700__$1 = state_24700;
var statearr_24703_24724 = state_24700__$1;
(statearr_24703_24724[(2)] = null);

(statearr_24703_24724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (4))){
var inst_24679 = (state_24700[(7)]);
var inst_24679__$1 = (state_24700[(2)]);
var inst_24680 = (inst_24679__$1 == null);
var state_24700__$1 = (function (){var statearr_24704 = state_24700;
(statearr_24704[(7)] = inst_24679__$1);

return statearr_24704;
})();
if(cljs.core.truth_(inst_24680)){
var statearr_24705_24725 = state_24700__$1;
(statearr_24705_24725[(1)] = (5));

} else {
var statearr_24706_24726 = state_24700__$1;
(statearr_24706_24726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (13))){
var state_24700__$1 = state_24700;
var statearr_24707_24727 = state_24700__$1;
(statearr_24707_24727[(2)] = null);

(statearr_24707_24727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (6))){
var inst_24679 = (state_24700[(7)]);
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24700__$1,(11),to,inst_24679);
} else {
if((state_val_24701 === (3))){
var inst_24698 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24700__$1,inst_24698);
} else {
if((state_val_24701 === (12))){
var state_24700__$1 = state_24700;
var statearr_24708_24728 = state_24700__$1;
(statearr_24708_24728[(2)] = null);

(statearr_24708_24728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (2))){
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24700__$1,(4),from);
} else {
if((state_val_24701 === (11))){
var inst_24689 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
if(cljs.core.truth_(inst_24689)){
var statearr_24709_24729 = state_24700__$1;
(statearr_24709_24729[(1)] = (12));

} else {
var statearr_24710_24730 = state_24700__$1;
(statearr_24710_24730[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (9))){
var state_24700__$1 = state_24700;
var statearr_24711_24731 = state_24700__$1;
(statearr_24711_24731[(2)] = null);

(statearr_24711_24731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (5))){
var state_24700__$1 = state_24700;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24712_24732 = state_24700__$1;
(statearr_24712_24732[(1)] = (8));

} else {
var statearr_24713_24733 = state_24700__$1;
(statearr_24713_24733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (14))){
var inst_24694 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24714_24734 = state_24700__$1;
(statearr_24714_24734[(2)] = inst_24694);

(statearr_24714_24734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (10))){
var inst_24686 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24715_24735 = state_24700__$1;
(statearr_24715_24735[(2)] = inst_24686);

(statearr_24715_24735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (8))){
var inst_24683 = cljs.core.async.close_BANG_.call(null,to);
var state_24700__$1 = state_24700;
var statearr_24716_24736 = state_24700__$1;
(statearr_24716_24736[(2)] = inst_24683);

(statearr_24716_24736[(1)] = (10));


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
});})(c__24575__auto___24722))
;
return ((function (switch__24480__auto__,c__24575__auto___24722){
return (function() {
var cljs$core$async$state_machine__24481__auto__ = null;
var cljs$core$async$state_machine__24481__auto____0 = (function (){
var statearr_24717 = [null,null,null,null,null,null,null,null];
(statearr_24717[(0)] = cljs$core$async$state_machine__24481__auto__);

(statearr_24717[(1)] = (1));

return statearr_24717;
});
var cljs$core$async$state_machine__24481__auto____1 = (function (state_24700){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_24700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e24718){if((e24718 instanceof Object)){
var ex__24484__auto__ = e24718;
var statearr_24719_24737 = state_24700;
(statearr_24719_24737[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24738 = state_24700;
state_24700 = G__24738;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$state_machine__24481__auto__ = function(state_24700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24481__auto____1.call(this,state_24700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24481__auto____0;
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24481__auto____1;
return cljs$core$async$state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___24722))
})();
var state__24577__auto__ = (function (){var statearr_24720 = f__24576__auto__.call(null);
(statearr_24720[(6)] = c__24575__auto___24722);

return statearr_24720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___24722))
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
return (function (p__24739){
var vec__24740 = p__24739;
var v = cljs.core.nth.call(null,vec__24740,(0),null);
var p = cljs.core.nth.call(null,vec__24740,(1),null);
var job = vec__24740;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24575__auto___24911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___24911,res,vec__24740,v,p,job,jobs,results){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___24911,res,vec__24740,v,p,job,jobs,results){
return (function (state_24747){
var state_val_24748 = (state_24747[(1)]);
if((state_val_24748 === (1))){
var state_24747__$1 = state_24747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24747__$1,(2),res,v);
} else {
if((state_val_24748 === (2))){
var inst_24744 = (state_24747[(2)]);
var inst_24745 = cljs.core.async.close_BANG_.call(null,res);
var state_24747__$1 = (function (){var statearr_24749 = state_24747;
(statearr_24749[(7)] = inst_24744);

return statearr_24749;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24747__$1,inst_24745);
} else {
return null;
}
}
});})(c__24575__auto___24911,res,vec__24740,v,p,job,jobs,results))
;
return ((function (switch__24480__auto__,c__24575__auto___24911,res,vec__24740,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____0 = (function (){
var statearr_24750 = [null,null,null,null,null,null,null,null];
(statearr_24750[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__);

(statearr_24750[(1)] = (1));

return statearr_24750;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____1 = (function (state_24747){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_24747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e24751){if((e24751 instanceof Object)){
var ex__24484__auto__ = e24751;
var statearr_24752_24912 = state_24747;
(statearr_24752_24912[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24913 = state_24747;
state_24747 = G__24913;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__ = function(state_24747){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____1.call(this,state_24747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___24911,res,vec__24740,v,p,job,jobs,results))
})();
var state__24577__auto__ = (function (){var statearr_24753 = f__24576__auto__.call(null);
(statearr_24753[(6)] = c__24575__auto___24911);

return statearr_24753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___24911,res,vec__24740,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24754){
var vec__24755 = p__24754;
var v = cljs.core.nth.call(null,vec__24755,(0),null);
var p = cljs.core.nth.call(null,vec__24755,(1),null);
var job = vec__24755;
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
var n__4518__auto___24914 = n;
var __24915 = (0);
while(true){
if((__24915 < n__4518__auto___24914)){
var G__24758_24916 = type;
var G__24758_24917__$1 = (((G__24758_24916 instanceof cljs.core.Keyword))?G__24758_24916.fqn:null);
switch (G__24758_24917__$1) {
case "compute":
var c__24575__auto___24919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24915,c__24575__auto___24919,G__24758_24916,G__24758_24917__$1,n__4518__auto___24914,jobs,results,process,async){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (__24915,c__24575__auto___24919,G__24758_24916,G__24758_24917__$1,n__4518__auto___24914,jobs,results,process,async){
return (function (state_24771){
var state_val_24772 = (state_24771[(1)]);
if((state_val_24772 === (1))){
var state_24771__$1 = state_24771;
var statearr_24773_24920 = state_24771__$1;
(statearr_24773_24920[(2)] = null);

(statearr_24773_24920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (2))){
var state_24771__$1 = state_24771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24771__$1,(4),jobs);
} else {
if((state_val_24772 === (3))){
var inst_24769 = (state_24771[(2)]);
var state_24771__$1 = state_24771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24771__$1,inst_24769);
} else {
if((state_val_24772 === (4))){
var inst_24761 = (state_24771[(2)]);
var inst_24762 = process.call(null,inst_24761);
var state_24771__$1 = state_24771;
if(cljs.core.truth_(inst_24762)){
var statearr_24774_24921 = state_24771__$1;
(statearr_24774_24921[(1)] = (5));

} else {
var statearr_24775_24922 = state_24771__$1;
(statearr_24775_24922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (5))){
var state_24771__$1 = state_24771;
var statearr_24776_24923 = state_24771__$1;
(statearr_24776_24923[(2)] = null);

(statearr_24776_24923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (6))){
var state_24771__$1 = state_24771;
var statearr_24777_24924 = state_24771__$1;
(statearr_24777_24924[(2)] = null);

(statearr_24777_24924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (7))){
var inst_24767 = (state_24771[(2)]);
var state_24771__$1 = state_24771;
var statearr_24778_24925 = state_24771__$1;
(statearr_24778_24925[(2)] = inst_24767);

(statearr_24778_24925[(1)] = (3));


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
});})(__24915,c__24575__auto___24919,G__24758_24916,G__24758_24917__$1,n__4518__auto___24914,jobs,results,process,async))
;
return ((function (__24915,switch__24480__auto__,c__24575__auto___24919,G__24758_24916,G__24758_24917__$1,n__4518__auto___24914,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____0 = (function (){
var statearr_24779 = [null,null,null,null,null,null,null];
(statearr_24779[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__);

(statearr_24779[(1)] = (1));

return statearr_24779;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____1 = (function (state_24771){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_24771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e24780){if((e24780 instanceof Object)){
var ex__24484__auto__ = e24780;
var statearr_24781_24926 = state_24771;
(statearr_24781_24926[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24927 = state_24771;
state_24771 = G__24927;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__ = function(state_24771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____1.call(this,state_24771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__;
})()
;})(__24915,switch__24480__auto__,c__24575__auto___24919,G__24758_24916,G__24758_24917__$1,n__4518__auto___24914,jobs,results,process,async))
})();
var state__24577__auto__ = (function (){var statearr_24782 = f__24576__auto__.call(null);
(statearr_24782[(6)] = c__24575__auto___24919);

return statearr_24782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(__24915,c__24575__auto___24919,G__24758_24916,G__24758_24917__$1,n__4518__auto___24914,jobs,results,process,async))
);


break;
case "async":
var c__24575__auto___24928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24915,c__24575__auto___24928,G__24758_24916,G__24758_24917__$1,n__4518__auto___24914,jobs,results,process,async){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (__24915,c__24575__auto___24928,G__24758_24916,G__24758_24917__$1,n__4518__auto___24914,jobs,results,process,async){
return (function (state_24795){
var state_val_24796 = (state_24795[(1)]);
if((state_val_24796 === (1))){
var state_24795__$1 = state_24795;
var statearr_24797_24929 = state_24795__$1;
(statearr_24797_24929[(2)] = null);

(statearr_24797_24929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (2))){
var state_24795__$1 = state_24795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24795__$1,(4),jobs);
} else {
if((state_val_24796 === (3))){
var inst_24793 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24795__$1,inst_24793);
} else {
if((state_val_24796 === (4))){
var inst_24785 = (state_24795[(2)]);
var inst_24786 = async.call(null,inst_24785);
var state_24795__$1 = state_24795;
if(cljs.core.truth_(inst_24786)){
var statearr_24798_24930 = state_24795__$1;
(statearr_24798_24930[(1)] = (5));

} else {
var statearr_24799_24931 = state_24795__$1;
(statearr_24799_24931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (5))){
var state_24795__$1 = state_24795;
var statearr_24800_24932 = state_24795__$1;
(statearr_24800_24932[(2)] = null);

(statearr_24800_24932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (6))){
var state_24795__$1 = state_24795;
var statearr_24801_24933 = state_24795__$1;
(statearr_24801_24933[(2)] = null);

(statearr_24801_24933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (7))){
var inst_24791 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24802_24934 = state_24795__$1;
(statearr_24802_24934[(2)] = inst_24791);

(statearr_24802_24934[(1)] = (3));


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
});})(__24915,c__24575__auto___24928,G__24758_24916,G__24758_24917__$1,n__4518__auto___24914,jobs,results,process,async))
;
return ((function (__24915,switch__24480__auto__,c__24575__auto___24928,G__24758_24916,G__24758_24917__$1,n__4518__auto___24914,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____0 = (function (){
var statearr_24803 = [null,null,null,null,null,null,null];
(statearr_24803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__);

(statearr_24803[(1)] = (1));

return statearr_24803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____1 = (function (state_24795){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_24795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e24804){if((e24804 instanceof Object)){
var ex__24484__auto__ = e24804;
var statearr_24805_24935 = state_24795;
(statearr_24805_24935[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24936 = state_24795;
state_24795 = G__24936;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__ = function(state_24795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____1.call(this,state_24795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__;
})()
;})(__24915,switch__24480__auto__,c__24575__auto___24928,G__24758_24916,G__24758_24917__$1,n__4518__auto___24914,jobs,results,process,async))
})();
var state__24577__auto__ = (function (){var statearr_24806 = f__24576__auto__.call(null);
(statearr_24806[(6)] = c__24575__auto___24928);

return statearr_24806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(__24915,c__24575__auto___24928,G__24758_24916,G__24758_24917__$1,n__4518__auto___24914,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24758_24917__$1)].join('')));

}

var G__24937 = (__24915 + (1));
__24915 = G__24937;
continue;
} else {
}
break;
}

var c__24575__auto___24938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___24938,jobs,results,process,async){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___24938,jobs,results,process,async){
return (function (state_24828){
var state_val_24829 = (state_24828[(1)]);
if((state_val_24829 === (1))){
var state_24828__$1 = state_24828;
var statearr_24830_24939 = state_24828__$1;
(statearr_24830_24939[(2)] = null);

(statearr_24830_24939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (2))){
var state_24828__$1 = state_24828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24828__$1,(4),from);
} else {
if((state_val_24829 === (3))){
var inst_24826 = (state_24828[(2)]);
var state_24828__$1 = state_24828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24828__$1,inst_24826);
} else {
if((state_val_24829 === (4))){
var inst_24809 = (state_24828[(7)]);
var inst_24809__$1 = (state_24828[(2)]);
var inst_24810 = (inst_24809__$1 == null);
var state_24828__$1 = (function (){var statearr_24831 = state_24828;
(statearr_24831[(7)] = inst_24809__$1);

return statearr_24831;
})();
if(cljs.core.truth_(inst_24810)){
var statearr_24832_24940 = state_24828__$1;
(statearr_24832_24940[(1)] = (5));

} else {
var statearr_24833_24941 = state_24828__$1;
(statearr_24833_24941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (5))){
var inst_24812 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24828__$1 = state_24828;
var statearr_24834_24942 = state_24828__$1;
(statearr_24834_24942[(2)] = inst_24812);

(statearr_24834_24942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (6))){
var inst_24814 = (state_24828[(8)]);
var inst_24809 = (state_24828[(7)]);
var inst_24814__$1 = cljs.core.async.chan.call(null,(1));
var inst_24815 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24816 = [inst_24809,inst_24814__$1];
var inst_24817 = (new cljs.core.PersistentVector(null,2,(5),inst_24815,inst_24816,null));
var state_24828__$1 = (function (){var statearr_24835 = state_24828;
(statearr_24835[(8)] = inst_24814__$1);

return statearr_24835;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24828__$1,(8),jobs,inst_24817);
} else {
if((state_val_24829 === (7))){
var inst_24824 = (state_24828[(2)]);
var state_24828__$1 = state_24828;
var statearr_24836_24943 = state_24828__$1;
(statearr_24836_24943[(2)] = inst_24824);

(statearr_24836_24943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (8))){
var inst_24814 = (state_24828[(8)]);
var inst_24819 = (state_24828[(2)]);
var state_24828__$1 = (function (){var statearr_24837 = state_24828;
(statearr_24837[(9)] = inst_24819);

return statearr_24837;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24828__$1,(9),results,inst_24814);
} else {
if((state_val_24829 === (9))){
var inst_24821 = (state_24828[(2)]);
var state_24828__$1 = (function (){var statearr_24838 = state_24828;
(statearr_24838[(10)] = inst_24821);

return statearr_24838;
})();
var statearr_24839_24944 = state_24828__$1;
(statearr_24839_24944[(2)] = null);

(statearr_24839_24944[(1)] = (2));


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
});})(c__24575__auto___24938,jobs,results,process,async))
;
return ((function (switch__24480__auto__,c__24575__auto___24938,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____0 = (function (){
var statearr_24840 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24840[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__);

(statearr_24840[(1)] = (1));

return statearr_24840;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____1 = (function (state_24828){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_24828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e24841){if((e24841 instanceof Object)){
var ex__24484__auto__ = e24841;
var statearr_24842_24945 = state_24828;
(statearr_24842_24945[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24946 = state_24828;
state_24828 = G__24946;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__ = function(state_24828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____1.call(this,state_24828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___24938,jobs,results,process,async))
})();
var state__24577__auto__ = (function (){var statearr_24843 = f__24576__auto__.call(null);
(statearr_24843[(6)] = c__24575__auto___24938);

return statearr_24843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___24938,jobs,results,process,async))
);


var c__24575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto__,jobs,results,process,async){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto__,jobs,results,process,async){
return (function (state_24881){
var state_val_24882 = (state_24881[(1)]);
if((state_val_24882 === (7))){
var inst_24877 = (state_24881[(2)]);
var state_24881__$1 = state_24881;
var statearr_24883_24947 = state_24881__$1;
(statearr_24883_24947[(2)] = inst_24877);

(statearr_24883_24947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24882 === (20))){
var state_24881__$1 = state_24881;
var statearr_24884_24948 = state_24881__$1;
(statearr_24884_24948[(2)] = null);

(statearr_24884_24948[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24882 === (1))){
var state_24881__$1 = state_24881;
var statearr_24885_24949 = state_24881__$1;
(statearr_24885_24949[(2)] = null);

(statearr_24885_24949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24882 === (4))){
var inst_24846 = (state_24881[(7)]);
var inst_24846__$1 = (state_24881[(2)]);
var inst_24847 = (inst_24846__$1 == null);
var state_24881__$1 = (function (){var statearr_24886 = state_24881;
(statearr_24886[(7)] = inst_24846__$1);

return statearr_24886;
})();
if(cljs.core.truth_(inst_24847)){
var statearr_24887_24950 = state_24881__$1;
(statearr_24887_24950[(1)] = (5));

} else {
var statearr_24888_24951 = state_24881__$1;
(statearr_24888_24951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24882 === (15))){
var inst_24859 = (state_24881[(8)]);
var state_24881__$1 = state_24881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24881__$1,(18),to,inst_24859);
} else {
if((state_val_24882 === (21))){
var inst_24872 = (state_24881[(2)]);
var state_24881__$1 = state_24881;
var statearr_24889_24952 = state_24881__$1;
(statearr_24889_24952[(2)] = inst_24872);

(statearr_24889_24952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24882 === (13))){
var inst_24874 = (state_24881[(2)]);
var state_24881__$1 = (function (){var statearr_24890 = state_24881;
(statearr_24890[(9)] = inst_24874);

return statearr_24890;
})();
var statearr_24891_24953 = state_24881__$1;
(statearr_24891_24953[(2)] = null);

(statearr_24891_24953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24882 === (6))){
var inst_24846 = (state_24881[(7)]);
var state_24881__$1 = state_24881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24881__$1,(11),inst_24846);
} else {
if((state_val_24882 === (17))){
var inst_24867 = (state_24881[(2)]);
var state_24881__$1 = state_24881;
if(cljs.core.truth_(inst_24867)){
var statearr_24892_24954 = state_24881__$1;
(statearr_24892_24954[(1)] = (19));

} else {
var statearr_24893_24955 = state_24881__$1;
(statearr_24893_24955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24882 === (3))){
var inst_24879 = (state_24881[(2)]);
var state_24881__$1 = state_24881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24881__$1,inst_24879);
} else {
if((state_val_24882 === (12))){
var inst_24856 = (state_24881[(10)]);
var state_24881__$1 = state_24881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24881__$1,(14),inst_24856);
} else {
if((state_val_24882 === (2))){
var state_24881__$1 = state_24881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24881__$1,(4),results);
} else {
if((state_val_24882 === (19))){
var state_24881__$1 = state_24881;
var statearr_24894_24956 = state_24881__$1;
(statearr_24894_24956[(2)] = null);

(statearr_24894_24956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24882 === (11))){
var inst_24856 = (state_24881[(2)]);
var state_24881__$1 = (function (){var statearr_24895 = state_24881;
(statearr_24895[(10)] = inst_24856);

return statearr_24895;
})();
var statearr_24896_24957 = state_24881__$1;
(statearr_24896_24957[(2)] = null);

(statearr_24896_24957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24882 === (9))){
var state_24881__$1 = state_24881;
var statearr_24897_24958 = state_24881__$1;
(statearr_24897_24958[(2)] = null);

(statearr_24897_24958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24882 === (5))){
var state_24881__$1 = state_24881;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24898_24959 = state_24881__$1;
(statearr_24898_24959[(1)] = (8));

} else {
var statearr_24899_24960 = state_24881__$1;
(statearr_24899_24960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24882 === (14))){
var inst_24859 = (state_24881[(8)]);
var inst_24861 = (state_24881[(11)]);
var inst_24859__$1 = (state_24881[(2)]);
var inst_24860 = (inst_24859__$1 == null);
var inst_24861__$1 = cljs.core.not.call(null,inst_24860);
var state_24881__$1 = (function (){var statearr_24900 = state_24881;
(statearr_24900[(8)] = inst_24859__$1);

(statearr_24900[(11)] = inst_24861__$1);

return statearr_24900;
})();
if(inst_24861__$1){
var statearr_24901_24961 = state_24881__$1;
(statearr_24901_24961[(1)] = (15));

} else {
var statearr_24902_24962 = state_24881__$1;
(statearr_24902_24962[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24882 === (16))){
var inst_24861 = (state_24881[(11)]);
var state_24881__$1 = state_24881;
var statearr_24903_24963 = state_24881__$1;
(statearr_24903_24963[(2)] = inst_24861);

(statearr_24903_24963[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24882 === (10))){
var inst_24853 = (state_24881[(2)]);
var state_24881__$1 = state_24881;
var statearr_24904_24964 = state_24881__$1;
(statearr_24904_24964[(2)] = inst_24853);

(statearr_24904_24964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24882 === (18))){
var inst_24864 = (state_24881[(2)]);
var state_24881__$1 = state_24881;
var statearr_24905_24965 = state_24881__$1;
(statearr_24905_24965[(2)] = inst_24864);

(statearr_24905_24965[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24882 === (8))){
var inst_24850 = cljs.core.async.close_BANG_.call(null,to);
var state_24881__$1 = state_24881;
var statearr_24906_24966 = state_24881__$1;
(statearr_24906_24966[(2)] = inst_24850);

(statearr_24906_24966[(1)] = (10));


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
});})(c__24575__auto__,jobs,results,process,async))
;
return ((function (switch__24480__auto__,c__24575__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____0 = (function (){
var statearr_24907 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24907[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__);

(statearr_24907[(1)] = (1));

return statearr_24907;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____1 = (function (state_24881){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_24881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e24908){if((e24908 instanceof Object)){
var ex__24484__auto__ = e24908;
var statearr_24909_24967 = state_24881;
(statearr_24909_24967[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24968 = state_24881;
state_24881 = G__24968;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__ = function(state_24881){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____1.call(this,state_24881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24481__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto__,jobs,results,process,async))
})();
var state__24577__auto__ = (function (){var statearr_24910 = f__24576__auto__.call(null);
(statearr_24910[(6)] = c__24575__auto__);

return statearr_24910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto__,jobs,results,process,async))
);

return c__24575__auto__;
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
var G__24970 = arguments.length;
switch (G__24970) {
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
var G__24973 = arguments.length;
switch (G__24973) {
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
var G__24976 = arguments.length;
switch (G__24976) {
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
var c__24575__auto___25025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___25025,tc,fc){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___25025,tc,fc){
return (function (state_25002){
var state_val_25003 = (state_25002[(1)]);
if((state_val_25003 === (7))){
var inst_24998 = (state_25002[(2)]);
var state_25002__$1 = state_25002;
var statearr_25004_25026 = state_25002__$1;
(statearr_25004_25026[(2)] = inst_24998);

(statearr_25004_25026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (1))){
var state_25002__$1 = state_25002;
var statearr_25005_25027 = state_25002__$1;
(statearr_25005_25027[(2)] = null);

(statearr_25005_25027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (4))){
var inst_24979 = (state_25002[(7)]);
var inst_24979__$1 = (state_25002[(2)]);
var inst_24980 = (inst_24979__$1 == null);
var state_25002__$1 = (function (){var statearr_25006 = state_25002;
(statearr_25006[(7)] = inst_24979__$1);

return statearr_25006;
})();
if(cljs.core.truth_(inst_24980)){
var statearr_25007_25028 = state_25002__$1;
(statearr_25007_25028[(1)] = (5));

} else {
var statearr_25008_25029 = state_25002__$1;
(statearr_25008_25029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (13))){
var state_25002__$1 = state_25002;
var statearr_25009_25030 = state_25002__$1;
(statearr_25009_25030[(2)] = null);

(statearr_25009_25030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (6))){
var inst_24979 = (state_25002[(7)]);
var inst_24985 = p.call(null,inst_24979);
var state_25002__$1 = state_25002;
if(cljs.core.truth_(inst_24985)){
var statearr_25010_25031 = state_25002__$1;
(statearr_25010_25031[(1)] = (9));

} else {
var statearr_25011_25032 = state_25002__$1;
(statearr_25011_25032[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (3))){
var inst_25000 = (state_25002[(2)]);
var state_25002__$1 = state_25002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25002__$1,inst_25000);
} else {
if((state_val_25003 === (12))){
var state_25002__$1 = state_25002;
var statearr_25012_25033 = state_25002__$1;
(statearr_25012_25033[(2)] = null);

(statearr_25012_25033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (2))){
var state_25002__$1 = state_25002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25002__$1,(4),ch);
} else {
if((state_val_25003 === (11))){
var inst_24979 = (state_25002[(7)]);
var inst_24989 = (state_25002[(2)]);
var state_25002__$1 = state_25002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25002__$1,(8),inst_24989,inst_24979);
} else {
if((state_val_25003 === (9))){
var state_25002__$1 = state_25002;
var statearr_25013_25034 = state_25002__$1;
(statearr_25013_25034[(2)] = tc);

(statearr_25013_25034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (5))){
var inst_24982 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24983 = cljs.core.async.close_BANG_.call(null,fc);
var state_25002__$1 = (function (){var statearr_25014 = state_25002;
(statearr_25014[(8)] = inst_24982);

return statearr_25014;
})();
var statearr_25015_25035 = state_25002__$1;
(statearr_25015_25035[(2)] = inst_24983);

(statearr_25015_25035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (14))){
var inst_24996 = (state_25002[(2)]);
var state_25002__$1 = state_25002;
var statearr_25016_25036 = state_25002__$1;
(statearr_25016_25036[(2)] = inst_24996);

(statearr_25016_25036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (10))){
var state_25002__$1 = state_25002;
var statearr_25017_25037 = state_25002__$1;
(statearr_25017_25037[(2)] = fc);

(statearr_25017_25037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (8))){
var inst_24991 = (state_25002[(2)]);
var state_25002__$1 = state_25002;
if(cljs.core.truth_(inst_24991)){
var statearr_25018_25038 = state_25002__$1;
(statearr_25018_25038[(1)] = (12));

} else {
var statearr_25019_25039 = state_25002__$1;
(statearr_25019_25039[(1)] = (13));

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
});})(c__24575__auto___25025,tc,fc))
;
return ((function (switch__24480__auto__,c__24575__auto___25025,tc,fc){
return (function() {
var cljs$core$async$state_machine__24481__auto__ = null;
var cljs$core$async$state_machine__24481__auto____0 = (function (){
var statearr_25020 = [null,null,null,null,null,null,null,null,null];
(statearr_25020[(0)] = cljs$core$async$state_machine__24481__auto__);

(statearr_25020[(1)] = (1));

return statearr_25020;
});
var cljs$core$async$state_machine__24481__auto____1 = (function (state_25002){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_25002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e25021){if((e25021 instanceof Object)){
var ex__24484__auto__ = e25021;
var statearr_25022_25040 = state_25002;
(statearr_25022_25040[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25041 = state_25002;
state_25002 = G__25041;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$state_machine__24481__auto__ = function(state_25002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24481__auto____1.call(this,state_25002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24481__auto____0;
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24481__auto____1;
return cljs$core$async$state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___25025,tc,fc))
})();
var state__24577__auto__ = (function (){var statearr_25023 = f__24576__auto__.call(null);
(statearr_25023[(6)] = c__24575__auto___25025);

return statearr_25023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___25025,tc,fc))
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
var c__24575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto__){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto__){
return (function (state_25062){
var state_val_25063 = (state_25062[(1)]);
if((state_val_25063 === (7))){
var inst_25058 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
var statearr_25064_25082 = state_25062__$1;
(statearr_25064_25082[(2)] = inst_25058);

(statearr_25064_25082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (1))){
var inst_25042 = init;
var state_25062__$1 = (function (){var statearr_25065 = state_25062;
(statearr_25065[(7)] = inst_25042);

return statearr_25065;
})();
var statearr_25066_25083 = state_25062__$1;
(statearr_25066_25083[(2)] = null);

(statearr_25066_25083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (4))){
var inst_25045 = (state_25062[(8)]);
var inst_25045__$1 = (state_25062[(2)]);
var inst_25046 = (inst_25045__$1 == null);
var state_25062__$1 = (function (){var statearr_25067 = state_25062;
(statearr_25067[(8)] = inst_25045__$1);

return statearr_25067;
})();
if(cljs.core.truth_(inst_25046)){
var statearr_25068_25084 = state_25062__$1;
(statearr_25068_25084[(1)] = (5));

} else {
var statearr_25069_25085 = state_25062__$1;
(statearr_25069_25085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (6))){
var inst_25049 = (state_25062[(9)]);
var inst_25042 = (state_25062[(7)]);
var inst_25045 = (state_25062[(8)]);
var inst_25049__$1 = f.call(null,inst_25042,inst_25045);
var inst_25050 = cljs.core.reduced_QMARK_.call(null,inst_25049__$1);
var state_25062__$1 = (function (){var statearr_25070 = state_25062;
(statearr_25070[(9)] = inst_25049__$1);

return statearr_25070;
})();
if(inst_25050){
var statearr_25071_25086 = state_25062__$1;
(statearr_25071_25086[(1)] = (8));

} else {
var statearr_25072_25087 = state_25062__$1;
(statearr_25072_25087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (3))){
var inst_25060 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25062__$1,inst_25060);
} else {
if((state_val_25063 === (2))){
var state_25062__$1 = state_25062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25062__$1,(4),ch);
} else {
if((state_val_25063 === (9))){
var inst_25049 = (state_25062[(9)]);
var inst_25042 = inst_25049;
var state_25062__$1 = (function (){var statearr_25073 = state_25062;
(statearr_25073[(7)] = inst_25042);

return statearr_25073;
})();
var statearr_25074_25088 = state_25062__$1;
(statearr_25074_25088[(2)] = null);

(statearr_25074_25088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (5))){
var inst_25042 = (state_25062[(7)]);
var state_25062__$1 = state_25062;
var statearr_25075_25089 = state_25062__$1;
(statearr_25075_25089[(2)] = inst_25042);

(statearr_25075_25089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (10))){
var inst_25056 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
var statearr_25076_25090 = state_25062__$1;
(statearr_25076_25090[(2)] = inst_25056);

(statearr_25076_25090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (8))){
var inst_25049 = (state_25062[(9)]);
var inst_25052 = cljs.core.deref.call(null,inst_25049);
var state_25062__$1 = state_25062;
var statearr_25077_25091 = state_25062__$1;
(statearr_25077_25091[(2)] = inst_25052);

(statearr_25077_25091[(1)] = (10));


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
});})(c__24575__auto__))
;
return ((function (switch__24480__auto__,c__24575__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24481__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24481__auto____0 = (function (){
var statearr_25078 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25078[(0)] = cljs$core$async$reduce_$_state_machine__24481__auto__);

(statearr_25078[(1)] = (1));

return statearr_25078;
});
var cljs$core$async$reduce_$_state_machine__24481__auto____1 = (function (state_25062){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_25062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e25079){if((e25079 instanceof Object)){
var ex__24484__auto__ = e25079;
var statearr_25080_25092 = state_25062;
(statearr_25080_25092[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25093 = state_25062;
state_25062 = G__25093;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24481__auto__ = function(state_25062){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24481__auto____1.call(this,state_25062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24481__auto____0;
cljs$core$async$reduce_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24481__auto____1;
return cljs$core$async$reduce_$_state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto__))
})();
var state__24577__auto__ = (function (){var statearr_25081 = f__24576__auto__.call(null);
(statearr_25081[(6)] = c__24575__auto__);

return statearr_25081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto__))
);

return c__24575__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto__,f__$1){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto__,f__$1){
return (function (state_25099){
var state_val_25100 = (state_25099[(1)]);
if((state_val_25100 === (1))){
var inst_25094 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25099__$1 = state_25099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25099__$1,(2),inst_25094);
} else {
if((state_val_25100 === (2))){
var inst_25096 = (state_25099[(2)]);
var inst_25097 = f__$1.call(null,inst_25096);
var state_25099__$1 = state_25099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25099__$1,inst_25097);
} else {
return null;
}
}
});})(c__24575__auto__,f__$1))
;
return ((function (switch__24480__auto__,c__24575__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24481__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24481__auto____0 = (function (){
var statearr_25101 = [null,null,null,null,null,null,null];
(statearr_25101[(0)] = cljs$core$async$transduce_$_state_machine__24481__auto__);

(statearr_25101[(1)] = (1));

return statearr_25101;
});
var cljs$core$async$transduce_$_state_machine__24481__auto____1 = (function (state_25099){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_25099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e25102){if((e25102 instanceof Object)){
var ex__24484__auto__ = e25102;
var statearr_25103_25105 = state_25099;
(statearr_25103_25105[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25106 = state_25099;
state_25099 = G__25106;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24481__auto__ = function(state_25099){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24481__auto____1.call(this,state_25099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24481__auto____0;
cljs$core$async$transduce_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24481__auto____1;
return cljs$core$async$transduce_$_state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto__,f__$1))
})();
var state__24577__auto__ = (function (){var statearr_25104 = f__24576__auto__.call(null);
(statearr_25104[(6)] = c__24575__auto__);

return statearr_25104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto__,f__$1))
);

return c__24575__auto__;
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
var G__25108 = arguments.length;
switch (G__25108) {
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
var c__24575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto__){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto__){
return (function (state_25133){
var state_val_25134 = (state_25133[(1)]);
if((state_val_25134 === (7))){
var inst_25115 = (state_25133[(2)]);
var state_25133__$1 = state_25133;
var statearr_25135_25156 = state_25133__$1;
(statearr_25135_25156[(2)] = inst_25115);

(statearr_25135_25156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25134 === (1))){
var inst_25109 = cljs.core.seq.call(null,coll);
var inst_25110 = inst_25109;
var state_25133__$1 = (function (){var statearr_25136 = state_25133;
(statearr_25136[(7)] = inst_25110);

return statearr_25136;
})();
var statearr_25137_25157 = state_25133__$1;
(statearr_25137_25157[(2)] = null);

(statearr_25137_25157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25134 === (4))){
var inst_25110 = (state_25133[(7)]);
var inst_25113 = cljs.core.first.call(null,inst_25110);
var state_25133__$1 = state_25133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25133__$1,(7),ch,inst_25113);
} else {
if((state_val_25134 === (13))){
var inst_25127 = (state_25133[(2)]);
var state_25133__$1 = state_25133;
var statearr_25138_25158 = state_25133__$1;
(statearr_25138_25158[(2)] = inst_25127);

(statearr_25138_25158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25134 === (6))){
var inst_25118 = (state_25133[(2)]);
var state_25133__$1 = state_25133;
if(cljs.core.truth_(inst_25118)){
var statearr_25139_25159 = state_25133__$1;
(statearr_25139_25159[(1)] = (8));

} else {
var statearr_25140_25160 = state_25133__$1;
(statearr_25140_25160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25134 === (3))){
var inst_25131 = (state_25133[(2)]);
var state_25133__$1 = state_25133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25133__$1,inst_25131);
} else {
if((state_val_25134 === (12))){
var state_25133__$1 = state_25133;
var statearr_25141_25161 = state_25133__$1;
(statearr_25141_25161[(2)] = null);

(statearr_25141_25161[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25134 === (2))){
var inst_25110 = (state_25133[(7)]);
var state_25133__$1 = state_25133;
if(cljs.core.truth_(inst_25110)){
var statearr_25142_25162 = state_25133__$1;
(statearr_25142_25162[(1)] = (4));

} else {
var statearr_25143_25163 = state_25133__$1;
(statearr_25143_25163[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25134 === (11))){
var inst_25124 = cljs.core.async.close_BANG_.call(null,ch);
var state_25133__$1 = state_25133;
var statearr_25144_25164 = state_25133__$1;
(statearr_25144_25164[(2)] = inst_25124);

(statearr_25144_25164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25134 === (9))){
var state_25133__$1 = state_25133;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25145_25165 = state_25133__$1;
(statearr_25145_25165[(1)] = (11));

} else {
var statearr_25146_25166 = state_25133__$1;
(statearr_25146_25166[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25134 === (5))){
var inst_25110 = (state_25133[(7)]);
var state_25133__$1 = state_25133;
var statearr_25147_25167 = state_25133__$1;
(statearr_25147_25167[(2)] = inst_25110);

(statearr_25147_25167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25134 === (10))){
var inst_25129 = (state_25133[(2)]);
var state_25133__$1 = state_25133;
var statearr_25148_25168 = state_25133__$1;
(statearr_25148_25168[(2)] = inst_25129);

(statearr_25148_25168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25134 === (8))){
var inst_25110 = (state_25133[(7)]);
var inst_25120 = cljs.core.next.call(null,inst_25110);
var inst_25110__$1 = inst_25120;
var state_25133__$1 = (function (){var statearr_25149 = state_25133;
(statearr_25149[(7)] = inst_25110__$1);

return statearr_25149;
})();
var statearr_25150_25169 = state_25133__$1;
(statearr_25150_25169[(2)] = null);

(statearr_25150_25169[(1)] = (2));


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
});})(c__24575__auto__))
;
return ((function (switch__24480__auto__,c__24575__auto__){
return (function() {
var cljs$core$async$state_machine__24481__auto__ = null;
var cljs$core$async$state_machine__24481__auto____0 = (function (){
var statearr_25151 = [null,null,null,null,null,null,null,null];
(statearr_25151[(0)] = cljs$core$async$state_machine__24481__auto__);

(statearr_25151[(1)] = (1));

return statearr_25151;
});
var cljs$core$async$state_machine__24481__auto____1 = (function (state_25133){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_25133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e25152){if((e25152 instanceof Object)){
var ex__24484__auto__ = e25152;
var statearr_25153_25170 = state_25133;
(statearr_25153_25170[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25171 = state_25133;
state_25133 = G__25171;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$state_machine__24481__auto__ = function(state_25133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24481__auto____1.call(this,state_25133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24481__auto____0;
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24481__auto____1;
return cljs$core$async$state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto__))
})();
var state__24577__auto__ = (function (){var statearr_25154 = f__24576__auto__.call(null);
(statearr_25154[(6)] = c__24575__auto__);

return statearr_25154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto__))
);

return c__24575__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25172 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25172 = (function (ch,cs,meta25173){
this.ch = ch;
this.cs = cs;
this.meta25173 = meta25173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25174,meta25173__$1){
var self__ = this;
var _25174__$1 = this;
return (new cljs.core.async.t_cljs$core$async25172(self__.ch,self__.cs,meta25173__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25172.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25174){
var self__ = this;
var _25174__$1 = this;
return self__.meta25173;
});})(cs))
;

cljs.core.async.t_cljs$core$async25172.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25172.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25172.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25172.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25172.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25172.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25172.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25173","meta25173",541143319,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25172.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25172";

cljs.core.async.t_cljs$core$async25172.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25172");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25172.
 */
cljs.core.async.__GT_t_cljs$core$async25172 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25172(ch__$1,cs__$1,meta25173){
return (new cljs.core.async.t_cljs$core$async25172(ch__$1,cs__$1,meta25173));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25172(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24575__auto___25394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___25394,cs,m,dchan,dctr,done){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___25394,cs,m,dchan,dctr,done){
return (function (state_25309){
var state_val_25310 = (state_25309[(1)]);
if((state_val_25310 === (7))){
var inst_25305 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25311_25395 = state_25309__$1;
(statearr_25311_25395[(2)] = inst_25305);

(statearr_25311_25395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (20))){
var inst_25208 = (state_25309[(7)]);
var inst_25220 = cljs.core.first.call(null,inst_25208);
var inst_25221 = cljs.core.nth.call(null,inst_25220,(0),null);
var inst_25222 = cljs.core.nth.call(null,inst_25220,(1),null);
var state_25309__$1 = (function (){var statearr_25312 = state_25309;
(statearr_25312[(8)] = inst_25221);

return statearr_25312;
})();
if(cljs.core.truth_(inst_25222)){
var statearr_25313_25396 = state_25309__$1;
(statearr_25313_25396[(1)] = (22));

} else {
var statearr_25314_25397 = state_25309__$1;
(statearr_25314_25397[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (27))){
var inst_25257 = (state_25309[(9)]);
var inst_25250 = (state_25309[(10)]);
var inst_25177 = (state_25309[(11)]);
var inst_25252 = (state_25309[(12)]);
var inst_25257__$1 = cljs.core._nth.call(null,inst_25250,inst_25252);
var inst_25258 = cljs.core.async.put_BANG_.call(null,inst_25257__$1,inst_25177,done);
var state_25309__$1 = (function (){var statearr_25315 = state_25309;
(statearr_25315[(9)] = inst_25257__$1);

return statearr_25315;
})();
if(cljs.core.truth_(inst_25258)){
var statearr_25316_25398 = state_25309__$1;
(statearr_25316_25398[(1)] = (30));

} else {
var statearr_25317_25399 = state_25309__$1;
(statearr_25317_25399[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (1))){
var state_25309__$1 = state_25309;
var statearr_25318_25400 = state_25309__$1;
(statearr_25318_25400[(2)] = null);

(statearr_25318_25400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (24))){
var inst_25208 = (state_25309[(7)]);
var inst_25227 = (state_25309[(2)]);
var inst_25228 = cljs.core.next.call(null,inst_25208);
var inst_25186 = inst_25228;
var inst_25187 = null;
var inst_25188 = (0);
var inst_25189 = (0);
var state_25309__$1 = (function (){var statearr_25319 = state_25309;
(statearr_25319[(13)] = inst_25227);

(statearr_25319[(14)] = inst_25186);

(statearr_25319[(15)] = inst_25189);

(statearr_25319[(16)] = inst_25188);

(statearr_25319[(17)] = inst_25187);

return statearr_25319;
})();
var statearr_25320_25401 = state_25309__$1;
(statearr_25320_25401[(2)] = null);

(statearr_25320_25401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (39))){
var state_25309__$1 = state_25309;
var statearr_25324_25402 = state_25309__$1;
(statearr_25324_25402[(2)] = null);

(statearr_25324_25402[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (4))){
var inst_25177 = (state_25309[(11)]);
var inst_25177__$1 = (state_25309[(2)]);
var inst_25178 = (inst_25177__$1 == null);
var state_25309__$1 = (function (){var statearr_25325 = state_25309;
(statearr_25325[(11)] = inst_25177__$1);

return statearr_25325;
})();
if(cljs.core.truth_(inst_25178)){
var statearr_25326_25403 = state_25309__$1;
(statearr_25326_25403[(1)] = (5));

} else {
var statearr_25327_25404 = state_25309__$1;
(statearr_25327_25404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (15))){
var inst_25186 = (state_25309[(14)]);
var inst_25189 = (state_25309[(15)]);
var inst_25188 = (state_25309[(16)]);
var inst_25187 = (state_25309[(17)]);
var inst_25204 = (state_25309[(2)]);
var inst_25205 = (inst_25189 + (1));
var tmp25321 = inst_25186;
var tmp25322 = inst_25188;
var tmp25323 = inst_25187;
var inst_25186__$1 = tmp25321;
var inst_25187__$1 = tmp25323;
var inst_25188__$1 = tmp25322;
var inst_25189__$1 = inst_25205;
var state_25309__$1 = (function (){var statearr_25328 = state_25309;
(statearr_25328[(14)] = inst_25186__$1);

(statearr_25328[(18)] = inst_25204);

(statearr_25328[(15)] = inst_25189__$1);

(statearr_25328[(16)] = inst_25188__$1);

(statearr_25328[(17)] = inst_25187__$1);

return statearr_25328;
})();
var statearr_25329_25405 = state_25309__$1;
(statearr_25329_25405[(2)] = null);

(statearr_25329_25405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (21))){
var inst_25231 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25333_25406 = state_25309__$1;
(statearr_25333_25406[(2)] = inst_25231);

(statearr_25333_25406[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (31))){
var inst_25257 = (state_25309[(9)]);
var inst_25261 = done.call(null,null);
var inst_25262 = cljs.core.async.untap_STAR_.call(null,m,inst_25257);
var state_25309__$1 = (function (){var statearr_25334 = state_25309;
(statearr_25334[(19)] = inst_25261);

return statearr_25334;
})();
var statearr_25335_25407 = state_25309__$1;
(statearr_25335_25407[(2)] = inst_25262);

(statearr_25335_25407[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (32))){
var inst_25250 = (state_25309[(10)]);
var inst_25252 = (state_25309[(12)]);
var inst_25251 = (state_25309[(20)]);
var inst_25249 = (state_25309[(21)]);
var inst_25264 = (state_25309[(2)]);
var inst_25265 = (inst_25252 + (1));
var tmp25330 = inst_25250;
var tmp25331 = inst_25251;
var tmp25332 = inst_25249;
var inst_25249__$1 = tmp25332;
var inst_25250__$1 = tmp25330;
var inst_25251__$1 = tmp25331;
var inst_25252__$1 = inst_25265;
var state_25309__$1 = (function (){var statearr_25336 = state_25309;
(statearr_25336[(22)] = inst_25264);

(statearr_25336[(10)] = inst_25250__$1);

(statearr_25336[(12)] = inst_25252__$1);

(statearr_25336[(20)] = inst_25251__$1);

(statearr_25336[(21)] = inst_25249__$1);

return statearr_25336;
})();
var statearr_25337_25408 = state_25309__$1;
(statearr_25337_25408[(2)] = null);

(statearr_25337_25408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (40))){
var inst_25277 = (state_25309[(23)]);
var inst_25281 = done.call(null,null);
var inst_25282 = cljs.core.async.untap_STAR_.call(null,m,inst_25277);
var state_25309__$1 = (function (){var statearr_25338 = state_25309;
(statearr_25338[(24)] = inst_25281);

return statearr_25338;
})();
var statearr_25339_25409 = state_25309__$1;
(statearr_25339_25409[(2)] = inst_25282);

(statearr_25339_25409[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (33))){
var inst_25268 = (state_25309[(25)]);
var inst_25270 = cljs.core.chunked_seq_QMARK_.call(null,inst_25268);
var state_25309__$1 = state_25309;
if(inst_25270){
var statearr_25340_25410 = state_25309__$1;
(statearr_25340_25410[(1)] = (36));

} else {
var statearr_25341_25411 = state_25309__$1;
(statearr_25341_25411[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (13))){
var inst_25198 = (state_25309[(26)]);
var inst_25201 = cljs.core.async.close_BANG_.call(null,inst_25198);
var state_25309__$1 = state_25309;
var statearr_25342_25412 = state_25309__$1;
(statearr_25342_25412[(2)] = inst_25201);

(statearr_25342_25412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (22))){
var inst_25221 = (state_25309[(8)]);
var inst_25224 = cljs.core.async.close_BANG_.call(null,inst_25221);
var state_25309__$1 = state_25309;
var statearr_25343_25413 = state_25309__$1;
(statearr_25343_25413[(2)] = inst_25224);

(statearr_25343_25413[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (36))){
var inst_25268 = (state_25309[(25)]);
var inst_25272 = cljs.core.chunk_first.call(null,inst_25268);
var inst_25273 = cljs.core.chunk_rest.call(null,inst_25268);
var inst_25274 = cljs.core.count.call(null,inst_25272);
var inst_25249 = inst_25273;
var inst_25250 = inst_25272;
var inst_25251 = inst_25274;
var inst_25252 = (0);
var state_25309__$1 = (function (){var statearr_25344 = state_25309;
(statearr_25344[(10)] = inst_25250);

(statearr_25344[(12)] = inst_25252);

(statearr_25344[(20)] = inst_25251);

(statearr_25344[(21)] = inst_25249);

return statearr_25344;
})();
var statearr_25345_25414 = state_25309__$1;
(statearr_25345_25414[(2)] = null);

(statearr_25345_25414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (41))){
var inst_25268 = (state_25309[(25)]);
var inst_25284 = (state_25309[(2)]);
var inst_25285 = cljs.core.next.call(null,inst_25268);
var inst_25249 = inst_25285;
var inst_25250 = null;
var inst_25251 = (0);
var inst_25252 = (0);
var state_25309__$1 = (function (){var statearr_25346 = state_25309;
(statearr_25346[(27)] = inst_25284);

(statearr_25346[(10)] = inst_25250);

(statearr_25346[(12)] = inst_25252);

(statearr_25346[(20)] = inst_25251);

(statearr_25346[(21)] = inst_25249);

return statearr_25346;
})();
var statearr_25347_25415 = state_25309__$1;
(statearr_25347_25415[(2)] = null);

(statearr_25347_25415[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (43))){
var state_25309__$1 = state_25309;
var statearr_25348_25416 = state_25309__$1;
(statearr_25348_25416[(2)] = null);

(statearr_25348_25416[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (29))){
var inst_25293 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25349_25417 = state_25309__$1;
(statearr_25349_25417[(2)] = inst_25293);

(statearr_25349_25417[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (44))){
var inst_25302 = (state_25309[(2)]);
var state_25309__$1 = (function (){var statearr_25350 = state_25309;
(statearr_25350[(28)] = inst_25302);

return statearr_25350;
})();
var statearr_25351_25418 = state_25309__$1;
(statearr_25351_25418[(2)] = null);

(statearr_25351_25418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (6))){
var inst_25241 = (state_25309[(29)]);
var inst_25240 = cljs.core.deref.call(null,cs);
var inst_25241__$1 = cljs.core.keys.call(null,inst_25240);
var inst_25242 = cljs.core.count.call(null,inst_25241__$1);
var inst_25243 = cljs.core.reset_BANG_.call(null,dctr,inst_25242);
var inst_25248 = cljs.core.seq.call(null,inst_25241__$1);
var inst_25249 = inst_25248;
var inst_25250 = null;
var inst_25251 = (0);
var inst_25252 = (0);
var state_25309__$1 = (function (){var statearr_25352 = state_25309;
(statearr_25352[(30)] = inst_25243);

(statearr_25352[(10)] = inst_25250);

(statearr_25352[(29)] = inst_25241__$1);

(statearr_25352[(12)] = inst_25252);

(statearr_25352[(20)] = inst_25251);

(statearr_25352[(21)] = inst_25249);

return statearr_25352;
})();
var statearr_25353_25419 = state_25309__$1;
(statearr_25353_25419[(2)] = null);

(statearr_25353_25419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (28))){
var inst_25268 = (state_25309[(25)]);
var inst_25249 = (state_25309[(21)]);
var inst_25268__$1 = cljs.core.seq.call(null,inst_25249);
var state_25309__$1 = (function (){var statearr_25354 = state_25309;
(statearr_25354[(25)] = inst_25268__$1);

return statearr_25354;
})();
if(inst_25268__$1){
var statearr_25355_25420 = state_25309__$1;
(statearr_25355_25420[(1)] = (33));

} else {
var statearr_25356_25421 = state_25309__$1;
(statearr_25356_25421[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (25))){
var inst_25252 = (state_25309[(12)]);
var inst_25251 = (state_25309[(20)]);
var inst_25254 = (inst_25252 < inst_25251);
var inst_25255 = inst_25254;
var state_25309__$1 = state_25309;
if(cljs.core.truth_(inst_25255)){
var statearr_25357_25422 = state_25309__$1;
(statearr_25357_25422[(1)] = (27));

} else {
var statearr_25358_25423 = state_25309__$1;
(statearr_25358_25423[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (34))){
var state_25309__$1 = state_25309;
var statearr_25359_25424 = state_25309__$1;
(statearr_25359_25424[(2)] = null);

(statearr_25359_25424[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (17))){
var state_25309__$1 = state_25309;
var statearr_25360_25425 = state_25309__$1;
(statearr_25360_25425[(2)] = null);

(statearr_25360_25425[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (3))){
var inst_25307 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25309__$1,inst_25307);
} else {
if((state_val_25310 === (12))){
var inst_25236 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25361_25426 = state_25309__$1;
(statearr_25361_25426[(2)] = inst_25236);

(statearr_25361_25426[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (2))){
var state_25309__$1 = state_25309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25309__$1,(4),ch);
} else {
if((state_val_25310 === (23))){
var state_25309__$1 = state_25309;
var statearr_25362_25427 = state_25309__$1;
(statearr_25362_25427[(2)] = null);

(statearr_25362_25427[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (35))){
var inst_25291 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25363_25428 = state_25309__$1;
(statearr_25363_25428[(2)] = inst_25291);

(statearr_25363_25428[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (19))){
var inst_25208 = (state_25309[(7)]);
var inst_25212 = cljs.core.chunk_first.call(null,inst_25208);
var inst_25213 = cljs.core.chunk_rest.call(null,inst_25208);
var inst_25214 = cljs.core.count.call(null,inst_25212);
var inst_25186 = inst_25213;
var inst_25187 = inst_25212;
var inst_25188 = inst_25214;
var inst_25189 = (0);
var state_25309__$1 = (function (){var statearr_25364 = state_25309;
(statearr_25364[(14)] = inst_25186);

(statearr_25364[(15)] = inst_25189);

(statearr_25364[(16)] = inst_25188);

(statearr_25364[(17)] = inst_25187);

return statearr_25364;
})();
var statearr_25365_25429 = state_25309__$1;
(statearr_25365_25429[(2)] = null);

(statearr_25365_25429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (11))){
var inst_25186 = (state_25309[(14)]);
var inst_25208 = (state_25309[(7)]);
var inst_25208__$1 = cljs.core.seq.call(null,inst_25186);
var state_25309__$1 = (function (){var statearr_25366 = state_25309;
(statearr_25366[(7)] = inst_25208__$1);

return statearr_25366;
})();
if(inst_25208__$1){
var statearr_25367_25430 = state_25309__$1;
(statearr_25367_25430[(1)] = (16));

} else {
var statearr_25368_25431 = state_25309__$1;
(statearr_25368_25431[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (9))){
var inst_25238 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25369_25432 = state_25309__$1;
(statearr_25369_25432[(2)] = inst_25238);

(statearr_25369_25432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (5))){
var inst_25184 = cljs.core.deref.call(null,cs);
var inst_25185 = cljs.core.seq.call(null,inst_25184);
var inst_25186 = inst_25185;
var inst_25187 = null;
var inst_25188 = (0);
var inst_25189 = (0);
var state_25309__$1 = (function (){var statearr_25370 = state_25309;
(statearr_25370[(14)] = inst_25186);

(statearr_25370[(15)] = inst_25189);

(statearr_25370[(16)] = inst_25188);

(statearr_25370[(17)] = inst_25187);

return statearr_25370;
})();
var statearr_25371_25433 = state_25309__$1;
(statearr_25371_25433[(2)] = null);

(statearr_25371_25433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (14))){
var state_25309__$1 = state_25309;
var statearr_25372_25434 = state_25309__$1;
(statearr_25372_25434[(2)] = null);

(statearr_25372_25434[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (45))){
var inst_25299 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25373_25435 = state_25309__$1;
(statearr_25373_25435[(2)] = inst_25299);

(statearr_25373_25435[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (26))){
var inst_25241 = (state_25309[(29)]);
var inst_25295 = (state_25309[(2)]);
var inst_25296 = cljs.core.seq.call(null,inst_25241);
var state_25309__$1 = (function (){var statearr_25374 = state_25309;
(statearr_25374[(31)] = inst_25295);

return statearr_25374;
})();
if(inst_25296){
var statearr_25375_25436 = state_25309__$1;
(statearr_25375_25436[(1)] = (42));

} else {
var statearr_25376_25437 = state_25309__$1;
(statearr_25376_25437[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (16))){
var inst_25208 = (state_25309[(7)]);
var inst_25210 = cljs.core.chunked_seq_QMARK_.call(null,inst_25208);
var state_25309__$1 = state_25309;
if(inst_25210){
var statearr_25377_25438 = state_25309__$1;
(statearr_25377_25438[(1)] = (19));

} else {
var statearr_25378_25439 = state_25309__$1;
(statearr_25378_25439[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (38))){
var inst_25288 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25379_25440 = state_25309__$1;
(statearr_25379_25440[(2)] = inst_25288);

(statearr_25379_25440[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (30))){
var state_25309__$1 = state_25309;
var statearr_25380_25441 = state_25309__$1;
(statearr_25380_25441[(2)] = null);

(statearr_25380_25441[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (10))){
var inst_25189 = (state_25309[(15)]);
var inst_25187 = (state_25309[(17)]);
var inst_25197 = cljs.core._nth.call(null,inst_25187,inst_25189);
var inst_25198 = cljs.core.nth.call(null,inst_25197,(0),null);
var inst_25199 = cljs.core.nth.call(null,inst_25197,(1),null);
var state_25309__$1 = (function (){var statearr_25381 = state_25309;
(statearr_25381[(26)] = inst_25198);

return statearr_25381;
})();
if(cljs.core.truth_(inst_25199)){
var statearr_25382_25442 = state_25309__$1;
(statearr_25382_25442[(1)] = (13));

} else {
var statearr_25383_25443 = state_25309__$1;
(statearr_25383_25443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (18))){
var inst_25234 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25384_25444 = state_25309__$1;
(statearr_25384_25444[(2)] = inst_25234);

(statearr_25384_25444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (42))){
var state_25309__$1 = state_25309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25309__$1,(45),dchan);
} else {
if((state_val_25310 === (37))){
var inst_25268 = (state_25309[(25)]);
var inst_25177 = (state_25309[(11)]);
var inst_25277 = (state_25309[(23)]);
var inst_25277__$1 = cljs.core.first.call(null,inst_25268);
var inst_25278 = cljs.core.async.put_BANG_.call(null,inst_25277__$1,inst_25177,done);
var state_25309__$1 = (function (){var statearr_25385 = state_25309;
(statearr_25385[(23)] = inst_25277__$1);

return statearr_25385;
})();
if(cljs.core.truth_(inst_25278)){
var statearr_25386_25445 = state_25309__$1;
(statearr_25386_25445[(1)] = (39));

} else {
var statearr_25387_25446 = state_25309__$1;
(statearr_25387_25446[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (8))){
var inst_25189 = (state_25309[(15)]);
var inst_25188 = (state_25309[(16)]);
var inst_25191 = (inst_25189 < inst_25188);
var inst_25192 = inst_25191;
var state_25309__$1 = state_25309;
if(cljs.core.truth_(inst_25192)){
var statearr_25388_25447 = state_25309__$1;
(statearr_25388_25447[(1)] = (10));

} else {
var statearr_25389_25448 = state_25309__$1;
(statearr_25389_25448[(1)] = (11));

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
});})(c__24575__auto___25394,cs,m,dchan,dctr,done))
;
return ((function (switch__24480__auto__,c__24575__auto___25394,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24481__auto__ = null;
var cljs$core$async$mult_$_state_machine__24481__auto____0 = (function (){
var statearr_25390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25390[(0)] = cljs$core$async$mult_$_state_machine__24481__auto__);

(statearr_25390[(1)] = (1));

return statearr_25390;
});
var cljs$core$async$mult_$_state_machine__24481__auto____1 = (function (state_25309){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_25309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e25391){if((e25391 instanceof Object)){
var ex__24484__auto__ = e25391;
var statearr_25392_25449 = state_25309;
(statearr_25392_25449[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25450 = state_25309;
state_25309 = G__25450;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24481__auto__ = function(state_25309){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24481__auto____1.call(this,state_25309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24481__auto____0;
cljs$core$async$mult_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24481__auto____1;
return cljs$core$async$mult_$_state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___25394,cs,m,dchan,dctr,done))
})();
var state__24577__auto__ = (function (){var statearr_25393 = f__24576__auto__.call(null);
(statearr_25393[(6)] = c__24575__auto___25394);

return statearr_25393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___25394,cs,m,dchan,dctr,done))
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
var G__25452 = arguments.length;
switch (G__25452) {
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
var len__4641__auto___25464 = arguments.length;
var i__4642__auto___25465 = (0);
while(true){
if((i__4642__auto___25465 < len__4641__auto___25464)){
args__4647__auto__.push((arguments[i__4642__auto___25465]));

var G__25466 = (i__4642__auto___25465 + (1));
i__4642__auto___25465 = G__25466;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25458){
var map__25459 = p__25458;
var map__25459__$1 = (((((!((map__25459 == null))))?(((((map__25459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25459):map__25459);
var opts = map__25459__$1;
var statearr_25461_25467 = state;
(statearr_25461_25467[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__25459,map__25459__$1,opts){
return (function (val){
var statearr_25462_25468 = state;
(statearr_25462_25468[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25459,map__25459__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25463_25469 = state;
(statearr_25463_25469[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25454){
var G__25455 = cljs.core.first.call(null,seq25454);
var seq25454__$1 = cljs.core.next.call(null,seq25454);
var G__25456 = cljs.core.first.call(null,seq25454__$1);
var seq25454__$2 = cljs.core.next.call(null,seq25454__$1);
var G__25457 = cljs.core.first.call(null,seq25454__$2);
var seq25454__$3 = cljs.core.next.call(null,seq25454__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25455,G__25456,G__25457,seq25454__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25470 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25471){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25471 = meta25471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25472,meta25471__$1){
var self__ = this;
var _25472__$1 = this;
return (new cljs.core.async.t_cljs$core$async25470(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25471__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25472){
var self__ = this;
var _25472__$1 = this;
return self__.meta25471;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25470.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta25471","meta25471",-1540967246,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25470.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25470";

cljs.core.async.t_cljs$core$async25470.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25470");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25470.
 */
cljs.core.async.__GT_t_cljs$core$async25470 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25470(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25471){
return (new cljs.core.async.t_cljs$core$async25470(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25471));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25470(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24575__auto___25634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___25634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___25634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25574){
var state_val_25575 = (state_25574[(1)]);
if((state_val_25575 === (7))){
var inst_25489 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
var statearr_25576_25635 = state_25574__$1;
(statearr_25576_25635[(2)] = inst_25489);

(statearr_25576_25635[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (20))){
var inst_25501 = (state_25574[(7)]);
var state_25574__$1 = state_25574;
var statearr_25577_25636 = state_25574__$1;
(statearr_25577_25636[(2)] = inst_25501);

(statearr_25577_25636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (27))){
var state_25574__$1 = state_25574;
var statearr_25578_25637 = state_25574__$1;
(statearr_25578_25637[(2)] = null);

(statearr_25578_25637[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (1))){
var inst_25476 = (state_25574[(8)]);
var inst_25476__$1 = calc_state.call(null);
var inst_25478 = (inst_25476__$1 == null);
var inst_25479 = cljs.core.not.call(null,inst_25478);
var state_25574__$1 = (function (){var statearr_25579 = state_25574;
(statearr_25579[(8)] = inst_25476__$1);

return statearr_25579;
})();
if(inst_25479){
var statearr_25580_25638 = state_25574__$1;
(statearr_25580_25638[(1)] = (2));

} else {
var statearr_25581_25639 = state_25574__$1;
(statearr_25581_25639[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (24))){
var inst_25534 = (state_25574[(9)]);
var inst_25525 = (state_25574[(10)]);
var inst_25548 = (state_25574[(11)]);
var inst_25548__$1 = inst_25525.call(null,inst_25534);
var state_25574__$1 = (function (){var statearr_25582 = state_25574;
(statearr_25582[(11)] = inst_25548__$1);

return statearr_25582;
})();
if(cljs.core.truth_(inst_25548__$1)){
var statearr_25583_25640 = state_25574__$1;
(statearr_25583_25640[(1)] = (29));

} else {
var statearr_25584_25641 = state_25574__$1;
(statearr_25584_25641[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (4))){
var inst_25492 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
if(cljs.core.truth_(inst_25492)){
var statearr_25585_25642 = state_25574__$1;
(statearr_25585_25642[(1)] = (8));

} else {
var statearr_25586_25643 = state_25574__$1;
(statearr_25586_25643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (15))){
var inst_25519 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
if(cljs.core.truth_(inst_25519)){
var statearr_25587_25644 = state_25574__$1;
(statearr_25587_25644[(1)] = (19));

} else {
var statearr_25588_25645 = state_25574__$1;
(statearr_25588_25645[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (21))){
var inst_25524 = (state_25574[(12)]);
var inst_25524__$1 = (state_25574[(2)]);
var inst_25525 = cljs.core.get.call(null,inst_25524__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25526 = cljs.core.get.call(null,inst_25524__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25527 = cljs.core.get.call(null,inst_25524__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25574__$1 = (function (){var statearr_25589 = state_25574;
(statearr_25589[(10)] = inst_25525);

(statearr_25589[(13)] = inst_25526);

(statearr_25589[(12)] = inst_25524__$1);

return statearr_25589;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25574__$1,(22),inst_25527);
} else {
if((state_val_25575 === (31))){
var inst_25556 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
if(cljs.core.truth_(inst_25556)){
var statearr_25590_25646 = state_25574__$1;
(statearr_25590_25646[(1)] = (32));

} else {
var statearr_25591_25647 = state_25574__$1;
(statearr_25591_25647[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (32))){
var inst_25533 = (state_25574[(14)]);
var state_25574__$1 = state_25574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25574__$1,(35),out,inst_25533);
} else {
if((state_val_25575 === (33))){
var inst_25524 = (state_25574[(12)]);
var inst_25501 = inst_25524;
var state_25574__$1 = (function (){var statearr_25592 = state_25574;
(statearr_25592[(7)] = inst_25501);

return statearr_25592;
})();
var statearr_25593_25648 = state_25574__$1;
(statearr_25593_25648[(2)] = null);

(statearr_25593_25648[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (13))){
var inst_25501 = (state_25574[(7)]);
var inst_25508 = inst_25501.cljs$lang$protocol_mask$partition0$;
var inst_25509 = (inst_25508 & (64));
var inst_25510 = inst_25501.cljs$core$ISeq$;
var inst_25511 = (cljs.core.PROTOCOL_SENTINEL === inst_25510);
var inst_25512 = ((inst_25509) || (inst_25511));
var state_25574__$1 = state_25574;
if(cljs.core.truth_(inst_25512)){
var statearr_25594_25649 = state_25574__$1;
(statearr_25594_25649[(1)] = (16));

} else {
var statearr_25595_25650 = state_25574__$1;
(statearr_25595_25650[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (22))){
var inst_25533 = (state_25574[(14)]);
var inst_25534 = (state_25574[(9)]);
var inst_25532 = (state_25574[(2)]);
var inst_25533__$1 = cljs.core.nth.call(null,inst_25532,(0),null);
var inst_25534__$1 = cljs.core.nth.call(null,inst_25532,(1),null);
var inst_25535 = (inst_25533__$1 == null);
var inst_25536 = cljs.core._EQ_.call(null,inst_25534__$1,change);
var inst_25537 = ((inst_25535) || (inst_25536));
var state_25574__$1 = (function (){var statearr_25596 = state_25574;
(statearr_25596[(14)] = inst_25533__$1);

(statearr_25596[(9)] = inst_25534__$1);

return statearr_25596;
})();
if(cljs.core.truth_(inst_25537)){
var statearr_25597_25651 = state_25574__$1;
(statearr_25597_25651[(1)] = (23));

} else {
var statearr_25598_25652 = state_25574__$1;
(statearr_25598_25652[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (36))){
var inst_25524 = (state_25574[(12)]);
var inst_25501 = inst_25524;
var state_25574__$1 = (function (){var statearr_25599 = state_25574;
(statearr_25599[(7)] = inst_25501);

return statearr_25599;
})();
var statearr_25600_25653 = state_25574__$1;
(statearr_25600_25653[(2)] = null);

(statearr_25600_25653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (29))){
var inst_25548 = (state_25574[(11)]);
var state_25574__$1 = state_25574;
var statearr_25601_25654 = state_25574__$1;
(statearr_25601_25654[(2)] = inst_25548);

(statearr_25601_25654[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (6))){
var state_25574__$1 = state_25574;
var statearr_25602_25655 = state_25574__$1;
(statearr_25602_25655[(2)] = false);

(statearr_25602_25655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (28))){
var inst_25544 = (state_25574[(2)]);
var inst_25545 = calc_state.call(null);
var inst_25501 = inst_25545;
var state_25574__$1 = (function (){var statearr_25603 = state_25574;
(statearr_25603[(15)] = inst_25544);

(statearr_25603[(7)] = inst_25501);

return statearr_25603;
})();
var statearr_25604_25656 = state_25574__$1;
(statearr_25604_25656[(2)] = null);

(statearr_25604_25656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (25))){
var inst_25570 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
var statearr_25605_25657 = state_25574__$1;
(statearr_25605_25657[(2)] = inst_25570);

(statearr_25605_25657[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (34))){
var inst_25568 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
var statearr_25606_25658 = state_25574__$1;
(statearr_25606_25658[(2)] = inst_25568);

(statearr_25606_25658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (17))){
var state_25574__$1 = state_25574;
var statearr_25607_25659 = state_25574__$1;
(statearr_25607_25659[(2)] = false);

(statearr_25607_25659[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (3))){
var state_25574__$1 = state_25574;
var statearr_25608_25660 = state_25574__$1;
(statearr_25608_25660[(2)] = false);

(statearr_25608_25660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (12))){
var inst_25572 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25574__$1,inst_25572);
} else {
if((state_val_25575 === (2))){
var inst_25476 = (state_25574[(8)]);
var inst_25481 = inst_25476.cljs$lang$protocol_mask$partition0$;
var inst_25482 = (inst_25481 & (64));
var inst_25483 = inst_25476.cljs$core$ISeq$;
var inst_25484 = (cljs.core.PROTOCOL_SENTINEL === inst_25483);
var inst_25485 = ((inst_25482) || (inst_25484));
var state_25574__$1 = state_25574;
if(cljs.core.truth_(inst_25485)){
var statearr_25609_25661 = state_25574__$1;
(statearr_25609_25661[(1)] = (5));

} else {
var statearr_25610_25662 = state_25574__$1;
(statearr_25610_25662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (23))){
var inst_25533 = (state_25574[(14)]);
var inst_25539 = (inst_25533 == null);
var state_25574__$1 = state_25574;
if(cljs.core.truth_(inst_25539)){
var statearr_25611_25663 = state_25574__$1;
(statearr_25611_25663[(1)] = (26));

} else {
var statearr_25612_25664 = state_25574__$1;
(statearr_25612_25664[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (35))){
var inst_25559 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
if(cljs.core.truth_(inst_25559)){
var statearr_25613_25665 = state_25574__$1;
(statearr_25613_25665[(1)] = (36));

} else {
var statearr_25614_25666 = state_25574__$1;
(statearr_25614_25666[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (19))){
var inst_25501 = (state_25574[(7)]);
var inst_25521 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25501);
var state_25574__$1 = state_25574;
var statearr_25615_25667 = state_25574__$1;
(statearr_25615_25667[(2)] = inst_25521);

(statearr_25615_25667[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (11))){
var inst_25501 = (state_25574[(7)]);
var inst_25505 = (inst_25501 == null);
var inst_25506 = cljs.core.not.call(null,inst_25505);
var state_25574__$1 = state_25574;
if(inst_25506){
var statearr_25616_25668 = state_25574__$1;
(statearr_25616_25668[(1)] = (13));

} else {
var statearr_25617_25669 = state_25574__$1;
(statearr_25617_25669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (9))){
var inst_25476 = (state_25574[(8)]);
var state_25574__$1 = state_25574;
var statearr_25618_25670 = state_25574__$1;
(statearr_25618_25670[(2)] = inst_25476);

(statearr_25618_25670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (5))){
var state_25574__$1 = state_25574;
var statearr_25619_25671 = state_25574__$1;
(statearr_25619_25671[(2)] = true);

(statearr_25619_25671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (14))){
var state_25574__$1 = state_25574;
var statearr_25620_25672 = state_25574__$1;
(statearr_25620_25672[(2)] = false);

(statearr_25620_25672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (26))){
var inst_25534 = (state_25574[(9)]);
var inst_25541 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25534);
var state_25574__$1 = state_25574;
var statearr_25621_25673 = state_25574__$1;
(statearr_25621_25673[(2)] = inst_25541);

(statearr_25621_25673[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (16))){
var state_25574__$1 = state_25574;
var statearr_25622_25674 = state_25574__$1;
(statearr_25622_25674[(2)] = true);

(statearr_25622_25674[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (38))){
var inst_25564 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
var statearr_25623_25675 = state_25574__$1;
(statearr_25623_25675[(2)] = inst_25564);

(statearr_25623_25675[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (30))){
var inst_25534 = (state_25574[(9)]);
var inst_25525 = (state_25574[(10)]);
var inst_25526 = (state_25574[(13)]);
var inst_25551 = cljs.core.empty_QMARK_.call(null,inst_25525);
var inst_25552 = inst_25526.call(null,inst_25534);
var inst_25553 = cljs.core.not.call(null,inst_25552);
var inst_25554 = ((inst_25551) && (inst_25553));
var state_25574__$1 = state_25574;
var statearr_25624_25676 = state_25574__$1;
(statearr_25624_25676[(2)] = inst_25554);

(statearr_25624_25676[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (10))){
var inst_25476 = (state_25574[(8)]);
var inst_25497 = (state_25574[(2)]);
var inst_25498 = cljs.core.get.call(null,inst_25497,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25499 = cljs.core.get.call(null,inst_25497,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25500 = cljs.core.get.call(null,inst_25497,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25501 = inst_25476;
var state_25574__$1 = (function (){var statearr_25625 = state_25574;
(statearr_25625[(16)] = inst_25499);

(statearr_25625[(17)] = inst_25500);

(statearr_25625[(18)] = inst_25498);

(statearr_25625[(7)] = inst_25501);

return statearr_25625;
})();
var statearr_25626_25677 = state_25574__$1;
(statearr_25626_25677[(2)] = null);

(statearr_25626_25677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (18))){
var inst_25516 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
var statearr_25627_25678 = state_25574__$1;
(statearr_25627_25678[(2)] = inst_25516);

(statearr_25627_25678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (37))){
var state_25574__$1 = state_25574;
var statearr_25628_25679 = state_25574__$1;
(statearr_25628_25679[(2)] = null);

(statearr_25628_25679[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (8))){
var inst_25476 = (state_25574[(8)]);
var inst_25494 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25476);
var state_25574__$1 = state_25574;
var statearr_25629_25680 = state_25574__$1;
(statearr_25629_25680[(2)] = inst_25494);

(statearr_25629_25680[(1)] = (10));


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
});})(c__24575__auto___25634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24480__auto__,c__24575__auto___25634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24481__auto__ = null;
var cljs$core$async$mix_$_state_machine__24481__auto____0 = (function (){
var statearr_25630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25630[(0)] = cljs$core$async$mix_$_state_machine__24481__auto__);

(statearr_25630[(1)] = (1));

return statearr_25630;
});
var cljs$core$async$mix_$_state_machine__24481__auto____1 = (function (state_25574){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_25574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e25631){if((e25631 instanceof Object)){
var ex__24484__auto__ = e25631;
var statearr_25632_25681 = state_25574;
(statearr_25632_25681[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25682 = state_25574;
state_25574 = G__25682;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24481__auto__ = function(state_25574){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24481__auto____1.call(this,state_25574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24481__auto____0;
cljs$core$async$mix_$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24481__auto____1;
return cljs$core$async$mix_$_state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___25634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24577__auto__ = (function (){var statearr_25633 = f__24576__auto__.call(null);
(statearr_25633[(6)] = c__24575__auto___25634);

return statearr_25633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___25634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__25684 = arguments.length;
switch (G__25684) {
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
var G__25688 = arguments.length;
switch (G__25688) {
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
return (function (p1__25686_SHARP_){
if(cljs.core.truth_(p1__25686_SHARP_.call(null,topic))){
return p1__25686_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25686_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25689 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25690){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25690 = meta25690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25691,meta25690__$1){
var self__ = this;
var _25691__$1 = this;
return (new cljs.core.async.t_cljs$core$async25689(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25690__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25691){
var self__ = this;
var _25691__$1 = this;
return self__.meta25690;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25689.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25690","meta25690",-1814847165,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25689.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25689";

cljs.core.async.t_cljs$core$async25689.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25689");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25689.
 */
cljs.core.async.__GT_t_cljs$core$async25689 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25689(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25690){
return (new cljs.core.async.t_cljs$core$async25689(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25690));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25689(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24575__auto___25809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___25809,mults,ensure_mult,p){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___25809,mults,ensure_mult,p){
return (function (state_25763){
var state_val_25764 = (state_25763[(1)]);
if((state_val_25764 === (7))){
var inst_25759 = (state_25763[(2)]);
var state_25763__$1 = state_25763;
var statearr_25765_25810 = state_25763__$1;
(statearr_25765_25810[(2)] = inst_25759);

(statearr_25765_25810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (20))){
var state_25763__$1 = state_25763;
var statearr_25766_25811 = state_25763__$1;
(statearr_25766_25811[(2)] = null);

(statearr_25766_25811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (1))){
var state_25763__$1 = state_25763;
var statearr_25767_25812 = state_25763__$1;
(statearr_25767_25812[(2)] = null);

(statearr_25767_25812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (24))){
var inst_25742 = (state_25763[(7)]);
var inst_25751 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25742);
var state_25763__$1 = state_25763;
var statearr_25768_25813 = state_25763__$1;
(statearr_25768_25813[(2)] = inst_25751);

(statearr_25768_25813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (4))){
var inst_25694 = (state_25763[(8)]);
var inst_25694__$1 = (state_25763[(2)]);
var inst_25695 = (inst_25694__$1 == null);
var state_25763__$1 = (function (){var statearr_25769 = state_25763;
(statearr_25769[(8)] = inst_25694__$1);

return statearr_25769;
})();
if(cljs.core.truth_(inst_25695)){
var statearr_25770_25814 = state_25763__$1;
(statearr_25770_25814[(1)] = (5));

} else {
var statearr_25771_25815 = state_25763__$1;
(statearr_25771_25815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (15))){
var inst_25736 = (state_25763[(2)]);
var state_25763__$1 = state_25763;
var statearr_25772_25816 = state_25763__$1;
(statearr_25772_25816[(2)] = inst_25736);

(statearr_25772_25816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (21))){
var inst_25756 = (state_25763[(2)]);
var state_25763__$1 = (function (){var statearr_25773 = state_25763;
(statearr_25773[(9)] = inst_25756);

return statearr_25773;
})();
var statearr_25774_25817 = state_25763__$1;
(statearr_25774_25817[(2)] = null);

(statearr_25774_25817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (13))){
var inst_25718 = (state_25763[(10)]);
var inst_25720 = cljs.core.chunked_seq_QMARK_.call(null,inst_25718);
var state_25763__$1 = state_25763;
if(inst_25720){
var statearr_25775_25818 = state_25763__$1;
(statearr_25775_25818[(1)] = (16));

} else {
var statearr_25776_25819 = state_25763__$1;
(statearr_25776_25819[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (22))){
var inst_25748 = (state_25763[(2)]);
var state_25763__$1 = state_25763;
if(cljs.core.truth_(inst_25748)){
var statearr_25777_25820 = state_25763__$1;
(statearr_25777_25820[(1)] = (23));

} else {
var statearr_25778_25821 = state_25763__$1;
(statearr_25778_25821[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (6))){
var inst_25744 = (state_25763[(11)]);
var inst_25694 = (state_25763[(8)]);
var inst_25742 = (state_25763[(7)]);
var inst_25742__$1 = topic_fn.call(null,inst_25694);
var inst_25743 = cljs.core.deref.call(null,mults);
var inst_25744__$1 = cljs.core.get.call(null,inst_25743,inst_25742__$1);
var state_25763__$1 = (function (){var statearr_25779 = state_25763;
(statearr_25779[(11)] = inst_25744__$1);

(statearr_25779[(7)] = inst_25742__$1);

return statearr_25779;
})();
if(cljs.core.truth_(inst_25744__$1)){
var statearr_25780_25822 = state_25763__$1;
(statearr_25780_25822[(1)] = (19));

} else {
var statearr_25781_25823 = state_25763__$1;
(statearr_25781_25823[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (25))){
var inst_25753 = (state_25763[(2)]);
var state_25763__$1 = state_25763;
var statearr_25782_25824 = state_25763__$1;
(statearr_25782_25824[(2)] = inst_25753);

(statearr_25782_25824[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (17))){
var inst_25718 = (state_25763[(10)]);
var inst_25727 = cljs.core.first.call(null,inst_25718);
var inst_25728 = cljs.core.async.muxch_STAR_.call(null,inst_25727);
var inst_25729 = cljs.core.async.close_BANG_.call(null,inst_25728);
var inst_25730 = cljs.core.next.call(null,inst_25718);
var inst_25704 = inst_25730;
var inst_25705 = null;
var inst_25706 = (0);
var inst_25707 = (0);
var state_25763__$1 = (function (){var statearr_25783 = state_25763;
(statearr_25783[(12)] = inst_25705);

(statearr_25783[(13)] = inst_25704);

(statearr_25783[(14)] = inst_25706);

(statearr_25783[(15)] = inst_25707);

(statearr_25783[(16)] = inst_25729);

return statearr_25783;
})();
var statearr_25784_25825 = state_25763__$1;
(statearr_25784_25825[(2)] = null);

(statearr_25784_25825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (3))){
var inst_25761 = (state_25763[(2)]);
var state_25763__$1 = state_25763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25763__$1,inst_25761);
} else {
if((state_val_25764 === (12))){
var inst_25738 = (state_25763[(2)]);
var state_25763__$1 = state_25763;
var statearr_25785_25826 = state_25763__$1;
(statearr_25785_25826[(2)] = inst_25738);

(statearr_25785_25826[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (2))){
var state_25763__$1 = state_25763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25763__$1,(4),ch);
} else {
if((state_val_25764 === (23))){
var state_25763__$1 = state_25763;
var statearr_25786_25827 = state_25763__$1;
(statearr_25786_25827[(2)] = null);

(statearr_25786_25827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (19))){
var inst_25744 = (state_25763[(11)]);
var inst_25694 = (state_25763[(8)]);
var inst_25746 = cljs.core.async.muxch_STAR_.call(null,inst_25744);
var state_25763__$1 = state_25763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25763__$1,(22),inst_25746,inst_25694);
} else {
if((state_val_25764 === (11))){
var inst_25704 = (state_25763[(13)]);
var inst_25718 = (state_25763[(10)]);
var inst_25718__$1 = cljs.core.seq.call(null,inst_25704);
var state_25763__$1 = (function (){var statearr_25787 = state_25763;
(statearr_25787[(10)] = inst_25718__$1);

return statearr_25787;
})();
if(inst_25718__$1){
var statearr_25788_25828 = state_25763__$1;
(statearr_25788_25828[(1)] = (13));

} else {
var statearr_25789_25829 = state_25763__$1;
(statearr_25789_25829[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (9))){
var inst_25740 = (state_25763[(2)]);
var state_25763__$1 = state_25763;
var statearr_25790_25830 = state_25763__$1;
(statearr_25790_25830[(2)] = inst_25740);

(statearr_25790_25830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (5))){
var inst_25701 = cljs.core.deref.call(null,mults);
var inst_25702 = cljs.core.vals.call(null,inst_25701);
var inst_25703 = cljs.core.seq.call(null,inst_25702);
var inst_25704 = inst_25703;
var inst_25705 = null;
var inst_25706 = (0);
var inst_25707 = (0);
var state_25763__$1 = (function (){var statearr_25791 = state_25763;
(statearr_25791[(12)] = inst_25705);

(statearr_25791[(13)] = inst_25704);

(statearr_25791[(14)] = inst_25706);

(statearr_25791[(15)] = inst_25707);

return statearr_25791;
})();
var statearr_25792_25831 = state_25763__$1;
(statearr_25792_25831[(2)] = null);

(statearr_25792_25831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (14))){
var state_25763__$1 = state_25763;
var statearr_25796_25832 = state_25763__$1;
(statearr_25796_25832[(2)] = null);

(statearr_25796_25832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (16))){
var inst_25718 = (state_25763[(10)]);
var inst_25722 = cljs.core.chunk_first.call(null,inst_25718);
var inst_25723 = cljs.core.chunk_rest.call(null,inst_25718);
var inst_25724 = cljs.core.count.call(null,inst_25722);
var inst_25704 = inst_25723;
var inst_25705 = inst_25722;
var inst_25706 = inst_25724;
var inst_25707 = (0);
var state_25763__$1 = (function (){var statearr_25797 = state_25763;
(statearr_25797[(12)] = inst_25705);

(statearr_25797[(13)] = inst_25704);

(statearr_25797[(14)] = inst_25706);

(statearr_25797[(15)] = inst_25707);

return statearr_25797;
})();
var statearr_25798_25833 = state_25763__$1;
(statearr_25798_25833[(2)] = null);

(statearr_25798_25833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (10))){
var inst_25705 = (state_25763[(12)]);
var inst_25704 = (state_25763[(13)]);
var inst_25706 = (state_25763[(14)]);
var inst_25707 = (state_25763[(15)]);
var inst_25712 = cljs.core._nth.call(null,inst_25705,inst_25707);
var inst_25713 = cljs.core.async.muxch_STAR_.call(null,inst_25712);
var inst_25714 = cljs.core.async.close_BANG_.call(null,inst_25713);
var inst_25715 = (inst_25707 + (1));
var tmp25793 = inst_25705;
var tmp25794 = inst_25704;
var tmp25795 = inst_25706;
var inst_25704__$1 = tmp25794;
var inst_25705__$1 = tmp25793;
var inst_25706__$1 = tmp25795;
var inst_25707__$1 = inst_25715;
var state_25763__$1 = (function (){var statearr_25799 = state_25763;
(statearr_25799[(12)] = inst_25705__$1);

(statearr_25799[(13)] = inst_25704__$1);

(statearr_25799[(17)] = inst_25714);

(statearr_25799[(14)] = inst_25706__$1);

(statearr_25799[(15)] = inst_25707__$1);

return statearr_25799;
})();
var statearr_25800_25834 = state_25763__$1;
(statearr_25800_25834[(2)] = null);

(statearr_25800_25834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (18))){
var inst_25733 = (state_25763[(2)]);
var state_25763__$1 = state_25763;
var statearr_25801_25835 = state_25763__$1;
(statearr_25801_25835[(2)] = inst_25733);

(statearr_25801_25835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (8))){
var inst_25706 = (state_25763[(14)]);
var inst_25707 = (state_25763[(15)]);
var inst_25709 = (inst_25707 < inst_25706);
var inst_25710 = inst_25709;
var state_25763__$1 = state_25763;
if(cljs.core.truth_(inst_25710)){
var statearr_25802_25836 = state_25763__$1;
(statearr_25802_25836[(1)] = (10));

} else {
var statearr_25803_25837 = state_25763__$1;
(statearr_25803_25837[(1)] = (11));

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
});})(c__24575__auto___25809,mults,ensure_mult,p))
;
return ((function (switch__24480__auto__,c__24575__auto___25809,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24481__auto__ = null;
var cljs$core$async$state_machine__24481__auto____0 = (function (){
var statearr_25804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25804[(0)] = cljs$core$async$state_machine__24481__auto__);

(statearr_25804[(1)] = (1));

return statearr_25804;
});
var cljs$core$async$state_machine__24481__auto____1 = (function (state_25763){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_25763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e25805){if((e25805 instanceof Object)){
var ex__24484__auto__ = e25805;
var statearr_25806_25838 = state_25763;
(statearr_25806_25838[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25839 = state_25763;
state_25763 = G__25839;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$state_machine__24481__auto__ = function(state_25763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24481__auto____1.call(this,state_25763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24481__auto____0;
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24481__auto____1;
return cljs$core$async$state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___25809,mults,ensure_mult,p))
})();
var state__24577__auto__ = (function (){var statearr_25807 = f__24576__auto__.call(null);
(statearr_25807[(6)] = c__24575__auto___25809);

return statearr_25807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___25809,mults,ensure_mult,p))
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
var G__25841 = arguments.length;
switch (G__25841) {
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
var G__25844 = arguments.length;
switch (G__25844) {
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
var G__25847 = arguments.length;
switch (G__25847) {
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
var c__24575__auto___25914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___25914,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___25914,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25886){
var state_val_25887 = (state_25886[(1)]);
if((state_val_25887 === (7))){
var state_25886__$1 = state_25886;
var statearr_25888_25915 = state_25886__$1;
(statearr_25888_25915[(2)] = null);

(statearr_25888_25915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (1))){
var state_25886__$1 = state_25886;
var statearr_25889_25916 = state_25886__$1;
(statearr_25889_25916[(2)] = null);

(statearr_25889_25916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (4))){
var inst_25850 = (state_25886[(7)]);
var inst_25852 = (inst_25850 < cnt);
var state_25886__$1 = state_25886;
if(cljs.core.truth_(inst_25852)){
var statearr_25890_25917 = state_25886__$1;
(statearr_25890_25917[(1)] = (6));

} else {
var statearr_25891_25918 = state_25886__$1;
(statearr_25891_25918[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (15))){
var inst_25882 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25892_25919 = state_25886__$1;
(statearr_25892_25919[(2)] = inst_25882);

(statearr_25892_25919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (13))){
var inst_25875 = cljs.core.async.close_BANG_.call(null,out);
var state_25886__$1 = state_25886;
var statearr_25893_25920 = state_25886__$1;
(statearr_25893_25920[(2)] = inst_25875);

(statearr_25893_25920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (6))){
var state_25886__$1 = state_25886;
var statearr_25894_25921 = state_25886__$1;
(statearr_25894_25921[(2)] = null);

(statearr_25894_25921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (3))){
var inst_25884 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25886__$1,inst_25884);
} else {
if((state_val_25887 === (12))){
var inst_25872 = (state_25886[(8)]);
var inst_25872__$1 = (state_25886[(2)]);
var inst_25873 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25872__$1);
var state_25886__$1 = (function (){var statearr_25895 = state_25886;
(statearr_25895[(8)] = inst_25872__$1);

return statearr_25895;
})();
if(cljs.core.truth_(inst_25873)){
var statearr_25896_25922 = state_25886__$1;
(statearr_25896_25922[(1)] = (13));

} else {
var statearr_25897_25923 = state_25886__$1;
(statearr_25897_25923[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (2))){
var inst_25849 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25850 = (0);
var state_25886__$1 = (function (){var statearr_25898 = state_25886;
(statearr_25898[(9)] = inst_25849);

(statearr_25898[(7)] = inst_25850);

return statearr_25898;
})();
var statearr_25899_25924 = state_25886__$1;
(statearr_25899_25924[(2)] = null);

(statearr_25899_25924[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (11))){
var inst_25850 = (state_25886[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25886,(10),Object,null,(9));
var inst_25859 = chs__$1.call(null,inst_25850);
var inst_25860 = done.call(null,inst_25850);
var inst_25861 = cljs.core.async.take_BANG_.call(null,inst_25859,inst_25860);
var state_25886__$1 = state_25886;
var statearr_25900_25925 = state_25886__$1;
(statearr_25900_25925[(2)] = inst_25861);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25886__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (9))){
var inst_25850 = (state_25886[(7)]);
var inst_25863 = (state_25886[(2)]);
var inst_25864 = (inst_25850 + (1));
var inst_25850__$1 = inst_25864;
var state_25886__$1 = (function (){var statearr_25901 = state_25886;
(statearr_25901[(10)] = inst_25863);

(statearr_25901[(7)] = inst_25850__$1);

return statearr_25901;
})();
var statearr_25902_25926 = state_25886__$1;
(statearr_25902_25926[(2)] = null);

(statearr_25902_25926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (5))){
var inst_25870 = (state_25886[(2)]);
var state_25886__$1 = (function (){var statearr_25903 = state_25886;
(statearr_25903[(11)] = inst_25870);

return statearr_25903;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25886__$1,(12),dchan);
} else {
if((state_val_25887 === (14))){
var inst_25872 = (state_25886[(8)]);
var inst_25877 = cljs.core.apply.call(null,f,inst_25872);
var state_25886__$1 = state_25886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25886__$1,(16),out,inst_25877);
} else {
if((state_val_25887 === (16))){
var inst_25879 = (state_25886[(2)]);
var state_25886__$1 = (function (){var statearr_25904 = state_25886;
(statearr_25904[(12)] = inst_25879);

return statearr_25904;
})();
var statearr_25905_25927 = state_25886__$1;
(statearr_25905_25927[(2)] = null);

(statearr_25905_25927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (10))){
var inst_25854 = (state_25886[(2)]);
var inst_25855 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25886__$1 = (function (){var statearr_25906 = state_25886;
(statearr_25906[(13)] = inst_25854);

return statearr_25906;
})();
var statearr_25907_25928 = state_25886__$1;
(statearr_25907_25928[(2)] = inst_25855);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25886__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (8))){
var inst_25868 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25908_25929 = state_25886__$1;
(statearr_25908_25929[(2)] = inst_25868);

(statearr_25908_25929[(1)] = (5));


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
});})(c__24575__auto___25914,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24480__auto__,c__24575__auto___25914,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24481__auto__ = null;
var cljs$core$async$state_machine__24481__auto____0 = (function (){
var statearr_25909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25909[(0)] = cljs$core$async$state_machine__24481__auto__);

(statearr_25909[(1)] = (1));

return statearr_25909;
});
var cljs$core$async$state_machine__24481__auto____1 = (function (state_25886){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_25886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e25910){if((e25910 instanceof Object)){
var ex__24484__auto__ = e25910;
var statearr_25911_25930 = state_25886;
(statearr_25911_25930[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25931 = state_25886;
state_25886 = G__25931;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$state_machine__24481__auto__ = function(state_25886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24481__auto____1.call(this,state_25886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24481__auto____0;
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24481__auto____1;
return cljs$core$async$state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___25914,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24577__auto__ = (function (){var statearr_25912 = f__24576__auto__.call(null);
(statearr_25912[(6)] = c__24575__auto___25914);

return statearr_25912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___25914,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__25934 = arguments.length;
switch (G__25934) {
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
var c__24575__auto___25988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___25988,out){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___25988,out){
return (function (state_25966){
var state_val_25967 = (state_25966[(1)]);
if((state_val_25967 === (7))){
var inst_25946 = (state_25966[(7)]);
var inst_25945 = (state_25966[(8)]);
var inst_25945__$1 = (state_25966[(2)]);
var inst_25946__$1 = cljs.core.nth.call(null,inst_25945__$1,(0),null);
var inst_25947 = cljs.core.nth.call(null,inst_25945__$1,(1),null);
var inst_25948 = (inst_25946__$1 == null);
var state_25966__$1 = (function (){var statearr_25968 = state_25966;
(statearr_25968[(9)] = inst_25947);

(statearr_25968[(7)] = inst_25946__$1);

(statearr_25968[(8)] = inst_25945__$1);

return statearr_25968;
})();
if(cljs.core.truth_(inst_25948)){
var statearr_25969_25989 = state_25966__$1;
(statearr_25969_25989[(1)] = (8));

} else {
var statearr_25970_25990 = state_25966__$1;
(statearr_25970_25990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25967 === (1))){
var inst_25935 = cljs.core.vec.call(null,chs);
var inst_25936 = inst_25935;
var state_25966__$1 = (function (){var statearr_25971 = state_25966;
(statearr_25971[(10)] = inst_25936);

return statearr_25971;
})();
var statearr_25972_25991 = state_25966__$1;
(statearr_25972_25991[(2)] = null);

(statearr_25972_25991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25967 === (4))){
var inst_25936 = (state_25966[(10)]);
var state_25966__$1 = state_25966;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25966__$1,(7),inst_25936);
} else {
if((state_val_25967 === (6))){
var inst_25962 = (state_25966[(2)]);
var state_25966__$1 = state_25966;
var statearr_25973_25992 = state_25966__$1;
(statearr_25973_25992[(2)] = inst_25962);

(statearr_25973_25992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25967 === (3))){
var inst_25964 = (state_25966[(2)]);
var state_25966__$1 = state_25966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25966__$1,inst_25964);
} else {
if((state_val_25967 === (2))){
var inst_25936 = (state_25966[(10)]);
var inst_25938 = cljs.core.count.call(null,inst_25936);
var inst_25939 = (inst_25938 > (0));
var state_25966__$1 = state_25966;
if(cljs.core.truth_(inst_25939)){
var statearr_25975_25993 = state_25966__$1;
(statearr_25975_25993[(1)] = (4));

} else {
var statearr_25976_25994 = state_25966__$1;
(statearr_25976_25994[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25967 === (11))){
var inst_25936 = (state_25966[(10)]);
var inst_25955 = (state_25966[(2)]);
var tmp25974 = inst_25936;
var inst_25936__$1 = tmp25974;
var state_25966__$1 = (function (){var statearr_25977 = state_25966;
(statearr_25977[(10)] = inst_25936__$1);

(statearr_25977[(11)] = inst_25955);

return statearr_25977;
})();
var statearr_25978_25995 = state_25966__$1;
(statearr_25978_25995[(2)] = null);

(statearr_25978_25995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25967 === (9))){
var inst_25946 = (state_25966[(7)]);
var state_25966__$1 = state_25966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25966__$1,(11),out,inst_25946);
} else {
if((state_val_25967 === (5))){
var inst_25960 = cljs.core.async.close_BANG_.call(null,out);
var state_25966__$1 = state_25966;
var statearr_25979_25996 = state_25966__$1;
(statearr_25979_25996[(2)] = inst_25960);

(statearr_25979_25996[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25967 === (10))){
var inst_25958 = (state_25966[(2)]);
var state_25966__$1 = state_25966;
var statearr_25980_25997 = state_25966__$1;
(statearr_25980_25997[(2)] = inst_25958);

(statearr_25980_25997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25967 === (8))){
var inst_25947 = (state_25966[(9)]);
var inst_25946 = (state_25966[(7)]);
var inst_25936 = (state_25966[(10)]);
var inst_25945 = (state_25966[(8)]);
var inst_25950 = (function (){var cs = inst_25936;
var vec__25941 = inst_25945;
var v = inst_25946;
var c = inst_25947;
return ((function (cs,vec__25941,v,c,inst_25947,inst_25946,inst_25936,inst_25945,state_val_25967,c__24575__auto___25988,out){
return (function (p1__25932_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25932_SHARP_);
});
;})(cs,vec__25941,v,c,inst_25947,inst_25946,inst_25936,inst_25945,state_val_25967,c__24575__auto___25988,out))
})();
var inst_25951 = cljs.core.filterv.call(null,inst_25950,inst_25936);
var inst_25936__$1 = inst_25951;
var state_25966__$1 = (function (){var statearr_25981 = state_25966;
(statearr_25981[(10)] = inst_25936__$1);

return statearr_25981;
})();
var statearr_25982_25998 = state_25966__$1;
(statearr_25982_25998[(2)] = null);

(statearr_25982_25998[(1)] = (2));


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
});})(c__24575__auto___25988,out))
;
return ((function (switch__24480__auto__,c__24575__auto___25988,out){
return (function() {
var cljs$core$async$state_machine__24481__auto__ = null;
var cljs$core$async$state_machine__24481__auto____0 = (function (){
var statearr_25983 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25983[(0)] = cljs$core$async$state_machine__24481__auto__);

(statearr_25983[(1)] = (1));

return statearr_25983;
});
var cljs$core$async$state_machine__24481__auto____1 = (function (state_25966){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_25966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e25984){if((e25984 instanceof Object)){
var ex__24484__auto__ = e25984;
var statearr_25985_25999 = state_25966;
(statearr_25985_25999[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26000 = state_25966;
state_25966 = G__26000;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$state_machine__24481__auto__ = function(state_25966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24481__auto____1.call(this,state_25966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24481__auto____0;
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24481__auto____1;
return cljs$core$async$state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___25988,out))
})();
var state__24577__auto__ = (function (){var statearr_25986 = f__24576__auto__.call(null);
(statearr_25986[(6)] = c__24575__auto___25988);

return statearr_25986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___25988,out))
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
var G__26002 = arguments.length;
switch (G__26002) {
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
var c__24575__auto___26047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___26047,out){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___26047,out){
return (function (state_26026){
var state_val_26027 = (state_26026[(1)]);
if((state_val_26027 === (7))){
var inst_26008 = (state_26026[(7)]);
var inst_26008__$1 = (state_26026[(2)]);
var inst_26009 = (inst_26008__$1 == null);
var inst_26010 = cljs.core.not.call(null,inst_26009);
var state_26026__$1 = (function (){var statearr_26028 = state_26026;
(statearr_26028[(7)] = inst_26008__$1);

return statearr_26028;
})();
if(inst_26010){
var statearr_26029_26048 = state_26026__$1;
(statearr_26029_26048[(1)] = (8));

} else {
var statearr_26030_26049 = state_26026__$1;
(statearr_26030_26049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (1))){
var inst_26003 = (0);
var state_26026__$1 = (function (){var statearr_26031 = state_26026;
(statearr_26031[(8)] = inst_26003);

return statearr_26031;
})();
var statearr_26032_26050 = state_26026__$1;
(statearr_26032_26050[(2)] = null);

(statearr_26032_26050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (4))){
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26026__$1,(7),ch);
} else {
if((state_val_26027 === (6))){
var inst_26021 = (state_26026[(2)]);
var state_26026__$1 = state_26026;
var statearr_26033_26051 = state_26026__$1;
(statearr_26033_26051[(2)] = inst_26021);

(statearr_26033_26051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (3))){
var inst_26023 = (state_26026[(2)]);
var inst_26024 = cljs.core.async.close_BANG_.call(null,out);
var state_26026__$1 = (function (){var statearr_26034 = state_26026;
(statearr_26034[(9)] = inst_26023);

return statearr_26034;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26026__$1,inst_26024);
} else {
if((state_val_26027 === (2))){
var inst_26003 = (state_26026[(8)]);
var inst_26005 = (inst_26003 < n);
var state_26026__$1 = state_26026;
if(cljs.core.truth_(inst_26005)){
var statearr_26035_26052 = state_26026__$1;
(statearr_26035_26052[(1)] = (4));

} else {
var statearr_26036_26053 = state_26026__$1;
(statearr_26036_26053[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (11))){
var inst_26003 = (state_26026[(8)]);
var inst_26013 = (state_26026[(2)]);
var inst_26014 = (inst_26003 + (1));
var inst_26003__$1 = inst_26014;
var state_26026__$1 = (function (){var statearr_26037 = state_26026;
(statearr_26037[(10)] = inst_26013);

(statearr_26037[(8)] = inst_26003__$1);

return statearr_26037;
})();
var statearr_26038_26054 = state_26026__$1;
(statearr_26038_26054[(2)] = null);

(statearr_26038_26054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (9))){
var state_26026__$1 = state_26026;
var statearr_26039_26055 = state_26026__$1;
(statearr_26039_26055[(2)] = null);

(statearr_26039_26055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (5))){
var state_26026__$1 = state_26026;
var statearr_26040_26056 = state_26026__$1;
(statearr_26040_26056[(2)] = null);

(statearr_26040_26056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (10))){
var inst_26018 = (state_26026[(2)]);
var state_26026__$1 = state_26026;
var statearr_26041_26057 = state_26026__$1;
(statearr_26041_26057[(2)] = inst_26018);

(statearr_26041_26057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (8))){
var inst_26008 = (state_26026[(7)]);
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26026__$1,(11),out,inst_26008);
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
});})(c__24575__auto___26047,out))
;
return ((function (switch__24480__auto__,c__24575__auto___26047,out){
return (function() {
var cljs$core$async$state_machine__24481__auto__ = null;
var cljs$core$async$state_machine__24481__auto____0 = (function (){
var statearr_26042 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26042[(0)] = cljs$core$async$state_machine__24481__auto__);

(statearr_26042[(1)] = (1));

return statearr_26042;
});
var cljs$core$async$state_machine__24481__auto____1 = (function (state_26026){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_26026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e26043){if((e26043 instanceof Object)){
var ex__24484__auto__ = e26043;
var statearr_26044_26058 = state_26026;
(statearr_26044_26058[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26059 = state_26026;
state_26026 = G__26059;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$state_machine__24481__auto__ = function(state_26026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24481__auto____1.call(this,state_26026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24481__auto____0;
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24481__auto____1;
return cljs$core$async$state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___26047,out))
})();
var state__24577__auto__ = (function (){var statearr_26045 = f__24576__auto__.call(null);
(statearr_26045[(6)] = c__24575__auto___26047);

return statearr_26045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___26047,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26061 = (function (f,ch,meta26062){
this.f = f;
this.ch = ch;
this.meta26062 = meta26062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26063,meta26062__$1){
var self__ = this;
var _26063__$1 = this;
return (new cljs.core.async.t_cljs$core$async26061(self__.f,self__.ch,meta26062__$1));
});

cljs.core.async.t_cljs$core$async26061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26063){
var self__ = this;
var _26063__$1 = this;
return self__.meta26062;
});

cljs.core.async.t_cljs$core$async26061.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26061.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26061.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26061.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26061.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26064 = (function (f,ch,meta26062,_,fn1,meta26065){
this.f = f;
this.ch = ch;
this.meta26062 = meta26062;
this._ = _;
this.fn1 = fn1;
this.meta26065 = meta26065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26066,meta26065__$1){
var self__ = this;
var _26066__$1 = this;
return (new cljs.core.async.t_cljs$core$async26064(self__.f,self__.ch,self__.meta26062,self__._,self__.fn1,meta26065__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26066){
var self__ = this;
var _26066__$1 = this;
return self__.meta26065;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26064.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26064.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26060_SHARP_){
return f1.call(null,(((p1__26060_SHARP_ == null))?null:self__.f.call(null,p1__26060_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26064.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26062","meta26062",880750298,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26061","cljs.core.async/t_cljs$core$async26061",853960948,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26065","meta26065",84775880,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26064";

cljs.core.async.t_cljs$core$async26064.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26064");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26064.
 */
cljs.core.async.__GT_t_cljs$core$async26064 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26064(f__$1,ch__$1,meta26062__$1,___$2,fn1__$1,meta26065){
return (new cljs.core.async.t_cljs$core$async26064(f__$1,ch__$1,meta26062__$1,___$2,fn1__$1,meta26065));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26064(self__.f,self__.ch,self__.meta26062,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26061.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26061.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26062","meta26062",880750298,null)], null);
});

cljs.core.async.t_cljs$core$async26061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26061";

cljs.core.async.t_cljs$core$async26061.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26061");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26061.
 */
cljs.core.async.__GT_t_cljs$core$async26061 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26061(f__$1,ch__$1,meta26062){
return (new cljs.core.async.t_cljs$core$async26061(f__$1,ch__$1,meta26062));
});

}

return (new cljs.core.async.t_cljs$core$async26061(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26067 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26067 = (function (f,ch,meta26068){
this.f = f;
this.ch = ch;
this.meta26068 = meta26068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26069,meta26068__$1){
var self__ = this;
var _26069__$1 = this;
return (new cljs.core.async.t_cljs$core$async26067(self__.f,self__.ch,meta26068__$1));
});

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26069){
var self__ = this;
var _26069__$1 = this;
return self__.meta26068;
});

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26068","meta26068",1348264285,null)], null);
});

cljs.core.async.t_cljs$core$async26067.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26067";

cljs.core.async.t_cljs$core$async26067.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26067");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26067.
 */
cljs.core.async.__GT_t_cljs$core$async26067 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26067(f__$1,ch__$1,meta26068){
return (new cljs.core.async.t_cljs$core$async26067(f__$1,ch__$1,meta26068));
});

}

return (new cljs.core.async.t_cljs$core$async26067(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26070 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26070 = (function (p,ch,meta26071){
this.p = p;
this.ch = ch;
this.meta26071 = meta26071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26072,meta26071__$1){
var self__ = this;
var _26072__$1 = this;
return (new cljs.core.async.t_cljs$core$async26070(self__.p,self__.ch,meta26071__$1));
});

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26072){
var self__ = this;
var _26072__$1 = this;
return self__.meta26071;
});

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26071","meta26071",1395940289,null)], null);
});

cljs.core.async.t_cljs$core$async26070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26070";

cljs.core.async.t_cljs$core$async26070.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26070");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26070.
 */
cljs.core.async.__GT_t_cljs$core$async26070 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26070(p__$1,ch__$1,meta26071){
return (new cljs.core.async.t_cljs$core$async26070(p__$1,ch__$1,meta26071));
});

}

return (new cljs.core.async.t_cljs$core$async26070(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26074 = arguments.length;
switch (G__26074) {
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
var c__24575__auto___26114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___26114,out){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___26114,out){
return (function (state_26095){
var state_val_26096 = (state_26095[(1)]);
if((state_val_26096 === (7))){
var inst_26091 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
var statearr_26097_26115 = state_26095__$1;
(statearr_26097_26115[(2)] = inst_26091);

(statearr_26097_26115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (1))){
var state_26095__$1 = state_26095;
var statearr_26098_26116 = state_26095__$1;
(statearr_26098_26116[(2)] = null);

(statearr_26098_26116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (4))){
var inst_26077 = (state_26095[(7)]);
var inst_26077__$1 = (state_26095[(2)]);
var inst_26078 = (inst_26077__$1 == null);
var state_26095__$1 = (function (){var statearr_26099 = state_26095;
(statearr_26099[(7)] = inst_26077__$1);

return statearr_26099;
})();
if(cljs.core.truth_(inst_26078)){
var statearr_26100_26117 = state_26095__$1;
(statearr_26100_26117[(1)] = (5));

} else {
var statearr_26101_26118 = state_26095__$1;
(statearr_26101_26118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (6))){
var inst_26077 = (state_26095[(7)]);
var inst_26082 = p.call(null,inst_26077);
var state_26095__$1 = state_26095;
if(cljs.core.truth_(inst_26082)){
var statearr_26102_26119 = state_26095__$1;
(statearr_26102_26119[(1)] = (8));

} else {
var statearr_26103_26120 = state_26095__$1;
(statearr_26103_26120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (3))){
var inst_26093 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26095__$1,inst_26093);
} else {
if((state_val_26096 === (2))){
var state_26095__$1 = state_26095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26095__$1,(4),ch);
} else {
if((state_val_26096 === (11))){
var inst_26085 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
var statearr_26104_26121 = state_26095__$1;
(statearr_26104_26121[(2)] = inst_26085);

(statearr_26104_26121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (9))){
var state_26095__$1 = state_26095;
var statearr_26105_26122 = state_26095__$1;
(statearr_26105_26122[(2)] = null);

(statearr_26105_26122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (5))){
var inst_26080 = cljs.core.async.close_BANG_.call(null,out);
var state_26095__$1 = state_26095;
var statearr_26106_26123 = state_26095__$1;
(statearr_26106_26123[(2)] = inst_26080);

(statearr_26106_26123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (10))){
var inst_26088 = (state_26095[(2)]);
var state_26095__$1 = (function (){var statearr_26107 = state_26095;
(statearr_26107[(8)] = inst_26088);

return statearr_26107;
})();
var statearr_26108_26124 = state_26095__$1;
(statearr_26108_26124[(2)] = null);

(statearr_26108_26124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (8))){
var inst_26077 = (state_26095[(7)]);
var state_26095__$1 = state_26095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26095__$1,(11),out,inst_26077);
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
});})(c__24575__auto___26114,out))
;
return ((function (switch__24480__auto__,c__24575__auto___26114,out){
return (function() {
var cljs$core$async$state_machine__24481__auto__ = null;
var cljs$core$async$state_machine__24481__auto____0 = (function (){
var statearr_26109 = [null,null,null,null,null,null,null,null,null];
(statearr_26109[(0)] = cljs$core$async$state_machine__24481__auto__);

(statearr_26109[(1)] = (1));

return statearr_26109;
});
var cljs$core$async$state_machine__24481__auto____1 = (function (state_26095){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_26095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e26110){if((e26110 instanceof Object)){
var ex__24484__auto__ = e26110;
var statearr_26111_26125 = state_26095;
(statearr_26111_26125[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26126 = state_26095;
state_26095 = G__26126;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$state_machine__24481__auto__ = function(state_26095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24481__auto____1.call(this,state_26095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24481__auto____0;
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24481__auto____1;
return cljs$core$async$state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___26114,out))
})();
var state__24577__auto__ = (function (){var statearr_26112 = f__24576__auto__.call(null);
(statearr_26112[(6)] = c__24575__auto___26114);

return statearr_26112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___26114,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26128 = arguments.length;
switch (G__26128) {
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
var c__24575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto__){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto__){
return (function (state_26191){
var state_val_26192 = (state_26191[(1)]);
if((state_val_26192 === (7))){
var inst_26187 = (state_26191[(2)]);
var state_26191__$1 = state_26191;
var statearr_26193_26231 = state_26191__$1;
(statearr_26193_26231[(2)] = inst_26187);

(statearr_26193_26231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (20))){
var inst_26157 = (state_26191[(7)]);
var inst_26168 = (state_26191[(2)]);
var inst_26169 = cljs.core.next.call(null,inst_26157);
var inst_26143 = inst_26169;
var inst_26144 = null;
var inst_26145 = (0);
var inst_26146 = (0);
var state_26191__$1 = (function (){var statearr_26194 = state_26191;
(statearr_26194[(8)] = inst_26168);

(statearr_26194[(9)] = inst_26143);

(statearr_26194[(10)] = inst_26146);

(statearr_26194[(11)] = inst_26145);

(statearr_26194[(12)] = inst_26144);

return statearr_26194;
})();
var statearr_26195_26232 = state_26191__$1;
(statearr_26195_26232[(2)] = null);

(statearr_26195_26232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (1))){
var state_26191__$1 = state_26191;
var statearr_26196_26233 = state_26191__$1;
(statearr_26196_26233[(2)] = null);

(statearr_26196_26233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (4))){
var inst_26132 = (state_26191[(13)]);
var inst_26132__$1 = (state_26191[(2)]);
var inst_26133 = (inst_26132__$1 == null);
var state_26191__$1 = (function (){var statearr_26197 = state_26191;
(statearr_26197[(13)] = inst_26132__$1);

return statearr_26197;
})();
if(cljs.core.truth_(inst_26133)){
var statearr_26198_26234 = state_26191__$1;
(statearr_26198_26234[(1)] = (5));

} else {
var statearr_26199_26235 = state_26191__$1;
(statearr_26199_26235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (15))){
var state_26191__$1 = state_26191;
var statearr_26203_26236 = state_26191__$1;
(statearr_26203_26236[(2)] = null);

(statearr_26203_26236[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (21))){
var state_26191__$1 = state_26191;
var statearr_26204_26237 = state_26191__$1;
(statearr_26204_26237[(2)] = null);

(statearr_26204_26237[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (13))){
var inst_26143 = (state_26191[(9)]);
var inst_26146 = (state_26191[(10)]);
var inst_26145 = (state_26191[(11)]);
var inst_26144 = (state_26191[(12)]);
var inst_26153 = (state_26191[(2)]);
var inst_26154 = (inst_26146 + (1));
var tmp26200 = inst_26143;
var tmp26201 = inst_26145;
var tmp26202 = inst_26144;
var inst_26143__$1 = tmp26200;
var inst_26144__$1 = tmp26202;
var inst_26145__$1 = tmp26201;
var inst_26146__$1 = inst_26154;
var state_26191__$1 = (function (){var statearr_26205 = state_26191;
(statearr_26205[(9)] = inst_26143__$1);

(statearr_26205[(10)] = inst_26146__$1);

(statearr_26205[(14)] = inst_26153);

(statearr_26205[(11)] = inst_26145__$1);

(statearr_26205[(12)] = inst_26144__$1);

return statearr_26205;
})();
var statearr_26206_26238 = state_26191__$1;
(statearr_26206_26238[(2)] = null);

(statearr_26206_26238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (22))){
var state_26191__$1 = state_26191;
var statearr_26207_26239 = state_26191__$1;
(statearr_26207_26239[(2)] = null);

(statearr_26207_26239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (6))){
var inst_26132 = (state_26191[(13)]);
var inst_26141 = f.call(null,inst_26132);
var inst_26142 = cljs.core.seq.call(null,inst_26141);
var inst_26143 = inst_26142;
var inst_26144 = null;
var inst_26145 = (0);
var inst_26146 = (0);
var state_26191__$1 = (function (){var statearr_26208 = state_26191;
(statearr_26208[(9)] = inst_26143);

(statearr_26208[(10)] = inst_26146);

(statearr_26208[(11)] = inst_26145);

(statearr_26208[(12)] = inst_26144);

return statearr_26208;
})();
var statearr_26209_26240 = state_26191__$1;
(statearr_26209_26240[(2)] = null);

(statearr_26209_26240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (17))){
var inst_26157 = (state_26191[(7)]);
var inst_26161 = cljs.core.chunk_first.call(null,inst_26157);
var inst_26162 = cljs.core.chunk_rest.call(null,inst_26157);
var inst_26163 = cljs.core.count.call(null,inst_26161);
var inst_26143 = inst_26162;
var inst_26144 = inst_26161;
var inst_26145 = inst_26163;
var inst_26146 = (0);
var state_26191__$1 = (function (){var statearr_26210 = state_26191;
(statearr_26210[(9)] = inst_26143);

(statearr_26210[(10)] = inst_26146);

(statearr_26210[(11)] = inst_26145);

(statearr_26210[(12)] = inst_26144);

return statearr_26210;
})();
var statearr_26211_26241 = state_26191__$1;
(statearr_26211_26241[(2)] = null);

(statearr_26211_26241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (3))){
var inst_26189 = (state_26191[(2)]);
var state_26191__$1 = state_26191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26191__$1,inst_26189);
} else {
if((state_val_26192 === (12))){
var inst_26177 = (state_26191[(2)]);
var state_26191__$1 = state_26191;
var statearr_26212_26242 = state_26191__$1;
(statearr_26212_26242[(2)] = inst_26177);

(statearr_26212_26242[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (2))){
var state_26191__$1 = state_26191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26191__$1,(4),in$);
} else {
if((state_val_26192 === (23))){
var inst_26185 = (state_26191[(2)]);
var state_26191__$1 = state_26191;
var statearr_26213_26243 = state_26191__$1;
(statearr_26213_26243[(2)] = inst_26185);

(statearr_26213_26243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (19))){
var inst_26172 = (state_26191[(2)]);
var state_26191__$1 = state_26191;
var statearr_26214_26244 = state_26191__$1;
(statearr_26214_26244[(2)] = inst_26172);

(statearr_26214_26244[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (11))){
var inst_26143 = (state_26191[(9)]);
var inst_26157 = (state_26191[(7)]);
var inst_26157__$1 = cljs.core.seq.call(null,inst_26143);
var state_26191__$1 = (function (){var statearr_26215 = state_26191;
(statearr_26215[(7)] = inst_26157__$1);

return statearr_26215;
})();
if(inst_26157__$1){
var statearr_26216_26245 = state_26191__$1;
(statearr_26216_26245[(1)] = (14));

} else {
var statearr_26217_26246 = state_26191__$1;
(statearr_26217_26246[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (9))){
var inst_26179 = (state_26191[(2)]);
var inst_26180 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26191__$1 = (function (){var statearr_26218 = state_26191;
(statearr_26218[(15)] = inst_26179);

return statearr_26218;
})();
if(cljs.core.truth_(inst_26180)){
var statearr_26219_26247 = state_26191__$1;
(statearr_26219_26247[(1)] = (21));

} else {
var statearr_26220_26248 = state_26191__$1;
(statearr_26220_26248[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (5))){
var inst_26135 = cljs.core.async.close_BANG_.call(null,out);
var state_26191__$1 = state_26191;
var statearr_26221_26249 = state_26191__$1;
(statearr_26221_26249[(2)] = inst_26135);

(statearr_26221_26249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (14))){
var inst_26157 = (state_26191[(7)]);
var inst_26159 = cljs.core.chunked_seq_QMARK_.call(null,inst_26157);
var state_26191__$1 = state_26191;
if(inst_26159){
var statearr_26222_26250 = state_26191__$1;
(statearr_26222_26250[(1)] = (17));

} else {
var statearr_26223_26251 = state_26191__$1;
(statearr_26223_26251[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (16))){
var inst_26175 = (state_26191[(2)]);
var state_26191__$1 = state_26191;
var statearr_26224_26252 = state_26191__$1;
(statearr_26224_26252[(2)] = inst_26175);

(statearr_26224_26252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26192 === (10))){
var inst_26146 = (state_26191[(10)]);
var inst_26144 = (state_26191[(12)]);
var inst_26151 = cljs.core._nth.call(null,inst_26144,inst_26146);
var state_26191__$1 = state_26191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26191__$1,(13),out,inst_26151);
} else {
if((state_val_26192 === (18))){
var inst_26157 = (state_26191[(7)]);
var inst_26166 = cljs.core.first.call(null,inst_26157);
var state_26191__$1 = state_26191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26191__$1,(20),out,inst_26166);
} else {
if((state_val_26192 === (8))){
var inst_26146 = (state_26191[(10)]);
var inst_26145 = (state_26191[(11)]);
var inst_26148 = (inst_26146 < inst_26145);
var inst_26149 = inst_26148;
var state_26191__$1 = state_26191;
if(cljs.core.truth_(inst_26149)){
var statearr_26225_26253 = state_26191__$1;
(statearr_26225_26253[(1)] = (10));

} else {
var statearr_26226_26254 = state_26191__$1;
(statearr_26226_26254[(1)] = (11));

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
});})(c__24575__auto__))
;
return ((function (switch__24480__auto__,c__24575__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24481__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24481__auto____0 = (function (){
var statearr_26227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26227[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24481__auto__);

(statearr_26227[(1)] = (1));

return statearr_26227;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24481__auto____1 = (function (state_26191){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_26191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e26228){if((e26228 instanceof Object)){
var ex__24484__auto__ = e26228;
var statearr_26229_26255 = state_26191;
(statearr_26229_26255[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26256 = state_26191;
state_26191 = G__26256;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24481__auto__ = function(state_26191){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24481__auto____1.call(this,state_26191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24481__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24481__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto__))
})();
var state__24577__auto__ = (function (){var statearr_26230 = f__24576__auto__.call(null);
(statearr_26230[(6)] = c__24575__auto__);

return statearr_26230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto__))
);

return c__24575__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26258 = arguments.length;
switch (G__26258) {
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
var G__26261 = arguments.length;
switch (G__26261) {
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
var G__26264 = arguments.length;
switch (G__26264) {
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
var c__24575__auto___26311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___26311,out){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___26311,out){
return (function (state_26288){
var state_val_26289 = (state_26288[(1)]);
if((state_val_26289 === (7))){
var inst_26283 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26290_26312 = state_26288__$1;
(statearr_26290_26312[(2)] = inst_26283);

(statearr_26290_26312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (1))){
var inst_26265 = null;
var state_26288__$1 = (function (){var statearr_26291 = state_26288;
(statearr_26291[(7)] = inst_26265);

return statearr_26291;
})();
var statearr_26292_26313 = state_26288__$1;
(statearr_26292_26313[(2)] = null);

(statearr_26292_26313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (4))){
var inst_26268 = (state_26288[(8)]);
var inst_26268__$1 = (state_26288[(2)]);
var inst_26269 = (inst_26268__$1 == null);
var inst_26270 = cljs.core.not.call(null,inst_26269);
var state_26288__$1 = (function (){var statearr_26293 = state_26288;
(statearr_26293[(8)] = inst_26268__$1);

return statearr_26293;
})();
if(inst_26270){
var statearr_26294_26314 = state_26288__$1;
(statearr_26294_26314[(1)] = (5));

} else {
var statearr_26295_26315 = state_26288__$1;
(statearr_26295_26315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (6))){
var state_26288__$1 = state_26288;
var statearr_26296_26316 = state_26288__$1;
(statearr_26296_26316[(2)] = null);

(statearr_26296_26316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (3))){
var inst_26285 = (state_26288[(2)]);
var inst_26286 = cljs.core.async.close_BANG_.call(null,out);
var state_26288__$1 = (function (){var statearr_26297 = state_26288;
(statearr_26297[(9)] = inst_26285);

return statearr_26297;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26288__$1,inst_26286);
} else {
if((state_val_26289 === (2))){
var state_26288__$1 = state_26288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26288__$1,(4),ch);
} else {
if((state_val_26289 === (11))){
var inst_26268 = (state_26288[(8)]);
var inst_26277 = (state_26288[(2)]);
var inst_26265 = inst_26268;
var state_26288__$1 = (function (){var statearr_26298 = state_26288;
(statearr_26298[(7)] = inst_26265);

(statearr_26298[(10)] = inst_26277);

return statearr_26298;
})();
var statearr_26299_26317 = state_26288__$1;
(statearr_26299_26317[(2)] = null);

(statearr_26299_26317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (9))){
var inst_26268 = (state_26288[(8)]);
var state_26288__$1 = state_26288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26288__$1,(11),out,inst_26268);
} else {
if((state_val_26289 === (5))){
var inst_26268 = (state_26288[(8)]);
var inst_26265 = (state_26288[(7)]);
var inst_26272 = cljs.core._EQ_.call(null,inst_26268,inst_26265);
var state_26288__$1 = state_26288;
if(inst_26272){
var statearr_26301_26318 = state_26288__$1;
(statearr_26301_26318[(1)] = (8));

} else {
var statearr_26302_26319 = state_26288__$1;
(statearr_26302_26319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (10))){
var inst_26280 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26303_26320 = state_26288__$1;
(statearr_26303_26320[(2)] = inst_26280);

(statearr_26303_26320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (8))){
var inst_26265 = (state_26288[(7)]);
var tmp26300 = inst_26265;
var inst_26265__$1 = tmp26300;
var state_26288__$1 = (function (){var statearr_26304 = state_26288;
(statearr_26304[(7)] = inst_26265__$1);

return statearr_26304;
})();
var statearr_26305_26321 = state_26288__$1;
(statearr_26305_26321[(2)] = null);

(statearr_26305_26321[(1)] = (2));


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
});})(c__24575__auto___26311,out))
;
return ((function (switch__24480__auto__,c__24575__auto___26311,out){
return (function() {
var cljs$core$async$state_machine__24481__auto__ = null;
var cljs$core$async$state_machine__24481__auto____0 = (function (){
var statearr_26306 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26306[(0)] = cljs$core$async$state_machine__24481__auto__);

(statearr_26306[(1)] = (1));

return statearr_26306;
});
var cljs$core$async$state_machine__24481__auto____1 = (function (state_26288){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_26288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e26307){if((e26307 instanceof Object)){
var ex__24484__auto__ = e26307;
var statearr_26308_26322 = state_26288;
(statearr_26308_26322[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26323 = state_26288;
state_26288 = G__26323;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$state_machine__24481__auto__ = function(state_26288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24481__auto____1.call(this,state_26288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24481__auto____0;
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24481__auto____1;
return cljs$core$async$state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___26311,out))
})();
var state__24577__auto__ = (function (){var statearr_26309 = f__24576__auto__.call(null);
(statearr_26309[(6)] = c__24575__auto___26311);

return statearr_26309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___26311,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26325 = arguments.length;
switch (G__26325) {
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
var c__24575__auto___26391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___26391,out){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___26391,out){
return (function (state_26363){
var state_val_26364 = (state_26363[(1)]);
if((state_val_26364 === (7))){
var inst_26359 = (state_26363[(2)]);
var state_26363__$1 = state_26363;
var statearr_26365_26392 = state_26363__$1;
(statearr_26365_26392[(2)] = inst_26359);

(statearr_26365_26392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (1))){
var inst_26326 = (new Array(n));
var inst_26327 = inst_26326;
var inst_26328 = (0);
var state_26363__$1 = (function (){var statearr_26366 = state_26363;
(statearr_26366[(7)] = inst_26328);

(statearr_26366[(8)] = inst_26327);

return statearr_26366;
})();
var statearr_26367_26393 = state_26363__$1;
(statearr_26367_26393[(2)] = null);

(statearr_26367_26393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (4))){
var inst_26331 = (state_26363[(9)]);
var inst_26331__$1 = (state_26363[(2)]);
var inst_26332 = (inst_26331__$1 == null);
var inst_26333 = cljs.core.not.call(null,inst_26332);
var state_26363__$1 = (function (){var statearr_26368 = state_26363;
(statearr_26368[(9)] = inst_26331__$1);

return statearr_26368;
})();
if(inst_26333){
var statearr_26369_26394 = state_26363__$1;
(statearr_26369_26394[(1)] = (5));

} else {
var statearr_26370_26395 = state_26363__$1;
(statearr_26370_26395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (15))){
var inst_26353 = (state_26363[(2)]);
var state_26363__$1 = state_26363;
var statearr_26371_26396 = state_26363__$1;
(statearr_26371_26396[(2)] = inst_26353);

(statearr_26371_26396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (13))){
var state_26363__$1 = state_26363;
var statearr_26372_26397 = state_26363__$1;
(statearr_26372_26397[(2)] = null);

(statearr_26372_26397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (6))){
var inst_26328 = (state_26363[(7)]);
var inst_26349 = (inst_26328 > (0));
var state_26363__$1 = state_26363;
if(cljs.core.truth_(inst_26349)){
var statearr_26373_26398 = state_26363__$1;
(statearr_26373_26398[(1)] = (12));

} else {
var statearr_26374_26399 = state_26363__$1;
(statearr_26374_26399[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (3))){
var inst_26361 = (state_26363[(2)]);
var state_26363__$1 = state_26363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26363__$1,inst_26361);
} else {
if((state_val_26364 === (12))){
var inst_26327 = (state_26363[(8)]);
var inst_26351 = cljs.core.vec.call(null,inst_26327);
var state_26363__$1 = state_26363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26363__$1,(15),out,inst_26351);
} else {
if((state_val_26364 === (2))){
var state_26363__$1 = state_26363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26363__$1,(4),ch);
} else {
if((state_val_26364 === (11))){
var inst_26343 = (state_26363[(2)]);
var inst_26344 = (new Array(n));
var inst_26327 = inst_26344;
var inst_26328 = (0);
var state_26363__$1 = (function (){var statearr_26375 = state_26363;
(statearr_26375[(7)] = inst_26328);

(statearr_26375[(8)] = inst_26327);

(statearr_26375[(10)] = inst_26343);

return statearr_26375;
})();
var statearr_26376_26400 = state_26363__$1;
(statearr_26376_26400[(2)] = null);

(statearr_26376_26400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (9))){
var inst_26327 = (state_26363[(8)]);
var inst_26341 = cljs.core.vec.call(null,inst_26327);
var state_26363__$1 = state_26363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26363__$1,(11),out,inst_26341);
} else {
if((state_val_26364 === (5))){
var inst_26328 = (state_26363[(7)]);
var inst_26327 = (state_26363[(8)]);
var inst_26331 = (state_26363[(9)]);
var inst_26336 = (state_26363[(11)]);
var inst_26335 = (inst_26327[inst_26328] = inst_26331);
var inst_26336__$1 = (inst_26328 + (1));
var inst_26337 = (inst_26336__$1 < n);
var state_26363__$1 = (function (){var statearr_26377 = state_26363;
(statearr_26377[(11)] = inst_26336__$1);

(statearr_26377[(12)] = inst_26335);

return statearr_26377;
})();
if(cljs.core.truth_(inst_26337)){
var statearr_26378_26401 = state_26363__$1;
(statearr_26378_26401[(1)] = (8));

} else {
var statearr_26379_26402 = state_26363__$1;
(statearr_26379_26402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (14))){
var inst_26356 = (state_26363[(2)]);
var inst_26357 = cljs.core.async.close_BANG_.call(null,out);
var state_26363__$1 = (function (){var statearr_26381 = state_26363;
(statearr_26381[(13)] = inst_26356);

return statearr_26381;
})();
var statearr_26382_26403 = state_26363__$1;
(statearr_26382_26403[(2)] = inst_26357);

(statearr_26382_26403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (10))){
var inst_26347 = (state_26363[(2)]);
var state_26363__$1 = state_26363;
var statearr_26383_26404 = state_26363__$1;
(statearr_26383_26404[(2)] = inst_26347);

(statearr_26383_26404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26364 === (8))){
var inst_26327 = (state_26363[(8)]);
var inst_26336 = (state_26363[(11)]);
var tmp26380 = inst_26327;
var inst_26327__$1 = tmp26380;
var inst_26328 = inst_26336;
var state_26363__$1 = (function (){var statearr_26384 = state_26363;
(statearr_26384[(7)] = inst_26328);

(statearr_26384[(8)] = inst_26327__$1);

return statearr_26384;
})();
var statearr_26385_26405 = state_26363__$1;
(statearr_26385_26405[(2)] = null);

(statearr_26385_26405[(1)] = (2));


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
});})(c__24575__auto___26391,out))
;
return ((function (switch__24480__auto__,c__24575__auto___26391,out){
return (function() {
var cljs$core$async$state_machine__24481__auto__ = null;
var cljs$core$async$state_machine__24481__auto____0 = (function (){
var statearr_26386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26386[(0)] = cljs$core$async$state_machine__24481__auto__);

(statearr_26386[(1)] = (1));

return statearr_26386;
});
var cljs$core$async$state_machine__24481__auto____1 = (function (state_26363){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_26363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e26387){if((e26387 instanceof Object)){
var ex__24484__auto__ = e26387;
var statearr_26388_26406 = state_26363;
(statearr_26388_26406[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26407 = state_26363;
state_26363 = G__26407;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$state_machine__24481__auto__ = function(state_26363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24481__auto____1.call(this,state_26363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24481__auto____0;
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24481__auto____1;
return cljs$core$async$state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___26391,out))
})();
var state__24577__auto__ = (function (){var statearr_26389 = f__24576__auto__.call(null);
(statearr_26389[(6)] = c__24575__auto___26391);

return statearr_26389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___26391,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26409 = arguments.length;
switch (G__26409) {
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
var c__24575__auto___26479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24575__auto___26479,out){
return (function (){
var f__24576__auto__ = (function (){var switch__24480__auto__ = ((function (c__24575__auto___26479,out){
return (function (state_26451){
var state_val_26452 = (state_26451[(1)]);
if((state_val_26452 === (7))){
var inst_26447 = (state_26451[(2)]);
var state_26451__$1 = state_26451;
var statearr_26453_26480 = state_26451__$1;
(statearr_26453_26480[(2)] = inst_26447);

(statearr_26453_26480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (1))){
var inst_26410 = [];
var inst_26411 = inst_26410;
var inst_26412 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26451__$1 = (function (){var statearr_26454 = state_26451;
(statearr_26454[(7)] = inst_26412);

(statearr_26454[(8)] = inst_26411);

return statearr_26454;
})();
var statearr_26455_26481 = state_26451__$1;
(statearr_26455_26481[(2)] = null);

(statearr_26455_26481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (4))){
var inst_26415 = (state_26451[(9)]);
var inst_26415__$1 = (state_26451[(2)]);
var inst_26416 = (inst_26415__$1 == null);
var inst_26417 = cljs.core.not.call(null,inst_26416);
var state_26451__$1 = (function (){var statearr_26456 = state_26451;
(statearr_26456[(9)] = inst_26415__$1);

return statearr_26456;
})();
if(inst_26417){
var statearr_26457_26482 = state_26451__$1;
(statearr_26457_26482[(1)] = (5));

} else {
var statearr_26458_26483 = state_26451__$1;
(statearr_26458_26483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (15))){
var inst_26441 = (state_26451[(2)]);
var state_26451__$1 = state_26451;
var statearr_26459_26484 = state_26451__$1;
(statearr_26459_26484[(2)] = inst_26441);

(statearr_26459_26484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (13))){
var state_26451__$1 = state_26451;
var statearr_26460_26485 = state_26451__$1;
(statearr_26460_26485[(2)] = null);

(statearr_26460_26485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (6))){
var inst_26411 = (state_26451[(8)]);
var inst_26436 = inst_26411.length;
var inst_26437 = (inst_26436 > (0));
var state_26451__$1 = state_26451;
if(cljs.core.truth_(inst_26437)){
var statearr_26461_26486 = state_26451__$1;
(statearr_26461_26486[(1)] = (12));

} else {
var statearr_26462_26487 = state_26451__$1;
(statearr_26462_26487[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (3))){
var inst_26449 = (state_26451[(2)]);
var state_26451__$1 = state_26451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26451__$1,inst_26449);
} else {
if((state_val_26452 === (12))){
var inst_26411 = (state_26451[(8)]);
var inst_26439 = cljs.core.vec.call(null,inst_26411);
var state_26451__$1 = state_26451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26451__$1,(15),out,inst_26439);
} else {
if((state_val_26452 === (2))){
var state_26451__$1 = state_26451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26451__$1,(4),ch);
} else {
if((state_val_26452 === (11))){
var inst_26415 = (state_26451[(9)]);
var inst_26419 = (state_26451[(10)]);
var inst_26429 = (state_26451[(2)]);
var inst_26430 = [];
var inst_26431 = inst_26430.push(inst_26415);
var inst_26411 = inst_26430;
var inst_26412 = inst_26419;
var state_26451__$1 = (function (){var statearr_26463 = state_26451;
(statearr_26463[(7)] = inst_26412);

(statearr_26463[(8)] = inst_26411);

(statearr_26463[(11)] = inst_26429);

(statearr_26463[(12)] = inst_26431);

return statearr_26463;
})();
var statearr_26464_26488 = state_26451__$1;
(statearr_26464_26488[(2)] = null);

(statearr_26464_26488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (9))){
var inst_26411 = (state_26451[(8)]);
var inst_26427 = cljs.core.vec.call(null,inst_26411);
var state_26451__$1 = state_26451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26451__$1,(11),out,inst_26427);
} else {
if((state_val_26452 === (5))){
var inst_26412 = (state_26451[(7)]);
var inst_26415 = (state_26451[(9)]);
var inst_26419 = (state_26451[(10)]);
var inst_26419__$1 = f.call(null,inst_26415);
var inst_26420 = cljs.core._EQ_.call(null,inst_26419__$1,inst_26412);
var inst_26421 = cljs.core.keyword_identical_QMARK_.call(null,inst_26412,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26422 = ((inst_26420) || (inst_26421));
var state_26451__$1 = (function (){var statearr_26465 = state_26451;
(statearr_26465[(10)] = inst_26419__$1);

return statearr_26465;
})();
if(cljs.core.truth_(inst_26422)){
var statearr_26466_26489 = state_26451__$1;
(statearr_26466_26489[(1)] = (8));

} else {
var statearr_26467_26490 = state_26451__$1;
(statearr_26467_26490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (14))){
var inst_26444 = (state_26451[(2)]);
var inst_26445 = cljs.core.async.close_BANG_.call(null,out);
var state_26451__$1 = (function (){var statearr_26469 = state_26451;
(statearr_26469[(13)] = inst_26444);

return statearr_26469;
})();
var statearr_26470_26491 = state_26451__$1;
(statearr_26470_26491[(2)] = inst_26445);

(statearr_26470_26491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (10))){
var inst_26434 = (state_26451[(2)]);
var state_26451__$1 = state_26451;
var statearr_26471_26492 = state_26451__$1;
(statearr_26471_26492[(2)] = inst_26434);

(statearr_26471_26492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (8))){
var inst_26411 = (state_26451[(8)]);
var inst_26415 = (state_26451[(9)]);
var inst_26419 = (state_26451[(10)]);
var inst_26424 = inst_26411.push(inst_26415);
var tmp26468 = inst_26411;
var inst_26411__$1 = tmp26468;
var inst_26412 = inst_26419;
var state_26451__$1 = (function (){var statearr_26472 = state_26451;
(statearr_26472[(14)] = inst_26424);

(statearr_26472[(7)] = inst_26412);

(statearr_26472[(8)] = inst_26411__$1);

return statearr_26472;
})();
var statearr_26473_26493 = state_26451__$1;
(statearr_26473_26493[(2)] = null);

(statearr_26473_26493[(1)] = (2));


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
});})(c__24575__auto___26479,out))
;
return ((function (switch__24480__auto__,c__24575__auto___26479,out){
return (function() {
var cljs$core$async$state_machine__24481__auto__ = null;
var cljs$core$async$state_machine__24481__auto____0 = (function (){
var statearr_26474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26474[(0)] = cljs$core$async$state_machine__24481__auto__);

(statearr_26474[(1)] = (1));

return statearr_26474;
});
var cljs$core$async$state_machine__24481__auto____1 = (function (state_26451){
while(true){
var ret_value__24482__auto__ = (function (){try{while(true){
var result__24483__auto__ = switch__24480__auto__.call(null,state_26451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24483__auto__;
}
break;
}
}catch (e26475){if((e26475 instanceof Object)){
var ex__24484__auto__ = e26475;
var statearr_26476_26494 = state_26451;
(statearr_26476_26494[(5)] = ex__24484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26495 = state_26451;
state_26451 = G__26495;
continue;
} else {
return ret_value__24482__auto__;
}
break;
}
});
cljs$core$async$state_machine__24481__auto__ = function(state_26451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24481__auto____1.call(this,state_26451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24481__auto____0;
cljs$core$async$state_machine__24481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24481__auto____1;
return cljs$core$async$state_machine__24481__auto__;
})()
;})(switch__24480__auto__,c__24575__auto___26479,out))
})();
var state__24577__auto__ = (function (){var statearr_26477 = f__24576__auto__.call(null);
(statearr_26477[(6)] = c__24575__auto___26479);

return statearr_26477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24577__auto__);
});})(c__24575__auto___26479,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1544001711170
