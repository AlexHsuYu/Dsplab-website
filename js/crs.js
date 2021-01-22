$(document).ready(function () {
  loadTmpl();

  var current = window.location.href;
  // check if there is hash
  if (current.indexOf("#") == -1) {
    // if not, assign one
    window.location.hash = "#ccurrent";
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
  $.getJSON("data/courses.json", function (json) {
    // read template html
    $.get('template/courses.tmpl.html', function (page) {
      template = _.template(page);
      for (i in json) {
        $('#courses').prepend(template(json[i]));
      }

      // load default page after the template is set
      // otherwise show, hide states might (not) be set before the content is ready
      $(window.location.hash).show().siblings().hide();
    }, 'html');

  }).fail(function (e) {
    JSON.parse(e.responseText);
  });
}
