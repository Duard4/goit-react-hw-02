import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.profileCard}>
            <div className={css.profileInfo}>
                <img src={image} className={css.profileImg} alt="User avatar" />
                <p className={css.profileName}>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <ul className={css.profileStats}>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}
