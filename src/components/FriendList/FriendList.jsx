import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import FriendListItem from './FriendListItem';

const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(({avatar , id, isOnline, name}) => (
                <FriendListItem key={id} avatar={avatar} isOnline={isOnline} name={name} />
            ))}
        </List>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;