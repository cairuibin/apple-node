import React from 'react'

export default Components => {
    return props => {
        if(!localStorage.user){
            props.history.push('/login')
            return null
        }
        return <Components {...props}/>
    }
}
