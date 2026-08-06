import styles from "./ProfileMenu.module.css";

function ProfileMenu() {
    return (
        <div className={styles.profileMenu}>
            <button> My Profile</button>
            <button> Settings</button>
            <button>Dark Mode</button>
            <button>Logout</button>
        </div>
    )
}
export default ProfileMenu;