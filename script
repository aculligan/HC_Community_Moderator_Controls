//Community "Answered" and "Closed" checkboxes
$(document).ready(function () {
  // Replace SUBDOMAIN for account subdomain. For example: var subdomain = 'support';
  var subdomain = 'SUBDOMAIN';
  var windowURL = window.location.href;
  if (windowURL.indexOf('posts') > 0) {
    (function () {
      var $commentFormControls = $('.comment-form-controls');
      var $officialCommentLabel = $('#community_comment_official');
      if ($officialCommentLabel.length > 0) {
        $commentFormControls.prepend($('<input class="community_moderator_tool" type="checkbox" name="community_comment[answered]" id="community_comment_answered">\n          <label class="community_moderator_tool" for="community_comment_answered" id="community_comment_answered_label" style="margin-right: 15px;">Answered</label>\n          <input class="community_moderator_tool" type="checkbox" name="community_comment[closed]" id="community_comment_closed">\n          <label class="community_moderator_tool" for="community_comment_closed" id="community_comment_closed_label" style="margin-right: 15px;">Closed for comments</label>'));
      }
      var $commentSubmitButton = $('input[type=submit]');
      var postSplit = windowURL.split('/posts/');
      var secondHalf = postSplit[1];
      var postID = secondHalf.substring(0, 9);
      var communityJSON = 'https://' + subdomain + '.zendesk.com/api/v2/community/posts/' + postID + '.json';
      $commentSubmitButton.click(function makeCalls() {
        var $checkedAnswered = $('#community_comment_answered').is(':checked');
        var $checkedClosed = $('#community_comment_closed').is(':checked');
        if ($checkedAnswered == true) {
          $.ajax({
            type: 'PUT',
            url: communityJSON,
            contentType: 'application/json',
            data: '{"post": {"status": "answered"}}'
          });
        }
        if ($checkedClosed == true) {
          $.ajax({
            type: 'PUT',
            url: communityJSON,
            contentType: 'application/json',
            data: '{"post": {"closed": "true"}}'
          });
        }
      });
    })();
  }
});
