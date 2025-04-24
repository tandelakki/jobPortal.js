import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'



const shortListingStatus = ["Accepted", "Rejected"]
const ApplicantsTable = () => {

    const { applicants } = useSelector(store => store.application)
    return (
        <div>
            <Table>
                <TableCaption>
                    A list of your recent Applicants
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>FullName </TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact </TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action </TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                        <tr>
                            <TableCell>Full Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Contact</TableCell>
                            <TableCell>Resume</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell className="text-right">
                                <Popover>
                                    <PopoverTrigger>
                                        <MoreHorizontal/>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-32 bg-black text-white">
                                    {
                                    shortListingStatus.map((status, index) => {
                                        return (
                                            <div key={index}>
                                                <span>{status}</span>

                                            </div>
                                        )
                                    })


                                }
                                    </PopoverContent>
                                </Popover>
                              
                            </TableCell>

                        </tr>
                    </TableBody>
                
            </Table>
        </div>
    )
}

export default ApplicantsTable