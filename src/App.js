import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  console.log(isLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("userId")){
      dispatch(authActions.login());
    }
  }, [dispatch])

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          { !isLoggedIn ? 
            <Route path="/auth" element={<Auth/>}/> :

            <>
              <Route path="/blogs" element={<Blogs/>}/>
              <Route path="/myblogs" element={<UserBlogs/>}/>
              <Route path="/myblogs/:id" element={<BlogDetail/>}/>
              <Route path="/blogs/add" element={<AddBlog/>}/>
            </>
          }
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
