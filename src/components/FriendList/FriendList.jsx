import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div class={styles.friends}>
      <ul class={styles.friendlist}>
        <FriendListItem friends={friends} />
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.string.isRequired,
    })
  ),
};
FriendList.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg',
  name: 'User name',
  isOnline: false,
};
