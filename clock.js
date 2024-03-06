(() => {
  let i = 0;
  let ps = true;
  const n = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];

  const h = document.querySelectorAll('.hours');
  const m = document.querySelectorAll('.minutes');
  const s = document.querySelectorAll('.seconds');
  const p = document.querySelectorAll('.points');

  const cn = (u, i = 0, at) => {
    const idx = +u
      .toString()
      .padStart(2, '0')
      .split('')[i];

    return !at
      ? n[idx]
      : n[idx - 1] || n.at(at);
  }

  const start = () => {
    if (i === n.length) i = 0;

    const now = new Date();
    const hs = now.getHours();
    const ms = now.getMinutes();
    const ss = now.getSeconds();

    h[0].classList.remove(cn(hs, 0, 2));
    h[1].classList.remove(cn(hs, 1, 3));
    h[1].classList.remove(cn(hs, 1, -1));
    m[0].classList.remove(cn(ms, 0, 5));
    m[1].classList.remove(cn(ms, 1, -1));
    s[0].classList.remove(cn(ss, 0, 5));
    s[1].classList.remove(cn(ss, 1, -1));

    h[0].classList.add(cn(hs, 0));
    h[1].classList.add(cn(hs, 1));
    m[0].classList.add(cn(ms, 0));
    m[1].classList.add(cn(ms, 1));
    s[0].classList.add(cn(ss, 0));
    s[1].classList.add(cn(ss, 1));

    ps = !ps;
    p[0].style.visibility = ps ? 'visible' : 'hidden';
    p[1].style.visibility = ps ? 'visible' : 'hidden';

    i++;
  }

  setInterval(start, 1000);
})();
