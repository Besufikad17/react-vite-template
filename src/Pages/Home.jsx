import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
  return (
    <div>
      {/* Header */}
      <Header
        title="Template"
        links={[
          ["SignUp", "/signup"],
          ["Login", "/login"],
        ]}
      />

      {/* Main */}
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col">
            <Card
              img="http://localhost/img/bg6.jpg"
              title="Lorem libero donec"
              details="Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
            justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
            elit non mi porta gravida at eget metus."
            />
          </div>
          <div className="col">
            <Card
              img="http://localhost/img/bg6.jpg"
              title="Lorem libero donec"
              details="Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
            justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
            elit non mi porta gravida at eget metus."
            />
          </div>
          <div className="col">
            <Card
              img="http://localhost/img/bg6.jpg"
              title="Lorem libero donec"
              details="Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
            justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
            elit non mi porta gravida at eget metus."
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer
        links={[
          ["SignUp", "/signup"],
          ["Login", "/login"],
        ]}
      />
    </div>
  );
}

export default Home;
