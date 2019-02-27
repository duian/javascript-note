function createListItem() {
  const $list = document.getElementById('list');
  $list.addEventListener(
    'click',
    function(event) {
      if (event.target.tagName.toLowerCase() === 'li') {
        console.log('li order: ', event.target.dataset.id);
      }
    },
    false,
  );
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 10; i++) {
    const $li = document.createElement('li');
    const $p = document.createElement('p');
    const $div = document.createElement('div');
    const $pt = document.createTextNode('这就是一段文字');
    const $text = document.createTextNode(`It's ${i} list-item`);
    $div.appendChild($text);
    $p.appendChild($pt);
    $li.appendChild($p);
    $li.appendChild($div);
    $li.setAttribute('data-id', i);
    frag.appendChild($li);
  }
  $list.appendChild(frag);
}

function getDocPos() {
  document.addEventListener('mousemove', function(e) {
    const $pos = document.getElementById('position');
    e.stopImmediatePropagation();
    $pos.innerHTML = `
       <p>screen X is: ${e.screenX}</p>
       <p>screen Y is: ${e.screenY}</p>
       <p>page X is: ${e.pageX}</p>
       <p>page Y is: ${e.pageY}</p>
       <p>client X is: ${e.clientX}</p>
       <p>client Y is: ${e.clientY}</p>
       <p> x is: ${e.x}</p>
       <p> y is: ${e.y}</p>
     `;
  });
}

(function() {
  window.onload = function() {
    const $pos = document.getElementById('position');
    let x;
    let y;
    function targetMouseMove(e) {
      e.stopPropagation();
      $pos.style.left = `${2 * e.pageX - x}px`;
      $pos.style.top = `${2 * e.pageY - y}px`;
    }

    document.getElementById('main').addEventListener('mousedown', function(e) {
      e.stopPropagation();
      const el = e.target;
      $pos.innerHTML = `
        <p>client X is: ${e.clientX}</p>
        <p>client Y is: ${e.clientY}</p>
        <p>screen X is: ${e.screenX}</p>
        <p>screen Y is: ${e.screenY}</p>
        <p>page X is: ${e.pageX}</p>
        <p>page Y is: ${e.pageY}</p>
        <p> x is: ${e.x}</p>
        <p> y is: ${e.y}</p>
        <p>clientHeight is: ${el.clientHeight}</p>
        <p>clientWidth is: ${el.clientWidth}</p>
        <p>clientTop is: ${el.clientTop}</p>
        <p>clientLeft is: ${el.clientLeft}</p>
        <p>offsetHeight is: ${el.offsetHeight}</p>
        <p>offsetWidth is: ${el.offsetWidth}</p>
        <p>offsetTop is: ${el.offsetTop}</p>
        <p>offsetLeft is: ${el.offsetLeft}</p>
     `;
      const rect = $pos.getBoundingClientRect();
      const elStyle = window.getComputedStyle($pos);
      const marginLeft = parseInt(elStyle.marginLeft.slice(0, -2), 10);
      const marginTop = parseInt(elStyle.marginTop.slice(0, -2), 10);
      $pos.style.left = `${e.pageX - marginTop}px`;
      $pos.style.top = `${e.pageY - marginLeft }px`;
      // debugger;
      $pos.style.position = 'absolute';

      // debugger;
      x = e.pageX;
      y = e.pageY;
      document.addEventListener('mousemove', targetMouseMove);

      $pos.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', targetMouseMove);
        $pos.style.position = 'static';
        $pos.style.left = '';
        $pos.style.top = '';
      });
    });
  };
})();
