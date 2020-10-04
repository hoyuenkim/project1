const initialState = {
  session: {},
  isLoggedIn: false,
  isSigningIn: false,
  isSignedIn: false,
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_IN_FAILURE";

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

export const BIZCODE_CONFIRM_REQUEST = "BIZCODE_CONFIRM_REQUEST";
export const BIZCODE_CONFIRM_SUCCESS = "BIZCODE_CONFIRM_SUCCESS";
export const BIZCODE_CONFIRM_FAILURE = "BIZCODE_CONFIRM_FAILURE";

export const EMAIL_CONFIRM_REQUEST = "EMAIL_CONFIRM_REQUEST";
export const EMAIL_CONFIRM_SUCCESS = "EMAIL_CONFIRM_SUCCESS";
export const EMAIL_CONFIRM_FAILURE = "EMAIL_CONFIRM_FAILURE";

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
      };
    }

    case LOG_IN_SUCCESS: {
      return {
        ...state,
        session: action.data,
        isLoggedIn: true,
      };
    }

    case LOG_IN_FAILURE: {
      return {
        ...state,
      };
    }

    case LOG_OUT_REQUEST: {
      return {
        ...state,
      };
    }

    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        session: null,
        isLoggedIn: false,
      };
    }

    case LOG_OUT_FAILURE: {
      return {
        ...state,
      };
    }

    case SIGN_UP_REQUEST: {
      return {
        ...state,
      };
    }

    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        session: action.data,
        isLoggedIn: true,
      };
    }

    case SIGN_UP_FAILURE: {
      return {
        ...state,
      };
    }

    case LOAD_USER_REQUEST: {
      return {
        ...state,
      };
    }

    case LOAD_USER_SUCCESS: {
      if (action.data) {
        return {
          ...state,
          session: action.data,
          isLoggedIn: true,
        };
      }
      return {
        ...state,
      };
    }

    case LOAD_USER_FAILURE: {
      return {
        ...state,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
