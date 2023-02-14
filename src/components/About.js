import React from "react"
import Button from './Button'

function About() {
  return (
    <div>
        <h1>Welcome!</h1>
        <div>
          <h2>
            Our application was built round being able to have a list of recipes
            and being able to add to that list.
          </h2>
        </div>
        <div>
          <h2>
            Today, almost everyone here knows or knows of someone that has some
            kind of or multiple food allergies. Our goal here is to create an
            application that will allow people to search through a list of
            recipes, with the ability to filter out those allergens. This will
            allow people to create meals that are safe for the people they love.
            We have also included a form that allow for the addition of recipes
            to share. Don't have food allergies, no problem, there is no need
            make any changes to your search. This "cookbook" is for everyone!
          </h2>
        </div>

      <div>
        <Button onClick name = {'Isabella Persaud'} linkedin={'https://linkedin.com/in/isabella-persaud-588754235'} />
      </div>

      <div>
         <Button onClick name = {'Matthew Williams'} linkedin={'https://linkedin.com/in/matthew-williams2023'} />
      </div>

      <div>
      <Button onClick name = {'Nickita Danilovich'} linkedin={'https://linkedin.com/in/nickita-danilovich-39b77b263'} />
      </div>

      <div>
      <Button onClick name = {'Nicholas Sollon'} linkedin={'https://linkedin.com/in/nicholassollon'} />
      </div>
    </div>
  )
}

export default About;
