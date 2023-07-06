const FrontPage = () => {
  return (
    <>
       <div className="fluid-container d-flex justify-content-center align-items-center w-100 frontpagecontain">
            <div className="card shadow" style={{ width: "24rem" }}>
                <div className="card-header"><h2 className="mb-0 text-basic text-center font-weight-bold">Login</h2></div>
                <div className="card-body">
                    <form>
                        <div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
       </div>
    </>
  );
};

export default FrontPage;
