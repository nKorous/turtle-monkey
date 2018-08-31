import React, { Component } from 'react'
import './myjobs.css'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

class MyJobs extends Component {
    constructor(props){
        super(props)

        this.state = {
        
    }
}


    render(){
        return (
            <div className='jobCard'>
                <Card>
                    <CardContent>
                        {this.props.children}
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default MyJobs