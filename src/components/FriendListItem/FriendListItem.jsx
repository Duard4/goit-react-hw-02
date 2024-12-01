import css from "./FriendListItem.module.css";
export default function FriendListItem({ name, avatar, isOnline }) {
    return (
        <>
            <img src={avatar} alt={name} width="48" />
            <p className={css.friendName}>{name}</p>
            <p className={isOnline ? css.isOnline : css.isOffline}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </>
    );
}
