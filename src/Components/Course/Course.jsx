import PropTypes from 'prop-types';
import icon from '../../assets/icon.png'
const Course = ({course,handleCourseSelection}) => {
  const {name,description,photo,price,credit}=course
  // console.log(course)
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-full"
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="px-2 py-5">
          <h2 className="text-xl font-bold pb-3">{name}</h2>
          <p className="pb-3 ">{description}</p>
          <div className='flex justify-between py-3'>
            <p>
              Price: ${price}
            </p>
            <p className='flex space-x-1'>
              <img src={icon} alt="" />
              <span>Credit: {credit} hr</span>
            </p>
          </div>
          <div className="card-actions py-2">
            <button onClick={()=>handleCourseSelection(course)} className="btn btn-primary w-full text-white text-base font-medium">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Course.propTypes={
  course:PropTypes.object.isRequired,
  handleCourseSelection:PropTypes.func.isRequired
}

export default Course;
