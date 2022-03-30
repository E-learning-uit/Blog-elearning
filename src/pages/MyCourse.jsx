



const MyCourse = () => {

    return (
        <div>
            <h1>Basic programming knowledge</h1>
            <div className="grid grid-cols-3">
                <div className="col-span-2">    
                    <img src={`https://img.youtube.com/vi/z2f7RHgvddc/sddefault.jpg`} alt="" />
                </div>
                <div className="col-span-1">
                    <div>
                        <p>24</p>
                        <p>Total lessons in the course</p>
                    </div>
                    <div>
                        <p>3h 50</p>
                        <p>Duration of course</p>
                    </div>
                    <div>
                        <p>1125+</p>
                        <p>Number of people was studied</p>
                    </div>
                    <div>
                        <p>50+</p>
                        <p>Number of feedback</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCourse;