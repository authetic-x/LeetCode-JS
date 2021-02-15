function InstanceOf(obj1, obj2) {
  if (!obj1 || !obj2) return false
  while (obj1 !== null && obj1 !== obj2) {
    obj1 =Object.getPrototypeOf(obj1)
  }
  if (obj1) return true
  return false
}

Function.prototype.myApply = function(ctx, args) {
  const fn = this
  const fnName = Symbol('fn')
  ctx[fnName] = fn
  const res = ctx[fnName](...args)
  delete ctx[fnName]
  return res
}

Function.prototype.myCall = function(ctx, ...args) {
  const fn = this
  const fnName = Symbol('fn')
  ctx[fnName] = fn
  const res = ctx[fnName](...args)
  delete ctx[fnName]
  return res 
}

Function.prototype.myBind = function(ctx, ...args1) {
  const fn = this

  const bindFn = function(...args2) {
    return fn.call(
      this instanceof bindFn ? this : ctx,
      ...args1,
      ...args2
    )
  }
  bindFn.prototype = Object.create(fn.prototype)
  return bindFn
}

function New(fn, ...args) {
  if (typeof fn !== 'function') throw new Error('fn must be a function')

  const obj = Object.create(fn.prototype)
  const res = fn.call(obj, ...args)
  return typeof res === 'object' ? res : obj
}

Function.prototype.a = () => alert(1);
Object.prototype.b = () => alert(2);
function A() {} const a = new A();
a.a();
a.b();