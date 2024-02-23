import { Component } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import UserManagement from "./pages/UserManagement";
import CourseManagement from "./pages/CourseManagement";
import CourseDetailManagement from "./pages/CourseDetailManagement";
import { ThemeProvider } from "./components/ThemeContext";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider>
          <SideBar>
            <Routes>
              <Route path="/" element={<AdminPage />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/course-management" element={<CourseManagement />} />
              <Route
                path="/course-detail-management/:id"
                element={<CourseDetailManagement />}
              ></Route>
            </Routes>
          </SideBar>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
