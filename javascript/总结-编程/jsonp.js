function generateJsonpCallbackName() {
  return `jsonp_${+new Date}_${Math.floor(Math.random() * 10000000)}`;
}

function removeScript(el) {
  document.removeChild(el);
}

function deleteJsonpCallbackName(name) {
  delete name;
}

function jsonp(url, options) {
  const params = Object.keys(options).map(key => {
    return `${key}=${options[key]}`;
  });

  return new Promise((resolve, reject) => {
    const jsonpCallbackName = generateJsonpCallbackName();

    let $script = document.createElement('script');
    $script.setAttribute('type', 'text/javascript');
    $script.setAttribute('src', `${url}?callback=${jsonpCallbackName}&${params.join('&')}`);
    $script.set
    document.body.appendChild($script);

    window[jsonpCallbackName] = function(res) {
      removeScript($script);
      deleteJsonpCallbackName();
      return resolve(res);
    }

    $script.onerror = (e) => {
      removeScript($script);
      deleteJsonpCallbackName();
      return reject(e);
    }
  })
}
