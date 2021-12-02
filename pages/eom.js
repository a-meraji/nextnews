import styles from "../styles/EOM.module.css";

const EOM = ({ employee }) => {
  return (
      <div className={styles.main}>
        <div>
          <h1>employee of the month</h1>
          <div className={styles.employeeOfTheMonth}>
            <h3>{employee.name}</h3>
            <h6>{employee.position}</h6>
            <img src={employee.image} />
            <p>{employee.description}</p>
          </div>
        </div>
      </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );
  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default EOM;
