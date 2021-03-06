import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function CommentsForm(props) {
  return (
    <>
      <div class="card" id="comments">
        <div class="card-body">
          <form>
            <div class="form-group">
              <label>댓글 작성</label>
              <textarea
                class="form-control"
                id="comment-content"
                rows="3"
              ></textarea>
            </div>
            <input type="hidden" id="comment-author" value="익명" />
            <button
              type="button"
              class="btn btn-primary"
              id="comment-create-btn"
            >
              제출
            </button>
          </form>
        </div>
      </div>
      {/* <!-- ajax 통신을 위한 JS 추가 -->
    <Script src="/js/app/comment.js"></script> */}
    </>
  );
}

export default CommentsForm;
