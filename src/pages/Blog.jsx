import { useState } from 'react'
import './blogcss/blog.css'
import Ellipse12 from '../assets/Ellipse12.png'



const Blog = () => {
    const [blog, setBlog] = useState([
        1, 2, 3, 4, 5
    ])

    return (
        <div className="container mx-auto space-y-4">
            <h1 className='text-[#003663] text-[31px] py-4 font-bold'>Blog</h1>
            {blog.map(item => (
                <>
                    <div className="individual">
                        <div>
                            <img src={Ellipse12} alt="" />
                            <p className='text-[black] text-[14px]'>Johnny Nguyen</p>
                        </div>
                        <h2 className='content'>Time and motivation</h2>
                        <p className='text-[16px]'>Maybe it's been a long time since I've touched a thing called "timetable". Or more rustic,
                            people often call it "daily schedule", and for students, it is called "timetable". Surely many
                            people will wonder why I am a student and have not touched what students call a timetable for a
                            long time. Of course, students or students all need it to see the class schedule, so that not
                            a single morning is forgotten...</p>
                    </div>
                </>
            ))}
        </div>
        
    )
}

export default Blog;