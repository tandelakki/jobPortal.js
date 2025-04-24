
import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from './ui/button'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import axios from 'axios'
import { setUser } from '@/redux/authSlice'

const UpdateProfileDialog = ({ open, setOpen }) => {


  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  // const [input, setInput] =useState({
  //   fullname: user?.fullname || "",
  //   email: user?.email || "",
  //   phoneNumber: user?.phoneNumber || "",
  //   bio: user?.bio || "",
  //   skills: user?.skills?.map(skill => skill) || "",
  //   file: user?.profile?.resume || ""
  // })
  const [input, setInput] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    bio: '',
    skills: '',
    file: ''
  });
  useEffect(() => {
    if (user) {
      setInput({
        fullname: user.fullname || '',
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        bio: user.bio || '',
        skills: user.skills ? user.skills.join(', ') : '',
        file: user.profile?.resume || ''
      });
    }
  }, [user]);
  const dispatch = useDispatch()

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }


  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    setInput({
      ...input,
      file: file
    })


  }

  const submitHandler = async (e) => {
    e.preventDefault();
    //setLoading(true)

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
          // Authorization: `Bearer ${user?.token}`
        },
        withCredentials: true
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user))
        toast.success("Profile updated successfully")
      } 

    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
    finally {
      setLoading(false)
    }
    setOpen(false)
    console.log(input)
    // setTimeout(() => setLoading(false), 2000);
  }



  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <div className="sm:max-w-[450px] bg-solid rounded-lg shadow-xl p-6 border border-gray-200">
          <DialogContent className="bg-white p-6 rounded-lg shadow-lg">
            <DialogHeader>
              <DialogTitle>Update Profile</DialogTitle>
            </DialogHeader>
            <form onSubmit={submitHandler}>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fullname" className="text-right">
                  Name
                </Label>
                <Input
                  id="fullname"
                  name="fullname"
                  onChange={changeEventHandler}
                  value={input.fullname}

                  className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={changeEventHandler}
                  value={input.email}

                  className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phoneNumber" className="text-right">
                  Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={changeEventHandler}
                  value={input.phoneNumber}

                  className="col-span-3" />
              </div>


              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input
                  id="bio"
                  name="bio"
                  onChange={changeEventHandler}
                  value={input.bio}

                  className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input
                  id="skills"
                  name="skills"
                  onChange={changeEventHandler}
                  value={input.skills}

                  className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <Input
                  id="file"
                  name="file"
                  type='file'
                  onChange={fileChangeHandler}
                   accept='image/*'
                  className="col-span-3" />
              </div>
              <DialogFooter>
                {loading ? (
                  <Button className="w-full my-4">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                  </Button>
                ) : (
                  <Button type="submit" className="w-full my-4 bg-black text-white">
                    Update
                  </Button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </div>
      </Dialog>
    </div>


  )

}

export default UpdateProfileDialog
