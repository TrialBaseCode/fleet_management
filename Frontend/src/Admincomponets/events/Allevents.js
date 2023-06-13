

const Allevents = () => {
    return (
         <>
            <div className="AllEventsContainer">
                <div className="container p-0">
                       {/*  <!-- Content table Row --> */}

                        <div className="row">

                            {/*   <!-- Area Chart --> */}
                            <div className="col-xl-12 col-lg-12">
                                <div className="card shadow mb-4">
                                    {/*  <!-- Card Header - Dropdown --> */}
                                    <div
                                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">All Events</h6>
                                    </div>
                                    {/*  <!-- Card Body --> */}
                                    <div className="card-body">
                                        <div className="chart-area">
                                            <canvas id="myAreaChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                </div>
            </div>
         </>
      );
}

export default Allevents;