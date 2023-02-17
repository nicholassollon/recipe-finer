import React from "react";

function About() {
  function handleButton(linkedin) {
    window.open(linkedin);
  }

  return (
    <div className="About">
      <h1 className="welcome">Welcome!</h1>
      <div className="Images">
        <img
          className="pancakes"
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg"
          alt="Pancakes"
        />
        <img
          className="sandwich"
          src="https://www.westcentralfoodservice.com/wp-content/uploads/2019/04/5-food-trends-2019-no-title.jpg"
          alt="sandwich"
        />
        <img
          className="burger"
          src="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"
          alt="burger"
        />
        <img
          className="quesadilla"
          src="https://www.cscassets.com/recipes/wide_cknew/wide_24738.jpg"
          alt="quesadilla"
        />
      </div>
      <h2 className='h2'>
        Who doesn't love food?!? 
      </h2>
      
      <div>
        <h2 className='h22'>
          It's crazy to think that in this day and age, almost everyone knows 
          a person who has one or more food allergies. The goal of our application 
          is to create something that will allow users to search through a list of
          recipes, with the ability to filter out those allergens. This will
          allow people to create meals that are safe for the people they love. 
          Don't think our application stops there! As you browse through, you'll 
          notice that there is a form in which you can add additional recipes to 
          share with anyone :)Don't have food allergies, no problem, no need
          make any changes to your search. This "cookbook" is for everyone!
        </h2>
      </div>
      <body>
        <div class="container">
          <div
            class="btn"
            onClick={() =>
              handleButton("https://linkedin.com/in/isabella-persaud-588754235")
            }
          >
            <a>Isabella Persaud</a>
          </div>
          <div
            class="btn"
            onClick={() =>
              handleButton("https://linkedin.com/in/matthew-williams2023")
            }
          >
            <a>Matthew Williams</a>
          </div>
          <div
            class="btn"
            onClick={() =>
              handleButton("https://linkedin.com/in/nickita-danilovich")
            }
          >
            <a>Nickita Danilovich</a>
          </div>
          <div
            class="btn"
            onClick={() =>
              handleButton("https://linkedin.com/in/nicholassollon")
            }
          >
            <a>Nicholas Sollon</a>
          </div>
        </div>
      </body>
    </div>
  );
}

export default About;
