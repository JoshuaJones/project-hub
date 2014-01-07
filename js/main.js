(function(window, document) {
  
  var templateSource = document.getElementById('timeline-template').innerHTML,
      template = Handlebars.compile(templateSource),
      container = document.getElementById('container'),
      data = new XMLHttpRequest();

  data.open('GET', '/js/timeline.json');
  data.onload = function() {
    var json = JSON.parse(this.responseText),
        html = template(json);
    
    container.innerHTML = html;
  };
  data.send();


}(window, document, undefined));