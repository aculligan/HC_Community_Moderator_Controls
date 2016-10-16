//Community "Answered" and "Closed" checkboxes
$(document).ready(function() {
  var subdomain = "SUBDOMAIN";
  if(window.location.href.indexOf("posts") > 0) {
    var communityModeratorTool = $(".community_moderator_tool");
    var officialCommentLabel = $("#community_comment_official");
    if (officialCommentLabel.length < 1) {
      communityModeratorTool.hide();
    }
    var CommentSubmitButton = $(".comment-container input[type=submit]");
    var postURL = window.location.href;
    var postSplit = postURL.split("/posts/");
    var secondHalf = postSplit[1];
    var postID = secondHalf.substring(0,9);
    var communityJSON = "https://" + subdomain + ".zendesk.com/api/v2/community/posts/" + postID + ".json";
    CommentSubmitButton.click(function makeCalls() {
      var checkedAnswered = $("#community_comment_answered").is(":checked");
      var checkedClosed = $("#community_comment_closed").is(":checked");
      if (checkedAnswered == true) {
        $.ajax({
          type:"PUT", 
          url: communityJSON,
          contentType: "application/json",
          data: '{"post": {"status": "answered"}}',
        })
      }
      if (checkedClosed == true) {
        $.ajax({
          type:"PUT", 
          url: communityJSON,
          contentType: "application/json",
          data: '{"post": {"closed": "true"}}',
        })
      }
    });
  }
});