import React, { useEffect, useState } from 'react'
import Navbar from './ui/shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'

import { useSelector } from 'react-redux'





//const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8]
const Jobs = () => {
  const {allJobs, searchedQuery} = useSelector ((state) => state.job)
  const [filterJobs, setFilterJobs] = useState([])

useEffect(() => {
  if(searchedQuery){
    const filteredJobs = allJobs.filter((job) => {
      return job?.title?.toLowerCase().includes(searchedQuery.toLowerCase()) || 
      job?.description?.name?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
      job?.location?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
      job?.company?.name?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
     
      job?.jobType?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
      job?.salary?.toString().toLowerCase().includes(searchedQuery.toLowerCase())
    })

    setFilterJobs(filteredJobs)

  }
  else {
    setFilterJobs(allJobs)
  }
}, [allJobs, searchedQuery])


  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>

          {
           filterJobs.length <= 0 ? <span>No Jobs Found</span> : (
              <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                <div className="grid grid-cols-3 gap-5">
                  {
                    filterJobs.map((job) => (
                      <div key={job?._id}>
                        <Job job={job} />
                      </div>
                    )
                    )
                  }
                </div>

              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Jobs