import React, {useState, Fragment} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../../actions/post'

const CommentForm = ({ postId, addComment }) => {
    const [text, setText] = useState('');

    return (
        <Fragment>
            {/*
                <div className="post bg-white p-1 my-1">
                    <div>
                    <a href="profile.html">
                        <img
                        className="round-img"
                        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                        alt=""
                        />
                        <h4>John Doe</h4>
                    </a>
                    </div>
                    <div>
                    <p className="my-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                        possimus corporis sunt necessitatibus! Minus nesciunt soluta
                        suscipit nobis. Amet accusamus distinctio cupiditate blanditiis
                        dolor? Illo perferendis eveniet cum cupiditate aliquam?
                    </p>
                    </div>
                </div>
            */}

            <div className="post-form">
                <div className="bg-primary p">
                <h3>Leave A Comment</h3>
                </div>
                <form onSubmit={e => {
                    e.preventDefault();
                    addComment(postId, {text});
                    setText('');
                }}                
                    className="form my-1">
                <textarea
                    name="text"
                    cols="30"
                    rows="5"
                    placeholder="Comment on this post"
                    required
                    onChange={e => setText(e.target.value)}
                    value={text}
                ></textarea>
                <input type="submit" className="btn btn-dark my-1" value="Submit" />
                </form>
            </div>

        </Fragment>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired
}

export default connect(
    null,
    { addComment }
)(CommentForm)
