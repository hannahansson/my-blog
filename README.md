# MyBlog - React Inlämning 1 

### MyBlog is a blog site that let's you create and read blog posts.


#### Home page:
![home-page-1](https://user-images.githubusercontent.com/89410611/189605748-466e07f0-4a6d-458b-8a3b-f3c4b2ed94a5.png)

Home page includes a little information about the page and two link buttons. You can navigate through them or via the navbar. 

#### Create Posts:
![create-posts](https://user-images.githubusercontent.com/89410611/189913779-5969f3e1-37d4-4f37-a785-025bc54e7be0.png)

Here on *Create Posts* you can write and submit your blog post. You are also able to toggle the *Show posts* button to see all the published blog posts.

![close-show-post](https://user-images.githubusercontent.com/89410611/189914117-e61926a6-b48c-4747-8a90-a2471d0cca79.png)

*Show Posts* is the toggle button that let's you see the blog posts. You can only see three posts at time then you have to navigate through a pagination. 
If you don't want to read more you can just press the button again. That's what a toggle button is ;)

![image](https://user-images.githubusercontent.com/89410611/189914673-f28b60f5-d7ad-4b2e-a96f-6cfcd1ba57c8.png)

The blog form has a title, blog content, date and author input.
When submitting the form it redirects you to the ”Blog Posts” page using **useHistory**.

#### Read Posts:
![readPosts](https://user-images.githubusercontent.com/89410611/189606133-524176d2-601e-4f45-94ab-8ac3da078d4c.png)

Here on *Read Posts* you can read all the blog posts. You can also delete any post you would like by pressing the delete button.  

![blog-posts-with-pagination](https://user-images.githubusercontent.com/89410611/189182819-dde9094c-54c2-4e8b-80cc-d7d16eef5dcf.png)

This is what the blog post and the pagination looks like.

The blog posts is saved with local storage. Saved with local storage means that you can refresh the page without losing your data/blog posts.

# How to get started:
1. Clone this repo
2. Open up in VS Code and then write ***npm start*** in the terminal (make sure it's live on "http://localhost:3000/")
3. Now you are live and can navigate around on MyBlog.
4. If you would like to cancel the live-hosting, just write ***Ctrl C*** in the node terminal.
