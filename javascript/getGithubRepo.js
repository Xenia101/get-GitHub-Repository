jQuery.Userinfo = function(username, callback) {
    jQuery.getJSON('https://api.github.com/users/' + username + '/repos?callback=?', callback)
}

jQuery.fn.loadRepos = function(username) {
    var target = this;
    $.Userinfo(username, function(data) {
        var repos = data.data;
        var list = $('<ul/>');
        target.empty().append(list);
        $(repos).each(function() {
            if (this.name != (username.toLowerCase()+'.github.com') && this.name != (username.toLowerCase()+'.github.io')) {
                list.append('<li><a href="'+ (this.homepage?this.homepage:this.html_url) +'">' + this.name.split('-').join(' ') + '</a><p>' + this.description + '</p></li>');
            }
        });      
      }); 
};