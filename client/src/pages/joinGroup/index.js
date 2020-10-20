import React, {useState, useEffect} from "react";
import JoinGroup from "../../components/joinGroup";
import Nav from "../../components/nav";
import { useUserContext } from '../../components/firebase/userContext'
// import Footer from "../../components/Footer"

export default function () {
  const [user] = useUserContext()
  const [displayName, setDisplayName] = useState(
    "")

  useEffect(() => {
      if(user) {
        setDisplayName(user.displayName)
      }
    }, [user]);
  
  return (
    <div>
      <Nav name={displayName}/>
      <JoinGroup />
    </div>
  );
}
