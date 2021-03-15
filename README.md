Following are the key functional of the Blog-post Web App:

## Show the list of blog post.
Path: '/'
location: Home Page 

## View details of the blog post.
Path: '/blog-post/<title of post>'
location: Detail Page

## Add a new blog post.
Path: '/dashboard/create-post'
location: Create New Post Page

## Edit the blog post.
Path: '/dashboard/blog-post'
location: Edit and Delete Page

## Delete the blog post.
Path: '/dashboard/blog-post'
location: Edit and Delete Page

## Like the blog post.
Path: '/blog-post/<title of post>'
location: Detail Page
Note: For liking the blog post you have to go to home and then click on any post and press the like button from bottom right corner.
## For enhancing the UI experience we used Material UI Components and Icons

## We used both Redux and Context API in this application
Redux is used to store App state that contains following
> Posts Data
> Change Flag for like

## We also maintained data locally using Redux-persist library

