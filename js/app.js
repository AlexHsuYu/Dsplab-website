
  // loadPages();
// make sure the file is rendered
$(document).ready(function () {
  document.body.scrollTop = 0; // safari
  document.documentElement.scrollTop = 0; // other browsers

  loadPages();

  var current = window.location.href;
  // check if there is hash
  if (current.indexOf("#") == -1) {
    window.location.hash = "#home";
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
  console.log(window.location.hash);
  // change nav active everytime we go to another page
  $(window).on('hashchange', function (e) {
    // console.log("in hash");
    current = window.location.href; // full path
    $('nav [href]').each(function () {
      var hash = this.href.split('#')[1];
      var elmt = '#'+ hash;
      if (this.href == current) {
        // console.log("is current");
        // console.log(this.href);
        // $(elmt).addClass('active');
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });

    // show one "page" at a time
    $(window.location.hash).show().siblings().hide();
    console.log(window.location.hash);
  });

});

function loadPages() {

  // $.getJSON("data/navbar.json", function (json) {
  //   // console.log(json.left);
  //   // use underscore js for dynamic content insertion
  //   $.get('template/navbar.tmpl.html', function (page) {
  //     template = _.template(page);
  //     // for (i in json) {
  //       $('#navbar').append(template(json));
  //     // }
  //   }, 'html');
  // }).fail(function (e) {
  //   console.log("error");
  // });

  //// template loading ////
  $.get('template/projects.tmpl.html', function (page) {
    // projects template can be used in projects & awards
    const template = _.template(page);
    // load award data
    $.getJSON('data/awards.json', function (json) {
      for (var i in json) {
        $('#awards').append(template(json[i]));
      }
    });
    // load project data
    $.getJSON('data/projects.json', function (json) {
      for (var i in json) {
        $('#projects').append(template(json[i]));
      }
    });
  }, 'html');

  $.getJSON("data/members.json", function (json) {
    console.log("json read success");
    // use underscore js for dynamic content insertion
    $.get("template/members.tmpl.html", function (page) {
      template = _.template(page);
      for (i in json) {
        $('#members').prepend(template(json[i]));
      }
    }, 'html');
  }).fail(function (e) {
    console.log("mbr json error");
    JSON.parse(e.responseText);
  });
}
