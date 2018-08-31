import React, { Component } from 'react'
import './landing.css'
import MyJobs from '../components/jobs/myjobs.js'
import * as dateFormat from 'dateformat'


class Landing extends Component {
    constructor(props){
        super(props)

        this.state = {

            myJobs: [{
                ID: 1,
                jobName: 'This is the first job',
                jobDesc: 'Something Something Job',
                dueDate: dateFormat('2018-08-31', 'yyyy-mm-dd'),
                isCompleted: false
            },
            {
                ID: 2,
                jobName: 'Clean something',
                jobDesc: 'Find something that is dirty and clean it',
                dueDate: dateFormat('2018-09-05', 'yyyy-mm-dd'),
                isCompleted: false
            },
            {
                ID: 3,
                jobName: 'Un-clean something',
                jobDesc: 'If something looks too clean, dirtify it',
                dueDate: dateFormat('2018-09-12', 'yyyy-mm-dd'),
                isCompleted: true
            },
            {
                ID: 4,
                jobName: 'I Dont Know',
                jobDesc: 'Banana',
                dueDate: dateFormat('2018-09-05', 'yyyy-mm-dd'),
                isCompleted: false
            }
            ]
        }

        this.eachJob = this.eachJob.bind(this)
    }

    eachJob(job){
        return (
            <MyJobs key={job.ID} index={job.ID}>
                <p>Completed: <input type='checkbox' defaultChecked={job.isCompleted}></input></p>
                <p>Job Name: {job.jobName}</p>
                <ul>
                    <li className='jobListStyle'>{job.jobDesc}</li>
                    <li>{job.dueDate}</li>
                </ul>            

            
            </MyJobs>
        )
    }

    render(){
        return (
            <div className='landingBody'>
                <h1 className='heading1'>Welcome HOME!!!!!</h1>

                <h3>{this.state.myJobs.length} total jobs.</h3>
                <div className='myJobs'>
                    
                    {this.state.myJobs.map(this.eachJob)}
                </div>

            </div>
        )
    }
}


export default Landing