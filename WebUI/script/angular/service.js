app.service('activeNode', function () {
    activeMenu = 'home'
    this.setActiveMenu = function (currentMenu) {
        activeMenu = currentMenu;
    }
    this.GetActiveClass = function (currentNode) {
        return activeMenu == currentNode ? 'active' : '';
    }
});


var webApiRooUrl = "http://localhost:65378/api/";

app.service('categoryService', function (basicWebApi) {
    var root = webApiRooUrl + 'categories/';

    this.getCategory = function (catId) {
        return basicWebApi.getData(root, catId);
    }

    this.SaveChanges = function (catId, cat) {
        return basicWebApi.saveChanges(root, catId, cat);
    }

    this.AddNew = function (cat) {
        return basicWebApi.AddNew(root, cat);
    }

    this.Delete = function (catId) {
        return basicWebApi.Delete(root, catId);
    }
});

app.service('postService', function (basicWebApi) {
    var root = webApiRooUrl + 'posts/';

    this.getPost = function (postId) {
        return basicWebApi.getData(root, postId);
    }

    this.SaveChanges = function (postId, post) {
        return basicWebApi.saveChanges(root, postId, post);
    }

    this.AddNew = function (post) {
        return basicWebApi.AddNew(root, post);        
    }

    this.Delete = function (postId) {
        return basicWebApi.Delete(root, postId);
    }

});

app.service('basicWebApi', function ($http) {
    this.getData = function (url, id) {

        if (id != undefined) {
            url += id;
        }
        return $http.get(url);
    }

    this.saveChanges = function (url, id, obj) {
        if (id != undefined) {
            return $http.put(url + id, obj);
        }
    }

    this.AddNew = function (url, obj) {
        return $http.post(url, obj);
    }

    this.Delete = function (url, id) {
        if (id != undefined) {
            return $http.delete(url + id);
        }
    }
});