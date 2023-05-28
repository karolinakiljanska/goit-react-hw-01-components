import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './FriendList/FriendList';
import user from '../data/user.json';
import data from '../data/data.json';
import friendsList from '../data/friends.json';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendsList} />
    </>
  );
};
