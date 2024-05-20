import { useCookies } from 'react-cookie'

const ChatHeader = ({ user }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const logout = () => {
        removeCookie('UserId', cookies.UserId)
        removeCookie('AuthToken', cookies.AuthToken)
        window.location.replace("/")
    }

    return (
        <div className="chat-container-header">
            <div className="profile">
                <div className="img-container">
                    <img src={user.url} alt={"photo of " + user.first_name} />
                </div>
                <h3>{user.first_name}</h3>
            </div>
            <button className="log-out-icon" onClick={logout}>Logout</button>
        </div>
    )
}

export default ChatHeader
