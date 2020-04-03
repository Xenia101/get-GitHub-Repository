# get GitHub Repository

Get GitHub repository and use them [Github Developer Page](https://developer.github.com/v3/)

## Example / Usage

- Get the GitHub user data using Userinfo

```javascript
jQuery.Userinfo = function(username, callback) {
    jQuery.getJSON('https://api.github.com/users/' + username + '/repos?callback=?', callback)
}
```

- Add the ```<div></div>``` tag to body

```html
<div id="repolist"></div>
```

- Add GitHub user ID in index.html and then add the code before ```<body></body>``` is finished

```html
<script src="./javascript/getGithubRepo.js" type="text/javascript"></script>

<script>
  $(document).ready(function(){
    $("#repolist").loadRepos(""); // Add User ID
  });
</script>
```

