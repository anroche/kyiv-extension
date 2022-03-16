var textNode;
const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT,null,false);
const rExp = new RegExp(  'Kiev', "i");

while(textNode=walk.nextNode()) {
  textNode.nodeValue = textNode.nodeValue.replace(rExp, 'Kyiv');
}

document.title = document.title.replace(rExp, 'Kyiv');
