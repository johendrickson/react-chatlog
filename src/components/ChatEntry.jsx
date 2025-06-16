import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';

const ChatEntry = (props) => {
  const { id, sender, body, timeStamp, liked, onLikeToggle } = props;

  return (
    <div id={id} className='chat-entry local'>
      <h2 className='entry-name'>{sender}</h2>
      <section className='entry-bubble'>
        <p>{body}</p>
        <p className='entry-time'>
          <TimeStamp time={timeStamp} />
        </p>
        <button className='like' onClick={() => onLikeToggle(id)}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeToggle: PropTypes.func.isRequired,
};

export default ChatEntry;