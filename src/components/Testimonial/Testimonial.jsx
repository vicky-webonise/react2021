import { useState } from "react";
import { GoChevronLeft, GoChevronRight, GoSync } from "react-icons/go";
import people from "../../mockData/testimonialData";

const Testimonial = () => {

  const [index, setIndex] = useState(0);

  const {id, name, job, msg} = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length -1;
    }
    return number;
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
    console.log(index);
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
    console.log(index);
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
    console.log(index);
  }

    return (
      <>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary mb-2" onClick={prevPerson}>
            <GoChevronLeft />
          </button>
          <button className="btn btn-primary mb-2" onClick={randomPerson}>
            <GoSync />
          </button>
          <button className="btn btn-primary mb-2" onClick={nextPerson}>
            <GoChevronRight />
          </button>
        </div>
        <div className="card text-white bg-info text-center">
          <div className="card-header">Featured {id}</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{msg}</p>
              <footer className="blockquote-footer text-white">
                {name}
                <cite title="Source Title">, {job}</cite>
              </footer>
            </blockquote>
          </div>
          <div className="card-footer">2 days ago</div>
        </div>
      </>
    );
}

export default Testimonial;
