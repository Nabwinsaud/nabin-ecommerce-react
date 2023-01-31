// import {} from "react-loading-skeleton";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const user = true;

export default function AdminDashboard() {
  const navigate = useNavigate();
  //   if(!user && adminToken && role=="SUPER_ADMIN")

  useEffect(() => {
    if (!user) {
      navigate("/admin-login");
    }
  }, [user]);
  return (
    // <div className="text-center h-full w-full flex flex-col items-center justify-center">
    <div className="w-full">AdminDashbaord</div>
  );
}
