# HC_Community_Moderator_Controls

Add controls to Zendesk Community comments for Moderators to check posts as "Answered" or "Closed for comments" while submitting a comment.

# About

Someone asked if it was possible to add checkboxes at the bottom of Community comment editor so moderators could mark a Community Post as "Answered" or "Closed for comments" at the same time they posted a reply. Like this:

![image](https://support.zendesk.com/hc/user_images/qfOi7IsThje9k325lBgrMg.png)

This can be done by adding some HTML and using JavaScript to make API calls to update the post.

Quick note before starting: This is customization that is not supported by Zendesk, and you might need a web developer to help you if you have issues.

First, you'll need to add the checkboxes and labels to the "Community post page" template. Look for a line that says {{checkbox 'official'}} and add this [html](/template.html) before it.

Then, go to your Edit Theme page and add this [code](/script.js) at the top of the JS page.

Remember to change SUBDOMAIN to your actual subdomain. For example ```var subdomain = "support";```

Save and publish the changes, and that's it. Here is what it will look like:

![image](https://support.zendesk.com/hc/user_images/9jZXkE-bmpUvggJaDLlhgg.gif)