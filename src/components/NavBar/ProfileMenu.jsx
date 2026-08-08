import styles from "./ProfileMenu.module.css";

function ProfileMenu({toggleDarkMode}) {
    return (
        <div className={styles.profileMenu}>
            <button> My Profile</button>
            <button> Settings</button>
            <button  onClick={toggleDarkMode}>Dark Mode</button>
            <button>Logout</button>
        </div>
    )
}
export default ProfileMenu;