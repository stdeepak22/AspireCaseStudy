var app = angular.module('CaseStudy', ["ngRoute"]);

app.controller('ctrlHomePage', function (activeNode) {
    this.SetMenuActive = function (menu)
    {
        return activeNode.GetActiveClass(menu);
    }
});


app.controller('ctrlHome', function (activeNode)
{
    this.SetMenu = function () {
        activeNode.setActiveMenu('home');
    }

    this.SetMenu();
    this.Welcome = "Hello User.!";
});

app.controller('ctrlCategory', function (activeNode, categoryService, $routeParams)
{
    var that = this;
    that.catId = $routeParams.catId;

    that.SetMenu = function ()
    {
        activeNode.setActiveMenu('category');
    }
    
    that.dataCategories;
    
    that.Get = function () {

            categoryService.getCategory(that.catId).then(function (response, status) {
                // handle success            
                if (that.catId === undefined) {
                    that.dataCategories = response.data;
                }
                else {
                    that.currentModel = response.data;
                }                
            }, function (response, status) {
                // handle error
                console.log("error " + status + "/" + response.data);
            });
        
    };

    that.SetCurrModel = function(c)
    {
        that.currentModel = c;
    }


    that.SaveCurrModel = function () {
        console.log(that.newName);
        that.currentModel.Name = that.newName;
        var isNew = that.currentModel.Id == undefined;

        if (isNew) {
            categoryService.AddNew(that.currentModel).then(function (res, sta) {
                console.log('Created successfully. ID - ' + res.data.Id);
                that.currentModel = res.data;
                that.dataCategories.push(that.currentModel);
            });
        }
        else {

            categoryService.SaveChanges(that.currentModel.Id, that.currentModel).then(function (res, sta) {
                console.log('Saved successfully');
            });
        }
        $('#catEdit').modal('toggle');
    }

    that.Delete = function () {
        console.log('deleting ID - ' + that.currentModel.Id);
        categoryService.Delete(that.currentModel.Id)
        .then(function (res, status) {
            console.log('Deleted successfully');
            var index = that.dataCategories.indexOf(that.currentModel);
            that.dataCategories.splice(index, 1);
        });

        $('#catDelete').modal('toggle');
    }

    that.CreateNewCat = function () {
        console.log('CreateNewCat');
        that.currentModel = new Object();
        that.currentModel.Name = "";
    }
    that.Get();
    that.SetMenu();
});


app.controller('ctrlPost', function (activeNode, categoryService, postService, $routeParams, $filter) {
    var that = this;
    that.postId = $routeParams.postId;

    that.SetMenu = function () {
        activeNode.setActiveMenu('post');
    }

    that.dataPosts;
    that.dataCat;
    that.Get = function () {

        categoryService.getCategory(undefined).then(function (response, status) {                 
            that.dataCat = response.data;            
        }, function (response, status) {
            // handle error
            console.log("error " + status + "/" + response.data);
        });

        postService.getPost(that.postId).then(function (response, status) {
            // handle success            
            if (that.postId === undefined) {
                that.dataPosts = response.data;
            }
            else {
                that.currentModel = response.data;
            }            
        }, function (response, status) {
            // handle error
            console.log("error " + status + "/" + response.data);
        });

    };

    that.SetCurrModel = function (p) {
        that.currentModel = p;
        that.newPostTitle = p.Title;
        that.newPostCatId = p.CategoryId;
        that.newPostBody = p.PostBody;
    }
    
    that.SaveCurrModel = function () {
        //debugger;
        that.currentModel.Title = that.newPostTitle;
        that.currentModel.CategoryId = that.newPostCatId;
        that.currentModel.PostBody = that.newPostBody;

        var isNew = that.currentModel.Id == undefined;

        if (isNew) {
            postService.AddNew(that.currentModel).then(function (res, sta) {
                console.log('Created successfully. ID - ' + res.data.Id);
                that.currentModel = res.data;                
                that.dataPosts.push(that.currentModel);
            });
        }
        else {

            var onlyPostObj = that.currentModel;
            onlyPostObj.Category = undefined;
            postService.SaveChanges(onlyPostObj.Id, onlyPostObj).then(function (res, sta) {
                console.log('Saved successfully');
            });
        }
        $('#postEdit').modal('toggle');
    }

    that.GetCategoryName = function(catId)
    {
        var r = $filter('filter')(that.dataCat, { 'Id': catId });        
        return r[0].Name;
    }

    that.Delete = function () {
        console.log('deleting ID - ' + that.currentModel.Id);
        postService.Delete(that.currentModel.Id)
        .then(function (res, status) {
            console.log('Deleted successfully');
            var index = that.dataPosts.indexOf(that.currentModel);
            that.dataPosts.splice(index, 1);
        });

        $('#postDelete').modal('toggle');
    }

    that.CreateNewPost = function () {        
        that.currentModel = new Object();
        that.currentModel.Title = "";
        that.currentModel.CategoryId  = 0;
        that.currentModel.PostBody = "";
    }
    that.Get();
    that.SetMenu();
});