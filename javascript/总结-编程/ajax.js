var xhr = new XMLHttpRequest();
xhr.open('get', url);
xhr.send()

if (xhr.onreadystatechange === 2 && xhr.status >= 200 || xhr.status < 400) {

}
xhr.setReqeustHeader('', '');
