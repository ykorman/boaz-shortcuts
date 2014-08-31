(function () {   // namespace protection

// extract github project url
var url = window.location.toString();

// check that we are in the root of a project by counting the url (not 100% but good enough)
if (url.split("/").length != 5)
  return;

// from http://stackoverflow.com/a/814649
function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

var style = "position:fixed;width:180px;height:80px;top:10px;right:10px;padding:10px;background:#FFFFFF;border:2px solid #2266AA;z-index:100";
var html = "<b>Boaz\'s Github Shortcuts</b><br><a href=\"url/commits/master\">commits</a></div>".replace('url',url,'g');

var fragment = create('<div id="floatdiv" style="' + style + '">' + html);
document.body.insertBefore(fragment, document.body.childNodes[0]);

})();  // namespace protection end