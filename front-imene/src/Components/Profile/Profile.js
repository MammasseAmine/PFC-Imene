import "./Profile.css"
import profile from "../../images/profile.jpg"

const Profile = () => {
  return (
    <div id="profile">

		<div class="main">

    <input type="checkbox" id="drop-4" hidden />

    <label class="dropHeader dropHeader-4" for="drop-4"><img src={profile} alt ="profile image" /><span> Imene</span></label>
    <div class="list list-4">
    <div class="item">User Profile</div>
    <div class="item">Setting</div>
    <div class="item">Logout</div>
    </div>
</div>
</div>

  )
}

export default Profile