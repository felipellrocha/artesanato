import React from 'react'
import { connect } from 'react-redux'

import Profile from 'components/Profile'

import { SingleCommentSelector } from 'comments/selectors' 
import { UserOfCommentSelector } from 'profiles/selectors' 

import styles from './index.css'

class Comment extends React.Component {
  render() {
    const {
      comment,
      user,
    } = this.props;

    console.log(comment, user)

    return (
      <div className={styles.component}>
        <div className='comment'>
          <p>{ comment.text }</p>
        </div>
        <div className='user'>
          <Profile {...user} />
        </div>
      </div>
    );
  }
};

export default connect((state, props) => {
  const comment = SingleCommentSelector(state, props.id);
  const user = UserOfCommentSelector(state, comment);

  return {
    comment,
    user,
  }
})(Comment)
