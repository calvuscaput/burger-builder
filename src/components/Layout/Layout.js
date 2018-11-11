import React from 'react'

import classes from './Layout.module.sass'

const layout = ( props ) => (
  <>
    <div>
      Toolbar, sidedrawer, backdrop
    </div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </>
);


export default layout