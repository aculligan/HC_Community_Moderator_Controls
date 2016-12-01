//Community "Answered" and "Closed" checkboxes
$(document).ready(function () {
  // Replace SUBDOMAIN for account subdomain. For example: const subdomain = 'support';
  const subdomain = 'SUBDOMAIN';
  const windowURL = window.location.href;
  if(windowURL.indexOf('posts') > 0) {
    const $commentFormControls = $('.comment-form-controls');
    const $officialCommentLabel = $('#community_comment_official');
    if ($officialCommentLabel.length > 0) {
      $commentFormControls.prepend(
        $(`<input class="community_moderator_tool" type="checkbox" name="community_comment[answered]" id="community_comment_answered">
          <label class="community_moderator_tool" for="community_comment_answered" id="community_comment_answered_label" style="margin-right: 15px;">Answered</label>
          <input class="community_moderator_tool" type="checkbox" name="community_comment[closed]" id="community_comment_closed">
          <label class="community_moderator_tool" for="community_comment_closed" id="community_comment_closed_label" style="margin-right: 15px;">Closed for comments</label>`)
      );
    }
    const $commentSubmitButton = $('input[type=submit]');
    const postSplit = windowURL.split('/posts/');
    const secondHalf = postSplit[1];
    const postID = secondHalf.substring(0,9);
    const communityJSON = `https://${subdomain}.zendesk.com/api/v2/community/posts/${postID}.json`;
    $commentSubmitButton.click(function makeCalls() {
      const $checkedAnswered = $('#community_comment_answered').is(':checked');
      const $checkedClosed = $('#community_comment_closed').is(':checked');
      if ($checkedAnswered == true) {
        $.ajax({
          type:'PUT', 
          url: communityJSON,
          contentType: 'application/json',
          data: '{"post": {"status": "answered"}}'
        });
      }
      if ($checkedClosed == true) {
        $.ajax({
          type:'PUT', 
          url: communityJSON,
          contentType: 'application/json',
          data: '{"post": {"closed": "true"}}'
        });
      }
    });
  }
});
