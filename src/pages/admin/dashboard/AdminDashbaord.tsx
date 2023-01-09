// import {} from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
const user = false;

//

// const {adminToken,role,accessToken,refreshToken} = useAdminAuth();
// if(adminToken)

export default function AdminDashbaord() {
  const navigate = useNavigate();
  //   if(!user && adminToken && role=="SUPER_ADMIN")
  if (!user) {
    navigate("/admin-login");
  }
  return <div>AdminDashbaord</div>;
}
