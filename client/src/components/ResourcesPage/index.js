import React from "react";

const divStyle = {
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all', // 'ms' is the only lowercase vendor prefix
        color: 'black',
        backgroundColor: 'white',
        opacity: 0.5
      };

var str = "All information presented above is subject to change at the discretion of Goldenface."
// var str = "This is a variable inside the component";
function Resources({ children }) {
  return (
    <div style={divStyle}>
      <h1>Resources for Study</h1>
      <br />
      <br />
      <h2>OFFICE SUPPLIES</h2>
      <p>
        While the company normally frowns on theft our supervisor has secretly
        given us the go-ahead to steal Peter’s pens as often as we can. If you
        need something other than pens than try stealing it from Edward, he
        always has the best stuff. If some of your own office supplies go
        missing that is most likely Carl, a former employee named Carl who has
        been living in the building’s ventilation ducts for years.
      </p>
      <p>
        Be careful when you sit down that there aren’t any pencils and pens
        stabbed into your office chair. The office is built on a Native American
        burial ground. We think the ghosts are trying to tell us something.
      </p>
      <p>
        The blood stains are under my desk belong to your predecessor Kevin.
      </p>
      <p>For more information see</p>
      <a href="https://www.dunder-mifflin/kevin-killed-himself">git config http.postBuffer 52428800
        https://www.dunder-mifflin/kevin-killed-himself
      </a>

      <br />
      <br />
      <h2>TEAMWORK</h2>
      <p>
        You may be wondering why you are never invited to join your coworkers
        for lunch? This is because we want you to feel isolated and terrible.
        But rest assured, when a new employee is hired will begin inviting you
        to join us so that we can make them feel isolated and terrible.
      </p>

      <p>
        Never be afraid to break down and cry when at work. Believe us, it’s a
        common occurrence around here.{" "}
      </p>

      <p>Cindy is always the best person to blame any a huge mistake on. </p>

      <p>
        When your boss complains about your co-workers always make sure you
        agree and offer supporting evidence.
      </p>

      <p>
        You can only ask your coworkers to help three times you before they
        start to deliberately sabotage your effort.{" "}
      </p>

      <p>
        Sam Brannon loves to discuss you the personal life of co-workers, expect
        him to inform everyone about any detail you share within 24 hours.{" "}
      </p>

      <p>For more information see </p>
      <a href="https://www.dunder-mifflin/sam-can-rot-in-hell">
        https://www.dunder-mifflin/sam-can-rot-in-hell
      </a>
      <br />
      <br />
      <h2>HOURS</h2>
      <p>
        The Work day officially ends at 5:00 pm, but if you go home then then
        you clearly you don’t care about this job. But if you stay longer than 2
        hours? Dude, everyone has gone home! If an employee works late and
        nobody knows it, do you think they will get a raise?
      </p>

      <p>For more information see </p>
      <a href="https://www.dunder-mifflin/numer2-on-company-time">
        {" "}
        https://www.dunder-mifflin/numer2-on-company-time
      </a>

      <br />
      <br />
      <h2>WORKING WITH YOUR SUPERVISOR</h2>
      <p>
        Raises are given out when you happen to catch the boss smuggling his
        mistress out of the office and he feels that paying you more will get
        you to keep your mouth shut.
      </p>

      <p>
        Your supervisor detests the color light blue and will be annoyed with
        anyone who displays that color.{" "}
      </p>

      <p>
        Codes for using the photocopier can be obtained by finding a coworker
        who is so far behind their work that they need you to do their copying
        for them.
      </p>

      <p>For more information see </p>
      <a href="https://www.dunder-mifflin/i-know-what-you-did">
        {" "}
        https://www.dunder-mifflin/i-know-what-you-did{" "}
      </a>

      <br />
      <br />
      <h2>MISCELLANEOUS</h2>
      <p>
        The restroom by the photo-copier is always out of soap and toilet paper.{" "}
      </p>

      <p>
        Richard licks all his food before packing his lunch just to make sure
        you don’t steal it.{" "}
      </p>

      <p>
        Don’t try to ride your bike in the office. Only the boss’s niece gets to
        do that.{" "}
      </p>

      <p>For more information see </p>
      <a href="https://www.dunder-mifflin/dont-steal-my-lunch">
        {" "}
        https://www.dunder-mifflin/dont-steal-my-lunch{" "}
      </a>

      <h2>{children}</h2>
      <p>{str}</p>
    </div>
  );
}

export default Resources;
