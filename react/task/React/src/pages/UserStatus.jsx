const UserStatus = ( { status = false } ) => {
    return (
        <div>
            {/* <span className="btn border-success text-success">
                {status ? "Online" : "Offline" }
            </span> */}
            <p>To check the user status </p>
            <span className={`btn border-${status ? "success" : "danger"} text-${status ? "success" : "danger"}`}>
                {status ? "Online" : "Offline" }
            </span>
        </div>
    );
};
export default UserStatus