// Only Node.JS has a process variable that is of [[Class]] process
export const isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
