import React from 'react'
import { connect } from 'react-redux'

import classname from 'classnames'

import Profile from 'components/Profile'

import { SingleCommentSelector } from 'data/comments/selectors' 
import { UserOfCommentSelector } from 'data/profiles/selectors' 

import { FormattedRelative } from 'react-intl'

import styles from './index.css'

import {
  small,
  rightAligned,
} from 'components/Profile/index.css'

class Comment extends React.Component {
  render() {
    const {
      comment,
      user,
    } = this.props;

    const profileClasses = classname(small, rightAligned);

    return (
      <div className={styles.component}>
        <div className='comment'>
          <p>{ comment.text }</p>
        </div>
        <div className='meta'>
          <Profile {...user} className={profileClasses} />
          <FormattedRelative value={comment.datetime} />
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
