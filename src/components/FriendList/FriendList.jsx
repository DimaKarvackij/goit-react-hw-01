import FriendListItem from './FriendListItem'
import css from './FriendList.module.css'

export default function FriendList({ friends }) {
  return (
    <ul className={css.ul}>
      {friends.map((result) => (
        <li className={css.list} key={result.id}>
          <FriendListItem friends={result} />
        </li>
      ))}
    </ul>
  )
}
