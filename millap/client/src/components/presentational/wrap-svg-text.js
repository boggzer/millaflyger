// Generated by LiveScript 1.3.1
var ns, flush, main;
ns = 'http://www.w3.org/2000/svg';
flush = function (o) {
  var text;
  if (isNaN(o.x + o.y) || !o.text) {
    return;
  }
  text = document.createElementNS(ns, 'text');
  text.appendChild(document.createTextNode(o.text));
  text.setAttribute('x', o.x - 1);
  text.setAttribute('y', o.y + 2);
  text.setAttribute('dominant-baseline', 'hanging');
  return text;
};
main = function (opt) {
  var text,
    style,
    div,
    ref$,
    range,
    obj,
    texts,
    i$,
    to$,
    j,
    t,
    tt,
    j$,
    to1$,
    i,
    box,
    that,
    g,
    spans;
  opt == null && (opt = {});
  (text = opt.text), (style = opt.style);
  div = document.createElement('div');
  import$(
    ((ref$ = div.style),
    (ref$.opacity = 0),
    (ref$['pointer-events'] = 'none'),
    (ref$['z-index'] = 0),
    (ref$['position'] = 'absolute'),
    (ref$.top = 0),
    (ref$.left = 0),
    ref$),
    style,
  );
  document.body.appendChild(div);
  if (opt.useRange) {
    div.innerText = text;
    range = document.createRange();
    obj = {
      text: '',
      x: NaN,
      y: NaN,
    };
    texts = [];
    for (i$ = 0, to$ = div.childNodes.length; i$ < to$; ++i$) {
      j = i$;
      t = div.childNodes[j];
      tt = t.textContent;
      for (j$ = 0, to1$ = t.length; j$ < to1$; ++j$) {
        i = j$;
        range.setStart(t, i);
        range.setEnd(t, i + 1);
        box = range.getBoundingClientRect();
        if (obj.y === box.y) {
          obj.text += tt[i];
        } else {
          if ((that = flush(obj))) {
            texts.push(that);
          }
          obj.text = tt[i];
          obj.x = box.x;
          obj.y = box.y;
        }
      }
    }
    if ((that = flush(obj))) {
      texts.push(that);
    }
    g = document.createElementNS(ns, 'g');
  } else {
    spans = text.split('').map(function (t) {
      var span;
      div.appendChild((span = document.createElement('span')));
      span.appendChild(document.createTextNode(t));
      return span;
    });
    obj = {
      text: '',
      x: NaN,
      y: NaN,
    };
    texts = [];
    spans.map(function (it) {
      var box, that;
      box = it.getBoundingClientRect();
      if (obj.y === box.y) {
        return (obj.text += it.textContent);
      } else {
        if ((that = flush(obj))) {
          texts.push(that);
        }
        obj.text = it.textContent;
        return (obj.x = box.x), (obj.y = box.y), obj;
      }
    });
    if ((that = flush(obj))) {
      texts.push(that);
    }
    g = document.createElementNS(ns, 'g');
  }
  texts.map(function (it) {
    return g.appendChild(it);
  });
  document.body.removeChild(div);
  return g;
};
if (typeof module != 'undefined' && module !== null) {
  module.exports = main;
} else if (typeof window != 'undefined' && window !== null) {
  window.wrapSvgText = main;
}
function import$(obj, src) {
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
