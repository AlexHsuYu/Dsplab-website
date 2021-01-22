$(document).ready(function () {
  loadTmpl();

  var current = window.location.href;
  // check if there is hash
  if (current.indexOf("#") == -1) {
    // if not, assign one
    window.location.hash = "#journal";
  }
  // show default nav active
  $('nav [href]').each(function () {
    var route = this.href;
    // init toolbar active state
    if (route == current) {
      // console.log(this.href);
      $(this).addClass('active');
      // $(this).removeClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
  // load default page according to hash
  $(window.location.hash).show().siblings().hide();

  // change nav active everytime we go to another page
  $(window).on('hashchange', function (e) {
    current = window.location.href; // full path
    $('nav [href]').each(function () {
      if (this.href == current) {
        // console.log(this.href);
        $(this).addClass('active');
        // $(this).removeClass('active');
      } else {
        $(this).removeClass('active');
      }
    });

    // show page
    $(window.location.hash).show().siblings().hide();
  });

});

function loadTmpl() {
  $.getJSON("data/publications.json", function (json) {
    // read template html
    $.get('template/publications.tmpl.html', function (page) {
      template = _.template(page);
      for (i in json) {
        $('#journal').prepend(template({
          year: json[i].year, publications: json[i].publications
        }));
      }
      // don't combine! the index fucks up
      for (i in json) {
        $('#conference').prepend(template({
          year: json[i].year, publications: json[i].conferences
        }));
      }
    }, 'html');
    $.get('template/patents.tmpl.html', function (page) {
      template = _.template(page);
      for (i in json) {
        $('#patent').prepend(template(json[i]));
      }
    }, 'html');
  }).fail(function (e) {
    JSON.parse(e.responseText);
  });
}
