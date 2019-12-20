import AdminHome from './components/admin/AdminHome'
//========== Category ================
import CategoryList from "./components/admin/category/List";
import AddCategory from "./components/admin/category/New";
import EditCategory from "./components/admin/category/Edit";
//============ Post ===================
import PostList from "./components/admin/post/List";
import AddPost from "./components/admin/post/New";
import PostEdit from "./components/admin/post/Edit";
export const routes = [
    { path: '/home', component: AdminHome },
    { path: '/category-list', component: CategoryList },
    { path: '/add-category', component: AddCategory },
    { path: '/edit-category/:categoryid', component: EditCategory },
    { path: '/post-list', component: PostList },
    { path: '/add-post', component: AddPost },
    { path: '/edit-post/:postid', component: PostEdit }
]
