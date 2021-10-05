

import React, {Fragment} from "react"
import { connect } from '@cliqd/janet'
import LoggedInNav from "./LoggedInNav"
import NotLoggedInNav from "./NotLoggedInNav"




const Navigator = ({
  currentUser,
}) => {
  return(     
     
   <Fragment>
     {currentUser && 
      <Fragment>
        <LoggedInNav/>
      </Fragment>
     }
     {!currentUser &&
      <Fragment>
        <NotLoggedInNav/>
      </Fragment>
     }
   </Fragment>
)
}


export default connect(
    ({ userReducer }) => ({
      currentUser: userReducer.currentUser,
    }),
  )(Navigator)
