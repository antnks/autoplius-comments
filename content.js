var afterBody = `
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=1387306684657203";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
`;

var siteUrl = window.location.href;
var comments = '<div class="fb-comments" data-href="' + siteUrl +'" data-numposts="5"></div>';

$("body").prepend(afterBody);
$("div.content-container").append(comments);
