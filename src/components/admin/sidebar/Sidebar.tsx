import { Box, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const sidebarData = [
  { path: "/", title: "dashboard" },
  { path: "/admin/products", title: "products" },
];
export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col space-y-1 px-1">
        {sidebarData.map((sidebar) => (
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            to={sidebar.path}
          >
            {sidebar.title}
          </NavLink>
        ))}
      </div>
    </>
  );
}
