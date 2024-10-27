import React, { useState} from 'react'
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

const Header = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state=> state.isLoggedIn);

    const [value, setvalue] = useState();

  return (
    <AppBar position='sticky' sx={{ background: "linear-gradient(90deg, rgba(52,38,91,1) 0%, rgba(130,56,179,1) 52%, rgba(61,33,116,1) 86%)"}}>
        <Toolbar>
            <Typography variant="h4">BlogsApp</Typography>

            { isLoggedIn && (<Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
                <Tabs textColor='inherit' value={value} onChange={(e, val)=>setvalue(val)}>

                    <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                    
                    <Tab LinkComponent={Link} to="/myblogs" label="My Blogs" />

                    <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" />
                </Tabs>
            </Box> )}

            <Box display="flex" marginLeft="auto">
                { !isLoggedIn && <> <Button LinkComponent={Link} to="/auth" variant="contained" sx={{ margin: 1, borderRadius: 10 }} color="warning">Login</Button>

                <Button LinkComponent={Link} to="\auth" variant="contained" sx={{ margin: 1, borderRadius: 10 }} color="warning">SignUp</Button>
                </>
                }

                { isLoggedIn && (
                    <Button 
                        onClick={()=>dispatch(authActions.logout())}
                        LinkComponent={Link} 
                        to="/auth" 
                        variant="contained" 
                        sx={{ margin: 1, borderRadius: 10 }} color="warning"
                    >
                        Logout
                    </Button> 
                )}
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
