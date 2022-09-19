import { Badge} from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import classes from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <div className={classes.language}>EN</div>
          <div className={classes.searchContainer}>
          <input type="text" />
          <Search style={{color:'grey', fontSize:16}}/>
          </div>
        
        </div>
        <div className={classes.center}>
          <h1 className={classes.logo}>LAMA</h1>
        </div>
        <div className={classes.right}>
          <div className={classes.menuItem}>REGISTER</div>
          <div className={classes.menuItem}>SIGN IN</div>
          <div className={classes.menuItem}>
            <Badge badgeContent = {4} color = "primary">
            <ShoppingCartOutlined/>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar