import React from "react";
import Subscribe from "../components/subscribe/Subscribe";

const About = () => {
  return (
    <div className="root">
     <Subscribe/>
      <section id="main" >
        <div className="container" style={{marginTop:"4rem"}}>
          <article id="main-col">
            <h1 className="page-title">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              varius auctor lacus nec feugiat. Phasellus sit amet ex ipsum.
              Praesent pharetra tincidunt tempor. Etiam velit eros, dapibus eget
              porta in, lacinia et magna. Nam eget eros non orci consectetur
              congue at ac augue. Proin eget arcu in enim feugiat ultricies.
              Curabitur maximus metus nec metus pretium viverra at et orci.
              Integer hendrerit ante ut placerat cursus.
            </p>
            <p className="dark" style={{marginBottom:"13.1rem"}}>
              Aliquam eget pharetra diam. Nulla placerat lorem at turpis tempor,
              vel ultrices dui tincidunt. Proin quis egestas lorem. Mauris
              vehicula lectus odio, sit amet dictum justo feugiat a. Praesent id
              dictum lacus. Sed ullamcorper id erat ut dictum. Fusce porttitor
              lorem sapien, in aliquet sapien convallis et. Donec nec mauris
              nulla. Curabitur cursus semper odio, et hendrerit ante. Nunc at
              cursus ante. Maecenas gravida ligula ut efficitur suscipit. Nulla
              id turpis varius, pretium nunc sed, fermentum sem. Sed lacinia
              nunc non interdum pellentesque.
            </p>
          </article>

          <aside id="sidebar">
            <div className="dark" style={{marginTop:"3.5rem"}}>
              <h3>What We Do</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                varius auctor lacus nec feugiat. Phasellus sit amet ex ipsum.
                Praesent pharetra tincidunt tempor. Etiam velit eros, dapibus
                eget porta in, lacinia et magna
              </p>
            </div>
          </aside>
        </div>
        <br />
      </section>
    </div>
  );
};

export default About;
