import './UserAvatar.sass'

function UserAvatar({ host }) {
  const { picture, name } = host
  return (
    <div className='user-avatar'>
      <p>{name}</p>
      <img className='user-avatar-img' src={picture} alt={name} />
    </div>
  )
}

export default UserAvatar