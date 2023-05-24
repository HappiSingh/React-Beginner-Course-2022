

function Job({position, company, salary}) {
    return (
      <div className="Job">
        <h2>
        The salary for a {position} at {company} is ${salary}
        </h2>
      </div>
    );
  }

  export default Job;