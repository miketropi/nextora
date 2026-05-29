"use strict";(()=>{function Up(r,e){r&&(r.textContent=e,e&&window.setTimeout(()=>{r.textContent=""},2500))}function qp(r,e){r&&(r.textContent=e,e&&window.setTimeout(()=>{r.textContent=""},2200))}function Vb(r){let e=document.createElement("textarea");e.value=r,e.setAttribute("readonly",""),e.style.position="fixed",e.style.left="-9999px",e.style.top="0",e.style.opacity="0",document.body.appendChild(e),e.focus(),e.select(),e.setSelectionRange(0,r.length);let t=!1;try{t=document.execCommand("copy")}catch{t=!1}return document.body.removeChild(e),t}async function Ub(r){if(typeof navigator.clipboard?.writeText=="function"&&window.isSecureContext)try{return await navigator.clipboard.writeText(r),!0}catch{}return Vb(r)}function $p(){let r=document.querySelectorAll("[data-nextora-article-share]");if(r.length===0)return;let e=window.nextoraArticleShare??{};for(let t of r){let n=t.querySelector("[data-nextora-copy-url]"),o=t.querySelector("[data-nextora-copy-status]"),i=t.querySelector("[data-nextora-copy-feedback]");if(!n)continue;let s=n.dataset.url?.trim()??"";s&&n.addEventListener("click",async()=>{let a=e.copied??"Link copied",l=e.copyFailed??"Could not copy";await Ub(s)?(Up(o,a),qp(i,a)):(Up(o,l),qp(i,l))})}}function yt(r){this.content=r}yt.prototype={constructor:yt,find:function(r){for(var e=0;e<this.content.length;e+=2)if(this.content[e]===r)return e;return-1},get:function(r){var e=this.find(r);return e==-1?void 0:this.content[e+1]},update:function(r,e,t){var n=t&&t!=r?this.remove(t):this,o=n.find(r),i=n.content.slice();return o==-1?i.push(t||r,e):(i[o+1]=e,t&&(i[o]=t)),new yt(i)},remove:function(r){var e=this.find(r);if(e==-1)return this;var t=this.content.slice();return t.splice(e,2),new yt(t)},addToStart:function(r,e){return new yt([r,e].concat(this.remove(r).content))},addToEnd:function(r,e){var t=this.remove(r).content.slice();return t.push(r,e),new yt(t)},addBefore:function(r,e,t){var n=this.remove(e),o=n.content.slice(),i=n.find(r);return o.splice(i==-1?o.length:i,0,e,t),new yt(o)},forEach:function(r){for(var e=0;e<this.content.length;e+=2)r(this.content[e],this.content[e+1])},prepend:function(r){return r=yt.from(r),r.size?new yt(r.content.concat(this.subtract(r).content)):this},append:function(r){return r=yt.from(r),r.size?new yt(this.subtract(r).content.concat(r.content)):this},subtract:function(r){var e=this;r=yt.from(r);for(var t=0;t<r.content.length;t+=2)e=e.remove(r.content[t]);return e},toObject:function(){var r={};return this.forEach(function(e,t){r[e]=t}),r},get size(){return this.content.length>>1}};yt.from=function(r){if(r instanceof yt)return r;var e=[];if(r)for(var t in r)e.push(t,r[t]);return new yt(e)};var Kf=yt;function eh(r,e,t){for(let n=0;;n++){if(n==r.childCount||n==e.childCount)return r.childCount==e.childCount?null:t;let o=r.child(n),i=e.child(n);if(o==i){t+=o.nodeSize;continue}if(!o.sameMarkup(i))return t;if(o.isText&&o.text!=i.text){for(let s=0;o.text[s]==i.text[s];s++)t++;return t}if(o.content.size||i.content.size){let s=eh(o.content,i.content,t+1);if(s!=null)return s}t+=o.nodeSize}}function th(r,e,t,n){for(let o=r.childCount,i=e.childCount;;){if(o==0||i==0)return o==i?null:{a:t,b:n};let s=r.child(--o),a=e.child(--i),l=s.nodeSize;if(s==a){t-=l,n-=l;continue}if(!s.sameMarkup(a))return{a:t,b:n};if(s.isText&&s.text!=a.text){let f=0,u=Math.min(s.text.length,a.text.length);for(;f<u&&s.text[s.text.length-f-1]==a.text[a.text.length-f-1];)f++,t--,n--;return{a:t,b:n}}if(s.content.size||a.content.size){let f=th(s.content,a.content,t-1,n-1);if(f)return f}t-=l,n-=l}}var A=class r{constructor(e,t){if(this.content=e,this.size=t||0,t==null)for(let n=0;n<e.length;n++)this.size+=e[n].nodeSize}nodesBetween(e,t,n,o=0,i){for(let s=0,a=0;a<t;s++){let l=this.content[s],f=a+l.nodeSize;if(f>e&&n(l,o+a,i||null,s)!==!1&&l.content.size){let u=a+1;l.nodesBetween(Math.max(0,e-u),Math.min(l.content.size,t-u),n,o+u)}a=f}}descendants(e){this.nodesBetween(0,this.size,e)}textBetween(e,t,n,o){let i="",s=!0;return this.nodesBetween(e,t,(a,l)=>{let f=a.isText?a.text.slice(Math.max(e,l)-l,t-l):a.isLeaf?o?typeof o=="function"?o(a):o:a.type.spec.leafText?a.type.spec.leafText(a):"":"";a.isBlock&&(a.isLeaf&&f||a.isTextblock)&&n&&(s?s=!1:i+=n),i+=f},0),i}append(e){if(!e.size)return this;if(!this.size)return e;let t=this.lastChild,n=e.firstChild,o=this.content.slice(),i=0;for(t.isText&&t.sameMarkup(n)&&(o[o.length-1]=t.withText(t.text+n.text),i=1);i<e.content.length;i++)o.push(e.content[i]);return new r(o,this.size+e.size)}cut(e,t=this.size){if(e==0&&t==this.size)return this;let n=[],o=0;if(t>e)for(let i=0,s=0;s<t;i++){let a=this.content[i],l=s+a.nodeSize;l>e&&((s<e||l>t)&&(a.isText?a=a.cut(Math.max(0,e-s),Math.min(a.text.length,t-s)):a=a.cut(Math.max(0,e-s-1),Math.min(a.content.size,t-s-1))),n.push(a),o+=a.nodeSize),s=l}return new r(n,o)}cutByIndex(e,t){return e==t?r.empty:e==0&&t==this.content.length?this:new r(this.content.slice(e,t))}replaceChild(e,t){let n=this.content[e];if(n==t)return this;let o=this.content.slice(),i=this.size+t.nodeSize-n.nodeSize;return o[e]=t,new r(o,i)}addToStart(e){return new r([e].concat(this.content),this.size+e.nodeSize)}addToEnd(e){return new r(this.content.concat(e),this.size+e.nodeSize)}eq(e){if(this.content.length!=e.content.length)return!1;for(let t=0;t<this.content.length;t++)if(!this.content[t].eq(e.content[t]))return!1;return!0}get firstChild(){return this.content.length?this.content[0]:null}get lastChild(){return this.content.length?this.content[this.content.length-1]:null}get childCount(){return this.content.length}child(e){let t=this.content[e];if(!t)throw new RangeError("Index "+e+" out of range for "+this);return t}maybeChild(e){return this.content[e]||null}forEach(e){for(let t=0,n=0;t<this.content.length;t++){let o=this.content[t];e(o,n,t),n+=o.nodeSize}}findDiffStart(e,t=0){return eh(this,e,t)}findDiffEnd(e,t=this.size,n=e.size){return th(this,e,t,n)}findIndex(e){if(e==0)return ba(0,e);if(e==this.size)return ba(this.content.length,e);if(e>this.size||e<0)throw new RangeError(`Position ${e} outside of fragment (${this})`);for(let t=0,n=0;;t++){let o=this.child(t),i=n+o.nodeSize;if(i>=e)return i==e?ba(t+1,i):ba(t,n);n=i}}toString(){return"<"+this.toStringInner()+">"}toStringInner(){return this.content.join(", ")}toJSON(){return this.content.length?this.content.map(e=>e.toJSON()):null}static fromJSON(e,t){if(!t)return r.empty;if(!Array.isArray(t))throw new RangeError("Invalid input for Fragment.fromJSON");return new r(t.map(e.nodeFromJSON))}static fromArray(e){if(!e.length)return r.empty;let t,n=0;for(let o=0;o<e.length;o++){let i=e[o];n+=i.nodeSize,o&&i.isText&&e[o-1].sameMarkup(i)?(t||(t=e.slice(0,o)),t[t.length-1]=i.withText(t[t.length-1].text+i.text)):t&&t.push(i)}return new r(t||e,n)}static from(e){if(!e)return r.empty;if(e instanceof r)return e;if(Array.isArray(e))return this.fromArray(e);if(e.attrs)return new r([e],e.nodeSize);throw new RangeError("Can not convert "+e+" to a Fragment"+(e.nodesBetween?" (looks like multiple versions of prosemirror-model were loaded)":""))}};A.empty=new A([],0);var jf={index:0,offset:0};function ba(r,e){return jf.index=r,jf.offset=e,jf}function Sa(r,e){if(r===e)return!0;if(!(r&&typeof r=="object")||!(e&&typeof e=="object"))return!1;let t=Array.isArray(r);if(Array.isArray(e)!=t)return!1;if(t){if(r.length!=e.length)return!1;for(let n=0;n<r.length;n++)if(!Sa(r[n],e[n]))return!1}else{for(let n in r)if(!(n in e)||!Sa(r[n],e[n]))return!1;for(let n in e)if(!(n in r))return!1}return!0}var fe=class r{constructor(e,t){this.type=e,this.attrs=t}addToSet(e){let t,n=!1;for(let o=0;o<e.length;o++){let i=e[o];if(this.eq(i))return e;if(this.type.excludes(i.type))t||(t=e.slice(0,o));else{if(i.type.excludes(this.type))return e;!n&&i.type.rank>this.type.rank&&(t||(t=e.slice(0,o)),t.push(this),n=!0),t&&t.push(i)}}return t||(t=e.slice()),n||t.push(this),t}removeFromSet(e){for(let t=0;t<e.length;t++)if(this.eq(e[t]))return e.slice(0,t).concat(e.slice(t+1));return e}isInSet(e){for(let t=0;t<e.length;t++)if(this.eq(e[t]))return!0;return!1}eq(e){return this==e||this.type==e.type&&Sa(this.attrs,e.attrs)}toJSON(){let e={type:this.type.name};for(let t in this.attrs){e.attrs=this.attrs;break}return e}static fromJSON(e,t){if(!t)throw new RangeError("Invalid input for Mark.fromJSON");let n=e.marks[t.type];if(!n)throw new RangeError(`There is no mark type ${t.type} in this schema`);let o=n.create(t.attrs);return n.checkAttrs(o.attrs),o}static sameSet(e,t){if(e==t)return!0;if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(!e[n].eq(t[n]))return!1;return!0}static setFrom(e){if(!e||Array.isArray(e)&&e.length==0)return r.none;if(e instanceof r)return[e];let t=e.slice();return t.sort((n,o)=>n.type.rank-o.type.rank),t}};fe.none=[];var po=class extends Error{},L=class r{constructor(e,t,n){this.content=e,this.openStart=t,this.openEnd=n}get size(){return this.content.size-this.openStart-this.openEnd}insertAt(e,t){let n=nh(this.content,e+this.openStart,t);return n&&new r(n,this.openStart,this.openEnd)}removeBetween(e,t){return new r(rh(this.content,e+this.openStart,t+this.openStart),this.openStart,this.openEnd)}eq(e){return this.content.eq(e.content)&&this.openStart==e.openStart&&this.openEnd==e.openEnd}toString(){return this.content+"("+this.openStart+","+this.openEnd+")"}toJSON(){if(!this.content.size)return null;let e={content:this.content.toJSON()};return this.openStart>0&&(e.openStart=this.openStart),this.openEnd>0&&(e.openEnd=this.openEnd),e}static fromJSON(e,t){if(!t)return r.empty;let n=t.openStart||0,o=t.openEnd||0;if(typeof n!="number"||typeof o!="number")throw new RangeError("Invalid input for Slice.fromJSON");return new r(A.fromJSON(e,t.content),n,o)}static maxOpen(e,t=!0){let n=0,o=0;for(let i=e.firstChild;i&&!i.isLeaf&&(t||!i.type.spec.isolating);i=i.firstChild)n++;for(let i=e.lastChild;i&&!i.isLeaf&&(t||!i.type.spec.isolating);i=i.lastChild)o++;return new r(e,n,o)}};L.empty=new L(A.empty,0,0);function rh(r,e,t){let{index:n,offset:o}=r.findIndex(e),i=r.maybeChild(n),{index:s,offset:a}=r.findIndex(t);if(o==e||i.isText){if(a!=t&&!r.child(s).isText)throw new RangeError("Removing non-flat range");return r.cut(0,e).append(r.cut(t))}if(n!=s)throw new RangeError("Removing non-flat range");return r.replaceChild(n,i.copy(rh(i.content,e-o-1,t-o-1)))}function nh(r,e,t,n){let{index:o,offset:i}=r.findIndex(e),s=r.maybeChild(o);if(i==e||s.isText)return n&&!n.canReplace(o,o,t)?null:r.cut(0,e).append(t).append(r.cut(e));let a=nh(s.content,e-i-1,t,s);return a&&r.replaceChild(o,s.copy(a))}function qb(r,e,t){if(t.openStart>r.depth)throw new po("Inserted content deeper than insertion position");if(r.depth-t.openStart!=e.depth-t.openEnd)throw new po("Inconsistent open depths");return oh(r,e,t,0)}function oh(r,e,t,n){let o=r.index(n),i=r.node(n);if(o==e.index(n)&&n<r.depth-t.openStart){let s=oh(r,e,t,n+1);return i.copy(i.content.replaceChild(o,s))}else if(t.content.size)if(!t.openStart&&!t.openEnd&&r.depth==n&&e.depth==n){let s=r.parent,a=s.content;return co(s,a.cut(0,r.parentOffset).append(t.content).append(a.cut(e.parentOffset)))}else{let{start:s,end:a}=$b(t,r);return co(i,sh(r,s,a,e,n))}else return co(i,Ca(r,e,n))}function ih(r,e){if(!e.type.compatibleContent(r.type))throw new po("Cannot join "+e.type.name+" onto "+r.type.name)}function Jf(r,e,t){let n=r.node(t);return ih(n,e.node(t)),n}function uo(r,e){let t=e.length-1;t>=0&&r.isText&&r.sameMarkup(e[t])?e[t]=r.withText(e[t].text+r.text):e.push(r)}function Gi(r,e,t,n){let o=(e||r).node(t),i=0,s=e?e.index(t):o.childCount;r&&(i=r.index(t),r.depth>t?i++:r.textOffset&&(uo(r.nodeAfter,n),i++));for(let a=i;a<s;a++)uo(o.child(a),n);e&&e.depth==t&&e.textOffset&&uo(e.nodeBefore,n)}function co(r,e){return r.type.checkContent(e),r.copy(e)}function sh(r,e,t,n,o){let i=r.depth>o&&Jf(r,e,o+1),s=n.depth>o&&Jf(t,n,o+1),a=[];return Gi(null,r,o,a),i&&s&&e.index(o)==t.index(o)?(ih(i,s),uo(co(i,sh(r,e,t,n,o+1)),a)):(i&&uo(co(i,Ca(r,e,o+1)),a),Gi(e,t,o,a),s&&uo(co(s,Ca(t,n,o+1)),a)),Gi(n,null,o,a),new A(a)}function Ca(r,e,t){let n=[];if(Gi(null,r,t,n),r.depth>t){let o=Jf(r,e,t+1);uo(co(o,Ca(r,e,t+1)),n)}return Gi(e,null,t,n),new A(n)}function $b(r,e){let t=e.depth-r.openStart,o=e.node(t).copy(r.content);for(let i=t-1;i>=0;i--)o=e.node(i).copy(A.from(o));return{start:o.resolveNoCache(r.openStart+t),end:o.resolveNoCache(o.content.size-r.openEnd-t)}}var va=class r{constructor(e,t,n){this.pos=e,this.path=t,this.parentOffset=n,this.depth=t.length/3-1}resolveDepth(e){return e==null?this.depth:e<0?this.depth+e:e}get parent(){return this.node(this.depth)}get doc(){return this.node(0)}node(e){return this.path[this.resolveDepth(e)*3]}index(e){return this.path[this.resolveDepth(e)*3+1]}indexAfter(e){return e=this.resolveDepth(e),this.index(e)+(e==this.depth&&!this.textOffset?0:1)}start(e){return e=this.resolveDepth(e),e==0?0:this.path[e*3-1]+1}end(e){return e=this.resolveDepth(e),this.start(e)+this.node(e).content.size}before(e){if(e=this.resolveDepth(e),!e)throw new RangeError("There is no position before the top-level node");return e==this.depth+1?this.pos:this.path[e*3-1]}after(e){if(e=this.resolveDepth(e),!e)throw new RangeError("There is no position after the top-level node");return e==this.depth+1?this.pos:this.path[e*3-1]+this.path[e*3].nodeSize}get textOffset(){return this.pos-this.path[this.path.length-1]}get nodeAfter(){let e=this.parent,t=this.index(this.depth);if(t==e.childCount)return null;let n=this.pos-this.path[this.path.length-1],o=e.child(t);return n?e.child(t).cut(n):o}get nodeBefore(){let e=this.index(this.depth),t=this.pos-this.path[this.path.length-1];return t?this.parent.child(e).cut(0,t):e==0?null:this.parent.child(e-1)}posAtIndex(e,t){t=this.resolveDepth(t);let n=this.path[t*3],o=t==0?0:this.path[t*3-1]+1;for(let i=0;i<e;i++)o+=n.child(i).nodeSize;return o}marks(){let e=this.parent,t=this.index();if(e.content.size==0)return fe.none;if(this.textOffset)return e.child(t).marks;let n=e.maybeChild(t-1),o=e.maybeChild(t);if(!n){let a=n;n=o,o=a}let i=n.marks;for(var s=0;s<i.length;s++)i[s].type.spec.inclusive===!1&&(!o||!i[s].isInSet(o.marks))&&(i=i[s--].removeFromSet(i));return i}marksAcross(e){let t=this.parent.maybeChild(this.index());if(!t||!t.isInline)return null;let n=t.marks,o=e.parent.maybeChild(e.index());for(var i=0;i<n.length;i++)n[i].type.spec.inclusive===!1&&(!o||!n[i].isInSet(o.marks))&&(n=n[i--].removeFromSet(n));return n}sharedDepth(e){for(let t=this.depth;t>0;t--)if(this.start(t)<=e&&this.end(t)>=e)return t;return 0}blockRange(e=this,t){if(e.pos<this.pos)return e.blockRange(this);for(let n=this.depth-(this.parent.inlineContent||this.pos==e.pos?1:0);n>=0;n--)if(e.pos<=this.end(n)&&(!t||t(this.node(n))))return new ho(this,e,n);return null}sameParent(e){return this.pos-this.parentOffset==e.pos-e.parentOffset}max(e){return e.pos>this.pos?e:this}min(e){return e.pos<this.pos?e:this}toString(){let e="";for(let t=1;t<=this.depth;t++)e+=(e?"/":"")+this.node(t).type.name+"_"+this.index(t-1);return e+":"+this.parentOffset}static resolve(e,t){if(!(t>=0&&t<=e.content.size))throw new RangeError("Position "+t+" out of range");let n=[],o=0,i=t;for(let s=e;;){let{index:a,offset:l}=s.content.findIndex(i),f=i-l;if(n.push(s,a,o+l),!f||(s=s.child(a),s.isText))break;i=f-1,o+=l+1}return new r(t,n,i)}static resolveCached(e,t){let n=Wp.get(e);if(n)for(let i=0;i<n.elts.length;i++){let s=n.elts[i];if(s.pos==t)return s}else Wp.set(e,n=new Xf);let o=n.elts[n.i]=r.resolve(e,t);return n.i=(n.i+1)%Wb,o}},Xf=class{constructor(){this.elts=[],this.i=0}},Wb=12,Wp=new WeakMap,ho=class{constructor(e,t,n){this.$from=e,this.$to=t,this.depth=n}get start(){return this.$from.before(this.depth+1)}get end(){return this.$to.after(this.depth+1)}get parent(){return this.$from.node(this.depth)}get startIndex(){return this.$from.index(this.depth)}get endIndex(){return this.$to.indexAfter(this.depth)}},Kb=Object.create(null),Kt=class r{constructor(e,t,n,o=fe.none){this.type=e,this.attrs=t,this.marks=o,this.content=n||A.empty}get children(){return this.content.content}get nodeSize(){return this.isLeaf?1:2+this.content.size}get childCount(){return this.content.childCount}child(e){return this.content.child(e)}maybeChild(e){return this.content.maybeChild(e)}forEach(e){this.content.forEach(e)}nodesBetween(e,t,n,o=0){this.content.nodesBetween(e,t,n,o,this)}descendants(e){this.nodesBetween(0,this.content.size,e)}get textContent(){return this.isLeaf&&this.type.spec.leafText?this.type.spec.leafText(this):this.textBetween(0,this.content.size,"")}textBetween(e,t,n,o){return this.content.textBetween(e,t,n,o)}get firstChild(){return this.content.firstChild}get lastChild(){return this.content.lastChild}eq(e){return this==e||this.sameMarkup(e)&&this.content.eq(e.content)}sameMarkup(e){return this.hasMarkup(e.type,e.attrs,e.marks)}hasMarkup(e,t,n){return this.type==e&&Sa(this.attrs,t||e.defaultAttrs||Kb)&&fe.sameSet(this.marks,n||fe.none)}copy(e=null){return e==this.content?this:new r(this.type,this.attrs,e,this.marks)}mark(e){return e==this.marks?this:new r(this.type,this.attrs,this.content,e)}cut(e,t=this.content.size){return e==0&&t==this.content.size?this:this.copy(this.content.cut(e,t))}slice(e,t=this.content.size,n=!1){if(e==t)return L.empty;let o=this.resolve(e),i=this.resolve(t),s=n?0:o.sharedDepth(t),a=o.start(s),f=o.node(s).content.cut(o.pos-a,i.pos-a);return new L(f,o.depth-s,i.depth-s)}replace(e,t,n){return qb(this.resolve(e),this.resolve(t),n)}nodeAt(e){for(let t=this;;){let{index:n,offset:o}=t.content.findIndex(e);if(t=t.maybeChild(n),!t)return null;if(o==e||t.isText)return t;e-=o+1}}childAfter(e){let{index:t,offset:n}=this.content.findIndex(e);return{node:this.content.maybeChild(t),index:t,offset:n}}childBefore(e){if(e==0)return{node:null,index:0,offset:0};let{index:t,offset:n}=this.content.findIndex(e);if(n<e)return{node:this.content.child(t),index:t,offset:n};let o=this.content.child(t-1);return{node:o,index:t-1,offset:n-o.nodeSize}}resolve(e){return va.resolveCached(this,e)}resolveNoCache(e){return va.resolve(this,e)}rangeHasMark(e,t,n){let o=!1;return t>e&&this.nodesBetween(e,t,i=>(n.isInSet(i.marks)&&(o=!0),!o)),o}get isBlock(){return this.type.isBlock}get isTextblock(){return this.type.isTextblock}get inlineContent(){return this.type.inlineContent}get isInline(){return this.type.isInline}get isText(){return this.type.isText}get isLeaf(){return this.type.isLeaf}get isAtom(){return this.type.isAtom}toString(){if(this.type.spec.toDebugString)return this.type.spec.toDebugString(this);let e=this.type.name;return this.content.size&&(e+="("+this.content.toStringInner()+")"),ah(this.marks,e)}contentMatchAt(e){let t=this.type.contentMatch.matchFragment(this.content,0,e);if(!t)throw new Error("Called contentMatchAt on a node with invalid content");return t}canReplace(e,t,n=A.empty,o=0,i=n.childCount){let s=this.contentMatchAt(e).matchFragment(n,o,i),a=s&&s.matchFragment(this.content,t);if(!a||!a.validEnd)return!1;for(let l=o;l<i;l++)if(!this.type.allowsMarks(n.child(l).marks))return!1;return!0}canReplaceWith(e,t,n,o){if(o&&!this.type.allowsMarks(o))return!1;let i=this.contentMatchAt(e).matchType(n),s=i&&i.matchFragment(this.content,t);return s?s.validEnd:!1}canAppend(e){return e.content.size?this.canReplace(this.childCount,this.childCount,e.content):this.type.compatibleContent(e.type)}check(){this.type.checkContent(this.content),this.type.checkAttrs(this.attrs);let e=fe.none;for(let t=0;t<this.marks.length;t++){let n=this.marks[t];n.type.checkAttrs(n.attrs),e=n.addToSet(e)}if(!fe.sameSet(e,this.marks))throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(t=>t.type.name)}`);this.content.forEach(t=>t.check())}toJSON(){let e={type:this.type.name};for(let t in this.attrs){e.attrs=this.attrs;break}return this.content.size&&(e.content=this.content.toJSON()),this.marks.length&&(e.marks=this.marks.map(t=>t.toJSON())),e}static fromJSON(e,t){if(!t)throw new RangeError("Invalid input for Node.fromJSON");let n;if(t.marks){if(!Array.isArray(t.marks))throw new RangeError("Invalid mark data for Node.fromJSON");n=t.marks.map(e.markFromJSON)}if(t.type=="text"){if(typeof t.text!="string")throw new RangeError("Invalid text node in JSON");return e.text(t.text,n)}let o=A.fromJSON(e,t.content),i=e.nodeType(t.type).create(t.attrs,o,n);return i.type.checkAttrs(i.attrs),i}};Kt.prototype.text=void 0;var Yf=class r extends Kt{constructor(e,t,n,o){if(super(e,t,null,o),!n)throw new RangeError("Empty text nodes are not allowed");this.text=n}toString(){return this.type.spec.toDebugString?this.type.spec.toDebugString(this):ah(this.marks,JSON.stringify(this.text))}get textContent(){return this.text}textBetween(e,t){return this.text.slice(e,t)}get nodeSize(){return this.text.length}mark(e){return e==this.marks?this:new r(this.type,this.attrs,this.text,e)}withText(e){return e==this.text?this:new r(this.type,this.attrs,e,this.marks)}cut(e=0,t=this.text.length){return e==0&&t==this.text.length?this:this.withText(this.text.slice(e,t))}eq(e){return this.sameMarkup(e)&&this.text==e.text}toJSON(){let e=super.toJSON();return e.text=this.text,e}};function ah(r,e){for(let t=r.length-1;t>=0;t--)e=r[t].type.name+"("+e+")";return e}var mo=class r{constructor(e){this.validEnd=e,this.next=[],this.wrapCache=[]}static parse(e,t){let n=new Qf(e,t);if(n.next==null)return r.empty;let o=lh(n);n.next&&n.err("Unexpected trailing text");let i=Zb(Qb(o));return ek(i,n),i}matchType(e){for(let t=0;t<this.next.length;t++)if(this.next[t].type==e)return this.next[t].next;return null}matchFragment(e,t=0,n=e.childCount){let o=this;for(let i=t;o&&i<n;i++)o=o.matchType(e.child(i).type);return o}get inlineContent(){return this.next.length!=0&&this.next[0].type.isInline}get defaultType(){for(let e=0;e<this.next.length;e++){let{type:t}=this.next[e];if(!(t.isText||t.hasRequiredAttrs()))return t}return null}compatible(e){for(let t=0;t<this.next.length;t++)for(let n=0;n<e.next.length;n++)if(this.next[t].type==e.next[n].type)return!0;return!1}fillBefore(e,t=!1,n=0){let o=[this];function i(s,a){let l=s.matchFragment(e,n);if(l&&(!t||l.validEnd))return A.from(a.map(f=>f.createAndFill()));for(let f=0;f<s.next.length;f++){let{type:u,next:d}=s.next[f];if(!(u.isText||u.hasRequiredAttrs())&&o.indexOf(d)==-1){o.push(d);let p=i(d,a.concat(u));if(p)return p}}return null}return i(this,[])}findWrapping(e){for(let n=0;n<this.wrapCache.length;n+=2)if(this.wrapCache[n]==e)return this.wrapCache[n+1];let t=this.computeWrapping(e);return this.wrapCache.push(e,t),t}computeWrapping(e){let t=Object.create(null),n=[{match:this,type:null,via:null}];for(;n.length;){let o=n.shift(),i=o.match;if(i.matchType(e)){let s=[];for(let a=o;a.type;a=a.via)s.push(a.type);return s.reverse()}for(let s=0;s<i.next.length;s++){let{type:a,next:l}=i.next[s];!a.isLeaf&&!a.hasRequiredAttrs()&&!(a.name in t)&&(!o.type||l.validEnd)&&(n.push({match:a.contentMatch,type:a,via:o}),t[a.name]=!0)}}return null}get edgeCount(){return this.next.length}edge(e){if(e>=this.next.length)throw new RangeError(`There's no ${e}th edge in this content match`);return this.next[e]}toString(){let e=[];function t(n){e.push(n);for(let o=0;o<n.next.length;o++)e.indexOf(n.next[o].next)==-1&&t(n.next[o].next)}return t(this),e.map((n,o)=>{let i=o+(n.validEnd?"*":" ")+" ";for(let s=0;s<n.next.length;s++)i+=(s?", ":"")+n.next[s].type.name+"->"+e.indexOf(n.next[s].next);return i}).join(`
`)}};mo.empty=new mo(!0);var Qf=class{constructor(e,t){this.string=e,this.nodeTypes=t,this.inline=null,this.pos=0,this.tokens=e.split(/\s*(?=\b|\W|$)/),this.tokens[this.tokens.length-1]==""&&this.tokens.pop(),this.tokens[0]==""&&this.tokens.shift()}get next(){return this.tokens[this.pos]}eat(e){return this.next==e&&(this.pos++||!0)}err(e){throw new SyntaxError(e+" (in content expression '"+this.string+"')")}};function lh(r){let e=[];do e.push(jb(r));while(r.eat("|"));return e.length==1?e[0]:{type:"choice",exprs:e}}function jb(r){let e=[];do e.push(Gb(r));while(r.next&&r.next!=")"&&r.next!="|");return e.length==1?e[0]:{type:"seq",exprs:e}}function Gb(r){let e=Yb(r);for(;;)if(r.eat("+"))e={type:"plus",expr:e};else if(r.eat("*"))e={type:"star",expr:e};else if(r.eat("?"))e={type:"opt",expr:e};else if(r.eat("{"))e=Jb(r,e);else break;return e}function Kp(r){/\D/.test(r.next)&&r.err("Expected number, got '"+r.next+"'");let e=Number(r.next);return r.pos++,e}function Jb(r,e){let t=Kp(r),n=t;return r.eat(",")&&(r.next!="}"?n=Kp(r):n=-1),r.eat("}")||r.err("Unclosed braced range"),{type:"range",min:t,max:n,expr:e}}function Xb(r,e){let t=r.nodeTypes,n=t[e];if(n)return[n];let o=[];for(let i in t){let s=t[i];s.isInGroup(e)&&o.push(s)}return o.length==0&&r.err("No node type or group '"+e+"' found"),o}function Yb(r){if(r.eat("(")){let e=lh(r);return r.eat(")")||r.err("Missing closing paren"),e}else if(/\W/.test(r.next))r.err("Unexpected token '"+r.next+"'");else{let e=Xb(r,r.next).map(t=>(r.inline==null?r.inline=t.isInline:r.inline!=t.isInline&&r.err("Mixing inline and block content"),{type:"name",value:t}));return r.pos++,e.length==1?e[0]:{type:"choice",exprs:e}}}function Qb(r){let e=[[]];return o(i(r,0),t()),e;function t(){return e.push([])-1}function n(s,a,l){let f={term:l,to:a};return e[s].push(f),f}function o(s,a){s.forEach(l=>l.to=a)}function i(s,a){if(s.type=="choice")return s.exprs.reduce((l,f)=>l.concat(i(f,a)),[]);if(s.type=="seq")for(let l=0;;l++){let f=i(s.exprs[l],a);if(l==s.exprs.length-1)return f;o(f,a=t())}else if(s.type=="star"){let l=t();return n(a,l),o(i(s.expr,l),l),[n(l)]}else if(s.type=="plus"){let l=t();return o(i(s.expr,a),l),o(i(s.expr,l),l),[n(l)]}else{if(s.type=="opt")return[n(a)].concat(i(s.expr,a));if(s.type=="range"){let l=a;for(let f=0;f<s.min;f++){let u=t();o(i(s.expr,l),u),l=u}if(s.max==-1)o(i(s.expr,l),l);else for(let f=s.min;f<s.max;f++){let u=t();n(l,u),o(i(s.expr,l),u),l=u}return[n(l)]}else{if(s.type=="name")return[n(a,void 0,s.value)];throw new Error("Unknown expr type")}}}}function fh(r,e){return e-r}function jp(r,e){let t=[];return n(e),t.sort(fh);function n(o){let i=r[o];if(i.length==1&&!i[0].term)return n(i[0].to);t.push(o);for(let s=0;s<i.length;s++){let{term:a,to:l}=i[s];!a&&t.indexOf(l)==-1&&n(l)}}}function Zb(r){let e=Object.create(null);return t(jp(r,0));function t(n){let o=[];n.forEach(s=>{r[s].forEach(({term:a,to:l})=>{if(!a)return;let f;for(let u=0;u<o.length;u++)o[u][0]==a&&(f=o[u][1]);jp(r,l).forEach(u=>{f||o.push([a,f=[]]),f.indexOf(u)==-1&&f.push(u)})})});let i=e[n.join(",")]=new mo(n.indexOf(r.length-1)>-1);for(let s=0;s<o.length;s++){let a=o[s][1].sort(fh);i.next.push({type:o[s][0],next:e[a.join(",")]||t(a)})}return i}}function ek(r,e){for(let t=0,n=[r];t<n.length;t++){let o=n[t],i=!o.validEnd,s=[];for(let a=0;a<o.next.length;a++){let{type:l,next:f}=o.next[a];s.push(l.name),i&&!(l.isText||l.hasRequiredAttrs())&&(i=!1),n.indexOf(f)==-1&&n.push(f)}i&&e.err("Only non-generatable nodes ("+s.join(", ")+") in a required position (see https://prosemirror.net/docs/guide/#generatable)")}}function uh(r){let e=Object.create(null);for(let t in r){let n=r[t];if(!n.hasDefault)return null;e[t]=n.default}return e}function dh(r,e){let t=Object.create(null);for(let n in r){let o=e&&e[n];if(o===void 0){let i=r[n];if(i.hasDefault)o=i.default;else throw new RangeError("No value supplied for attribute "+n)}t[n]=o}return t}function ch(r,e,t,n){for(let o in e)if(!(o in r))throw new RangeError(`Unsupported attribute ${o} for ${t} of type ${o}`);for(let o in r){let i=r[o];i.validate&&i.validate(e[o])}}function ph(r,e){let t=Object.create(null);if(e)for(let n in e)t[n]=new Zf(r,n,e[n]);return t}var wa=class r{constructor(e,t,n){this.name=e,this.schema=t,this.spec=n,this.markSet=null,this.groups=n.group?n.group.split(" "):[],this.attrs=ph(e,n.attrs),this.defaultAttrs=uh(this.attrs),this.contentMatch=null,this.inlineContent=null,this.isBlock=!(n.inline||e=="text"),this.isText=e=="text"}get isInline(){return!this.isBlock}get isTextblock(){return this.isBlock&&this.inlineContent}get isLeaf(){return this.contentMatch==mo.empty}get isAtom(){return this.isLeaf||!!this.spec.atom}isInGroup(e){return this.groups.indexOf(e)>-1}get whitespace(){return this.spec.whitespace||(this.spec.code?"pre":"normal")}hasRequiredAttrs(){for(let e in this.attrs)if(this.attrs[e].isRequired)return!0;return!1}compatibleContent(e){return this==e||this.contentMatch.compatible(e.contentMatch)}computeAttrs(e){return!e&&this.defaultAttrs?this.defaultAttrs:dh(this.attrs,e)}create(e=null,t,n){if(this.isText)throw new Error("NodeType.create can't construct text nodes");return new Kt(this,this.computeAttrs(e),A.from(t),fe.setFrom(n))}createChecked(e=null,t,n){return t=A.from(t),this.checkContent(t),new Kt(this,this.computeAttrs(e),t,fe.setFrom(n))}createAndFill(e=null,t,n){if(e=this.computeAttrs(e),t=A.from(t),t.size){let s=this.contentMatch.fillBefore(t);if(!s)return null;t=s.append(t)}let o=this.contentMatch.matchFragment(t),i=o&&o.fillBefore(A.empty,!0);return i?new Kt(this,e,t.append(i),fe.setFrom(n)):null}validContent(e){let t=this.contentMatch.matchFragment(e);if(!t||!t.validEnd)return!1;for(let n=0;n<e.childCount;n++)if(!this.allowsMarks(e.child(n).marks))return!1;return!0}checkContent(e){if(!this.validContent(e))throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0,50)}`)}checkAttrs(e){ch(this.attrs,e,"node",this.name)}allowsMarkType(e){return this.markSet==null||this.markSet.indexOf(e)>-1}allowsMarks(e){if(this.markSet==null)return!0;for(let t=0;t<e.length;t++)if(!this.allowsMarkType(e[t].type))return!1;return!0}allowedMarks(e){if(this.markSet==null)return e;let t;for(let n=0;n<e.length;n++)this.allowsMarkType(e[n].type)?t&&t.push(e[n]):t||(t=e.slice(0,n));return t?t.length?t:fe.none:e}static compile(e,t){let n=Object.create(null);e.forEach((i,s)=>n[i]=new r(i,t,s));let o=t.spec.topNode||"doc";if(!n[o])throw new RangeError("Schema is missing its top node type ('"+o+"')");if(!n.text)throw new RangeError("Every schema needs a 'text' type");for(let i in n.text.attrs)throw new RangeError("The text node type should not have attributes");return n}};function tk(r,e,t){let n=t.split("|");return o=>{let i=o===null?"null":typeof o;if(n.indexOf(i)<0)throw new RangeError(`Expected value of type ${n} for attribute ${e} on type ${r}, got ${i}`)}}var Zf=class{constructor(e,t,n){this.hasDefault=Object.prototype.hasOwnProperty.call(n,"default"),this.default=n.default,this.validate=typeof n.validate=="string"?tk(e,t,n.validate):n.validate}get isRequired(){return!this.hasDefault}},Xi=class r{constructor(e,t,n,o){this.name=e,this.rank=t,this.schema=n,this.spec=o,this.attrs=ph(e,o.attrs),this.excluded=null;let i=uh(this.attrs);this.instance=i?new fe(this,i):null}create(e=null){return!e&&this.instance?this.instance:new fe(this,dh(this.attrs,e))}static compile(e,t){let n=Object.create(null),o=0;return e.forEach((i,s)=>n[i]=new r(i,o++,t,s)),n}removeFromSet(e){for(var t=0;t<e.length;t++)e[t].type==this&&(e=e.slice(0,t).concat(e.slice(t+1)),t--);return e}isInSet(e){for(let t=0;t<e.length;t++)if(e[t].type==this)return e[t]}checkAttrs(e){ch(this.attrs,e,"mark",this.name)}excludes(e){return this.excluded.indexOf(e)>-1}},ti=class{constructor(e){this.linebreakReplacement=null,this.cached=Object.create(null);let t=this.spec={};for(let o in e)t[o]=e[o];t.nodes=Kf.from(e.nodes),t.marks=Kf.from(e.marks||{}),this.nodes=wa.compile(this.spec.nodes,this),this.marks=Xi.compile(this.spec.marks,this);let n=Object.create(null);for(let o in this.nodes){if(o in this.marks)throw new RangeError(o+" can not be both a node and a mark");let i=this.nodes[o],s=i.spec.content||"",a=i.spec.marks;if(i.contentMatch=n[s]||(n[s]=mo.parse(s,this.nodes)),i.inlineContent=i.contentMatch.inlineContent,i.spec.linebreakReplacement){if(this.linebreakReplacement)throw new RangeError("Multiple linebreak nodes defined");if(!i.isInline||!i.isLeaf)throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");this.linebreakReplacement=i}i.markSet=a=="_"?null:a?Gp(this,a.split(" ")):a==""||!i.inlineContent?[]:null}for(let o in this.marks){let i=this.marks[o],s=i.spec.excludes;i.excluded=s==null?[i]:s==""?[]:Gp(this,s.split(" "))}this.nodeFromJSON=o=>Kt.fromJSON(this,o),this.markFromJSON=o=>fe.fromJSON(this,o),this.topNodeType=this.nodes[this.spec.topNode||"doc"],this.cached.wrappings=Object.create(null)}node(e,t=null,n,o){if(typeof e=="string")e=this.nodeType(e);else if(e instanceof wa){if(e.schema!=this)throw new RangeError("Node type from different schema used ("+e.name+")")}else throw new RangeError("Invalid node type: "+e);return e.createChecked(t,n,o)}text(e,t){let n=this.nodes.text;return new Yf(n,n.defaultAttrs,e,fe.setFrom(t))}mark(e,t){return typeof e=="string"&&(e=this.marks[e]),e.create(t)}nodeType(e){let t=this.nodes[e];if(!t)throw new RangeError("Unknown node type: "+e);return t}};function Gp(r,e){let t=[];for(let n=0;n<e.length;n++){let o=e[n],i=r.marks[o],s=i;if(i)t.push(i);else for(let a in r.marks){let l=r.marks[a];(o=="_"||l.spec.group&&l.spec.group.split(" ").indexOf(o)>-1)&&t.push(s=l)}if(!s)throw new SyntaxError("Unknown mark type: '"+e[n]+"'")}return t}function rk(r){return r.tag!=null}function nk(r){return r.style!=null}var zr=class r{constructor(e,t){this.schema=e,this.rules=t,this.tags=[],this.styles=[];let n=this.matchedStyles=[];t.forEach(o=>{if(rk(o))this.tags.push(o);else if(nk(o)){let i=/[^=]*/.exec(o.style)[0];n.indexOf(i)<0&&n.push(i),this.styles.push(o)}}),this.normalizeLists=!this.tags.some(o=>{if(!/^(ul|ol)\b/.test(o.tag)||!o.node)return!1;let i=e.nodes[o.node];return i.contentMatch.matchType(i)})}parse(e,t={}){let n=new _a(this,t,!1);return n.addAll(e,fe.none,t.from,t.to),n.finish()}parseSlice(e,t={}){let n=new _a(this,t,!0);return n.addAll(e,fe.none,t.from,t.to),L.maxOpen(n.finish())}matchTag(e,t,n){for(let o=n?this.tags.indexOf(n)+1:0;o<this.tags.length;o++){let i=this.tags[o];if(sk(e,i.tag)&&(i.namespace===void 0||e.namespaceURI==i.namespace)&&(!i.context||t.matchesContext(i.context))){if(i.getAttrs){let s=i.getAttrs(e);if(s===!1)continue;i.attrs=s||void 0}return i}}}matchStyle(e,t,n,o){for(let i=o?this.styles.indexOf(o)+1:0;i<this.styles.length;i++){let s=this.styles[i],a=s.style;if(!(a.indexOf(e)!=0||s.context&&!n.matchesContext(s.context)||a.length>e.length&&(a.charCodeAt(e.length)!=61||a.slice(e.length+1)!=t))){if(s.getAttrs){let l=s.getAttrs(t);if(l===!1)continue;s.attrs=l||void 0}return s}}}static schemaRules(e){let t=[];function n(o){let i=o.priority==null?50:o.priority,s=0;for(;s<t.length;s++){let a=t[s];if((a.priority==null?50:a.priority)<i)break}t.splice(s,0,o)}for(let o in e.marks){let i=e.marks[o].spec.parseDOM;i&&i.forEach(s=>{n(s=Xp(s)),s.mark||s.ignore||s.clearMark||(s.mark=o)})}for(let o in e.nodes){let i=e.nodes[o].spec.parseDOM;i&&i.forEach(s=>{n(s=Xp(s)),s.node||s.ignore||s.mark||(s.node=o)})}return t}static fromSchema(e){return e.cached.domParser||(e.cached.domParser=new r(e,r.schemaRules(e)))}},hh={address:!0,article:!0,aside:!0,blockquote:!0,canvas:!0,dd:!0,div:!0,dl:!0,fieldset:!0,figcaption:!0,figure:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,li:!0,noscript:!0,ol:!0,output:!0,p:!0,pre:!0,section:!0,table:!0,tfoot:!0,ul:!0},ok={head:!0,noscript:!0,object:!0,script:!0,style:!0,title:!0},mh={ol:!0,ul:!0},Yi=1,eu=2,Ji=4;function Jp(r,e,t){return e!=null?(e?Yi:0)|(e==="full"?eu:0):r&&r.whitespace=="pre"?Yi|eu:t&~Ji}var ei=class{constructor(e,t,n,o,i,s){this.type=e,this.attrs=t,this.marks=n,this.solid=o,this.options=s,this.content=[],this.activeMarks=fe.none,this.match=i||(s&Ji?null:e.contentMatch)}findWrapping(e){if(!this.match){if(!this.type)return[];let t=this.type.contentMatch.fillBefore(A.from(e));if(t)this.match=this.type.contentMatch.matchFragment(t);else{let n=this.type.contentMatch,o;return(o=n.findWrapping(e.type))?(this.match=n,o):null}}return this.match.findWrapping(e.type)}finish(e){if(!(this.options&Yi)){let n=this.content[this.content.length-1],o;if(n&&n.isText&&(o=/[ \t\r\n\u000c]+$/.exec(n.text))){let i=n;n.text.length==o[0].length?this.content.pop():this.content[this.content.length-1]=i.withText(i.text.slice(0,i.text.length-o[0].length))}}let t=A.from(this.content);return!e&&this.match&&(t=t.append(this.match.fillBefore(A.empty,!0))),this.type?this.type.create(this.attrs,t,this.marks):t}inlineContext(e){return this.type?this.type.inlineContent:this.content.length?this.content[0].isInline:e.parentNode&&!hh.hasOwnProperty(e.parentNode.nodeName.toLowerCase())}},_a=class{constructor(e,t,n){this.parser=e,this.options=t,this.isOpen=n,this.open=0,this.localPreserveWS=!1;let o=t.topNode,i,s=Jp(null,t.preserveWhitespace,0)|(n?Ji:0);o?i=new ei(o.type,o.attrs,fe.none,!0,t.topMatch||o.type.contentMatch,s):n?i=new ei(null,null,fe.none,!0,null,s):i=new ei(e.schema.topNodeType,null,fe.none,!0,null,s),this.nodes=[i],this.find=t.findPositions,this.needsBlock=!1}get top(){return this.nodes[this.open]}addDOM(e,t){e.nodeType==3?this.addTextNode(e,t):e.nodeType==1&&this.addElement(e,t)}addTextNode(e,t){let n=e.nodeValue,o=this.top,i=o.options&eu?"full":this.localPreserveWS||(o.options&Yi)>0,{schema:s}=this.parser;if(i==="full"||o.inlineContext(e)||/[^ \t\r\n\u000c]/.test(n)){if(i)if(i==="full")n=n.replace(/\r\n?/g,`
`);else if(s.linebreakReplacement&&/[\r\n]/.test(n)&&this.top.findWrapping(s.linebreakReplacement.create())){let a=n.split(/\r?\n|\r/);for(let l=0;l<a.length;l++)l&&this.insertNode(s.linebreakReplacement.create(),t,!0),a[l]&&this.insertNode(s.text(a[l]),t,!/\S/.test(a[l]));n=""}else n=n.replace(/\r?\n|\r/g," ");else if(n=n.replace(/[ \t\r\n\u000c]+/g," "),/^[ \t\r\n\u000c]/.test(n)&&this.open==this.nodes.length-1){let a=o.content[o.content.length-1],l=e.previousSibling;(!a||l&&l.nodeName=="BR"||a.isText&&/[ \t\r\n\u000c]$/.test(a.text))&&(n=n.slice(1))}n&&this.insertNode(s.text(n),t,!/\S/.test(n)),this.findInText(e)}else this.findInside(e)}addElement(e,t,n){let o=this.localPreserveWS,i=this.top;(e.tagName=="PRE"||/pre/.test(e.style&&e.style.whiteSpace))&&(this.localPreserveWS=!0);let s=e.nodeName.toLowerCase(),a;mh.hasOwnProperty(s)&&this.parser.normalizeLists&&ik(e);let l=this.options.ruleFromNode&&this.options.ruleFromNode(e)||(a=this.parser.matchTag(e,this,n));e:if(l?l.ignore:ok.hasOwnProperty(s))this.findInside(e),this.ignoreFallback(e,t);else if(!l||l.skip||l.closeParent){l&&l.closeParent?this.open=Math.max(0,this.open-1):l&&l.skip.nodeType&&(e=l.skip);let f,u=this.needsBlock;if(hh.hasOwnProperty(s))i.content.length&&i.content[0].isInline&&this.open&&(this.open--,i=this.top),f=!0,i.type||(this.needsBlock=!0);else if(!e.firstChild){this.leafFallback(e,t);break e}let d=l&&l.skip?t:this.readStyles(e,t);d&&this.addAll(e,d),f&&this.sync(i),this.needsBlock=u}else{let f=this.readStyles(e,t);f&&this.addElementByRule(e,l,f,l.consuming===!1?a:void 0)}this.localPreserveWS=o}leafFallback(e,t){e.nodeName=="BR"&&this.top.type&&this.top.type.inlineContent&&this.addTextNode(e.ownerDocument.createTextNode(`
`),t)}ignoreFallback(e,t){e.nodeName=="BR"&&(!this.top.type||!this.top.type.inlineContent)&&this.findPlace(this.parser.schema.text("-"),t,!0)}readStyles(e,t){let n=e.style;if(n&&n.length)for(let o=0;o<this.parser.matchedStyles.length;o++){let i=this.parser.matchedStyles[o],s=n.getPropertyValue(i);if(s)for(let a=void 0;;){let l=this.parser.matchStyle(i,s,this,a);if(!l)break;if(l.ignore)return null;if(l.clearMark?t=t.filter(f=>!l.clearMark(f)):t=t.concat(this.parser.schema.marks[l.mark].create(l.attrs)),l.consuming===!1)a=l;else break}}return t}addElementByRule(e,t,n,o){let i,s;if(t.node)if(s=this.parser.schema.nodes[t.node],s.isLeaf)this.insertNode(s.create(t.attrs),n,e.nodeName=="BR")||this.leafFallback(e,n);else{let l=this.enter(s,t.attrs||null,n,t.preserveWhitespace);l&&(i=!0,n=l)}else{let l=this.parser.schema.marks[t.mark];n=n.concat(l.create(t.attrs))}let a=this.top;if(s&&s.isLeaf)this.findInside(e);else if(o)this.addElement(e,n,o);else if(t.getContent)this.findInside(e),t.getContent(e,this.parser.schema).forEach(l=>this.insertNode(l,n,!1));else{let l=e;typeof t.contentElement=="string"?l=e.querySelector(t.contentElement):typeof t.contentElement=="function"?l=t.contentElement(e):t.contentElement&&(l=t.contentElement),this.findAround(e,l,!0),this.addAll(l,n),this.findAround(e,l,!1)}i&&this.sync(a)&&this.open--}addAll(e,t,n,o){let i=n||0;for(let s=n?e.childNodes[n]:e.firstChild,a=o==null?null:e.childNodes[o];s!=a;s=s.nextSibling,++i)this.findAtPoint(e,i),this.addDOM(s,t);this.findAtPoint(e,i)}findPlace(e,t,n){let o,i;for(let s=this.open,a=0;s>=0;s--){let l=this.nodes[s],f=l.findWrapping(e);if(f&&(!o||o.length>f.length+a)&&(o=f,i=l,!f.length))break;if(l.solid){if(n)break;a+=2}}if(!o)return null;this.sync(i);for(let s=0;s<o.length;s++)t=this.enterInner(o[s],null,t,!1);return t}insertNode(e,t,n){if(e.isInline&&this.needsBlock&&!this.top.type){let i=this.textblockFromContext();i&&(t=this.enterInner(i,null,t))}let o=this.findPlace(e,t,n);if(o){this.closeExtra();let i=this.top;i.match&&(i.match=i.match.matchType(e.type));let s=fe.none;for(let a of o.concat(e.marks))(i.type?i.type.allowsMarkType(a.type):Yp(a.type,e.type))&&(s=a.addToSet(s));return i.content.push(e.mark(s)),!0}return!1}enter(e,t,n,o){let i=this.findPlace(e.create(t),n,!1);return i&&(i=this.enterInner(e,t,n,!0,o)),i}enterInner(e,t,n,o=!1,i){this.closeExtra();let s=this.top;s.match=s.match&&s.match.matchType(e);let a=Jp(e,i,s.options);s.options&Ji&&s.content.length==0&&(a|=Ji);let l=fe.none;return n=n.filter(f=>(s.type?s.type.allowsMarkType(f.type):Yp(f.type,e))?(l=f.addToSet(l),!1):!0),this.nodes.push(new ei(e,t,l,o,null,a)),this.open++,n}closeExtra(e=!1){let t=this.nodes.length-1;if(t>this.open){for(;t>this.open;t--)this.nodes[t-1].content.push(this.nodes[t].finish(e));this.nodes.length=this.open+1}}finish(){return this.open=0,this.closeExtra(this.isOpen),this.nodes[0].finish(!!(this.isOpen||this.options.topOpen))}sync(e){for(let t=this.open;t>=0;t--){if(this.nodes[t]==e)return this.open=t,!0;this.localPreserveWS&&(this.nodes[t].options|=Yi)}return!1}get currentPos(){this.closeExtra();let e=0;for(let t=this.open;t>=0;t--){let n=this.nodes[t].content;for(let o=n.length-1;o>=0;o--)e+=n[o].nodeSize;t&&e++}return e}findAtPoint(e,t){if(this.find)for(let n=0;n<this.find.length;n++)this.find[n].node==e&&this.find[n].offset==t&&(this.find[n].pos=this.currentPos)}findInside(e){if(this.find)for(let t=0;t<this.find.length;t++)this.find[t].pos==null&&e.nodeType==1&&e.contains(this.find[t].node)&&(this.find[t].pos=this.currentPos)}findAround(e,t,n){if(e!=t&&this.find)for(let o=0;o<this.find.length;o++)this.find[o].pos==null&&e.nodeType==1&&e.contains(this.find[o].node)&&t.compareDocumentPosition(this.find[o].node)&(n?2:4)&&(this.find[o].pos=this.currentPos)}findInText(e){if(this.find)for(let t=0;t<this.find.length;t++)this.find[t].node==e&&(this.find[t].pos=this.currentPos-(e.nodeValue.length-this.find[t].offset))}matchesContext(e){if(e.indexOf("|")>-1)return e.split(/\s*\|\s*/).some(this.matchesContext,this);let t=e.split("/"),n=this.options.context,o=!this.isOpen&&(!n||n.parent.type==this.nodes[0].type),i=-(n?n.depth+1:0)+(o?0:1),s=(a,l)=>{for(;a>=0;a--){let f=t[a];if(f==""){if(a==t.length-1||a==0)continue;for(;l>=i;l--)if(s(a-1,l))return!0;return!1}else{let u=l>0||l==0&&o?this.nodes[l].type:n&&l>=i?n.node(l-i).type:null;if(!u||u.name!=f&&!u.isInGroup(f))return!1;l--}}return!0};return s(t.length-1,this.open)}textblockFromContext(){let e=this.options.context;if(e)for(let t=e.depth;t>=0;t--){let n=e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;if(n&&n.isTextblock&&n.defaultAttrs)return n}for(let t in this.parser.schema.nodes){let n=this.parser.schema.nodes[t];if(n.isTextblock&&n.defaultAttrs)return n}}};function ik(r){for(let e=r.firstChild,t=null;e;e=e.nextSibling){let n=e.nodeType==1?e.nodeName.toLowerCase():null;n&&mh.hasOwnProperty(n)&&t?(t.appendChild(e),e=t):n=="li"?t=e:n&&(t=null)}}function sk(r,e){return(r.matches||r.msMatchesSelector||r.webkitMatchesSelector||r.mozMatchesSelector).call(r,e)}function Xp(r){let e={};for(let t in r)e[t]=r[t];return e}function Yp(r,e){let t=e.schema.nodes;for(let n in t){let o=t[n];if(!o.allowsMarkType(r))continue;let i=[],s=a=>{i.push(a);for(let l=0;l<a.edgeCount;l++){let{type:f,next:u}=a.edge(l);if(f==e||i.indexOf(u)<0&&s(u))return!0}};if(s(o.contentMatch))return!0}}var ln=class r{constructor(e,t){this.nodes=e,this.marks=t}serializeFragment(e,t={},n){n||(n=Gf(t).createDocumentFragment());let o=n,i=[];return e.forEach(s=>{if(i.length||s.marks.length){let a=0,l=0;for(;a<i.length&&l<s.marks.length;){let f=s.marks[l];if(!this.marks[f.type.name]){l++;continue}if(!f.eq(i[a][0])||f.type.spec.spanning===!1)break;a++,l++}for(;a<i.length;)o=i.pop()[1];for(;l<s.marks.length;){let f=s.marks[l++],u=this.serializeMark(f,s.isInline,t);u&&(i.push([f,o]),o.appendChild(u.dom),o=u.contentDOM||u.dom)}}o.appendChild(this.serializeNodeInner(s,t))}),n}serializeNodeInner(e,t){let{dom:n,contentDOM:o}=ka(Gf(t),this.nodes[e.type.name](e),null,e.attrs);if(o){if(e.isLeaf)throw new RangeError("Content hole not allowed in a leaf node spec");this.serializeFragment(e.content,t,o)}return n}serializeNode(e,t={}){let n=this.serializeNodeInner(e,t);for(let o=e.marks.length-1;o>=0;o--){let i=this.serializeMark(e.marks[o],e.isInline,t);i&&((i.contentDOM||i.dom).appendChild(n),n=i.dom)}return n}serializeMark(e,t,n={}){let o=this.marks[e.type.name];return o&&ka(Gf(n),o(e,t),null,e.attrs)}static renderSpec(e,t,n=null,o){return ka(e,t,n,o)}static fromSchema(e){return e.cached.domSerializer||(e.cached.domSerializer=new r(this.nodesFromSchema(e),this.marksFromSchema(e)))}static nodesFromSchema(e){let t=Qp(e.nodes);return t.text||(t.text=n=>n.text),t}static marksFromSchema(e){return Qp(e.marks)}};function Qp(r){let e={};for(let t in r){let n=r[t].spec.toDOM;n&&(e[t]=n)}return e}function Gf(r){return r.document||window.document}var Zp=new WeakMap;function ak(r){let e=Zp.get(r);return e===void 0&&Zp.set(r,e=lk(r)),e}function lk(r){let e=null;function t(n){if(n&&typeof n=="object")if(Array.isArray(n))if(typeof n[0]=="string")e||(e=[]),e.push(n);else for(let o=0;o<n.length;o++)t(n[o]);else for(let o in n)t(n[o])}return t(r),e}function ka(r,e,t,n){if(typeof e=="string")return{dom:r.createTextNode(e)};if(e.nodeType!=null)return{dom:e};if(e.dom&&e.dom.nodeType!=null)return e;let o=e[0],i;if(typeof o!="string")throw new RangeError("Invalid array passed to renderSpec");if(n&&(i=ak(n))&&i.indexOf(e)>-1)throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");let s=o.indexOf(" ");s>0&&(t=o.slice(0,s),o=o.slice(s+1));let a,l=t?r.createElementNS(t,o):r.createElement(o),f=e[1],u=1;if(f&&typeof f=="object"&&f.nodeType==null&&!Array.isArray(f)){u=2;for(let d in f)if(f[d]!=null){let p=d.indexOf(" ");p>0?l.setAttributeNS(d.slice(0,p),d.slice(p+1),f[d]):d=="style"&&l.style?l.style.cssText=f[d]:l.setAttribute(d,f[d])}}for(let d=u;d<e.length;d++){let p=e[d];if(p===0){if(d<e.length-1||d>u)throw new RangeError("Content hole must be the only child of its parent node");return{dom:l,contentDOM:l}}else{let{dom:c,contentDOM:h}=ka(r,p,t,n);if(l.appendChild(c),h){if(a)throw new RangeError("Multiple content holes");a=h}}}return{dom:l,contentDOM:a}}var yh=65535,bh=Math.pow(2,16);function fk(r,e){return r+e*bh}function gh(r){return r&yh}function uk(r){return(r-(r&yh))/bh}var kh=1,Sh=2,Ta=4,Ch=8,es=class{constructor(e,t,n){this.pos=e,this.delInfo=t,this.recover=n}get deleted(){return(this.delInfo&Ch)>0}get deletedBefore(){return(this.delInfo&(kh|Ta))>0}get deletedAfter(){return(this.delInfo&(Sh|Ta))>0}get deletedAcross(){return(this.delInfo&Ta)>0}},fn=class r{constructor(e,t=!1){if(this.ranges=e,this.inverted=t,!e.length&&r.empty)return r.empty}recover(e){let t=0,n=gh(e);if(!this.inverted)for(let o=0;o<n;o++)t+=this.ranges[o*3+2]-this.ranges[o*3+1];return this.ranges[n*3]+t+uk(e)}mapResult(e,t=1){return this._map(e,t,!1)}map(e,t=1){return this._map(e,t,!0)}_map(e,t,n){let o=0,i=this.inverted?2:1,s=this.inverted?1:2;for(let a=0;a<this.ranges.length;a+=3){let l=this.ranges[a]-(this.inverted?o:0);if(l>e)break;let f=this.ranges[a+i],u=this.ranges[a+s],d=l+f;if(e<=d){let p=f?e==l?-1:e==d?1:t:t,c=l+o+(p<0?0:u);if(n)return c;let h=e==(t<0?l:d)?null:fk(a/3,e-l),m=e==l?Sh:e==d?kh:Ta;return(t<0?e!=l:e!=d)&&(m|=Ch),new es(c,m,h)}o+=u-f}return n?e+o:new es(e+o,0,null)}touches(e,t){let n=0,o=gh(t),i=this.inverted?2:1,s=this.inverted?1:2;for(let a=0;a<this.ranges.length;a+=3){let l=this.ranges[a]-(this.inverted?n:0);if(l>e)break;let f=this.ranges[a+i],u=l+f;if(e<=u&&a==o*3)return!0;n+=this.ranges[a+s]-f}return!1}forEach(e){let t=this.inverted?2:1,n=this.inverted?1:2;for(let o=0,i=0;o<this.ranges.length;o+=3){let s=this.ranges[o],a=s-(this.inverted?i:0),l=s+(this.inverted?0:i),f=this.ranges[o+t],u=this.ranges[o+n];e(a,a+f,l,l+u),i+=u-f}}invert(){return new r(this.ranges,!this.inverted)}toString(){return(this.inverted?"-":"")+JSON.stringify(this.ranges)}static offset(e){return e==0?r.empty:new r(e<0?[0,-e,0]:[0,0,e])}};fn.empty=new fn([]);var ts=class r{constructor(e,t,n=0,o=e?e.length:0){this.mirror=t,this.from=n,this.to=o,this._maps=e||[],this.ownData=!(e||t)}get maps(){return this._maps}slice(e=0,t=this.maps.length){return new r(this._maps,this.mirror,e,t)}appendMap(e,t){this.ownData||(this._maps=this._maps.slice(),this.mirror=this.mirror&&this.mirror.slice(),this.ownData=!0),this.to=this._maps.push(e),t!=null&&this.setMirror(this._maps.length-1,t)}appendMapping(e){for(let t=0,n=this._maps.length;t<e._maps.length;t++){let o=e.getMirror(t);this.appendMap(e._maps[t],o!=null&&o<t?n+o:void 0)}}getMirror(e){if(this.mirror){for(let t=0;t<this.mirror.length;t++)if(this.mirror[t]==e)return this.mirror[t+(t%2?-1:1)]}}setMirror(e,t){this.mirror||(this.mirror=[]),this.mirror.push(e,t)}appendMappingInverted(e){for(let t=e.maps.length-1,n=this._maps.length+e._maps.length;t>=0;t--){let o=e.getMirror(t);this.appendMap(e._maps[t].invert(),o!=null&&o>t?n-o-1:void 0)}}invert(){let e=new r;return e.appendMappingInverted(this),e}map(e,t=1){if(this.mirror)return this._map(e,t,!0);for(let n=this.from;n<this.to;n++)e=this._maps[n].map(e,t);return e}mapResult(e,t=1){return this._map(e,t,!1)}_map(e,t,n){let o=0;for(let i=this.from;i<this.to;i++){let s=this._maps[i],a=s.mapResult(e,t);if(a.recover!=null){let l=this.getMirror(i);if(l!=null&&l>i&&l<this.to){i=l,e=this._maps[l].recover(a.recover);continue}}o|=a.delInfo,e=a.pos}return n?e:new es(e,o,null)}},tu=Object.create(null),Qe=class{getMap(){return fn.empty}merge(e){return null}static fromJSON(e,t){if(!t||!t.stepType)throw new RangeError("Invalid input for Step.fromJSON");let n=tu[t.stepType];if(!n)throw new RangeError(`No step type ${t.stepType} defined`);return n.fromJSON(e,t)}static jsonID(e,t){if(e in tu)throw new RangeError("Duplicate use of step JSON ID "+e);return tu[e]=t,t.prototype.jsonID=e,t}},it=class r{constructor(e,t){this.doc=e,this.failed=t}static ok(e){return new r(e,null)}static fail(e){return new r(null,e)}static fromReplace(e,t,n,o){try{return r.ok(e.replace(t,n,o))}catch(i){if(i instanceof po)return r.fail(i.message);throw i}}};function su(r,e,t){let n=[];for(let o=0;o<r.childCount;o++){let i=r.child(o);i.content.size&&(i=i.copy(su(i.content,e,i))),i.isInline&&(i=e(i,t,o)),n.push(i)}return A.fromArray(n)}var rs=class r extends Qe{constructor(e,t,n){super(),this.from=e,this.to=t,this.mark=n}apply(e){let t=e.slice(this.from,this.to),n=e.resolve(this.from),o=n.node(n.sharedDepth(this.to)),i=new L(su(t.content,(s,a)=>!s.isAtom||!a.type.allowsMarkType(this.mark.type)?s:s.mark(this.mark.addToSet(s.marks)),o),t.openStart,t.openEnd);return it.fromReplace(e,this.from,this.to,i)}invert(){return new un(this.from,this.to,this.mark)}map(e){let t=e.mapResult(this.from,1),n=e.mapResult(this.to,-1);return t.deleted&&n.deleted||t.pos>=n.pos?null:new r(t.pos,n.pos,this.mark)}merge(e){return e instanceof r&&e.mark.eq(this.mark)&&this.from<=e.to&&this.to>=e.from?new r(Math.min(this.from,e.from),Math.max(this.to,e.to),this.mark):null}toJSON(){return{stepType:"addMark",mark:this.mark.toJSON(),from:this.from,to:this.to}}static fromJSON(e,t){if(typeof t.from!="number"||typeof t.to!="number")throw new RangeError("Invalid input for AddMarkStep.fromJSON");return new r(t.from,t.to,e.markFromJSON(t.mark))}};Qe.jsonID("addMark",rs);var un=class r extends Qe{constructor(e,t,n){super(),this.from=e,this.to=t,this.mark=n}apply(e){let t=e.slice(this.from,this.to),n=new L(su(t.content,o=>o.mark(this.mark.removeFromSet(o.marks)),e),t.openStart,t.openEnd);return it.fromReplace(e,this.from,this.to,n)}invert(){return new rs(this.from,this.to,this.mark)}map(e){let t=e.mapResult(this.from,1),n=e.mapResult(this.to,-1);return t.deleted&&n.deleted||t.pos>=n.pos?null:new r(t.pos,n.pos,this.mark)}merge(e){return e instanceof r&&e.mark.eq(this.mark)&&this.from<=e.to&&this.to>=e.from?new r(Math.min(this.from,e.from),Math.max(this.to,e.to),this.mark):null}toJSON(){return{stepType:"removeMark",mark:this.mark.toJSON(),from:this.from,to:this.to}}static fromJSON(e,t){if(typeof t.from!="number"||typeof t.to!="number")throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");return new r(t.from,t.to,e.markFromJSON(t.mark))}};Qe.jsonID("removeMark",un);var ns=class r extends Qe{constructor(e,t){super(),this.pos=e,this.mark=t}apply(e){let t=e.nodeAt(this.pos);if(!t)return it.fail("No node at mark step's position");let n=t.type.create(t.attrs,null,this.mark.addToSet(t.marks));return it.fromReplace(e,this.pos,this.pos+1,new L(A.from(n),0,t.isLeaf?0:1))}invert(e){let t=e.nodeAt(this.pos);if(t){let n=this.mark.addToSet(t.marks);if(n.length==t.marks.length){for(let o=0;o<t.marks.length;o++)if(!t.marks[o].isInSet(n))return new r(this.pos,t.marks[o]);return new r(this.pos,this.mark)}}return new ri(this.pos,this.mark)}map(e){let t=e.mapResult(this.pos,1);return t.deletedAfter?null:new r(t.pos,this.mark)}toJSON(){return{stepType:"addNodeMark",pos:this.pos,mark:this.mark.toJSON()}}static fromJSON(e,t){if(typeof t.pos!="number")throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");return new r(t.pos,e.markFromJSON(t.mark))}};Qe.jsonID("addNodeMark",ns);var ri=class r extends Qe{constructor(e,t){super(),this.pos=e,this.mark=t}apply(e){let t=e.nodeAt(this.pos);if(!t)return it.fail("No node at mark step's position");let n=t.type.create(t.attrs,null,this.mark.removeFromSet(t.marks));return it.fromReplace(e,this.pos,this.pos+1,new L(A.from(n),0,t.isLeaf?0:1))}invert(e){let t=e.nodeAt(this.pos);return!t||!this.mark.isInSet(t.marks)?this:new ns(this.pos,this.mark)}map(e){let t=e.mapResult(this.pos,1);return t.deletedAfter?null:new r(t.pos,this.mark)}toJSON(){return{stepType:"removeNodeMark",pos:this.pos,mark:this.mark.toJSON()}}static fromJSON(e,t){if(typeof t.pos!="number")throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");return new r(t.pos,e.markFromJSON(t.mark))}};Qe.jsonID("removeNodeMark",ri);var st=class r extends Qe{constructor(e,t,n,o=!1){super(),this.from=e,this.to=t,this.slice=n,this.structure=o}apply(e){return this.structure&&ou(e,this.from,this.to)?it.fail("Structure replace would overwrite content"):it.fromReplace(e,this.from,this.to,this.slice)}getMap(){return new fn([this.from,this.to-this.from,this.slice.size])}invert(e){return new r(this.from,this.from+this.slice.size,e.slice(this.from,this.to))}map(e){let t=e.mapResult(this.to,-1),n=this.from==this.to&&r.MAP_BIAS<0?t:e.mapResult(this.from,1);return n.deletedAcross&&t.deletedAcross?null:new r(n.pos,Math.max(n.pos,t.pos),this.slice,this.structure)}merge(e){if(!(e instanceof r)||e.structure||this.structure)return null;if(this.from+this.slice.size==e.from&&!this.slice.openEnd&&!e.slice.openStart){let t=this.slice.size+e.slice.size==0?L.empty:new L(this.slice.content.append(e.slice.content),this.slice.openStart,e.slice.openEnd);return new r(this.from,this.to+(e.to-e.from),t,this.structure)}else if(e.to==this.from&&!this.slice.openStart&&!e.slice.openEnd){let t=this.slice.size+e.slice.size==0?L.empty:new L(e.slice.content.append(this.slice.content),e.slice.openStart,this.slice.openEnd);return new r(e.from,this.to,t,this.structure)}else return null}toJSON(){let e={stepType:"replace",from:this.from,to:this.to};return this.slice.size&&(e.slice=this.slice.toJSON()),this.structure&&(e.structure=!0),e}static fromJSON(e,t){if(typeof t.from!="number"||typeof t.to!="number")throw new RangeError("Invalid input for ReplaceStep.fromJSON");return new r(t.from,t.to,L.fromJSON(e,t.slice),!!t.structure)}};st.MAP_BIAS=1;Qe.jsonID("replace",st);var qe=class r extends Qe{constructor(e,t,n,o,i,s,a=!1){super(),this.from=e,this.to=t,this.gapFrom=n,this.gapTo=o,this.slice=i,this.insert=s,this.structure=a}apply(e){if(this.structure&&(ou(e,this.from,this.gapFrom)||ou(e,this.gapTo,this.to)))return it.fail("Structure gap-replace would overwrite content");let t=e.slice(this.gapFrom,this.gapTo);if(t.openStart||t.openEnd)return it.fail("Gap is not a flat range");let n=this.slice.insertAt(this.insert,t.content);return n?it.fromReplace(e,this.from,this.to,n):it.fail("Content does not fit in gap")}getMap(){return new fn([this.from,this.gapFrom-this.from,this.insert,this.gapTo,this.to-this.gapTo,this.slice.size-this.insert])}invert(e){let t=this.gapTo-this.gapFrom;return new r(this.from,this.from+this.slice.size+t,this.from+this.insert,this.from+this.insert+t,e.slice(this.from,this.to).removeBetween(this.gapFrom-this.from,this.gapTo-this.from),this.gapFrom-this.from,this.structure)}map(e){let t=e.mapResult(this.from,1),n=e.mapResult(this.to,-1),o=this.from==this.gapFrom?t.pos:e.map(this.gapFrom,-1),i=this.to==this.gapTo?n.pos:e.map(this.gapTo,1);return t.deletedAcross&&n.deletedAcross||o<t.pos||i>n.pos?null:new r(t.pos,n.pos,o,i,this.slice,this.insert,this.structure)}toJSON(){let e={stepType:"replaceAround",from:this.from,to:this.to,gapFrom:this.gapFrom,gapTo:this.gapTo,insert:this.insert};return this.slice.size&&(e.slice=this.slice.toJSON()),this.structure&&(e.structure=!0),e}static fromJSON(e,t){if(typeof t.from!="number"||typeof t.to!="number"||typeof t.gapFrom!="number"||typeof t.gapTo!="number"||typeof t.insert!="number")throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");return new r(t.from,t.to,t.gapFrom,t.gapTo,L.fromJSON(e,t.slice),t.insert,!!t.structure)}};Qe.jsonID("replaceAround",qe);function ou(r,e,t){let n=r.resolve(e),o=t-e,i=n.depth;for(;o>0&&i>0&&n.indexAfter(i)==n.node(i).childCount;)i--,o--;if(o>0){let s=n.node(i).maybeChild(n.indexAfter(i));for(;o>0;){if(!s||s.isLeaf)return!0;s=s.firstChild,o--}}return!1}function dk(r,e,t,n){let o=[],i=[],s,a;r.doc.nodesBetween(e,t,(l,f,u)=>{if(!l.isInline)return;let d=l.marks;if(!n.isInSet(d)&&u.type.allowsMarkType(n.type)){let p=Math.max(f,e),c=Math.min(f+l.nodeSize,t),h=n.addToSet(d);for(let m=0;m<d.length;m++)d[m].isInSet(h)||(s&&s.to==p&&s.mark.eq(d[m])?s.to=c:o.push(s=new un(p,c,d[m])));a&&a.to==p?a.to=c:i.push(a=new rs(p,c,n))}}),o.forEach(l=>r.step(l)),i.forEach(l=>r.step(l))}function ck(r,e,t,n){let o=[],i=0;r.doc.nodesBetween(e,t,(s,a)=>{if(!s.isInline)return;i++;let l=null;if(n instanceof Xi){let f=s.marks,u;for(;u=n.isInSet(f);)(l||(l=[])).push(u),f=u.removeFromSet(f)}else n?n.isInSet(s.marks)&&(l=[n]):l=s.marks;if(l&&l.length){let f=Math.min(a+s.nodeSize,t);for(let u=0;u<l.length;u++){let d=l[u],p;for(let c=0;c<o.length;c++){let h=o[c];h.step==i-1&&d.eq(o[c].style)&&(p=h)}p?(p.to=f,p.step=i):o.push({style:d,from:Math.max(a,e),to:f,step:i})}}}),o.forEach(s=>r.step(new un(s.from,s.to,s.style)))}function au(r,e,t,n=t.contentMatch,o=!0){let i=r.doc.nodeAt(e),s=[],a=e+1;for(let l=0;l<i.childCount;l++){let f=i.child(l),u=a+f.nodeSize,d=n.matchType(f.type);if(!d)s.push(new st(a,u,L.empty));else{n=d;for(let p=0;p<f.marks.length;p++)t.allowsMarkType(f.marks[p].type)||r.step(new un(a,u,f.marks[p]));if(o&&f.isText&&t.whitespace!="pre"){let p,c=/\r?\n|\r/g,h;for(;p=c.exec(f.text);)h||(h=new L(A.from(t.schema.text(" ",t.allowedMarks(f.marks))),0,0)),s.push(new st(a+p.index,a+p.index+p[0].length,h))}}a=u}if(!n.validEnd){let l=n.fillBefore(A.empty,!0);r.replace(a,a,new L(l,0,0))}for(let l=s.length-1;l>=0;l--)r.step(s[l])}function pk(r,e,t){return(e==0||r.canReplace(e,r.childCount))&&(t==r.childCount||r.canReplace(0,t))}function dn(r){let t=r.parent.content.cutByIndex(r.startIndex,r.endIndex);for(let n=r.depth,o=0,i=0;;--n){let s=r.$from.node(n),a=r.$from.index(n)+o,l=r.$to.indexAfter(n)-i;if(n<r.depth&&s.canReplace(a,l,t))return n;if(n==0||s.type.spec.isolating||!pk(s,a,l))break;a&&(o=1),l<s.childCount&&(i=1)}return null}function hk(r,e,t){let{$from:n,$to:o,depth:i}=e,s=n.before(i+1),a=o.after(i+1),l=s,f=a,u=A.empty,d=0;for(let h=i,m=!1;h>t;h--)m||n.index(h)>0?(m=!0,u=A.from(n.node(h).copy(u)),d++):l--;let p=A.empty,c=0;for(let h=i,m=!1;h>t;h--)m||o.after(h+1)<o.end(h)?(m=!0,p=A.from(o.node(h).copy(p)),c++):f++;r.step(new qe(l,f,s,a,new L(u.append(p),d,c),u.size-d,!0))}function ii(r,e,t=null,n=r){let o=mk(r,e),i=o&&gk(n,e);return i?o.map(xh).concat({type:e,attrs:t}).concat(i.map(xh)):null}function xh(r){return{type:r,attrs:null}}function mk(r,e){let{parent:t,startIndex:n,endIndex:o}=r,i=t.contentMatchAt(n).findWrapping(e);if(!i)return null;let s=i.length?i[0]:e;return t.canReplaceWith(n,o,s)?i:null}function gk(r,e){let{parent:t,startIndex:n,endIndex:o}=r,i=t.child(n),s=e.contentMatch.findWrapping(i.type);if(!s)return null;let l=(s.length?s[s.length-1]:e).contentMatch;for(let f=n;l&&f<o;f++)l=l.matchType(t.child(f).type);return!l||!l.validEnd?null:s}function xk(r,e,t){let n=A.empty;for(let s=t.length-1;s>=0;s--){if(n.size){let a=t[s].type.contentMatch.matchFragment(n);if(!a||!a.validEnd)throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper")}n=A.from(t[s].type.create(t[s].attrs,n))}let o=e.start,i=e.end;r.step(new qe(o,i,o,i,new L(n,0,0),t.length,!0))}function yk(r,e,t,n,o){if(!n.isTextblock)throw new RangeError("Type given to setBlockType should be a textblock");let i=r.steps.length;r.doc.nodesBetween(e,t,(s,a)=>{let l=typeof o=="function"?o(s):o;if(s.isTextblock&&!s.hasMarkup(n,l)&&bk(r.doc,r.mapping.slice(i).map(a),n)){let f=null;if(n.schema.linebreakReplacement){let c=n.whitespace=="pre",h=!!n.contentMatch.matchType(n.schema.linebreakReplacement);c&&!h?f=!1:!c&&h&&(f=!0)}f===!1&&wh(r,s,a,i),au(r,r.mapping.slice(i).map(a,1),n,void 0,f===null);let u=r.mapping.slice(i),d=u.map(a,1),p=u.map(a+s.nodeSize,1);return r.step(new qe(d,p,d+1,p-1,new L(A.from(n.create(l,null,s.marks)),0,0),1,!0)),f===!0&&vh(r,s,a,i),!1}})}function vh(r,e,t,n){e.forEach((o,i)=>{if(o.isText){let s,a=/\r?\n|\r/g;for(;s=a.exec(o.text);){let l=r.mapping.slice(n).map(t+1+i+s.index);r.replaceWith(l,l+1,e.type.schema.linebreakReplacement.create())}}})}function wh(r,e,t,n){e.forEach((o,i)=>{if(o.type==o.type.schema.linebreakReplacement){let s=r.mapping.slice(n).map(t+1+i);r.replaceWith(s,s+1,e.type.schema.text(`
`))}})}function bk(r,e,t){let n=r.resolve(e),o=n.index();return n.parent.canReplaceWith(o,o+1,t)}function kk(r,e,t,n,o){let i=r.doc.nodeAt(e);if(!i)throw new RangeError("No node at given position");t||(t=i.type);let s=t.create(n,null,o||i.marks);if(i.isLeaf)return r.replaceWith(e,e+i.nodeSize,s);if(!t.validContent(i.content))throw new RangeError("Invalid content for node type "+t.name);r.step(new qe(e,e+i.nodeSize,e+1,e+i.nodeSize-1,new L(A.from(s),0,0),1,!0))}function nr(r,e,t=1,n){let o=r.resolve(e),i=o.depth-t,s=n&&n[n.length-1]||o.parent;if(i<0||o.parent.type.spec.isolating||!o.parent.canReplace(o.index(),o.parent.childCount)||!s.type.validContent(o.parent.content.cutByIndex(o.index(),o.parent.childCount)))return!1;for(let f=o.depth-1,u=t-2;f>i;f--,u--){let d=o.node(f),p=o.index(f);if(d.type.spec.isolating)return!1;let c=d.content.cutByIndex(p,d.childCount),h=n&&n[u+1];h&&(c=c.replaceChild(0,h.type.create(h.attrs)));let m=n&&n[u]||d;if(!d.canReplace(p+1,d.childCount)||!m.type.validContent(c))return!1}let a=o.indexAfter(i),l=n&&n[0];return o.node(i).canReplaceWith(a,a,l?l.type:o.node(i+1).type)}function Sk(r,e,t=1,n){let o=r.doc.resolve(e),i=A.empty,s=A.empty;for(let a=o.depth,l=o.depth-t,f=t-1;a>l;a--,f--){i=A.from(o.node(a).copy(i));let u=n&&n[f];s=A.from(u?u.type.create(u.attrs,s):o.node(a).copy(s))}r.step(new st(e,e,new L(i.append(s),t,t),!0))}function hr(r,e){let t=r.resolve(e),n=t.index();return _h(t.nodeBefore,t.nodeAfter)&&t.parent.canReplace(n,n+1)}function Ck(r,e){e.content.size||r.type.compatibleContent(e.type);let t=r.contentMatchAt(r.childCount),{linebreakReplacement:n}=r.type.schema;for(let o=0;o<e.childCount;o++){let i=e.child(o),s=i.type==n?r.type.schema.nodes.text:i.type;if(t=t.matchType(s),!t||!r.type.allowsMarks(i.marks))return!1}return t.validEnd}function _h(r,e){return!!(r&&e&&!r.isLeaf&&Ck(r,e))}function go(r,e,t=-1){let n=r.resolve(e);for(let o=n.depth;;o--){let i,s,a=n.index(o);if(o==n.depth?(i=n.nodeBefore,s=n.nodeAfter):t>0?(i=n.node(o+1),a++,s=n.node(o).maybeChild(a)):(i=n.node(o).maybeChild(a-1),s=n.node(o+1)),i&&!i.isTextblock&&_h(i,s)&&n.node(o).canReplace(a,a+1))return e;if(o==0)break;e=t<0?n.before(o):n.after(o)}}function vk(r,e,t){let n=null,{linebreakReplacement:o}=r.doc.type.schema,i=r.doc.resolve(e-t),s=i.node().type;if(o&&s.inlineContent){let u=s.whitespace=="pre",d=!!s.contentMatch.matchType(o);u&&!d?n=!1:!u&&d&&(n=!0)}let a=r.steps.length;if(n===!1){let u=r.doc.resolve(e+t);wh(r,u.node(),u.before(),a)}s.inlineContent&&au(r,e+t-1,s,i.node().contentMatchAt(i.index()),n==null);let l=r.mapping.slice(a),f=l.map(e-t);if(r.step(new st(f,l.map(e+t,-1),L.empty,!0)),n===!0){let u=r.doc.resolve(f);vh(r,u.node(),u.before(),r.steps.length)}return r}function wk(r,e,t){let n=r.resolve(e);if(n.parent.canReplaceWith(n.index(),n.index(),t))return e;if(n.parentOffset==0)for(let o=n.depth-1;o>=0;o--){let i=n.index(o);if(n.node(o).canReplaceWith(i,i,t))return n.before(o+1);if(i>0)return null}if(n.parentOffset==n.parent.content.size)for(let o=n.depth-1;o>=0;o--){let i=n.indexAfter(o);if(n.node(o).canReplaceWith(i,i,t))return n.after(o+1);if(i<n.node(o).childCount)return null}return null}function Aa(r,e,t){let n=r.resolve(e);if(!t.content.size)return e;let o=t.content;for(let i=0;i<t.openStart;i++)o=o.firstChild.content;for(let i=1;i<=(t.openStart==0&&t.size?2:1);i++)for(let s=n.depth;s>=0;s--){let a=s==n.depth?0:n.pos<=(n.start(s+1)+n.end(s+1))/2?-1:1,l=n.index(s)+(a>0?1:0),f=n.node(s),u=!1;if(i==1)u=f.canReplace(l,l,o);else{let d=f.contentMatchAt(l).findWrapping(o.firstChild.type);u=d&&f.canReplaceWith(l,l,d[0])}if(u)return a==0?n.pos:a<0?n.before(s+1):n.after(s+1)}return null}function is(r,e,t=e,n=L.empty){if(e==t&&!n.size)return null;let o=r.resolve(e),i=r.resolve(t);return Th(o,i,n)?new st(e,t,n):new iu(o,i,n).fit()}function Th(r,e,t){return!t.openStart&&!t.openEnd&&r.start()==e.start()&&r.parent.canReplace(r.index(),e.index(),t.content)}var iu=class{constructor(e,t,n){this.$from=e,this.$to=t,this.unplaced=n,this.frontier=[],this.placed=A.empty;for(let o=0;o<=e.depth;o++){let i=e.node(o);this.frontier.push({type:i.type,match:i.contentMatchAt(e.indexAfter(o))})}for(let o=e.depth;o>0;o--)this.placed=A.from(e.node(o).copy(this.placed))}get depth(){return this.frontier.length-1}fit(){for(;this.unplaced.size;){let f=this.findFittable();f?this.placeNodes(f):this.openMore()||this.dropNode()}let e=this.mustMoveInline(),t=this.placed.size-this.depth-this.$from.depth,n=this.$from,o=this.close(e<0?this.$to:n.doc.resolve(e));if(!o)return null;let i=this.placed,s=n.depth,a=o.depth;for(;s&&a&&i.childCount==1;)i=i.firstChild.content,s--,a--;let l=new L(i,s,a);return e>-1?new qe(n.pos,e,this.$to.pos,this.$to.end(),l,t):l.size||n.pos!=this.$to.pos?new st(n.pos,o.pos,l):null}findFittable(){let e=this.unplaced.openStart;for(let t=this.unplaced.content,n=0,o=this.unplaced.openEnd;n<e;n++){let i=t.firstChild;if(t.childCount>1&&(o=0),i.type.spec.isolating&&o<=n){e=n;break}t=i.content}for(let t=1;t<=2;t++)for(let n=t==1?e:this.unplaced.openStart;n>=0;n--){let o,i=null;n?(i=ru(this.unplaced.content,n-1).firstChild,o=i.content):o=this.unplaced.content;let s=o.firstChild;for(let a=this.depth;a>=0;a--){let{type:l,match:f}=this.frontier[a],u,d=null;if(t==1&&(s?f.matchType(s.type)||(d=f.fillBefore(A.from(s),!1)):i&&l.compatibleContent(i.type)))return{sliceDepth:n,frontierDepth:a,parent:i,inject:d};if(t==2&&s&&(u=f.findWrapping(s.type)))return{sliceDepth:n,frontierDepth:a,parent:i,wrap:u};if(i&&f.matchType(i.type))break}}}openMore(){let{content:e,openStart:t,openEnd:n}=this.unplaced,o=ru(e,t);return!o.childCount||o.firstChild.isLeaf?!1:(this.unplaced=new L(e,t+1,Math.max(n,o.size+t>=e.size-n?t+1:0)),!0)}dropNode(){let{content:e,openStart:t,openEnd:n}=this.unplaced,o=ru(e,t);if(o.childCount<=1&&t>0){let i=e.size-t<=t+o.size;this.unplaced=new L(Qi(e,t-1,1),t-1,i?t-1:n)}else this.unplaced=new L(Qi(e,t,1),t,n)}placeNodes({sliceDepth:e,frontierDepth:t,parent:n,inject:o,wrap:i}){for(;this.depth>t;)this.closeFrontierNode();if(i)for(let m=0;m<i.length;m++)this.openFrontierNode(i[m]);let s=this.unplaced,a=n?n.content:s.content,l=s.openStart-e,f=0,u=[],{match:d,type:p}=this.frontier[t];if(o){for(let m=0;m<o.childCount;m++)u.push(o.child(m));d=d.matchFragment(o)}let c=a.size+e-(s.content.size-s.openEnd);for(;f<a.childCount;){let m=a.child(f),g=d.matchType(m.type);if(!g)break;f++,(f>1||l==0||m.content.size)&&(d=g,u.push(Mh(m.mark(p.allowedMarks(m.marks)),f==1?l:0,f==a.childCount?c:-1)))}let h=f==a.childCount;h||(c=-1),this.placed=Zi(this.placed,t,A.from(u)),this.frontier[t].match=d,h&&c<0&&n&&n.type==this.frontier[this.depth].type&&this.frontier.length>1&&this.closeFrontierNode();for(let m=0,g=a;m<c;m++){let x=g.lastChild;this.frontier.push({type:x.type,match:x.contentMatchAt(x.childCount)}),g=x.content}this.unplaced=h?e==0?L.empty:new L(Qi(s.content,e-1,1),e-1,c<0?s.openEnd:e-1):new L(Qi(s.content,e,f),s.openStart,s.openEnd)}mustMoveInline(){if(!this.$to.parent.isTextblock)return-1;let e=this.frontier[this.depth],t;if(!e.type.isTextblock||!nu(this.$to,this.$to.depth,e.type,e.match,!1)||this.$to.depth==this.depth&&(t=this.findCloseLevel(this.$to))&&t.depth==this.depth)return-1;let{depth:n}=this.$to,o=this.$to.after(n);for(;n>1&&o==this.$to.end(--n);)++o;return o}findCloseLevel(e){e:for(let t=Math.min(this.depth,e.depth);t>=0;t--){let{match:n,type:o}=this.frontier[t],i=t<e.depth&&e.end(t+1)==e.pos+(e.depth-(t+1)),s=nu(e,t,o,n,i);if(s){for(let a=t-1;a>=0;a--){let{match:l,type:f}=this.frontier[a],u=nu(e,a,f,l,!0);if(!u||u.childCount)continue e}return{depth:t,fit:s,move:i?e.doc.resolve(e.after(t+1)):e}}}}close(e){let t=this.findCloseLevel(e);if(!t)return null;for(;this.depth>t.depth;)this.closeFrontierNode();t.fit.childCount&&(this.placed=Zi(this.placed,t.depth,t.fit)),e=t.move;for(let n=t.depth+1;n<=e.depth;n++){let o=e.node(n),i=o.type.contentMatch.fillBefore(o.content,!0,e.index(n));this.openFrontierNode(o.type,o.attrs,i)}return e}openFrontierNode(e,t=null,n){let o=this.frontier[this.depth];o.match=o.match.matchType(e),this.placed=Zi(this.placed,this.depth,A.from(e.create(t,n))),this.frontier.push({type:e,match:e.contentMatch})}closeFrontierNode(){let t=this.frontier.pop().match.fillBefore(A.empty,!0);t.childCount&&(this.placed=Zi(this.placed,this.frontier.length,t))}};function Qi(r,e,t){return e==0?r.cutByIndex(t,r.childCount):r.replaceChild(0,r.firstChild.copy(Qi(r.firstChild.content,e-1,t)))}function Zi(r,e,t){return e==0?r.append(t):r.replaceChild(r.childCount-1,r.lastChild.copy(Zi(r.lastChild.content,e-1,t)))}function ru(r,e){for(let t=0;t<e;t++)r=r.firstChild.content;return r}function Mh(r,e,t){if(e<=0)return r;let n=r.content;return e>1&&(n=n.replaceChild(0,Mh(n.firstChild,e-1,n.childCount==1?t-1:0))),e>0&&(n=r.type.contentMatch.fillBefore(n).append(n),t<=0&&(n=n.append(r.type.contentMatch.matchFragment(n).fillBefore(A.empty,!0)))),r.copy(n)}function nu(r,e,t,n,o){let i=r.node(e),s=o?r.indexAfter(e):r.index(e);if(s==i.childCount&&!t.compatibleContent(i.type))return null;let a=n.fillBefore(i.content,!0,s);return a&&!_k(t,i.content,s)?a:null}function _k(r,e,t){for(let n=t;n<e.childCount;n++)if(!r.allowsMarks(e.child(n).marks))return!0;return!1}function Tk(r){return r.spec.defining||r.spec.definingForContent}function Mk(r,e,t,n){if(!n.size)return r.deleteRange(e,t);let o=r.doc.resolve(e),i=r.doc.resolve(t);if(Th(o,i,n))return r.step(new st(e,t,n));let s=Ah(o,i);s[s.length-1]==0&&s.pop();let a=-(o.depth+1);s.unshift(a);for(let p=o.depth,c=o.pos-1;p>0;p--,c--){let h=o.node(p).type.spec;if(h.defining||h.definingAsContext||h.isolating)break;s.indexOf(p)>-1?a=p:o.before(p)==c&&s.splice(1,0,-p)}let l=s.indexOf(a),f=[],u=n.openStart;for(let p=n.content,c=0;;c++){let h=p.firstChild;if(f.push(h),c==n.openStart)break;p=h.content}for(let p=u-1;p>=0;p--){let c=f[p],h=Tk(c.type);if(h&&!c.sameMarkup(o.node(Math.abs(a)-1)))u=p;else if(h||!c.type.isTextblock)break}for(let p=n.openStart;p>=0;p--){let c=(p+u+1)%(n.openStart+1),h=f[c];if(h)for(let m=0;m<s.length;m++){let g=s[(m+l)%s.length],x=!0;g<0&&(x=!1,g=-g);let y=o.node(g-1),k=o.index(g-1);if(y.canReplaceWith(k,k,h.type,h.marks))return r.replace(o.before(g),x?i.after(g):t,new L(Eh(n.content,0,n.openStart,c),c,n.openEnd))}}let d=r.steps.length;for(let p=s.length-1;p>=0&&(r.replace(e,t,n),!(r.steps.length>d));p--){let c=s[p];c<0||(e=o.before(c),t=i.after(c))}}function Eh(r,e,t,n,o){if(e<t){let i=r.firstChild;r=r.replaceChild(0,i.copy(Eh(i.content,e+1,t,n,i)))}if(e>n){let i=o.contentMatchAt(0),s=i.fillBefore(r).append(r);r=s.append(i.matchFragment(s).fillBefore(A.empty,!0))}return r}function Ek(r,e,t,n){if(!n.isInline&&e==t&&r.doc.resolve(e).parent.content.size){let o=wk(r.doc,e,n.type);o!=null&&(e=t=o)}r.replaceRange(e,t,new L(A.from(n),0,0))}function Ak(r,e,t){let n=r.doc.resolve(e),o=r.doc.resolve(t);if(n.parent.isTextblock&&o.parent.isTextblock&&n.start()!=o.start()&&n.parentOffset==0&&o.parentOffset==0){let s=n.sharedDepth(t),a=!1;for(let l=n.depth;l>s;l--)n.node(l).type.spec.isolating&&(a=!0);for(let l=o.depth;l>s;l--)o.node(l).type.spec.isolating&&(a=!0);if(!a){for(let l=n.depth;l>0&&e==n.start(l);l--)e=n.before(l);for(let l=o.depth;l>0&&t==o.start(l);l--)t=o.before(l);n=r.doc.resolve(e),o=r.doc.resolve(t)}}let i=Ah(n,o);for(let s=0;s<i.length;s++){let a=i[s],l=s==i.length-1;if(l&&a==0||n.node(a).type.contentMatch.validEnd)return r.delete(n.start(a),o.end(a));if(a>0&&(l||n.node(a-1).canReplace(n.index(a-1),o.indexAfter(a-1))))return r.delete(n.before(a),o.after(a))}for(let s=1;s<=n.depth&&s<=o.depth;s++)if(e-n.start(s)==n.depth-s&&t>n.end(s)&&o.end(s)-t!=o.depth-s&&n.start(s-1)==o.start(s-1)&&n.node(s-1).canReplace(n.index(s-1),o.index(s-1)))return r.delete(n.before(s),t);r.delete(e,t)}function Ah(r,e){let t=[],n=Math.min(r.depth,e.depth);for(let o=n;o>=0;o--){let i=r.start(o);if(i<r.pos-(r.depth-o)||e.end(o)>e.pos+(e.depth-o)||r.node(o).type.spec.isolating||e.node(o).type.spec.isolating)break;(i==e.start(o)||o==r.depth&&o==e.depth&&r.parent.inlineContent&&e.parent.inlineContent&&o&&e.start(o-1)==i-1)&&t.push(o)}return t}var Ma=class r extends Qe{constructor(e,t,n){super(),this.pos=e,this.attr=t,this.value=n}apply(e){let t=e.nodeAt(this.pos);if(!t)return it.fail("No node at attribute step's position");let n=Object.create(null);for(let i in t.attrs)n[i]=t.attrs[i];n[this.attr]=this.value;let o=t.type.create(n,null,t.marks);return it.fromReplace(e,this.pos,this.pos+1,new L(A.from(o),0,t.isLeaf?0:1))}getMap(){return fn.empty}invert(e){return new r(this.pos,this.attr,e.nodeAt(this.pos).attrs[this.attr])}map(e){let t=e.mapResult(this.pos,1);return t.deletedAfter?null:new r(t.pos,this.attr,this.value)}toJSON(){return{stepType:"attr",pos:this.pos,attr:this.attr,value:this.value}}static fromJSON(e,t){if(typeof t.pos!="number"||typeof t.attr!="string")throw new RangeError("Invalid input for AttrStep.fromJSON");return new r(t.pos,t.attr,t.value)}};Qe.jsonID("attr",Ma);var Ea=class r extends Qe{constructor(e,t){super(),this.attr=e,this.value=t}apply(e){let t=Object.create(null);for(let o in e.attrs)t[o]=e.attrs[o];t[this.attr]=this.value;let n=e.type.create(t,e.content,e.marks);return it.ok(n)}getMap(){return fn.empty}invert(e){return new r(this.attr,e.attrs[this.attr])}map(e){return this}toJSON(){return{stepType:"docAttr",attr:this.attr,value:this.value}}static fromJSON(e,t){if(typeof t.attr!="string")throw new RangeError("Invalid input for DocAttrStep.fromJSON");return new r(t.attr,t.value)}};Qe.jsonID("docAttr",Ea);var ni=class extends Error{};ni=function r(e){let t=Error.call(this,e);return t.__proto__=r.prototype,t};ni.prototype=Object.create(Error.prototype);ni.prototype.constructor=ni;ni.prototype.name="TransformError";var oi=class{constructor(e){this.doc=e,this.steps=[],this.docs=[],this.mapping=new ts}get before(){return this.docs.length?this.docs[0]:this.doc}step(e){let t=this.maybeStep(e);if(t.failed)throw new ni(t.failed);return this}maybeStep(e){let t=e.apply(this.doc);return t.failed||this.addStep(e,t.doc),t}get docChanged(){return this.steps.length>0}changedRange(){let e=1e9,t=-1e9;for(let n=0;n<this.mapping.maps.length;n++){let o=this.mapping.maps[n];n&&(e=o.map(e,1),t=o.map(t,-1)),o.forEach((i,s,a,l)=>{e=Math.min(e,a),t=Math.max(t,l)})}return e==1e9?null:{from:e,to:t}}addStep(e,t){this.docs.push(this.doc),this.steps.push(e),this.mapping.appendMap(e.getMap()),this.doc=t}replace(e,t=e,n=L.empty){let o=is(this.doc,e,t,n);return o&&this.step(o),this}replaceWith(e,t,n){return this.replace(e,t,new L(A.from(n),0,0))}delete(e,t){return this.replace(e,t,L.empty)}insert(e,t){return this.replaceWith(e,e,t)}replaceRange(e,t,n){return Mk(this,e,t,n),this}replaceRangeWith(e,t,n){return Ek(this,e,t,n),this}deleteRange(e,t){return Ak(this,e,t),this}lift(e,t){return hk(this,e,t),this}join(e,t=1){return vk(this,e,t),this}wrap(e,t){return xk(this,e,t),this}setBlockType(e,t=e,n,o=null){return yk(this,e,t,n,o),this}setNodeMarkup(e,t,n=null,o){return kk(this,e,t,n,o),this}setNodeAttribute(e,t,n){return this.step(new Ma(e,t,n)),this}setDocAttribute(e,t){return this.step(new Ea(e,t)),this}addNodeMark(e,t){return this.step(new ns(e,t)),this}removeNodeMark(e,t){let n=this.doc.nodeAt(e);if(!n)throw new RangeError("No node at position "+e);if(t instanceof fe)t.isInSet(n.marks)&&this.step(new ri(e,t));else{let o=n.marks,i,s=[];for(;i=t.isInSet(o);)s.push(new ri(e,i)),o=i.removeFromSet(o);for(let a=s.length-1;a>=0;a--)this.step(s[a])}return this}split(e,t=1,n){return Sk(this,e,t,n),this}addMark(e,t,n){return dk(this,e,t,n),this}removeMark(e,t,n){return ck(this,e,t,n),this}clearIncompatible(e,t,n){return au(this,e,t,n),this}};var lu=Object.create(null),W=class{constructor(e,t,n){this.$anchor=e,this.$head=t,this.ranges=n||[new Oa(e.min(t),e.max(t))]}get anchor(){return this.$anchor.pos}get head(){return this.$head.pos}get from(){return this.$from.pos}get to(){return this.$to.pos}get $from(){return this.ranges[0].$from}get $to(){return this.ranges[0].$to}get empty(){let e=this.ranges;for(let t=0;t<e.length;t++)if(e[t].$from.pos!=e[t].$to.pos)return!1;return!0}content(){return this.$from.doc.slice(this.from,this.to,!0)}replace(e,t=L.empty){let n=t.content.lastChild,o=null;for(let a=0;a<t.openEnd;a++)o=n,n=n.lastChild;let i=e.steps.length,s=this.ranges;for(let a=0;a<s.length;a++){let{$from:l,$to:f}=s[a],u=e.mapping.slice(i);e.replaceRange(u.map(l.pos),u.map(f.pos),a?L.empty:t),a==0&&Dh(e,i,(n?n.isInline:o&&o.isTextblock)?-1:1)}}replaceWith(e,t){let n=e.steps.length,o=this.ranges;for(let i=0;i<o.length;i++){let{$from:s,$to:a}=o[i],l=e.mapping.slice(n),f=l.map(s.pos),u=l.map(a.pos);i?e.deleteRange(f,u):(e.replaceRangeWith(f,u,t),Dh(e,n,t.isInline?-1:1))}}static findFrom(e,t,n=!1){let o=e.parent.inlineContent?new V(e):si(e.node(0),e.parent,e.pos,e.index(),t,n);if(o)return o;for(let i=e.depth-1;i>=0;i--){let s=t<0?si(e.node(0),e.node(i),e.before(i+1),e.index(i),t,n):si(e.node(0),e.node(i),e.after(i+1),e.index(i)+1,t,n);if(s)return s}return null}static near(e,t=1){return this.findFrom(e,t)||this.findFrom(e,-t)||new Nt(e.node(0))}static atStart(e){return si(e,e,0,0,1)||new Nt(e)}static atEnd(e){return si(e,e,e.content.size,e.childCount,-1)||new Nt(e)}static fromJSON(e,t){if(!t||!t.type)throw new RangeError("Invalid input for Selection.fromJSON");let n=lu[t.type];if(!n)throw new RangeError(`No selection type ${t.type} defined`);return n.fromJSON(e,t)}static jsonID(e,t){if(e in lu)throw new RangeError("Duplicate use of selection JSON ID "+e);return lu[e]=t,t.prototype.jsonID=e,t}getBookmark(){return V.between(this.$anchor,this.$head).getBookmark()}};W.prototype.visible=!0;var Oa=class{constructor(e,t){this.$from=e,this.$to=t}},Ph=!1;function Oh(r){!Ph&&!r.parent.inlineContent&&(Ph=!0,console.warn("TextSelection endpoint not pointing into a node with inline content ("+r.parent.type.name+")"))}var V=class r extends W{constructor(e,t=e){Oh(e),Oh(t),super(e,t)}get $cursor(){return this.$anchor.pos==this.$head.pos?this.$head:null}map(e,t){let n=e.resolve(t.map(this.head));if(!n.parent.inlineContent)return W.near(n);let o=e.resolve(t.map(this.anchor));return new r(o.parent.inlineContent?o:n,n)}replace(e,t=L.empty){if(super.replace(e,t),t==L.empty){let n=this.$from.marksAcross(this.$to);n&&e.ensureMarks(n)}}eq(e){return e instanceof r&&e.anchor==this.anchor&&e.head==this.head}getBookmark(){return new Da(this.anchor,this.head)}toJSON(){return{type:"text",anchor:this.anchor,head:this.head}}static fromJSON(e,t){if(typeof t.anchor!="number"||typeof t.head!="number")throw new RangeError("Invalid input for TextSelection.fromJSON");return new r(e.resolve(t.anchor),e.resolve(t.head))}static create(e,t,n=t){let o=e.resolve(t);return new this(o,n==t?o:e.resolve(n))}static between(e,t,n){let o=e.pos-t.pos;if((!n||o)&&(n=o>=0?1:-1),!t.parent.inlineContent){let i=W.findFrom(t,n,!0)||W.findFrom(t,-n,!0);if(i)t=i.$head;else return W.near(t,n)}return e.parent.inlineContent||(o==0?e=t:(e=(W.findFrom(e,-n,!0)||W.findFrom(e,n,!0)).$anchor,e.pos<t.pos!=o<0&&(e=t))),new r(e,t)}};W.jsonID("text",V);var Da=class r{constructor(e,t){this.anchor=e,this.head=t}map(e){return new r(e.map(this.anchor),e.map(this.head))}resolve(e){return V.between(e.resolve(this.anchor),e.resolve(this.head))}},F=class r extends W{constructor(e){let t=e.nodeAfter,n=e.node(0).resolve(e.pos+t.nodeSize);super(e,n),this.node=t}map(e,t){let{deleted:n,pos:o}=t.mapResult(this.anchor),i=e.resolve(o);return n?W.near(i):new r(i)}content(){return new L(A.from(this.node),0,0)}eq(e){return e instanceof r&&e.anchor==this.anchor}toJSON(){return{type:"node",anchor:this.anchor}}getBookmark(){return new uu(this.anchor)}static fromJSON(e,t){if(typeof t.anchor!="number")throw new RangeError("Invalid input for NodeSelection.fromJSON");return new r(e.resolve(t.anchor))}static create(e,t){return new r(e.resolve(t))}static isSelectable(e){return!e.isText&&e.type.spec.selectable!==!1}};F.prototype.visible=!1;W.jsonID("node",F);var uu=class r{constructor(e){this.anchor=e}map(e){let{deleted:t,pos:n}=e.mapResult(this.anchor);return t?new Da(n,n):new r(n)}resolve(e){let t=e.resolve(this.anchor),n=t.nodeAfter;return n&&F.isSelectable(n)?new F(t):W.near(t)}},Nt=class r extends W{constructor(e){super(e.resolve(0),e.resolve(e.content.size))}replace(e,t=L.empty){if(t==L.empty){e.delete(0,e.doc.content.size);let n=W.atStart(e.doc);n.eq(e.selection)||e.setSelection(n)}else super.replace(e,t)}toJSON(){return{type:"all"}}static fromJSON(e){return new r(e)}map(e){return new r(e)}eq(e){return e instanceof r}getBookmark(){return Pk}};W.jsonID("all",Nt);var Pk={map(){return this},resolve(r){return new Nt(r)}};function si(r,e,t,n,o,i=!1){if(e.inlineContent)return V.create(r,t);for(let s=n-(o>0?0:1);o>0?s<e.childCount:s>=0;s+=o){let a=e.child(s);if(a.isAtom){if(!i&&F.isSelectable(a))return F.create(r,t-(o<0?a.nodeSize:0))}else{let l=si(r,a,t+o,o<0?a.childCount:0,o,i);if(l)return l}t+=a.nodeSize*o}return null}function Dh(r,e,t){let n=r.steps.length-1;if(n<e)return;let o=r.steps[n];if(!(o instanceof st||o instanceof qe))return;let i=r.mapping.maps[n],s;i.forEach((a,l,f,u)=>{s==null&&(s=u)}),r.setSelection(W.near(r.doc.resolve(s),t))}var Lh=1,Pa=2,Nh=4,du=class extends oi{constructor(e){super(e.doc),this.curSelectionFor=0,this.updated=0,this.meta=Object.create(null),this.time=Date.now(),this.curSelection=e.selection,this.storedMarks=e.storedMarks}get selection(){return this.curSelectionFor<this.steps.length&&(this.curSelection=this.curSelection.map(this.doc,this.mapping.slice(this.curSelectionFor)),this.curSelectionFor=this.steps.length),this.curSelection}setSelection(e){if(e.$from.doc!=this.doc)throw new RangeError("Selection passed to setSelection must point at the current document");return this.curSelection=e,this.curSelectionFor=this.steps.length,this.updated=(this.updated|Lh)&~Pa,this.storedMarks=null,this}get selectionSet(){return(this.updated&Lh)>0}setStoredMarks(e){return this.storedMarks=e,this.updated|=Pa,this}ensureMarks(e){return fe.sameSet(this.storedMarks||this.selection.$from.marks(),e)||this.setStoredMarks(e),this}addStoredMark(e){return this.ensureMarks(e.addToSet(this.storedMarks||this.selection.$head.marks()))}removeStoredMark(e){return this.ensureMarks(e.removeFromSet(this.storedMarks||this.selection.$head.marks()))}get storedMarksSet(){return(this.updated&Pa)>0}addStep(e,t){super.addStep(e,t),this.updated=this.updated&~Pa,this.storedMarks=null}setTime(e){return this.time=e,this}replaceSelection(e){return this.selection.replace(this,e),this}replaceSelectionWith(e,t=!0){let n=this.selection;return t&&(e=e.mark(this.storedMarks||(n.empty?n.$from.marks():n.$from.marksAcross(n.$to)||fe.none))),n.replaceWith(this,e),this}deleteSelection(){return this.selection.replace(this),this}insertText(e,t,n){let o=this.doc.type.schema;if(t==null)return e?this.replaceSelectionWith(o.text(e),!0):this.deleteSelection();{if(n==null&&(n=t),!e)return this.deleteRange(t,n);let i=this.storedMarks;if(!i){let s=this.doc.resolve(t);i=n==t?s.marks():s.marksAcross(this.doc.resolve(n))}return this.replaceRangeWith(t,n,o.text(e,i)),!this.selection.empty&&this.selection.to==t+e.length&&this.setSelection(W.near(this.selection.$to)),this}}setMeta(e,t){return this.meta[typeof e=="string"?e:e.key]=t,this}getMeta(e){return this.meta[typeof e=="string"?e:e.key]}get isGeneric(){for(let e in this.meta)return!1;return!0}scrollIntoView(){return this.updated|=Nh,this}get scrolledIntoView(){return(this.updated&Nh)>0}};function Rh(r,e){return!e||!r?r:r.bind(e)}var xo=class{constructor(e,t,n){this.name=e,this.init=Rh(t.init,n),this.apply=Rh(t.apply,n)}},Ok=[new xo("doc",{init(r){return r.doc||r.schema.topNodeType.createAndFill()},apply(r){return r.doc}}),new xo("selection",{init(r,e){return r.selection||W.atStart(e.doc)},apply(r){return r.selection}}),new xo("storedMarks",{init(r){return r.storedMarks||null},apply(r,e,t,n){return n.selection.$cursor?r.storedMarks:null}}),new xo("scrollToSelection",{init(){return 0},apply(r,e){return r.scrolledIntoView?e+1:e}})],ss=class{constructor(e,t){this.schema=e,this.plugins=[],this.pluginsByKey=Object.create(null),this.fields=Ok.slice(),t&&t.forEach(n=>{if(this.pluginsByKey[n.key])throw new RangeError("Adding different instances of a keyed plugin ("+n.key+")");this.plugins.push(n),this.pluginsByKey[n.key]=n,n.spec.state&&this.fields.push(new xo(n.key,n.spec.state,n))})}},La=class r{constructor(e){this.config=e}get schema(){return this.config.schema}get plugins(){return this.config.plugins}apply(e){return this.applyTransaction(e).state}filterTransaction(e,t=-1){for(let n=0;n<this.config.plugins.length;n++)if(n!=t){let o=this.config.plugins[n];if(o.spec.filterTransaction&&!o.spec.filterTransaction.call(o,e,this))return!1}return!0}applyTransaction(e){if(!this.filterTransaction(e))return{state:this,transactions:[]};let t=[e],n=this.applyInner(e),o=null;for(;;){let i=!1;for(let s=0;s<this.config.plugins.length;s++){let a=this.config.plugins[s];if(a.spec.appendTransaction){let l=o?o[s].n:0,f=o?o[s].state:this,u=l<t.length&&a.spec.appendTransaction.call(a,l?t.slice(l):t,f,n);if(u&&n.filterTransaction(u,s)){if(u.setMeta("appendedTransaction",e),!o){o=[];for(let d=0;d<this.config.plugins.length;d++)o.push(d<s?{state:n,n:t.length}:{state:this,n:0})}t.push(u),n=n.applyInner(u),i=!0}o&&(o[s]={state:n,n:t.length})}}if(!i)return{state:n,transactions:t}}}applyInner(e){if(!e.before.eq(this.doc))throw new RangeError("Applying a mismatched transaction");let t=new r(this.config),n=this.config.fields;for(let o=0;o<n.length;o++){let i=n[o];t[i.name]=i.apply(e,this[i.name],this,t)}return t}get tr(){return new du(this)}static create(e){let t=new ss(e.doc?e.doc.type.schema:e.schema,e.plugins),n=new r(t);for(let o=0;o<t.fields.length;o++)n[t.fields[o].name]=t.fields[o].init(e,n);return n}reconfigure(e){let t=new ss(this.schema,e.plugins),n=t.fields,o=new r(t);for(let i=0;i<n.length;i++){let s=n[i].name;o[s]=this.hasOwnProperty(s)?this[s]:n[i].init(e,o)}return o}toJSON(e){let t={doc:this.doc.toJSON(),selection:this.selection.toJSON()};if(this.storedMarks&&(t.storedMarks=this.storedMarks.map(n=>n.toJSON())),e&&typeof e=="object")for(let n in e){if(n=="doc"||n=="selection")throw new RangeError("The JSON fields `doc` and `selection` are reserved");let o=e[n],i=o.spec.state;i&&i.toJSON&&(t[n]=i.toJSON.call(o,this[o.key]))}return t}static fromJSON(e,t,n){if(!t)throw new RangeError("Invalid input for EditorState.fromJSON");if(!e.schema)throw new RangeError("Required config field 'schema' missing");let o=new ss(e.schema,e.plugins),i=new r(o);return o.fields.forEach(s=>{if(s.name=="doc")i.doc=Kt.fromJSON(e.schema,t.doc);else if(s.name=="selection")i.selection=W.fromJSON(i.doc,t.selection);else if(s.name=="storedMarks")t.storedMarks&&(i.storedMarks=t.storedMarks.map(e.schema.markFromJSON));else{if(n)for(let a in n){let l=n[a],f=l.spec.state;if(l.key==s.name&&f&&f.fromJSON&&Object.prototype.hasOwnProperty.call(t,a)){i[s.name]=f.fromJSON.call(l,e,t[a],i);return}}i[s.name]=s.init(e,i)}}),i}};function Ih(r,e,t){for(let n in r){let o=r[n];o instanceof Function?o=o.bind(e):n=="handleDOMEvents"&&(o=Ih(o,e,{})),t[n]=o}return t}var K=class{constructor(e){this.spec=e,this.props={},e.props&&Ih(e.props,this,this.props),this.key=e.key?e.key.key:Bh("plugin")}getState(e){return e[this.key]}},fu=Object.create(null);function Bh(r){return r in fu?r+"$"+ ++fu[r]:(fu[r]=0,r+"$")}var Z=class{constructor(e="key"){this.key=Bh(e)}get(e){return e.config.pluginsByKey[this.key]}getState(e){return e[this.key]}};var Na=(r,e)=>r.selection.empty?!1:(e&&e(r.tr.deleteSelection().scrollIntoView()),!0);function zh(r,e){let{$cursor:t}=r.selection;return!t||(e?!e.endOfTextblock("backward",r):t.parentOffset>0)?null:t}var pu=(r,e,t)=>{let n=zh(r,t);if(!n)return!1;let o=mu(n);if(!o){let s=n.blockRange(),a=s&&dn(s);return a==null?!1:(e&&e(r.tr.lift(s,a).scrollIntoView()),!0)}let i=o.nodeBefore;if(Gh(r,o,e,-1))return!0;if(n.parent.content.size==0&&(ai(i,"end")||F.isSelectable(i)))for(let s=n.depth;;s--){let a=is(r.doc,n.before(s),n.after(s),L.empty);if(a&&a.slice.size<a.to-a.from){if(e){let l=r.tr.step(a);l.setSelection(ai(i,"end")?W.findFrom(l.doc.resolve(l.mapping.map(o.pos,-1)),-1):F.create(l.doc,o.pos-i.nodeSize)),e(l.scrollIntoView())}return!0}if(s==1||n.node(s-1).childCount>1)break}return i.isAtom&&o.depth==n.depth-1?(e&&e(r.tr.delete(o.pos-i.nodeSize,o.pos).scrollIntoView()),!0):!1},Hh=(r,e,t)=>{let n=zh(r,t);if(!n)return!1;let o=mu(n);return o?Uh(r,o,e):!1},Vh=(r,e,t)=>{let n=qh(r,t);if(!n)return!1;let o=yu(n);return o?Uh(r,o,e):!1};function Uh(r,e,t){let n=e.nodeBefore,o=n,i=e.pos-1;for(;!o.isTextblock;i--){if(o.type.spec.isolating)return!1;let u=o.lastChild;if(!u)return!1;o=u}let s=e.nodeAfter,a=s,l=e.pos+1;for(;!a.isTextblock;l++){if(a.type.spec.isolating)return!1;let u=a.firstChild;if(!u)return!1;a=u}let f=is(r.doc,i,l,L.empty);if(!f||f.from!=i||f instanceof st&&f.slice.size>=l-i)return!1;if(t){let u=r.tr.step(f);u.setSelection(V.create(u.doc,i)),t(u.scrollIntoView())}return!0}function ai(r,e,t=!1){for(let n=r;n;n=e=="start"?n.firstChild:n.lastChild){if(n.isTextblock)return!0;if(t&&n.childCount!=1)return!1}return!1}var hu=(r,e,t)=>{let{$head:n,empty:o}=r.selection,i=n;if(!o)return!1;if(n.parent.isTextblock){if(t?!t.endOfTextblock("backward",r):n.parentOffset>0)return!1;i=mu(n)}let s=i&&i.nodeBefore;return!s||!F.isSelectable(s)?!1:(e&&e(r.tr.setSelection(F.create(r.doc,i.pos-s.nodeSize)).scrollIntoView()),!0)};function mu(r){if(!r.parent.type.spec.isolating)for(let e=r.depth-1;e>=0;e--){if(r.index(e)>0)return r.doc.resolve(r.before(e+1));if(r.node(e).type.spec.isolating)break}return null}function qh(r,e){let{$cursor:t}=r.selection;return!t||(e?!e.endOfTextblock("forward",r):t.parentOffset<t.parent.content.size)?null:t}var gu=(r,e,t)=>{let n=qh(r,t);if(!n)return!1;let o=yu(n);if(!o)return!1;let i=o.nodeAfter;if(Gh(r,o,e,1))return!0;if(n.parent.content.size==0&&(ai(i,"start")||F.isSelectable(i))){let s=is(r.doc,n.before(),n.after(),L.empty);if(s&&s.slice.size<s.to-s.from){if(e){let a=r.tr.step(s);a.setSelection(ai(i,"start")?W.findFrom(a.doc.resolve(a.mapping.map(o.pos)),1):F.create(a.doc,a.mapping.map(o.pos))),e(a.scrollIntoView())}return!0}}return i.isAtom&&o.depth==n.depth-1?(e&&e(r.tr.delete(o.pos,o.pos+i.nodeSize).scrollIntoView()),!0):!1},xu=(r,e,t)=>{let{$head:n,empty:o}=r.selection,i=n;if(!o)return!1;if(n.parent.isTextblock){if(t?!t.endOfTextblock("forward",r):n.parentOffset<n.parent.content.size)return!1;i=yu(n)}let s=i&&i.nodeAfter;return!s||!F.isSelectable(s)?!1:(e&&e(r.tr.setSelection(F.create(r.doc,i.pos)).scrollIntoView()),!0)};function yu(r){if(!r.parent.type.spec.isolating)for(let e=r.depth-1;e>=0;e--){let t=r.node(e);if(r.index(e)+1<t.childCount)return r.doc.resolve(r.after(e+1));if(t.type.spec.isolating)break}return null}var $h=(r,e)=>{let t=r.selection,n=t instanceof F,o;if(n){if(t.node.isTextblock||!hr(r.doc,t.from))return!1;o=t.from}else if(o=go(r.doc,t.from,-1),o==null)return!1;if(e){let i=r.tr.join(o);n&&i.setSelection(F.create(i.doc,o-r.doc.resolve(o).nodeBefore.nodeSize)),e(i.scrollIntoView())}return!0},Wh=(r,e)=>{let t=r.selection,n;if(t instanceof F){if(t.node.isTextblock||!hr(r.doc,t.to))return!1;n=t.to}else if(n=go(r.doc,t.to,1),n==null)return!1;return e&&e(r.tr.join(n).scrollIntoView()),!0},Kh=(r,e)=>{let{$from:t,$to:n}=r.selection,o=t.blockRange(n),i=o&&dn(o);return i==null?!1:(e&&e(r.tr.lift(o,i).scrollIntoView()),!0)},bu=(r,e)=>{let{$head:t,$anchor:n}=r.selection;return!t.parent.type.spec.code||!t.sameParent(n)?!1:(e&&e(r.tr.insertText(`
`).scrollIntoView()),!0)};function ku(r){for(let e=0;e<r.edgeCount;e++){let{type:t}=r.edge(e);if(t.isTextblock&&!t.hasRequiredAttrs())return t}return null}var Su=(r,e)=>{let{$head:t,$anchor:n}=r.selection;if(!t.parent.type.spec.code||!t.sameParent(n))return!1;let o=t.node(-1),i=t.indexAfter(-1),s=ku(o.contentMatchAt(i));if(!s||!o.canReplaceWith(i,i,s))return!1;if(e){let a=t.after(),l=r.tr.replaceWith(a,a,s.createAndFill());l.setSelection(W.near(l.doc.resolve(a),1)),e(l.scrollIntoView())}return!0},Cu=(r,e)=>{let t=r.selection,{$from:n,$to:o}=t;if(t instanceof Nt||n.parent.inlineContent||o.parent.inlineContent)return!1;let i=ku(o.parent.contentMatchAt(o.indexAfter()));if(!i||!i.isTextblock)return!1;if(e){let s=(!n.parentOffset&&o.index()<o.parent.childCount?n:o).pos,a=r.tr.insert(s,i.createAndFill());a.setSelection(V.create(a.doc,s+1)),e(a.scrollIntoView())}return!0},vu=(r,e)=>{let{$cursor:t}=r.selection;if(!t||t.parent.content.size)return!1;if(t.depth>1&&t.after()!=t.end(-1)){let i=t.before();if(nr(r.doc,i))return e&&e(r.tr.split(i).scrollIntoView()),!0}let n=t.blockRange(),o=n&&dn(n);return o==null?!1:(e&&e(r.tr.lift(n,o).scrollIntoView()),!0)};function Dk(r){return(e,t)=>{let{$from:n,$to:o}=e.selection;if(e.selection instanceof F&&e.selection.node.isBlock)return!n.parentOffset||!nr(e.doc,n.pos)?!1:(t&&t(e.tr.split(n.pos).scrollIntoView()),!0);if(!n.depth)return!1;let i=[],s,a,l=!1,f=!1;for(let c=n.depth;;c--)if(n.node(c).isBlock){l=n.end(c)==n.pos+(n.depth-c),f=n.start(c)==n.pos-(n.depth-c),a=ku(n.node(c-1).contentMatchAt(n.indexAfter(c-1)));let m=r&&r(o.parent,l,n);i.unshift(m||(l&&a?{type:a}:null)),s=c;break}else{if(c==1)return!1;i.unshift(null)}let u=e.tr;(e.selection instanceof V||e.selection instanceof Nt)&&u.deleteSelection();let d=u.mapping.map(n.pos),p=nr(u.doc,d,i.length,i);if(p||(i[0]=a?{type:a}:null,p=nr(u.doc,d,i.length,i)),!p)return!1;if(u.split(d,i.length,i),!l&&f&&n.node(s).type!=a){let c=u.mapping.map(n.before(s)),h=u.doc.resolve(c);a&&n.node(s-1).canReplaceWith(h.index(),h.index()+1,a)&&u.setNodeMarkup(u.mapping.map(n.before(s)),a)}return t&&t(u.scrollIntoView()),!0}}var Lk=Dk();var jh=(r,e)=>{let{$from:t,to:n}=r.selection,o,i=t.sharedDepth(n);return i==0?!1:(o=t.before(i),e&&e(r.tr.setSelection(F.create(r.doc,o))),!0)},Nk=(r,e)=>(e&&e(r.tr.setSelection(new Nt(r.doc))),!0);function Rk(r,e,t){let n=e.nodeBefore,o=e.nodeAfter,i=e.index();return!n||!o||!n.type.compatibleContent(o.type)?!1:!n.content.size&&e.parent.canReplace(i-1,i)?(t&&t(r.tr.delete(e.pos-n.nodeSize,e.pos).scrollIntoView()),!0):!e.parent.canReplace(i,i+1)||!(o.isTextblock||hr(r.doc,e.pos))?!1:(t&&t(r.tr.join(e.pos).scrollIntoView()),!0)}function Gh(r,e,t,n){let o=e.nodeBefore,i=e.nodeAfter,s,a,l=o.type.spec.isolating||i.type.spec.isolating;if(!l&&Rk(r,e,t))return!0;let f=!l&&e.parent.canReplace(e.index(),e.index()+1);if(f&&(s=(a=o.contentMatchAt(o.childCount)).findWrapping(i.type))&&a.matchType(s[0]||i.type).validEnd){if(t){let c=e.pos+i.nodeSize,h=A.empty;for(let x=s.length-1;x>=0;x--)h=A.from(s[x].create(null,h));h=A.from(o.copy(h));let m=r.tr.step(new qe(e.pos-1,c,e.pos,c,new L(h,1,0),s.length,!0)),g=m.doc.resolve(c+2*s.length);g.nodeAfter&&g.nodeAfter.type==o.type&&hr(m.doc,g.pos)&&m.join(g.pos),t(m.scrollIntoView())}return!0}let u=i.type.spec.isolating||n>0&&l?null:W.findFrom(e,1),d=u&&u.$from.blockRange(u.$to),p=d&&dn(d);if(p!=null&&p>=e.depth)return t&&t(r.tr.lift(d,p).scrollIntoView()),!0;if(f&&ai(i,"start",!0)&&ai(o,"end")){let c=o,h=[];for(;h.push(c),!c.isTextblock;)c=c.lastChild;let m=i,g=1;for(;!m.isTextblock;m=m.firstChild)g++;if(c.canReplace(c.childCount,c.childCount,m.content)){if(t){let x=A.empty;for(let k=h.length-1;k>=0;k--)x=A.from(h[k].copy(x));let y=r.tr.step(new qe(e.pos-h.length,e.pos+i.nodeSize,e.pos+g,e.pos+i.nodeSize-g,new L(x,h.length,0),0,!0));t(y.scrollIntoView())}return!0}}return!1}function Jh(r){return function(e,t){let n=e.selection,o=r<0?n.$from:n.$to,i=o.depth;for(;o.node(i).isInline;){if(!i)return!1;i--}return o.node(i).isTextblock?(t&&t(e.tr.setSelection(V.create(e.doc,r<0?o.start(i):o.end(i)))),!0):!1}}var wu=Jh(-1),_u=Jh(1);function Xh(r,e=null){return function(t,n){let{$from:o,$to:i}=t.selection,s=o.blockRange(i),a=s&&ii(s,r,e);return a?(n&&n(t.tr.wrap(s,a).scrollIntoView()),!0):!1}}function Tu(r,e=null){return function(t,n){let o=!1;for(let i=0;i<t.selection.ranges.length&&!o;i++){let{$from:{pos:s},$to:{pos:a}}=t.selection.ranges[i];t.doc.nodesBetween(s,a,(l,f)=>{if(o)return!1;if(!(!l.isTextblock||l.hasMarkup(r,e)))if(l.type==r)o=!0;else{let u=t.doc.resolve(f),d=u.index();o=u.parent.canReplaceWith(d,d+1,r)}})}if(!o)return!1;if(n){let i=t.tr;for(let s=0;s<t.selection.ranges.length;s++){let{$from:{pos:a},$to:{pos:l}}=t.selection.ranges[s];i.setBlockType(a,l,r,e)}n(i.scrollIntoView())}return!0}}function Mu(...r){return function(e,t,n){for(let o=0;o<r.length;o++)if(r[o](e,t,n))return!0;return!1}}var cu=Mu(Na,pu,hu),Fh=Mu(Na,gu,xu),Bn={Enter:Mu(bu,Cu,vu,Lk),"Mod-Enter":Su,Backspace:cu,"Mod-Backspace":cu,"Shift-Backspace":cu,Delete:Fh,"Mod-Delete":Fh,"Mod-a":Nk},Ik={"Ctrl-h":Bn.Backspace,"Alt-Backspace":Bn["Mod-Backspace"],"Ctrl-d":Bn.Delete,"Ctrl-Alt-Backspace":Bn["Mod-Delete"],"Alt-Delete":Bn["Mod-Delete"],"Alt-d":Bn["Mod-Delete"],"Ctrl-a":wu,"Ctrl-e":_u};for(let r in Bn)Ik[r]=Bn[r];var YM=typeof navigator<"u"?/Mac|iP(hone|[oa]d)/.test(navigator.platform):typeof os<"u"&&os.platform?os.platform()=="darwin":!1;function Yh(r,e=null){return function(t,n){let{$from:o,$to:i}=t.selection,s=o.blockRange(i);if(!s)return!1;let a=n?t.tr:null;return Bk(a,s,r,e)?(n&&n(a.scrollIntoView()),!0):!1}}function Bk(r,e,t,n=null){let o=!1,i=e,s=e.$from.doc;if(e.depth>=2&&e.$from.node(e.depth-1).type.compatibleContent(t)&&e.startIndex==0){if(e.$from.index(e.depth-1)==0)return!1;let l=s.resolve(e.start-2);i=new ho(l,l,e.depth),e.endIndex<e.parent.childCount&&(e=new ho(e.$from,s.resolve(e.$to.end(e.depth)),e.depth)),o=!0}let a=ii(i,t,n,e);return a?(r&&Fk(r,e,a,o,t),!0):!1}function Fk(r,e,t,n,o){let i=A.empty;for(let u=t.length-1;u>=0;u--)i=A.from(t[u].type.create(t[u].attrs,i));r.step(new qe(e.start-(n?2:0),e.end,e.start,e.end,new L(i,0,0),t.length,!0));let s=0;for(let u=0;u<t.length;u++)t[u].type==o&&(s=u+1);let a=t.length-s,l=e.start+t.length-(n?2:0),f=e.parent;for(let u=e.startIndex,d=e.endIndex,p=!0;u<d;u++,p=!1)!p&&nr(r.doc,l,a)&&(r.split(l,a),l+=2*a),l+=f.child(u).nodeSize;return r}function Qh(r){return function(e,t){let{$from:n,$to:o}=e.selection,i=n.blockRange(o,s=>s.childCount>0&&s.firstChild.type==r);return i?t?n.node(i.depth-1).type==r?zk(e,t,r,i):Hk(e,t,i):!0:!1}}function zk(r,e,t,n){let o=r.tr,i=n.end,s=n.$to.end(n.depth);i<s&&(o.step(new qe(i-1,s,i,s,new L(A.from(t.create(null,n.parent.copy())),1,0),1,!0)),n=new ho(o.doc.resolve(n.$from.pos),o.doc.resolve(s),n.depth));let a=dn(n);if(a==null)return!1;o.lift(n,a);let l=o.doc.resolve(o.mapping.map(i,-1)-1);return hr(o.doc,l.pos)&&l.nodeBefore.type==l.nodeAfter.type&&o.join(l.pos),e(o.scrollIntoView()),!0}function Hk(r,e,t){let n=r.tr,o=t.parent;for(let c=t.end,h=t.endIndex-1,m=t.startIndex;h>m;h--)c-=o.child(h).nodeSize,n.delete(c-1,c+1);let i=n.doc.resolve(t.start),s=i.nodeAfter;if(n.mapping.map(t.end)!=t.start+i.nodeAfter.nodeSize)return!1;let a=t.startIndex==0,l=t.endIndex==o.childCount,f=i.node(-1),u=i.index(-1);if(!f.canReplace(u+(a?0:1),u+1,s.content.append(l?A.empty:A.from(o))))return!1;let d=i.pos,p=d+s.nodeSize;return n.step(new qe(d-(a?1:0),p+(l?1:0),d+1,p-1,new L((a?A.empty:A.from(o.copy(A.empty))).append(l?A.empty:A.from(o.copy(A.empty))),a?0:1,l?0:1),a?0:1)),e(n.scrollIntoView()),!0}function Zh(r){return function(e,t){let{$from:n,$to:o}=e.selection,i=n.blockRange(o,f=>f.childCount>0&&f.firstChild.type==r);if(!i)return!1;let s=i.startIndex;if(s==0)return!1;let a=i.parent,l=a.child(s-1);if(l.type!=r)return!1;if(t){let f=l.lastChild&&l.lastChild.type==a.type,u=A.from(f?r.create():null),d=new L(A.from(r.create(null,A.from(a.type.create(null,u)))),f?3:1,0),p=i.start,c=i.end;t(e.tr.step(new qe(p-(f?3:1),c,p,c,d,1,!0)).scrollIntoView())}return!0}}var at=function(r){for(var e=0;;e++)if(r=r.previousSibling,!r)return e},ci=function(r){let e=r.assignedSlot||r.parentNode;return e&&e.nodeType==11?e.host:e},Lu=null,pn=function(r,e,t){let n=Lu||(Lu=document.createRange());return n.setEnd(r,t??r.nodeValue.length),n.setStart(r,e||0),n},Vk=function(){Lu=null},wo=function(r,e,t,n){return t&&(em(r,e,t,n,-1)||em(r,e,t,n,1))},Uk=/^(img|br|input|textarea|hr)$/i;function em(r,e,t,n,o){for(var i;;){if(r==t&&e==n)return!0;if(e==(o<0?0:gr(r))){let s=r.parentNode;if(!s||s.nodeType!=1||hs(r)||Uk.test(r.nodeName)||r.contentEditable=="false")return!1;e=at(r)+(o<0?0:1),r=s}else if(r.nodeType==1){let s=r.childNodes[e+(o<0?-1:0)];if(s.nodeType==1&&s.contentEditable=="false")if(!((i=s.pmViewDesc)===null||i===void 0)&&i.ignoreForSelection)e+=o;else return!1;else r=s,e=o<0?gr(r):0}else return!1}}function gr(r){return r.nodeType==3?r.nodeValue.length:r.childNodes.length}function qk(r,e){for(;;){if(r.nodeType==3&&e)return r;if(r.nodeType==1&&e>0){if(r.contentEditable=="false")return null;r=r.childNodes[e-1],e=gr(r)}else if(r.parentNode&&!hs(r))e=at(r),r=r.parentNode;else return null}}function $k(r,e){for(;;){if(r.nodeType==3&&e<r.nodeValue.length)return r;if(r.nodeType==1&&e<r.childNodes.length){if(r.contentEditable=="false")return null;r=r.childNodes[e],e=0}else if(r.parentNode&&!hs(r))e=at(r)+1,r=r.parentNode;else return null}}function Wk(r,e,t){for(let n=e==0,o=e==gr(r);n||o;){if(r==t)return!0;let i=at(r);if(r=r.parentNode,!r)return!1;n=n&&i==0,o=o&&i==gr(r)}}function hs(r){let e;for(let t=r;t&&!(e=t.pmViewDesc);t=t.parentNode);return e&&e.node&&e.node.isBlock&&(e.dom==r||e.contentDOM==r)}var Wa=function(r){return r.focusNode&&wo(r.focusNode,r.focusOffset,r.anchorNode,r.anchorOffset)};function yo(r,e){let t=document.createEvent("Event");return t.initEvent("keydown",!0,!0),t.keyCode=r,t.key=t.code=e,t}function Kk(r){let e=r.activeElement;for(;e&&e.shadowRoot;)e=e.shadowRoot.activeElement;return e}function jk(r,e,t){if(r.caretPositionFromPoint)try{let n=r.caretPositionFromPoint(e,t);if(n)return{node:n.offsetNode,offset:Math.min(gr(n.offsetNode),n.offset)}}catch{}if(r.caretRangeFromPoint){let n=r.caretRangeFromPoint(e,t);if(n)return{node:n.startContainer,offset:Math.min(gr(n.startContainer),n.startOffset)}}}var Hr=typeof navigator<"u"?navigator:null,tm=typeof document<"u"?document:null,qn=Hr&&Hr.userAgent||"",Nu=/Edge\/(\d+)/.exec(qn),Lm=/MSIE \d/.exec(qn),Ru=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(qn),jt=!!(Lm||Ru||Nu),Vn=Lm?document.documentMode:Ru?+Ru[1]:Nu?+Nu[1]:0,xr=!jt&&/gecko\/(\d+)/i.test(qn);xr&&+(/Firefox\/(\d+)/.exec(qn)||[0,0])[1];var Iu=!jt&&/Chrome\/(\d+)/.exec(qn),lt=!!Iu,Nm=Iu?+Iu[1]:0,kt=!jt&&!!Hr&&/Apple Computer/.test(Hr.vendor),pi=kt&&(/Mobile\/\w+/.test(qn)||!!Hr&&Hr.maxTouchPoints>2),mr=pi||(Hr?/Mac/.test(Hr.platform):!1),Rm=Hr?/Win/.test(Hr.platform):!1,hn=/Android \d/.test(qn),ms=!!tm&&"webkitFontSmoothing"in tm.documentElement.style,Gk=ms?+(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent)||[0,0])[1]:0;function Jk(r){let e=r.defaultView&&r.defaultView.visualViewport;return e?{left:0,right:e.width,top:0,bottom:e.height}:{left:0,right:r.documentElement.clientWidth,top:0,bottom:r.documentElement.clientHeight}}function cn(r,e){return typeof r=="number"?r:r[e]}function Xk(r){let e=r.getBoundingClientRect(),t=e.width/r.offsetWidth||1,n=e.height/r.offsetHeight||1;return{left:e.left,right:e.left+r.clientWidth*t,top:e.top,bottom:e.top+r.clientHeight*n}}function rm(r,e,t){let n=r.someProp("scrollThreshold")||0,o=r.someProp("scrollMargin")||5,i=r.dom.ownerDocument;for(let s=t||r.dom;s;){if(s.nodeType!=1){s=ci(s);continue}let a=s,l=a==i.body,f=l?Jk(i):Xk(a),u=0,d=0;if(e.top<f.top+cn(n,"top")?d=-(f.top-e.top+cn(o,"top")):e.bottom>f.bottom-cn(n,"bottom")&&(d=e.bottom-e.top>f.bottom-f.top?e.top+cn(o,"top")-f.top:e.bottom-f.bottom+cn(o,"bottom")),e.left<f.left+cn(n,"left")?u=-(f.left-e.left+cn(o,"left")):e.right>f.right-cn(n,"right")&&(u=e.right-f.right+cn(o,"right")),u||d)if(l)i.defaultView.scrollBy(u,d);else{let c=a.scrollLeft,h=a.scrollTop;d&&(a.scrollTop+=d),u&&(a.scrollLeft+=u);let m=a.scrollLeft-c,g=a.scrollTop-h;e={left:e.left-m,top:e.top-g,right:e.right-m,bottom:e.bottom-g}}let p=l?"fixed":getComputedStyle(s).position;if(/^(fixed|sticky)$/.test(p))break;s=p=="absolute"?s.offsetParent:ci(s)}}function Yk(r){let e=r.dom.getBoundingClientRect(),t=Math.max(0,e.top),n,o;for(let i=(e.left+e.right)/2,s=t+1;s<Math.min(innerHeight,e.bottom);s+=5){let a=r.root.elementFromPoint(i,s);if(!a||a==r.dom||!r.dom.contains(a))continue;let l=a.getBoundingClientRect();if(l.top>=t-20){n=a,o=l.top;break}}return{refDOM:n,refTop:o,stack:Im(r.dom)}}function Im(r){let e=[],t=r.ownerDocument;for(let n=r;n&&(e.push({dom:n,top:n.scrollTop,left:n.scrollLeft}),r!=t);n=ci(n));return e}function Qk({refDOM:r,refTop:e,stack:t}){let n=r?r.getBoundingClientRect().top:0;Bm(t,n==0?0:n-e)}function Bm(r,e){for(let t=0;t<r.length;t++){let{dom:n,top:o,left:i}=r[t];n.scrollTop!=o+e&&(n.scrollTop=o+e),n.scrollLeft!=i&&(n.scrollLeft=i)}}var li=null;function Zk(r){if(r.setActive)return r.setActive();if(li)return r.focus(li);let e=Im(r);r.focus(li==null?{get preventScroll(){return li={preventScroll:!0},!0}}:void 0),li||(li=!1,Bm(e,0))}function Fm(r,e){let t,n=2e8,o,i=0,s=e.top,a=e.top,l,f;for(let u=r.firstChild,d=0;u;u=u.nextSibling,d++){let p;if(u.nodeType==1)p=u.getClientRects();else if(u.nodeType==3)p=pn(u).getClientRects();else continue;for(let c=0;c<p.length;c++){let h=p[c];if(h.top<=s&&h.bottom>=a){s=Math.max(h.bottom,s),a=Math.min(h.top,a);let m=h.left>e.left?h.left-e.left:h.right<e.left?e.left-h.right:0;if(m<n){t=u,n=m,o=m&&t.nodeType==3?{left:h.right<e.left?h.right:h.left,top:e.top}:e,u.nodeType==1&&m&&(i=d+(e.left>=(h.left+h.right)/2?1:0));continue}}else h.top>e.top&&!l&&h.left<=e.left&&h.right>=e.left&&(l=u,f={left:Math.max(h.left,Math.min(h.right,e.left)),top:h.top});!t&&(e.left>=h.right&&e.top>=h.top||e.left>=h.left&&e.top>=h.bottom)&&(i=d+1)}}return!t&&l&&(t=l,o=f,n=0),t&&t.nodeType==3?eS(t,o):!t||n&&t.nodeType==1?{node:r,offset:i}:Fm(t,o)}function eS(r,e){let t=r.nodeValue.length,n=document.createRange(),o;for(let i=0;i<t;i++){n.setEnd(r,i+1),n.setStart(r,i);let s=Fn(n,1);if(s.top!=s.bottom&&Yu(e,s)){o={node:r,offset:i+(e.left>=(s.left+s.right)/2?1:0)};break}}return n.detach(),o||{node:r,offset:0}}function Yu(r,e){return r.left>=e.left-1&&r.left<=e.right+1&&r.top>=e.top-1&&r.top<=e.bottom+1}function tS(r,e){let t=r.parentNode;return t&&/^li$/i.test(t.nodeName)&&e.left<r.getBoundingClientRect().left?t:r}function rS(r,e,t){let{node:n,offset:o}=Fm(e,t),i=-1;if(n.nodeType==1&&!n.firstChild){let s=n.getBoundingClientRect();i=s.left!=s.right&&t.left>(s.left+s.right)/2?1:-1}return r.docView.posFromDOM(n,o,i)}function nS(r,e,t,n){let o=-1;for(let i=e,s=!1;i!=r.dom;){let a=r.docView.nearestDesc(i,!0),l;if(!a)return null;if(a.dom.nodeType==1&&(a.node.isBlock&&a.parent||!a.contentDOM)&&((l=a.dom.getBoundingClientRect()).width||l.height)&&(a.node.isBlock&&a.parent&&!/^T(R|BODY|HEAD|FOOT)$/.test(a.dom.nodeName)&&(!s&&l.left>n.left||l.top>n.top?o=a.posBefore:(!s&&l.right<n.left||l.bottom<n.top)&&(o=a.posAfter),s=!0),!a.contentDOM&&o<0&&!a.node.isText))return(a.node.isBlock?n.top<(l.top+l.bottom)/2:n.left<(l.left+l.right)/2)?a.posBefore:a.posAfter;i=a.dom.parentNode}return o>-1?o:r.docView.posFromDOM(e,t,-1)}function zm(r,e,t){let n=r.childNodes.length;if(n&&t.top<t.bottom)for(let o=Math.max(0,Math.min(n-1,Math.floor(n*(e.top-t.top)/(t.bottom-t.top))-2)),i=o;;){let s=r.childNodes[i];if(s.nodeType==1){let a=s.getClientRects();for(let l=0;l<a.length;l++){let f=a[l];if(Yu(e,f))return zm(s,e,f)}}if((i=(i+1)%n)==o)break}return r}function oS(r,e){let t=r.dom.ownerDocument,n,o=0,i=jk(t,e.left,e.top);i&&({node:n,offset:o}=i);let s=(r.root.elementFromPoint?r.root:t).elementFromPoint(e.left,e.top),a;if(!s||!r.dom.contains(s.nodeType!=1?s.parentNode:s)){let f=r.dom.getBoundingClientRect();if(!Yu(e,f)||(s=zm(r.dom,e,f),!s))return null}if(kt)for(let f=s;n&&f;f=ci(f))f.draggable&&(n=void 0);if(s=tS(s,e),n){if(xr&&n.nodeType==1&&(o=Math.min(o,n.childNodes.length),o<n.childNodes.length)){let u=n.childNodes[o],d;u.nodeName=="IMG"&&(d=u.getBoundingClientRect()).right<=e.left&&d.bottom>e.top&&o++}let f;ms&&o&&n.nodeType==1&&(f=n.childNodes[o-1]).nodeType==1&&f.contentEditable=="false"&&f.getBoundingClientRect().top>=e.top&&o--,n==r.dom&&o==n.childNodes.length-1&&n.lastChild.nodeType==1&&e.top>n.lastChild.getBoundingClientRect().bottom?a=r.state.doc.content.size:(o==0||n.nodeType!=1||n.childNodes[o-1].nodeName!="BR")&&(a=nS(r,n,o,e))}a==null&&(a=rS(r,s,e));let l=r.docView.nearestDesc(s,!0);return{pos:a,inside:l?l.posAtStart-l.border:-1}}function nm(r){return r.top<r.bottom||r.left<r.right}function Fn(r,e){let t=r.getClientRects();if(t.length){let n=t[e<0?0:t.length-1];if(nm(n))return n}return Array.prototype.find.call(t,nm)||r.getBoundingClientRect()}var iS=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;function Hm(r,e,t){let{node:n,offset:o,atom:i}=r.docView.domFromPos(e,t<0?-1:1),s=ms||xr;if(n.nodeType==3)if(s&&(iS.test(n.nodeValue)||(t<0?!o:o==n.nodeValue.length))){let l=Fn(pn(n,o,o),t);if(xr&&o&&/\s/.test(n.nodeValue[o-1])&&o<n.nodeValue.length){let f=Fn(pn(n,o-1,o-1),-1);if(f.top==l.top){let u=Fn(pn(n,o,o+1),-1);if(u.top!=l.top)return as(u,u.left<f.left)}}return l}else{let l=o,f=o,u=t<0?1:-1;return t<0&&!o?(f++,u=-1):t>=0&&o==n.nodeValue.length?(l--,u=1):t<0?l--:f++,as(Fn(pn(n,l,f),u),u<0)}if(!r.state.doc.resolve(e-(i||0)).parent.inlineContent){if(i==null&&o&&(t<0||o==gr(n))){let l=n.childNodes[o-1];if(l.nodeType==1)return Eu(l.getBoundingClientRect(),!1)}if(i==null&&o<gr(n)){let l=n.childNodes[o];if(l.nodeType==1)return Eu(l.getBoundingClientRect(),!0)}return Eu(n.getBoundingClientRect(),t>=0)}if(i==null&&o&&(t<0||o==gr(n))){let l=n.childNodes[o-1],f=l.nodeType==3?pn(l,gr(l)-(s?0:1)):l.nodeType==1&&(l.nodeName!="BR"||!l.nextSibling)?l:null;if(f)return as(Fn(f,1),!1)}if(i==null&&o<gr(n)){let l=n.childNodes[o];for(;l.pmViewDesc&&l.pmViewDesc.ignoreForCoords;)l=l.nextSibling;let f=l?l.nodeType==3?pn(l,0,s?0:1):l.nodeType==1?l:null:null;if(f)return as(Fn(f,-1),!0)}return as(Fn(n.nodeType==3?pn(n):n,-t),t>=0)}function as(r,e){if(r.width==0)return r;let t=e?r.left:r.right;return{top:r.top,bottom:r.bottom,left:t,right:t}}function Eu(r,e){if(r.height==0)return r;let t=e?r.top:r.bottom;return{top:t,bottom:t,left:r.left,right:r.right}}function Vm(r,e,t){let n=r.state,o=r.root.activeElement;n!=e&&r.updateState(e),o!=r.dom&&r.focus();try{return t()}finally{n!=e&&r.updateState(n),o!=r.dom&&o&&o.focus()}}function sS(r,e,t){let n=e.selection,o=t=="up"?n.$from:n.$to;return Vm(r,e,()=>{let{node:i}=r.docView.domFromPos(o.pos,t=="up"?-1:1);for(;;){let a=r.docView.nearestDesc(i,!0);if(!a)break;if(a.node.isBlock){i=a.contentDOM||a.dom;break}i=a.dom.parentNode}let s=Hm(r,o.pos,1);for(let a=i.firstChild;a;a=a.nextSibling){let l;if(a.nodeType==1)l=a.getClientRects();else if(a.nodeType==3)l=pn(a,0,a.nodeValue.length).getClientRects();else continue;for(let f=0;f<l.length;f++){let u=l[f];if(u.bottom>u.top+1&&(t=="up"?s.top-u.top>(u.bottom-s.top)*2:u.bottom-s.bottom>(s.bottom-u.top)*2))return!1}}return!0})}var aS=/[\u0590-\u08ac]/;function lS(r,e,t){let{$head:n}=e.selection;if(!n.parent.isTextblock)return!1;let o=n.parentOffset,i=!o,s=o==n.parent.content.size,a=r.domSelection();return a?!aS.test(n.parent.textContent)||!a.modify?t=="left"||t=="backward"?i:s:Vm(r,e,()=>{let{focusNode:l,focusOffset:f,anchorNode:u,anchorOffset:d}=r.domSelectionRange(),p=a.caretBidiLevel;a.modify("move",t,"character");let c=n.depth?r.docView.domAfterPos(n.before()):r.dom,{focusNode:h,focusOffset:m}=r.domSelectionRange(),g=h&&!c.contains(h.nodeType==1?h:h.parentNode)||l==h&&f==m;try{a.collapse(u,d),l&&(l!=u||f!=d)&&a.extend&&a.extend(l,f)}catch{}return p!=null&&(a.caretBidiLevel=p),g}):n.pos==n.start()||n.pos==n.end()}var om=null,im=null,sm=!1;function fS(r,e,t){return om==e&&im==t?sm:(om=e,im=t,sm=t=="up"||t=="down"?sS(r,e,t):lS(r,e,t))}var yr=0,am=1,bo=2,Vr=3,_o=class{constructor(e,t,n,o){this.parent=e,this.children=t,this.dom=n,this.contentDOM=o,this.dirty=yr,n.pmViewDesc=this}matchesWidget(e){return!1}matchesMark(e){return!1}matchesNode(e,t,n){return!1}matchesHack(e){return!1}parseRule(){return null}stopEvent(e){return!1}get size(){let e=0;for(let t=0;t<this.children.length;t++)e+=this.children[t].size;return e}get border(){return 0}destroy(){this.parent=void 0,this.dom.pmViewDesc==this&&(this.dom.pmViewDesc=void 0);for(let e=0;e<this.children.length;e++)this.children[e].destroy()}posBeforeChild(e){for(let t=0,n=this.posAtStart;;t++){let o=this.children[t];if(o==e)return n;n+=o.size}}get posBefore(){return this.parent.posBeforeChild(this)}get posAtStart(){return this.parent?this.parent.posBeforeChild(this)+this.border:0}get posAfter(){return this.posBefore+this.size}get posAtEnd(){return this.posAtStart+this.size-2*this.border}localPosFromDOM(e,t,n){if(this.contentDOM&&this.contentDOM.contains(e.nodeType==1?e:e.parentNode))if(n<0){let i,s;if(e==this.contentDOM)i=e.childNodes[t-1];else{for(;e.parentNode!=this.contentDOM;)e=e.parentNode;i=e.previousSibling}for(;i&&!((s=i.pmViewDesc)&&s.parent==this);)i=i.previousSibling;return i?this.posBeforeChild(s)+s.size:this.posAtStart}else{let i,s;if(e==this.contentDOM)i=e.childNodes[t];else{for(;e.parentNode!=this.contentDOM;)e=e.parentNode;i=e.nextSibling}for(;i&&!((s=i.pmViewDesc)&&s.parent==this);)i=i.nextSibling;return i?this.posBeforeChild(s):this.posAtEnd}let o;if(e==this.dom&&this.contentDOM)o=t>at(this.contentDOM);else if(this.contentDOM&&this.contentDOM!=this.dom&&this.dom.contains(this.contentDOM))o=e.compareDocumentPosition(this.contentDOM)&2;else if(this.dom.firstChild){if(t==0)for(let i=e;;i=i.parentNode){if(i==this.dom){o=!1;break}if(i.previousSibling)break}if(o==null&&t==e.childNodes.length)for(let i=e;;i=i.parentNode){if(i==this.dom){o=!0;break}if(i.nextSibling)break}}return o??n>0?this.posAtEnd:this.posAtStart}nearestDesc(e,t=!1){for(let n=!0,o=e;o;o=o.parentNode){let i=this.getDesc(o),s;if(i&&(!t||i.node))if(n&&(s=i.nodeDOM)&&!(s.nodeType==1?s.contains(e.nodeType==1?e:e.parentNode):s==e))n=!1;else return i}}getDesc(e){let t=e.pmViewDesc;for(let n=t;n;n=n.parent)if(n==this)return t}posFromDOM(e,t,n){for(let o=e;o;o=o.parentNode){let i=this.getDesc(o);if(i)return i.localPosFromDOM(e,t,n)}return-1}descAt(e){for(let t=0,n=0;t<this.children.length;t++){let o=this.children[t],i=n+o.size;if(n==e&&i!=n){for(;!o.border&&o.children.length;)for(let s=0;s<o.children.length;s++){let a=o.children[s];if(a.size){o=a;break}}return o}if(e<i)return o.descAt(e-n-o.border);n=i}}domFromPos(e,t){if(!this.contentDOM)return{node:this.dom,offset:0,atom:e+1};let n=0,o=0;for(let i=0;n<this.children.length;n++){let s=this.children[n],a=i+s.size;if(a>e||s instanceof Ba){o=e-i;break}i=a}if(o)return this.children[n].domFromPos(o-this.children[n].border,t);for(let i;n&&!(i=this.children[n-1]).size&&i instanceof Ra&&i.side>=0;n--);if(t<=0){let i,s=!0;for(;i=n?this.children[n-1]:null,!(!i||i.dom.parentNode==this.contentDOM);n--,s=!1);return i&&t&&s&&!i.border&&!i.domAtom?i.domFromPos(i.size,t):{node:this.contentDOM,offset:i?at(i.dom)+1:0}}else{let i,s=!0;for(;i=n<this.children.length?this.children[n]:null,!(!i||i.dom.parentNode==this.contentDOM);n++,s=!1);return i&&s&&!i.border&&!i.domAtom?i.domFromPos(0,t):{node:this.contentDOM,offset:i?at(i.dom):this.contentDOM.childNodes.length}}}parseRange(e,t,n=0){if(this.children.length==0)return{node:this.contentDOM,from:e,to:t,fromOffset:0,toOffset:this.contentDOM.childNodes.length};let o=-1,i=-1;for(let s=n,a=0;;a++){let l=this.children[a],f=s+l.size;if(o==-1&&e<=f){let u=s+l.border;if(e>=u&&t<=f-l.border&&l.node&&l.contentDOM&&this.contentDOM.contains(l.contentDOM))return l.parseRange(e,t,u);e=s;for(let d=a;d>0;d--){let p=this.children[d-1];if(p.size&&p.dom.parentNode==this.contentDOM&&!p.emptyChildAt(1)){o=at(p.dom)+1;break}e-=p.size}o==-1&&(o=0)}if(o>-1&&(f>t||a==this.children.length-1)){t=f;for(let u=a+1;u<this.children.length;u++){let d=this.children[u];if(d.size&&d.dom.parentNode==this.contentDOM&&!d.emptyChildAt(-1)){i=at(d.dom);break}t+=d.size}i==-1&&(i=this.contentDOM.childNodes.length);break}s=f}return{node:this.contentDOM,from:e,to:t,fromOffset:o,toOffset:i}}emptyChildAt(e){if(this.border||!this.contentDOM||!this.children.length)return!1;let t=this.children[e<0?0:this.children.length-1];return t.size==0||t.emptyChildAt(e)}domAfterPos(e){let{node:t,offset:n}=this.domFromPos(e,0);if(t.nodeType!=1||n==t.childNodes.length)throw new RangeError("No node after pos "+e);return t.childNodes[n]}setSelection(e,t,n,o=!1){let i=Math.min(e,t),s=Math.max(e,t);for(let c=0,h=0;c<this.children.length;c++){let m=this.children[c],g=h+m.size;if(i>h&&s<g)return m.setSelection(e-h-m.border,t-h-m.border,n,o);h=g}let a=this.domFromPos(e,e?-1:1),l=t==e?a:this.domFromPos(t,t?-1:1),f=n.root.getSelection(),u=n.domSelectionRange(),d=!1;if((xr||kt)&&e==t){let{node:c,offset:h}=a;if(c.nodeType==3){if(d=!!(h&&c.nodeValue[h-1]==`
`),d&&h==c.nodeValue.length)for(let m=c,g;m;m=m.parentNode){if(g=m.nextSibling){g.nodeName=="BR"&&(a=l={node:g.parentNode,offset:at(g)+1});break}let x=m.pmViewDesc;if(x&&x.node&&x.node.isBlock)break}}else{let m=c.childNodes[h-1];d=m&&(m.nodeName=="BR"||m.contentEditable=="false")}}if(xr&&u.focusNode&&u.focusNode!=l.node&&u.focusNode.nodeType==1){let c=u.focusNode.childNodes[u.focusOffset];c&&c.contentEditable=="false"&&(o=!0)}if(!(o||d&&kt)&&wo(a.node,a.offset,u.anchorNode,u.anchorOffset)&&wo(l.node,l.offset,u.focusNode,u.focusOffset))return;let p=!1;if((f.extend||e==t)&&!(d&&xr)){f.collapse(a.node,a.offset);try{e!=t&&f.extend(l.node,l.offset),p=!0}catch{}}if(!p){if(e>t){let h=a;a=l,l=h}let c=document.createRange();c.setEnd(l.node,l.offset),c.setStart(a.node,a.offset),f.removeAllRanges(),f.addRange(c)}}ignoreMutation(e){return!this.contentDOM&&e.type!="selection"}get contentLost(){return this.contentDOM&&this.contentDOM!=this.dom&&!this.dom.contains(this.contentDOM)}markDirty(e,t){for(let n=0,o=0;o<this.children.length;o++){let i=this.children[o],s=n+i.size;if(n==s?e<=s&&t>=n:e<s&&t>n){let a=n+i.border,l=s-i.border;if(e>=a&&t<=l){this.dirty=e==n||t==s?bo:am,e==a&&t==l&&(i.contentLost||i.dom.parentNode!=this.contentDOM)?i.dirty=Vr:i.markDirty(e-a,t-a);return}else i.dirty=i.dom==i.contentDOM&&i.dom.parentNode==this.contentDOM&&!i.children.length?bo:Vr}n=s}this.dirty=bo}markParentsDirty(){let e=1;for(let t=this.parent;t;t=t.parent,e++){let n=e==1?bo:am;t.dirty<n&&(t.dirty=n)}}get domAtom(){return!1}get ignoreForCoords(){return!1}get ignoreForSelection(){return!1}isText(e){return!1}},Ra=class extends _o{constructor(e,t,n,o){let i,s=t.type.toDOM;if(typeof s=="function"&&(s=s(n,()=>{if(!i)return o;if(i.parent)return i.parent.posBeforeChild(i)})),!t.type.spec.raw){if(s.nodeType!=1){let a=document.createElement("span");a.appendChild(s),s=a}s.contentEditable="false",s.classList.add("ProseMirror-widget")}super(e,[],s,null),this.widget=t,this.widget=t,i=this}matchesWidget(e){return this.dirty==yr&&e.type.eq(this.widget.type)}parseRule(){return{ignore:!0}}stopEvent(e){let t=this.widget.spec.stopEvent;return t?t(e):!1}ignoreMutation(e){return e.type!="selection"||this.widget.spec.ignoreSelection}destroy(){this.widget.type.destroy(this.dom),super.destroy()}get domAtom(){return!0}get ignoreForSelection(){return!!this.widget.type.spec.relaxedSide}get side(){return this.widget.type.side}},Bu=class extends _o{constructor(e,t,n,o){super(e,[],t,null),this.textDOM=n,this.text=o}get size(){return this.text.length}localPosFromDOM(e,t){return e!=this.textDOM?this.posAtStart+(t?this.size:0):this.posAtStart+t}domFromPos(e){return{node:this.textDOM,offset:e}}ignoreMutation(e){return e.type==="characterData"&&e.target.nodeValue==e.oldValue}},hi=class r extends _o{constructor(e,t,n,o,i){super(e,[],n,o),this.mark=t,this.spec=i}static create(e,t,n,o){let i=o.nodeViews[t.type.name],s=i&&i(t,o,n);return(!s||!s.dom)&&(s=ln.renderSpec(document,t.type.spec.toDOM(t,n),null,t.attrs)),new r(e,t,s.dom,s.contentDOM||s.dom,s)}parseRule(){return this.dirty&Vr||this.mark.type.spec.reparseInView?null:{mark:this.mark.type.name,attrs:this.mark.attrs,contentElement:this.contentDOM}}matchesMark(e){return this.dirty!=Vr&&this.mark.eq(e)}markDirty(e,t){if(super.markDirty(e,t),this.dirty!=yr){let n=this.parent;for(;!n.node;)n=n.parent;n.dirty<this.dirty&&(n.dirty=this.dirty),this.dirty=yr}}slice(e,t,n){let o=r.create(this.parent,this.mark,!0,n),i=this.children,s=this.size;t<s&&(i=Vu(i,t,s,n)),e>0&&(i=Vu(i,0,e,n));for(let a=0;a<i.length;a++)i[a].parent=o;return o.children=i,o}ignoreMutation(e){return this.spec.ignoreMutation?this.spec.ignoreMutation(e):super.ignoreMutation(e)}destroy(){this.spec.destroy&&this.spec.destroy(),super.destroy()}},Un=class r extends _o{constructor(e,t,n,o,i,s,a,l,f){super(e,[],i,s),this.node=t,this.outerDeco=n,this.innerDeco=o,this.nodeDOM=a}static create(e,t,n,o,i,s){let a=i.nodeViews[t.type.name],l,f=a&&a(t,i,()=>{if(!l)return s;if(l.parent)return l.parent.posBeforeChild(l)},n,o),u=f&&f.dom,d=f&&f.contentDOM;if(t.isText){if(!u)u=document.createTextNode(t.text);else if(u.nodeType!=3)throw new RangeError("Text must be rendered as a DOM text node")}else u||({dom:u,contentDOM:d}=ln.renderSpec(document,t.type.spec.toDOM(t),null,t.attrs));!d&&!t.isText&&u.nodeName!="BR"&&(u.hasAttribute("contenteditable")||(u.contentEditable="false"),t.type.spec.draggable&&(u.draggable=!0));let p=u;return u=$m(u,n,t),f?l=new Fu(e,t,n,o,u,d||null,p,f,i,s+1):t.isText?new Ia(e,t,n,o,u,p,i):new r(e,t,n,o,u,d||null,p,i,s+1)}parseRule(){if(this.node.type.spec.reparseInView)return null;let e={node:this.node.type.name,attrs:this.node.attrs};if(this.node.type.whitespace=="pre"&&(e.preserveWhitespace="full"),!this.contentDOM)e.getContent=()=>this.node.content;else if(!this.contentLost)e.contentElement=this.contentDOM;else{for(let t=this.children.length-1;t>=0;t--){let n=this.children[t];if(this.dom.contains(n.dom.parentNode)){e.contentElement=n.dom.parentNode;break}}e.contentElement||(e.getContent=()=>A.empty)}return e}matchesNode(e,t,n){return this.dirty==yr&&e.eq(this.node)&&Fa(t,this.outerDeco)&&n.eq(this.innerDeco)}get size(){return this.node.nodeSize}get border(){return this.node.isLeaf?0:1}updateChildren(e,t){let n=this.node.inlineContent,o=t,i=e.composing?this.localCompositionInfo(e,t):null,s=i&&i.pos>-1?i:null,a=i&&i.pos<0,l=new Hu(this,s&&s.node,e);pS(this.node,this.innerDeco,(f,u,d)=>{f.spec.marks?l.syncToMarks(f.spec.marks,n,e,u):f.type.side>=0&&!d&&l.syncToMarks(u==this.node.childCount?fe.none:this.node.child(u).marks,n,e,u),l.placeWidget(f,e,o)},(f,u,d,p)=>{l.syncToMarks(f.marks,n,e,p);let c;l.findNodeMatch(f,u,d,p)||a&&e.state.selection.from>o&&e.state.selection.to<o+f.nodeSize&&(c=l.findIndexWithChild(i.node))>-1&&l.updateNodeAt(f,u,d,c,e)||l.updateNextNode(f,u,d,e,p,o)||l.addNode(f,u,d,e,o),o+=f.nodeSize}),l.syncToMarks([],n,e,0),this.node.isTextblock&&l.addTextblockHacks(),l.destroyRest(),(l.changed||this.dirty==bo)&&(s&&this.protectLocalComposition(e,s),Um(this.contentDOM,this.children,e),pi&&hS(this.dom))}localCompositionInfo(e,t){let{from:n,to:o}=e.state.selection;if(!(e.state.selection instanceof V)||n<t||o>t+this.node.content.size)return null;let i=e.input.compositionNode;if(!i||!this.dom.contains(i.parentNode))return null;if(this.node.inlineContent){let s=i.nodeValue,a=mS(this.node.content,s,n-t,o-t);return a<0?null:{node:i,pos:a,text:s}}else return{node:i,pos:-1,text:""}}protectLocalComposition(e,{node:t,pos:n,text:o}){if(this.getDesc(t))return;let i=t;for(;i.parentNode!=this.contentDOM;i=i.parentNode){for(;i.previousSibling;)i.parentNode.removeChild(i.previousSibling);for(;i.nextSibling;)i.parentNode.removeChild(i.nextSibling);i.pmViewDesc&&(i.pmViewDesc=void 0)}let s=new Bu(this,i,t,o);e.input.compositionNodes.push(s),this.children=Vu(this.children,n,n+o.length,e,s)}update(e,t,n,o){return this.dirty==Vr||!e.sameMarkup(this.node)?!1:(this.updateInner(e,t,n,o),!0)}updateInner(e,t,n,o){this.updateOuterDeco(t),this.node=e,this.innerDeco=n,this.contentDOM&&this.updateChildren(o,this.posAtStart),this.dirty=yr}updateOuterDeco(e){if(Fa(e,this.outerDeco))return;let t=this.nodeDOM.nodeType!=1,n=this.dom;this.dom=qm(this.dom,this.nodeDOM,zu(this.outerDeco,this.node,t),zu(e,this.node,t)),this.dom!=n&&(n.pmViewDesc=void 0,this.dom.pmViewDesc=this),this.outerDeco=e}selectNode(){this.nodeDOM.nodeType==1&&(this.nodeDOM.classList.add("ProseMirror-selectednode"),(this.contentDOM||!this.node.type.spec.draggable)&&(this.nodeDOM.draggable=!0))}deselectNode(){this.nodeDOM.nodeType==1&&(this.nodeDOM.classList.remove("ProseMirror-selectednode"),(this.contentDOM||!this.node.type.spec.draggable)&&this.nodeDOM.removeAttribute("draggable"))}get domAtom(){return this.node.isAtom}};function lm(r,e,t,n,o){$m(n,e,r);let i=new Un(void 0,r,e,t,n,n,n,o,0);return i.contentDOM&&i.updateChildren(o,0),i}var Ia=class r extends Un{constructor(e,t,n,o,i,s,a){super(e,t,n,o,i,null,s,a,0)}parseRule(){let e=this.nodeDOM.parentNode;for(;e&&e!=this.dom&&!e.pmIsDeco;)e=e.parentNode;return{skip:e||!0}}update(e,t,n,o){return this.dirty==Vr||this.dirty!=yr&&!this.inParent()||!e.sameMarkup(this.node)?!1:(this.updateOuterDeco(t),(this.dirty!=yr||e.text!=this.node.text)&&e.text!=this.nodeDOM.nodeValue&&(this.nodeDOM.nodeValue=e.text,o.trackWrites==this.nodeDOM&&(o.trackWrites=null)),this.node=e,this.dirty=yr,!0)}inParent(){let e=this.parent.contentDOM;for(let t=this.nodeDOM;t;t=t.parentNode)if(t==e)return!0;return!1}domFromPos(e){return{node:this.nodeDOM,offset:e}}localPosFromDOM(e,t,n){return e==this.nodeDOM?this.posAtStart+Math.min(t,this.node.text.length):super.localPosFromDOM(e,t,n)}ignoreMutation(e){return e.type!="characterData"&&e.type!="selection"}slice(e,t,n){let o=this.node.cut(e,t),i=document.createTextNode(o.text);return new r(this.parent,o,this.outerDeco,this.innerDeco,i,i,n)}markDirty(e,t){super.markDirty(e,t),this.dom!=this.nodeDOM&&(e==0||t==this.nodeDOM.nodeValue.length)&&(this.dirty=Vr)}get domAtom(){return!1}isText(e){return this.node.text==e}},Ba=class extends _o{parseRule(){return{ignore:!0}}matchesHack(e){return this.dirty==yr&&this.dom.nodeName==e}get domAtom(){return!0}get ignoreForCoords(){return this.dom.nodeName=="IMG"}},Fu=class extends Un{constructor(e,t,n,o,i,s,a,l,f,u){super(e,t,n,o,i,s,a,f,u),this.spec=l}update(e,t,n,o){if(this.dirty==Vr)return!1;if(this.spec.update&&(this.node.type==e.type||this.spec.multiType)){let i=this.spec.update(e,t,n);return i&&this.updateInner(e,t,n,o),i}else return!this.contentDOM&&!e.isLeaf?!1:super.update(e,t,n,o)}selectNode(){this.spec.selectNode?this.spec.selectNode():super.selectNode()}deselectNode(){this.spec.deselectNode?this.spec.deselectNode():super.deselectNode()}setSelection(e,t,n,o){this.spec.setSelection?this.spec.setSelection(e,t,n.root):super.setSelection(e,t,n,o)}destroy(){this.spec.destroy&&this.spec.destroy(),super.destroy()}stopEvent(e){return this.spec.stopEvent?this.spec.stopEvent(e):!1}ignoreMutation(e){return this.spec.ignoreMutation?this.spec.ignoreMutation(e):super.ignoreMutation(e)}};function Um(r,e,t){let n=r.firstChild,o=!1;for(let i=0;i<e.length;i++){let s=e[i],a=s.dom;if(a.parentNode==r){for(;a!=n;)n=fm(n),o=!0;n=n.nextSibling}else o=!0,r.insertBefore(a,n);if(s instanceof hi){let l=n?n.previousSibling:r.lastChild;Um(s.contentDOM,s.children,t),n=l?l.nextSibling:r.firstChild}}for(;n;)n=fm(n),o=!0;o&&t.trackWrites==r&&(t.trackWrites=null)}var ls=function(r){r&&(this.nodeName=r)};ls.prototype=Object.create(null);var ko=[new ls];function zu(r,e,t){if(r.length==0)return ko;let n=t?ko[0]:new ls,o=[n];for(let i=0;i<r.length;i++){let s=r[i].type.attrs;if(s){s.nodeName&&o.push(n=new ls(s.nodeName));for(let a in s){let l=s[a];l!=null&&(t&&o.length==1&&o.push(n=new ls(e.isInline?"span":"div")),a=="class"?n.class=(n.class?n.class+" ":"")+l:a=="style"?n.style=(n.style?n.style+";":"")+l:a!="nodeName"&&(n[a]=l))}}}return o}function qm(r,e,t,n){if(t==ko&&n==ko)return e;let o=e;for(let i=0;i<n.length;i++){let s=n[i],a=t[i];if(i){let l;a&&a.nodeName==s.nodeName&&o!=r&&(l=o.parentNode)&&l.nodeName.toLowerCase()==s.nodeName||(l=document.createElement(s.nodeName),l.pmIsDeco=!0,l.appendChild(o),a=ko[0]),o=l}uS(o,a||ko[0],s)}return o}function uS(r,e,t){for(let n in e)n!="class"&&n!="style"&&n!="nodeName"&&!(n in t)&&r.removeAttribute(n);for(let n in t)n!="class"&&n!="style"&&n!="nodeName"&&t[n]!=e[n]&&r.setAttribute(n,t[n]);if(e.class!=t.class){let n=e.class?e.class.split(" ").filter(Boolean):[],o=t.class?t.class.split(" ").filter(Boolean):[];for(let i=0;i<n.length;i++)o.indexOf(n[i])==-1&&r.classList.remove(n[i]);for(let i=0;i<o.length;i++)n.indexOf(o[i])==-1&&r.classList.add(o[i]);r.classList.length==0&&r.removeAttribute("class")}if(e.style!=t.style){if(e.style){let n=/\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,o;for(;o=n.exec(e.style);)r.style.removeProperty(o[1])}t.style&&(r.style.cssText+=t.style)}}function $m(r,e,t){return qm(r,r,ko,zu(e,t,r.nodeType!=1))}function Fa(r,e){if(r.length!=e.length)return!1;for(let t=0;t<r.length;t++)if(!r[t].type.eq(e[t].type))return!1;return!0}function fm(r){let e=r.nextSibling;return r.parentNode.removeChild(r),e}var Hu=class{constructor(e,t,n){this.lock=t,this.view=n,this.index=0,this.stack=[],this.changed=!1,this.top=e,this.preMatch=dS(e.node.content,e)}destroyBetween(e,t){if(e!=t){for(let n=e;n<t;n++)this.top.children[n].destroy();this.top.children.splice(e,t-e),this.changed=!0}}destroyRest(){this.destroyBetween(this.index,this.top.children.length)}syncToMarks(e,t,n,o){let i=0,s=this.stack.length>>1,a=Math.min(s,e.length);for(;i<a&&(i==s-1?this.top:this.stack[i+1<<1]).matchesMark(e[i])&&e[i].type.spec.spanning!==!1;)i++;for(;i<s;)this.destroyRest(),this.top.dirty=yr,this.index=this.stack.pop(),this.top=this.stack.pop(),s--;for(;s<e.length;){this.stack.push(this.top,this.index+1);let l=-1,f=this.top.children.length;o<this.preMatch.index&&(f=Math.min(this.index+3,f));for(let u=this.index;u<f;u++){let d=this.top.children[u];if(d.matchesMark(e[s])&&!this.isLocked(d.dom)){l=u;break}}if(l>-1)l>this.index&&(this.changed=!0,this.destroyBetween(this.index,l)),this.top=this.top.children[this.index];else{let u=hi.create(this.top,e[s],t,n);this.top.children.splice(this.index,0,u),this.top=u,this.changed=!0}this.index=0,s++}}findNodeMatch(e,t,n,o){let i=-1,s;if(o>=this.preMatch.index&&(s=this.preMatch.matches[o-this.preMatch.index]).parent==this.top&&s.matchesNode(e,t,n))i=this.top.children.indexOf(s,this.index);else for(let a=this.index,l=Math.min(this.top.children.length,a+5);a<l;a++){let f=this.top.children[a];if(f.matchesNode(e,t,n)&&!this.preMatch.matched.has(f)){i=a;break}}return i<0?!1:(this.destroyBetween(this.index,i),this.index++,!0)}updateNodeAt(e,t,n,o,i){let s=this.top.children[o];return s.dirty==Vr&&s.dom==s.contentDOM&&(s.dirty=bo),s.update(e,t,n,i)?(this.destroyBetween(this.index,o),this.index++,!0):!1}findIndexWithChild(e){for(;;){let t=e.parentNode;if(!t)return-1;if(t==this.top.contentDOM){let n=e.pmViewDesc;if(n){for(let o=this.index;o<this.top.children.length;o++)if(this.top.children[o]==n)return o}return-1}e=t}}updateNextNode(e,t,n,o,i,s){for(let a=this.index;a<this.top.children.length;a++){let l=this.top.children[a];if(l instanceof Un){let f=this.preMatch.matched.get(l);if(f!=null&&f!=i)return!1;let u=l.dom,d,p=this.isLocked(u)&&!(e.isText&&l.node&&l.node.isText&&l.nodeDOM.nodeValue==e.text&&l.dirty!=Vr&&Fa(t,l.outerDeco));if(!p&&l.update(e,t,n,o))return this.destroyBetween(this.index,a),l.dom!=u&&(this.changed=!0),this.index++,!0;if(!p&&(d=this.recreateWrapper(l,e,t,n,o,s)))return this.destroyBetween(this.index,a),this.top.children[this.index]=d,d.contentDOM&&(d.dirty=bo,d.updateChildren(o,s+1),d.dirty=yr),this.changed=!0,this.index++,!0;break}}return!1}recreateWrapper(e,t,n,o,i,s){if(e.dirty||t.isAtom||!e.children.length||!e.node.content.eq(t.content)||!Fa(n,e.outerDeco)||!o.eq(e.innerDeco))return null;let a=Un.create(this.top,t,n,o,i,s);if(a.contentDOM){a.children=e.children,e.children=[];for(let l of a.children)l.parent=a}return e.destroy(),a}addNode(e,t,n,o,i){let s=Un.create(this.top,e,t,n,o,i);s.contentDOM&&s.updateChildren(o,i+1),this.top.children.splice(this.index++,0,s),this.changed=!0}placeWidget(e,t,n){let o=this.index<this.top.children.length?this.top.children[this.index]:null;if(o&&o.matchesWidget(e)&&(e==o.widget||!o.widget.type.toDOM.parentNode))this.index++;else{let i=new Ra(this.top,e,t,n);this.top.children.splice(this.index++,0,i),this.changed=!0}}addTextblockHacks(){let e=this.top.children[this.index-1],t=this.top;for(;e instanceof hi;)t=e,e=t.children[t.children.length-1];(!e||!(e instanceof Ia)||/\n$/.test(e.node.text)||this.view.requiresGeckoHackNode&&/\s$/.test(e.node.text))&&((kt||lt)&&e&&e.dom.contentEditable=="false"&&this.addHackNode("IMG",t),this.addHackNode("BR",this.top))}addHackNode(e,t){if(t==this.top&&this.index<t.children.length&&t.children[this.index].matchesHack(e))this.index++;else{let n=document.createElement(e);e=="IMG"&&(n.className="ProseMirror-separator",n.alt=""),e=="BR"&&(n.className="ProseMirror-trailingBreak");let o=new Ba(this.top,[],n,null);t!=this.top?t.children.push(o):t.children.splice(this.index++,0,o),this.changed=!0}}isLocked(e){return this.lock&&(e==this.lock||e.nodeType==1&&e.contains(this.lock.parentNode))}};function dS(r,e){let t=e,n=t.children.length,o=r.childCount,i=new Map,s=[];e:for(;o>0;){let a;for(;;)if(n){let f=t.children[n-1];if(f instanceof hi)t=f,n=f.children.length;else{a=f,n--;break}}else{if(t==e)break e;n=t.parent.children.indexOf(t),t=t.parent}let l=a.node;if(l){if(l!=r.child(o-1))break;--o,i.set(a,o),s.push(a)}}return{index:o,matched:i,matches:s.reverse()}}function cS(r,e){return r.type.side-e.type.side}function pS(r,e,t,n){let o=e.locals(r),i=0;if(o.length==0){for(let f=0;f<r.childCount;f++){let u=r.child(f);n(u,o,e.forChild(i,u),f),i+=u.nodeSize}return}let s=0,a=[],l=null;for(let f=0;;){let u,d;for(;s<o.length&&o[s].to==i;){let g=o[s++];g.widget&&(u?(d||(d=[u])).push(g):u=g)}if(u)if(d){d.sort(cS);for(let g=0;g<d.length;g++)t(d[g],f,!!l)}else t(u,f,!!l);let p,c;if(l)c=-1,p=l,l=null;else if(f<r.childCount)c=f,p=r.child(f++);else break;for(let g=0;g<a.length;g++)a[g].to<=i&&a.splice(g--,1);for(;s<o.length&&o[s].from<=i&&o[s].to>i;)a.push(o[s++]);let h=i+p.nodeSize;if(p.isText){let g=h;s<o.length&&o[s].from<g&&(g=o[s].from);for(let x=0;x<a.length;x++)a[x].to<g&&(g=a[x].to);g<h&&(l=p.cut(g-i),p=p.cut(0,g-i),h=g,c=-1)}else for(;s<o.length&&o[s].to<h;)s++;let m=p.isInline&&!p.isLeaf?a.filter(g=>!g.inline):a.slice();n(p,m,e.forChild(i,p),c),i=h}}function hS(r){if(r.nodeName=="UL"||r.nodeName=="OL"){let e=r.style.cssText;r.style.cssText=e+"; list-style: square !important",window.getComputedStyle(r).listStyle,r.style.cssText=e}}function mS(r,e,t,n){for(let o=0,i=0;o<r.childCount&&i<=n;){let s=r.child(o++),a=i;if(i+=s.nodeSize,!s.isText)continue;let l=s.text;for(;o<r.childCount;){let f=r.child(o++);if(i+=f.nodeSize,!f.isText)break;l+=f.text}if(i>=t){if(i>=n&&l.slice(n-e.length-a,n-a)==e)return n-e.length;let f=a<n?l.lastIndexOf(e,n-a-1):-1;if(f>=0&&f+e.length+a>=t)return a+f;if(t==n&&l.length>=n+e.length-a&&l.slice(n-a,n-a+e.length)==e)return n}}return-1}function Vu(r,e,t,n,o){let i=[];for(let s=0,a=0;s<r.length;s++){let l=r[s],f=a,u=a+=l.size;f>=t||u<=e?i.push(l):(f<e&&i.push(l.slice(0,e-f,n)),o&&(i.push(o),o=void 0),u>t&&i.push(l.slice(t-f,l.size,n)))}return i}function Qu(r,e=null){let t=r.domSelectionRange(),n=r.state.doc;if(!t.focusNode)return null;let o=r.docView.nearestDesc(t.focusNode),i=o&&o.size==0,s=r.docView.posFromDOM(t.focusNode,t.focusOffset,1);if(s<0)return null;let a=n.resolve(s),l,f;if(Wa(t)){for(l=s;o&&!o.node;)o=o.parent;let d=o.node;if(o&&d.isAtom&&F.isSelectable(d)&&o.parent&&!(d.isInline&&Wk(t.focusNode,t.focusOffset,o.dom))){let p=o.posBefore;f=new F(s==p?a:n.resolve(p))}}else{if(t instanceof r.dom.ownerDocument.defaultView.Selection&&t.rangeCount>1){let d=s,p=s;for(let c=0;c<t.rangeCount;c++){let h=t.getRangeAt(c);d=Math.min(d,r.docView.posFromDOM(h.startContainer,h.startOffset,1)),p=Math.max(p,r.docView.posFromDOM(h.endContainer,h.endOffset,-1))}if(d<0)return null;[l,s]=p==r.state.selection.anchor?[p,d]:[d,p],a=n.resolve(s)}else l=r.docView.posFromDOM(t.anchorNode,t.anchorOffset,1);if(l<0)return null}let u=n.resolve(l);if(!f){let d=e=="pointer"||r.state.selection.head<a.pos&&!i?1:-1;f=Zu(r,u,a,d)}return f}function Wm(r){return r.editable?r.hasFocus():jm(r)&&document.activeElement&&document.activeElement.contains(r.dom)}function mn(r,e=!1){let t=r.state.selection;if(Km(r,t),!!Wm(r)){if(!e&&r.input.mouseDown&&r.input.mouseDown.allowDefault&&lt){let n=r.domSelectionRange(),o=r.domObserver.currentSelection;if(n.anchorNode&&o.anchorNode&&wo(n.anchorNode,n.anchorOffset,o.anchorNode,o.anchorOffset)){r.input.mouseDown.delayedSelectionSync=!0,r.domObserver.setCurSelection();return}}if(r.domObserver.disconnectSelection(),r.cursorWrapper)xS(r);else{let{anchor:n,head:o}=t,i,s;um&&!(t instanceof V)&&(t.$from.parent.inlineContent||(i=dm(r,t.from)),!t.empty&&!t.$from.parent.inlineContent&&(s=dm(r,t.to))),r.docView.setSelection(n,o,r,e),um&&(i&&cm(i),s&&cm(s)),t.visible?r.dom.classList.remove("ProseMirror-hideselection"):(r.dom.classList.add("ProseMirror-hideselection"),"onselectionchange"in document&&gS(r))}r.domObserver.setCurSelection(),r.domObserver.connectSelection()}}var um=kt||lt&&Nm<63;function dm(r,e){let{node:t,offset:n}=r.docView.domFromPos(e,0),o=n<t.childNodes.length?t.childNodes[n]:null,i=n?t.childNodes[n-1]:null;if(kt&&o&&o.contentEditable=="false")return Au(o);if((!o||o.contentEditable=="false")&&(!i||i.contentEditable=="false")){if(o)return Au(o);if(i)return Au(i)}}function Au(r){return r.contentEditable="true",kt&&r.draggable&&(r.draggable=!1,r.wasDraggable=!0),r}function cm(r){r.contentEditable="false",r.wasDraggable&&(r.draggable=!0,r.wasDraggable=null)}function gS(r){let e=r.dom.ownerDocument;e.removeEventListener("selectionchange",r.input.hideSelectionGuard);let t=r.domSelectionRange(),n=t.anchorNode,o=t.anchorOffset;e.addEventListener("selectionchange",r.input.hideSelectionGuard=()=>{(t.anchorNode!=n||t.anchorOffset!=o)&&(e.removeEventListener("selectionchange",r.input.hideSelectionGuard),setTimeout(()=>{(!Wm(r)||r.state.selection.visible)&&r.dom.classList.remove("ProseMirror-hideselection")},20))})}function xS(r){let e=r.domSelection();if(!e)return;let t=r.cursorWrapper.dom,n=t.nodeName=="IMG";n?e.collapse(t.parentNode,at(t)+1):e.collapse(t,0),!n&&!r.state.selection.visible&&jt&&Vn<=11&&(t.disabled=!0,t.disabled=!1)}function Km(r,e){if(e instanceof F){let t=r.docView.descAt(e.from);t!=r.lastSelectedViewDesc&&(pm(r),t&&t.selectNode(),r.lastSelectedViewDesc=t)}else pm(r)}function pm(r){r.lastSelectedViewDesc&&(r.lastSelectedViewDesc.parent&&r.lastSelectedViewDesc.deselectNode(),r.lastSelectedViewDesc=void 0)}function Zu(r,e,t,n){return r.someProp("createSelectionBetween",o=>o(r,e,t))||V.between(e,t,n)}function hm(r){return r.editable&&!r.hasFocus()?!1:jm(r)}function jm(r){let e=r.domSelectionRange();if(!e.anchorNode)return!1;try{return r.dom.contains(e.anchorNode.nodeType==3?e.anchorNode.parentNode:e.anchorNode)&&(r.editable||r.dom.contains(e.focusNode.nodeType==3?e.focusNode.parentNode:e.focusNode))}catch{return!1}}function yS(r){let e=r.docView.domFromPos(r.state.selection.anchor,0),t=r.domSelectionRange();return wo(e.node,e.offset,t.anchorNode,t.anchorOffset)}function Uu(r,e){let{$anchor:t,$head:n}=r.selection,o=e>0?t.max(n):t.min(n),i=o.parent.inlineContent?o.depth?r.doc.resolve(e>0?o.after():o.before()):null:o;return i&&W.findFrom(i,e)}function zn(r,e){return r.dispatch(r.state.tr.setSelection(e).scrollIntoView()),!0}function mm(r,e,t){let n=r.state.selection;if(n instanceof V)if(t.indexOf("s")>-1){let{$head:o}=n,i=o.textOffset?null:e<0?o.nodeBefore:o.nodeAfter;if(!i||i.isText||!i.isLeaf)return!1;let s=r.state.doc.resolve(o.pos+i.nodeSize*(e<0?-1:1));return zn(r,new V(n.$anchor,s))}else if(n.empty){if(r.endOfTextblock(e>0?"forward":"backward")){let o=Uu(r.state,e);return o&&o instanceof F?zn(r,o):!1}else if(!(mr&&t.indexOf("m")>-1)){let o=n.$head,i=o.textOffset?null:e<0?o.nodeBefore:o.nodeAfter,s;if(!i||i.isText)return!1;let a=e<0?o.pos-i.nodeSize:o.pos;return i.isAtom||(s=r.docView.descAt(a))&&!s.contentDOM?F.isSelectable(i)?zn(r,new F(e<0?r.state.doc.resolve(o.pos-i.nodeSize):o)):ms?zn(r,new V(r.state.doc.resolve(e<0?a:a+i.nodeSize))):!1:!1}}else return!1;else{if(n instanceof F&&n.node.isInline)return zn(r,new V(e>0?n.$to:n.$from));{let o=Uu(r.state,e);return o?zn(r,o):!1}}}function za(r){return r.nodeType==3?r.nodeValue.length:r.childNodes.length}function fs(r,e){let t=r.pmViewDesc;return t&&t.size==0&&(e<0||r.nextSibling||r.nodeName!="BR")}function fi(r,e){return e<0?bS(r):kS(r)}function bS(r){let e=r.domSelectionRange(),t=e.focusNode,n=e.focusOffset;if(!t)return;let o,i,s=!1;for(xr&&t.nodeType==1&&n<za(t)&&fs(t.childNodes[n],-1)&&(s=!0);;)if(n>0){if(t.nodeType!=1)break;{let a=t.childNodes[n-1];if(fs(a,-1))o=t,i=--n;else if(a.nodeType==3)t=a,n=t.nodeValue.length;else break}}else{if(Gm(t))break;{let a=t.previousSibling;for(;a&&fs(a,-1);)o=t.parentNode,i=at(a),a=a.previousSibling;if(a)t=a,n=za(t);else{if(t=t.parentNode,t==r.dom)break;n=0}}}s?qu(r,t,n):o&&qu(r,o,i)}function kS(r){let e=r.domSelectionRange(),t=e.focusNode,n=e.focusOffset;if(!t)return;let o=za(t),i,s;for(;;)if(n<o){if(t.nodeType!=1)break;let a=t.childNodes[n];if(fs(a,1))i=t,s=++n;else break}else{if(Gm(t))break;{let a=t.nextSibling;for(;a&&fs(a,1);)i=a.parentNode,s=at(a)+1,a=a.nextSibling;if(a)t=a,n=0,o=za(t);else{if(t=t.parentNode,t==r.dom)break;n=o=0}}}i&&qu(r,i,s)}function Gm(r){let e=r.pmViewDesc;return e&&e.node&&e.node.isBlock}function SS(r,e){for(;r&&e==r.childNodes.length&&!hs(r);)e=at(r)+1,r=r.parentNode;for(;r&&e<r.childNodes.length;){let t=r.childNodes[e];if(t.nodeType==3)return t;if(t.nodeType==1&&t.contentEditable=="false")break;r=t,e=0}}function CS(r,e){for(;r&&!e&&!hs(r);)e=at(r),r=r.parentNode;for(;r&&e;){let t=r.childNodes[e-1];if(t.nodeType==3)return t;if(t.nodeType==1&&t.contentEditable=="false")break;r=t,e=r.childNodes.length}}function qu(r,e,t){if(e.nodeType!=3){let i,s;(s=SS(e,t))?(e=s,t=0):(i=CS(e,t))&&(e=i,t=i.nodeValue.length)}let n=r.domSelection();if(!n)return;if(Wa(n)){let i=document.createRange();i.setEnd(e,t),i.setStart(e,t),n.removeAllRanges(),n.addRange(i)}else n.extend&&n.extend(e,t);r.domObserver.setCurSelection();let{state:o}=r;setTimeout(()=>{r.state==o&&mn(r)},50)}function gm(r,e){let t=r.state.doc.resolve(e);if(!(lt||Rm)&&t.parent.inlineContent){let o=r.coordsAtPos(e);if(e>t.start()){let i=r.coordsAtPos(e-1),s=(i.top+i.bottom)/2;if(s>o.top&&s<o.bottom&&Math.abs(i.left-o.left)>1)return i.left<o.left?"ltr":"rtl"}if(e<t.end()){let i=r.coordsAtPos(e+1),s=(i.top+i.bottom)/2;if(s>o.top&&s<o.bottom&&Math.abs(i.left-o.left)>1)return i.left>o.left?"ltr":"rtl"}}return getComputedStyle(r.dom).direction=="rtl"?"rtl":"ltr"}function xm(r,e,t){let n=r.state.selection;if(n instanceof V&&!n.empty||t.indexOf("s")>-1||mr&&t.indexOf("m")>-1)return!1;let{$from:o,$to:i}=n;if(!o.parent.inlineContent||r.endOfTextblock(e<0?"up":"down")){let s=Uu(r.state,e);if(s&&s instanceof F)return zn(r,s)}if(!o.parent.inlineContent){let s=e<0?o:i,a=n instanceof Nt?W.near(s,e):W.findFrom(s,e);return a?zn(r,a):!1}return!1}function ym(r,e){if(!(r.state.selection instanceof V))return!0;let{$head:t,$anchor:n,empty:o}=r.state.selection;if(!t.sameParent(n))return!0;if(!o)return!1;if(r.endOfTextblock(e>0?"forward":"backward"))return!0;let i=!t.textOffset&&(e<0?t.nodeBefore:t.nodeAfter);if(i&&!i.isText){let s=r.state.tr;return e<0?s.delete(t.pos-i.nodeSize,t.pos):s.delete(t.pos,t.pos+i.nodeSize),r.dispatch(s),!0}return!1}function bm(r,e,t){r.domObserver.stop(),e.contentEditable=t,r.domObserver.start()}function vS(r){if(!kt||r.state.selection.$head.parentOffset>0)return!1;let{focusNode:e,focusOffset:t}=r.domSelectionRange();if(e&&e.nodeType==1&&t==0&&e.firstChild&&e.firstChild.contentEditable=="false"){let n=e.firstChild;bm(r,n,"true"),setTimeout(()=>bm(r,n,"false"),20)}return!1}function wS(r){let e="";return r.ctrlKey&&(e+="c"),r.metaKey&&(e+="m"),r.altKey&&(e+="a"),r.shiftKey&&(e+="s"),e}function _S(r,e){let t=e.keyCode,n=wS(e);if(t==8||mr&&t==72&&n=="c")return ym(r,-1)||fi(r,-1);if(t==46&&!e.shiftKey||mr&&t==68&&n=="c")return ym(r,1)||fi(r,1);if(t==13||t==27)return!0;if(t==37||mr&&t==66&&n=="c"){let o=t==37?gm(r,r.state.selection.from)=="ltr"?-1:1:-1;return mm(r,o,n)||fi(r,o)}else if(t==39||mr&&t==70&&n=="c"){let o=t==39?gm(r,r.state.selection.from)=="ltr"?1:-1:1;return mm(r,o,n)||fi(r,o)}else{if(t==38||mr&&t==80&&n=="c")return xm(r,-1,n)||fi(r,-1);if(t==40||mr&&t==78&&n=="c")return vS(r)||xm(r,1,n)||fi(r,1);if(n==(mr?"m":"c")&&(t==66||t==73||t==89||t==90))return!0}return!1}function ed(r,e){r.someProp("transformCopied",c=>{e=c(e,r)});let t=[],{content:n,openStart:o,openEnd:i}=e;for(;o>1&&i>1&&n.childCount==1&&n.firstChild.childCount==1;){o--,i--;let c=n.firstChild;t.push(c.type.name,c.attrs!=c.type.defaultAttrs?c.attrs:null),n=c.content}let s=r.someProp("clipboardSerializer")||ln.fromSchema(r.state.schema),a=eg(),l=a.createElement("div");l.appendChild(s.serializeFragment(n,{document:a}));let f=l.firstChild,u,d=0;for(;f&&f.nodeType==1&&(u=Zm[f.nodeName.toLowerCase()]);){for(let c=u.length-1;c>=0;c--){let h=a.createElement(u[c]);for(;l.firstChild;)h.appendChild(l.firstChild);l.appendChild(h),d++}f=l.firstChild}f&&f.nodeType==1&&f.setAttribute("data-pm-slice",`${o} ${i}${d?` -${d}`:""} ${JSON.stringify(t)}`);let p=r.someProp("clipboardTextSerializer",c=>c(e,r))||e.content.textBetween(0,e.content.size,`

`);return{dom:l,text:p,slice:e}}function Jm(r,e,t,n,o){let i=o.parent.type.spec.code,s,a;if(!t&&!e)return null;let l=!!e&&(n||i||!t);if(l){if(r.someProp("transformPastedText",p=>{e=p(e,i||n,r)}),i)return a=new L(A.from(r.state.schema.text(e.replace(/\r\n?/g,`
`))),0,0),r.someProp("transformPasted",p=>{a=p(a,r,!0)}),a;let d=r.someProp("clipboardTextParser",p=>p(e,o,n,r));if(d)a=d;else{let p=o.marks(),{schema:c}=r.state,h=ln.fromSchema(c);s=document.createElement("div"),e.split(/(?:\r\n?|\n)+/).forEach(m=>{let g=s.appendChild(document.createElement("p"));m&&g.appendChild(h.serializeNode(c.text(m,p)))})}}else r.someProp("transformPastedHTML",d=>{t=d(t,r)}),s=AS(t),ms&&PS(s);let f=s&&s.querySelector("[data-pm-slice]"),u=f&&/^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(f.getAttribute("data-pm-slice")||"");if(u&&u[3])for(let d=+u[3];d>0;d--){let p=s.firstChild;for(;p&&p.nodeType!=1;)p=p.nextSibling;if(!p)break;s=p}if(a||(a=(r.someProp("clipboardParser")||r.someProp("domParser")||zr.fromSchema(r.state.schema)).parseSlice(s,{preserveWhitespace:!!(l||u),context:o,ruleFromNode(p){return p.nodeName=="BR"&&!p.nextSibling&&p.parentNode&&!TS.test(p.parentNode.nodeName)?{ignore:!0}:null}})),u)a=OS(km(a,+u[1],+u[2]),u[4]);else if(a=L.maxOpen(MS(a.content,o),!0),a.openStart||a.openEnd){let d=0,p=0;for(let c=a.content.firstChild;d<a.openStart&&!c.type.spec.isolating;d++,c=c.firstChild);for(let c=a.content.lastChild;p<a.openEnd&&!c.type.spec.isolating;p++,c=c.lastChild);a=km(a,d,p)}return r.someProp("transformPasted",d=>{a=d(a,r,l)}),a}var TS=/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;function MS(r,e){if(r.childCount<2)return r;for(let t=e.depth;t>=0;t--){let o=e.node(t).contentMatchAt(e.index(t)),i,s=[];if(r.forEach(a=>{if(!s)return;let l=o.findWrapping(a.type),f;if(!l)return s=null;if(f=s.length&&i.length&&Ym(l,i,a,s[s.length-1],0))s[s.length-1]=f;else{s.length&&(s[s.length-1]=Qm(s[s.length-1],i.length));let u=Xm(a,l);s.push(u),o=o.matchType(u.type),i=l}}),s)return A.from(s)}return r}function Xm(r,e,t=0){for(let n=e.length-1;n>=t;n--)r=e[n].create(null,A.from(r));return r}function Ym(r,e,t,n,o){if(o<r.length&&o<e.length&&r[o]==e[o]){let i=Ym(r,e,t,n.lastChild,o+1);if(i)return n.copy(n.content.replaceChild(n.childCount-1,i));if(n.contentMatchAt(n.childCount).matchType(o==r.length-1?t.type:r[o+1]))return n.copy(n.content.append(A.from(Xm(t,r,o+1))))}}function Qm(r,e){if(e==0)return r;let t=r.content.replaceChild(r.childCount-1,Qm(r.lastChild,e-1)),n=r.contentMatchAt(r.childCount).fillBefore(A.empty,!0);return r.copy(t.append(n))}function $u(r,e,t,n,o,i){let s=e<0?r.firstChild:r.lastChild,a=s.content;return r.childCount>1&&(i=0),o<n-1&&(a=$u(a,e,t,n,o+1,i)),o>=t&&(a=e<0?s.contentMatchAt(0).fillBefore(a,i<=o).append(a):a.append(s.contentMatchAt(s.childCount).fillBefore(A.empty,!0))),r.replaceChild(e<0?0:r.childCount-1,s.copy(a))}function km(r,e,t){return e<r.openStart&&(r=new L($u(r.content,-1,e,r.openStart,0,r.openEnd),e,r.openEnd)),t<r.openEnd&&(r=new L($u(r.content,1,t,r.openEnd,0,0),r.openStart,t)),r}var Zm={thead:["table"],tbody:["table"],tfoot:["table"],caption:["table"],colgroup:["table"],col:["table","colgroup"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","tbody","tr"]},Sm=null;function eg(){return Sm||(Sm=document.implementation.createHTMLDocument("title"))}var Pu=null;function ES(r){let e=window.trustedTypes;return e?(Pu||(Pu=e.defaultPolicy||e.createPolicy("ProseMirrorClipboard",{createHTML:t=>t})),Pu.createHTML(r)):r}function AS(r){let e=/^(\s*<meta [^>]*>)*/.exec(r);e&&(r=r.slice(e[0].length));let t=eg().createElement("div"),n=/<([a-z][^>\s]+)/i.exec(r),o;if((o=n&&Zm[n[1].toLowerCase()])&&(r=o.map(i=>"<"+i+">").join("")+r+o.map(i=>"</"+i+">").reverse().join("")),t.innerHTML=ES(r),o)for(let i=0;i<o.length;i++)t=t.querySelector(o[i])||t;return t}function PS(r){let e=r.querySelectorAll(lt?"span:not([class]):not([style])":"span.Apple-converted-space");for(let t=0;t<e.length;t++){let n=e[t];n.childNodes.length==1&&n.textContent=="\xA0"&&n.parentNode&&n.parentNode.replaceChild(r.ownerDocument.createTextNode(" "),n)}}function OS(r,e){if(!r.size)return r;let t=r.content.firstChild.type.schema,n;try{n=JSON.parse(e)}catch{return r}let{content:o,openStart:i,openEnd:s}=r;for(let a=n.length-2;a>=0;a-=2){let l=t.nodes[n[a]];if(!l||l.hasRequiredAttrs())break;o=A.from(l.create(n[a+1],o)),i++,s++}return new L(o,i,s)}var Rt={},It={},DS={touchstart:!0,touchmove:!0},Wu=class{constructor(){this.shiftKey=!1,this.mouseDown=null,this.lastKeyCode=null,this.lastKeyCodeTime=0,this.lastClick={time:0,x:0,y:0,type:"",button:0},this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastIOSEnter=0,this.lastIOSEnterFallbackTimeout=-1,this.lastFocus=0,this.lastTouch=0,this.lastChromeDelete=0,this.composing=!1,this.compositionNode=null,this.composingTimeout=-1,this.compositionNodes=[],this.compositionEndedAt=-2e8,this.compositionID=1,this.badSafariComposition=!1,this.compositionPendingChanges=0,this.domChangeCount=0,this.eventHandlers=Object.create(null),this.hideSelectionGuard=null}};function LS(r){for(let e in Rt){let t=Rt[e];r.dom.addEventListener(e,r.input.eventHandlers[e]=n=>{RS(r,n)&&!td(r,n)&&(r.editable||!(n.type in It))&&t(r,n)},DS[e]?{passive:!0}:void 0)}kt&&r.dom.addEventListener("input",()=>null),Ku(r)}function Hn(r,e){r.input.lastSelectionOrigin=e,r.input.lastSelectionTime=Date.now()}function NS(r){r.domObserver.stop();for(let e in r.input.eventHandlers)r.dom.removeEventListener(e,r.input.eventHandlers[e]);clearTimeout(r.input.composingTimeout),clearTimeout(r.input.lastIOSEnterFallbackTimeout)}function Ku(r){r.someProp("handleDOMEvents",e=>{for(let t in e)r.input.eventHandlers[t]||r.dom.addEventListener(t,r.input.eventHandlers[t]=n=>td(r,n))})}function td(r,e){return r.someProp("handleDOMEvents",t=>{let n=t[e.type];return n?n(r,e)||e.defaultPrevented:!1})}function RS(r,e){if(!e.bubbles)return!0;if(e.defaultPrevented)return!1;for(let t=e.target;t!=r.dom;t=t.parentNode)if(!t||t.nodeType==11||t.pmViewDesc&&t.pmViewDesc.stopEvent(e))return!1;return!0}function IS(r,e){!td(r,e)&&Rt[e.type]&&(r.editable||!(e.type in It))&&Rt[e.type](r,e)}It.keydown=(r,e)=>{let t=e;if(r.input.shiftKey=t.keyCode==16||t.shiftKey,!rg(r,t)&&(r.input.lastKeyCode=t.keyCode,r.input.lastKeyCodeTime=Date.now(),!(hn&&lt&&t.keyCode==13)))if(t.keyCode!=229&&r.domObserver.forceFlush(),pi&&t.keyCode==13&&!t.ctrlKey&&!t.altKey&&!t.metaKey){let n=Date.now();r.input.lastIOSEnter=n,r.input.lastIOSEnterFallbackTimeout=setTimeout(()=>{r.input.lastIOSEnter==n&&(r.someProp("handleKeyDown",o=>o(r,yo(13,"Enter"))),r.input.lastIOSEnter=0)},200)}else r.someProp("handleKeyDown",n=>n(r,t))||_S(r,t)?t.preventDefault():Hn(r,"key")};It.keyup=(r,e)=>{e.keyCode==16&&(r.input.shiftKey=!1)};It.keypress=(r,e)=>{let t=e;if(rg(r,t)||!t.charCode||t.ctrlKey&&!t.altKey||mr&&t.metaKey)return;if(r.someProp("handleKeyPress",o=>o(r,t))){t.preventDefault();return}let n=r.state.selection;if(!(n instanceof V)||!n.$from.sameParent(n.$to)){let o=String.fromCharCode(t.charCode),i=()=>r.state.tr.insertText(o).scrollIntoView();!/[\r\n]/.test(o)&&!r.someProp("handleTextInput",s=>s(r,n.$from.pos,n.$to.pos,o,i))&&r.dispatch(i()),t.preventDefault()}};function Ka(r){return{left:r.clientX,top:r.clientY}}function BS(r,e){let t=e.x-r.clientX,n=e.y-r.clientY;return t*t+n*n<100}function rd(r,e,t,n,o){if(n==-1)return!1;let i=r.state.doc.resolve(n);for(let s=i.depth+1;s>0;s--)if(r.someProp(e,a=>s>i.depth?a(r,t,i.nodeAfter,i.before(s),o,!0):a(r,t,i.node(s),i.before(s),o,!1)))return!0;return!1}function di(r,e,t){if(r.focused||r.focus(),r.state.selection.eq(e))return;let n=r.state.tr.setSelection(e);t=="pointer"&&n.setMeta("pointer",!0),r.dispatch(n)}function FS(r,e){if(e==-1)return!1;let t=r.state.doc.resolve(e),n=t.nodeAfter;return n&&n.isAtom&&F.isSelectable(n)?(di(r,new F(t),"pointer"),!0):!1}function zS(r,e){if(e==-1)return!1;let t=r.state.selection,n,o;t instanceof F&&(n=t.node);let i=r.state.doc.resolve(e);for(let s=i.depth+1;s>0;s--){let a=s>i.depth?i.nodeAfter:i.node(s);if(F.isSelectable(a)){n&&t.$from.depth>0&&s>=t.$from.depth&&i.before(t.$from.depth+1)==t.$from.pos?o=i.before(t.$from.depth):o=i.before(s);break}}return o!=null?(di(r,F.create(r.state.doc,o),"pointer"),!0):!1}function HS(r,e,t,n,o){return rd(r,"handleClickOn",e,t,n)||r.someProp("handleClick",i=>i(r,e,n))||(o?zS(r,t):FS(r,t))}function VS(r,e,t,n){return rd(r,"handleDoubleClickOn",e,t,n)||r.someProp("handleDoubleClick",o=>o(r,e,n))}function US(r,e,t,n){return rd(r,"handleTripleClickOn",e,t,n)||r.someProp("handleTripleClick",o=>o(r,e,n))||qS(r,t,n)}function qS(r,e,t){if(t.button!=0)return!1;let n=r.state.doc;if(e==-1)return n.inlineContent?(di(r,V.create(n,0,n.content.size),"pointer"),!0):!1;let o=n.resolve(e);for(let i=o.depth+1;i>0;i--){let s=i>o.depth?o.nodeAfter:o.node(i),a=o.before(i);if(s.inlineContent)di(r,V.create(n,a+1,a+1+s.content.size),"pointer");else if(F.isSelectable(s))di(r,F.create(n,a),"pointer");else continue;return!0}}function nd(r){return Ha(r)}var tg=mr?"metaKey":"ctrlKey";Rt.mousedown=(r,e)=>{let t=e;r.input.shiftKey=t.shiftKey;let n=nd(r),o=Date.now(),i="singleClick";o-r.input.lastClick.time<500&&BS(t,r.input.lastClick)&&!t[tg]&&r.input.lastClick.button==t.button&&(r.input.lastClick.type=="singleClick"?i="doubleClick":r.input.lastClick.type=="doubleClick"&&(i="tripleClick")),r.input.lastClick={time:o,x:t.clientX,y:t.clientY,type:i,button:t.button};let s=r.posAtCoords(Ka(t));s&&(i=="singleClick"?(r.input.mouseDown&&r.input.mouseDown.done(),r.input.mouseDown=new ju(r,s,t,!!n)):(i=="doubleClick"?VS:US)(r,s.pos,s.inside,t)?t.preventDefault():Hn(r,"pointer"))};var ju=class{constructor(e,t,n,o){this.view=e,this.pos=t,this.event=n,this.flushed=o,this.delayedSelectionSync=!1,this.mightDrag=null,this.startDoc=e.state.doc,this.selectNode=!!n[tg],this.allowDefault=n.shiftKey;let i,s;if(t.inside>-1)i=e.state.doc.nodeAt(t.inside),s=t.inside;else{let u=e.state.doc.resolve(t.pos);i=u.parent,s=u.depth?u.before():0}let a=o?null:n.target,l=a?e.docView.nearestDesc(a,!0):null;this.target=l&&l.nodeDOM.nodeType==1?l.nodeDOM:null;let{selection:f}=e.state;n.button==0&&(i.type.spec.draggable&&i.type.spec.selectable!==!1||f instanceof F&&f.from<=s&&f.to>s)&&(this.mightDrag={node:i,pos:s,addAttr:!!(this.target&&!this.target.draggable),setUneditable:!!(this.target&&xr&&!this.target.hasAttribute("contentEditable"))}),this.target&&this.mightDrag&&(this.mightDrag.addAttr||this.mightDrag.setUneditable)&&(this.view.domObserver.stop(),this.mightDrag.addAttr&&(this.target.draggable=!0),this.mightDrag.setUneditable&&setTimeout(()=>{this.view.input.mouseDown==this&&this.target.setAttribute("contentEditable","false")},20),this.view.domObserver.start()),e.root.addEventListener("mouseup",this.up=this.up.bind(this)),e.root.addEventListener("mousemove",this.move=this.move.bind(this)),Hn(e,"pointer")}done(){this.view.root.removeEventListener("mouseup",this.up),this.view.root.removeEventListener("mousemove",this.move),this.mightDrag&&this.target&&(this.view.domObserver.stop(),this.mightDrag.addAttr&&this.target.removeAttribute("draggable"),this.mightDrag.setUneditable&&this.target.removeAttribute("contentEditable"),this.view.domObserver.start()),this.delayedSelectionSync&&setTimeout(()=>mn(this.view)),this.view.input.mouseDown=null}up(e){if(this.done(),!this.view.dom.contains(e.target))return;let t=this.pos;this.view.state.doc!=this.startDoc&&(t=this.view.posAtCoords(Ka(e))),this.updateAllowDefault(e),this.allowDefault||!t?Hn(this.view,"pointer"):HS(this.view,t.pos,t.inside,e,this.selectNode)?e.preventDefault():e.button==0&&(this.flushed||kt&&this.mightDrag&&!this.mightDrag.node.isAtom||lt&&!this.view.state.selection.visible&&Math.min(Math.abs(t.pos-this.view.state.selection.from),Math.abs(t.pos-this.view.state.selection.to))<=2)?(di(this.view,W.near(this.view.state.doc.resolve(t.pos)),"pointer"),e.preventDefault()):Hn(this.view,"pointer")}move(e){this.updateAllowDefault(e),Hn(this.view,"pointer"),e.buttons==0&&this.done()}updateAllowDefault(e){!this.allowDefault&&(Math.abs(this.event.x-e.clientX)>4||Math.abs(this.event.y-e.clientY)>4)&&(this.allowDefault=!0)}};Rt.touchstart=r=>{r.input.lastTouch=Date.now(),nd(r),Hn(r,"pointer")};Rt.touchmove=r=>{r.input.lastTouch=Date.now(),Hn(r,"pointer")};Rt.contextmenu=r=>nd(r);function rg(r,e){return r.composing?!0:kt&&Math.abs(e.timeStamp-r.input.compositionEndedAt)<500?(r.input.compositionEndedAt=-2e8,!0):!1}var $S=hn?5e3:-1;It.compositionstart=It.compositionupdate=r=>{if(!r.composing){r.domObserver.flush();let{state:e}=r,t=e.selection.$to;if(e.selection instanceof V&&(e.storedMarks||!t.textOffset&&t.parentOffset&&t.nodeBefore.marks.some(n=>n.type.spec.inclusive===!1)||lt&&Rm&&WS(r)))r.markCursor=r.state.storedMarks||t.marks(),Ha(r,!0),r.markCursor=null;else if(Ha(r,!e.selection.empty),xr&&e.selection.empty&&t.parentOffset&&!t.textOffset&&t.nodeBefore.marks.length){let n=r.domSelectionRange();for(let o=n.focusNode,i=n.focusOffset;o&&o.nodeType==1&&i!=0;){let s=i<0?o.lastChild:o.childNodes[i-1];if(!s)break;if(s.nodeType==3){let a=r.domSelection();a&&a.collapse(s,s.nodeValue.length);break}else o=s,i=-1}}r.input.composing=!0}ng(r,$S)};function WS(r){let{focusNode:e,focusOffset:t}=r.domSelectionRange();if(!e||e.nodeType!=1||t>=e.childNodes.length)return!1;let n=e.childNodes[t];return n.nodeType==1&&n.contentEditable=="false"}It.compositionend=(r,e)=>{r.composing&&(r.input.composing=!1,r.input.compositionEndedAt=e.timeStamp,r.input.compositionPendingChanges=r.domObserver.pendingRecords().length?r.input.compositionID:0,r.input.compositionNode=null,r.input.badSafariComposition?r.domObserver.forceFlush():r.input.compositionPendingChanges&&Promise.resolve().then(()=>r.domObserver.flush()),r.input.compositionID++,ng(r,20))};function ng(r,e){clearTimeout(r.input.composingTimeout),e>-1&&(r.input.composingTimeout=setTimeout(()=>Ha(r),e))}function og(r){for(r.composing&&(r.input.composing=!1,r.input.compositionEndedAt=jS());r.input.compositionNodes.length>0;)r.input.compositionNodes.pop().markParentsDirty()}function KS(r){let e=r.domSelectionRange();if(!e.focusNode)return null;let t=qk(e.focusNode,e.focusOffset),n=$k(e.focusNode,e.focusOffset);if(t&&n&&t!=n){let o=n.pmViewDesc,i=r.domObserver.lastChangedTextNode;if(t==i||n==i)return i;if(!o||!o.isText(n.nodeValue))return n;if(r.input.compositionNode==n){let s=t.pmViewDesc;if(!(!s||!s.isText(t.nodeValue)))return n}}return t||n}function jS(){let r=document.createEvent("Event");return r.initEvent("event",!0,!0),r.timeStamp}function Ha(r,e=!1){if(!(hn&&r.domObserver.flushingSoon>=0)){if(r.domObserver.forceFlush(),og(r),e||r.docView&&r.docView.dirty){let t=Qu(r),n=r.state.selection;return t&&!t.eq(n)?r.dispatch(r.state.tr.setSelection(t)):(r.markCursor||e)&&!n.$from.node(n.$from.sharedDepth(n.to)).inlineContent?r.dispatch(r.state.tr.deleteSelection()):r.updateState(r.state),!0}return!1}}function GS(r,e){if(!r.dom.parentNode)return;let t=r.dom.parentNode.appendChild(document.createElement("div"));t.appendChild(e),t.style.cssText="position: fixed; left: -10000px; top: 10px";let n=getSelection(),o=document.createRange();o.selectNodeContents(e),r.dom.blur(),n.removeAllRanges(),n.addRange(o),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t),r.focus()},50)}var us=jt&&Vn<15||pi&&Gk<604;Rt.copy=It.cut=(r,e)=>{let t=e,n=r.state.selection,o=t.type=="cut";if(n.empty)return;let i=us?null:t.clipboardData,s=n.content(),{dom:a,text:l}=ed(r,s);i?(t.preventDefault(),i.clearData(),i.setData("text/html",a.innerHTML),i.setData("text/plain",l)):GS(r,a),o&&r.dispatch(r.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent","cut"))};function JS(r){return r.openStart==0&&r.openEnd==0&&r.content.childCount==1?r.content.firstChild:null}function XS(r,e){if(!r.dom.parentNode)return;let t=r.input.shiftKey||r.state.selection.$from.parent.type.spec.code,n=r.dom.parentNode.appendChild(document.createElement(t?"textarea":"div"));t||(n.contentEditable="true"),n.style.cssText="position: fixed; left: -10000px; top: 10px",n.focus();let o=r.input.shiftKey&&r.input.lastKeyCode!=45;setTimeout(()=>{r.focus(),n.parentNode&&n.parentNode.removeChild(n),t?ds(r,n.value,null,o,e):ds(r,n.textContent,n.innerHTML,o,e)},50)}function ds(r,e,t,n,o){let i=Jm(r,e,t,n,r.state.selection.$from);if(r.someProp("handlePaste",l=>l(r,o,i||L.empty)))return!0;if(!i)return!1;let s=JS(i),a=s?r.state.tr.replaceSelectionWith(s,n):r.state.tr.replaceSelection(i);return r.dispatch(a.scrollIntoView().setMeta("paste",!0).setMeta("uiEvent","paste")),!0}function ig(r){let e=r.getData("text/plain")||r.getData("Text");if(e)return e;let t=r.getData("text/uri-list");return t?t.replace(/\r?\n/g," "):""}It.paste=(r,e)=>{let t=e;if(r.composing&&!hn)return;let n=us?null:t.clipboardData,o=r.input.shiftKey&&r.input.lastKeyCode!=45;n&&ds(r,ig(n),n.getData("text/html"),o,t)?t.preventDefault():XS(r,t)};var Va=class{constructor(e,t,n){this.slice=e,this.move=t,this.node=n}},YS=mr?"altKey":"ctrlKey";function sg(r,e){let t;return r.someProp("dragCopies",n=>{t=t||n(e)}),t!=null?!t:!e[YS]}Rt.dragstart=(r,e)=>{let t=e,n=r.input.mouseDown;if(n&&n.done(),!t.dataTransfer)return;let o=r.state.selection,i=o.empty?null:r.posAtCoords(Ka(t)),s;if(!(i&&i.pos>=o.from&&i.pos<=(o instanceof F?o.to-1:o.to))){if(n&&n.mightDrag)s=F.create(r.state.doc,n.mightDrag.pos);else if(t.target&&t.target.nodeType==1){let d=r.docView.nearestDesc(t.target,!0);d&&d.node.type.spec.draggable&&d!=r.docView&&(s=F.create(r.state.doc,d.posBefore))}}let a=(s||r.state.selection).content(),{dom:l,text:f,slice:u}=ed(r,a);(!t.dataTransfer.files.length||!lt||Nm>120)&&t.dataTransfer.clearData(),t.dataTransfer.setData(us?"Text":"text/html",l.innerHTML),t.dataTransfer.effectAllowed="copyMove",us||t.dataTransfer.setData("text/plain",f),r.dragging=new Va(u,sg(r,t),s)};Rt.dragend=r=>{let e=r.dragging;window.setTimeout(()=>{r.dragging==e&&(r.dragging=null)},50)};It.dragover=It.dragenter=(r,e)=>e.preventDefault();It.drop=(r,e)=>{try{QS(r,e,r.dragging)}finally{r.dragging=null}};function QS(r,e,t){if(!e.dataTransfer)return;let n=r.posAtCoords(Ka(e));if(!n)return;let o=r.state.doc.resolve(n.pos),i=t&&t.slice;i?r.someProp("transformPasted",c=>{i=c(i,r,!1)}):i=Jm(r,ig(e.dataTransfer),us?null:e.dataTransfer.getData("text/html"),!1,o);let s=!!(t&&sg(r,e));if(r.someProp("handleDrop",c=>c(r,e,i||L.empty,s))){e.preventDefault();return}if(!i)return;e.preventDefault();let a=i?Aa(r.state.doc,o.pos,i):o.pos;a==null&&(a=o.pos);let l=r.state.tr;if(s){let{node:c}=t;c?c.replace(l):l.deleteSelection()}let f=l.mapping.map(a),u=i.openStart==0&&i.openEnd==0&&i.content.childCount==1,d=l.doc;if(u?l.replaceRangeWith(f,f,i.content.firstChild):l.replaceRange(f,f,i),l.doc.eq(d))return;let p=l.doc.resolve(f);if(u&&F.isSelectable(i.content.firstChild)&&p.nodeAfter&&p.nodeAfter.sameMarkup(i.content.firstChild))l.setSelection(new F(p));else{let c=l.mapping.map(a);l.mapping.maps[l.mapping.maps.length-1].forEach((h,m,g,x)=>c=x),l.setSelection(Zu(r,p,l.doc.resolve(c)))}r.focus(),r.dispatch(l.setMeta("uiEvent","drop"))}Rt.focus=r=>{r.input.lastFocus=Date.now(),r.focused||(r.domObserver.stop(),r.dom.classList.add("ProseMirror-focused"),r.domObserver.start(),r.focused=!0,setTimeout(()=>{r.docView&&r.hasFocus()&&!r.domObserver.currentSelection.eq(r.domSelectionRange())&&mn(r)},20))};Rt.blur=(r,e)=>{let t=e;r.focused&&(r.domObserver.stop(),r.dom.classList.remove("ProseMirror-focused"),r.domObserver.start(),t.relatedTarget&&r.dom.contains(t.relatedTarget)&&r.domObserver.currentSelection.clear(),r.focused=!1)};Rt.beforeinput=(r,e)=>{if(lt&&hn&&e.inputType=="deleteContentBackward"){r.domObserver.flushSoon();let{domChangeCount:n}=r.input;setTimeout(()=>{if(r.input.domChangeCount!=n||(r.dom.blur(),r.focus(),r.someProp("handleKeyDown",i=>i(r,yo(8,"Backspace")))))return;let{$cursor:o}=r.state.selection;o&&o.pos>0&&r.dispatch(r.state.tr.delete(o.pos-1,o.pos).scrollIntoView())},50)}};for(let r in It)Rt[r]=It[r];function cs(r,e){if(r==e)return!0;for(let t in r)if(r[t]!==e[t])return!1;for(let t in e)if(!(t in r))return!1;return!0}var Ua=class r{constructor(e,t){this.toDOM=e,this.spec=t||Co,this.side=this.spec.side||0}map(e,t,n,o){let{pos:i,deleted:s}=e.mapResult(t.from+o,this.side<0?-1:1);return s?null:new St(i-n,i-n,this)}valid(){return!0}eq(e){return this==e||e instanceof r&&(this.spec.key&&this.spec.key==e.spec.key||this.toDOM==e.toDOM&&cs(this.spec,e.spec))}destroy(e){this.spec.destroy&&this.spec.destroy(e)}},So=class r{constructor(e,t){this.attrs=e,this.spec=t||Co}map(e,t,n,o){let i=e.map(t.from+o,this.spec.inclusiveStart?-1:1)-n,s=e.map(t.to+o,this.spec.inclusiveEnd?1:-1)-n;return i>=s?null:new St(i,s,this)}valid(e,t){return t.from<t.to}eq(e){return this==e||e instanceof r&&cs(this.attrs,e.attrs)&&cs(this.spec,e.spec)}static is(e){return e.type instanceof r}destroy(){}},Gu=class r{constructor(e,t){this.attrs=e,this.spec=t||Co}map(e,t,n,o){let i=e.mapResult(t.from+o,1);if(i.deleted)return null;let s=e.mapResult(t.to+o,-1);return s.deleted||s.pos<=i.pos?null:new St(i.pos-n,s.pos-n,this)}valid(e,t){let{index:n,offset:o}=e.content.findIndex(t.from),i;return o==t.from&&!(i=e.child(n)).isText&&o+i.nodeSize==t.to}eq(e){return this==e||e instanceof r&&cs(this.attrs,e.attrs)&&cs(this.spec,e.spec)}destroy(){}},St=class r{constructor(e,t,n){this.from=e,this.to=t,this.type=n}copy(e,t){return new r(e,t,this.type)}eq(e,t=0){return this.type.eq(e.type)&&this.from+t==e.from&&this.to+t==e.to}map(e,t,n){return this.type.map(e,this,t,n)}static widget(e,t,n){return new r(e,e,new Ua(t,n))}static inline(e,t,n,o){return new r(e,t,new So(n,o))}static node(e,t,n,o){return new r(e,t,new Gu(n,o))}get spec(){return this.type.spec}get inline(){return this.type instanceof So}get widget(){return this.type instanceof Ua}},ui=[],Co={},ze=class r{constructor(e,t){this.local=e.length?e:ui,this.children=t.length?t:ui}static create(e,t){return t.length?$a(t,e,0,Co):bt}find(e,t,n){let o=[];return this.findInner(e??0,t??1e9,o,0,n),o}findInner(e,t,n,o,i){for(let s=0;s<this.local.length;s++){let a=this.local[s];a.from<=t&&a.to>=e&&(!i||i(a.spec))&&n.push(a.copy(a.from+o,a.to+o))}for(let s=0;s<this.children.length;s+=3)if(this.children[s]<t&&this.children[s+1]>e){let a=this.children[s]+1;this.children[s+2].findInner(e-a,t-a,n,o+a,i)}}map(e,t,n){return this==bt||e.maps.length==0?this:this.mapInner(e,t,0,0,n||Co)}mapInner(e,t,n,o,i){let s;for(let a=0;a<this.local.length;a++){let l=this.local[a].map(e,n,o);l&&l.type.valid(t,l)?(s||(s=[])).push(l):i.onRemove&&i.onRemove(this.local[a].spec)}return this.children.length?ZS(this.children,s||[],e,t,n,o,i):s?new r(s.sort(vo),ui):bt}add(e,t){return t.length?this==bt?r.create(e,t):this.addInner(e,t,0):this}addInner(e,t,n){let o,i=0;e.forEach((a,l)=>{let f=l+n,u;if(u=lg(t,a,f)){for(o||(o=this.children.slice());i<o.length&&o[i]<l;)i+=3;o[i]==l?o[i+2]=o[i+2].addInner(a,u,f+1):o.splice(i,0,l,l+a.nodeSize,$a(u,a,f+1,Co)),i+=3}});let s=ag(i?fg(t):t,-n);for(let a=0;a<s.length;a++)s[a].type.valid(e,s[a])||s.splice(a--,1);return new r(s.length?this.local.concat(s).sort(vo):this.local,o||this.children)}remove(e){return e.length==0||this==bt?this:this.removeInner(e,0)}removeInner(e,t){let n=this.children,o=this.local;for(let i=0;i<n.length;i+=3){let s,a=n[i]+t,l=n[i+1]+t;for(let u=0,d;u<e.length;u++)(d=e[u])&&d.from>a&&d.to<l&&(e[u]=null,(s||(s=[])).push(d));if(!s)continue;n==this.children&&(n=this.children.slice());let f=n[i+2].removeInner(s,a+1);f!=bt?n[i+2]=f:(n.splice(i,3),i-=3)}if(o.length){for(let i=0,s;i<e.length;i++)if(s=e[i])for(let a=0;a<o.length;a++)o[a].eq(s,t)&&(o==this.local&&(o=this.local.slice()),o.splice(a--,1))}return n==this.children&&o==this.local?this:o.length||n.length?new r(o,n):bt}forChild(e,t){if(this==bt)return this;if(t.isLeaf)return r.empty;let n,o;for(let a=0;a<this.children.length;a+=3)if(this.children[a]>=e){this.children[a]==e&&(n=this.children[a+2]);break}let i=e+1,s=i+t.content.size;for(let a=0;a<this.local.length;a++){let l=this.local[a];if(l.from<s&&l.to>i&&l.type instanceof So){let f=Math.max(i,l.from)-i,u=Math.min(s,l.to)-i;f<u&&(o||(o=[])).push(l.copy(f,u))}}if(o){let a=new r(o.sort(vo),ui);return n?new qa([a,n]):a}return n||bt}eq(e){if(this==e)return!0;if(!(e instanceof r)||this.local.length!=e.local.length||this.children.length!=e.children.length)return!1;for(let t=0;t<this.local.length;t++)if(!this.local[t].eq(e.local[t]))return!1;for(let t=0;t<this.children.length;t+=3)if(this.children[t]!=e.children[t]||this.children[t+1]!=e.children[t+1]||!this.children[t+2].eq(e.children[t+2]))return!1;return!0}locals(e){return od(this.localsInner(e))}localsInner(e){if(this==bt)return ui;if(e.inlineContent||!this.local.some(So.is))return this.local;let t=[];for(let n=0;n<this.local.length;n++)this.local[n].type instanceof So||t.push(this.local[n]);return t}forEachSet(e){e(this)}};ze.empty=new ze([],[]);ze.removeOverlap=od;var bt=ze.empty,qa=class r{constructor(e){this.members=e}map(e,t){let n=this.members.map(o=>o.map(e,t,Co));return r.from(n)}forChild(e,t){if(t.isLeaf)return ze.empty;let n=[];for(let o=0;o<this.members.length;o++){let i=this.members[o].forChild(e,t);i!=bt&&(i instanceof r?n=n.concat(i.members):n.push(i))}return r.from(n)}eq(e){if(!(e instanceof r)||e.members.length!=this.members.length)return!1;for(let t=0;t<this.members.length;t++)if(!this.members[t].eq(e.members[t]))return!1;return!0}locals(e){let t,n=!0;for(let o=0;o<this.members.length;o++){let i=this.members[o].localsInner(e);if(i.length)if(!t)t=i;else{n&&(t=t.slice(),n=!1);for(let s=0;s<i.length;s++)t.push(i[s])}}return t?od(n?t:t.sort(vo)):ui}static from(e){switch(e.length){case 0:return bt;case 1:return e[0];default:return new r(e.every(t=>t instanceof ze)?e:e.reduce((t,n)=>t.concat(n instanceof ze?n:n.members),[]))}}forEachSet(e){for(let t=0;t<this.members.length;t++)this.members[t].forEachSet(e)}};function ZS(r,e,t,n,o,i,s){let a=r.slice();for(let f=0,u=i;f<t.maps.length;f++){let d=0;t.maps[f].forEach((p,c,h,m)=>{let g=m-h-(c-p);for(let x=0;x<a.length;x+=3){let y=a[x+1];if(y<0||p>y+u-d)continue;let k=a[x]+u-d;c>=k?a[x+1]=p<=k?-2:-1:p>=u&&g&&(a[x]+=g,a[x+1]+=g)}d+=g}),u=t.maps[f].map(u,-1)}let l=!1;for(let f=0;f<a.length;f+=3)if(a[f+1]<0){if(a[f+1]==-2){l=!0,a[f+1]=-1;continue}let u=t.map(r[f]+i),d=u-o;if(d<0||d>=n.content.size){l=!0;continue}let p=t.map(r[f+1]+i,-1),c=p-o,{index:h,offset:m}=n.content.findIndex(d),g=n.maybeChild(h);if(g&&m==d&&m+g.nodeSize==c){let x=a[f+2].mapInner(t,g,u+1,r[f]+i+1,s);x!=bt?(a[f]=d,a[f+1]=c,a[f+2]=x):(a[f+1]=-2,l=!0)}else l=!0}if(l){let f=eC(a,r,e,t,o,i,s),u=$a(f,n,0,s);e=u.local;for(let d=0;d<a.length;d+=3)a[d+1]<0&&(a.splice(d,3),d-=3);for(let d=0,p=0;d<u.children.length;d+=3){let c=u.children[d];for(;p<a.length&&a[p]<c;)p+=3;a.splice(p,0,u.children[d],u.children[d+1],u.children[d+2])}}return new ze(e.sort(vo),a)}function ag(r,e){if(!e||!r.length)return r;let t=[];for(let n=0;n<r.length;n++){let o=r[n];t.push(new St(o.from+e,o.to+e,o.type))}return t}function eC(r,e,t,n,o,i,s){function a(l,f){for(let u=0;u<l.local.length;u++){let d=l.local[u].map(n,o,f);d?t.push(d):s.onRemove&&s.onRemove(l.local[u].spec)}for(let u=0;u<l.children.length;u+=3)a(l.children[u+2],l.children[u]+f+1)}for(let l=0;l<r.length;l+=3)r[l+1]==-1&&a(r[l+2],e[l]+i+1);return t}function lg(r,e,t){if(e.isLeaf)return null;let n=t+e.nodeSize,o=null;for(let i=0,s;i<r.length;i++)(s=r[i])&&s.from>t&&s.to<n&&((o||(o=[])).push(s),r[i]=null);return o}function fg(r){let e=[];for(let t=0;t<r.length;t++)r[t]!=null&&e.push(r[t]);return e}function $a(r,e,t,n){let o=[],i=!1;e.forEach((a,l)=>{let f=lg(r,a,l+t);if(f){i=!0;let u=$a(f,a,t+l+1,n);u!=bt&&o.push(l,l+a.nodeSize,u)}});let s=ag(i?fg(r):r,-t).sort(vo);for(let a=0;a<s.length;a++)s[a].type.valid(e,s[a])||(n.onRemove&&n.onRemove(s[a].spec),s.splice(a--,1));return s.length||o.length?new ze(s,o):bt}function vo(r,e){return r.from-e.from||r.to-e.to}function od(r){let e=r;for(let t=0;t<e.length-1;t++){let n=e[t];if(n.from!=n.to)for(let o=t+1;o<e.length;o++){let i=e[o];if(i.from==n.from){i.to!=n.to&&(e==r&&(e=r.slice()),e[o]=i.copy(i.from,n.to),Cm(e,o+1,i.copy(n.to,i.to)));continue}else{i.from<n.to&&(e==r&&(e=r.slice()),e[t]=n.copy(n.from,i.from),Cm(e,o,n.copy(i.from,n.to)));break}}}return e}function Cm(r,e,t){for(;e<r.length&&vo(t,r[e])>0;)e++;r.splice(e,0,t)}function Ou(r){let e=[];return r.someProp("decorations",t=>{let n=t(r.state);n&&n!=bt&&e.push(n)}),r.cursorWrapper&&e.push(ze.create(r.state.doc,[r.cursorWrapper.deco])),qa.from(e)}var tC={childList:!0,characterData:!0,characterDataOldValue:!0,attributes:!0,attributeOldValue:!0,subtree:!0},rC=jt&&Vn<=11,Ju=class{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}set(e){this.anchorNode=e.anchorNode,this.anchorOffset=e.anchorOffset,this.focusNode=e.focusNode,this.focusOffset=e.focusOffset}clear(){this.anchorNode=this.focusNode=null}eq(e){return e.anchorNode==this.anchorNode&&e.anchorOffset==this.anchorOffset&&e.focusNode==this.focusNode&&e.focusOffset==this.focusOffset}},Xu=class{constructor(e,t){this.view=e,this.handleDOMChange=t,this.queue=[],this.flushingSoon=-1,this.observer=null,this.currentSelection=new Ju,this.onCharData=null,this.suppressingSelectionUpdates=!1,this.lastChangedTextNode=null,this.observer=window.MutationObserver&&new window.MutationObserver(n=>{for(let o=0;o<n.length;o++)this.queue.push(n[o]);jt&&Vn<=11&&n.some(o=>o.type=="childList"&&o.removedNodes.length||o.type=="characterData"&&o.oldValue.length>o.target.nodeValue.length)?this.flushSoon():kt&&e.composing&&n.some(o=>o.type=="childList"&&o.target.nodeName=="TR")?(e.input.badSafariComposition=!0,this.flushSoon()):this.flush()}),rC&&(this.onCharData=n=>{this.queue.push({target:n.target,type:"characterData",oldValue:n.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this)}flushSoon(){this.flushingSoon<0&&(this.flushingSoon=window.setTimeout(()=>{this.flushingSoon=-1,this.flush()},20))}forceFlush(){this.flushingSoon>-1&&(window.clearTimeout(this.flushingSoon),this.flushingSoon=-1,this.flush())}start(){this.observer&&(this.observer.takeRecords(),this.observer.observe(this.view.dom,tC)),this.onCharData&&this.view.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.connectSelection()}stop(){if(this.observer){let e=this.observer.takeRecords();if(e.length){for(let t=0;t<e.length;t++)this.queue.push(e[t]);window.setTimeout(()=>this.flush(),20)}this.observer.disconnect()}this.onCharData&&this.view.dom.removeEventListener("DOMCharacterDataModified",this.onCharData),this.disconnectSelection()}connectSelection(){this.view.dom.ownerDocument.addEventListener("selectionchange",this.onSelectionChange)}disconnectSelection(){this.view.dom.ownerDocument.removeEventListener("selectionchange",this.onSelectionChange)}suppressSelectionUpdates(){this.suppressingSelectionUpdates=!0,setTimeout(()=>this.suppressingSelectionUpdates=!1,50)}onSelectionChange(){if(hm(this.view)){if(this.suppressingSelectionUpdates)return mn(this.view);if(jt&&Vn<=11&&!this.view.state.selection.empty){let e=this.view.domSelectionRange();if(e.focusNode&&wo(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset))return this.flushSoon()}this.flush()}}setCurSelection(){this.currentSelection.set(this.view.domSelectionRange())}ignoreSelectionChange(e){if(!e.focusNode)return!0;let t=new Set,n;for(let i=e.focusNode;i;i=ci(i))t.add(i);for(let i=e.anchorNode;i;i=ci(i))if(t.has(i)){n=i;break}let o=n&&this.view.docView.nearestDesc(n);if(o&&o.ignoreMutation({type:"selection",target:n.nodeType==3?n.parentNode:n}))return this.setCurSelection(),!0}pendingRecords(){if(this.observer)for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}flush(){let{view:e}=this;if(!e.docView||this.flushingSoon>-1)return;let t=this.pendingRecords();t.length&&(this.queue=[]);let n=e.domSelectionRange(),o=!this.suppressingSelectionUpdates&&!this.currentSelection.eq(n)&&hm(e)&&!this.ignoreSelectionChange(n),i=-1,s=-1,a=!1,l=[];if(e.editable)for(let u=0;u<t.length;u++){let d=this.registerMutation(t[u],l);d&&(i=i<0?d.from:Math.min(d.from,i),s=s<0?d.to:Math.max(d.to,s),d.typeOver&&(a=!0))}if(l.some(u=>u.nodeName=="BR")&&(e.input.lastKeyCode==8||e.input.lastKeyCode==46)){for(let u of l)if(u.nodeName=="BR"&&u.parentNode){let d=u.nextSibling;for(;d&&d.nodeType==1;){if(d.contentEditable=="false"){u.parentNode.removeChild(u);break}d=d.firstChild}}}else if(xr&&l.length){let u=l.filter(d=>d.nodeName=="BR");if(u.length==2){let[d,p]=u;d.parentNode&&d.parentNode.parentNode==p.parentNode?p.remove():d.remove()}else{let{focusNode:d}=this.currentSelection;for(let p of u){let c=p.parentNode;c&&c.nodeName=="LI"&&(!d||iC(e,d)!=c)&&p.remove()}}}let f=null;i<0&&o&&e.input.lastFocus>Date.now()-200&&Math.max(e.input.lastTouch,e.input.lastClick.time)<Date.now()-300&&Wa(n)&&(f=Qu(e))&&f.eq(W.near(e.state.doc.resolve(0),1))?(e.input.lastFocus=0,mn(e),this.currentSelection.set(n),e.scrollToSelection()):(i>-1||o)&&(i>-1&&(e.docView.markDirty(i,s),nC(e)),e.input.badSafariComposition&&(e.input.badSafariComposition=!1,sC(e,l)),this.handleDOMChange(i,s,a,l),e.docView&&e.docView.dirty?e.updateState(e.state):this.currentSelection.eq(n)||mn(e),this.currentSelection.set(n))}registerMutation(e,t){if(t.indexOf(e.target)>-1)return null;let n=this.view.docView.nearestDesc(e.target);if(e.type=="attributes"&&(n==this.view.docView||e.attributeName=="contenteditable"||e.attributeName=="style"&&!e.oldValue&&!e.target.getAttribute("style"))||!n||n.ignoreMutation(e))return null;if(e.type=="childList"){for(let u=0;u<e.addedNodes.length;u++){let d=e.addedNodes[u];t.push(d),d.nodeType==3&&(this.lastChangedTextNode=d)}if(n.contentDOM&&n.contentDOM!=n.dom&&!n.contentDOM.contains(e.target))return{from:n.posBefore,to:n.posAfter};let o=e.previousSibling,i=e.nextSibling;if(jt&&Vn<=11&&e.addedNodes.length)for(let u=0;u<e.addedNodes.length;u++){let{previousSibling:d,nextSibling:p}=e.addedNodes[u];(!d||Array.prototype.indexOf.call(e.addedNodes,d)<0)&&(o=d),(!p||Array.prototype.indexOf.call(e.addedNodes,p)<0)&&(i=p)}let s=o&&o.parentNode==e.target?at(o)+1:0,a=n.localPosFromDOM(e.target,s,-1),l=i&&i.parentNode==e.target?at(i):e.target.childNodes.length,f=n.localPosFromDOM(e.target,l,1);return{from:a,to:f}}else return e.type=="attributes"?{from:n.posAtStart-n.border,to:n.posAtEnd+n.border}:(this.lastChangedTextNode=e.target,{from:n.posAtStart,to:n.posAtEnd,typeOver:e.target.nodeValue==e.oldValue})}},vm=new WeakMap,wm=!1;function nC(r){if(!vm.has(r)&&(vm.set(r,null),["normal","nowrap","pre-line"].indexOf(getComputedStyle(r.dom).whiteSpace)!==-1)){if(r.requiresGeckoHackNode=xr,wm)return;console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."),wm=!0}}function _m(r,e){let t=e.startContainer,n=e.startOffset,o=e.endContainer,i=e.endOffset,s=r.domAtPos(r.state.selection.anchor);return wo(s.node,s.offset,o,i)&&([t,n,o,i]=[o,i,t,n]),{anchorNode:t,anchorOffset:n,focusNode:o,focusOffset:i}}function oC(r,e){if(e.getComposedRanges){let o=e.getComposedRanges(r.root)[0];if(o)return _m(r,o)}let t;function n(o){o.preventDefault(),o.stopImmediatePropagation(),t=o.getTargetRanges()[0]}return r.dom.addEventListener("beforeinput",n,!0),document.execCommand("indent"),r.dom.removeEventListener("beforeinput",n,!0),t?_m(r,t):null}function iC(r,e){for(let t=e.parentNode;t&&t!=r.dom;t=t.parentNode){let n=r.docView.nearestDesc(t,!0);if(n&&n.node.isBlock)return t}return null}function sC(r,e){var t;let{focusNode:n,focusOffset:o}=r.domSelectionRange();for(let i of e)if(((t=i.parentNode)===null||t===void 0?void 0:t.nodeName)=="TR"){let s=i.nextSibling;for(;s&&s.nodeName!="TD"&&s.nodeName!="TH";)s=s.nextSibling;if(s){let a=s;for(;;){let l=a.firstChild;if(!l||l.nodeType!=1||l.contentEditable=="false"||/^(BR|IMG)$/.test(l.nodeName))break;a=l}a.insertBefore(i,a.firstChild),n==i&&r.domSelection().collapse(i,o)}else i.parentNode.removeChild(i)}}function aC(r,e,t){let{node:n,fromOffset:o,toOffset:i,from:s,to:a}=r.docView.parseRange(e,t),l=r.domSelectionRange(),f,u=l.anchorNode;if(u&&r.dom.contains(u.nodeType==1?u:u.parentNode)&&(f=[{node:u,offset:l.anchorOffset}],Wa(l)||f.push({node:l.focusNode,offset:l.focusOffset})),lt&&r.input.lastKeyCode===8)for(let g=i;g>o;g--){let x=n.childNodes[g-1],y=x.pmViewDesc;if(x.nodeName=="BR"&&!y){i=g;break}if(!y||y.size)break}let d=r.state.doc,p=r.someProp("domParser")||zr.fromSchema(r.state.schema),c=d.resolve(s),h=null,m=p.parse(n,{topNode:c.parent,topMatch:c.parent.contentMatchAt(c.index()),topOpen:!0,from:o,to:i,preserveWhitespace:c.parent.type.whitespace=="pre"?"full":!0,findPositions:f,ruleFromNode:lC,context:c});if(f&&f[0].pos!=null){let g=f[0].pos,x=f[1]&&f[1].pos;x==null&&(x=g),h={anchor:g+s,head:x+s}}return{doc:m,sel:h,from:s,to:a}}function lC(r){let e=r.pmViewDesc;if(e)return e.parseRule();if(r.nodeName=="BR"&&r.parentNode){if(kt&&/^(ul|ol)$/i.test(r.parentNode.nodeName)){let t=document.createElement("div");return t.appendChild(document.createElement("li")),{skip:t}}else if(r.parentNode.lastChild==r||kt&&/^(tr|table)$/i.test(r.parentNode.nodeName))return{ignore:!0}}else if(r.nodeName=="IMG"&&r.getAttribute("mark-placeholder"))return{ignore:!0};return null}var fC=/^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;function uC(r,e,t,n,o){let i=r.input.compositionPendingChanges||(r.composing?r.input.compositionID:0);if(r.input.compositionPendingChanges=0,e<0){let b=r.input.lastSelectionTime>Date.now()-50?r.input.lastSelectionOrigin:null,T=Qu(r,b);if(T&&!r.state.selection.eq(T)){if(lt&&hn&&r.input.lastKeyCode===13&&Date.now()-100<r.input.lastKeyCodeTime&&r.someProp("handleKeyDown",E=>E(r,yo(13,"Enter"))))return;let M=r.state.tr.setSelection(T);b=="pointer"?M.setMeta("pointer",!0):b=="key"&&M.scrollIntoView(),i&&M.setMeta("composition",i),r.dispatch(M)}return}let s=r.state.doc.resolve(e),a=s.sharedDepth(t);e=s.before(a+1),t=r.state.doc.resolve(t).after(a+1);let l=r.state.selection,f=aC(r,e,t),u=r.state.doc,d=u.slice(f.from,f.to),p,c;r.input.lastKeyCode===8&&Date.now()-100<r.input.lastKeyCodeTime?(p=r.state.selection.to,c="end"):(p=r.state.selection.from,c="start"),r.input.lastKeyCode=null;let h=pC(d.content,f.doc.content,f.from,p,c);if(h&&r.input.domChangeCount++,(pi&&r.input.lastIOSEnter>Date.now()-225||hn)&&o.some(b=>b.nodeType==1&&!fC.test(b.nodeName))&&(!h||h.endA>=h.endB)&&r.someProp("handleKeyDown",b=>b(r,yo(13,"Enter")))){r.input.lastIOSEnter=0;return}if(!h)if(n&&l instanceof V&&!l.empty&&l.$head.sameParent(l.$anchor)&&!r.composing&&!(f.sel&&f.sel.anchor!=f.sel.head))h={start:l.from,endA:l.to,endB:l.to};else{if(f.sel){let b=Tm(r,r.state.doc,f.sel);if(b&&!b.eq(r.state.selection)){let T=r.state.tr.setSelection(b);i&&T.setMeta("composition",i),r.dispatch(T)}}return}r.state.selection.from<r.state.selection.to&&h.start==h.endB&&r.state.selection instanceof V&&(h.start>r.state.selection.from&&h.start<=r.state.selection.from+2&&r.state.selection.from>=f.from?h.start=r.state.selection.from:h.endA<r.state.selection.to&&h.endA>=r.state.selection.to-2&&r.state.selection.to<=f.to&&(h.endB+=r.state.selection.to-h.endA,h.endA=r.state.selection.to)),jt&&Vn<=11&&h.endB==h.start+1&&h.endA==h.start&&h.start>f.from&&f.doc.textBetween(h.start-f.from-1,h.start-f.from+1)==" \xA0"&&(h.start--,h.endA--,h.endB--);let m=f.doc.resolveNoCache(h.start-f.from),g=f.doc.resolveNoCache(h.endB-f.from),x=u.resolve(h.start),y=m.sameParent(g)&&m.parent.inlineContent&&x.end()>=h.endA;if((pi&&r.input.lastIOSEnter>Date.now()-225&&(!y||o.some(b=>b.nodeName=="DIV"||b.nodeName=="P"))||!y&&m.pos<f.doc.content.size&&(!m.sameParent(g)||!m.parent.inlineContent)&&m.pos<g.pos&&!/\S/.test(f.doc.textBetween(m.pos,g.pos,"","")))&&r.someProp("handleKeyDown",b=>b(r,yo(13,"Enter")))){r.input.lastIOSEnter=0;return}if(r.state.selection.anchor>h.start&&cC(u,h.start,h.endA,m,g)&&r.someProp("handleKeyDown",b=>b(r,yo(8,"Backspace")))){hn&&lt&&r.domObserver.suppressSelectionUpdates();return}lt&&h.endB==h.start&&(r.input.lastChromeDelete=Date.now()),hn&&!y&&m.start()!=g.start()&&g.parentOffset==0&&m.depth==g.depth&&f.sel&&f.sel.anchor==f.sel.head&&f.sel.head==h.endA&&(h.endB-=2,g=f.doc.resolveNoCache(h.endB-f.from),setTimeout(()=>{r.someProp("handleKeyDown",function(b){return b(r,yo(13,"Enter"))})},20));let k=h.start,S=h.endA,C=b=>{let T=b||r.state.tr.replace(k,S,f.doc.slice(h.start-f.from,h.endB-f.from));if(f.sel){let M=Tm(r,T.doc,f.sel);M&&!(lt&&r.composing&&M.empty&&(h.start!=h.endB||r.input.lastChromeDelete<Date.now()-100)&&(M.head==k||M.head==T.mapping.map(S)-1)||jt&&M.empty&&M.head==k)&&T.setSelection(M)}return i&&T.setMeta("composition",i),T.scrollIntoView()},w;if(y)if(m.pos==g.pos){jt&&Vn<=11&&m.parentOffset==0&&(r.domObserver.suppressSelectionUpdates(),setTimeout(()=>mn(r),20));let b=C(r.state.tr.delete(k,S)),T=u.resolve(h.start).marksAcross(u.resolve(h.endA));T&&b.ensureMarks(T),r.dispatch(b)}else if(h.endA==h.endB&&(w=dC(m.parent.content.cut(m.parentOffset,g.parentOffset),x.parent.content.cut(x.parentOffset,h.endA-x.start())))){let b=C(r.state.tr);w.type=="add"?b.addMark(k,S,w.mark):b.removeMark(k,S,w.mark),r.dispatch(b)}else if(m.parent.child(m.index()).isText&&m.index()==g.index()-(g.textOffset?0:1)){let b=m.parent.textBetween(m.parentOffset,g.parentOffset),T=()=>C(r.state.tr.insertText(b,k,S));r.someProp("handleTextInput",M=>M(r,k,S,b,T))||r.dispatch(T())}else r.dispatch(C());else r.dispatch(C())}function Tm(r,e,t){return Math.max(t.anchor,t.head)>e.content.size?null:Zu(r,e.resolve(t.anchor),e.resolve(t.head))}function dC(r,e){let t=r.firstChild.marks,n=e.firstChild.marks,o=t,i=n,s,a,l;for(let u=0;u<n.length;u++)o=n[u].removeFromSet(o);for(let u=0;u<t.length;u++)i=t[u].removeFromSet(i);if(o.length==1&&i.length==0)a=o[0],s="add",l=u=>u.mark(a.addToSet(u.marks));else if(o.length==0&&i.length==1)a=i[0],s="remove",l=u=>u.mark(a.removeFromSet(u.marks));else return null;let f=[];for(let u=0;u<e.childCount;u++)f.push(l(e.child(u)));if(A.from(f).eq(r))return{mark:a,type:s}}function cC(r,e,t,n,o){if(t-e<=o.pos-n.pos||Du(n,!0,!1)<o.pos)return!1;let i=r.resolve(e);if(!n.parent.isTextblock){let a=i.nodeAfter;return a!=null&&t==e+a.nodeSize}if(i.parentOffset<i.parent.content.size||!i.parent.isTextblock)return!1;let s=r.resolve(Du(i,!0,!0));return!s.parent.isTextblock||s.pos>t||Du(s,!0,!1)<t?!1:n.parent.content.cut(n.parentOffset).eq(s.parent.content)}function Du(r,e,t){let n=r.depth,o=e?r.end():r.pos;for(;n>0&&(e||r.indexAfter(n)==r.node(n).childCount);)n--,o++,e=!1;if(t){let i=r.node(n).maybeChild(r.indexAfter(n));for(;i&&!i.isLeaf;)i=i.firstChild,o++}return o}function pC(r,e,t,n,o){let i=r.findDiffStart(e,t);if(i==null)return null;let{a:s,b:a}=r.findDiffEnd(e,t+r.size,t+e.size);if(o=="end"){let l=Math.max(0,i-Math.min(s,a));n-=s+l-i}if(s<i&&r.size<e.size){let l=n<=i&&n>=s?i-n:0;i-=l,i&&i<e.size&&Mm(e.textBetween(i-1,i+1))&&(i+=l?1:-1),a=i+(a-s),s=i}else if(a<i){let l=n<=i&&n>=a?i-n:0;i-=l,i&&i<r.size&&Mm(r.textBetween(i-1,i+1))&&(i+=l?1:-1),s=i+(s-a),a=i}return{start:i,endA:s,endB:a}}function Mm(r){if(r.length!=2)return!1;let e=r.charCodeAt(0),t=r.charCodeAt(1);return e>=56320&&e<=57343&&t>=55296&&t<=56319}var ps=class{constructor(e,t){this._root=null,this.focused=!1,this.trackWrites=null,this.mounted=!1,this.markCursor=null,this.cursorWrapper=null,this.lastSelectedViewDesc=void 0,this.input=new Wu,this.prevDirectPlugins=[],this.pluginViews=[],this.requiresGeckoHackNode=!1,this.dragging=null,this._props=t,this.state=t.state,this.directPlugins=t.plugins||[],this.directPlugins.forEach(Dm),this.dispatch=this.dispatch.bind(this),this.dom=e&&e.mount||document.createElement("div"),e&&(e.appendChild?e.appendChild(this.dom):typeof e=="function"?e(this.dom):e.mount&&(this.mounted=!0)),this.editable=Pm(this),Am(this),this.nodeViews=Om(this),this.docView=lm(this.state.doc,Em(this),Ou(this),this.dom,this),this.domObserver=new Xu(this,(n,o,i,s)=>uC(this,n,o,i,s)),this.domObserver.start(),LS(this),this.updatePluginViews()}get composing(){return this.input.composing}get props(){if(this._props.state!=this.state){let e=this._props;this._props={};for(let t in e)this._props[t]=e[t];this._props.state=this.state}return this._props}update(e){e.handleDOMEvents!=this._props.handleDOMEvents&&Ku(this);let t=this._props;this._props=e,e.plugins&&(e.plugins.forEach(Dm),this.directPlugins=e.plugins),this.updateStateInner(e.state,t)}setProps(e){let t={};for(let n in this._props)t[n]=this._props[n];t.state=this.state;for(let n in e)t[n]=e[n];this.update(t)}updateState(e){this.updateStateInner(e,this._props)}updateStateInner(e,t){var n;let o=this.state,i=!1,s=!1;e.storedMarks&&this.composing&&(og(this),s=!0),this.state=e;let a=o.plugins!=e.plugins||this._props.plugins!=t.plugins;if(a||this._props.plugins!=t.plugins||this._props.nodeViews!=t.nodeViews){let c=Om(this);mC(c,this.nodeViews)&&(this.nodeViews=c,i=!0)}(a||t.handleDOMEvents!=this._props.handleDOMEvents)&&Ku(this),this.editable=Pm(this),Am(this);let l=Ou(this),f=Em(this),u=o.plugins!=e.plugins&&!o.doc.eq(e.doc)?"reset":e.scrollToSelection>o.scrollToSelection?"to selection":"preserve",d=i||!this.docView.matchesNode(e.doc,f,l);(d||!e.selection.eq(o.selection))&&(s=!0);let p=u=="preserve"&&s&&this.dom.style.overflowAnchor==null&&Yk(this);if(s){this.domObserver.stop();let c=d&&(jt||lt)&&!this.composing&&!o.selection.empty&&!e.selection.empty&&hC(o.selection,e.selection);if(d){let h=lt?this.trackWrites=this.domSelectionRange().focusNode:null;this.composing&&(this.input.compositionNode=KS(this)),(i||!this.docView.update(e.doc,f,l,this))&&(this.docView.updateOuterDeco(f),this.docView.destroy(),this.docView=lm(e.doc,f,l,this.dom,this)),h&&(!this.trackWrites||!this.dom.contains(this.trackWrites))&&(c=!0)}c||!(this.input.mouseDown&&this.domObserver.currentSelection.eq(this.domSelectionRange())&&yS(this))?mn(this,c):(Km(this,e.selection),this.domObserver.setCurSelection()),this.domObserver.start()}this.updatePluginViews(o),!((n=this.dragging)===null||n===void 0)&&n.node&&!o.doc.eq(e.doc)&&this.updateDraggedNode(this.dragging,o),u=="reset"?this.dom.scrollTop=0:u=="to selection"?this.scrollToSelection():p&&Qk(p)}scrollToSelection(){let e=this.domSelectionRange().focusNode;if(!(!e||!this.dom.contains(e.nodeType==1?e:e.parentNode))){if(!this.someProp("handleScrollToSelection",t=>t(this)))if(this.state.selection instanceof F){let t=this.docView.domAfterPos(this.state.selection.from);t.nodeType==1&&rm(this,t.getBoundingClientRect(),e)}else rm(this,this.coordsAtPos(this.state.selection.head,1),e)}}destroyPluginViews(){let e;for(;e=this.pluginViews.pop();)e.destroy&&e.destroy()}updatePluginViews(e){if(!e||e.plugins!=this.state.plugins||this.directPlugins!=this.prevDirectPlugins){this.prevDirectPlugins=this.directPlugins,this.destroyPluginViews();for(let t=0;t<this.directPlugins.length;t++){let n=this.directPlugins[t];n.spec.view&&this.pluginViews.push(n.spec.view(this))}for(let t=0;t<this.state.plugins.length;t++){let n=this.state.plugins[t];n.spec.view&&this.pluginViews.push(n.spec.view(this))}}else for(let t=0;t<this.pluginViews.length;t++){let n=this.pluginViews[t];n.update&&n.update(this,e)}}updateDraggedNode(e,t){let n=e.node,o=-1;if(n.from<this.state.doc.content.size&&this.state.doc.nodeAt(n.from)==n.node)o=n.from;else{let i=n.from+(this.state.doc.content.size-t.doc.content.size);(i>0&&i<this.state.doc.content.size&&this.state.doc.nodeAt(i))==n.node&&(o=i)}this.dragging=new Va(e.slice,e.move,o<0?void 0:F.create(this.state.doc,o))}someProp(e,t){let n=this._props&&this._props[e],o;if(n!=null&&(o=t?t(n):n))return o;for(let s=0;s<this.directPlugins.length;s++){let a=this.directPlugins[s].props[e];if(a!=null&&(o=t?t(a):a))return o}let i=this.state.plugins;if(i)for(let s=0;s<i.length;s++){let a=i[s].props[e];if(a!=null&&(o=t?t(a):a))return o}}hasFocus(){if(jt){let e=this.root.activeElement;if(e==this.dom)return!0;if(!e||!this.dom.contains(e))return!1;for(;e&&this.dom!=e&&this.dom.contains(e);){if(e.contentEditable=="false")return!1;e=e.parentElement}return!0}return this.root.activeElement==this.dom}focus(){this.domObserver.stop(),this.editable&&Zk(this.dom),mn(this),this.domObserver.start()}get root(){let e=this._root;if(e==null){for(let t=this.dom.parentNode;t;t=t.parentNode)if(t.nodeType==9||t.nodeType==11&&t.host)return t.getSelection||(Object.getPrototypeOf(t).getSelection=()=>t.ownerDocument.getSelection()),this._root=t}return e||document}updateRoot(){this._root=null}posAtCoords(e){return oS(this,e)}coordsAtPos(e,t=1){return Hm(this,e,t)}domAtPos(e,t=0){return this.docView.domFromPos(e,t)}nodeDOM(e){let t=this.docView.descAt(e);return t?t.nodeDOM:null}posAtDOM(e,t,n=-1){let o=this.docView.posFromDOM(e,t,n);if(o==null)throw new RangeError("DOM position not inside the editor");return o}endOfTextblock(e,t){return fS(this,t||this.state,e)}pasteHTML(e,t){return ds(this,"",e,!1,t||new ClipboardEvent("paste"))}pasteText(e,t){return ds(this,e,null,!0,t||new ClipboardEvent("paste"))}serializeForClipboard(e){return ed(this,e)}destroy(){this.docView&&(NS(this),this.destroyPluginViews(),this.mounted?(this.docView.update(this.state.doc,[],Ou(this),this),this.dom.textContent=""):this.dom.parentNode&&this.dom.parentNode.removeChild(this.dom),this.docView.destroy(),this.docView=null,Vk())}get isDestroyed(){return this.docView==null}dispatchEvent(e){return IS(this,e)}domSelectionRange(){let e=this.domSelection();return e?kt&&this.root.nodeType===11&&Kk(this.dom.ownerDocument)==this.dom&&oC(this,e)||e:{focusNode:null,focusOffset:0,anchorNode:null,anchorOffset:0}}domSelection(){return this.root.getSelection()}};ps.prototype.dispatch=function(r){let e=this._props.dispatchTransaction;e?e.call(this,r):this.updateState(this.state.apply(r))};function Em(r){let e=Object.create(null);return e.class="ProseMirror",e.contenteditable=String(r.editable),r.someProp("attributes",t=>{if(typeof t=="function"&&(t=t(r.state)),t)for(let n in t)n=="class"?e.class+=" "+t[n]:n=="style"?e.style=(e.style?e.style+";":"")+t[n]:!e[n]&&n!="contenteditable"&&n!="nodeName"&&(e[n]=String(t[n]))}),e.translate||(e.translate="no"),[St.node(0,r.state.doc.content.size,e)]}function Am(r){if(r.markCursor){let e=document.createElement("img");e.className="ProseMirror-separator",e.setAttribute("mark-placeholder","true"),e.setAttribute("alt",""),r.cursorWrapper={dom:e,deco:St.widget(r.state.selection.from,e,{raw:!0,marks:r.markCursor})}}else r.cursorWrapper=null}function Pm(r){return!r.someProp("editable",e=>e(r.state)===!1)}function hC(r,e){let t=Math.min(r.$anchor.sharedDepth(r.head),e.$anchor.sharedDepth(e.head));return r.$anchor.start(t)!=e.$anchor.start(t)}function Om(r){let e=Object.create(null);function t(n){for(let o in n)Object.prototype.hasOwnProperty.call(e,o)||(e[o]=n[o])}return r.someProp("nodeViews",t),r.someProp("markViews",t),e}function mC(r,e){let t=0,n=0;for(let o in r){if(r[o]!=e[o])return!0;t++}for(let o in e)n++;return t!=n}function Dm(r){if(r.spec.state||r.spec.filterTransaction||r.spec.appendTransaction)throw new RangeError("Plugins passed directly to the view must not have a state component")}var gn={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},Ga={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'},gC=typeof navigator<"u"&&/Mac/.test(navigator.platform),xC=typeof navigator<"u"&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);for($e=0;$e<10;$e++)gn[48+$e]=gn[96+$e]=String($e);var $e;for($e=1;$e<=24;$e++)gn[$e+111]="F"+$e;var $e;for($e=65;$e<=90;$e++)gn[$e]=String.fromCharCode($e+32),Ga[$e]=String.fromCharCode($e);var $e;for(ja in gn)Ga.hasOwnProperty(ja)||(Ga[ja]=gn[ja]);var ja;function ug(r){var e=gC&&r.metaKey&&r.shiftKey&&!r.ctrlKey&&!r.altKey||xC&&r.shiftKey&&r.key&&r.key.length==1||r.key=="Unidentified",t=!e&&r.key||(r.shiftKey?Ga:gn)[r.keyCode]||r.key||"Unidentified";return t=="Esc"&&(t="Escape"),t=="Del"&&(t="Delete"),t=="Left"&&(t="ArrowLeft"),t=="Up"&&(t="ArrowUp"),t=="Right"&&(t="ArrowRight"),t=="Down"&&(t="ArrowDown"),t}var yC=typeof navigator<"u"&&/Mac|iP(hone|[oa]d)/.test(navigator.platform),bC=typeof navigator<"u"&&/Win/.test(navigator.platform);function kC(r){let e=r.split(/-(?!$)/),t=e[e.length-1];t=="Space"&&(t=" ");let n,o,i,s;for(let a=0;a<e.length-1;a++){let l=e[a];if(/^(cmd|meta|m)$/i.test(l))s=!0;else if(/^a(lt)?$/i.test(l))n=!0;else if(/^(c|ctrl|control)$/i.test(l))o=!0;else if(/^s(hift)?$/i.test(l))i=!0;else if(/^mod$/i.test(l))yC?s=!0:o=!0;else throw new Error("Unrecognized modifier name: "+l)}return n&&(t="Alt-"+t),o&&(t="Ctrl-"+t),s&&(t="Meta-"+t),i&&(t="Shift-"+t),t}function SC(r){let e=Object.create(null);for(let t in r)e[kC(t)]=r[t];return e}function id(r,e,t=!0){return e.altKey&&(r="Alt-"+r),e.ctrlKey&&(r="Ctrl-"+r),e.metaKey&&(r="Meta-"+r),t&&e.shiftKey&&(r="Shift-"+r),r}function dg(r){return new K({props:{handleKeyDown:sd(r)}})}function sd(r){let e=SC(r);return function(t,n){let o=ug(n),i,s=e[id(o,n)];if(s&&s(t.state,t.dispatch,t))return!0;if(o.length==1&&o!=" "){if(n.shiftKey){let a=e[id(o,n,!1)];if(a&&a(t.state,t.dispatch,t))return!0}if((n.altKey||n.metaKey||n.ctrlKey)&&!(bC&&n.ctrlKey&&n.altKey)&&(i=gn[n.keyCode])&&i!=o){let a=e[id(i,n)];if(a&&a(t.state,t.dispatch,t))return!0}}return!1}}var CC=Object.defineProperty,cd=(r,e)=>{for(var t in e)CC(r,t,{get:e[t],enumerable:!0})};function rl(r){let{state:e,transaction:t}=r,{selection:n}=t,{doc:o}=t,{storedMarks:i}=t;return{...e,apply:e.apply.bind(e),applyTransaction:e.applyTransaction.bind(e),plugins:e.plugins,schema:e.schema,reconfigure:e.reconfigure.bind(e),toJSON:e.toJSON.bind(e),get storedMarks(){return i},get selection(){return n},get doc(){return o},get tr(){return n=t.selection,o=t.doc,i=t.storedMarks,t}}}var nl=class{constructor(r){this.editor=r.editor,this.rawCommands=this.editor.extensionManager.commands,this.customState=r.state}get hasCustomState(){return!!this.customState}get state(){return this.customState||this.editor.state}get commands(){let{rawCommands:r,editor:e,state:t}=this,{view:n}=e,{tr:o}=t,i=this.buildProps(o);return Object.fromEntries(Object.entries(r).map(([s,a])=>[s,(...f)=>{let u=a(...f)(i);return!o.getMeta("preventDispatch")&&!this.hasCustomState&&n.dispatch(o),u}]))}get chain(){return()=>this.createChain()}get can(){return()=>this.createCan()}createChain(r,e=!0){let{rawCommands:t,editor:n,state:o}=this,{view:i}=n,s=[],a=!!r,l=r||o.tr,f=()=>(!a&&e&&!l.getMeta("preventDispatch")&&!this.hasCustomState&&i.dispatch(l),s.every(d=>d===!0)),u={...Object.fromEntries(Object.entries(t).map(([d,p])=>[d,(...h)=>{let m=this.buildProps(l,e),g=p(...h)(m);return s.push(g),u}])),run:f};return u}createCan(r){let{rawCommands:e,state:t}=this,n=!1,o=r||t.tr,i=this.buildProps(o,n);return{...Object.fromEntries(Object.entries(e).map(([a,l])=>[a,(...f)=>l(...f)({...i,dispatch:void 0})])),chain:()=>this.createChain(o,n)}}buildProps(r,e=!0){let{rawCommands:t,editor:n,state:o}=this,{view:i}=n,s={tr:r,editor:n,view:i,state:rl({state:o,transaction:r}),dispatch:e?()=>{}:void 0,chain:()=>this.createChain(r,e),can:()=>this.createCan(r),get commands(){return Object.fromEntries(Object.entries(t).map(([a,l])=>[a,(...f)=>l(...f)(s)]))}};return s}},Sg={};cd(Sg,{blur:()=>vC,clearContent:()=>wC,clearNodes:()=>_C,command:()=>TC,createParagraphNear:()=>MC,cut:()=>EC,deleteCurrentNode:()=>AC,deleteNode:()=>PC,deleteRange:()=>OC,deleteSelection:()=>DC,enter:()=>LC,exitCode:()=>NC,extendMarkRange:()=>RC,first:()=>IC,focus:()=>FC,forEach:()=>zC,insertContent:()=>HC,insertContentAt:()=>qC,joinBackward:()=>KC,joinDown:()=>WC,joinForward:()=>jC,joinItemBackward:()=>GC,joinItemForward:()=>JC,joinTextblockBackward:()=>XC,joinTextblockForward:()=>YC,joinUp:()=>$C,keyboardShortcut:()=>ZC,lift:()=>e1,liftEmptyBlock:()=>t1,liftListItem:()=>r1,newlineInCode:()=>n1,resetAttributes:()=>o1,scrollIntoView:()=>i1,selectAll:()=>s1,selectNodeBackward:()=>a1,selectNodeForward:()=>l1,selectParentNode:()=>f1,selectTextblockEnd:()=>u1,selectTextblockStart:()=>d1,setContent:()=>c1,setMark:()=>A1,setMeta:()=>P1,setNode:()=>O1,setNodeSelection:()=>D1,setTextDirection:()=>L1,setTextSelection:()=>N1,sinkListItem:()=>R1,splitBlock:()=>I1,splitListItem:()=>B1,toggleList:()=>z1,toggleMark:()=>H1,toggleNode:()=>V1,toggleWrap:()=>U1,undoInputRule:()=>q1,unsetAllMarks:()=>$1,unsetMark:()=>W1,unsetTextDirection:()=>K1,updateAttributes:()=>j1,wrapIn:()=>G1,wrapInList:()=>J1});var vC=()=>({editor:r,view:e})=>(requestAnimationFrame(()=>{var t;r.isDestroyed||(e.dom.blur(),(t=window?.getSelection())==null||t.removeAllRanges())}),!0),wC=(r=!0)=>({commands:e})=>e.setContent("",{emitUpdate:r}),_C=()=>({state:r,tr:e,dispatch:t})=>{let{selection:n}=e,{ranges:o}=n;return t&&o.forEach(({$from:i,$to:s})=>{r.doc.nodesBetween(i.pos,s.pos,(a,l)=>{if(a.type.isText)return;let{doc:f,mapping:u}=e,d=f.resolve(u.map(l)),p=f.resolve(u.map(l+a.nodeSize)),c=d.blockRange(p);if(!c)return;let h=dn(c);if(a.type.isTextblock){let{defaultType:m}=d.parent.contentMatchAt(d.index());e.setNodeMarkup(c.start,m)}(h||h===0)&&e.lift(c,h)})}),!0},TC=r=>e=>r(e),MC=()=>({state:r,dispatch:e})=>Cu(r,e),EC=(r,e)=>({editor:t,tr:n})=>{let{state:o}=t,i=o.doc.slice(r.from,r.to);n.deleteRange(r.from,r.to);let s=n.mapping.map(e);return n.insert(s,i.content),n.setSelection(new V(n.doc.resolve(Math.max(s-1,0)))),!0},AC=()=>({tr:r,dispatch:e})=>{let{selection:t}=r,n=t.$anchor.node();if(n.content.size>0)return!1;let o=r.selection.$anchor;for(let i=o.depth;i>0;i-=1)if(o.node(i).type===n.type){if(e){let a=o.before(i),l=o.after(i);r.delete(a,l).scrollIntoView()}return!0}return!1};function Oe(r,e){if(typeof r=="string"){if(!e.nodes[r])throw Error(`There is no node type named '${r}'. Maybe you forgot to add the extension?`);return e.nodes[r]}return r}var PC=r=>({tr:e,state:t,dispatch:n})=>{let o=Oe(r,t.schema),i=e.selection.$anchor;for(let s=i.depth;s>0;s-=1)if(i.node(s).type===o){if(n){let l=i.before(s),f=i.after(s);e.delete(l,f).scrollIntoView()}return!0}return!1},OC=r=>({tr:e,dispatch:t})=>{let{from:n,to:o}=r;return t&&e.delete(n,o),!0},DC=()=>({state:r,dispatch:e})=>Na(r,e),LC=()=>({commands:r})=>r.keyboardShortcut("Enter"),NC=()=>({state:r,dispatch:e})=>Su(r,e);function pd(r){return Object.prototype.toString.call(r)==="[object RegExp]"}function el(r,e,t={strict:!0}){let n=Object.keys(e);return n.length?n.every(o=>t.strict?e[o]===r[o]:pd(e[o])?e[o].test(r[o]):e[o]===r[o]):!0}function Cg(r,e,t={}){return r.find(n=>n.type===e&&el(Object.fromEntries(Object.keys(t).map(o=>[o,n.attrs[o]])),t))}function cg(r,e,t={}){return!!Cg(r,e,t)}function hd(r,e,t){if(!r||!e)return;let n=r.parent.childAfter(r.parentOffset);if((!n.node||!n.node.marks.some(f=>f.type===e))&&(n=r.parent.childBefore(r.parentOffset)),!n.node||!n.node.marks.some(f=>f.type===e))return;if(!t){let f=n.node.marks.find(u=>u.type===e);f&&(t=f.attrs)}if(!Cg([...n.node.marks],e,t))return;let i=n.index,s=r.start()+n.offset,a=i+1,l=s+n.node.nodeSize;for(;i>0&&cg([...r.parent.child(i-1).marks],e,t);)i-=1,s-=r.parent.child(i).nodeSize;for(;a<r.parent.childCount&&cg([...r.parent.child(a).marks],e,t);)l+=r.parent.child(a).nodeSize,a+=1;return{from:s,to:l}}function xn(r,e){if(typeof r=="string"){if(!e.marks[r])throw Error(`There is no mark type named '${r}'. Maybe you forgot to add the extension?`);return e.marks[r]}return r}var RC=(r,e)=>({tr:t,state:n,dispatch:o})=>{let i=xn(r,n.schema),{doc:s,selection:a}=t,{$from:l,from:f,to:u}=a;if(o){let d=hd(l,i,e);if(d&&d.from<=f&&d.to>=u){let p=V.create(s,d.from,d.to);t.setSelection(p)}}return!0},IC=r=>e=>{let t=typeof r=="function"?r(e):r;for(let n=0;n<t.length;n+=1)if(t[n](e))return!0;return!1};function vg(r){return r instanceof V}function To(r=0,e=0,t=0){return Math.min(Math.max(r,e),t)}function wg(r,e=null){if(!e)return null;let t=W.atStart(r),n=W.atEnd(r);if(e==="start"||e===!0)return t;if(e==="end")return n;let o=t.from,i=n.to;return e==="all"?V.create(r,To(0,o,i),To(r.content.size,o,i)):V.create(r,To(e,o,i),To(e,o,i))}function pg(){return navigator.platform==="Android"||/android/i.test(navigator.userAgent)}function tl(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}function BC(){return typeof navigator<"u"?/^((?!chrome|android).)*safari/i.test(navigator.userAgent):!1}var FC=(r=null,e={})=>({editor:t,view:n,tr:o,dispatch:i})=>{e={scrollIntoView:!0,...e};let s=()=>{(tl()||pg())&&n.dom.focus(),BC()&&!tl()&&!pg()&&n.dom.focus({preventScroll:!0}),requestAnimationFrame(()=>{t.isDestroyed||(n.focus(),e?.scrollIntoView&&t.commands.scrollIntoView())})};try{if(n.hasFocus()&&r===null||r===!1)return!0}catch{return!1}if(i&&r===null&&!vg(t.state.selection))return s(),!0;let a=wg(o.doc,r)||t.state.selection,l=t.state.selection.eq(a);return i&&(l||o.setSelection(a),l&&o.storedMarks&&o.setStoredMarks(o.storedMarks),s()),!0},zC=(r,e)=>t=>r.every((n,o)=>e(n,{...t,index:o})),HC=(r,e)=>({tr:t,commands:n})=>n.insertContentAt({from:t.selection.from,to:t.selection.to},r,e),_g=r=>{let e=r.childNodes;for(let t=e.length-1;t>=0;t-=1){let n=e[t];n.nodeType===3&&n.nodeValue&&/^(\n\s\s|\n)$/.test(n.nodeValue)?r.removeChild(n):n.nodeType===1&&_g(n)}return r};function Ja(r){if(typeof window>"u")throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");let e=`<body>${r}</body>`,t=new window.DOMParser().parseFromString(e,"text/html").body;return _g(t)}function bs(r,e,t){if(r instanceof Kt||r instanceof A)return r;t={slice:!0,parseOptions:{},...t};let n=typeof r=="object"&&r!==null,o=typeof r=="string";if(n)try{if(Array.isArray(r)&&r.length>0)return A.fromArray(r.map(a=>e.nodeFromJSON(a)));let s=e.nodeFromJSON(r);return t.errorOnInvalidContent&&s.check(),s}catch(i){if(t.errorOnInvalidContent)throw new Error("[tiptap error]: Invalid JSON content",{cause:i});return console.warn("[tiptap warn]: Invalid content.","Passed value:",r,"Error:",i),bs("",e,t)}if(o){if(t.errorOnInvalidContent){let s=!1,a="",l=new ti({topNode:e.spec.topNode,marks:e.spec.marks,nodes:e.spec.nodes.append({__tiptap__private__unknown__catch__all__node:{content:"inline*",group:"block",parseDOM:[{tag:"*",getAttrs:f=>(s=!0,a=typeof f=="string"?f:f.outerHTML,null)}]}})});if(t.slice?zr.fromSchema(l).parseSlice(Ja(r),t.parseOptions):zr.fromSchema(l).parse(Ja(r),t.parseOptions),t.errorOnInvalidContent&&s)throw new Error("[tiptap error]: Invalid HTML content",{cause:new Error(`Invalid element found: ${a}`)})}let i=zr.fromSchema(e);return t.slice?i.parseSlice(Ja(r),t.parseOptions).content:i.parse(Ja(r),t.parseOptions)}return bs("",e,t)}function VC(r,e,t){let n=r.steps.length-1;if(n<e)return;let o=r.steps[n];if(!(o instanceof st||o instanceof qe))return;let i=r.mapping.maps[n],s=0;i.forEach((a,l,f,u)=>{s===0&&(s=u)}),r.setSelection(W.near(r.doc.resolve(s),t))}var UC=r=>!("type"in r),qC=(r,e,t)=>({tr:n,dispatch:o,editor:i})=>{var s;if(o){t={parseOptions:i.options.parseOptions,updateSelection:!0,applyInputRules:!1,applyPasteRules:!1,...t};let a,l=g=>{i.emit("contentError",{editor:i,error:g,disableCollaboration:()=>{"collaboration"in i.storage&&typeof i.storage.collaboration=="object"&&i.storage.collaboration&&(i.storage.collaboration.isDisabled=!0)}})},f={preserveWhitespace:"full",...t.parseOptions};if(!t.errorOnInvalidContent&&!i.options.enableContentCheck&&i.options.emitContentError)try{bs(e,i.schema,{parseOptions:f,errorOnInvalidContent:!0})}catch(g){l(g)}try{a=bs(e,i.schema,{parseOptions:f,errorOnInvalidContent:(s=t.errorOnInvalidContent)!=null?s:i.options.enableContentCheck})}catch(g){return l(g),!1}let{from:u,to:d}=typeof r=="number"?{from:r,to:r}:{from:r.from,to:r.to},p=!0,c=!0;if((UC(a)?a:[a]).forEach(g=>{g.check(),p=p?g.isText&&g.marks.length===0:!1,c=c?g.isBlock:!1}),u===d&&c){let{parent:g}=n.doc.resolve(u);g.isTextblock&&!g.type.spec.code&&!g.childCount&&(u-=1,d+=1)}let m;if(p){if(Array.isArray(e))m=e.map(g=>g.text||"").join("");else if(e instanceof A){let g="";e.forEach(x=>{x.text&&(g+=x.text)}),m=g}else typeof e=="object"&&e&&e.text?m=e.text:m=e;n.insertText(m,u,d)}else{m=a;let g=n.doc.resolve(u),x=g.node(),y=g.parentOffset===0,k=x.isText||x.isTextblock,S=x.content.size>0;y&&k&&S&&c&&(u=Math.max(0,u-1)),n.replaceWith(u,d,m)}t.updateSelection&&VC(n,n.steps.length-1,-1),t.applyInputRules&&n.setMeta("applyInputRules",{from:u,text:m}),t.applyPasteRules&&n.setMeta("applyPasteRules",{from:u,text:m})}return!0},$C=()=>({state:r,dispatch:e})=>$h(r,e),WC=()=>({state:r,dispatch:e})=>Wh(r,e),KC=()=>({state:r,dispatch:e})=>pu(r,e),jC=()=>({state:r,dispatch:e})=>gu(r,e),GC=()=>({state:r,dispatch:e,tr:t})=>{try{let n=go(r.doc,r.selection.$from.pos,-1);return n==null?!1:(t.join(n,2),e&&e(t),!0)}catch{return!1}},JC=()=>({state:r,dispatch:e,tr:t})=>{try{let n=go(r.doc,r.selection.$from.pos,1);return n==null?!1:(t.join(n,2),e&&e(t),!0)}catch{return!1}},XC=()=>({state:r,dispatch:e})=>Hh(r,e),YC=()=>({state:r,dispatch:e})=>Vh(r,e);function Tg(){return typeof navigator<"u"?/Mac/.test(navigator.platform):!1}function QC(r){let e=r.split(/-(?!$)/),t=e[e.length-1];t==="Space"&&(t=" ");let n,o,i,s;for(let a=0;a<e.length-1;a+=1){let l=e[a];if(/^(cmd|meta|m)$/i.test(l))s=!0;else if(/^a(lt)?$/i.test(l))n=!0;else if(/^(c|ctrl|control)$/i.test(l))o=!0;else if(/^s(hift)?$/i.test(l))i=!0;else if(/^mod$/i.test(l))tl()||Tg()?s=!0:o=!0;else throw new Error(`Unrecognized modifier name: ${l}`)}return n&&(t=`Alt-${t}`),o&&(t=`Ctrl-${t}`),s&&(t=`Meta-${t}`),i&&(t=`Shift-${t}`),t}var ZC=r=>({editor:e,view:t,tr:n,dispatch:o})=>{let i=QC(r).split(/-(?!$)/),s=i.find(f=>!["Alt","Ctrl","Meta","Shift"].includes(f)),a=new KeyboardEvent("keydown",{key:s==="Space"?" ":s,altKey:i.includes("Alt"),ctrlKey:i.includes("Ctrl"),metaKey:i.includes("Meta"),shiftKey:i.includes("Shift"),bubbles:!0,cancelable:!0}),l=e.captureTransaction(()=>{t.someProp("handleKeyDown",f=>f(t,a))});return l?.steps.forEach(f=>{let u=f.map(n.mapping);u&&o&&n.maybeStep(u)}),!0};function Ur(r,e,t={}){let{from:n,to:o,empty:i}=r.selection,s=e?Oe(e,r.schema):null,a=[];r.doc.nodesBetween(n,o,(d,p)=>{if(d.isText)return;let c=Math.max(n,p),h=Math.min(o,p+d.nodeSize);a.push({node:d,from:c,to:h})});let l=o-n,f=a.filter(d=>s?s.name===d.node.type.name:!0).filter(d=>el(d.node.attrs,t,{strict:!1}));return i?!!f.length:f.reduce((d,p)=>d+p.to-p.from,0)>=l}var e1=(r,e={})=>({state:t,dispatch:n})=>{let o=Oe(r,t.schema);return Ur(t,o,e)?Kh(t,n):!1},t1=()=>({state:r,dispatch:e})=>vu(r,e),r1=r=>({state:e,dispatch:t})=>{let n=Oe(r,e.schema);return Qh(n)(e,t)},n1=()=>({state:r,dispatch:e})=>bu(r,e);function ol(r,e){return e.nodes[r]?"node":e.marks[r]?"mark":null}function hg(r,e){let t=typeof e=="string"?[e]:e;return Object.keys(r).reduce((n,o)=>(t.includes(o)||(n[o]=r[o]),n),{})}var o1=(r,e)=>({tr:t,state:n,dispatch:o})=>{let i=null,s=null,a=ol(typeof r=="string"?r:r.name,n.schema);if(!a)return!1;a==="node"&&(i=Oe(r,n.schema)),a==="mark"&&(s=xn(r,n.schema));let l=!1;return t.selection.ranges.forEach(f=>{n.doc.nodesBetween(f.$from.pos,f.$to.pos,(u,d)=>{i&&i===u.type&&(l=!0,o&&t.setNodeMarkup(d,void 0,hg(u.attrs,e))),s&&u.marks.length&&u.marks.forEach(p=>{s===p.type&&(l=!0,o&&t.addMark(d,d+u.nodeSize,s.create(hg(p.attrs,e))))})})}),l},i1=()=>({tr:r,dispatch:e})=>(e&&r.scrollIntoView(),!0),s1=()=>({tr:r,dispatch:e})=>{if(e){let t=new Nt(r.doc);r.setSelection(t)}return!0},a1=()=>({state:r,dispatch:e})=>hu(r,e),l1=()=>({state:r,dispatch:e})=>xu(r,e),f1=()=>({state:r,dispatch:e})=>jh(r,e),u1=()=>({state:r,dispatch:e})=>_u(r,e),d1=()=>({state:r,dispatch:e})=>wu(r,e);function ud(r,e,t={},n={}){return bs(r,e,{slice:!1,parseOptions:t,errorOnInvalidContent:n.errorOnInvalidContent})}var c1=(r,{errorOnInvalidContent:e,emitUpdate:t=!0,parseOptions:n={}}={})=>({editor:o,tr:i,dispatch:s,commands:a})=>{let{doc:l}=i;if(n.preserveWhitespace!=="full"){let f=ud(r,o.schema,n,{errorOnInvalidContent:e??o.options.enableContentCheck});return s&&i.replaceWith(0,l.content.size,f).setMeta("preventUpdate",!t),!0}return s&&i.setMeta("preventUpdate",!t),a.insertContentAt({from:0,to:l.content.size},r,{parseOptions:n,errorOnInvalidContent:e??o.options.enableContentCheck})};function Mg(r,e){let t=xn(e,r.schema),{from:n,to:o,empty:i}=r.selection,s=[];i?(r.storedMarks&&s.push(...r.storedMarks),s.push(...r.selection.$head.marks())):r.doc.nodesBetween(n,o,l=>{s.push(...l.marks)});let a=s.find(l=>l.type.name===t.name);return a?{...a.attrs}:{}}function md(r,e){let t=new oi(r);return e.forEach(n=>{n.steps.forEach(o=>{t.step(o)})}),t}function p1(r){for(let e=0;e<r.edgeCount;e+=1){let{type:t}=r.edge(e);if(t.isTextblock&&!t.hasRequiredAttrs())return t}return null}function Eg(r,e,t){let n=[];return r.nodesBetween(e.from,e.to,(o,i)=>{t(o)&&n.push({node:o,pos:i})}),n}function h1(r,e){for(let t=r.depth;t>0;t-=1){let n=r.node(t);if(e(n))return{pos:t>0?r.before(t):0,start:r.start(t),depth:t,node:n}}}function il(r){return e=>h1(e.$from,r)}function H(r,e,t){return r.config[e]===void 0&&r.parent?H(r.parent,e,t):typeof r.config[e]=="function"?r.config[e].bind({...t,parent:r.parent?H(r.parent,e,t):null}):r.config[e]}function gd(r){return r.map(e=>{let t={name:e.name,options:e.options,storage:e.storage},n=H(e,"addExtensions",t);return n?[e,...gd(n())]:e}).flat(10)}function xd(r,e){let t=ln.fromSchema(e).serializeFragment(r),o=document.implementation.createHTMLDocument().createElement("div");return o.appendChild(t),o.innerHTML}function Ag(r){return typeof r=="function"}function pe(r,e=void 0,...t){return Ag(r)?e?r.bind(e)(...t):r(...t):r}function m1(r={}){return Object.keys(r).length===0&&r.constructor===Object}function mi(r){let e=r.filter(o=>o.type==="extension"),t=r.filter(o=>o.type==="node"),n=r.filter(o=>o.type==="mark");return{baseExtensions:e,nodeExtensions:t,markExtensions:n}}function Pg(r){let e=[],{nodeExtensions:t,markExtensions:n}=mi(r),o=[...t,...n],i={default:null,validate:void 0,rendered:!0,renderHTML:null,parseHTML:null,keepOnSplit:!0,isRequired:!1},s=t.filter(f=>f.name!=="text").map(f=>f.name),a=n.map(f=>f.name),l=[...s,...a];return r.forEach(f=>{let u={name:f.name,options:f.options,storage:f.storage,extensions:o},d=H(f,"addGlobalAttributes",u);if(!d)return;d().forEach(c=>{let h;Array.isArray(c.types)?h=c.types:c.types==="*"?h=l:c.types==="nodes"?h=s:c.types==="marks"?h=a:h=[],h.forEach(m=>{Object.entries(c.attributes).forEach(([g,x])=>{e.push({type:m,name:g,attribute:{...i,...x}})})})})}),o.forEach(f=>{let u={name:f.name,options:f.options,storage:f.storage},d=H(f,"addAttributes",u);if(!d)return;let p=d();Object.entries(p).forEach(([c,h])=>{let m={...i,...h};typeof m?.default=="function"&&(m.default=m.default()),m?.isRequired&&m?.default===void 0&&delete m.default,e.push({type:f.name,name:c,attribute:m})})}),e}function g1(r){let e=[],t="",n=!1,o=!1,i=0,s=r.length;for(let a=0;a<s;a+=1){let l=r[a];if(l==="'"&&!o){n=!n,t+=l;continue}if(l==='"'&&!n){o=!o,t+=l;continue}if(!n&&!o){if(l==="("){i+=1,t+=l;continue}if(l===")"&&i>0){i-=1,t+=l;continue}if(l===";"&&i===0){e.push(t),t="";continue}}t+=l}return t&&e.push(t),e}function mg(r){let e=[],t=g1(r||""),n=t.length;for(let o=0;o<n;o+=1){let i=t[o],s=i.indexOf(":");if(s===-1)continue;let a=i.slice(0,s).trim(),l=i.slice(s+1).trim();a&&l&&e.push([a,l])}return e}function ie(...r){return r.filter(e=>!!e).reduce((e,t)=>{let n={...e};return Object.entries(t).forEach(([o,i])=>{if(!n[o]){n[o]=i;return}if(o==="class"){let a=i?String(i).split(" "):[],l=n[o]?n[o].split(" "):[],f=a.filter(u=>!l.includes(u));n[o]=[...l,...f].join(" ")}else if(o==="style"){let a=new Map([...mg(n[o]),...mg(i)]);n[o]=Array.from(a.entries()).map(([l,f])=>`${l}: ${f}`).join("; ")}else n[o]=i}),n},{})}function gi(r,e){return e.filter(t=>t.type===r.type.name).filter(t=>t.attribute.rendered).map(t=>t.attribute.renderHTML?t.attribute.renderHTML(r.attrs)||{}:{[t.name]:r.attrs[t.name]}).reduce((t,n)=>ie(t,n),{})}function x1(r){return typeof r!="string"?r:r.match(/^[+-]?(?:\d*\.)?\d+$/)?Number(r):r==="true"?!0:r==="false"?!1:r}function gg(r,e){return"style"in r?r:{...r,getAttrs:t=>{let n=r.getAttrs?r.getAttrs(t):r.attrs;if(n===!1)return!1;let o=e.reduce((i,s)=>{let a=s.attribute.parseHTML?s.attribute.parseHTML(t):x1(t.getAttribute(s.name));return a==null?i:{...i,[s.name]:a}},{});return{...n,...o}}}}function xg(r){return Object.fromEntries(Object.entries(r).filter(([e,t])=>e==="attrs"&&m1(t)?!1:t!=null))}function yg(r){var e,t;let n={};return!((e=r?.attribute)!=null&&e.isRequired)&&"default"in(r?.attribute||{})&&(n.default=r.attribute.default),((t=r?.attribute)==null?void 0:t.validate)!==void 0&&(n.validate=r.attribute.validate),[r.name,n]}function y1(r,e){var t;let n=Pg(r),{nodeExtensions:o,markExtensions:i}=mi(r),s=(t=o.find(f=>H(f,"topNode")))==null?void 0:t.name,a=Object.fromEntries(o.map(f=>{let u=n.filter(x=>x.type===f.name),d={name:f.name,options:f.options,storage:f.storage,editor:e},p=r.reduce((x,y)=>{let k=H(y,"extendNodeSchema",d);return{...x,...k?k(f):{}}},{}),c=xg({...p,content:pe(H(f,"content",d)),marks:pe(H(f,"marks",d)),group:pe(H(f,"group",d)),inline:pe(H(f,"inline",d)),atom:pe(H(f,"atom",d)),selectable:pe(H(f,"selectable",d)),draggable:pe(H(f,"draggable",d)),code:pe(H(f,"code",d)),whitespace:pe(H(f,"whitespace",d)),linebreakReplacement:pe(H(f,"linebreakReplacement",d)),defining:pe(H(f,"defining",d)),isolating:pe(H(f,"isolating",d)),attrs:Object.fromEntries(u.map(yg))}),h=pe(H(f,"parseHTML",d));h&&(c.parseDOM=h.map(x=>gg(x,u)));let m=H(f,"renderHTML",d);m&&(c.toDOM=x=>m({node:x,HTMLAttributes:gi(x,u)}));let g=H(f,"renderText",d);return g&&(c.toText=g),[f.name,c]})),l=Object.fromEntries(i.map(f=>{let u=n.filter(g=>g.type===f.name),d={name:f.name,options:f.options,storage:f.storage,editor:e},p=r.reduce((g,x)=>{let y=H(x,"extendMarkSchema",d);return{...g,...y?y(f):{}}},{}),c=xg({...p,inclusive:pe(H(f,"inclusive",d)),excludes:pe(H(f,"excludes",d)),group:pe(H(f,"group",d)),spanning:pe(H(f,"spanning",d)),code:pe(H(f,"code",d)),attrs:Object.fromEntries(u.map(yg))}),h=pe(H(f,"parseHTML",d));h&&(c.parseDOM=h.map(g=>gg(g,u)));let m=H(f,"renderHTML",d);return m&&(c.toDOM=g=>m({mark:g,HTMLAttributes:gi(g,u)})),[f.name,c]}));return new ti({topNode:s,nodes:a,marks:l})}function b1(r){let e=r.filter((t,n)=>r.indexOf(t)!==n);return Array.from(new Set(e))}function ys(r){return r.sort((t,n)=>{let o=H(t,"priority")||100,i=H(n,"priority")||100;return o>i?-1:o<i?1:0})}function Og(r){let e=ys(gd(r)),t=b1(e.map(n=>n.name));return t.length&&console.warn(`[tiptap warn]: Duplicate extension names found: [${t.map(n=>`'${n}'`).join(", ")}]. This can lead to issues.`),e}function Dg(r,e,t){let{from:n,to:o}=e,{blockSeparator:i=`

`,textSerializers:s={}}=t||{},a="";return r.nodesBetween(n,o,(l,f,u,d)=>{var p;l.isBlock&&f>n&&(a+=i);let c=s?.[l.type.name];if(c)return u&&(a+=c({node:l,pos:f,parent:u,index:d,range:e})),!1;l.isText&&(a+=(p=l?.text)==null?void 0:p.slice(Math.max(n,f)-f,o-f))}),a}function k1(r,e){let t={from:0,to:r.content.size};return Dg(r,t,e)}function Lg(r){return Object.fromEntries(Object.entries(r.nodes).filter(([,e])=>e.spec.toText).map(([e,t])=>[e,t.spec.toText]))}function S1(r,e){let t=Oe(e,r.schema),{from:n,to:o}=r.selection,i=[];r.doc.nodesBetween(n,o,a=>{i.push(a)});let s=i.reverse().find(a=>a.type.name===t.name);return s?{...s.attrs}:{}}function yd(r,e){let t=ol(typeof e=="string"?e:e.name,r.schema);return t==="node"?S1(r,e):t==="mark"?Mg(r,e):{}}function C1(r,e=JSON.stringify){let t={};return r.filter(n=>{let o=e(n);return Object.prototype.hasOwnProperty.call(t,o)?!1:t[o]=!0})}function v1(r){let e=C1(r);return e.length===1?e:e.filter((t,n)=>!e.filter((i,s)=>s!==n).some(i=>t.oldRange.from>=i.oldRange.from&&t.oldRange.to<=i.oldRange.to&&t.newRange.from>=i.newRange.from&&t.newRange.to<=i.newRange.to))}function bd(r){let{mapping:e,steps:t}=r,n=[];return e.maps.forEach((o,i)=>{let s=[];if(o.ranges.length)o.forEach((a,l)=>{s.push({from:a,to:l})});else{let{from:a,to:l}=t[i];if(a===void 0||l===void 0)return;s.push({from:a,to:l})}s.forEach(({from:a,to:l})=>{let f=e.slice(i).map(a,-1),u=e.slice(i).map(l),d=e.invert().map(f,-1),p=e.invert().map(u);n.push({oldRange:{from:d,to:p},newRange:{from:f,to:u}})})}),v1(n)}function sl(r,e,t){let n=[];return r===e?t.resolve(r).marks().forEach(o=>{let i=t.resolve(r),s=hd(i,o.type);s&&n.push({mark:o,...s})}):t.nodesBetween(r,e,(o,i)=>{!o||o?.nodeSize===void 0||n.push(...o.marks.map(s=>({from:i,to:i+o.nodeSize,mark:s})))}),n}var Ng=(r,e,t,n=20)=>{let o=r.doc.resolve(t),i=n,s=null;for(;i>0&&s===null;){let a=o.node(i);a?.type.name===e?s=a:i-=1}return[s,i]};function gs(r,e){return e.nodes[r]||e.marks[r]||null}function Za(r,e,t){return Object.fromEntries(Object.entries(t).filter(([n])=>{let o=r.find(i=>i.type===e&&i.name===n);return o?o.attribute.keepOnSplit:!1}))}var w1=(r,e=500)=>{let t="",n=r.parentOffset;return r.parent.nodesBetween(Math.max(0,n-e),n,(o,i,s,a)=>{var l,f;let u=((f=(l=o.type.spec).toText)==null?void 0:f.call(l,{node:o,pos:i,parent:s,index:a}))||o.textContent||"%leaf%";t+=o.isAtom&&!o.isText?u:u.slice(0,Math.max(0,n-i))}),t};function dd(r,e,t={}){let{empty:n,ranges:o}=r.selection,i=e?xn(e,r.schema):null;if(n)return!!(r.storedMarks||r.selection.$from.marks()).filter(d=>i?i.name===d.type.name:!0).find(d=>el(d.attrs,t,{strict:!1}));let s=0,a=[];if(o.forEach(({$from:d,$to:p})=>{let c=d.pos,h=p.pos;r.doc.nodesBetween(c,h,(m,g)=>{if(i&&m.inlineContent&&!m.type.allowsMarkType(i))return!1;if(!m.isText&&!m.marks.length)return;let x=Math.max(c,g),y=Math.min(h,g+m.nodeSize),k=y-x;s+=k,a.push(...m.marks.map(S=>({mark:S,from:x,to:y})))})}),s===0)return!1;let l=a.filter(d=>i?i.name===d.mark.type.name:!0).filter(d=>el(d.mark.attrs,t,{strict:!1})).reduce((d,p)=>d+p.to-p.from,0),f=a.filter(d=>i?d.mark.type!==i&&d.mark.type.excludes(i):!0).reduce((d,p)=>d+p.to-p.from,0);return(l>0?l+f:l)>=s}function _1(r,e,t={}){if(!e)return Ur(r,null,t)||dd(r,null,t);let n=ol(e,r.schema);return n==="node"?Ur(r,e,t):n==="mark"?dd(r,e,t):!1}var Rg=(r,e)=>{let{$from:t,$to:n,$anchor:o}=r.selection;if(e){let i=il(a=>a.type.name===e)(r.selection);if(!i)return!1;let s=r.doc.resolve(i.pos+1);return o.pos+1===s.end()}return!(n.parentOffset<n.parent.nodeSize-2||t.pos!==n.pos)},Ig=r=>{let{$from:e,$to:t}=r.selection;return!(e.parentOffset>0||e.pos!==t.pos)};function bg(r,e){return Array.isArray(e)?e.some(t=>(typeof t=="string"?t:t.name)===r.name):e}function ad(r,e){let{nodeExtensions:t}=mi(e),n=t.find(s=>s.name===r);if(!n)return!1;let o={name:n.name,options:n.options,storage:n.storage},i=pe(H(n,"group",o));return typeof i!="string"?!1:i.split(" ").includes("list")}function ks(r,{checkChildren:e=!0,ignoreWhitespace:t=!1}={}){var n;if(t){if(r.type.name==="hardBreak")return!0;if(r.isText)return!/\S/.test((n=r.text)!=null?n:"")}if(r.isText)return!r.text;if(r.isAtom||r.isLeaf)return!1;if(r.content.childCount===0)return!0;if(e){let o=!0;return r.content.forEach(i=>{o!==!1&&(ks(i,{ignoreWhitespace:t,checkChildren:e})||(o=!1))}),o}return!1}function al(r){return r instanceof F}var Bg=class Fg{constructor(e){this.position=e}static fromJSON(e){return new Fg(e.position)}toJSON(){return{position:this.position}}};function T1(r,e){let t=e.mapping.mapResult(r.position);return{position:new Bg(t.pos),mapResult:t}}function M1(r){return new Bg(r)}function E1(r,e,t){var n;let{selection:o}=e,i=null;if(vg(o)&&(i=o.$cursor),i){let a=(n=r.storedMarks)!=null?n:i.marks();return i.parent.type.allowsMarkType(t)&&(!!t.isInSet(a)||!a.some(f=>f.type.excludes(t)))}let{ranges:s}=o;return s.some(({$from:a,$to:l})=>{let f=a.depth===0?r.doc.inlineContent&&r.doc.type.allowsMarkType(t):!1;return r.doc.nodesBetween(a.pos,l.pos,(u,d,p)=>{if(f)return!1;if(u.isInline){let c=!p||p.type.allowsMarkType(t),h=!!t.isInSet(u.marks)||!u.marks.some(m=>m.type.excludes(t));f=c&&h}return!f}),f})}var A1=(r,e={})=>({tr:t,state:n,dispatch:o})=>{let{selection:i}=t,{empty:s,ranges:a}=i,l=xn(r,n.schema);if(o)if(s){let f=Mg(n,l);t.addStoredMark(l.create({...f,...e}))}else a.forEach(f=>{let u=f.$from.pos,d=f.$to.pos;n.doc.nodesBetween(u,d,(p,c)=>{let h=Math.max(c,u),m=Math.min(c+p.nodeSize,d);p.marks.find(x=>x.type===l)?p.marks.forEach(x=>{l===x.type&&t.addMark(h,m,l.create({...x.attrs,...e}))}):t.addMark(h,m,l.create(e))})});return E1(n,t,l)},P1=(r,e)=>({tr:t})=>(t.setMeta(r,e),!0),O1=(r,e={})=>({state:t,dispatch:n,chain:o})=>{let i=Oe(r,t.schema),s;return t.selection.$anchor.sameParent(t.selection.$head)&&(s=t.selection.$anchor.parent.attrs),i.isTextblock?o().command(({commands:a})=>Tu(i,{...s,...e})(t)?!0:a.clearNodes()).command(({state:a})=>Tu(i,{...s,...e})(a,n)).run():(console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'),!1)},D1=r=>({tr:e,dispatch:t})=>{if(t){let{doc:n}=e,o=To(r,0,n.content.size),i=F.create(n,o);e.setSelection(i)}return!0},L1=(r,e)=>({tr:t,state:n,dispatch:o})=>{let{selection:i}=n,s,a;return typeof e=="number"?(s=e,a=e):e&&"from"in e&&"to"in e?(s=e.from,a=e.to):(s=i.from,a=i.to),o&&t.doc.nodesBetween(s,a,(l,f)=>{l.isText||t.setNodeMarkup(f,void 0,{...l.attrs,dir:r})}),!0},N1=r=>({tr:e,dispatch:t})=>{if(t){let{doc:n}=e,{from:o,to:i}=typeof r=="number"?{from:r,to:r}:r,s=V.atStart(n).from,a=V.atEnd(n).to,l=To(o,s,a),f=To(i,s,a),u=V.create(n,l,f);e.setSelection(u)}return!0},R1=r=>({state:e,dispatch:t})=>{let n=Oe(r,e.schema);return Zh(n)(e,t)};function kg(r,e){let t=r.storedMarks||r.selection.$to.parentOffset&&r.selection.$from.marks();if(t){let n=t.filter(o=>e?.includes(o.type.name));r.tr.ensureMarks(n)}}var I1=({keepMarks:r=!0}={})=>({tr:e,state:t,dispatch:n,editor:o})=>{let{selection:i,doc:s}=e,{$from:a,$to:l}=i,f=o.extensionManager.attributes,u=Za(f,a.node().type.name,a.node().attrs);if(i instanceof F&&i.node.isBlock)return!a.parentOffset||!nr(s,a.pos)?!1:(n&&(r&&kg(t,o.extensionManager.splittableMarks),e.split(a.pos).scrollIntoView()),!0);if(!a.parent.isBlock)return!1;let d=l.parentOffset===l.parent.content.size,p=a.depth===0?void 0:p1(a.node(-1).contentMatchAt(a.indexAfter(-1))),c=d&&p?[{type:p,attrs:u}]:void 0,h=nr(e.doc,e.mapping.map(a.pos),1,c);if(!c&&!h&&nr(e.doc,e.mapping.map(a.pos),1,p?[{type:p}]:void 0)&&(h=!0,c=p?[{type:p,attrs:u}]:void 0),n){if(h&&(i instanceof V&&e.deleteSelection(),e.split(e.mapping.map(a.pos),1,c),p&&!d&&!a.parentOffset&&a.parent.type!==p)){let m=e.mapping.map(a.before()),g=e.doc.resolve(m);a.node(-1).canReplaceWith(g.index(),g.index()+1,p)&&e.setNodeMarkup(e.mapping.map(a.before()),p)}r&&kg(t,o.extensionManager.splittableMarks),e.scrollIntoView()}return h},B1=(r,e={})=>({tr:t,state:n,dispatch:o,editor:i})=>{var s;let a=Oe(r,n.schema),{$from:l,$to:f}=n.selection,u=n.selection.node;if(u&&u.isBlock||l.depth<2||!l.sameParent(f))return!1;let d=l.node(-1);if(d.type!==a)return!1;let p=i.extensionManager.attributes;if(l.parent.content.size===0&&l.node(-1).childCount===l.indexAfter(-1)){if(l.depth===2||l.node(-3).type!==a||l.index(-2)!==l.node(-2).childCount-1)return!1;if(o){let x=A.empty,y=l.index(-1)?1:l.index(-2)?2:3;for(let T=l.depth-y;T>=l.depth-3;T-=1)x=A.from(l.node(T).copy(x));let k=l.indexAfter(-1)<l.node(-2).childCount?1:l.indexAfter(-2)<l.node(-3).childCount?2:3,S={...Za(p,l.node().type.name,l.node().attrs),...e},C=((s=a.contentMatch.defaultType)==null?void 0:s.createAndFill(S))||void 0;x=x.append(A.from(a.createAndFill(null,C)||void 0));let w=l.before(l.depth-(y-1));t.replace(w,l.after(-k),new L(x,4-y,0));let b=-1;t.doc.nodesBetween(w,t.doc.content.size,(T,M)=>{if(b>-1)return!1;T.isTextblock&&T.content.size===0&&(b=M+1)}),b>-1&&t.setSelection(V.near(t.doc.resolve(b))),t.scrollIntoView()}return!0}let c=f.pos===l.end()?d.contentMatchAt(0).defaultType:null,h={...Za(p,d.type.name,d.attrs),...e},m={...Za(p,l.node().type.name,l.node().attrs),...e};t.delete(l.pos,f.pos);let g=c?[{type:a,attrs:h},{type:c,attrs:m}]:[{type:a,attrs:h}];if(!nr(t.doc,l.pos,2))return!1;if(o){let{selection:x,storedMarks:y}=n,{splittableMarks:k}=i.extensionManager,S=y||x.$to.parentOffset&&x.$from.marks();if(t.split(l.pos,2,g).scrollIntoView(),!S||!o)return!0;let C=S.filter(w=>k.includes(w.type.name));t.ensureMarks(C)}return!0},ld=(r,e)=>{let t=il(s=>s.type===e)(r.selection);if(!t)return!0;let n=r.doc.resolve(Math.max(0,t.pos-1)).before(t.depth);if(n===void 0)return!0;let o=r.doc.nodeAt(n);return t.node.type===o?.type&&hr(r.doc,t.pos)&&r.join(t.pos),!0},fd=(r,e)=>{let t=il(s=>s.type===e)(r.selection);if(!t)return!0;let n=r.doc.resolve(t.start).after(t.depth);if(n===void 0)return!0;let o=r.doc.nodeAt(n);return t.node.type===o?.type&&hr(r.doc,n)&&r.join(n),!0};function F1(r){let e=r.doc,t=e.firstChild;if(!t)return null;let n=1,o=t.nodeSize-1;return V.create(e,n,o)}var z1=(r,e,t,n={})=>({editor:o,tr:i,state:s,dispatch:a,chain:l,commands:f,can:u})=>{let{extensions:d,splittableMarks:p}=o.extensionManager,c=Oe(r,s.schema),h=Oe(e,s.schema),{selection:m,storedMarks:g}=s,{$from:x,$to:y}=m,k=x.blockRange(y),S=g||m.$to.parentOffset&&m.$from.marks();if(!k)return!1;let C=il(B=>ad(B.type.name,d))(m),w=m.from===0&&m.to===s.doc.content.size,b=s.doc.content.content,T=b.length===1?b[0]:null,M=w&&T&&ad(T.type.name,d)?{node:T,pos:0,depth:0}:null,E=C??M,U=!!C&&k.depth>=1&&k.depth-C.depth<=1,O=!!M;if((U||O)&&E){if(E.node.type===c)return w&&O?l().command(({tr:B,dispatch:R})=>{let z=F1(B);return z?(B.setSelection(z),R&&R(B),!0):!1}).liftListItem(h).run():f.liftListItem(h);if(ad(E.node.type.name,d)&&c.validContent(E.node.content))return l().command(()=>(i.setNodeMarkup(E.pos,c),!0)).command(()=>ld(i,c)).command(()=>fd(i,c)).run()}return!t||!S||!a?l().command(()=>u().wrapInList(c,n)?!0:f.clearNodes()).wrapInList(c,n).command(()=>ld(i,c)).command(()=>fd(i,c)).run():l().command(()=>{let B=u().wrapInList(c,n),R=S.filter(z=>p.includes(z.type.name));return i.ensureMarks(R),B?!0:f.clearNodes()}).wrapInList(c,n).command(()=>ld(i,c)).command(()=>fd(i,c)).run()},H1=(r,e={},t={})=>({state:n,commands:o})=>{let{extendEmptyMarkRange:i=!1}=t,s=xn(r,n.schema);return dd(n,s,e)?o.unsetMark(s,{extendEmptyMarkRange:i}):o.setMark(s,e)},V1=(r,e,t={})=>({state:n,commands:o})=>{let i=Oe(r,n.schema),s=Oe(e,n.schema),a=Ur(n,i,t),l;return n.selection.$anchor.sameParent(n.selection.$head)&&(l=n.selection.$anchor.parent.attrs),a?o.setNode(s,l):o.setNode(i,{...l,...t})},U1=(r,e={})=>({state:t,commands:n})=>{let o=Oe(r,t.schema);return Ur(t,o,e)?n.lift(o):n.wrapIn(o,e)},q1=()=>({state:r,dispatch:e})=>{let t=r.plugins;for(let n=0;n<t.length;n+=1){let o=t[n],i;if(o.spec.isInputRules&&(i=o.getState(r))){if(e){let s=r.tr,a=i.transform;for(let l=a.steps.length-1;l>=0;l-=1)s.step(a.steps[l].invert(a.docs[l]));if(i.text){let l=s.doc.resolve(i.from).marks();s.replaceWith(i.from,i.to,r.schema.text(i.text,l))}else s.delete(i.from,i.to)}return!0}}return!1},$1=()=>({tr:r,dispatch:e})=>{let{selection:t}=r,{empty:n,ranges:o}=t;return n||e&&o.forEach(i=>{r.removeMark(i.$from.pos,i.$to.pos)}),!0},W1=(r,e={})=>({tr:t,state:n,dispatch:o})=>{var i;let{extendEmptyMarkRange:s=!1}=e,{selection:a}=t,l=xn(r,n.schema),{$from:f,empty:u,ranges:d}=a;if(!o)return!0;if(u&&s){let{from:p,to:c}=a,h=(i=f.marks().find(g=>g.type===l))==null?void 0:i.attrs,m=hd(f,l,h);m&&(p=m.from,c=m.to),t.removeMark(p,c,l)}else d.forEach(p=>{t.removeMark(p.$from.pos,p.$to.pos,l)});return t.removeStoredMark(l),!0},K1=r=>({tr:e,state:t,dispatch:n})=>{let{selection:o}=t,i,s;return typeof r=="number"?(i=r,s=r):r&&"from"in r&&"to"in r?(i=r.from,s=r.to):(i=o.from,s=o.to),n&&e.doc.nodesBetween(i,s,(a,l)=>{if(a.isText)return;let f={...a.attrs};delete f.dir,e.setNodeMarkup(l,void 0,f)}),!0},j1=(r,e={})=>({tr:t,state:n,dispatch:o})=>{let i=null,s=null,a=ol(typeof r=="string"?r:r.name,n.schema);if(!a)return!1;a==="node"&&(i=Oe(r,n.schema)),a==="mark"&&(s=xn(r,n.schema));let l=!1;return t.selection.ranges.forEach(f=>{let u=f.$from.pos,d=f.$to.pos,p,c,h,m;t.selection.empty?n.doc.nodesBetween(u,d,(g,x)=>{i&&i===g.type&&(l=!0,h=Math.max(x,u),m=Math.min(x+g.nodeSize,d),p=x,c=g)}):n.doc.nodesBetween(u,d,(g,x)=>{x<u&&i&&i===g.type&&(l=!0,h=Math.max(x,u),m=Math.min(x+g.nodeSize,d),p=x,c=g),x>=u&&x<=d&&(i&&i===g.type&&(l=!0,o&&t.setNodeMarkup(x,void 0,{...g.attrs,...e})),s&&g.marks.length&&g.marks.forEach(y=>{if(s===y.type&&(l=!0,o)){let k=Math.max(x,u),S=Math.min(x+g.nodeSize,d);t.addMark(k,S,s.create({...y.attrs,...e}))}}))}),c&&(p!==void 0&&o&&t.setNodeMarkup(p,void 0,{...c.attrs,...e}),s&&c.marks.length&&c.marks.forEach(g=>{s===g.type&&o&&t.addMark(h,m,s.create({...g.attrs,...e}))}))}),l},G1=(r,e={})=>({state:t,dispatch:n})=>{let o=Oe(r,t.schema);return Xh(o,e)(t,n)},J1=(r,e={})=>({state:t,dispatch:n})=>{let o=Oe(r,t.schema);return Yh(o,e)(t,n)},X1=class{constructor(){this.callbacks={}}on(r,e){return this.callbacks[r]||(this.callbacks[r]=[]),this.callbacks[r].push(e),this}emit(r,...e){let t=this.callbacks[r];return t&&t.forEach(n=>n.apply(this,e)),this}off(r,e){let t=this.callbacks[r];return t&&(e?this.callbacks[r]=t.filter(n=>n!==e):delete this.callbacks[r]),this}once(r,e){let t=(...n)=>{this.off(r,t),e.apply(this,n)};return this.on(r,t)}removeAllListeners(){this.callbacks={}}},ll=class{constructor(r){var e;this.find=r.find,this.handler=r.handler,this.undoable=(e=r.undoable)!=null?e:!0}},Y1=(r,e)=>{if(pd(e))return e.exec(r);let t=e(r);if(!t)return null;let n=[t.text];return n.index=t.index,n.input=r,n.data=t.data,t.replaceWith&&(t.text.includes(t.replaceWith)||console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'),n.push(t.replaceWith)),n};function Xa(r){var e;let{editor:t,from:n,to:o,text:i,rules:s,plugin:a}=r,{view:l}=t;if(l.composing)return!1;let f=l.state.doc.resolve(n);if(f.parent.type.spec.code||(e=f.nodeBefore||f.nodeAfter)!=null&&e.marks.find(p=>p.type.spec.code))return!1;let u=!1,d=w1(f)+i;return s.forEach(p=>{if(u)return;let c=Y1(d,p.find);if(!c)return;let h=l.state.tr,m=rl({state:l.state,transaction:h}),g={from:n-(c[0].length-i.length),to:o},{commands:x,chain:y,can:k}=new nl({editor:t,state:m});p.handler({state:m,range:g,match:c,commands:x,chain:y,can:k})===null||!h.steps.length||(p.undoable&&h.setMeta(a,{transform:h,from:n,to:o,text:i}),l.dispatch(h),u=!0)}),u}function Q1(r){let{editor:e,rules:t}=r,n=new K({state:{init(){return null},apply(o,i,s){let a=o.getMeta(n);if(a)return a;let l=o.getMeta("applyInputRules");return!!l&&setTimeout(()=>{let{text:u}=l;typeof u=="string"?u=u:u=xd(A.from(u),s.schema);let{from:d}=l,p=d+u.length;Xa({editor:e,from:d,to:p,text:u,rules:t,plugin:n})}),o.selectionSet||o.docChanged?null:i}},props:{handleTextInput(o,i,s,a){return Xa({editor:e,from:i,to:s,text:a,rules:t,plugin:n})},handleDOMEvents:{compositionend:o=>(setTimeout(()=>{let{$cursor:i}=o.state.selection;i&&Xa({editor:e,from:i.pos,to:i.pos,text:"",rules:t,plugin:n})}),!1)},handleKeyDown(o,i){if(i.key!=="Enter")return!1;let{$cursor:s}=o.state.selection;return s?Xa({editor:e,from:s.pos,to:s.pos,text:`
`,rules:t,plugin:n}):!1}},isInputRules:!0});return n}function Z1(r){return Object.prototype.toString.call(r).slice(8,-1)}function Ya(r){return Z1(r)!=="Object"?!1:r.constructor===Object&&Object.getPrototypeOf(r)===Object.prototype}function zg(r,e){let t={...r};return Ya(r)&&Ya(e)&&Object.keys(e).forEach(n=>{Ya(e[n])&&Ya(r[n])?t[n]=zg(r[n],e[n]):t[n]=e[n]}),t}var kd=class{constructor(r={}){this.type="extendable",this.parent=null,this.child=null,this.name="",this.config={name:this.name},this.config={...this.config,...r},this.name=this.config.name}get options(){return{...pe(H(this,"addOptions",{name:this.name}))||{}}}get storage(){return{...pe(H(this,"addStorage",{name:this.name,options:this.options}))||{}}}configure(r={}){let e=this.extend({...this.config,addOptions:()=>zg(this.options,r)});return e.name=this.name,e.parent=this.parent,e}extend(r={}){let e=new this.constructor({...this.config,...r});return e.parent=this,this.child=e,e.name="name"in r?r.name:e.parent.name,e}},or=class Hg extends kd{constructor(){super(...arguments),this.type="mark"}static create(e={}){let t=typeof e=="function"?e():e;return new Hg(t)}static handleExit({editor:e,mark:t}){let{tr:n}=e.state,o=e.state.selection.$from;if(o.pos===o.end()){let s=o.marks();if(!!!s.find(f=>f?.type.name===t.name))return!1;let l=s.find(f=>f?.type.name===t.name);return l&&n.removeStoredMark(l),n.insertText(" ",o.pos),e.view.dispatch(n),!0}return!1}configure(e){return super.configure(e)}extend(e){let t=typeof e=="function"?e():e;return super.extend(t)}};function ev(r){return typeof r=="number"}var tv=class{constructor(r){this.find=r.find,this.handler=r.handler}},rv=(r,e,t)=>{if(pd(e))return[...r.matchAll(e)];let n=e(r,t);return n?n.map(o=>{let i=[o.text];return i.index=o.index,i.input=r,i.data=o.data,o.replaceWith&&(o.text.includes(o.replaceWith)||console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'),i.push(o.replaceWith)),i}):[]};function nv(r){let{editor:e,state:t,from:n,to:o,rule:i,pasteEvent:s,dropEvent:a}=r,{commands:l,chain:f,can:u}=new nl({editor:e,state:t}),d=[];return t.doc.nodesBetween(n,o,(c,h)=>{var m,g,x,y,k;if((g=(m=c.type)==null?void 0:m.spec)!=null&&g.code||!(c.isText||c.isTextblock||c.isInline))return;let S=(k=(y=(x=c.content)==null?void 0:x.size)!=null?y:c.nodeSize)!=null?k:0,C=Math.max(n,h),w=Math.min(o,h+S);if(C>=w)return;let b=c.isText?c.text||"":c.textBetween(C-h,w-h,void 0,"\uFFFC");rv(b,i.find,s).forEach(M=>{if(M.index===void 0)return;let E=C+M.index+1,U=E+M[0].length,O={from:t.tr.mapping.map(E),to:t.tr.mapping.map(U)},B=i.handler({state:t,range:O,match:M,commands:l,chain:f,can:u,pasteEvent:s,dropEvent:a});d.push(B)})}),d.every(c=>c!==null)}var Qa=null,ov=r=>{var e;let t=new ClipboardEvent("paste",{clipboardData:new DataTransfer});return(e=t.clipboardData)==null||e.setData("text/html",r),t};function iv(r){let{editor:e,rules:t}=r,n=null,o=!1,i=!1,s=typeof ClipboardEvent<"u"?new ClipboardEvent("paste"):null,a;try{a=typeof DragEvent<"u"?new DragEvent("drop"):null}catch{a=null}let l=({state:u,from:d,to:p,rule:c,pasteEvt:h})=>{let m=u.tr,g=rl({state:u,transaction:m});if(!(!nv({editor:e,state:g,from:Math.max(d-1,0),to:p.b-1,rule:c,pasteEvent:h,dropEvent:a})||!m.steps.length)){try{a=typeof DragEvent<"u"?new DragEvent("drop"):null}catch{a=null}return s=typeof ClipboardEvent<"u"?new ClipboardEvent("paste"):null,m}};return t.map(u=>new K({view(d){let p=h=>{var m;n=(m=d.dom.parentElement)!=null&&m.contains(h.target)?d.dom.parentElement:null,n&&(Qa=e)},c=()=>{Qa&&(Qa=null)};return window.addEventListener("dragstart",p),window.addEventListener("dragend",c),{destroy(){window.removeEventListener("dragstart",p),window.removeEventListener("dragend",c)}}},props:{handleDOMEvents:{drop:(d,p)=>{if(i=n===d.dom.parentElement,a=p,!i){let c=Qa;c?.isEditable&&setTimeout(()=>{let h=c.state.selection;h&&c.commands.deleteRange({from:h.from,to:h.to})},10)}return!1},paste:(d,p)=>{var c;let h=(c=p.clipboardData)==null?void 0:c.getData("text/html");return s=p,o=!!h?.includes("data-pm-slice"),!1}}},appendTransaction:(d,p,c)=>{let h=d[0],m=h.getMeta("uiEvent")==="paste"&&!o,g=h.getMeta("uiEvent")==="drop"&&!i,x=h.getMeta("applyPasteRules"),y=!!x;if(!m&&!g&&!y)return;if(y){let{text:C}=x;typeof C=="string"?C=C:C=xd(A.from(C),c.schema);let{from:w}=x,b=w+C.length,T=ov(C);return l({rule:u,state:c,from:w,to:{b},pasteEvt:T})}let k=p.doc.content.findDiffStart(c.doc.content),S=p.doc.content.findDiffEnd(c.doc.content);if(!(!ev(k)||!S||k===S.b))return l({rule:u,state:c,from:k,to:S,pasteEvt:s})}}))}var fl=class{constructor(r,e){this.splittableMarks=[],this.editor=e,this.baseExtensions=r,this.extensions=Og(r),this.schema=y1(this.extensions,e),this.setupExtensions()}get commands(){return this.extensions.reduce((r,e)=>{let t={name:e.name,options:e.options,storage:this.editor.extensionStorage[e.name],editor:this.editor,type:gs(e.name,this.schema)},n=H(e,"addCommands",t);return n?{...r,...n()}:r},{})}get plugins(){let{editor:r}=this;return ys([...this.extensions].reverse()).flatMap(n=>{let o={name:n.name,options:n.options,storage:this.editor.extensionStorage[n.name],editor:r,type:gs(n.name,this.schema)},i=[],s=H(n,"addKeyboardShortcuts",o),a={};if(n.type==="mark"&&H(n,"exitable",o)&&(a.ArrowRight=()=>or.handleExit({editor:r,mark:n})),s){let p=Object.fromEntries(Object.entries(s()).map(([c,h])=>[c,()=>h({editor:r})]));a={...a,...p}}let l=dg(a);i.push(l);let f=H(n,"addInputRules",o);if(bg(n,r.options.enableInputRules)&&f){let p=f();if(p&&p.length){let c=Q1({editor:r,rules:p}),h=Array.isArray(c)?c:[c];i.push(...h)}}let u=H(n,"addPasteRules",o);if(bg(n,r.options.enablePasteRules)&&u){let p=u();if(p&&p.length){let c=iv({editor:r,rules:p});i.push(...c)}}let d=H(n,"addProseMirrorPlugins",o);if(d){let p=d();i.push(...p)}return i})}get attributes(){return Pg(this.extensions)}get nodeViews(){let{editor:r}=this,{nodeExtensions:e}=mi(this.extensions);return Object.fromEntries(e.filter(t=>!!H(t,"addNodeView")).map(t=>{let n=this.attributes.filter(l=>l.type===t.name),o={name:t.name,options:t.options,storage:this.editor.extensionStorage[t.name],editor:r,type:Oe(t.name,this.schema)},i=H(t,"addNodeView",o);if(!i)return[];let s=i();if(!s)return[];let a=(l,f,u,d,p)=>{let c=gi(l,n);return s({node:l,view:f,getPos:u,decorations:d,innerDecorations:p,editor:r,extension:t,HTMLAttributes:c})};return[t.name,a]}))}dispatchTransaction(r){let{editor:e}=this;return ys([...this.extensions].reverse()).reduceRight((n,o)=>{let i={name:o.name,options:o.options,storage:this.editor.extensionStorage[o.name],editor:e,type:gs(o.name,this.schema)},s=H(o,"dispatchTransaction",i);return s?a=>{s.call(i,{transaction:a,next:n})}:n},r)}transformPastedHTML(r){let{editor:e}=this;return ys([...this.extensions]).reduce((n,o)=>{let i={name:o.name,options:o.options,storage:this.editor.extensionStorage[o.name],editor:e,type:gs(o.name,this.schema)},s=H(o,"transformPastedHTML",i);return s?(a,l)=>{let f=n(a,l);return s.call(i,f)}:n},r||(n=>n))}get markViews(){let{editor:r}=this,{markExtensions:e}=mi(this.extensions);return Object.fromEntries(e.filter(t=>!!H(t,"addMarkView")).map(t=>{let n=this.attributes.filter(a=>a.type===t.name),o={name:t.name,options:t.options,storage:this.editor.extensionStorage[t.name],editor:r,type:xn(t.name,this.schema)},i=H(t,"addMarkView",o);if(!i)return[];let s=(a,l,f)=>{let u=gi(a,n);return i()({mark:a,view:l,inline:f,editor:r,extension:t,HTMLAttributes:u,updateAttributes:d=>{gv(a,r,d)}})};return[t.name,s]}))}setupExtensions(){let r=this.extensions;this.editor.extensionStorage=Object.fromEntries(r.map(e=>[e.name,e.storage])),r.forEach(e=>{var t;let n={name:e.name,options:e.options,storage:this.editor.extensionStorage[e.name],editor:this.editor,type:gs(e.name,this.schema)};e.type==="mark"&&((t=pe(H(e,"keepOnSplit",n)))==null||t)&&this.splittableMarks.push(e.name);let o=H(e,"onBeforeCreate",n),i=H(e,"onCreate",n),s=H(e,"onUpdate",n),a=H(e,"onSelectionUpdate",n),l=H(e,"onTransaction",n),f=H(e,"onFocus",n),u=H(e,"onBlur",n),d=H(e,"onDestroy",n);o&&this.editor.on("beforeCreate",o),i&&this.editor.on("create",i),s&&this.editor.on("update",s),a&&this.editor.on("selectionUpdate",a),l&&this.editor.on("transaction",l),f&&this.editor.on("focus",f),u&&this.editor.on("blur",u),d&&this.editor.on("destroy",d)})}};fl.resolve=Og;fl.sort=ys;fl.flatten=gd;var sv={};cd(sv,{ClipboardTextSerializer:()=>Ug,Commands:()=>qg,Delete:()=>$g,Drop:()=>Wg,Editable:()=>Kg,FocusEvents:()=>Gg,Keymap:()=>Jg,Paste:()=>Xg,Tabindex:()=>Yg,TextDirection:()=>Qg,focusEventsPluginKey:()=>jg});var ue=class Vg extends kd{constructor(){super(...arguments),this.type="extension"}static create(e={}){let t=typeof e=="function"?e():e;return new Vg(t)}configure(e){return super.configure(e)}extend(e){let t=typeof e=="function"?e():e;return super.extend(t)}},Ug=ue.create({name:"clipboardTextSerializer",addOptions(){return{blockSeparator:void 0}},addProseMirrorPlugins(){return[new K({key:new Z("clipboardTextSerializer"),props:{clipboardTextSerializer:()=>{let{editor:r}=this,{state:e,schema:t}=r,{doc:n,selection:o}=e,{ranges:i}=o,s=Math.min(...i.map(u=>u.$from.pos)),a=Math.max(...i.map(u=>u.$to.pos)),l=Lg(t);return Dg(n,{from:s,to:a},{...this.options.blockSeparator!==void 0?{blockSeparator:this.options.blockSeparator}:{},textSerializers:l})}}})]}}),qg=ue.create({name:"commands",addCommands(){return{...Sg}}}),$g=ue.create({name:"delete",onUpdate({transaction:r,appendedTransactions:e}){var t,n,o;let i=()=>{var s,a,l,f;if((f=(l=(a=(s=this.editor.options.coreExtensionOptions)==null?void 0:s.delete)==null?void 0:a.filterTransaction)==null?void 0:l.call(a,r))!=null?f:r.getMeta("y-sync$"))return;let u=md(r.before,[r,...e]);bd(u).forEach(c=>{u.mapping.mapResult(c.oldRange.from).deletedAfter&&u.mapping.mapResult(c.oldRange.to).deletedBefore&&u.before.nodesBetween(c.oldRange.from,c.oldRange.to,(h,m)=>{let g=m+h.nodeSize-2,x=c.oldRange.from<=m&&g<=c.oldRange.to;this.editor.emit("delete",{type:"node",node:h,from:m,to:g,newFrom:u.mapping.map(m),newTo:u.mapping.map(g),deletedRange:c.oldRange,newRange:c.newRange,partial:!x,editor:this.editor,transaction:r,combinedTransform:u})})});let p=u.mapping;u.steps.forEach((c,h)=>{var m,g;if(c instanceof un){let x=p.slice(h).map(c.from,-1),y=p.slice(h).map(c.to),k=p.invert().map(x,-1),S=p.invert().map(y),C=x>0?(m=u.doc.nodeAt(x-1))==null?void 0:m.marks.some(b=>b.eq(c.mark)):!1,w=(g=u.doc.nodeAt(y))==null?void 0:g.marks.some(b=>b.eq(c.mark));this.editor.emit("delete",{type:"mark",mark:c.mark,from:c.from,to:c.to,deletedRange:{from:k,to:S},newRange:{from:x,to:y},partial:!!(w||C),editor:this.editor,transaction:r,combinedTransform:u})}})};(o=(n=(t=this.editor.options.coreExtensionOptions)==null?void 0:t.delete)==null?void 0:n.async)==null||o?setTimeout(i,0):i()}}),Wg=ue.create({name:"drop",addProseMirrorPlugins(){return[new K({key:new Z("tiptapDrop"),props:{handleDrop:(r,e,t,n)=>{this.editor.emit("drop",{editor:this.editor,event:e,slice:t,moved:n})}}})]}}),Kg=ue.create({name:"editable",addProseMirrorPlugins(){return[new K({key:new Z("editable"),props:{editable:()=>this.editor.options.editable}})]}}),jg=new Z("focusEvents"),Gg=ue.create({name:"focusEvents",addProseMirrorPlugins(){let{editor:r}=this;return[new K({key:jg,props:{handleDOMEvents:{focus:(e,t)=>{r.isFocused=!0;let n=r.state.tr.setMeta("focus",{event:t}).setMeta("addToHistory",!1);return e.dispatch(n),!1},blur:(e,t)=>{r.isFocused=!1;let n=r.state.tr.setMeta("blur",{event:t}).setMeta("addToHistory",!1);return e.dispatch(n),!1}}}})]}}),Jg=ue.create({name:"keymap",addKeyboardShortcuts(){let r=()=>this.editor.commands.first(({commands:s})=>[()=>s.undoInputRule(),()=>s.command(({tr:a})=>{let{selection:l,doc:f}=a,{empty:u,$anchor:d}=l,{pos:p,parent:c}=d,h=d.parent.isTextblock&&p>0?a.doc.resolve(p-1):d,m=h.parent.type.spec.isolating,g=d.pos-d.parentOffset,x=m&&h.parent.childCount===1?g===d.pos:W.atStart(f).from===p;return!u||!c.type.isTextblock||c.textContent.length||!x||x&&d.parent.type.name==="paragraph"?!1:s.clearNodes()}),()=>s.deleteSelection(),()=>s.joinBackward(),()=>s.selectNodeBackward()]),e=()=>this.editor.commands.first(({commands:s})=>[()=>s.deleteSelection(),()=>s.deleteCurrentNode(),()=>s.joinForward(),()=>s.selectNodeForward()]),n={Enter:()=>this.editor.commands.first(({commands:s})=>[()=>s.newlineInCode(),()=>s.createParagraphNear(),()=>s.liftEmptyBlock(),()=>s.splitBlock()]),"Mod-Enter":()=>this.editor.commands.exitCode(),Backspace:r,"Mod-Backspace":r,"Shift-Backspace":r,Delete:e,"Mod-Delete":e,"Mod-a":()=>this.editor.commands.selectAll()},o={...n},i={...n,"Ctrl-h":r,"Alt-Backspace":r,"Ctrl-d":e,"Ctrl-Alt-Backspace":e,"Alt-Delete":e,"Alt-d":e,"Ctrl-a":()=>this.editor.commands.selectTextblockStart(),"Ctrl-e":()=>this.editor.commands.selectTextblockEnd()};return tl()||Tg()?i:o},addProseMirrorPlugins(){return[new K({key:new Z("clearDocument"),appendTransaction:(r,e,t)=>{if(r.some(m=>m.getMeta("composition")))return;let n=r.some(m=>m.docChanged)&&!e.doc.eq(t.doc),o=r.some(m=>m.getMeta("preventClearDocument"));if(!n||o)return;let{empty:i,from:s,to:a}=e.selection,l=W.atStart(e.doc).from,f=W.atEnd(e.doc).to;if(i||!(s===l&&a===f)||!ks(t.doc))return;let p=t.tr,c=rl({state:t,transaction:p}),{commands:h}=new nl({editor:this.editor,state:c});if(h.clearNodes(),!!p.steps.length)return p}})]}}),Xg=ue.create({name:"paste",addProseMirrorPlugins(){return[new K({key:new Z("tiptapPaste"),props:{handlePaste:(r,e,t)=>{this.editor.emit("paste",{editor:this.editor,event:e,slice:t})}}})]}}),Yg=ue.create({name:"tabindex",addProseMirrorPlugins(){return[new K({key:new Z("tabindex"),props:{attributes:()=>this.editor.isEditable?{tabindex:"0"}:{}}})]}}),Qg=ue.create({name:"textDirection",addOptions(){return{direction:void 0}},addGlobalAttributes(){if(!this.options.direction)return[];let{nodeExtensions:r}=mi(this.extensions);return[{types:r.filter(e=>e.name!=="text").map(e=>e.name),attributes:{dir:{default:this.options.direction,parseHTML:e=>{let t=e.getAttribute("dir");return t&&(t==="ltr"||t==="rtl"||t==="auto")?t:this.options.direction},renderHTML:e=>e.dir?{dir:e.dir}:{}}}}]},addProseMirrorPlugins(){return[new K({key:new Z("textDirection"),props:{attributes:()=>{let r=this.options.direction;return r?{dir:r}:{}}}})]}}),av=class xs{constructor(e,t,n=!1,o=null){this.currentNode=null,this.actualDepth=null,this.isBlock=n,this.resolvedPos=e,this.editor=t,this.currentNode=o}get name(){return this.node.type.name}get node(){return this.currentNode||this.resolvedPos.node()}get element(){return this.editor.view.domAtPos(this.pos).node}get depth(){var e;return(e=this.actualDepth)!=null?e:this.resolvedPos.depth}get pos(){return this.resolvedPos.pos}get content(){return this.node.content}set content(e){let t=this.from,n=this.to;if(this.isBlock){if(this.content.size===0){console.error(`You can\u2019t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);return}t=this.from+1,n=this.to-1}this.editor.commands.insertContentAt({from:t,to:n},e)}get attributes(){return this.node.attrs}get textContent(){return this.node.textContent}get size(){return this.node.nodeSize}get from(){return this.isBlock?this.pos:this.resolvedPos.start(this.resolvedPos.depth)}get range(){return{from:this.from,to:this.to}}get to(){return this.isBlock?this.pos+this.size:this.resolvedPos.end(this.resolvedPos.depth)+(this.node.isText?0:1)}get parent(){if(this.depth===0)return null;let e=this.resolvedPos.start(this.resolvedPos.depth-1),t=this.resolvedPos.doc.resolve(e);return new xs(t,this.editor)}get before(){let e=this.resolvedPos.doc.resolve(this.from-(this.isBlock?1:2));return e.depth!==this.depth&&(e=this.resolvedPos.doc.resolve(this.from-3)),new xs(e,this.editor)}get after(){let e=this.resolvedPos.doc.resolve(this.to+(this.isBlock?2:1));return e.depth!==this.depth&&(e=this.resolvedPos.doc.resolve(this.to+3)),new xs(e,this.editor)}get children(){let e=[];return this.node.content.forEach((t,n)=>{let o=t.isBlock&&!t.isTextblock,i=t.isAtom&&!t.isText,s=t.isInline,a=this.pos+n+(i?0:1);if(a<0||a>this.resolvedPos.doc.nodeSize-2)return;let l=this.resolvedPos.doc.resolve(a);if(!o&&!s&&l.depth<=this.depth)return;let f=new xs(l,this.editor,o,o||s?t:null);o&&(f.actualDepth=this.depth+1),e.push(f)}),e}get firstChild(){return this.children[0]||null}get lastChild(){let e=this.children;return e[e.length-1]||null}closest(e,t={}){let n=null,o=this.parent;for(;o&&!n;){if(o.node.type.name===e)if(Object.keys(t).length>0){let i=o.node.attrs,s=Object.keys(t);for(let a=0;a<s.length;a+=1){let l=s[a];if(i[l]!==t[l])break}}else n=o;o=o.parent}return n}querySelector(e,t={}){return this.querySelectorAll(e,t,!0)[0]||null}querySelectorAll(e,t={},n=!1){let o=[];if(!this.children||this.children.length===0)return o;let i=Object.keys(t);return this.children.forEach(s=>{n&&o.length>0||(s.node.type.name===e&&i.every(l=>t[l]===s.node.attrs[l])&&o.push(s),!(n&&o.length>0)&&(o=o.concat(s.querySelectorAll(e,t,n))))}),o}setAttribute(e){let{tr:t}=this.editor.state;t.setNodeMarkup(this.from,void 0,{...this.node.attrs,...e}),this.editor.view.dispatch(t)}},lv=`.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`;function fv(r,e,t){let n=document.querySelector(`style[data-tiptap-style${t?`-${t}`:""}]`);if(n!==null)return n;let o=document.createElement("style");return e&&o.setAttribute("nonce",e),o.setAttribute(`data-tiptap-style${t?`-${t}`:""}`,""),o.innerHTML=r,document.getElementsByTagName("head")[0].appendChild(o),o}var Zg=class extends X1{constructor(r={}){super(),this.css=null,this.className="tiptap",this.editorView=null,this.isFocused=!1,this.isInitialized=!1,this.extensionStorage={},this.instanceId=Math.random().toString(36).slice(2,9),this.options={element:typeof document<"u"?document.createElement("div"):null,content:"",injectCSS:!0,injectNonce:void 0,extensions:[],autofocus:!1,editable:!0,textDirection:void 0,editorProps:{},parseOptions:{},coreExtensionOptions:{},enableInputRules:!0,enablePasteRules:!0,enableCoreExtensions:!0,enableContentCheck:!1,emitContentError:!1,onBeforeCreate:()=>null,onCreate:()=>null,onMount:()=>null,onUnmount:()=>null,onUpdate:()=>null,onSelectionUpdate:()=>null,onTransaction:()=>null,onFocus:()=>null,onBlur:()=>null,onDestroy:()=>null,onContentError:({error:n})=>{throw n},onPaste:()=>null,onDrop:()=>null,onDelete:()=>null,enableExtensionDispatchTransaction:!0},this.isCapturingTransaction=!1,this.capturedTransaction=null,this.utils={getUpdatedPosition:T1,createMappablePosition:M1},this.setOptions(r),this.createExtensionManager(),this.createCommandManager(),this.createSchema(),this.on("beforeCreate",this.options.onBeforeCreate),this.emit("beforeCreate",{editor:this}),this.on("mount",this.options.onMount),this.on("unmount",this.options.onUnmount),this.on("contentError",this.options.onContentError),this.on("create",this.options.onCreate),this.on("update",this.options.onUpdate),this.on("selectionUpdate",this.options.onSelectionUpdate),this.on("transaction",this.options.onTransaction),this.on("focus",this.options.onFocus),this.on("blur",this.options.onBlur),this.on("destroy",this.options.onDestroy),this.on("drop",({event:n,slice:o,moved:i})=>this.options.onDrop(n,o,i)),this.on("paste",({event:n,slice:o})=>this.options.onPaste(n,o)),this.on("delete",this.options.onDelete);let e=this.createDoc(),t=wg(e,this.options.autofocus);this.editorState=La.create({doc:e,schema:this.schema,selection:t||void 0}),this.options.element&&this.mount(this.options.element)}mount(r){if(typeof document>"u")throw new Error("[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.");this.createView(r),this.emit("mount",{editor:this}),this.css&&!document.head.contains(this.css)&&document.head.appendChild(this.css),window.setTimeout(()=>{this.isDestroyed||(this.options.autofocus!==!1&&this.options.autofocus!==null&&this.commands.focus(this.options.autofocus),this.emit("create",{editor:this}),this.isInitialized=!0)},0)}unmount(){if(this.editorView){let r=this.editorView.dom;r?.editor&&delete r.editor,this.editorView.destroy()}if(this.editorView=null,this.isInitialized=!1,this.css&&!document.querySelectorAll(`.${this.className}`).length)try{typeof this.css.remove=="function"?this.css.remove():this.css.parentNode&&this.css.parentNode.removeChild(this.css)}catch(r){console.warn("Failed to remove CSS element:",r)}this.css=null,this.emit("unmount",{editor:this})}get storage(){return this.extensionStorage}get commands(){return this.commandManager.commands}chain(){return this.commandManager.chain()}can(){return this.commandManager.can()}injectCSS(){this.options.injectCSS&&typeof document<"u"&&(this.css=fv(lv,this.options.injectNonce))}setOptions(r={}){this.options={...this.options,...r},!(!this.editorView||!this.state||this.isDestroyed)&&(this.options.editorProps&&this.view.setProps(this.options.editorProps),this.view.updateState(this.state))}setEditable(r,e=!0){this.setOptions({editable:r}),e&&this.emit("update",{editor:this,transaction:this.state.tr,appendedTransactions:[]})}get isEditable(){return this.options.editable&&this.view&&this.view.editable}get view(){return this.editorView?this.editorView:new Proxy({state:this.editorState,updateState:r=>{this.editorState=r},dispatch:r=>{this.dispatchTransaction(r)},composing:!1,dragging:null,editable:!0,isDestroyed:!1},{get:(r,e)=>{if(this.editorView)return this.editorView[e];if(e==="state")return this.editorState;if(e in r)return Reflect.get(r,e);throw new Error(`[tiptap error]: The editor view is not available. Cannot access view['${e}']. The editor may not be mounted yet.`)}})}get state(){return this.editorView&&(this.editorState=this.view.state),this.editorState}registerPlugin(r,e){let t=Ag(e)?e(r,[...this.state.plugins]):[...this.state.plugins,r],n=this.state.reconfigure({plugins:t});return this.view.updateState(n),n}unregisterPlugin(r){if(this.isDestroyed)return;let e=this.state.plugins,t=e;if([].concat(r).forEach(o=>{let i=typeof o=="string"?`${o}$`:o.key;t=t.filter(s=>!s.key.startsWith(i))}),e.length===t.length)return;let n=this.state.reconfigure({plugins:t});return this.view.updateState(n),n}createExtensionManager(){var r,e;let n=[...this.options.enableCoreExtensions?[Kg,Ug.configure({blockSeparator:(e=(r=this.options.coreExtensionOptions)==null?void 0:r.clipboardTextSerializer)==null?void 0:e.blockSeparator}),qg,Gg,Jg,Yg,Wg,Xg,$g,Qg.configure({direction:this.options.textDirection})].filter(o=>typeof this.options.enableCoreExtensions=="object"?this.options.enableCoreExtensions[o.name]!==!1:!0):[],...this.options.extensions].filter(o=>["extension","node","mark"].includes(o?.type));this.extensionManager=new fl(n,this)}createCommandManager(){this.commandManager=new nl({editor:this})}createSchema(){this.schema=this.extensionManager.schema}createDoc(){let r;try{r=ud(this.options.content,this.schema,this.options.parseOptions,{errorOnInvalidContent:this.options.enableContentCheck})}catch(e){if(!(e instanceof Error)||!["[tiptap error]: Invalid JSON content","[tiptap error]: Invalid HTML content"].includes(e.message))throw e;this.emit("contentError",{editor:this,error:e,disableCollaboration:()=>{"collaboration"in this.storage&&typeof this.storage.collaboration=="object"&&this.storage.collaboration&&(this.storage.collaboration.isDisabled=!0),this.options.extensions=this.options.extensions.filter(t=>t.name!=="collaboration"),this.createExtensionManager()}}),r=ud(this.options.content,this.schema,this.options.parseOptions,{errorOnInvalidContent:!1})}return r}createView(r){let{editorProps:e,enableExtensionDispatchTransaction:t}=this.options,n=e.dispatchTransaction||this.dispatchTransaction.bind(this),o=t?this.extensionManager.dispatchTransaction(n):n,i=e.transformPastedHTML,s=this.extensionManager.transformPastedHTML(i);this.editorView=new ps(r,{...e,attributes:{role:"textbox",...e?.attributes},dispatchTransaction:o,transformPastedHTML:s,state:this.editorState,markViews:this.extensionManager.markViews,nodeViews:this.extensionManager.nodeViews});let a=this.state.reconfigure({plugins:this.extensionManager.plugins});this.view.updateState(a),this.prependClass(),this.injectCSS();let l=this.view.dom;l.editor=this}createNodeViews(){this.view.isDestroyed||this.view.setProps({markViews:this.extensionManager.markViews,nodeViews:this.extensionManager.nodeViews})}prependClass(){this.view.dom.className=`${this.className} ${this.view.dom.className}`}captureTransaction(r){this.isCapturingTransaction=!0,r(),this.isCapturingTransaction=!1;let e=this.capturedTransaction;return this.capturedTransaction=null,e}dispatchTransaction(r){if(this.view.isDestroyed)return;if(this.isCapturingTransaction){if(!this.capturedTransaction){this.capturedTransaction=r;return}r.steps.forEach(f=>{var u;return(u=this.capturedTransaction)==null?void 0:u.step(f)});return}let{state:e,transactions:t}=this.state.applyTransaction(r),n=!this.state.selection.eq(e.selection),o=t.includes(r),i=this.state;if(this.emit("beforeTransaction",{editor:this,transaction:r,nextState:e}),!o)return;this.view.updateState(e),this.emit("transaction",{editor:this,transaction:r,appendedTransactions:t.slice(1)}),n&&this.emit("selectionUpdate",{editor:this,transaction:r});let s=t.findLast(f=>f.getMeta("focus")||f.getMeta("blur")),a=s?.getMeta("focus"),l=s?.getMeta("blur");a&&this.emit("focus",{editor:this,event:a.event,transaction:s}),l&&this.emit("blur",{editor:this,event:l.event,transaction:s}),!(r.getMeta("preventUpdate")||!t.some(f=>f.docChanged)||i.doc.eq(e.doc))&&this.emit("update",{editor:this,transaction:r,appendedTransactions:t.slice(1)})}getAttributes(r){return yd(this.state,r)}isActive(r,e){let t=typeof r=="string"?r:null,n=typeof r=="string"?e:r;return _1(this.state,t,n)}getJSON(){return this.state.doc.toJSON()}getHTML(){return xd(this.state.doc.content,this.schema)}getText(r){let{blockSeparator:e=`

`,textSerializers:t={}}=r||{};return k1(this.state.doc,{blockSeparator:e,textSerializers:{...Lg(this.schema),...t}})}get isEmpty(){return ks(this.state.doc)}destroy(){this.emit("destroy"),this.unmount(),this.removeAllListeners()}get isDestroyed(){var r,e;return(e=(r=this.editorView)==null?void 0:r.isDestroyed)!=null?e:!0}$node(r,e){var t;return((t=this.$doc)==null?void 0:t.querySelector(r,e))||null}$nodes(r,e){var t;return((t=this.$doc)==null?void 0:t.querySelectorAll(r,e))||null}$pos(r){let e=this.state.doc.resolve(r);return new av(e,this)}get $doc(){return this.$pos(0)}};function qr(r){return new ll({find:r.find,handler:({state:e,range:t,match:n})=>{let o=pe(r.getAttributes,void 0,n);if(o===!1||o===null)return null;let{tr:i}=e,s=n[n.length-1],a=n[0];if(s){let l=a.search(/\S/),f=t.from+a.indexOf(s),u=f+s.length;if(sl(t.from,t.to,e.doc).filter(c=>c.mark.type.excluded.find(m=>m===r.type&&m!==c.mark.type)).filter(c=>c.to>f).length)return null;u<t.to&&i.delete(u,t.to),f>t.from&&i.delete(t.from+l,f);let p=t.from+l+s.length;i.addMark(t.from+l,p,r.type.create(o||{})),i.removeStoredMark(r.type)}},undoable:r.undoable})}function ex(r){return new ll({find:r.find,handler:({state:e,range:t,match:n})=>{let o=pe(r.getAttributes,void 0,n)||{},{tr:i}=e,s=t.from,a=t.to,l=r.type.create(o);if(n[1]){let f=n[0].lastIndexOf(n[1]),u=s+f;u>a?u=a:a=u+n[1].length;let d=n[0][n[0].length-1];i.insertText(d,s+n[0].length-1),i.replaceWith(u,a,l)}else if(n[0]){let f=r.type.isInline?s:s-1;i.insert(f,r.type.create(o)).delete(i.mapping.map(s),i.mapping.map(a))}i.scrollIntoView()},undoable:r.undoable})}function Ss(r){return new ll({find:r.find,handler:({state:e,range:t,match:n})=>{let o=e.doc.resolve(t.from),i=pe(r.getAttributes,void 0,n)||{};if(!o.node(-1).canReplaceWith(o.index(-1),o.indexAfter(-1),r.type))return null;e.tr.delete(t.from,t.to).setBlockType(t.from,t.from,r.type,i)},undoable:r.undoable})}function $r(r){return new ll({find:r.find,handler:({state:e,range:t,match:n,chain:o})=>{let i=pe(r.getAttributes,void 0,n)||{},s=e.tr.delete(t.from,t.to),l=s.doc.resolve(t.from).blockRange(),f=l&&ii(l,r.type,i);if(!f)return null;if(s.wrap(l,f),r.keepMarks&&r.editor){let{selection:d,storedMarks:p}=e,{splittableMarks:c}=r.editor.extensionManager,h=p||d.$to.parentOffset&&d.$from.marks();if(h){let m=h.filter(g=>c.includes(g.type.name));s.ensureMarks(m)}}if(r.keepAttributes){let d=r.type.name==="bulletList"||r.type.name==="orderedList"?"listItem":"taskList";o().updateAttributes(d,i).run()}let u=s.doc.resolve(t.from-1).nodeBefore;u&&u.type===r.type&&hr(s.doc,t.from-1)&&(!r.joinPredicate||r.joinPredicate(n,u))&&s.join(t.from-1)},undoable:r.undoable})}function tx(r,e){let{selection:t}=r,{$from:n}=t;if(t instanceof F){let i=n.index();return n.parent.canReplaceWith(i,i+1,e)}let o=n.depth;for(;o>=0;){let i=n.index(o);if(n.node(o).contentMatchAt(i).matchType(e))return!0;o-=1}return!1}var uv={};cd(uv,{createAtomBlockMarkdownSpec:()=>dv,createBlockMarkdownSpec:()=>cv,createInlineMarkdownSpec:()=>mv,parseAttributes:()=>Sd,parseIndentedBlocks:()=>ul,renderNestedMarkdownContent:()=>Cs,serializeAttributes:()=>Cd});function Sd(r){if(!r?.trim())return{};let e={},t=[],n=r.replace(/["']([^"']*)["']/g,f=>(t.push(f),`__QUOTED_${t.length-1}__`)),o=n.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);if(o){let f=o.map(u=>u.trim().slice(1));e.class=f.join(" ")}let i=n.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);i&&(e.id=i[1]);let s=/([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g;Array.from(n.matchAll(s)).forEach(([,f,u])=>{var d;let p=parseInt(((d=u.match(/__QUOTED_(\d+)__/))==null?void 0:d[1])||"0",10),c=t[p];c&&(e[f]=c.slice(1,-1))});let l=n.replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g,"").replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g,"").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g,"").trim();return l&&l.split(/\s+/).filter(Boolean).forEach(u=>{u.match(/^[a-zA-Z][\w-]*$/)&&(e[u]=!0)}),e}function Cd(r){if(!r||Object.keys(r).length===0)return"";let e=[];return r.class&&String(r.class).split(/\s+/).filter(Boolean).forEach(n=>e.push(`.${n}`)),r.id&&e.push(`#${r.id}`),Object.entries(r).forEach(([t,n])=>{t==="class"||t==="id"||(n===!0?e.push(t):n!==!1&&n!=null&&e.push(`${t}="${String(n)}"`))}),e.join(" ")}function dv(r){let{nodeName:e,name:t,parseAttributes:n=Sd,serializeAttributes:o=Cd,defaultAttributes:i={},requiredAttributes:s=[],allowedAttributes:a}=r,l=t||e,f=u=>{if(!a)return u;let d={};return a.forEach(p=>{p in u&&(d[p]=u[p])}),d};return{parseMarkdown:(u,d)=>{let p={...i,...u.attributes};return d.createNode(e,p,[])},markdownTokenizer:{name:e,level:"block",start(u){var d;let p=new RegExp(`^:::${l}(?:\\s|$)`,"m"),c=(d=u.match(p))==null?void 0:d.index;return c!==void 0?c:-1},tokenize(u,d,p){let c=new RegExp(`^:::${l}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`),h=u.match(c);if(!h)return;let m=h[1]||"",g=n(m);if(!s.find(y=>!(y in g)))return{type:e,raw:h[0],attributes:g}}},renderMarkdown:u=>{let d=f(u.attrs||{}),p=o(d),c=p?` {${p}}`:"";return`:::${l}${c} :::`}}}function cv(r){let{nodeName:e,name:t,getContent:n,parseAttributes:o=Sd,serializeAttributes:i=Cd,defaultAttributes:s={},content:a="block",allowedAttributes:l}=r,f=t||e,u=d=>{if(!l)return d;let p={};return l.forEach(c=>{c in d&&(p[c]=d[c])}),p};return{parseMarkdown:(d,p)=>{let c;if(n){let m=n(d);c=typeof m=="string"?[{type:"text",text:m}]:m}else a==="block"?c=p.parseChildren(d.tokens||[]):c=p.parseInline(d.tokens||[]);let h={...s,...d.attributes};return p.createNode(e,h,c)},markdownTokenizer:{name:e,level:"block",start(d){var p;let c=new RegExp(`^:::${f}`,"m"),h=(p=d.match(c))==null?void 0:p.index;return h!==void 0?h:-1},tokenize(d,p,c){var h;let m=new RegExp(`^:::${f}(?:\\s+\\{([^}]*)\\})?\\s*\\n`),g=d.match(m);if(!g)return;let[x,y=""]=g,k=o(y),S=1,C=x.length,w="",b=/^:::([\w-]*)(\s.*)?/gm,T=d.slice(C);for(b.lastIndex=0;;){let M=b.exec(T);if(M===null)break;let E=M.index,U=M[1];if(!((h=M[2])!=null&&h.endsWith(":::"))){if(U)S+=1;else if(S-=1,S===0){let O=T.slice(0,E);w=O.trim();let B=d.slice(0,C+E+M[0].length),R=[];if(w)if(a==="block")for(R=c.blockTokens(O),R.forEach(z=>{z.text&&(!z.tokens||z.tokens.length===0)&&(z.tokens=c.inlineTokens(z.text))});R.length>0;){let z=R[R.length-1];if(z.type==="paragraph"&&(!z.text||z.text.trim()===""))R.pop();else break}else R=c.inlineTokens(w);return{type:e,raw:B,attributes:k,content:w,tokens:R}}}}}},renderMarkdown:(d,p)=>{let c=u(d.attrs||{}),h=i(c),m=h?` {${h}}`:"",g=p.renderChildren(d.content||[],`

`);return`:::${f}${m}

${g}

:::`}}}function pv(r){if(!r.trim())return{};let e={},t=/(\w+)=(?:"([^"]*)"|'([^']*)')/g,n=t.exec(r);for(;n!==null;){let[,o,i,s]=n;e[o]=i||s,n=t.exec(r)}return e}function hv(r){return Object.entries(r).filter(([,e])=>e!=null).map(([e,t])=>`${e}="${t}"`).join(" ")}function mv(r){let{nodeName:e,name:t,getContent:n,parseAttributes:o=pv,serializeAttributes:i=hv,defaultAttributes:s={},selfClosing:a=!1,allowedAttributes:l}=r,f=t||e,u=p=>{if(!l)return p;let c={};return l.forEach(h=>{let m=typeof h=="string"?h:h.name,g=typeof h=="string"?void 0:h.skipIfDefault;if(m in p){let x=p[m];if(g!==void 0&&x===g)return;c[m]=x}}),c},d=f.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return{parseMarkdown:(p,c)=>{let h={...s,...p.attributes};if(a)return c.createNode(e,h);let m=n?n(p):p.content||"";return m?c.createNode(e,h,[c.createTextNode(m)]):c.createNode(e,h,[])},markdownTokenizer:{name:e,level:"inline",start(p){let c=a?new RegExp(`\\[${d}\\s*[^\\]]*\\]`):new RegExp(`\\[${d}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${d}\\]`),h=p.match(c),m=h?.index;return m!==void 0?m:-1},tokenize(p,c,h){let m=a?new RegExp(`^\\[${d}\\s*([^\\]]*)\\]`):new RegExp(`^\\[${d}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${d}\\]`),g=p.match(m);if(!g)return;let x="",y="";if(a){let[,S]=g;y=S}else{let[,S,C]=g;y=S,x=C||""}let k=o(y.trim());return{type:e,raw:g[0],content:x.trim(),attributes:k}}},renderMarkdown:p=>{let c="";n?c=n(p):p.content&&p.content.length>0&&(c=p.content.filter(x=>x.type==="text").map(x=>x.text).join(""));let h=u(p.attrs||{}),m=i(h),g=m?` ${m}`:"";return a?`[${f}${g}]`:`[${f}${g}]${c}[/${f}]`}}}function ul(r,e,t){var n,o,i,s;let a=r.split(`
`),l=[],f="",u=0,d=e.baseIndentSize||2;for(;u<a.length;){let p=a[u],c=p.match(e.itemPattern);if(!c){if(l.length>0)break;if(p.trim()===""){u+=1,f=`${f}${p}
`;continue}else return}let h=e.extractItemData(c),{indentLevel:m,mainContent:g}=h;f=`${f}${p}
`;let x=[g];for(u+=1;u<a.length;){let C=a[u];if(C.trim()===""){let b=a.slice(u+1).findIndex(E=>E.trim()!=="");if(b===-1)break;if((((o=(n=a[u+1+b].match(/^(\s*)/))==null?void 0:n[1])==null?void 0:o.length)||0)>m){x.push(C),f=`${f}${C}
`,u+=1;continue}else break}if((((s=(i=C.match(/^(\s*)/))==null?void 0:i[1])==null?void 0:s.length)||0)>m)x.push(C),f=`${f}${C}
`,u+=1;else break}let y,k=x.slice(1);if(k.length>0){let C=k.map(w=>w.slice(m+d)).join(`
`);C.trim()&&(e.customNestedParser?y=e.customNestedParser(C):y=t.blockTokens(C))}let S=e.createToken(h,y);l.push(S)}if(l.length!==0)return{items:l,raw:f}}function Cs(r,e,t,n){if(!r||!Array.isArray(r.content))return"";let o=typeof t=="function"?t(n):t,[i,...s]=r.content,a=e.renderChildren([i]),l=`${o}${a}`;return s&&s.length>0&&s.forEach((f,u)=>{var d,p;let c=(p=(d=e.renderChild)==null?void 0:d.call(e,f,u+1))!=null?p:e.renderChildren([f]);if(c!=null){let h=c.split(`
`).map(m=>m?e.indent(m):e.indent("")).join(`
`);l+=f.type==="paragraph"?`

${h}`:`
${h}`}}),l}function gv(r,e,t={}){let{state:n}=e,{doc:o,tr:i}=n,s=r;o.descendants((a,l)=>{let f=i.mapping.map(l),u=i.mapping.map(l)+a.nodeSize,d=null;if(a.marks.forEach(c=>{if(c!==s)return!1;d=c}),!d)return;let p=!1;if(Object.keys(t).forEach(c=>{t[c]!==d.attrs[c]&&(p=!0)}),p){let c=r.type.create({...r.attrs,...t});i.removeMark(f,u,r.type),i.addMark(f,u,c)}}),i.docChanged&&e.view.dispatch(i)}var be=class rx extends kd{constructor(){super(...arguments),this.type="node"}static create(e={}){let t=typeof e=="function"?e():e;return new rx(t)}configure(e){return super.configure(e)}extend(e){let t=typeof e=="function"?e():e;return super.extend(t)}};function br(r){return new tv({find:r.find,handler:({state:e,range:t,match:n,pasteEvent:o})=>{let i=pe(r.getAttributes,void 0,n,o);if(i===!1||i===null)return null;let{tr:s}=e,a=n[n.length-1],l=n[0],f=t.to;if(a){let u=l.search(/\S/),d=t.from+l.indexOf(a),p=d+a.length;if(sl(t.from,t.to,e.doc).filter(m=>m.mark.type.excluded.find(x=>x===r.type&&x!==m.mark.type)).filter(m=>m.to>d).length)return null;p<t.to&&s.delete(p,t.to),d>t.from&&s.delete(t.from+u,d),f=t.from+u+a.length,s.addMark(t.from+u,f,r.type.create(i||{})),n.index!==void 0&&n.input!==void 0&&n.index+n[0].length>=n.input.length||s.removeStoredMark(r.type)}}})}function nx(r={}){return new K({view(e){return new vd(e,r)}})}var vd=class{constructor(e,t){var n;this.editorView=e,this.cursorPos=null,this.element=null,this.timeout=-1,this.width=(n=t.width)!==null&&n!==void 0?n:1,this.color=t.color===!1?void 0:t.color||"black",this.class=t.class,this.handlers=["dragover","dragend","drop","dragleave"].map(o=>{let i=s=>{this[o](s)};return e.dom.addEventListener(o,i),{name:o,handler:i}})}destroy(){this.handlers.forEach(({name:e,handler:t})=>this.editorView.dom.removeEventListener(e,t))}update(e,t){this.cursorPos!=null&&t.doc!=e.state.doc&&(this.cursorPos>e.state.doc.content.size?this.setCursor(null):this.updateOverlay())}setCursor(e){e!=this.cursorPos&&(this.cursorPos=e,e==null?(this.element.parentNode.removeChild(this.element),this.element=null):this.updateOverlay())}updateOverlay(){let e=this.editorView.state.doc.resolve(this.cursorPos),t=!e.parent.inlineContent,n,o=this.editorView.dom,i=o.getBoundingClientRect(),s=i.width/o.offsetWidth,a=i.height/o.offsetHeight;if(t){let d=e.nodeBefore,p=e.nodeAfter;if(d||p){let c=this.editorView.nodeDOM(this.cursorPos-(d?d.nodeSize:0));if(c){let h=c.getBoundingClientRect(),m=d?h.bottom:h.top;d&&p&&(m=(m+this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top)/2);let g=this.width/2*a;n={left:h.left,right:h.right,top:m-g,bottom:m+g}}}}if(!n){let d=this.editorView.coordsAtPos(this.cursorPos),p=this.width/2*s;n={left:d.left-p,right:d.left+p,top:d.top,bottom:d.bottom}}let l=this.editorView.dom.offsetParent;this.element||(this.element=l.appendChild(document.createElement("div")),this.class&&(this.element.className=this.class),this.element.style.cssText="position: absolute; z-index: 50; pointer-events: none;",this.color&&(this.element.style.backgroundColor=this.color)),this.element.classList.toggle("prosemirror-dropcursor-block",t),this.element.classList.toggle("prosemirror-dropcursor-inline",!t);let f,u;if(!l||l==document.body&&getComputedStyle(l).position=="static")f=-pageXOffset,u=-pageYOffset;else{let d=l.getBoundingClientRect(),p=d.width/l.offsetWidth,c=d.height/l.offsetHeight;f=d.left-l.scrollLeft*p,u=d.top-l.scrollTop*c}this.element.style.left=(n.left-f)/s+"px",this.element.style.top=(n.top-u)/a+"px",this.element.style.width=(n.right-n.left)/s+"px",this.element.style.height=(n.bottom-n.top)/a+"px"}scheduleRemoval(e){clearTimeout(this.timeout),this.timeout=setTimeout(()=>this.setCursor(null),e)}dragover(e){if(!this.editorView.editable)return;let t=this.editorView.posAtCoords({left:e.clientX,top:e.clientY}),n=t&&t.inside>=0&&this.editorView.state.doc.nodeAt(t.inside),o=n&&n.type.spec.disableDropCursor,i=typeof o=="function"?o(this.editorView,t,e):o;if(t&&!i){let s=t.pos;if(this.editorView.dragging&&this.editorView.dragging.slice){let a=Aa(this.editorView.state.doc,s,this.editorView.dragging.slice);a!=null&&(s=a)}this.setCursor(s),this.scheduleRemoval(5e3)}}dragend(){this.scheduleRemoval(20)}drop(){this.scheduleRemoval(20)}dragleave(e){this.editorView.dom.contains(e.relatedTarget)||this.setCursor(null)}};var Ct=class r extends W{constructor(e){super(e,e)}map(e,t){let n=e.resolve(t.map(this.head));return r.valid(n)?new r(n):W.near(n)}content(){return L.empty}eq(e){return e instanceof r&&e.head==this.head}toJSON(){return{type:"gapcursor",pos:this.head}}static fromJSON(e,t){if(typeof t.pos!="number")throw new RangeError("Invalid input for GapCursor.fromJSON");return new r(e.resolve(t.pos))}getBookmark(){return new wd(this.anchor)}static valid(e){let t=e.parent;if(t.inlineContent||!xv(e)||!yv(e))return!1;let n=t.type.spec.allowGapCursor;if(n!=null)return n;let o=t.contentMatchAt(e.index()).defaultType;return o&&o.isTextblock}static findGapCursorFrom(e,t,n=!1){e:for(;;){if(!n&&r.valid(e))return e;let o=e.pos,i=null;for(let s=e.depth;;s--){let a=e.node(s);if(t>0?e.indexAfter(s)<a.childCount:e.index(s)>0){i=a.child(t>0?e.indexAfter(s):e.index(s)-1);break}else if(s==0)return null;o+=t;let l=e.doc.resolve(o);if(r.valid(l))return l}for(;;){let s=t>0?i.firstChild:i.lastChild;if(!s){if(i.isAtom&&!i.isText&&!F.isSelectable(i)){e=e.doc.resolve(o+i.nodeSize*t),n=!1;continue e}break}i=s,o+=t;let a=e.doc.resolve(o);if(r.valid(a))return a}return null}}};Ct.prototype.visible=!1;Ct.findFrom=Ct.findGapCursorFrom;W.jsonID("gapcursor",Ct);var wd=class r{constructor(e){this.pos=e}map(e){return new r(e.map(this.pos))}resolve(e){let t=e.resolve(this.pos);return Ct.valid(t)?new Ct(t):W.near(t)}};function ox(r){return r.isAtom||r.spec.isolating||r.spec.createGapCursor}function xv(r){for(let e=r.depth;e>=0;e--){let t=r.index(e),n=r.node(e);if(t==0){if(n.type.spec.isolating)return!0;continue}for(let o=n.child(t-1);;o=o.lastChild){if(o.childCount==0&&!o.inlineContent||ox(o.type))return!0;if(o.inlineContent)return!1}}return!0}function yv(r){for(let e=r.depth;e>=0;e--){let t=r.indexAfter(e),n=r.node(e);if(t==n.childCount){if(n.type.spec.isolating)return!0;continue}for(let o=n.child(t);;o=o.firstChild){if(o.childCount==0&&!o.inlineContent||ox(o.type))return!0;if(o.inlineContent)return!1}}return!0}function ix(){return new K({props:{decorations:Cv,createSelectionBetween(r,e,t){return e.pos==t.pos&&Ct.valid(t)?new Ct(t):null},handleClick:kv,handleKeyDown:bv,handleDOMEvents:{beforeinput:Sv}}})}var bv=sd({ArrowLeft:dl("horiz",-1),ArrowRight:dl("horiz",1),ArrowUp:dl("vert",-1),ArrowDown:dl("vert",1)});function dl(r,e){let t=r=="vert"?e>0?"down":"up":e>0?"right":"left";return function(n,o,i){let s=n.selection,a=e>0?s.$to:s.$from,l=s.empty;if(s instanceof V){if(!i.endOfTextblock(t)||a.depth==0)return!1;l=!1,a=n.doc.resolve(e>0?a.after():a.before())}let f=Ct.findGapCursorFrom(a,e,l);return f?(o&&o(n.tr.setSelection(new Ct(f))),!0):!1}}function kv(r,e,t){if(!r||!r.editable)return!1;let n=r.state.doc.resolve(e);if(!Ct.valid(n))return!1;let o=r.posAtCoords({left:t.clientX,top:t.clientY});return o&&o.inside>-1&&F.isSelectable(r.state.doc.nodeAt(o.inside))?!1:(r.dispatch(r.state.tr.setSelection(new Ct(n))),!0)}function Sv(r,e){if(e.inputType!="insertCompositionText"||!(r.state.selection instanceof Ct))return!1;let{$from:t}=r.state.selection,n=t.parent.contentMatchAt(t.index()).findWrapping(r.state.schema.nodes.text);if(!n)return!1;let o=A.empty;for(let s=n.length-1;s>=0;s--)o=A.from(n[s].createAndFill(null,o));let i=r.state.tr.replace(t.pos,t.pos,new L(o,0,0));return i.setSelection(V.near(i.doc.resolve(t.pos+1))),r.dispatch(i),!1}function Cv(r){if(!(r.selection instanceof Ct))return null;let e=document.createElement("div");return e.className="ProseMirror-gapcursor",ze.create(r.doc,[St.widget(r.selection.head,e,{key:"gapcursor"})])}var cl=200,ft=function(){};ft.prototype.append=function(e){return e.length?(e=ft.from(e),!this.length&&e||e.length<cl&&this.leafAppend(e)||this.length<cl&&e.leafPrepend(this)||this.appendInner(e)):this};ft.prototype.prepend=function(e){return e.length?ft.from(e).append(this):this};ft.prototype.appendInner=function(e){return new vv(this,e)};ft.prototype.slice=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.length),e>=t?ft.empty:this.sliceInner(Math.max(0,e),Math.min(this.length,t))};ft.prototype.get=function(e){if(!(e<0||e>=this.length))return this.getInner(e)};ft.prototype.forEach=function(e,t,n){t===void 0&&(t=0),n===void 0&&(n=this.length),t<=n?this.forEachInner(e,t,n,0):this.forEachInvertedInner(e,t,n,0)};ft.prototype.map=function(e,t,n){t===void 0&&(t=0),n===void 0&&(n=this.length);var o=[];return this.forEach(function(i,s){return o.push(e(i,s))},t,n),o};ft.from=function(e){return e instanceof ft?e:e&&e.length?new sx(e):ft.empty};var sx=(function(r){function e(n){r.call(this),this.values=n}r&&(e.__proto__=r),e.prototype=Object.create(r&&r.prototype),e.prototype.constructor=e;var t={length:{configurable:!0},depth:{configurable:!0}};return e.prototype.flatten=function(){return this.values},e.prototype.sliceInner=function(o,i){return o==0&&i==this.length?this:new e(this.values.slice(o,i))},e.prototype.getInner=function(o){return this.values[o]},e.prototype.forEachInner=function(o,i,s,a){for(var l=i;l<s;l++)if(o(this.values[l],a+l)===!1)return!1},e.prototype.forEachInvertedInner=function(o,i,s,a){for(var l=i-1;l>=s;l--)if(o(this.values[l],a+l)===!1)return!1},e.prototype.leafAppend=function(o){if(this.length+o.length<=cl)return new e(this.values.concat(o.flatten()))},e.prototype.leafPrepend=function(o){if(this.length+o.length<=cl)return new e(o.flatten().concat(this.values))},t.length.get=function(){return this.values.length},t.depth.get=function(){return 0},Object.defineProperties(e.prototype,t),e})(ft);ft.empty=new sx([]);var vv=(function(r){function e(t,n){r.call(this),this.left=t,this.right=n,this.length=t.length+n.length,this.depth=Math.max(t.depth,n.depth)+1}return r&&(e.__proto__=r),e.prototype=Object.create(r&&r.prototype),e.prototype.constructor=e,e.prototype.flatten=function(){return this.left.flatten().concat(this.right.flatten())},e.prototype.getInner=function(n){return n<this.left.length?this.left.get(n):this.right.get(n-this.left.length)},e.prototype.forEachInner=function(n,o,i,s){var a=this.left.length;if(o<a&&this.left.forEachInner(n,o,Math.min(i,a),s)===!1||i>a&&this.right.forEachInner(n,Math.max(o-a,0),Math.min(this.length,i)-a,s+a)===!1)return!1},e.prototype.forEachInvertedInner=function(n,o,i,s){var a=this.left.length;if(o>a&&this.right.forEachInvertedInner(n,o-a,Math.max(i,a)-a,s+a)===!1||i<a&&this.left.forEachInvertedInner(n,Math.min(o,a),i,s)===!1)return!1},e.prototype.sliceInner=function(n,o){if(n==0&&o==this.length)return this;var i=this.left.length;return o<=i?this.left.slice(n,o):n>=i?this.right.slice(n-i,o-i):this.left.slice(n,i).append(this.right.slice(0,o-i))},e.prototype.leafAppend=function(n){var o=this.right.leafAppend(n);if(o)return new e(this.left,o)},e.prototype.leafPrepend=function(n){var o=this.left.leafPrepend(n);if(o)return new e(o,this.right)},e.prototype.appendInner=function(n){return this.left.depth>=Math.max(this.right.depth,n.depth)+1?new e(this.left,new e(this.right,n)):new e(this,n)},e})(ft),_d=ft;var wv=500,Eo=class r{constructor(e,t){this.items=e,this.eventCount=t}popEvent(e,t){if(this.eventCount==0)return null;let n=this.items.length;for(;;n--)if(this.items.get(n-1).selection){--n;break}let o,i;t&&(o=this.remapping(n,this.items.length),i=o.maps.length);let s=e.tr,a,l,f=[],u=[];return this.items.forEach((d,p)=>{if(!d.step){o||(o=this.remapping(n,p+1),i=o.maps.length),i--,u.push(d);return}if(o){u.push(new Wr(d.map));let c=d.step.map(o.slice(i)),h;c&&s.maybeStep(c).doc&&(h=s.mapping.maps[s.mapping.maps.length-1],f.push(new Wr(h,void 0,void 0,f.length+u.length))),i--,h&&o.appendMap(h,i)}else s.maybeStep(d.step);if(d.selection)return a=o?d.selection.map(o.slice(i)):d.selection,l=new r(this.items.slice(0,n).append(u.reverse().concat(f)),this.eventCount-1),!1},this.items.length,0),{remaining:l,transform:s,selection:a}}addTransform(e,t,n,o){let i=[],s=this.eventCount,a=this.items,l=!o&&a.length?a.get(a.length-1):null;for(let u=0;u<e.steps.length;u++){let d=e.steps[u].invert(e.docs[u]),p=new Wr(e.mapping.maps[u],d,t),c;(c=l&&l.merge(p))&&(p=c,u?i.pop():a=a.slice(0,a.length-1)),i.push(p),t&&(s++,t=void 0),o||(l=p)}let f=s-n.depth;return f>Tv&&(a=_v(a,f),s-=f),new r(a.append(i),s)}remapping(e,t){let n=new ts;return this.items.forEach((o,i)=>{let s=o.mirrorOffset!=null&&i-o.mirrorOffset>=e?n.maps.length-o.mirrorOffset:void 0;n.appendMap(o.map,s)},e,t),n}addMaps(e){return this.eventCount==0?this:new r(this.items.append(e.map(t=>new Wr(t))),this.eventCount)}rebased(e,t){if(!this.eventCount)return this;let n=[],o=Math.max(0,this.items.length-t),i=e.mapping,s=e.steps.length,a=this.eventCount;this.items.forEach(p=>{p.selection&&a--},o);let l=t;this.items.forEach(p=>{let c=i.getMirror(--l);if(c==null)return;s=Math.min(s,c);let h=i.maps[c];if(p.step){let m=e.steps[c].invert(e.docs[c]),g=p.selection&&p.selection.map(i.slice(l+1,c));g&&a++,n.push(new Wr(h,m,g))}else n.push(new Wr(h))},o);let f=[];for(let p=t;p<s;p++)f.push(new Wr(i.maps[p]));let u=this.items.slice(0,o).append(f).append(n),d=new r(u,a);return d.emptyItemCount()>wv&&(d=d.compress(this.items.length-n.length)),d}emptyItemCount(){let e=0;return this.items.forEach(t=>{t.step||e++}),e}compress(e=this.items.length){let t=this.remapping(0,e),n=t.maps.length,o=[],i=0;return this.items.forEach((s,a)=>{if(a>=e)o.push(s),s.selection&&i++;else if(s.step){let l=s.step.map(t.slice(n)),f=l&&l.getMap();if(n--,f&&t.appendMap(f,n),l){let u=s.selection&&s.selection.map(t.slice(n));u&&i++;let d=new Wr(f.invert(),l,u),p,c=o.length-1;(p=o.length&&o[c].merge(d))?o[c]=p:o.push(d)}}else s.map&&n--},this.items.length,0),new r(_d.from(o.reverse()),i)}};Eo.empty=new Eo(_d.empty,0);function _v(r,e){let t;return r.forEach((n,o)=>{if(n.selection&&e--==0)return t=o,!1}),r.slice(t)}var Wr=class r{constructor(e,t,n,o){this.map=e,this.step=t,this.selection=n,this.mirrorOffset=o}merge(e){if(this.step&&e.step&&!e.selection){let t=e.step.merge(this.step);if(t)return new r(t.getMap().invert(),t,this.selection)}}},Kr=class{constructor(e,t,n,o,i){this.done=e,this.undone=t,this.prevRanges=n,this.prevTime=o,this.prevComposition=i}},Tv=20;function Mv(r,e,t,n){let o=t.getMeta(Mo),i;if(o)return o.historyState;t.getMeta(Pv)&&(r=new Kr(r.done,r.undone,null,0,-1));let s=t.getMeta("appendedTransaction");if(t.steps.length==0)return r;if(s&&s.getMeta(Mo))return s.getMeta(Mo).redo?new Kr(r.done.addTransform(t,void 0,n,pl(e)),r.undone,ax(t.mapping.maps),r.prevTime,r.prevComposition):new Kr(r.done,r.undone.addTransform(t,void 0,n,pl(e)),null,r.prevTime,r.prevComposition);if(t.getMeta("addToHistory")!==!1&&!(s&&s.getMeta("addToHistory")===!1)){let a=t.getMeta("composition"),l=r.prevTime==0||!s&&r.prevComposition!=a&&(r.prevTime<(t.time||0)-n.newGroupDelay||!Ev(t,r.prevRanges)),f=s?Td(r.prevRanges,t.mapping):ax(t.mapping.maps);return new Kr(r.done.addTransform(t,l?e.selection.getBookmark():void 0,n,pl(e)),Eo.empty,f,t.time,a??r.prevComposition)}else return(i=t.getMeta("rebased"))?new Kr(r.done.rebased(t,i),r.undone.rebased(t,i),Td(r.prevRanges,t.mapping),r.prevTime,r.prevComposition):new Kr(r.done.addMaps(t.mapping.maps),r.undone.addMaps(t.mapping.maps),Td(r.prevRanges,t.mapping),r.prevTime,r.prevComposition)}function Ev(r,e){if(!e)return!1;if(!r.docChanged)return!0;let t=!1;return r.mapping.maps[0].forEach((n,o)=>{for(let i=0;i<e.length;i+=2)n<=e[i+1]&&o>=e[i]&&(t=!0)}),t}function ax(r){let e=[];for(let t=r.length-1;t>=0&&e.length==0;t--)r[t].forEach((n,o,i,s)=>e.push(i,s));return e}function Td(r,e){if(!r)return null;let t=[];for(let n=0;n<r.length;n+=2){let o=e.map(r[n],1),i=e.map(r[n+1],-1);o<=i&&t.push(o,i)}return t}function Av(r,e,t){let n=pl(e),o=Mo.get(e).spec.config,i=(t?r.undone:r.done).popEvent(e,n);if(!i)return null;let s=i.selection.resolve(i.transform.doc),a=(t?r.done:r.undone).addTransform(i.transform,e.selection.getBookmark(),o,n),l=new Kr(t?a:i.remaining,t?i.remaining:a,null,0,-1);return i.transform.setSelection(s).setMeta(Mo,{redo:t,historyState:l})}var Md=!1,lx=null;function pl(r){let e=r.plugins;if(lx!=e){Md=!1,lx=e;for(let t=0;t<e.length;t++)if(e[t].spec.historyPreserveItems){Md=!0;break}}return Md}var Mo=new Z("history"),Pv=new Z("closeHistory");function fx(r={}){return r={depth:r.depth||100,newGroupDelay:r.newGroupDelay||500},new K({key:Mo,state:{init(){return new Kr(Eo.empty,Eo.empty,null,0,-1)},apply(e,t,n){return Mv(t,n,e,r)}},config:r,props:{handleDOMEvents:{beforeinput(e,t){let n=t.inputType,o=n=="historyUndo"?Ed:n=="historyRedo"?Ad:null;return!o||!e.editable?!1:(t.preventDefault(),o(e.state,e.dispatch))}}}})}function hl(r,e){return(t,n)=>{let o=Mo.getState(t);if(!o||(r?o.undone:o.done).eventCount==0)return!1;if(n){let i=Av(o,t,r);i&&n(e?i.scrollIntoView():i)}return!0}}var Ed=hl(!1,!0),Ad=hl(!0,!0),oP=hl(!1,!1),iP=hl(!0,!1);var dP=ue.create({name:"characterCount",addOptions(){return{limit:null,mode:"textSize",textCounter:r=>r.length,wordCounter:r=>r.split(" ").filter(e=>e!=="").length}},addStorage(){return{characters:()=>0,words:()=>0}},onBeforeCreate(){this.storage.characters=r=>{let e=r?.node||this.editor.state.doc;if((r?.mode||this.options.mode)==="textSize"){let n=e.textBetween(0,e.content.size,void 0," ");return this.options.textCounter(n)}return e.nodeSize},this.storage.words=r=>{let e=r?.node||this.editor.state.doc,t=e.textBetween(0,e.content.size," "," ");return this.options.wordCounter(t)}},addProseMirrorPlugins(){let r=!1;return[new K({key:new Z("characterCount"),appendTransaction:(e,t,n)=>{if(r)return;let o=this.options.limit;if(o==null||o===0){r=!0;return}let i=this.storage.characters({node:n.doc});if(i>o){let s=i-o,a=0,l=s;console.warn(`[CharacterCount] Initial content exceeded limit of ${o} characters. Content was automatically trimmed.`);let f=n.tr.deleteRange(a,l);return r=!0,f}r=!0},filterTransaction:(e,t)=>{let n=this.options.limit;if(!e.docChanged||n===0||n===null||n===void 0)return!0;let o=this.storage.characters({node:t.doc}),i=this.storage.characters({node:e.doc});if(i<=n||o>n&&i>n&&i<=o)return!0;if(o>n&&i>n&&i>o||!e.getMeta("paste"))return!1;let a=e.selection.$head.pos,l=i-n,f=a-l,u=a;return e.deleteRange(f,u),!(this.storage.characters({node:e.doc})>n)}})]}}),cx=ue.create({name:"dropCursor",addOptions(){return{color:"currentColor",width:1,class:void 0}},addProseMirrorPlugins(){return[nx(this.options)]}}),xP=ue.create({name:"focus",addOptions(){return{className:"has-focus",mode:"all"}},addProseMirrorPlugins(){return[new K({key:new Z("focus"),props:{decorations:({doc:r,selection:e})=>{let{isEditable:t,isFocused:n}=this.editor,{anchor:o}=e,i=[];if(!t||!n)return ze.create(r,[]);let s=0;this.options.mode==="deepest"&&r.descendants((l,f)=>{if(l.isText)return;if(!(o>=f&&o<=f+l.nodeSize-1))return!1;s+=1});let a=0;return r.descendants((l,f)=>{if(l.isText||!(o>=f&&o<=f+l.nodeSize-1))return!1;if(a+=1,this.options.mode==="deepest"&&s-a>0||this.options.mode==="shallowest"&&a>1)return this.options.mode==="deepest";i.push(St.node(f,f+l.nodeSize,{class:this.options.className}))}),ze.create(r,i)}}})]}}),px=ue.create({name:"gapCursor",addProseMirrorPlugins(){return[ix()]},extendNodeSchema(r){var e;let t={name:r.name,options:r.options,storage:r.storage};return{allowGapCursor:(e=pe(H(r,"allowGapCursor",t)))!=null?e:null}}}),ux="placeholder";function Ov(r){return r.replace(/\s+/g,"-").replace(/[^a-zA-Z0-9-]/g,"").replace(/^[0-9-]+/,"").replace(/^-+/,"").toLowerCase()}var Pd=ue.create({name:"placeholder",addOptions(){return{emptyEditorClass:"is-editor-empty",emptyNodeClass:"is-empty",dataAttribute:ux,placeholder:"Write something \u2026",showOnlyWhenEditable:!0,showOnlyCurrent:!0,includeChildren:!1}},addProseMirrorPlugins(){let r=this.options.dataAttribute?`data-${Ov(this.options.dataAttribute)}`:`data-${ux}`;return[new K({key:new Z("placeholder"),props:{decorations:({doc:e,selection:t})=>{let n=this.editor.isEditable||!this.options.showOnlyWhenEditable,{anchor:o}=t,i=[];if(!n)return null;let s=this.editor.isEmpty;return e.descendants((a,l)=>{let f=o>=l&&o<=l+a.nodeSize,u=!a.isLeaf&&ks(a);if(!a.type.isTextblock)return this.options.includeChildren;if((f||!this.options.showOnlyCurrent)&&u){let d=[this.options.emptyNodeClass];s&&d.push(this.options.emptyEditorClass);let p=St.node(l,l+a.nodeSize,{class:d.join(" "),[r]:typeof this.options.placeholder=="function"?this.options.placeholder({editor:this.editor,node:a,pos:l,hasAnchor:f}):this.options.placeholder});i.push(p)}return this.options.includeChildren}),ze.create(e,i)}}})]}}),TP=ue.create({name:"selection",addOptions(){return{className:"selection"}},addProseMirrorPlugins(){let{editor:r,options:e}=this;return[new K({key:new Z("selection"),props:{decorations(t){return t.selection.empty||r.isFocused||!r.isEditable||al(t.selection)||r.view.dragging?null:ze.create(t.doc,[St.inline(t.selection.from,t.selection.to,{class:e.className})])}}})]}}),Dv="skipTrailingNode";function dx({types:r,node:e}){return e&&Array.isArray(r)&&r.includes(e.type)||e?.type===r}var hx=ue.create({name:"trailingNode",addOptions(){return{node:void 0,notAfter:[]}},addProseMirrorPlugins(){var r;let e=new Z(this.name),t=this.options.node||((r=this.editor.schema.topNodeType.contentMatch.defaultType)==null?void 0:r.name)||"paragraph",n=Object.entries(this.editor.schema.nodes).map(([,o])=>o).filter(o=>(this.options.notAfter||[]).concat(t).includes(o.name));return[new K({key:e,appendTransaction:(o,i,s)=>{let{doc:a,tr:l,schema:f}=s,u=e.getState(s),d=a.content.size,p=f.nodes[t];if(!o.some(c=>c.getMeta(Dv))&&u)return l.insert(d,p.create())},state:{init:(o,i)=>{let s=i.tr.doc.lastChild;return!dx({node:s,types:n})},apply:(o,i)=>{if(!o.docChanged||o.getMeta("__uniqueIDTransaction"))return i;let s=o.doc.lastChild;return!dx({node:s,types:n})}}})]}}),mx=ue.create({name:"undoRedo",addOptions(){return{depth:100,newGroupDelay:500}},addCommands(){return{undo:()=>({state:r,dispatch:e})=>Ed(r,e),redo:()=>({state:r,dispatch:e})=>Ad(r,e)}},addProseMirrorPlugins(){return[fx(this.options)]},addKeyboardShortcuts(){return{"Mod-z":()=>this.editor.commands.undo(),"Shift-Mod-z":()=>this.editor.commands.redo(),"Mod-y":()=>this.editor.commands.redo(),"Mod-\u044F":()=>this.editor.commands.undo(),"Shift-Mod-\u044F":()=>this.editor.commands.redo()}}});var gx=Pd;var xi=(r,e)=>{if(r==="slot")return 0;if(r instanceof Function)return r(e);let{children:t,...n}=e??{};if(r==="svg")throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");return[r,n,t]};var Lv=/^\s*>\s$/,xx=be.create({name:"blockquote",addOptions(){return{HTMLAttributes:{}}},content:"block+",group:"block",defining:!0,parseHTML(){return[{tag:"blockquote"}]},renderHTML({HTMLAttributes:r}){return xi("blockquote",{...ie(this.options.HTMLAttributes,r),children:xi("slot",{})})},parseMarkdown:(r,e)=>{var t;let n=(t=e.parseBlockChildren)!=null?t:e.parseChildren;return e.createNode("blockquote",void 0,n(r.tokens||[]))},renderMarkdown:(r,e)=>{if(!r.content)return"";let t=">",n=[];return r.content.forEach((o,i)=>{var s,a;let u=((a=(s=e.renderChild)==null?void 0:s.call(e,o,i))!=null?a:e.renderChildren([o])).split(`
`).map(d=>d.trim()===""?t:`${t} ${d}`);n.push(u.join(`
`))}),n.join(`
${t}
`)},addCommands(){return{setBlockquote:()=>({commands:r})=>r.wrapIn(this.name),toggleBlockquote:()=>({commands:r})=>r.toggleWrap(this.name),unsetBlockquote:()=>({commands:r})=>r.lift(this.name)}},addKeyboardShortcuts(){return{"Mod-Shift-b":()=>this.editor.commands.toggleBlockquote()}},addInputRules(){return[$r({find:Lv,type:this.type})]}});var Nv=/(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/,Rv=/(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g,Iv=/(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/,Bv=/(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g,yx=or.create({name:"bold",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"strong"},{tag:"b",getAttrs:r=>r.style.fontWeight!=="normal"&&null},{style:"font-weight=400",clearMark:r=>r.type.name===this.name},{style:"font-weight",getAttrs:r=>/^(bold(er)?|[5-9]\d{2,})$/.test(r)&&null}]},renderHTML({HTMLAttributes:r}){return xi("strong",{...ie(this.options.HTMLAttributes,r),children:xi("slot",{})})},markdownTokenName:"strong",parseMarkdown:(r,e)=>e.applyMark("bold",e.parseInline(r.tokens||[])),markdownOptions:{htmlReopen:{open:"<strong>",close:"</strong>"}},renderMarkdown:(r,e)=>`**${e.renderChildren(r)}**`,addCommands(){return{setBold:()=>({commands:r})=>r.setMark(this.name),toggleBold:()=>({commands:r})=>r.toggleMark(this.name),unsetBold:()=>({commands:r})=>r.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-b":()=>this.editor.commands.toggleBold(),"Mod-B":()=>this.editor.commands.toggleBold()}},addInputRules(){return[qr({find:Nv,type:this.type}),qr({find:Iv,type:this.type})]},addPasteRules(){return[br({find:Rv,type:this.type}),br({find:Bv,type:this.type})]}});var Fv=/(^|[^`])`([^`]+)`(?!`)$/,zv=/(^|[^`])`([^`]+)`(?!`)/g,bx=or.create({name:"code",addOptions(){return{HTMLAttributes:{}}},excludes:"_",code:!0,exitable:!0,parseHTML(){return[{tag:"code"}]},renderHTML({HTMLAttributes:r}){return["code",ie(this.options.HTMLAttributes,r),0]},markdownTokenName:"codespan",parseMarkdown:(r,e)=>e.applyMark("code",[{type:"text",text:r.text||""}]),renderMarkdown:(r,e)=>r.content?`\`${e.renderChildren(r.content)}\``:"",addCommands(){return{setCode:()=>({commands:r})=>r.setMark(this.name),toggleCode:()=>({commands:r})=>r.toggleMark(this.name),unsetCode:()=>({commands:r})=>r.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-e":()=>this.editor.commands.toggleCode()}},addInputRules(){return[qr({find:Fv,type:this.type})]},addPasteRules(){return[br({find:zv,type:this.type})]}});var Od=4,Hv=/^```([a-z]+)?[\s\n]$/,Vv=/^~~~([a-z]+)?[\s\n]$/,kx=be.create({name:"codeBlock",addOptions(){return{languageClassPrefix:"language-",exitOnTripleEnter:!0,exitOnArrowDown:!0,defaultLanguage:null,enableTabIndentation:!1,tabSize:Od,HTMLAttributes:{}}},content:"text*",marks:"",group:"block",code:!0,defining:!0,addAttributes(){return{language:{default:this.options.defaultLanguage,parseHTML:r=>{var e;let{languageClassPrefix:t}=this.options;if(!t)return null;let i=[...((e=r.firstElementChild)==null?void 0:e.classList)||[]].filter(s=>s.startsWith(t)).map(s=>s.replace(t,""))[0];return i||null},rendered:!1}}},parseHTML(){return[{tag:"pre",preserveWhitespace:"full"}]},renderHTML({node:r,HTMLAttributes:e}){return["pre",ie(this.options.HTMLAttributes,e),["code",{class:r.attrs.language?this.options.languageClassPrefix+r.attrs.language:null},0]]},markdownTokenName:"code",parseMarkdown:(r,e)=>{var t,n;return((t=r.raw)==null?void 0:t.startsWith("```"))===!1&&((n=r.raw)==null?void 0:n.startsWith("~~~"))===!1&&r.codeBlockStyle!=="indented"?[]:e.createNode("codeBlock",{language:r.lang||null},r.text?[e.createTextNode(r.text)]:[])},renderMarkdown:(r,e)=>{var t;let n="",o=((t=r.attrs)==null?void 0:t.language)||"";return r.content?n=[`\`\`\`${o}`,e.renderChildren(r.content),"```"].join(`
`):n=`\`\`\`${o}

\`\`\``,n},addCommands(){return{setCodeBlock:r=>({commands:e})=>e.setNode(this.name,r),toggleCodeBlock:r=>({commands:e})=>e.toggleNode(this.name,"paragraph",r)}},addKeyboardShortcuts(){return{"Mod-Alt-c":()=>this.editor.commands.toggleCodeBlock(),Backspace:()=>{let{empty:r,$anchor:e}=this.editor.state.selection,t=e.pos===1;return!r||e.parent.type.name!==this.name?!1:t||!e.parent.textContent.length?this.editor.commands.clearNodes():!1},Tab:({editor:r})=>{var e;if(!this.options.enableTabIndentation)return!1;let t=(e=this.options.tabSize)!=null?e:Od,{state:n}=r,{selection:o}=n,{$from:i,empty:s}=o;if(i.parent.type!==this.type)return!1;let a=" ".repeat(t);return s?r.commands.insertContent(a):r.commands.command(({tr:l})=>{let{from:f,to:u}=o,c=n.doc.textBetween(f,u,`
`,`
`).split(`
`).map(h=>a+h).join(`
`);return l.replaceWith(f,u,n.schema.text(c)),!0})},"Shift-Tab":({editor:r})=>{var e;if(!this.options.enableTabIndentation)return!1;let t=(e=this.options.tabSize)!=null?e:Od,{state:n}=r,{selection:o}=n,{$from:i,empty:s}=o;return i.parent.type!==this.type?!1:s?r.commands.command(({tr:a})=>{var l;let{pos:f}=i,u=i.start(),d=i.end(),c=n.doc.textBetween(u,d,`
`,`
`).split(`
`),h=0,m=0,g=f-u;for(let w=0;w<c.length;w+=1){if(m+c[w].length>=g){h=w;break}m+=c[w].length+1}let y=((l=c[h].match(/^ */))==null?void 0:l[0])||"",k=Math.min(y.length,t);if(k===0)return!0;let S=u;for(let w=0;w<h;w+=1)S+=c[w].length+1;return a.delete(S,S+k),f-S<=k&&a.setSelection(V.create(a.doc,S)),!0}):r.commands.command(({tr:a})=>{let{from:l,to:f}=o,p=n.doc.textBetween(l,f,`
`,`
`).split(`
`).map(c=>{var h;let m=((h=c.match(/^ */))==null?void 0:h[0])||"",g=Math.min(m.length,t);return c.slice(g)}).join(`
`);return a.replaceWith(l,f,n.schema.text(p)),!0})},Enter:({editor:r})=>{if(!this.options.exitOnTripleEnter)return!1;let{state:e}=r,{selection:t}=e,{$from:n,empty:o}=t;if(!o||n.parent.type!==this.type)return!1;let i=n.parentOffset===n.parent.nodeSize-2,s=n.parent.textContent.endsWith(`

`);return!i||!s?!1:r.chain().command(({tr:a})=>(a.delete(n.pos-2,n.pos),!0)).exitCode().run()},ArrowDown:({editor:r})=>{if(!this.options.exitOnArrowDown)return!1;let{state:e}=r,{selection:t,doc:n}=e,{$from:o,empty:i}=t;if(!i||o.parent.type!==this.type||!(o.parentOffset===o.parent.nodeSize-2))return!1;let a=o.after();return a===void 0?!1:n.nodeAt(a)?r.commands.command(({tr:f})=>(f.setSelection(W.near(n.resolve(a))),!0)):r.commands.exitCode()}}},addInputRules(){return[Ss({find:Hv,type:this.type,getAttributes:r=>({language:r[1]})}),Ss({find:Vv,type:this.type,getAttributes:r=>({language:r[1]})})]},addProseMirrorPlugins(){return[new K({key:new Z("codeBlockVSCodeHandler"),props:{handlePaste:(r,e)=>{if(!e.clipboardData||this.editor.isActive(this.type.name))return!1;let t=e.clipboardData.getData("text/plain"),n=e.clipboardData.getData("vscode-editor-data"),o=n?JSON.parse(n):void 0,i=o?.mode;if(!t||!i)return!1;let{tr:s,schema:a}=r.state,l=a.text(t.replace(/\r\n?/g,`
`));return s.replaceSelectionWith(this.type.create({language:i},l)),s.selection.$from.parent.type!==this.type&&s.setSelection(V.near(s.doc.resolve(Math.max(0,s.selection.from-2)))),s.setMeta("paste",!0),r.dispatch(s),!0}}})]}});var Sx=be.create({name:"doc",topNode:!0,content:"block+",renderMarkdown:(r,e)=>r.content?e.renderChildren(r.content,`

`):""});var Cx=be.create({name:"hardBreak",markdownTokenName:"br",addOptions(){return{keepMarks:!0,HTMLAttributes:{}}},inline:!0,group:"inline",selectable:!1,linebreakReplacement:!0,parseHTML(){return[{tag:"br"}]},renderHTML({HTMLAttributes:r}){return["br",ie(this.options.HTMLAttributes,r)]},renderText(){return`
`},renderMarkdown:()=>`  
`,parseMarkdown:()=>({type:"hardBreak"}),addCommands(){return{setHardBreak:()=>({commands:r,chain:e,state:t,editor:n})=>r.first([()=>r.exitCode(),()=>r.command(()=>{let{selection:o,storedMarks:i}=t;if(o.$from.parent.type.spec.isolating)return!1;let{keepMarks:s}=this.options,{splittableMarks:a}=n.extensionManager,l=i||o.$to.parentOffset&&o.$from.marks();return e().insertContent({type:this.name}).command(({tr:f,dispatch:u})=>{if(u&&l&&s){let d=l.filter(p=>a.includes(p.type.name));f.ensureMarks(d)}return!0}).run()})])}},addKeyboardShortcuts(){return{"Mod-Enter":()=>this.editor.commands.setHardBreak(),"Shift-Enter":()=>this.editor.commands.setHardBreak()}}});var vx=be.create({name:"heading",addOptions(){return{levels:[1,2,3,4,5,6],HTMLAttributes:{}}},content:"inline*",group:"block",defining:!0,addAttributes(){return{level:{default:1,rendered:!1}}},parseHTML(){return this.options.levels.map(r=>({tag:`h${r}`,attrs:{level:r}}))},renderHTML({node:r,HTMLAttributes:e}){return[`h${this.options.levels.includes(r.attrs.level)?r.attrs.level:this.options.levels[0]}`,ie(this.options.HTMLAttributes,e),0]},parseMarkdown:(r,e)=>e.createNode("heading",{level:r.depth||1},e.parseInline(r.tokens||[])),renderMarkdown:(r,e)=>{var t;let n=(t=r.attrs)!=null&&t.level?parseInt(r.attrs.level,10):1,o="#".repeat(n);return r.content?`${o} ${e.renderChildren(r.content)}`:""},addCommands(){return{setHeading:r=>({commands:e})=>this.options.levels.includes(r.level)?e.setNode(this.name,r):!1,toggleHeading:r=>({commands:e})=>this.options.levels.includes(r.level)?e.toggleNode(this.name,"paragraph",r):!1}},addKeyboardShortcuts(){return this.options.levels.reduce((r,e)=>({...r,[`Mod-Alt-${e}`]:()=>this.editor.commands.toggleHeading({level:e})}),{})},addInputRules(){return this.options.levels.map(r=>Ss({find:new RegExp(`^(#{${Math.min(...this.options.levels)},${r}})\\s$`),type:this.type,getAttributes:{level:r}}))}});var wx=be.create({name:"horizontalRule",addOptions(){return{HTMLAttributes:{},nextNodeType:"paragraph"}},group:"block",parseHTML(){return[{tag:"hr"}]},renderHTML({HTMLAttributes:r}){return["hr",ie(this.options.HTMLAttributes,r)]},markdownTokenName:"hr",parseMarkdown:(r,e)=>e.createNode("horizontalRule"),renderMarkdown:()=>"---",addCommands(){return{setHorizontalRule:()=>({chain:r,state:e})=>{if(!tx(e,e.schema.nodes[this.name]))return!1;let{selection:t}=e,{$to:n}=t,o=r();return al(t)?o.insertContentAt(n.pos,{type:this.name}):o.insertContent({type:this.name}),o.command(({state:i,tr:s,dispatch:a})=>{if(a){let{$to:l}=s.selection,f=l.end();if(l.nodeAfter)l.nodeAfter.isTextblock?s.setSelection(V.create(s.doc,l.pos+1)):l.nodeAfter.isBlock?s.setSelection(F.create(s.doc,l.pos)):s.setSelection(V.create(s.doc,l.pos));else{let u=i.schema.nodes[this.options.nextNodeType]||l.parent.type.contentMatch.defaultType,d=u?.create();d&&(s.insert(f,d),s.setSelection(V.create(s.doc,f+1)))}s.scrollIntoView()}return!0}).run()}}},addInputRules(){return[ex({find:/^(?:---|—-|___\s|\*\*\*\s)$/,type:this.type})]}});var Uv=/(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/,qv=/(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g,$v=/(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/,Wv=/(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g,_x=or.create({name:"italic",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"em"},{tag:"i",getAttrs:r=>r.style.fontStyle!=="normal"&&null},{style:"font-style=normal",clearMark:r=>r.type.name===this.name},{style:"font-style=italic"}]},renderHTML({HTMLAttributes:r}){return["em",ie(this.options.HTMLAttributes,r),0]},addCommands(){return{setItalic:()=>({commands:r})=>r.setMark(this.name),toggleItalic:()=>({commands:r})=>r.toggleMark(this.name),unsetItalic:()=>({commands:r})=>r.unsetMark(this.name)}},markdownTokenName:"em",parseMarkdown:(r,e)=>e.applyMark("italic",e.parseInline(r.tokens||[])),markdownOptions:{htmlReopen:{open:"<em>",close:"</em>"}},renderMarkdown:(r,e)=>`*${e.renderChildren(r)}*`,addKeyboardShortcuts(){return{"Mod-i":()=>this.editor.commands.toggleItalic(),"Mod-I":()=>this.editor.commands.toggleItalic()}},addInputRules(){return[qr({find:Uv,type:this.type}),qr({find:$v,type:this.type})]},addPasteRules(){return[br({find:qv,type:this.type}),br({find:Wv,type:this.type})]}});var Kv="aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5m\xF6gensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2",jv="\u03B5\u03BB1\u03C52\u0431\u04331\u0435\u043B3\u0434\u0435\u0442\u04384\u0435\u044E2\u043A\u0430\u0442\u043E\u043B\u0438\u043A6\u043E\u043C3\u043C\u043A\u04342\u043E\u043D1\u0441\u043A\u0432\u04306\u043E\u043D\u043B\u0430\u0439\u043D5\u0440\u04333\u0440\u0443\u04412\u04442\u0441\u0430\u0439\u04423\u0440\u04313\u0443\u043A\u04403\u049B\u0430\u04373\u0570\u0561\u05753\u05D9\u05E9\u05E8\u05D0\u05DC5\u05E7\u05D5\u05DD3\u0627\u0628\u0648\u0638\u0628\u064A5\u0631\u0627\u0645\u0643\u06485\u0644\u0627\u0631\u062F\u06464\u0628\u062D\u0631\u064A\u06465\u062C\u0632\u0627\u0626\u06315\u0633\u0639\u0648\u062F\u064A\u06296\u0639\u0644\u064A\u0627\u06465\u0645\u063A\u0631\u06285\u0645\u0627\u0631\u0627\u062A5\u06CC\u0631\u0627\u06465\u0628\u0627\u0631\u062A2\u0632\u0627\u06314\u064A\u062A\u06433\u06BE\u0627\u0631\u062A5\u062A\u0648\u0646\u06334\u0633\u0648\u062F\u0627\u06463\u0631\u064A\u06295\u0634\u0628\u0643\u06294\u0639\u0631\u0627\u06422\u06282\u0645\u0627\u06464\u0641\u0644\u0633\u0637\u064A\u06466\u0642\u0637\u06313\u0643\u0627\u062B\u0648\u0644\u064A\u06436\u0648\u06453\u0645\u0635\u06312\u0644\u064A\u0633\u064A\u06275\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u06277\u0642\u06394\u0647\u0645\u0631\u0627\u06475\u067E\u0627\u06A9\u0633\u062A\u0627\u06467\u0680\u0627\u0631\u062A4\u0915\u0949\u092E3\u0928\u0947\u091F3\u092D\u093E\u0930\u09240\u092E\u094D3\u094B\u09245\u0938\u0902\u0917\u0920\u09285\u09AC\u09BE\u0982\u09B2\u09BE5\u09AD\u09BE\u09B0\u09A42\u09F0\u09A44\u0A2D\u0A3E\u0A30\u0A244\u0AAD\u0ABE\u0AB0\u0AA44\u0B2D\u0B3E\u0B30\u0B244\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE6\u0BB2\u0B99\u0BCD\u0B95\u0BC86\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD11\u0C2D\u0C3E\u0C30\u0C24\u0C4D5\u0CAD\u0CBE\u0CB0\u0CA44\u0D2D\u0D3E\u0D30\u0D24\u0D025\u0DBD\u0D82\u0D9A\u0DCF4\u0E04\u0E2D\u0E213\u0E44\u0E17\u0E223\u0EA5\u0EB2\u0EA73\u10D2\u10D42\u307F\u3093\u306A3\u30A2\u30DE\u30BE\u30F34\u30AF\u30E9\u30A6\u30C94\u30B0\u30FC\u30B0\u30EB4\u30B3\u30E02\u30B9\u30C8\u30A23\u30BB\u30FC\u30EB3\u30D5\u30A1\u30C3\u30B7\u30E7\u30F36\u30DD\u30A4\u30F3\u30C84\u4E16\u754C2\u4E2D\u4FE11\u56FD1\u570B1\u6587\u7F513\u4E9A\u9A6C\u900A3\u4F01\u4E1A2\u4F5B\u5C712\u4FE1\u606F2\u5065\u5EB72\u516B\u53662\u516C\u53F81\u76CA2\u53F0\u6E7E1\u70632\u5546\u57CE1\u5E971\u68072\u5609\u91CC0\u5927\u9152\u5E975\u5728\u7EBF2\u5927\u62FF2\u5929\u4E3B\u65593\u5A31\u4E502\u5BB6\u96FB2\u5E7F\u4E1C2\u5FAE\u535A2\u6148\u55842\u6211\u7231\u4F603\u624B\u673A2\u62DB\u80582\u653F\u52A11\u5E9C2\u65B0\u52A0\u57612\u95FB2\u65F6\u5C1A2\u66F8\u7C4D2\u673A\u67842\u6DE1\u9A6C\u95213\u6E38\u620F2\u6FB3\u95802\u70B9\u770B2\u79FB\u52A82\u7EC4\u7EC7\u673A\u67844\u7F51\u57401\u5E971\u7AD91\u7EDC2\u8054\u901A2\u8C37\u6B4C2\u8D2D\u72692\u901A\u8CA92\u96C6\u56E22\u96FB\u8A0A\u76C8\u79D14\u98DE\u5229\u6D663\u98DF\u54C12\u9910\u53852\u9999\u683C\u91CC\u62C93\u6E2F2\uB2F7\uB1371\uCEF42\uC0BC\uC1312\uD55C\uAD6D2",Fd="numeric",zd="ascii",Hd="alpha",_s="asciinumeric",ws="alphanumeric",Vd="domain",Dx="emoji",Gv="scheme",Jv="slashscheme",Dd="whitespace";function Xv(r,e){return r in e||(e[r]=[]),e[r]}function Ao(r,e,t){e[Fd]&&(e[_s]=!0,e[ws]=!0),e[zd]&&(e[_s]=!0,e[Hd]=!0),e[_s]&&(e[ws]=!0),e[Hd]&&(e[ws]=!0),e[ws]&&(e[Vd]=!0),e[Dx]&&(e[Vd]=!0);for(let n in e){let o=Xv(n,t);o.indexOf(r)<0&&o.push(r)}}function Yv(r,e){let t={};for(let n in e)e[n].indexOf(r)>=0&&(t[n]=!0);return t}function Gt(r=null){this.j={},this.jr=[],this.jd=null,this.t=r}Gt.groups={};Gt.prototype={accepts(){return!!this.t},go(r){let e=this,t=e.j[r];if(t)return t;for(let n=0;n<e.jr.length;n++){let o=e.jr[n][0],i=e.jr[n][1];if(i&&o.test(r))return i}return e.jd},has(r,e=!1){return e?r in this.j:!!this.go(r)},ta(r,e,t,n){for(let o=0;o<r.length;o++)this.tt(r[o],e,t,n)},tr(r,e,t,n){n=n||Gt.groups;let o;return e&&e.j?o=e:(o=new Gt(e),t&&n&&Ao(e,t,n)),this.jr.push([r,o]),o},ts(r,e,t,n){let o=this,i=r.length;if(!i)return o;for(let s=0;s<i-1;s++)o=o.tt(r[s]);return o.tt(r[i-1],e,t,n)},tt(r,e,t,n){n=n||Gt.groups;let o=this;if(e&&e.j)return o.j[r]=e,e;let i=e,s,a=o.go(r);if(a?(s=new Gt,Object.assign(s.j,a.j),s.jr.push.apply(s.jr,a.jr),s.jd=a.jd,s.t=a.t):s=new Gt,i){if(n)if(s.t&&typeof s.t=="string"){let l=Object.assign(Yv(s.t,n),t);Ao(i,l,n)}else t&&Ao(i,t,n);s.t=i}return o.j[r]=s,s}};var Q=(r,e,t,n,o)=>r.ta(e,t,n,o),De=(r,e,t,n,o)=>r.tr(e,t,n,o),Tx=(r,e,t,n,o)=>r.ts(e,t,n,o),P=(r,e,t,n,o)=>r.tt(e,t,n,o),kn="WORD",Ud="UWORD",Lx="ASCIINUMERICAL",Nx="ALPHANUMERICAL",Os="LOCALHOST",qd="TLD",$d="UTLD",yl="SCHEME",yi="SLASH_SCHEME",Kd="NUM",Wd="WS",jd="NL",Ts="OPENBRACE",Ms="CLOSEBRACE",bl="OPENBRACKET",kl="CLOSEBRACKET",Sl="OPENPAREN",Cl="CLOSEPAREN",vl="OPENANGLEBRACKET",wl="CLOSEANGLEBRACKET",_l="FULLWIDTHLEFTPAREN",Tl="FULLWIDTHRIGHTPAREN",Ml="LEFTCORNERBRACKET",El="RIGHTCORNERBRACKET",Al="LEFTWHITECORNERBRACKET",Pl="RIGHTWHITECORNERBRACKET",Ol="FULLWIDTHLESSTHAN",Dl="FULLWIDTHGREATERTHAN",Ll="AMPERSAND",Nl="APOSTROPHE",Rl="ASTERISK",Wn="AT",Il="BACKSLASH",Bl="BACKTICK",Fl="CARET",Kn="COLON",Gd="COMMA",zl="DOLLAR",jr="DOT",Hl="EQUALS",Jd="EXCLAMATION",Sr="HYPHEN",Es="PERCENT",Vl="PIPE",Ul="PLUS",ql="POUND",As="QUERY",Xd="QUOTE",Rx="FULLWIDTHMIDDLEDOT",Yd="SEMI",Gr="SLASH",Ps="TILDE",$l="UNDERSCORE",Ix="EMOJI",Wl="SYM",Bx=Object.freeze({__proto__:null,ALPHANUMERICAL:Nx,AMPERSAND:Ll,APOSTROPHE:Nl,ASCIINUMERICAL:Lx,ASTERISK:Rl,AT:Wn,BACKSLASH:Il,BACKTICK:Bl,CARET:Fl,CLOSEANGLEBRACKET:wl,CLOSEBRACE:Ms,CLOSEBRACKET:kl,CLOSEPAREN:Cl,COLON:Kn,COMMA:Gd,DOLLAR:zl,DOT:jr,EMOJI:Ix,EQUALS:Hl,EXCLAMATION:Jd,FULLWIDTHGREATERTHAN:Dl,FULLWIDTHLEFTPAREN:_l,FULLWIDTHLESSTHAN:Ol,FULLWIDTHMIDDLEDOT:Rx,FULLWIDTHRIGHTPAREN:Tl,HYPHEN:Sr,LEFTCORNERBRACKET:Ml,LEFTWHITECORNERBRACKET:Al,LOCALHOST:Os,NL:jd,NUM:Kd,OPENANGLEBRACKET:vl,OPENBRACE:Ts,OPENBRACKET:bl,OPENPAREN:Sl,PERCENT:Es,PIPE:Vl,PLUS:Ul,POUND:ql,QUERY:As,QUOTE:Xd,RIGHTCORNERBRACKET:El,RIGHTWHITECORNERBRACKET:Pl,SCHEME:yl,SEMI:Yd,SLASH:Gr,SLASH_SCHEME:yi,SYM:Wl,TILDE:Ps,TLD:qd,UNDERSCORE:$l,UTLD:$d,UWORD:Ud,WORD:kn,WS:Wd}),yn=/[a-z]/,vs=/\p{L}/u,Ld=/\p{Emoji}/u;var bn=/\d/,Nd=/\s/;var Mx="\r",Rd=`
`,Qv="\uFE0F",Zv="\u200D",Id="\uFFFC",ml=null,gl=null;function ew(r=[]){let e={};Gt.groups=e;let t=new Gt;ml==null&&(ml=Ex(Kv)),gl==null&&(gl=Ex(jv)),P(t,"'",Nl),P(t,"{",Ts),P(t,"}",Ms),P(t,"[",bl),P(t,"]",kl),P(t,"(",Sl),P(t,")",Cl),P(t,"<",vl),P(t,">",wl),P(t,"\uFF08",_l),P(t,"\uFF09",Tl),P(t,"\u300C",Ml),P(t,"\u300D",El),P(t,"\u300E",Al),P(t,"\u300F",Pl),P(t,"\uFF1C",Ol),P(t,"\uFF1E",Dl),P(t,"&",Ll),P(t,"*",Rl),P(t,"@",Wn),P(t,"`",Bl),P(t,"^",Fl),P(t,":",Kn),P(t,",",Gd),P(t,"$",zl),P(t,".",jr),P(t,"=",Hl),P(t,"!",Jd),P(t,"-",Sr),P(t,"%",Es),P(t,"|",Vl),P(t,"+",Ul),P(t,"#",ql),P(t,"?",As),P(t,'"',Xd),P(t,"/",Gr),P(t,";",Yd),P(t,"~",Ps),P(t,"_",$l),P(t,"\\",Il),P(t,"\u30FB",Rx);let n=De(t,bn,Kd,{[Fd]:!0});De(n,bn,n);let o=De(n,yn,Lx,{[_s]:!0}),i=De(n,vs,Nx,{[ws]:!0}),s=De(t,yn,kn,{[zd]:!0});De(s,bn,o),De(s,yn,s),De(o,bn,o),De(o,yn,o);let a=De(t,vs,Ud,{[Hd]:!0});De(a,yn),De(a,bn,i),De(a,vs,a),De(i,bn,i),De(i,yn),De(i,vs,i);let l=P(t,Rd,jd,{[Dd]:!0}),f=P(t,Mx,Wd,{[Dd]:!0}),u=De(t,Nd,Wd,{[Dd]:!0});P(t,Id,u),P(f,Rd,l),P(f,Id,u),De(f,Nd,u),P(u,Mx),P(u,Rd),De(u,Nd,u),P(u,Id,u);let d=De(t,Ld,Ix,{[Dx]:!0});P(d,"#"),De(d,Ld,d),P(d,Qv,d);let p=P(d,Zv);P(p,"#"),De(p,Ld,d);let c=[[yn,s],[bn,o]],h=[[yn,null],[vs,a],[bn,i]];for(let m=0;m<ml.length;m++)$n(t,ml[m],qd,kn,c);for(let m=0;m<gl.length;m++)$n(t,gl[m],$d,Ud,h);Ao(qd,{tld:!0,ascii:!0},e),Ao($d,{utld:!0,alpha:!0},e),$n(t,"file",yl,kn,c),$n(t,"mailto",yl,kn,c),$n(t,"http",yi,kn,c),$n(t,"https",yi,kn,c),$n(t,"ftp",yi,kn,c),$n(t,"ftps",yi,kn,c),Ao(yl,{scheme:!0,ascii:!0},e),Ao(yi,{slashscheme:!0,ascii:!0},e),r=r.sort((m,g)=>m[0]>g[0]?1:-1);for(let m=0;m<r.length;m++){let g=r[m][0],y=r[m][1]?{[Gv]:!0}:{[Jv]:!0};g.indexOf("-")>=0?y[Vd]=!0:yn.test(g)?bn.test(g)?y[_s]=!0:y[zd]=!0:y[Fd]=!0,Tx(t,g,g,y)}return Tx(t,"localhost",Os,{ascii:!0}),t.jd=new Gt(Wl),{start:t,tokens:Object.assign({groups:e},Bx)}}function Fx(r,e){let t=tw(e.replace(/[A-Z]/g,a=>a.toLowerCase())),n=t.length,o=[],i=0,s=0;for(;s<n;){let a=r,l=null,f=0,u=null,d=-1,p=-1;for(;s<n&&(l=a.go(t[s]));)a=l,a.accepts()?(d=0,p=0,u=a):d>=0&&(d+=t[s].length,p++),f+=t[s].length,i+=t[s].length,s++;i-=d,s-=p,f-=d,o.push({t:u.t,v:e.slice(i-f,i),s:i-f,e:i})}return o}function tw(r){let e=[],t=r.length,n=0;for(;n<t;){let o=r.charCodeAt(n),i,s=o<55296||o>56319||n+1===t||(i=r.charCodeAt(n+1))<56320||i>57343?r[n]:r.slice(n,n+2);e.push(s),n+=s.length}return e}function $n(r,e,t,n,o){let i,s=e.length;for(let a=0;a<s-1;a++){let l=e[a];r.j[l]?i=r.j[l]:(i=new Gt(n),i.jr=o.slice(),r.j[l]=i),r=i}return i=new Gt(t),i.jr=o.slice(),r.j[e[s-1]]=i,i}function Ex(r){let e=[],t=[],n=0,o="0123456789";for(;n<r.length;){let i=0;for(;o.indexOf(r[n+i])>=0;)i++;if(i>0){e.push(t.join(""));for(let s=parseInt(r.substring(n,n+i),10);s>0;s--)t.pop();n+=i}else t.push(r[n]),n++}return e}var Ds={defaultProtocol:"http",events:null,format:Ax,formatHref:Ax,nl2br:!1,tagName:"a",target:null,rel:null,validate:!0,truncate:1/0,className:null,attributes:null,ignoreTags:[],render:null};function Qd(r,e=null){let t=Object.assign({},Ds);r&&(t=Object.assign(t,r instanceof Qd?r.o:r));let n=t.ignoreTags,o=[];for(let i=0;i<n.length;i++)o.push(n[i].toUpperCase());this.o=t,e&&(this.defaultRender=e),this.ignoreTags=o}Qd.prototype={o:Ds,ignoreTags:[],defaultRender(r){return r},check(r){return this.get("validate",r.toString(),r)},get(r,e,t){let n=e!=null,o=this.o[r];return o&&(typeof o=="object"?(o=t.t in o?o[t.t]:Ds[r],typeof o=="function"&&n&&(o=o(e,t))):typeof o=="function"&&n&&(o=o(e,t.t,t)),o)},getObj(r,e,t){let n=this.o[r];return typeof n=="function"&&e!=null&&(n=n(e,t.t,t)),n},render(r){let e=r.render(this);return(this.get("render",null,r)||this.defaultRender)(e,r.t,r)}};function Ax(r){return r}function zx(r,e){this.t="token",this.v=r,this.tk=e}zx.prototype={isLink:!1,toString(){return this.v},toHref(r){return this.toString()},toFormattedString(r){let e=this.toString(),t=r.get("truncate",e,this),n=r.get("format",e,this);return t&&n.length>t?n.substring(0,t)+"\u2026":n},toFormattedHref(r){return r.get("formatHref",this.toHref(r.get("defaultProtocol")),this)},startIndex(){return this.tk[0].s},endIndex(){return this.tk[this.tk.length-1].e},toObject(r=Ds.defaultProtocol){return{type:this.t,value:this.toString(),isLink:this.isLink,href:this.toHref(r),start:this.startIndex(),end:this.endIndex()}},toFormattedObject(r){return{type:this.t,value:this.toFormattedString(r),isLink:this.isLink,href:this.toFormattedHref(r),start:this.startIndex(),end:this.endIndex()}},validate(r){return r.get("validate",this.toString(),this)},render(r){let e=this,t=this.toHref(r.get("defaultProtocol")),n=r.get("formatHref",t,this),o=r.get("tagName",t,e),i=this.toFormattedString(r),s={},a=r.get("className",t,e),l=r.get("target",t,e),f=r.get("rel",t,e),u=r.getObj("attributes",t,e),d=r.getObj("events",t,e);return s.href=n,a&&(s.class=a),l&&(s.target=l),f&&(s.rel=f),u&&Object.assign(s,u),{tagName:o,attributes:s,content:i,eventListeners:d}}};function Kl(r,e){class t extends zx{constructor(o,i){super(o,i),this.t=r}}for(let n in e)t.prototype[n]=e[n];return t.t=r,t}var Px=Kl("email",{isLink:!0,toHref(){return"mailto:"+this.toString()}}),Ox=Kl("text"),rw=Kl("nl"),xl=Kl("url",{isLink:!0,toHref(r=Ds.defaultProtocol){return this.hasProtocol()?this.v:`${r}://${this.v}`},hasProtocol(){let r=this.tk;return r.length>=2&&r[0].t!==Os&&r[1].t===Kn}});var kr=r=>new Gt(r);function nw({groups:r}){let e=r.domain.concat([Ll,Rl,Wn,Il,Bl,Fl,zl,Hl,Sr,Kd,Es,Vl,Ul,ql,Gr,Wl,Ps,$l]),t=[Nl,Kn,Gd,jr,Jd,Es,As,Xd,Yd,vl,wl,Ts,Ms,kl,bl,Sl,Cl,_l,Tl,Ml,El,Al,Pl,Ol,Dl],n=[Ll,Nl,Rl,Il,Bl,Fl,zl,Hl,Sr,Ts,Ms,Es,Vl,Ul,ql,As,Gr,Wl,Ps,$l],o=kr(),i=P(o,Ps);Q(i,n,i),Q(i,r.domain,i);let s=kr(),a=kr(),l=kr();Q(o,r.domain,s),Q(o,r.scheme,a),Q(o,r.slashscheme,l),Q(s,n,i),Q(s,r.domain,s);let f=P(s,Wn);P(i,Wn,f),P(a,Wn,f),P(l,Wn,f);let u=P(i,jr);Q(u,n,i),Q(u,r.domain,i);let d=kr();Q(f,r.domain,d),Q(d,r.domain,d);let p=P(d,jr);Q(p,r.domain,d);let c=kr(Px);Q(p,r.tld,c),Q(p,r.utld,c),P(f,Os,c);let h=P(d,Sr);P(h,Sr,h),Q(h,r.domain,d),Q(c,r.domain,d),P(c,jr,p),P(c,Sr,h);let m=P(c,Kn);Q(m,r.numeric,Px);let g=P(s,Sr),x=P(s,jr);P(g,Sr,g),Q(g,r.domain,s),Q(x,n,i),Q(x,r.domain,s);let y=kr(xl);Q(x,r.tld,y),Q(x,r.utld,y),Q(y,r.domain,s),Q(y,n,i),P(y,jr,x),P(y,Sr,g),P(y,Wn,f);let k=P(y,Kn),S=kr(xl);Q(k,r.numeric,S);let C=kr(xl),w=kr();Q(C,e,C),Q(C,t,w),Q(w,e,C),Q(w,t,w),P(y,Gr,C),P(S,Gr,C);let b=P(a,Kn),T=P(l,Kn),M=P(T,Gr),E=P(M,Gr);Q(a,r.domain,s),P(a,jr,x),P(a,Sr,g),Q(l,r.domain,s),P(l,jr,x),P(l,Sr,g),Q(b,r.domain,C),P(b,Gr,C),P(b,As,C),Q(E,r.domain,C),Q(E,e,C),P(E,Gr,C);let U=[[Ts,Ms],[bl,kl],[Sl,Cl],[vl,wl],[_l,Tl],[Ml,El],[Al,Pl],[Ol,Dl]];for(let O=0;O<U.length;O++){let[B,R]=U[O],z=P(C,B);P(w,B,z),P(z,R,C);let j=kr(xl);Q(z,e,j);let I=kr();Q(z,t),Q(j,e,j),Q(j,t,I),Q(I,e,j),Q(I,t,I),P(j,R,C),P(I,R,C)}return P(o,Os,y),P(o,jd,rw),{start:o,tokens:Bx}}function ow(r,e,t){let n=t.length,o=0,i=[],s=[];for(;o<n;){let a=r,l=null,f=null,u=0,d=null,p=-1;for(;o<n&&!(l=a.go(t[o].t));)s.push(t[o++]);for(;o<n&&(f=l||a.go(t[o].t));)l=null,a=f,a.accepts()?(p=0,d=a):p>=0&&p++,o++,u++;if(p<0)o-=u,o<n&&(s.push(t[o]),o++);else{s.length>0&&(i.push(Bd(Ox,e,s)),s=[]),o-=p,u-=p;let c=d.t,h=t.slice(o-u,o);i.push(Bd(c,e,h))}}return s.length>0&&i.push(Bd(Ox,e,s)),i}function Bd(r,e,t){let n=t[0].s,o=t[t.length-1].e,i=e.slice(n,o);return new r(i,t)}var iw=typeof console<"u"&&console&&console.warn||(()=>{}),sw="until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.",Se={scanner:null,parser:null,tokenQueue:[],pluginQueue:[],customSchemes:[],initialized:!1};function Hx(){return Gt.groups={},Se.scanner=null,Se.parser=null,Se.tokenQueue=[],Se.pluginQueue=[],Se.customSchemes=[],Se.initialized=!1,Se}function Zd(r,e=!1){if(Se.initialized&&iw(`linkifyjs: already initialized - will not register custom scheme "${r}" ${sw}`),!/^[0-9a-z]+(-[0-9a-z]+)*$/.test(r))throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
<<<<<<< HEAD
3. "-" cannot repeat`);
    }
    INIT.customSchemes.push([scheme2, optionalSlashSlash]);
  }
  function init() {
    INIT.scanner = init$2(INIT.customSchemes);
    for (let i = 0; i < INIT.tokenQueue.length; i++) {
      INIT.tokenQueue[i][1]({
        scanner: INIT.scanner
      });
    }
    INIT.parser = init$1(INIT.scanner.tokens);
    for (let i = 0; i < INIT.pluginQueue.length; i++) {
      INIT.pluginQueue[i][1]({
        scanner: INIT.scanner,
        parser: INIT.parser
      });
    }
    INIT.initialized = true;
    return INIT;
  }
  function tokenize(str) {
    if (!INIT.initialized) {
      init();
    }
    return run3(INIT.parser.start, str, run$1(INIT.scanner.start, str));
  }
  tokenize.scan = run$1;
  function find(str, type = null, opts = null) {
    if (type && typeof type === "object") {
      if (opts) {
        throw Error(`linkifyjs: Invalid link type ${type}; must be a string`);
      }
      opts = type;
      type = null;
    }
    const options = new Options(opts);
    const tokens = tokenize(str);
    const filtered = [];
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (token.isLink && (!type || token.t === type) && options.check(token)) {
        filtered.push(token.toFormattedObject(options));
      }
    }
    return filtered;
  }

  // node_modules/@tiptap/extension-link/dist/index.js
  var UNICODE_WHITESPACE_PATTERN = "[\0- \xA0\u1680\u180E\u2000-\u2029\u205F\u3000]";
  var UNICODE_WHITESPACE_REGEX = new RegExp(UNICODE_WHITESPACE_PATTERN);
  var UNICODE_WHITESPACE_REGEX_END = new RegExp(`${UNICODE_WHITESPACE_PATTERN}$`);
  var UNICODE_WHITESPACE_REGEX_GLOBAL = new RegExp(UNICODE_WHITESPACE_PATTERN, "g");
  function isValidLinkStructure(tokens) {
    if (tokens.length === 1) {
      return tokens[0].isLink;
    }
    if (tokens.length === 3 && tokens[1].isLink) {
      return ["()", "[]"].includes(tokens[0].value + tokens[2].value);
    }
    return false;
  }
  function autolink(options) {
    return new Plugin({
      key: new PluginKey("autolink"),
      appendTransaction: (transactions, oldState, newState) => {
        const docChanges = transactions.some((transaction) => transaction.docChanged) && !oldState.doc.eq(newState.doc);
        const preventAutolink = transactions.some((transaction) => transaction.getMeta("preventAutolink"));
        if (!docChanges || preventAutolink) {
          return;
        }
        const { tr: tr2 } = newState;
        const transform = combineTransactionSteps(oldState.doc, [...transactions]);
        const changes = getChangedRanges(transform);
        changes.forEach(({ newRange }) => {
          const nodesInChangedRanges = findChildrenInRange(newState.doc, newRange, (node) => node.isTextblock);
          let textBlock;
          let textBeforeWhitespace;
          if (nodesInChangedRanges.length > 1) {
            textBlock = nodesInChangedRanges[0];
            textBeforeWhitespace = newState.doc.textBetween(
              textBlock.pos,
              textBlock.pos + textBlock.node.nodeSize,
              void 0,
              " "
            );
          } else if (nodesInChangedRanges.length) {
            const endText = newState.doc.textBetween(newRange.from, newRange.to, " ", " ");
            if (!UNICODE_WHITESPACE_REGEX_END.test(endText)) {
              return;
            }
            textBlock = nodesInChangedRanges[0];
            textBeforeWhitespace = newState.doc.textBetween(textBlock.pos, newRange.to, void 0, " ");
          }
          if (textBlock && textBeforeWhitespace) {
            const wordsBeforeWhitespace = textBeforeWhitespace.split(UNICODE_WHITESPACE_REGEX).filter(Boolean);
            if (wordsBeforeWhitespace.length <= 0) {
              return false;
            }
            const lastWordBeforeSpace = wordsBeforeWhitespace[wordsBeforeWhitespace.length - 1];
            const lastWordAndBlockOffset = textBlock.pos + textBeforeWhitespace.lastIndexOf(lastWordBeforeSpace);
            if (!lastWordBeforeSpace) {
              return false;
            }
            const linksBeforeSpace = tokenize(lastWordBeforeSpace).map((t) => t.toObject(options.defaultProtocol));
            if (!isValidLinkStructure(linksBeforeSpace)) {
              return false;
            }
            linksBeforeSpace.filter((link) => link.isLink).map((link) => ({
              ...link,
              from: lastWordAndBlockOffset + link.start + 1,
              to: lastWordAndBlockOffset + link.end + 1
            })).filter((link) => {
              if (!newState.schema.marks.code) {
                return true;
              }
              return !newState.doc.rangeHasMark(link.from, link.to, newState.schema.marks.code);
            }).filter((link) => options.validate(link.value)).filter((link) => options.shouldAutoLink(link.value)).forEach((link) => {
              if (getMarksBetween(link.from, link.to, newState.doc).some((item) => item.mark.type === options.type)) {
                return;
              }
              tr2.addMark(
                link.from,
                link.to,
                options.type.create({
                  href: link.href
                })
              );
            });
          }
        });
        if (!tr2.steps.length) {
          return;
        }
        return tr2;
      }
    });
  }
  function clickHandler(options) {
    return new Plugin({
      key: new PluginKey("handleClickLink"),
      props: {
        handleClick: (view, pos, event) => {
          var _a, _b;
          if (event.button !== 0) {
            return false;
          }
          if (!view.editable) {
            return false;
          }
          let link = null;
          if (event.target instanceof HTMLAnchorElement) {
            link = event.target;
          } else {
            const target = event.target;
            if (!target) {
              return false;
            }
            const root2 = options.editor.view.dom;
            link = target.closest("a");
            if (link && !root2.contains(link)) {
              link = null;
            }
          }
          if (!link) {
            return false;
          }
          let handled = false;
          if (options.enableClickSelection) {
            const commandResult = options.editor.commands.extendMarkRange(options.type.name);
            handled = commandResult;
          }
          if (options.openOnClick) {
            const attrs = getAttributes(view.state, options.type.name);
            const href = (_a = link.href) != null ? _a : attrs.href;
            const target = (_b = link.target) != null ? _b : attrs.target;
            if (href) {
              window.open(href, target);
              handled = true;
            }
          }
          return handled;
        }
      }
    });
  }
  function pasteHandler(options) {
    return new Plugin({
      key: new PluginKey("handlePasteLink"),
      props: {
        handlePaste: (view, _event, slice2) => {
          const { shouldAutoLink } = options;
          const { state } = view;
          const { selection } = state;
          const { empty: empty2 } = selection;
          if (empty2) {
            return false;
          }
          let textContent = "";
          slice2.content.forEach((node) => {
            textContent += node.textContent;
          });
          const link = find(textContent, { defaultProtocol: options.defaultProtocol }).find(
            (item) => item.isLink && item.value === textContent
          );
          if (!textContent || !link || shouldAutoLink !== void 0 && !shouldAutoLink(link.value)) {
            return false;
          }
          return options.editor.commands.setMark(options.type, {
            href: link.href
          });
        }
      }
    });
  }
  function isAllowedUri(uri, protocols) {
    const allowedProtocols = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
    if (protocols) {
      protocols.forEach((protocol) => {
        const nextProtocol = typeof protocol === "string" ? protocol : protocol.scheme;
        if (nextProtocol) {
          allowedProtocols.push(nextProtocol);
        }
      });
    }
    return !uri || uri.replace(UNICODE_WHITESPACE_REGEX_GLOBAL, "").match(
      new RegExp(
        // eslint-disable-next-line no-useless-escape
        `^(?:(?:${allowedProtocols.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
        "i"
      )
    );
  }
  var Link = Mark2.create({
    name: "link",
    priority: 1e3,
    keepOnSplit: false,
    exitable: true,
    onCreate() {
      if (this.options.validate && !this.options.shouldAutoLink) {
        this.options.shouldAutoLink = this.options.validate;
        console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.");
      }
      this.options.protocols.forEach((protocol) => {
        if (typeof protocol === "string") {
          registerCustomProtocol(protocol);
          return;
        }
        registerCustomProtocol(protocol.scheme, protocol.optionalSlashes);
      });
    },
    onDestroy() {
      reset();
    },
    inclusive() {
      return this.options.autolink;
    },
    addOptions() {
      return {
        openOnClick: true,
        enableClickSelection: false,
        linkOnPaste: true,
        autolink: true,
        protocols: [],
        defaultProtocol: "http",
        HTMLAttributes: {
          target: "_blank",
          rel: "noopener noreferrer nofollow",
          class: null
        },
        isAllowedUri: (url, ctx) => !!isAllowedUri(url, ctx.protocols),
        validate: (url) => !!url,
        shouldAutoLink: (url) => {
          const hasProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(url);
          const hasMaybeProtocol = /^[a-z][a-z0-9+.-]*:/i.test(url);
          if (hasProtocol || hasMaybeProtocol && !url.includes("@")) {
            return true;
          }
          const urlWithoutUserinfo = url.includes("@") ? url.split("@").pop() : url;
          const hostname = urlWithoutUserinfo.split(/[/?#:]/)[0];
          if (/^\d{1,3}(\.\d{1,3}){3}$/.test(hostname)) {
            return false;
          }
          if (!/\./.test(hostname)) {
            return false;
          }
          return true;
        }
      };
    },
    addAttributes() {
      return {
        href: {
          default: null,
          parseHTML(element) {
            return element.getAttribute("href");
          }
        },
        target: {
          default: this.options.HTMLAttributes.target
        },
        rel: {
          default: this.options.HTMLAttributes.rel
        },
        class: {
          default: this.options.HTMLAttributes.class
        },
        title: {
          default: null
        }
      };
    },
    parseHTML() {
      return [
        {
          tag: "a[href]",
          getAttrs: (dom) => {
            const href = dom.getAttribute("href");
            if (!href || !this.options.isAllowedUri(href, {
              defaultValidate: (url) => !!isAllowedUri(url, this.options.protocols),
              protocols: this.options.protocols,
              defaultProtocol: this.options.defaultProtocol
            })) {
              return false;
            }
            return null;
          }
        }
      ];
    },
    renderHTML({ HTMLAttributes }) {
      if (!this.options.isAllowedUri(HTMLAttributes.href, {
        defaultValidate: (href) => !!isAllowedUri(href, this.options.protocols),
        protocols: this.options.protocols,
        defaultProtocol: this.options.defaultProtocol
      })) {
        return ["a", mergeAttributes(this.options.HTMLAttributes, { ...HTMLAttributes, href: "" }), 0];
      }
      return ["a", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
    markdownTokenName: "link",
    parseMarkdown: (token, helpers) => {
      return helpers.applyMark("link", helpers.parseInline(token.tokens || []), {
        href: token.href,
        title: token.title || null
      });
    },
    renderMarkdown: (node, h2) => {
      var _a, _b, _c, _d;
      const href = (_b = (_a = node.attrs) == null ? void 0 : _a.href) != null ? _b : "";
      const title = (_d = (_c = node.attrs) == null ? void 0 : _c.title) != null ? _d : "";
      const text = h2.renderChildren(node);
      return title ? `[${text}](${href} "${title}")` : `[${text}](${href})`;
    },
    addCommands() {
      return {
        setLink: (attributes) => ({ chain }) => {
          const { href } = attributes;
          if (!this.options.isAllowedUri(href, {
            defaultValidate: (url) => !!isAllowedUri(url, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          })) {
            return false;
          }
          return chain().setMark(this.name, attributes).setMeta("preventAutolink", true).run();
        },
        toggleLink: (attributes) => ({ chain }) => {
          const { href } = attributes || {};
          if (href && !this.options.isAllowedUri(href, {
            defaultValidate: (url) => !!isAllowedUri(url, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          })) {
            return false;
          }
          return chain().toggleMark(this.name, attributes, { extendEmptyMarkRange: true }).setMeta("preventAutolink", true).run();
        },
        unsetLink: () => ({ chain }) => {
          return chain().unsetMark(this.name, { extendEmptyMarkRange: true }).setMeta("preventAutolink", true).run();
        }
      };
    },
    addPasteRules() {
      return [
        markPasteRule({
          find: (text) => {
            const foundLinks = [];
            if (text) {
              const { protocols, defaultProtocol } = this.options;
              const links = find(text).filter(
                (item) => item.isLink && this.options.isAllowedUri(item.value, {
                  defaultValidate: (href) => !!isAllowedUri(href, protocols),
                  protocols,
                  defaultProtocol
                })
              );
              if (links.length) {
                links.forEach((link) => {
                  if (!this.options.shouldAutoLink(link.value)) {
                    return;
                  }
                  foundLinks.push({
                    text: link.value,
                    data: {
                      href: link.href
                    },
                    index: link.start
                  });
                });
              }
            }
            return foundLinks;
          },
          type: this.type,
          getAttributes: (match) => {
            var _a;
            return {
              href: (_a = match.data) == null ? void 0 : _a.href
            };
          }
        })
      ];
    },
    addProseMirrorPlugins() {
      const plugins = [];
      const { protocols, defaultProtocol } = this.options;
      if (this.options.autolink) {
        plugins.push(
          autolink({
            type: this.type,
            defaultProtocol: this.options.defaultProtocol,
            validate: (url) => this.options.isAllowedUri(url, {
              defaultValidate: (href) => !!isAllowedUri(href, protocols),
              protocols,
              defaultProtocol
            }),
            shouldAutoLink: this.options.shouldAutoLink
          })
        );
      }
      plugins.push(
        clickHandler({
          type: this.type,
          editor: this.editor,
          openOnClick: this.options.openOnClick === "whenNotEditable" ? true : this.options.openOnClick,
          enableClickSelection: this.options.enableClickSelection
        })
      );
      if (this.options.linkOnPaste) {
        plugins.push(
          pasteHandler({
            editor: this.editor,
            defaultProtocol: this.options.defaultProtocol,
            type: this.type,
            shouldAutoLink: this.options.shouldAutoLink
          })
        );
      }
      return plugins;
    }
  });

  // node_modules/@tiptap/extension-list/dist/index.js
  var __defProp2 = Object.defineProperty;
  var __export2 = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var ListItemName = "listItem";
  var TextStyleName = "textStyle";
  var bulletListInputRegex = /^\s*([-+*])\s$/;
  var BulletList = Node3.create({
    name: "bulletList",
    addOptions() {
      return {
        itemTypeName: "listItem",
        HTMLAttributes: {},
        keepMarks: false,
        keepAttributes: false
      };
    },
    group: "block list",
    content() {
      return `${this.options.itemTypeName}+`;
    },
    parseHTML() {
      return [{ tag: "ul" }];
    },
    renderHTML({ HTMLAttributes }) {
      return ["ul", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
    markdownTokenName: "list",
    parseMarkdown: (token, helpers) => {
      if (token.type !== "list" || token.ordered) {
        return [];
      }
      return {
        type: "bulletList",
        content: token.items ? helpers.parseChildren(token.items) : []
      };
    },
    renderMarkdown: (node, h2) => {
      if (!node.content) {
        return "";
      }
      return h2.renderChildren(node.content, "\n");
    },
    markdownOptions: {
      indentsContent: true
    },
    addCommands() {
      return {
        toggleBulletList: () => ({ commands, chain }) => {
          if (this.options.keepAttributes) {
            return chain().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ListItemName, this.editor.getAttributes(TextStyleName)).run();
          }
          return commands.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks);
        }
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
      };
    },
    addInputRules() {
      let inputRule = wrappingInputRule({
        find: bulletListInputRegex,
        type: this.type
      });
      if (this.options.keepMarks || this.options.keepAttributes) {
        inputRule = wrappingInputRule({
          find: bulletListInputRegex,
          type: this.type,
          keepMarks: this.options.keepMarks,
          keepAttributes: this.options.keepAttributes,
          getAttributes: () => {
            return this.editor.getAttributes(TextStyleName);
          },
          editor: this.editor
        });
      }
      return [inputRule];
    }
  });
  var ListItem = Node3.create({
    name: "listItem",
    addOptions() {
      return {
        HTMLAttributes: {},
        bulletListTypeName: "bulletList",
        orderedListTypeName: "orderedList"
      };
    },
    content: "paragraph block*",
    defining: true,
    parseHTML() {
      return [
        {
          tag: "li"
        }
      ];
    },
    renderHTML({ HTMLAttributes }) {
      return ["li", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
    markdownTokenName: "list_item",
    parseMarkdown: (token, helpers) => {
      var _a;
      if (token.type !== "list_item") {
        return [];
      }
      const parseBlockChildren = (_a = helpers.parseBlockChildren) != null ? _a : helpers.parseChildren;
      let content = [];
      if (token.tokens && token.tokens.length > 0) {
        const hasParagraphTokens = token.tokens.some((t) => t.type === "paragraph");
        if (hasParagraphTokens) {
          content = parseBlockChildren(token.tokens);
        } else {
          const firstToken = token.tokens[0];
          if (firstToken && firstToken.type === "text" && firstToken.tokens && firstToken.tokens.length > 0) {
            const inlineContent = helpers.parseInline(firstToken.tokens);
            content = [
              {
                type: "paragraph",
                content: inlineContent
              }
            ];
            if (token.tokens.length > 1) {
              const remainingTokens = token.tokens.slice(1);
              const additionalContent = parseBlockChildren(remainingTokens);
              content.push(...additionalContent);
            }
          } else {
            content = parseBlockChildren(token.tokens);
          }
        }
      }
      if (content.length === 0) {
        content = [
          {
            type: "paragraph",
            content: []
          }
        ];
      }
      return {
        type: "listItem",
        content
      };
    },
    renderMarkdown: (node, h2, ctx) => {
      return renderNestedMarkdownContent(
        node,
        h2,
        (context3) => {
          var _a, _b;
          if (context3.parentType === "bulletList") {
            return "- ";
          }
          if (context3.parentType === "orderedList") {
            const start = ((_b = (_a = context3.meta) == null ? void 0 : _a.parentAttrs) == null ? void 0 : _b.start) || 1;
            return `${start + context3.index}. `;
          }
          return "- ";
        },
        ctx
      );
    },
    addKeyboardShortcuts() {
      return {
        Enter: () => this.editor.commands.splitListItem(this.name),
        Tab: () => this.editor.commands.sinkListItem(this.name),
        "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
      };
    }
  });
  var listHelpers_exports = {};
  __export2(listHelpers_exports, {
    findListItemPos: () => findListItemPos,
    getNextListDepth: () => getNextListDepth,
    handleBackspace: () => handleBackspace,
    handleDelete: () => handleDelete,
    hasListBefore: () => hasListBefore,
    hasListItemAfter: () => hasListItemAfter,
    hasListItemBefore: () => hasListItemBefore,
    listItemHasSubList: () => listItemHasSubList,
    nextListIsDeeper: () => nextListIsDeeper,
    nextListIsHigher: () => nextListIsHigher
  });
  var findListItemPos = (typeOrName, state) => {
    const { $from } = state.selection;
    const nodeType = getNodeType(typeOrName, state.schema);
    let currentNode = null;
    let currentDepth = $from.depth;
    let currentPos = $from.pos;
    let targetDepth = null;
    while (currentDepth > 0 && targetDepth === null) {
      currentNode = $from.node(currentDepth);
      if (currentNode.type === nodeType) {
        targetDepth = currentDepth;
      } else {
        currentDepth -= 1;
        currentPos -= 1;
      }
    }
    if (targetDepth === null) {
      return null;
    }
    return { $pos: state.doc.resolve(currentPos), depth: targetDepth };
  };
  var getNextListDepth = (typeOrName, state) => {
    const listItemPos = findListItemPos(typeOrName, state);
    if (!listItemPos) {
      return false;
    }
    const [, depth] = getNodeAtPosition(state, typeOrName, listItemPos.$pos.pos + 4);
    return depth;
  };
  var hasListBefore = (editorState, name, parentListTypes) => {
    const { $anchor } = editorState.selection;
    const previousNodePos = Math.max(0, $anchor.pos - 2);
    const previousNode = editorState.doc.resolve(previousNodePos).node();
    if (!previousNode || !parentListTypes.includes(previousNode.type.name)) {
      return false;
    }
    return true;
  };
  var hasListItemBefore = (typeOrName, state) => {
    var _a;
    const { $anchor } = state.selection;
    const $targetPos = state.doc.resolve($anchor.pos - 2);
    if ($targetPos.index() === 0) {
      return false;
    }
    if (((_a = $targetPos.nodeBefore) == null ? void 0 : _a.type.name) !== typeOrName) {
      return false;
    }
    return true;
  };
  var listItemHasSubList = (typeOrName, state, node) => {
    if (!node) {
      return false;
    }
    const nodeType = getNodeType(typeOrName, state.schema);
    let hasSubList = false;
    node.descendants((child) => {
      if (child.type === nodeType) {
        hasSubList = true;
      }
    });
    return hasSubList;
  };
  var handleBackspace = (editor, name, parentListTypes) => {
    if (editor.commands.undoInputRule()) {
      return true;
    }
    if (editor.state.selection.from !== editor.state.selection.to) {
      return false;
    }
    if (!isNodeActive(editor.state, name) && hasListBefore(editor.state, name, parentListTypes)) {
      const { $anchor } = editor.state.selection;
      const $listPos = editor.state.doc.resolve($anchor.before() - 1);
      const listDescendants = [];
      $listPos.node().descendants((node, pos) => {
        if (node.type.name === name) {
          listDescendants.push({ node, pos });
        }
      });
      const lastItem = listDescendants.at(-1);
      if (!lastItem) {
        return false;
      }
      const $lastItemPos = editor.state.doc.resolve($listPos.start() + lastItem.pos + 1);
      return editor.chain().cut({ from: $anchor.start() - 1, to: $anchor.end() + 1 }, $lastItemPos.end()).joinForward().run();
    }
    if (!isNodeActive(editor.state, name)) {
      return false;
    }
    if (!isAtStartOfNode(editor.state)) {
      return false;
    }
    const listItemPos = findListItemPos(name, editor.state);
    if (!listItemPos) {
      return false;
    }
    const $prev = editor.state.doc.resolve(listItemPos.$pos.pos - 2);
    const prevNode = $prev.node(listItemPos.depth);
    const previousListItemHasSubList = listItemHasSubList(name, editor.state, prevNode);
    if (hasListItemBefore(name, editor.state) && !previousListItemHasSubList) {
      return editor.commands.joinItemBackward();
    }
    return editor.chain().liftListItem(name).run();
  };
  var nextListIsDeeper = (typeOrName, state) => {
    const listDepth = getNextListDepth(typeOrName, state);
    const listItemPos = findListItemPos(typeOrName, state);
    if (!listItemPos || !listDepth) {
      return false;
    }
    if (listDepth > listItemPos.depth) {
      return true;
    }
    return false;
  };
  var nextListIsHigher = (typeOrName, state) => {
    const listDepth = getNextListDepth(typeOrName, state);
    const listItemPos = findListItemPos(typeOrName, state);
    if (!listItemPos || !listDepth) {
      return false;
    }
    if (listDepth < listItemPos.depth) {
      return true;
    }
    return false;
  };
  var handleDelete = (editor, name) => {
    if (!isNodeActive(editor.state, name)) {
      return false;
    }
    if (!isAtEndOfNode(editor.state, name)) {
      return false;
    }
    const { selection } = editor.state;
    const { $from, $to } = selection;
    if (!selection.empty && $from.sameParent($to)) {
      return false;
    }
    if (nextListIsDeeper(name, editor.state)) {
      return editor.chain().focus(editor.state.selection.from + 4).lift(name).joinBackward().run();
    }
    if (nextListIsHigher(name, editor.state)) {
      return editor.chain().joinForward().joinBackward().run();
    }
    return editor.commands.joinItemForward();
  };
  var hasListItemAfter = (typeOrName, state) => {
    var _a;
    const { $anchor } = state.selection;
    const $targetPos = state.doc.resolve($anchor.pos - $anchor.parentOffset - 2);
    if ($targetPos.index() === $targetPos.parent.childCount - 1) {
      return false;
    }
    if (((_a = $targetPos.nodeAfter) == null ? void 0 : _a.type.name) !== typeOrName) {
      return false;
    }
    return true;
  };
  var ListKeymap = Extension.create({
    name: "listKeymap",
    addOptions() {
      return {
        listTypes: [
          {
            itemName: "listItem",
            wrapperNames: ["bulletList", "orderedList"]
          },
          {
            itemName: "taskItem",
            wrapperNames: ["taskList"]
          }
        ]
      };
    },
    addKeyboardShortcuts() {
      return {
        Delete: ({ editor }) => {
          let handled = false;
          this.options.listTypes.forEach(({ itemName }) => {
            if (editor.state.schema.nodes[itemName] === void 0) {
              return;
            }
            if (handleDelete(editor, itemName)) {
              handled = true;
            }
          });
          return handled;
        },
        "Mod-Delete": ({ editor }) => {
          let handled = false;
          this.options.listTypes.forEach(({ itemName }) => {
            if (editor.state.schema.nodes[itemName] === void 0) {
              return;
            }
            if (handleDelete(editor, itemName)) {
              handled = true;
            }
          });
          return handled;
        },
        Backspace: ({ editor }) => {
          let handled = false;
          this.options.listTypes.forEach(({ itemName, wrapperNames }) => {
            if (editor.state.schema.nodes[itemName] === void 0) {
              return;
            }
            if (handleBackspace(editor, itemName, wrapperNames)) {
              handled = true;
            }
          });
          return handled;
        },
        "Mod-Backspace": ({ editor }) => {
          let handled = false;
          this.options.listTypes.forEach(({ itemName, wrapperNames }) => {
            if (editor.state.schema.nodes[itemName] === void 0) {
              return;
            }
            if (handleBackspace(editor, itemName, wrapperNames)) {
              handled = true;
            }
          });
          return handled;
        }
      };
    }
  });
  var ORDERED_LIST_ITEM_REGEX = /^(\s*)(\d+)\.\s+(.*)$/;
  var INDENTED_LINE_REGEX = /^\s/;
  function collectOrderedListItems(lines) {
    const listItems = [];
    let currentLineIndex = 0;
    let consumed = 0;
    while (currentLineIndex < lines.length) {
      const line = lines[currentLineIndex];
      const match = line.match(ORDERED_LIST_ITEM_REGEX);
      if (!match) {
        break;
      }
      const [, indent, number, content] = match;
      const indentLevel = indent.length;
      let itemContent = content;
      let nextLineIndex = currentLineIndex + 1;
      const itemLines = [line];
      while (nextLineIndex < lines.length) {
        const nextLine = lines[nextLineIndex];
        const nextMatch = nextLine.match(ORDERED_LIST_ITEM_REGEX);
        if (nextMatch) {
          break;
        }
        if (nextLine.trim() === "") {
          itemLines.push(nextLine);
          itemContent += "\n";
          nextLineIndex += 1;
        } else if (nextLine.match(INDENTED_LINE_REGEX)) {
          itemLines.push(nextLine);
          itemContent += `
${nextLine.slice(indentLevel + 2)}`;
          nextLineIndex += 1;
        } else {
          break;
        }
      }
      listItems.push({
        indent: indentLevel,
        number: parseInt(number, 10),
        content: itemContent.trim(),
        raw: itemLines.join("\n")
      });
      consumed = nextLineIndex;
      currentLineIndex = nextLineIndex;
    }
    return [listItems, consumed];
  }
  function buildNestedStructure(items, baseIndent, lexer) {
    var _a;
    const result = [];
    let currentIndex = 0;
    while (currentIndex < items.length) {
      const item = items[currentIndex];
      if (item.indent === baseIndent) {
        const contentLines = item.content.split("\n");
        const mainText = ((_a = contentLines[0]) == null ? void 0 : _a.trim()) || "";
        const tokens = [];
        if (mainText) {
          tokens.push({
            type: "paragraph",
            raw: mainText,
            tokens: lexer.inlineTokens(mainText)
          });
        }
        const additionalContent = contentLines.slice(1).join("\n").trim();
        if (additionalContent) {
          const blockTokens = lexer.blockTokens(additionalContent);
          tokens.push(...blockTokens);
        }
        let lookAheadIndex = currentIndex + 1;
        const nestedItems = [];
        while (lookAheadIndex < items.length && items[lookAheadIndex].indent > baseIndent) {
          nestedItems.push(items[lookAheadIndex]);
          lookAheadIndex += 1;
        }
        if (nestedItems.length > 0) {
          const nextIndent = Math.min(...nestedItems.map((nestedItem) => nestedItem.indent));
          const nestedListItems = buildNestedStructure(nestedItems, nextIndent, lexer);
          tokens.push({
            type: "list",
            ordered: true,
            start: nestedItems[0].number,
            items: nestedListItems,
            raw: nestedItems.map((nestedItem) => nestedItem.raw).join("\n")
          });
        }
        result.push({
          type: "list_item",
          raw: item.raw,
          tokens
        });
        currentIndex = lookAheadIndex;
      } else {
        currentIndex += 1;
      }
    }
    return result;
  }
  function parseListItems(items, helpers) {
    return items.map((item) => {
      if (item.type !== "list_item") {
        return helpers.parseChildren([item])[0];
      }
      const content = [];
      if (item.tokens && item.tokens.length > 0) {
        item.tokens.forEach((itemToken) => {
          if (itemToken.type === "paragraph" || itemToken.type === "list" || itemToken.type === "blockquote" || itemToken.type === "code") {
            content.push(...helpers.parseChildren([itemToken]));
          } else if (itemToken.type === "text" && itemToken.tokens) {
            const inlineContent = helpers.parseChildren([itemToken]);
            content.push({
              type: "paragraph",
              content: inlineContent
            });
          } else {
            const parsed = helpers.parseChildren([itemToken]);
            if (parsed.length > 0) {
              content.push(...parsed);
            }
          }
        });
      }
      return {
        type: "listItem",
        content
      };
    });
  }
  var ListItemName2 = "listItem";
  var TextStyleName2 = "textStyle";
  var orderedListInputRegex = /^(\d+)\.\s$/;
  var OrderedList = Node3.create({
    name: "orderedList",
    addOptions() {
      return {
        itemTypeName: "listItem",
        HTMLAttributes: {},
        keepMarks: false,
        keepAttributes: false
      };
    },
    group: "block list",
    content() {
      return `${this.options.itemTypeName}+`;
    },
    addAttributes() {
      return {
        start: {
          default: 1,
          parseHTML: (element) => {
            return element.hasAttribute("start") ? parseInt(element.getAttribute("start") || "", 10) : 1;
          }
        },
        type: {
          default: null,
          parseHTML: (element) => element.getAttribute("type")
        }
      };
    },
    parseHTML() {
      return [
        {
          tag: "ol"
        }
      ];
    },
    renderHTML({ HTMLAttributes }) {
      const { start, ...attributesWithoutStart } = HTMLAttributes;
      return start === 1 ? ["ol", mergeAttributes(this.options.HTMLAttributes, attributesWithoutStart), 0] : ["ol", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
    markdownTokenName: "list",
    parseMarkdown: (token, helpers) => {
      if (token.type !== "list" || !token.ordered) {
        return [];
      }
      const startValue = token.start || 1;
      const content = token.items ? parseListItems(token.items, helpers) : [];
      if (startValue !== 1) {
        return {
          type: "orderedList",
          attrs: { start: startValue },
          content
        };
      }
      return {
        type: "orderedList",
        content
      };
    },
    renderMarkdown: (node, h2) => {
      if (!node.content) {
        return "";
      }
      return h2.renderChildren(node.content, "\n");
    },
    markdownTokenizer: {
      name: "orderedList",
      level: "block",
      start: (src) => {
        const match = src.match(/^(\s*)(\d+)\.\s+/);
        const index = match == null ? void 0 : match.index;
        return index !== void 0 ? index : -1;
      },
      tokenize: (src, _tokens, lexer) => {
        var _a;
        const lines = src.split("\n");
        const [listItems, consumed] = collectOrderedListItems(lines);
        if (listItems.length === 0) {
          return void 0;
        }
        const items = buildNestedStructure(listItems, 0, lexer);
        if (items.length === 0) {
          return void 0;
        }
        const startValue = ((_a = listItems[0]) == null ? void 0 : _a.number) || 1;
        return {
          type: "list",
          ordered: true,
          start: startValue,
          items,
          raw: lines.slice(0, consumed).join("\n")
        };
      }
    },
    markdownOptions: {
      indentsContent: true
    },
    addCommands() {
      return {
        toggleOrderedList: () => ({ commands, chain }) => {
          if (this.options.keepAttributes) {
            return chain().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ListItemName2, this.editor.getAttributes(TextStyleName2)).run();
          }
          return commands.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks);
        }
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
      };
    },
    addInputRules() {
      let inputRule = wrappingInputRule({
        find: orderedListInputRegex,
        type: this.type,
        getAttributes: (match) => ({ start: +match[1] }),
        joinPredicate: (match, node) => node.childCount + node.attrs.start === +match[1]
      });
      if (this.options.keepMarks || this.options.keepAttributes) {
        inputRule = wrappingInputRule({
          find: orderedListInputRegex,
          type: this.type,
          keepMarks: this.options.keepMarks,
          keepAttributes: this.options.keepAttributes,
          getAttributes: (match) => ({ start: +match[1], ...this.editor.getAttributes(TextStyleName2) }),
          joinPredicate: (match, node) => node.childCount + node.attrs.start === +match[1],
          editor: this.editor
        });
      }
      return [inputRule];
    }
  });
  var inputRegex3 = /^\s*(\[([( |x])?\])\s$/;
  var TaskItem = Node3.create({
    name: "taskItem",
    addOptions() {
      return {
        nested: false,
        HTMLAttributes: {},
        taskListTypeName: "taskList",
        a11y: void 0
      };
    },
    content() {
      return this.options.nested ? "paragraph block*" : "paragraph+";
    },
    defining: true,
    addAttributes() {
      return {
        checked: {
          default: false,
          keepOnSplit: false,
          parseHTML: (element) => {
            const dataChecked = element.getAttribute("data-checked");
            return dataChecked === "" || dataChecked === "true";
          },
          renderHTML: (attributes) => ({
            "data-checked": attributes.checked
          })
        }
      };
    },
    parseHTML() {
      return [
        {
          tag: `li[data-type="${this.name}"]`,
          priority: 51
        }
      ];
    },
    renderHTML({ node, HTMLAttributes }) {
      return [
        "li",
        mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
          "data-type": this.name
        }),
        [
          "label",
          [
            "input",
            {
              type: "checkbox",
              checked: node.attrs.checked ? "checked" : null
            }
          ],
          ["span"]
        ],
        ["div", 0]
      ];
    },
    parseMarkdown: (token, h2) => {
      const content = [];
      if (token.tokens && token.tokens.length > 0) {
        content.push(h2.createNode("paragraph", {}, h2.parseInline(token.tokens)));
      } else if (token.text) {
        content.push(h2.createNode("paragraph", {}, [h2.createNode("text", { text: token.text })]));
      } else {
        content.push(h2.createNode("paragraph", {}, []));
      }
      if (token.nestedTokens && token.nestedTokens.length > 0) {
        const nestedContent = h2.parseChildren(token.nestedTokens);
        content.push(...nestedContent);
      }
      return h2.createNode("taskItem", { checked: token.checked || false }, content);
    },
    renderMarkdown: (node, h2) => {
      var _a;
      const checkedChar = ((_a = node.attrs) == null ? void 0 : _a.checked) ? "x" : " ";
      const prefix = `- [${checkedChar}] `;
      return renderNestedMarkdownContent(node, h2, prefix);
    },
    addKeyboardShortcuts() {
      const shortcuts = {
        Enter: () => this.editor.commands.splitListItem(this.name),
        "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
      };
      if (!this.options.nested) {
        return shortcuts;
      }
      return {
        ...shortcuts,
        Tab: () => this.editor.commands.sinkListItem(this.name)
      };
    },
    addNodeView() {
      return ({ node, HTMLAttributes, getPos, editor }) => {
        const listItem = document.createElement("li");
        const checkboxWrapper = document.createElement("label");
        const checkboxStyler = document.createElement("span");
        const checkbox = document.createElement("input");
        const content = document.createElement("div");
        const updateA11Y = (currentNode) => {
          var _a, _b;
          checkbox.ariaLabel = ((_b = (_a = this.options.a11y) == null ? void 0 : _a.checkboxLabel) == null ? void 0 : _b.call(_a, currentNode, checkbox.checked)) || `Task item checkbox for ${currentNode.textContent || "empty task item"}`;
        };
        updateA11Y(node);
        checkboxWrapper.contentEditable = "false";
        checkbox.type = "checkbox";
        checkbox.addEventListener("mousedown", (event) => event.preventDefault());
        checkbox.addEventListener("change", (event) => {
          if (!editor.isEditable && !this.options.onReadOnlyChecked) {
            checkbox.checked = !checkbox.checked;
            return;
          }
          const { checked } = event.target;
          if (editor.isEditable && typeof getPos === "function") {
            editor.chain().focus(void 0, { scrollIntoView: false }).command(({ tr: tr2 }) => {
              const position = getPos();
              if (typeof position !== "number") {
                return false;
              }
              const currentNode = tr2.doc.nodeAt(position);
              tr2.setNodeMarkup(position, void 0, {
                ...currentNode == null ? void 0 : currentNode.attrs,
                checked
              });
              return true;
            }).run();
          }
          if (!editor.isEditable && this.options.onReadOnlyChecked) {
            if (!this.options.onReadOnlyChecked(node, checked)) {
              checkbox.checked = !checkbox.checked;
            }
          }
        });
        Object.entries(this.options.HTMLAttributes).forEach(([key, value]) => {
          listItem.setAttribute(key, value);
        });
        listItem.dataset.checked = node.attrs.checked;
        checkbox.checked = node.attrs.checked;
        checkboxWrapper.append(checkbox, checkboxStyler);
        listItem.append(checkboxWrapper, content);
        Object.entries(HTMLAttributes).forEach(([key, value]) => {
          listItem.setAttribute(key, value);
        });
        let prevRenderedAttributeKeys = new Set(Object.keys(HTMLAttributes));
        return {
          dom: listItem,
          contentDOM: content,
          update: (updatedNode) => {
            if (updatedNode.type !== this.type) {
              return false;
            }
            listItem.dataset.checked = updatedNode.attrs.checked;
            checkbox.checked = updatedNode.attrs.checked;
            updateA11Y(updatedNode);
            const extensionAttributes = editor.extensionManager.attributes;
            const newHTMLAttributes = getRenderedAttributes(updatedNode, extensionAttributes);
            const newKeys = new Set(Object.keys(newHTMLAttributes));
            const staticAttrs = this.options.HTMLAttributes;
            prevRenderedAttributeKeys.forEach((key) => {
              if (!newKeys.has(key)) {
                if (key in staticAttrs) {
                  listItem.setAttribute(key, staticAttrs[key]);
                } else {
                  listItem.removeAttribute(key);
                }
              }
            });
            Object.entries(newHTMLAttributes).forEach(([key, value]) => {
              if (value === null || value === void 0) {
                if (key in staticAttrs) {
                  listItem.setAttribute(key, staticAttrs[key]);
                } else {
                  listItem.removeAttribute(key);
                }
              } else {
                listItem.setAttribute(key, value);
              }
            });
            prevRenderedAttributeKeys = newKeys;
            return true;
          }
        };
      };
    },
    addInputRules() {
      return [
        wrappingInputRule({
          find: inputRegex3,
          type: this.type,
          getAttributes: (match) => ({
            checked: match[match.length - 1] === "x"
          })
        })
      ];
    }
  });
  var TaskList = Node3.create({
    name: "taskList",
    addOptions() {
      return {
        itemTypeName: "taskItem",
        HTMLAttributes: {}
      };
    },
    group: "block list",
    content() {
      return `${this.options.itemTypeName}+`;
    },
    parseHTML() {
      return [
        {
          tag: `ul[data-type="${this.name}"]`,
          priority: 51
        }
      ];
    },
    renderHTML({ HTMLAttributes }) {
      return ["ul", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, { "data-type": this.name }), 0];
    },
    parseMarkdown: (token, h2) => {
      return h2.createNode("taskList", {}, h2.parseChildren(token.items || []));
    },
    renderMarkdown: (node, h2) => {
      if (!node.content) {
        return "";
      }
      return h2.renderChildren(node.content, "\n");
    },
    markdownTokenizer: {
      name: "taskList",
      level: "block",
      start(src) {
        var _a;
        const index = (_a = src.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)) == null ? void 0 : _a.index;
        return index !== void 0 ? index : -1;
      },
      tokenize(src, tokens, lexer) {
        const parseTaskListContent = (content) => {
          const nestedResult = parseIndentedBlocks(
            content,
            {
              itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
              extractItemData: (match) => ({
                indentLevel: match[1].length,
                mainContent: match[4],
                checked: match[3].toLowerCase() === "x"
              }),
              createToken: (data, nestedTokens) => ({
                type: "taskItem",
                raw: "",
                mainContent: data.mainContent,
                indentLevel: data.indentLevel,
                checked: data.checked,
                text: data.mainContent,
                tokens: lexer.inlineTokens(data.mainContent),
                nestedTokens
              }),
              // Allow recursive nesting
              customNestedParser: parseTaskListContent
            },
            lexer
          );
          if (nestedResult) {
            return [
              {
                type: "taskList",
                raw: nestedResult.raw,
                items: nestedResult.items
              }
            ];
          }
          return lexer.blockTokens(content);
        };
        const result = parseIndentedBlocks(
          src,
          {
            itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
            extractItemData: (match) => ({
              indentLevel: match[1].length,
              mainContent: match[4],
              checked: match[3].toLowerCase() === "x"
            }),
            createToken: (data, nestedTokens) => ({
              type: "taskItem",
              raw: "",
              mainContent: data.mainContent,
              indentLevel: data.indentLevel,
              checked: data.checked,
              text: data.mainContent,
              tokens: lexer.inlineTokens(data.mainContent),
              nestedTokens
            }),
            // Use the recursive parser for nested content
            customNestedParser: parseTaskListContent
          },
          lexer
        );
        if (!result) {
          return void 0;
        }
        return {
          type: "taskList",
          raw: result.raw,
          items: result.items
        };
      }
    },
    markdownOptions: {
      indentsContent: true
    },
    addCommands() {
      return {
        toggleTaskList: () => ({ commands }) => {
          return commands.toggleList(this.name, this.options.itemTypeName);
        }
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
      };
    }
  });
  var ListKit = Extension.create({
    name: "listKit",
    addExtensions() {
      const extensions = [];
      if (this.options.bulletList !== false) {
        extensions.push(BulletList.configure(this.options.bulletList));
      }
      if (this.options.listItem !== false) {
        extensions.push(ListItem.configure(this.options.listItem));
      }
      if (this.options.listKeymap !== false) {
        extensions.push(ListKeymap.configure(this.options.listKeymap));
      }
      if (this.options.orderedList !== false) {
        extensions.push(OrderedList.configure(this.options.orderedList));
      }
      if (this.options.taskItem !== false) {
        extensions.push(TaskItem.configure(this.options.taskItem));
      }
      if (this.options.taskList !== false) {
        extensions.push(TaskList.configure(this.options.taskList));
      }
      return extensions;
    }
  });

  // node_modules/@tiptap/extension-paragraph/dist/index.js
  var EMPTY_PARAGRAPH_MARKDOWN = "&nbsp;";
  var NBSP_CHAR = "\xA0";
  var Paragraph = Node3.create({
    name: "paragraph",
    priority: 1e3,
    addOptions() {
      return {
        HTMLAttributes: {}
      };
    },
    group: "block",
    content: "inline*",
    parseHTML() {
      return [{ tag: "p" }];
    },
    renderHTML({ HTMLAttributes }) {
      return ["p", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
    parseMarkdown: (token, helpers) => {
      const tokens = token.tokens || [];
      if (tokens.length === 1 && tokens[0].type === "image") {
        return helpers.parseChildren([tokens[0]]);
      }
      const content = helpers.parseInline(tokens);
      const hasExplicitEmptyParagraphMarker = tokens.length === 1 && tokens[0].type === "text" && (tokens[0].raw === EMPTY_PARAGRAPH_MARKDOWN || tokens[0].text === EMPTY_PARAGRAPH_MARKDOWN || tokens[0].raw === NBSP_CHAR || tokens[0].text === NBSP_CHAR);
      if (hasExplicitEmptyParagraphMarker && content.length === 1 && content[0].type === "text" && (content[0].text === EMPTY_PARAGRAPH_MARKDOWN || content[0].text === NBSP_CHAR)) {
        return helpers.createNode("paragraph", void 0, []);
      }
      return helpers.createNode("paragraph", void 0, content);
    },
    renderMarkdown: (node, h2, ctx) => {
      var _a, _b;
      if (!node) {
        return "";
      }
      const content = Array.isArray(node.content) ? node.content : [];
      if (content.length === 0) {
        const previousContent = Array.isArray((_a = ctx == null ? void 0 : ctx.previousNode) == null ? void 0 : _a.content) ? ctx.previousNode.content : [];
        const previousNodeIsEmptyParagraph = ((_b = ctx == null ? void 0 : ctx.previousNode) == null ? void 0 : _b.type) === "paragraph" && previousContent.length === 0;
        return previousNodeIsEmptyParagraph ? EMPTY_PARAGRAPH_MARKDOWN : "";
      }
      return h2.renderChildren(content);
    },
    addCommands() {
      return {
        setParagraph: () => ({ commands }) => {
          return commands.setNode(this.name);
        }
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-Alt-0": () => this.editor.commands.setParagraph()
      };
    }
  });

  // node_modules/@tiptap/extension-strike/dist/index.js
  var inputRegex4 = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/;
  var pasteRegex2 = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g;
  var Strike = Mark2.create({
    name: "strike",
    addOptions() {
      return {
        HTMLAttributes: {}
      };
    },
    parseHTML() {
      return [
        {
          tag: "s"
        },
        {
          tag: "del"
        },
        {
          tag: "strike"
        },
        {
          style: "text-decoration",
          consuming: false,
          getAttrs: (style2) => style2.includes("line-through") ? {} : false
        }
      ];
    },
    renderHTML({ HTMLAttributes }) {
      return ["s", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
    markdownTokenName: "del",
    parseMarkdown: (token, helpers) => {
      return helpers.applyMark("strike", helpers.parseInline(token.tokens || []));
    },
    renderMarkdown: (node, h2) => {
      return `~~${h2.renderChildren(node)}~~`;
    },
    addCommands() {
      return {
        setStrike: () => ({ commands }) => {
          return commands.setMark(this.name);
        },
        toggleStrike: () => ({ commands }) => {
          return commands.toggleMark(this.name);
        },
        unsetStrike: () => ({ commands }) => {
          return commands.unsetMark(this.name);
        }
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-Shift-s": () => this.editor.commands.toggleStrike()
      };
    },
    addInputRules() {
      return [
        markInputRule({
          find: inputRegex4,
          type: this.type
        })
      ];
    },
    addPasteRules() {
      return [
        markPasteRule({
          find: pasteRegex2,
          type: this.type
        })
      ];
    }
  });

  // node_modules/@tiptap/extension-text/dist/index.js
  var Text2 = Node3.create({
    name: "text",
    group: "inline",
    parseMarkdown: (token) => {
      return {
        type: "text",
        text: token.text || ""
      };
    },
    renderMarkdown: (node) => node.text || ""
  });

  // node_modules/@tiptap/extension-underline/dist/index.js
  var Underline = Mark2.create({
    name: "underline",
    addOptions() {
      return {
        HTMLAttributes: {}
      };
    },
    parseHTML() {
      return [
        {
          tag: "u"
        },
        {
          style: "text-decoration",
          consuming: false,
          getAttrs: (style2) => style2.includes("underline") ? {} : false
        }
      ];
    },
    renderHTML({ HTMLAttributes }) {
      return ["u", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
    parseMarkdown(token, helpers) {
      return helpers.applyMark(this.name || "underline", helpers.parseInline(token.tokens || []));
    },
    renderMarkdown(node, helpers) {
      return `++${helpers.renderChildren(node)}++`;
    },
    markdownTokenizer: {
      name: "underline",
      level: "inline",
      start(src) {
        return src.indexOf("++");
      },
      tokenize(src, _tokens, lexer) {
        const rule = /^(\+\+)([\s\S]+?)(\+\+)/;
        const match = rule.exec(src);
        if (!match) {
          return void 0;
        }
        const innerContent = match[2].trim();
        return {
          type: "underline",
          raw: match[0],
          text: innerContent,
          tokens: lexer.inlineTokens(innerContent)
        };
      }
    },
    addCommands() {
      return {
        setUnderline: () => ({ commands }) => {
          return commands.setMark(this.name);
        },
        toggleUnderline: () => ({ commands }) => {
          return commands.toggleMark(this.name);
        },
        unsetUnderline: () => ({ commands }) => {
          return commands.unsetMark(this.name);
        }
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-u": () => this.editor.commands.toggleUnderline(),
        "Mod-U": () => this.editor.commands.toggleUnderline()
      };
    }
  });

  // node_modules/@tiptap/starter-kit/dist/index.js
  var StarterKit = Extension.create({
    name: "starterKit",
    addExtensions() {
      var _a, _b, _c, _d;
      const extensions = [];
      if (this.options.bold !== false) {
        extensions.push(Bold.configure(this.options.bold));
      }
      if (this.options.blockquote !== false) {
        extensions.push(Blockquote.configure(this.options.blockquote));
      }
      if (this.options.bulletList !== false) {
        extensions.push(BulletList.configure(this.options.bulletList));
      }
      if (this.options.code !== false) {
        extensions.push(Code.configure(this.options.code));
      }
      if (this.options.codeBlock !== false) {
        extensions.push(CodeBlock.configure(this.options.codeBlock));
      }
      if (this.options.document !== false) {
        extensions.push(Document.configure(this.options.document));
      }
      if (this.options.dropcursor !== false) {
        extensions.push(Dropcursor.configure(this.options.dropcursor));
      }
      if (this.options.gapcursor !== false) {
        extensions.push(Gapcursor.configure(this.options.gapcursor));
      }
      if (this.options.hardBreak !== false) {
        extensions.push(HardBreak.configure(this.options.hardBreak));
      }
      if (this.options.heading !== false) {
        extensions.push(Heading.configure(this.options.heading));
      }
      if (this.options.undoRedo !== false) {
        extensions.push(UndoRedo.configure(this.options.undoRedo));
      }
      if (this.options.horizontalRule !== false) {
        extensions.push(HorizontalRule.configure(this.options.horizontalRule));
      }
      if (this.options.italic !== false) {
        extensions.push(Italic.configure(this.options.italic));
      }
      if (this.options.listItem !== false) {
        extensions.push(ListItem.configure(this.options.listItem));
      }
      if (this.options.listKeymap !== false) {
        extensions.push(ListKeymap.configure((_a = this.options) == null ? void 0 : _a.listKeymap));
      }
      if (this.options.link !== false) {
        extensions.push(Link.configure((_b = this.options) == null ? void 0 : _b.link));
      }
      if (this.options.orderedList !== false) {
        extensions.push(OrderedList.configure(this.options.orderedList));
      }
      if (this.options.paragraph !== false) {
        extensions.push(Paragraph.configure(this.options.paragraph));
      }
      if (this.options.strike !== false) {
        extensions.push(Strike.configure(this.options.strike));
      }
      if (this.options.text !== false) {
        extensions.push(Text2.configure(this.options.text));
      }
      if (this.options.underline !== false) {
        extensions.push(Underline.configure((_c = this.options) == null ? void 0 : _c.underline));
      }
      if (this.options.trailingNode !== false) {
        extensions.push(TrailingNode.configure((_d = this.options) == null ? void 0 : _d.trailingNode));
      }
      return extensions;
    }
  });
  var index_default2 = StarterKit;

  // node_modules/lucide/dist/esm/defaultAttributes.js
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };

  // node_modules/lucide/dist/esm/createElement.js
  var createSVGElement = ([tag, attrs, children]) => {
    const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.keys(attrs).forEach((name) => {
      element.setAttribute(name, String(attrs[name]));
    });
    if (children?.length) {
      children.forEach((child) => {
        const childElement = createSVGElement(child);
        element.appendChild(childElement);
      });
    }
    return element;
  };
  var createElement = (iconNode, customAttrs = {}) => {
    const tag = "svg";
    const attrs = {
      ...defaultAttributes,
      ...customAttrs
    };
    return createSVGElement([tag, attrs, iconNode]);
  };

  // node_modules/lucide/dist/esm/icons/bold.js
  var Bold2 = [
    ["path", { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" }]
  ];

  // node_modules/lucide/dist/esm/icons/code.js
  var Code2 = [
    ["path", { d: "m16 18 6-6-6-6" }],
    ["path", { d: "m8 6-6 6 6 6" }]
  ];

  // node_modules/lucide/dist/esm/icons/italic.js
  var Italic2 = [
    ["line", { x1: "19", x2: "10", y1: "4", y2: "4" }],
    ["line", { x1: "14", x2: "5", y1: "20", y2: "20" }],
    ["line", { x1: "15", x2: "9", y1: "4", y2: "20" }]
  ];

  // node_modules/lucide/dist/esm/icons/link.js
  var Link2 = [
    ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }],
    ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }]
  ];

  // node_modules/lucide/dist/esm/icons/quote.js
  var Quote = [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
      }
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
      }
    ]
  ];

  // node_modules/lucide/dist/esm/icons/strikethrough.js
  var Strikethrough = [
    ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4" }],
    ["path", { d: "M14 12a4 4 0 0 1 0 8H6" }],
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }]
  ];

  // resources/ts/lib/comment-tiptap.ts
  var MAX_LEN = 65525;
  function toolbarIcon(node) {
    return createElement(node, {
      class: "nextora-tiptap-toolbar__icon-svg",
      width: 20,
      height: 20,
      "aria-hidden": "true"
    });
  }
  var TIPTAP_ICONS = {
    bold: Bold2,
    italic: Italic2,
    strike: Strikethrough,
    code: Code2,
    quote: Quote,
    link: Link2
  };
  var DEFAULT_MOUNT = {
    hostId: "nextora-tiptap-host",
    textareaSelector: "textarea#comment",
    labelId: "nextora-comment-field-label",
    toolbarSelector: ".nextora-tiptap-toolbar"
  };
  function syncTextarea(textarea, editor) {
    if (editor.isEmpty) {
      textarea.value = "";
      return;
    }
    let html = editor.getHTML();
    if (html.length > MAX_LEN) {
      html = html.slice(0, MAX_LEN);
    }
    textarea.value = html;
  }
  function buildToolbar(editor) {
    const i18n = window.nextoraComments ?? {};
    const bar = document.createElement("div");
    bar.className = "nextora-tiptap-toolbar";
    bar.setAttribute("role", "toolbar");
    bar.setAttribute(
      "aria-label",
      i18n.toolbarLabel ?? "Comment formatting"
    );
    const specs = [
      {
        format: "bold",
        iconKey: "bold",
        isActive: () => editor.isActive("bold"),
        run: () => editor.chain().focus().toggleBold().run(),
        ariaLabel: i18n.toolBold ?? "Bold",
        title: i18n.toolBoldHint ?? "Bold (Ctrl+B)"
      },
      {
        format: "italic",
        iconKey: "italic",
        isActive: () => editor.isActive("italic"),
        run: () => editor.chain().focus().toggleItalic().run(),
        ariaLabel: i18n.toolItalic ?? "Italic",
        title: i18n.toolItalicHint ?? "Italic (Ctrl+I)"
      },
      {
        format: "strike",
        iconKey: "strike",
        isActive: () => editor.isActive("strike"),
        run: () => editor.chain().focus().toggleStrike().run(),
        ariaLabel: i18n.toolStrike ?? "Strikethrough",
        title: i18n.toolStrikeHint ?? "Strikethrough"
      },
      {
        format: "code",
        iconKey: "code",
        isActive: () => editor.isActive("code"),
        run: () => editor.chain().focus().toggleCode().run(),
        ariaLabel: i18n.toolCode ?? "Inline code",
        title: i18n.toolCodeHint ?? "Inline code"
      },
      {
        format: "blockquote",
        iconKey: "quote",
        isActive: () => editor.isActive("blockquote"),
        run: () => editor.chain().focus().toggleBlockquote().run(),
        ariaLabel: i18n.toolQuote ?? "Blockquote",
        title: i18n.toolQuoteHint ?? "Blockquote"
      }
    ];
    const groupMarks = document.createElement("div");
    groupMarks.className = "nextora-tiptap-toolbar__group";
    const buttons = [];
    for (const spec of specs) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "nextora-tiptap-toolbar__btn";
      b.dataset.format = spec.format;
      b.replaceChildren(toolbarIcon(TIPTAP_ICONS[spec.iconKey]));
      b.setAttribute("aria-label", spec.ariaLabel);
      b.title = spec.title;
      b.addEventListener("click", () => {
        spec.run();
      });
      b.setAttribute("aria-pressed", "false");
      groupMarks.append(b);
      buttons.push(b);
    }
    const groupInsert = document.createElement("div");
    groupInsert.className = "nextora-tiptap-toolbar__group nextora-tiptap-toolbar__group--end";
    const linkBtn = document.createElement("button");
    linkBtn.type = "button";
    linkBtn.className = "nextora-tiptap-toolbar__btn";
    linkBtn.dataset.format = "link";
    linkBtn.replaceChildren(toolbarIcon(TIPTAP_ICONS.link));
    linkBtn.setAttribute("aria-label", i18n.toolLink ?? "Link");
    linkBtn.title = i18n.toolLinkHint ?? i18n.linkPromptTitle ?? "Link";
    linkBtn.setAttribute("aria-pressed", "false");
    linkBtn.addEventListener("click", () => {
      const prev = editor.getAttributes("link").href;
      const def = prev && typeof prev === "string" ? prev : i18n.linkPromptDefault ?? "https://";
      const url = window.prompt(i18n.linkPromptTitle ?? "URL", def);
      if (url === null) {
        return;
      }
      const t = url.trim();
      if (t === "") {
        editor.chain().focus().extendMarkRange("link").unsetLink().run();
        return;
      }
      editor.chain().focus().extendMarkRange("link").setLink({ href: t }).run();
    });
    groupInsert.append(linkBtn);
    bar.append(groupMarks, groupInsert);
    const syncPressed = () => {
      for (let i = 0; i < specs.length; i++) {
        const on = specs[i].isActive();
        const el = buttons[i];
        el.setAttribute("aria-pressed", on ? "true" : "false");
        el.classList.toggle("is-active", on);
      }
      const linkOn = editor.isActive("link");
      linkBtn.setAttribute("aria-pressed", linkOn ? "true" : "false");
      linkBtn.classList.toggle("is-active", linkOn);
    };
    editor.on("transaction", syncPressed);
    syncPressed();
    return bar;
  }
  var mountedHosts = /* @__PURE__ */ new WeakSet();
  function resolveMounts() {
    const raw = window.nextoraCommentTiptap?.mounts;
    if (raw && raw.length > 0) {
      return raw.map((partial) => ({ ...DEFAULT_MOUNT, ...partial }));
    }
    return [DEFAULT_MOUNT];
  }
  function mountCommentTiptap(config3) {
    const host = document.getElementById(config3.hostId);
    const textarea = document.querySelector(
      config3.textareaSelector
    );
    if (!host || !textarea || !(host instanceof HTMLElement)) {
      return;
    }
    if (mountedHosts.has(host)) {
      return;
    }
    const label = config3.labelId ? document.getElementById(config3.labelId) : null;
    const placeholder = host.dataset.placeholder ?? "";
    const shell = host.parentElement;
    const toolbarMount = shell?.querySelector(config3.toolbarSelector) ?? null;
    const editorAttrs = {
      class: "nextora-tiptap-prose min-h-[9rem] max-w-none px-3 py-2.5 text-sm leading-relaxed text-contrast outline-none focus:outline-none",
      tabindex: "0",
      role: "textbox",
      "aria-multiline": "true"
    };
    if (label) {
      editorAttrs["aria-labelledby"] = config3.labelId;
    }
    const editor = new Editor({
      element: host,
      injectCSS: true,
      extensions: [
        index_default2.configure({
          heading: false,
          bulletList: false,
          orderedList: false,
          listItem: false,
          listKeymap: false,
          codeBlock: false,
          horizontalRule: false,
          underline: false,
          link: {
            openOnClick: false,
            autolink: true,
            protocols: ["http", "https", "mailto"],
            HTMLAttributes: {
              rel: "nofollow noopener noreferrer",
              class: "text-primary underline"
            }
          }
        }),
        index_default.configure({
          placeholder
        })
      ],
      content: textarea.value.trim() ? textarea.value : "",
      editorProps: {
        attributes: editorAttrs
      },
      onUpdate: () => syncTextarea(textarea, editor),
      onCreate: () => syncTextarea(textarea, editor)
    });
    mountedHosts.add(host);
    if (toolbarMount) {
      toolbarMount.replaceChildren();
      toolbarMount.append(buildToolbar(editor));
    }
    label?.addEventListener("click", () => {
      editor.commands.focus();
    });
    const form = textarea.closest("form");
    form?.addEventListener(
      "submit",
      (e) => {
        syncTextarea(textarea, editor);
        if (editor.isEmpty) {
          e.preventDefault();
          editor.commands.focus();
        }
      },
      { capture: true }
    );
  }
  function initCommentTiptap() {
    for (const config3 of resolveMounts()) {
      mountCommentTiptap(config3);
    }
  }

  // resources/ts/lib/scroll-animations/constants.ts
  var INIT_ATTR = "data-nextora-scroll-animation-init";
  var DEFAULT_SCROLL_START = "top 85%";
  var SCROLL_REVEAL_ONCE = true;
  var SCROLL_REVEAL_TRIGGER_ID = "nextora-scroll-reveal";
  var DEFAULT_DURATION = 0.8;
  var DEFAULT_EASE = "power3.out";
  var DEFAULT_DISTANCE = 40;
  var DEFAULT_PARALLAX_SPEED = 0.35;
  var MUTATION_DEBOUNCE_MS = 150;
  var ANIMATION_CLASS_NAMES = [
    "animation-fade-in",
    "animation-fade-in-up",
    "animation-fade-in-down",
    "animation-fade-in-left",
    "animation-fade-in-right",
    "animation-zoom-in",
    "animation-zoom-out"
  ];
  var ANIMATION_SELECTOR = ANIMATION_CLASS_NAMES.map((c) => `.${c}`).join(", ");
  var PARALLAX_SELECTOR = ".animation-parallax, [data-parallax-speed]";

  // resources/ts/lib/scroll-animations/presets.ts
  var animationPresets = {
    "animation-fade-in": () => ({
      from: { opacity: 0 },
      to: { opacity: 1 }
    }),
    "animation-fade-in-up": ({ distance }) => ({
      from: { opacity: 0, y: distance },
      to: { opacity: 1, y: 0 }
    }),
    "animation-fade-in-down": ({ distance }) => ({
      from: { opacity: 0, y: -distance },
      to: { opacity: 1, y: 0 }
    }),
    "animation-fade-in-left": ({ distance }) => ({
      from: { opacity: 0, x: -distance },
      to: { opacity: 1, x: 0 }
    }),
    "animation-fade-in-right": ({ distance }) => ({
      from: { opacity: 0, x: distance },
      to: { opacity: 1, x: 0 }
    }),
    "animation-zoom-in": () => ({
      from: { opacity: 0, scale: 0.85 },
      to: { opacity: 1, scale: 1 }
    }),
    "animation-zoom-out": () => ({
      from: { opacity: 0, scale: 1.15 },
      to: { opacity: 1, scale: 1 }
    })
  };
  function registerScrollAnimationPreset(className, factory) {
    animationPresets[className] = factory;
  }
  function getAnimationSelector() {
    return Object.keys(animationPresets).map((className) => `.${className}`).join(", ");
  }

  // resources/ts/lib/scroll-animations/parse-options.ts
  function readNumber(el, attr, fallback) {
    const raw = el.getAttribute(attr);
    if (raw === null || raw.trim() === "") {
      return fallback;
    }
    const value = Number.parseFloat(raw);
    return Number.isFinite(value) ? value : fallback;
  }
  function readOptionalNumber(el, attr) {
    const raw = el.getAttribute(attr);
    if (raw === null || raw.trim() === "") {
      return null;
    }
    const value = Number.parseFloat(raw);
    return Number.isFinite(value) ? value : null;
  }
  function parseScrollAnimationOptions(el) {
    const parallaxFromAttr = readOptionalNumber(el, "data-parallax-speed");
    const hasParallaxClass = el.classList.contains("animation-parallax");
    return {
      delay: readNumber(el, "data-delay", 0),
      duration: readNumber(el, "data-duration", DEFAULT_DURATION),
      ease: el.getAttribute("data-ease")?.trim() || DEFAULT_EASE,
      stagger: readOptionalNumber(el, "data-stagger"),
      distance: readNumber(el, "data-distance", DEFAULT_DISTANCE),
      parallaxSpeed: parallaxFromAttr ?? (hasParallaxClass ? DEFAULT_PARALLAX_SPEED : null)
    };
  }

  // node_modules/gsap/Observer.js
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var gsap;
  var _coreInitted;
  var _clamp;
  var _win;
  var _doc;
  var _docEl;
  var _body;
  var _isTouch;
  var _pointerType;
  var ScrollTrigger;
  var _root;
  var _normalizer;
  var _eventTypes;
  var _context;
  var _getGSAP = function _getGSAP2() {
    return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
  };
  var _startup = 1;
  var _observers = [];
  var _scrollers = [];
  var _proxies = [];
  var _getTime = Date.now;
  var _bridge = function _bridge2(name, value) {
    return value;
  };
  var _integrate = function _integrate2() {
    var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;
    _bridge = function _bridge3(name, value) {
      return data[name](value);
    };
  };
  var _getProxyProp = function _getProxyProp2(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  };
  var _isViewport = function _isViewport2(el) {
    return !!~_root.indexOf(el);
  };
  var _addListener = function _addListener2(element, type, func, passive, capture) {
    return element.addEventListener(type, func, {
      passive: passive !== false,
      capture: !!capture
    });
  };
  var _removeListener = function _removeListener2(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _scrollLeft = "scrollLeft";
  var _scrollTop = "scrollTop";
  var _onScroll = function _onScroll2() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
  };
  var _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
    var cachingFunc = function cachingFunc2(value) {
      if (value || value === 0) {
        _startup && (_win.history.scrollRestoration = "manual");
        var isNormalizing = _normalizer && _normalizer.isPressed;
        value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
        f(value);
        cachingFunc2.cacheID = _scrollers.cache;
        isNormalizing && _bridge("ss", value);
      } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
        cachingFunc2.cacheID = _scrollers.cache;
        cachingFunc2.v = f();
      }
      return cachingFunc2.v + cachingFunc2.offset;
    };
    cachingFunc.offset = 0;
    return f && cachingFunc;
  };
  var _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
    })
  };
  var _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
    })
  };
  var _getTarget = function _getTarget2(t, self) {
    return (self && self._ctx && self._ctx.selector || gsap.utils.toArray)(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
  };
  var _isWithin = function _isWithin2(element, list) {
    var i = list.length;
    while (i--) {
      if (list[i] === element || list[i].contains(element)) {
        return true;
      }
    }
    return false;
  };
  var _getScrollFunc = function _getScrollFunc2(element, _ref) {
    var s = _ref.s, sc = _ref.sc;
    _isViewport(element) && (element = _doc.scrollingElement || _docEl);
    var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
    !~i && (i = _scrollers.push(element) - 1);
    _scrollers[i + offset] || _addListener(element, "scroll", _onScroll);
    var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
      return arguments.length ? element[s] = value : element[s];
    })));
    func.target = element;
    prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth");
    return func;
  };
  var _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
      var t = _getTime();
      if (force || t - t1 > min) {
        v2 = v1;
        v1 = value2;
        t2 = t1;
        t1 = t;
      } else if (useDelta) {
        v1 += value2;
      } else {
        v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
      }
    }, reset2 = function reset3() {
      v2 = v1 = useDelta ? 0 : v1;
      t2 = t1 = 0;
    }, getVelocity = function getVelocity2(latestValue) {
      var tOld = t2, vOld = v2, t = _getTime();
      (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
      return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
    };
    return {
      update,
      reset: reset2,
      getVelocity
    };
  };
  var _getEvent = function _getEvent2(e, preventDefault) {
    preventDefault && !e._gsapAllow && e.cancelable !== false && e.preventDefault();
    return e.changedTouches ? e.changedTouches[0] : e;
  };
  var _getAbsoluteMax = function _getAbsoluteMax2(a) {
    var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
    return Math.abs(max) >= Math.abs(min) ? max : min;
  };
  var _setScrollTrigger = function _setScrollTrigger2() {
    ScrollTrigger = gsap.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
  };
  var _initCore = function _initCore2(core) {
    gsap = core || _getGSAP();
    if (!_coreInitted && gsap && typeof document !== "undefined" && document.body) {
      _win = window;
      _doc = document;
      _docEl = _doc.documentElement;
      _body = _doc.body;
      _root = [_win, _doc, _docEl, _body];
      _clamp = gsap.utils.clamp;
      _context = gsap.core.context || function() {
      };
      _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
      _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
      _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
      setTimeout(function() {
        return _startup = 0;
      }, 500);
      _coreInitted = 1;
    }
    ScrollTrigger || _setScrollTrigger();
    return _coreInitted;
  };
  _horizontal.op = _vertical;
  _scrollers.cache = 0;
  var Observer = /* @__PURE__ */ (function() {
    function Observer2(vars) {
      this.init(vars);
    }
    var _proto = Observer2.prototype;
    _proto.init = function init5(vars) {
      _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
      ScrollTrigger || _setScrollTrigger();
      var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce2 = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
      this.target = target = _getTarget(target) || _docEl;
      this.vars = vars;
      ignore && (ignore = gsap.utils.toArray(ignore));
      tolerance = tolerance || 1e-9;
      dragMinimum = dragMinimum || 0;
      wheelSpeed = wheelSpeed || 1;
      scrollSpeed = scrollSpeed || 1;
      type = type || "wheel,touch,pointer";
      debounce2 = debounce2 !== false;
      lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22);
      var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault && vars.passive !== false, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
        return onClickTime = _getTime();
      }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
        return (self.event = e) && ignore && _isWithin(e.target, ignore) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
      }, onStopFunc = function onStopFunc2() {
        self._vx.reset();
        self._vy.reset();
        onStopDelayedCall.pause();
        onStop && onStop(self);
      }, update = function update2() {
        var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
        onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
        if (changedX) {
          onRight && self.deltaX > 0 && onRight(self);
          onLeft && self.deltaX < 0 && onLeft(self);
          onChangeX && onChangeX(self);
          onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
          prevDeltaX = self.deltaX;
          deltaX[0] = deltaX[1] = deltaX[2] = 0;
        }
        if (changedY) {
          onDown && self.deltaY > 0 && onDown(self);
          onUp && self.deltaY < 0 && onUp(self);
          onChangeY && onChangeY(self);
          onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
          prevDeltaY = self.deltaY;
          deltaY[0] = deltaY[1] = deltaY[2] = 0;
        }
        if (moved || dragged) {
          onMove && onMove(self);
          if (dragged) {
            onDragStart && dragged === 1 && onDragStart(self);
            onDrag && onDrag(self);
            dragged = 0;
          }
          moved = false;
        }
        locked && !(locked = false) && onLockAxis && onLockAxis(self);
        if (wheeled) {
          onWheel(self);
          wheeled = false;
        }
        id = 0;
      }, onDelta = function onDelta2(x, y, index) {
        deltaX[index] += x;
        deltaY[index] += y;
        self._vx.update(x);
        self._vy.update(y);
        debounce2 ? id || (id = requestAnimationFrame(update)) : update();
      }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
        if (lockAxis && !axis) {
          self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
          locked = true;
        }
        if (axis !== "y") {
          deltaX[2] += x;
          self._vx.update(x, true);
        }
        if (axis !== "x") {
          deltaY[2] += y;
          self._vy.update(y, true);
        }
        debounce2 ? id || (id = requestAnimationFrame(update)) : update();
      }, _onDrag = function _onDrag2(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }
        e = _getEvent(e, preventDefault);
        var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
        self.x = x;
        self.y = y;
        if (isDragging || (dx || dy) && (Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum)) {
          dragged || (dragged = isDragging ? 2 : 1);
          isDragging || (self.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
        }
      }, _onPress = self.onPress = function(e) {
        if (_ignoreCheck(e, 1) || e && e.button) {
          return;
        }
        self.axis = axis = null;
        onStopDelayedCall.pause();
        self.isPressed = true;
        e = _getEvent(e);
        prevDeltaX = prevDeltaY = 0;
        self.startX = self.x = e.clientX;
        self.startY = self.y = e.clientY;
        self._vx.reset();
        self._vy.reset();
        _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
        self.deltaX = self.deltaY = 0;
        onPress && onPress(self);
      }, _onRelease = self.onRelease = function(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }
        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging, isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e);
        if (!isDragNotClick && isTrackingDrag) {
          self._vx.reset();
          self._vy.reset();
          if (preventDefault && allowClicks) {
            gsap.delayedCall(0.08, function() {
              if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                if (e.target.click) {
                  e.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }
        self.isDragging = self.isGesturing = self.isPressed = false;
        onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
        dragged && update();
        onDragEnd && wasDragging && onDragEnd(self);
        onRelease && onRelease(self, isDragNotClick);
      }, _onGestureStart = function _onGestureStart2(e) {
        return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
      }, _onGestureEnd = function _onGestureEnd2() {
        return (self.isGesturing = false) || onGestureEnd(self);
      }, onScroll = function onScroll2(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        var x = scrollFuncX(), y = scrollFuncY();
        onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
        scrollX = x;
        scrollY = y;
        onStop && onStopDelayedCall.restart(true);
      }, _onWheel = function _onWheel2(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        e = _getEvent(e, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
        onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      }, _onMove = function _onMove2(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
        self.x = x;
        self.y = y;
        moved = true;
        onStop && onStopDelayedCall.restart(true);
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      }, _onHover = function _onHover2(e) {
        self.event = e;
        onHover(self);
      }, _onHoverEnd = function _onHoverEnd2(e) {
        self.event = e;
        onHoverEnd(self);
      }, _onClick = function _onClick2(e) {
        return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
      };
      onStopDelayedCall = self._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
      self.deltaX = self.deltaY = 0;
      self._vx = _getVelocityProp(0, 50, true);
      self._vy = _getVelocityProp(0, 50, true);
      self.scrollX = scrollFuncX;
      self.scrollY = scrollFuncY;
      self.isDragging = self.isGesturing = self.isPressed = false;
      _context(this);
      self.enable = function(e) {
        if (!self.isEnabled) {
          _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
          type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
          if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
            _addListener(target, _eventTypes[0], _onPress, passive, capture);
            _addListener(ownerDoc, _eventTypes[2], _onRelease);
            _addListener(ownerDoc, _eventTypes[3], _onRelease);
            allowClicks && _addListener(target, "click", clickCapture, true, true);
            onClick && _addListener(target, "click", _onClick);
            onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
            onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
            onHover && _addListener(target, _pointerType + "enter", _onHover);
            onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
            onMove && _addListener(target, _pointerType + "move", _onMove);
          }
          self.isEnabled = true;
          self.isDragging = self.isGesturing = self.isPressed = moved = dragged = false;
          self._vx.reset();
          self._vy.reset();
          scrollX = scrollFuncX();
          scrollY = scrollFuncY();
          e && e.type && _onPress(e);
          onEnable && onEnable(self);
        }
        return self;
      };
      self.disable = function() {
        if (self.isEnabled) {
          _observers.filter(function(o) {
            return o !== self && _isViewport(o.target);
          }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          if (self.isPressed) {
            self._vx.reset();
            self._vy.reset();
            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          }
          _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
          _removeListener(target, "wheel", _onWheel, capture);
          _removeListener(target, _eventTypes[0], _onPress, capture);
          _removeListener(ownerDoc, _eventTypes[2], _onRelease);
          _removeListener(ownerDoc, _eventTypes[3], _onRelease);
          _removeListener(target, "click", clickCapture, true);
          _removeListener(target, "click", _onClick);
          _removeListener(ownerDoc, "gesturestart", _onGestureStart);
          _removeListener(ownerDoc, "gestureend", _onGestureEnd);
          _removeListener(target, _pointerType + "enter", _onHover);
          _removeListener(target, _pointerType + "leave", _onHoverEnd);
          _removeListener(target, _pointerType + "move", _onMove);
          self.isEnabled = self.isPressed = self.isDragging = false;
          onDisable && onDisable(self);
        }
      };
      self.kill = self.revert = function() {
        self.disable();
        var i = _observers.indexOf(self);
        i >= 0 && _observers.splice(i, 1);
        _normalizer === self && (_normalizer = 0);
      };
      _observers.push(self);
      isNormalizer && _isViewport(target) && (_normalizer = self);
      self.enable(event);
    };
    _createClass(Observer2, [{
      key: "velocityX",
      get: function get2() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get2() {
        return this._vy.getVelocity();
      }
    }]);
    return Observer2;
  })();
  Observer.version = "3.15.0";
  Observer.create = function(vars) {
    return new Observer(vars);
  };
  Observer.register = _initCore;
  Observer.getAll = function() {
    return _observers.slice();
  };
  Observer.getById = function(id) {
    return _observers.filter(function(o) {
      return o.vars.id === id;
    })[0];
  };
  _getGSAP() && gsap.registerPlugin(Observer);

  // node_modules/gsap/ScrollTrigger.js
  var gsap2;
  var _coreInitted2;
  var _win2;
  var _doc2;
  var _docEl2;
  var _body2;
  var _root2;
  var _resizeDelay;
  var _toArray;
  var _clamp2;
  var _time2;
  var _syncInterval;
  var _refreshing;
  var _pointerIsDown;
  var _transformProp;
  var _i;
  var _prevWidth;
  var _prevHeight;
  var _autoRefresh;
  var _sort;
  var _suppressOverwrites;
  var _ignoreResize;
  var _normalizer2;
  var _ignoreMobileResize;
  var _baseScreenHeight;
  var _baseScreenWidth;
  var _fixIOSBug;
  var _context2;
  var _scrollRestoration;
  var _div100vh;
  var _100vh;
  var _isReverted;
  var _clampingMax;
  var _limitCallbacks;
  var _startup2 = 1;
  var _getTime2 = Date.now;
  var _time1 = _getTime2();
  var _lastScrollTime = 0;
  var _enabled = 0;
  var _parseClamp = function _parseClamp2(value, type, self) {
    var clamp3 = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
    self["_" + type + "Clamp"] = clamp3;
    return clamp3 ? value.substr(6, value.length - 7) : value;
  };
  var _keepClamp = function _keepClamp2(value, clamp3) {
    return clamp3 && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
  };
  var _rafBugFix = function _rafBugFix2() {
    return _enabled && requestAnimationFrame(_rafBugFix2);
  };
  var _pointerDownHandler = function _pointerDownHandler2() {
    return _pointerIsDown = 1;
  };
  var _pointerUpHandler = function _pointerUpHandler2() {
    return _pointerIsDown = 0;
  };
  var _passThrough = function _passThrough2(v) {
    return v;
  };
  var _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _getGSAP3 = function _getGSAP4() {
    return gsap2 || _windowExists() && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
  };
  var _isViewport3 = function _isViewport4(e) {
    return !!~_root2.indexOf(e);
  };
  var _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
    return (dimensionProperty === "Height" ? _100vh : _win2["inner" + dimensionProperty]) || _docEl2["client" + dimensionProperty] || _body2["client" + dimensionProperty];
  };
  var _getBoundsFunc = function _getBoundsFunc2(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
      _winOffsets.width = _win2.innerWidth;
      _winOffsets.height = _100vh;
      return _winOffsets;
    } : function() {
      return _getBounds(element);
    });
  };
  var _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
    var d = _ref.d, d2 = _ref.d2, a = _ref.a;
    return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
      return a()[d];
    } : function() {
      return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
    };
  };
  var _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
    return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
      return _winOffsets;
    };
  };
  var _maxScroll = function _maxScroll2(element, _ref2) {
    var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
    return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl2[s] || _body2[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
  };
  var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
    for (var i = 0; i < _autoRefresh.length; i += 3) {
      (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
    }
  };
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _endAnimation = function _endAnimation2(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  };
  var _callback = function _callback2(self, func, extraParam) {
    if (self.enabled) {
      var result = self._ctx ? self._ctx.add(function() {
        return func(self, extraParam);
      }) : func(self, extraParam);
      result && result.totalTime && (self.callbackAnimation = result);
    }
  };
  var _abs = Math.abs;
  var _left = "left";
  var _top = "top";
  var _right = "right";
  var _bottom = "bottom";
  var _width = "width";
  var _height = "height";
  var _Right = "Right";
  var _Left = "Left";
  var _Top = "Top";
  var _Bottom = "Bottom";
  var _padding = "padding";
  var _margin = "margin";
  var _Width = "Width";
  var _Height = "Height";
  var _px = "px";
  var _getComputedStyle = function _getComputedStyle2(element) {
    return _win2.getComputedStyle(element.nodeType === Node.DOCUMENT_NODE ? element.scrollingElement : element);
  };
  var _makePositionable = function _makePositionable2(element) {
    var position = _getComputedStyle(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
  };
  var _setDefaults = function _setDefaults2(obj, defaults3) {
    for (var p in defaults3) {
      p in obj || (obj[p] = defaults3[p]);
    }
    return obj;
  };
  var _getBounds = function _getBounds2(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap2.to(element, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect ? element.getBoundingClientRect() : element.scrollingElement.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  };
  var _getSize = function _getSize2(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  };
  var _getLabelRatioArray = function _getLabelRatioArray2(timeline2) {
    var a = [], labels = timeline2.labels, duration = timeline2.duration(), p;
    for (p in labels) {
      a.push(labels[p] / duration);
    }
    return a;
  };
  var _getClosestLabel = function _getClosestLabel2(animation) {
    return function(value) {
      return gsap2.utils.snap(_getLabelRatioArray(animation), value);
    };
  };
  var _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
    var snap3 = gsap2.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
      return a2 - b;
    });
    return a ? function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var i;
      if (!direction) {
        return snap3(value);
      }
      if (direction > 0) {
        value -= threshold;
        for (i = 0; i < a.length; i++) {
          if (a[i] >= value) {
            return a[i];
          }
        }
        return a[i - 1];
      } else {
        i = a.length;
        value += threshold;
        while (i--) {
          if (a[i] <= value) {
            return a[i];
          }
        }
      }
      return a[0];
    } : function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var snapped = snap3(value);
      return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap3(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
  };
  var _getLabelAtDirection = function _getLabelAtDirection2(timeline2) {
    return function(value, st) {
      return _snapDirectional(_getLabelRatioArray(timeline2))(value, st.direction);
    };
  };
  var _multiListener = function _multiListener2(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
      return func(element, type, callback);
    });
  };
  var _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  };
  var _removeListener3 = function _removeListener4(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _wheelListener = function _wheelListener2(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;
    if (scrollFunc) {
      func(el, "wheel", scrollFunc);
      func(el, "touchmove", scrollFunc);
    }
  };
  var _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  };
  var _defaults = {
    toggleActions: "play",
    anticipatePin: 0
  };
  var _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  };
  var _offsetToPx = function _offsetToPx2(value, size) {
    if (_isString(value)) {
      var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }
      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
  };
  var _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e = _doc2.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body2 : container.tagName === "IFRAME" ? container.contentDocument.body : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];
    _positionMarker(e, 0, direction, isStart);
    return e;
  };
  var _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap2.set(marker, vars);
  };
  var _triggers = [];
  var _ids = {};
  var _rafID;
  var _sync = function _sync2() {
    return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
  };
  var _onScroll3 = function _onScroll4() {
    if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body2.clientWidth) {
      _scrollers.cache++;
      if (_normalizer2) {
        _rafID || (_rafID = requestAnimationFrame(_updateAll));
      } else {
        _updateAll();
      }
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime2();
    }
  };
  var _setBaseDimensions = function _setBaseDimensions2() {
    _baseScreenWidth = _win2.innerWidth;
    _baseScreenHeight = _win2.innerHeight;
  };
  var _onResize = function _onResize2(force) {
    _scrollers.cache++;
    (force === true || !_refreshing && !_ignoreResize && !_doc2.fullscreenElement && !_doc2.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win2.innerWidth || Math.abs(_win2.innerHeight - _baseScreenHeight) > _win2.innerHeight * 0.25)) && _resizeDelay.restart(true);
  };
  var _listeners = {};
  var _emptyArray = [];
  var _softRefresh = function _softRefresh2() {
    return _removeListener3(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
  };
  var _dispatch = function _dispatch2(type) {
    return _listeners[type] && _listeners[type].map(function(f) {
      return f();
    }) || _emptyArray;
  };
  var _savedStyles = [];
  var _revertRecorded = function _revertRecorded2(media) {
    for (var i = 0; i < _savedStyles.length; i += 5) {
      if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
        _savedStyles[i].style.cssText = _savedStyles[i + 1];
        _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
        _savedStyles[i + 3].uncache = 1;
      }
    }
  };
  var _recordScrollPositions = function _recordScrollPositions2() {
    return _scrollers.forEach(function(obj) {
      return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
    });
  };
  var _revertAll = function _revertAll2(kill, media) {
    var trigger;
    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];
      if (trigger && (!media || trigger._ctx === media)) {
        if (kill) {
          trigger.kill(1);
        } else {
          trigger.revert(true, true);
        }
      }
    }
    _isReverted = true;
    media && _revertRecorded(media);
    media || _dispatch("revert");
  };
  var _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
    _scrollers.cache++;
    (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
      return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString(scrollRestoration) && (_win2.history.scrollRestoration = _scrollRestoration = scrollRestoration);
  };
  var _refreshingAll;
  var _refreshID = 0;
  var _queueRefreshID;
  var _queueRefreshAll = function _queueRefreshAll2() {
    if (_queueRefreshID !== _refreshID) {
      var id = _queueRefreshID = _refreshID;
      requestAnimationFrame(function() {
        return id === _refreshID && _refreshAll(true);
      });
    }
  };
  var _refresh100vh = function _refresh100vh2() {
    _body2.appendChild(_div100vh);
    _100vh = !_normalizer2 && _div100vh.offsetHeight || _win2.innerHeight;
    _body2.removeChild(_div100vh);
  };
  var _hideAllMarkers = function _hideAllMarkers2(hide) {
    return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
      return el.style.display = hide ? "none" : "block";
    });
  };
  var _refreshAll = function _refreshAll2(force, skipRevert) {
    _docEl2 = _doc2.documentElement;
    _body2 = _doc2.body;
    _root2 = [_win2, _doc2, _docEl2, _body2];
    if (_lastScrollTime && !force && !_isReverted) {
      _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
      return;
    }
    _refresh100vh();
    _refreshingAll = ScrollTrigger2.isRefreshing = true;
    _isReverted || _recordScrollPositions();
    var refreshInits = _dispatch("refreshInit");
    _sort && ScrollTrigger2.sort();
    skipRevert || _revertAll();
    _scrollers.forEach(function(obj) {
      if (_isFunction(obj)) {
        obj.smooth && (obj.target.style.scrollBehavior = "auto");
        obj(0);
      }
    });
    _triggers.slice(0).forEach(function(t) {
      return t.refresh();
    });
    _isReverted = false;
    _triggers.forEach(function(t) {
      if (t._subPinOffset && t.pin) {
        var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
        t.revert(true, 1);
        t.adjustPinSpacing(t.pin[prop] - original);
        t.refresh();
      }
    });
    _clampingMax = 1;
    _hideAllMarkers(true);
    _triggers.forEach(function(t) {
      var max = _maxScroll(t.scroller, t._dir), endClamp = t.vars.end === "max" || t._endClamp && t.end > max, startClamp = t._startClamp && t.start >= max;
      (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
    });
    _hideAllMarkers(false);
    _clampingMax = 0;
    refreshInits.forEach(function(result) {
      return result && result.render && result.render(-1);
    });
    _scrollers.forEach(function(obj) {
      if (_isFunction(obj)) {
        obj.smooth && requestAnimationFrame(function() {
          return obj.target.style.scrollBehavior = "smooth";
        });
        obj.rec && obj(obj.rec);
      }
    });
    _clearScrollMemory(_scrollRestoration, 1);
    _resizeDelay.pause();
    _refreshID++;
    _refreshingAll = 2;
    _updateAll(2);
    _triggers.forEach(function(t) {
      return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
    });
    _refreshingAll = ScrollTrigger2.isRefreshing = false;
    _dispatch("refresh");
  };
  var _lastScroll = 0;
  var _direction = 1;
  var _primary;
  var _updateAll = function _updateAll2(force) {
    if (force === 2 || !_refreshingAll && !_isReverted) {
      ScrollTrigger2.isUpdating = true;
      _primary && _primary.update(0);
      var l = _triggers.length, time = _getTime2(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
      _direction = _lastScroll > scroll ? -1 : 1;
      _refreshingAll || (_lastScroll = scroll);
      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
          _lastScrollTime = 0;
          _dispatch("scrollEnd");
        }
        _time2 = _time1;
        _time1 = time;
      }
      if (_direction < 0) {
        _i = l;
        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
        _direction = 1;
      } else {
        for (_i = 0; _i < l; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }
      ScrollTrigger2.isUpdating = false;
    }
    _rafID = 0;
  };
  var _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
  var _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
  var _swapPinOut = function _swapPinOut2(pin, spacer, state) {
    _setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) {
      _setState(cache.spacerState);
    } else if (pin._gsap.swappedIn) {
      var parent = spacer.parentNode;
      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }
    pin._gsap.swappedIn = false;
  };
  var _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
      var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
      while (i--) {
        p = _propNamesToCopy[i];
        spacerStyle[p] = cs[p];
      }
      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.flexBasis = cs.flexBasis || "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
      _setState(spacerState);
      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      if (pin.parentNode !== spacer) {
        pin.parentNode.insertBefore(spacer, pin);
        spacer.appendChild(pin);
      }
      pin._gsap.swappedIn = true;
    }
  };
  var _capsExp = /([A-Z])/g;
  var _setState = function _setState2(state) {
    if (state) {
      var style2 = state.t.style, l = state.length, i = 0, p, value;
      (state.t._gsap || gsap2.core.getCache(state.t)).uncache = 1;
      for (; i < l; i += 2) {
        value = state[i + 1];
        p = state[i];
        if (value) {
          style2[p] = value;
        } else if (style2[p]) {
          style2.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
        }
      }
    }
  };
  var _getState = function _getState2(element) {
    var l = _stateProps.length, style2 = element.style, state = [], i = 0;
    for (; i < l; i++) {
      state.push(_stateProps[i], style2[_stateProps[i]]);
    }
    state.t = element;
    return state;
  };
  var _copyState = function _copyState2(state, override, omitOffsets) {
    var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
    for (; i < l; i += 2) {
      p = state[i];
      result.push(p, p in override ? override[p] : state[i + 1]);
    }
    result.t = state.t;
    return result;
  };
  var _winOffsets = {
    left: 0,
    top: 0
  };
  var _parsePosition = function _parsePosition2(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    _isFunction(value) && (value = value(self));
    if (_isString(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }
    var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value) || (value = +value);
    if (!_isNumber(value)) {
      _isFunction(trigger) && (trigger = trigger(self));
      var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
      element = _getTarget(trigger, self) || _body2;
      bounds = _getBounds(element) || {};
      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }
      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else {
      containerAnimation && (value = gsap2.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
      markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (clampZeroProp) {
      self[clampZeroProp] = value || -1e-3;
      value < 0 && (value = 0);
    }
    if (marker) {
      var position = value + scrollerSize, isStart = marker._isStart;
      p1 = "scroll" + direction.d2;
      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body2[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1);
      if (useFixedPosition) {
        scrollerBounds = _getBounds(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }
    if (containerAnimation && element) {
      p1 = _getBounds(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
  };
  var _prefixExp = /(webkit|moz|length|cssText|inset)/i;
  var _reparent = function _reparent2(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style2 = element.style, p, cs;
      if (parent === _body2) {
        element._stOrig = style2.cssText;
        cs = _getComputedStyle(element);
        for (p in cs) {
          if (!+p && !_prefixExp.test(p) && cs[p] && typeof style2[p] === "string" && p !== "0") {
            style2[p] = cs[p];
          }
        }
        style2.top = top;
        style2.left = left;
      } else {
        style2.cssText = element._stOrig;
      }
      gsap2.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  };
  var _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue, last2 = last1;
    return function(value) {
      var current = Math.round(getValueFunc());
      if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
        value = current;
        onInterrupt && onInterrupt();
      }
      last2 = last1;
      last1 = Math.round(value);
      return last1;
    };
  };
  var _shiftMarker = function _shiftMarker2(marker, direction, value) {
    var vars = {};
    vars[direction.p] = "+=" + value;
    gsap2.set(marker, vars);
  };
  var _getTweenCreator = function _getTweenCreator2(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
      var tween = getTween2.tween, onComplete = vars.onComplete, modifiers2 = {};
      initialValue = initialValue || getScroll();
      var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
        tween.kill();
        getTween2.tween = 0;
      });
      change2 = change1 && change2 || 0;
      change1 = change1 || scrollTo - initialValue;
      tween && tween.kill();
      vars[prop] = scrollTo;
      vars.inherit = false;
      vars.modifiers = modifiers2;
      modifiers2[prop] = function() {
        return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
      };
      vars.onUpdate = function() {
        _scrollers.cache++;
        getTween2.tween && _updateAll();
      };
      vars.onComplete = function() {
        getTween2.tween = 0;
        onComplete && onComplete.call(tween);
      };
      tween = getTween2.tween = gsap2.to(scroller, vars);
      return tween;
    };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function() {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    _addListener3(scroller, "wheel", getScroll.wheelHandler);
    ScrollTrigger2.isTouch && _addListener3(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
  };
  var ScrollTrigger2 = /* @__PURE__ */ (function() {
    function ScrollTrigger3(vars, animation) {
      _coreInitted2 || ScrollTrigger3.register(gsap2) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      _context2(this);
      this.init(vars, animation);
    }
    var _proto = ScrollTrigger3.prototype;
    _proto.init = function init5(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(true, true);
      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough;
        return;
      }
      vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults);
      var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win2), scrollerCache = gsap2.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
        return vars.onRefreshInit(self);
      }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
      self._startClamp = self._endClamp = false;
      self._dir = direction;
      anticipatePin *= 45;
      self.scroller = scroller;
      self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
      scroll1 = scrollFunc();
      self.vars = vars;
      animation = animation || vars.animation;
      if ("refreshPriority" in vars) {
        _sort = 1;
        vars.refreshPriority === -9999 && (_primary = self);
      }
      scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      };
      self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
      self.scrubDuration = function(value) {
        scrubSmooth = _isNumber(value) && value;
        if (!scrubSmooth) {
          scrubTween && scrubTween.progress(1).kill();
          scrubTween = 0;
        } else {
          scrubTween ? scrubTween.duration(value) : scrubTween = gsap2.to(animation, {
            ease: "expo",
            totalProgress: "+=0",
            inherit: false,
            duration: scrubSmooth,
            paused: true,
            onComplete: function onComplete() {
              return onScrubComplete && onScrubComplete(self);
            }
          });
        }
      };
      if (animation) {
        animation.vars.lazy = false;
        animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
        self.animation = animation.pause();
        animation.scrollTrigger = self;
        self.scrubDuration(scrub);
        snap1 = 0;
        id || (id = animation.vars.id);
      }
      if (snap3) {
        if (!_isObject(snap3) || snap3.push) {
          snap3 = {
            snapTo: snap3
          };
        }
        "scrollBehavior" in _body2.style && gsap2.set(isViewport ? [_body2, _docEl2] : scroller, {
          scrollBehavior: "auto"
        });
        _scrollers.forEach(function(o) {
          return _isFunction(o) && o.target === (isViewport ? _doc2.scrollingElement || _docEl2 : scroller) && (o.smooth = false);
        });
        snapFunc = _isFunction(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== false ? function(value, st) {
          return _snapDirectional(snap3.snapTo)(value, _getTime2() - lastRefresh < 500 ? 0 : st.direction);
        } : gsap2.utils.snap(snap3.snapTo);
        snapDurClamp = snap3.duration || {
          min: 0.1,
          max: 2
        };
        snapDurClamp = _isObject(snapDurClamp) ? _clamp2(snapDurClamp.min, snapDurClamp.max) : _clamp2(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap2.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
          var scroll = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
          if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
            var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap2.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap3.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
            endValue = snapFunc(naturalEnd, self);
            _isNumber(endValue) || (endValue = naturalEnd);
            endScroll = Math.max(0, Math.round(start + endValue * change));
            if (scroll <= end && scroll >= start && endScroll !== scroll) {
              if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                return;
              }
              if (snap3.inertia === false) {
                change1 = endValue - progress;
              }
              tweenTo(endScroll, {
                duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                ease: snap3.ease || "power3",
                data: _abs(endScroll - scroll),
                // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                onInterrupt: function onInterrupt() {
                  return snapDelayedCall.restart(true) && _onInterrupt && _callback(self, _onInterrupt);
                },
                onComplete: function onComplete() {
                  self.update();
                  lastSnap = scrollFunc();
                  if (animation && !isToggle) {
                    scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                  }
                  snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self.progress;
                  onSnapComplete && onSnapComplete(self);
                  _onComplete && _callback(self, _onComplete);
                }
              }, scroll, change1 * change, endScroll - scroll - change1 * change);
              onStart && _callback(self, onStart, tweenTo.tween);
            }
          } else if (self.isActive && lastSnap !== scroll) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }
      id && (_ids[id] = self);
      trigger = self.trigger = _getTarget(trigger || pin !== true && pin);
      customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
      customRevertReturn && (customRevertReturn = customRevertReturn(self));
      pin = pin === true ? trigger : _getTarget(pin);
      _isString(toggleClass) && (toggleClass = {
        targets: trigger,
        className: toggleClass
      });
      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
        self.pin = pin;
        pinCache = gsap2.core.getCache(pin);
        if (!pinCache.spacer) {
          if (pinSpacer) {
            pinSpacer = _getTarget(pinSpacer);
            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
            pinCache.spacerIsNative = !!pinSpacer;
            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
          }
          pinCache.spacer = spacer = pinSpacer || _doc2.createElement("div");
          spacer.classList.add("pin-spacer");
          id && spacer.classList.add("pin-spacer-" + id);
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }
        vars.force3D !== false && gsap2.set(pin, {
          force3D: true
        });
        self.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap2.getProperty(pin);
        pinSetter = gsap2.quickSetter(pin, direction.a, _px);
        _swapPinIn(pin, spacer, cs);
        pinState = _getState(pin);
      }
      if (markers) {
        markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];
        var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
        markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
        markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
        containerAnimation && (caMarkerSetter = gsap2.quickSetter([markerStart, markerEnd], direction.a, _px));
        if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
          _makePositionable(isViewport ? _body2 : scroller);
          gsap2.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap2.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap2.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }
      if (containerAnimation) {
        var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
        containerAnimation.eventCallback("onUpdate", function() {
          self.update(0, 0, 1);
          oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
        });
      }
      self.previous = function() {
        return _triggers[_triggers.indexOf(self) - 1];
      };
      self.next = function() {
        return _triggers[_triggers.indexOf(self) + 1];
      };
      self.revert = function(revert, temp) {
        if (!temp) {
          return self.kill(true);
        }
        var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
        if (r !== self.isReverted) {
          if (r) {
            prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
            prevProgress = self.progress;
            prevAnimProgress = animation && animation.progress();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
            return m.style.display = r ? "none" : "block";
          });
          if (r) {
            _refreshing = self;
            self.update(r);
          }
          if (pin && (!pinReparent || !self.isActive)) {
            if (r) {
              _swapPinOut(pin, spacer, pinOriginalState);
            } else {
              _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
            }
          }
          r || self.update(r);
          _refreshing = prevRefreshing;
          self.isReverted = r;
        }
      };
      self.refresh = function(soft, force, position, pinOffset) {
        if ((_refreshing || !self.enabled) && !force) {
          return;
        }
        if (pin && soft && _lastScrollTime) {
          _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
          return;
        }
        !_refreshingAll && onRefreshInit && onRefreshInit(self);
        _refreshing = self;
        if (tweenTo.tween && !position) {
          tweenTo.tween.kill();
          tweenTo.tween = 0;
        }
        scrubTween && scrubTween.pause();
        if (invalidateOnRefresh && animation) {
          animation.revert({
            kill: false
          }).invalidate();
          animation.getChildren ? animation.getChildren(true, true, false).forEach(function(t) {
            return t.vars.immediateRender && t.render(0, true, true);
          }) : animation.vars.immediateRender && animation.render(0, true, true);
        }
        self.isReverted || self.revert(true, true);
        self._subPinOffset = false;
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01 || !change, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
        if (markers && _isObject(position)) {
          markerStartOffset = gsap2.getProperty(markerStartTrigger, direction.p);
          markerEndOffset = gsap2.getProperty(markerEndTrigger, direction.p);
        }
        while (i-- > 0) {
          curTrigger = _triggers[i];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self);
          curPin = curTrigger.pin;
          if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert(true, true);
          }
          if (curTrigger !== _triggers[i]) {
            triggerIndex--;
            i--;
          }
        }
        _isFunction(parsedStart) && (parsedStart = parsedStart(self));
        parsedStart = _parseClamp(parsedStart, "start", self);
        start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
        _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
        if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset2 = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap2.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
            parsedEndTrigger = trigger;
          }
        }
        parsedEnd = _parseClamp(parsedEnd, "end", self);
        end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -1e-3;
        offset2 = 0;
        i = triggerIndex;
        while (i--) {
          curTrigger = _triggers[i] || {};
          curPin = curTrigger.pin;
          if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
            cs2 = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
            if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
              offset2 += cs2 * (1 - curTrigger.progress);
            }
            curPin === pin && (otherPinOffset += cs2);
          }
        }
        start += offset2;
        end += offset2;
        self._startClamp && (self._startClamp += offset2);
        if (self._endClamp && !_refreshingAll) {
          self._endClamp = end || -1e-3;
          end = Math.min(end, _maxScroll(scroller, direction));
        }
        change = end - start || (start -= 0.01) && 1e-3;
        if (isFirstRefresh) {
          prevProgress = gsap2.utils.clamp(0, 1, gsap2.utils.normalize(start, end, prevScroll));
        }
        self._pinPush = otherPinOffset;
        if (markerStart && offset2) {
          cs2 = {};
          cs2[direction.a] = "+=" + offset2;
          pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
          gsap2.set([markerStart, markerEnd], cs2);
        }
        if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
          cs2 = _getComputedStyle(pin);
          isVertical = direction === _vertical;
          scroll = scrollFunc();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          if (!max && end > 1) {
            forcedOverflow = (isViewport ? _doc2.scrollingElement || _docEl2 : scroller).style;
            forcedOverflow = {
              style: forcedOverflow,
              value: forcedOverflow["overflow" + direction.a.toUpperCase()]
            };
            if (isViewport && _getComputedStyle(_body2)["overflow" + direction.a.toUpperCase()] !== "scroll") {
              forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
            }
          }
          _swapPinIn(pin, spacer, cs2);
          pinState = _getState(pin);
          bounds = _getBounds(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            if (i) {
              spacerState.push(direction.d, i + _px);
              spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
            }
            _setState(spacerState);
            if (pinnedContainer) {
              _triggers.forEach(function(t) {
                if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                  t._subPinOffset = true;
                }
              });
            }
            useFixedPosition && scrollFunc(prevScroll);
          } else {
            i = _getSize(pin, direction);
            i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
          }
          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs2[_padding];
            override[_padding + _Top] = cs2[_padding + _Top];
            override[_padding + _Right] = cs2[_padding + _Right];
            override[_padding + _Bottom] = cs2[_padding + _Bottom];
            override[_padding + _Left] = cs2[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
            _refreshingAll && scrollFunc(0);
          }
          if (animation) {
            initted = animation._initted;
            _suppressOverwrites(1);
            animation.render(animation.duration(), true, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            pinMoves = Math.abs(change - pinChange) > 1;
            useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.render(0, true, true);
            initted || animation.invalidate(true);
            animation.parent || animation.totalTime(animation.totalTime());
            _suppressOverwrites(0);
          } else {
            pinChange = change;
          }
          forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
        } else if (trigger && scrollFunc() && !containerAnimation) {
          bounds = trigger.parentNode;
          while (bounds && bounds !== _body2) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }
            bounds = bounds.parentNode;
          }
        }
        revertedPins && revertedPins.forEach(function(t) {
          return t.revert(false, true);
        });
        self.start = start;
        self.end = end;
        scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
        if (!containerAnimation && !_refreshingAll) {
          scroll1 < prevScroll && scrollFunc(prevScroll);
          self.scroll.rec = 0;
        }
        self.revert(false, true);
        lastRefresh = _getTime2();
        if (snapDelayedCall) {
          lastSnap = -1;
          snapDelayedCall.restart(true);
        }
        _refreshing = 0;
        animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
        if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh || animation && !animation._initted) {
          animation && !isToggle && (animation._initted || prevProgress || animation.vars.immediateRender !== false) && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap2.utils.normalize(start, end, 0) : prevProgress, true);
          self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
        }
        pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
        scrubTween && scrubTween.invalidate();
        if (!isNaN(markerStartOffset)) {
          markerStartOffset -= gsap2.getProperty(markerStartTrigger, direction.p);
          markerEndOffset -= gsap2.getProperty(markerEndTrigger, direction.p);
          _shiftMarker(markerStartTrigger, direction, markerStartOffset);
          _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
          _shiftMarker(markerEndTrigger, direction, markerEndOffset);
          _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
        }
        isFirstRefresh && !_refreshingAll && self.update();
        if (onRefresh && !_refreshingAll && !executingOnRefresh) {
          executingOnRefresh = true;
          onRefresh(self);
          executingOnRefresh = false;
        }
      };
      self.getVelocity = function() {
        return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
      };
      self.endAnimation = function() {
        _endAnimation(self.callbackAnimation);
        if (animation) {
          scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
        }
      };
      self.labelToScroll = function(label) {
        return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
      };
      self.getTrailing = function(name) {
        var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
        return (_isString(name) ? a.filter(function(t) {
          return t.vars.preventOverlaps === name;
        }) : a).filter(function(t) {
          return self.direction > 0 ? t.end <= start : t.start >= end;
        });
      };
      self.update = function(reset2, recordVelocity, forceFake) {
        if (containerAnimation && !forceFake && !reset2) {
          return;
        }
        var scroll = _refreshingAll === true ? prevScroll : self.scroll(), p = reset2 ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self.progress, isActive2, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = containerAnimation ? scrollFunc() : scroll;
          if (snap3) {
            snap22 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }
        if (anticipatePin && pin && !_refreshing && !_startup2 && _lastScrollTime) {
          if (!clipped && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
            clipped = 1e-4;
          } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
            clipped = 0.9999;
          }
        }
        if (clipped !== prevProgress2 && self.enabled) {
          isActive2 = self.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress2 && prevProgress2 < 1;
          toggled = isActive2 !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress2;
          self.direction = clipped > prevProgress2 ? 1 : -1;
          self.progress = clipped;
          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
            }
          }
          preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
            return t.endAnimation();
          }));
          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup2) {
              scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
              if (scrubTween.resetTo) {
                scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
              } else {
                scrubTween.vars.totalProgress = clipped;
                scrubTween.invalidate().restart();
              }
            } else if (animation) {
              animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset2)));
            }
          }
          if (pin) {
            reset2 && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
            if (!useFixedPosition) {
              pinSetter(_round(pinStart + pinChange * clipped));
            } else if (stateChanged) {
              isAtMax = !reset2 && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
              if (pinReparent) {
                if (!reset2 && (isActive2 || isAtMax)) {
                  var bounds = _getBounds(pin, true), _offset = scroll - start;
                  _reparent(pin, _body2, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }
              _setState(isActive2 || isAtMax ? pinActiveState : pinState);
              pinMoves && clipped < 1 && isActive2 || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
            }
          }
          snap3 && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
          toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
            return el.classList[isActive2 || once ? "add" : "remove"](toggleClass.className);
          });
          onUpdate && !isToggle && !reset2 && onUpdate(self);
          if (stateChanged && !_refreshing) {
            if (isToggle) {
              if (isTakingAction) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else if (action === "restart") {
                  animation.restart(true);
                } else {
                  animation[action]();
                }
              }
              onUpdate && onUpdate(self);
            }
            if (toggled || !_limitCallbacks) {
              onToggle && toggled && _callback(self, onToggle);
              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
              once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && _callback(self, callbacks[toggleState]);
              }
            }
            if (fastScrollEnd && !isActive2 && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
              _endAnimation(self.callbackAnimation);
              scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self);
          }
        }
        if (markerEndSetter) {
          var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n);
        }
        caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
      };
      self.enable = function(reset2, refresh) {
        if (!self.enabled) {
          self.enabled = true;
          _addListener3(scroller, "resize", _onResize);
          isViewport || _addListener3(scroller, "scroll", _onScroll3);
          onRefreshInit && _addListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (reset2 !== false) {
            self.progress = prevProgress = 0;
            scroll1 = scroll2 = lastSnap = scrollFunc();
          }
          refresh !== false && self.refresh();
        }
      };
      self.getTween = function(snap4) {
        return snap4 && tweenTo ? tweenTo.tween : scrubTween;
      };
      self.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
        if (containerAnimation) {
          var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
          newStart = st.start + _change * newStart / duration;
          newEnd = st.start + _change * newEnd / duration;
        }
        self.refresh(false, false, {
          start: _keepClamp(newStart, keepClamp && !!self._startClamp),
          end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
        }, pinOffset);
        self.update();
      };
      self.adjustPinSpacing = function(amount) {
        if (spacerState && amount) {
          var i = spacerState.indexOf(direction.d) + 1;
          spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
          spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
          _setState(spacerState);
        }
      };
      self.disable = function(reset2, allowAnimation) {
        reset2 !== false && self.revert(true, true);
        if (self.enabled) {
          self.enabled = self.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }
          if (!isViewport) {
            var i = _triggers.length;
            while (i--) {
              if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
                return;
              }
            }
            _removeListener3(scroller, "resize", _onResize);
            isViewport || _removeListener3(scroller, "scroll", _onScroll3);
          }
        }
      };
      self.kill = function(revert, allowAnimation) {
        self.disable(revert, allowAnimation);
        scrubTween && !allowAnimation && scrubTween.kill();
        id && delete _ids[id];
        var i = _triggers.indexOf(self);
        i >= 0 && _triggers.splice(i, 1);
        i === _i && _direction > 0 && _i--;
        i = 0;
        _triggers.forEach(function(t) {
          return t.scroller === self.scroller && (i = 1);
        });
        i || _refreshingAll || (self.scroll.rec = 0);
        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.revert({
            kill: false
          });
          allowAnimation || animation.kill();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
          return m.parentNode && m.parentNode.removeChild(m);
        });
        _primary === self && (_primary = 0);
        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i = 0;
          _triggers.forEach(function(t) {
            return t.pin === pin && i++;
          });
          i || (pinCache.spacer = 0);
        }
        vars.onKill && vars.onKill(self);
      };
      _triggers.push(self);
      self.enable(false, false);
      customRevertReturn && customRevertReturn(self);
      if (animation && animation.add && !change) {
        var updateFunc = self.update;
        self.update = function() {
          self.update = updateFunc;
          _scrollers.cache++;
          start || end || self.refresh();
        };
        gsap2.delayedCall(0.01, self.update);
        change = 0.01;
        start = end = 0;
      } else {
        self.refresh();
      }
      pin && _queueRefreshAll();
    };
    ScrollTrigger3.register = function register(core) {
      if (!_coreInitted2) {
        gsap2 = core || _getGSAP3();
        _windowExists() && window.document && ScrollTrigger3.enable();
        _coreInitted2 = _enabled;
      }
      return _coreInitted2;
    };
    ScrollTrigger3.defaults = function defaults3(config3) {
      if (config3) {
        for (var p in config3) {
          _defaults[p] = config3[p];
        }
      }
      return _defaults;
    };
    ScrollTrigger3.disable = function disable(reset2, kill) {
      _enabled = 0;
      _triggers.forEach(function(trigger) {
        return trigger[kill ? "kill" : "disable"](reset2);
      });
      _removeListener3(_win2, "wheel", _onScroll3);
      _removeListener3(_doc2, "scroll", _onScroll3);
      clearInterval(_syncInterval);
      _removeListener3(_doc2, "touchcancel", _passThrough);
      _removeListener3(_body2, "touchstart", _passThrough);
      _multiListener(_removeListener3, _doc2, "pointerdown,touchstart,mousedown", _pointerDownHandler);
      _multiListener(_removeListener3, _doc2, "pointerup,touchend,mouseup", _pointerUpHandler);
      _resizeDelay.kill();
      _iterateAutoRefresh(_removeListener3);
      for (var i = 0; i < _scrollers.length; i += 3) {
        _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
        _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
      }
    };
    ScrollTrigger3.enable = function enable() {
      _win2 = window;
      _doc2 = document;
      _docEl2 = _doc2.documentElement;
      _body2 = _doc2.body;
      if (gsap2) {
        _toArray = gsap2.utils.toArray;
        _clamp2 = gsap2.utils.clamp;
        _context2 = gsap2.core.context || _passThrough;
        _suppressOverwrites = gsap2.core.suppressOverwrites || _passThrough;
        _scrollRestoration = _win2.history.scrollRestoration || "auto";
        _lastScroll = _win2.pageYOffset || 0;
        gsap2.core.globals("ScrollTrigger", ScrollTrigger3);
        if (_body2) {
          _enabled = 1;
          _div100vh = document.createElement("div");
          _div100vh.style.height = "100vh";
          _div100vh.style.position = "absolute";
          _refresh100vh();
          _rafBugFix();
          Observer.register(gsap2);
          ScrollTrigger3.isTouch = Observer.isTouch;
          _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
          _ignoreMobileResize = Observer.isTouch === 1;
          _addListener3(_win2, "wheel", _onScroll3);
          _root2 = [_win2, _doc2, _docEl2, _body2];
          if (gsap2.matchMedia) {
            ScrollTrigger3.matchMedia = function(vars) {
              var mm = gsap2.matchMedia(), p;
              for (p in vars) {
                mm.add(p, vars[p]);
              }
              return mm;
            };
            gsap2.addEventListener("matchMediaInit", function() {
              _recordScrollPositions();
              _revertAll();
            });
            gsap2.addEventListener("matchMediaRevert", function() {
              return _revertRecorded();
            });
            gsap2.addEventListener("matchMedia", function() {
              _refreshAll(0, 1);
              _dispatch("matchMedia");
            });
            gsap2.matchMedia().add("(orientation: portrait)", function() {
              _setBaseDimensions();
              return _setBaseDimensions;
            });
          } else {
            console.warn("Requires GSAP 3.11.0 or later");
          }
          _setBaseDimensions();
          _addListener3(_doc2, "scroll", _onScroll3);
          var bodyHasStyle = _body2.hasAttribute("style"), bodyStyle = _body2.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap2.core.Animation.prototype, bounds, i;
          AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
            value: function value() {
              return this.time(-0.01, true);
            }
          });
          bodyStyle.borderTopStyle = "solid";
          bounds = _getBounds(_body2);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
          if (!bodyHasStyle) {
            _body2.setAttribute("style", "");
            _body2.removeAttribute("style");
          }
          _syncInterval = setInterval(_sync, 250);
          gsap2.delayedCall(0.5, function() {
            return _startup2 = 0;
          });
          _addListener3(_doc2, "touchcancel", _passThrough);
          _addListener3(_body2, "touchstart", _passThrough);
          _multiListener(_addListener3, _doc2, "pointerdown,touchstart,mousedown", _pointerDownHandler);
          _multiListener(_addListener3, _doc2, "pointerup,touchend,mouseup", _pointerUpHandler);
          _transformProp = gsap2.utils.checkPrefix("transform");
          _stateProps.push(_transformProp);
          _coreInitted2 = _getTime2();
          _resizeDelay = gsap2.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc2, "visibilitychange", function() {
            var w = _win2.innerWidth, h2 = _win2.innerHeight;
            if (_doc2.hidden) {
              _prevWidth = w;
              _prevHeight = h2;
            } else if (_prevWidth !== w || _prevHeight !== h2) {
              _onResize();
            }
          }, _doc2, "DOMContentLoaded", _refreshAll, _win2, "load", _refreshAll, _win2, "resize", _onResize];
          _iterateAutoRefresh(_addListener3);
          _triggers.forEach(function(trigger) {
            return trigger.enable(0, 1);
          });
          for (i = 0; i < _scrollers.length; i += 3) {
            _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
            _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
          }
        } else if (_doc2) {
          var onLoad = function onLoad2() {
            ScrollTrigger3.enable();
            _doc2.removeEventListener("DOMContentLoaded", onLoad2);
          };
          _doc2.addEventListener("DOMContentLoaded", onLoad);
        }
      }
    };
    ScrollTrigger3.config = function config3(vars) {
      "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
      if ("autoRefreshEvents" in vars) {
        _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };
    ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
      var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport3(t);
      if (~i) {
        _scrollers.splice(i, isViewport ? 6 : 2);
      }
      if (vars) {
        isViewport ? _proxies.unshift(_win2, vars, _body2, vars, _docEl2, vars) : _proxies.unshift(t, vars);
      }
    };
    ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
      _triggers.forEach(function(t) {
        return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
      });
    };
    ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
      var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
      return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win2.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win2.innerHeight;
    };
    ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
      _isString(element) && (element = _getTarget(element));
      var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
      return horizontal ? (bounds.left + offset) / _win2.innerWidth : (bounds.top + offset) / _win2.innerHeight;
    };
    ScrollTrigger3.killAll = function killAll(allowListeners) {
      _triggers.slice(0).forEach(function(t) {
        return t.vars.id !== "ScrollSmoother" && t.kill();
      });
      if (allowListeners !== true) {
        var listeners = _listeners.killAll || [];
        _listeners = {};
        listeners.forEach(function(f) {
          return f();
        });
      }
    };
    return ScrollTrigger3;
  })();
  ScrollTrigger2.version = "3.15.0";
  ScrollTrigger2.saveStyles = function(targets) {
    return targets ? _toArray(targets).forEach(function(target) {
      if (target && target.style) {
        var i = _savedStyles.indexOf(target);
        i >= 0 && _savedStyles.splice(i, 5);
        _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap2.core.getCache(target), _context2());
      }
    }) : _savedStyles;
  };
  ScrollTrigger2.revert = function(soft, media) {
    return _revertAll(!soft, media);
  };
  ScrollTrigger2.create = function(vars, animation) {
    return new ScrollTrigger2(vars, animation);
  };
  ScrollTrigger2.refresh = function(safe) {
    return safe ? _onResize(true) : (_coreInitted2 || ScrollTrigger2.register()) && _refreshAll(true);
  };
  ScrollTrigger2.update = function(force) {
    return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
  };
  ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
  ScrollTrigger2.maxScroll = function(element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getScrollFunc = function(element, horizontal) {
    return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getById = function(id) {
    return _ids[id];
  };
  ScrollTrigger2.getAll = function() {
    return _triggers.filter(function(t) {
      return t.vars.id !== "ScrollSmoother";
    });
  };
  ScrollTrigger2.isScrolling = function() {
    return !!_lastScrollTime;
  };
  ScrollTrigger2.snapDirectional = _snapDirectional;
  ScrollTrigger2.addEventListener = function(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  };
  ScrollTrigger2.removeEventListener = function(type, callback) {
    var a = _listeners[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  };
  ScrollTrigger2.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
      var elements = [], triggers = [], delay = gsap2.delayedCall(interval, function() {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function(self) {
        elements.length || delay.restart(true);
        elements.push(self.trigger);
        triggers.push(self);
        batchMax <= elements.length && delay.progress(1);
      };
    }, p;
    for (p in vars) {
      varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    }
    if (_isFunction(batchMax)) {
      batchMax = batchMax();
      _addListener3(ScrollTrigger2, "refresh", function() {
        return batchMax = vars.batchMax();
      });
    }
    _toArray(targets).forEach(function(target) {
      var config3 = {};
      for (p in varsCopy) {
        config3[p] = varsCopy[p];
      }
      config3.trigger = target;
      result.push(ScrollTrigger2.create(config3));
    });
    return result;
  };
  var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
  };
  var _allowNativePanning = function _allowNativePanning2(target, direction) {
    if (direction === true) {
      target.style.removeProperty("touch-action");
    } else {
      target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
    }
    target === _docEl2 && _allowNativePanning2(_body2, direction);
  };
  var _overflow = {
    auto: 1,
    scroll: 1
  };
  var _nestedScroll = function _nestedScroll2(_ref5) {
    var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap2.core.getCache(node), time = _getTime2(), cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
      while (node && node !== _body2 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
        node = node.parentNode;
      }
      cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
      cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
      event.stopPropagation();
      event._gsapAllow = true;
    }
  };
  var _inputObserver = function _inputObserver2(target, type, inputs, nested) {
    return Observer.create({
      target,
      capture: true,
      debounce: false,
      lockAxis: true,
      type,
      onWheel: nested = nested && _nestedScroll,
      onPress: nested,
      onDrag: nested,
      onScroll: nested,
      onEnable: function onEnable() {
        return inputs && _addListener3(_doc2, Observer.eventTypes[0], _captureInputs, false, true);
      },
      onDisable: function onDisable() {
        return _removeListener3(_doc2, Observer.eventTypes[0], _captureInputs, true);
      }
    });
  };
  var _inputExp = /(input|label|select|textarea)/i;
  var _inputIsFocused;
  var _captureInputs = function _captureInputs2(e) {
    var isInput = _inputExp.test(e.target.tagName);
    if (isInput || _inputIsFocused) {
      e._gsapAllow = true;
      _inputIsFocused = isInput;
    }
  };
  var _getScrollNormalizer = function _getScrollNormalizer2(vars) {
    _isObject(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self, maxY, target = _getTarget(vars.target) || _docEl2, smoother = gsap2.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win2.visualViewport ? _win2.visualViewport.scale * _win2.visualViewport.width : _win2.outerWidth) / _win2.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction(momentum) ? function() {
      return momentum(self);
    } : function() {
      return momentum || 2.8;
    }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
      return skipTouchMove = false;
    }, scrollClampX = _passThrough, scrollClampY = _passThrough, updateClamps = function updateClamps2() {
      maxY = _maxScroll(target, _vertical);
      scrollClampY = _clamp2(_fixIOSBug ? 1 : 0, maxY);
      normalizeScrollX && (scrollClampX = _clamp2(0, _maxScroll(target, _horizontal)));
      lastRefreshID = _refreshID;
    }, removeContentOffset = function removeContentOffset2() {
      content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
      content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
    }, ignoreDrag = function ignoreDrag2() {
      if (skipTouchMove) {
        requestAnimationFrame(resumeTouchMove);
        var offset = _round(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
        if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
          scrollFuncY.offset = scroll - scrollFuncY.v;
          var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
          content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
          content._gsap.y = y + "px";
          scrollFuncY.cacheID = _scrollers.cache;
          _updateAll();
        }
        return true;
      }
      scrollFuncY.offset && removeContentOffset();
      skipTouchMove = true;
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
      updateClamps();
      if (tween.isActive() && tween.vars.scrollY > maxY) {
        scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
      }
    };
    content && gsap2.set(content, {
      y: "+=0"
    });
    vars.ignoreCheck = function(e) {
      return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
    };
    vars.onPress = function() {
      skipTouchMove = false;
      var prevScale = scale;
      scale = _round((_win2.visualViewport && _win2.visualViewport.scale || 1) / initialScale);
      tween.pause();
      prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
      startScrollX = scrollFuncX();
      startScrollY = scrollFuncY();
      updateClamps();
      lastRefreshID = _refreshID;
    };
    vars.onRelease = vars.onGestureStart = function(self2, wasDragging) {
      scrollFuncY.offset && removeContentOffset();
      if (!wasDragging) {
        onStopDelayedCall.restart(true);
      } else {
        _scrollers.cache++;
        var dur = resolveMomentumDuration(), currentScroll, endScroll;
        if (normalizeScrollX) {
          currentScroll = scrollFuncX();
          endScroll = currentScroll + dur * 0.05 * -self2.velocityX / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
          tween.vars.scrollX = scrollClampX(endScroll);
        }
        currentScroll = scrollFuncY();
        endScroll = currentScroll + dur * 0.05 * -self2.velocityY / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
        tween.vars.scrollY = scrollClampY(endScroll);
        tween.invalidate().duration(dur).play(0.01);
        if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
          gsap2.to({}, {
            onUpdate: onResize,
            duration: dur
          });
        }
      }
      onRelease && onRelease(self2);
    };
    vars.onWheel = function() {
      tween._ts && tween.pause();
      if (_getTime2() - wheelRefresh > 1e3) {
        lastRefreshID = 0;
        wheelRefresh = _getTime2();
      }
    };
    vars.onChange = function(self2, dx, dy, xArray, yArray) {
      _refreshID !== lastRefreshID && updateClamps();
      dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self2.startX - self2.x) : scrollFuncX() + dx - xArray[1]));
      if (dy) {
        scrollFuncY.offset && removeContentOffset();
        var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self2.startY - self2.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
        isTouch && y !== yClamped && (startScrollY += yClamped - y);
        scrollFuncY(yClamped);
      }
      (dy || dx) && _updateAll();
    };
    vars.onEnable = function() {
      _allowNativePanning(target, normalizeScrollX ? false : "x");
      ScrollTrigger2.addEventListener("refresh", onResize);
      _addListener3(_win2, "resize", onResize);
      if (scrollFuncY.smooth) {
        scrollFuncY.target.style.scrollBehavior = "auto";
        scrollFuncY.smooth = scrollFuncX.smooth = false;
      }
      inputObserver.enable();
    };
    vars.onDisable = function() {
      _allowNativePanning(target, true);
      _removeListener3(_win2, "resize", onResize);
      ScrollTrigger2.removeEventListener("refresh", onResize);
      inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self = new Observer(vars);
    self.iOS = _fixIOSBug;
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
    _fixIOSBug && gsap2.ticker.add(_passThrough);
    onStopDelayedCall = self._dc;
    tween = gsap2.to(self, {
      ease: "power4",
      paused: true,
      inherit: false,
      scrollX: normalizeScrollX ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
          return tween.pause();
        })
      },
      onUpdate: _updateAll,
      onComplete: onStopDelayedCall.vars.onComplete
    });
    return self;
  };
  ScrollTrigger2.sort = function(func) {
    if (_isFunction(func)) {
      return _triggers.sort(func);
    }
    var scroll = _win2.pageYOffset || 0;
    ScrollTrigger2.getAll().forEach(function(t) {
      return t._sortY = t.trigger ? scroll + t.trigger.getBoundingClientRect().top : t.start + _win2.innerHeight;
    });
    return _triggers.sort(func || function(a, b) {
      return (a.vars.refreshPriority || 0) * -1e6 + (a.vars.containerAnimation ? 1e6 : a._sortY) - ((b.vars.containerAnimation ? 1e6 : b._sortY) + (b.vars.refreshPriority || 0) * -1e6);
    });
  };
  ScrollTrigger2.observe = function(vars) {
    return new Observer(vars);
  };
  ScrollTrigger2.normalizeScroll = function(vars) {
    if (typeof vars === "undefined") {
      return _normalizer2;
    }
    if (vars === true && _normalizer2) {
      return _normalizer2.enable();
    }
    if (vars === false) {
      _normalizer2 && _normalizer2.kill();
      _normalizer2 = vars;
      return;
    }
    var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
    _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
    _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
    return normalizer;
  };
  ScrollTrigger2.core = {
    // smaller file size way to leverage in ScrollSmoother and Observer
    _getVelocityProp,
    _inputObserver,
    _scrollers,
    _proxies,
    bridge: {
      // when normalizeScroll sets the scroll position (ss = setScroll)
      ss: function ss() {
        _lastScrollTime || _dispatch("scrollStart");
        _lastScrollTime = _getTime2();
      },
      // a way to get the _refreshing value in Observer
      ref: function ref() {
        return _refreshing;
      }
    }
  };
  _getGSAP3() && gsap2.registerPlugin(ScrollTrigger2);

  // node_modules/gsap/gsap-core.js
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  };
  var _defaults2 = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  };
  var _suppressOverwrites2;
  var _reverting;
  var _context3;
  var _bigNum = 1e8;
  var _tinyNum = 1 / _bigNum;
  var _2PI = Math.PI * 2;
  var _HALF_PI = _2PI / 4;
  var _gsID = 0;
  var _sqrt = Math.sqrt;
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _isString3 = function _isString4(value) {
    return typeof value === "string";
  };
  var _isFunction3 = function _isFunction4(value) {
    return typeof value === "function";
  };
  var _isNumber3 = function _isNumber4(value) {
    return typeof value === "number";
  };
  var _isUndefined = function _isUndefined2(value) {
    return typeof value === "undefined";
  };
  var _isObject3 = function _isObject4(value) {
    return typeof value === "object";
  };
  var _isNotFalse = function _isNotFalse2(value) {
    return value !== false;
  };
  var _windowExists3 = function _windowExists4() {
    return typeof window !== "undefined";
  };
  var _isFuncOrString = function _isFuncOrString2(value) {
    return _isFunction3(value) || _isString3(value);
  };
  var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  };
  var _isArray = Array.isArray;
  var _randomExp = /random\([^)]+\)/g;
  var _commaDelimExp = /,\s*/g;
  var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
  var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var _relExp = /[+-]=-?[.\d]+/;
  var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
  var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var _globalTimeline;
  var _win3;
  var _coreInitted3;
  var _doc3;
  var _globals = {};
  var _installScope = {};
  var _coreReady;
  var _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap3;
  };
  var _missingPlugin = function _missingPlugin2(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  };
  var _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  };
  var _addGlobal = function _addGlobal2(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  };
  var _emptyFunc = function _emptyFunc2() {
    return 0;
  };
  var _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  };
  var _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  };
  var _revertConfig = {
    suppressEvents: true
  };
  var _reservedProps = {};
  var _lazyTweens = [];
  var _lazyLookup = {};
  var _lastRenderedFrame;
  var _plugins = {};
  var _effects = {};
  var _nextGCFrame = 30;
  var _harnessPlugins = [];
  var _callbackNames = "";
  var _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject3(target) || _isFunction3(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i = _harnessPlugins.length;
      while (i-- && !_harnessPlugins[i].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }
    return targets;
  };
  var _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  };
  var _getProperty = function _getProperty2(target, property, v) {
    return (v = target[property]) && _isFunction3(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  };
  var _forEachName = function _forEachName2(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  };
  var _round3 = function _round4(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _roundPrecise = function _roundPrecise2(value) {
    return Math.round(value * 1e7) / 1e7 || 0;
  };
  var _parseRelative = function _parseRelative2(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  };
  var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l = toFind.length, i = 0;
    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
    }
    return i < l;
  };
  var _lazyRender = function _lazyRender2() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _isRevertWorthy = function _isRevertWorthy2(animation) {
    return !!(animation._initted || animation._startAt || animation.add);
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || !!(_reverting && time < 0 && _isRevertWorthy(animation)));
    _lazyTweens.length && !_reverting && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString3(value) ? value.trim() : value;
  };
  var _passThrough3 = function _passThrough4(p) {
    return p;
  };
  var _setDefaults3 = function _setDefaults4(obj, defaults3) {
    for (var p in defaults3) {
      p in obj || (obj[p] = defaults3[p]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults3) {
      for (var p in defaults3) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults3[p]);
      }
    };
  };
  var _merge = function _merge2(base2, toMerge) {
    for (var p in toMerge) {
      base2[p] = toMerge[p];
    }
    return base2;
  };
  var _mergeDeep = function _mergeDeep2(base2, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base2[p] = _isObject3(toMerge[p]) ? _mergeDeep2(base2[p] || (base2[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base2;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy2 = {}, p;
    for (p in obj) {
      p in excluding || (copy2[p] = obj[p]);
    }
    return copy2;
  };
  var _inheritDefaults = function _inheritDefaults2(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults3;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  };
  var _arraysMatch = function _arraysMatch2(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while (match && i-- && a1[i] === a2[i]) {
    }
    return i < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t;
    if (sortBy) {
      t = child[sortBy];
      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  };
  var _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  };
  var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  };
  var _uncache = function _uncache2(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  };
  var _recacheAncestors = function _recacheAncestors2(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  };
  var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  };
  var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  };
  var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  };
  var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
    return tTime && whole === tTime ? whole - 1 : whole;
  };
  var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  };
  var _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  };
  var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  };
  var _postAddChecks = function _postAddChecks2(timeline2, child) {
    var t;
    if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
      t = _parentToChildTotalTime(timeline2.rawTime(), child);
      if (!child._dur || _clamp3(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }
    if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t = timeline2;
        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }
      timeline2._zTime = -_tinyNum;
    }
  };
  var _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber3(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition3(timeline2, position, child) : timeline2._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline2._recent = child);
    skipChecks || _postAddChecks(timeline2, child);
    timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
    return timeline2;
  };
  var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  };
  var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  };
  var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
  };
  var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  };
  var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp3(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback3(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback3(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback3(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  };
  var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  };
  var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  };
  var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  };
  var _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  };
  var _parsePosition3 = function _parsePosition4(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
    if (_isString3(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i > 1 ? _parsePosition4(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  };
  var _createTweenType = function _createTweenType2(type, params, timeline2) {
    var isLegacy = _isNumber3(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline2;
    if (type) {
      irVars = vars;
      parent = timeline2;
      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  };
  var _conditionalReturn = function _conditionalReturn2(value, func) {
    return value || value === 0 ? func(value) : func;
  };
  var _clamp3 = function _clamp4(min, max, value) {
    return value < min ? min : value > max ? max : value;
  };
  var getUnit = function getUnit2(value, v) {
    return !_isString3(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  };
  var clamp = function clamp2(min, max, value) {
    return _conditionalReturn(value, function(v) {
      return _clamp3(min, max, v);
    });
  };
  var _slice = [].slice;
  var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
    return value && _isObject3(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject3(value[0])) && !value.nodeType && value !== _win3;
  };
  var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value) {
      var _accumulator;
      return _isString3(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  };
  var toArray = function toArray2(value, scope, leaveStrings) {
    return _context3 && !scope && _context3.selector ? _context3.selector(value) : _isString3(value) && !leaveStrings && (_coreInitted3 || !_wake()) ? _slice.call((scope || _doc3).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  };
  var selector = function selector2(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc3.createElement("div") : value);
    };
  };
  var shuffle = function shuffle2(a) {
    return a.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var distribute = function distribute2(v) {
    if (_isFunction3(v)) {
      return v;
    }
    var vars = _isObject3(v) ? v : {
      each: v
    }, ease = _parseEase(vars.ease), from2 = vars.from || 0, base2 = parseFloat(vars.base) || 0, cache = {}, isDecimal = from2 > 0 && from2 < 1, ratios = isNaN(from2) || isDecimal, axis = vars.axis, ratioX = from2, ratioY = from2;
    if (_isString3(from2)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from2] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from2[0];
      ratioY = from2[1];
    }
    return function(i, target, a) {
      var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
          }
          wrapAt < l && wrapAt--;
        }
        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from2 % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from2 / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from2 === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from2 === "edges" ? -1 : 1);
        distances.b = l < 0 ? base2 - l : base2;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }
      l = (distances[i] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function(raw) {
      var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
      return (n - n % 1) / p + (_isNumber3(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject3(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber3(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction3(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber3(raw) ? closest : closest + getUnit(raw);
    });
  };
  var random = function random2(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  };
  var pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value) {
      return functions.reduce(function(v, f) {
        return f(v);
      }, value);
    };
  };
  var unitize = function unitize2(func, unit) {
    return function(value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  };
  var normalize2 = function normalize3(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  };
  var _wrapArray = function _wrapArray2(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
      return a[~~wrapper(index)];
    });
  };
  var wrap2 = function wrap3(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap3(0, min.length), max) : _conditionalReturn(value, function(value2) {
      return (range + (value2 - min) % range) % range + min;
    });
  };
  var wrapYoyo = function wrapYoyo2(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
      value2 = (total + (value2 - min) % total) % total || 0;
      return min + (value2 > range ? total - value2 : value2);
    });
  };
  var _replaceRandom = function _replaceRandom2(s) {
    return s.replace(_randomExp, function(match) {
      var arIndex = match.indexOf("[") + 1, values = match.substring(arIndex || 7, arIndex ? match.indexOf("]") : match.length - 1).split(_commaDelimExp);
      return random(arIndex ? values : +values[0], arIndex ? 0 : +values[1], +values[2] || 1e-5);
    });
  };
  var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value2) {
      return outMin + ((value2 - inMin) / inRange * outRange || 0);
    });
  };
  var interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p2) {
      return (1 - p2) * start + p2 * end;
    };
    if (!func) {
      var isString = _isString3(start), master = {}, p, i, interpolators, l, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;
        for (i = 1; i < l; i++) {
          interpolators.push(interpolate2(start[i - 1], start[i]));
        }
        l--;
        func = function func2(p2) {
          p2 *= l;
          var i2 = Math.min(il, ~~p2);
          return interpolators[i2](p2 - i2);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func2(p2) {
          return _renderPropTweens(p2, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  };
  var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
    var labels = timeline2.labels, min = _bigNum, p, distance, label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }
    return label;
  };
  var _callback3 = function _callback4(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context3, context3 = animation._ctx, params, scope, result;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context3 && (_context3 = context3);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context3 = prevContext;
    return result;
  };
  var _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback3(animation, "onInterrupt");
    return animation;
  };
  var _quickTween;
  var _registerPluginQueue = [];
  var _createPlugin = function _createPlugin2(config3) {
    if (!config3) return;
    config3 = !config3.name && config3["default"] || config3;
    if (_windowExists3() || config3.headless) {
      var name = config3.name, isFunc = _isFunction3(config3), Plugin2 = name && !isFunc && config3.init ? function() {
        this._props = [];
      } : config3, instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };
      _wake();
      if (config3 !== Plugin2) {
        if (_plugins[name]) {
          return;
        }
        _setDefaults3(Plugin2, _setDefaults3(_copyExcluding(config3, instanceDefaults), statics));
        _merge(Plugin2.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
        _plugins[Plugin2.prop = name] = Plugin2;
        if (config3.targetTest) {
          _harnessPlugins.push(Plugin2);
          _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
      }
      _addGlobal(name, Plugin2);
      config3.register && config3.register(gsap3, Plugin2, PropTween);
    } else {
      _registerPluginQueue.push(config3);
    }
  };
  var _255 = 255;
  var _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  };
  var _hue = function _hue2(h2, m1, m2) {
    h2 += h2 < 0 ? 1 : h2 > 1 ? -1 : 0;
    return (h2 * 6 < 1 ? m1 + (m2 - m1) * h2 * 6 : h2 < 0.5 ? m2 : h2 * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h2) * 6 : m1) * _255 + 0.5 | 0;
  };
  var splitColor = function splitColor2(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber3(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h2, s, l, max, min, d, wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h2 = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h2 + 1 / 3, r, g);
          a[1] = _hue(h2, r, g);
          a[2] = _hue(h2 - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        h2 = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h2 = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h2 *= 60;
      }
      a[0] = ~~(h2 + 0.5);
      a[1] = ~~(s * 100 + 0.5);
      a[2] = ~~(l * 100 + 0.5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  };
  var _colorOrderData = function _colorOrderData2(v) {
    var values = [], c = [], i = -1;
    v.split(_colorExp).forEach(function(v2) {
      var a = v2.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  };
  var _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) {
      return s;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;
      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }
    return result + shell[l];
  };
  var _colorExp = (function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }
    return new RegExp(s + ")", "gi");
  })();
  var _hslExp = /hsl[a]?\(/;
  var _colorStringFilter = function _colorStringFilter2(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  };
  var _tickerActive;
  var _ticker = (function() {
    var _getTime3 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime3(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
      var elapsed = _getTime3() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
      (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id = _req(_tick2));
      if (dispatch) {
        for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
          _listeners3[_i2](time, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted3 && _windowExists3()) {
            _win3 = _coreInitted3 = window;
            _doc3 = _win3.document || {};
            _globals.gsap = gsap3;
            (_win3.gsapVersions || (_win3.gsapVersions = [])).push(gsap3.version);
            _install(_installScope || _win3.GreenSockGlobals || !_win3.gsap && _win3 || {});
            _registerPluginQueue.forEach(_createPlugin);
          }
          _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
          _id && _self.sleep();
          _req = _raf || function(f) {
            return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity;
        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function(t, d, f, v) {
          callback(t, d, f, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners3[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove(callback, i) {
        ~(i = _listeners3.indexOf(callback)) && _listeners3.splice(i, 1) && _i2 >= i && _i2--;
      },
      _listeners: _listeners3
    };
    return _self;
  })();
  var _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  };
  var _easeMap = {};
  var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
  var _quotesExp = /["']/g;
  var _parseObjectInString = function _parseObjectInString2(value) {
    var obj = {}, split2 = value.substr(1, value.length - 3).split(":"), key = split2[0], i = 1, l = split2.length, index, val, parsedVal;
    for (; i < l; i++) {
      val = split2[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  };
  var _valueInParentheses = function _valueInParentheses2(value) {
    var open = value.indexOf("(") + 1, close2 = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close2 ? value.indexOf(")", close2 + 1) : close2);
  };
  var _configEaseFromString = function _configEaseFromString2(name) {
    var split2 = (name + "").split("("), ease = _easeMap[split2[0]];
    return ease && split2.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split2[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  };
  var _invertEase = function _invertEase2(ease) {
    return function(p) {
      return 1 - ease(1 - p);
    };
  };
  var _parseEase = function _parseEase2(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction3(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  };
  var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut2(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
      easeIn,
      easeOut,
      easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  };
  var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
    return function(p) {
      return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
    };
  };
  var _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease;
  };
  var _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut2(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function(p) {
      return Math.pow(p, power);
    } : function(p) {
      return p;
    }, function(p) {
      return 1 - Math.pow(1 - p, power);
    }, function(p) {
      return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p) {
    return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
  });
  _insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
  });
  _insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function(p) {
        return ((p2 * _clamp3(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults2.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ (function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      if (_context3) {
        this._ctx = _context3;
        _context3.data.push(this);
      }
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !this._initted && this._dur && _totalTime || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value, suppressEvents) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp3(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);
      _setEnd(this);
      return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = _roundPrecise(value);
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, this._start - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config3) {
      if (config3 === void 0) {
        config3 = _revertConfig;
      }
      var prevIsReverting = _reverting;
      _reverting = config3;
      if (_isRevertWorthy(this)) {
        this.timeline && this.timeline.revert(config3);
        this.totalTime(-0.01, config3.suppressEvents);
      }
      this.data !== "nested" && config3.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (Math.abs(animation._ts) || 1);
        animation = animation._dp;
      }
      return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition3(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
      this._dur || (this._zTime = -_tinyNum);
      return this;
    };
    _proto.play = function play(from2, suppressEvents) {
      from2 != null && this.seek(from2, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from2, suppressEvents) {
      from2 != null && this.seek(from2 || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive2() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self = this, prevProm = self._prom;
      return new Promise(function(resolve) {
        var f = _isFunction3(onFulfilled) ? onFulfilled : _passThrough3, _resolve = function _resolve2() {
          var _then = self.then;
          self.then = null;
          prevProm && prevProm();
          _isFunction3(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };
        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation2;
  })();
  _setDefaults3(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ (function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from2(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition3(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition3(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            prevIteration = _roundPrecise(tTime / cycleDuration);
            iteration = ~~prevIteration;
            if (iteration && iteration === prevIteration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback3(this, "onRepeat");
            if (this.vars.repeatRefresh && !isYoyo) {
              this.invalidate()._lock = 1;
              prevIteration = iteration;
            }
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !!timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && tTime && dur && !suppressEvents && !prevIteration) {
          _callback3(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && _isRevertWorthy(child));
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback3(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback3(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber3(position) || (position = _parsePosition3(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString3(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction3(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a;
    };
    _proto2.getById = function getById2(id) {
      var animations = this.getChildren(1, 1, 1), i = animations.length;
      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString3(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction3(child)) {
        return this.killTweensOf(child);
      }
      child.parent === this && _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition3(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition3(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition3(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
      var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber3(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }
        child = child._next;
      }
      return a;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition3(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults3({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults3({
        startAt: {
          time: _parsePosition3(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition3(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition3(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p;
      amount = _roundPrecise(amount);
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate(soft);
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }
      if (self._dirty) {
        parent = self.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += _roundPrecise(start / self._ts);
              self._time -= start;
              self._tTime -= start;
            }
            self.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
        self._dirty = 0;
      }
      return self._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  })(Animation);
  _setDefaults3(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  };
  var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction3(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction3(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction3(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction3(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString3(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  };
  var _processVars = function _processVars2(vars, index, target, targets, tween) {
    _isFunction3(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject3(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString3(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy2 = {}, p;
    for (p in vars) {
      copy2[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy2;
  };
  var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;
        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _forceAllPropTweens;
  var _initTween = function _initTween2(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites2, tl = tween.timeline, reverseEase = vars.easeReverse || yoyoEase, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults2.ease);
    tween._rEase = reverseEase && (_parseEase(reverseEase) || tween._ease);
    tween._from = !tl && !!vars.runBackwards;
    if (tween._from) tween.ratio = 1;
    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults3({
          data: "isStart",
          overwrite: false,
          parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate && function() {
            return _callback3(tween, "onUpdate");
          },
          stagger: 0
        }, startAt)));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p = _setDefaults3({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent
            //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  };
  var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i = tween._targets.length;
      while (i--) {
        pt = lookup[i][property];
        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;
          while (pt && pt.p !== property && pt.fp !== property) {
            pt = pt._next;
          }
        }
        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return skipRecursion ? _warn(property + " not eligible for reset. Try splitting into individual properties") : 1;
        }
        ptCache.push(pt);
      }
    }
    i = ptCache.length;
    while (i--) {
      rootPT = ptCache[i];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round3(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy2, p, i, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy2 = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy2) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while (i--) {
          copy2[aliases[i]] = copy2[p];
        }
      }
    }
    return copy2;
  };
  var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value, i) {
        return a.push({
          t: i / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  };
  var _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
    return _isFunction3(value) ? value.call(tween, i, target, targets) : _isString3(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  };
  var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert";
  var _staggerPropsToSkip = {};
  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
  });
  var Tween = /* @__PURE__ */ (function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults3 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber3(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy2, l, p, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        var easeReverse = vars.easeReverse || vars.yoyoEase;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults3 || {},
          targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject3(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }
          for (i = 0; i < l; i++) {
            copy2 = _copyExcluding(vars, _staggerPropsToSkip);
            copy2.stagger = 0;
            easeReverse && (copy2.easeReverse = easeReverse);
            staggerVarsToMerge && _merge(copy2, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy2.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy2.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l === 1 && copy2.delay) {
              _this3._delay = delay = copy2.delay;
              _this3._start += delay;
              copy2.delay = 0;
            }
            tl.to(curTarget, copy2, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults3(tl.vars.defaults, {
            ease: "none"
          }));
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0, a, kf, v;
          if (_isArray(keyframes)) {
            keyframes.forEach(function(frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy2 = {};
            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy2, keyframes.easeEach);
            }
            for (p in copy2) {
              a = copy2[p].sort(function(a2, b) {
                return a2.t - b.t;
              });
              time = 0;
              for (i = 0; i < a.length; i++) {
                kf = a[i];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }
            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites2) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay) || 0);
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
        time = tTime;
        timeline2 = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            prevIteration = _roundPrecise(tTime / cycleDuration);
            iteration = ~~prevIteration;
            if (iteration && iteration === prevIteration) {
              time = dur;
              iteration--;
            } else if (time > dur) {
              time = dur;
            }
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) time = dur - time;
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted && iteration === prevIteration) {
            this._tTime = tTime;
            return this;
          }
          if (iteration !== prevIteration) {
            if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }
          if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        if (this._rEase) {
          var inv = time < prevTime;
          if (inv !== this._inv) {
            var segDur = inv ? prevTime : dur - prevTime;
            this._inv = inv;
            if (this._from) this.ratio = 1 - this.ratio;
            this._invRatio = this.ratio;
            this._invTime = prevTime;
            this._invRecip = segDur ? (inv ? -1 : 1) / segDur : 0;
            this._invScale = inv ? -this.ratio : 1 - this.ratio;
            this._invEase = inv ? this._rEase : this._ease;
          }
          this.ratio = ratio = this._invRatio + this._invScale * this._invEase((time - this._invTime) * this._invRecip);
        } else {
          this.ratio = ratio = this._ease(time / dur);
        }
        if (this._from) this.ratio = ratio = 1 - ratio;
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        if (!prevTime && tTime && !suppressEvents && !prevIteration) {
          _callback3(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline2 && timeline2.render(totalTime < 0 ? totalTime : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
          _callback3(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback3(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback3(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);
      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
        return this.resetTo(property, value, start, startIsRelative, 1);
      }
      _alignPlayhead(this, 0);
      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting);
        return this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString3(vars)) {
          p = {};
          _forEachName(vars, function(name) {
            return p[name] = 1;
          });
          vars = p;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i = parsedTargets.length;
      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];
          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }
          for (p in props) {
            pt = curLookup && curLookup[p];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from2(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  })(Animation);
  _setDefaults3(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
    return target[property] = value;
  };
  var _setterFunc = function _setterFunc2(target, property, value) {
    return target[property](value);
  };
  var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
    return target[property](data.fp, value);
  };
  var _setterAttribute = function _setterAttribute2(target, property, value) {
    return target.setAttribute(property, value);
  };
  var _getSetter = function _getSetter2(target, property) {
    return _isFunction3(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  };
  var _renderPlain = function _renderPlain2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
  };
  var _renderBoolean = function _renderBoolean2(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  };
  var _renderComplexString = function _renderComplexString2(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
        pt = pt._next;
      }
      s += data.c;
    }
    data.set(data.t, data.p, s, data);
  };
  var _renderPropTweens = function _renderPropTweens2(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  };
  var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  };
  var _killPropTweensOf = function _killPropTweensOf2(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  };
  var _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  };
  var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
    var pt = parent._pt, next, pt2, first2, last;
    while (pt) {
      next = pt._next;
      pt2 = first2;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first2 = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first2;
  };
  var PropTween = /* @__PURE__ */ (function() {
    function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween2.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween2;
  })();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults2,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _media = [];
  var _listeners2 = {};
  var _emptyArray2 = [];
  var _lastMediaTime = 0;
  var _contextID = 0;
  var _dispatch3 = function _dispatch4(type) {
    return (_listeners2[type] || _emptyArray2).map(function(f) {
      return f();
    });
  };
  var _onMediaChange = function _onMediaChange2() {
    var time = Date.now(), matches2 = [];
    if (time - _lastMediaTime > 2) {
      _dispatch3("matchMediaInit");
      _media.forEach(function(c) {
        var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
        for (p in queries) {
          match = _win3.matchMedia(queries[p]).matches;
          match && (anyMatch = 1);
          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c.revert();
          anyMatch && matches2.push(c);
        }
      });
      _dispatch3("matchMediaRevert");
      matches2.forEach(function(c) {
        return c.onMatch(c, function(func) {
          return c.add(null, func);
        });
      });
      _lastMediaTime = time;
      _dispatch3("matchMedia");
    }
  };
  var Context = /* @__PURE__ */ (function() {
    function Context2(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      this.id = _contextID++;
      func && this.add(func);
    }
    var _proto5 = Context2.prototype;
    _proto5.add = function add(name, func, scope) {
      if (_isFunction3(name)) {
        scope = func;
        func = name;
        name = _isFunction3;
      }
      var self = this, f = function f2() {
        var prev = _context3, prevSelector = self.selector, result;
        prev && prev !== self && prev.data.push(self);
        scope && (self.selector = selector(scope));
        _context3 = self;
        result = func.apply(self, arguments);
        _isFunction3(result) && self._r.push(result);
        _context3 = prev;
        self.selector = prevSelector;
        self.isReverted = false;
        return result;
      };
      self.last = f;
      return name === _isFunction3 ? f(self, function(func2) {
        return self.add(null, func2);
      }) : name ? self[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
      var prev = _context3;
      _context3 = null;
      func(this);
      _context3 = prev;
    };
    _proto5.getTweens = function getTweens() {
      var a = [];
      this.data.forEach(function(e) {
        return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
      });
      return a;
    };
    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia2) {
      var _this4 = this;
      if (revert) {
        (function() {
          var tweens = _this4.getTweens(), i2 = _this4.data.length, t;
          while (i2--) {
            t = _this4.data[i2];
            if (t.data === "isFlip") {
              t.revert();
              t.getChildren(true, true, false).forEach(function(tween) {
                return tweens.splice(tweens.indexOf(tween), 1);
              });
            }
          }
          tweens.map(function(t2) {
            return {
              g: t2._dur || t2._delay || t2._sat && !t2._sat.vars.immediateRender ? t2.globalTime(0) : -Infinity,
              t: t2
            };
          }).sort(function(a, b) {
            return b.g - a.g || -Infinity;
          }).forEach(function(o) {
            return o.t.revert(revert);
          });
          i2 = _this4.data.length;
          while (i2--) {
            t = _this4.data[i2];
            if (t instanceof Timeline) {
              if (t.data !== "nested") {
                t.scrollTrigger && t.scrollTrigger.revert();
                t.kill();
              }
            } else {
              !(t instanceof Tween) && t.revert && t.revert(revert);
            }
          }
          _this4._r.forEach(function(f) {
            return f(revert, _this4);
          });
          _this4.isReverted = true;
        })();
      } else {
        this.data.forEach(function(e) {
          return e.kill && e.kill();
        });
      }
      this.clear();
      if (matchMedia2) {
        var i = _media.length;
        while (i--) {
          _media[i].id === this.id && _media.splice(i, 1);
        }
      }
    };
    _proto5.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    return Context2;
  })();
  var MatchMedia = /* @__PURE__ */ (function() {
    function MatchMedia2(scope) {
      this.contexts = [];
      this.scope = scope;
      _context3 && _context3.data.push(this);
    }
    var _proto6 = MatchMedia2.prototype;
    _proto6.add = function add(conditions, func, scope) {
      _isObject3(conditions) || (conditions = {
        matches: conditions
      });
      var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
      _context3 && !context3.selector && (context3.selector = _context3.selector);
      this.contexts.push(context3);
      func = context3.add("onMatch", func);
      context3.queries = conditions;
      for (p in conditions) {
        if (p === "all") {
          active = 1;
        } else {
          mq = _win3.matchMedia(conditions[p]);
          if (mq) {
            _media.indexOf(context3) < 0 && _media.push(context3);
            (cond[p] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }
      active && func(context3, function(f) {
        return context3.add(null, f);
      });
      return this;
    };
    _proto6.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    _proto6.kill = function kill(revert) {
      this.contexts.forEach(function(c) {
        return c.kill(revert, true);
      });
    };
    return MatchMedia2;
  })();
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config3) {
        return _createPlugin(config3);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString3(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get, format = unit ? _passThrough3 : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function(property2, unit2, uncache2) {
        return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function(t) {
          return gsap3.quickSetter(t, property, unit);
        }), l = setters.length;
        return function(value) {
          var i = l;
          while (i--) {
            setters[i](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin2 = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin2 ? function(value) {
        var p2 = new Plugin2();
        _quickTween._pt = 0;
        p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p2.render(1, p2);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
      return Plugin2 ? setter : function(value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _setDefaults22;
      var tween = gsap3.to(target, _setDefaults3((_setDefaults22 = {}, _setDefaults22[property] = "+=0.1", _setDefaults22.paused = true, _setDefaults22.stagger = 0, _setDefaults22), vars || {})), func = function func2(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults2(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults2.ease));
      return _mergeDeep(_defaults2, value || {});
    },
    config: function config2(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults3 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function(targets, vars, tl) {
        return effect(toArray(targets), _setDefaults3(vars || {}, defaults3), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function(targets, vars, position) {
          return this.add(_effects[name](targets, _isObject3(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context3;
    },
    matchMedia: function matchMedia(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function(c) {
        var cond = c.conditions, found2, p;
        for (p in cond) {
          if (cond[p]) {
            cond[p] = false;
            found2 = 1;
          }
        }
        found2 && c.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a = _listeners2[type] || (_listeners2[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a = _listeners2[type], i = a && a.indexOf(callback);
      i >= 0 && a.splice(i, 1);
    },
    utils: {
      wrap: wrap2,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize: normalize2,
      getUnit,
      clamp,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context2(toAdd) {
        if (toAdd && _context3) {
          _context3.data.push(toAdd);
          toAdd._ctx = _context3;
        }
        return _context3;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites2 = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  };
  var _addModifiers = function _addModifiers2(tween, modifiers2) {
    var targets = tween._targets, p, i, pt;
    for (p in modifiers2) {
      i = targets.length;
      while (i--) {
        pt = tween._ptLookup[i][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers2[p], tween, targets[i], p);
        }
      }
    }
  };
  var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
    return {
      name,
      headless: 1,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init5(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p;
          if (_isString3(vars)) {
            temp = {};
            _forEachName(vars, function(name2) {
              return temp[name2] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap3 = _gsap.registerPlugin({
    name: "attr",
    init: function init2(target, vars, tween, index, targets) {
      var p, pt, v;
      this.tween = tween;
      for (p in vars) {
        v = target.getAttribute(p) || "";
        pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
        pt.op = p;
        pt.b = v;
        this._props.push(p);
      }
    },
    render: function render(ratio, data) {
      var pt = data._pt;
      while (pt) {
        _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }
  }, {
    name: "endArray",
    headless: 1,
    init: function init3(target, value) {
      var i = value.length;
      while (i--) {
        this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap3.version = "3.15.0";
  _coreReady = 1;
  _windowExists3() && _wake();
  var Power0 = _easeMap.Power0;
  var Power1 = _easeMap.Power1;
  var Power2 = _easeMap.Power2;
  var Power3 = _easeMap.Power3;
  var Power4 = _easeMap.Power4;
  var Linear = _easeMap.Linear;
  var Quad = _easeMap.Quad;
  var Cubic = _easeMap.Cubic;
  var Quart = _easeMap.Quart;
  var Quint = _easeMap.Quint;
  var Strong = _easeMap.Strong;
  var Elastic = _easeMap.Elastic;
  var Back = _easeMap.Back;
  var SteppedEase = _easeMap.SteppedEase;
  var Bounce = _easeMap.Bounce;
  var Sine = _easeMap.Sine;
  var Expo = _easeMap.Expo;
  var Circ = _easeMap.Circ;

  // node_modules/gsap/CSSPlugin.js
  var _win4;
  var _doc4;
  var _docElement;
  var _pluginInitted;
  var _tempDiv;
  var _tempDivStyler;
  var _recentSetterPlugin;
  var _reverting2;
  var _windowExists5 = function _windowExists6() {
    return typeof window !== "undefined";
  };
  var _transformProps = {};
  var _RAD2DEG = 180 / Math.PI;
  var _DEG2RAD = Math.PI / 180;
  var _atan2 = Math.atan2;
  var _bigNum2 = 1e8;
  var _capsExp2 = /([A-Z])/g;
  var _horizontalExp = /(left|right|width|margin|padding|x)/i;
  var _complexExp = /[\s,\(]\S/;
  var _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  };
  var _renderCSSProp = function _renderCSSProp2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  };
  var _renderCSSPropWithBeginningAndEnd = function _renderCSSPropWithBeginningAndEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  };
  var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
  };
  var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  };
  var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  };
  var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
    return target.style[property] = value;
  };
  var _setterCSSProp = function _setterCSSProp2(target, property, value) {
    return target.style.setProperty(property, value);
  };
  var _setterTransform = function _setterTransform2(target, property, value) {
    return target._gsap[property] = value;
  };
  var _setterScale = function _setterScale2(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  };
  var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  };
  var _transformProp2 = "transform";
  var _transformOriginProp = _transformProp2 + "Origin";
  var _saveStyle = function _saveStyle2(property, isNotCSS) {
    var _this = this;
    var target = this.target, style2 = target.style, cache = target._gsap;
    if (property in _transformProps && style2) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function(a) {
          return _this.tfm[a] = _get(target, a);
        }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
        property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
      } else {
        return _propertyAliases.transform.split(",").forEach(function(p) {
          return _saveStyle2.call(_this, p, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp2) >= 0) {
        return;
      }
      if (cache.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp2;
    }
    (style2 || isNotCSS) && this.props.push(property, isNotCSS, style2[property]);
  };
  var _removeIndependentTransforms = function _removeIndependentTransforms2(style2) {
    if (style2.translate) {
      style2.removeProperty("translate");
      style2.removeProperty("scale");
      style2.removeProperty("rotate");
    }
  };
  var _revertStyle = function _revertStyle2() {
    var props = this.props, target = this.target, style2 = target.style, cache = target._gsap, i, p;
    for (i = 0; i < props.length; i += 3) {
      if (!props[i + 1]) {
        props[i + 2] ? style2[props[i]] = props[i + 2] : style2.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp2, "-$1").toLowerCase());
      } else if (props[i + 1] === 2) {
        target[props[i]](props[i + 2]);
      } else {
        target[props[i]] = props[i + 2];
      }
    }
    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }
      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i = _reverting2();
      if ((!i || !i.isStart) && !style2[_transformProp2]) {
        _removeIndependentTransforms(style2);
        if (cache.zOrigin && style2[_transformOriginProp]) {
          style2[_transformOriginProp] += " " + cache.zOrigin + "px";
          cache.zOrigin = 0;
          cache.renderTransform();
        }
        cache.uncache = 1;
      }
    }
  };
  var _getStyleSaver = function _getStyleSaver2(target, properties) {
    var saver = {
      target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || gsap3.core.getCache(target);
    properties && target.style && target.nodeType && properties.split(",").forEach(function(p) {
      return saver.save(p);
    });
    return saver;
  };
  var _supports3D;
  var _createElement = function _createElement2(type, ns) {
    var e = _doc4.createElementNS ? _doc4.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc4.createElement(type);
    return e && e.style ? e : _doc4.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp2, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i-- && !(_prefixes[i] + property in s)) {
    }
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  };
  var _initCore3 = function _initCore4() {
    if (_windowExists5() && window.document) {
      _win4 = window;
      _doc4 = _win4.document;
      _docElement = _doc4.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp2 = _checkPropPrefix(_transformProp2);
      _transformOriginProp = _transformProp2 + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting2 = gsap3.core.reverting;
      _pluginInitted = 1;
    }
  };
  var _getReparentedCloneBBox = function _getReparentedCloneBBox2(target) {
    var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
    clone.style.display = "block";
    svg.appendChild(clone);
    _docElement.appendChild(svg);
    try {
      bbox = clone.getBBox();
    } catch (e) {
    }
    svg.removeChild(clone);
    _docElement.removeChild(svg);
    return bbox;
  };
  var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i = attributesArray.length;
    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  };
  var _getBBox = function _getBBox2(target) {
    var bounds, cloned;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getReparentedCloneBBox(target);
      cloned = 1;
    }
    bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  };
  var _isSVG = function _isSVG2(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  };
  var _removeProperty = function _removeProperty2(target, property) {
    if (property) {
      var style2 = target.style, first2Chars;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp2;
      }
      if (style2.removeProperty) {
        first2Chars = property.substr(0, 2);
        if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style2.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp2, "-$1").toLowerCase());
      } else {
        style2.removeAttribute(property);
      }
    }
  };
  var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  };
  var _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  };
  var _nonStandardLayouts = {
    grid: 1,
    flex: 1
  };
  var _convertToUnit = function _convertToUnit2(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style2 = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round3(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style2[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc4 || !parent.appendChild) {
      parent = _doc4.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
      return _round3(curValue / cache.width * amount);
    } else {
      if (toPercent && (property === "height" || property === "width")) {
        var v = target.style[property];
        target.style[property] = amount + unit;
        px = target[measureProperty];
        v ? target.style[property] = v : _removeProperty(target, property);
      } else {
        (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style2.position = _getComputedProperty(target, "position"));
        parent === target && (style2.position = "static");
        parent.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent.removeChild(_tempDiv);
        style2.position = "absolute";
      }
      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return _round3(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  };
  var _get = function _get2(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore3();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  };
  var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end.substring(0, 6) === "var(--") {
      end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
    }
    if (end === "auto") {
      startValue = target.style[prop];
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
    }
    a = [start, end];
    _colorStringFilter(a);
    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  };
  var _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  };
  var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
    var split2 = value.split(" "), x = split2[0], y = split2[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }
    split2[0] = _keywordToPercent[x] || x;
    split2[1] = _keywordToPercent[y] || y;
    return split2.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style2 = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
      if (props === "all" || props === true) {
        style2.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;
        while (--i > -1) {
          prop = props[i];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp2;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp2);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          style2.scale = style2.rotate = style2.translate = "none";
          _parseTransform(target, 1);
          cache.uncache = 1;
          _removeIndependentTransforms(style2);
        }
      }
    }
  };
  var _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  };
  var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
  var _rotationalProperties = {};
  var _isNullTransform = function _isNullTransform2(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  };
  var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp2);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round3);
  };
  var _getMatrix = function _getMatrix2(target, force2D) {
    var cache = target._gsap || _getCache(target), style2 = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style2.display;
      style2.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style2.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  };
  var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style2 = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style2[_transformProp2] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp2] !== "none" ? cs[_transformProp2] : "");
      }
      style2.scale = style2.rotate = style2.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      if (cache.uncache) {
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }
        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round3(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round3(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp2));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round3(scaleX);
    cache.scaleY = _round3(scaleY);
    cache.rotation = _round3(rotation) + deg;
    cache.rotationX = _round3(rotationX) + deg;
    cache.rotationY = _round3(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
      style2[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit = getUnit(start);
    return _round3(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp2] = transforms || "translate(0, 0)";
  };
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round3(a11);
      a21 = _round3(a21);
      a12 = _round3(a12);
      a22 = _round3(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round3(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round3(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round3(tx + xPercent / 100 * temp.width);
      ty = _round3(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp2] = temp);
  };
  var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = _isString3(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  };
  var _assign = function _assign2(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  };
  var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style2 = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style2[_transformProp2] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp2);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp2];
      style2[_transformProp2] = transforms;
      endCache = _parseTransform(target, 1);
      style2[_transformProp2] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
      var a, vars;
      if (arguments.length < 4) {
        a = props.map(function(prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore3,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init4(target, vars, tween, index, targets) {
      var props = this._props, style2 = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps, finalTransformValue;
      _pluginInitted || _initCore3();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
        endValue = vars[p];
        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
            endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          }
          this.add(style2, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
          inlineProps.push(p, 0, style2[p]);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            _isString3(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              inlineProps.push("visibility", 0, style2.visibility);
              _addNonTweeningPT(this, style2, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }
          isTransformRelated = p in _transformProps;
          if (isTransformRelated) {
            this.styles.save(p);
            finalTransformValue = endValue;
            if (type === "string" && endValue.substring(0, 6) === "var(--") {
              endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
              if (endValue.substring(0, 5) === "calc(") {
                var origPerspective = target.style.perspective;
                target.style.perspective = endValue;
                endValue = _getComputedProperty(target, "perspective");
                origPerspective ? target.style.perspective = origPerspective : _removeProperty(target, "perspective");
              }
              endNum = parseFloat(endValue);
            }
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style2, _transformProp2, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style2[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style2, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p in style2)) {
            p = _checkPropPrefix(p) || p;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style2) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style2, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (isTransformRelated && finalTransformValue !== endValue) {
              this._pt.b = startValue;
              this._pt.e = finalTransformValue;
              this._pt.r = _renderCSSPropWithBeginningAndEnd;
            } else if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style2)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
            } else if (p !== "parseTransform") {
              _missingPlugin(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          }
          isTransformRelated || (p in style2 ? inlineProps.push(p, 0, style2[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
          props.push(p);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render2(ratio, data) {
      if (data.tween._time || !_reverting2()) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap3.utils.checkPrefix = _checkPropPrefix;
  gsap3.core.getStyleSaver = _getStyleSaver;
  (function(positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function(name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function(name) {
      var split2 = name.split(":");
      _propertyAliases[split2[1]] = all[split2[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _config.units[name] = "px";
  });
  gsap3.registerPlugin(CSSPlugin);

  // node_modules/gsap/index.js
  var gsapWithCSS = gsap3.registerPlugin(CSSPlugin) || gsap3;
  var TweenMaxWithCSS = gsapWithCSS.core.Tween;

  // resources/ts/lib/scroll-animations/helpers.ts
  var pluginRegistered = false;
  var bottomRevealPlayed = /* @__PURE__ */ new WeakSet();
  function ensureGsapPlugins() {
    if (pluginRegistered) {
      return;
    }
    gsapWithCSS.registerPlugin(ScrollTrigger2);
    pluginRegistered = true;
  }
  function prefersReducedMotion() {
    return typeof window !== "undefined" && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function resolveAnimationClass(el) {
    for (const className of ANIMATION_CLASS_NAMES) {
      if (el.classList.contains(className)) {
        return className;
      }
    }
    const custom = Array.from(el.classList).find((name) => name in animationPresets);
    return custom ?? null;
  }
  function markInitialized(el) {
    el.setAttribute(INIT_ATTR, "1");
    el.classList.remove("nextora-scroll-animation--pending");
    el.classList.add("nextora-scroll-animation--ready");
  }
  function skipAnimation(el) {
    gsapWithCSS.set(el, { clearProps: "opacity,transform,translate,rotate,scale" });
    markInitialized(el);
  }
  function buildScrollTweenVars(el, options) {
    return {
      delay: options.delay,
      duration: options.duration,
      ease: options.ease,
      scrollTrigger: {
        trigger: el,
        start: DEFAULT_SCROLL_START,
        once: SCROLL_REVEAL_ONCE,
        id: SCROLL_REVEAL_TRIGGER_ID
      },
      onComplete: () => {
        gsapWithCSS.set(el, { clearProps: "opacity,transform,translate,rotate,scale" });
      }
    };
  }
  function initElementAnimations(el) {
    if (el.getAttribute(INIT_ATTR) === "1") {
      return;
    }
    const animationClass = resolveAnimationClass(el);
    const options = parseScrollAnimationOptions(el);
    const hasParallax = options.parallaxSpeed !== null;
    if (!animationClass && !hasParallax) {
      return;
    }
    el.setAttribute(INIT_ATTR, "1");
    if (prefersReducedMotion()) {
      skipAnimation(el);
      return;
    }
    ensureGsapPlugins();
    if (animationClass) {
      const factory = animationPresets[animationClass];
      if (!factory) {
        markInitialized(el);
      } else {
        const { from: from2, to } = factory({ distance: options.distance });
        const tweenVars = buildScrollTweenVars(el, options);
        if (options.stagger !== null && el.children.length > 0) {
          const targets = Array.from(el.children);
          el.classList.remove("nextora-scroll-animation--pending");
          targets.forEach((child) => child.classList.add("nextora-scroll-animation--pending"));
          gsapWithCSS.set(targets, from2);
          gsapWithCSS.to(targets, {
            ...to,
            ...tweenVars,
            stagger: options.stagger,
            onComplete: () => {
              targets.forEach((child) => {
                child.classList.remove("nextora-scroll-animation--pending");
                child.classList.add("nextora-scroll-animation--ready");
                gsapWithCSS.set(child, { clearProps: "opacity,transform,translate,rotate,scale" });
              });
            }
          });
        } else {
          gsapWithCSS.fromTo(el, from2, { ...to, ...tweenVars });
        }
      }
    }
    if (hasParallax && options.parallaxSpeed !== null) {
      const speed = options.parallaxSpeed;
      gsapWithCSS.to(el, {
        y: () => speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }
    markInitialized(el);
  }
  function getScrollerScrollTop(scroller) {
    if (scroller === window || scroller === document.documentElement) {
      return window.scrollY;
    }
    return scroller.scrollTop;
  }
  function resolveMaxScroll(scroller) {
    if (scroller === window || scroller === document.documentElement) {
      return ScrollTrigger2.maxScroll(window);
    }
    if (scroller instanceof HTMLElement) {
      return ScrollTrigger2.maxScroll(scroller);
    }
    return ScrollTrigger2.maxScroll(window);
  }
  function isAtPageBottom(scroller) {
    const maxScroll = resolveMaxScroll(scroller);
    const scrollTop = getScrollerScrollTop(scroller);
    return Math.abs(scrollTop - maxScroll) <= 2;
  }
  function playBottomReveal(st) {
    const tween = st.animation;
    if (!tween || st.progress > 0 || bottomRevealPlayed.has(tween)) {
      return;
    }
    bottomRevealPlayed.add(tween);
    st.kill(false);
    tween.play();
  }
  function revealBottomAnchoredTriggers() {
    if (prefersReducedMotion()) {
      return;
    }
    ScrollTrigger2.getAll().forEach((st) => {
      if (st.vars?.id !== SCROLL_REVEAL_TRIGGER_ID) {
        return;
      }
      const tween = st.animation;
      if (!tween || st.progress > 0 || bottomRevealPlayed.has(tween)) {
        return;
      }
      const scroller = st.scroller ?? window;
      if (!isAtPageBottom(scroller)) {
        return;
      }
      playBottomReveal(st);
    });
  }

  // resources/ts/lib/scroll-animations/scroll-animations.ts
  var observer = null;
  var debounceTimer = 0;
  var booted = false;
  function refreshScrollTriggers() {
    ScrollTrigger2.refresh();
    revealBottomAnchoredTriggers();
  }
  function collectTargets(root2 = document) {
    const selector3 = `${getAnimationSelector()}, ${PARALLAX_SELECTOR}`;
    const nodes = root2.querySelectorAll(selector3);
    return Array.from(nodes).filter((el) => {
      if (el.getAttribute(INIT_ATTR) === "1") {
        return false;
      }
      return resolveAnimationClass(el) !== null || parseScrollAnimationOptions(el).parallaxSpeed !== null;
    });
  }
  function markPending(el) {
    if (prefersReducedMotion() || resolveAnimationClass(el) === null) {
      return;
    }
    el.classList.add("nextora-scroll-animation--pending");
  }
  function scanScrollAnimations(root2 = document) {
    const targets = collectTargets(root2);
    if (!targets.length) {
      return 0;
    }
    ensureGsapPlugins();
    targets.forEach((el) => {
      markPending(el);
      initElementAnimations(el);
    });
    refreshScrollTriggers();
    return targets.length;
  }
  function scheduleRescan() {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(() => {
      if (scanScrollAnimations() > 0) {
        refreshScrollTriggers();
      }
    }, MUTATION_DEBOUNCE_MS);
  }
  function observeDynamicContent() {
    if (observer || typeof MutationObserver === "undefined") {
      return;
    }
    observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "childList" && record.addedNodes.length > 0) {
          scheduleRescan();
          return;
        }
        if (record.type === "attributes" && record.attributeName === "class") {
          scheduleRescan();
          return;
        }
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"]
    });
  }
  function configureScrollTrigger() {
    ensureGsapPlugins();
    ScrollTrigger2.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize"
    });
    ScrollTrigger2.addEventListener("scrollEnd", revealBottomAnchoredTriggers);
  }
  function onWindowLoad() {
    scanScrollAnimations();
    refreshScrollTriggers();
  }
  function initScrollAnimations() {
    const boot = () => {
      if (booted) {
        scanScrollAnimations();
        return;
      }
      booted = true;
      configureScrollTrigger();
      scanScrollAnimations();
      observeDynamicContent();
      window.addEventListener("load", onWindowLoad, { once: true });
    };
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", boot, { once: true });
    } else {
      boot();
    }
  }
  function attachScrollAnimationGlobals() {
    window.nextoraRegisterScrollAnimation = registerScrollAnimationPreset;
  }

  // resources/ts/header-sticky.ts
  var STICKY_SEL = ".nextora-header-block--sticky-always, .nextora-header-block--sticky-scroll-up";
  var SCROLL_UP_SEL = ".nextora-header-block--sticky-scroll-up";
  var HEADER_SHELL_SEL = "header.wp-block-template-part";
  var PINNED_CLASS = "nextora-header-block--is-pinned";
  var HIDDEN_CLASS = "nextora-header-block--scroll-hidden";
  var SPACER_CLASS = "nextora-header-block__sticky-spacer";
  var VAR_TOP = "--nextora-header-sticky-top";
  var VAR_LEFT = "--nextora-header-sticky-left";
  var VAR_WIDTH = "--nextora-header-sticky-width";
  var VAR_TRANSLATE_Y = "--nextora-header-sticky-translate-y";
  var SCROLL_DELTA = 6;
  var DEFAULT_HIDE_AFTER = 72;
  function getHeaderShell(block) {
    return block.closest(HEADER_SHELL_SEL) ?? block.closest("header") ?? block.parentElement ?? block;
  }
  function measurePinTop() {
    const bar = document.getElementById("wpadminbar");
    if (!bar || !document.body.classList.contains("admin-bar")) {
      return 0;
    }
    const rect = bar.getBoundingClientRect();
    if (rect.height <= 0 || rect.bottom <= 0) {
      return 0;
    }
    return Math.round(rect.bottom);
  }
  function measurePinScrollY(block, pinTop) {
    const top = block.getBoundingClientRect().top;
    return Math.max(0, Math.round(window.scrollY + top - pinTop));
  }
  function refreshPinScrollY(entry, pinTop) {
    if (entry.el.classList.contains(PINNED_CLASS)) {
      return;
    }
    entry.pinScrollY = measurePinScrollY(entry.el, pinTop);
  }
  function updateGeometry(entry, pinTop, refreshBox) {
    const { el, shell } = entry;
    el.style.setProperty(VAR_TOP, `${pinTop}px`);
    if (!refreshBox) {
      return;
    }
    const box = shell.getBoundingClientRect();
    el.style.setProperty(VAR_LEFT, `${Math.round(box.left)}px`);
    el.style.setProperty(VAR_WIDTH, `${Math.round(box.width)}px`);
  }
  function setPinned(entry, pinned) {
    const { el } = entry;
    const wasPinned = el.classList.contains(PINNED_CLASS);
    if (wasPinned === pinned) {
      if (pinned && entry.spacer) {
        entry.spacer.style.height = `${el.offsetHeight}px`;
      }
      return;
    }
    el.classList.toggle(PINNED_CLASS, pinned);
    if (pinned) {
      let spacer = entry.spacer;
      if (!spacer) {
        spacer = document.createElement("div");
        spacer.className = SPACER_CLASS;
        spacer.setAttribute("aria-hidden", "true");
        el.insertAdjacentElement("beforebegin", spacer);
        entry.spacer = spacer;
      }
      spacer.style.height = `${el.offsetHeight}px`;
      return;
    }
    el.classList.remove(HIDDEN_CLASS);
    el.style.setProperty(VAR_TRANSLATE_Y, "0px");
    if (entry.spacer) {
      entry.spacer.remove();
      entry.spacer = null;
    }
  }
  function setHidden(entry, hidden) {
    const { el } = entry;
    el.classList.toggle(HIDDEN_CLASS, hidden);
    el.style.setProperty(VAR_TRANSLATE_Y, hidden ? `${-el.offsetHeight}px` : "0px");
  }
  function collectEntries() {
    return Array.from(document.querySelectorAll(STICKY_SEL)).map(
      (el) => ({
        el,
        shell: getHeaderShell(el),
        spacer: null,
        pinScrollY: 0
      })
    );
  }
  function initHeaderSticky() {
    const entries = collectEntries();
    if (!entries.length) {
      return;
    }
    const scrollUpEntries = entries.filter(
      (entry) => entry.el.matches(SCROLL_UP_SEL)
    );
    const raw = window.nextoraHeaderSticky?.hideAfter;
    const hideAfter = typeof raw === "number" && Number.isFinite(raw) && raw >= 0 ? raw : DEFAULT_HIDE_AFTER;
    const hiddenState = /* @__PURE__ */ new Map();
    let lastY = window.scrollY;
    let ticking = false;
    const syncLayout = () => {
      const pinTop = measurePinTop();
      for (const entry of entries) {
        refreshPinScrollY(entry, pinTop);
        const pinned = window.scrollY >= entry.pinScrollY - 1;
        updateGeometry(entry, pinTop, !pinned);
        setPinned(entry, pinned);
        if (hiddenState.get(entry)) {
          setHidden(entry, true);
        }
      }
    };
    const applyScroll = () => {
      ticking = false;
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;
      const pinTop = measurePinTop();
      for (const entry of entries) {
        refreshPinScrollY(entry, pinTop);
        const pinned = y >= entry.pinScrollY - 1;
        const wasPinned = entry.el.classList.contains(PINNED_CLASS);
        updateGeometry(entry, pinTop, !pinned || !wasPinned);
        setPinned(entry, pinned);
        if (!pinned) {
          hiddenState.set(entry, false);
        }
      }
      for (const entry of scrollUpEntries) {
        if (!entry.el.classList.contains(PINNED_CLASS)) {
          setHidden(entry, false);
          continue;
        }
        const hideThreshold = entry.pinScrollY + hideAfter;
        if (y < hideThreshold) {
          hiddenState.set(entry, false);
          setHidden(entry, false);
          continue;
        }
        if (delta > SCROLL_DELTA) {
          hiddenState.set(entry, true);
          setHidden(entry, true);
        } else if (delta < -SCROLL_DELTA) {
          hiddenState.set(entry, false);
          setHidden(entry, false);
        }
      }
    };
    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      requestAnimationFrame(applyScroll);
    };
    for (const entry of scrollUpEntries) {
      setHidden(entry, false);
    }
    syncLayout();
    applyScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener(
      "resize",
      () => {
        lastY = window.scrollY;
        syncLayout();
      },
      { passive: true }
    );
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(() => syncLayout());
      for (const entry of entries) {
        ro.observe(entry.el);
        ro.observe(entry.shell);
      }
      const adminBar = document.getElementById("wpadminbar");
      if (adminBar) {
        ro.observe(adminBar);
      }
    }
  }

  // resources/ts/header-nav.ts
  var DESKTOP_MQ = "(min-width: 768px)";
  var OFFCANVAS_DUR_S = 0.4;
  var PORTAL_CLOSE_MS = Math.round(OFFCANVAS_DUR_S * 1e3) + 80;
  var FOCUS_AFTER_OPEN_MS = 80;
  var OPEN_BACKDROP_GUARD_MS = 500;
  function prefersReducedMotion2() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function portalPanelOffscreenXPercent() {
    const d = document.documentElement.getAttribute("dir") || document.body.getAttribute("dir") || "";
    return d.toLowerCase() === "rtl" ? -100 : 100;
  }
  function killPortalGsap(p) {
    gsapWithCSS.killTweensOf([p.backdrop, p.panel]);
  }
  function runPortalOpenGsap(p) {
    killPortalGsap(p);
    const offX = portalPanelOffscreenXPercent();
    p.root.classList.add("nextora-primary-nav-portal--gsap");
    p.root.classList.add("nextora-primary-nav-portal--open");
    gsapWithCSS.set(p.backdrop, { opacity: 0 });
    gsapWithCSS.set(p.panel, { xPercent: offX, force3D: true });
    gsapWithCSS.timeline({ defaults: { ease: "power2.out" } }).to(p.backdrop, { opacity: 1, duration: OFFCANVAS_DUR_S }, 0).to(p.panel, { xPercent: 0, duration: OFFCANVAS_DUR_S }, 0);
  }
  function runPortalCloseGsap(p, onDone) {
    killPortalGsap(p);
    const offX = portalPanelOffscreenXPercent();
    gsapWithCSS.to(p.backdrop, { opacity: 0, duration: OFFCANVAS_DUR_S, ease: "power2.in" });
    gsapWithCSS.to(p.panel, {
      xPercent: offX,
      duration: OFFCANVAS_DUR_S,
      ease: "power2.in",
      onComplete: () => {
        p.root.classList.remove("nextora-primary-nav-portal--open");
        p.root.classList.remove("nextora-primary-nav-portal--gsap");
        gsapWithCSS.set([p.backdrop, p.panel], { clearProps: "opacity,transform" });
        onDone();
      }
    });
  }
  var CLONE_ID_SUFFIX = "-nextora-portal";
  function readToggleLabels(btn) {
    const open = btn.dataset.nextoraNavOpenLabel?.trim() || "Open menu";
    const close2 = btn.dataset.nextoraNavCloseLabel?.trim() || "Close menu";
    return { open, close: close2 };
  }
  function dedupeCloneIds(root2) {
    root2.querySelectorAll("[id]").forEach((el) => {
      const id = el.id?.trim();
      if (id && !id.endsWith(CLONE_ID_SUFFIX)) {
        el.id = `${id}${CLONE_ID_SUFFIX}`;
      }
    });
  }
  function ensurePortalCloseButton(panel, closeLabel) {
    let btn = panel.querySelector("[data-nextora-nav-portal-close]");
    if (btn) {
      btn.setAttribute("aria-label", closeLabel);
      return btn;
    }
    btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nextora-primary-nav-portal__close";
    btn.setAttribute("data-nextora-nav-portal-close", "");
    btn.setAttribute("aria-label", closeLabel);
    const icon = document.createElement("span");
    icon.className = "nextora-primary-nav-portal__close-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
    btn.append(icon);
    const mount = panel.querySelector("[data-nextora-nav-portal-mount]");
    if (mount) {
      panel.insertBefore(btn, mount);
    } else {
      panel.append(btn);
    }
    return btn;
  }
  function getOrCreatePortal(btn) {
    const rootId = btn.dataset.nextoraNavPortalRoot?.trim();
    const panelId = btn.dataset.nextoraNavPortalPanel?.trim();
    const titleId = btn.dataset.nextoraNavPortalTitle?.trim();
    const dialogLabel = btn.dataset.nextoraNavPortalDialogLabel?.trim() || "Menu";
    const closeLabel = btn.dataset.nextoraNavCloseLabel?.trim() || "Close menu";
    if (!rootId || !panelId || !titleId) {
      return null;
    }
    let root2 = document.getElementById(rootId);
    if (root2 && !root2.matches("[data-nextora-nav-portal-root]")) {
      return null;
    }
    if (!root2) {
      root2 = document.createElement("div");
      root2.id = rootId;
      root2.className = "nextora-primary-nav-portal";
      root2.setAttribute("data-nextora-nav-portal-root", "");
      root2.hidden = true;
      const backdrop2 = document.createElement("div");
      backdrop2.className = "nextora-primary-nav-portal__backdrop";
      backdrop2.setAttribute("data-nextora-nav-backdrop", "");
      backdrop2.tabIndex = -1;
      const panel2 = document.createElement("div");
      panel2.id = panelId;
      panel2.className = "nextora-primary-nav-portal__panel";
      panel2.setAttribute("role", "dialog");
      panel2.setAttribute("aria-modal", "true");
      panel2.setAttribute("aria-labelledby", titleId);
      const title = document.createElement("h2");
      title.id = titleId;
      title.className = "sr-only";
      title.textContent = dialogLabel;
      const mount2 = document.createElement("div");
      mount2.className = "nextora-primary-nav-portal__mount";
      mount2.setAttribute("data-nextora-nav-portal-mount", "");
      panel2.append(title, mount2);
      root2.append(backdrop2, panel2);
      document.body.appendChild(root2);
    }
    const backdrop = root2.querySelector("[data-nextora-nav-backdrop]");
    const panel = document.getElementById(panelId);
    const mount = root2.querySelector("[data-nextora-nav-portal-mount]");
    if (!backdrop || !panel || !mount) {
      return null;
    }
    const closeBtn = ensurePortalCloseButton(panel, closeLabel);
    return { root: root2, backdrop, panel, mount, closeBtn };
  }
  function cloneNavIntoMount(sourcePanel, mount) {
    const sourceNode = sourcePanel.querySelector("nav") ?? (sourcePanel.firstElementChild instanceof HTMLElement ? sourcePanel.firstElementChild : null);
    if (!sourceNode) {
      mount.replaceChildren();
      return;
    }
    const clone = sourceNode.cloneNode(true);
    dedupeCloneIds(clone);
    mount.replaceChildren(clone);
  }
  function focusFirstNavLink(panel) {
    panel.querySelector("a[href]")?.focus();
  }
  function bindPortalDismissOnce(root2, backdrop, closeBtn, close2, shouldIgnoreBackdropClick) {
    if (root2.dataset.nextoraNavPortalDismissBound === "1") {
      return;
    }
    const hadLegacyBackdropOnly = root2.dataset.nextoraNavBackdropBound === "1";
    root2.dataset.nextoraNavPortalDismissBound = "1";
    const onBackdropClick = (e) => {
      if (shouldIgnoreBackdropClick()) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      close2();
    };
    if (!hadLegacyBackdropOnly) {
      backdrop.addEventListener("click", onBackdropClick);
    }
    closeBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      close2();
    });
  }
  function initHeaderNavigation() {
    const mq = window.matchMedia(DESKTOP_MQ);
    document.querySelectorAll("[data-nextora-nav-toggle]").forEach((btn) => {
      const sourceSel = btn.dataset.nextoraNavCloneSource?.trim();
      if (!sourceSel) {
        return;
      }
      const sourcePanel = document.querySelector(sourceSel);
      if (!sourcePanel?.hasAttribute("data-nextora-nav-source-panel")) {
        return;
      }
      const labels = readToggleLabels(btn);
      let onEscape = null;
      let closeFinishTimer = null;
      let portalOpenedAt = 0;
      const portal = () => getOrCreatePortal(btn);
      const clearCloseTimer = () => {
        if (closeFinishTimer !== null) {
          window.clearTimeout(closeFinishTimer);
          closeFinishTimer = null;
        }
      };
      const setExpandedLabel = (expanded) => {
        btn.setAttribute("aria-label", expanded ? labels.close : labels.open);
      };
      const detachEscape = () => {
        if (onEscape) {
          document.removeEventListener("keydown", onEscape);
          onEscape = null;
        }
      };
      const close2 = () => {
        const p = portal();
        detachEscape();
        if (!p) {
          clearCloseTimer();
          btn.setAttribute("aria-expanded", "false");
          setExpandedLabel(false);
          document.documentElement.classList.remove("nextora-primary-nav-drawer-open");
          btn.focus();
          return;
        }
        if (mq.matches) {
          clearCloseTimer();
          killPortalGsap(p);
          p.root.classList.remove("nextora-primary-nav-portal--open");
          p.root.classList.remove("nextora-primary-nav-portal--gsap");
          p.root.hidden = true;
          p.mount.replaceChildren();
          btn.setAttribute("aria-expanded", "false");
          setExpandedLabel(false);
          document.documentElement.classList.remove("nextora-primary-nav-drawer-open");
          btn.focus();
          return;
        }
        btn.setAttribute("aria-expanded", "false");
        setExpandedLabel(false);
        document.documentElement.classList.remove("nextora-primary-nav-drawer-open");
        killPortalGsap(p);
        if (prefersReducedMotion2()) {
          clearCloseTimer();
          p.root.classList.remove("nextora-primary-nav-portal--open");
          p.root.classList.remove("nextora-primary-nav-portal--gsap");
          p.root.hidden = true;
          p.mount.replaceChildren();
          btn.focus();
          return;
        }
        clearCloseTimer();
        runPortalCloseGsap(p, () => {
          p.root.hidden = true;
          p.mount.replaceChildren();
          btn.focus();
        });
      };
      const open = () => {
        if (mq.matches) {
          return;
        }
        const p = portal();
        if (!p) {
          return;
        }
        clearCloseTimer();
        portalOpenedAt = Date.now();
        bindPortalDismissOnce(
          p.root,
          p.backdrop,
          p.closeBtn,
          close2,
          () => Date.now() - portalOpenedAt < OPEN_BACKDROP_GUARD_MS
        );
        cloneNavIntoMount(sourcePanel, p.mount);
        p.root.hidden = false;
        p.root.classList.remove("nextora-primary-nav-portal--open");
        p.root.classList.remove("nextora-primary-nav-portal--gsap");
        void p.root.getBoundingClientRect();
        requestAnimationFrame(() => {
          killPortalGsap(p);
          if (prefersReducedMotion2()) {
            p.root.classList.add("nextora-primary-nav-portal--open");
          } else {
            runPortalOpenGsap(p);
          }
          btn.setAttribute("aria-expanded", "true");
          setExpandedLabel(true);
          document.documentElement.classList.add("nextora-primary-nav-drawer-open");
          window.setTimeout(
            () => focusFirstNavLink(p.panel),
            prefersReducedMotion2() ? 0 : FOCUS_AFTER_OPEN_MS
          );
        });
        onEscape = (e) => {
          if (e.key === "Escape") {
            close2();
          }
        };
        document.addEventListener("keydown", onEscape);
      };
      btn.addEventListener("click", () => {
        if (btn.getAttribute("aria-expanded") === "true") {
          close2();
        } else {
          open();
        }
      });
      const resetForViewport = () => {
        clearCloseTimer();
        const p = portal();
        if (p) {
          killPortalGsap(p);
          p.root.classList.remove("nextora-primary-nav-portal--open");
          p.root.classList.remove("nextora-primary-nav-portal--gsap");
          p.root.hidden = true;
          p.mount.replaceChildren();
        }
        detachEscape();
        btn.setAttribute("aria-expanded", "false");
        setExpandedLabel(false);
        document.documentElement.classList.remove("nextora-primary-nav-drawer-open");
      };
      mq.addEventListener("change", resetForViewport);
      resetForViewport();
    });
    bindPortalSubmenuAccordions();
  }
  var portalSubmenuAccordionsBound = false;
  function bindPortalSubmenuAccordions() {
    if (portalSubmenuAccordionsBound) {
      return;
    }
    portalSubmenuAccordionsBound = true;
    document.addEventListener("click", (e) => {
      const raw = e.target;
      const el = raw instanceof Element ? raw.closest(".nextora-submenu-toggle") : null;
      if (!el || !(el instanceof HTMLButtonElement)) {
        return;
      }
      if (!el.closest("[data-nextora-nav-portal-mount]")) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      const li = el.closest("li.menu-item-has-children");
      if (!li) {
        return;
      }
      const expanded = el.getAttribute("aria-expanded") === "true";
      const next = !expanded;
      const parentUl = li.parentElement;
      if (parentUl instanceof HTMLUListElement) {
        parentUl.querySelectorAll(":scope > li.menu-item-has-children.nextora-submenu--open").forEach((sib) => {
          if (sib !== li) {
            sib.classList.remove("nextora-submenu--open");
            const oth = sib.querySelector(":scope > button.nextora-submenu-toggle");
            if (oth instanceof HTMLButtonElement) {
              oth.setAttribute("aria-expanded", "false");
            }
          }
        });
      }
      el.setAttribute("aria-expanded", next ? "true" : "false");
      li.classList.toggle("nextora-submenu--open", next);
    });
  }

  // resources/ts/lib/modal.ts
  var FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
  var OPEN_CLASS = "nextora-modal--open";
  var OPEN_ATTR = "data-nextora-modal-open";
  var ROOT_ATTR = "data-nextora-modal";
  var SURFACE_ATTR = "data-nextora-modal-surface";
  var DISMISS_ATTR = "data-nextora-modal-dismiss";
  var stack = [];
  var scrollLocked = false;
  function getCloseLabel() {
    return window.nextoraModal?.closeLabel?.trim() || "Close dialog";
  }
  function getFocusable(container) {
    return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
      (el) => el.offsetParent !== null || el === document.activeElement
    );
  }
  function lockScroll(lock) {
    const doc3 = document.documentElement;
    if (lock) {
      if (!scrollLocked) {
        const y = window.scrollY;
        doc3.dataset.nextoraModalScrollY = String(y);
        doc3.style.setProperty("--nextora-modal-scroll-y", `-${y}px`);
        doc3.classList.add("nextora-modal-scroll-lock");
        scrollLocked = true;
      }
    } else if (scrollLocked && stack.length === 0) {
      const y = Number(doc3.dataset.nextoraModalScrollY || 0);
      doc3.classList.remove("nextora-modal-scroll-lock");
      doc3.style.removeProperty("--nextora-modal-scroll-y");
      delete doc3.dataset.nextoraModalScrollY;
      window.scrollTo(0, y);
      scrollLocked = false;
    }
  }
  function isModalRoot(el) {
    return el instanceof HTMLElement && el.hasAttribute(ROOT_ATTR);
  }
  function findModalRoot(el) {
    let n = el;
    while (n) {
      if (isModalRoot(n)) {
        return n;
      }
      n = n.parentElement;
    }
    return null;
  }
  function setStackZIndex() {
    stack.forEach((entry, i) => {
      entry.root.style.zIndex = String(99999 + i);
    });
  }
  function trapFocus(e, surface) {
    if (e.key !== "Tab") {
      return;
    }
    const nodes = getFocusable(surface);
    if (nodes.length === 0) {
      return;
    }
    const first2 = nodes[0];
    const last = nodes[nodes.length - 1];
    const active = document.activeElement;
    if (e.shiftKey) {
      if (active === first2 || !surface.contains(active)) {
        e.preventDefault();
        last.focus();
      }
    } else if (active === last) {
      e.preventDefault();
      first2.focus();
    }
  }
  function openModal(root2) {
    if (!root2.hasAttribute(ROOT_ATTR) || root2.classList.contains(OPEN_CLASS)) {
      return;
    }
    const surface = root2.querySelector(`[${SURFACE_ATTR}]`) ?? root2.querySelector(".nextora-modal__surface");
    if (!surface || surface.getAttribute("role") !== "dialog") {
      return;
    }
    const previousFocus = document.activeElement;
    root2.removeAttribute("hidden");
    root2.removeAttribute("aria-hidden");
    const onKeyDown = (e) => {
      if (e.key === "Escape" && stack[stack.length - 1]?.root === root2) {
        e.preventDefault();
        closeModal(root2);
        return;
      }
      trapFocus(e, surface);
    };
    stack.push({ root: root2, previousFocus, onKeyDown });
    document.addEventListener("keydown", onKeyDown, true);
    lockScroll(true);
    setStackZIndex();
    requestAnimationFrame(() => {
      root2.classList.add(OPEN_CLASS);
      const focusables = getFocusable(surface);
      const toFocus = focusables[0] ?? surface;
      toFocus.focus();
      root2.dispatchEvent(
        new CustomEvent("nextora:modalopen", {
          bubbles: true,
          detail: { root: root2 }
        })
      );
    });
  }
  function closeModal(root2, afterClose) {
    const top = stack[stack.length - 1];
    const target = root2 ?? top?.root;
    if (!target || !target.classList.contains(OPEN_CLASS)) {
      return;
    }
    if (root2 !== void 0 && top && root2 !== top.root) {
      return;
    }
    const idx = stack.findIndex((e) => e.root === target);
    if (idx === -1) {
      return;
    }
    const entry = stack[idx];
    let finished = false;
    const finish = () => {
      if (finished) {
        return;
      }
      finished = true;
      target.dispatchEvent(
        new CustomEvent("nextora:modalclose", {
          bubbles: true,
          detail: { root: target }
        })
      );
      target.removeEventListener("transitionend", onTransitionEnd);
      document.removeEventListener("keydown", entry.onKeyDown, true);
      stack.splice(idx, 1);
      setStackZIndex();
      target.classList.remove(OPEN_CLASS);
      target.setAttribute("hidden", "");
      target.setAttribute("aria-hidden", "true");
      lockScroll(false);
      if (entry.previousFocus instanceof HTMLElement && document.contains(entry.previousFocus)) {
        entry.previousFocus.focus();
      }
      afterClose?.();
    };
    const onTransitionEnd = (ev) => {
      if (ev.target === target && ev.propertyName === "opacity") {
        finish();
      }
    };
    target.addEventListener("transitionend", onTransitionEnd);
    window.setTimeout(finish, 480);
    target.classList.remove(OPEN_CLASS);
  }
  function openModalById(id) {
    const clean = id.replace(/^#/, "");
    const el = document.getElementById(clean);
    if (el instanceof HTMLElement && el.hasAttribute(ROOT_ATTR)) {
      openModal(el);
      return true;
    }
    return false;
  }
  function openModalDialog(options) {
    const closeOnBackdrop = options.closeOnBackdrop !== false;
    const id = `nextora-modal-${Math.random().toString(36).slice(2, 11)}`;
    const titleId = `${id}-title`;
    const root2 = document.createElement("div");
    root2.className = `nextora-modal${options.wrapClass ? ` ${options.wrapClass}` : ""}`;
    root2.setAttribute(ROOT_ATTR, "");
    root2.setAttribute("aria-hidden", "true");
    root2.setAttribute("hidden", "");
    const scrim = document.createElement("div");
    scrim.className = "nextora-modal__scrim";
    scrim.tabIndex = -1;
    if (closeOnBackdrop) {
      scrim.setAttribute(DISMISS_ATTR, "");
    }
    const surface = document.createElement("div");
    surface.className = "nextora-modal__surface nextora-modal__surface--sm";
    surface.setAttribute(SURFACE_ATTR, "");
    surface.setAttribute("role", "dialog");
    surface.setAttribute("aria-modal", "true");
    surface.setAttribute("aria-labelledby", titleId);
    surface.tabIndex = -1;
    const header = document.createElement("header");
    header.className = "nextora-modal__header";
    const h2 = document.createElement("h2");
    h2.className = "nextora-modal__title";
    h2.id = titleId;
    h2.textContent = options.title;
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "nextora-modal__close";
    closeBtn.setAttribute(DISMISS_ATTR, "");
    closeBtn.setAttribute("aria-label", getCloseLabel());
    closeBtn.innerHTML = '<span class="nextora-modal__close-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg></span>';
    header.append(h2, closeBtn);
    const bodyEl = document.createElement("div");
    bodyEl.className = "nextora-modal__body";
    if (typeof options.body === "string") {
      bodyEl.innerHTML = options.body;
    } else {
      bodyEl.append(options.body);
    }
    surface.append(header, bodyEl);
    if (options.footer !== void 0) {
      const foot = document.createElement("footer");
      foot.className = "nextora-modal__footer";
      if (typeof options.footer === "string") {
        foot.innerHTML = options.footer;
      } else {
        foot.append(options.footer);
      }
      surface.append(foot);
    }
    root2.append(scrim, surface);
    document.body.append(root2);
    openModal(root2);
    return {
      close: () => {
        closeModal(root2, () => {
          root2.remove();
        });
      }
    };
  }
  function onDocumentClick(e) {
    const t = e.target;
    if (!(t instanceof Element)) {
      return;
    }
    const openBtn = t.closest(`[${OPEN_ATTR}]`);
    if (openBtn instanceof HTMLElement) {
      const id = openBtn.getAttribute(OPEN_ATTR);
      if (id) {
        e.preventDefault();
        openModalById(id);
      }
      return;
    }
    const dismiss = t.closest(`[${DISMISS_ATTR}]`);
    if (dismiss instanceof HTMLElement) {
      const modal = findModalRoot(dismiss);
      if (modal && modal.classList.contains(OPEN_CLASS)) {
        e.preventDefault();
        closeModal(modal);
      }
    }
  }
  function initModals() {
    document.addEventListener("click", onDocumentClick);
  }
  function attachModalGlobals() {
    window.nextoraOpenModal = openModalById;
    window.nextoraOpenModalDialog = openModalDialog;
    window.nextoraCloseModal = closeModal;
  }

  // resources/ts/mini-cart-portal.ts
  function mountHeaderMiniCartPortalToBody() {
    document.querySelectorAll("[data-nextora-header-mini-cart-portal]").forEach((el) => {
      if (el.parentElement !== document.body) {
        document.body.appendChild(el);
      }
    });
  }
  function getMiniCartModalId() {
    const el = document.querySelector("[data-nextora-header-mini-cart-portal][id]");
    const id = el?.id?.trim();
    return id || null;
  }
  function openHeaderMiniCartSoon(ms = 0) {
    const id = getMiniCartModalId();
    if (!id) {
      return;
    }
    window.setTimeout(() => {
      openModalById(id);
    }, ms);
  }
  function triggerWcFragmentRefresh() {
    const $ = window.jQuery;
    if (typeof $ !== "function") {
      return;
    }
    try {
      $(document.body).trigger?.("wc_fragment_refresh");
    } catch {
    }
  }
  function bindHeaderMiniCartAfterAjaxAdd() {
    document.body.addEventListener(
      "wc-blocks_added_to_cart",
      () => {
        triggerWcFragmentRefresh();
        openHeaderMiniCartSoon(120);
      },
      false
    );
    let jqBound = false;
    const tryBindJqAddedToCart = () => {
      if (jqBound) {
        return;
      }
      const jQueryFactory = window.jQuery;
      if (typeof jQueryFactory !== "function") {
        return;
      }
      jQueryFactory(($) => {
        $(document.body).on("added_to_cart", () => {
          openHeaderMiniCartSoon(0);
        });
      });
      jqBound = true;
    };
    tryBindJqAddedToCart();
    if (!jqBound) {
      let attempts = 0;
      const maxAttempts = 80;
      const id = window.setInterval(() => {
        tryBindJqAddedToCart();
        if (jqBound || ++attempts >= maxAttempts) {
          window.clearInterval(id);
        }
      }, 50);
    }
  }

  // resources/ts/lib/spotlight-search.ts
  function cfg() {
    const c = window.nextoraSpotlight;
    if (!c?.restUrl) {
      return null;
    }
    return c;
  }
  function formatTitle(raw) {
    if (typeof raw === "string") {
      return raw;
    }
    if (raw && typeof raw === "object") {
      const r = raw.rendered ?? raw.raw;
      if (typeof r === "string") {
        const d = document.createElement("div");
        d.innerHTML = r;
        return (d.textContent || "").trim();
      }
    }
    return "";
  }
  function subtypeLabel(sub, c) {
    if (sub === "post") {
      return c.typePost;
    }
    if (sub === "page") {
      return c.typePage;
    }
    return c.typeOther;
  }
  function formatDisplayPath(rawUrl) {
    try {
      const u = new URL(rawUrl, window.location.origin);
      let p = decodeURIComponent(u.pathname || "/");
      if (p.length > 1 && p.endsWith("/")) {
        p = p.slice(0, -1);
      }
      p = p.replace(/^\/+/, "");
      return p === "" ? "/" : p;
    } catch {
      return "";
    }
  }
  function truncateMiddle(str, max) {
    if (str.length <= max) {
      return str;
    }
    const keep = max - 1;
    const head = Math.ceil(keep / 2);
    const tail = Math.floor(keep / 2);
    return `${str.slice(0, head)}\u2026${str.slice(-tail)}`;
  }
  function spotlightIconSvg(subtype) {
    const stroke = 'xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
    if (subtype === "page") {
      return `<svg ${stroke}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18M9 21V9"/></svg>`;
    }
    if (subtype === "post") {
      return `<svg ${stroke}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h6"/></svg>`;
    }
    return `<svg ${stroke}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`;
  }
  function debounce(fn, ms) {
    let t;
    return (...args) => {
      if (t) {
        clearTimeout(t);
      }
      t = setTimeout(() => {
        t = void 0;
        fn(...args);
      }, ms);
    };
  }
  function initSpotlightSearch() {
    const config3 = cfg();
    if (!config3) {
      return;
    }
    const roots = document.querySelectorAll("[data-nextora-spotlight]");
    roots.forEach((form) => bindSpotlightForm(form, config3));
  }
  function bindSpotlightForm(form, config3) {
    if (!(form instanceof HTMLFormElement)) {
      return;
    }
    const input = form.querySelector('input[name="s"]');
    const resultsEl = form.querySelector("[data-spotlight-results]");
    const statusEl = form.querySelector("[data-spotlight-status]");
    const hintEl = form.querySelector("[data-spotlight-hint]");
    const emptyEl = form.querySelector("[data-spotlight-empty]");
    if (!input || !resultsEl) {
      return;
    }
    let abort = null;
    let items = [];
    let activeIndex = -1;
    const setLoading = (on) => {
      form.classList.toggle("nextora-spotlight--loading", on);
    };
    const setStatus2 = (text, hide = false) => {
      if (!statusEl) {
        return;
      }
      if (hide || text === "") {
        statusEl.textContent = "";
        statusEl.setAttribute("hidden", "");
        return;
      }
      statusEl.textContent = text;
      statusEl.removeAttribute("hidden");
    };
    const clearResults = () => {
      resultsEl.innerHTML = "";
      resultsEl.setAttribute("hidden", "");
      input.setAttribute("aria-expanded", "false");
      input.removeAttribute("aria-activedescendant");
      items = [];
      activeIndex = -1;
      emptyEl?.setAttribute("hidden", "");
      if (emptyEl) {
        emptyEl.textContent = "";
      }
    };
    const renderResults = (list) => {
      clearResults();
      if (list.length === 0) {
        if (emptyEl) {
          emptyEl.textContent = config3.noResults;
          emptyEl.removeAttribute("hidden");
        }
        setStatus2("", true);
        return;
      }
      resultsEl.removeAttribute("hidden");
      input.setAttribute("aria-expanded", "true");
      const ul = document.createElement("ul");
      ul.className = "nextora-spotlight__list";
      ul.setAttribute("role", "presentation");
      list.forEach((hit, i) => {
        const title = formatTitle(hit.title);
        const url = hit.url;
        const sub = hit.subtype || hit.type || "";
        const pathRaw = formatDisplayPath(url);
        const pathShown = truncateMiddle(pathRaw, 52);
        const li = document.createElement("li");
        li.className = "nextora-spotlight__item";
        li.style.setProperty("--nextora-spotlight-i", String(i));
        const a = document.createElement("a");
        a.className = "nextora-spotlight__link";
        a.href = url;
        a.setAttribute("role", "option");
        a.setAttribute("aria-selected", "false");
        a.id = `${input.id}-opt-${i}`;
        const thumb = document.createElement("span");
        thumb.className = "nextora-spotlight__thumb";
        thumb.innerHTML = spotlightIconSvg(sub);
        const stack2 = document.createElement("span");
        stack2.className = "nextora-spotlight__stack";
        const titleEl = document.createElement("span");
        titleEl.className = "nextora-spotlight__title";
        titleEl.textContent = title;
        const meta = document.createElement("span");
        meta.className = "nextora-spotlight__meta";
        const typeEl = document.createElement("span");
        typeEl.className = "nextora-spotlight__type";
        typeEl.textContent = subtypeLabel(sub, config3);
        if (pathShown !== "") {
          const sep = document.createElement("span");
          sep.className = "nextora-spotlight__sep";
          sep.textContent = "\xB7";
          const pathEl = document.createElement("span");
          pathEl.className = "nextora-spotlight__path";
          pathEl.textContent = pathShown;
          meta.append(typeEl, sep, pathEl);
        } else {
          meta.append(typeEl);
        }
        stack2.append(titleEl, meta);
        a.append(thumb, stack2);
        li.append(a);
        ul.append(li);
        items.push({ el: a, url });
        a.addEventListener("mouseenter", () => {
          applyActive(i);
        });
      });
      resultsEl.append(ul);
      setStatus2("", true);
    };
    const applyActive = (next) => {
      if (items.length === 0) {
        return;
      }
      const clamped = Math.max(0, Math.min(next, items.length - 1));
      activeIndex = clamped;
      items.forEach(({ el }, i) => {
        const on = i === clamped;
        el.setAttribute("aria-selected", on ? "true" : "false");
        el.classList.toggle("nextora-spotlight__link--active", on);
      });
      if (clamped >= 0 && items[clamped]) {
        input.setAttribute("aria-activedescendant", items[clamped].el.id);
      } else {
        input.removeAttribute("aria-activedescendant");
      }
    };
    const runFetch = async (q) => {
      const query = q.trim();
      if (query.length < config3.minQueryLength) {
        clearResults();
        setStatus2("", true);
        setLoading(false);
        hintEl?.removeAttribute("hidden");
        return;
      }
      hintEl?.setAttribute("hidden", "");
      if (abort) {
        abort.abort();
      }
      abort = new AbortController();
      const { signal } = abort;
      setLoading(true);
      setStatus2(config3.loading, false);
      const params = new URLSearchParams({
        search: query,
        per_page: String(config3.perPage)
      });
      try {
        const res = await fetch(`${config3.restUrl}?${params.toString()}`, {
          signal,
          credentials: "same-origin",
          headers: { Accept: "application/json" }
        });
        if (!res.ok) {
          throw new Error(String(res.status));
        }
        const data = await res.json();
        if (signal.aborted) {
          return;
        }
        renderResults(Array.isArray(data) ? data : []);
      } catch (e) {
        if (e.name === "AbortError") {
          return;
        }
        clearResults();
        if (emptyEl) {
          emptyEl.textContent = config3.error;
          emptyEl.removeAttribute("hidden");
        }
        setStatus2("", true);
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    const debouncedFetch = debounce((q) => {
      void runFetch(q);
    }, Math.max(80, config3.debounceMs));
    input.addEventListener("input", () => {
      debouncedFetch(input.value);
    });
    input.addEventListener("keydown", (e) => {
      if (!resultsEl.hasAttribute("hidden") && items.length > 0) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          applyActive(activeIndex < 0 ? 0 : activeIndex + 1);
          return;
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          applyActive(activeIndex <= 0 ? items.length - 1 : activeIndex - 1);
          return;
        }
        if (e.key === "Enter" && activeIndex >= 0) {
          e.preventDefault();
          window.location.href = items[activeIndex].url;
          return;
        }
      }
    });
    form.addEventListener("submit", (e) => {
      if (activeIndex >= 0 && items[activeIndex]) {
        e.preventDefault();
        window.location.href = items[activeIndex].url;
      }
    });
    const resetUi = () => {
      if (abort) {
        abort.abort();
        abort = null;
      }
      input.value = "";
      clearResults();
      setStatus2("", true);
      setLoading(false);
      hintEl?.removeAttribute("hidden");
    };
    const modalRoot = form.closest("[data-nextora-modal]");
    if (modalRoot) {
      modalRoot.addEventListener(
        "nextora:modalopen",
        () => {
          requestAnimationFrame(() => {
            input.focus();
            input.select();
          });
        },
        { passive: true }
      );
      modalRoot.addEventListener("nextora:modalclose", resetUi, { passive: true });
    }
    if (hintEl && config3.keyboardHint && !hintEl.querySelector(".nextora-spotlight__kbd-hint")) {
      const kbd = document.createElement("span");
      kbd.className = "nextora-spotlight__kbd-hint";
      kbd.textContent = config3.keyboardHint;
      const hintInner = hintEl.querySelector(".nextora-spotlight__hint-inner");
      if (hintInner) {
        hintInner.appendChild(kbd);
      } else {
        hintEl.appendChild(kbd);
      }
    }
  }

  // resources/ts/spotlight-search-portal.ts
  function mountSpotlightSearchPortalToBody() {
    document.querySelectorAll("[data-nextora-spotlight-search-portal]").forEach((el) => {
      if (el.parentElement !== document.body) {
        document.body.appendChild(el);
      }
    });
  }

  // resources/ts/main.ts
  var root = document.documentElement;
  root.classList.add("nextora-js");
  initHeaderSticky();
  initHeaderNavigation();
  mountHeaderMiniCartPortalToBody();
  mountSpotlightSearchPortalToBody();
  initModals();
  bindHeaderMiniCartAfterAjaxAdd();
  attachModalGlobals();
  initSpotlightSearch();
  initArticleShare();
  initCommentTiptap();
  attachScrollAnimationGlobals();
  initScrollAnimations();
})();
=======
3. "-" cannot repeat`);Se.customSchemes.push([r,e])}function aw(){Se.scanner=ew(Se.customSchemes);for(let r=0;r<Se.tokenQueue.length;r++)Se.tokenQueue[r][1]({scanner:Se.scanner});Se.parser=nw(Se.scanner.tokens);for(let r=0;r<Se.pluginQueue.length;r++)Se.pluginQueue[r][1]({scanner:Se.scanner,parser:Se.parser});return Se.initialized=!0,Se}function jl(r){return Se.initialized||aw(),ow(Se.parser.start,r,Fx(Se.scanner.start,r))}jl.scan=Fx;function Gl(r,e=null,t=null){if(e&&typeof e=="object"){if(t)throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);t=e,e=null}let n=new Qd(t),o=jl(r),i=[];for(let s=0;s<o.length;s++){let a=o[s];a.isLink&&(!e||a.t===e)&&n.check(a)&&i.push(a.toFormattedObject(n))}return i}var ec="[\0- \xA0\u1680\u180E\u2000-\u2029\u205F\u3000]",lw=new RegExp(ec),fw=new RegExp(`${ec}$`),uw=new RegExp(ec,"g");function dw(r){return r.length===1?r[0].isLink:r.length===3&&r[1].isLink?["()","[]"].includes(r[0].value+r[2].value):!1}function cw(r){return new K({key:new Z("autolink"),appendTransaction:(e,t,n)=>{let o=e.some(f=>f.docChanged)&&!t.doc.eq(n.doc),i=e.some(f=>f.getMeta("preventAutolink"));if(!o||i)return;let{tr:s}=n,a=md(t.doc,[...e]);if(bd(a).forEach(({newRange:f})=>{let u=Eg(n.doc,f,c=>c.isTextblock),d,p;if(u.length>1)d=u[0],p=n.doc.textBetween(d.pos,d.pos+d.node.nodeSize,void 0," ");else if(u.length){let c=n.doc.textBetween(f.from,f.to," "," ");if(!fw.test(c))return;d=u[0],p=n.doc.textBetween(d.pos,f.to,void 0," ")}if(d&&p){let c=p.split(lw).filter(Boolean);if(c.length<=0)return!1;let h=c[c.length-1],m=d.pos+p.lastIndexOf(h);if(!h)return!1;let g=jl(h).map(x=>x.toObject(r.defaultProtocol));if(!dw(g))return!1;g.filter(x=>x.isLink).map(x=>({...x,from:m+x.start+1,to:m+x.end+1})).filter(x=>n.schema.marks.code?!n.doc.rangeHasMark(x.from,x.to,n.schema.marks.code):!0).filter(x=>r.validate(x.value)).filter(x=>r.shouldAutoLink(x.value)).forEach(x=>{sl(x.from,x.to,n.doc).some(y=>y.mark.type===r.type)||s.addMark(x.from,x.to,r.type.create({href:x.href}))})}}),!!s.steps.length)return s}})}function pw(r){return new K({key:new Z("handleClickLink"),props:{handleClick:(e,t,n)=>{var o,i;if(n.button!==0||!e.editable)return!1;let s=null;if(n.target instanceof HTMLAnchorElement)s=n.target;else{let l=n.target;if(!l)return!1;let f=r.editor.view.dom;s=l.closest("a"),s&&!f.contains(s)&&(s=null)}if(!s)return!1;let a=!1;if(r.enableClickSelection&&(a=r.editor.commands.extendMarkRange(r.type.name)),r.openOnClick){let l=yd(e.state,r.type.name),f=(o=s.href)!=null?o:l.href,u=(i=s.target)!=null?i:l.target;f&&(window.open(f,u),a=!0)}return a}}})}function hw(r){return new K({key:new Z("handlePasteLink"),props:{handlePaste:(e,t,n)=>{let{shouldAutoLink:o}=r,{state:i}=e,{selection:s}=i,{empty:a}=s;if(a)return!1;let l="";n.content.forEach(u=>{l+=u.textContent});let f=Gl(l,{defaultProtocol:r.defaultProtocol}).find(u=>u.isLink&&u.value===l);return!l||!f||o!==void 0&&!o(f.value)?!1:r.editor.commands.setMark(r.type,{href:f.href})}}})}function Po(r,e){let t=["http","https","ftp","ftps","mailto","tel","callto","sms","cid","xmpp"];return e&&e.forEach(n=>{let o=typeof n=="string"?n:n.scheme;o&&t.push(o)}),!r||r.replace(uw,"").match(new RegExp(`^(?:(?:${t.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,"i"))}var Vx=or.create({name:"link",priority:1e3,keepOnSplit:!1,exitable:!0,onCreate(){this.options.validate&&!this.options.shouldAutoLink&&(this.options.shouldAutoLink=this.options.validate,console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")),this.options.protocols.forEach(r=>{if(typeof r=="string"){Zd(r);return}Zd(r.scheme,r.optionalSlashes)})},onDestroy(){Hx()},inclusive(){return this.options.autolink},addOptions(){return{openOnClick:!0,enableClickSelection:!1,linkOnPaste:!0,autolink:!0,protocols:[],defaultProtocol:"http",HTMLAttributes:{target:"_blank",rel:"noopener noreferrer nofollow",class:null},isAllowedUri:(r,e)=>!!Po(r,e.protocols),validate:r=>!!r,shouldAutoLink:r=>{let e=/^[a-z][a-z0-9+.-]*:\/\//i.test(r),t=/^[a-z][a-z0-9+.-]*:/i.test(r);if(e||t&&!r.includes("@"))return!0;let o=(r.includes("@")?r.split("@").pop():r).split(/[/?#:]/)[0];return!(/^\d{1,3}(\.\d{1,3}){3}$/.test(o)||!/\./.test(o))}}},addAttributes(){return{href:{default:null,parseHTML(r){return r.getAttribute("href")}},target:{default:this.options.HTMLAttributes.target},rel:{default:this.options.HTMLAttributes.rel},class:{default:this.options.HTMLAttributes.class},title:{default:null}}},parseHTML(){return[{tag:"a[href]",getAttrs:r=>{let e=r.getAttribute("href");return!e||!this.options.isAllowedUri(e,{defaultValidate:t=>!!Po(t,this.options.protocols),protocols:this.options.protocols,defaultProtocol:this.options.defaultProtocol})?!1:null}}]},renderHTML({HTMLAttributes:r}){return this.options.isAllowedUri(r.href,{defaultValidate:e=>!!Po(e,this.options.protocols),protocols:this.options.protocols,defaultProtocol:this.options.defaultProtocol})?["a",ie(this.options.HTMLAttributes,r),0]:["a",ie(this.options.HTMLAttributes,{...r,href:""}),0]},markdownTokenName:"link",parseMarkdown:(r,e)=>e.applyMark("link",e.parseInline(r.tokens||[]),{href:r.href,title:r.title||null}),renderMarkdown:(r,e)=>{var t,n,o,i;let s=(n=(t=r.attrs)==null?void 0:t.href)!=null?n:"",a=(i=(o=r.attrs)==null?void 0:o.title)!=null?i:"",l=e.renderChildren(r);return a?`[${l}](${s} "${a}")`:`[${l}](${s})`},addCommands(){return{setLink:r=>({chain:e})=>{let{href:t}=r;return this.options.isAllowedUri(t,{defaultValidate:n=>!!Po(n,this.options.protocols),protocols:this.options.protocols,defaultProtocol:this.options.defaultProtocol})?e().setMark(this.name,r).setMeta("preventAutolink",!0).run():!1},toggleLink:r=>({chain:e})=>{let{href:t}=r||{};return t&&!this.options.isAllowedUri(t,{defaultValidate:n=>!!Po(n,this.options.protocols),protocols:this.options.protocols,defaultProtocol:this.options.defaultProtocol})?!1:e().toggleMark(this.name,r,{extendEmptyMarkRange:!0}).setMeta("preventAutolink",!0).run()},unsetLink:()=>({chain:r})=>r().unsetMark(this.name,{extendEmptyMarkRange:!0}).setMeta("preventAutolink",!0).run()}},addPasteRules(){return[br({find:r=>{let e=[];if(r){let{protocols:t,defaultProtocol:n}=this.options,o=Gl(r).filter(i=>i.isLink&&this.options.isAllowedUri(i.value,{defaultValidate:s=>!!Po(s,t),protocols:t,defaultProtocol:n}));o.length&&o.forEach(i=>{this.options.shouldAutoLink(i.value)&&e.push({text:i.value,data:{href:i.href},index:i.start})})}return e},type:this.type,getAttributes:r=>{var e;return{href:(e=r.data)==null?void 0:e.href}}})]},addProseMirrorPlugins(){let r=[],{protocols:e,defaultProtocol:t}=this.options;return this.options.autolink&&r.push(cw({type:this.type,defaultProtocol:this.options.defaultProtocol,validate:n=>this.options.isAllowedUri(n,{defaultValidate:o=>!!Po(o,e),protocols:e,defaultProtocol:t}),shouldAutoLink:this.options.shouldAutoLink})),r.push(pw({type:this.type,editor:this.editor,openOnClick:this.options.openOnClick==="whenNotEditable"?!0:this.options.openOnClick,enableClickSelection:this.options.enableClickSelection})),this.options.linkOnPaste&&r.push(hw({editor:this.editor,defaultProtocol:this.options.defaultProtocol,type:this.type,shouldAutoLink:this.options.shouldAutoLink})),r}});var mw=Object.defineProperty,gw=(r,e)=>{for(var t in e)mw(r,t,{get:e[t],enumerable:!0})},xw="listItem",Ux="textStyle",qx=/^\s*([-+*])\s$/,nc=be.create({name:"bulletList",addOptions(){return{itemTypeName:"listItem",HTMLAttributes:{},keepMarks:!1,keepAttributes:!1}},group:"block list",content(){return`${this.options.itemTypeName}+`},parseHTML(){return[{tag:"ul"}]},renderHTML({HTMLAttributes:r}){return["ul",ie(this.options.HTMLAttributes,r),0]},markdownTokenName:"list",parseMarkdown:(r,e)=>r.type!=="list"||r.ordered?[]:{type:"bulletList",content:r.items?e.parseChildren(r.items):[]},renderMarkdown:(r,e)=>r.content?e.renderChildren(r.content,`
`):"",markdownOptions:{indentsContent:!0},addCommands(){return{toggleBulletList:()=>({commands:r,chain:e})=>this.options.keepAttributes?e().toggleList(this.name,this.options.itemTypeName,this.options.keepMarks).updateAttributes(xw,this.editor.getAttributes(Ux)).run():r.toggleList(this.name,this.options.itemTypeName,this.options.keepMarks)}},addKeyboardShortcuts(){return{"Mod-Shift-8":()=>this.editor.commands.toggleBulletList()}},addInputRules(){let r=$r({find:qx,type:this.type});return(this.options.keepMarks||this.options.keepAttributes)&&(r=$r({find:qx,type:this.type,keepMarks:this.options.keepMarks,keepAttributes:this.options.keepAttributes,getAttributes:()=>this.editor.getAttributes(Ux),editor:this.editor})),[r]}}),oc=be.create({name:"listItem",addOptions(){return{HTMLAttributes:{},bulletListTypeName:"bulletList",orderedListTypeName:"orderedList"}},content:"paragraph block*",defining:!0,parseHTML(){return[{tag:"li"}]},renderHTML({HTMLAttributes:r}){return["li",ie(this.options.HTMLAttributes,r),0]},markdownTokenName:"list_item",parseMarkdown:(r,e)=>{var t;if(r.type!=="list_item")return[];let n=(t=e.parseBlockChildren)!=null?t:e.parseChildren,o=[];if(r.tokens&&r.tokens.length>0)if(r.tokens.some(s=>s.type==="paragraph"))o=n(r.tokens);else{let s=r.tokens[0];if(s&&s.type==="text"&&s.tokens&&s.tokens.length>0){if(o=[{type:"paragraph",content:e.parseInline(s.tokens)}],r.tokens.length>1){let l=r.tokens.slice(1),f=n(l);o.push(...f)}}else o=n(r.tokens)}return o.length===0&&(o=[{type:"paragraph",content:[]}]),{type:"listItem",content:o}},renderMarkdown:(r,e,t)=>Cs(r,e,n=>{var o,i;return n.parentType==="bulletList"?"- ":n.parentType==="orderedList"?`${(((i=(o=n.meta)==null?void 0:o.parentAttrs)==null?void 0:i.start)||1)+n.index}. `:"- "},t),addKeyboardShortcuts(){return{Enter:()=>this.editor.commands.splitListItem(this.name),Tab:()=>this.editor.commands.sinkListItem(this.name),"Shift-Tab":()=>this.editor.commands.liftListItem(this.name)}}}),yw={};gw(yw,{findListItemPos:()=>Ls,getNextListDepth:()=>ic,handleBackspace:()=>tc,handleDelete:()=>rc,hasListBefore:()=>jx,hasListItemAfter:()=>bw,hasListItemBefore:()=>Gx,listItemHasSubList:()=>Jx,nextListIsDeeper:()=>Xx,nextListIsHigher:()=>Yx});var Ls=(r,e)=>{let{$from:t}=e.selection,n=Oe(r,e.schema),o=null,i=t.depth,s=t.pos,a=null;for(;i>0&&a===null;)o=t.node(i),o.type===n?a=i:(i-=1,s-=1);return a===null?null:{$pos:e.doc.resolve(s),depth:a}},ic=(r,e)=>{let t=Ls(r,e);if(!t)return!1;let[,n]=Ng(e,r,t.$pos.pos+4);return n},jx=(r,e,t)=>{let{$anchor:n}=r.selection,o=Math.max(0,n.pos-2),i=r.doc.resolve(o).node();return!(!i||!t.includes(i.type.name))},Gx=(r,e)=>{var t;let{$anchor:n}=e.selection,o=e.doc.resolve(n.pos-2);return!(o.index()===0||((t=o.nodeBefore)==null?void 0:t.type.name)!==r)},Jx=(r,e,t)=>{if(!t)return!1;let n=Oe(r,e.schema),o=!1;return t.descendants(i=>{i.type===n&&(o=!0)}),o},tc=(r,e,t)=>{if(r.commands.undoInputRule())return!0;if(r.state.selection.from!==r.state.selection.to)return!1;if(!Ur(r.state,e)&&jx(r.state,e,t)){let{$anchor:a}=r.state.selection,l=r.state.doc.resolve(a.before()-1),f=[];l.node().descendants((p,c)=>{p.type.name===e&&f.push({node:p,pos:c})});let u=f.at(-1);if(!u)return!1;let d=r.state.doc.resolve(l.start()+u.pos+1);return r.chain().cut({from:a.start()-1,to:a.end()+1},d.end()).joinForward().run()}if(!Ur(r.state,e)||!Ig(r.state))return!1;let n=Ls(e,r.state);if(!n)return!1;let i=r.state.doc.resolve(n.$pos.pos-2).node(n.depth),s=Jx(e,r.state,i);return Gx(e,r.state)&&!s?r.commands.joinItemBackward():r.chain().liftListItem(e).run()},Xx=(r,e)=>{let t=ic(r,e),n=Ls(r,e);return!n||!t?!1:t>n.depth},Yx=(r,e)=>{let t=ic(r,e),n=Ls(r,e);return!n||!t?!1:t<n.depth},rc=(r,e)=>{if(!Ur(r.state,e)||!Rg(r.state,e))return!1;let{selection:t}=r.state,{$from:n,$to:o}=t;return!t.empty&&n.sameParent(o)?!1:Xx(e,r.state)?r.chain().focus(r.state.selection.from+4).lift(e).joinBackward().run():Yx(e,r.state)?r.chain().joinForward().joinBackward().run():r.commands.joinItemForward()},bw=(r,e)=>{var t;let{$anchor:n}=e.selection,o=e.doc.resolve(n.pos-n.parentOffset-2);return!(o.index()===o.parent.childCount-1||((t=o.nodeAfter)==null?void 0:t.type.name)!==r)},sc=ue.create({name:"listKeymap",addOptions(){return{listTypes:[{itemName:"listItem",wrapperNames:["bulletList","orderedList"]},{itemName:"taskItem",wrapperNames:["taskList"]}]}},addKeyboardShortcuts(){return{Delete:({editor:r})=>{let e=!1;return this.options.listTypes.forEach(({itemName:t})=>{r.state.schema.nodes[t]!==void 0&&rc(r,t)&&(e=!0)}),e},"Mod-Delete":({editor:r})=>{let e=!1;return this.options.listTypes.forEach(({itemName:t})=>{r.state.schema.nodes[t]!==void 0&&rc(r,t)&&(e=!0)}),e},Backspace:({editor:r})=>{let e=!1;return this.options.listTypes.forEach(({itemName:t,wrapperNames:n})=>{r.state.schema.nodes[t]!==void 0&&tc(r,t,n)&&(e=!0)}),e},"Mod-Backspace":({editor:r})=>{let e=!1;return this.options.listTypes.forEach(({itemName:t,wrapperNames:n})=>{r.state.schema.nodes[t]!==void 0&&tc(r,t,n)&&(e=!0)}),e}}}}),$x=/^(\s*)(\d+)\.\s+(.*)$/,kw=/^\s/;function Sw(r){let e=[],t=0,n=0;for(;t<r.length;){let o=r[t],i=o.match($x);if(!i)break;let[,s,a,l]=i,f=s.length,u=l,d=t+1,p=[o];for(;d<r.length;){let c=r[d];if(c.match($x))break;if(c.trim()==="")p.push(c),u+=`
`,d+=1;else if(c.match(kw))p.push(c),u+=`
${c.slice(f+2)}`,d+=1;else break}e.push({indent:f,number:parseInt(a,10),content:u.trim(),raw:p.join(`
`)}),n=d,t=d}return[e,n]}function Qx(r,e,t){var n;let o=[],i=0;for(;i<r.length;){let s=r[i];if(s.indent===e){let a=s.content.split(`
`),l=((n=a[0])==null?void 0:n.trim())||"",f=[];l&&f.push({type:"paragraph",raw:l,tokens:t.inlineTokens(l)});let u=a.slice(1).join(`
`).trim();if(u){let c=t.blockTokens(u);f.push(...c)}let d=i+1,p=[];for(;d<r.length&&r[d].indent>e;)p.push(r[d]),d+=1;if(p.length>0){let c=Math.min(...p.map(m=>m.indent)),h=Qx(p,c,t);f.push({type:"list",ordered:!0,start:p[0].number,items:h,raw:p.map(m=>m.raw).join(`
`)})}o.push({type:"list_item",raw:s.raw,tokens:f}),i=d}else i+=1}return o}function Cw(r,e){return r.map(t=>{if(t.type!=="list_item")return e.parseChildren([t])[0];let n=[];return t.tokens&&t.tokens.length>0&&t.tokens.forEach(o=>{if(o.type==="paragraph"||o.type==="list"||o.type==="blockquote"||o.type==="code")n.push(...e.parseChildren([o]));else if(o.type==="text"&&o.tokens){let i=e.parseChildren([o]);n.push({type:"paragraph",content:i})}else{let i=e.parseChildren([o]);i.length>0&&n.push(...i)}}),{type:"listItem",content:n}})}var vw="listItem",Wx="textStyle",Kx=/^(\d+)\.\s$/,ac=be.create({name:"orderedList",addOptions(){return{itemTypeName:"listItem",HTMLAttributes:{},keepMarks:!1,keepAttributes:!1}},group:"block list",content(){return`${this.options.itemTypeName}+`},addAttributes(){return{start:{default:1,parseHTML:r=>r.hasAttribute("start")?parseInt(r.getAttribute("start")||"",10):1},type:{default:null,parseHTML:r=>r.getAttribute("type")}}},parseHTML(){return[{tag:"ol"}]},renderHTML({HTMLAttributes:r}){let{start:e,...t}=r;return e===1?["ol",ie(this.options.HTMLAttributes,t),0]:["ol",ie(this.options.HTMLAttributes,r),0]},markdownTokenName:"list",parseMarkdown:(r,e)=>{if(r.type!=="list"||!r.ordered)return[];let t=r.start||1,n=r.items?Cw(r.items,e):[];return t!==1?{type:"orderedList",attrs:{start:t},content:n}:{type:"orderedList",content:n}},renderMarkdown:(r,e)=>r.content?e.renderChildren(r.content,`
`):"",markdownTokenizer:{name:"orderedList",level:"block",start:r=>{let e=r.match(/^(\s*)(\d+)\.\s+/),t=e?.index;return t!==void 0?t:-1},tokenize:(r,e,t)=>{var n;let o=r.split(`
`),[i,s]=Sw(o);if(i.length===0)return;let a=Qx(i,0,t);return a.length===0?void 0:{type:"list",ordered:!0,start:((n=i[0])==null?void 0:n.number)||1,items:a,raw:o.slice(0,s).join(`
`)}}},markdownOptions:{indentsContent:!0},addCommands(){return{toggleOrderedList:()=>({commands:r,chain:e})=>this.options.keepAttributes?e().toggleList(this.name,this.options.itemTypeName,this.options.keepMarks).updateAttributes(vw,this.editor.getAttributes(Wx)).run():r.toggleList(this.name,this.options.itemTypeName,this.options.keepMarks)}},addKeyboardShortcuts(){return{"Mod-Shift-7":()=>this.editor.commands.toggleOrderedList()}},addInputRules(){let r=$r({find:Kx,type:this.type,getAttributes:e=>({start:+e[1]}),joinPredicate:(e,t)=>t.childCount+t.attrs.start===+e[1]});return(this.options.keepMarks||this.options.keepAttributes)&&(r=$r({find:Kx,type:this.type,keepMarks:this.options.keepMarks,keepAttributes:this.options.keepAttributes,getAttributes:e=>({start:+e[1],...this.editor.getAttributes(Wx)}),joinPredicate:(e,t)=>t.childCount+t.attrs.start===+e[1],editor:this.editor})),[r]}}),ww=/^\s*(\[([( |x])?\])\s$/,_w=be.create({name:"taskItem",addOptions(){return{nested:!1,HTMLAttributes:{},taskListTypeName:"taskList",a11y:void 0}},content(){return this.options.nested?"paragraph block*":"paragraph+"},defining:!0,addAttributes(){return{checked:{default:!1,keepOnSplit:!1,parseHTML:r=>{let e=r.getAttribute("data-checked");return e===""||e==="true"},renderHTML:r=>({"data-checked":r.checked})}}},parseHTML(){return[{tag:`li[data-type="${this.name}"]`,priority:51}]},renderHTML({node:r,HTMLAttributes:e}){return["li",ie(this.options.HTMLAttributes,e,{"data-type":this.name}),["label",["input",{type:"checkbox",checked:r.attrs.checked?"checked":null}],["span"]],["div",0]]},parseMarkdown:(r,e)=>{let t=[];if(r.tokens&&r.tokens.length>0?t.push(e.createNode("paragraph",{},e.parseInline(r.tokens))):r.text?t.push(e.createNode("paragraph",{},[e.createNode("text",{text:r.text})])):t.push(e.createNode("paragraph",{},[])),r.nestedTokens&&r.nestedTokens.length>0){let n=e.parseChildren(r.nestedTokens);t.push(...n)}return e.createNode("taskItem",{checked:r.checked||!1},t)},renderMarkdown:(r,e)=>{var t;let o=`- [${(t=r.attrs)!=null&&t.checked?"x":" "}] `;return Cs(r,e,o)},addKeyboardShortcuts(){let r={Enter:()=>this.editor.commands.splitListItem(this.name),"Shift-Tab":()=>this.editor.commands.liftListItem(this.name)};return this.options.nested?{...r,Tab:()=>this.editor.commands.sinkListItem(this.name)}:r},addNodeView(){return({node:r,HTMLAttributes:e,getPos:t,editor:n})=>{let o=document.createElement("li"),i=document.createElement("label"),s=document.createElement("span"),a=document.createElement("input"),l=document.createElement("div"),f=d=>{var p,c;a.ariaLabel=((c=(p=this.options.a11y)==null?void 0:p.checkboxLabel)==null?void 0:c.call(p,d,a.checked))||`Task item checkbox for ${d.textContent||"empty task item"}`};f(r),i.contentEditable="false",a.type="checkbox",a.addEventListener("mousedown",d=>d.preventDefault()),a.addEventListener("change",d=>{if(!n.isEditable&&!this.options.onReadOnlyChecked){a.checked=!a.checked;return}let{checked:p}=d.target;n.isEditable&&typeof t=="function"&&n.chain().focus(void 0,{scrollIntoView:!1}).command(({tr:c})=>{let h=t();if(typeof h!="number")return!1;let m=c.doc.nodeAt(h);return c.setNodeMarkup(h,void 0,{...m?.attrs,checked:p}),!0}).run(),!n.isEditable&&this.options.onReadOnlyChecked&&(this.options.onReadOnlyChecked(r,p)||(a.checked=!a.checked))}),Object.entries(this.options.HTMLAttributes).forEach(([d,p])=>{o.setAttribute(d,p)}),o.dataset.checked=r.attrs.checked,a.checked=r.attrs.checked,i.append(a,s),o.append(i,l),Object.entries(e).forEach(([d,p])=>{o.setAttribute(d,p)});let u=new Set(Object.keys(e));return{dom:o,contentDOM:l,update:d=>{if(d.type!==this.type)return!1;o.dataset.checked=d.attrs.checked,a.checked=d.attrs.checked,f(d);let p=n.extensionManager.attributes,c=gi(d,p),h=new Set(Object.keys(c)),m=this.options.HTMLAttributes;return u.forEach(g=>{h.has(g)||(g in m?o.setAttribute(g,m[g]):o.removeAttribute(g))}),Object.entries(c).forEach(([g,x])=>{x==null?g in m?o.setAttribute(g,m[g]):o.removeAttribute(g):o.setAttribute(g,x)}),u=h,!0}}}},addInputRules(){return[$r({find:ww,type:this.type,getAttributes:r=>({checked:r[r.length-1]==="x"})})]}}),Tw=be.create({name:"taskList",addOptions(){return{itemTypeName:"taskItem",HTMLAttributes:{}}},group:"block list",content(){return`${this.options.itemTypeName}+`},parseHTML(){return[{tag:`ul[data-type="${this.name}"]`,priority:51}]},renderHTML({HTMLAttributes:r}){return["ul",ie(this.options.HTMLAttributes,r,{"data-type":this.name}),0]},parseMarkdown:(r,e)=>e.createNode("taskList",{},e.parseChildren(r.items||[])),renderMarkdown:(r,e)=>r.content?e.renderChildren(r.content,`
`):"",markdownTokenizer:{name:"taskList",level:"block",start(r){var e;let t=(e=r.match(/^\s*[-+*]\s+\[([ xX])\]\s+/))==null?void 0:e.index;return t!==void 0?t:-1},tokenize(r,e,t){let n=i=>{let s=ul(i,{itemPattern:/^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,extractItemData:a=>({indentLevel:a[1].length,mainContent:a[4],checked:a[3].toLowerCase()==="x"}),createToken:(a,l)=>({type:"taskItem",raw:"",mainContent:a.mainContent,indentLevel:a.indentLevel,checked:a.checked,text:a.mainContent,tokens:t.inlineTokens(a.mainContent),nestedTokens:l}),customNestedParser:n},t);return s?[{type:"taskList",raw:s.raw,items:s.items}]:t.blockTokens(i)},o=ul(r,{itemPattern:/^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,extractItemData:i=>({indentLevel:i[1].length,mainContent:i[4],checked:i[3].toLowerCase()==="x"}),createToken:(i,s)=>({type:"taskItem",raw:"",mainContent:i.mainContent,indentLevel:i.indentLevel,checked:i.checked,text:i.mainContent,tokens:t.inlineTokens(i.mainContent),nestedTokens:s}),customNestedParser:n},t);if(o)return{type:"taskList",raw:o.raw,items:o.items}}},markdownOptions:{indentsContent:!0},addCommands(){return{toggleTaskList:()=>({commands:r})=>r.toggleList(this.name,this.options.itemTypeName)}},addKeyboardShortcuts(){return{"Mod-Shift-9":()=>this.editor.commands.toggleTaskList()}}}),MO=ue.create({name:"listKit",addExtensions(){let r=[];return this.options.bulletList!==!1&&r.push(nc.configure(this.options.bulletList)),this.options.listItem!==!1&&r.push(oc.configure(this.options.listItem)),this.options.listKeymap!==!1&&r.push(sc.configure(this.options.listKeymap)),this.options.orderedList!==!1&&r.push(ac.configure(this.options.orderedList)),this.options.taskItem!==!1&&r.push(_w.configure(this.options.taskItem)),this.options.taskList!==!1&&r.push(Tw.configure(this.options.taskList)),r}});var Jl="&nbsp;",lc="\xA0",Zx=be.create({name:"paragraph",priority:1e3,addOptions(){return{HTMLAttributes:{}}},group:"block",content:"inline*",parseHTML(){return[{tag:"p"}]},renderHTML({HTMLAttributes:r}){return["p",ie(this.options.HTMLAttributes,r),0]},parseMarkdown:(r,e)=>{let t=r.tokens||[];if(t.length===1&&t[0].type==="image")return e.parseChildren([t[0]]);let n=e.parseInline(t);return t.length===1&&t[0].type==="text"&&(t[0].raw===Jl||t[0].text===Jl||t[0].raw===lc||t[0].text===lc)&&n.length===1&&n[0].type==="text"&&(n[0].text===Jl||n[0].text===lc)?e.createNode("paragraph",void 0,[]):e.createNode("paragraph",void 0,n)},renderMarkdown:(r,e,t)=>{var n,o;if(!r)return"";let i=Array.isArray(r.content)?r.content:[];if(i.length===0){let s=Array.isArray((n=t?.previousNode)==null?void 0:n.content)?t.previousNode.content:[];return((o=t?.previousNode)==null?void 0:o.type)==="paragraph"&&s.length===0?Jl:""}return e.renderChildren(i)},addCommands(){return{setParagraph:()=>({commands:r})=>r.setNode(this.name)}},addKeyboardShortcuts(){return{"Mod-Alt-0":()=>this.editor.commands.setParagraph()}}});var Mw=/(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/,Ew=/(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g,e0=or.create({name:"strike",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"s"},{tag:"del"},{tag:"strike"},{style:"text-decoration",consuming:!1,getAttrs:r=>r.includes("line-through")?{}:!1}]},renderHTML({HTMLAttributes:r}){return["s",ie(this.options.HTMLAttributes,r),0]},markdownTokenName:"del",parseMarkdown:(r,e)=>e.applyMark("strike",e.parseInline(r.tokens||[])),renderMarkdown:(r,e)=>`~~${e.renderChildren(r)}~~`,addCommands(){return{setStrike:()=>({commands:r})=>r.setMark(this.name),toggleStrike:()=>({commands:r})=>r.toggleMark(this.name),unsetStrike:()=>({commands:r})=>r.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-Shift-s":()=>this.editor.commands.toggleStrike()}},addInputRules(){return[qr({find:Mw,type:this.type})]},addPasteRules(){return[br({find:Ew,type:this.type})]}});var t0=be.create({name:"text",group:"inline",parseMarkdown:r=>({type:"text",text:r.text||""}),renderMarkdown:r=>r.text||""});var r0=or.create({name:"underline",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"u"},{style:"text-decoration",consuming:!1,getAttrs:r=>r.includes("underline")?{}:!1}]},renderHTML({HTMLAttributes:r}){return["u",ie(this.options.HTMLAttributes,r),0]},parseMarkdown(r,e){return e.applyMark(this.name||"underline",e.parseInline(r.tokens||[]))},renderMarkdown(r,e){return`++${e.renderChildren(r)}++`},markdownTokenizer:{name:"underline",level:"inline",start(r){return r.indexOf("++")},tokenize(r,e,t){let o=/^(\+\+)([\s\S]+?)(\+\+)/.exec(r);if(!o)return;let i=o[2].trim();return{type:"underline",raw:o[0],text:i,tokens:t.inlineTokens(i)}}},addCommands(){return{setUnderline:()=>({commands:r})=>r.setMark(this.name),toggleUnderline:()=>({commands:r})=>r.toggleMark(this.name),unsetUnderline:()=>({commands:r})=>r.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-u":()=>this.editor.commands.toggleUnderline(),"Mod-U":()=>this.editor.commands.toggleUnderline()}}});var Aw=ue.create({name:"starterKit",addExtensions(){var r,e,t,n;let o=[];return this.options.bold!==!1&&o.push(yx.configure(this.options.bold)),this.options.blockquote!==!1&&o.push(xx.configure(this.options.blockquote)),this.options.bulletList!==!1&&o.push(nc.configure(this.options.bulletList)),this.options.code!==!1&&o.push(bx.configure(this.options.code)),this.options.codeBlock!==!1&&o.push(kx.configure(this.options.codeBlock)),this.options.document!==!1&&o.push(Sx.configure(this.options.document)),this.options.dropcursor!==!1&&o.push(cx.configure(this.options.dropcursor)),this.options.gapcursor!==!1&&o.push(px.configure(this.options.gapcursor)),this.options.hardBreak!==!1&&o.push(Cx.configure(this.options.hardBreak)),this.options.heading!==!1&&o.push(vx.configure(this.options.heading)),this.options.undoRedo!==!1&&o.push(mx.configure(this.options.undoRedo)),this.options.horizontalRule!==!1&&o.push(wx.configure(this.options.horizontalRule)),this.options.italic!==!1&&o.push(_x.configure(this.options.italic)),this.options.listItem!==!1&&o.push(oc.configure(this.options.listItem)),this.options.listKeymap!==!1&&o.push(sc.configure((r=this.options)==null?void 0:r.listKeymap)),this.options.link!==!1&&o.push(Vx.configure((e=this.options)==null?void 0:e.link)),this.options.orderedList!==!1&&o.push(ac.configure(this.options.orderedList)),this.options.paragraph!==!1&&o.push(Zx.configure(this.options.paragraph)),this.options.strike!==!1&&o.push(e0.configure(this.options.strike)),this.options.text!==!1&&o.push(t0.configure(this.options.text)),this.options.underline!==!1&&o.push(r0.configure((t=this.options)==null?void 0:t.underline)),this.options.trailingNode!==!1&&o.push(hx.configure((n=this.options)==null?void 0:n.trailingNode)),o}}),n0=Aw;var o0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var i0=([r,e,t])=>{let n=document.createElementNS("http://www.w3.org/2000/svg",r);return Object.keys(e).forEach(o=>{n.setAttribute(o,String(e[o]))}),t?.length&&t.forEach(o=>{let i=i0(o);n.appendChild(i)}),n},fc=(r,e={})=>{let n={...o0,...e};return i0(["svg",n,r])};var uc=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"}]];var dc=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];var cc=[["line",{x1:"19",x2:"10",y1:"4",y2:"4"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20"}]];var pc=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];var hc=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}]];var mc=[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]];var s0=65525;function a0(r){return fc(r,{class:"nextora-tiptap-toolbar__icon-svg",width:20,height:20,"aria-hidden":"true"})}var l0={bold:uc,italic:cc,strike:mc,code:dc,quote:hc,link:pc},f0={hostId:"nextora-tiptap-host",textareaSelector:"textarea#comment",labelId:"nextora-comment-field-label",toolbarSelector:".nextora-tiptap-toolbar"};function gc(r,e){if(e.isEmpty){r.value="";return}let t=e.getHTML();t.length>s0&&(t=t.slice(0,s0)),r.value=t}function Pw(r){let e=window.nextoraComments??{},t=document.createElement("div");t.className="nextora-tiptap-toolbar",t.setAttribute("role","toolbar"),t.setAttribute("aria-label",e.toolbarLabel??"Comment formatting");let n=[{format:"bold",iconKey:"bold",isActive:()=>r.isActive("bold"),run:()=>r.chain().focus().toggleBold().run(),ariaLabel:e.toolBold??"Bold",title:e.toolBoldHint??"Bold (Ctrl+B)"},{format:"italic",iconKey:"italic",isActive:()=>r.isActive("italic"),run:()=>r.chain().focus().toggleItalic().run(),ariaLabel:e.toolItalic??"Italic",title:e.toolItalicHint??"Italic (Ctrl+I)"},{format:"strike",iconKey:"strike",isActive:()=>r.isActive("strike"),run:()=>r.chain().focus().toggleStrike().run(),ariaLabel:e.toolStrike??"Strikethrough",title:e.toolStrikeHint??"Strikethrough"},{format:"code",iconKey:"code",isActive:()=>r.isActive("code"),run:()=>r.chain().focus().toggleCode().run(),ariaLabel:e.toolCode??"Inline code",title:e.toolCodeHint??"Inline code"},{format:"blockquote",iconKey:"quote",isActive:()=>r.isActive("blockquote"),run:()=>r.chain().focus().toggleBlockquote().run(),ariaLabel:e.toolQuote??"Blockquote",title:e.toolQuoteHint??"Blockquote"}],o=document.createElement("div");o.className="nextora-tiptap-toolbar__group";let i=[];for(let f of n){let u=document.createElement("button");u.type="button",u.className="nextora-tiptap-toolbar__btn",u.dataset.format=f.format,u.replaceChildren(a0(l0[f.iconKey])),u.setAttribute("aria-label",f.ariaLabel),u.title=f.title,u.addEventListener("click",()=>{f.run()}),u.setAttribute("aria-pressed","false"),o.append(u),i.push(u)}let s=document.createElement("div");s.className="nextora-tiptap-toolbar__group nextora-tiptap-toolbar__group--end";let a=document.createElement("button");a.type="button",a.className="nextora-tiptap-toolbar__btn",a.dataset.format="link",a.replaceChildren(a0(l0.link)),a.setAttribute("aria-label",e.toolLink??"Link"),a.title=e.toolLinkHint??e.linkPromptTitle??"Link",a.setAttribute("aria-pressed","false"),a.addEventListener("click",()=>{let f=r.getAttributes("link").href,u=f&&typeof f=="string"?f:e.linkPromptDefault??"https://",d=window.prompt(e.linkPromptTitle??"URL",u);if(d===null)return;let p=d.trim();if(p===""){r.chain().focus().extendMarkRange("link").unsetLink().run();return}r.chain().focus().extendMarkRange("link").setLink({href:p}).run()}),s.append(a),t.append(o,s);let l=()=>{for(let u=0;u<n.length;u++){let d=n[u].isActive(),p=i[u];p.setAttribute("aria-pressed",d?"true":"false"),p.classList.toggle("is-active",d)}let f=r.isActive("link");a.setAttribute("aria-pressed",f?"true":"false"),a.classList.toggle("is-active",f)};return r.on("transaction",l),l(),t}var u0=new WeakSet;function Ow(){let r=window.nextoraCommentTiptap?.mounts;return r&&r.length>0?r.map(e=>({...f0,...e})):[f0]}function Dw(r){let e=document.getElementById(r.hostId),t=document.querySelector(r.textareaSelector);if(!e||!t||!(e instanceof HTMLElement)||u0.has(e))return;let n=r.labelId?document.getElementById(r.labelId):null,o=e.dataset.placeholder??"",s=e.parentElement?.querySelector(r.toolbarSelector)??null,a={class:"nextora-tiptap-prose min-h-[9rem] max-w-none px-3 py-2.5 text-sm leading-relaxed text-contrast outline-none focus:outline-none",tabindex:"0",role:"textbox","aria-multiline":"true"};n&&(a["aria-labelledby"]=r.labelId);let l=new Zg({element:e,injectCSS:!0,extensions:[n0.configure({heading:!1,bulletList:!1,orderedList:!1,listItem:!1,listKeymap:!1,codeBlock:!1,horizontalRule:!1,underline:!1,link:{openOnClick:!1,autolink:!0,protocols:["http","https","mailto"],HTMLAttributes:{rel:"nofollow noopener noreferrer",class:"text-primary underline"}}}),gx.configure({placeholder:o})],content:t.value.trim()?t.value:"",editorProps:{attributes:a},onUpdate:()=>gc(t,l),onCreate:()=>gc(t,l)});u0.add(e),s&&(s.replaceChildren(),s.append(Pw(l))),n?.addEventListener("click",()=>{l.commands.focus()}),t.closest("form")?.addEventListener("submit",u=>{gc(t,l),l.isEmpty&&(u.preventDefault(),l.commands.focus())},{capture:!0})}function d0(){for(let r of Ow())Dw(r)}var Oo="data-nextora-scroll-animation-init",c0="top 85%";var p0="power3.out";var Xl=["animation-fade-in","animation-fade-in-up","animation-fade-in-down","animation-fade-in-left","animation-fade-in-right","animation-zoom-in","animation-zoom-out"],Lw=Xl.map(r=>`.${r}`).join(", "),h0=".animation-parallax, [data-parallax-speed]";var bi={"animation-fade-in":()=>({from:{opacity:0},to:{opacity:1}}),"animation-fade-in-up":({distance:r})=>({from:{opacity:0,y:r},to:{opacity:1,y:0}}),"animation-fade-in-down":({distance:r})=>({from:{opacity:0,y:-r},to:{opacity:1,y:0}}),"animation-fade-in-left":({distance:r})=>({from:{opacity:0,x:-r},to:{opacity:1,x:0}}),"animation-fade-in-right":({distance:r})=>({from:{opacity:0,x:r},to:{opacity:1,x:0}}),"animation-zoom-in":()=>({from:{opacity:0,scale:.85},to:{opacity:1,scale:1}}),"animation-zoom-out":()=>({from:{opacity:0,scale:1.15},to:{opacity:1,scale:1}})};function xc(r,e){bi[r]=e}function m0(){return Object.keys(bi).map(r=>`.${r}`).join(", ")}function yc(r,e,t){let n=r.getAttribute(e);if(n===null||n.trim()==="")return t;let o=Number.parseFloat(n);return Number.isFinite(o)?o:t}function g0(r,e){let t=r.getAttribute(e);if(t===null||t.trim()==="")return null;let n=Number.parseFloat(t);return Number.isFinite(n)?n:null}function Ns(r){let e=g0(r,"data-parallax-speed"),t=r.classList.contains("animation-parallax");return{delay:yc(r,"data-delay",0),duration:yc(r,"data-duration",.8),ease:r.getAttribute("data-ease")?.trim()||p0,stagger:g0(r,"data-stagger"),distance:yc(r,"data-distance",40),parallaxSpeed:e??(t?.35:null)}}function x0(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Bw(r,e,t){return e&&x0(r.prototype,e),t&&x0(r,t),r}var ut,Zl,Fw,ir,jn,Gn,Si,b0,Do,Ci,k0,Sn,Nr,S0,C0=function(){return ut||typeof window<"u"&&(ut=window.gsap)&&ut.registerPlugin&&ut},v0=1,ki=[],ee=[],Rr=[],Is=Date.now,bc=function(e,t){return t},zw=function(){var e=Ci.core,t=e.bridge||{},n=e._scrollers,o=e._proxies;n.push.apply(n,ee),o.push.apply(o,Rr),ee=n,Rr=o,bc=function(s,a){return t[s](a)}},vn=function(e,t){return~Rr.indexOf(e)&&Rr[Rr.indexOf(e)+1][t]},Bs=function(e){return!!~k0.indexOf(e)},Ft=function(e,t,n,o,i){return e.addEventListener(t,n,{passive:o!==!1,capture:!!i})},Bt=function(e,t,n,o){return e.removeEventListener(t,n,!!o)},Yl="scrollLeft",Ql="scrollTop",kc=function(){return Sn&&Sn.isPressed||ee.cache++},ef=function(e,t){var n=function o(i){if(i||i===0){v0&&(ir.history.scrollRestoration="manual");var s=Sn&&Sn.isPressed;i=o.v=Math.round(i)||(Sn&&Sn.iOS?1:0),e(i),o.cacheID=ee.cache,s&&bc("ss",i)}else(t||ee.cache!==o.cacheID||bc("ref"))&&(o.cacheID=ee.cache,o.v=e());return o.v+o.offset};return n.offset=0,e&&n},vt={s:Yl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ef(function(r){return arguments.length?ir.scrollTo(r,We.sc()):ir.pageXOffset||jn[Yl]||Gn[Yl]||Si[Yl]||0})},We={s:Ql,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:vt,sc:ef(function(r){return arguments.length?ir.scrollTo(vt.sc(),r):ir.pageYOffset||jn[Ql]||Gn[Ql]||Si[Ql]||0})},zt=function(e,t){return(t&&t._ctx&&t._ctx.selector||ut.utils.toArray)(e)[0]||(typeof e=="string"&&ut.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Hw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Cn=function(e,t){var n=t.s,o=t.sc;Bs(e)&&(e=jn.scrollingElement||Gn);var i=ee.indexOf(e),s=o===We.sc?1:2;!~i&&(i=ee.push(e)-1),ee[i+s]||Ft(e,"scroll",kc);var a=ee[i+s],l=a||(ee[i+s]=ef(vn(e,n),!0)||(Bs(e)?o:ef(function(f){return arguments.length?e[n]=f:e[n]})));return l.target=e,a||(l.smooth=ut.getProperty(e,"scrollBehavior")==="smooth"),l},tf=function(e,t,n){var o=e,i=e,s=Is(),a=s,l=t||50,f=Math.max(500,l*3),u=function(h,m){var g=Is();m||g-s>l?(i=o,o=h,a=s,s=g):n?o+=h:o=i+(h-i)/(g-a)*(s-a)},d=function(){i=o=n?0:o,a=s=0},p=function(h){var m=a,g=i,x=Is();return(h||h===0)&&h!==o&&u(h),s===a||x-a>f?0:(o+(n?g:-g))/((n?x:s)-m)*1e3};return{update:u,reset:d,getVelocity:p}},Rs=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},y0=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},w0=function(){Ci=ut.core.globals().ScrollTrigger,Ci&&Ci.core&&zw()},_0=function(e){return ut=e||C0(),!Zl&&ut&&typeof document<"u"&&document.body&&(ir=window,jn=document,Gn=jn.documentElement,Si=jn.body,k0=[ir,jn,Gn,Si],Fw=ut.utils.clamp,S0=ut.core.context||function(){},Do="onpointerenter"in Si?"pointer":"mouse",b0=Le.isTouch=ir.matchMedia&&ir.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ir||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Nr=Le.eventTypes=("ontouchstart"in Gn?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Gn?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return v0=0},500),Zl=1),Ci||w0(),Zl};vt.op=We;ee.cache=0;var Le=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Zl||_0(ut)||console.warn("Please gsap.registerPlugin(Observer)"),Ci||w0();var o=n.tolerance,i=n.dragMinimum,s=n.type,a=n.target,l=n.lineHeight,f=n.debounce,u=n.preventDefault,d=n.onStop,p=n.onStopDelay,c=n.ignore,h=n.wheelSpeed,m=n.event,g=n.onDragStart,x=n.onDragEnd,y=n.onDrag,k=n.onPress,S=n.onRelease,C=n.onRight,w=n.onLeft,b=n.onUp,T=n.onDown,M=n.onChangeX,E=n.onChangeY,U=n.onChange,O=n.onToggleX,B=n.onToggleY,R=n.onHover,z=n.onHoverEnd,j=n.onMove,I=n.ignoreCheck,re=n.isNormalizer,de=n.onGestureStart,v=n.onGestureEnd,ke=n.onWheel,Pt=n.onEnable,Er=n.onDisable,Ee=n.onClick,rt=n.scrollSpeed,pt=n.capture,Ve=n.allowClicks,Ot=n.lockAxis,ht=n.onLockAxis;this.target=a=zt(a)||Gn,this.vars=n,c&&(c=ut.utils.toArray(c)),o=o||1e-9,i=i||0,h=h||1,rt=rt||1,s=s||"wheel,touch,pointer",f=f!==!1,l||(l=parseFloat(ir.getComputedStyle(Si).lineHeight)||22);var On,Dt,Lt,le,Ie,Wt,er,_=this,tr=0,rn=0,Dn=n.passive||!u&&n.passive!==!1,Ae=Cn(a,vt),nn=Cn(a,We),Ln=Ae(),io=nn(),Xe=~s.indexOf("touch")&&!~s.indexOf("pointer")&&Nr[0]==="pointerdown",Nn=Bs(a),Be=a.ownerDocument||jn,Ar=[0,0,0],pr=[0,0,0],on=0,$i=function(){return on=Is()},Ue=function($,ce){return(_.event=$)&&c&&Hw($.target,c)||ce&&Xe&&$.pointerType!=="touch"||I&&I($,ce)},ga=function(){_._vx.reset(),_._vy.reset(),Dt.pause(),d&&d(_)},sn=function(){var $=_.deltaX=y0(Ar),ce=_.deltaY=y0(pr),D=Math.abs($)>=o,G=Math.abs(ce)>=o;U&&(D||G)&&U(_,$,ce,Ar,pr),D&&(C&&_.deltaX>0&&C(_),w&&_.deltaX<0&&w(_),M&&M(_),O&&_.deltaX<0!=tr<0&&O(_),tr=_.deltaX,Ar[0]=Ar[1]=Ar[2]=0),G&&(T&&_.deltaY>0&&T(_),b&&_.deltaY<0&&b(_),E&&E(_),B&&_.deltaY<0!=rn<0&&B(_),rn=_.deltaY,pr[0]=pr[1]=pr[2]=0),(le||Lt)&&(j&&j(_),Lt&&(g&&Lt===1&&g(_),y&&y(_),Lt=0),le=!1),Wt&&!(Wt=!1)&&ht&&ht(_),Ie&&(ke(_),Ie=!1),On=0},Yo=function($,ce,D){Ar[D]+=$,pr[D]+=ce,_._vx.update($),_._vy.update(ce),f?On||(On=requestAnimationFrame(sn)):sn()},Qo=function($,ce){Ot&&!er&&(_.axis=er=Math.abs($)>Math.abs(ce)?"x":"y",Wt=!0),er!=="y"&&(Ar[2]+=$,_._vx.update($,!0)),er!=="x"&&(pr[2]+=ce,_._vy.update(ce,!0)),f?On||(On=requestAnimationFrame(sn)):sn()},Rn=function($){if(!Ue($,1)){$=Rs($,u);var ce=$.clientX,D=$.clientY,G=ce-_.x,q=D-_.y,J=_.isDragging;_.x=ce,_.y=D,(J||(G||q)&&(Math.abs(_.startX-ce)>=i||Math.abs(_.startY-D)>=i))&&(Lt||(Lt=J?2:1),J||(_.isDragging=!0),Qo(G,q))}},so=_.onPress=function(Y){Ue(Y,1)||Y&&Y.button||(_.axis=er=null,Dt.pause(),_.isPressed=!0,Y=Rs(Y),tr=rn=0,_.startX=_.x=Y.clientX,_.startY=_.y=Y.clientY,_._vx.reset(),_._vy.reset(),Ft(re?a:Be,Nr[1],Rn,Dn,!0),_.deltaX=_.deltaY=0,k&&k(_))},oe=_.onRelease=function(Y){if(!Ue(Y,1)){Bt(re?a:Be,Nr[1],Rn,!0);var $=!isNaN(_.y-_.startY),ce=_.isDragging,D=ce&&(Math.abs(_.x-_.startX)>3||Math.abs(_.y-_.startY)>3),G=Rs(Y);!D&&$&&(_._vx.reset(),_._vy.reset(),u&&Ve&&ut.delayedCall(.08,function(){if(Is()-on>300&&!Y.defaultPrevented){if(Y.target.click)Y.target.click();else if(Be.createEvent){var q=Be.createEvent("MouseEvents");q.initMouseEvent("click",!0,!0,ir,1,G.screenX,G.screenY,G.clientX,G.clientY,!1,!1,!1,!1,0,null),Y.target.dispatchEvent(q)}}})),_.isDragging=_.isGesturing=_.isPressed=!1,d&&ce&&!re&&Dt.restart(!0),Lt&&sn(),x&&ce&&x(_),S&&S(_,D)}},ao=function($){return $.touches&&$.touches.length>1&&(_.isGesturing=!0)&&de($,_.isDragging)},Pr=function(){return(_.isGesturing=!1)||v(_)},Or=function($){if(!Ue($)){var ce=Ae(),D=nn();Yo((ce-Ln)*rt,(D-io)*rt,1),Ln=ce,io=D,d&&Dt.restart(!0)}},Dr=function($){if(!Ue($)){$=Rs($,u),ke&&(Ie=!0);var ce=($.deltaMode===1?l:$.deltaMode===2?ir.innerHeight:1)*h;Yo($.deltaX*ce,$.deltaY*ce,0),d&&!re&&Dt.restart(!0)}},lo=function($){if(!Ue($)){var ce=$.clientX,D=$.clientY,G=ce-_.x,q=D-_.y;_.x=ce,_.y=D,le=!0,d&&Dt.restart(!0),(G||q)&&Qo(G,q)}},Zo=function($){_.event=$,R(_)},an=function($){_.event=$,z(_)},Wi=function($){return Ue($)||Rs($,u)&&Ee(_)};Dt=_._dc=ut.delayedCall(p||.25,ga).pause(),_.deltaX=_.deltaY=0,_._vx=tf(0,50,!0),_._vy=tf(0,50,!0),_.scrollX=Ae,_.scrollY=nn,_.isDragging=_.isGesturing=_.isPressed=!1,S0(this),_.enable=function(Y){return _.isEnabled||(Ft(Nn?Be:a,"scroll",kc),s.indexOf("scroll")>=0&&Ft(Nn?Be:a,"scroll",Or,Dn,pt),s.indexOf("wheel")>=0&&Ft(a,"wheel",Dr,Dn,pt),(s.indexOf("touch")>=0&&b0||s.indexOf("pointer")>=0)&&(Ft(a,Nr[0],so,Dn,pt),Ft(Be,Nr[2],oe),Ft(Be,Nr[3],oe),Ve&&Ft(a,"click",$i,!0,!0),Ee&&Ft(a,"click",Wi),de&&Ft(Be,"gesturestart",ao),v&&Ft(Be,"gestureend",Pr),R&&Ft(a,Do+"enter",Zo),z&&Ft(a,Do+"leave",an),j&&Ft(a,Do+"move",lo)),_.isEnabled=!0,_.isDragging=_.isGesturing=_.isPressed=le=Lt=!1,_._vx.reset(),_._vy.reset(),Ln=Ae(),io=nn(),Y&&Y.type&&so(Y),Pt&&Pt(_)),_},_.disable=function(){_.isEnabled&&(ki.filter(function(Y){return Y!==_&&Bs(Y.target)}).length||Bt(Nn?Be:a,"scroll",kc),_.isPressed&&(_._vx.reset(),_._vy.reset(),Bt(re?a:Be,Nr[1],Rn,!0)),Bt(Nn?Be:a,"scroll",Or,pt),Bt(a,"wheel",Dr,pt),Bt(a,Nr[0],so,pt),Bt(Be,Nr[2],oe),Bt(Be,Nr[3],oe),Bt(a,"click",$i,!0),Bt(a,"click",Wi),Bt(Be,"gesturestart",ao),Bt(Be,"gestureend",Pr),Bt(a,Do+"enter",Zo),Bt(a,Do+"leave",an),Bt(a,Do+"move",lo),_.isEnabled=_.isPressed=_.isDragging=!1,Er&&Er(_))},_.kill=_.revert=function(){_.disable();var Y=ki.indexOf(_);Y>=0&&ki.splice(Y,1),Sn===_&&(Sn=0)},ki.push(_),re&&Bs(a)&&(Sn=_),_.enable(m)},Bw(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Le.version="3.15.0";Le.create=function(r){return new Le(r)};Le.register=_0;Le.getAll=function(){return ki.slice()};Le.getById=function(r){return ki.filter(function(e){return e.vars.id===r})[0]};C0()&&ut.registerPlugin(Le);var N,Ti,ne,me,lr,he,Nc,yf,Ys,$s,zs,rf,wt,Sf,Mc,Vt,T0,M0,Mi,q0,Sc,$0,Ht,Ec,W0,K0,Jn,Ac,Rc,Ei,Ic,Ws,Pc,Cc,nf=1,_t=Date.now,vc=_t(),wr=0,Hs=0,E0=function(e,t,n){var o=ar(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=o,o?e.substr(6,e.length-7):e},A0=function(e,t){return t&&(!ar(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Vw=function r(){return Hs&&requestAnimationFrame(r)},P0=function(){return Sf=1},O0=function(){return Sf=0},Jr=function(e){return e},Vs=function(e){return Math.round(e*1e5)/1e5||0},j0=function(){return typeof window<"u"},G0=function(){return N||j0()&&(N=window.gsap)&&N.registerPlugin&&N},Fo=function(e){return!!~Nc.indexOf(e)},J0=function(e){return(e==="Height"?Ic:ne["inner"+e])||lr["client"+e]||he["client"+e]},X0=function(e){return vn(e,"getBoundingClientRect")||(Fo(e)?function(){return xf.width=ne.innerWidth,xf.height=Ic,xf}:function(){return wn(e)})},Uw=function(e,t,n){var o=n.d,i=n.d2,s=n.a;return(s=vn(e,"getBoundingClientRect"))?function(){return s()[o]}:function(){return(t?J0(i):e["client"+i])||0}},qw=function(e,t){return!t||~Rr.indexOf(e)?X0(e):function(){return xf}},Xr=function(e,t){var n=t.s,o=t.d2,i=t.d,s=t.a;return Math.max(0,(n="scroll"+o)&&(s=vn(e,n))?s()-X0(e)()[i]:Fo(e)?(lr[n]||he[n])-J0(o):e[n]-e["offset"+o])},of=function(e,t){for(var n=0;n<Mi.length;n+=3)(!t||~t.indexOf(Mi[n+1]))&&e(Mi[n],Mi[n+1],Mi[n+2])},ar=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},Us=function(e){return typeof e=="number"},Lo=function(e){return typeof e=="object"},Fs=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},vi=function(e,t,n){if(e.enabled){var o=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);o&&o.totalTime&&(e.callbackAnimation=o)}},wi=Math.abs,Y0="left",Q0="top",Bc="right",Fc="bottom",Ro="width",Io="height",Ks="Right",js="Left",Gs="Top",Js="Bottom",Ke="padding",Cr="margin",Pi="Width",zc="Height",Ge="px",vr=function(e){return ne.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},$w=function(e){var t=vr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},D0=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},wn=function(e,t){var n=t&&vr(e)[Mc]!=="matrix(1, 0, 0, 1, 0, 0)"&&N.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),o=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),o},bf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Z0=function(e){var t=[],n=e.labels,o=e.duration(),i;for(i in n)t.push(n[i]/o);return t},Ww=function(e){return function(t){return N.utils.snap(Z0(e),t)}},Hc=function(e){var t=N.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(o,i){return o-i});return n?function(o,i,s){s===void 0&&(s=.001);var a;if(!i)return t(o);if(i>0){for(o-=s,a=0;a<n.length;a++)if(n[a]>=o)return n[a];return n[a-1]}else for(a=n.length,o+=s;a--;)if(n[a]<=o)return n[a];return n[0]}:function(o,i,s){s===void 0&&(s=.001);var a=t(o);return!i||Math.abs(a-o)<s||a-o<0==i<0?a:t(i<0?o-e:o+e)}},Kw=function(e){return function(t,n){return Hc(Z0(e))(t,n.direction)}},sf=function(e,t,n,o){return n.split(",").forEach(function(i){return e(t,i,o)})},et=function(e,t,n,o,i){return e.addEventListener(t,n,{passive:!o,capture:!!i})},Ze=function(e,t,n,o){return e.removeEventListener(t,n,!!o)},af=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},L0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},lf={toggleActions:"play",anticipatePin:0},kf={top:0,left:0,center:.5,bottom:1,right:1},pf=function(e,t){if(ar(e)){var n=e.indexOf("="),o=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(o*=t/100),e=e.substr(0,n-1)),e=o+(e in kf?kf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ff=function(e,t,n,o,i,s,a,l){var f=i.startColor,u=i.endColor,d=i.fontSize,p=i.indent,c=i.fontWeight,h=me.createElement("div"),m=Fo(n)||vn(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,x=m?he:n.tagName==="IFRAME"?n.contentDocument.body:n,y=e.indexOf("start")!==-1,k=y?f:u,S="border-color:"+k+";font-size:"+d+";color:"+k+";font-weight:"+c+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((g||l)&&m?"fixed;":"absolute;"),(g||l||!m)&&(S+=(o===We?Bc:Fc)+":"+(s+parseFloat(p))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),h._isStart=y,h.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),h.style.cssText=S,h.innerText=t||t===0?e+"-"+t:e,x.children[0]?x.insertBefore(h,x.children[0]):x.appendChild(h),h._offset=h["offset"+o.op.d2],hf(h,0,o,y),h},hf=function(e,t,n,o){var i={display:"block"},s=n[o?"os2":"p2"],a=n[o?"p2":"os2"];e._isFlipped=o,i[n.a+"Percent"]=o?-100:0,i[n.a]=o?"1px":0,i["border"+s+Pi]=1,i["border"+a+Pi]=0,i[n.p]=t+"px",N.set(e,i)},te=[],Oc={},Qs,N0=function(){return _t()-wr>34&&(Qs||(Qs=requestAnimationFrame(_n)))},_i=function(){(!Ht||!Ht.isPressed||Ht.startX>he.clientWidth)&&(ee.cache++,Ht?Qs||(Qs=requestAnimationFrame(_n)):_n(),wr||Ho("scrollStart"),wr=_t())},wc=function(){K0=ne.innerWidth,W0=ne.innerHeight},qs=function(e){ee.cache++,(e===!0||!wt&&!$0&&!me.fullscreenElement&&!me.webkitFullscreenElement&&(!Ec||K0!==ne.innerWidth||Math.abs(ne.innerHeight-W0)>ne.innerHeight*.25))&&yf.restart(!0)},zo={},jw=[],ey=function r(){return Ze(X,"scrollEnd",r)||No(!0)},Ho=function(e){return zo[e]&&zo[e].map(function(t){return t()})||jw},sr=[],ty=function(e){for(var t=0;t<sr.length;t+=5)(!e||sr[t+4]&&sr[t+4].query===e)&&(sr[t].style.cssText=sr[t+1],sr[t].getBBox&&sr[t].setAttribute("transform",sr[t+2]||""),sr[t+3].uncache=1)},ry=function(){return ee.forEach(function(e){return Tt(e)&&++e.cacheID&&(e.rec=e())})},Vc=function(e,t){var n;for(Vt=0;Vt<te.length;Vt++)n=te[Vt],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ws=!0,t&&ty(t),t||Ho("revert")},ny=function(e,t){ee.cache++,(t||!Ut)&&ee.forEach(function(n){return Tt(n)&&n.cacheID++&&(n.rec=0)}),ar(e)&&(ne.history.scrollRestoration=Rc=e)},Ut,Bo=0,R0,Gw=function(){if(R0!==Bo){var e=R0=Bo;requestAnimationFrame(function(){return e===Bo&&No(!0)})}},oy=function(){he.appendChild(Ei),Ic=!Ht&&Ei.offsetHeight||ne.innerHeight,he.removeChild(Ei)},I0=function(e){return Ys(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},No=function(e,t){if(lr=me.documentElement,he=me.body,Nc=[ne,me,lr,he],wr&&!e&&!Ws){et(X,"scrollEnd",ey);return}oy(),Ut=X.isRefreshing=!0,Ws||ry();var n=Ho("refreshInit");q0&&X.sort(),t||Vc(),ee.forEach(function(o){Tt(o)&&(o.smooth&&(o.target.style.scrollBehavior="auto"),o(0))}),te.slice(0).forEach(function(o){return o.refresh()}),Ws=!1,te.forEach(function(o){if(o._subPinOffset&&o.pin){var i=o.vars.horizontal?"offsetWidth":"offsetHeight",s=o.pin[i];o.revert(!0,1),o.adjustPinSpacing(o.pin[i]-s),o.refresh()}}),Pc=1,I0(!0),te.forEach(function(o){var i=Xr(o.scroller,o._dir),s=o.vars.end==="max"||o._endClamp&&o.end>i,a=o._startClamp&&o.start>=i;(s||a)&&o.setPositions(a?i-1:o.start,s?Math.max(a?i:o.start+1,i):o.end,!0)}),I0(!1),Pc=0,n.forEach(function(o){return o&&o.render&&o.render(-1)}),ee.forEach(function(o){Tt(o)&&(o.smooth&&requestAnimationFrame(function(){return o.target.style.scrollBehavior="smooth"}),o.rec&&o(o.rec))}),ny(Rc,1),yf.pause(),Bo++,Ut=2,_n(2),te.forEach(function(o){return Tt(o.vars.onRefresh)&&o.vars.onRefresh(o)}),Ut=X.isRefreshing=!1,Ho("refresh")},Dc=0,mf=1,Xs,_n=function(e){if(e===2||!Ut&&!Ws){X.isUpdating=!0,Xs&&Xs.update(0);var t=te.length,n=_t(),o=n-vc>=50,i=t&&te[0].scroll();if(mf=Dc>i?-1:1,Ut||(Dc=i),o&&(wr&&!Sf&&n-wr>200&&(wr=0,Ho("scrollEnd")),zs=vc,vc=n),mf<0){for(Vt=t;Vt-- >0;)te[Vt]&&te[Vt].update(0,o);mf=1}else for(Vt=0;Vt<t;Vt++)te[Vt]&&te[Vt].update(0,o);X.isUpdating=!1}Qs=0},Lc=[Y0,Q0,Fc,Bc,Cr+Js,Cr+Ks,Cr+Gs,Cr+js,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],gf=Lc.concat([Ro,Io,"boxSizing","max"+Pi,"max"+zc,"position",Cr,Ke,Ke+Gs,Ke+Ks,Ke+Js,Ke+js]),Jw=function(e,t,n){Ai(n);var o=e._gsap;if(o.spacerIsNative)Ai(o.spacerState);else if(e._gsap.swappedIn){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}e._gsap.swappedIn=!1},_c=function(e,t,n,o){if(!e._gsap.swappedIn){for(var i=Lc.length,s=t.style,a=e.style,l;i--;)l=Lc[i],s[l]=n[l];s.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(s.display="inline-block"),a[Fc]=a[Bc]="auto",s.flexBasis=n.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[Ro]=bf(e,vt)+Ge,s[Io]=bf(e,We)+Ge,s[Ke]=a[Cr]=a[Q0]=a[Y0]="0",Ai(o),a[Ro]=a["max"+Pi]=n[Ro],a[Io]=a["max"+zc]=n[Io],a[Ke]=n[Ke],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Xw=/([A-Z])/g,Ai=function(e){if(e){var t=e.t.style,n=e.length,o=0,i,s;for((e.t._gsap||N.core.getCache(e.t)).uncache=1;o<n;o+=2)s=e[o+1],i=e[o],s?t[i]=s:t[i]&&t.removeProperty(i.replace(Xw,"-$1").toLowerCase())}},uf=function(e){for(var t=gf.length,n=e.style,o=[],i=0;i<t;i++)o.push(gf[i],n[gf[i]]);return o.t=e,o},Yw=function(e,t,n){for(var o=[],i=e.length,s=n?8:0,a;s<i;s+=2)a=e[s],o.push(a,a in t?t[a]:e[s+1]);return o.t=e.t,o},xf={left:0,top:0},B0=function(e,t,n,o,i,s,a,l,f,u,d,p,c,h){Tt(e)&&(e=e(l)),ar(e)&&e.substr(0,3)==="max"&&(e=p+(e.charAt(4)==="="?pf("0"+e.substr(3),n):0));var m=c?c.time():0,g,x,y;if(c&&c.seek(0),isNaN(e)||(e=+e),Us(e))c&&(e=N.utils.mapRange(c.scrollTrigger.start,c.scrollTrigger.end,0,p,e)),a&&hf(a,n,o,!0);else{Tt(t)&&(t=t(l));var k=(e||"0").split(" "),S,C,w,b;y=zt(t,l)||he,S=wn(y)||{},(!S||!S.left&&!S.top)&&vr(y).display==="none"&&(b=y.style.display,y.style.display="block",S=wn(y),b?y.style.display=b:y.style.removeProperty("display")),C=pf(k[0],S[o.d]),w=pf(k[1]||"0",n),e=S[o.p]-f[o.p]-u+C+i-w,a&&hf(a,w,o,n-w<20||a._isStart&&w>20),n-=n-w}if(h&&(l[h]=e||-.001,e<0&&(e=0)),s){var T=e+n,M=s._isStart;g="scroll"+o.d2,hf(s,T,o,M&&T>20||!M&&(d?Math.max(he[g],lr[g]):s.parentNode[g])<=T+1),d&&(f=wn(a),d&&(s.style[o.op.p]=f[o.op.p]-o.op.m-s._offset+Ge))}return c&&y&&(g=wn(y),c.seek(p),x=wn(y),c._caScrollDist=g[o.p]-x[o.p],e=e/c._caScrollDist*p),c&&c.seek(m),c?e:Math.round(e)},Qw=/(webkit|moz|length|cssText|inset)/i,F0=function(e,t,n,o){if(e.parentNode!==t){var i=e.style,s,a;if(t===he){e._stOrig=i.cssText,a=vr(e);for(s in a)!+s&&!Qw.test(s)&&a[s]&&typeof i[s]=="string"&&s!=="0"&&(i[s]=a[s]);i.top=n,i.left=o}else i.cssText=e._stOrig;N.core.getCache(e).uncache=1,t.appendChild(e)}},iy=function(e,t,n){var o=t,i=o;return function(s){var a=Math.round(e());return a!==o&&a!==i&&Math.abs(a-o)>3&&Math.abs(a-i)>3&&(s=a,n&&n()),i=o,o=Math.round(s),o}},df=function(e,t,n){var o={};o[t.p]="+="+n,N.set(e,o)},z0=function(e,t){var n=Cn(e,t),o="_scroll"+t.p2,i=function s(a,l,f,u,d){var p=s.tween,c=l.onComplete,h={};f=f||n();var m=iy(n,f,function(){p.kill(),s.tween=0});return d=u&&d||0,u=u||a-f,p&&p.kill(),l[o]=a,l.inherit=!1,l.modifiers=h,h[o]=function(){return m(f+u*p.ratio+d*p.ratio*p.ratio)},l.onUpdate=function(){ee.cache++,s.tween&&_n()},l.onComplete=function(){s.tween=0,c&&c.call(p)},p=s.tween=N.to(e,l),p};return e[o]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},et(e,"wheel",n.wheelHandler),X.isTouch&&et(e,"touchmove",n.wheelHandler),i},X=(function(){function r(t,n){Ti||r.register(N)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ac(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,o){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Hs){this.update=this.refresh=this.kill=Jr;return}n=D0(ar(n)||Us(n)||n.nodeType?{trigger:n}:n,lf);var i=n,s=i.onUpdate,a=i.toggleClass,l=i.id,f=i.onToggle,u=i.onRefresh,d=i.scrub,p=i.trigger,c=i.pin,h=i.pinSpacing,m=i.invalidateOnRefresh,g=i.anticipatePin,x=i.onScrubComplete,y=i.onSnapComplete,k=i.once,S=i.snap,C=i.pinReparent,w=i.pinSpacer,b=i.containerAnimation,T=i.fastScrollEnd,M=i.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?vt:We,U=!d&&d!==0,O=zt(n.scroller||ne),B=N.core.getCache(O),R=Fo(O),z=("pinType"in n?n.pinType:vn(O,"pinType")||R&&"fixed")==="fixed",j=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],I=U&&n.toggleActions.split(" "),re="markers"in n?n.markers:lf.markers,de=R?0:parseFloat(vr(O)["border"+E.p2+Pi])||0,v=this,ke=n.onRefreshInit&&function(){return n.onRefreshInit(v)},Pt=Uw(O,R,E),Er=qw(O,R),Ee=0,rt=0,pt=0,Ve=Cn(O,E),Ot,ht,On,Dt,Lt,le,Ie,Wt,er,_,tr,rn,Dn,Ae,nn,Ln,io,Xe,Nn,Be,Ar,pr,on,$i,Ue,ga,sn,Yo,Qo,Rn,so,oe,ao,Pr,Or,Dr,lo,Zo,an;if(v._startClamp=v._endClamp=!1,v._dir=E,g*=45,v.scroller=O,v.scroll=b?b.time.bind(b):Ve,Dt=Ve(),v.vars=n,o=o||n.animation,"refreshPriority"in n&&(q0=1,n.refreshPriority===-9999&&(Xs=v)),B.tweenScroll=B.tweenScroll||{top:z0(O,We),left:z0(O,vt)},v.tweenTo=Ot=B.tweenScroll[E.p],v.scrubDuration=function(D){ao=Us(D)&&D,ao?oe?oe.duration(D):oe=N.to(o,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ao,paused:!0,onComplete:function(){return x&&x(v)}}):(oe&&oe.progress(1).kill(),oe=0)},o&&(o.vars.lazy=!1,o._initted&&!v.isReverted||o.vars.immediateRender!==!1&&n.immediateRender!==!1&&o.duration()&&o.render(0,!0,!0),v.animation=o.pause(),o.scrollTrigger=v,v.scrubDuration(d),Rn=0,l||(l=o.vars.id)),S&&((!Lo(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in he.style&&N.set(R?[he,lr]:O,{scrollBehavior:"auto"}),ee.forEach(function(D){return Tt(D)&&D.target===(R?me.scrollingElement||lr:O)&&(D.smooth=!1)}),On=Tt(S.snapTo)?S.snapTo:S.snapTo==="labels"?Ww(o):S.snapTo==="labelsDirectional"?Kw(o):S.directional!==!1?function(D,G){return Hc(S.snapTo)(D,_t()-rt<500?0:G.direction)}:N.utils.snap(S.snapTo),Pr=S.duration||{min:.1,max:2},Pr=Lo(Pr)?$s(Pr.min,Pr.max):$s(Pr,Pr),Or=N.delayedCall(S.delay||ao/2||.1,function(){var D=Ve(),G=_t()-rt<500,q=Ot.tween;if((G||Math.abs(v.getVelocity())<10)&&!q&&!Sf&&Ee!==D){var J=(D-le)/Ae,Ye=o&&!U?o.totalProgress():J,se=G?0:(Ye-so)/(_t()-zs)*1e3||0,Fe=N.utils.clamp(-J,1-J,wi(se/2)*se/.185),mt=J+(S.inertia===!1?0:Fe),Pe,Ce,ge=S,Lr=ge.onStart,we=ge.onInterrupt,rr=ge.onComplete;if(Pe=On(mt,v),Us(Pe)||(Pe=mt),Ce=Math.max(0,Math.round(le+Pe*Ae)),D<=Ie&&D>=le&&Ce!==D){if(q&&!q._initted&&q.data<=wi(Ce-D))return;S.inertia===!1&&(Fe=Pe-J),Ot(Ce,{duration:Pr(wi(Math.max(wi(mt-Ye),wi(Pe-Ye))*.185/se/.05||0)),ease:S.ease||"power3",data:wi(Ce-D),onInterrupt:function(){return Or.restart(!0)&&we&&vi(v,we)},onComplete:function(){v.update(),Ee=Ve(),o&&!U&&(oe?oe.resetTo("totalProgress",Pe,o._tTime/o._tDur):o.progress(Pe)),Rn=so=o&&!U?o.totalProgress():v.progress,y&&y(v),rr&&vi(v,rr)}},D,Fe*Ae,Ce-D-Fe*Ae),Lr&&vi(v,Lr,Ot.tween)}}else v.isActive&&Ee!==D&&Or.restart(!0)}).pause()),l&&(Oc[l]=v),p=v.trigger=zt(p||c!==!0&&c),an=p&&p._gsap&&p._gsap.stRevert,an&&(an=an(v)),c=c===!0?p:zt(c),ar(a)&&(a={targets:p,className:a}),c&&(h===!1||h===Cr||(h=!h&&c.parentNode&&c.parentNode.style&&vr(c.parentNode).display==="flex"?!1:Ke),v.pin=c,ht=N.core.getCache(c),ht.spacer?nn=ht.pinState:(w&&(w=zt(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),ht.spacerIsNative=!!w,w&&(ht.spacerState=uf(w))),ht.spacer=Xe=w||me.createElement("div"),Xe.classList.add("pin-spacer"),l&&Xe.classList.add("pin-spacer-"+l),ht.pinState=nn=uf(c)),n.force3D!==!1&&N.set(c,{force3D:!0}),v.spacer=Xe=ht.spacer,Qo=vr(c),$i=Qo[h+E.os2],Be=N.getProperty(c),Ar=N.quickSetter(c,E.a,Ge),_c(c,Xe,Qo),io=uf(c)),re){rn=Lo(re)?D0(re,L0):L0,_=ff("scroller-start",l,O,E,rn,0),tr=ff("scroller-end",l,O,E,rn,0,_),Nn=_["offset"+E.op.d2];var Wi=zt(vn(O,"content")||O);Wt=this.markerStart=ff("start",l,Wi,E,rn,Nn,0,b),er=this.markerEnd=ff("end",l,Wi,E,rn,Nn,0,b),b&&(Zo=N.quickSetter([Wt,er],E.a,Ge)),!z&&!(Rr.length&&vn(O,"fixedMarkers")===!0)&&($w(R?he:O),N.set([_,tr],{force3D:!0}),ga=N.quickSetter(_,E.a,Ge),Yo=N.quickSetter(tr,E.a,Ge))}if(b){var Y=b.vars.onUpdate,$=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){v.update(0,0,1),Y&&Y.apply(b,$||[])})}if(v.previous=function(){return te[te.indexOf(v)-1]},v.next=function(){return te[te.indexOf(v)+1]},v.revert=function(D,G){if(!G)return v.kill(!0);var q=D!==!1||!v.enabled,J=wt;q!==v.isReverted&&(q&&(Dr=Math.max(Ve(),v.scroll.rec||0),pt=v.progress,lo=o&&o.progress()),Wt&&[Wt,er,_,tr].forEach(function(Ye){return Ye.style.display=q?"none":"block"}),q&&(wt=v,v.update(q)),c&&(!C||!v.isActive)&&(q?Jw(c,Xe,nn):_c(c,Xe,vr(c),Ue)),q||v.update(q),wt=J,v.isReverted=q)},v.refresh=function(D,G,q,J){if(!((wt||!v.enabled)&&!G)){if(c&&D&&wr){et(r,"scrollEnd",ey);return}!Ut&&ke&&ke(v),wt=v,Ot.tween&&!q&&(Ot.tween.kill(),Ot.tween=0),oe&&oe.pause(),m&&o&&(o.revert({kill:!1}).invalidate(),o.getChildren?o.getChildren(!0,!0,!1).forEach(function(In){return In.vars.immediateRender&&In.render(0,!0,!0)}):o.vars.immediateRender&&o.render(0,!0,!0)),v.isReverted||v.revert(!0,!0),v._subPinOffset=!1;var Ye=Pt(),se=Er(),Fe=b?b.duration():Xr(O,E),mt=Ae<=.01||!Ae,Pe=0,Ce=J||0,ge=Lo(q)?q.end:n.end,Lr=n.endTrigger||p,we=Lo(q)?q.start:n.start||(n.start===0||!p?0:c?"0 0":"0 100%"),rr=v.pinnedContainer=n.pinnedContainer&&zt(n.pinnedContainer,v),Ir=p&&Math.max(0,te.indexOf(v))||0,nt=Ir,ot,gt,fo,xa,xt,je,Br,Wf,Vp,Ki,Fr,ji,ya;for(re&&Lo(q)&&(ji=N.getProperty(_,E.p),ya=N.getProperty(tr,E.p));nt-- >0;)je=te[nt],je.end||je.refresh(0,1)||(wt=v),Br=je.pin,Br&&(Br===p||Br===c||Br===rr)&&!je.isReverted&&(Ki||(Ki=[]),Ki.unshift(je),je.revert(!0,!0)),je!==te[nt]&&(Ir--,nt--);for(Tt(we)&&(we=we(v)),we=E0(we,"start",v),le=B0(we,p,Ye,E,Ve(),Wt,_,v,se,de,z,Fe,b,v._startClamp&&"_startClamp")||(c?-.001:0),Tt(ge)&&(ge=ge(v)),ar(ge)&&!ge.indexOf("+=")&&(~ge.indexOf(" ")?ge=(ar(we)?we.split(" ")[0]:"")+ge:(Pe=pf(ge.substr(2),Ye),ge=ar(we)?we:(b?N.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,le):le)+Pe,Lr=p)),ge=E0(ge,"end",v),Ie=Math.max(le,B0(ge||(Lr?"100% 0":Fe),Lr,Ye,E,Ve()+Pe,er,tr,v,se,de,z,Fe,b,v._endClamp&&"_endClamp"))||-.001,Pe=0,nt=Ir;nt--;)je=te[nt]||{},Br=je.pin,Br&&je.start-je._pinPush<=le&&!b&&je.end>0&&(ot=je.end-(v._startClamp?Math.max(0,je.start):je.start),(Br===p&&je.start-je._pinPush<le||Br===rr)&&isNaN(we)&&(Pe+=ot*(1-je.progress)),Br===c&&(Ce+=ot));if(le+=Pe,Ie+=Pe,v._startClamp&&(v._startClamp+=Pe),v._endClamp&&!Ut&&(v._endClamp=Ie||-.001,Ie=Math.min(Ie,Xr(O,E))),Ae=Ie-le||(le-=.01)&&.001,mt&&(pt=N.utils.clamp(0,1,N.utils.normalize(le,Ie,Dr))),v._pinPush=Ce,Wt&&Pe&&(ot={},ot[E.a]="+="+Pe,rr&&(ot[E.p]="-="+Ve()),N.set([Wt,er],ot)),c&&!(Pc&&v.end>=Xr(O,E)))ot=vr(c),xa=E===We,fo=Ve(),pr=parseFloat(Be(E.a))+Ce,!Fe&&Ie>1&&(Fr=(R?me.scrollingElement||lr:O).style,Fr={style:Fr,value:Fr["overflow"+E.a.toUpperCase()]},R&&vr(he)["overflow"+E.a.toUpperCase()]!=="scroll"&&(Fr.style["overflow"+E.a.toUpperCase()]="scroll")),_c(c,Xe,ot),io=uf(c),gt=wn(c,!0),Wf=z&&Cn(O,xa?vt:We)(),h?(Ue=[h+E.os2,Ae+Ce+Ge],Ue.t=Xe,nt=h===Ke?bf(c,E)+Ae+Ce:0,nt&&(Ue.push(E.d,nt+Ge),Xe.style.flexBasis!=="auto"&&(Xe.style.flexBasis=nt+Ge)),Ai(Ue),rr&&te.forEach(function(In){In.pin===rr&&In.vars.pinSpacing!==!1&&(In._subPinOffset=!0)}),z&&Ve(Dr)):(nt=bf(c,E),nt&&Xe.style.flexBasis!=="auto"&&(Xe.style.flexBasis=nt+Ge)),z&&(xt={top:gt.top+(xa?fo-le:Wf)+Ge,left:gt.left+(xa?Wf:fo-le)+Ge,boxSizing:"border-box",position:"fixed"},xt[Ro]=xt["max"+Pi]=Math.ceil(gt.width)+Ge,xt[Io]=xt["max"+zc]=Math.ceil(gt.height)+Ge,xt[Cr]=xt[Cr+Gs]=xt[Cr+Ks]=xt[Cr+Js]=xt[Cr+js]="0",xt[Ke]=ot[Ke],xt[Ke+Gs]=ot[Ke+Gs],xt[Ke+Ks]=ot[Ke+Ks],xt[Ke+Js]=ot[Ke+Js],xt[Ke+js]=ot[Ke+js],Ln=Yw(nn,xt,C),Ut&&Ve(0)),o?(Vp=o._initted,Sc(1),o.render(o.duration(),!0,!0),on=Be(E.a)-pr+Ae+Ce,sn=Math.abs(Ae-on)>1,z&&sn&&Ln.splice(Ln.length-2,2),o.render(0,!0,!0),Vp||o.invalidate(!0),o.parent||o.totalTime(o.totalTime()),Sc(0)):on=Ae,Fr&&(Fr.value?Fr.style["overflow"+E.a.toUpperCase()]=Fr.value:Fr.style.removeProperty("overflow-"+E.a));else if(p&&Ve()&&!b)for(gt=p.parentNode;gt&&gt!==he;)gt._pinOffset&&(le-=gt._pinOffset,Ie-=gt._pinOffset),gt=gt.parentNode;Ki&&Ki.forEach(function(In){return In.revert(!1,!0)}),v.start=le,v.end=Ie,Dt=Lt=Ut?Dr:Ve(),!b&&!Ut&&(Dt<Dr&&Ve(Dr),v.scroll.rec=0),v.revert(!1,!0),rt=_t(),Or&&(Ee=-1,Or.restart(!0)),wt=0,o&&U&&(o._initted||lo)&&o.progress()!==lo&&o.progress(lo||0,!0).render(o.time(),!0,!0),(mt||pt!==v.progress||b||m||o&&!o._initted)&&(o&&!U&&(o._initted||pt||o.vars.immediateRender!==!1)&&o.totalProgress(b&&le<-.001&&!pt?N.utils.normalize(le,Ie,0):pt,!0),v.progress=mt||(Dt-le)/Ae===pt?0:pt),c&&h&&(Xe._pinOffset=Math.round(v.progress*on)),oe&&oe.invalidate(),isNaN(ji)||(ji-=N.getProperty(_,E.p),ya-=N.getProperty(tr,E.p),df(_,E,ji),df(Wt,E,ji-(J||0)),df(tr,E,ya),df(er,E,ya-(J||0))),mt&&!Ut&&v.update(),u&&!Ut&&!Dn&&(Dn=!0,u(v),Dn=!1)}},v.getVelocity=function(){return(Ve()-Lt)/(_t()-zs)*1e3||0},v.endAnimation=function(){Fs(v.callbackAnimation),o&&(oe?oe.progress(1):o.paused()?U||Fs(o,v.direction<0,1):Fs(o,o.reversed()))},v.labelToScroll=function(D){return o&&o.labels&&(le||v.refresh()||le)+o.labels[D]/o.duration()*Ae||0},v.getTrailing=function(D){var G=te.indexOf(v),q=v.direction>0?te.slice(0,G).reverse():te.slice(G+1);return(ar(D)?q.filter(function(J){return J.vars.preventOverlaps===D}):q).filter(function(J){return v.direction>0?J.end<=le:J.start>=Ie})},v.update=function(D,G,q){if(!(b&&!q&&!D)){var J=Ut===!0?Dr:v.scroll(),Ye=D?0:(J-le)/Ae,se=Ye<0?0:Ye>1?1:Ye||0,Fe=v.progress,mt,Pe,Ce,ge,Lr,we,rr,Ir;if(G&&(Lt=Dt,Dt=b?Ve():J,S&&(so=Rn,Rn=o&&!U?o.totalProgress():se)),g&&c&&!wt&&!nf&&wr&&(!se&&le<J+(J-Lt)/(_t()-zs)*g?se=1e-4:se===1&&Ie>J+(J-Lt)/(_t()-zs)*g&&(se=.9999)),se!==Fe&&v.enabled){if(mt=v.isActive=!!se&&se<1,Pe=!!Fe&&Fe<1,we=mt!==Pe,Lr=we||!!se!=!!Fe,v.direction=se>Fe?1:-1,v.progress=se,Lr&&!wt&&(Ce=se&&!Fe?0:se===1?1:Fe===1?2:3,U&&(ge=!we&&I[Ce+1]!=="none"&&I[Ce+1]||I[Ce],Ir=o&&(ge==="complete"||ge==="reset"||ge in o))),M&&(we||Ir)&&(Ir||d||!o)&&(Tt(M)?M(v):v.getTrailing(M).forEach(function(fo){return fo.endAnimation()})),U||(oe&&!wt&&!nf?(oe._dp._time-oe._start!==oe._time&&oe.render(oe._dp._time-oe._start),oe.resetTo?oe.resetTo("totalProgress",se,o._tTime/o._tDur):(oe.vars.totalProgress=se,oe.invalidate().restart())):o&&o.totalProgress(se,!!(wt&&(rt||D)))),c){if(D&&h&&(Xe.style[h+E.os2]=$i),!z)Ar(Vs(pr+on*se));else if(Lr){if(rr=!D&&se>Fe&&Ie+1>J&&J+1>=Xr(O,E),C)if(!D&&(mt||rr)){var nt=wn(c,!0),ot=J-le;F0(c,he,nt.top+(E===We?ot:0)+Ge,nt.left+(E===We?0:ot)+Ge)}else F0(c,Xe);Ai(mt||rr?Ln:io),sn&&se<1&&mt||Ar(pr+(se===1&&!rr?on:0))}}S&&!Ot.tween&&!wt&&!nf&&Or.restart(!0),a&&(we||k&&se&&(se<1||!Cc))&&Ys(a.targets).forEach(function(fo){return fo.classList[mt||k?"add":"remove"](a.className)}),s&&!U&&!D&&s(v),Lr&&!wt?(U&&(Ir&&(ge==="complete"?o.pause().totalProgress(1):ge==="reset"?o.restart(!0).pause():ge==="restart"?o.restart(!0):o[ge]()),s&&s(v)),(we||!Cc)&&(f&&we&&vi(v,f),j[Ce]&&vi(v,j[Ce]),k&&(se===1?v.kill(!1,1):j[Ce]=0),we||(Ce=se===1?1:3,j[Ce]&&vi(v,j[Ce]))),T&&!mt&&Math.abs(v.getVelocity())>(Us(T)?T:2500)&&(Fs(v.callbackAnimation),oe?oe.progress(1):Fs(o,ge==="reverse"?1:!se,1))):U&&s&&!wt&&s(v)}if(Yo){var gt=b?J/b.duration()*(b._caScrollDist||0):J;ga(gt+(_._isFlipped?1:0)),Yo(gt)}Zo&&Zo(-J/b.duration()*(b._caScrollDist||0))}},v.enable=function(D,G){v.enabled||(v.enabled=!0,et(O,"resize",qs),R||et(O,"scroll",_i),ke&&et(r,"refreshInit",ke),D!==!1&&(v.progress=pt=0,Dt=Lt=Ee=Ve()),G!==!1&&v.refresh())},v.getTween=function(D){return D&&Ot?Ot.tween:oe},v.setPositions=function(D,G,q,J){if(b){var Ye=b.scrollTrigger,se=b.duration(),Fe=Ye.end-Ye.start;D=Ye.start+Fe*D/se,G=Ye.start+Fe*G/se}v.refresh(!1,!1,{start:A0(D,q&&!!v._startClamp),end:A0(G,q&&!!v._endClamp)},J),v.update()},v.adjustPinSpacing=function(D){if(Ue&&D){var G=Ue.indexOf(E.d)+1;Ue[G]=parseFloat(Ue[G])+D+Ge,Ue[1]=parseFloat(Ue[1])+D+Ge,Ai(Ue)}},v.disable=function(D,G){if(D!==!1&&v.revert(!0,!0),v.enabled&&(v.enabled=v.isActive=!1,G||oe&&oe.pause(),Dr=0,ht&&(ht.uncache=1),ke&&Ze(r,"refreshInit",ke),Or&&(Or.pause(),Ot.tween&&Ot.tween.kill()&&(Ot.tween=0)),!R)){for(var q=te.length;q--;)if(te[q].scroller===O&&te[q]!==v)return;Ze(O,"resize",qs),R||Ze(O,"scroll",_i)}},v.kill=function(D,G){v.disable(D,G),oe&&!G&&oe.kill(),l&&delete Oc[l];var q=te.indexOf(v);q>=0&&te.splice(q,1),q===Vt&&mf>0&&Vt--,q=0,te.forEach(function(J){return J.scroller===v.scroller&&(q=1)}),q||Ut||(v.scroll.rec=0),o&&(o.scrollTrigger=null,D&&o.revert({kill:!1}),G||o.kill()),Wt&&[Wt,er,_,tr].forEach(function(J){return J.parentNode&&J.parentNode.removeChild(J)}),Xs===v&&(Xs=0),c&&(ht&&(ht.uncache=1),q=0,te.forEach(function(J){return J.pin===c&&q++}),q||(ht.spacer=0)),n.onKill&&n.onKill(v)},te.push(v),v.enable(!1,!1),an&&an(v),o&&o.add&&!Ae){var ce=v.update;v.update=function(){v.update=ce,ee.cache++,le||Ie||v.refresh()},N.delayedCall(.01,v.update),Ae=.01,le=Ie=0}else v.refresh();c&&Gw()},r.register=function(n){return Ti||(N=n||G0(),j0()&&window.document&&r.enable(),Ti=Hs),Ti},r.defaults=function(n){if(n)for(var o in n)lf[o]=n[o];return lf},r.disable=function(n,o){Hs=0,te.forEach(function(s){return s[o?"kill":"disable"](n)}),Ze(ne,"wheel",_i),Ze(me,"scroll",_i),clearInterval(rf),Ze(me,"touchcancel",Jr),Ze(he,"touchstart",Jr),sf(Ze,me,"pointerdown,touchstart,mousedown",P0),sf(Ze,me,"pointerup,touchend,mouseup",O0),yf.kill(),of(Ze);for(var i=0;i<ee.length;i+=3)af(Ze,ee[i],ee[i+1]),af(Ze,ee[i],ee[i+2])},r.enable=function(){if(ne=window,me=document,lr=me.documentElement,he=me.body,N){if(Ys=N.utils.toArray,$s=N.utils.clamp,Ac=N.core.context||Jr,Sc=N.core.suppressOverwrites||Jr,Rc=ne.history.scrollRestoration||"auto",Dc=ne.pageYOffset||0,N.core.globals("ScrollTrigger",r),he){Hs=1,Ei=document.createElement("div"),Ei.style.height="100vh",Ei.style.position="absolute",oy(),Vw(),Le.register(N),r.isTouch=Le.isTouch,Jn=Le.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ec=Le.isTouch===1,et(ne,"wheel",_i),Nc=[ne,me,lr,he],N.matchMedia?(r.matchMedia=function(u){var d=N.matchMedia(),p;for(p in u)d.add(p,u[p]);return d},N.addEventListener("matchMediaInit",function(){ry(),Vc()}),N.addEventListener("matchMediaRevert",function(){return ty()}),N.addEventListener("matchMedia",function(){No(0,1),Ho("matchMedia")}),N.matchMedia().add("(orientation: portrait)",function(){return wc(),wc})):console.warn("Requires GSAP 3.11.0 or later"),wc(),et(me,"scroll",_i);var n=he.hasAttribute("style"),o=he.style,i=o.borderTopStyle,s=N.core.Animation.prototype,a,l;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),o.borderTopStyle="solid",a=wn(he),We.m=Math.round(a.top+We.sc())||0,vt.m=Math.round(a.left+vt.sc())||0,i?o.borderTopStyle=i:o.removeProperty("border-top-style"),n||(he.setAttribute("style",""),he.removeAttribute("style")),rf=setInterval(N0,250),N.delayedCall(.5,function(){return nf=0}),et(me,"touchcancel",Jr),et(he,"touchstart",Jr),sf(et,me,"pointerdown,touchstart,mousedown",P0),sf(et,me,"pointerup,touchend,mouseup",O0),Mc=N.utils.checkPrefix("transform"),gf.push(Mc),Ti=_t(),yf=N.delayedCall(.2,No).pause(),Mi=[me,"visibilitychange",function(){var u=ne.innerWidth,d=ne.innerHeight;me.hidden?(T0=u,M0=d):(T0!==u||M0!==d)&&qs()},me,"DOMContentLoaded",No,ne,"load",No,ne,"resize",qs],of(et),te.forEach(function(u){return u.enable(0,1)}),l=0;l<ee.length;l+=3)af(Ze,ee[l],ee[l+1]),af(Ze,ee[l],ee[l+2])}else if(me){var f=function u(){r.enable(),me.removeEventListener("DOMContentLoaded",u)};me.addEventListener("DOMContentLoaded",f)}}},r.config=function(n){"limitCallbacks"in n&&(Cc=!!n.limitCallbacks);var o=n.syncInterval;o&&clearInterval(rf)||(rf=o)&&setInterval(N0,o),"ignoreMobileResize"in n&&(Ec=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(of(Ze)||of(et,n.autoRefreshEvents||"none"),$0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,o){var i=zt(n),s=ee.indexOf(i),a=Fo(i);~s&&ee.splice(s,a?6:2),o&&(a?Rr.unshift(ne,o,he,o,lr,o):Rr.unshift(i,o))},r.clearMatchMedia=function(n){te.forEach(function(o){return o._ctx&&o._ctx.query===n&&o._ctx.kill(!0,!0)})},r.isInViewport=function(n,o,i){var s=(ar(n)?zt(n):n).getBoundingClientRect(),a=s[i?Ro:Io]*o||0;return i?s.right-a>0&&s.left+a<ne.innerWidth:s.bottom-a>0&&s.top+a<ne.innerHeight},r.positionInViewport=function(n,o,i){ar(n)&&(n=zt(n));var s=n.getBoundingClientRect(),a=s[i?Ro:Io],l=o==null?a/2:o in kf?kf[o]*a:~o.indexOf("%")?parseFloat(o)*a/100:parseFloat(o)||0;return i?(s.left+l)/ne.innerWidth:(s.top+l)/ne.innerHeight},r.killAll=function(n){if(te.slice(0).forEach(function(i){return i.vars.id!=="ScrollSmoother"&&i.kill()}),n!==!0){var o=zo.killAll||[];zo={},o.forEach(function(i){return i()})}},r})();X.version="3.15.0";X.saveStyles=function(r){return r?Ys(r).forEach(function(e){if(e&&e.style){var t=sr.indexOf(e);t>=0&&sr.splice(t,5),sr.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),N.core.getCache(e),Ac())}}):sr};X.revert=function(r,e){return Vc(!r,e)};X.create=function(r,e){return new X(r,e)};X.refresh=function(r){return r?qs(!0):(Ti||X.register())&&No(!0)};X.update=function(r){return++ee.cache&&_n(r===!0?2:0)};X.clearScrollMemory=ny;X.maxScroll=function(r,e){return Xr(r,e?vt:We)};X.getScrollFunc=function(r,e){return Cn(zt(r),e?vt:We)};X.getById=function(r){return Oc[r]};X.getAll=function(){return te.filter(function(r){return r.vars.id!=="ScrollSmoother"})};X.isScrolling=function(){return!!wr};X.snapDirectional=Hc;X.addEventListener=function(r,e){var t=zo[r]||(zo[r]=[]);~t.indexOf(e)||t.push(e)};X.removeEventListener=function(r,e){var t=zo[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};X.batch=function(r,e){var t=[],n={},o=e.interval||.016,i=e.batchMax||1e9,s=function(f,u){var d=[],p=[],c=N.delayedCall(o,function(){u(d,p),d=[],p=[]}).pause();return function(h){d.length||c.restart(!0),d.push(h.trigger),p.push(h),i<=d.length&&c.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Tt(e[a])&&a!=="onRefreshInit"?s(a,e[a]):e[a];return Tt(i)&&(i=i(),et(X,"refresh",function(){return i=e.batchMax()})),Ys(r).forEach(function(l){var f={};for(a in n)f[a]=n[a];f.trigger=l,t.push(X.create(f))}),t};var H0=function(e,t,n,o){return t>o?e(o):t<0&&e(0),n>o?(o-t)/(n-t):n<0?t/(t-n):1},Tc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Le.isTouch?" pinch-zoom":""):"none",e===lr&&r(he,t)},cf={auto:1,scroll:1},Zw=function(e){var t=e.event,n=e.target,o=e.axis,i=(t.changedTouches?t.changedTouches[0]:t).target,s=i._gsap||N.core.getCache(i),a=_t(),l;if(!s._isScrollT||a-s._isScrollT>2e3){for(;i&&i!==he&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(cf[(l=vr(i)).overflowY]||cf[l.overflowX]));)i=i.parentNode;s._isScroll=i&&i!==n&&!Fo(i)&&(cf[(l=vr(i)).overflowY]||cf[l.overflowX]),s._isScrollT=a}(s._isScroll||o==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},sy=function(e,t,n,o){return Le.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:o=o&&Zw,onPress:o,onDrag:o,onScroll:o,onEnable:function(){return n&&et(me,Le.eventTypes[0],U0,!1,!0)},onDisable:function(){return Ze(me,Le.eventTypes[0],U0,!0)}})},e_=/(input|label|select|textarea)/i,V0,U0=function(e){var t=e_.test(e.target.tagName);(t||V0)&&(e._gsapAllow=!0,V0=t)},t_=function(e){Lo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,o=t.momentum,i=t.allowNestedScroll,s=t.onRelease,a,l,f=zt(e.target)||lr,u=N.core.globals().ScrollSmoother,d=u&&u.get(),p=Jn&&(e.content&&zt(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),c=Cn(f,We),h=Cn(f,vt),m=1,g=(Le.isTouch&&ne.visualViewport?ne.visualViewport.scale*ne.visualViewport.width:ne.outerWidth)/ne.innerWidth,x=0,y=Tt(o)?function(){return o(a)}:function(){return o||2.8},k,S,C=sy(f,e.type,!0,i),w=function(){return S=!1},b=Jr,T=Jr,M=function(){l=Xr(f,We),T=$s(Jn?1:0,l),n&&(b=$s(0,Xr(f,vt))),k=Bo},E=function(){p._gsap.y=Vs(parseFloat(p._gsap.y)+c.offset)+"px",p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(p._gsap.y)+", 0, 1)",c.offset=c.cacheID=0},U=function(){if(S){requestAnimationFrame(w);var re=Vs(a.deltaY/2),de=T(c.v-re);if(p&&de!==c.v+c.offset){c.offset=de-c.v;var v=Vs((parseFloat(p&&p._gsap.y)||0)-c.offset);p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+v+", 0, 1)",p._gsap.y=v+"px",c.cacheID=ee.cache,_n()}return!0}c.offset&&E(),S=!0},O,B,R,z,j=function(){M(),O.isActive()&&O.vars.scrollY>l&&(c()>l?O.progress(1)&&c(l):O.resetTo("scrollY",l))};return p&&N.set(p,{y:"+=0"}),e.ignoreCheck=function(I){return Jn&&I.type==="touchmove"&&U(I)||m>1.05&&I.type!=="touchstart"||a.isGesturing||I.touches&&I.touches.length>1},e.onPress=function(){S=!1;var I=m;m=Vs((ne.visualViewport&&ne.visualViewport.scale||1)/g),O.pause(),I!==m&&Tc(f,m>1.01?!0:n?!1:"x"),B=h(),R=c(),M(),k=Bo},e.onRelease=e.onGestureStart=function(I,re){if(c.offset&&E(),!re)z.restart(!0);else{ee.cache++;var de=y(),v,ke;n&&(v=h(),ke=v+de*.05*-I.velocityX/.227,de*=H0(h,v,ke,Xr(f,vt)),O.vars.scrollX=b(ke)),v=c(),ke=v+de*.05*-I.velocityY/.227,de*=H0(c,v,ke,Xr(f,We)),O.vars.scrollY=T(ke),O.invalidate().duration(de).play(.01),(Jn&&O.vars.scrollY>=l||v>=l-1)&&N.to({},{onUpdate:j,duration:de})}s&&s(I)},e.onWheel=function(){O._ts&&O.pause(),_t()-x>1e3&&(k=0,x=_t())},e.onChange=function(I,re,de,v,ke){if(Bo!==k&&M(),re&&n&&h(b(v[2]===re?B+(I.startX-I.x):h()+re-v[1])),de){c.offset&&E();var Pt=ke[2]===de,Er=Pt?R+I.startY-I.y:c()+de-ke[1],Ee=T(Er);Pt&&Er!==Ee&&(R+=Ee-Er),c(Ee)}(de||re)&&_n()},e.onEnable=function(){Tc(f,n?!1:"x"),X.addEventListener("refresh",j),et(ne,"resize",j),c.smooth&&(c.target.style.scrollBehavior="auto",c.smooth=h.smooth=!1),C.enable()},e.onDisable=function(){Tc(f,!0),Ze(ne,"resize",j),X.removeEventListener("refresh",j),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Le(e),a.iOS=Jn,Jn&&!c()&&c(1),Jn&&N.ticker.add(Jr),z=a._dc,O=N.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:iy(c,c(),function(){return O.pause()})},onUpdate:_n,onComplete:z.vars.onComplete}),a};X.sort=function(r){if(Tt(r))return te.sort(r);var e=ne.pageYOffset||0;return X.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ne.innerHeight}),te.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};X.observe=function(r){return new Le(r)};X.normalizeScroll=function(r){if(typeof r>"u")return Ht;if(r===!0&&Ht)return Ht.enable();if(r===!1){Ht&&Ht.kill(),Ht=r;return}var e=r instanceof Le?r:t_(r);return Ht&&Ht.target===e.target&&Ht.kill(),Fo(e.target)&&(Ht=e),e};X.core={_getVelocityProp:tf,_inputObserver:sy,_scrollers:ee,_proxies:Rr,bridge:{ss:function(){wr||Ho("scrollStart"),wr=_t()},ref:function(){return wt}}};G0()&&N.registerPlugin(X);function Tn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function my(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Qt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},oa={duration:.5,overwrite:!1,delay:0},ip,dt,ve,Tr=1e8,ye=1/Tr,Jc=Math.PI*2,r_=Jc/4,n_=0,gy=Math.sqrt,o_=Math.cos,i_=Math.sin,Je=function(e){return typeof e=="string"},Ne=function(e){return typeof e=="function"},En=function(e){return typeof e=="number"},Of=function(e){return typeof e>"u"},Zr=function(e){return typeof e=="object"},Yt=function(e){return e!==!1},sp=function(){return typeof window<"u"},Cf=function(e){return Ne(e)||Je(e)},xy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Et=Array.isArray,s_=/random\([^)]+\)/g,a_=/,\s*/g,ay=/(?:-?\.?\d|\.)+/gi,ap=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$o=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Uc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,lp=/[+-]=-?[.\d]+/,l_=/[^,'"\[\]\s]+/gi,f_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Te,Yr,Xc,fp,ur={},Tf={},yy,by=function(e){return(Tf=Di(e,ur))&&At},Df=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ia=function(e,t){return!t&&console.warn(e)},ky=function(e,t){return e&&(ur[e]=t)&&Tf&&(Tf[e]=t)||ur},sa=function(){return 0},u_={suppressEvents:!0,isStart:!0,kill:!1},vf={suppressEvents:!0,kill:!1},d_={suppressEvents:!0},up={},Yn=[],Yc={},Sy,Jt={},qc={},ly=30,wf=[],dp="",cp=function(e){var t=e[0],n,o;if(Zr(t)||Ne(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(o=wf.length;o--&&!wf[o].targetTest(t););n=wf[o]}for(o=e.length;o--;)e[o]&&(e[o]._gsap||(e[o]._gsap=new gp(e[o],n)))||e.splice(o,1);return e},Qn=function(e){return e._gsap||cp(Mr(e))[0]._gsap},pp=function(e,t,n){return(n=e[t])&&Ne(n)?e[t]():Of(n)&&e.getAttribute&&e.getAttribute(t)||n},qt=function(e,t){return(e=e.split(",")).forEach(t)||e},Re=function(e){return Math.round(e*1e5)/1e5||0},_e=function(e){return Math.round(e*1e7)/1e7||0},Wo=function(e,t){var n=t.charAt(0),o=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+o:n==="-"?e-o:n==="*"?e*o:e/o},c_=function(e,t){for(var n=t.length,o=0;e.indexOf(t[o])<0&&++o<n;);return o<n},Mf=function(){var e=Yn.length,t=Yn.slice(0),n,o;for(Yc={},Yn.length=0,n=0;n<e;n++)o=t[n],o&&o._lazy&&(o.render(o._lazy[0],o._lazy[1],!0)._lazy=0)},hp=function(e){return!!(e._initted||e._startAt||e.add)},Cy=function(e,t,n,o){Yn.length&&!dt&&Mf(),e.render(t,n,o||!!(dt&&t<0&&hp(e))),Yn.length&&!dt&&Mf()},vy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(l_).length<2?t:Je(e)?e.trim():e},wy=function(e){return e},dr=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},p_=function(e){return function(t,n){for(var o in n)o in t||o==="duration"&&e||o==="ease"||(t[o]=n[o])}},Di=function(e,t){for(var n in t)e[n]=t[n];return e},fy=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Zr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ef=function(e,t){var n={},o;for(o in e)o in t||(n[o]=e[o]);return n},ta=function(e){var t=e.parent||Te,n=e.keyframes?p_(Et(e.keyframes)):dr;if(Yt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},h_=function(e,t){for(var n=e.length,o=n===t.length;o&&n--&&e[n]===t[n];);return n<0},_y=function(e,t,n,o,i){n===void 0&&(n="_first"),o===void 0&&(o="_last");var s=e[o],a;if(i)for(a=t[i];s&&s[i]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[o]=t,t._prev=s,t.parent=t._dp=e,t},Lf=function(e,t,n,o){n===void 0&&(n="_first"),o===void 0&&(o="_last");var i=t._prev,s=t._next;i?i._next=s:e[n]===t&&(e[n]=s),s?s._prev=i:e[o]===t&&(e[o]=i),t._next=t._prev=t.parent=null},Zn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},m_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Qc=function(e,t,n,o){return e._startAt&&(dt?e._startAt.revert(vf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,o))},g_=function r(e){return!e||e._ts&&r(e.parent)},uy=function(e){return e._repeat?Li(e._tTime,e=e.duration()+e._rDelay)*e:0},Li=function(e,t){var n=Math.floor(e=_e(e/t));return e&&n===e?n-1:n},Af=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Nf=function(e){return e._end=_e(e._start+(e._tDur/Math.abs(e._ts||e._rts||ye)||0))},Rf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=_e(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Nf(e),n._dirty||Vo(n,e)),e},Ty=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Af(e.rawTime(),t),(!t._dur||fa(0,t.totalDuration(),n)-t._tTime>ye)&&t.render(n,!0)),Vo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ye}},Qr=function(e,t,n,o){return t.parent&&Zn(t),t._start=_e((En(n)?n:n||e!==Te?_r(e,n,t):e._time)+t._delay),t._end=_e(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),_y(e,t,"_first","_last",e._sort?"_start":0),Zc(t)||(e._recent=t),o||Ty(e,t),e._ts<0&&Rf(e,e._tTime),e},My=function(e,t){return(ur.ScrollTrigger||Df("scrollTrigger",t))&&ur.ScrollTrigger.create(t,e)},Ey=function(e,t,n,o,i){if(bp(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!dt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Sy!==Xt.frame)return Yn.push(e),e._lazy=[i,o],1},x_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Zc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},y_=function(e,t,n,o){var i=e.ratio,s=t<0||!t&&(!e._start&&x_(e)&&!(!e._initted&&Zc(e))||(e._ts<0||e._dp._ts<0)&&!Zc(e))?0:1,a=e._rDelay,l=0,f,u,d;if(a&&e._repeat&&(l=fa(0,e._tDur,t),u=Li(l,a),e._yoyo&&u&1&&(s=1-s),u!==Li(e._tTime,a)&&(i=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==i||dt||o||e._zTime===ye||!t&&e._zTime){if(!e._initted&&Ey(e,t,o,n,l))return;for(d=e._zTime,e._zTime=t||(n?ye:0),n||(n=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,f=e._pt;f;)f.r(s,f.d),f=f._next;t<0&&Qc(e,t,n,!0),e._onUpdate&&!n&&fr(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&fr(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Zn(e,1),!n&&!dt&&(fr(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},b_=function(e,t,n){var o;if(n>t)for(o=e._first;o&&o._start<=n;){if(o.data==="isPause"&&o._start>t)return o;o=o._next}else for(o=e._last;o&&o._start>=n;){if(o.data==="isPause"&&o._start<t)return o;o=o._prev}},Ni=function(e,t,n,o){var i=e._repeat,s=_e(t)||0,a=e._tTime/e._tDur;return a&&!o&&(e._time*=s/e._dur),e._dur=s,e._tDur=i?i<0?1e10:_e(s*(i+1)+e._rDelay*i):s,a>0&&!o&&Rf(e,e._tTime=e._tDur*a),e.parent&&Nf(e),n||Vo(e.parent,e),e},dy=function(e){return e instanceof Mt?Vo(e):Ni(e,e._dur)},k_={_start:0,endTime:sa,totalDuration:sa},_r=function r(e,t,n){var o=e.labels,i=e._recent||k_,s=e.duration()>=Tr?i.endTime(!1):e._dur,a,l,f;return Je(t)&&(isNaN(t)||t in o)?(l=t.charAt(0),f=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?i._start:i.endTime(i._repeat>=0))+(parseFloat(t.substr(1))||0)*(f?(a<0?i:n).totalDuration()/100:1)):a<0?(t in o||(o[t]=s),o[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),f&&n&&(l=l/100*(Et(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},ra=function(e,t,n){var o=En(t[1]),i=(o?2:1)+(e<2?0:1),s=t[i],a,l;if(o&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Yt(l.vars.inherit)&&l.parent;s.immediateRender=Yt(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[i-1]}return new He(t[0],s,t[i+1])},eo=function(e,t){return e||e===0?t(e):t},fa=function(e,t,n){return n<e?e:n>t?t:n},ct=function(e,t){return!Je(e)||!(t=f_.exec(e))?"":t[1]},S_=function(e,t,n){return eo(n,function(o){return fa(e,t,o)})},ep=[].slice,Ay=function(e,t){return e&&Zr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zr(e[0]))&&!e.nodeType&&e!==Yr},C_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(o){var i;return Je(o)&&!t||Ay(o,1)?(i=n).push.apply(i,Mr(o)):n.push(o)})||n},Mr=function(e,t,n){return ve&&!t&&ve.selector?ve.selector(e):Je(e)&&!n&&(Xc||!Ri())?ep.call((t||fp).querySelectorAll(e),0):Et(e)?C_(e,n):Ay(e)?ep.call(e,0):e?[e]:[]},tp=function(e){return e=Mr(e)[0]||ia("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Mr(t,n.querySelectorAll?n:n===e?ia("Invalid scope")||fp.createElement("div"):e)}},Py=function(e){return e.sort(function(){return .5-Math.random()})},Oy=function(e){if(Ne(e))return e;var t=Zr(e)?e:{each:e},n=Uo(t.ease),o=t.from||0,i=parseFloat(t.base)||0,s={},a=o>0&&o<1,l=isNaN(o)||a,f=t.axis,u=o,d=o;return Je(o)?u=d={center:.5,edges:.5,end:1}[o]||0:!a&&l&&(u=o[0],d=o[1]),function(p,c,h){var m=(h||t).length,g=s[m],x,y,k,S,C,w,b,T,M;if(!g){if(M=t.grid==="auto"?0:(t.grid||[1,Tr])[1],!M){for(b=-Tr;b<(b=h[M++].getBoundingClientRect().left)&&M<m;);M<m&&M--}for(g=s[m]=[],x=l?Math.min(M,m)*u-.5:o%M,y=M===Tr?0:l?m*d/M-.5:o/M|0,b=0,T=Tr,w=0;w<m;w++)k=w%M-x,S=y-(w/M|0),g[w]=C=f?Math.abs(f==="y"?S:k):gy(k*k+S*S),C>b&&(b=C),C<T&&(T=C);o==="random"&&Py(g),g.max=b-T,g.min=T,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(M>m?m-1:f?f==="y"?m/M:M:Math.max(M,m/M))||0)*(o==="edges"?-1:1),g.b=m<0?i-m:i,g.u=ct(t.amount||t.each)||0,n=n&&m<0?R_(n):n}return m=(g[p]-g.min)/g.max||0,_e(g.b+(n?n(m):m)*g.v)+g.u}},rp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var o=_e(Math.round(parseFloat(n)/e)*e*t);return(o-o%1)/t+(En(n)?0:ct(n))}},Dy=function(e,t){var n=Et(e),o,i;return!n&&Zr(e)&&(o=n=e.radius||Tr,e.values?(e=Mr(e.values),(i=!En(e[0]))&&(o*=o)):e=rp(e.increment)),eo(t,n?Ne(e)?function(s){return i=e(s),Math.abs(i-s)<=o?i:s}:function(s){for(var a=parseFloat(i?s.x:s),l=parseFloat(i?s.y:0),f=Tr,u=0,d=e.length,p,c;d--;)i?(p=e[d].x-a,c=e[d].y-l,p=p*p+c*c):p=Math.abs(e[d]-a),p<f&&(f=p,u=d);return u=!o||f<=o?e[u]:s,i||u===s||En(s)?u:u+ct(s)}:rp(e))},Ly=function(e,t,n,o){return eo(Et(e)?!t:n===!0?!!(n=0):!o,function(){return Et(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(o=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*o)/o})},v_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(o){return t.reduce(function(i,s){return s(i)},o)}},w_=function(e,t){return function(n){return e(parseFloat(n))+(t||ct(n))}},__=function(e,t,n){return Ry(e,t,0,1,n)},Ny=function(e,t,n){return eo(n,function(o){return e[~~t(o)]})},T_=function r(e,t,n){var o=t-e;return Et(e)?Ny(e,r(0,e.length),t):eo(n,function(i){return(o+(i-e)%o)%o+e})},M_=function r(e,t,n){var o=t-e,i=o*2;return Et(e)?Ny(e,r(0,e.length-1),t):eo(n,function(s){return s=(i+(s-e)%i)%i||0,e+(s>o?i-s:s)})},Ii=function(e){return e.replace(s_,function(t){var n=t.indexOf("[")+1,o=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(a_);return Ly(n?o:+o[0],n?0:+o[1],+o[2]||1e-5)})},Ry=function(e,t,n,o,i){var s=t-e,a=o-n;return eo(i,function(l){return n+((l-e)/s*a||0)})},E_=function r(e,t,n,o){var i=isNaN(e+t)?0:function(c){return(1-c)*e+c*t};if(!i){var s=Je(e),a={},l,f,u,d,p;if(n===!0&&(o=1)&&(n=null),s)e={p:e},t={p:t};else if(Et(e)&&!Et(t)){for(u=[],d=e.length,p=d-2,f=1;f<d;f++)u.push(r(e[f-1],e[f]));d--,i=function(h){h*=d;var m=Math.min(p,~~h);return u[m](h-m)},n=t}else o||(e=Di(Et(e)?[]:{},e));if(!u){for(l in t)xp.call(a,e,l,"get",t[l]);i=function(h){return Cp(h,a)||(s?e.p:e)}}}return eo(n,i)},cy=function(e,t,n){var o=e.labels,i=Tr,s,a,l;for(s in o)a=o[s]-t,a<0==!!n&&a&&i>(a=Math.abs(a))&&(l=s,i=a);return l},fr=function(e,t,n){var o=e.vars,i=o[t],s=ve,a=e._ctx,l,f,u;if(i)return l=o[t+"Params"],f=o.callbackScope||e,n&&Yn.length&&Mf(),a&&(ve=a),u=l?i.apply(f,l):i.call(f),ve=s,u},Zs=function(e){return Zn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!dt),e.progress()<1&&fr(e,"onInterrupt"),e},Oi,Iy=[],By=function(e){if(e)if(e=!e.name&&e.default||e,sp()||e.headless){var t=e.name,n=Ne(e),o=t&&!n&&e.init?function(){this._props=[]}:e,i={init:sa,render:Cp,add:xp,kill:W_,modifier:$_,rawVars:0},s={targetTest:0,get:0,getSetter:If,aliases:{},register:0};if(Ri(),e!==o){if(Jt[t])return;dr(o,dr(Ef(e,i),s)),Di(o.prototype,Di(i,Ef(e,s))),Jt[o.prop=t]=o,e.targetTest&&(wf.push(o),up[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ky(t,o),e.register&&e.register(At,o,$t)}else Iy.push(e)},xe=255,ea={aqua:[0,xe,xe],lime:[0,xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xe],navy:[0,0,128],white:[xe,xe,xe],olive:[128,128,0],yellow:[xe,xe,0],orange:[xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xe,0,0],pink:[xe,192,203],cyan:[0,xe,xe],transparent:[xe,xe,xe,0]},$c=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*xe+.5|0},Fy=function(e,t,n){var o=e?En(e)?[e>>16,e>>8&xe,e&xe]:0:ea.black,i,s,a,l,f,u,d,p,c,h;if(!o){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ea[e])o=ea[e];else if(e.charAt(0)==="#"){if(e.length<6&&(i=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+i+i+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return o=parseInt(e.substr(1,6),16),[o>>16,o>>8&xe,o&xe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),o=[e>>16,e>>8&xe,e&xe]}else if(e.substr(0,3)==="hsl"){if(o=h=e.match(ay),!t)l=+o[0]%360/360,f=+o[1]/100,u=+o[2]/100,s=u<=.5?u*(f+1):u+f-u*f,i=u*2-s,o.length>3&&(o[3]*=1),o[0]=$c(l+1/3,i,s),o[1]=$c(l,i,s),o[2]=$c(l-1/3,i,s);else if(~e.indexOf("="))return o=e.match(ap),n&&o.length<4&&(o[3]=1),o}else o=e.match(ay)||ea.transparent;o=o.map(Number)}return t&&!h&&(i=o[0]/xe,s=o[1]/xe,a=o[2]/xe,d=Math.max(i,s,a),p=Math.min(i,s,a),u=(d+p)/2,d===p?l=f=0:(c=d-p,f=u>.5?c/(2-d-p):c/(d+p),l=d===i?(s-a)/c+(s<a?6:0):d===s?(a-i)/c+2:(i-s)/c+4,l*=60),o[0]=~~(l+.5),o[1]=~~(f*100+.5),o[2]=~~(u*100+.5)),n&&o.length<4&&(o[3]=1),o},zy=function(e){var t=[],n=[],o=-1;return e.split(Mn).forEach(function(i){var s=i.match($o)||[];t.push.apply(t,s),n.push(o+=s.length+1)}),t.c=n,t},py=function(e,t,n){var o="",i=(e+o).match(Mn),s=t?"hsla(":"rgba(",a=0,l,f,u,d;if(!i)return e;if(i=i.map(function(p){return(p=Fy(p,t,1))&&s+(t?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),n&&(u=zy(e),l=n.c,l.join(o)!==u.c.join(o)))for(f=e.replace(Mn,"1").split($o),d=f.length-1;a<d;a++)o+=f[a]+(~l.indexOf(a)?i.shift()||s+"0,0,0,0)":(u.length?u:i.length?i:n).shift());if(!f)for(f=e.split(Mn),d=f.length-1;a<d;a++)o+=f[a]+i[a];return o+f[d]},Mn=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ea)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),A_=/hsl[a]?\(/,mp=function(e){var t=e.join(" "),n;if(Mn.lastIndex=0,Mn.test(t))return n=A_.test(t),e[1]=py(e[1],n),e[0]=py(e[0],n,zy(e[1])),!0},aa,Xt=(function(){var r=Date.now,e=500,t=33,n=r(),o=n,i=1e3/240,s=i,a=[],l,f,u,d,p,c,h=function m(g){var x=r()-o,y=g===!0,k,S,C,w;if((x>e||x<0)&&(n+=x-t),o+=x,C=o-n,k=C-s,(k>0||y)&&(w=++d.frame,p=C-d.time*1e3,d.time=C=C/1e3,s+=k+(k>=i?4:i-k),S=1),y||(l=f(m)),S)for(c=0;c<a.length;c++)a[c](C,p,w,g)};return d={time:0,frame:0,tick:function(){h(!0)},deltaRatio:function(g){return p/(1e3/(g||60))},wake:function(){yy&&(!Xc&&sp()&&(Yr=Xc=window,fp=Yr.document||{},ur.gsap=At,(Yr.gsapVersions||(Yr.gsapVersions=[])).push(At.version),by(Tf||Yr.GreenSockGlobals||!Yr.gsap&&Yr||{}),Iy.forEach(By)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),f=u||function(g){return setTimeout(g,s-d.time*1e3+1|0)},aa=1,h(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),aa=0,f=sa},lagSmoothing:function(g,x){e=g||1/0,t=Math.min(x||33,e)},fps:function(g){i=1e3/(g||240),s=d.time*1e3+i},add:function(g,x,y){var k=x?function(S,C,w,b){g(S,C,w,b),d.remove(k)}:g;return d.remove(g),a[y?"unshift":"push"](k),Ri(),k},remove:function(g,x){~(x=a.indexOf(g))&&a.splice(x,1)&&c>=x&&c--},_listeners:a},d})(),Ri=function(){return!aa&&Xt.wake()},ae={},P_=/^[\d.\-M][\d.\-,\s]/,O_=/["']/g,D_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),o=n[0],i=1,s=n.length,a,l,f;i<s;i++)l=n[i],a=i!==s-1?l.lastIndexOf(","):l.length,f=l.substr(0,a),t[o]=isNaN(f)?f.replace(O_,"").trim():+f,o=l.substr(a+1).trim();return t},L_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),o=e.indexOf("(",t);return e.substring(t,~o&&o<n?e.indexOf(")",n+1):n)},N_=function(e){var t=(e+"").split("("),n=ae[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[D_(t[1])]:L_(e).split(",").map(vy)):ae._CE&&P_.test(e)?ae._CE("",e):n},R_=function(e){return function(t){return 1-e(1-t)}},Uo=function(e,t){return e&&(Ne(e)?e:ae[e]||N_(e))||t},Ko=function(e,t,n,o){n===void 0&&(n=function(l){return 1-t(1-l)}),o===void 0&&(o=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:o},s;return qt(e,function(a){ae[a]=ur[a]=i,ae[s=a.toLowerCase()]=n;for(var l in i)ae[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ae[a+"."+l]=i[l]}),i},Hy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wc=function r(e,t,n){var o=t>=1?t:1,i=(n||(e?.3:.45))/(t<1?t:1),s=i/Jc*(Math.asin(1/o)||0),a=function(u){return u===1?1:o*Math.pow(2,-10*u)*i_((u-s)*i)+1},l=e==="out"?a:e==="in"?function(f){return 1-a(1-f)}:Hy(a);return i=Jc/i,l.config=function(f,u){return r(e,f,u)},l},Kc=function r(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},o=e==="out"?n:e==="in"?function(i){return 1-n(1-i)}:Hy(n);return o.config=function(i){return r(e,i)},o};qt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ko(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ae.Linear.easeNone=ae.none=ae.Linear.easeIn;Ko("Elastic",Wc("in"),Wc("out"),Wc());(function(r,e){var t=1/e,n=2*t,o=2.5*t,i=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<o?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Ko("Bounce",function(s){return 1-i(1-s)},i)})(7.5625,2.75);Ko("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ko("Circ",function(r){return-(gy(1-r*r)-1)});Ko("Sine",function(r){return r===1?1:-o_(r*r_)+1});Ko("Back",Kc("in"),Kc("out"),Kc());ae.SteppedEase=ae.steps=ur.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,o=e+(t?0:1),i=t?1:0,s=1-ye;return function(a){return((o*fa(0,s,a)|0)+i)*n}}};oa.ease=ae["quad.out"];qt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return dp+=r+","+r+"Params,"});var gp=function(e,t){this.id=n_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:pp,this.set=t?t.getSetter:If},la=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ni(this,+t.duration,1,1),this.data=t.data,ve&&(this._ctx=ve,ve.data.push(this)),aa||Xt.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ni(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,o){if(Ri(),!arguments.length)return this._tTime;var i=this._dp;if(i&&i.smoothChildTiming&&this._ts){for(Rf(this,n),!i._dp||i.parent||Ty(i,this);i&&i.parent;)i.parent._time!==i._start+(i._ts>=0?i._tTime/i._ts:(i.totalDuration()-i._tTime)/-i._ts)&&i.totalTime(i._tTime,!0),i=i.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Qr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!o||this._initted&&Math.abs(this._zTime)===ye||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Cy(this,n,o)),this},e.time=function(n,o){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+uy(this))%(this._dur+this._rDelay)||(n?this._dur:0),o):this._time},e.totalProgress=function(n,o){return arguments.length?this.totalTime(this.totalDuration()*n,o):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,o){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+uy(this),o):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,o){var i=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*i,o):this._repeat?Li(this._tTime,i)+1:1},e.timeScale=function(n,o){if(!arguments.length)return this._rts===-ye?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Af(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ye?0:this._rts,this.totalTime(fa(-Math.abs(this._delay),this.totalDuration(),i),o!==!1),Nf(this),m_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ri(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ye&&(this._tTime-=ye)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=_e(n);var o=this.parent||this._dp;return o&&(o._sort||!this.parent)&&Qr(o,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Yt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var o=this.parent||this._dp;return o?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Af(o.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=d_);var o=dt;return dt=n,hp(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dt=o,this},e.globalTime=function(n){for(var o=this,i=arguments.length?n:o.rawTime();o;)i=o._start+i/(Math.abs(o._ts)||1),o=o._dp;return!this.parent&&this._sat?this._sat.globalTime(n):i},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,dy(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var o=this._time;return this._rDelay=n,dy(this),o?this.time(o):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,o){return this.totalTime(_r(this,n),Yt(o))},e.restart=function(n,o){return this.play().totalTime(n?-this._delay:0,Yt(o)),this._dur||(this._zTime=-ye),this},e.play=function(n,o){return n!=null&&this.seek(n,o),this.reversed(!1).paused(!1)},e.reverse=function(n,o){return n!=null&&this.seek(n||this.totalDuration(),o),this.reversed(!0).paused(!1)},e.pause=function(n,o){return n!=null&&this.seek(n,o),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ye:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ye,this},e.isActive=function(){var n=this.parent||this._dp,o=this._start,i;return!!(!n||this._ts&&this._initted&&n.isActive()&&(i=n.rawTime(!0))>=o&&i<this.endTime(!0)-ye)},e.eventCallback=function(n,o,i){var s=this.vars;return arguments.length>1?(o?(s[n]=o,i&&(s[n+"Params"]=i),n==="onUpdate"&&(this._onUpdate=o)):delete s[n],this):s[n]},e.then=function(n){var o=this,i=o._prom;return new Promise(function(s){var a=Ne(n)?n:wy,l=function(){var u=o.then;o.then=null,i&&i(),Ne(a)&&(a=a(o))&&(a.then||a===o)&&(o.then=u),s(a),o.then=u};o._initted&&o.totalProgress()===1&&o._ts>=0||!o._tTime&&o._ts<0?l():o._prom=l})},e.kill=function(){Zs(this)},r})();dr(la.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ye,_prom:0,_ps:!1,_rts:1});var Mt=(function(r){my(e,r);function e(n,o){var i;return n===void 0&&(n={}),i=r.call(this,n)||this,i.labels={},i.smoothChildTiming=!!n.smoothChildTiming,i.autoRemoveChildren=!!n.autoRemoveChildren,i._sort=Yt(n.sortChildren),Te&&Qr(n.parent||Te,Tn(i),o),n.reversed&&i.reverse(),n.paused&&i.paused(!0),n.scrollTrigger&&My(Tn(i),n.scrollTrigger),i}var t=e.prototype;return t.to=function(o,i,s){return ra(0,arguments,this),this},t.from=function(o,i,s){return ra(1,arguments,this),this},t.fromTo=function(o,i,s,a){return ra(2,arguments,this),this},t.set=function(o,i,s){return i.duration=0,i.parent=this,ta(i).repeatDelay||(i.repeat=0),i.immediateRender=!!i.immediateRender,new He(o,i,_r(this,s),1),this},t.call=function(o,i,s){return Qr(this,He.delayedCall(0,o,i),s)},t.staggerTo=function(o,i,s,a,l,f,u){return s.duration=i,s.stagger=s.stagger||a,s.onComplete=f,s.onCompleteParams=u,s.parent=this,new He(o,s,_r(this,l)),this},t.staggerFrom=function(o,i,s,a,l,f,u){return s.runBackwards=1,ta(s).immediateRender=Yt(s.immediateRender),this.staggerTo(o,i,s,a,l,f,u)},t.staggerFromTo=function(o,i,s,a,l,f,u,d){return a.startAt=s,ta(a).immediateRender=Yt(a.immediateRender),this.staggerTo(o,i,a,l,f,u,d)},t.render=function(o,i,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,f=this._dur,u=o<=0?0:_e(o),d=this._zTime<0!=o<0&&(this._initted||!f),p,c,h,m,g,x,y,k,S,C,w,b;if(this!==Te&&u>l&&o>=0&&(u=l),u!==this._tTime||s||d){if(a!==this._time&&f&&(u+=this._time-a,o+=this._time-a),p=u,S=this._start,k=this._ts,x=!k,d&&(f||(a=this._zTime),(o||!i)&&(this._zTime=o)),this._repeat){if(w=this._yoyo,g=f+this._rDelay,this._repeat<-1&&o<0)return this.totalTime(g*100+o,i,s);if(p=_e(u%g),u===l?(m=this._repeat,p=f):(C=_e(u/g),m=~~C,m&&m===C&&(p=f,m--),p>f&&(p=f)),C=Li(this._tTime,g),!a&&this._tTime&&C!==m&&this._tTime-C*g-this._dur<=0&&(C=m),w&&m&1&&(p=f-p,b=1),m!==C&&!this._lock){var T=w&&C&1,M=T===(w&&m&1);if(m<C&&(T=!T),a=T?0:u%f?f:u,this._lock=1,this.render(a||(b?0:_e(m*g)),i,!f)._lock=0,this._tTime=u,!i&&this.parent&&fr(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,C=m),a&&a!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(f=this._dur,l=this._tDur,M&&(this._lock=2,a=T?f:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!x)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=b_(this,_e(a),_e(p)),y&&(u-=p-(p=y._start))),this._tTime=u,this._time=p,this._act=!!k,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=o,a=0),!a&&u&&f&&!i&&!C&&(fr(this,"onStart"),this._tTime!==u))return this;if(p>=a&&o>=0)for(c=this._first;c;){if(h=c._next,(c._act||p>=c._start)&&c._ts&&y!==c){if(c.parent!==this)return this.render(o,i,s);if(c.render(c._ts>0?(p-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(p-c._start)*c._ts,i,s),p!==this._time||!this._ts&&!x){y=0,h&&(u+=this._zTime=-ye);break}}c=h}else{c=this._last;for(var E=o<0?o:p;c;){if(h=c._prev,(c._act||E<=c._end)&&c._ts&&y!==c){if(c.parent!==this)return this.render(o,i,s);if(c.render(c._ts>0?(E-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(E-c._start)*c._ts,i,s||dt&&hp(c)),p!==this._time||!this._ts&&!x){y=0,h&&(u+=this._zTime=E?-ye:ye);break}}c=h}}if(y&&!i&&(this.pause(),y.render(p>=a?0:-ye)._zTime=p>=a?1:-1,this._ts))return this._start=S,Nf(this),this.render(o,i,s);this._onUpdate&&!i&&fr(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(k)!==Math.abs(this._ts))&&(this._lock||((o||!f)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Zn(this,1),!i&&!(o<0&&!a)&&(u||a||!l)&&(fr(this,u===l&&o>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(o,i){var s=this;if(En(i)||(i=_r(this,i,o)),!(o instanceof la)){if(Et(o))return o.forEach(function(a){return s.add(a,i)}),this;if(Je(o))return this.addLabel(o,i);if(Ne(o))o=He.delayedCall(0,o);else return this}return this!==o?Qr(this,o,i):this},t.getChildren=function(o,i,s,a){o===void 0&&(o=!0),i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=-Tr);for(var l=[],f=this._first;f;)f._start>=a&&(f instanceof He?i&&l.push(f):(s&&l.push(f),o&&l.push.apply(l,f.getChildren(!0,i,s)))),f=f._next;return l},t.getById=function(o){for(var i=this.getChildren(1,1,1),s=i.length;s--;)if(i[s].vars.id===o)return i[s]},t.remove=function(o){return Je(o)?this.removeLabel(o):Ne(o)?this.killTweensOf(o):(o.parent===this&&Lf(this,o),o===this._recent&&(this._recent=this._last),Vo(this))},t.totalTime=function(o,i){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_e(Xt.time-(this._ts>0?o/this._ts:(this.totalDuration()-o)/-this._ts))),r.prototype.totalTime.call(this,o,i),this._forcing=0,this):this._tTime},t.addLabel=function(o,i){return this.labels[o]=_r(this,i),this},t.removeLabel=function(o){return delete this.labels[o],this},t.addPause=function(o,i,s){var a=He.delayedCall(0,i||sa,s);return a.data="isPause",this._hasPause=1,Qr(this,a,_r(this,o))},t.removePause=function(o){var i=this._first;for(o=_r(this,o);i;)i._start===o&&i.data==="isPause"&&Zn(i),i=i._next},t.killTweensOf=function(o,i,s){for(var a=this.getTweensOf(o,s),l=a.length;l--;)Xn!==a[l]&&a[l].kill(o,i);return this},t.getTweensOf=function(o,i){for(var s=[],a=Mr(o),l=this._first,f=En(i),u;l;)l instanceof He?c_(l._targets,a)&&(f?(!Xn||l._initted&&l._ts)&&l.globalTime(0)<=i&&l.globalTime(l.totalDuration())>i:!i||l.isActive())&&s.push(l):(u=l.getTweensOf(a,i)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(o,i){i=i||{};var s=this,a=_r(s,o),l=i,f=l.startAt,u=l.onStart,d=l.onStartParams,p=l.immediateRender,c,h=He.to(s,dr({ease:i.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:i.duration||Math.abs((a-(f&&"time"in f?f.time:s._time))/s.timeScale())||ye,onStart:function(){if(s.pause(),!c){var g=i.duration||Math.abs((a-(f&&"time"in f?f.time:s._time))/s.timeScale());h._dur!==g&&Ni(h,g,0,1).render(h._time,!0,!0),c=1}u&&u.apply(h,d||[])}},i));return p?h.render(0):h},t.tweenFromTo=function(o,i,s){return this.tweenTo(i,dr({startAt:{time:_r(this,o)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(o){return o===void 0&&(o=this._time),cy(this,_r(this,o))},t.previousLabel=function(o){return o===void 0&&(o=this._time),cy(this,_r(this,o),1)},t.currentLabel=function(o){return arguments.length?this.seek(o,!0):this.previousLabel(this._time+ye)},t.shiftChildren=function(o,i,s){s===void 0&&(s=0);var a=this._first,l=this.labels,f;for(o=_e(o);a;)a._start>=s&&(a._start+=o,a._end+=o),a=a._next;if(i)for(f in l)l[f]>=s&&(l[f]+=o);return Vo(this)},t.invalidate=function(o){var i=this._first;for(this._lock=0;i;)i.invalidate(o),i=i._next;return r.prototype.invalidate.call(this,o)},t.clear=function(o){o===void 0&&(o=!0);for(var i=this._first,s;i;)s=i._next,this.remove(i),i=s;return this._dp&&(this._time=this._tTime=this._pTime=0),o&&(this.labels={}),Vo(this)},t.totalDuration=function(o){var i=0,s=this,a=s._last,l=Tr,f,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-o:o));if(s._dirty){for(d=s.parent;a;)f=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,Qr(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(i-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=_e(u/s._ts),s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>i&&a._ts&&(i=a._end),a=f;Ni(s,s===Te&&s._time>i?s._time:i,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(o){if(Te._ts&&(Cy(Te,Af(o,Te)),Sy=Xt.frame),Xt.frame>=ly){ly+=Qt.autoSleep||120;var i=Te._first;if((!i||!i._ts)&&Qt.autoSleep&&Xt._listeners.length<2){for(;i&&!i._ts;)i=i._next;i||Xt.sleep()}}},e})(la);dr(Mt.prototype,{_lock:0,_hasPause:0,_forcing:0});var I_=function(e,t,n,o,i,s,a){var l=new $t(this._pt,e,t,0,1,Sp,null,i),f=0,u=0,d,p,c,h,m,g,x,y;for(l.b=n,l.e=o,n+="",o+="",(x=~o.indexOf("random("))&&(o=Ii(o)),s&&(y=[n,o],s(y,e,t),n=y[0],o=y[1]),p=n.match(Uc)||[];d=Uc.exec(o);)h=d[0],m=o.substring(f,d.index),c?c=(c+1)%5:m.substr(-5)==="rgba("&&(c=1),h!==p[u++]&&(g=parseFloat(p[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:g,c:h.charAt(1)==="="?Wo(g,h)-g:parseFloat(h)-g,m:c&&c<4?Math.round:0},f=Uc.lastIndex);return l.c=f<o.length?o.substring(f,o.length):"",l.fp=a,(lp.test(o)||x)&&(l.e=0),this._pt=l,l},xp=function(e,t,n,o,i,s,a,l,f,u){Ne(o)&&(o=o(i||0,e,s));var d=e[t],p=n!=="get"?n:Ne(d)?f?e[t.indexOf("set")||!Ne(e["get"+t.substr(3)])?t:"get"+t.substr(3)](f):e[t]():d,c=Ne(d)?f?V_:qy:kp,h;if(Je(o)&&(~o.indexOf("random(")&&(o=Ii(o)),o.charAt(1)==="="&&(h=Wo(p,o)+(ct(p)||0),(h||h===0)&&(o=h))),!u||p!==o||np)return!isNaN(p*o)&&o!==""?(h=new $t(this._pt,e,t,+p||0,o-(p||0),typeof d=="boolean"?q_:$y,0,c),f&&(h.fp=f),a&&h.modifier(a,this,e),this._pt=h):(!d&&!(t in e)&&Df(t,o),I_.call(this,e,t,p,o,c,l||Qt.stringFilter,f))},B_=function(e,t,n,o,i){if(Ne(e)&&(e=na(e,i,t,n,o)),!Zr(e)||e.style&&e.nodeType||Et(e)||xy(e))return Je(e)?na(e,i,t,n,o):e;var s={},a;for(a in e)s[a]=na(e[a],i,t,n,o);return s},yp=function(e,t,n,o,i,s){var a,l,f,u;if(Jt[e]&&(a=new Jt[e]).init(i,a.rawVars?t[e]:B_(t[e],o,i,s,n),n,o,s)!==!1&&(n._pt=l=new $t(n._pt,i,e,0,1,a.render,a,0,a.priority),n!==Oi))for(f=n._ptLookup[n._targets.indexOf(i)],u=a._props.length;u--;)f[a._props[u]]=l;return a},Xn,np,bp=function r(e,t,n){var o=e.vars,i=o.ease,s=o.startAt,a=o.immediateRender,l=o.lazy,f=o.onUpdate,u=o.runBackwards,d=o.yoyoEase,p=o.keyframes,c=o.autoRevert,h=e._dur,m=e._startAt,g=e._targets,x=e.parent,y=x&&x.data==="nested"?x.vars.targets:g,k=e._overwrite==="auto"&&!ip,S=e.timeline,C=o.easeReverse||d,w,b,T,M,E,U,O,B,R,z,j,I,re;if(S&&(!p||!i)&&(i="none"),e._ease=Uo(i,oa.ease),e._rEase=C&&(Uo(C)||e._ease),e._from=!S&&!!o.runBackwards,e._from&&(e.ratio=1),!S||p&&!o.stagger){if(B=g[0]?Qn(g[0]).harness:0,I=B&&o[B.prop],w=Ef(o,up),m&&(m._zTime<0&&m.progress(1),t<0&&u&&a&&!c?m.render(-1,!0):m.revert(u&&h?vf:u_),m._lazy=0),s){if(Zn(e._startAt=He.set(g,dr({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!m&&Yt(l),startAt:null,delay:0,onUpdate:f&&function(){return fr(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(dt||!a&&!c)&&e._startAt.revert(vf),a&&h&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&h&&!m){if(t&&(a=!1),T=dr({overwrite:!1,data:"isFromStart",lazy:a&&!m&&Yt(l),immediateRender:a,stagger:0,parent:x},w),I&&(T[B.prop]=I),Zn(e._startAt=He.set(g,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(dt?e._startAt.revert(vf):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,ye,ye);else if(!t)return}for(e._pt=e._ptCache=0,l=h&&Yt(l)||l&&!h,b=0;b<g.length;b++){if(E=g[b],O=E._gsap||cp(g)[b]._gsap,e._ptLookup[b]=z={},Yc[O.id]&&Yn.length&&Mf(),j=y===g?b:y.indexOf(E),B&&(R=new B).init(E,I||w,e,j,y)!==!1&&(e._pt=M=new $t(e._pt,E,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(de){z[de]=M}),R.priority&&(U=1)),!B||I)for(T in w)Jt[T]&&(R=yp(T,w,e,j,E,y))?R.priority&&(U=1):z[T]=M=xp.call(e,E,T,"get",w[T],j,y,0,o.stringFilter);e._op&&e._op[b]&&e.kill(E,e._op[b]),k&&e._pt&&(Xn=e,Te.killTweensOf(E,z,e.globalTime(t)),re=!e.parent,Xn=0),e._pt&&l&&(Yc[O.id]=1)}U&&vp(e),e._onInit&&e._onInit(e)}e._onUpdate=f,e._initted=(!e._op||e._pt)&&!re,p&&t<=0&&S.render(Tr,!0,!0)},F_=function(e,t,n,o,i,s,a,l){var f=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,p,c;if(!f)for(f=e._ptCache[t]=[],p=e._ptLookup,c=e._targets.length;c--;){if(u=p[c][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return np=1,e.vars[t]="+=0",bp(e,a),np=0,l?ia(t+" not eligible for reset. Try splitting into individual properties"):1;f.push(u)}for(c=f.length;c--;)d=f[c],u=d._pt||d,u.s=(o||o===0)&&!i?o:u.s+(o||0)+s*u.c,u.c=n-u.s,d.e&&(d.e=Re(n)+ct(d.e)),d.b&&(d.b=u.s+ct(d.b))},z_=function(e,t){var n=e[0]?Qn(e[0]).harness:0,o=n&&n.aliases,i,s,a,l;if(!o)return t;i=Di({},t);for(s in o)if(s in i)for(l=o[s].split(","),a=l.length;a--;)i[l[a]]=i[s];return i},H_=function(e,t,n,o){var i=t.ease||o||"power1.inOut",s,a;if(Et(t))a=n[e]||(n[e]=[]),t.forEach(function(l,f){return a.push({t:f/(t.length-1)*100,v:l,e:i})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:i})},na=function(e,t,n,o,i){return Ne(e)?e.call(t,n,o,i):Je(e)&&~e.indexOf("random(")?Ii(e):e},Vy=dp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Uy={};qt(Vy+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Uy[r]=1});var He=(function(r){my(e,r);function e(n,o,i,s){var a;typeof o=="number"&&(i.duration=o,o=i,i=null),a=r.call(this,s?o:ta(o))||this;var l=a.vars,f=l.duration,u=l.delay,d=l.immediateRender,p=l.stagger,c=l.overwrite,h=l.keyframes,m=l.defaults,g=l.scrollTrigger,x=o.parent||Te,y=(Et(n)||xy(n)?En(n[0]):"length"in o)?[n]:Mr(n),k,S,C,w,b,T,M,E;if(a._targets=y.length?cp(y):ia("GSAP target "+n+" not found. https://gsap.com",!Qt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=c,h||p||Cf(f)||Cf(u)){o=a.vars;var U=o.easeReverse||o.yoyoEase;if(k=a.timeline=new Mt({data:"nested",defaults:m||{},targets:x&&x.data==="nested"?x.vars.targets:y}),k.kill(),k.parent=k._dp=Tn(a),k._start=0,p||Cf(f)||Cf(u)){if(w=y.length,M=p&&Oy(p),Zr(p))for(b in p)~Vy.indexOf(b)&&(E||(E={}),E[b]=p[b]);for(S=0;S<w;S++)C=Ef(o,Uy),C.stagger=0,U&&(C.easeReverse=U),E&&Di(C,E),T=y[S],C.duration=+na(f,Tn(a),S,T,y),C.delay=(+na(u,Tn(a),S,T,y)||0)-a._delay,!p&&w===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),k.to(T,C,M?M(S,T,y):0),k._ease=ae.none;k.duration()?f=u=0:a.timeline=0}else if(h){ta(dr(k.vars.defaults,{ease:"none"})),k._ease=Uo(h.ease||o.ease||"none");var O=0,B,R,z;if(Et(h))h.forEach(function(j){return k.to(y,j,">")}),k.duration();else{C={};for(b in h)b==="ease"||b==="easeEach"||H_(b,h[b],C,h.easeEach);for(b in C)for(B=C[b].sort(function(j,I){return j.t-I.t}),O=0,S=0;S<B.length;S++)R=B[S],z={ease:R.e,duration:(R.t-(S?B[S-1].t:0))/100*f},z[b]=R.v,k.to(y,z,O),O+=z.duration;k.duration()<f&&k.to({},{duration:f-k.duration()})}}f||a.duration(f=k.duration())}else a.timeline=0;return c===!0&&!ip&&(Xn=Tn(a),Te.killTweensOf(y),Xn=0),Qr(x,Tn(a),i),o.reversed&&a.reverse(),o.paused&&a.paused(!0),(d||!f&&!h&&a._start===_e(x._time)&&Yt(d)&&g_(Tn(a))&&x.data!=="nested")&&(a._tTime=-ye,a.render(Math.max(0,-u)||0)),g&&My(Tn(a),g),a}var t=e.prototype;return t.render=function(o,i,s){var a=this._time,l=this._tDur,f=this._dur,u=o<0,d=o>l-ye&&!u?l:o<ye?0:o,p,c,h,m,g,x,y,k;if(!f)y_(this,o,i,s);else if(d!==this._tTime||!o||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(p=d,k=this.timeline,this._repeat){if(m=f+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+o,i,s);if(p=_e(d%m),d===l?(h=this._repeat,p=f):(g=_e(d/m),h=~~g,h&&h===g?(p=f,h--):p>f&&(p=f)),x=this._yoyo&&h&1,x&&(p=f-p),g=Li(this._tTime,m),p===a&&!s&&this._initted&&h===g)return this._tTime=d,this;h!==g&&this.vars.repeatRefresh&&!x&&!this._lock&&p!==m&&this._initted&&(this._lock=s=1,this.render(_e(m*h),!0).invalidate()._lock=0)}if(!this._initted){if(Ey(this,u?o:p,s,i,d))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&h!==g))return this;if(f!==this._dur)return this.render(o,i,s)}if(this._rEase){var S=p<a;if(S!==this._inv){var C=S?a:f-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(S?-1:1)/C:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((p-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(p/f);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!i&&!g&&(fr(this,"onStart"),this._tTime!==d))return this;for(c=this._pt;c;)c.r(y,c.d),c=c._next;k&&k.render(o<0?o:k._dur*k._ease(p/this._dur),i,s)||this._startAt&&(this._zTime=o),this._onUpdate&&!i&&(u&&Qc(this,o,i,s),fr(this,"onUpdate")),this._repeat&&h!==g&&this.vars.onRepeat&&!i&&this.parent&&fr(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Qc(this,o,!0,!0),(o||!f)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Zn(this,1),!i&&!(u&&!a)&&(d||a||x)&&(fr(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(o){return(!o||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(o),r.prototype.invalidate.call(this,o)},t.resetTo=function(o,i,s,a,l){aa||Xt.wake(),this._ts||this.play();var f=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||bp(this,f),u=this._ease(f/this._dur),F_(this,o,i,s,a,u,f,l)?this.resetTo(o,i,s,a,1):(Rf(this,0),this.parent||_y(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(o,i){if(i===void 0&&(i="all"),!o&&(!i||i==="all"))return this._lazy=this._pt=0,this.parent?Zs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(o,i,Xn&&Xn.vars.overwrite!==!0)._first||Zs(this),this.parent&&s!==this.timeline.totalDuration()&&Ni(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=o?Mr(o):a,f=this._ptLookup,u=this._pt,d,p,c,h,m,g,x;if((!i||i==="all")&&h_(a,l))return i==="all"&&(this._pt=0),Zs(this);for(d=this._op=this._op||[],i!=="all"&&(Je(i)&&(m={},qt(i,function(y){return m[y]=1}),i=m),i=z_(a,i)),x=a.length;x--;)if(~l.indexOf(a[x])){p=f[x],i==="all"?(d[x]=i,h=p,c={}):(c=d[x]=d[x]||{},h=i);for(m in h)g=p&&p[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Lf(this,g,"_pt"),delete p[m]),c!=="all"&&(c[m]=1)}return this._initted&&!this._pt&&u&&Zs(this),this},e.to=function(o,i){return new e(o,i,arguments[2])},e.from=function(o,i){return ra(1,arguments)},e.delayedCall=function(o,i,s,a){return new e(i,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:o,onComplete:i,onReverseComplete:i,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(o,i,s){return ra(2,arguments)},e.set=function(o,i){return i.duration=0,i.repeatDelay||(i.repeat=0),new e(o,i)},e.killTweensOf=function(o,i,s){return Te.killTweensOf(o,i,s)},e})(la);dr(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});qt("staggerTo,staggerFrom,staggerFromTo",function(r){He[r]=function(){var e=new Mt,t=ep.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var kp=function(e,t,n){return e[t]=n},qy=function(e,t,n){return e[t](n)},V_=function(e,t,n,o){return e[t](o.fp,n)},U_=function(e,t,n){return e.setAttribute(t,n)},If=function(e,t){return Ne(e[t])?qy:Of(e[t])&&e.setAttribute?U_:kp},$y=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},q_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Sp=function(e,t){var n=t._pt,o="";if(!e&&t.b)o=t.b;else if(e===1&&t.e)o=t.e;else{for(;n;)o=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+o,n=n._next;o+=t.c}t.set(t.t,t.p,o,t)},Cp=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},$_=function(e,t,n,o){for(var i=this._pt,s;i;)s=i._next,i.p===o&&i.modifier(e,t,n),i=s},W_=function(e){for(var t=this._pt,n,o;t;)o=t._next,t.p===e&&!t.op||t.op===e?Lf(this,t,"_pt"):t.dep||(n=1),t=o;return!n},K_=function(e,t,n,o){o.mSet(e,t,o.m.call(o.tween,n,o.mt),o)},vp=function(e){for(var t=e._pt,n,o,i,s;t;){for(n=t._next,o=i;o&&o.pr>t.pr;)o=o._next;(t._prev=o?o._prev:s)?t._prev._next=t:i=t,(t._next=o)?o._prev=t:s=t,t=n}e._pt=i},$t=(function(){function r(t,n,o,i,s,a,l,f,u){this.t=n,this.s=i,this.c=s,this.p=o,this.r=a||$y,this.d=l||this,this.set=f||kp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,o,i){this.mSet=this.mSet||this.set,this.set=K_,this.m=n,this.mt=i,this.tween=o},r})();qt(dp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return up[r]=1});ur.TweenMax=ur.TweenLite=He;ur.TimelineLite=ur.TimelineMax=Mt;Te=new Mt({sortChildren:!1,defaults:oa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qt.stringFilter=mp;var qo=[],_f={},j_=[],hy=0,G_=0,jc=function(e){return(_f[e]||j_).map(function(t){return t()})},op=function(){var e=Date.now(),t=[];e-hy>2&&(jc("matchMediaInit"),qo.forEach(function(n){var o=n.queries,i=n.conditions,s,a,l,f;for(a in o)s=Yr.matchMedia(o[a]).matches,s&&(l=1),s!==i[a]&&(i[a]=s,f=1);f&&(n.revert(),l&&t.push(n))}),jc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(o){return n.add(null,o)})}),hy=e,jc("matchMedia"))},Wy=(function(){function r(t,n){this.selector=n&&tp(n),this.data=[],this._r=[],this.isReverted=!1,this.id=G_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,o,i){Ne(n)&&(i=o,o=n,n=Ne);var s=this,a=function(){var f=ve,u=s.selector,d;return f&&f!==s&&f.data.push(s),i&&(s.selector=tp(i)),ve=s,d=o.apply(s,arguments),Ne(d)&&s._r.push(d),ve=f,s.selector=u,s.isReverted=!1,d};return s.last=a,n===Ne?a(s,function(l){return s.add(null,l)}):n?s[n]=a:a},e.ignore=function(n){var o=ve;ve=null,n(this),ve=o},e.getTweens=function(){var n=[];return this.data.forEach(function(o){return o instanceof r?n.push.apply(n,o.getTweens()):o instanceof He&&!(o.parent&&o.parent.data==="nested")&&n.push(o)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,o){var i=this;if(n?(function(){for(var a=i.getTweens(),l=i.data.length,f;l--;)f=i.data[l],f.data==="isFlip"&&(f.revert(),f.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=i.data.length;l--;)f=i.data[l],f instanceof Mt?f.data!=="nested"&&(f.scrollTrigger&&f.scrollTrigger.revert(),f.kill()):!(f instanceof He)&&f.revert&&f.revert(n);i._r.forEach(function(u){return u(n,i)}),i.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),o)for(var s=qo.length;s--;)qo[s].id===this.id&&qo.splice(s,1)},e.revert=function(n){this.kill(n||{})},r})(),J_=(function(){function r(t){this.contexts=[],this.scope=t,ve&&ve.data.push(this)}var e=r.prototype;return e.add=function(n,o,i){Zr(n)||(n={matches:n});var s=new Wy(0,i||this.scope),a=s.conditions={},l,f,u;ve&&!s.selector&&(s.selector=ve.selector),this.contexts.push(s),o=s.add("onMatch",o),s.queries=n;for(f in n)f==="all"?u=1:(l=Yr.matchMedia(n[f]),l&&(qo.indexOf(s)<0&&qo.push(s),(a[f]=l.matches)&&(u=1),l.addListener?l.addListener(op):l.addEventListener("change",op)));return u&&o(s,function(d){return s.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(o){return o.kill(n,!0)})},r})(),Pf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(o){return By(o)})},timeline:function(e){return new Mt(e)},getTweensOf:function(e,t){return Te.getTweensOf(e,t)},getProperty:function(e,t,n,o){Je(e)&&(e=Mr(e)[0]);var i=Qn(e||{}).get,s=n?wy:vy;return n==="native"&&(n=""),e&&(t?s((Jt[t]&&Jt[t].get||i)(e,t,n,o)):function(a,l,f){return s((Jt[a]&&Jt[a].get||i)(e,a,l,f))})},quickSetter:function(e,t,n){if(e=Mr(e),e.length>1){var o=e.map(function(u){return At.quickSetter(u,t,n)}),i=o.length;return function(u){for(var d=i;d--;)o[d](u)}}e=e[0]||{};var s=Jt[t],a=Qn(e),l=a.harness&&(a.harness.aliases||{})[t]||t,f=s?function(u){var d=new s;Oi._pt=0,d.init(e,n?u+n:u,Oi,0,[e]),d.render(1,d),Oi._pt&&Cp(1,Oi)}:a.set(e,l);return s?f:function(u){return f(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var o,i=At.to(e,dr((o={},o[t]="+=0.1",o.paused=!0,o.stagger=0,o),n||{})),s=function(l,f,u){return i.resetTo(t,l,f,u)};return s.tween=i,s},isTweening:function(e){return Te.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Uo(e.ease,oa.ease)),fy(oa,e||{})},config:function(e){return fy(Qt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,o=e.plugins,i=e.defaults,s=e.extendTimeline;(o||"").split(",").forEach(function(a){return a&&!Jt[a]&&!ur[a]&&ia(t+" effect requires "+a+" plugin.")}),qc[t]=function(a,l,f){return n(Mr(a),dr(l||{},i),f)},s&&(Mt.prototype[t]=function(a,l,f){return this.add(qc[t](a,Zr(l)?l:(f=l)&&{},this),f)})},registerEase:function(e,t){ae[e]=Uo(t)},parseEase:function(e,t){return arguments.length?Uo(e,t):ae},getById:function(e){return Te.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Mt(e),o,i;for(n.smoothChildTiming=Yt(e.smoothChildTiming),Te.remove(n),n._dp=0,n._time=n._tTime=Te._time,o=Te._first;o;)i=o._next,(t||!(!o._dur&&o instanceof He&&o.vars.onComplete===o._targets[0]))&&Qr(n,o,o._start-o._delay),o=i;return Qr(Te,n,0),n},context:function(e,t){return e?new Wy(e,t):ve},matchMedia:function(e){return new J_(e)},matchMediaRefresh:function(){return qo.forEach(function(e){var t=e.conditions,n,o;for(o in t)t[o]&&(t[o]=!1,n=1);n&&e.revert()})||op()},addEventListener:function(e,t){var n=_f[e]||(_f[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=_f[e],o=n&&n.indexOf(t);o>=0&&n.splice(o,1)},utils:{wrap:T_,wrapYoyo:M_,distribute:Oy,random:Ly,snap:Dy,normalize:__,getUnit:ct,clamp:S_,splitColor:Fy,toArray:Mr,selector:tp,mapRange:Ry,pipe:v_,unitize:w_,interpolate:E_,shuffle:Py},install:by,effects:qc,ticker:Xt,updateRoot:Mt.updateRoot,plugins:Jt,globalTimeline:Te,core:{PropTween:$t,globals:ky,Tween:He,Timeline:Mt,Animation:la,getCache:Qn,_removeLinkedListItem:Lf,reverting:function(){return dt},context:function(e){return e&&ve&&(ve.data.push(e),e._ctx=ve),ve},suppressOverwrites:function(e){return ip=e}}};qt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Pf[r]=He[r]});Xt.add(Mt.updateRoot);Oi=Pf.to({},{duration:0});var X_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Y_=function(e,t){var n=e._targets,o,i,s;for(o in t)for(i=n.length;i--;)s=e._ptLookup[i][o],s&&(s=s.d)&&(s._pt&&(s=X_(s,o)),s&&s.modifier&&s.modifier(t[o],e,n[i],o))},Gc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(o,i,s){s._onInit=function(a){var l,f;if(Je(i)&&(l={},qt(i,function(u){return l[u]=1}),i=l),t){l={};for(f in i)l[f]=t(i[f]);i=l}Y_(a,i)}}}},At=Pf.registerPlugin({name:"attr",init:function(e,t,n,o,i){var s,a,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],o,i,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)dt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Gc("roundProps",rp),Gc("modifiers"),Gc("snap",Dy))||Pf;He.version=Mt.version=At.version="3.15.0";yy=1;sp()&&Ri();var Q_=ae.Power0,Z_=ae.Power1,eT=ae.Power2,tT=ae.Power3,rT=ae.Power4,nT=ae.Linear,oT=ae.Quad,iT=ae.Cubic,sT=ae.Quart,aT=ae.Quint,lT=ae.Strong,fT=ae.Elastic,uT=ae.Back,dT=ae.SteppedEase,cT=ae.Bounce,pT=ae.Sine,hT=ae.Expo,mT=ae.Circ;var Ky,to,Fi,Ap,Xo,gT,jy,Pp,xT=function(){return typeof window<"u"},Pn={},Jo=180/Math.PI,zi=Math.PI/180,Bi=Math.atan2,Gy=1e8,Op=/([A-Z])/g,yT=/(left|right|width|margin|padding|x)/i,bT=/[\s,\(]\S/,en={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_p=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ST=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},CT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},rb=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},nb=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},wT=function(e,t,n){return e.style[t]=n},_T=function(e,t,n){return e.style.setProperty(t,n)},TT=function(e,t,n){return e._gsap[t]=n},MT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ET=function(e,t,n,o,i){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(i,s)},AT=function(e,t,n,o,i){var s=e._gsap;s[t]=n,s.renderTransform(i,s)},Me="transform",Zt=Me+"Origin",PT=function r(e,t){var n=this,o=this.target,i=o.style,s=o._gsap;if(e in Pn&&i){if(this.tfm=this.tfm||{},e!=="transform")e=en[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=An(o,a)}):this.tfm[e]=s.x?s[e]:An(o,e),e===Zt&&(this.tfm.zOrigin=s.zOrigin);else return en.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Me)>=0)return;s.svg&&(this.svgo=o.getAttribute("data-svg-origin"),this.props.push(Zt,t,"")),e=Me}(i||t)&&this.props.push(e,t,i[e])},ob=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},OT=function(){var e=this.props,t=this.target,n=t.style,o=t._gsap,i,s;for(i=0;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)==="--"?e[i]:e[i].replace(Op,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)o[s]=this.tfm[s];o.svg&&(o.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),i=Pp(),(!i||!i.isStart)&&!n[Me]&&(ob(n),o.zOrigin&&n[Zt]&&(n[Zt]+=" "+o.zOrigin+"px",o.zOrigin=0,o.renderTransform()),o.uncache=1)}},ib=function(e,t){var n={target:e,props:[],revert:OT,save:PT};return e._gsap||At.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(o){return n.save(o)}),n},sb,Tp=function(e,t){var n=to.createElementNS?to.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):to.createElement(e);return n&&n.style?n:to.createElement(e)},cr=function r(e,t,n){var o=getComputedStyle(e);return o[t]||o.getPropertyValue(t.replace(Op,"-$1").toLowerCase())||o.getPropertyValue(t)||!n&&r(e,Hi(t)||t,1)||""},Jy="O,Moz,ms,Ms,Webkit".split(","),Hi=function(e,t,n){var o=t||Xo,i=o.style,s=5;if(e in i&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Jy[s]+e in i););return s<0?null:(s===3?"ms":s>=0?Jy[s]:"")+e},Mp=function(){xT()&&window.document&&(Ky=window,to=Ky.document,Fi=to.documentElement,Xo=Tp("div")||{style:{}},gT=Tp("div"),Me=Hi(Me),Zt=Me+"Origin",Xo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",sb=!!Hi("perspective"),Pp=At.core.reverting,Ap=1)},Xy=function(e){var t=e.ownerSVGElement,n=Tp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),o=e.cloneNode(!0),i;o.style.display="block",n.appendChild(o),Fi.appendChild(n);try{i=o.getBBox()}catch{}return n.removeChild(o),Fi.removeChild(n),i},Yy=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ab=function(e){var t,n;try{t=e.getBBox()}catch{t=Xy(e),n=1}return t&&(t.width||t.height)||n||(t=Xy(e)),t&&!t.width&&!t.x&&!t.y?{x:+Yy(e,["x","cx","x1"])||0,y:+Yy(e,["y","cy","y1"])||0,width:0,height:0}:t},lb=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ab(e))},no=function(e,t){if(t){var n=e.style,o;t in Pn&&t!==Zt&&(t=Me),n.removeProperty?(o=t.substr(0,2),(o==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(o==="--"?t:t.replace(Op,"-$1").toLowerCase())):n.removeAttribute(t)}},ro=function(e,t,n,o,i,s){var a=new $t(e._pt,t,n,0,1,s?nb:rb);return e._pt=a,a.b=o,a.e=i,e._props.push(n),a},Qy={deg:1,rad:1,turn:1},DT={grid:1,flex:1},oo=function r(e,t,n,o){var i=parseFloat(n)||0,s=(n+"").trim().substr((i+"").length)||"px",a=Xo.style,l=yT.test(t),f=e.tagName.toLowerCase()==="svg",u=(f?"client":"offset")+(l?"Width":"Height"),d=100,p=o==="px",c=o==="%",h,m,g,x;if(o===s||!i||Qy[o]||Qy[s])return i;if(s!=="px"&&!p&&(i=r(e,t,n,"px")),x=e.getCTM&&lb(e),(c||s==="%")&&(Pn[t]||~t.indexOf("adius")))return h=x?e.getBBox()[l?"width":"height"]:e[u],Re(c?i/h*d:i/100*h);if(a[l?"width":"height"]=d+(p?s:o),m=o!=="rem"&&~t.indexOf("adius")||o==="em"&&e.appendChild&&!f?e:e.parentNode,x&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===to||!m.appendChild)&&(m=to.body),g=m._gsap,g&&c&&g.width&&l&&g.time===Xt.time&&!g.uncache)return Re(i/g.width*d);if(c&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=d+o,h=e[u],y?e.style[t]=y:no(e,t)}else(c||s==="%")&&!DT[cr(m,"display")]&&(a.position=cr(e,"position")),m===e&&(a.position="static"),m.appendChild(Xo),h=Xo[u],m.removeChild(Xo),a.position="absolute";return l&&c&&(g=Qn(m),g.time=Xt.time,g.width=m[u]),Re(p?h*i/d:h&&i?d/h*i:0)},An=function(e,t,n,o){var i;return Ap||Mp(),t in en&&t!=="transform"&&(t=en[t],~t.indexOf(",")&&(t=t.split(",")[0])),Pn[t]&&t!=="transform"?(i=ca(e,o),i=t!=="transformOrigin"?i[t]:i.svg?i.origin:Ff(cr(e,Zt))+" "+i.zOrigin+"px"):(i=e.style[t],(!i||i==="auto"||o||~(i+"").indexOf("calc("))&&(i=Bf[t]&&Bf[t](e,t,n)||cr(e,t)||pp(e,t)||(t==="opacity"?1:0))),n&&!~(i+"").trim().indexOf(" ")?oo(e,t,i,n)+n:i},LT=function(e,t,n,o){if(!n||n==="none"){var i=Hi(t,e,1),s=i&&cr(e,i,1);s&&s!==n?(t=i,n=s):t==="borderColor"&&(n=cr(e,"borderTopColor"))}var a=new $t(this._pt,e.style,t,0,1,Sp),l=0,f=0,u,d,p,c,h,m,g,x,y,k,S,C;if(a.b=n,a.e=o,n+="",o+="",o.substring(0,6)==="var(--"&&(o=cr(e,o.substring(4,o.indexOf(")")))),o==="auto"&&(m=e.style[t],e.style[t]=o,o=cr(e,t)||o,m?e.style[t]=m:no(e,t)),u=[n,o],mp(u),n=u[0],o=u[1],p=n.match($o)||[],C=o.match($o)||[],C.length){for(;d=$o.exec(o);)g=d[0],y=o.substring(l,d.index),h?h=(h+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(h=1),g!==(m=p[f++]||"")&&(c=parseFloat(m)||0,S=m.substr((c+"").length),g.charAt(1)==="="&&(g=Wo(c,g)+S),x=parseFloat(g),k=g.substr((x+"").length),l=$o.lastIndex-k.length,k||(k=k||Qt.units[t]||S,l===o.length&&(o+=k,a.e+=k)),S!==k&&(c=oo(e,t,m,k)||0),a._pt={_next:a._pt,p:y||f===1?y:",",s:c,c:x-c,m:h&&h<4||t==="zIndex"?Math.round:0});a.c=l<o.length?o.substring(l,o.length):""}else a.r=t==="display"&&o==="none"?nb:rb;return lp.test(o)&&(a.e=0),this._pt=a,a},Zy={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},NT=function(e){var t=e.split(" "),n=t[0],o=t[1]||"50%";return(n==="top"||n==="bottom"||o==="left"||o==="right")&&(e=n,n=o,o=e),t[0]=Zy[n]||n,t[1]=Zy[o]||o,t.join(" ")},RT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,o=n.style,i=t.u,s=n._gsap,a,l,f;if(i==="all"||i===!0)o.cssText="",l=1;else for(i=i.split(","),f=i.length;--f>-1;)a=i[f],Pn[a]&&(l=1,a=a==="transformOrigin"?Zt:Me),no(n,a);l&&(no(n,Me),s&&(s.svg&&n.removeAttribute("transform"),o.scale=o.rotate=o.translate="none",ca(n,1),s.uncache=1,ob(o)))}},Bf={clearProps:function(e,t,n,o,i){if(i.data!=="isFromStart"){var s=e._pt=new $t(e._pt,t,n,0,0,RT);return s.u=o,s.pr=-10,s.tween=i,e._props.push(n),1}}},da=[1,0,0,1,0,0],fb={},ub=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},eb=function(e){var t=cr(e,Me);return ub(t)?da:t.substr(7).match(ap).map(Re)},Dp=function(e,t){var n=e._gsap||Qn(e),o=e.style,i=eb(e),s,a,l,f;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,i=[l.a,l.b,l.c,l.d,l.e,l.f],i.join(",")==="1,0,0,1,0,0"?da:i):(i===da&&!e.offsetParent&&e!==Fi&&!n.svg&&(l=o.display,o.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(f=1,a=e.nextElementSibling,Fi.appendChild(e)),i=eb(e),l?o.display=l:no(e,"display"),f&&(a?s.insertBefore(e,a):s?s.appendChild(e):Fi.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},Ep=function(e,t,n,o,i,s){var a=e._gsap,l=i||Dp(e,!0),f=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,p=a.yOffset||0,c=l[0],h=l[1],m=l[2],g=l[3],x=l[4],y=l[5],k=t.split(" "),S=parseFloat(k[0])||0,C=parseFloat(k[1])||0,w,b,T,M;n?l!==da&&(b=c*g-h*m)&&(T=S*(g/b)+C*(-m/b)+(m*y-g*x)/b,M=S*(-h/b)+C*(c/b)-(c*y-h*x)/b,S=T,C=M):(w=ab(e),S=w.x+(~k[0].indexOf("%")?S/100*w.width:S),C=w.y+(~(k[1]||k[0]).indexOf("%")?C/100*w.height:C)),o||o!==!1&&a.smooth?(x=S-f,y=C-u,a.xOffset=d+(x*c+y*m)-x,a.yOffset=p+(x*h+y*g)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=C,a.smooth=!!o,a.origin=t,a.originIsAbsolute=!!n,e.style[Zt]="0px 0px",s&&(ro(s,a,"xOrigin",f,S),ro(s,a,"yOrigin",u,C),ro(s,a,"xOffset",d,a.xOffset),ro(s,a,"yOffset",p,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+C)},ca=function(e,t){var n=e._gsap||new gp(e);if("x"in n&&!t&&!n.uncache)return n;var o=e.style,i=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),f=cr(e,Zt)||"0",u,d,p,c,h,m,g,x,y,k,S,C,w,b,T,M,E,U,O,B,R,z,j,I,re,de,v,ke,Pt,Er,Ee,rt;return u=d=p=m=g=x=y=k=S=0,c=h=1,n.svg=!!(e.getCTM&&lb(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(o[Me]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Me]!=="none"?l[Me]:"")),o.scale=o.rotate=o.translate="none"),b=Dp(e,n.svg),n.svg&&(n.uncache?(re=e.getBBox(),f=n.xOrigin-re.x+"px "+(n.yOrigin-re.y)+"px",I=""):I=!t&&e.getAttribute("data-svg-origin"),Ep(e,I||f,!!I||n.originIsAbsolute,n.smooth!==!1,b)),C=n.xOrigin||0,w=n.yOrigin||0,b!==da&&(U=b[0],O=b[1],B=b[2],R=b[3],u=z=b[4],d=j=b[5],b.length===6?(c=Math.sqrt(U*U+O*O),h=Math.sqrt(R*R+B*B),m=U||O?Bi(O,U)*Jo:0,y=B||R?Bi(B,R)*Jo+m:0,y&&(h*=Math.abs(Math.cos(y*zi))),n.svg&&(u-=C-(C*U+w*B),d-=w-(C*O+w*R))):(rt=b[6],Er=b[7],v=b[8],ke=b[9],Pt=b[10],Ee=b[11],u=b[12],d=b[13],p=b[14],T=Bi(rt,Pt),g=T*Jo,T&&(M=Math.cos(-T),E=Math.sin(-T),I=z*M+v*E,re=j*M+ke*E,de=rt*M+Pt*E,v=z*-E+v*M,ke=j*-E+ke*M,Pt=rt*-E+Pt*M,Ee=Er*-E+Ee*M,z=I,j=re,rt=de),T=Bi(-B,Pt),x=T*Jo,T&&(M=Math.cos(-T),E=Math.sin(-T),I=U*M-v*E,re=O*M-ke*E,de=B*M-Pt*E,Ee=R*E+Ee*M,U=I,O=re,B=de),T=Bi(O,U),m=T*Jo,T&&(M=Math.cos(T),E=Math.sin(T),I=U*M+O*E,re=z*M+j*E,O=O*M-U*E,j=j*M-z*E,U=I,z=re),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,x=180-x),c=Re(Math.sqrt(U*U+O*O+B*B)),h=Re(Math.sqrt(j*j+rt*rt)),T=Bi(z,j),y=Math.abs(T)>2e-4?T*Jo:0,S=Ee?1/(Ee<0?-Ee:Ee):0),n.svg&&(I=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ub(cr(e,Me)),I&&e.setAttribute("transform",I))),Math.abs(y)>90&&Math.abs(y)<270&&(i?(c*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(h*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=p+s,n.scaleX=Re(c),n.scaleY=Re(h),n.rotation=Re(m)+a,n.rotationX=Re(g)+a,n.rotationY=Re(x)+a,n.skewX=y+a,n.skewY=k+a,n.transformPerspective=S+s,(n.zOrigin=parseFloat(f.split(" ")[2])||!t&&n.zOrigin||0)&&(o[Zt]=Ff(f)),n.xOffset=n.yOffset=0,n.force3D=Qt.force3D,n.renderTransform=n.svg?BT:sb?db:IT,n.uncache=0,n},Ff=function(e){return(e=e.split(" "))[0]+" "+e[1]},wp=function(e,t,n){var o=ct(t);return Re(parseFloat(t)+parseFloat(oo(e,"x",n+"px",o)))+o},IT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,db(e,t)},jo="0deg",ua="0px",Go=") ",db=function(e,t){var n=t||this,o=n.xPercent,i=n.yPercent,s=n.x,a=n.y,l=n.z,f=n.rotation,u=n.rotationY,d=n.rotationX,p=n.skewX,c=n.skewY,h=n.scaleX,m=n.scaleY,g=n.transformPerspective,x=n.force3D,y=n.target,k=n.zOrigin,S="",C=x==="auto"&&e&&e!==1||x===!0;if(k&&(d!==jo||u!==jo)){var w=parseFloat(u)*zi,b=Math.sin(w),T=Math.cos(w),M;w=parseFloat(d)*zi,M=Math.cos(w),s=wp(y,s,b*M*-k),a=wp(y,a,-Math.sin(w)*-k),l=wp(y,l,T*M*-k+k)}g!==ua&&(S+="perspective("+g+Go),(o||i)&&(S+="translate("+o+"%, "+i+"%) "),(C||s!==ua||a!==ua||l!==ua)&&(S+=l!==ua||C?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+Go),f!==jo&&(S+="rotate("+f+Go),u!==jo&&(S+="rotateY("+u+Go),d!==jo&&(S+="rotateX("+d+Go),(p!==jo||c!==jo)&&(S+="skew("+p+", "+c+Go),(h!==1||m!==1)&&(S+="scale("+h+", "+m+Go),y.style[Me]=S||"translate(0, 0)"},BT=function(e,t){var n=t||this,o=n.xPercent,i=n.yPercent,s=n.x,a=n.y,l=n.rotation,f=n.skewX,u=n.skewY,d=n.scaleX,p=n.scaleY,c=n.target,h=n.xOrigin,m=n.yOrigin,g=n.xOffset,x=n.yOffset,y=n.forceCSS,k=parseFloat(s),S=parseFloat(a),C,w,b,T,M;l=parseFloat(l),f=parseFloat(f),u=parseFloat(u),u&&(u=parseFloat(u),f+=u,l+=u),l||f?(l*=zi,f*=zi,C=Math.cos(l)*d,w=Math.sin(l)*d,b=Math.sin(l-f)*-p,T=Math.cos(l-f)*p,f&&(u*=zi,M=Math.tan(f-u),M=Math.sqrt(1+M*M),b*=M,T*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),C*=M,w*=M)),C=Re(C),w=Re(w),b=Re(b),T=Re(T)):(C=d,T=p,w=b=0),(k&&!~(s+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(k=oo(c,"x",s,"px"),S=oo(c,"y",a,"px")),(h||m||g||x)&&(k=Re(k+h-(h*C+m*b)+g),S=Re(S+m-(h*w+m*T)+x)),(o||i)&&(M=c.getBBox(),k=Re(k+o/100*M.width),S=Re(S+i/100*M.height)),M="matrix("+C+","+w+","+b+","+T+","+k+","+S+")",c.setAttribute("transform",M),y&&(c.style[Me]=M)},FT=function(e,t,n,o,i){var s=360,a=Je(i),l=parseFloat(i)*(a&&~i.indexOf("rad")?Jo:1),f=l-o,u=o+f+"deg",d,p;return a&&(d=i.split("_")[1],d==="short"&&(f%=s,f!==f%(s/2)&&(f+=f<0?s:-s)),d==="cw"&&f<0?f=(f+s*Gy)%s-~~(f/s)*s:d==="ccw"&&f>0&&(f=(f-s*Gy)%s-~~(f/s)*s)),e._pt=p=new $t(e._pt,t,n,o,f,kT),p.e=u,p.u="deg",e._props.push(n),p},tb=function(e,t){for(var n in t)e[n]=t[n];return e},zT=function(e,t,n){var o=tb({},n._gsap),i="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,f,u,d,p,c,h;o.svg?(f=n.getAttribute("transform"),n.setAttribute("transform",""),s[Me]=t,a=ca(n,1),no(n,Me),n.setAttribute("transform",f)):(f=getComputedStyle(n)[Me],s[Me]=t,a=ca(n,1),s[Me]=f);for(l in Pn)f=o[l],u=a[l],f!==u&&i.indexOf(l)<0&&(c=ct(f),h=ct(u),d=c!==h?oo(n,l,f,h):parseFloat(f),p=parseFloat(u),e._pt=new $t(e._pt,a,l,d,p-d,_p),e._pt.u=h||0,e._props.push(l));tb(a,o)};qt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",o="Bottom",i="Left",s=(e<3?[t,n,o,i]:[t+i,t+n,o+n,o+i]).map(function(a){return e<2?r+a:"border"+a+r});Bf[e>1?"border"+r:r]=function(a,l,f,u,d){var p,c;if(arguments.length<4)return p=s.map(function(h){return An(a,h,f)}),c=p.join(" "),c.split(p[0]).length===5?p[0]:c;p=(u+"").split(" "),c={},s.forEach(function(h,m){return c[h]=p[m]=p[m]||p[(m-1)/2|0]}),a.init(l,c,d)}});var Lp={name:"css",register:Mp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,o,i){var s=this._props,a=e.style,l=n.vars.startAt,f,u,d,p,c,h,m,g,x,y,k,S,C,w,b,T,M;Ap||Mp(),this.styles=this.styles||ib(e),T=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(u=t[m],!(Jt[m]&&yp(m,t,n,o,e,i)))){if(c=typeof u,h=Bf[m],c==="function"&&(u=u.call(n,o,e,i),c=typeof u),c==="string"&&~u.indexOf("random(")&&(u=Ii(u)),h)h(this,e,m,u,n)&&(b=1);else if(m.substr(0,2)==="--")f=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Mn.lastIndex=0,Mn.test(f)||(g=ct(f),x=ct(u),x?g!==x&&(f=oo(e,m,f,x)+x):g&&(u+=g)),this.add(a,"setProperty",f,u,o,i,0,0,m),s.push(m),T.push(m,0,a[m]);else if(c!=="undefined"){if(l&&m in l?(f=typeof l[m]=="function"?l[m].call(n,o,e,i):l[m],Je(f)&&~f.indexOf("random(")&&(f=Ii(f)),ct(f+"")||f==="auto"||(f+=Qt.units[m]||ct(An(e,m))||""),(f+"").charAt(1)==="="&&(f=An(e,m))):f=An(e,m),p=parseFloat(f),y=c==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),m in en&&(m==="autoAlpha"&&(p===1&&An(e,"visibility")==="hidden"&&d&&(p=0),T.push("visibility",0,a.visibility),ro(this,a,"visibility",p?"inherit":"hidden",d?"inherit":"hidden",!d)),m!=="scale"&&m!=="transform"&&(m=en[m],~m.indexOf(",")&&(m=m.split(",")[0]))),k=m in Pn,k){if(this.styles.save(m),M=u,c==="string"&&u.substring(0,6)==="var(--"){if(u=cr(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=u,u=cr(e,"perspective"),E?e.style.perspective=E:no(e,"perspective")}d=parseFloat(u)}if(S||(C=e._gsap,C.renderTransform&&!t.parseTransform||ca(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,S=this._pt=new $t(this._pt,a,Me,0,1,C.renderTransform,C,0,-1),S.dep=1),m==="scale")this._pt=new $t(this._pt,C,"scaleY",C.scaleY,(y?Wo(C.scaleY,y+d):d)-C.scaleY||0,_p),this._pt.u=0,s.push("scaleY",m),m+="X";else if(m==="transformOrigin"){T.push(Zt,0,a[Zt]),u=NT(u),C.svg?Ep(e,u,0,w,0,this):(x=parseFloat(u.split(" ")[2])||0,x!==C.zOrigin&&ro(this,C,"zOrigin",C.zOrigin,x),ro(this,a,m,Ff(f),Ff(u)));continue}else if(m==="svgOrigin"){Ep(e,u,1,w,0,this);continue}else if(m in fb){FT(this,C,m,p,y?Wo(p,y+u):u);continue}else if(m==="smoothOrigin"){ro(this,C,"smooth",C.smooth,u);continue}else if(m==="force3D"){C[m]=u;continue}else if(m==="transform"){zT(this,u,e);continue}}else m in a||(m=Hi(m)||m);if(k||(d||d===0)&&(p||p===0)&&!bT.test(u)&&m in a)g=(f+"").substr((p+"").length),d||(d=0),x=ct(u)||(m in Qt.units?Qt.units[m]:g),g!==x&&(p=oo(e,m,f,x)),this._pt=new $t(this._pt,k?C:a,m,p,(y?Wo(p,y+d):d)-p,!k&&(x==="px"||m==="zIndex")&&t.autoRound!==!1?vT:_p),this._pt.u=x||0,k&&M!==u?(this._pt.b=f,this._pt.e=M,this._pt.r=CT):g!==x&&x!=="%"&&(this._pt.b=f,this._pt.r=ST);else if(m in a)LT.call(this,e,m,f,y?y+u:u);else if(m in e)this.add(e,m,f||e[m],y?y+u:u,o,i);else if(m!=="parseTransform"){Df(m,u);continue}k||(m in a?T.push(m,0,a[m]):typeof e[m]=="function"?T.push(m,2,e[m]()):T.push(m,1,f||e[m])),s.push(m)}}b&&vp(this)},render:function(e,t){if(t.tween._time||!Pp())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:An,aliases:en,getSetter:function(e,t,n){var o=en[t];return o&&o.indexOf(",")<0&&(t=o),t in Pn&&t!==Zt&&(e._gsap.x||An(e,"x"))?n&&jy===n?t==="scale"?MT:TT:(jy=n||{})&&(t==="scale"?ET:AT):e.style&&!Of(e.style[t])?wT:~t.indexOf("-")?_T:If(e,t)},core:{_removeProperty:no,_getMatrix:Dp}};At.utils.checkPrefix=Hi;At.core.getStyleSaver=ib;(function(r,e,t,n){var o=qt(r+","+e+","+t,function(i){Pn[i]=1});qt(e,function(i){Qt.units[i]="deg",fb[i]=1}),en[o[13]]=r+","+e,qt(n,function(i){var s=i.split(":");en[s[1]]=o[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");qt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qt.units[r]="px"});At.registerPlugin(Lp);var tt=At.registerPlugin(Lp)||At,BD=tt.core.Tween;var cb=!1;function zf(){cb||(tt.registerPlugin(X),cb=!0)}function Rp(){return typeof window<"u"&&!!window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Hf(r){for(let t of Xl)if(r.classList.contains(t))return t;return Array.from(r.classList).find(t=>t in bi)??null}function Np(r){r.setAttribute(Oo,"1"),r.classList.remove("nextora-scroll-animation--pending"),r.classList.add("nextora-scroll-animation--ready")}function VT(r){tt.set(r,{clearProps:"opacity,transform,translate,rotate,scale"}),Np(r)}function UT(r,e){return{delay:e.delay,duration:e.duration,ease:e.ease,scrollTrigger:{trigger:r,start:c0,once:!0},onComplete:()=>{tt.set(r,{clearProps:"opacity,transform,translate,rotate,scale"})}}}function pb(r){if(r.getAttribute(Oo)==="1")return;let e=Hf(r),t=Ns(r),n=t.parallaxSpeed!==null;if(!(!e&&!n)){if(r.setAttribute(Oo,"1"),Rp()){VT(r);return}if(zf(),e){let o=bi[e];if(!o)Np(r);else{let{from:i,to:s}=o({distance:t.distance}),a=UT(r,t);if(t.stagger!==null&&r.children.length>0){let l=Array.from(r.children);r.classList.remove("nextora-scroll-animation--pending"),l.forEach(f=>f.classList.add("nextora-scroll-animation--pending")),tt.set(l,i),tt.to(l,{...s,...a,stagger:t.stagger,onComplete:()=>{l.forEach(f=>{f.classList.remove("nextora-scroll-animation--pending"),f.classList.add("nextora-scroll-animation--ready"),tt.set(f,{clearProps:"opacity,transform,translate,rotate,scale"})})}})}else tt.fromTo(r,i,{...s,...a})}}if(n&&t.parallaxSpeed!==null){let o=t.parallaxSpeed;tt.to(r,{y:()=>o*100,ease:"none",scrollTrigger:{trigger:r,start:"top bottom",end:"bottom top",scrub:!0}})}Np(r)}}var Ip=null,hb=0,mb=!1;function $T(r=document){let e=`${m0()}, ${h0}`,t=r.querySelectorAll(e);return Array.from(t).filter(n=>n.getAttribute(Oo)==="1"?!1:Hf(n)!==null||Ns(n).parallaxSpeed!==null)}function WT(r){Rp()||Hf(r)===null||r.classList.add("nextora-scroll-animation--pending")}function pa(r=document){let e=$T(r);return e.length?(zf(),e.forEach(t=>{WT(t),pb(t)}),X.refresh(),e.length):0}function gb(){window.clearTimeout(hb),hb=window.setTimeout(()=>{pa()>0&&X.refresh()},150)}function KT(){Ip||typeof MutationObserver>"u"||(Ip=new MutationObserver(r=>{for(let e of r){if(e.type==="childList"&&e.addedNodes.length>0){gb();return}if(e.type==="attributes"&&e.attributeName==="class"){gb();return}}}),Ip.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}))}function jT(){zf(),X.config({autoRefreshEvents:"visibilitychange,DOMContentLoaded,load,resize"})}function GT(){pa(),X.refresh()}function Bp(){let r=()=>{if(mb){pa();return}mb=!0,jT(),pa(),KT(),window.addEventListener("load",GT,{once:!0})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}function Fp(){window.nextoraRegisterScrollAnimation=xc}var JT=".nextora-header-block--sticky-always, .nextora-header-block--sticky-scroll-up",XT=".nextora-header-block--sticky-scroll-up",YT="header.wp-block-template-part",ha="nextora-header-block--is-pinned",Sb="nextora-header-block--scroll-hidden",QT="nextora-header-block__sticky-spacer",ZT="--nextora-header-sticky-top",eM="--nextora-header-sticky-left",tM="--nextora-header-sticky-width",Cb="--nextora-header-sticky-translate-y";function rM(r){return r.closest(YT)??r.closest("header")??r.parentElement??r}function xb(){let r=document.getElementById("wpadminbar");if(!r||!document.body.classList.contains("admin-bar"))return 0;let e=r.getBoundingClientRect();return e.height<=0||e.bottom<=0?0:Math.round(e.bottom)}function nM(r,e){let t=r.getBoundingClientRect().top;return Math.max(0,Math.round(window.scrollY+t-e))}function yb(r,e){r.el.classList.contains(ha)||(r.pinScrollY=nM(r.el,e))}function bb(r,e,t){let{el:n,shell:o}=r;if(n.style.setProperty(ZT,`${e}px`),!t)return;let i=o.getBoundingClientRect();n.style.setProperty(eM,`${Math.round(i.left)}px`),n.style.setProperty(tM,`${Math.round(i.width)}px`)}function kb(r,e){let{el:t}=r;if(t.classList.contains(ha)===e){e&&r.spacer&&(r.spacer.style.height=`${t.offsetHeight}px`);return}if(t.classList.toggle(ha,e),e){let o=r.spacer;o||(o=document.createElement("div"),o.className=QT,o.setAttribute("aria-hidden","true"),t.insertAdjacentElement("beforebegin",o),r.spacer=o),o.style.height=`${t.offsetHeight}px`;return}t.classList.remove(Sb),t.style.setProperty(Cb,"0px"),r.spacer&&(r.spacer.remove(),r.spacer=null)}function Vi(r,e){let{el:t}=r;t.classList.toggle(Sb,e),t.style.setProperty(Cb,e?`${-t.offsetHeight}px`:"0px")}function oM(){return Array.from(document.querySelectorAll(JT)).map(r=>({el:r,shell:rM(r),spacer:null,pinScrollY:0}))}function vb(){let r=oM();if(!r.length)return;let e=r.filter(u=>u.el.matches(XT)),t=window.nextoraHeaderSticky?.hideAfter,n=typeof t=="number"&&Number.isFinite(t)&&t>=0?t:72,o=new Map,i=window.scrollY,s=!1,a=()=>{let u=xb();for(let d of r){yb(d,u);let p=window.scrollY>=d.pinScrollY-1;bb(d,u,!p),kb(d,p),o.get(d)&&Vi(d,!0)}},l=()=>{s=!1;let u=window.scrollY,d=u-i;i=u;let p=xb();for(let c of r){yb(c,p);let h=u>=c.pinScrollY-1,m=c.el.classList.contains(ha);bb(c,p,!h||!m),kb(c,h),h||o.set(c,!1)}for(let c of e){if(!c.el.classList.contains(ha)){Vi(c,!1);continue}let h=c.pinScrollY+n;if(u<h){o.set(c,!1),Vi(c,!1);continue}d>6?(o.set(c,!0),Vi(c,!0)):d<-6&&(o.set(c,!1),Vi(c,!1))}},f=()=>{s||(s=!0,requestAnimationFrame(l))};for(let u of e)Vi(u,!1);if(a(),l(),window.addEventListener("scroll",f,{passive:!0}),window.addEventListener("resize",()=>{i=window.scrollY,a()},{passive:!0}),typeof ResizeObserver<"u"){let u=new ResizeObserver(()=>a());for(let p of r)u.observe(p.el),u.observe(p.shell);let d=document.getElementById("wpadminbar");d&&u.observe(d)}}var iM="(min-width: 768px)",ma=.4,oL=Math.round(ma*1e3)+80,sM=80,aM=500;function zp(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Tb(){return(document.documentElement.getAttribute("dir")||document.body.getAttribute("dir")||"").toLowerCase()==="rtl"?-100:100}function Ui(r){tt.killTweensOf([r.backdrop,r.panel])}function lM(r){Ui(r);let e=Tb();r.root.classList.add("nextora-primary-nav-portal--gsap"),r.root.classList.add("nextora-primary-nav-portal--open"),tt.set(r.backdrop,{opacity:0}),tt.set(r.panel,{xPercent:e,force3D:!0}),tt.timeline({defaults:{ease:"power2.out"}}).to(r.backdrop,{opacity:1,duration:ma},0).to(r.panel,{xPercent:0,duration:ma},0)}function fM(r,e){Ui(r);let t=Tb();tt.to(r.backdrop,{opacity:0,duration:ma,ease:"power2.in"}),tt.to(r.panel,{xPercent:t,duration:ma,ease:"power2.in",onComplete:()=>{r.root.classList.remove("nextora-primary-nav-portal--open"),r.root.classList.remove("nextora-primary-nav-portal--gsap"),tt.set([r.backdrop,r.panel],{clearProps:"opacity,transform"}),e()}})}var wb="-nextora-portal";function uM(r){let e=r.dataset.nextoraNavOpenLabel?.trim()||"Open menu",t=r.dataset.nextoraNavCloseLabel?.trim()||"Close menu";return{open:e,close:t}}function dM(r){r.querySelectorAll("[id]").forEach(e=>{let t=e.id?.trim();t&&!t.endsWith(wb)&&(e.id=`${t}${wb}`)})}function cM(r,e){let t=r.querySelector("[data-nextora-nav-portal-close]");if(t)return t.setAttribute("aria-label",e),t;t=document.createElement("button"),t.type="button",t.className="nextora-primary-nav-portal__close",t.setAttribute("data-nextora-nav-portal-close",""),t.setAttribute("aria-label",e);let n=document.createElement("span");n.className="nextora-primary-nav-portal__close-icon",n.setAttribute("aria-hidden","true"),n.innerHTML='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',t.append(n);let o=r.querySelector("[data-nextora-nav-portal-mount]");return o?r.insertBefore(t,o):r.append(t),t}function pM(r){let e=r.dataset.nextoraNavPortalRoot?.trim(),t=r.dataset.nextoraNavPortalPanel?.trim(),n=r.dataset.nextoraNavPortalTitle?.trim(),o=r.dataset.nextoraNavPortalDialogLabel?.trim()||"Menu",i=r.dataset.nextoraNavCloseLabel?.trim()||"Close menu";if(!e||!t||!n)return null;let s=document.getElementById(e);if(s&&!s.matches("[data-nextora-nav-portal-root]"))return null;if(!s){s=document.createElement("div"),s.id=e,s.className="nextora-primary-nav-portal",s.setAttribute("data-nextora-nav-portal-root",""),s.hidden=!0;let d=document.createElement("div");d.className="nextora-primary-nav-portal__backdrop",d.setAttribute("data-nextora-nav-backdrop",""),d.tabIndex=-1;let p=document.createElement("div");p.id=t,p.className="nextora-primary-nav-portal__panel",p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby",n);let c=document.createElement("h2");c.id=n,c.className="sr-only",c.textContent=o;let h=document.createElement("div");h.className="nextora-primary-nav-portal__mount",h.setAttribute("data-nextora-nav-portal-mount",""),p.append(c,h),s.append(d,p),document.body.appendChild(s)}let a=s.querySelector("[data-nextora-nav-backdrop]"),l=document.getElementById(t),f=s.querySelector("[data-nextora-nav-portal-mount]");if(!a||!l||!f)return null;let u=cM(l,i);return{root:s,backdrop:a,panel:l,mount:f,closeBtn:u}}function hM(r,e){let t=r.querySelector("nav")??(r.firstElementChild instanceof HTMLElement?r.firstElementChild:null);if(!t){e.replaceChildren();return}let n=t.cloneNode(!0);dM(n),e.replaceChildren(n)}function mM(r){r.querySelector("a[href]")?.focus()}function gM(r,e,t,n,o){if(r.dataset.nextoraNavPortalDismissBound==="1")return;let i=r.dataset.nextoraNavBackdropBound==="1";r.dataset.nextoraNavPortalDismissBound="1";let s=a=>{if(o()){a.preventDefault(),a.stopPropagation();return}n()};i||e.addEventListener("click",s),t?.addEventListener("click",a=>{a.preventDefault(),a.stopPropagation(),n()})}function Mb(){let r=window.matchMedia(iM);document.querySelectorAll("[data-nextora-nav-toggle]").forEach(e=>{let t=e.dataset.nextoraNavCloneSource?.trim();if(!t)return;let n=document.querySelector(t);if(!n?.hasAttribute("data-nextora-nav-source-panel"))return;let o=uM(e),i=null,s=null,a=0,l=()=>pM(e),f=()=>{s!==null&&(window.clearTimeout(s),s=null)},u=m=>{e.setAttribute("aria-label",m?o.close:o.open)},d=()=>{i&&(document.removeEventListener("keydown",i),i=null)},p=()=>{let m=l();if(d(),!m){f(),e.setAttribute("aria-expanded","false"),u(!1),document.documentElement.classList.remove("nextora-primary-nav-drawer-open"),e.focus();return}if(r.matches){f(),Ui(m),m.root.classList.remove("nextora-primary-nav-portal--open"),m.root.classList.remove("nextora-primary-nav-portal--gsap"),m.root.hidden=!0,m.mount.replaceChildren(),e.setAttribute("aria-expanded","false"),u(!1),document.documentElement.classList.remove("nextora-primary-nav-drawer-open"),e.focus();return}if(e.setAttribute("aria-expanded","false"),u(!1),document.documentElement.classList.remove("nextora-primary-nav-drawer-open"),Ui(m),zp()){f(),m.root.classList.remove("nextora-primary-nav-portal--open"),m.root.classList.remove("nextora-primary-nav-portal--gsap"),m.root.hidden=!0,m.mount.replaceChildren(),e.focus();return}f(),fM(m,()=>{m.root.hidden=!0,m.mount.replaceChildren(),e.focus()})},c=()=>{if(r.matches)return;let m=l();m&&(f(),a=Date.now(),gM(m.root,m.backdrop,m.closeBtn,p,()=>Date.now()-a<aM),hM(n,m.mount),m.root.hidden=!1,m.root.classList.remove("nextora-primary-nav-portal--open"),m.root.classList.remove("nextora-primary-nav-portal--gsap"),m.root.getBoundingClientRect(),requestAnimationFrame(()=>{Ui(m),zp()?m.root.classList.add("nextora-primary-nav-portal--open"):lM(m),e.setAttribute("aria-expanded","true"),u(!0),document.documentElement.classList.add("nextora-primary-nav-drawer-open"),window.setTimeout(()=>mM(m.panel),zp()?0:sM)}),i=g=>{g.key==="Escape"&&p()},document.addEventListener("keydown",i))};e.addEventListener("click",()=>{e.getAttribute("aria-expanded")==="true"?p():c()});let h=()=>{f();let m=l();m&&(Ui(m),m.root.classList.remove("nextora-primary-nav-portal--open"),m.root.classList.remove("nextora-primary-nav-portal--gsap"),m.root.hidden=!0,m.mount.replaceChildren()),d(),e.setAttribute("aria-expanded","false"),u(!1),document.documentElement.classList.remove("nextora-primary-nav-drawer-open")};r.addEventListener("change",h),h()}),xM()}var _b=!1;function xM(){_b||(_b=!0,document.addEventListener("click",r=>{let e=r.target,t=e instanceof Element?e.closest(".nextora-submenu-toggle"):null;if(!t||!(t instanceof HTMLButtonElement)||!t.closest("[data-nextora-nav-portal-mount]"))return;r.preventDefault(),r.stopPropagation();let n=t.closest("li.menu-item-has-children");if(!n)return;let i=!(t.getAttribute("aria-expanded")==="true"),s=n.parentElement;s instanceof HTMLUListElement&&s.querySelectorAll(":scope > li.menu-item-has-children.nextora-submenu--open").forEach(a=>{if(a!==n){a.classList.remove("nextora-submenu--open");let l=a.querySelector(":scope > button.nextora-submenu-toggle");l instanceof HTMLButtonElement&&l.setAttribute("aria-expanded","false")}}),t.setAttribute("aria-expanded",i?"true":"false"),n.classList.toggle("nextora-submenu--open",i)}))}var yM='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',qi="nextora-modal--open",Eb="data-nextora-modal-open",Uf="data-nextora-modal",Ab="data-nextora-modal-surface",Hp="data-nextora-modal-dismiss",tn=[],Vf=!1;function bM(){return window.nextoraModal?.closeLabel?.trim()||"Close dialog"}function Pb(r){return Array.from(r.querySelectorAll(yM)).filter(e=>e.offsetParent!==null||e===document.activeElement)}function Ob(r){let e=document.documentElement;if(r){if(!Vf){let t=window.scrollY;e.dataset.nextoraModalScrollY=String(t),e.style.setProperty("--nextora-modal-scroll-y",`-${t}px`),e.classList.add("nextora-modal-scroll-lock"),Vf=!0}}else if(Vf&&tn.length===0){let t=Number(e.dataset.nextoraModalScrollY||0);e.classList.remove("nextora-modal-scroll-lock"),e.style.removeProperty("--nextora-modal-scroll-y"),delete e.dataset.nextoraModalScrollY,window.scrollTo(0,t),Vf=!1}}function kM(r){return r instanceof HTMLElement&&r.hasAttribute(Uf)}function SM(r){let e=r;for(;e;){if(kM(e))return e;e=e.parentElement}return null}function Db(){tn.forEach((r,e)=>{r.root.style.zIndex=String(99999+e)})}function CM(r,e){if(r.key!=="Tab")return;let t=Pb(e);if(t.length===0)return;let n=t[0],o=t[t.length-1],i=document.activeElement;r.shiftKey?(i===n||!e.contains(i))&&(r.preventDefault(),o.focus()):i===o&&(r.preventDefault(),n.focus())}function Lb(r){if(!r.hasAttribute(Uf)||r.classList.contains(qi))return;let e=r.querySelector(`[${Ab}]`)??r.querySelector(".nextora-modal__surface");if(!e||e.getAttribute("role")!=="dialog")return;let t=document.activeElement;r.removeAttribute("hidden"),r.removeAttribute("aria-hidden");let n=o=>{if(o.key==="Escape"&&tn[tn.length-1]?.root===r){o.preventDefault(),qf(r);return}CM(o,e)};tn.push({root:r,previousFocus:t,onKeyDown:n}),document.addEventListener("keydown",n,!0),Ob(!0),Db(),requestAnimationFrame(()=>{r.classList.add(qi),(Pb(e)[0]??e).focus(),r.dispatchEvent(new CustomEvent("nextora:modalopen",{bubbles:!0,detail:{root:r}}))})}function qf(r,e){let t=tn[tn.length-1],n=r??t?.root;if(!n||!n.classList.contains(qi)||r!==void 0&&t&&r!==t.root)return;let o=tn.findIndex(f=>f.root===n);if(o===-1)return;let i=tn[o],s=!1,a=()=>{s||(s=!0,n.dispatchEvent(new CustomEvent("nextora:modalclose",{bubbles:!0,detail:{root:n}})),n.removeEventListener("transitionend",l),document.removeEventListener("keydown",i.onKeyDown,!0),tn.splice(o,1),Db(),n.classList.remove(qi),n.setAttribute("hidden",""),n.setAttribute("aria-hidden","true"),Ob(!1),i.previousFocus instanceof HTMLElement&&document.contains(i.previousFocus)&&i.previousFocus.focus(),e?.())},l=f=>{f.target===n&&f.propertyName==="opacity"&&a()};n.addEventListener("transitionend",l),window.setTimeout(a,480),n.classList.remove(qi)}function $f(r){let e=r.replace(/^#/,""),t=document.getElementById(e);return t instanceof HTMLElement&&t.hasAttribute(Uf)?(Lb(t),!0):!1}function vM(r){let e=r.closeOnBackdrop!==!1,n=`${`nextora-modal-${Math.random().toString(36).slice(2,11)}`}-title`,o=document.createElement("div");o.className=`nextora-modal${r.wrapClass?` ${r.wrapClass}`:""}`,o.setAttribute(Uf,""),o.setAttribute("aria-hidden","true"),o.setAttribute("hidden","");let i=document.createElement("div");i.className="nextora-modal__scrim",i.tabIndex=-1,e&&i.setAttribute(Hp,"");let s=document.createElement("div");s.className="nextora-modal__surface nextora-modal__surface--sm",s.setAttribute(Ab,""),s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-labelledby",n),s.tabIndex=-1;let a=document.createElement("header");a.className="nextora-modal__header";let l=document.createElement("h2");l.className="nextora-modal__title",l.id=n,l.textContent=r.title;let f=document.createElement("button");f.type="button",f.className="nextora-modal__close",f.setAttribute(Hp,""),f.setAttribute("aria-label",bM()),f.innerHTML='<span class="nextora-modal__close-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg></span>',a.append(l,f);let u=document.createElement("div");if(u.className="nextora-modal__body",typeof r.body=="string"?u.innerHTML=r.body:u.append(r.body),s.append(a,u),r.footer!==void 0){let d=document.createElement("footer");d.className="nextora-modal__footer",typeof r.footer=="string"?d.innerHTML=r.footer:d.append(r.footer),s.append(d)}return o.append(i,s),document.body.append(o),Lb(o),{close:()=>{qf(o,()=>{o.remove()})}}}function wM(r){let e=r.target;if(!(e instanceof Element))return;let t=e.closest(`[${Eb}]`);if(t instanceof HTMLElement){let o=t.getAttribute(Eb);o&&(r.preventDefault(),$f(o));return}let n=e.closest(`[${Hp}]`);if(n instanceof HTMLElement){let o=SM(n);o&&o.classList.contains(qi)&&(r.preventDefault(),qf(o))}}function Nb(){document.addEventListener("click",wM)}function Rb(){window.nextoraOpenModal=$f,window.nextoraOpenModalDialog=vM,window.nextoraCloseModal=qf}function Bb(){document.querySelectorAll("[data-nextora-header-mini-cart-portal]").forEach(r=>{r.parentElement!==document.body&&document.body.appendChild(r)})}function _M(){return document.querySelector("[data-nextora-header-mini-cart-portal][id]")?.id?.trim()||null}function Ib(r=0){let e=_M();e&&window.setTimeout(()=>{$f(e)},r)}function TM(){let r=window.jQuery;if(typeof r=="function")try{r(document.body).trigger?.("wc_fragment_refresh")}catch{}}function Fb(){document.body.addEventListener("wc-blocks_added_to_cart",()=>{TM(),Ib(120)},!1);let r=!1,e=()=>{if(r)return;let t=window.jQuery;typeof t=="function"&&(t(n=>{n(document.body).on("added_to_cart",()=>{Ib(0)})}),r=!0)};if(e(),!r){let t=0,n=80,o=window.setInterval(()=>{e(),(r||++t>=n)&&window.clearInterval(o)},50)}}function MM(){let r=window.nextoraSpotlight;return r?.restUrl?r:null}function EM(r){if(typeof r=="string")return r;if(r&&typeof r=="object"){let e=r.rendered??r.raw;if(typeof e=="string"){let t=document.createElement("div");return t.innerHTML=e,(t.textContent||"").trim()}}return""}function AM(r,e){return r==="post"?e.typePost:r==="page"?e.typePage:e.typeOther}function PM(r){try{let e=new URL(r,window.location.origin),t=decodeURIComponent(e.pathname||"/");return t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1)),t=t.replace(/^\/+/,""),t===""?"/":t}catch{return""}}function OM(r,e){if(r.length<=e)return r;let t=e-1,n=Math.ceil(t/2),o=Math.floor(t/2);return`${r.slice(0,n)}\u2026${r.slice(-o)}`}function DM(r){let e='xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';return r==="page"?`<svg ${e}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18M9 21V9"/></svg>`:r==="post"?`<svg ${e}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h6"/></svg>`:`<svg ${e}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`}function LM(r,e){let t;return(...n)=>{t&&clearTimeout(t),t=setTimeout(()=>{t=void 0,r(...n)},e)}}function zb(){let r=MM();if(!r)return;document.querySelectorAll("[data-nextora-spotlight]").forEach(t=>NM(t,r))}function NM(r,e){if(!(r instanceof HTMLFormElement))return;let t=r.querySelector('input[name="s"]'),n=r.querySelector("[data-spotlight-results]"),o=r.querySelector("[data-spotlight-status]"),i=r.querySelector("[data-spotlight-hint]"),s=r.querySelector("[data-spotlight-empty]");if(!t||!n)return;let a=null,l=[],f=-1,u=k=>{r.classList.toggle("nextora-spotlight--loading",k)},d=(k,S=!1)=>{if(o){if(S||k===""){o.textContent="",o.setAttribute("hidden","");return}o.textContent=k,o.removeAttribute("hidden")}},p=()=>{n.innerHTML="",n.setAttribute("hidden",""),t.setAttribute("aria-expanded","false"),t.removeAttribute("aria-activedescendant"),l=[],f=-1,s?.setAttribute("hidden",""),s&&(s.textContent="")},c=k=>{if(p(),k.length===0){s&&(s.textContent=e.noResults,s.removeAttribute("hidden")),d("",!0);return}n.removeAttribute("hidden"),t.setAttribute("aria-expanded","true");let S=document.createElement("ul");S.className="nextora-spotlight__list",S.setAttribute("role","presentation"),k.forEach((C,w)=>{let b=EM(C.title),T=C.url,M=C.subtype||C.type||"",E=PM(T),U=OM(E,52),O=document.createElement("li");O.className="nextora-spotlight__item",O.style.setProperty("--nextora-spotlight-i",String(w));let B=document.createElement("a");B.className="nextora-spotlight__link",B.href=T,B.setAttribute("role","option"),B.setAttribute("aria-selected","false"),B.id=`${t.id}-opt-${w}`;let R=document.createElement("span");R.className="nextora-spotlight__thumb",R.innerHTML=DM(M);let z=document.createElement("span");z.className="nextora-spotlight__stack";let j=document.createElement("span");j.className="nextora-spotlight__title",j.textContent=b;let I=document.createElement("span");I.className="nextora-spotlight__meta";let re=document.createElement("span");if(re.className="nextora-spotlight__type",re.textContent=AM(M,e),U!==""){let de=document.createElement("span");de.className="nextora-spotlight__sep",de.textContent="\xB7";let v=document.createElement("span");v.className="nextora-spotlight__path",v.textContent=U,I.append(re,de,v)}else I.append(re);z.append(j,I),B.append(R,z),O.append(B),S.append(O),l.push({el:B,url:T}),B.addEventListener("mouseenter",()=>{h(w)})}),n.append(S),d("",!0)},h=k=>{if(l.length===0)return;let S=Math.max(0,Math.min(k,l.length-1));f=S,l.forEach(({el:C},w)=>{let b=w===S;C.setAttribute("aria-selected",b?"true":"false"),C.classList.toggle("nextora-spotlight__link--active",b)}),S>=0&&l[S]?t.setAttribute("aria-activedescendant",l[S].el.id):t.removeAttribute("aria-activedescendant")},m=async k=>{let S=k.trim();if(S.length<e.minQueryLength){p(),d("",!0),u(!1),i?.removeAttribute("hidden");return}i?.setAttribute("hidden",""),a&&a.abort(),a=new AbortController;let{signal:C}=a;u(!0),d(e.loading,!1);let w=new URLSearchParams({search:S,per_page:String(e.perPage)});try{let b=await fetch(`${e.restUrl}?${w.toString()}`,{signal:C,credentials:"same-origin",headers:{Accept:"application/json"}});if(!b.ok)throw new Error(String(b.status));let T=await b.json();if(C.aborted)return;c(Array.isArray(T)?T:[])}catch(b){if(b.name==="AbortError")return;p(),s&&(s.textContent=e.error,s.removeAttribute("hidden")),d("",!0)}finally{C.aborted||u(!1)}},g=LM(k=>{m(k)},Math.max(80,e.debounceMs));t.addEventListener("input",()=>{g(t.value)}),t.addEventListener("keydown",k=>{if(!n.hasAttribute("hidden")&&l.length>0){if(k.key==="ArrowDown"){k.preventDefault(),h(f<0?0:f+1);return}if(k.key==="ArrowUp"){k.preventDefault(),h(f<=0?l.length-1:f-1);return}if(k.key==="Enter"&&f>=0){k.preventDefault(),window.location.href=l[f].url;return}}}),r.addEventListener("submit",k=>{f>=0&&l[f]&&(k.preventDefault(),window.location.href=l[f].url)});let x=()=>{a&&(a.abort(),a=null),t.value="",p(),d("",!0),u(!1),i?.removeAttribute("hidden")},y=r.closest("[data-nextora-modal]");if(y&&(y.addEventListener("nextora:modalopen",()=>{requestAnimationFrame(()=>{t.focus(),t.select()})},{passive:!0}),y.addEventListener("nextora:modalclose",x,{passive:!0})),i&&e.keyboardHint&&!i.querySelector(".nextora-spotlight__kbd-hint")){let k=document.createElement("span");k.className="nextora-spotlight__kbd-hint",k.textContent=e.keyboardHint;let S=i.querySelector(".nextora-spotlight__hint-inner");S?S.appendChild(k):i.appendChild(k)}}function Hb(){document.querySelectorAll("[data-nextora-spotlight-search-portal]").forEach(r=>{r.parentElement!==document.body&&document.body.appendChild(r)})}var RM=document.documentElement;RM.classList.add("nextora-js");vb();Mb();Bb();Hb();Nb();Fb();Rb();zb();$p();d0();Fp();Bp();})();
>>>>>>> ee2317f4a6bd2dde03a793deb8d0717e43a76355
/*! Bundled license information:

lucide/dist/esm/defaultAttributes.js:
lucide/dist/esm/createElement.js:
lucide/dist/esm/icons/bold.js:
lucide/dist/esm/icons/code.js:
lucide/dist/esm/icons/italic.js:
lucide/dist/esm/icons/link.js:
lucide/dist/esm/icons/quote.js:
lucide/dist/esm/icons/strikethrough.js:
lucide/dist/esm/lucide.js:
  (**
   * @license lucide v1.8.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
