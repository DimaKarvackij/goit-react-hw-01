import css from './Profile.module.css'
export default function Profiler({ name, tag, location, image, stats }) {
    return (
        <div className={css.container}>
            <div className={css.main}>
                <img className={css.photo}
                    src={image}
                    alt="User avatar"
                    width="150"
                    height='150'
                />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>

            <ul>
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
    )
}
