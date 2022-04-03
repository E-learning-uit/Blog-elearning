import { useState } from 'react'
import thumbnail from '../assets/thumbnail_video.png'




const Lesson = ()=>{


    return (
        <>
        <div className="container mx-auto space-y-4">
            <h1 className='text-[#003663] text-[31px] py-4 font-bold'>Basic programming knowledge</h1>
            <div class="grid grid-cols-2 gap-2">
                {/* Cột bên trái */}
                <div className="">
                    <video
                        controls poster={thumbnail}
                        autoplay
                        loop
                        muted
                        class="absolute inset-0">
                        <source
                            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
                            type="video/mp4"/>
                            Your browser does not support the video tag.
                        <h3 className='text-[#003663] text-[24px] py-4'>What is Client-Server?</h3>
                    </video>
                </div>
                {/* Cột bên phải */}
                <div>
                    <ul className='text-[#003663] text-[24px] py-4'>I - Technical concepts to know 
                        <li class='block'>
                            <video
                                className='inline w-48'
                                controls poster={thumbnail}
                                autoplay
                                loop
                                muted>
                                <source
                                    src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
                                    type="video/mp4"/>
                                    Your browser does not support the video tag.
                            </video>
                            <p className='text-[#666666] text-[16px] inline'>1. What is Client-Server?</p>
                        </li>
                        <li></li>
                    </ul>            
                </div>
            </div>
        </div>
        </>
    )
}

export default Lesson;