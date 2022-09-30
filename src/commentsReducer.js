import Data from "./data.json";

const currentUser = Data.currentUser;

export const ACTIONS = {
  DELETE_COMMENT: "delete-comment",
  ADD_COMMENT: "add-comment",
  EDIT_COMMENT: "edit-comment",
  ADD_REPLY: "add-reply",
  EDIT_REPLY: "edit-reply",
  DELETE_REPLY: "delete-reply",
  UPVOTE: "upvote",
  DOWNVOTE: "downvote",
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, newComment(action.payload.content)],
      };
    case ACTIONS.EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.payload.id) {
            return {
              ...comment,
              content: action.payload.content,
            };
          }
          return comment;
        }),
      };
    case ACTIONS.DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter((comment) => {
          return comment.id !== action.payload.id;
        }),
      };
    case ACTIONS.ADD_REPLY:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.payload.id) {
            return {
              ...comment,
              replies: [...comment.replies, newReply(action.payload.content)],
            };
          } else {
            return comment;
          }
        }),
      };
    case ACTIONS.EDIT_REPLY:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.replies.some((reply) => reply.id === action.payload.id)) {
            return {
              ...comment,
              replies: comment.replies.map((reply) => {
                if (reply.id === action.payload.id) {
                  return {
                    ...reply,
                    content: action.payload.content,
                  };
                } else {
                  return reply;
                }
              }),
            };
          } else {
            return comment;
          }
        }),
      };
    case ACTIONS.DELETE_REPLY:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          return {
            ...comment,
            replies: comment.replies.filter((reply) => {
              return reply.id !== action.payload.id;
            }),
          };
        }),
      };
    case ACTIONS.DOWNVOTE:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.payload.id) {
            return {
              ...comment,
              score: comment.score - 1,
            };
          } else if (
            comment.replies.some((reply) => reply.id === action.payload.id)
          ) {
            return {
              ...comment,
              replies: comment.replies.map((reply) => {
                if (reply.id === action.payload.id) {
                  return {
                    ...reply,
                    score: reply.score - 1,
                  };
                }
                return reply;
              }),
            };
          } else {
            return comment;
          }
        }),
      };
    case ACTIONS.UPVOTE:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.payload.id) {
            return {
              ...comment,
              score: comment.score + 1,
            };
          } else if (
            comment.replies.some((reply) => reply.id === action.payload.id)
          ) {
            return {
              ...comment,
              replies: comment.replies.map((reply) => {
                if (reply.id === action.payload.id) {
                  return {
                    ...reply,
                    score: reply.score + 1,
                  };
                }
                return reply;
              }),
            };
          } else {
            return comment;
          }
        }),
      };
    default:
      return state;
  }
}

function newComment(content) {
  return {
    user: currentUser,
    score: 0,
    id: Date.now(),
    createdAt: "a few seconds ago",
    replies: [],
    content: content,
  };
}

function newReply(content) {
  return {
    user: currentUser,
    score: 0,
    id: Date.now(),
    createdAt: "a few seconds ago",
    content: content,
  };
}
