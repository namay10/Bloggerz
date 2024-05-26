
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { BrowserRouter ,createRoutesFromElements,Routes,Route, RouterProvider } from "react-router-dom";
import { AuthLayout , Login} from "./components/index.js";
import LogIn from "./pages/LogIn.jsx";
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import AddPost from "./pages/AddPost.jsx"
import AllPost from "./pages/AllPost.jsx"
import EditPost from "./pages/EditPost.jsx";
import Home from "./pages/Home.jsx";
import Post from "./pages/Post.jsx";
import SignUp from "./pages/Signup.jsx"

 const router = <BrowserRouter>
    
        
     
        <Routes>
          <Route index element={<App />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <AuthLayout authentication={false}>
                  <LogIn />
                </AuthLayout>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthLayout authentication={false}>
                  <SignUp />
                </AuthLayout>
              }
            />
            <Route
              path="/all-posts"
              element={
                <AuthLayout authentication>
                  <AllPost />
                </AuthLayout>
              }
            />
            <Route
              path="/add-post"
              element={
                <AuthLayout authentication>
                  <AddPost />
                </AuthLayout>
              }
            />
            <Route
              path="/edit-post/:slug"
              element={
                <AuthLayout authentication>
                  <EditPost />
                </AuthLayout>
              }
            />
            <Route path="/post/:slug" element={<Post />} />
           </Route>
          </Routes>
        
          </BrowserRouter>

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      
    {/* <App/> */}
      {router}
      
    </Provider>
  </React.StrictMode>
);
